"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";

export function HomeCTA() {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "971556966870";

  return (
    <section className="py-24 bg-navy-900 relative overflow-hidden">
      {/* Background */}
      <div aria-hidden className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(13,148,136,0.15) 0%, rgba(37,99,235,0.08) 40%, transparent 70%)" }} />
      <div aria-hidden className="absolute inset-0 grid-pattern opacity-40" />

      {/* Glow lines */}
      <div aria-hidden className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />
      <div aria-hidden className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-12"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-[0.2em] text-teal-400 mb-4"
          >
            Ready to Get Started?
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white mb-5 tracking-tight"
          >
            Get Your Business Technology
            <br />
            <span className="gradient-text">Set Up Today</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed"
          >
            Contact ZIA Tech Solutions for a free consultation. We assess your requirements, recommend the best technology, and provide a transparent quote.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 rounded-xl px-8 py-4 text-base font-bold text-white shadow-2xl transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #0D9488, #0F766E)" }}
            >
              <Phone className="w-4 h-4" />
              Request a Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={`https://wa.me/${whatsapp}?text=${encodeURIComponent("Hi ZIA Tech Solutions, I would like a quote for e-commerce or IT consultancy services")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl px-8 py-4 text-base font-bold text-white bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/30 transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Trust line */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 }}
            className="text-xs text-gray-500"
          >
            ✓ No obligation &nbsp;·&nbsp; ✓ Response within 1 business day &nbsp;·&nbsp; ✓ Remote & on-site available
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
