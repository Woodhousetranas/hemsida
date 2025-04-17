"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/theme.module.css";

const blades = [
  {
    name: "Falck Carbon",
    image: "/images/falck-carbon.jpg",
    link: "/posts/falck-carbon",
  },
  {
    name: "Ma Lin Extra Special",
    image: "/images/ma-lin-extra-special.jpg",
    link: "/posts/ma-lin-extra-special",
  },
  {
    name: "Extra Offensive 7 Power",
    image: "/images/extra-offensive-7-power.jpg",
    link: "/posts/extra-offensive-7-power",
  },
  {
    name: "Max Carbon 3D",
    image: "/images/max-carbon-3d.jpg",
    link: "/posts/max-carbon-3d",
  },
  {
    name: "Sweden EK Carbon",
    image: "/images/sweden-ek-carbon.jpg",
    link: "/posts/sweden-ek-carbon",
  },
  { name: "Falck W7", image: "/images/falck-w7.jpg", link: "/posts/falck-w7" },
  {
    name: "Ma Lin Carbon",
    image: "/images/ma-lin-carbon.jpg",
    link: "/posts/ma-lin-carbon",
  },
  {
    name: "Goiabao 5",
    image: "/images/goiabao-5.jpg",
    link: "/posts/goiabao-5",
  },
  {
    name: "Ma Lin Soft Carbon",
    image: "/images/ma-lin-soft-carbon.jpg",
    link: "/posts/ma-lin-soft-carbon",
  },
  {
    name: "Ma Lin Extra Offensive",
    image: "/images/ma-lin-extra-offensive.jpg",
    link: "/posts/ma-lin-extra-offensive",
  },
  {
    name: "Battle Balsa",
    image: "/images/battle-balsa.jpg",
    link: "/posts/battle-balsa",
  },
  { name: "Extra 3D", image: "/images/extra-3d.jpg", link: "/posts/extra-3d" },
  {
    name: "Sweden Extra",
    image: "/images/sweden-extra.jpg",
    link: "/posts/sweden-extra",
  },
  {
    name: "Sweden Classic",
    image: "/images/sweden-classic.jpg",
    link: "/posts/sweden-classic",
  },
  {
    name: "Sweden Guardian",
    image: "/images/sweden-guardian.jpg",
    link: "/posts/sweden-guardian",
  },
  { name: "2040", image: "/images/2040.jpg", link: "/posts/2040" },
  {
    name: "Sweden Defensive",
    image: "/images/sweden-defensive.jpg",
    link: "/posts/sweden-defensive",
  },
  {
    name: "Atletico Power Pro",
    image: "/images/atletico-power-pro.jpg",
    link: "/posts/atletico-power-pro",
  },
  {
    name: "Atletico Spin Pro",
    image: "/images/atletico-spin-pro.jpg",
    link: "/posts/atletico-spin-pro",
  },
  {
    name: "Resonate GI",
    image: "/images/resonate-gi.jpg",
    link: "/posts/resonate-gi",
  },
  {
    name: "Resonate GO",
    image: "/images/resonate-go.jpg",
    link: "/posts/resonate-go",
  },
];

export default function BladeCarousel() {
  return (
    <section className={styles.sectionLight}>
      <div style={{ textAlign: "center" }}>
        <h2 className={styles.heading}>Our Blades</h2>
      </div>
      <div className={styles.carouselWrapper}>
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            480: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {blades.map((blade) => (
            <SwiperSlide key={blade.name}>
              <Link href={blade.link} className={styles.tile}>
                <Image
                  src={blade.image}
                  alt={blade.name}
                  width={180}
                  height={180}
                  className={styles.tileImage}
                />
                <h3 className={styles.productName}>{blade.name}</h3>
                <p className={styles.productDescription}>Learn more →</p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
