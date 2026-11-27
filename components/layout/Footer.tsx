"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, Phone, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

const footerLinks = [
  {
    title: "Capabilities",
    links: [
      { label: "Next.js Web Applications", href: "#services" },
      { label: "AI Workflow Integration", href: "#services" },
      { label: "Custom E-Commerce & Checkout", href: "#services" },
      { label: "SaaS Dashboards & Portals", href: "#services" },
      { label: "Design Systems & Audits", href: "#services" },
    ],
  },
  {
    title: "Navigation",
    links: [
      { label: "Selected Work Archive", href: "#work" },
      { label: "Pricing Calculator", href: "#calculator" },
      { label: "Client Specifications & FAQ", href: "#faq" },
      { label: "Direct Partner Contact", href: "#contact" },
    ],
  },
];

const FOUNDER_EMAIL = "shehabahmed2020all@gmail.com";
const FOUNDER_PHONE = "01006019372";

export default function Footer() {
  const [emailCopied, setEmailCopied] = useState(false);

  function handleEmailCopy(e: React.MouseEvent<HTMLAnchorElement>) {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(FOUNDER_EMAIL);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2400);
    }
  }

  return (
    <footer className="border-t-2 border-[#00214d] bg-[#00214d] text-[#fffffe] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b-2 border-[#fffffe]/20">
          
          {/* Brand & Founder Info (5 cols) */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-1">
              <span className="font-display font-bold text-3xl tracking-tight text-[#fffffe]">
                NovaScale<span className="text-[#ff5470]">.</span>
              </span>
              <span className="border border-[#fffffe]/40 bg-[#fffffe]/10 text-[#00ebc7] text-xs font-semibold px-2 py-0.5 rounded ml-2">
                Studio
              </span>
            </div>

            <p className="text-sm text-[#f2f4f6]/85 max-w-sm leading-relaxed font-normal">
              A bespoke web engineering & AI automation studio. Directed and engineered by <strong className="text-[#00ebc7]">Shehab Ahmed Ali</strong>, partnering directly with founders to build high-converting, production-grade applications.
            </p>

            {/* Founder Profile Card */}
            <div className="border-2 border-[#fffffe]/30 bg-[#fffffe]/5 p-4 rounded-lg space-y-2.5 max-w-sm">
              <div className="text-xs font-semibold text-[#fde24f]">
                Founder & Lead Engineer
              </div>
              <div className="font-display font-bold text-lg text-[#fffffe]">
                Shehab Ahmed Ali
              </div>
              
              <div className="flex flex-wrap gap-2 pt-1 relative">
                {/* Email with copy toast */}
                <div className="relative">
                  <a
                    href={`mailto:${FOUNDER_EMAIL}`}
                    onClick={handleEmailCopy}
                    className="inline-flex items-center gap-1.5 border border-[#fffffe]/40 bg-[#fffffe]/10 hover:bg-[#00ebc7] hover:text-[#00214d] text-xs font-semibold px-2.5 py-1 rounded transition-colors cursor-pointer"
                    title="Click to email or copy address"
                  >
                    <Mail size={13} />
                    <span>Email</span>
                  </a>

                  <AnimatePresence>
                    {emailCopied && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="absolute bottom-full left-0 mb-2 z-50 pointer-events-none"
                      >
                        <div className="border-2 border-[#00214d] bg-[#00ebc7] text-[#00214d] text-xs font-bold px-2.5 py-1 rounded shadow-[2px_2px_0px_#00214d] flex items-center gap-1 whitespace-nowrap">
                          <Check size={12} strokeWidth={3} />
                          <span>Copied!</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <a
                  href={`tel:${FOUNDER_PHONE}`}
                  className="inline-flex items-center gap-1.5 border border-[#fffffe]/40 bg-[#fffffe]/10 hover:bg-[#00ebc7] hover:text-[#00214d] text-xs font-semibold px-2.5 py-1 rounded transition-colors"
                >
                  <Phone size={13} />
                  <span>01006019372</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/shehab-ahmed-ali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 border border-[#fffffe]/40 bg-[#fffffe]/10 hover:bg-[#00ebc7] hover:text-[#00214d] text-xs font-semibold px-2.5 py-1 rounded transition-colors"
                >
                  <LinkedinIcon />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/aster0id-web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 border border-[#fffffe]/40 bg-[#fffffe]/10 hover:bg-[#00ebc7] hover:text-[#00214d] text-xs font-semibold px-2.5 py-1 rounded transition-colors"
                >
                  <GithubIcon />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            <div className="pt-1 flex items-center gap-2.5">
              <span className="border-2 border-[#fffffe] bg-[#00ebc7] text-[#00214d] text-xs font-bold px-2.5 py-1 rounded shadow-[2px_2px_0px_#fffffe]">
                Direct Partner Model
              </span>
              <span className="border-2 border-[#fffffe] bg-[#fde24f] text-[#00214d] text-xs font-bold px-2.5 py-1 rounded shadow-[2px_2px_0px_#fffffe]">
                Available Worldwide
              </span>
            </div>
          </div>

          {/* Links (7 cols) */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h4 className="text-sm font-bold text-[#00ebc7] mb-5">
                  {group.title}
                </h4>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-[#f2f4f6]/80 hover:text-[#00ebc7] font-medium transition-colors flex items-center gap-1 group"
                      >
                        {link.label}
                        <ArrowUpRight
                          size={14}
                          className="opacity-0 group-hover:opacity-100 transition-opacity text-[#00ebc7]"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Colophon & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-[#f2f4f6]/80">
          <div>
            © 2027 NovaScale Studio. Founded and directed by Shehab Ahmed Ali.
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#00ebc7]">Next.js 16</span>
            <span>·</span>
            <span>Tailwind CSS v4</span>
            <span>·</span>
            <span className="text-[#fde24f]">100% IP Transfer</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
