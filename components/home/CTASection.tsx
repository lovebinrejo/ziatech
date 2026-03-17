"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919876543210";

  return (
    <section className="py-20 bg-gradient-to-r from-teal-700 to-primary-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-extrabold mb-4"
        >
          Need Automotive Software Help?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-teal-100 mb-8 max-w-2xl mx-auto"
        >
          Get in touch today for a free consultation. We&apos;ll assess your needs and provide a fast, transparent quote.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button asChild size="xl" className="bg-white text-primary-900 hover:bg-gray-100">
            <Link href="/contact">
              Send Enquiry
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
          <Button
            asChild
            size="xl"
            className="bg-[#25D366] hover:bg-[#128C7E] text-white"
          >
            <a
              href={`https://wa.me/${whatsapp}?text=${encodeURIComponent("Hi, I need automotive software support")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Now
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
