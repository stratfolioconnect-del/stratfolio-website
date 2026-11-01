import sampleDocuments from "@/data/research-samples.json";
import reportFramework from "@/data/sample-report-framework.json";

export type InsightSample = (typeof sampleDocuments)[number] & {
  analysisStructure: string[];
  evidenceRequirements: string[];
  potentialDeliverables: string[];
  download: string;
};

export const insightSamples: InsightSample[] = sampleDocuments.map((sample) => {
  const sections = [...reportFramework, ...sample.sections];

  return {
    ...sample,
    sections,
    analysisStructure: sections.map((section) => section.heading),
    evidenceRequirements: sections.flatMap((section) => section.bullets).slice(0, 4),
    potentialDeliverables: sample.sections.at(-1)?.bullets ?? [],
    download: `/research-samples/${sample.slug}.pdf`,
  };
});
