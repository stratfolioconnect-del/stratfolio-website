import Link from "next/link";
import type { ReactNode } from "react";
import type { Service } from "@/lib/site-data";

export function PageHeading({ eyebrow, title, description, children }: { eyebrow: string; title: string; description: string; children?: ReactNode }) {
  return (
    <section className="page-hero">
      <div className="page-hero-inner">
        <div className="eyebrow"><span className="status-dot" /> {eyebrow}</div>
        <h1>{title}</h1>
        <p>{description}</p>
        {children}
      </div>
    </section>
  );
}

export function ActionLink({ href, variant = "primary", children }: { href: string; variant?: "primary" | "secondary" | "light"; children: ReactNode }) {
  return <Link href={href} className={`button button-${variant}`}>{children}</Link>;
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link className="service-card service-card-link" href={`/services/${service.slug}`}>
      <div className="service-top"><span className="service-number">{service.number}</span><span className="service-arrow" aria-hidden="true">↗</span></div>
      <h2>{service.title}</h2>
      <p>{service.description}</p>
      <div className="service-card-question"><span>QUESTION ADDRESSED</span><p>{service.questions[0]}</p></div>
      <div className="service-card-output"><span>POTENTIAL OUTPUT</span><strong>{service.outputs[0]}</strong></div>
      <span className="service-link-label">Explore service <span aria-hidden="true">→</span></span>
    </Link>
  );
}

export function CallToAction({ title, description, buttonText = "Discuss Your Business Challenge" }: { title: string; description: string; buttonText?: string }) {
  return (
    <section className="engagement-section section-pad">
      <div className="engagement-box">
        <div className="engagement-copy">
          <div className="section-label"><span>LET&apos;S TALK</span> / THE NEXT DECISION</div>
          <h2>{title}</h2><p>{description}</p>
          <ActionLink href="/contact" variant="light">{buttonText} <span aria-hidden="true">↗</span></ActionLink>
        </div>
        <div className="engagement-mark" aria-hidden="true"><span>S</span><div className="mark-line" /><small>THINK CLEARLY.<br />ACT STRATEGICALLY.</small></div>
      </div>
    </section>
  );
}

export function ContentSection({ eyebrow, title, children, className = "" }: { eyebrow: string; title: string; children: ReactNode; className?: string }) {
  return <section className={`content-section section-pad ${className}`}><div className="section-label"><span>{eyebrow}</span> / STRATFOLIO INTELLIGENCE</div><h2>{title}</h2><div className="content-section-body">{children}</div></section>;
}
