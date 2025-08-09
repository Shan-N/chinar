import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Chinar Hospitality",
  description: "India's No. 1 wedding planner | Chinar Hospitality offers bespoke weddings, fine dining, and world-class service at stunning destinations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
