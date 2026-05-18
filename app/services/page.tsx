import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import {
  Download, Monitor, Cpu, BookOpen, Wrench, Printer, Mail, HardDrive, Wifi, DatabaseBackup,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data/services";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "E-Commerce website development, IT consultancy, technical installations, and business technology support from ZIA Tech Solutions.",
};

const iconMap: Record<string, React.ElementType> = {
  Download, Monitor, Cpu, BookOpen, Wrench, Printer, Mail, HardDrive, Wifi, DatabaseBackup,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-950 to-primary-900 text-white py-24 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="teal" className="mb-4 text-xs px-3 py-1">Our Services</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Everything Your Business Needs
          </h1>
          <p className="text-lg text-primary-200 max-w-2xl mx-auto">
            From e-commerce websites to office IT, hardware installation, and consultancy — we deliver the technology your business needs to grow.
          </p>
        </div>
      </section>

      {/* Service cards */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8">
          {services.map((svc, i) => {
            const Icon = iconMap[svc.icon] ?? Wrench;
            const isEven = i % 2 === 0;
            return (
              <div
                key={svc.id}
                id={svc.id}
                className={`grid md:grid-cols-2 gap-8 items-center ${!isEven ? "md:[direction:rtl]" : ""}`}
              >
                {/* Icon card */}
                <div className={`${!isEven ? "md:[direction:ltr]" : ""}`}>
                  <div className="bg-gradient-to-br from-primary-50 to-teal-50 dark:from-primary-950 dark:to-teal-950 rounded-2xl p-12 flex items-center justify-center aspect-video">
                    <Icon className="w-24 h-24 text-primary-800 dark:text-primary-300 opacity-80" strokeWidth={1} />
                  </div>
                </div>

                {/* Content */}
                <div className={`${!isEven ? "md:[direction:ltr]" : ""}`}>
                  <Badge variant="default" className="mb-3">{svc.id.replace(/-/g, " ")}</Badge>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                    {svc.title}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                    {svc.fullDescription.trim()}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <Check className="w-4 h-4 text-teal-600 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {svc.brands && (
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {svc.brands.map((b) => (
                        <Badge key={b} variant="outline">{b}</Badge>
                      ))}
                    </div>
                  )}

                  <Button asChild variant="teal">
                    <Link href={`/contact?service=${svc.id}`}>
                      Enquire About This Service
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection />
    </>
  );
}
