"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowDown } from "lucide-react";
import { projectTypes, addons } from "@/data/index";

function formatPrice(n: number) {
  return "$" + n.toLocaleString();
}

interface CalculatorSectionProps {
  onEstimate?: (details: string) => void;
}

export default function CalculatorSection({ onEstimate }: CalculatorSectionProps) {
  const [projectTypeId, setProjectTypeId] = useState(projectTypes[0].id);
  const [selectedAddons, setSelectedAddons] = useState<Set<string>>(new Set());
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 0]);
  const [daysRange, setDaysRange] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    const pt = projectTypes.find((p) => p.id === projectTypeId)!;
    let minPrice = pt.basePrice[0];
    let maxPrice = pt.basePrice[1];
    let minDays = pt.baseDays[0];
    let maxDays = pt.baseDays[1];

    for (const addonId of selectedAddons) {
      const addon = addons.find((a) => a.id === addonId)!;
      if (addon.id === "rush") {
        minDays = Math.round(minDays * 0.5);
        maxDays = Math.round(maxDays * 0.5);
      } else {
        minPrice += addon.priceAdd;
        maxPrice += addon.priceAdd;
        minDays += addon.daysAdd;
        maxDays += addon.daysAdd;
      }
    }

    if (selectedAddons.has("rush")) {
      const rush = addons.find((a) => a.id === "rush")!;
      minPrice += rush.priceAdd;
      maxPrice += rush.priceAdd;
    }

    setPriceRange([minPrice, maxPrice]);
    setDaysRange([minDays, maxDays]);
  }, [projectTypeId, selectedAddons]);

  function toggleAddon(id: string) {
    setSelectedAddons((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function handleSendToContact() {
    const pt = projectTypes.find((p) => p.id === projectTypeId)!;
    const addonLabels = addons
      .filter((a) => selectedAddons.has(a.id))
      .map((a) => a.label)
      .join(", ");
    const summary = `Project Type: ${pt.label}${addonLabels ? `\nSelected Modules: ${addonLabels}` : ""}\nEstimated Investment: ${formatPrice(priceRange[0])} – ${formatPrice(priceRange[1])}\nEstimated Production Sprint: ${daysRange[0]}–${daysRange[1]} Days`;
    onEstimate?.(summary);
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section id="calculator" className="py-24 md:py-32 bg-[#f2f4f6] border-b-2 border-[#00214d] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 border-2 border-[#00214d] bg-[#00ebc7] text-[#00214d] text-xs font-bold px-3.5 py-1.5 rounded-lg shadow-[2px_2px_0px_#00214d] mb-4">
            Transparent Pricing Estimator
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.02em] text-[#00214d]">
            Calculate your investment.
          </h2>
          <p className="mt-4 text-lg text-[#1b2d45] font-normal leading-relaxed">
            Select your project type and desired modules. Real-time timeline and budget estimates based on our standard 14-day production sprints.
          </p>
        </div>

        {/* 2-Column Split Estimator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (7 cols): Selectors */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Step 1: Project Type */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-7 h-7 rounded-lg bg-[#00214d] text-[#fffffe] border-2 border-[#00214d] text-xs flex items-center justify-center font-bold">
                  1
                </span>
                <h3 className="font-display font-bold text-xl text-[#00214d]">
                  Choose Project Type
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {projectTypes.map((pt) => {
                  const active = projectTypeId === pt.id;
                  return (
                    <button
                      key={pt.id}
                      onClick={() => setProjectTypeId(pt.id)}
                      className={`p-5 rounded-lg border-2 text-left transition-all cursor-pointer flex flex-col justify-between ${
                        active
                          ? "border-[#00214d] bg-[#00214d] text-[#fffffe] shadow-[5px_5px_0px_#00ebc7] -translate-x-0.5 -translate-y-0.5"
                          : "border-[#00214d] bg-[#fffffe] text-[#00214d] shadow-[3px_3px_0px_#00214d] hover:bg-[#f2f4f6]"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <span className="font-display font-bold text-base">{pt.label}</span>
                        <div
                          className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 ${
                            active
                              ? "border-[#00ebc7] bg-[#00ebc7] text-[#00214d]"
                              : "border-[#00214d] bg-[#fffffe]"
                          }`}
                        >
                          {active && <Check size={13} strokeWidth={3} />}
                        </div>
                      </div>
                      <div className={`text-xs font-semibold ${active ? "text-[#00ebc7]" : "text-[#1b2d45]"}`}>
                        {formatPrice(pt.basePrice[0])} – {formatPrice(pt.basePrice[1])} · {pt.baseDays[0]}–{pt.baseDays[1]} days
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Add-on Capabilities */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-7 h-7 rounded-lg bg-[#00214d] text-[#fffffe] border-2 border-[#00214d] text-xs flex items-center justify-center font-bold">
                  2
                </span>
                <h3 className="font-display font-bold text-xl text-[#00214d]">
                  Add Technical Capabilities & Modules
                </h3>
              </div>

              <div className="space-y-3">
                {addons.map((addon) => {
                  const active = selectedAddons.has(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all cursor-pointer flex items-center justify-between ${
                        active
                          ? "border-[#00214d] bg-[#fffffe] shadow-[4px_4px_0px_#00214d] -translate-x-0.5 -translate-y-0.5"
                          : "border-[#00214d] bg-[#fffffe] shadow-[2px_2px_0px_#00214d] hover:bg-[#f2f4f6]"
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div
                          className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
                            active
                              ? "border-[#00ebc7] bg-[#00ebc7] text-[#00214d]"
                              : "border-[#00214d] bg-[#fffffe]"
                          }`}
                        >
                          {active && <Check size={13} strokeWidth={3} />}
                        </div>
                        <div>
                          <div className="font-display font-bold text-base text-[#00214d]">
                            {addon.label}
                          </div>
                          <div className="text-xs text-[#1b2d45] font-medium mt-0.5">
                            {addon.id === "rush"
                              ? `+${formatPrice(addon.priceAdd)} · Prioritized 50% velocity reduction`
                              : `+${formatPrice(addon.priceAdd)} · +${addon.daysAdd} sprint days`}
                          </div>
                        </div>
                      </div>

                      <span className="text-xs font-bold text-[#00214d] bg-[#fde24f] px-2.5 py-1 rounded border border-[#00214d] shadow-[1px_1px_0px_#00214d]">
                        +${addon.priceAdd.toLocaleString()}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column (5 cols, sticky): Navy Summary Panel */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="rounded-lg border-2 border-[#00214d] bg-[#00214d] text-[#fffffe] p-7 sm:p-8 shadow-[8px_8px_0px_#00ebc7]">
              
              {/* Card Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b-2 border-[#fffffe]/20">
                <span className="text-xs font-semibold text-[#00ebc7]">
                  Estimated Project Summary
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#00ebc7]" />
              </div>

              {/* Price Readout */}
              <div className="py-6 border-b-2 border-[#fffffe]/20">
                <div className="text-xs font-semibold text-[#f2f4f6] uppercase tracking-wide mb-1">
                  Estimated Investment
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${priceRange[0]}-${priceRange[1]}`}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.2 }}
                    className="font-display font-bold text-4xl sm:text-5xl text-[#00ebc7] tracking-tight"
                  >
                    {formatPrice(priceRange[0])}{" "}
                    <span className="text-[#fffffe] text-3xl font-normal">–</span>{" "}
                    {formatPrice(priceRange[1])}
                  </motion.div>
                </AnimatePresence>
                <div className="text-xs text-[#f2f4f6]/80 mt-1 font-medium">
                  Fixed-scope contract · 50% kick-off, 50% verified production handover.
                </div>
              </div>

              {/* Timeline Box */}
              <div className="py-5 border-b-2 border-[#fffffe]/20">
                <div className="text-xs font-semibold text-[#f2f4f6] uppercase tracking-wide mb-1">
                  Estimated Delivery Sprint
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${daysRange[0]}-${daysRange[1]}`}
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.2 }}
                    className="font-display font-bold text-2xl text-[#fffffe]"
                  >
                    {daysRange[0]}–{daysRange[1]} Working Days
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Scope Breakdown */}
              <div className="py-5 space-y-2.5 text-xs border-b-2 border-[#fffffe]/20">
                <div className="flex justify-between items-center">
                  <span className="text-[#f2f4f6]">Project Type:</span>
                  <span className="font-bold text-[#00ebc7]">
                    {projectTypes.find((p) => p.id === projectTypeId)?.label}
                  </span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-[#f2f4f6]">Selected Modules:</span>
                  <span className="font-bold text-[#fffffe] text-right max-w-[65%]">
                    {selectedAddons.size > 0
                      ? addons
                          .filter((a) => selectedAddons.has(a.id))
                          .map((a) => a.label)
                          .join(", ")
                      : "Base Configuration"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#f2f4f6]">Code Ownership:</span>
                  <span className="font-bold text-[#00ebc7]">100% Client IP</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6">
                <button
                  onClick={handleSendToContact}
                  className="w-full flex items-center justify-center gap-2.5 border-2 border-[#fffffe] bg-[#00ebc7] text-[#00214d] font-bold text-base py-4 rounded-lg shadow-[4px_4px_0px_#fffffe] hover:shadow-[6px_6px_0px_#fffffe] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#fffffe] transition-all cursor-pointer"
                >
                  Apply Estimate to Form
                  <ArrowDown size={18} strokeWidth={2.5} />
                </button>
                <p className="text-xs text-[#f2f4f6]/80 text-center mt-3 font-medium">
                  Pre-fills inquiry form below with your estimate.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
