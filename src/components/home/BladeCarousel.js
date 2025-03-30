"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/theme.module.css";

const blades = [
  {
    name: "Waldner Dicon",
    image: "/images/waldner-dicon.jpg",
    href: "/agencies/donic",
    description: "Named after the legend – soft touch and precision.",
  },
  {
    name: "Persson Power Carbon",
    image: "/images/persson-power-carbon.jpg",
    href: "/agencies/donic",
    description: "Carbon power with legendary touch.",
  },
  {
    name: "Waldner Senso Carbon V1",
    image: "/images/waldner-senso-carbon-v1.jpg",
    href: "/agencies/donic",
    description: "Great feedback and fast attacks.",
  },
  {
    name: "Appelgren Allplay",
    image: "/images/appelgren-allplay.jpg",
    href: "/agencies/donic",
    description: "Perfect choice for modern allrounders.",
  },
  {
    name: "Ma Lin Extra Offensive",
    image: "/images/ma-lin-extra-offensive.jpg",
    href: "/agencies/yasaka",
    description: "Fast offensive blade with great balance.",
  },
  {
    name: "Falck W7",
    image: "/images/falck-w7.jpg",
    href: "/agencies/yasaka",
    description: "Seven-ply all-wood blade for aggressive control.",
  },
  {
    name: "Falck Carbon",
    image: "/images/falck-carbon.jpg",
    href: "/agencies/yasaka",
    description: "Used by Mattias Falck – explosive power with precision.",
  },
  {
    name: "Sweden Extra",
    image: "/images/sweden-extra.jpg",
    href: "/agencies/yasaka",
    description: "Classic feel with allround precision.",
  },
  {
    name: "Ma Lin Soft Carbon",
    image: "/images/ma-lin-soft-carbon.jpg",
    href: "/agencies/yasaka",
    description: "Speed + touch for modern attackers.",
  },
  {
    name: "Extra Offensive 7 Power",
    image: "/images/extra-offensive-7-power.jpg",
    href: "/agencies/yasaka",
    description: "Powerful strokes with carbon stability.",
  },
];

export default function BladeCarousel() {
  return (
    <section className={styles.sectionLight}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h2 className={styles.heading}>Our Blades</h2>
      </div>

      <div className={styles.carouselWrapper}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          speed={700}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {blades.map((blade) => (
            <SwiperSlide key={blade.name}>
              <Link href={blade.href} className={styles.tile}>
                <Image
                  src={blade.image}
                  alt={blade.name}
                  width={180}
                  height={180}
                  className={styles.tileImage}
                />
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    marginTop: "0.8rem",
                    color: "#111",
                    textAlign: "center",
                  }}
                >
                  {blade.name}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#666",
                    textAlign: "center",
                    marginTop: "0.5rem",
                  }}
                >
                  {blade.description}
                </p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
