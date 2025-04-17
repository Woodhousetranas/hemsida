"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import Image from "next/image";
import Link from "next/link";
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
  // lägg till övriga stommar på samma format...
];

export default function ProductsCarousel() {
  return (
    <section className={styles.sectionLight}>
      <div className={styles.centeredContent}>
        <h2 className={styles.heading}>Our Blades</h2>
      </div>

      <div className={`carouselWrapper ${styles.centeredContent}`}>
        <Swiper
          modules={[Autoplay, Navigation, Pagination, EffectFade]}
          spaceBetween={24}
          slidesPerView={3}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
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
                <div className={styles.productName}>{p.name}</div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
