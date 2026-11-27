"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/index";
import { CheckCircle2 } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-[#fffffe] border-b-2 border-[#00214d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 border-2 border-[#00214d] bg-[#fde24f] text-[#00214d] text-xs font-bold px-3.5 py-1.5 rounded-lg shadow-[2px_2px_0px_#00214d] mb-4">
            Client Testimonials
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.02em] text-[#00214d]">
            Direct feedback from client leaders.
          </h2>
          <p className="mt-4 text-lg text-[#1b2d45] font-normal leading-relaxed">
            Our reputation is built on shipping on time, communicating with absolute transparency, and delivering quantifiable ROI.
          </p>
        </div>

        {/* 3 Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border-2 border-[#00214d] rounded-lg bg-[#fffffe] p-8 shadow-[5px_5px_0px_#00214d] hover:shadow-[7px_7px_0px_#00214d] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b-2 border-[#00214d]/15">
                  <span className="text-xs font-semibold text-[#00214d]">
                    Client 0{idx + 1}
                  </span>
                  <div className="flex items-center gap-1 text-[#00214d] text-xs font-semibold">
                    <CheckCircle2 size={15} className="text-[#00ebc7]" strokeWidth={3} />
                    <span>Verified Project</span>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <p className="text-[#1b2d45] text-base leading-relaxed font-normal mb-8">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              {/* Founder Signature */}
              <div className="pt-4 border-t-2 border-[#00214d] flex items-center justify-between">
                <div>
                  <div className="font-display font-bold text-lg text-[#00214d]">
                    {t.name}
                  </div>
                  <div className="text-xs font-semibold text-[#1b2d45]">
                    {t.role} · {t.company}
                  </div>
                </div>

                <div className="w-10 h-10 border-2 border-[#00214d] rounded-lg bg-[#fde24f] text-[#00214d] font-display font-bold flex items-center justify-center text-sm shadow-[2px_2px_0px_#00214d]">
                  {t.avatar}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
