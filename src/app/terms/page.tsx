import { PageHeading } from "@/components/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = {
  ...pageMetadata("Terms of Service", "Review the draft terms for using the STRATFOLIO INTELLIGENCE website and its illustrative materials.", "/terms"),
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <main id="main-content">
      <PageHeading eyebrow="TERMS OF SERVICE" title="Website terms." description="These draft terms describe general website use and should be reviewed and adapted to the operating business before publication." />
      <section className="legal-content section-pad">
        <p className="legal-updated">Draft — legal review date to be confirmed before production.</p>
        <h2>Website information</h2><p>Website content is provided for general information. It is not professional, legal, financial, or investment advice and should not be relied on as a substitute for advice suited to your circumstances.</p>
        <h2>Illustrative materials</h2><p>Examples and sample research formats are illustrative only. They are not client work, verified findings, forecasts, or guarantees of business results.</p>
        <h2>Research engagements</h2><p>Any professional services engagement, deliverables, fees, timetable, and responsibilities must be set out in a separate written agreement. No engagement is formed by using this website or submitting a project enquiry.</p>
        <h2>Website availability and intellectual property</h2><p>Reasonable care is taken with website content, but no guarantee is made that the website will always be available or free of errors. Unless otherwise stated, website content is owned by or used by permission of STRATFOLIO INTELLIGENCE. Contact the business before reproducing material.</p>
        <h2>Operator and governing law</h2><p>Website operator and legal entity: [To be confirmed]. Business contact address: [To be confirmed]. Jurisdiction, governing law, and dispute process: [To be confirmed after legal review]. Complete these fields and obtain appropriate review before production.</p>
      </section>
    </main>
  );
}
