import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Package, Truck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Online Trucks Parts Catalogue & Business IT Products",
  description:
    "Access online spare parts catalogues for 20 truck brands — BPW, DAF, Mercedes, Volvo, Scania, MAN & more. Plus IT packages, hardware, and network solutions. ZIA Tech Solutions, Sharjah UAE.",
  openGraph: {
    title: "Online Trucks Parts Catalogue — ZIA Tech Solutions",
    description:
      "20 truck brands online: BPW, DAF, Mercedes, Volvo, Scania, MAN, Iveco, Renault & more. WhatsApp us for catalogue access.",
  },
  twitter: {
    title: "Online Trucks Parts Catalogue — ZIA Tech Solutions",
    description:
      "20 truck brands online: BPW, DAF, Mercedes, Volvo, Scania, MAN, Iveco, Renault & more. WhatsApp us for catalogue access.",
  },
};

const products = [
  {
    id: "website-kickstart",
    name: "Business Website Kickstart",
    tagline: "Launch your online presence in days",
    description:
      "A complete website package for service businesses, retailers, and consultants. Includes fast hosting, responsive design, and a user-friendly admin experience.",
    features: [
      "Custom responsive website",
      "SEO-ready landing pages",
      "Integrated contact form",
      "Fast hosting setup",
      "Training for your team",
    ],
    badge: "Web Package",
    badgeVariant: "default" as const,
    highlight: "Most Popular",
  },
  {
    id: "ecommerce-store",
    name: "E-Commerce Store Package",
    tagline: "Sell products online with a complete storefront",
    description:
      "Build a professional online shop with secure payments, product management, shipping setup, and integrated marketing tools.",
    features: [
      "Online store setup",
      "Payment gateway integration",
      "Product catalog management",
      "Shipping & tax configuration",
      "Analytics and reporting",
    ],
    badge: "E-Commerce",
    badgeVariant: "teal" as const,
  },
  {
    id: "it-hardware-kit",
    name: "Office Hardware Kit",
    tagline: "Reliable computers and equipment for modern businesses",
    description:
      "Supply and configure desktops, laptops, printers, and accessories that match your budget and performance needs.",
    features: [
      "PC and laptop supply",
      "Printer and scanner setup",
      "UPS and backup hardware",
      "Peripheral sourcing",
      "Onsite installation",
    ],
    badge: "Hardware",
    badgeVariant: "warning" as const,
  },
  {
    id: "network-connectivity",
    name: "Network & Connectivity Bundle",
    tagline: "Secure WiFi and wired networks for smooth business operations",
    description:
      "Design, install, and secure office networks with routers, switches, access points, and network optimization.",
    features: [
      "WiFi access point deployment",
      "LAN cabling and setup",
      "Router and firewall configuration",
      "Guest network setup",
      "Performance tuning",
    ],
    badge: "Network",
    badgeVariant: "teal" as const,
  },
  {
    id: "security-backup",
    name: "Security & Backup Bundle",
    tagline: "Protect your data and keep your systems safe",
    description:
      "Implement secure backup, antivirus, disaster recovery, and access controls so your business data stays protected.",
    features: [
      "Automated backups",
      "Endpoint security",
      "Recovery planning",
      "User access controls",
      "Regular maintenance checks",
    ],
    badge: "Security",
    badgeVariant: "outline" as const,
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-950 to-teal-900 text-white py-24 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="teal" className="mb-4 text-xs px-3 py-1">Business Products</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Technology Packages for Every Business
          </h1>
          <p className="text-lg text-teal-100 max-w-2xl mx-auto">
            Discover our business-ready technology bundles for e-commerce, office IT, networks, hardware, and data protection.
          </p>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="flex flex-col hover:shadow-lg transition-shadow duration-300 relative">
                {product.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-teal-600 text-white text-xs font-semibold rounded-full px-3 py-1">
                      {product.highlight}
                    </span>
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <Package className="w-8 h-8 text-primary-700 dark:text-primary-300" strokeWidth={1.5} />
                    <Badge variant={product.badgeVariant}>{product.badge}</Badge>
                  </div>
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription className="font-medium text-teal-600 dark:text-teal-400 not-italic">
                    {product.tagline}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <ul className="space-y-1.5 mb-6 flex-1">
                    {product.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <CheckCircle className="w-3.5 h-3.5 text-teal-500 mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="w-full mt-auto">
                    <Link href={`/contact?service=${product.id}`}>
                      Request a Quote
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trucks Catalogue Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Badge variant="warning" className="mb-3 text-xs px-3 py-1">Online Catalogues</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
              Online Trucks Parts Catalogue
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm">
              Access genuine spare parts catalogues for 20 major truck and trailer brands — available online, anytime.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="overflow-hidden border-2 border-amber-200 dark:border-amber-900 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-primary-950 to-primary-800 text-white pb-5">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-red-500 flex items-center justify-center shrink-0">
                    <Truck className="w-5 h-5 text-white" strokeWidth={1.8} />
                  </div>
                  <div>
                    <CardTitle className="text-white text-lg">Online Trucks Catalogue</CardTitle>
                    <CardDescription className="text-blue-200 mt-0.5">20 brands available</CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-6 pb-8 px-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-8">
                  {[
                    "BPW", "Daf", "Hino", "Isuzu",
                    "Iveco", "Knorr", "MAN", "Mercedes",
                    "Mitsubishi FUSO", "Nissan", "Renault", "Saf Holland",
                    "Scania", "Schmitz Online", "Setra", "TecDoc",
                    "Thermo King", "Volvo", "Wabco", "Wielton",
                  ].map((brand) => (
                    <div
                      key={brand}
                      className="flex items-center justify-center px-3 py-2.5 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 text-center leading-tight"
                    >
                      {brand}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/971556966870?text=${encodeURIComponent("Hi ZIA Tech Solutions, I'm interested in your Online Trucks Parts Catalogue. Please share more details.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 rounded-md bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold text-sm px-4 py-2.5 transition-colors"
                  >
                    <svg viewBox="0 0 32 32" className="w-5 h-5 fill-white shrink-0" aria-hidden="true">
                      <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.83.74 5.49 2.04 7.8L.5 31.5l7.9-2.07A15.44 15.44 0 0016 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5zm0 28.17a13.1 13.1 0 01-6.68-1.83l-.48-.28-4.69 1.23 1.25-4.57-.31-.49A13.06 13.06 0 012.83 16C2.83 9.28 8.28 3.83 16 3.83S29.17 9.28 29.17 16 23.72 28.67 16 28.67zm7.18-9.77c-.39-.2-2.32-1.15-2.68-1.28-.36-.13-.62-.2-.88.2s-1.01 1.28-1.24 1.54c-.23.27-.46.3-.85.1a10.7 10.7 0 01-3.15-1.95 11.8 11.8 0 01-2.18-2.72c-.23-.39-.02-.6.17-.79.18-.18.39-.46.59-.69.2-.23.26-.39.39-.65.13-.27.07-.5-.03-.7s-.88-2.12-1.2-2.9c-.32-.77-.64-.66-.88-.67h-.75c-.26 0-.68.1-1.04.49-.36.4-1.36 1.33-1.36 3.24s1.39 3.76 1.58 4.02c.2.26 2.74 4.18 6.63 5.86.93.4 1.65.64 2.21.82.93.3 1.77.26 2.44.16.74-.11 2.32-.95 2.65-1.87.33-.91.33-1.69.23-1.85-.1-.16-.36-.26-.75-.46z" />
                    </svg>
                    WhatsApp Us
                  </a>
                  <Button asChild variant="outline" className="flex-1">
                    <Link href="/contact">
                      Ask About a Brand
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
