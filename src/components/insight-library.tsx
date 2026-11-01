"use client";

import { useState } from "react";
import Link from "next/link";
import { insightSamples } from "@/lib/insight-data";
import { insightArticles } from "@/data/insight-articles";

const filters = ["All", "Market", "Competition", "Partners", "Technology"];

export function InsightLibrary() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [query, setQuery] = useState("");
  const visibleSamples = insightSamples.filter((sample) => {
    const matchesCategory = activeFilter === "All" || sample.category === activeFilter;
    const searchText = `${sample.title} ${sample.description} ${sample.category} ${sample.question}`.toLowerCase();
    return matchesCategory && searchText.includes(query.trim().toLowerCase());
  });
  const visibleArticles = insightArticles.filter((article) => {
    const matchesCategory = activeFilter === "All" || article.category === activeFilter;
    const searchText = `${article.title} ${article.summary} ${article.category} ${article.sections.map((section) => `${section.heading} ${section.paragraphs.join(" ")}`).join(" ")}`.toLowerCase();
    return matchesCategory && searchText.includes(query.trim().toLowerCase());
  });

  return (
    <>
      <div className="insight-controls">
        <div className="filter-list" role="group" aria-label="Filter insights by category">
          {filters.map((filter) => <button key={filter} type="button" aria-pressed={activeFilter === filter} className={activeFilter === filter ? "filter-button filter-active" : "filter-button"} onClick={() => setActiveFilter(filter)}>{filter}</button>)}
        </div>
        <label className="insight-search">Search insights and samples<input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try “competitor” or “opportunity”" /></label>
      </div>
      <div className="insight-grid" aria-live="polite">
        {visibleArticles.map((article) => <article className="insight-card insight-article-card" key={article.slug}>
          <span className="sample-stamp">ARTICLE · {article.category.toUpperCase()}</span>
          <h2><Link href={`/insights/${article.slug}`}>{article.title}</Link></h2>
          <p>{article.summary}</p>
          <div className="insight-article-card-footer"><span>Editorial guide</span><Link className="text-link" href={`/insights/${article.slug}`}>Read article <span aria-hidden="true">↗</span></Link></div>
        </article>)}
        {visibleSamples.map((sample) => <article className="insight-card" key={sample.slug}><span className="sample-stamp">ILLUSTRATIVE SAMPLE · {sample.category.toUpperCase()}</span><div className="sample-lines" aria-hidden="true"><i /><i /><i /></div><h2><Link href={`/insights/${sample.slug}`}>{sample.title}</Link></h2><p>{sample.description}</p><p className="sample-card-question">{sample.question}</p><small>Hypothetical demonstration · Not client work</small><div className="sample-card-actions"><Link className="text-link" href={`/insights/${sample.slug}`}>Read sample report <span aria-hidden="true">↗</span></Link><a className="text-link" href={sample.download} download>Download PDF <span aria-hidden="true">↓</span></a></div></article>)}
      </div>
      {visibleArticles.length + visibleSamples.length === 0 && <p className="insight-empty" role="status">No articles or illustrative samples match this search. Try another term or choose a different category.</p>}
      <p className="sample-disclaimer">All examples on this page are illustrative research formats only. They do not represent client engagements, actual market findings, or verified business outcomes.</p>
    </>
  );
}
