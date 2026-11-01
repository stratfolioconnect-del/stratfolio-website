# STRATFOLIO INTELLIGENCE

Business intelligence and strategic research consultancy website, built with the existing Next.js App Router, TypeScript, React, and Tailwind CSS setup.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The site can be explored without configuring the enquiry provider; submissions will be rejected with a clear configuration message and will not be stored.

## Enquiry delivery configuration

The server-side route at `/api/enquiries` validates and sanitises form data, applies a basic per-process rate limit and honeypot check, and can send a plain-text email through Resend. The confirmed recipient address is held in the central site configuration; provider credentials and a verified sender identity are not configured in this repository.

1. Create a Resend account and copy `.env.example` to `.env.local`.
2. Create a Resend API key and set it as `RESEND_API_KEY`; keep it server-side.
3. In Resend, add a domain you control and publish the exact DNS records shown in its dashboard. Wait until Resend marks the domain verified, then set `ENQUIRY_FROM_EMAIL` to a sender address on that verified domain. No STRATFOLIO domain is assumed or configured here.
4. Enquiries are addressed to the confirmed `stratfolio.intelligence@gmail.com` contact by default. Optionally override this using the server-only `ENQUIRY_TO_EMAIL`.
5. Set `NEXT_PUBLIC_SITE_URL` only after the actual website domain is configured; use HTTPS in production.
6. Restart the development server, submit a valid test enquiry, confirm the provider accepts it in its dashboard, and verify receipt in the target inbox.

Keep the provider key server-side. Do not rename it to a `NEXT_PUBLIC_` variable. The application does not persist enquiries; successful delivery is only reported after the email provider returns a successful response with a message ID.

The sender address must be verified by Resend. The business recipient is set in `src/lib/site-config.ts`; no domain or sender identity is assumed. To test delivery, configure the variables above, restart the server, submit a valid enquiry, and confirm the provider accepts the send and the message arrives at the configured inbox. Missing configuration produces a clear error; it never reports false success.

The included in-memory rate limiter is a basic single-process safeguard, not a distributed production rate-limiting service. Before deploying to multiple instances or serverless infrastructure, replace or augment it with a shared rate limiter and confirm that the hosting proxy supplies a trusted client address. Also configure provider-level abuse controls and review the provider's data-processing and retention terms.

## SEO and production configuration

`NEXT_PUBLIC_SITE_URL` is used for canonical URLs, the sitemap, robots metadata, and same-origin checks. Without it, canonical links are omitted and the sitemap contains no public URLs rather than inventing a production domain. HTTPS is required outside localhost.

Before launch, review the draft privacy and terms pages for the operating legal entity, applicable jurisdictions, email provider, data handling, and contact details. Do not describe the enquiry form as operational until a real provider and recipient have been configured and tested.

## Checks

```bash
npm run lint
npm run build
```

Four substantial hypothetical report structures and downloadable PDFs are provided under `/insights`. They are explicitly labelled as illustrative and contain no client findings or fabricated research sources. To regenerate the PDFs from the report content, run `python scripts/generate-sample-pdfs.py`.

The insights library also includes original editorial guides with working article pages, category filters, full-text search, reading navigation, and related-article links. No author or publication date is displayed where that information has not been verified. Privacy and terms pages contain explicit pre-launch placeholders and are marked `noindex` until the operator completes legal review.
