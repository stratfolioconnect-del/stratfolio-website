import { CallToAction, PageHeading, ServiceCard } from "@/components/site";
import { pageMetadata } from "@/lib/metadata";
import { services } from "@/lib/site-data";

export const metadata = pageMetadata("Business Intelligence Services", "Explore market, competitor, partner, performance, technology, operations, and growth intelligence services.", "/services");

export default function ServicesPage() {
  return (
    <main id="main-content">
      <PageHeading eyebrow="RESEARCH FOR BETTER DECISIONS" title="Intelligence for the questions that matter." description="Choose a focused area or combine capabilities around a specific business decision. Every engagement begins with a defined question and agreed scope." />
      <section className="services-section section-pad service-directory"><div className="services-grid">{services.map((service) => <ServiceCard key={service.slug} service={service} />)}</div></section>
      <CallToAction title="Start with the decision in front of you." description="We can help determine which research approach is useful, what evidence is available, and what a practical scope could include." buttonText="Discuss a Project" />
    </main>
  );
}
