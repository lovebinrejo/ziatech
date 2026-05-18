import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Package } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Business technology packages, IT hardware bundles, network solutions, and e-commerce website products from ZIA Tech Solutions.",
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

      <CTASection />
    </>
  );
}
