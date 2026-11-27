"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  CheckCircle2,
  Loader2,
  Mail,
  Phone,
  ShieldCheck,
  FileCode2,
  ArrowUpRight,
  AlertCircle,
  Copy,
  Check,
} from "lucide-react";

interface ContactSectionProps {
  prefillDetails?: string;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  details: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  details?: string;
}

const FOUNDER_EMAIL = "shehabahmed2020all@gmail.com";
const FOUNDER_PHONE = "01006019372";

export default function ContactSection({ prefillDetails }: ContactSectionProps) {
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "", details: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    if (prefillDetails) {
      setForm((prev) => ({ ...prev, details: prefillDetails }));
    }
  }, [prefillDetails]);

  function handleEmailCopy(e: React.MouseEvent<HTMLAnchorElement>) {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(FOUNDER_EMAIL);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2400);
    }
  }

  function validate(): boolean {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Please provide your name or company.";
    if (!form.email.trim()) {
      e.email = "Work email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Please enter a valid email address.";
    }
    if (!form.details.trim()) e.details = "Please describe your project scope or objectives.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "d02a37e8-222d-45f9-a163-ccb1925f3c0d".trim(),
          subject: "New Project Inquiry",
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim() || "Not provided",
          message: form.details.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success === true) {
        setSubmitted(true);
        setForm({ name: "", email: "", phone: "", details: "" });
      } else {
        // Handle error response from Web3Forms
        setErrorMessage(
          data.message ||
            "Unable to submit inquiry at this moment. You can also email directly at " + FOUNDER_EMAIL
        );
      }
    } catch (err) {
      setErrorMessage(
        "Network connection error. Please try again or reach out directly at " + FOUNDER_EMAIL
      );
    } finally {
      setLoading(false);
    }
  }

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    if (errorMessage) setErrorMessage(null);
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#fffffe] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetric 12-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 cols): Direct Contact Card */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 border-2 border-[#00214d] bg-[#ff5470] text-[#fffffe] text-xs font-bold px-3.5 py-1.5 rounded-lg shadow-[2px_2px_0px_#00214d] mb-4">
                Direct Founder Contact
              </div>

              <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-[-0.02em] text-[#00214d] leading-[1.08]">
                Let&apos;s build something exceptional.
              </h2>

              <p className="mt-4 text-base sm:text-lg text-[#1b2d45] font-normal leading-relaxed">
                Connect directly with Lead Engineer & Founder <strong className="text-[#00214d]">Shehab Ahmed Ali</strong>. Every inquiry receives a personal architectural review and transparent fee estimate within 24 business hours.
              </p>
            </div>

            {/* Direct Contact Points */}
            <div className="space-y-3 pt-2">
              
              {/* Founder Profile Badge */}
              <div className="border-2 border-[#00214d] bg-[#fde24f]/30 p-4 rounded-lg shadow-[3px_3px_0px_#00214d] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 border-2 border-[#00214d] rounded-lg bg-[#00ebc7] text-[#00214d] font-display font-bold flex items-center justify-center text-sm shadow-[1px_1px_0px_#00214d]">
                    SA
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#1b2d45]">Lead Founding Engineer</div>
                    <div className="font-display font-bold text-base text-[#00214d]">Shehab Ahmed Ali</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 bg-[#fffffe] border-2 border-[#00214d] px-2.5 py-1 rounded-md shadow-[1px_1px_0px_#00214d]">
                  <span className="w-2 h-2 rounded-full bg-[#00ebc7]" />
                  <span className="text-xs font-semibold text-[#00214d]">Available</span>
                </div>
              </div>

              {/* Email with mailto and click-to-copy toast */}
              <div className="relative">
                <a
                  href={`mailto:${FOUNDER_EMAIL}`}
                  onClick={handleEmailCopy}
                  className="w-full border-2 border-[#00214d] bg-[#f2f4f6] p-4 rounded-lg shadow-[2px_2px_0px_#00214d] hover:bg-[#fffffe] hover:shadow-[4px_4px_0px_#00214d] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex items-center justify-between group cursor-pointer"
                  title="Click to open email or copy address"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 border-2 border-[#00214d] rounded-md bg-[#fffffe] flex items-center justify-center text-[#00214d] group-hover:bg-[#00ebc7] transition-colors shrink-0">
                      <Mail size={18} strokeWidth={2.5} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#1b2d45]">Direct Email (Click to copy)</div>
                      <div className="font-bold text-sm text-[#00214d]">{FOUNDER_EMAIL}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-[#1b2d45] opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline">
                      Copy
                    </span>
                    <ArrowUpRight size={16} className="text-[#00214d]" />
                  </div>
                </a>

                {/* Toast Notification */}
                <AnimatePresence>
                  {emailCopied && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute -top-10 left-1/2 -translate-x-1/2 z-30 pointer-events-none"
                    >
                      <div className="border-2 border-[#00214d] bg-[#00ebc7] text-[#00214d] text-xs font-bold px-3 py-1.5 rounded-lg shadow-[3px_3px_0px_#00214d] flex items-center gap-1.5 whitespace-nowrap">
                        <Check size={14} strokeWidth={3} />
                        <span>Email copied to clipboard!</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Phone */}
              <a
                href={`tel:${FOUNDER_PHONE}`}
                className="border-2 border-[#00214d] bg-[#f2f4f6] p-4 rounded-lg shadow-[2px_2px_0px_#00214d] hover:bg-[#fffffe] hover:shadow-[4px_4px_0px_#00214d] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 border-2 border-[#00214d] rounded-md bg-[#fffffe] flex items-center justify-center text-[#00214d] group-hover:bg-[#00ebc7] transition-colors shrink-0">
                    <Phone size={18} strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#1b2d45]">Phone & WhatsApp</div>
                    <div className="font-bold text-sm text-[#00214d]">+20 {FOUNDER_PHONE}</div>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-[#00214d] opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* Social Channels: LinkedIn & GitHub */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://www.linkedin.com/in/shehab-ahmed-ali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-[#00214d] bg-[#fffffe] p-3.5 rounded-lg shadow-[2px_2px_0px_#00214d] hover:bg-[#f2f4f6] hover:shadow-[3px_3px_0px_#00214d] transition-all flex items-center justify-between text-xs font-bold text-[#00214d] group"
                >
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight size={14} className="text-[#00214d]" />
                </a>

                <a
                  href="https://github.com/aster0id-web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-[#00214d] bg-[#fffffe] p-3.5 rounded-lg shadow-[2px_2px_0px_#00214d] hover:bg-[#f2f4f6] hover:shadow-[3px_3px_0px_#00214d] transition-all flex items-center justify-between text-xs font-bold text-[#00214d] group"
                >
                  <span>GitHub Repos</span>
                  <ArrowUpRight size={14} className="text-[#00214d]" />
                </a>
              </div>

              {/* Guarantees */}
              <div className="border-2 border-[#00214d] bg-[#f2f4f6] p-4 rounded-lg shadow-[2px_2px_0px_#00214d] flex items-center gap-3.5">
                <ShieldCheck size={18} className="text-[#00214d] shrink-0" strokeWidth={2.5} />
                <div>
                  <div className="text-xs font-semibold text-[#1b2d45]">Confidentiality Guarantee</div>
                  <div className="font-bold text-xs sm:text-sm text-[#00214d]">Mutual NDA executed upon request</div>
                </div>
              </div>

              <div className="border-2 border-[#00214d] bg-[#f2f4f6] p-4 rounded-lg shadow-[2px_2px_0px_#00214d] flex items-center gap-3.5">
                <FileCode2 size={18} className="text-[#00214d] shrink-0" strokeWidth={2.5} />
                <div>
                  <div className="text-xs font-semibold text-[#1b2d45]">Deliverable Handover</div>
                  <div className="font-bold text-xs sm:text-sm text-[#00214d]">Full intellectual property & Git repository transfer</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column (7 cols): Clean Bordered Form */}
          <div className="lg:col-span-7 w-full">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="border-2 border-[#00214d] rounded-lg bg-[#fffffe] p-8 sm:p-10 shadow-[8px_8px_0px_#00214d] text-left space-y-5"
              >
                <div className="w-14 h-14 rounded-lg border-2 border-[#00214d] bg-[#00ebc7] flex items-center justify-center shadow-[3px_3px_0px_#00214d]">
                  <CheckCircle2 size={32} className="text-[#00214d]" strokeWidth={3} />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#00214d] uppercase tracking-wider">
                    Inquiry Received
                  </span>
                  <h3 className="font-display font-bold text-3xl text-[#00214d] mt-1">
                    Thank you! Your message has been sent.
                  </h3>
                  <p className="mt-3 text-base text-[#1b2d45] font-normal leading-relaxed">
                    Shehab Ahmed Ali and the engineering team will review your project requirements and follow up with you within 24 business hours.
                  </p>
                </div>

                <div className="pt-4 border-t-2 border-[#00214d]">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", phone: "", details: "" });
                    }}
                    className="border-2 border-[#00214d] bg-[#f2f4f6] text-[#00214d] font-bold text-sm px-5 py-2.5 rounded-lg shadow-[2px_2px_0px_#00214d] hover:bg-[#fffffe] cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="border-2 border-[#00214d] rounded-lg bg-[#fffffe] p-8 sm:p-10 shadow-[8px_8px_0px_#00214d] space-y-6"
                noValidate
              >
                <div className="border-b-2 border-[#00214d] pb-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold text-[#00214d]">
                      Start a Project
                    </h3>
                    <p className="text-xs text-[#1b2d45] mt-0.5">
                      Tell us about your goals, timeline, and requirements.
                    </p>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00ebc7] border border-[#00214d]" />
                </div>

                {/* Error Banner */}
                {errorMessage && (
                  <div className="border-2 border-[#ff5470] bg-[#ff5470]/10 p-4 rounded-lg flex items-start gap-3 text-sm text-[#00214d]">
                    <AlertCircle size={18} className="text-[#ff5470] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-[#ff5470]">Submission Note</p>
                      <p className="text-xs text-[#1b2d45] mt-0.5">{errorMessage}</p>
                    </div>
                  </div>
                )}

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#00214d] mb-1.5">
                    Your Name or Organization
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="e.g. Alex Mercer / Kinetic SaaS"
                    className="w-full border-2 border-[#00214d] rounded-lg p-3.5 text-[#00214d] bg-[#fffffe] font-medium placeholder:text-[#1b2d45]/40 focus:bg-[#fde24f]/15 focus:outline-none transition-colors"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs font-bold text-[#ff5470]">{errors.name}</p>
                  )}
                </div>

                {/* Email and Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#00214d] mb-1.5">
                      Work Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="alex@kineticsaas.com"
                      className="w-full border-2 border-[#00214d] rounded-lg p-3.5 text-[#00214d] bg-[#fffffe] font-medium placeholder:text-[#1b2d45]/40 focus:bg-[#fde24f]/15 focus:outline-none transition-colors"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs font-bold text-[#ff5470]">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[#00214d] mb-1.5">
                      Phone Number (Optional)
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="w-full border-2 border-[#00214d] rounded-lg p-3.5 text-[#00214d] bg-[#fffffe] font-medium placeholder:text-[#1b2d45]/40 focus:bg-[#fde24f]/15 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label htmlFor="details" className="block text-sm font-semibold text-[#00214d]">
                      Project Scope & Timeline
                    </label>
                    {prefillDetails && (
                      <span className="text-xs font-bold text-[#00214d] bg-[#00ebc7] px-2 py-0.5 rounded border border-[#00214d]">
                        Pre-filled from estimator
                      </span>
                    )}
                  </div>
                  <textarea
                    id="details"
                    rows={5}
                    value={form.details}
                    onChange={(e) => handleChange("details", e.target.value)}
                    placeholder="Describe your project goals, key features, target launch date, or preferred stack..."
                    className="w-full border-2 border-[#00214d] rounded-lg p-3.5 text-[#00214d] bg-[#fffffe] font-medium placeholder:text-[#1b2d45]/40 focus:bg-[#fde24f]/15 focus:outline-none transition-colors resize-none leading-relaxed"
                  />
                  {errors.details && (
                    <p className="mt-1.5 text-xs font-bold text-[#ff5470]">{errors.details}</p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2.5 border-2 border-[#00214d] bg-[#00ebc7] text-[#00214d] font-bold text-base py-4 rounded-lg shadow-[4px_4px_0px_#00214d] hover:shadow-[6px_6px_0px_#00214d] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#00214d] transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending Inquiry...
                    </>
                  ) : (
                    <>
                      Send Inquiry
                      <Send size={18} strokeWidth={2.5} />
                    </>
                  )}
                </button>

                <div className="text-xs text-center text-[#1b2d45] pt-1 font-medium">
                  Direct partnership with Shehab Ahmed Ali · No spam or pushy sales calls
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
