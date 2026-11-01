import { CallToAction, PageHeading } from "@/components/site";
import { InsightLibrary } from "@/components/insight-library";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Insights and Sample Research", "Read practical research guides and review illustrative market, competitor, partner, and technology report formats from STRATFOLIO INTELLIGENCE.", "/insights");

export default function InsightsPage() {
  return (
    <main id="main-content">
      <PageHeading eyebrow="INSIGHTS / RESEARCH GUIDES" title="Research ideas for clearer business decisions." description="Explore practical editorial guides and illustrative research reports. Articles present general research approaches; sample reports demonstrate structure without claiming client findings or verified market evidence." />
      <section className="insights-section section-pad"><div className="section-label"><span>01</span> / ARTICLES AND SAMPLE REPORTS</div><InsightLibrary /></section>
      <CallToAction title="Need research shaped around your own question?" description="Discuss the decision, the evidence you need, and a suitable scope for an intelligence engagement." buttonText="Discuss a Project" />
    </main>
  );
}
