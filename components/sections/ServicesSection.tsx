"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ServiceRow {
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
}

const serviceRows: ServiceRow[] = [
  {
    number: "01",
    title: "Next.js Web Applications",
    category: "Core Engineering",
    description:
      "Full-stack React architectures built on the App Router, Edge Runtime, and Server Components. Optimized for sub-second page loads, impeccable SEO, and zero bundle bloat.",
    tags: ["Next.js 16", "App Router", "Edge Runtime", "TypeScript"],
  },
  {
    number: "02",
    title: "AI Workflow Integration",
    category: "Intelligent Systems",
    description:
      "Production-grade LLM integrations, streaming assistants, and autonomous background agents that automate operational workflows directly inside your SaaS product.",
    tags: ["OpenAI / Claude SDK", "RAG Pipelines", "Tool Calling", "Vector DBs"],
  },
  {
    number: "03",
    title: "Custom E-Commerce & Checkout",
    category: "Revenue Engines",
    description:
      "Bespoke storefronts with progressive single-page checkout flows, Stripe billing integrations, multi-currency support, and instant cart updates that eliminate drop-off.",
    tags: ["Stripe Checkout", "Headless Commerce", "Apple Pay / GPay", "Sub-2s FCP"],
  },
  {
    number: "04",
    title: "SaaS Dashboards & Internal Portals",
    category: "Data Platforms",
    description:
      "Complex data dashboards engineered for power users. Sub-200ms query rendering, real-time metrics streaming, role-based access control, and clean CSV/PDF exports.",
    tags: ["Real-time Sockets", "RBAC Auth", "Interactive Charts", "TanStack"],
  },
  {
    number: "05",
    title: "Design Systems & Performance Audits",
    category: "Design & Optimization",
    description:
      "From Figma design tokens to reusable React component libraries. Comprehensive Core Web Vitals audits with surgical code refactoring that converts bounce rates into sales.",
    tags: ["Figma Tokens", "Tailwind CSS", "Lighthouse 99+", "A11y Compliant"],
  },
];

function scrollToCalculator() {
  document.querySelector("#calculator")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#fffffe] border-b-2 border-[#00214d] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Left-Aligned Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 border-2 border-[#00214d] bg-[#00ebc7] text-[#00214d] text-xs font-bold px-3.5 py-1.5 rounded-lg shadow-[2px_2px_0px_#00214d] mb-4">
            Capabilities & Specializations
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.02em] text-[#00214d]">
            Engineered capabilities.
          </h2>
          <p className="mt-4 text-lg text-[#1b2d45] font-normal leading-relaxed">
            We don’t sell bloated monthly retainers or slide decks. Every engagement delivers production-grade TypeScript code designed to scale your revenue.
          </p>
        </div>

        {/* Full-Width Stacked Numbered Rows */}
        <div className="border-t-2 border-[#00214d]">
          {serviceRows.map((row, idx) => (
            <motion.div
              key={row.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              onClick={scrollToCalculator}
              className="group border-b-2 border-[#00214d] py-10 px-4 sm:px-8 hover:bg-[#f2f4f6] transition-colors cursor-pointer"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                
                {/* Left: Number + Category */}
                <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-start justify-between lg:justify-center gap-2">
                  <div className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-[#00214d] tracking-tight">
                    {row.number}
                  </div>
                  <span className="text-xs font-semibold text-[#1b2d45] border border-[#00214d] bg-[#fffffe] px-2.5 py-1 rounded-md">
                    {row.category}
                  </span>
                </div>

                {/* Middle: Title & Description */}
                <div className="lg:col-span-6">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#00214d] tracking-tight group-hover:text-[#ff5470] transition-colors flex items-center gap-2">
                    {row.title}
                    <ArrowUpRight size={22} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-[#ff5470]" />
                  </h3>
                  <p className="mt-2 text-base text-[#1b2d45] leading-relaxed font-normal max-w-xl">
                    {row.description}
                  </p>
                </div>

                {/* Right: Bordered Deliverable Tags */}
                <div className="lg:col-span-3 flex flex-wrap gap-2 lg:justify-end">
                  {row.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border-2 border-[#00214d] bg-[#fffffe] text-[#00214d] text-xs font-semibold px-3 py-1.5 rounded-lg shadow-[2px_2px_0px_#00214d] group-hover:shadow-[3px_3px_0px_#00214d] transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Scope Note */}
        <div className="mt-12 p-6 border-2 border-[#00214d] rounded-lg bg-[#f2f4f6] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[4px_4px_0px_#00214d]">
          <div className="text-sm font-semibold text-[#00214d]">
            Have an unconventional architectural or AI integration requirement?
          </div>
          <button
            onClick={scrollToCalculator}
            className="inline-flex items-center gap-2 border-2 border-[#00214d] bg-[#00ebc7] text-[#00214d] font-bold text-sm px-5 py-2.5 rounded-lg shadow-[3px_3px_0px_#00214d] hover:shadow-[4px_4px_0px_#00214d] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-pointer shrink-0"
          >
            Configure Custom Scope
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </button>
        </div>

      </div>
    </section>
  );
}
