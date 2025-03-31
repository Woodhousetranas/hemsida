"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/theme.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const images = [
  "/images/production1.jpg",
  "/images/production2.jpg",
  "/images/production3.jpg",
  "/images/falck-ponti.jpg",
];

export default function ProductionPage() {
  return (
    <>
      {/* HERO TITLE */}
      <section className={styles.sectionLight}>
        <div
          style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}
        >
          <h1 className={styles.heading}>Production</h1>
          <p
            className={styles.paragraph}
            style={{ marginTop: "0.5rem", fontSize: "1.1rem" }}
          >
            <strong>Swedish woodworking meets global excellence.</strong>
          </p>
        </div>

        {/* FADE IMAGE CAROUSEL */}
        <div
          style={{
            maxWidth: "1000px",
            margin: "2rem auto",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          <Swiper
            effect="fade"
            loop
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            modules={[Autoplay, EffectFade]}
            style={{ height: "450px" }}
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={src}
                  alt={`Production image ${index + 1}`}
                  fill
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* WHITE TEXT SECTION */}
      <section className={styles.sectionLight}>
        <div
          style={{ maxWidth: "850px", margin: "0 auto", textAlign: "center" }}
        >
          <p className={styles.paragraph}>
            Our state-of-the-art manufacturing facility in Tranås is at the core
            of Wood House’s operations. Here, traditional Swedish woodworking
            skills seamlessly integrate with cutting-edge technology, resulting
            in world-class table tennis blades trusted by elite players
            globally.
            <br />
            <br />
            Esteemed brands such as Donic, Yasaka, and Nittaku rely on our
            facility for premium blade production. Every step – from selecting
            the finest woods to rigorous quality checks – is carried out with
            unmatched precision by our expert craftsmen.
          </p>
        </div>
      </section>

      {/* DARK TEXT SECTION */}
      <section className={styles.sectionDark}>
        <div
          style={{ maxWidth: "850px", margin: "0 auto", textAlign: "center" }}
        >
          <p
            className={styles.paragraph}
            style={{ color: "var(--color-white)" }}
          >
            Swedish-made blades have become a hallmark of innovation and
            reliability. At Wood House, we proudly uphold this legacy. Players
            across the world rely on our products for their craftsmanship,
            consistency, and pure Swedish quality.
            <br />
            <br />
            Each blade is the result of decades of expertise – built to help
            players perform at their absolute best.
            <br />
            <strong> Made in Sweden – Powered by Wood House.</strong>
          </p>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className={styles.sectionLight}>
        <div
          style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}
        >
          <h2 className={styles.heading}>Curious about our blades?</h2>
          <p className={styles.paragraph} style={{ marginBottom: "1.5rem" }}>
            Reach out to learn more about our production, product partnerships,
            or how to collaborate.
          </p>
          <Link href="/contact" className={styles.btnPrimary}>
            Contact Us →
          </Link>
        </div>
      </section>
    </>
  );
}
