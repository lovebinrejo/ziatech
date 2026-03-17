import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight, CheckCircle, Clock, Award, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "ZIA Tech Solutions — automotive software expertise based in Sharjah, UAE. Learn about our team and our commitment to fast, professional support across the Middle East.",
};

const values = [
  {
    icon: Award,
    title: "OEM-Grade Expertise",
    description: "We work exclusively with genuine OEM software and tools — no piracy, no shortcuts.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Most remote support requests are resolved same-day. On-site visits are scheduled within 24 hours.",
  },
  {
    icon: Users,
    title: "Workshop-First Mindset",
    description: "We understand workshop operations. Downtime costs money — we minimise it.",
  },
  {
    icon: CheckCircle,
    title: "End-to-End Support",
    description: "From initial purchase to ongoing updates, we are your long-term software partner.",
  },
];

export default function AboutPage() {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "971501234567";

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-950 to-teal-900 text-white py-24 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="teal" className="mb-4 text-xs px-3 py-1">About Us</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            UAE&apos;s Automotive Software Specialists
          </h1>
          <p className="text-lg text-teal-100 max-w-2xl mx-auto">
            Based in Sharjah, we are the go-to partner for workshops across the UAE and the wider Middle East needing reliable, professional automotive software support.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <Badge variant="default" className="mb-3">Our Story</Badge>
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-5">
                Built on a Foundation of Technical Excellence
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  ZIA Tech Solutions was founded with a single mission: to make professional-grade automotive software support accessible to every workshop in the UAE and the Middle East — not just authorised dealers.
                </p>
                <p>
                  We started by supporting independent Mercedes-Benz and Volvo workshops in Sharjah, quickly expanding to cover trucks, construction equipment, and specialised software platforms like TecDoc and Iveco EASY.
                </p>
                <p>
                  Today, we support over 11 major brands and software platforms, serving workshops ranging from single-technician operations to multi-bay authorised service centres across the UAE and beyond.
                </p>
              </div>
              <div className="mt-6">
                <Button asChild variant="teal">
                  <Link href="/contact">
                    Work With Us
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Values */}
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map(({ icon: Icon, title, description }) => (
                <Card key={title} className="p-1">
                  <CardContent className="pt-5">
                    <div className="w-10 h-10 rounded-lg bg-primary-50 dark:bg-primary-950 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-primary-800 dark:text-primary-300" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Office */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-3">
              Our Office
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              Based in Sharjah, UAE — serving clients across the Middle East and beyond with remote support available worldwide.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-md">
            {/* Header */}
            <div className="bg-gradient-to-r from-teal-800 to-primary-900 px-8 py-6 flex items-center gap-4">
              <span className="text-5xl">🇦🇪</span>
              <div>
                <h3 className="font-bold text-white text-2xl">Sharjah Office</h3>
                <p className="text-teal-200 text-sm font-medium">United Arab Emirates · Headquarters</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2">
              {/* Contact details */}
              <div className="p-8 space-y-4 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700">
                {[
                  { icon: MapPin, label: "Sharjah, United Arab Emirates", href: undefined },
                  { icon: Phone, label: "+971 50 123 4567", href: "tel:+971501234567" },
                  { icon: Mail, label: "info@ziatechsolutions.com", href: "mailto:info@ziatechsolutions.com" },
                  { icon: Clock, label: "Mon–Fri · 9:00 AM – 6:00 PM GST", href: undefined },
                ].map(({ icon: Icon, label, href }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-teal-50 dark:bg-teal-950 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                    </div>
                    {href ? (
                      <a href={href} className="text-sm text-teal-600 dark:text-teal-400 hover:underline font-medium">{label}</a>
                    ) : (
                      <span className="text-sm text-gray-600 dark:text-gray-400">{label}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="h-72 md:h-auto">
                <iframe
                  title="ZIA Tech Solutions – Sharjah, UAE"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115878.63!2d55.4209!3d25.3463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5fbad06e5abb%3A0x67f3e4fcbf5a8e75!2sSharjah%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1700000000000"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" aria-label="Sharjah, UAE office location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
