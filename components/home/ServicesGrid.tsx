"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calculator, BookOpen, Monitor, Printer,
  Mail, HardDrive, Wifi, DatabaseBackup, ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "E-Commerce Website Setup",
    desc: "Design and launch an online store built to sell products, capture leads, and convert visitors consistently.",
    features: ["Custom storefront", "Product catalogue", "Secure checkout"],
    accent: "#0D9488",
    href: "/services#ecommerce",
  },
  {
    icon: BookOpen,
    title: "IT Consultancy & Strategy",
    desc: "Plan the right technology stack for your business, from website architecture to office systems and future growth.",
    features: ["Infrastructure planning", "Software guidance", "Business process review"],
    accent: "#2563EB",
    href: "/services#consultancy",
  },
  {
    icon: Monitor,
    title: "Hardware Procurement & Setup",
    desc: "Source, configure, and deploy computers, servers, and peripherals that match your budget and reliability needs.",
    features: ["PC & laptop setup", "Printer installation", "Hardware sourcing"],
    accent: "#8B5CF6",
    href: "/services#hardware",
  },
  {
    icon: Printer,
    title: "Network & WiFi Installation",
    desc: "Set up reliable wired and wireless office networks so your team can work smoothly and securely.",
    features: ["WiFi planning", "Router configuration", "Network security"],
    accent: "#F59E0B",
    href: "/services#network",
  },
  {
    icon: Mail,
    title: "Email & Productivity Setup",
    desc: "Configure business email, collaboration tools, and secure access so your team can communicate efficiently.",
    features: ["Office 365 / Google Workspace", "Mailbox setup", "Calendar sync"],
    accent: "#EF4444",
    href: "/services#email",
  },
  {
    icon: HardDrive,
    title: "Data Backup & Recovery",
    desc: "Protect your business data with automated backups, recovery plans, and secure storage options.",
    features: ["Cloud backup", "Local backup", "Recovery planning"],
    accent: "#10B981",
    href: "/services#backup",
  },
  {
    icon: Wifi,
    title: "Office Automation",
    desc: "Improve everyday productivity with workflow automation, device integration, and secure document management.",
    features: ["Workflow automation", "Document sharing", "Process optimisation"],
    accent: "#0D9488",
    href: "/services#automation",
  },
  {
    icon: DatabaseBackup,
    title: "Remote Support & Maintenance",
    desc: "Ongoing support for your systems, with remote troubleshooting, updates, and proactive maintenance.",
    features: ["Remote assistance", "Maintenance plans", "System health checks"],
    accent: "#2563EB",
    href: "/services#support",
  },
];

export function ServicesGrid() {
  return (
    <section className="py-24 bg-white dark:bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400 mb-3"
          >
            What We Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight"
          >
            Everything Your Business
            <br />
            <span className="gradient-text">Needs to Grow Online</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg"
          >
            From website development to office IT, networks, and hardware setup — we handle your technology so you can focus on business.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <Link
                  href={svc.href}
                  className="group flex flex-col h-full bg-gray-50 dark:bg-navy-900 border border-gray-200 dark:border-white/8 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${svc.accent}20`, border: `1px solid ${svc.accent}40` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: svc.accent }} />
                  </div>

                  {/* Title & desc */}
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 leading-relaxed flex-1">
                    {svc.desc}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1 mb-4">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                        <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: svc.accent }} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Arrow */}
                  <div className="flex items-center gap-1 text-xs font-semibold mt-auto" style={{ color: svc.accent }}>
                    Learn more
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View all */}
        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border-2 border-teal-600 text-teal-600 dark:text-teal-400 dark:border-teal-400 font-bold rounded-xl px-7 py-3 hover:bg-teal-600 hover:text-white dark:hover:bg-teal-600 dark:hover:text-white transition-all duration-200"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
