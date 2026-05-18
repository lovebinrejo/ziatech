"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "ZTS launched our e-commerce store quickly and helped us move from manual orders to a clean online experience. The whole process was simple and professional.",
    name: "Ahmed Al Hammadi",

    rating: 5,
    initials: "AH",
    color: "#0D9488",
  },
  {
    quote: "After our office network failed, ZTS restored connectivity, set up new hardware, and got our team back to work within hours. Their support is fast and dependable.",
    name: "Khalid Nasser",

    rating: 5,
    initials: "KN",
    color: "#2563EB",
  },
  {
    quote: "They designed our website, configured business email, and provided ongoing support. We now have a modern website and a reliable IT partner.",
    name: "Tariq Mansouri",

    rating: 5,
    initials: "TM",
    color: "#8B5CF6",
  },
  {
    quote: "ZTS set up our entire office network from scratch. The team was knowledgeable, punctual, and made sure everything worked perfectly before leaving.",
    name: "Sara Al Rashidi",

    rating: 5,
    initials: "SR",
    color: "#DC2626",
  },
  {
    quote: "We needed a fast e-commerce solution and ZTS delivered beyond expectations. Our online sales doubled within two months of launching.",
    name: "Omar Farouk",

    rating: 5,
    initials: "OF",
    color: "#D97706",
  },
  {
    quote: "The IT consultancy session helped us cut costs and modernise our workflow. ZTS gave us a clear plan and executed it without any disruption.",
    name: "Fatima Al Zaabi",

    rating: 5,
    initials: "FZ",
    color: "#059669",
  },
  {
    quote: "Excellent hardware procurement service. They sourced the right equipment at the right price and had everything installed and running the same week.",
    name: "Hassan Mirza",

    rating: 5,
    initials: "HM",
    color: "#7C3AED",
  },
  {
    quote: "ZTS migrated our team to Microsoft 365 smoothly. No data was lost and the whole transition took less than a day. Highly recommended.",
    name: "Layla Qasim",

    rating: 5,
    initials: "LQ",
    color: "#0284C7",
  },
  {
    quote: "Our backup system was non-existent before ZTS stepped in. Now we have automated cloud backups and complete peace of mind.",
    name: "Rami Al Blooshi",

    rating: 5,
    initials: "RB",
    color: "#B45309",
  },
  {
    quote: "From WiFi planning to full installation, ZTS handled our new office setup professionally. Fast response, fair pricing, and zero downtime.",
    name: "Nour Al Shamsi",

    rating: 5,
    initials: "NS",
    color: "#0F766E",
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
            Trusted by UAE
            <br />
            <span className="gradient-text">Business Owners</span>
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
