export type InsightArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type InsightArticle = {
  slug: string;
  title: string;
  summary: string;
  category: "Market" | "Competition" | "Partners" | "Technology";
  sections: InsightArticleSection[];
  relatedSlugs: string[];
};

export const insightArticles: InsightArticle[] = [
  {
    slug: "framing-a-market-research-question",
    title: "Framing a market research question before sizing an opportunity",
    summary:
      "A practical way to define the decision, boundaries, and evidence needed before deciding whether a market study should become more detailed.",
    category: "Market",
    sections: [
      {
        heading: "Start with the decision",
        paragraphs: [
          "A request to understand a market can mean several different things: deciding whether to enter a geography, choosing between customer groups, assessing an offer, or determining what to investigate next. Those decisions need different evidence.",
          "Write the decision in plain language before listing research tasks. Identify who will use the work, what alternatives are being considered, and when the information is needed. This keeps the research connected to a choice rather than turning it into an open-ended catalogue of market facts.",
        ],
      },
      {
        heading: "Set boundaries that can be examined",
        paragraphs: [
          "Define the working market by the customer need, offer category, geography, customer type, and relevant time horizon. These are scoping choices, not claims that a market has a universally agreed boundary.",
          "Make exclusions explicit too. A focused first study may leave out adjacent sectors, secondary geographies, or detailed financial modelling. Stating what is outside the question helps readers interpret the work and prevents a concise assessment from being mistaken for exhaustive market sizing.",
        ],
      },
      {
        heading: "Turn broad questions into testable questions",
        paragraphs: [
          "A useful research question points to information that can be reviewed and compared. For example, instead of asking whether a market is attractive, a team could ask which customer needs appear relevant to its offer, what public evidence describes the alternatives, and what unknowns would materially affect the decision.",
          "Separate observations from hypotheses. Public descriptions, published documents, and supplied business context can inform an assessment, but they do not automatically establish demand, willingness to pay, or likely commercial performance.",
        ],
      },
      {
        heading: "Record evidence and uncertainty together",
        paragraphs: [
          "For each material observation, preserve enough context to trace where it came from and what it can support. Record the publisher, source title, date where available, retrieval date, geographic scope, and any relevant caveat.",
          "An evidence register should also make gaps visible. If information is unavailable, old, inconsistent, or outside the agreed scope, say so rather than filling the gap with an unsupported estimate. The purpose is to help decision-makers understand both the signal and its limits.",
        ],
        bullets: [
          "Define the decision and the audience for the research.",
          "Agree customer, offer, geography, and time boundaries.",
          "Separate public evidence, supplied information, and hypotheses.",
          "Identify unanswered questions that could change the decision.",
        ],
      },
      {
        heading: "Choose a proportionate next step",
        paragraphs: [
          "An initial review can clarify which questions deserve deeper work. Depending on the evidence gap, a next step might be additional public-source research, a separately scoped primary research activity, internal data review, or simply a decision to defer further analysis.",
          "The appropriate scope depends on the business context and available evidence. No research format can guarantee an opportunity, demand, or commercial result; a well-framed question makes the reasoning and uncertainty easier to evaluate.",
        ],
      },
    ],
    relatedSlugs: [
      "building-a-competitor-comparison-matrix",
      "assessing-strategic-partner-fit",
    ],
  },
  {
    slug: "building-a-competitor-comparison-matrix",
    title: "Building a competitor comparison matrix from observable evidence",
    summary:
      "How to compare competitors consistently while distinguishing public observations from assumptions about private strategy or performance.",
    category: "Competition",
    sections: [
      {
        heading: "Define the comparison purpose",
        paragraphs: [
          "A comparison matrix is useful when it answers a defined business question. A team may need to understand how a shortlist describes its services, which audiences are named publicly, or how published offers differ in scope.",
          "First define the market boundary and why each organisation is included. Distinguish direct alternatives from adjacent services and substitutes. Record exclusions and the review date so the matrix is not mistaken for a complete or permanent map of a market.",
        ],
      },
      {
        heading: "Choose fields that can be observed consistently",
        paragraphs: [
          "Select a small set of fields that can be applied across the comparison set. Depending on the question, these may include stated audiences, published service categories, public process descriptions, positioning language, visible proof points, and calls to action.",
          "Avoid fields that imply access to private information. A public website rarely establishes actual pricing arrangements, sales performance, customer satisfaction, internal capabilities, or strategic intent. If a field cannot be supported, mark it as not observed rather than inferring an answer.",
        ],
      },
      {
        heading: "Keep source notes close to each observation",
        paragraphs: [
          "A matrix is easier to review when a reader can trace material entries to their source. Keep a source log that records the publisher, page or document, date where available, retrieval date, and the observation it supports.",
          "Be consistent in how evidence is captured. If one organisation is assessed using a detailed service page and another only from a short overview, make that difference visible. Absence of a statement in a public source is not proof that the organisation does not offer a service.",
        ],
      },
      {
        heading: "Separate description from interpretation",
        paragraphs: [
          "Use one field for what the source states and another for analysis. A public claim about a service is an observation; an implication about differentiation is an interpretation that should explain its reasoning and uncertainty.",
          "If an assessment uses qualitative labels, define them. Avoid composite scores or rankings that imply measurement precision without a clear, defensible method. Where evidence is incomplete or conflicting, show the limitation instead of hiding it in a single score.",
        ],
        bullets: [
          "State the comparison question and selection rules.",
          "Apply the same observable fields to each organisation.",
          "Link claims to dated source notes where available.",
          "Mark unknown, unavailable, and out-of-scope information clearly.",
        ],
      },
      {
        heading: "Translate the matrix into a decision aid",
        paragraphs: [
          "The matrix is a working document, not the conclusion. A useful synthesis identifies patterns relevant to the agreed question, notes counter-evidence, and lists the assumptions that would need validation before action.",
          "A concise comparison can help a team decide what to investigate next, how to describe its own offer, or whether the current competitor set is appropriate. It does not by itself establish market share, competitive advantage, or business performance.",
        ],
      },
    ],
    relatedSlugs: [
      "framing-a-market-research-question",
      "assessing-strategic-partner-fit",
    ],
  },
  {
    slug: "assessing-strategic-partner-fit",
    title: "Assessing strategic partner fit with explicit criteria",
    summary:
      "A structured approach to screening potential partners, recording evidence, and identifying diligence questions without implying agreement or endorsement.",
    category: "Partners",
    sections: [
      {
        heading: "Describe the intended collaboration",
        paragraphs: [
          "Partner research should begin with a clear description of the proposed collaboration. The intended contribution, target audience, operating model, and decision to be made provide a basis for evaluating potential fit.",
          "A broad search for interesting organisations can produce a long list without clarifying whether a relationship would be useful. Define what the business hopes to learn or assess before building a candidate list.",
        ],
      },
      {
        heading: "Set criteria before reviewing candidates",
        paragraphs: [
          "Possible screening criteria include publicly described capability, audience relevance, geographic coverage, compatibility with the intended offer, and practical requirements that need further discussion. The criteria should reflect the collaboration being considered rather than a generic ranking.",
          "Separate must-have conditions from preferences and open questions. If qualitative ratings are used, define them and show the evidence behind each assessment. A rating is a prioritisation aid, not a prediction that a candidate will agree to partner.",
        ],
      },
      {
        heading: "Build a candidate profile with evidence",
        paragraphs: [
          "For each candidate, record relevant public information, its source, date where available, retrieval date, and why it may matter to the proposed collaboration. Distinguish public statements from analyst interpretation and information supplied by the commissioning business.",
          "Do not infer willingness, financial stability, customer access, internal priorities, or the existence of an active relationship without appropriate evidence. Unverified items should become diligence questions, not assumed facts.",
        ],
      },
      {
        heading: "Identify diligence needs and dependencies",
        paragraphs: [
          "A preliminary assessment can identify topics that require direct confirmation, such as ownership of responsibilities, operational capacity, commercial terms, data handling, governance, and alignment of objectives. These are questions for the parties to investigate, not conclusions available from desk research alone.",
          "Record dependencies that could affect feasibility and the evidence required to resolve them. A candidate may appear relevant on public information while still requiring substantial operational, legal, or commercial review.",
        ],
        bullets: [
          "Define the collaboration objective and decision criteria.",
          "Document candidate selection rules and exclusions.",
          "Trace each material observation to its source.",
          "Convert unknowns into explicit diligence questions.",
        ],
      },
      {
        heading: "Use the assessment as a starting point",
        paragraphs: [
          "A partner assessment can help prioritise conversations or identify additional research needs. It cannot establish mutual interest, a partnership, endorsement, or a likely outcome.",
          "Any next step should be proportionate to the decision and supported by appropriate confirmation from the organisations involved. The scope and limitations of preliminary public-source research should remain visible in the final material.",
        ],
      },
    ],
    relatedSlugs: [
      "framing-a-market-research-question",
      "building-a-competitor-comparison-matrix",
    ],
  },
  {
    slug: "interpreting-ai-and-technology-trends",
    title: "Interpreting AI and technology trends for a business decision",
    summary:
      "A careful framework for separating a technology signal from its practical implications, dependencies, and unanswered questions.",
    category: "Technology",
    sections: [
      {
        heading: "Start with a business use case",
        paragraphs: [
          "A technology trend is only relevant to a business when it connects to a need, process, customer experience, or strategic choice. Begin by naming the use case and the decision under consideration rather than collecting trend headlines without a purpose.",
          "Clarify the intended audience, operating context, constraints, and time horizon. The same technology may have different implications across organisations, and a general description cannot substitute for assessing a specific use case.",
        ],
      },
      {
        heading: "Distinguish signal from promotional claims",
        paragraphs: [
          "Technology material may include product announcements, vendor claims, commentary, technical documentation, or independent analysis. These sources serve different purposes and should not be treated as equivalent evidence.",
          "Record who published an item, what it actually states, when it was published, and what remains unverified. A product description can establish what a provider claims to offer; it does not by itself prove suitability, performance, security, or return for a particular business.",
        ],
      },
      {
        heading: "Examine dependencies and constraints",
        paragraphs: [
          "A practical assessment considers more than potential capability. It may need to address data access and quality, integration, governance, security review, skills, operational change, procurement, and ongoing oversight.",
          "These considerations depend on the use case and the organisation. Where specialist legal, technical, security, or regulatory assessment is needed, identify that dependency rather than presenting desk research as a substitute.",
        ],
      },
      {
        heading: "Frame options as hypotheses to test",
        paragraphs: [
          "Translate observations into a small number of options or hypotheses. For each, state what evidence supports it, what assumptions remain, and what a proportionate test could examine.",
          "Avoid treating adoption forecasts or general trend language as a prediction of outcomes for a specific organisation. If quantitative estimates are relevant, they require attributable sources, compatible definitions, and clear caveats.",
        ],
        bullets: [
          "Name the business decision and the use case.",
          "Record source type, date, and claim boundaries.",
          "Identify operational and governance dependencies.",
          "Define what a limited validation step would need to show.",
        ],
      },
      {
        heading: "Keep conclusions revisable",
        paragraphs: [
          "Technology environments change, and public information can become outdated. A report should identify its review point, distinguish current observations from future possibilities, and explain what new evidence could change the analysis.",
          "A trend scan can inform discussion and prioritisation. It does not certify a technology, provide specialist assurance, or guarantee commercial benefit.",
        ],
      },
    ],
    relatedSlugs: [
      "framing-a-market-research-question",
      "building-a-competitor-comparison-matrix",
    ],
  },
];

export function getInsightArticle(slug: string) {
  return insightArticles.find((article) => article.slug === slug);
}

export function getRelatedInsightArticles(article: InsightArticle) {
  return article.relatedSlugs
    .map(getInsightArticle)
    .filter((related): related is InsightArticle => related !== undefined);
}
