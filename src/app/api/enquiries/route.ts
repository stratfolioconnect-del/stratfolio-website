import { createHash } from "node:crypto";
import { getEnquiryMailConfig } from "@/lib/enquiry-config";
import { services } from "@/lib/site-data";

const requestLimit = 12_000;
const rateWindowMs = 15 * 60 * 1000;
const rateLimit = 5;
const maxRateLimitKeys = 5_000;
const recentRequests = new Map<string, number[]>();
const budgetOptions = new Set(["Prefer to discuss", "Below 2,500", "2,500–5,000", "5,000–10,000", "10,000+"]);
const timeframeOptions = new Set(["As soon as practical", "Within 2–4 weeks", "Within 1–3 months", "Flexible / not decided", "Prefer to discuss"]);

type Enquiry = {
  name: string;
  email: string;
  company: string;
  website: string;
  service: string;
  objective: string;
  budget: string;
  timeframe: string;
  privacyConsent: boolean;
  websiteConfirm: string;
};

function jsonResponse(body: { ok: false; message: string }, status: number, headers?: HeadersInit) {
  return Response.json(body, { status, headers });
}

function cleanText(value: unknown): string | null {
  if (typeof value !== "string") return null;
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .replace(/\r\n?/g, "\n")
    .trim();
}

function validEmail(value: string) {
  return value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validHttpUrl(value: string) {
  if (!value) return true;
  try {
    const url = new URL(value);
    return (url.protocol === "https:" || url.protocol === "http:") && value.length <= 2048;
  } catch {
    return false;
  }
}

function isEnquiry(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

async function readBodyWithinLimit(request: Request, limit: number) {
  if (!request.body) return { body: "", tooLarge: false, failed: false };

  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let totalBytes = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      totalBytes += value.byteLength;
      if (totalBytes > limit) {
        await reader.cancel();
        return { body: "", tooLarge: true, failed: false };
      }
      chunks.push(value);
    }

    const bytes = new Uint8Array(totalBytes);
    let offset = 0;
    for (const chunk of chunks) {
      bytes.set(chunk, offset);
      offset += chunk.byteLength;
    }
    return { body: new TextDecoder("utf-8", { fatal: true }).decode(bytes), tooLarge: false, failed: false };
  } catch {
    return { body: "", tooLarge: false, failed: true };
  }
}

function consumeRateLimit(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const address = forwardedFor?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
  const key = createHash("sha256").update(address).digest("hex");
  const now = Date.now();
  const active = (recentRequests.get(key) ?? []).filter((time) => now - time < rateWindowMs);

  if (active.length >= rateLimit) {
    recentRequests.set(key, active);
    return Math.max(1, Math.ceil((rateWindowMs - (now - active[0])) / 1000));
  }

  active.push(now);
  recentRequests.set(key, active);
  if (recentRequests.size > maxRateLimitKeys) {
    for (const [storedKey, times] of recentRequests) {
      if (times.every((time) => now - time >= rateWindowMs)) recentRequests.delete(storedKey);
    }
    while (recentRequests.size > maxRateLimitKeys) {
      const oldestKey = recentRequests.keys().next().value;
      if (oldestKey === undefined) break;
      recentRequests.delete(oldestKey);
    }
  }
  return 0;
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin) {
    const requestUrl = new URL(request.url);
    const allowedOrigins = new Set([requestUrl.origin]);
    const requestHost = request.headers.get("host");
    const forwardedProtocol = request.headers.get("x-forwarded-proto")?.split(",")[0]?.trim();
    if (requestHost) {
      const protocol = forwardedProtocol === "https" || forwardedProtocol === "http"
        ? forwardedProtocol
        : requestUrl.protocol.replace(":", "");
      try {
        allowedOrigins.add(new URL(`${protocol}://${requestHost}`).origin);
      } catch {
        return jsonResponse({ ok: false, message: "This enquiry could not be accepted from this origin." }, 403);
      }
    }
    if (process.env.NEXT_PUBLIC_SITE_URL) {
      try {
        allowedOrigins.add(new URL(process.env.NEXT_PUBLIC_SITE_URL).origin);
      } catch {
        return jsonResponse({ ok: false, message: "The enquiry service is not configured correctly." }, 503);
      }
    }
    if (!allowedOrigins.has(origin)) {
      return jsonResponse({ ok: false, message: "This enquiry could not be accepted from this origin." }, 403);
    }
  } else {
    return jsonResponse({ ok: false, message: "This enquiry could not be accepted from this origin." }, 403);
  }

  if (!request.headers.get("content-type")?.toLowerCase().includes("application/json")) {
    return jsonResponse({ ok: false, message: "Submit the enquiry using the website form." }, 415);
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > requestLimit) {
    return jsonResponse({ ok: false, message: "The enquiry is larger than the allowed size." }, 413);
  }

  const retryAfter = consumeRateLimit(request);
  if (retryAfter) {
    return jsonResponse(
      { ok: false, message: "Too many enquiries were submitted from this connection. Please try again later." },
      429,
      { "Retry-After": String(retryAfter) },
    );
  }

  const bodyResult = await readBodyWithinLimit(request, requestLimit);
  if (bodyResult.failed) {
    return jsonResponse({ ok: false, message: "The enquiry could not be read. Please try again." }, 400);
  }
  if (bodyResult.tooLarge) {
    return jsonResponse({ ok: false, message: "The enquiry is larger than the allowed size." }, 413);
  }

  let payload: unknown;
  try {
    payload = JSON.parse(bodyResult.body);
  } catch {
    return jsonResponse({ ok: false, message: "The enquiry format was not valid." }, 400);
  }
  if (!isEnquiry(payload)) {
    return jsonResponse({ ok: false, message: "The enquiry format was not valid." }, 400);
  }

  const fields: Enquiry = {
    name: cleanText(payload.name) ?? "",
    email: cleanText(payload.email) ?? "",
    company: cleanText(payload.company) ?? "",
    website: cleanText(payload.website) ?? "",
    service: cleanText(payload.service) ?? "",
    objective: cleanText(payload.objective) ?? "",
    budget: cleanText(payload.budget) ?? "",
    timeframe: cleanText(payload.timeframe) ?? "",
    privacyConsent: payload.privacyConsent === true,
    websiteConfirm: cleanText(payload.websiteConfirm) ?? "",
  };
  const allowedServices = new Set([...services.map((service) => service.title), "Not sure yet"]);

  if (fields.websiteConfirm) {
    return jsonResponse({ ok: false, message: "The enquiry could not be accepted. Please review the form and try again." }, 400);
  }
  if (
    fields.name.length < 2 || fields.name.length > 120 ||
    !validEmail(fields.email) ||
    fields.company.length < 2 || fields.company.length > 160 ||
    !validHttpUrl(fields.website) ||
    !allowedServices.has(fields.service) ||
    fields.objective.length < 20 || fields.objective.length > 4_000 ||
    (fields.budget !== "" && !budgetOptions.has(fields.budget)) ||
    (fields.timeframe !== "" && !timeframeOptions.has(fields.timeframe)) ||
    !fields.privacyConsent
  ) {
    return jsonResponse({ ok: false, message: "Please review the required fields and correct any invalid values." }, 400);
  }

  const mailConfig = getEnquiryMailConfig();
  if (!mailConfig) {
    return jsonResponse({
      ok: false,
      message: "Enquiry delivery is not configured yet. Nothing was sent or saved. Please try again after the website owner configures the service.",
    }, 503);
  }

  const message = [
    "A new project enquiry was submitted through the STRATFOLIO INTELLIGENCE website.",
    "",
    `Name: ${fields.name}`,
    `Work email: ${fields.email}`,
    `Company: ${fields.company}`,
    `Website: ${fields.website || "Not provided"}`,
    `Service: ${fields.service}`,
    `Budget: ${fields.budget || "Not provided"}`,
    `Preferred timeframe: ${fields.timeframe || "Not provided"}`,
    "",
    "Project objective:",
    fields.objective,
  ].join("\n");

  let providerResponse: Response;
  try {
    providerResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${mailConfig.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: mailConfig.from,
        to: [mailConfig.to],
        reply_to: fields.email,
        subject: "New website project enquiry",
        text: message,
      }),
      signal: AbortSignal.timeout(10_000),
      cache: "no-store",
    });
  } catch (error) {
    console.error("Enquiry email provider request failed.", error instanceof Error ? error.message : "Unknown network error");
    return jsonResponse({ ok: false, message: "The enquiry could not be delivered right now. Please try again later." }, 502);
  }

  let providerResult: unknown = null;
  try {
    providerResult = await providerResponse.json();
  } catch {
    providerResult = null;
  }
  if (!providerResponse.ok || !isEnquiry(providerResult) || typeof providerResult.id !== "string") {
    console.error("Enquiry email provider rejected the request.", { status: providerResponse.status });
    return jsonResponse({ ok: false, message: "The enquiry could not be delivered right now. Please try again later." }, 502);
  }

  return Response.json({ ok: true, message: "Your enquiry was sent successfully. We will review the details and follow up." });
}
