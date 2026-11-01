import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "@/lib/metadata";
import { insightSamples } from "@/lib/insight-data";
import { Methodology } from "@/components/methodology";
import { services } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata(
  "Business Intelligence and Growth Strategy",
  "We transform market information, competitor activity, and business evidence into structured intelligence that helps organisations identify opportunities and make better-informed decisions.",
  "/",
);

const featuredResearch = insightSamples.filter((sample) =>
  ["Market", "Competition", "Partners"].includes(sample.category),
);

const challenges = [
  { number: "01", title: "Limited market visibility", description: "Clarify market boundaries, customer segments, and opportunity questions." },
  { number: "02", title: "Unclear competitor positioning", description: "Compare public offers, messaging, and observed differentiation." },
  { number: "03", title: "Uncertain partner fit", description: "Assess strategic alignment against explicit criteria and available evidence." },
  { number: "04", title: "Fragmented business information", description: "Bring relevant information together and make gaps and assumptions visible." },
  { number: "05", title: "Unfocused growth priorities", description: "Translate findings into a sequenced set of practical questions and next steps." },
];

const deliverables = [
  { number: "01", title: "Market maps", description: "Organised market boundaries, segments, and opportunity hypotheses." },
  { number: "02", title: "Competitor matrices", description: "Comparable observations with supporting source notes." },
  { number: "03", title: "Partner assessments", description: "Fit criteria, candidate profiles, and further diligence questions." },
  { number: "04", title: "Evidence and source logs", description: "Traceable references, review dates, and evidence limitations." },
  { number: "05", title: "Opportunity assessments", description: "Options and recommendations tied to the agreed business question." },
  { number: "06", title: "90-day action plans", description: "Adaptable priorities, dependencies, and review points." },
];

const audiences = [
  { title: "Small and growing businesses", description: "Build a more structured view of market choices and operating priorities." },
  { title: "Founders and CEOs", description: "Bring evidence and uncertainty into important strategic decisions." },
  { title: "B2B consultancies", description: "Understand competitive positioning, service categories, and market signals." },
  { title: "Marketing agencies", description: "Support client and internal planning with documented research." },
  { title: "SaaS and technology businesses", description: "Assess trends, alternatives, and market opportunities with care." },
  { title: "Businesses exploring new markets", description: "Frame market-entry questions before making larger commitments." },
];

const intelligencePrinciples = [
  { number: "01", title: "Evidence before assumptions", description: "Separate what sources show from what remains a hypothesis." },
  { number: "02", title: "Transparent research scope", description: "Agree the decision, boundaries, and intended use before work begins." },
  { number: "03", title: "Documented sources and limitations", description: "Make traceability, uncertainty, and information gaps visible." },
  { number: "04", title: "Clear recommendations", description: "Connect observations to priorities that fit the agreed question." },
  { number: "05", title: "Practical next steps", description: "Make it clear what may be tested, monitored, or explored next." },
];

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <span className="section-label-divider">/</span>
      <span>{children}</span>
    </div>
  );
}

export default function HomePage() {
  return (
    <main id="main-content" className="home-page">
      <section className="hero">
        <div className="hero-grid" aria-hidden="true" />

        <div className="hero-inner">
          <div className="hero-copy">
            <div className="eyebrow eyebrow-light">
              <span className="status-dot" />
              BUSINESS INTELLIGENCE &amp; GROWTH STRATEGY
            </div>

            <h1>
              See the market clearly.
              <br />
              <span>Make your next move with confidence.</span>
            </h1>

            <p className="hero-description">
              We transform market information, competitor activity, and
              business evidence into structured intelligence that helps
              organisations identify opportunities and make better-informed
              decisions.
            </p>

            <div className="hero-actions">
              <Link href="/contact" className="button button-blue">
                Discuss Your Business Challenge <span aria-hidden="true">↗</span>
              </Link>

              <Link href="/methodology" className="text-link text-link-light">
                Explore Our Methodology <span aria-hidden="true">↗</span>
              </Link>
            </div>

            <div className="hero-footnote">
              RESEARCH-LED <span>·</span> EVIDENCE-BASED{" "}
              <span>·</span> DECISION-FOCUSED
            </div>
          </div>

          <figure className="hero-visual">
            <Image
              src="/stratfolio-intelligence-hero.png"
              width={1133}
              height={767}
              sizes="(max-width: 700px) 88vw, (max-width: 1100px) 42vw, 520px"
              alt="STRATFOLIO illustrative research collage showing a market landscape report, competitor comparison, partner assessment, technology trends, and a strategic action plan."
              preload
            />
            <figcaption>
              Illustrative research and reporting visuals only — not client work
              or verified findings.
            </figcaption>
          </figure>
        </div>

        <div className="hero-bottom">
          <span>INDEPENDENT RESEARCH. PRACTICAL CLARITY.</span>
          <span>TURNING EVIDENCE INTO STRATEGIC ACTION.</span>
        </div>
      </section>

      <section className="challenge-section">
        <div className="section-container challenge-layout">
          <div className="challenge-intro">
            <SectionLabel number="01">THE BUSINESS CHALLENGE</SectionLabel>
            <h2 className="section-heading">
              Better decisions start
              <br />
              <span>with a clearer picture.</span>
            </h2>
            <p>Important choices are harder when market signals are scattered, comparisons are unclear, and priorities compete. We structure the available evidence around the decision in front of you.</p>
            <Link href="/about" className="inline-link">Learn about STRATFOLIO <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="challenge-list" aria-label="Business challenges our research can help clarify">
            {challenges.map((challenge) => (
              <article key={challenge.number}>
                <span>{challenge.number}</span>
                <div><h3>{challenge.title}</h3><p>{challenge.description}</p></div>
                <span className="challenge-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="section-container">
          <div className="section-heading-row">
            <div>
              <SectionLabel number="02">OUR CAPABILITIES</SectionLabel>
              <h2 className="section-heading">
                Intelligence built around
                <br />
                <span>your business questions.</span>
              </h2>
            </div>

            <Link href="/services" className="inline-link">
              Explore all services <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <Link
                href={`/services/${service.slug}`}
                key={service.number}
                className="service-card"
              >
                <div className="service-card-top">
                  <span className="service-number">{service.number}</span>
                  <span className="service-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <div className="service-card-bottom">
                  <span>Explore capability</span>
                  <span aria-hidden="true">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="method-section">
        <div className="section-container">
          <SectionLabel number="03">OUR METHODOLOGY</SectionLabel>

          <div className="method-intro">
            <h2 className="section-heading">
              From open questions
              <br />
              to <span>clearer next steps.</span>
            </h2>

            <p>
              A structured seven-stage approach connects research to the
              decisions it is intended to support.
            </p>
          </div>

          <Methodology compact />

          <Link href="/methodology" className="button button-outline-light">
            Explore Our Methodology <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="deliverables-section">
        <div className="section-container">
          <div className="section-heading-row">
            <div>
              <SectionLabel number="04">INTELLIGENCE DELIVERABLES</SectionLabel>
              <h2 className="section-heading">
                Research shaped into
                <br />
                <span>usable working documents.</span>
              </h2>
            </div>
            <p className="section-lead">The format is agreed around the business question, evidence available, and people who need to use the findings.</p>
          </div>
          <div className="deliverables-grid">
            {deliverables.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="audience-section">
        <div className="section-container">
          <div className="section-heading-row">
            <div>
              <SectionLabel number="05">WHO WE SUPPORT</SectionLabel>
              <h2 className="section-heading">
                Intelligence for teams
                <br />
                <span>making consequential choices.</span>
              </h2>
            </div>
            <p className="section-lead">Research can help when a decision matters, information is incomplete, and a clearer evidence base would be useful.</p>
          </div>
          <div className="audience-grid">
            {audiences.map((audience, index) => (
              <article key={audience.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{audience.title}</h3>
                <p>{audience.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="research-section">
        <div className="section-container">
          <div className="section-heading-row">
            <div>
              <SectionLabel number="06">ILLUSTRATIVE RESEARCH</SectionLabel>
              <h2 className="section-heading">
                Explore how a report
                <br />
                <span>can be structured.</span>
              </h2>
            </div>

            <Link href="/insights" className="inline-link">
              Explore research <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <p className="section-lead">
            These demonstration reports show possible structures for market,
            competitor, and strategic partner intelligence—not completed
            client projects or verified findings.
          </p>

          <div className="research-grid">
            {featuredResearch.map((sample, index) => (
              <article className="research-card" key={sample.slug}>
                <div className="report-preview">
                  <div className="report-top">
                    <span className="report-brand">S.</span>
                    <span>ILLUSTRATIVE SAMPLE</span>
                  </div>

                  <div className="report-title-lines">
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="report-chart">
                    <div className="chart-column chart-column-one" />
                    <div className="chart-column chart-column-two" />
                    <div className="chart-column chart-column-three" />
                    <div className="chart-column chart-column-four" />
                    <div className="chart-column chart-column-five" />
                    <div className="chart-column chart-column-six" />
                  </div>

                  <div className="report-footer-lines">
                    <span />
                    <span />
                  </div>
                </div>

                <div className="research-card-copy">
                  <span className="research-category">
                    {sample.category.toUpperCase()} / SAMPLE {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>{sample.title}</h3>
                  <p>{sample.description}</p>

                  <Link href={`/insights/${sample.slug}`} className="inline-link">
                    Read report <span aria-hidden="true">→</span>
                  </Link>
                  <a href={sample.download} download className="inline-link">Download PDF <span aria-hidden="true">↓</span></a>
                </div>
              </article>
            ))}
          </div>

          <p className="research-disclaimer">
            Each sample is explicitly illustrative. Source requirements and
            evidence standards are shown without inventing real findings.
          </p>
          <Link href="/insights" className="inline-link research-library-link">Browse the full sample library <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="credibility-section">
        <div className="section-container">
          <div className="section-heading-row">
            <div>
              <SectionLabel number="07">OUR APPROACH TO INTELLIGENCE</SectionLabel>
              <h2 className="section-heading">
                Rigour made
                <br />
                <span>clear and practical.</span>
              </h2>
            </div>
            <p className="section-lead">No invented client claims. We earn confidence through a transparent process, documented reasoning, and useful outputs.</p>
          </div>
          <div className="credibility-grid">
            {intelligencePrinciples.map((principle) => (
              <article key={principle.number}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="scenario-section" aria-labelledby="scenario-heading">
        <div className="section-container">
          <div className="section-heading-row scenario-heading-row">
            <div>
              <SectionLabel number="08">ILLUSTRATIVE RESEARCH QUESTIONS</SectionLabel>
              <h2 className="section-heading" id="scenario-heading">
                Questions better intelligence
                <br />
                <span>can help clarify.</span>
              </h2>
            </div>
            <p className="section-lead">Hypothetical research briefs show how an engagement can be framed around a business decision.</p>
          </div>
          <p className="scenario-disclaimer">These are fictional, illustrative research briefs—not client testimonials, direct quotations, verified engagements, or claims of results.</p>
          <div className="scenario-grid">
            <article className="scenario-card" data-index="01">
              <div className="scenario-card-top"><span>01</span><span>COMPETITIVE INTELLIGENCE</span></div>
              <h3>How do comparable consultancies describe and differentiate their services?</h3>
              <p>A hypothetical B2B consultancy could compare publicly described offers, audience language, and positioning to identify questions for further review. No real firms or market findings are represented.</p>
              <div className="scenario-card-bottom"><span>ILLUSTRATIVE CONTEXT</span><strong>B2B Consultancy</strong></div>
            </article>
            <article className="scenario-card" data-index="02">
              <div className="scenario-card-top"><span>02</span><span>MARKET INTELLIGENCE</span></div>
              <h3>What should be understood before exploring a new customer segment?</h3>
              <p>A hypothetical growing business could define the segment, review available evidence, and list uncertainties that may affect whether deeper research is warranted. No demand or market outcome is asserted.</p>
              <div className="scenario-card-bottom"><span>ILLUSTRATIVE CONTEXT</span><strong>Growing Business</strong></div>
            </article>
            <article className="scenario-card" data-index="03">
              <div className="scenario-card-top"><span>03</span><span>STRATEGIC GROWTH PLANNING</span></div>
              <h3>How might research findings inform an agency&apos;s next planning cycle?</h3>
              <p>A hypothetical marketing agency could connect a defined research question to prioritised options, dependencies, and review points. This example does not imply client work or achieved results.</p>
              <div className="scenario-card-bottom"><span>ILLUSTRATIVE CONTEXT</span><strong>Marketing Agency</strong></div>
            </article>
          </div>
          <div className="scenario-footer">
            <p>Genuine client feedback may be added only with approval of the exact wording and attribution.</p>
            <Link href="/contact" className="text-link">Discuss Your Business Challenge <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="pricing-section">
        <div className="section-container pricing-layout">
          <div className="pricing-copy">
            <SectionLabel number="09">ENGAGEMENT OPTIONS</SectionLabel>

            <h2 className="section-heading">
              Start with one
              <br />
              <span>important question.</span>
            </h2>

            <p>
              Begin with a focused research requirement. For broader
              intelligence projects, we agree the objectives, evidence
              requirements, deliverables, and timeline before work starts.
            </p>

            <Link href="/pricing" className="inline-link">
              Explore engagement options <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <article className="starter-card">
            <div className="starter-top">
              <span>01 / STARTER ENGAGEMENT</span>
              <span className="starter-badge">FOCUSED SCOPE</span>
            </div>

            <h3>Business Intelligence Starter</h3>

            <div className="starter-price">
              <span className="price-currency">US$</span>
              <span className="price-value">100</span>
              <span className="price-note">USD / indicative</span>
            </div>

            <p>
              One defined research question, focused public-source research,
              and a concise intelligence report.
            </p>

            <div className="starter-divider" />

            <ul className="starter-features">
              <li>Relevant comparison where appropriate</li>
              <li>Evidence references, source notes, and key limitations</li>
              <li>Three to five prioritised recommendations</li>
              <li>One consolidated clarification round</li>
            </ul>

            <p className="starter-scope">
              Scope agreed before work. Excludes exhaustive market sizing, extensive
              financial modelling, large-scale lead generation, and ongoing monitoring.
            </p>

            <Link href="/contact" className="button button-dark starter-button">
              Discuss the starter package <span aria-hidden="true">↗</span>
            </Link>
          </article>
        </div>
      </section>

      <section className="final-cta">
        <div className="final-cta-inner">
          <div>
            <SectionLabel number="10">LET&apos;S TALK</SectionLabel>

            <h2>
              Make your next business
              <br />
              <span>decision with greater clarity.</span>
            </h2>

            <p>
              Tell us about the question, challenge, or opportunity you need
              to understand. We can discuss a suitable research approach and
              scope.
            </p>

            <Link href="/contact" className="button button-white">
              Discuss Your Business Challenge{" "}
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="final-mark" aria-hidden="true">
            S<span>.</span>
          </div>
        </div>
      </section>

    </main>
  );
}