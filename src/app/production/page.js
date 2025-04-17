// src/app/production/page.js
import ProductionSection from "@/components/production/ProductionSection";
import ProductionCarousel from "@/components/production/ProductionCarousel";
import CTASectionBottom from "@/components/home/CTASectionBottom";

export default function ProductionPage() {
  return (
    <>
      <ProductionSection />
      <ProductionCarousel />
      <CTASectionBottom />
    </>
  );
}
