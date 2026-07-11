export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "Getting Started" | "Budget & Costs" | "Timeframes" | "Design & Approvals" | "During Construction" | "Aftercare";
}
