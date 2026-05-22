import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Razor Accounting | Sechelt, BC",
  description:
    "Professional bookkeeping, tax filing, and business advisory services for small businesses and entrepreneurs in Sechelt, BC. Led by Aimee with 15+ years of experience.",
  keywords:
    "accounting, bookkeeping, tax filing, tax planning, small business, Sechelt, BC, British Columbia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-brand-dark antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
