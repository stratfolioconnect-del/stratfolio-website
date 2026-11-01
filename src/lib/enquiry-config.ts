import { siteConfig } from "@/lib/site-config";

export type EnquiryMailConfig = {
  apiKey: string;
  from: string;
  to: string;
};

function validEmail(value: string) {
  return value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function getEnquiryMailConfig(): EnquiryMailConfig | null {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.ENQUIRY_FROM_EMAIL;
  const to = process.env.ENQUIRY_TO_EMAIL || siteConfig.email;
  if (!apiKey || !from || !validEmail(from) || !validEmail(to)) return null;
  return { apiKey, from, to };
}
