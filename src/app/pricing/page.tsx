import Link from "next/link";
import { CallToAction, PageHeading } from "@/components/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Pricing and Engagements",
  "Review the STRATFOLIO Intelligence Starter at US$100, focused custom studies, and ongoing intelligence support.",
  "/pricing",
);

const starterIncludes = [
  "One defined business research question",
  "Focused public-source research",
  "A concise written intelligence report",
  "A relevant market or competitor comparison, where appropriate",
  "Evidence references and source notes",
  "Key findings and research limitations",
  "Three to five prioritised recommendations",
  "One consolidated clarification round",
];

const starterExcludes = [
  "Exhaustive market sizing",
  "Extensive financial modelling",
  "Large-scale lead generation",
  "Ongoing monitoring",
];

const pricingFactors = [
  "Research question, scope, and intended decision",
  "Market and geographic boundaries",
  "Number and type of companies or organisations assessed",
  "Availability and quality of evidence",
  "Analysis depth and synthesis requirements",
  "Deliverables, revision rounds, and review requirements",
  "Expected delivery timing and dependencies, agreed before work begins",
  "Data access, supplied materials, and any handling requirements",
];

export default function PricingPage() {
  return (
    <main id="main-content">
      <PageHeading
        eyebrow="PRICING / ENGAGEMENTS"
        title="A clear scope. A considered fee."
        description="Choose a focused starting point or discuss a broader research requirement. Scope, evidence requirements, deliverables, and timing are agreed before work begins."
      >
        <div className="hero-actions">
          <Link className="button button-primary" href="/contact">Discuss Your Business Challenge <span aria-hidden="true">↗</span></Link>
        </div>
      </PageHeading>

      <section className="content-section section-pad pricing-options">
        <div className="section-label"><span>01</span> / ENGAGEMENT OPTIONS</div>
        <h2>Choose the level of support that fits the question.</h2>
        <div className="pricing-cards">
          <article className="pricing-card pricing-card-featured">
            <div className="pricing-card-kicker">01 / FIXED INDICATIVE PRICE</div>
            <h3>Business Intelligence Starter</h3>
            <p className="pricing-card-intro">A focused, fixed-scope research engagement for one agreed business question.</p>
            <div className="pricing-amount"><span>US$</span>100 <small>indicative</small></div>
            <p className="pricing-scope-note">Before accepting an order, we agree the research boundaries, number of companies, geographic scope, delivery timing, revisions, and any data-access requirements. The indicative price is not an online checkout or payment offer.</p>
            <h4>Included</h4>
            <ul>{starterIncludes.map((item) => <li key={item}>{item}</li>)}</ul>
            <h4>Not included</h4>
            <ul className="pricing-excludes">{starterExcludes.map((item) => <li key={item}>{item}</li>)}</ul>
            <Link href="/contact?engagement=starter" className="button button-primary pricing-cta">Discuss the Starter scope <span aria-hidden="true">↗</span></Link>
          </article>
          <article className="pricing-card">
            <div className="pricing-card-kicker">02 / SCOPE-BASED PRICING</div>
            <h3>Custom Intelligence Projects</h3>
            <p className="pricing-card-intro">A tailored scope for broader research or strategic planning needs.</p>
            <div className="pricing-custom">Custom quote <small>after scope assessment</small></div>
            <p>Suitable for broader market studies, competitor assessments, partner research, strategic planning, or ongoing monitoring and reporting agreed as a retainer.</p>
            <h4>Fee depends on</h4>
            <ul>{pricingFactors.slice(1, 6).map((factor) => <li key={factor}>{factor}</li>)}</ul>
            <Link href="/contact?engagement=custom" className="button button-secondary pricing-cta">Discuss a custom project <span aria-hidden="true">↗</span></Link>
          </article>
        </div>
      </section>

      <section className="content-section section-pad service-output-section">
        <div className="section-label"><span>02</span> / SCOPE AND FEES</div>
        <div className="service-detail-grid">
          <div><h2>Transparent scope before work starts.</h2><p>An enquiry starts a conversation; it does not commit either party. The research question, assumptions, included work, exclusions, fee, and timing are discussed before a proposal is prepared.</p></div>
          <div className="detail-list">{pricingFactors.map((factor, index) => <article key={factor}><span>{String(index + 1).padStart(2, "0")}</span><p>{factor}</p></article>)}</div>
        </div>
      </section>

      <section className="content-section section-pad">
        <div className="section-label"><span>03</span> / NEXT STEP</div>
        <h2>Submit a project enquiry. Discuss the brief. Review a proposal.</h2>
        <div className="content-section-body"><p>Use the project enquiry form to share your objective and preferred timing. We can clarify the requirement and, where appropriate, prepare a proposal. No online payment facility or payment provider is configured.</p><Link className="text-link" href="/contact">Submit a project enquiry <span aria-hidden="true">↗</span></Link></div>
      </section>

      <CallToAction title="Start with the business question." description="Tell us what you need to understand and we can discuss a suitable research scope." buttonText="Discuss Your Business Challenge" />
    </main>
  );
}
