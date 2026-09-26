import type { Metadata } from "next";
import { Funnel_Sans } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";

/**
 * Funnel Sans is the only typeface used on mccaa.org.mt
 * (Google Fonts: Funnel+Sans:wght@300;400;500;600;700). next/font self-hosts it
 * and exposes it through the `--font-funnel-sans` variable consumed in globals.css.
 */
const funnelSans = Funnel_Sans({
  variable: "--font-funnel-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://mccaa.org.mt";
const FAVICON = `${SITE_URL}/wp-content/uploads/2026/05/logo-2nd.svg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MCCAA",
    template: "%s - MCCAA",
  },
  description:
    "Protecting Consumers, Supporting Businesses. The Malta Competition and Consumer Affairs Authority ensures fair markets and protects consumers rights through regulations, enforcement and education.",
  keywords: [
    "MCCAA",
    "Malta Competition and Consumer Affairs Authority",
    "Malta",
    "consumer protection",
    "competition",
    "market surveillance",
    "standards",
  ],
  icons: {
    icon: [
      { url: FAVICON, sizes: "32x32" },
      { url: FAVICON, sizes: "192x192" },
    ],
    apple: FAVICON,
  },
  openGraph: {
    type: "website",
    locale: "en_MT",
    siteName: "MCCAA",
    title: "MCCAA",
    description:
      "Protecting Consumers, Supporting Businesses. The Malta Competition and Consumer Affairs Authority.",
    url: SITE_URL,
  },
  alternates: {
    languages: {
      en: SITE_URL,
      mt: `${SITE_URL}/mt/`,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${funnelSans.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-white font-sans text-brand-dark antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
