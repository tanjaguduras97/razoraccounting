import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const SITE_URL = "https://razoraccounting.com";
const SITE_NAME = "Razor Accounting";
const DESCRIPTION =
  "Professional bookkeeping, tax filing, and business advisory services for small businesses and entrepreneurs in Sechelt, BC. Led by Aimee with 15+ years of experience.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Sechelt, BC Small Business Accountant`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    "accounting",
    "bookkeeping",
    "tax filing",
    "tax planning",
    "small business accountant",
    "Sechelt",
    "Sunshine Coast",
    "British Columbia",
    "Canada",
  ],
  authors: [{ name: SITE_NAME }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Sechelt, BC Small Business Accountant`,
    description: DESCRIPTION,
    images: [
      {
        url: "/logo.png",
        width: 350,
        height: 113,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: `${SITE_NAME} | Sechelt, BC Small Business Accountant`,
    description: DESCRIPTION,
    images: ["/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: SITE_NAME,
  image: `${SITE_URL}/logo.png`,
  url: SITE_URL,
  telephone: "+1-604-000-0000",
  email: "info@razoraccounting.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sechelt",
    addressRegion: "BC",
    addressCountry: "CA",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Sunshine Coast, British Columbia",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ],
    opens: "09:00",
    closes: "17:00",
  },
  founder: {
    "@type": "Person",
    name: "Aimee",
  },
  sameAs: [
    "https://www.instagram.com/razor_accounting/",
    "https://www.facebook.com/RazorAccounting",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-CA" className={inter.variable}>
      <body className="bg-white text-brand-dark antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
