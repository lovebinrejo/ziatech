"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Globe, HeadphonesIcon, Award, RefreshCw } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Specialised Tech Consulting",
    desc: "We understand e-commerce systems, office infrastructure, and hardware deployments. Not a generic IT provider.",
    color: "#F59E0B",
  },
  {
    icon: Zap,
    title: "Same-Day Service",
    desc: "Most setup and troubleshooting tasks are completed the same day. Remote fixes are often done within hours.",
    color: "#0D9488",
  },
  {
    icon: Globe,
    title: "Remote & On-Site",
    desc: "We visit your office or connect remotely — whichever is faster. No need to move devices away from the workplace.",
    color: "#2563EB",
  },
  {
    icon: HeadphonesIcon,
    title: "Ongoing Support",
    desc: "We don't disappear after installation. Call or WhatsApp us anytime for troubleshooting, updates, or new setups.",
    color: "#8B5CF6",
  },
  {
    icon: ShieldCheck,
    title: "Licensed Software Only",
    desc: "Every installation is genuine and legally licensed. No pirated software — protecting your business and your data.",
    color: "#10B981",
  },
  {
    icon: RefreshCw,
    title: "Affordable Fixed Prices",
    desc: "Transparent, upfront pricing with no hidden charges. You know exactly what you're paying before we start.",
    color: "#EF4444",
  },
];

export function WhyZTS() {
  return (
    <section className="py-24 bg-navy-900 relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 grid-pattern opacity-30" />
      <div aria-hidden className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-teal-500/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: heading */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold uppercase tracking-[0.2em] text-teal-400 mb-3"
            >
              Why Choose ZTS
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight leading-tight"
            >
              Your Business Deserves
              <br />
              More Than a
              <br />
              <span className="gradient-text">Generic IT Guy</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 leading-relaxed mb-8"
            >
              ZIA Tech Solutions specialises in e-commerce and business technology. We know the tools, installation steps, and support needed to keep your office systems running smoothly.
            </motion.p>

            {/* Big stat */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass rounded-2xl p-6 inline-block"
            >
              <p className="text-5xl font-black gradient-text-gold mb-1">100%</p>
              <p className="text-sm text-gray-400">Client satisfaction across 800+ installations</p>
            </motion.div>
          </div>

          {/* Right: reasons grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="glass rounded-xl p-5 hover:bg-white/6 transition-colors group"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                    style={{ backgroundColor: `${r.color}25` }}
                  >
                    <Icon className="w-4 h-4" style={{ color: r.color }} />
                  </div>
                  <h4 className="font-bold text-white text-sm mb-1.5">{r.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{r.desc}</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
