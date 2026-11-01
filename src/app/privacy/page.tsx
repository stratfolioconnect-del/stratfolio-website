import { PageHeading } from "@/components/site";
import { getEnquiryMailConfig } from "@/lib/enquiry-config";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  ...pageMetadata("Privacy Policy", "Read the STRATFOLIO INTELLIGENCE privacy information, including the current demonstration form status.", "/privacy"),
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  const deliveryConfigured = Boolean(getEnquiryMailConfig());

  return (
    <main id="main-content">
      <PageHeading eyebrow="PRIVACY" title="Privacy matters." description="This page describes the current demonstration website. It should be reviewed and completed for the operator, hosting environment, and applicable laws before launch." />
      <section className="legal-content section-pad">
        <p className="legal-updated">Draft — legal review date to be confirmed before production.</p>
        <h2>Operator and legal details</h2><p>Legal entity: [To be confirmed]. Jurisdiction and privacy contact details: [To be confirmed]. Complete these details and confirm applicable obligations before launch.</p>
        <h2>Information submitted through this website</h2><p>The project enquiry form may collect your name, business email, company, optional website, service of interest, project objective, optional budget range, preferred timeframe, and privacy consent. No enquiry is stored in an application database. {deliveryConfigured ? "Email delivery is currently configured. Submitted details are forwarded to the configured recipient through Resend." : "Email delivery is not currently configured, so the endpoint rejects submissions and does not forward or save them."} Do not submit sensitive or confidential information.</p>
        <h2>Third-party email processing and retention</h2><p>{deliveryConfigured ? "The configured email provider processes enquiry information to deliver messages. Confirm the provider, recipient, applicable privacy terms, and retention arrangements before production launch." : "If email delivery is enabled, the configured email provider will process enquiry information to deliver the message. Confirm the provider, recipient, applicable privacy terms, and retention arrangements before enabling the service."} Application database storage: none. Email provider and mailbox retention period: [To be confirmed by the operator].</p>
        <h2>Abuse prevention and technical information</h2><p>The enquiry endpoint temporarily uses a hashed connection address and request timestamps in server-process memory to enforce a basic rate limit. Only timestamps within the 15-minute rate window affect a request decision; stale entries are opportunistically pruned as the bounded in-memory map reaches capacity. These records are not written to a database, and their lifetime is also limited by server-process restarts. The effective client address depends on the production hosting proxy configuration. Hosting provider, other technical data collected, retention period, and applicable processor terms: [To be confirmed for the production deployment].</p>
        <h2>Cookies and analytics</h2><p>No analytics or marketing integrations are configured in this project. Any future cookies, analytics, or third-party services should be documented here and configured with appropriate privacy controls.</p>
        <h2>Your rights and contact</h2><p>Applicable rights, procedures, and data-protection representative requirements depend on the operator and jurisdictions served. Confirm these details and provide a contact address for privacy requests before production. Legal entity: [To be confirmed]. Privacy contact address: [To be confirmed]. Business email: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p>
        <p>This draft is general website information, not legal advice. It should be reviewed for the business and jurisdictions in which the website operates.</p>
      </section>
    </main>
  );
}
