import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found-page">
      <div className="section-label"><span>404</span> / PAGE NOT FOUND</div>
      <h1>This page isn&apos;t in view.</h1>
      <p>The address may have changed, or the page may not exist. Return to the homepage or explore our services.</p>
      <div className="hero-actions"><Link href="/" className="button button-primary">Return home <span aria-hidden="true">↗</span></Link><Link href="/services" className="button button-secondary">Explore services <span aria-hidden="true">↗</span></Link></div>
    </main>
  );
}
