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
    "TecDoc catalogue, Iveco EASY, Scania SDP3, Volvo PTT, and more — ZIA Tech Solutions supplies and installs the leading automotive diagnostic software tools.",
};

const products = [
  {
    id: "tecdoc",
    name: "TecDoc Parts Catalogue",
    tagline: "The global parts reference standard",
    description:
      "TecDoc is the world's largest multi-brand parts and technical information catalogue. Covering over 900 vehicle brands, 570 parts suppliers, and 65 million+ part numbers, it's indispensable for any professional workshop.",
    features: [
      "65M+ part numbers from 570 suppliers",
      "OE cross-references and compatibility",
      "Single-seat and multi-user licences",
      "2026 data refresh with EV/hybrid coverage",
      "Fast SOLR-powered search",
      "Offline mode via mobile app",
    ],
    badge: "Parts Catalogue",
    badgeVariant: "default" as const,
    highlight: "Most Popular",
  },
  {
    id: "iveco-easy",
    name: "Iveco EASY",
    tagline: "Official Iveco diagnostic platform",
    description:
      "Iveco EASY is the factory-level diagnostic and programming tool for all Iveco commercial vehicles — from Daily vans to Stralis trucks and beyond. Supports fault reading, ECU programming, and variant coding.",
    features: [
      "Full fault reading & clearing",
      "ECU / TCU programming",
      "Actuation & calibration tests",
      "Variant and parameter coding",
      "Supports Daily, Eurocargo, Stralis, S-Way",
      "Works with all standard VCI interfaces",
    ],
    badge: "Diagnostic Tool",
    badgeVariant: "teal" as const,
  },
  {
    id: "scania-sdp3",
    name: "Scania SDP3",
    tagline: "Scania Diagnos & Programmer 3",
    description:
      "SDP3 is Scania's official diagnostic software for trucks, buses, and engines. The 2026 v2.52 release adds full Super engine support, guided diagnostics, and improved CAN data logging.",
    features: [
      "Full DTC read/clear for all Scania platforms",
      "Super 13L engine support (v2.52)",
      "Guided diagnostics workflows",
      "ECU parameter programming",
      "Real-time CAN data logging",
      "Integrates with PTT programmer",
    ],
    badge: "Diagnostic Tool",
    badgeVariant: "teal" as const,
  },
  {
    id: "volvo-ptt",
    name: "Volvo PTT / VCADS",
    tagline: "Premium Tech Tool for Volvo Trucks & Buses",
    description:
      "Volvo's PTT 3.x brings cloud-connected ECU updates, remote programming support, and live Volvo ASIST integration — making it the most advanced Volvo workshop tool available.",
    features: [
      "Cloud-based ECU software updates",
      "Remote programming capability",
      "Full fault code coverage",
      "Bus & truck support (9700, BZL EV)",
      "Integrates with Volvo ASIST",
      "VCADS / Volvo Trucks compatible",
    ],
    badge: "Diagnostic Tool",
    badgeVariant: "teal" as const,
  },
  {
    id: "man-cats",
    name: "MAN-cats III",
    tagline: "Official MAN diagnostic & programming system",
    description:
      "MAN-cats III provides complete diagnostic coverage for MAN trucks and buses. Supports variant coding, software updates, guided fault isolation, and online parameter programming.",
    features: [
      "All MAN truck & bus models",
      "Guided fault isolation",
      "Variant coding & parameter programming",
      "Online ECU software updates",
      "MAN-Portal integration",
      "MAN TGX / TGS / Lion's Coach support",
    ],
    badge: "Diagnostic Tool",
    badgeVariant: "teal" as const,
  },
  {
    id: "cat-et",
    name: "Caterpillar ET (Electronic Technician)",
    tagline: "Factory diagnostics for Cat construction equipment",
    description:
      "Cat ET is the official diagnostic tool for all Caterpillar machines and engines. Provides ECM diagnostics, configuration, and calibration for excavators, bulldozers, generators, and more.",
    features: [
      "Full ECM fault read & clear",
      "Machine configuration & calibration",
      "Real-time parameter monitoring",
      "Flash programming support",
      "Supports all Cat machine families",
      "Works with Cat Comm Adapter III",
    ],
    badge: "Construction Equipment",
    badgeVariant: "warning" as const,
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-950 to-teal-900 text-white py-24 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="teal" className="mb-4 text-xs px-3 py-1">Software Tools</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Diagnostic &amp; Workshop Software
          </h1>
          <p className="text-lg text-teal-100 max-w-2xl mx-auto">
            We supply, install, and support the leading automotive diagnostic platforms for workshops across the UAE.
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
