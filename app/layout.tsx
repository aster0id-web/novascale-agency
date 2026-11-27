import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NovaScale Studio — Web Engineering & AI Automation Agency",
  description:
    "NovaScale Studio engineers high-performance Next.js web applications, custom AI workflows, and SaaS platforms for startups and ambitious founders.",
  keywords: [
    "web engineering agency",
    "Next.js agency",
    "SaaS engineering",
    "AI workflow integration",
    "e-commerce web app",
    "startup development",
    "Shehab Ahmed Ali",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bricolage.variable} ${dmSans.variable}`}>
      <body className="bg-[#fffffe] text-[#1b2d45] font-sans antialiased min-h-screen flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
