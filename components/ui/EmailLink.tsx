"use client";

import { useState } from "react";
import { Mail, Check, Copy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface EmailLinkProps {
  className?: string;
  children?: React.ReactNode;
  email?: string;
  variant?: "inline" | "card" | "nav" | "footer";
}

export const AGENCY_EMAIL = "shehabahmed2020all@gmail.com";

export default function EmailLink({
  className = "",
  children,
  email = AGENCY_EMAIL,
  variant = "inline",
}: EmailLinkProps) {
  const [copied, setCopied] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Copy to clipboard
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(email).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2400);
      }).catch(() => {
        // Fallback
        setCopied(true);
        setTimeout(() => setCopied(false), 2400);
      });
    }
  };

  return (
    <div className="relative inline-flex items-center">
      <a
        href={`mailto:${email}`}
        onClick={handleClick}
        className={className}
        title="Click to email or copy address to clipboard"
      >
        {children ? (
          children
        ) : (
          <span className="flex items-center gap-2">
            <Mail size={16} />
            <span>{email}</span>
          </span>
        )}
      </a>

      {/* Toast Feedback */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 pointer-events-none whitespace-nowrap"
          >
            <div className="border-2 border-[#00214d] bg-[#00ebc7] text-[#00214d] text-xs font-bold px-3 py-1.5 rounded-lg shadow-[3px_3px_0px_#00214d] flex items-center gap-1.5">
              <Check size={14} strokeWidth={3} />
              <span>Email copied to clipboard!</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
