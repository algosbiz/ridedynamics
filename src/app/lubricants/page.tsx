import type { Metadata } from "next";
import ProductPage from "@/components/product/ProductPage";
import { lubricantsPage } from "@/data/product-pages";

export const metadata: Metadata = {
  title: "Lubricants | Ride Dynamics",
  description:
    "Ride Dynamics supplies Rock Oil motorcycle lubricants. Established in 1928, Rock Oil is the official lubricant of the MCE British Superbike Series.",
  alternates: { canonical: "/lubricants" },
};

export default function LubricantsPage() {
  return <ProductPage content={lubricantsPage} />;
}
