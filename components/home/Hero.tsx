"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, CheckCircle, ShieldCheck, Clock, Zap } from "lucide-react";

const services = [
  "Billing & Inventory Software",
  "Brand Spare Parts Catalogue",
  "OS Installation & Upgrades",
  "Printer & Scanner Setup",
  "Outlook & Email Config",
  "Hardware Repair & Supply",
  "Network & WiFi Setup",
  "Data Backup & Recovery",
];

const trust = [
  { icon: ShieldCheck, text: "Licensed Software Only" },
  { icon: Clock,       text: "Same-Day Response" },
  { icon: Zap,         text: "Remote & On-Site" },
];

export function Hero() {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "971501234567";

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-900 text-white pt-16">

      {/* Grid pattern */}
      <div aria-hidden className="absolute inset-0 grid-pattern opacity-100" />

      {/* Radial glow – top right */}
      <div aria-hidden className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(13,148,136,0.15) 0%, transparent 70%)" }} />

      {/* Radial glow – bottom left */}
      <div aria-hidden className="absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)" }} />

      {/* Animated floating orbs */}
      <motion.div aria-hidden
        className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-teal-400/40"
        animate={{ y: [-10, 10, -10], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div aria-hidden
        className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-electric-400/40"
        animate={{ y: [8, -8, 8], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div aria-hidden
        className="absolute bottom-1/3 left-1/4 w-2.5 h-2.5 rounded-full bg-teal-300/30"
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left column ── */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 glass rounded-full px-4 py-2 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-sm font-medium text-teal-300 tracking-wide">
                Sharjah, UAE · Spare Parts Shop Software Specialists
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6"
            >
              <span className="text-white">Your Parts Shop.</span>
              <br />
              <span className="gradient-text">Fully Powered.</span>
              <br />
              <span className="text-white">Always Running.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed"
            >
              ZIA Tech Solutions installs, configures, and supports all the software your spare parts business needs — billing, catalogues, printers, email, and more. Fast, affordable, and done right.
            </motion.p>

            {/* Service list */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-10"
            >
              {services.map((s, i) => (
                <motion.div
                  key={s}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.35 + i * 0.06 }}
                  className="flex items-center gap-2.5"
                >
                  <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                  <span className="text-sm text-gray-300">{s}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-base font-bold text-white transition-all duration-200 shadow-lg"
                style={{ background: "linear-gradient(135deg, #0D9488, #0F766E)" }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-1px)")}
                onMouseOut={(e)  => (e.currentTarget.style.transform = "translateY(0)")}
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={`https://wa.me/${whatsapp}?text=${encodeURIComponent("Hi ZIA Tech Solutions, I need software support for my spare parts shop")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-base font-bold text-white glass hover:bg-white/10 transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="flex flex-wrap gap-5"
            >
              {trust.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-1.5 text-sm text-gray-400">
                  <Icon className="w-4 h-4 text-teal-400" />
                  {text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right column: feature card ── */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="glass rounded-3xl p-8 space-y-5">
              {/* Header */}
              <div className="flex items-center gap-3 pb-5 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg,#0D9488,#0F766E)" }}>
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-white">ZTS Service Dashboard</p>
                  <p className="text-xs text-gray-400">Live support status</p>
                </div>
                <div className="ml-auto flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-green-400 font-medium">Online</span>
                </div>
              </div>

              {/* Metrics */}
              {[
                { label: "Software Installations",   value: "800+",  bar: 90, color: "#0D9488" },
                { label: "Shops Served",              value: "200+",  bar: 74, color: "#2563EB" },
                { label: "Remote Support Sessions",   value: "1,500+",bar: 87, color: "#8B5CF6" },
                { label: "Client Satisfaction Rate",  value: "99%",   bar: 99, color: "#F59E0B" },
              ].map(({ label, value, bar, color }) => (
                <div key={label}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-gray-400">{label}</span>
                    <span className="font-bold text-white">{value}</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${bar}%` }}
                      transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}

              {/* Bottom CTA */}
              <div className="pt-4 border-t border-white/10">
                <Link href="/contact" className="flex items-center justify-between p-3 rounded-xl bg-teal-600/20 border border-teal-500/30 hover:bg-teal-600/30 transition-colors group">
                  <span className="text-sm font-semibold text-teal-300">Book a service visit</span>
                  <ArrowRight className="w-4 h-4 text-teal-400 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        aria-hidden
      >
        <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/40 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
