"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin, Phone, Mail, MessageCircle,
  ArrowUpRight,
} from "lucide-react";

const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME ?? "ZIA Tech Solutions";
const whatsapp    = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "971501234567";


export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-gray-400 relative overflow-hidden">

      {/* Grid pattern overlay */}
      <div aria-hidden className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      {/* Top glow */}
      <div aria-hidden className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/60 to-transparent" />

      {/* Ambient glow */}
      <div aria-hidden className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(13,148,136,0.06) 0%, transparent 70%)" }} />
      <div aria-hidden className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 70%)" }} />

      {/* ══ MAIN CONTENT ══════════════════════════════════════ */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">

        {/* ── ROW 1: Brand block + Contact card ───────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 pb-12 border-b border-white/6">

          {/* Brand block — 2 cols */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-5" aria-label="ZIA Tech Solutions home">
              <Image
                src="/logo-dark.svg"
                alt="ZIA Tech Solutions"
                width={168}
                height={42}
                className="h-10 w-auto"
                priority={false}
              />
            </Link>

            <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-xs">
              Spare parts shop software specialists in Sharjah, UAE. Billing systems, TecDoc catalogues, printers, OS upgrades, and full IT support.
            </p>

            {/* Status badge */}
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-teal-400">Available · Sharjah, UAE</span>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/${whatsapp}?text=${encodeURIComponent("Hi ZIA Tech Solutions, I need software support")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white rounded-xl px-5 py-2.5 transition-all hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, #22C55E33, #16A34A22)", border: "1px solid #22C55E40" }}
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span className="text-[#25D366]">WhatsApp</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold rounded-xl px-5 py-2.5 transition-all hover:-translate-y-0.5 glass"
              >
                <Mail className="w-4 h-4 text-teal-400" />
                <span className="text-gray-300">Get a Quote</span>
                <ArrowUpRight className="w-3 h-3 text-gray-500" />
              </Link>
            </div>
          </div>

          {/* Contact card — 3 cols */}
          <div className="lg:col-span-3">
            <div className="glass rounded-2xl p-7 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: "linear-gradient(135deg, rgba(13,148,136,0.2), rgba(37,99,235,0.1))", border: "1px solid rgba(13,148,136,0.2)" }}>
                  🇦🇪
                </div>
                <div>
                  <p className="font-bold text-white text-sm">Sharjah Office</p>
                  <p className="text-xs text-teal-400">United Arab Emirates · Gulf Standard Time</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {/* Contact details */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: "rgba(13,148,136,0.15)", border: "1px solid rgba(13,148,136,0.2)" }}>
                      <MapPin className="w-3.5 h-3.5 text-teal-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Address</p>
                      <p className="text-sm text-gray-300">Sharjah, United Arab Emirates</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "rgba(13,148,136,0.15)", border: "1px solid rgba(13,148,136,0.2)" }}>
                      <Phone className="w-3.5 h-3.5 text-teal-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Phone</p>
                      <a href={`tel:+${whatsapp}`} className="text-sm text-gray-300 hover:text-white transition-colors">
                        +971 50 123 4567
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "rgba(13,148,136,0.15)", border: "1px solid rgba(13,148,136,0.2)" }}>
                      <Mail className="w-3.5 h-3.5 text-teal-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Email</p>
                      <a href="mailto:info@ziatechsolutions.com" className="text-sm text-gray-300 hover:text-white transition-colors">
                        info@ziatechsolutions.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div>
                  <p className="text-xs text-gray-500 mb-3 uppercase tracking-widest font-medium">Working Hours</p>
                  <div className="space-y-2.5">
                    {[
                      { day: "Monday – Friday", hours: "9:00 AM – 6:00 PM", active: true },
                      { day: "Saturday",         hours: "9:00 AM – 2:00 PM", active: true },
                      { day: "Sunday",            hours: "Closed",            active: false },
                    ].map(({ day, hours, active }) => (
                      <div key={day} className="flex justify-between items-center text-xs">
                        <span className="text-gray-400">{day}</span>
                        <span className={active ? "text-teal-400 font-medium" : "text-gray-600"}>{hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/6">
                    <p className="text-xs text-gray-500">Remote support available outside hours via WhatsApp.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ────────────────────────────────────── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <div className="flex items-center gap-2">
            <span>© {year}</span>
            <span className="text-gray-700">·</span>
            <span className="text-gray-500">{companyName}</span>
            <span className="text-gray-700">·</span>
            <span>All rights reserved</span>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
              <span className="text-gray-500">Sharjah, UAE</span>
            </div>
            <span className="text-gray-700">|</span>
            <Link href="/contact" className="hover:text-teal-400 transition-colors">Privacy</Link>
            <Link href="/contact" className="hover:text-teal-400 transition-colors">Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
