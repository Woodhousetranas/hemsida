// src/app/page.js
import HeroSection from "@/components/home/HeroSection";
import BrandsSection from "@/components/home/BrandsSection";
import CTASectionBottom from "@/components/home/CTASectionBottom";
import ProductsCarousel from "@/components/home/ProductsCarousel";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandsSection />
      <CTASectionBottom />
      <ProductsCarousel />
    </>
  );
}
