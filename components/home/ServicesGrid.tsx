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
    title: "Billing & POS Software",
    desc: "Install and configure billing, invoicing, and point-of-sale software tailored for spare parts businesses.",
    features: ["Invoice & receipt printing", "Stock management", "Customer records"],
    accent: "#0D9488",
    href: "/services#billing",
  },
  {
    icon: BookOpen,
    title: "TecDoc Parts Catalogue",
    desc: "Full setup of TecDoc and other auto parts catalogues — the essential lookup tool for any spare parts shop.",
    features: ["TecDoc installation", "Licence activation", "Multi-PC setup"],
    accent: "#2563EB",
    href: "/services#tecdoc",
  },
  {
    icon: Monitor,
    title: "OS Installation & Upgrades",
    desc: "Clean Windows 10/11 installations, system upgrades, driver setup, and performance tuning for your PCs.",
    features: ["Windows 10/11 install", "Driver configuration", "Data migration"],
    accent: "#8B5CF6",
    href: "/services#os-upgrade",
  },
  {
    icon: Printer,
    title: "Printer & Scanner Setup",
    desc: "Install, configure, and troubleshoot all printer and scanner brands — USB, network, and wireless.",
    features: ["Network printing", "Scan-to-email", "Driver management"],
    accent: "#F59E0B",
    href: "/services#printer-software",
  },
  {
    icon: Mail,
    title: "Outlook & Email Config",
    desc: "Microsoft Outlook and Microsoft 365 setup, business email configuration, and mailbox migration.",
    features: ["Outlook/M365 setup", "Mailbox migration", "Calendar & contacts sync"],
    accent: "#EF4444",
    href: "/services#outlook-setup",
  },
  {
    icon: HardDrive,
    title: "Hardware Repair & Supply",
    desc: "Laptop and desktop repair, RAM/SSD upgrades, hardware sourcing, and preventive maintenance.",
    features: ["Laptop & PC repair", "RAM & SSD upgrades", "Hardware supply"],
    accent: "#10B981",
    href: "/services#hardware",
  },
  {
    icon: Wifi,
    title: "Network & WiFi Setup",
    desc: "LAN/WiFi installation, router configuration, and network sharing for multi-PC spare parts shops.",
    features: ["WiFi & LAN setup", "Router configuration", "Printer sharing"],
    accent: "#0D9488",
    href: "/services#network",
  },
  {
    icon: DatabaseBackup,
    title: "Data Backup & Recovery",
    desc: "Protect your shop's critical data with automated backup solutions and fast recovery when things go wrong.",
    features: ["Cloud & local backup", "Data recovery", "Scheduled automation"],
    accent: "#2563EB",
    href: "/services#backup",
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
            Everything Your Shop
            <br />
            <span className="gradient-text">Needs to Run Smoothly</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg"
          >
            From billing software to printers and WiFi — we handle all the IT so you can focus on selling parts.
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
