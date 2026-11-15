import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/config/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Independent Book Reading and Editorial Feedback for Authors", template: `%s | ${site.brand}` },
  description: "Independent book reading and honest editorial feedback for authors and publishers worldwide. Straightforward pricing: $10 per 100 pages.",
  alternates: { canonical: "./" },
  openGraph: {
    title: "Every Book Deserves to Be Read",
    description: "Independent reading and thoughtful editorial feedback. $10 per 100 pages.",
    type: "website",
    siteName: site.brand,
  },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
        <Reveal />
      </body>
    </html>
  );
}
