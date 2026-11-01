export type ApprovedTestimonial = {
  id: string;
  quote: string;
  attribution: string;
  role?: string;
  organisation?: string;
  approvalDate: string;
};

export const approvedTestimonials: ApprovedTestimonial[] = [];
