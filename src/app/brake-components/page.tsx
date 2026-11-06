import type { Metadata } from "next";
import ProductPage from "@/components/product/ProductPage";
import { brakesPage } from "@/data/product-pages";

export const metadata: Metadata = {
  title: "Brake Components | Ride Dynamics",
  description:
    "Ride Dynamics stocks Accossato brake and clutch master cylinders, calipers, lines, discs, pads, handlebars and controls for your motorcycle.",
  alternates: { canonical: "/brake-components" },
};

export default function BrakeComponentsPage() {
  return <ProductPage content={brakesPage} />;
}
