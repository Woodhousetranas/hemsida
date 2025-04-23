// src/components/home/ProductsCarousel.js
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import styles from "@/styles/theme.module.css";

// src/components/home/ProductsCarousel.js
const products = [
  { name: "Falck Carbon",             image: "/images/falck-carbon.jpg",               href: "/posts/falck-carbon" },
  { name: "Falck W7",                 image: "/images/falck-w7.jpg",                   href: "/posts/falck-w7" },
  { name: "Ma Lin Extra Offensive",   image: "/images/ma-lin-extra-offensive.jpg",      href: "/posts/ma-lin-extra-offensive" },
  { name: "Ma Lin Soft Carbon",       image: "/images/ma-lin-soft-carbon.jpg",          href: "/posts/ma-lin-soft-carbon" },
  { name: "Extra Offensive 7 Power",  image: "/images/extra-offensive-7-power.jpg",     href: "/posts/extra-offensive-7-power" },
  { name: "Sweden Extra",             image: "/images/sweden-extra.jpg",                href: "/posts/sweden-extra" },
  { name: "Original Senso V1",        image: "/images/original-senso-v1.jpg",          href: "/posts/original-senso-v1" },
  { name: "Persson Power Carbon",     image: "/images/persson-power-carbon.jpg",       href: "/posts/persson-power-carbon" },
  { name: "Waldner Dicon",            image: "/images/waldner-dicon.jpg",              href: "/posts/waldner-dicon" },
  { name: "Waldner Senso Carbon V1",  image: "/images/waldner-senso-carbon-v1.jpg",    href: "/posts/waldner-senso-carbon-v1" },
  { name: "Appelgren Allplay",        image: "/images/appelgren-allplay.jpg",          href: "/posts/appelgren-allplay" },
];

export default function ProductsCarousel() {
  return (
    <section className="py-16">
      <Container>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          spaceBetween={24}
          slidesPerView={3}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="group"
        >
          {products.map((p) => (
            <SwiperSlide key={p.name}>
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Link href={p.href} className={`block ${styles.tile}`}>
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={180}
                    height={180}
                    className={`${styles.tileImage} object-contain mx-auto`}
                    placeholder="blur"
                    blurDataURL="/images/placeholder-blade.jpg"
                  />
                  <h4 className="mt-2 text-center text-lg font-semibold text-gray-800">
                    {p.name}
                  </h4>
                </Link>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}
