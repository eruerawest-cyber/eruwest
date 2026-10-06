// Content for the five services. The homepage cards and the individual
// service pages (app/[slug]/page.tsx) are both generated from this file,
// so copy changes only need to be made here.

export const CONTACT_EMAIL = "kiaora@eruwest.com";

export type ServiceSlug =
  | "communications-strategy"
  | "communications-delivery"
  | "paid-promotions"
  | "team-development"
  | "ai-visibility";

export type Service = {
  slug: ServiceSlug;
  /** Short name used on homepage cards, navigation and related links. */
  name: string;
  /** Full service label shown above the page headline. */
  label: string;
  /** Homepage card: opening line, then one supporting sentence. */
  summaryLead: string;
  summary: string;
  /** Service page. */
  headline: string;
  intro: string[];
  metaDescription: string;
  help: {
    heading: string;
    intro?: string;
    items?: string[];
    parts?: { title: string; text: string }[];
  };
  blocks: { heading: string; paragraphs: string[] }[];
  steps?: {
    heading: string;
    items: { title: string; text: string }[];
    note?: string;
  };
  faqs?: { question: string; answer: string }[];
  closing: { heading: string; text: string };
  related: ServiceSlug[];
};

export const services: Service[] = [
  {
    slug: "communications-strategy",
    name: "Strategy",
    label: "Communications Strategy",
    summaryLead: "Work out where to focus.",
    summary:
      "A review of your audiences, messaging, content and channels, followed by a practical plan your team can use.",
    headline: "A clear plan for your communications.",
    intro: [
      "When there are several audiences, channels and competing priorities, it can be hard to know where to focus. I help you review what’s happening now and decide what deserves your time.",
    ],
    metaDescription:
      "A review of your audiences, messaging, content and channels, followed by a practical communications plan your team can use.",
    help: {
      heading: "What I can help with",
      items: [
        "Reviewing your existing communications, content and channels",
        "Clarifying your audiences and messages",
        "Planning a campaign or a wider communications programme",
        "Identifying gaps, duplication and work that can stop",
      ],
    },
    blocks: [
      {
        heading: "What you receive",
        paragraphs: [
          "A practical plan with priorities, recommendations and responsibilities, shaped around your organisation’s goals and your capacity to deliver.",
          "It’s written for the people who will use it.",
        ],
      },
    ],
    steps: {
      heading: "How we work",
      items: [
        {
          title: "Discuss",
          text: "We talk through the challenge and what you need from the plan.",
        },
        {
          title: "Review",
          text: "I review the relevant material, such as existing plans, content and channels.",
        },
        { title: "Scope", text: "We agree what the plan will cover." },
        { title: "Develop", text: "I develop the plan with your input." },
        {
          title: "Explain",
          text: "I take you through the plan and the next steps.",
        },
      ],
      note: "Hands-on delivery can follow if you need it.",
    },
    closing: {
      heading: "Let’s work out where to focus.",
      text: "Tell me what you’re working on and what feels unclear.",
    },
    related: ["communications-delivery", "team-development", "ai-visibility"],
  },
  {
    slug: "communications-delivery",
    name: "Delivery",
    label: "Communications Delivery",
    summaryLead: "Keep agreed work moving.",
    summary:
      "Hands-on support with website content, social media, newsletters and campaigns, from drafting through to approved publication.",
    headline: "Keep your communications moving.",
    intro: [
      "You know what needs to happen, but finding the time to do it consistently is another matter. I provide hands-on communications support, working with your team to turn agreed priorities into content that is ready to use.",
    ],
    metaDescription:
      "Hands-on communications support with website content, social media, newsletters and campaigns, from drafting through to approved publication.",
    help: {
      heading: "What I can help with",
      items: [
        "Website copy and updates",
        "Social media content and scheduling",
        "Newsletters and stakeholder communications",
        "Campaign materials",
        "Publishing through your agreed approvals",
      ],
    },
    blocks: [
      {
        heading: "What you receive",
        paragraphs: [
          "Content that is drafted, edited and ready to use, published through your approvals where that’s agreed.",
        ],
      },
      {
        heading: "How we work",
        paragraphs: [
          "We agree the outputs, channels and rhythm upfront. Support can be a focused project, such as a campaign or a set of website updates, or ongoing capacity.",
          "If priorities need clarifying first, we can start with a strategy review.",
        ],
      },
      {
        heading: "What I need from you",
        paragraphs: [
          "A clear brief, source information and someone to approve the work. Where I need account access, we arrange it through individual permissions wherever possible.",
        ],
      },
    ],
    closing: {
      heading: "Need help getting the work done?",
      text: "Tell me what’s on your list and where capacity is stretched.",
    },
    related: ["communications-strategy", "paid-promotions", "team-development"],
  },
  {
    slug: "paid-promotions",
    name: "Promotions",
    label: "Paid Promotions",
    summaryLead: "Give your content a clearer path to the right people.",
    summary:
      "Support with paid promotion, audience selection, account setup and reporting.",
    headline: "Put your content in front of the right people.",
    intro: [
      "Paid promotion can help you reach people beyond your existing audience. It works best when the purpose, audience and next step are clear.",
    ],
    metaDescription:
      "Support with paid promotion: account setup, goals and audiences, channels and budgets, agreed promotion management and reporting.",
    help: {
      heading: "What I can help with",
      items: [
        "Setting up advertising accounts and access",
        "Agreeing goals and the audiences you want to reach",
        "Choosing channels, budgets and the content to promote",
        "Managing the promotion we’ve agreed",
        "Reviewing performance and adjusting as we go",
      ],
    },
    blocks: [
      {
        heading: "What you receive",
        paragraphs: [
          "A focused plan, agreed campaign activity and reporting against the objective. We establish what can be measured before launch.",
        ],
      },
      {
        heading: "How we work",
        paragraphs: [
          "We start with the purpose: what you want people to see, who they are and what you’d like them to do next. From there I set up what’s needed, run the agreed activity and report back on how it went.",
        ],
      },
      {
        heading: "Good to know",
        paragraphs: [
          "Advertising spend is separate from my fee. If a campaign needs specialist input, we identify that during scoping.",
        ],
      },
    ],
    closing: {
      heading: "Have something you want more people to see?",
      text: "Let’s talk through the audience and the outcome you’re aiming for.",
    },
    related: ["communications-strategy", "communications-delivery"],
  },
  {
    slug: "team-development",
    name: "Development",
    label: "Communications Team Development",
    summaryLead: "Make communications easier to manage over time.",
    summary:
      "Useful templates, workflows, coaching and documentation that strengthen your team’s capability.",
    headline: "Make communications easier for your team.",
    intro: [
      "Good communications depend on people knowing what to do, having useful tools and being able to keep the work moving. I help put those things in place, working alongside the people who do the work.",
    ],
    metaDescription:
      "Templates, workflows, coaching and documentation that make communications easier for your team to manage.",
    help: {
      heading: "What I can help with",
      items: [
        "Planning and content templates your team will use",
        "Briefing and approval workflows",
        "Coaching for the people responsible for communications",
        "Guidance on channels, publishing and reporting",
        "Handover documentation, so knowledge stays with the team",
      ],
    },
    blocks: [
      {
        heading: "What you receive",
        paragraphs: [
          "Practical tools and guidance built around your team’s actual work, with documentation that keeps things consistent over time.",
        ],
      },
      {
        heading: "How we work",
        paragraphs: [
          "We agree what’s needed. I then develop the approach and test it with the people who will use it. We adjust anything that doesn’t work in practice before handover.",
        ],
      },
      {
        heading: "Who it suits",
        paragraphs: [
          "Teams that are taking on more of their own communications work and want to rely less on outside support over time.",
        ],
      },
    ],
    closing: {
      heading: "Let’s make the day-to-day work easier.",
      text: "Tell me where your team needs more clarity or confidence.",
    },
    related: ["communications-strategy", "communications-delivery"],
  },
  {
    slug: "ai-visibility",
    name: "AI Visibility",
    label: "AI Visibility Review and Improvement",
    summaryLead: "Understand how your organisation appears in AI search.",
    summary:
      "Review what’s being said, improve the information available and measure what changes.",
    headline: "Understand how your organisation appears in AI search.",
    intro: [
      "When someone asks an AI tool about your services, does your organisation appear? Is the information accurate, and where does the answer come from?",
      "I help you establish a starting point, identify useful improvements and measure what changes over time.",
    ],
    metaDescription:
      "Find out how your organisation appears in AI search. A baseline and roadmap, practical improvements and retesting to measure what changes.",
    help: {
      heading: "What I can help with",
      intro: "The work has three parts.",
      parts: [
        {
          title: "Baseline and roadmap",
          text: "We agree the questions your customers are likely to ask. I test them across selected AI platforms, review your website and wider online presence, and provide a prioritised plan.",
        },
        {
          title: "Practical improvements",
          text: "I implement the content, FAQ, business profile and listing updates you approve. Where technical changes are needed, I work with your website provider.",
        },
        {
          title: "Retesting",
          text: "I repeat the agreed questions and compare mentions, citations and accuracy. Where measurement is available, I also review relevant traffic and enquiries.",
        },
      ],
    },
    steps: {
      heading: "How we work",
      items: [
        { title: "Scope", text: "We agree the goals and the questions to test." },
        { title: "Access", text: "You arrange the permissions the work needs." },
        { title: "Baseline", text: "I record the starting point before anything changes." },
        { title: "Improve", text: "I implement the improvements you approve." },
        { title: "Retest", text: "I repeat the same questions and report what changed." },
      ],
    },
    blocks: [
      {
        heading: "Getting started",
        paragraphs: [
          "I start with a short questionnaire and a tiered access checklist. Depending on the scope, I’ll ask for permissions to your website, Google Analytics, Search Console and Business Profile.",
          "If some access isn’t available, we agree a reduced scope. Account ownership stays with you.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is it the same as SEO?",
        answer:
          "No, though the two overlap. Clear, accurate website content and sound technical foundations help with both. AI visibility also looks at how AI tools describe your organisation and which sources they draw on.",
      },
      {
        question: "Can you guarantee we’ll be recommended?",
        answer:
          "No. Nobody can guarantee what an AI tool will say or cite. I improve the quality and consistency of the information available about you, then measure what changes.",
      },
      {
        question: "How long before we see a change?",
        answer:
          "The first retest is around four to six weeks after improvements are published. A change in results doesn’t prove a particular edit caused it, so I report what moved and where the limits are.",
      },
    ],
    closing: {
      heading: "Want to know how you appear in AI search?",
      text: "Tell me about your organisation and the questions your customers ask.",
    },
    related: ["communications-strategy", "communications-delivery"],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function servicePath(slug: ServiceSlug): string {
  return `/${slug}/`;
}
