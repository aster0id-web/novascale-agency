export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  highlight?: boolean;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: "SaaS" | "E-Commerce" | "AI Tools" | "Landing Page";
  outcome: string;
  description: string;
  techStack: string[];
  results: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  text: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ProjectType {
  id: string;
  label: string;
  basePrice: [number, number];
  baseDays: [number, number];
}

export interface Addon {
  id: string;
  label: string;
  priceAdd: number;
  daysAdd: number;
}

export const services: Service[] = [
  {
    id: "nextjs-apps",
    title: "Next.js Web Apps",
    description:
      "Lightning-fast, SEO-optimized web applications built with the latest Next.js App Router. From marketing sites to complex dashboards.",
    icon: "Zap",
    features: ["App Router", "Server Components", "Edge Runtime", "ISR/SSR"],
    highlight: true,
  },
  {
    id: "ai-workflows",
    title: "AI Automation",
    description:
      "Custom AI workflows that automate repetitive tasks, generate content, and surface insights — integrated directly into your product.",
    icon: "Brain",
    features: ["LLM Integration", "RAG Pipelines", "Custom Agents", "API Design"],
  },
  {
    id: "ecommerce",
    title: "E-Commerce Stores",
    description:
      "High-converting storefronts with optimized checkout flows, payment integrations, and real-time inventory management.",
    icon: "ShoppingCart",
    features: ["Stripe Payments", "Inventory Sync", "Cart Optimization", "Analytics"],
  },
  {
    id: "ui-ux",
    title: "UI/UX Design Systems",
    description:
      "Pixel-perfect design systems that balance aesthetics with conversion — crafted in Figma, delivered as production-ready components.",
    icon: "Layers",
    features: ["Figma Design", "Component Library", "Design Tokens", "A/B Testing"],
  },
  {
    id: "saas-dashboards",
    title: "SaaS Dashboards",
    description:
      "Complex, data-rich dashboards with real-time updates, role-based access, and intuitive analytics for your power users.",
    icon: "LayoutDashboard",
    features: ["Real-time Data", "RBAC", "Charts & Viz", "Multi-tenant"],
  },
  {
    id: "performance",
    title: "Performance Audits",
    description:
      "Deep-dive Lighthouse & Core Web Vitals audits with actionable fixes that move the needle on conversions and SEO rankings.",
    icon: "TrendingUp",
    features: ["Core Web Vitals", "Lighthouse 100", "SEO Boost", "Bundle Analysis"],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "launchly",
    title: "Launchly — SaaS Onboarding Platform",
    client: "Launchly Inc.",
    category: "SaaS",
    outcome: "Reduced time-to-value by 62%",
    description:
      "Rebuilt Launchly's onboarding flow from scratch with contextual tooltips, smart defaults, and a progress-driven dashboard. Users now reach their first 'aha moment' 3x faster.",
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Prisma", "Postgres", "Stripe"],
    results: [
      "62% reduction in time-to-value",
      "41% improvement in day-7 retention",
      "Lighthouse score 98/100",
      "NPS jumped from 34 → 71",
    ],
    image: "saas",
  },
  {
    id: "trendkart",
    title: "TrendKart — Fashion E-Commerce",
    client: "TrendKart GmbH",
    category: "E-Commerce",
    outcome: "Reduced checkout drop-off by 38%",
    description:
      "Overhauled TrendKart's checkout from a 7-step form to a single-page progressive flow. Integrated Apple Pay & Google Pay, reducing friction at the payment step by 54%.",
    techStack: ["Next.js", "Shopify API", "Stripe", "Cloudinary", "Vercel"],
    results: [
      "38% reduction in checkout abandonment",
      "54% faster payment completion",
      "$2.1M additional ARR in Q1",
      "Mobile conversion +28%",
    ],
    image: "ecommerce",
  },
  {
    id: "copilot-ai",
    title: "CopilotAI — Writing Assistant",
    client: "CopilotAI Labs",
    category: "AI Tools",
    outcome: "+140% trial-to-paid conversion",
    description:
      "Built an AI writing assistant with real-time streaming, smart suggestions, and a document collaboration layer. Integrated Claude & GPT-4 with custom prompt orchestration.",
    techStack: ["Next.js", "OpenAI API", "Anthropic", "Vercel AI SDK", "Redis", "Supabase"],
    results: [
      "140% improvement in trial-to-paid",
      "Real-time streaming < 50ms TTFT",
      "10,000 DAU in 60 days",
      "99.98% uptime via edge functions",
    ],
    image: "ai",
  },
  {
    id: "meridian",
    title: "Meridian — B2B Analytics Dashboard",
    client: "Meridian Data",
    category: "SaaS",
    outcome: "Reduced churn by 22% via better UX",
    description:
      "Designed and built a comprehensive analytics dashboard with 40+ chart types, custom report builder, and CSV/PDF export — all with sub-200ms load times.",
    techStack: ["Next.js", "Recharts", "TypeScript", "Tanstack Query", "FastAPI", "Postgres"],
    results: [
      "22% reduction in monthly churn",
      "Sub-200ms dashboard load time",
      "40+ custom chart types",
      "NPS score 82 (industry avg: 31)",
    ],
    image: "saas",
  },
  {
    id: "vitabox",
    title: "VitaBox — Subscription Commerce",
    client: "VitaBox Health",
    category: "E-Commerce",
    outcome: "AOV increased by 47% with smart upsells",
    description:
      "Built a subscription commerce platform with smart upsell logic, personalized bundle recommendations, and a churn-prevention flow that saves 1 in 3 cancellations.",
    techStack: ["Next.js", "Stripe Billing", "Sanity CMS", "Algolia", "Vercel"],
    results: [
      "47% increase in average order value",
      "33% of cancellations recovered",
      "98/100 Lighthouse performance",
      "2.1s average page load on mobile",
    ],
    image: "ecommerce",
  },
  {
    id: "synthos",
    title: "Synthos — Code Review AI",
    client: "Synthos Corp",
    category: "AI Tools",
    outcome: "Cut PR review time by 71%",
    description:
      "Integrated an AI code review agent into GitHub workflows. Synthos reads diffs, spots bugs, suggests improvements, and writes test cases — all in under 90 seconds.",
    techStack: ["Next.js", "GitHub API", "OpenAI", "LangChain", "Vercel", "Redis"],
    results: [
      "71% faster PR review cycles",
      "43% fewer bugs reaching production",
      "90-second average analysis time",
      "Integration with 500+ repos in month 1",
    ],
    image: "ai",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "CEO",
    company: "Launchly Inc.",
    avatar: "SC",
    text: "NovaScale Studio didn't just build our product — they reshaped how our users experience it. The attention to performance and conversion details was unlike any agency we've worked with.",
  },
  {
    id: "2",
    name: "Marcus Webb",
    role: "Head of Growth",
    company: "TrendKart GmbH",
    avatar: "MW",
    text: "They shipped a full checkout redesign in 11 days. Zero bugs at launch. Our mobile conversion rate jumped 28% in the first month. Genuinely impressive execution.",
  },
  {
    id: "3",
    name: "Priya Nair",
    role: "CTO",
    company: "CopilotAI Labs",
    avatar: "PN",
    text: "The AI streaming implementation they built is some of the cleanest code I've ever reviewed. Under 50ms TTFT on complex completions. These folks know their craft.",
  },
];

export const faqItems: FAQItem[] = [
  {
    id: "1",
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary by scope. A focused landing page takes 3–5 days. A full-stack SaaS MVP runs 3–6 weeks. We provide exact estimates during our discovery call, and you'll always see real-time progress via our private project dashboard.",
  },
  {
    id: "2",
    question: "How many revision rounds are included?",
    answer:
      "Every project includes unlimited revision rounds until you're satisfied — we don't do arbitrary revision caps. We start with a thorough discovery phase so revisions are minimal in practice. Major scope changes are handled transparently with a quick change order.",
  },
  {
    id: "3",
    question: "Who owns the code and design assets?",
    answer:
      "You own 100% of everything we produce — code, design files, assets, and documentation. Upon final payment, all intellectual property transfers to you with no licensing restrictions. We hand over a clean Git repo with full commit history.",
  },
  {
    id: "4",
    question: "Do you offer ongoing maintenance and support?",
    answer:
      "Yes. We offer flexible retainer plans starting at 10 hours/month for bug fixes, dependency updates, and small feature additions. Many clients keep us on retainer after launch for continuous improvements.",
  },
  {
    id: "5",
    question: "How do you handle pricing and payments?",
    answer:
      "We work on fixed-price contracts (no surprise hourly overruns). Payment is split: 50% upfront to begin, 50% on delivery. For projects over $10k, we offer milestone-based payment schedules. We accept wire transfer, ACH, and all major cards.",
  },
  {
    id: "6",
    question: "What tech stack do you specialize in?",
    answer:
      "Our core stack is Next.js (App Router), TypeScript, Tailwind CSS, Prisma, and PostgreSQL — deployed on Vercel. We're also proficient in Supabase, Stripe, OpenAI/Anthropic integrations, Shopify headless, and most modern React ecosystem tools.",
  },
];

export const projectTypes: ProjectType[] = [
  {
    id: "landing",
    label: "Landing Page",
    basePrice: [2500, 4500],
    baseDays: [3, 7],
  },
  {
    id: "saas",
    label: "Full-Stack SaaS",
    basePrice: [12000, 25000],
    baseDays: [21, 42],
  },
  {
    id: "ecommerce",
    label: "E-Commerce Store",
    basePrice: [6000, 14000],
    baseDays: [14, 28],
  },
  {
    id: "ai-tool",
    label: "AI Tool / Chatbot",
    basePrice: [8000, 18000],
    baseDays: [14, 35],
  },
];

export const addons: Addon[] = [
  {
    id: "ui-ux",
    label: "Custom UI/UX Design",
    priceAdd: 2500,
    daysAdd: 5,
  },
  {
    id: "stripe",
    label: "Stripe Payments",
    priceAdd: 1500,
    daysAdd: 3,
  },
  {
    id: "ai",
    label: "AI Integration",
    priceAdd: 3500,
    daysAdd: 7,
  },
  {
    id: "admin",
    label: "Admin Dashboard",
    priceAdd: 3000,
    daysAdd: 7,
  },
  {
    id: "rush",
    label: "Rush Delivery (50% faster)",
    priceAdd: 2000,
    daysAdd: -50, // percentage reduction
  },
];

export const clientLogos = [
  "Launchly",
  "TrendKart",
  "CopilotAI",
  "Meridian",
  "VitaBox",
  "Synthos",
  "NexaFlow",
  "PulseCRM",
  "GridSpace",
  "Atmos",
];

export const metrics = [
  { value: 47, suffix: "+", label: "Projects Delivered", prefix: "" },
  { value: 99, suffix: "", label: "Avg Lighthouse Score", prefix: "" },
  { value: 140, suffix: "%", label: "Avg Conversion Lift", prefix: "+" },
  { value: 14, suffix: " days", label: "Average Delivery", prefix: "" },
];
