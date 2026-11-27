"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, ShieldCheck } from "lucide-react";

function scrollToId(id: string) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function HeroSection() {
  return (
    <section className="relative bg-[#fffffe] pt-12 pb-24 md:py-28 lg:py-32 border-b-2 border-[#00214d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetric 12-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (7 cols): Left-Aligned Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Studio Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 border-2 border-[#00214d] bg-[#fde24f] text-[#00214d] text-xs font-bold px-3.5 py-1.5 rounded-lg shadow-[2px_2px_0px_#00214d] mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#00214d]" />
              Now accepting projects for Q1 & Q2
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.02em] text-[#00214d] leading-[1.05]"
            >
              Web engineering for founders who value{" "}
              <span className="bg-[#00ebc7] px-2 py-0.5 border-2 border-[#00214d] shadow-[3px_3px_0px_#00214d] inline-block -rotate-1 mt-1">
                revenue
              </span>{" "}
              over hype.
            </motion.h1>

            {/* 2-Sentence Value Proposition */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-[#1b2d45] leading-relaxed max-w-xl mt-6 mb-8 font-normal"
            >
              NovaScale Studio builds lightning-fast Next.js platforms, custom AI workflows, and high-converting storefronts. Shipped in 14-day production sprints with zero technical debt and 100% intellectual property handover.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <button
                onClick={() => scrollToId("#calculator")}
                className="inline-flex items-center justify-center gap-2.5 border-2 border-[#00214d] bg-[#00ebc7] text-[#00214d] font-bold text-base px-7 py-4 rounded-lg shadow-[4px_4px_0px_#00214d] hover:shadow-[6px_6px_0px_#00214d] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#00214d] transition-all cursor-pointer"
              >
                Estimate Your Project
                <ArrowRight size={18} strokeWidth={2.5} />
              </button>

              <button
                onClick={() => scrollToId("#work")}
                className="inline-flex items-center justify-center gap-2 border-2 border-[#00214d] bg-[#fffffe] text-[#00214d] font-bold text-base px-7 py-4 rounded-lg shadow-[4px_4px_0px_#00214d] hover:bg-[#f2f4f6] hover:shadow-[6px_6px_0px_#00214d] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#00214d] transition-all cursor-pointer"
              >
                View Case Studies
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </button>
            </motion.div>

            {/* Studio Guarantees */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 mt-8 border-t-2 border-[#00214d]/15 w-full text-xs font-semibold text-[#00214d]"
            >
              <div className="flex items-center gap-2">
                <Check size={16} className="text-[#00214d] shrink-0" strokeWidth={3} />
                <span>Fixed-Price Sprints</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={16} className="text-[#00214d] shrink-0" strokeWidth={3} />
                <span>Unlimited Revisions</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <ShieldCheck size={16} className="text-[#00214d] shrink-0" strokeWidth={2.5} />
                <span>Led by Shehab Ahmed Ali</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column (5 cols): Structured Studio Spec Sheet */}
          <div className="lg:col-span-5 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="border-2 border-[#00214d] rounded-lg bg-[#fffffe] shadow-[8px_8px_0px_#00214d] overflow-hidden"
            >
              {/* Header Bar */}
              <div className="border-b-2 border-[#00214d] bg-[#00214d] text-[#fffffe] px-5 py-3.5 flex items-center justify-between">
                <span className="text-xs font-semibold tracking-wide text-[#f2f4f6]">
                  Studio Quality Standards
                </span>
                {/* 3 Color Accents */}
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-sm bg-[#00ebc7] border border-[#00214d]" />
                  <div className="w-3 h-3 rounded-sm bg-[#ff5470] border border-[#00214d]" />
                  <div className="w-3 h-3 rounded-sm bg-[#fde24f] border border-[#00214d]" />
                </div>
              </div>

              {/* Sub-header title */}
              <div className="px-5 py-4 border-b-2 border-[#00214d] bg-[#f2f4f6] flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-[#1b2d45]">Performance Benchmark</div>
                  <div className="font-display font-bold text-lg text-[#00214d]">Standard Client Delivery Metrics</div>
                </div>
                <span className="border-2 border-[#00214d] bg-[#00ebc7] text-[#00214d] text-xs font-bold px-2 py-0.5 rounded">
                  Verified
                </span>
              </div>

              {/* Spec Rows */}
              <div className="divide-y-2 divide-[#00214d]">
                {/* Row 1 */}
                <div className="p-5 flex items-center justify-between hover:bg-[#f2f4f6]/50 transition-colors">
                  <div>
                    <div className="text-xs font-semibold text-[#1b2d45]">Performance Guarantee</div>
                    <div className="font-display font-bold text-3xl text-[#00214d] mt-0.5">99 / 100</div>
                    <div className="text-xs text-[#1b2d45] font-medium mt-0.5">Lighthouse Score across Mobile & Desktop</div>
                  </div>
                  <span className="border-2 border-[#00214d] bg-[#fde24f] text-[#00214d] text-xs font-bold px-2.5 py-1 rounded shadow-[2px_2px_0px_#00214d]">
                    Top 1%
                  </span>
                </div>

                {/* Row 2 */}
                <div className="p-5 flex items-center justify-between hover:bg-[#f2f4f6]/50 transition-colors">
                  <div>
                    <div className="text-xs font-semibold text-[#1b2d45]">Measured Impact</div>
                    <div className="font-display font-bold text-3xl text-[#00214d] mt-0.5">+140%</div>
                    <div className="text-xs text-[#1b2d45] font-medium mt-0.5">Average trial-to-paid conversion lift</div>
                  </div>
                  <span className="border-2 border-[#00214d] bg-[#ff5470] text-[#fffffe] text-xs font-bold px-2.5 py-1 rounded shadow-[2px_2px_0px_#00214d]">
                    Audited
                  </span>
                </div>

                {/* Row 3 */}
                <div className="p-5 flex items-center justify-between hover:bg-[#f2f4f6]/50 transition-colors">
                  <div>
                    <div className="text-xs font-semibold text-[#1b2d45]">Cycle Velocity</div>
                    <div className="font-display font-bold text-3xl text-[#00214d] mt-0.5">14 Days</div>
                    <div className="text-xs text-[#1b2d45] font-medium mt-0.5">Average kick-off to production deployment</div>
                  </div>
                  <span className="border-2 border-[#00214d] bg-[#00ebc7] text-[#00214d] text-xs font-bold px-2.5 py-1 rounded shadow-[2px_2px_0px_#00214d]">
                    Sprint
                  </span>
                </div>
              </div>

              {/* Spec Footer */}
              <div className="p-4 bg-[#f2f4f6] border-t-2 border-[#00214d]">
                <div className="text-xs font-semibold text-[#1b2d45] mb-2">
                  Modern Production Ecosystem:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["Next.js 16", "TypeScript", "Tailwind v4", "Prisma/Postgres", "Vercel Edge", "OpenAI / Claude"].map((tech) => (
                    <span
                      key={tech}
                      className="border border-[#00214d] bg-[#fffffe] text-[#00214d] text-xs font-semibold px-2 py-0.5 rounded shadow-[1px_1px_0px_#00214d]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
