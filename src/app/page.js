"use client";

import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import BrandsSection from "@/components/home/BrandsSection";
import ProductsCarousel from "@/components/home/ProductsCarousel";
import CTASection from "@/components/home/CTASection";
import CTASectionBottom from "@/components/home/CTASectionBottom";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <BrandsSection />
      <ProductsCarousel />
      <CTASection />
      <CTASectionBottom />
    </>
  );
}
