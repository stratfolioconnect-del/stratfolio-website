import { EnquiryForm } from "@/components/enquiry-form";
import { PageHeading } from "@/components/site";
import { getEnquiryMailConfig } from "@/lib/enquiry-config";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = pageMetadata("Contact", "Share your business intelligence question and outline a potential research engagement with STRATFOLIO INTELLIGENCE.", "/contact");

export default function ContactPage() {
  const deliveryConfigured = Boolean(getEnquiryMailConfig());

  return (
    <main id="main-content">
      <PageHeading eyebrow="PROJECT ENQUIRY" title="What do you need to understand?" description={deliveryConfigured ? "Share a little about your business and the decision in front of you. Enquiries are sent securely through the configured email service." : "Share a little about your business and the decision in front of you. The form has a server-side integration structure, but delivery is not active until an email provider is configured."} />
      <section className="contact-section section-pad">
        <div className="contact-heading"><div className="section-label"><span>01</span> / START WITH THE QUESTION</div><h2>Good research begins with a <span>clear brief.</span></h2><p>Use the form to outline what you are trying to understand, evaluate, or improve. {deliveryConfigured ? `Your enquiry will be forwarded to ${siteConfig.email} and will not be stored by this application.` : "While delivery is unconfigured, submissions are explicitly rejected and are not saved."}</p><div className="contact-note"><span className="status-dot" /> {deliveryConfigured ? "SECURE EMAIL DELIVERY IS CONFIGURED" : "EMAIL DELIVERY IS NOT YET CONFIGURED"}</div><div className="contact-options"><a className="button button-secondary" href={`mailto:${siteConfig.email}?subject=STRATFOLIO%20Project%20Enquiry`}>Email STRATFOLIO <span aria-hidden="true">↗</span></a><a className="contact-email-address" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn profile <span aria-hidden="true">↗</span></a></div></div>
        <EnquiryForm deliveryConfigured={deliveryConfigured} />
      </section>
    </main>
  );
}
