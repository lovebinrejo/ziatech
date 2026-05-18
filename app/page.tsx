import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { HowItWorks } from "@/components/home/HowItWorks";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { WhyZTS } from "@/components/home/WhyZTS";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { HomeCTA } from "@/components/home/HomeCTA";

export const metadata: Metadata = {
  title: "Home",
  description:
    "ZIA Tech Solutions — E-Commerce websites, IT consultancy, technical installations, and computer equipment trading in Sharjah, UAE.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <HowItWorks />
      <IndustriesSection />
      <WhyZTS />
      <TestimonialsSection />
      <HomeCTA />
    </>
  );
}
