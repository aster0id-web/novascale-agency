"use client";

import { useState } from "react";
import HeroSection from "@/components/sections/HeroSection";
import LogoStrip from "@/components/sections/LogoStrip";
import ServicesSection from "@/components/sections/ServicesSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import CalculatorSection from "@/components/sections/CalculatorSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  const [prefillDetails, setPrefillDetails] = useState("");

  return (
    <main>
      <HeroSection />
      <LogoStrip />
      <ServicesSection />
      <CaseStudiesSection />
      <CalculatorSection onEstimate={setPrefillDetails} />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection prefillDetails={prefillDetails} />
    </main>
  );
}
