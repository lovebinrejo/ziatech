"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    emoji: "�",
    title: "E-Commerce Retailers",
    desc: "Online store setup, payment integration, and product management for modern retailers.",
    tags: ["Online Stores", "Checkout", "Product Catalogues"],
    color: "from-teal-600/20 to-teal-800/10",
    border: "border-teal-500/20",
  },
  {
    emoji: "🏪",
    title: "General Trading & Retail",
    desc: "POS integration, inventory management, and hardware setup for retail and trading businesses.",
    tags: ["POS Systems", "Inventory Software", "Barcode Printing"],
    color: "from-blue-600/20 to-blue-800/10",
    border: "border-blue-500/20",
  },
  {
    emoji: "💼",
    title: "Professional Services",
    desc: "IT consultancy, workflow planning, and productivity tools for small consultancies and agencies.",
    tags: ["IT Strategy", "Productivity", "Collaboration"],
    color: "from-purple-600/20 to-purple-800/10",
    border: "border-purple-500/20",
  },
  {
    emoji: "🏗️",
    title: "Manufacturing & Equipment",
    desc: "Hardware deployment, networking, and system support for industrial and equipment-based firms.",
    tags: ["Hardware Setup", "Networking", "Automation"],
    color: "from-amber-600/20 to-amber-800/10",
    border: "border-amber-500/20",
  },
  {
    emoji: "🖥️",
    title: "Offices & Small Businesses",
    desc: "Office IT, email setup, WiFi, printers, and ongoing technology support for SMEs.",
    tags: ["Office IT", "Email Config", "WiFi & Network"],
    color: "from-green-600/20 to-green-800/10",
    border: "border-green-500/20",
  },
  {
    emoji: "📦",
    title: "Wholesale & Distribution",
    desc: "Warehouse systems, billing, and network infrastructure for distribution and logistics operations.",
    tags: ["Warehouse Software", "Billing", "Network Setup"],
    color: "from-cyan-600/20 to-cyan-800/10",
    border: "border-cyan-500/20",
  },
];

export function IndustriesSection() {
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
            Who We Serve
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight"
          >
            Every Type of Business.
            <br />
            <span className="gradient-text">One Trusted Partner.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto"
          >
            We support retailers, offices, distributors, and any business that relies on technology to operate.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`group relative bg-gradient-to-br ${ind.color} border ${ind.border} rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 cursor-default`}
            >
              <div className="text-4xl mb-4">{ind.emoji}</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{ind.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">{ind.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {ind.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-white/10 dark:bg-white/5 border border-white/20 rounded-full px-2.5 py-0.5 text-gray-600 dark:text-gray-300 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 font-semibold hover:gap-3 transition-all"
          >
            Not sure if we can help? Ask us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
