import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ziatechsolutions.com";
const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME ?? "ZIA Tech Solutions";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${companyName} | Expert Automotive Software Support`,
    template: `%s | ${companyName}`,
  },
  description:
    "UAE's trusted automotive software specialists. Installation, OS upgrades, diagnostics & support for Benz, Volvo, Scania, Renault, MAN, Hino, Hyundai, JCB, Caterpillar, TecDoc, Iveco and more.",
  keywords: [
    "automotive software UAE",
    "Benz software support",
    "Volvo diagnostics UAE",
    "Scania software UAE",
    "TecDoc installation",
    "Iveco EASY software",
    "truck diagnostics UAE",
    "heavy vehicle software",
    "printer software support",
    "Outlook configuration Chennai",
  ],
  authors: [{ name: companyName }],
  creator: companyName,
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: siteUrl,
    siteName: companyName,
    title: `${companyName} | Expert Automotive Software Support`,
    description:
      "Expert automotive software installation, OS upgrades & diagnostics for all major brands in Sharjah, UAE.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${companyName} | Expert Automotive Software Support`,
    description:
      "Expert automotive software installation, OS upgrades & diagnostics for all major brands in Sharjah, UAE.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)",  color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919876543210";

  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: companyName,
              description:
                "Automotive software installation, OS upgrades, diagnostics & IT support for all major vehicle brands.",
              url: siteUrl,
              telephone: `+${whatsapp}`,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Sharjah",
                addressRegion: "Sharjah",
                addressCountry: "AE",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 25.3463,
                longitude: 55.4209,
              },
              openingHours: "Mo-Fr 09:00-18:00",
              priceRange: "AED",
              sameAs: [`https://wa.me/${whatsapp}`],
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <WhatsAppWidget phoneNumber={whatsapp} />
        </ThemeProvider>
      </body>
    </html>
  );
}
