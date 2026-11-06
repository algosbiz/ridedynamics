import type { Metadata } from "next";
import ProductPage from "@/components/product/ProductPage";
import { suspensionPage } from "@/data/product-pages";

export const metadata: Metadata = {
  title: "Suspension Parts | Ride Dynamics",
  description:
    "Ride Dynamics stocks K-Tech Suspension. Championship winning forks, shocks, springs and cartridges for road bikes, dirt bikes and cruisers.",
  alternates: { canonical: "/suspension-parts" },
};

export default function SuspensionPartsPage() {
  return <ProductPage content={suspensionPage} />;
}
