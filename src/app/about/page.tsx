import Link from "next/link";
import { CallToAction, PageHeading } from "@/components/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("About", "Learn about STRATFOLIO INTELLIGENCE and its evidence-led approach to market research, strategic analysis, and business clarity.", "/about");

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageHeading eyebrow="ABOUT STRATFOLIO" title="Better decisions begin with better intelligence." description="STRATFOLIO INTELLIGENCE is positioned to help businesses turn scattered information into a clearer basis for action." />
      <section className="content-section section-pad"><div className="section-label"><span>01</span> / OUR PURPOSE</div><div className="service-detail-grid"><div><h2>Clarity before commitment.</h2></div><div className="content-section-body"><p>Markets move quickly. New competitors, new technologies, and changing customer needs can make it difficult to see which information deserves attention. We provide structured research and evidence-led analysis to help frame those questions more clearly.</p><p>Our work is designed to make the reasoning visible: what was examined, what the evidence suggests, what remains uncertain, and what practical options may merit consideration.</p></div></div></section>
      <section className="content-section section-pad service-output-section"><div className="section-label"><span>02</span> / PRINCIPLES</div><h2>How we aim to work.</h2><div className="output-grid"><article><span>01</span><h3>Purposeful research</h3><p>Start from a business question and an agreed definition of useful evidence.</p></article><article><span>02</span><h3>Transparent evidence</h3><p>Document sources and distinguish evidence from interpretation and assumptions.</p></article><article><span>03</span><h3>Practical direction</h3><p>Shape outputs to support real decisions, with uncertainty stated plainly.</p></article></div></section>
      <section className="content-section section-pad"><div className="section-label"><span>03</span> / WHAT WE DO</div><h2>Independent business intelligence, shaped around your context.</h2><div className="content-section-body"><p>Services span market and competitive intelligence, partner research, business performance, technology trends, business structure, and strategic growth planning.</p><Link className="text-link" href="/services">Explore all services <span aria-hidden="true">↗</span></Link></div></section>
      <CallToAction title="Have a decision you want to examine more clearly?" description="Start a conversation about the question, context, and evidence that could help." buttonText="Discuss Your Business Challenge" />
    </main>
  );
}
