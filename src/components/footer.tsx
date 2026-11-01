import Link from "next/link";
import Image from "next/image";
import { CopyrightYear } from "@/components/copyright-year";
import { services } from "@/lib/site-data";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-about">
          <Link className="brand footer-brand" href="/" aria-label="STRATFOLIO INTELLIGENCE home">
            <Image className="brand-symbol" src="/stratfolio-symbol.png" width={110} height={146} alt="" />
            <span className="brand-copy"><strong>STRATFOLIO</strong><small>INTELLIGENCE</small></span>
          </Link>
          <p>Turning business information into strategic clarity.</p>
          <Link href="/contact" className="footer-cta">Discuss Your Business Challenge <span aria-hidden="true">↗</span></Link>
          <a className="footer-contact-link" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <a className="footer-contact-link" href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn profile <span aria-hidden="true">↗</span></a>
        </div>
        <div className="footer-column"><h2>Explore</h2><Link href="/services">Services</Link><Link href="/methodology">Methodology</Link><Link href="/about">About</Link><Link href="/insights">Insights</Link><Link href="/pricing">Pricing</Link></div>
        <div className="footer-column"><h2>Services</h2>{services.map((service) => <Link href={`/services/${service.slug}`} key={service.slug}>{service.shortTitle}</Link>)}<Link href="/services">All services <span aria-hidden="true">↗</span></Link></div>
      </div>
      <div className="footer-bottom">
        <span>© <CopyrightYear /> STRATFOLIO INTELLIGENCE</span>
        <div><Link href="/privacy">Privacy policy</Link><Link href="/terms">Terms of service</Link></div>
        <span>INDEPENDENT BUSINESS INTELLIGENCE</span>
      </div>
    </footer>
  );
}
