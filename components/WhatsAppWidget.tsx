"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

interface WhatsAppWidgetProps {
  phoneNumber: string;
}

const quickMessages = [
  "Hi, I need software installation help",
  "Hi, I need Benz/Volvo diagnostics support",
  "Hi, I need TecDoc setup assistance",
  "Hi, I need a quote for your services",
];

export function WhatsAppWidget({ phoneNumber }: WhatsAppWidgetProps) {
  const [open, setOpen] = useState(false);

  const openChat = (msg: string) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
      role="complementary"
      aria-label="WhatsApp quick contact"
    >
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 w-72 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">ZIA Tech Solutions</p>
                <p className="text-green-200 text-xs">Typically replies in minutes</p>
              </div>
            </div>

            {/* Chat bubble */}
            <div className="px-4 pt-4 pb-2">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl rounded-tl-sm p-3 text-sm text-gray-700 dark:text-gray-300 max-w-[85%]">
                Hi! 👋 How can we help you today? Choose a quick option below or send your own message.
              </div>
            </div>

            {/* Quick replies */}
            <div className="px-4 pb-4 flex flex-col gap-2">
              {quickMessages.map((msg) => (
                <button
                  key={msg}
                  onClick={() => openChat(msg)}
                  className="flex items-center gap-2 text-left text-sm text-[#075E54] dark:text-teal-400 border border-[#075E54]/30 dark:border-teal-700 rounded-full px-3 py-1.5 hover:bg-[#075E54]/5 dark:hover:bg-teal-900/30 transition-colors"
                >
                  <Send className="w-3.5 h-3.5 shrink-0" />
                  <span className="line-clamp-1">{msg}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg flex items-center justify-center transition-colors"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label={open ? "Close WhatsApp widget" : "Open WhatsApp chat"}
        aria-expanded={open}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-6 h-6" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {/* WhatsApp SVG icon */}
              <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white" aria-hidden="true">
                <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.83.74 5.49 2.04 7.8L.5 31.5l7.9-2.07A15.44 15.44 0 0016 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5zm0 28.17a13.1 13.1 0 01-6.68-1.83l-.48-.28-4.69 1.23 1.25-4.57-.31-.49A13.06 13.06 0 012.83 16C2.83 9.28 8.28 3.83 16 3.83S29.17 9.28 29.17 16 23.72 28.67 16 28.67zm7.18-9.77c-.39-.2-2.32-1.15-2.68-1.28-.36-.13-.62-.2-.88.2s-1.01 1.28-1.24 1.54c-.23.27-.46.3-.85.1a10.7 10.7 0 01-3.15-1.95 11.8 11.8 0 01-2.18-2.72c-.23-.39-.02-.6.17-.79.18-.18.39-.46.59-.69.2-.23.26-.39.39-.65.13-.27.07-.5-.03-.7s-.88-2.12-1.2-2.9c-.32-.77-.64-.66-.88-.67h-.75c-.26 0-.68.1-1.04.49-.36.4-1.36 1.33-1.36 3.24s1.39 3.76 1.58 4.02c.2.26 2.74 4.18 6.63 5.86.93.4 1.65.64 2.21.82.93.3 1.77.26 2.44.16.74-.11 2.32-.95 2.65-1.87.33-.91.33-1.69.23-1.85-.1-.16-.36-.26-.75-.46z" />
              </svg>
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
