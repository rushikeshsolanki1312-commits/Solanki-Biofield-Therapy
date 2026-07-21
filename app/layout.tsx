import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import { site, products } from "@/lib/site";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Frequency Infused Wellness Supplements`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Solanki Biofield Therapy",
    "frequency infused supplements",
    "biofield therapy Pimpri-Chinchwad",
    "natural wellness drops",
    "Horse Power stamina supplement",
    "Brain Spark Drops for kids",
    "Deep Sleep Drops",
    "Immuni Kids Drops",
    "Slimitra weight management",
    "Dia Wellness Drops diabetes",
    "natural supplements Chikhali",
    "wellness supplements Maharashtra",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: site.url },
  category: "Health & Wellness",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Frequency Infused Wellness Supplements`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Frequency Infused Wellness Supplements`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport = {
  themeColor: "#0f5132",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "HealthAndBeautyBusiness"],
        "@id": `${site.url}/#business`,
        name: site.name,
        description: site.description,
        url: site.url,
        telephone: site.phone,
        email: site.email,
        priceRange: "₹₹",
        address: {
          "@type": "PostalAddress",
          streetAddress: `${site.address.line1}, ${site.address.line2}`,
          addressLocality: site.address.city,
          addressRegion: site.address.state,
          postalCode: site.address.zip,
          addressCountry: "IN",
        },
        areaServed: "IN",
        openingHours: "Mo-Su 09:00-21:00",
      },
      ...products.map((p) => ({
        "@type": "Product",
        name: p.name,
        category: p.category,
        description: p.short,
        brand: { "@type": "Brand", name: site.name },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "INR",
          seller: { "@type": "Organization", name: site.name },
        },
      })),
    ],
  };

  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
