'use client';

import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import BrandsSection from '@/components/home/BrandsSection';
import ProductsPreview from '@/components/home/ProductsPreview';
import CTASection from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <BrandsSection />
      <ProductsPreview />
      <CTASection />
    </>
  );
}
