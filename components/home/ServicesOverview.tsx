"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Download, Monitor, Cpu, BookOpen, Wrench, Printer, Mail, ArrowRight,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data/services";

const iconMap: Record<string, React.ElementType> = {
  Download, Monitor, Cpu, BookOpen, Wrench, Printer, Mail,
};

export function ServicesOverview() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-2"
          >
            What We Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4"
          >
            Comprehensive Business Technology Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-500 dark:text-gray-400"
          >
            From e-commerce websites to office IT, hardware installation, and ongoing support — we help businesses stay productive and grow.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((svc, i) => {
            const Icon = iconMap[svc.icon] ?? Wrench;
            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <Card className="h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <CardHeader>
                    <div className="w-11 h-11 rounded-xl bg-primary-50 dark:bg-primary-950 flex items-center justify-center mb-3 group-hover:bg-primary-900 transition-colors">
                      <Icon className="w-5 h-5 text-primary-900 dark:text-primary-300 group-hover:text-white transition-colors" />
                    </div>
                    <CardTitle className="text-base">{svc.title}</CardTitle>
                    <CardDescription>{svc.shortDescription}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1.5">
                      {svc.features.slice(0, 3).map((f) => (
                        <li key={f} className="flex items-start gap-1.5 text-xs text-gray-600 dark:text-gray-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Button asChild size="lg" variant="outline">
            <Link href="/services">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
