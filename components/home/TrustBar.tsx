"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 800,  suffix: "+", label: "Software Installations" },
  { value: 200,  suffix: "+", label: "Shops Served" },
  { value: 10,   suffix: "+", label: "Years Experience" },
  { value: 99,   suffix: "%", label: "Client Satisfaction" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const steps = 50;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCount(Math.round((value / steps) * step));
      if (step >= steps) clearInterval(timer);
    }, 1200 / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function TrustBar() {
  return (
    <section className="bg-navy-950 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-black gradient-text mb-1">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <p className="text-sm text-gray-500 font-medium">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
