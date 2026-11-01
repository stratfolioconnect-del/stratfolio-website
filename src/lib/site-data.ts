export type Service = {
  number: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  summary: string;
  questions: string[];
  researchApproach: string;
  useCases: string[];
  audiences: string[];
  outputs: string[];
  scopeConsiderations: string[];
  limitations: string[];
};

export const services: Service[] = [
  {
    number: "01",
    slug: "market-intelligence",
    title: "Market Intelligence",
    shortTitle: "Market intelligence",
    description: "Research markets, identify opportunities, understand demand, and evaluate market positioning.",
    summary: "Build a grounded view of the market you are entering, serving, or considering.",
    questions: ["How is the market structured and changing?", "Where could demand be underserved?", "How does your offer fit current needs and alternatives?"],
    researchApproach: "Agree the market definition and geography, review relevant public and supplied information, organise evidence into useful segments, and distinguish observed signals from assumptions.",
    useCases: ["Assessing a proposed market entry", "Refining a target audience or proposition", "Comparing opportunity areas before committing resources"],
    audiences: ["Founders and CEOs considering a market move", "Small and growing businesses evaluating customer segments", "SaaS and technology teams exploring adjacent opportunities"],
    outputs: ["Market landscape and segmentation", "Opportunity assessment and assumptions", "Evidence log and strategic implications"],
    scopeConsiderations: ["Market and geographic boundaries", "Available demand and category evidence", "Required depth of segmentation and competitor coverage"],
    limitations: ["Public market information may be incomplete, inconsistent, or lag current conditions.", "Opportunity assessments are research inputs, not guarantees of demand or commercial performance."],
  },
  {
    number: "02",
    slug: "competitive-intelligence",
    title: "Competitive Intelligence",
    shortTitle: "Competitive intelligence",
    description: "Analyse competitors, their positioning, service offerings, messaging, market presence, and strategic gaps.",
    summary: "Understand the choices customers can make and the position your business can credibly own.",
    questions: ["How do relevant competitors position their offers?", "What themes recur in their messaging and services?", "Where may there be meaningful gaps or points of difference?"],
    researchApproach: "Define direct and adjacent alternatives, examine their publicly available positioning and offers, and compare findings against agreed dimensions with source references.",
    useCases: ["Preparing for a positioning or messaging review", "Assessing an adjacent competitor set", "Understanding how an offer compares in a defined market"],
    audiences: ["B2B consultancies clarifying their positioning", "Marketing agencies supporting strategic planning", "Founders reviewing market alternatives"],
    outputs: ["Competitor landscape", "Comparison matrix", "Positioning observations and evidence references"],
    scopeConsiderations: ["Number and type of organisations", "Geographic coverage and language", "Comparison dimensions and the availability of public materials"],
    limitations: ["Analysis reflects information available at the time of research.", "Public communications do not necessarily reveal internal strategy, pricing terms, or actual customer outcomes."],
  },
  {
    number: "03",
    slug: "strategic-partner-intelligence",
    title: "Strategic Partner Intelligence",
    shortTitle: "Strategic partner intelligence",
    description: "Research potential partners, evaluate strategic fit, and identify collaboration opportunities.",
    summary: "Create a structured basis for deciding which relationships are worth exploring.",
    questions: ["Which organisations align with your strategic priorities?", "What evidence supports a potential fit?", "What collaboration opportunities and constraints should be explored?"],
    researchApproach: "Translate partner objectives into fit criteria, identify candidate organisations, review available evidence, and record reasons to prioritise or investigate each option.",
    useCases: ["Building an initial partner shortlist", "Assessing strategic alignment before outreach", "Mapping complementary services or capabilities"],
    audiences: ["Businesses exploring a new channel or alliance", "Consultancies identifying complementary capabilities", "Leadership teams comparing partnership options"],
    outputs: ["Partner longlist and research profiles", "Strategic-fit assessment criteria", "Prioritised opportunities for further discussion"],
    scopeConsiderations: ["Candidate volume and selection criteria", "Partner types, sectors, and geography", "Depth of profile research and intended use"],
    limitations: ["Public information cannot confirm an organisation's willingness, capacity, or internal approval to partner.", "Fit assessments indicate research-based alignment, not an endorsement or introduction."],
  },
  {
    number: "04",
    slug: "business-performance-intelligence",
    title: "Business Performance Intelligence",
    shortTitle: "Business performance intelligence",
    description: "Organise available business information and performance metrics into useful insights and recommendations.",
    summary: "Make the information you already have easier to interpret and act on.",
    questions: ["What do available metrics tell us—and what do they not tell us?", "Where are performance patterns or information gaps emerging?", "Which measures could support better decisions?"],
    researchApproach: "Review client-provided information and metric definitions, check for consistency and gaps, and organise observations around agreed business questions.",
    useCases: ["Clarifying how existing metrics relate to decisions", "Reviewing reporting definitions and information gaps", "Identifying patterns that merit deeper investigation"],
    audiences: ["Small businesses organising performance information", "Founders preparing for a planning cycle", "Teams clarifying reporting and measurement questions"],
    outputs: ["Structured review of supplied information", "Metric definitions and analysis workbook", "Findings, limitations, and recommendations"],
    scopeConsiderations: ["Data formats, quality, and permitted access", "Period and range of information supplied", "Analysis depth and stakeholder context"],
    limitations: ["Conclusions depend on the accuracy, completeness, and context of supplied information.", "This service is not an audit, assurance opinion, or substitute for specialist financial or legal advice."],
  },
  {
    number: "05",
    slug: "ai-technology-intelligence",
    title: "AI and Technology Trend Intelligence",
    shortTitle: "AI & technology intelligence",
    description: "Research relevant technology developments, emerging trends, and potential business implications.",
    summary: "Separate relevant developments from noise and assess what they could mean for your business.",
    questions: ["Which technology developments are relevant to your context?", "What evidence supports an emerging trend?", "What practical implications, risks, or questions deserve attention?"],
    researchApproach: "Define the business context and time horizon, review relevant published information, compare claims and evidence quality, and frame implications as questions or options rather than predictions.",
    useCases: ["Screening technology developments for relevance", "Preparing questions for a technology evaluation", "Reviewing potential implications for a business model or workflow"],
    audiences: ["SaaS and technology businesses tracking adjacent developments", "Leaders reviewing potential AI use cases", "Teams preparing questions for a technology evaluation"],
    outputs: ["Technology and trend scan", "Source-backed implications assessment", "Options and questions for further evaluation"],
    scopeConsiderations: ["Technology categories and business context", "Time horizon and geographic or regulatory context", "Required source depth and update frequency"],
    limitations: ["Emerging technology claims can change rapidly and may be difficult to verify independently.", "Trend analysis is not a forecast, implementation design, or technical due-diligence opinion."],
  },
  {
    number: "06",
    slug: "business-structure-analysis",
    title: "Business Structure and Operations Analysis",
    shortTitle: "Business structure analysis",
    description: "Review available information about business structure, operations, and potential areas for improvement.",
    summary: "Examine how your business is organised and where clearer processes may help.",
    questions: ["How do current services, roles, and workflows fit together?", "Where are handoffs, duplication, or information gaps visible?", "What areas merit further operational review?"],
    researchApproach: "Review agreed organisational and process information, map key relationships or handoffs, and identify patterns and questions for further review.",
    useCases: ["Clarifying how a service is delivered across a team", "Reviewing documented workflows for friction points", "Preparing a structured discussion about operating-model changes"],
    audiences: ["Growing businesses reviewing how work is organised", "Founders clarifying operational responsibilities", "Teams documenting processes before considering change"],
    outputs: ["Documented structure and workflow observations", "Opportunity and constraint summary", "Practical areas for improvement to investigate"],
    scopeConsiderations: ["Documents, workflows, and stakeholders included", "Operational areas and level of detail", "Access constraints and intended decisions"],
    limitations: ["A review of available documentation may not capture informal or undocumented work.", "Findings are not a formal audit, legal review, or assurance of operational performance."],
  },
  {
    number: "07",
    slug: "strategic-growth-planning",
    title: "Strategic Growth Planning",
    shortTitle: "Strategic growth planning",
    description: "Translate research findings into priorities, practical recommendations, and a structured 90-day action plan.",
    summary: "Turn a clearer evidence base into a focused set of next steps.",
    questions: ["Which opportunities best fit your goals and capacity?", "What should happen first, and what depends on it?", "How can progress and learning be reviewed over 90 days?"],
    researchApproach: "Bring agreed research findings together, compare options against stated priorities and constraints, and sequence practical actions with review points.",
    useCases: ["Translating market research into an initial action sequence", "Prioritising growth hypotheses for further testing", "Aligning a team around a documented 90-day focus"],
    audiences: ["Founders and CEOs choosing near-term priorities", "Marketing agencies structuring a growth plan", "Small and growing businesses sequencing strategic actions"],
    outputs: ["Prioritised strategic recommendations", "Sequenced 90-day action plan", "Review prompts and indicators to monitor"],
    scopeConsiderations: ["Quality and recency of available evidence", "Goals, resources, dependencies, and decision owners", "Whether additional research is needed before prioritisation"],
    limitations: ["A plan organises proposed actions; it does not guarantee growth or business results.", "Recommendations depend on agreed assumptions and may need revision as conditions change."],
  },
];

export const methodologyStages = [
  { name: "SCAN", detail: "Define the decision, business context, and research questions before gathering information." },
  { name: "TEST EVIDENCE", detail: "Identify relevant sources, assess reliability and recency, and document evidence limitations." },
  { name: "ANALYSE", detail: "Compare information, examine patterns, and identify meaningful findings against the question." },
  { name: "TRANSLATE", detail: "Convert findings into clear business implications, options, and recommendations." },
  { name: "FOCUS", detail: "Prioritise opportunities and proposed actions against objectives, constraints, and evidence." },
  { name: "OBSERVE", detail: "Define relevant indicators and monitoring needs where ongoing observation is in scope." },
  { name: "LEARN", detail: "Review new evidence and refine future questions, priorities, and decisions." },
];
