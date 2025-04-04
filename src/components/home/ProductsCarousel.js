"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import styles from "@/styles/theme.module.css";

const products = [
  {
    name: "Ma Lin Extra Offensive",
    image: "/images/ma-lin-extra-offensive.jpg",
    link: "/agencies/yasaka",
  },
  {
    name: "Falck W7",
    image: "/images/falck-w7.jpg",
    link: "/agencies/yasaka",
  },
  {
    name: "Falck Carbon",
    image: "/images/falck-carbon.jpg",
    link: "/agencies/yasaka",
  },
  {
    name: "Sweden Extra",
    image: "/images/sweden-extra.jpg",
    link: "/agencies/yasaka",
  },
  {
    name: "Ma Lin Soft Carbon",
    image: "/images/ma-lin-soft-carbon.jpg",
    link: "/agencies/yasaka",
  },
  {
    name: "Extra Offensive 7 Power",
    image: "/images/extra-offensive-7-power.jpg",
    link: "/agencies/yasaka",
  },
  {
    name: "Waldner Dicon",
    image: "/images/waldner-dicon.jpg",
    link: "/agencies/donic",
  },
  {
    name: "Original Senso V1",
    image: "/images/original-senso-v1.jpg",
    link: "/agencies/donic",
  },
  {
    name: "Persson Power Carbon",
    image: "/images/persson-power-carbon.jpg",
    link: "/agencies/donic",
  },
  {
    name: "Appelgren Allplay",
    image: "/images/appelgren-allplay.jpg",
    link: "/agencies/donic",
  },
];

export default function ProductsCarousel() {
  return (
    <section className={styles.sectionLight}>
      <div style={{ textAlign: "center", marginBottom: "1rem" }}>
        <h2 className={styles.heading}>Our Blades</h2>
      </div>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        spaceBetween={60}
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.name}>
            <Link href={product.link} className={styles.tile}>
              <Image
                src={product.image}
                alt={product.name}
                width={320}
                height={320}
                className={styles.tileImage}
              />
              <h3
                style={{
                  fontSize: "0,5rem",
                  marginTop: "1rem",
                  fontWeight: 800,
                }}
              >
                {product.name}
              </h3>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
