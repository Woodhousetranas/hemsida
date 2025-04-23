// src/app/page.js
import "./globals.css";
import styles from "@/styles/theme.module.css";
import Link from "next/link";
import ProductsCarousel from "@/components/home/ProductsCarousel";
import BrandsSection from "@/components/home/BrandsSection";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section
        className={`${styles.hero} relative`}
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        {/* mörk overlay */}
        <div className="absolute inset-0 bg-black/50" aria-hidden />

        <div className={styles.heroContent}>
          <h1 className={styles.heading}>
            MADE&nbsp;IN&nbsp;SWEDEN
            <br />
            POWERED&nbsp;BY&nbsp;WOOD&nbsp;HOUSE
          </h1>
          <Link href="/production" className={styles.btnPrimary}>
            Explore Our Craft
          </Link>
        </div>
      </section>

      {/* ABOUT */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.centered}>
          <h2 className={styles.sectionTitle}>About Wood House AB</h2>

          <p className={styles.paragraph}>
            Wood House AB är en svensk premiumtillverkare av bordtennisracketar
            som levererar till varumärken som&nbsp;Yasaka, Donic och Nittaku.
          </p>

          <p className={styles.paragraph}>
            Vår mission är att kombinera traditionellt svenskt hantverk med
            modern teknik för att möta de högsta kraven inom professionell
            pingis.
          </p>
        </div>
      </section>

      {/* BRANDS – ny komponent */}
      <BrandsSection />

      {/* BLADES CAROUSEL */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.centered}>
          <h2 className={styles.sectionTitle}>Our Blades</h2>
        </div>
        <ProductsCarousel />
      </section>

      {/* CTA BOTTOM */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.centered}>
          <h2 className={styles.sectionTitle} style={{ color: "#fff" }}>
            Let’s Talk Table Tennis
          </h2>
          <p className={styles.paragraph} style={{ color: "#ddd" }}>
            Whether you’re seeking a long‑term partnership or simply want to
            learn more about our work, feel free to get in touch.
          </p>
          <Link href="/contact" className={styles.btnPrimary}>
            Contact Us via Email →
          </Link>
        </div>
      </section>
    </>
  );
}
