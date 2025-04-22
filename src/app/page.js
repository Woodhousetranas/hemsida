// src/app/page.js
import styles from "@/styles/theme.module.css";
import Link from "next/link";
import Image from "next/image";
import ProductsCarousel from "@/components/home/ProductsCarousel";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section
        className={styles.hero}
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
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
          <h2 className={styles.sectionTitle}>About Wood House AB</h2>
          <p className={styles.paragraph}>
            Wood House AB är en svensk premiumtillverkare av bordtennisracketar
            som levererar till varumärken som&nbsp;Yasaka, Donic och Nittaku.
          </p>
          <p className={styles.paragraph}>
            Vår mission är att kombinera traditionellt svenskt hantverk med
            modern teknik för att möta de högsta kraven inom professionell
            pingis.
          </p>
        </div>
      </section>

      {/* BRANDS */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.centered}>
          <h2 className={styles.sectionTitle} style={{ color: "#fff" }}>
            Our Brands
          </h2>
        </div>

        <div className={styles["grid-3"]}>
          {[
            {
              name: "Yasaka",
              logo: "/images/yasaka-logo.png",
              href: "/agencies/yasaka",
            },
            {
              name: "Donic",
              logo: "/images/donic-logo.png",
              href: "/agencies/donic",
            },
            {
              name: "Nittaku",
              logo: "/images/nittaku-logo.png",
              href: "/agencies/nittaku",
            },
          ].map((b) => (
            <Link key={b.name} href={b.href} className={styles.tile}>
              <Image
                src={b.logo}
                alt={b.name}
                width={160}
                height={80}
                style={{
                  objectFit: "contain",
                  filter: "grayscale(100%) brightness(0) invert(1)",
                  marginBottom: "var(--space-sm)",
                }}
              />
              <h3 style={{ color: "#fff", marginBottom: "var(--space-xs)" }}>
                {b.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* BLADES CAROUSEL */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.centered}>
          <h2 className={styles.sectionTitle}>Our Blades</h2>
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
            Oavsett om du söker ett långsiktigt partnerskap eller bara vill veta
            mer om vad vi gör – hör gärna av dig.
          </p>
          <Link href="/contact" className={styles.btnPrimary}>
            Kontakta oss via e‑post →
          </Link>
        </div>
      </section>
    </>
  );
}
