import { CallToAction, PageHeading } from "@/components/site";
import { Methodology } from "@/components/methodology";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Methodology", "Explore the STRATFOLIO research process: scan, test evidence, analyse, translate, focus, observe, and learn.", "/methodology");

export default function MethodologyPage() {
  return (
    <main id="main-content">
      <PageHeading eyebrow="A STRUCTURED RESEARCH PROCESS" title="From open questions to clearer next steps." description="A flexible seven-stage approach keeps research connected to a decision, makes evidence limitations visible, and focuses attention on what can be done next." />
      <section className="method-section section-pad methodology-full"><div className="section-label"><span>01</span> / THE FRAMEWORK</div><h2>SCAN → TEST EVIDENCE → ANALYSE → TRANSLATE → FOCUS → OBSERVE → LEARN.</h2><Methodology /></section>
      <section className="content-section section-pad"><div className="section-label"><span>02</span> / WHAT TO EXPECT</div><h2>Clear scope. Traceable reasoning. Useful outputs.</h2><div className="output-grid"><article><span>01</span><h3>Agree the brief</h3><p>Align on the decision, scope, constraints, timing, and intended audience.</p></article><article><span>02</span><h3>Review evidence</h3><p>Research and analysis are documented with sources, assumptions, and limitations.</p></article><article><span>03</span><h3>Translate findings</h3><p>Present implications and recommendations in an accessible, decision-oriented format.</p></article></div></section>
      <section className="content-section section-pad service-output-section">
        <div className="section-label"><span>03</span> / AN ADAPTABLE 90-DAY FRAMEWORK</div>
        <h2>A practical planning horizon—not a promise of results.</h2>
        <p className="framework-intro">Where useful, recommendations can be organised into an initial 90-day sequence. The pace, activities, and review points depend on the business context, available resources, and decisions to be made.</p>
        <div className="output-grid framework-grid">
          <article><span>DAYS 01—30</span><h3>Diagnose and prioritise</h3><p>Clarify context, review evidence, surface assumptions, and agree which questions deserve attention first.</p></article>
          <article><span>DAYS 31—60</span><h3>Test and validate</h3><p>Explore priority hypotheses, gather proportionate evidence, and review what may need to change.</p></article>
          <article><span>DAYS 61—90</span><h3>Optimise and plan</h3><p>Refine priorities, document learning, and define practical next actions and review points.</p></article>
        </div>
        <p className="framework-disclaimer">This framework is adaptable and does not guarantee growth, demand, or other business outcomes.</p>
      </section>
      <CallToAction title="Put a clear process behind your next decision." description="Tell us what you need to understand and we can outline a suitable research approach." buttonText="Start a Project" />
    </main>
  );
}
