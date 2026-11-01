import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default: "STRATFOLIO INTELLIGENCE | Strategic Clarity",
    template: "%s | STRATFOLIO INTELLIGENCE",
  },
  description: "Business intelligence and growth strategy. We transform market information, competitor activity, and business evidence into strategic clarity.",
  openGraph: {
    siteName: "STRATFOLIO INTELLIGENCE",
    title: "STRATFOLIO INTELLIGENCE | Strategic Clarity",
    description: "Business intelligence and growth strategy for clearer, better-informed decisions.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "STRATFOLIO INTELLIGENCE | Strategic Clarity",
    description: "Business intelligence and growth strategy for clearer, better-informed decisions.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
