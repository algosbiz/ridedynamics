import type { Metadata } from "next";
import { Gabarito, Instrument_Sans } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import "./reference-design.css";
import "./inner-pages.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MotionDirector from "@/components/motion/MotionDirector";
import ReliefDefinitions from "@/components/home/ReliefDefinitions";
import { isProduction, site } from "@/data/site";

// Self-host the same open-source typefaces used in the design reference.
const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

const gabarito = Gabarito({
  subsets: ["latin"],
  variable: "--font-gabarito",
  display: "swap",
});

export const metadata: Metadata = {
  // Makes every canonical URL below resolve against the live domain.
  metadataBase: new URL(site.productionUrl),
  title: site.homeTitle,
  // Preview and local builds must not be indexed as copies of the real site.
  robots: isProduction
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-US"
      data-scroll-behavior="smooth"
      className={`${instrumentSans.variable} ${gabarito.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <a className="rd-skip-link" href="#main">
          Skip to content
        </a>
        <ReliefDefinitions />
        <Header />
        <main id="main" className="flex-1 overflow-x-clip">
          {children}
        </main>
        <Footer />
        <MotionDirector />
      </body>
    </html>
  );
}
