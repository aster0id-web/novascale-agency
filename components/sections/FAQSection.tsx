"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowDown } from "lucide-react";
import { faqItems } from "@/data/index";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0].id);

  function toggle(id: string) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  function scrollToContact() {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#fffffe] border-b-2 border-[#00214d] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column Split FAQ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (4 cols, sticky): Section Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 border-2 border-[#00214d] bg-[#00ebc7] text-[#00214d] text-xs font-bold px-3.5 py-1.5 rounded-lg shadow-[2px_2px_0px_#00214d] mb-4">
              Frequently Asked Questions
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-[-0.02em] text-[#00214d]">
              Everything you need to know.
            </h2>

            <p className="mt-4 text-base text-[#1b2d45] font-normal leading-relaxed">
              Transparent terms, fixed sprint deliverables, and zero agency fluff. Here is exactly how we partner with ambitious founders.
            </p>

            {/* Direct Contact Prompt Card */}
            <div className="mt-8 p-6 border-2 border-[#00214d] rounded-lg bg-[#f2f4f6] shadow-[4px_4px_0px_#00214d]">
              <div className="font-display font-bold text-base text-[#00214d] mb-1">
                Have a specific question?
              </div>
              <p className="text-xs text-[#1b2d45] font-medium leading-relaxed mb-4">
                We can accommodate custom security requirements, bespoke backend architectures, and mutual NDA executions.
              </p>
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 border-2 border-[#00214d] bg-[#fffffe] text-[#00214d] font-bold text-xs px-4 py-2 rounded-lg shadow-[2px_2px_0px_#00214d] hover:bg-[#fde24f] transition-all cursor-pointer"
              >
                Ask a Question
                <ArrowDown size={14} strokeWidth={2.5} />
              </button>
            </div>
          </div>

          {/* Right Column (8 cols): Accordion Rows */}
          <div className="lg:col-span-8 space-y-4">
            {faqItems.map((item, idx) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="border-2 border-[#00214d] rounded-lg bg-[#fffffe] shadow-[3px_3px_0px_#00214d] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggle(item.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-[#f2f4f6]/60 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="text-xs font-semibold text-[#1b2d45] bg-[#f2f4f6] px-2 py-0.5 rounded border border-[#00214d]">
                        0{idx + 1}
                      </span>
                      <span className="font-display font-bold text-lg sm:text-xl text-[#00214d] leading-snug">
                        {item.question}
                      </span>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-lg border-2 border-[#00214d] flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? "bg-[#00214d] text-[#fffffe]" : "bg-[#f2f4f6] text-[#00214d]"
                      }`}
                    >
                      {isOpen ? <Minus size={16} strokeWidth={3} /> : <Plus size={16} strokeWidth={3} />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-2 border-t-2 border-[#00214d] bg-[#f2f4f6]/40 text-[#1b2d45] text-base leading-relaxed font-normal">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
