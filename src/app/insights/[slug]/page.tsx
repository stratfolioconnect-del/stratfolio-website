import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CallToAction, PageHeading } from "@/components/site";
import {
  getInsightArticle,
  getRelatedInsightArticles,
  insightArticles,
} from "@/data/insight-articles";
import { insightSamples } from "@/lib/insight-data";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [
    ...insightSamples.map(({ slug }) => ({ slug })),
    ...insightArticles.map(({ slug }) => ({ slug })),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsightArticle(slug);
  if (article) return pageMetadata(article.title, article.summary, `/insights/${article.slug}`, "article");
  const sample = insightSamples.find((item) => item.slug === slug);
  return sample ? pageMetadata(sample.title, sample.description, `/insights/${sample.slug}`) : { title: "Sample not found" };
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const article = getInsightArticle(slug);
  const sample = insightSamples.find((item) => item.slug === slug);

  if (article) {
    const relatedArticles = getRelatedInsightArticles(article);

    return (
      <main id="main-content">
        <PageHeading eyebrow={`INSIGHTS / ${article.category.toUpperCase()}`} title={article.title} description={article.summary}>
          <div className="editorial-meta"><span>{article.category}</span><span>STRATFOLIO INTELLIGENCE</span></div>
          <Link href="/insights" className="text-link text-link-light editorial-back-link">Back to insights <span aria-hidden="true">←</span></Link>
        </PageHeading>
        <div className="editorial-layout">
          <nav className="editorial-toc" aria-label="In this article">
            <span>IN THIS ARTICLE</span>
            <ol>
              {article.sections.map((section, index) => (
                <li key={section.heading}><a href={`#article-section-${index + 1}`}>{section.heading}</a></li>
              ))}
            </ol>
          </nav>
          <article className="editorial-article">
            {article.sections.map((section, index) => (
              <section id={`article-section-${index + 1}`} key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
              </section>
            ))}
            <p className="editorial-disclaimer">This article provides general research guidance. It does not report commissioned client findings or replace specialist advice for a specific decision.</p>
          </article>
        </div>
        {relatedArticles.length > 0 && (
          <section className="related-articles section-pad" aria-labelledby="related-articles-heading">
            <div className="section-label"><span>RELATED</span> / CONTINUE READING</div>
            <h2 id="related-articles-heading">Related articles</h2>
            <div className="related-articles-grid">
              {relatedArticles.map((related) => (
                <article key={related.slug}>
                  <span>{related.category.toUpperCase()}</span>
                  <h3><Link href={`/insights/${related.slug}`}>{related.title}</Link></h3>
                  <p>{related.summary}</p>
                  <Link className="text-link" href={`/insights/${related.slug}`}>Read article <span aria-hidden="true">↗</span></Link>
                </article>
              ))}
            </div>
          </section>
        )}
        <CallToAction title="Need research shaped around your own question?" description="Discuss the decision, the evidence you need, and a suitable scope for an intelligence engagement." />
      </main>
    );
  }

  if (!sample) notFound();
  const executiveSummary = sample.sections.find((section) => section.heading === "Executive summary");
  const reportSections = sample.sections.filter((section) => section !== executiveSummary);

  return (
    <main id="main-content">
      <PageHeading eyebrow={`ILLUSTRATIVE SAMPLE / ${sample.category.toUpperCase()}`} title={sample.title} description={sample.description}>
        <p className="sample-notice">Hypothetical demonstration only. This is not client work, verified market research, or a claim about actual organisations or outcomes.</p>
        <div className="hero-actions"><a className="button button-primary" href={sample.download} download>Download the sample PDF <span aria-hidden="true">↓</span></a><Link href="/insights" className="button button-secondary">Back to insights <span aria-hidden="true">←</span></Link></div>
      </PageHeading>
      <article className="sample-report">
        {executiveSummary && (
          <section className="content-section section-pad">
            <div className="section-label"><span>01</span> / SAMPLE REPORT STRUCTURE</div>
            <h2>{executiveSummary.heading}</h2>
            <div className="sample-report-copy">{executiveSummary.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            <ul className="sample-requirements">{executiveSummary.bullets.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
        )}
        <section className="content-section section-pad sample-report-brief">
          <div className="section-label"><span>02</span> / RESEARCH QUESTION</div>
          <h2>{sample.question}</h2>
          <p className="sample-context">{sample.illustrativeContext}</p>
          <p className="sample-disclaimer">No actual findings or external research sources are asserted. The purpose is to demonstrate report structure, reasoning standards, evidence requirements, and limitations.</p>
        </section>
        {reportSections.map((section, index) => (
          <section className={`content-section section-pad ${index % 2 ? "service-output-section" : ""}`} key={section.heading}>
            <div className="section-label"><span>{String(index + 3).padStart(2, "0")}</span> / SAMPLE REPORT STRUCTURE</div>
            <h2>{section.heading}</h2>
            <div className="sample-report-copy">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            <ul className="sample-requirements">{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
        ))}
      </article>
      <CallToAction title="Need research built around your own business question?" description="Discuss the decision, evidence, and scope required for a real, documented intelligence engagement." buttonText="Discuss Your Business Challenge" />
    </main>
  );
}
