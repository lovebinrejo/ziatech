"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "ZTS installed our billing software and TecDoc catalogue in one visit. Everything worked perfectly from day one. Our staff didn't need any training — it was that straightforward. Highly recommended.",
    name: "Ahmed Al Hammadi",
    role: "Owner",
    company: "Al Hammadi Auto Parts, Sharjah",
    rating: 5,
    initials: "AH",
    color: "#0D9488",
  },
  {
    quote: "Our printer stopped working right before peak hours. I called ZTS and they fixed it remotely in 20 minutes. That kind of fast support is exactly what a busy spare parts shop needs. Real professionals.",
    name: "Khalid Nasser",
    role: "Shop Manager",
    company: "Gulf Parts Centre, Dubai",
    rating: 5,
    initials: "KN",
    color: "#2563EB",
  },
  {
    quote: "They set up Windows, Outlook, the billing system, and network printing across all three of our PCs in a single day. Clean work, fair price, and they explained everything. We use ZTS for all our IT now.",
    name: "Tariq Mansouri",
    role: "Operations Manager",
    company: "Emirates Spare Parts Trading, Abu Dhabi",
    rating: 5,
    initials: "TM",
    color: "#8B5CF6",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-navy-950 relative overflow-hidden">
      <div aria-hidden className="absolute top-0 right-0 w-96 h-96 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(13,148,136,0.06) 0%, transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400 mb-3"
          >
            Client Stories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white tracking-tight"
          >
            Trusted by Spare Parts
            <br />
            <span className="gradient-text">Shops Across the UAE</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white dark:bg-navy-900 border border-gray-200 dark:border-white/8 rounded-2xl p-7 flex flex-col hover:shadow-lg transition-shadow"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-teal-500/30 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-1 mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-gray-100 dark:border-white/8">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-black shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}cc)` }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role} · {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
