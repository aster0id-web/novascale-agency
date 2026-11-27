"use client";

import { motion } from "framer-motion";
import { clientLogos, metrics } from "@/data/index";
import { useEffect, useRef, useState } from "react";

function CountUp({ target, suffix, prefix }: { target: number; suffix: string; prefix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1400;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function LogoStrip() {
  return (
    <section className="bg-[#f2f4f6] py-16 border-b-2 border-[#00214d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b-2 border-[#00214d]/20 gap-4">
          <p className="text-xs font-bold tracking-wide text-[#00214d] uppercase">
            Trusted by venture-backed startups and product founders
          </p>
          <span className="text-xs font-semibold text-[#1b2d45]">
            100% production deployments
          </span>
        </div>

        {/* Partner Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
          {clientLogos.map((logo) => (
            <div
              key={logo}
              className="border-2 border-[#00214d] bg-[#fffffe] px-4 py-3 rounded-lg shadow-[3px_3px_0px_#00214d] hover:shadow-[4px_4px_0px_#00214d] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group cursor-default"
            >
              <span className="w-2 h-2 rounded-full bg-[#00ebc7] border border-[#00214d] group-hover:bg-[#ff5470] transition-colors" />
              <span className="font-display font-bold text-sm text-[#00214d] tracking-tight">
                {logo}
              </span>
            </div>
          ))}
        </div>

        {/* Key Metric Panels */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map(({ value, suffix, prefix, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="border-2 border-[#00214d] bg-[#fffffe] p-6 rounded-lg shadow-[4px_4px_0px_#00214d]"
            >
              <div className="text-xs font-semibold text-[#1b2d45] mb-1">
                Metric 0{i + 1}
              </div>
              <div className="font-display text-4xl font-bold text-[#00214d] tracking-tight">
                <CountUp target={value} suffix={suffix} prefix={prefix} />
              </div>
              <div className="text-sm font-semibold text-[#1b2d45] mt-1.5">
                {label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
