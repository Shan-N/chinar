import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"


export const metadata: Metadata = {
  metadataBase: new URL("https://chinarhospitality.com/"),
  title: "Chinar Hospitality",
  description: "India's No. 1 wedding planner | Chinar Hospitality offers bespoke weddings, fine dining, and world-class service at stunning destinations.",
  alternates: {
    canonical: "/",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

   const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Chinar Hospitality",
    url: "https://chinarhospitality.com/",
    logo: "https://chinarhospitality.com/chinar_logo.png",
    description:
      "India's No. 1 wedding planner | Chinar Hospitality offers bespoke weddings, fine dining, and world-class service at stunning destinations.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop 21 & 22, Bizzbay Mall",
      addressLocality: "Pune",
      addressRegion: "MH",
      postalCode: "411001",
      addressCountry: "IN",
    },
    telephone: "+91-9637202111",
    sameAs: [
      "https://www.facebook.com/chinarhospitality",
      "https://www.instagram.com/chinarhospitalityandcatering/",
    ],
    priceRange: "$$",
    image: [
      "https://chinarhospitality.com/weddingImages/img1.jpeg",
      "https://chinarhospitality.com/weddingImages/image2.jpeg",
      "https://chinarhospitality.com/weddingImages/image3.jpg"
    ],
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    hasMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.3162120145776!2d73.89760457423594!3d18.469330582614358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb367a2bc7fd%3A0x41985c206066e774!2sChinar%20Hospitality%20and%20Catering!5e0!3m2!1sen!2sin!4v1754848615453!5m2!1sen!2sin"
  };




  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <Analytics />
      </head>
      <body
        className={`bg-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
