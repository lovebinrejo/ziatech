import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { BrandCarousel } from "@/components/home/BrandCarousel";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { HowItWorks } from "@/components/home/HowItWorks";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { WhyZTS } from "@/components/home/WhyZTS";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { HomeCTA } from "@/components/home/HomeCTA";

export const metadata: Metadata = {
  title: "Home",
  description:
    "ZIA Tech Solutions — spare parts shop software specialists in Sharjah, UAE. Billing software, TecDoc catalogue, OS upgrades, printer setup, Outlook config, hardware repair and IT support.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <BrandCarousel />
      <ServicesGrid />
      <HowItWorks />
      <IndustriesSection />
      <WhyZTS />
      <TestimonialsSection />
      <HomeCTA />
    </>
  );
}
