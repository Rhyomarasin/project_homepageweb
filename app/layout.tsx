import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../src/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Premium Framer Website Templates for Business | Browser.supply",
  description:
    "Professional Framer website templates starting at $99. Trusted by 2,000+ customers. Launch your business site in hours with step by step video tutorials. No coding required.",
  openGraph: {
    title: "Premium Framer Website Templates for Business | Browser.supply",
    description:
      "Professional Framer website templates starting at $99. Trusted by 2,000+ customers. Launch your business site in hours with step by step video tutorials. No coding required.",
    url: "https://browser.supply",
    siteName: "Browser.supply",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Framer Website Templates for Business | Browser.supply",
    description:
      "Professional Framer website templates starting at $99. Trusted by 2,000+ customers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable}`}
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}