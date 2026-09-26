import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MCCAA — Malta Competition and Consumer Affairs Authority",
    template: "%s | MCCAA",
  },
  description:
    "The Malta Competition and Consumer Affairs Authority ensures fair markets and protects consumer rights through regulations, enforcement and education.",
  keywords: ["MCCAA", "Malta", "consumer protection", "competition", "market surveillance"],
  openGraph: {
    type: "website",
    locale: "en_MT",
    siteName: "MCCAA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-gray-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}