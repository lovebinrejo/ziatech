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
    default: `${companyName} | E-Commerce & IT Consultancy`,
    template: `%s | ${companyName}`,
  },
  description:
    "E-Commerce websites, IT consultancy, technical installation, and computer equipment trading from Sharjah, UAE.",
  keywords: [
    "e-commerce website development",
    "IT consultancy UAE",
    "technical installations consultancy",
    "computer equipment trading",
    "website design Sharjah",
    "office network setup",
    "email setup UAE",
    "hardware supply",
    "business technology solutions",
  ],
  authors: [{ name: companyName }],
  creator: companyName,
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: siteUrl,
    siteName: companyName,
    title: `${companyName} | E-Commerce & IT Consultancy`,
    description:
      "E-Commerce websites, IT consultancy, technical installation, and computer equipment supply for businesses in the UAE.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${companyName} | E-Commerce & IT Consultancy`,
    description:
      "E-Commerce websites, IT consultancy, technical installation, and computer equipment supply for businesses in the UAE.",
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
                "E-commerce websites, IT consultancy, technical installations, and business hardware support for companies in the UAE.",
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
              openingHours: "Mo-Sa 09:00-20:00",
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
