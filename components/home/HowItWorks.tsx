"use client";

import { motion } from "framer-motion";
import { PhoneCall, Settings, CheckCircle } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: PhoneCall,
    title: "Call or WhatsApp Us",
    desc: "Tell us what you need — e-commerce websites, network setup, hardware supply, or any IT issue. We assess your requirements remotely or at your site.",
    color: "#0D9488",
  },
  {
    step: "02",
    icon: Settings,
    title: "We Install & Configure",
    desc: "Our team installs and configures software or hardware at your premises or via remote access — fast and hassle-free.",
    color: "#2563EB",
  },
  {
    step: "03",
    icon: CheckCircle,
    title: "You're Up & Running",
    desc: "Full handover, staff walkthrough, and ongoing support. We're just a WhatsApp away whenever you need us again.",
    color: "#8B5CF6",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-navy-900 relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 grid-pattern opacity-50" />
      <div aria-hidden className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(13,148,136,0.08) 0%, transparent 60%)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-[0.2em] text-teal-400 mb-3"
          >
            Simple Process
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight"
          >
            Your Business Running in
            <span className="gradient-text"> 3 Steps</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-xl mx-auto"
          >
            From first contact to fully working software — our process is fast, simple, and built around your schedule.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div aria-hidden className="hidden md:block absolute top-14 left-1/3 right-1/3 h-px bg-gradient-to-r from-teal-500/40 via-blue-500/40 to-purple-500/40" />

          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative"
              >
                <div className="glass rounded-2xl p-8 h-full hover:bg-white/8 transition-colors">
                  {/* Step badge */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0"
                      style={{ background: `linear-gradient(135deg, ${s.color}, ${s.color}cc)` }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-5xl font-black text-white/10 leading-none">{s.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{s.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
