"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const PHONE = "971556966870";

const brands: { name: string; hot?: boolean }[] = [
  { name: "BPW" },
  { name: "Daf", hot: true },
  { name: "Hino" },
  { name: "Isuzu", hot: true },
  { name: "Iveco", hot: true },
  { name: "Knorr", hot: true },
  { name: "MAN" },
  { name: "Mercedes", hot: true },
  { name: "Mitsubishi FUSO" },
  { name: "Nissan", hot: true },
  { name: "Renault", hot: true },
  { name: "Saf Holland", hot: true },
  { name: "Scania" },
  { name: "Schmitz Online" },
  { name: "Setra", hot: true },
  { name: "TecDoc" },
  { name: "Thermo King" },
  { name: "Volvo" },
  { name: "Wabco" },
  { name: "Wielton" },
];

const stats = [
  { value: 20, label: "Brands" },
  { value: 500, label: "Parts Categories", suffix: "K+" },
  { value: 24, label: "Hours Access", suffix: "/7" },
];

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function CataloguePage() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = brands.filter((b) =>
    b.name.toLowerCase().includes(search.toLowerCase())
  );

  const waMessage = selected
    ? `Hi ZIA Tech Solutions, I need the online catalogue for *${selected}* spare parts. Please share access.`
    : "Hi ZIA Tech Solutions, I'm interested in your Online Trucks Parts Catalogue. Please share more details.";

  const waUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="min-h-screen bg-[#0a0f1e] text-white overflow-x-hidden">

      {/* Animated background blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-700/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-red-600/15 rounded-full blur-[100px] animate-pulse [animation-delay:1s]" />
        <div className="absolute -bottom-40 left-1/3 w-[400px] h-[400px] bg-teal-600/10 rounded-full blur-[100px] animate-pulse [animation-delay:2s]" />
      </div>

      <div className="relative z-10">

        {/* Hero */}
        <section className="pt-20 pb-10 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs text-blue-300 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-ping inline-block" />
              Live Catalogue Access · Instant WhatsApp Response
            </div>

            <h1 className="text-4xl sm:text-6xl font-black leading-tight mb-4">
              <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
                Online Trucks
              </span>
              <br />
              <span className="bg-gradient-to-r from-red-400 via-red-300 to-orange-300 bg-clip-text text-transparent">
                Parts Catalogue
              </span>
            </h1>

            <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto mb-8">
              Search genuine spare parts across <span className="text-white font-semibold">20 major brands</span>.
              Select a brand below and WhatsApp us instantly.
            </p>

            {/* Stats row */}
            <div className="flex justify-center gap-8 sm:gap-16 mb-10">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">
                    <CountUp target={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-md mx-auto relative mb-2"
          >
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 105 11a6 6 0 0012 0z" />
              </svg>
            </div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search brand e.g. Volvo, MAN, Scania…"
              className="w-full bg-white/5 border border-white/10 rounded-2xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white/8 transition-all backdrop-blur-sm"
            />
          </motion.div>

          {selected && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-xs text-blue-300 mt-2"
            >
              Selected: <span className="font-semibold text-white">{selected}</span>
              <button onClick={() => setSelected(null)} className="ml-2 text-gray-500 hover:text-white">✕</button>
            </motion.div>
          )}
        </section>

        {/* Brand Grid */}
        <section className="px-4 pb-8 max-w-4xl mx-auto">
          <AnimatePresence mode="popLayout">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {filtered.map((brand, i) => (
                <motion.button
                  key={brand.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.25, delay: i * 0.03 }}
                  onClick={() => setSelected(brand.name === selected ? null : brand.name)}
                  className={`relative group rounded-xl border px-4 py-4 text-sm font-semibold text-left transition-all duration-200 cursor-pointer overflow-hidden
                    ${selected === brand.name
                      ? "border-blue-500 bg-blue-500/20 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                      : "border-white/10 bg-white/5 text-gray-300 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                    }`}
                >
                  {/* Glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-blue-500/5 to-transparent rounded-xl" />

                  <div className="flex items-center justify-between gap-1">
                    <span>{brand.name}</span>
                    <div className="flex items-center gap-1 shrink-0">
                      {brand.hot && (
                        <span className="text-[9px] bg-red-500/20 text-red-400 border border-red-500/30 rounded px-1 py-0.5 leading-none font-medium">
                          ONLINE
                        </span>
                      )}
                      {selected === brand.name && (
                        <svg className="w-3.5 h-3.5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No brand found for &quot;{search}&quot;
            </div>
          )}
        </section>

        {/* Sticky WhatsApp CTA */}
        <section className="px-4 pb-24 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-white/5 to-white/3 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex-1 text-center sm:text-left">
                <p className="text-white font-semibold text-base mb-0.5">
                  {selected ? `Request catalogue for ${selected}` : "Need a specific part?"}
                </p>
                <p className="text-gray-400 text-sm">
                  {selected
                    ? "Tap below — we'll send you the direct catalogue link instantly."
                    : "Select a brand above or tap to send us a general enquiry."}
                </p>
              </div>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-[0_0_30px_rgba(37,211,102,0.3)] hover:shadow-[0_0_40px_rgba(37,211,102,0.5)] text-sm whitespace-nowrap"
              >
                <svg viewBox="0 0 32 32" className="w-5 h-5 fill-white shrink-0">
                  <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.83.74 5.49 2.04 7.8L.5 31.5l7.9-2.07A15.44 15.44 0 0016 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5zm0 28.17a13.1 13.1 0 01-6.68-1.83l-.48-.28-4.69 1.23 1.25-4.57-.31-.49A13.06 13.06 0 012.83 16C2.83 9.28 8.28 3.83 16 3.83S29.17 9.28 29.17 16 23.72 28.67 16 28.67zm7.18-9.77c-.39-.2-2.32-1.15-2.68-1.28-.36-.13-.62-.2-.88.2s-1.01 1.28-1.24 1.54c-.23.27-.46.3-.85.1a10.7 10.7 0 01-3.15-1.95 11.8 11.8 0 01-2.18-2.72c-.23-.39-.02-.6.17-.79.18-.18.39-.46.59-.69.2-.23.26-.39.39-.65.13-.27.07-.5-.03-.7s-.88-2.12-1.2-2.9c-.32-.77-.64-.66-.88-.67h-.75c-.26 0-.68.1-1.04.49-.36.4-1.36 1.33-1.36 3.24s1.39 3.76 1.58 4.02c.2.26 2.74 4.18 6.63 5.86.93.4 1.65.64 2.21.82.93.3 1.77.26 2.44.16.74-.11 2.32-.95 2.65-1.87.33-.91.33-1.69.23-1.85-.1-.16-.36-.26-.75-.46z" />
                </svg>
                WhatsApp Us Now
              </a>
            </div>
          </motion.div>
        </section>

        {/* Floating sticky bottom bar on mobile */}
        <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-[#0a0f1e]/80 backdrop-blur-md border-t border-white/5 sm:hidden">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)] text-sm"
          >
            <svg viewBox="0 0 32 32" className="w-5 h-5 fill-white shrink-0">
              <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.83.74 5.49 2.04 7.8L.5 31.5l7.9-2.07A15.44 15.44 0 0016 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5zm0 28.17a13.1 13.1 0 01-6.68-1.83l-.48-.28-4.69 1.23 1.25-4.57-.31-.49A13.06 13.06 0 012.83 16C2.83 9.28 3.83 16 3.83S29.17 9.28 29.17 16 23.72 28.67 16 28.67zm7.18-9.77c-.39-.2-2.32-1.15-2.68-1.28-.36-.13-.62-.2-.88.2s-1.01 1.28-1.24 1.54c-.23.27-.46.3-.85.1a10.7 10.7 0 01-3.15-1.95 11.8 11.8 0 01-2.18-2.72c-.23-.39-.02-.6.17-.79.18-.18.39-.46.59-.69.2-.23.26-.39.39-.65.13-.27.07-.5-.03-.7s-.88-2.12-1.2-2.9c-.32-.77-.64-.66-.88-.67h-.75c-.26 0-.68.1-1.04.49-.36.4-1.36 1.33-1.36 3.24s1.39 3.76 1.58 4.02c.2.26 2.74 4.18 6.63 5.86.93.4 1.65.64 2.21.82.93.3 1.77.26 2.44.16.74-.11 2.32-.95 2.65-1.87.33-.91.33-1.69.23-1.85-.1-.16-.36-.26-.75-.46z" />
            </svg>
            {selected ? `Ask about ${selected}` : "WhatsApp Us Now"}
          </a>
        </div>

      </div>
    </div>
  );
}
