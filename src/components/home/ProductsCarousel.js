// src/components/home/ProductsCarousel.js
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/theme.module.css";

const products = [
  {
    name: "Falck Carbon",
    image: "/images/falck-carbon.jpg",
    href: "/posts/falck-carbon",
  },
  {
    name: "Ma Lin Extra Special",
    image: "/images/ma-lin-extra-special.jpg",
    href: "/posts/ma-lin-extra-special",
  },
  {
    name: "Extra Offensive 7 Power",
    image: "/images/extra-offensive-7-power.jpg",
    href: "/posts/extra-offensive-7-power",
  },
  {
    name: "Max Carbon 3D",
    image: "/images/max-carbon-3d.jpg",
    href: "/posts/max-carbon-3d",
  },
  {
    name: "Sweden EK Carbon",
    image: "/images/sweden-ek-carbon.jpg",
    href: "/posts/sweden-ek-carbon",
  },
  { name: "Falck W7", image: "/images/falck-w7.jpg", href: "/posts/falck-w7" },
  {
    name: "Ma Lin Carbon",
    image: "/images/ma-lin-carbon.jpg",
    href: "/posts/ma-lin-carbon",
  },
  {
    name: "Goiabao 5",
    image: "/images/goiabao-5.jpg",
    href: "/posts/goiabao-5",
  },
];

export default function ProductsCarousel() {
  return (
    <div className={`carouselWrapper ${styles.centered}`}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={24}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={true}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {products.map((p) => (
          <SwiperSlide key={p.name}>
            <Link href={p.href} className={styles.tile}>
              <Image
                src={p.image}
                alt={p.name}
                width={180}
                height={180}
                className={styles.tileImage}
              />
              <div style={{ marginTop: "var(--space-xs)", fontWeight: 600 }}>
                {p.name}
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
