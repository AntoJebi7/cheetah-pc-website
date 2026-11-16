import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Cheetah PC | Live health for your Windows PC", template: "%s | Cheetah PC" },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "Cresard Software Services", url: "https://www.cresard.com" }],
  creator: "Cresard Software Services",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Cheetah PC | Live health for your Windows PC",
    description: DESCRIPTION,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Cheetah PC, live health for your Windows PC" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheetah PC | Live health for your Windows PC",
    description: DESCRIPTION,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = { themeColor: "#0f172a", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-slate-950"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
