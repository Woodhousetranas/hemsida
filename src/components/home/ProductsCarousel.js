"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import styles from "@/styles/theme.module.css";

const blades = [
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
    name: "Persson Power Carbon",
    image: "/images/persson-power-carbon.jpg",
    link: "/agencies/donic",
  },
  {
    name: "Original Senso V1",
    image: "/images/original-senso-v1.jpg",
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
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h2 className={styles.heading}>Crafted Blades</h2>
      </div>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop
        speed={800}
        className="swiper"
      >
        {blades.map((blade) => (
          <SwiperSlide key={blade.name}>
            <Link href={blade.link} className={styles.tile}>
              <Image
                src={blade.image}
                alt={blade.name}
                width={300}
                height={300}
                className={styles.tileImage}
              />
              <h3 style={{ marginTop: "1rem" }}>{blade.name}</h3>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
