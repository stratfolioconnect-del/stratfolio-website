"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";

const links = [
  ["Services", "/services"],
  ["Methodology", "/methodology"],
  ["About", "/about"],
  ["Insights", "/insights"],
  ["Pricing", "/pricing"],
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <>
      <div className="site-utility-bar">
        <div className="site-utility-inner">
          <p className="site-utility-message">
            <span className="utility-quote-mark" aria-hidden="true">“</span>
            {siteConfig.brandStatement}
            <span className="utility-quote-mark" aria-hidden="true">”</span>
          </p>
          <div className="site-utility-links" aria-label="Business contact details">
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="STRATFOLIO INTELLIGENCE home" onClick={() => setMenuOpen(false)}>
          <Image className="brand-symbol" src="/stratfolio-symbol.png" width={110} height={146} alt="" />
          <span className="brand-copy"><strong>STRATFOLIO</strong><small>INTELLIGENCE</small></span>
        </Link>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen((open) => !open)}>
          <span className={menuOpen ? "menu-icon menu-icon-open" : "menu-icon"} aria-hidden="true"><i /><i /></span>
        </button>
        <nav id="primary-navigation" className={menuOpen ? "navigation navigation-open" : "navigation"} aria-label="Main navigation">
          {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</Link>)}
          <Link className="nav-cta" href="/contact" onClick={() => setMenuOpen(false)}>Discuss Your Business Challenge <span aria-hidden="true">↗</span></Link>
        </nav>
      </header>
    </>
  );
}
