import type { FaqItem } from "@/types/faq";

export const faqs: FaqItem[] = [
  {
    id: "do-i-need-land",
    category: "Getting Started",
    question: "Do I need to already own land before I talk to you?",
    answer:
      "No. Many of our clients come to us before they've secured a block, and we're glad to review a site's suitability — slope, orientation, overlays — before you sign a land contract, not after. If you're still searching, we can also point you toward land we know performs well for the kind of home you're after.",
  },
  {
    id: "which-suburbs",
    category: "Getting Started",
    question: "Which areas do you build in?",
    answer:
      "We build across metropolitan Adelaide, the Adelaide Hills, the Fleurieu Coast and the Barossa Valley. See our Areas We Serve page for a full suburb breakdown, or ask us directly if you're unsure whether your site is within reach.",
  },
  {
    id: "first-meeting-cost",
    category: "Getting Started",
    question: "Does the first meeting cost anything?",
    answer:
      "No. The initial conversation is obligation-free and exists to establish whether we're a good fit for each other before either of us commits further time.",
  },
  {
    id: "budget-ranges",
    category: "Budget & Costs",
    question: "Why do your budget ranges feel broad?",
    answer:
      "Two homes of an identical floor area can differ by hundreds of thousands of dollars depending on site conditions, specification level and scope — a single number would misrepresent nearly every real project. We provide a genuine, itemised estimate once we understand your site and brief, usually within the first few weeks.",
  },
  {
    id: "hidden-costs",
    category: "Budget & Costs",
    question: "What costs catch people out that aren't in the headline price?",
    answer:
      "Council and planning fees, geotechnical reports, temporary services connections, and — for knockdown rebuilds — demolition and asbestos removal are the ones most often missed in a rough budget. We itemise all of these against your specific site before you sign a contract, not after. Our Journal has a full article on this if you'd like the detail.",
  },
  {
    id: "fixed-price",
    category: "Budget & Costs",
    question: "Is your building contract a fixed price?",
    answer:
      "Yes — once selections are finalised, you receive a fixed-price contract. Variations can still occur if you request a change mid-build, but every variation is costed and requires your written approval before work proceeds. You will never receive a surprise invoice for a decision you weren't consulted on.",
  },
  {
    id: "how-long-does-it-take",
    category: "Timeframes",
    question: "How long does the whole process actually take?",
    answer:
      "From first conversation to handover, a custom home typically runs 12 to 18 months, split roughly evenly between design/approvals and construction. Renovations and knockdown rebuilds vary more depending on scope and council. We give you a realistic program specific to your project, not a generic average, once we understand your site.",
  },
  {
    id: "can-i-speed-it-up",
    category: "Timeframes",
    question: "Can the process be sped up?",
    answer:
      "Selections delays are the most common (and most avoidable) source of lost time — clients who make decisions promptly during that stage keep the whole program moving. Site conditions and council processing times are largely outside anyone's control, but we sequence documentation and approvals to avoid unnecessary idle time wherever we can.",
  },
  {
    id: "design-input",
    category: "Design & Approvals",
    question: "How much input do I get into the design?",
    answer:
      "A substantial amount — our design process starts with your brief and your site, not a template we adapt. You'll review and refine the concept design before it's developed into working drawings, and selections give you further control over the finished specification.",
  },
  {
    id: "heritage-overlay",
    category: "Design & Approvals",
    question: "What if my property has a heritage or character overlay?",
    answer:
      "It changes what's achievable, not whether a good outcome is possible. We check title and overlay status at site assessment, before concept design begins, so the design direction reflects real constraints from day one rather than requiring rework later.",
  },
  {
    id: "who-manages-approvals",
    category: "Design & Approvals",
    question: "Who deals with council on my behalf?",
    answer:
      "We do. Our team manages planning and building consent correspondence directly with council or your private certifier, and keeps you informed of progress without requiring you to interpret the process yourself.",
  },
  {
    id: "can-i-live-there-during-reno",
    category: "During Construction",
    question: "Can I stay living in my home during a renovation?",
    answer:
      "Often, yes — many of our renovation clients remain in the property throughout construction. We sequence the build specifically to manage this where it's practical and safe, and we're upfront during quoting about the stages where it isn't.",
  },
  {
    id: "site-visits",
    category: "During Construction",
    question: "Can I visit the site during construction?",
    answer:
      "Yes, with reasonable notice to your site supervisor for safety and scheduling. You'll also receive regular progress updates so you always know what stage construction has reached without needing to visit in person.",
  },
  {
    id: "what-happens-at-handover",
    category: "Aftercare",
    question: "What happens at handover?",
    answer:
      "We complete an internal quality inspection and walk the home with you room by room, addressing any items on the defects schedule before keys are handed over. You'll leave with warranty documentation, appliance manuals and maintenance guidance specific to your home.",
  },
  {
    id: "warranty-cover",
    category: "Aftercare",
    question: "What warranty comes with the build?",
    answer:
      "Every home is covered by structural warranty in line with South Australian building requirements. We also schedule a maintenance check-in within the first year to address the minor settling issues that are normal in any new build.",
  },
];

export const FAQ_CATEGORIES: FaqItem["category"][] = [
  "Getting Started",
  "Budget & Costs",
  "Timeframes",
  "Design & Approvals",
  "During Construction",
  "Aftercare",
];
