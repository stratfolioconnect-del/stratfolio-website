import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ActionLink, CallToAction, PageHeading } from "@/components/site";
import { pageMetadata } from "@/lib/metadata";
import { services } from "@/lib/site-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return { title: "Service not found" };
  return pageMetadata(service.title, service.description, `/services/${service.slug}`);
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <main id="main-content">
      <PageHeading eyebrow={`SERVICE ${service.number} / INTELLIGENCE`} title={service.title} description={service.summary}>
        <div className="hero-actions"><ActionLink href="/contact">Discuss this service <span aria-hidden="true">↗</span></ActionLink><ActionLink href="/services" variant="secondary">All services <span aria-hidden="true">←</span></ActionLink></div>
      </PageHeading>
      <section className="content-section section-pad service-detail-content">
        <div className="section-label"><span>01</span> / THE QUESTIONS</div>
        <div className="service-detail-grid">
          <div><h2>Start with the question—not a pre-packaged report.</h2><p>{service.description} The scope is shaped around your decision, available evidence, and intended use of the findings.</p></div>
          <div className="detail-list">{service.questions.map((question, index) => <article key={question}><span>0{index + 1}</span><p>{question}</p></article>)}</div>
        </div>
      </section>
      <section className="content-section section-pad service-output-section">
        <div className="section-label"><span>02</span> / POTENTIAL OUTPUTS</div><h2>Useful outputs, agreed in advance.</h2>
        <div className="output-grid">{service.outputs.map((output, index) => <article key={output}><span>0{index + 1}</span><h3>{output}</h3><p>Selected and tailored to the research question, information available, and engagement scope.</p></article>)}</div>
      </section>
      <section className="content-section section-pad"><div className="section-label"><span>03</span> / RESEARCH APPROACH</div><div className="service-detail-grid"><div><h2>Structured around your decision.</h2><p>{service.researchApproach}</p><Link className="text-link" href="/methodology">Explore the methodology <span aria-hidden="true">↗</span></Link></div><div className="detail-list">{service.useCases.map((useCase, index) => <article key={useCase}><span>0{index + 1}</span><p>{useCase}</p></article>)}</div></div></section>
      <section className="content-section section-pad">
        <div className="section-label"><span>04</span> / WHO BENEFITS</div>
        <h2>Relevant to teams facing questions like these.</h2>
        <div className="output-grid">{service.audiences.map((audience, index) => <article key={audience}><span>0{index + 1}</span><h3>{audience}</h3><p>Research scope is tailored to the organisation, decision, and available evidence.</p></article>)}</div>
      </section>
      <section className="content-section section-pad service-output-section"><div className="section-label"><span>05</span> / SCOPE AND LIMITATIONS</div><div className="service-detail-grid"><div><h2>Clear boundaries make findings more useful.</h2><p>Scope, access, evidence availability, and limitations are agreed and recorded for each engagement.</p></div><div className="scope-columns"><div><h3>Scope considerations</h3><ul>{service.scopeConsiderations.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h3>Limitations to consider</h3><ul>{service.limitations.map((item) => <li key={item}>{item}</li>)}</ul></div></div></div></section>
      <CallToAction title={`Explore what ${service.shortTitle} could clarify for your business.`} description="Share the decision you are working through. We can discuss whether this service and a focused research scope are appropriate." buttonText="Start a Project" />
    </main>
  );
}
