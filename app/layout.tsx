import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Underdog MMA | Martial Arts & Fitness in West Hartford, CT",
  description:
    "Premier martial arts training in West Hartford, Connecticut. Expert instruction in MMA, Brazilian Jiu-Jitsu, Muay Thai, boxing, and wrestling for all skill levels.",
  keywords: [
    "Underdog MMA",
    "West Hartford martial arts",
    "MMA training Connecticut",
    "Brazilian Jiu-Jitsu West Hartford",
    "Muay Thai Connecticut",
    "boxing classes West Hartford",
    "martial arts gym Connecticut",
    "MMA gym West Hartford",
    "BJJ classes Connecticut",
    "self defense West Hartford",
    "martial arts training Connecticut",
    "mixed martial arts West Hartford",
  ],
  authors: [{ name: "Underdog MMA" }],
  creator: "Underdog MMA",
  publisher: "Underdog MMA",
  metadataBase: new URL("https://underdogmma.com"),
  alternates: {
    canonical: "https://underdogmma.com",
  },
  openGraph: {
    title: "Underdog MMA | Martial Arts & Fitness in West Hartford, CT",
    description:
      "Premier martial arts training in West Hartford, Connecticut. Expert instruction in MMA, BJJ, Muay Thai, and more.",
    url: "https://underdogmma.com",
    siteName: "Underdog MMA",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/underdog-facility.jpg",
        width: 1200,
        height: 630,
        alt: "Underdog MMA Martial Arts Gym in West Hartford, Connecticut",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Underdog MMA | Martial Arts & Fitness in West Hartford, CT",
    description:
      "Premier martial arts training in West Hartford, Connecticut. Expert instruction in MMA, BJJ, Muay Thai, and more.",
    images: ["/underdog-facility.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {},
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "Underdog MMA",
  image: "https://underdogmma.com/underdog-facility.jpg",
  "@id": "https://underdogmma.com",
  url: "https://underdogmma.com",
  telephone: "+1-860-616-1365",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "23 Andover Drive",
    addressLocality: "West Hartford",
    addressRegion: "CT",
    postalCode: "06110",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.7628,
    longitude: -72.7420,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "17:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/underdogmmact/",
    "https://www.instagram.com/underdogmmact/",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "50",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Martial Arts Programs & Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mixed Martial Arts (MMA)",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Brazilian Jiu-Jitsu (BJJ)",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Muay Thai",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Boxing",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wrestling",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://underdogmma.com" />
        <meta name="geo.region" content="US-CT" />
        <meta name="geo.placename" content="West Hartford" />
        <meta name="geo.position" content="41.7628;-72.7420" />
        <meta name="ICBM" content="41.7628, -72.7420" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
