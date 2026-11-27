"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Mail, Check } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Selected Work", href: "#work" },
  { label: "Pricing Calculator", href: "#calculator" },
  { label: "FAQ", href: "#faq" },
];

const FOUNDER_EMAIL = "shehabahmed2020all@gmail.com";

function scrollToId(id: string) {
  const el = document.querySelector(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  function handleNav(href: string) {
    setMobileOpen(false);
    setTimeout(() => scrollToId(href), 60);
  }

  function handleEmailCopy(e: React.MouseEvent<HTMLAnchorElement>) {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(FOUNDER_EMAIL);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2400);
    }
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-[#fffffe] border-b-2 border-[#00214d]">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Left: Brand logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-1 group text-left cursor-pointer"
          >
            <span className="font-display font-bold text-2xl tracking-tight text-[#00214d]">
              NovaScale<span className="text-[#ff5470]">.</span>
            </span>
            <span className="hidden sm:inline-block border border-[#00214d] bg-[#f2f4f6] text-[#00214d] text-xs font-semibold px-2 py-0.5 rounded ml-2">
              Studio
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-sm font-semibold text-[#1b2d45] hover:text-[#00214d] transition-colors relative py-1 hover:underline underline-offset-4 decoration-2 decoration-[#00ebc7] cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            {/* Direct Email Link with click-to-copy */}
            <div className="relative">
              <a
                href={`mailto:${FOUNDER_EMAIL}`}
                onClick={handleEmailCopy}
                className="inline-flex items-center gap-2 border-2 border-[#00214d] bg-[#f2f4f6] text-[#00214d] font-semibold text-xs px-3.5 py-2 rounded-lg shadow-[2px_2px_0px_#00214d] hover:bg-[#fffffe] hover:shadow-[3px_3px_0px_#00214d] transition-all cursor-pointer"
                title="Click to email or copy address"
              >
                <Mail size={14} strokeWidth={2.5} />
                <span>shehabahmed2020all@gmail.com</span>
              </a>

              {/* Toast */}
              <AnimatePresence>
                {emailCopied && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50 pointer-events-none"
                  >
                    <div className="border-2 border-[#00214d] bg-[#00ebc7] text-[#00214d] text-xs font-bold px-3 py-1.5 rounded-lg shadow-[3px_3px_0px_#00214d] flex items-center gap-1.5 whitespace-nowrap">
                      <Check size={14} strokeWidth={3} />
                      <span>Email copied!</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => handleNav("#contact")}
              className="inline-flex items-center gap-2 border-2 border-[#00214d] bg-[#00ebc7] text-[#00214d] font-bold text-sm px-5 py-2.5 rounded-lg shadow-[3px_3px_0px_#00214d] hover:shadow-[5px_5px_0px_#00214d] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#00214d] transition-all cursor-pointer"
            >
              Start a Project
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 border-2 border-[#00214d] rounded-lg bg-[#fffffe] text-[#00214d] shadow-[2px_2px_0px_#00214d] hover:bg-[#f2f4f6] transition-all cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-[#00214d]/40"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 z-50 h-full w-80 bg-[#fffffe] border-l-2 border-[#00214d] p-6 flex flex-col justify-between shadow-[8px_0px_0px_#00214d]"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b-2 border-[#00214d]">
                  <span className="font-display font-bold text-2xl text-[#00214d]">
                    NovaScale<span className="text-[#ff5470]">.</span>
                  </span>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-2 border-2 border-[#00214d] rounded-lg text-[#00214d] hover:bg-[#f2f4f6]"
                  >
                    <X size={18} strokeWidth={2.5} />
                  </button>
                </div>

                <nav className="flex flex-col gap-3 mt-8">
                  {navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => handleNav(link.href)}
                      className="p-3 text-left font-semibold text-base text-[#00214d] hover:bg-[#f2f4f6] rounded-lg border-2 border-transparent hover:border-[#00214d] transition-all"
                    >
                      {link.label}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="pt-6 border-t-2 border-[#00214d] space-y-3">
                <a
                  href={`mailto:${FOUNDER_EMAIL}`}
                  onClick={handleEmailCopy}
                  className="w-full flex items-center justify-center gap-2 border-2 border-[#00214d] bg-[#f2f4f6] text-[#00214d] font-semibold text-xs py-2.5 rounded-lg shadow-[2px_2px_0px_#00214d]"
                >
                  <Mail size={14} />
                  <span>{FOUNDER_EMAIL}</span>
                </a>

                <button
                  onClick={() => handleNav("#contact")}
                  className="w-full flex items-center justify-center gap-2 border-2 border-[#00214d] bg-[#00ebc7] text-[#00214d] font-bold text-base py-3.5 rounded-lg shadow-[4px_4px_0px_#00214d] hover:shadow-[2px_2px_0px_#00214d] transition-all"
                >
                  Start a Project
                  <ArrowUpRight size={18} strokeWidth={2.5} />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
