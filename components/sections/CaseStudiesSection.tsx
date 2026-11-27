"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, CheckCircle, ArrowRight } from "lucide-react";
import { caseStudies, type CaseStudy } from "@/data/index";

type Category = "All" | "SaaS" | "E-Commerce" | "AI Tools";
const categories: Category[] = ["All", "SaaS", "E-Commerce", "AI Tools"];

// Visual preview graphics for each case study
function ProjectPreviewGraphic({ id }: { id: string }) {
  if (id === "launchly") {
    return (
      <div className="h-44 bg-[#00214d] p-6 flex flex-col justify-between relative overflow-hidden text-[#fffffe]">
        <div className="flex justify-between items-start">
          <span className="text-xs font-bold bg-[#00ebc7] text-[#00214d] px-2.5 py-1 rounded border border-[#00214d]">
            Onboarding CRO
          </span>
          <span className="text-xs font-semibold text-[#fde24f]">Case 01</span>
        </div>
        <div className="space-y-1">
          <div className="font-display font-bold text-3xl tracking-tight text-[#fffffe]">
            Launchly<span className="text-[#00ebc7]">.io</span>
          </div>
          <div className="text-xs font-semibold text-[#00ebc7]">Time to value: 45m → 17m (-62%)</div>
        </div>
        <div className="absolute -right-6 -bottom-6 w-24 h-24 border-4 border-[#00ebc7] rounded-lg rotate-12 opacity-30 pointer-events-none" />
      </div>
    );
  }

  if (id === "trendkart") {
    return (
      <div className="h-44 bg-[#f2f4f6] p-6 flex flex-col justify-between relative overflow-hidden text-[#00214d] border-b-2 border-[#00214d]">
        <div className="flex justify-between items-start">
          <span className="text-xs font-bold bg-[#ff5470] text-[#fffffe] px-2.5 py-1 rounded border border-[#00214d]">
            Single-Page Checkout
          </span>
          <span className="text-xs font-semibold text-[#00214d]">Case 02</span>
        </div>
        <div className="space-y-1">
          <div className="font-display font-bold text-3xl tracking-tight text-[#00214d]">
            TrendKart<span className="text-[#ff5470]">.de</span>
          </div>
          <div className="text-xs font-semibold text-[#ff5470]">Checkout abandonment dropped by 38%</div>
        </div>
        <div className="absolute right-4 bottom-4 w-16 h-16 bg-[#ff5470] border-2 border-[#00214d] rounded-lg -rotate-6 shadow-[3px_3px_0px_#00214d] flex items-center justify-center font-display font-bold text-xl text-[#fffffe]">
          TK
        </div>
      </div>
    );
  }

  if (id === "copilot-ai") {
    return (
      <div className="h-44 bg-[#00214d] p-6 flex flex-col justify-between relative overflow-hidden text-[#fffffe]">
        <div className="flex justify-between items-start">
          <span className="text-xs font-bold bg-[#fde24f] text-[#00214d] px-2.5 py-1 rounded border border-[#00214d]">
            Streaming LLM Engine
          </span>
          <span className="text-xs font-semibold text-[#00ebc7]">Case 03</span>
        </div>
        <div className="space-y-1">
          <div className="font-display font-bold text-3xl tracking-tight text-[#fffffe]">
            Copilot<span className="text-[#fde24f]">AI</span>
          </div>
          <div className="text-xs font-semibold text-[#00ebc7]">Response latency: 48ms · +140% upgrades</div>
        </div>
        <div className="absolute right-4 bottom-4 w-12 h-12 bg-[#00ebc7] border-2 border-[#fffffe] rounded-lg rotate-45 shadow-[2px_2px_0px_#fffffe]" />
      </div>
    );
  }

  if (id === "meridian") {
    return (
      <div className="h-44 bg-[#f2f4f6] p-6 flex flex-col justify-between relative overflow-hidden text-[#00214d] border-b-2 border-[#00214d]">
        <div className="flex justify-between items-start">
          <span className="text-xs font-bold bg-[#00ebc7] text-[#00214d] px-2.5 py-1 rounded border border-[#00214d]">
            Analytics Engine
          </span>
          <span className="text-xs font-semibold text-[#00214d]">Case 04</span>
        </div>
        <div className="space-y-1">
          <div className="font-display font-bold text-3xl tracking-tight text-[#00214d]">
            Meridian<span className="text-[#00ebc7]">Data</span>
          </div>
          <div className="text-xs font-semibold text-[#00214d]">Query latency: 180ms</div>
        </div>
        <div className="absolute right-6 bottom-4 flex gap-1 items-end">
          <div className="w-3 h-8 bg-[#00214d] rounded-t" />
          <div className="w-3 h-14 bg-[#00ebc7] border border-[#00214d] rounded-t" />
          <div className="w-3 h-20 bg-[#fde24f] border border-[#00214d] rounded-t" />
        </div>
      </div>
    );
  }

  if (id === "vitabox") {
    return (
      <div className="h-44 bg-[#00214d] p-6 flex flex-col justify-between relative overflow-hidden text-[#fffffe]">
        <div className="flex justify-between items-start">
          <span className="text-xs font-bold bg-[#ff5470] text-[#fffffe] px-2.5 py-1 rounded border border-[#00214d]">
            Subscription Commerce
          </span>
          <span className="text-xs font-semibold text-[#fde24f]">Case 05</span>
        </div>
        <div className="space-y-1">
          <div className="font-display font-bold text-3xl tracking-tight text-[#fffffe]">
            VitaBox<span className="text-[#ff5470]">.health</span>
          </div>
          <div className="text-xs font-semibold text-[#00ebc7]">Average order value lift: +47%</div>
        </div>
        <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-[#fde24f] border-2 border-[#fffffe] rounded-lg rotate-12 flex items-center justify-center font-display font-bold text-[#00214d]">
          VB
        </div>
      </div>
    );
  }

  // synthos
  return (
    <div className="h-44 bg-[#f2f4f6] p-6 flex flex-col justify-between relative overflow-hidden text-[#00214d] border-b-2 border-[#00214d]">
      <div className="flex justify-between items-start">
        <span className="text-xs font-bold bg-[#fde24f] text-[#00214d] px-2.5 py-1 rounded border border-[#00214d]">
          Autonomous Code Review
        </span>
        <span className="text-xs font-semibold text-[#00214d]">Case 06</span>
      </div>
      <div className="space-y-1">
        <div className="font-display font-bold text-3xl tracking-tight text-[#00214d]">
          Synthos<span className="text-[#00214d]">.dev</span>
        </div>
        <div className="text-xs font-semibold text-[#ff5470]">PR turnaround time reduced by 71%</div>
      </div>
      <div className="absolute right-4 bottom-4 w-14 h-14 bg-[#00ebc7] border-2 border-[#00214d] rounded-lg shadow-[3px_3px_0px_#00214d] flex items-center justify-center font-bold text-sm text-[#00214d]">
        AI
      </div>
    </div>
  );
}

export default function CaseStudiesSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  const filtered = caseStudies.filter(
    (s) => activeCategory === "All" || s.category === activeCategory
  );

  return (
    <section id="work" className="py-24 md:py-32 bg-[#fffffe] border-b-2 border-[#00214d] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Filter Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 mb-12 border-b-2 border-[#00214d]/15">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 border-2 border-[#00214d] bg-[#fde24f] text-[#00214d] text-xs font-bold px-3.5 py-1.5 rounded-lg shadow-[2px_2px_0px_#00214d] mb-4">
              Selected Work Archive
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.02em] text-[#00214d]">
              Work that moves metrics.
            </h2>
          </div>

          {/* Clean Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`border-2 border-[#00214d] px-4 py-2 font-bold text-sm rounded-lg transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#00214d] text-[#fffffe] shadow-[3px_3px_0px_#00ebc7] translate-y-[-1px]"
                    : "bg-[#fffffe] text-[#00214d] hover:bg-[#f2f4f6] shadow-[2px_2px_0px_#00214d]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Editorial Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((study, idx) => (
              <motion.div
                key={study.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setSelectedStudy(study)}
                className="group border-2 border-[#00214d] rounded-lg bg-[#fffffe] shadow-[6px_6px_0px_#00214d] hover:shadow-[9px_9px_0px_#00214d] hover:-translate-x-1 hover:-translate-y-1 transition-all overflow-hidden flex flex-col cursor-pointer"
              >
                {/* Preview Block */}
                <ProjectPreviewGraphic id={study.id} />

                {/* Card Body */}
                <div className="p-7 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs font-semibold text-[#1b2d45]">
                        {study.client} · {study.category}
                      </span>
                      <span className="font-bold text-xs text-[#00214d] group-hover:text-[#ff5470] flex items-center gap-1 transition-colors">
                        View Details <ArrowUpRight size={15} strokeWidth={2.5} />
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-2xl text-[#00214d] mt-2 group-hover:text-[#00214d] transition-colors leading-snug">
                      {study.title}
                    </h3>

                    {/* Concrete Business Outcome Callout */}
                    <div className="mt-4 border-2 border-[#00214d] bg-[#fde24f] px-3.5 py-2 rounded-lg font-bold text-sm text-[#00214d] shadow-[2px_2px_0px_#00214d] inline-flex items-center gap-2">
                      <CheckCircle size={16} strokeWidth={2.5} className="text-[#00214d] shrink-0" />
                      <span>{study.outcome}</span>
                    </div>

                    <p className="mt-3 text-sm text-[#1b2d45] font-normal leading-relaxed line-clamp-2">
                      {study.description}
                    </p>
                  </div>

                  {/* Tech stack badges */}
                  <div className="mt-6 pt-5 border-t-2 border-[#00214d]/15 flex flex-wrap gap-1.5">
                    {study.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="border border-[#00214d] bg-[#f2f4f6] text-[#00214d] text-xs font-semibold px-2 py-0.5 rounded shadow-[1px_1px_0px_#00214d]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedStudy && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedStudy(null)}
              className="fixed inset-0 z-50 bg-[#00214d]/50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-4 sm:inset-auto sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-full sm:max-w-2xl z-50 rounded-lg border-2 border-[#00214d] bg-[#fffffe] shadow-[12px_12px_0px_#00214d] overflow-hidden max-h-[92vh] flex flex-col"
            >
              {/* Modal Header Bar */}
              <div className="border-b-2 border-[#00214d] bg-[#00214d] text-[#fffffe] p-5 flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-[#00ebc7]">
                    Project Architecture & Case Review · {selectedStudy.category}
                  </span>
                  <h3 className="font-display font-bold text-2xl text-[#fffffe] mt-0.5">
                    {selectedStudy.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedStudy(null)}
                  className="p-2 border-2 border-[#fffffe] bg-[#ff5470] text-[#fffffe] rounded-lg shadow-[2px_2px_0px_#fffffe] hover:bg-[#ff5470]/90 transition-all cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={18} strokeWidth={3} />
                </button>
              </div>

              {/* Modal Scrollable Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                
                {/* Result Callout */}
                <div className="border-2 border-[#00214d] bg-[#fde24f] p-4 rounded-lg shadow-[3px_3px_0px_#00214d]">
                  <div className="text-xs font-semibold text-[#00214d] mb-1">
                    Primary Verified Outcome
                  </div>
                  <div className="font-display font-bold text-xl text-[#00214d]">
                    {selectedStudy.outcome}
                  </div>
                </div>

                {/* Narrative */}
                <div>
                  <h4 className="text-xs font-bold text-[#00214d] uppercase tracking-wider mb-2">
                    Project Architecture & Objectives
                  </h4>
                  <p className="text-sm sm:text-base text-[#1b2d45] leading-relaxed font-normal">
                    {selectedStudy.description}
                  </p>
                </div>

                {/* Results List */}
                <div>
                  <h4 className="text-xs font-bold text-[#00214d] uppercase tracking-wider mb-3">
                    Audited Production Results
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedStudy.results.map((res) => (
                      <div
                        key={res}
                        className="border-2 border-[#00214d] bg-[#f2f4f6] p-3 rounded-lg text-xs sm:text-sm font-semibold text-[#00214d] flex items-center gap-2 shadow-[2px_2px_0px_#00214d]"
                      >
                        <CheckCircle size={16} className="text-[#00ebc7] shrink-0" strokeWidth={3} />
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-xs font-bold text-[#00214d] uppercase tracking-wider mb-2.5">
                    Production Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedStudy.techStack.map((t) => (
                      <span
                        key={t}
                        className="border-2 border-[#00214d] bg-[#fffffe] text-[#00214d] text-xs font-semibold px-3 py-1.5 rounded-lg shadow-[2px_2px_0px_#00214d]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t-2 border-[#00214d]/15 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#1b2d45]">
                    Planning a similar implementation?
                  </span>
                  <button
                    onClick={() => {
                      setSelectedStudy(null);
                      document.querySelector("#calculator")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-2 border-2 border-[#00214d] bg-[#00ebc7] text-[#00214d] font-bold text-xs sm:text-sm px-4 py-2 rounded-lg shadow-[2px_2px_0px_#00214d] hover:shadow-[3px_3px_0px_#00214d] cursor-pointer"
                  >
                    Estimate Similar Scope
                    <ArrowRight size={14} strokeWidth={2.5} />
                  </button>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
