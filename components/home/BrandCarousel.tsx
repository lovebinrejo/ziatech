"use client";

import { motion } from "framer-motion";
import { brands } from "@/lib/data/brands";

const categoryLabel: Record<string, string> = {
  "technology-partner": "Technology Partner",
};

export function BrandCarousel() {
  const items = [...brands, ...brands];

  return (
    <section className="py-14 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
          Technology Partners & Hardware Brands
        </h2>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div aria-hidden className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent pointer-events-none" />
        <div aria-hidden className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent pointer-events-none" />

        <motion.div
          className="flex gap-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
          style={{ width: "max-content" }}
        >
          {items.map((brand, i) => (
            <div
              key={`${brand.slug}-${i}`}
              className="flex-shrink-0 flex items-center gap-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Colored dot badge */}
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 text-white text-xs font-black"
                style={{ backgroundColor: brand.color }}
              >
                {brand.name.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-100 whitespace-nowrap">
                  {brand.name}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  {categoryLabel[brand.category] ?? brand.category}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
