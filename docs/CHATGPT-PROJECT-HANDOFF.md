# STRATFOLIO INTELLIGENCE — Project Handoff

This document is a current handoff for an AI assistant, developer, designer, or future project collaborator. It describes the existing website, implemented functionality, technical structure, known constraints, and remaining launch work.

## 1. Project summary

- **Project:** STRATFOLIO INTELLIGENCE website.
- **Purpose:** Present an independent business intelligence and strategic research consultancy, explain its services and methodology, publish illustrative research formats, outline engagements, and collect project enquiries.
- **Repository:** Existing project at `C:\Users\user\stratfolio-website`.
- **Framework:** Next.js App Router, React, TypeScript, Tailwind CSS 4.
- **Visual direction:** Premium editorial consultancy; deep navy, cobalt blue, white, and restrained neutral backgrounds; responsive grid layouts, strong typography, generous spacing, subtle borders and hover states.
- **Business contact:** `stratfolio.intelligence@gmail.com`.
- **LinkedIn:** <https://www.linkedin.com/in/mugundhankumar-c-50b263434>
- **Production domain:** Not purchased or configured. Do not invent a domain or publish localhost as the production URL.

## 2. Confirmed brand information

- **Business name:** STRATFOLIO INTELLIGENCE
- **Positioning:** Independent business intelligence and strategic research consultancy.
- **Brand statement:** “Turning Business Information Into Strategic Clarity.”
- **Homepage headline:** “Intelligence for the Decisions That Shape Your Business.”
- **Primary call to action:** “Discuss Your Business Challenge”
- **Secondary contact option:** “Email STRATFOLIO”
- **Business email:** `stratfolio.intelligence@gmail.com`
- **LinkedIn profile:** <https://www.linkedin.com/in/mugundhankumar-c-50b263434>

The central business configuration is [site-config.ts](../src/lib/site-config.ts). Use it instead of scattering business contact details through components. No business phone, office address, registration number, domain, or client endorsements have been confirmed.

The supplied blue stylised “S” logo mark is used in the shared header and footer. A separate homepage collage is used in the hero. Both assets are in `public/`:

- `public/stratfolio-symbol.png` — extracted logo mark, kept separate from the user-supplied source image.
- `public/stratfolio-intelligence-hero.png` — supplied illustrative research/strategy collage.

## 3. Website routes

### Main pages

| Route | Purpose |
|---|---|
| `/` | Homepage, business positioning, services, methodology overview, illustrative sample reports, research principles, illustrative client scenarios, Starter engagement, and contact CTA |
| `/about` | Consultancy positioning and approach |
| `/services` | Overview of all service areas |
| `/methodology` | Research methodology and interactive stages |
| `/insights` | Searchable/filterable illustrative report library |
| `/pricing` | Engagement options, scope and indicative pricing |
| `/contact` | Project enquiry form, email and LinkedIn contact options |
| `/privacy` | Draft privacy information; review against real provider, entity, jurisdictions, and retention practices before launch |
| `/terms` | Draft terms; review against actual entity, jurisdictions, and commercial practice before launch |
| Not found | Custom not-found page |

### Service detail pages

- `/services/market-intelligence`
- `/services/competitive-intelligence`
- `/services/strategic-partner-intelligence`
- `/services/business-performance-intelligence`
- `/services/ai-technology-intelligence`
- `/services/business-structure-analysis`
- `/services/strategic-growth-planning`

### Illustrative report detail pages

- `/insights/market-landscape`
- `/insights/competitor-comparison`
- `/insights/strategic-partner-assessment`
- `/insights/ai-technology-trend-scan`

PDF files are served under `/research-samples/` using matching slug filenames. Static routes are generated from shared service/report data where applicable.

### Search and metadata routes

- `/sitemap.xml` — generated only when `NEXT_PUBLIC_SITE_URL` is configured.
- `/robots.txt` — excludes `/api/`; sitemap reference is emitted when a valid site URL is configured.
- `/api/enquiries` — server-side project enquiry POST endpoint.

## 4. Homepage and user experience

The homepage includes:

1. A shared top utility bar showing the quoted brand statement, clickable business email, and secure external LinkedIn link.
2. Sticky primary navigation with responsive mobile menu and the “Discuss Your Business Challenge” CTA.
3. Hero headline, consultancy introduction, contact actions, and the supplied collage with an explicit illustrative-use caption.
4. Business challenge section covering limited market visibility, competitor positioning, partner fit, fragmented business information, and growth priorities.
5. Seven service cards linked to their matching pages.
6. Methodology overview and link to the detailed process.
7. Six intelligence deliverables and six intended audiences.
8. Four sample-research previews with links to report pages and PDFs.
9. **“Our Approach to Intelligence”** section covering evidence before assumptions, transparent scope, documented sources and limitations, clear recommendations, and practical next steps.
10. **“Questions Better Intelligence Can Help Clarify”** section. It contains three fictional, clearly labelled research briefs, not client testimonials:
   - Competitive Intelligence — Illustrative scenario: B2B Consultancy.
   - Market Intelligence — Illustrative scenario: Growing Business.
   - Strategic Growth Planning — Illustrative scenario: Marketing Agency.
11. Indicative Business Intelligence Starter offer and pricing link.
12. Final project-enquiry CTA.
13. Shared footer with site links, all service links, clickable email and LinkedIn, privacy/terms, and dynamic copyright year.

The homepage uses an editorial navy-and-white visual system with restrained cobalt accents and report-style cards. Challenge, deliverable, audience, methodology, research, and credibility sections reflow at tablet and mobile breakpoints. The hypothetical research briefs are written as questions and contain no invented client quotes or outcomes.

## 5. Business services

The shared service catalogue is [site-data.ts](../src/lib/site-data.ts). It describes service summaries, use cases, questions, research approach, potential outputs, scope factors, and limitations.

1. **Market Intelligence** — market definition, segmentation, demand context, opportunity assessment.
2. **Competitive Intelligence** — competitor positioning, offers, messaging, market presence, comparisons, possible gaps.
3. **Strategic Partner Intelligence** — candidate research, fit criteria, collaboration opportunities and constraints.
4. **Business Performance Intelligence** — organisation of available information and metrics into useful observations and recommendations.
5. **AI and Technology Trend Intelligence** — relevant technology developments and potential business implications.
6. **Business Structure and Operations Analysis** — review available information about structure, processes, and improvement areas.
7. **Strategic Growth Planning** — translating research into priorities and a practical 90-day action plan.

All work is scoped to the agreed question and available evidence. Research does not imply guaranteed demand, commercial performance, partnerships, or outcomes.

## 6. Pricing and commercial boundaries

The pricing page is [pricing/page.tsx](../src/app/pricing/page.tsx).

### Business Intelligence Starter

- **Indicative price:** US$100.
- One defined business research question.
- Focused public-source research.
- Concise written intelligence report.
- Relevant market or competitor comparison where appropriate.
- Evidence references and source notes.
- Key findings and limitations.
- Three to five prioritised recommendations.
- One consolidated clarification round.
- Scope and suitability agreed before work begins.
- Excludes exhaustive market sizing, extensive financial modelling, large-scale lead generation, and ongoing monitoring.

### Other engagement options

- **Focused Intelligence Study:** Custom quote after scope assessment.
- **Ongoing Intelligence Support:** Custom retainer based on agreed monitoring and reporting requirements.

There is **no online payment facility or payment provider**. Pricing CTAs lead to the contact form and do not imply checkout or payment.

## 7. Research samples and testimonial policy

The report source data is [research-samples.json](../src/data/research-samples.json), with shared report sections in [sample-report-framework.json](../src/data/sample-report-framework.json). The library is mapped in [insight-data.ts](../src/lib/insight-data.ts), rendered in [insight-library.tsx](../src/components/insight-library.tsx), and displayed in the dynamic report route.

Four substantial, multi-page PDF demonstrations are available:

1. Market Landscape.
2. Competitor Comparison.
3. Strategic Partner Assessment.
4. AI and Technology Trend Scan.

The PDFs are generated by [generate-sample-pdfs.py](../scripts/generate-sample-pdfs.py) using Python’s standard library. Regenerate them from the project root:

```powershell
python scripts\generate-sample-pdfs.py
```

All reports and homepage scenarios are explicitly illustrative/hypothetical. They are not actual client work, verified findings, direct client quotes, endorsements, partnerships, or performance claims. The report framework includes an executive summary, scope and methodology, findings and analysis, evidence/source notes, limitations, recommendations, and proposed next steps. **Do not invent testimonials.** [testimonials.ts](../src/data/testimonials.ts) provides an empty typed structure for testimonials only after approval and permission for the exact text and attribution.

The insights listing also contains four original editorial guides in [insight-articles.ts](../src/data/insight-articles.ts). Their pages have category labels, summaries, section navigation, and related article links. No author or publication date is shown because no verified attribution or publication dates are available. Search and category filters cover both articles and illustrative report previews.

## 8. Contact form and email delivery

The contact form is [enquiry-form.tsx](../src/components/enquiry-form.tsx); the API is [route.ts](../src/app/api/enquiries/route.ts); provider settings are resolved in [enquiry-config.ts](../src/lib/enquiry-config.ts).

### Form fields

- Name (required)
- Work email (required)
- Company (required)
- Website (optional)
- Service of interest (required)
- Budget range (optional)
- Project objective (required)
- Preferred timeframe (optional)
- Privacy consent (required)

The client performs browser validation, displays field-associated validation errors, and reports accessible loading, success, and failure states. When delivery is unconfigured, it provides a direct `mailto:` fallback to the confirmed business email. The server validates and sanitises the payload, checks request origin and body size, uses a honeypot field, applies a basic rate limit, and sends through Resend when correctly configured. Submissions are not persisted by the app. Delivery success is returned only when Resend accepts a response containing a message ID. Missing settings return an explicit error and do not claim that mail was sent.

**Current state:** Email delivery is not configured or verified in this repository. A successful real-world delivery has not been tested.

### Resend setup required

1. Create a Resend account.
2. Copy `.env.example` to `.env.local`.
3. Set `RESEND_API_KEY` to a server-side Resend API key. Never expose it with a `NEXT_PUBLIC_` prefix.
4. Add a domain you control to Resend and publish the exact DNS verification records Resend provides.
5. After Resend verifies the sender domain, set `ENQUIRY_FROM_EMAIL` to an approved address on that verified domain.
6. The recipient defaults to the confirmed `stratfolio.intelligence@gmail.com`, set in `site-config.ts`. `ENQUIRY_TO_EMAIL` is an optional server-side override.
7. Configure `NEXT_PUBLIC_SITE_URL` only after a real site domain is purchased/configured. Use HTTPS in production.
8. Restart the app, submit a valid test enquiry, inspect the Resend dashboard, and verify that the message actually arrives at the recipient inbox.

No domain or sender address should be invented. Do not describe the form as operational until credentials and sender verification are complete and delivery has been tested.

### Email and abuse-protection limitations

- The rate limiter is in-memory, per process, and bounded to 5,000 hashed address keys; stale entries are pruned opportunistically and oldest entries may be evicted. It is not distributed. Replace or augment it with a shared store-backed limiter for multi-instance/serverless production.
- Rate limiting uses forwarded client-address headers. Confirm trusted proxy configuration before production.
- Current protection includes origin validation, size limits, server-side field validation, sanitisation, a honeypot, and request throttling.
- No durable enquiry database or CRM is configured.
- There is no separate idempotency key or durable duplicate-submission registry. If strict duplicate prevention is a launch requirement, implement it with a persistent/shared backend and an explicit retention policy.
- Configure provider abuse controls and review Resend’s data-processing, security, and retention terms.

## 9. SEO, accessibility, and responsive behavior

- Page-specific metadata exists on the main pages; root metadata provides defaults and social-sharing descriptions.
- Editorial article metadata uses Open Graph article type. Verified publication dates and authorship are omitted; the draft privacy and terms pages have `noindex` and are excluded from the sitemap until legal details are confirmed.
- Canonicals and sitemap URLs depend on a real `NEXT_PUBLIC_SITE_URL`; none is currently set.
- The custom 404, robots route, and sitemap route are implemented.
- Semantic page sections, descriptive image text, accessible form labels, required-field handling, keyboard-visible focus styles, keyboard-operated methodology controls, skip link, and mobile navigation are present.
- The mobile menu supports open/close state and Escape-key dismissal.
- Layouts are responsive and support the project’s existing reduced-motion preferences.
- The shared copyright-year component is hydration-safe (does not render a changing server/client date directly during prerender).
- Verify all content/contrast and privacy/legal copy against actual operating practices before public launch.

## 10. Code map

| Path | Responsibility |
|---|---|
| `src/app/page.tsx` | Homepage content and homepage metadata |
| `src/app/layout.tsx` | Root metadata, fonts, shared header/footer and global stylesheet |
| `src/app/globals.css` | Global design system and responsive component/page styling |
| `src/app/services/` | Services overview and dynamic service detail route |
| `src/app/insights/` | Searchable research-guide and sample-report library with dynamic article/report pages |
| `src/app/api/enquiries/route.ts` | Enquiry validation, protections, Resend request |
| `src/app/contact/` | Contact page |
| `src/app/pricing/` | Commercial offers and scope detail |
| `src/components/header.tsx` | Shared utility bar, primary navigation, responsive menu |
| `src/components/footer.tsx` | Shared footer and contact links |
| `src/components/enquiry-form.tsx` | Client form state, validation and API submission |
| `src/components/methodology.tsx` | Interactive methodology-stage selector |
| `src/components/insight-library.tsx` | Search and category filters |
| `src/components/site.tsx` | Shared page heading/CTA/site primitives |
| `src/components/copyright-year.tsx` | Hydration-safe copyright year |
| `src/lib/site-config.ts` | Confirmed brand, email, LinkedIn, positioning |
| `src/lib/site-data.ts` | Service and methodology content |
| `src/lib/insight-data.ts` | Typed report mapping and PDF paths |
| `src/lib/enquiry-config.ts` | Server-side email provider settings |
| `src/lib/metadata.ts` | Page metadata helper |
| `src/data/research-samples.json` | Detailed illustrative report content |
| `src/data/insight-articles.ts` | Editorial article content, categories, and related-article relationships |
| `public/stratfolio-symbol.png` | Brand symbol |
| `public/stratfolio-intelligence-hero.png` | Supplied homepage collage |
| `public/research-samples/` | Generated sample PDF files |
| `scripts/generate-sample-pdfs.py` | PDF generation script |
| `.env.example` | Names of optional production configuration variables |
| `README.md` | Setup, email configuration and operational caveats |

## 11. Local development and verification

From the project root:

```powershell
npm install
npm run dev
```

Available package scripts:

```powershell
npm run lint
npm run build
npm run start
```

The latest UI implementation was checked with lint, a production build, and `git diff --check`. Browser checks also verified the homepage scenario cards render and that the responsive layout does not overflow horizontally. Earlier route smoke checks covered main pages, service pages, report pages, PDF downloads, and the unconfigured API response. Run these checks again after future code changes.

## 12. Launch checklist

- [ ] Purchase/configure the real production domain and set `NEXT_PUBLIC_SITE_URL`.
- [ ] Configure Resend and verify a sender domain/address with the provider.
- [ ] Add secrets only to the deployment environment, never source control.
- [ ] Test enquiry delivery end to end and verify receipt at the configured inbox.
- [ ] Configure a shared production rate limiter if deploying on multiple processes/serverless.
- [ ] Confirm trusted proxy/client-IP handling and provider abuse controls.
- [ ] Review privacy and terms for the actual legal entity, jurisdiction, provider, data handling, and retention policy.
- [ ] Confirm the Starter scope, price, currency, terms, and custom quote process are commercially approved.
- [ ] Obtain explicit client permission before adding any genuine testimonials or case studies.
- [ ] Check the deployment preview on desktop, tablet, mobile, and keyboard-only navigation.

## 13. Copy-ready prompt for the next ChatGPT session

> Continue work in the existing STRATFOLIO INTELLIGENCE project at `C:\Users\user\stratfolio-website`. Read `docs/CHATGPT-PROJECT-HANDOFF.md` and `README.md` first, then inspect current files before making changes. Preserve the existing Next.js App Router, React, TypeScript, and Tailwind 4 structure. Do not create a replacement project. Keep the confirmed brand statement, email, LinkedIn, US$100 indicative Starter offer, scope boundaries, and illustrative-only status of sample reports/scenarios consistent. Never invent client testimonials, results, domains, credentials, phone numbers, or legal details. Email delivery is not configured until Resend credentials and a verified sender identity are supplied; never claim an enquiry was sent otherwise. Make requested changes directly, keep them focused, run `npm run lint` and `npm run build`, and report any remaining launch blockers.
