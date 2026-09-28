import type { Metadata } from "next";
import { Archivo_Narrow, Libre_Franklin } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { isProduction, site } from "@/data/site";

// The original site uses two Adobe Fonts faces that are licensed to that
// domain, so we load the closest free equivalents from Google Fonts.
// next/font downloads them at build time, so there is no extra request
// for the visitor and no flash of unstyled text.
const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-libre-franklin",
  display: "swap",
});

const archivoNarrow = Archivo_Narrow({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-archivo-narrow",
  display: "swap",
});

export const metadata: Metadata = {
  // Makes every canonical URL below resolve against the live domain.
  metadataBase: new URL(site.productionUrl),
  title: site.homeTitle,
  // Preview and local builds must not be indexed as copies of the real site.
  robots: isProduction ? { index: true, follow: true } : { index: false, follow: false },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-US"
      className={`${libreFranklin.variable} ${archivoNarrow.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
