import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Send an enquiry to ZIA Tech Solutions — get a quote for e-commerce websites, IT consultancy, technical installations, or computer equipment supply. We respond within one business day.",
};

export default function ContactPage() {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "971556966870";

  const contactDetails = [
    {
      icon: Phone,
      label: "Phone / WhatsApp",
      value: `+${whatsapp.replace(/(\d{2})(\d{5})(\d{5})/, "$1 $2 $3")}`,
      href: `tel:+${whatsapp}`,
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@ziatechsolutions.ae",
      href: "mailto:info@ziatechsolutions.ae",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sharjah, UAE",
      href: "https://maps.google.com/?q=Sharjah,UAE",
    },
    {
      icon: Clock,
      label: "Working Hours",
      value: "Mon–Sat · 9:00 AM – 8:00 PM GST",
      href: undefined,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-950 to-primary-900 text-white py-24 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="teal" className="mb-4 text-xs px-3 py-1">Get in Touch</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-lg text-primary-200 max-w-2xl mx-auto">
            Send us an enquiry and we&apos;ll get back to you within one business day. For urgent support, use the WhatsApp button below.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left: contact info */}
            <div className="lg:col-span-2 space-y-5">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Let&apos;s Talk
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Whether you need a website, IT consultancy, network installation, or computer equipment supply, our team is ready to help.
                </p>
              </div>

              {/* Contact cards */}
              <div className="space-y-3">
                {contactDetails.map(({ icon: Icon, label, value, href }) => (
                  <div
                    key={label}
                    className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary-100 dark:bg-primary-950 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-primary-800 dark:text-primary-300" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-0.5">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-gray-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/${whatsapp}?text=${encodeURIComponent("Hi, I need help with e-commerce, IT consultancy, or computer equipment")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white group-hover:text-[#128C7E] transition-colors">
                    Chat on WhatsApp
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Typically replies in minutes
                  </p>
                </div>
              </a>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3">
              <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Send an Enquiry
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
