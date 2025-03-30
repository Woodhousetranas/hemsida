"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/theme.module.css";

export default function YasakaPage() {
  return (
    <main>
      {/* Hero + Logo */}
      <section
        style={{
          backgroundImage: "url('/images/yasaka-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            padding: "2rem",
            borderRadius: "12px",
          }}
        >
          <Image
            src="/images/yasaka-logo.png"
            alt="Yasaka"
            width={200}
            height={80}
            style={{ objectFit: "contain" }}
          />
        </div>
      </section>

      {/* Intro */}
      <section className={styles.sectionLight}>
        <h2 className={styles.sectionTitle}>
          Yasaka – Japanese-Swedish Table Tennis Heritage
        </h2>
        <p
          className={styles.paragraph}
          style={{ maxWidth: "800px", margin: "0 auto" }}
        >
          Yasaka is a legendary brand known for its blend of Japanese precision
          and Swedish blade craftsmanship. With iconic rubbers like Mark V and
          the Rakza series, Yasaka has helped shape the history of modern table
          tennis.
        </p>
      </section>

      {/* Filosofi */}
      <section className={styles.sectionLight}>
        <h2 className={styles.sectionTitle}>Our Philosophy</h2>
        <p
          className={styles.paragraph}
          style={{ maxWidth: "800px", margin: "0 auto" }}
        >
          Yasaka blends cutting-edge rubber development from Japan with premium
          blade production in Sweden. Every product is designed with
          performance, durability, and feel in mind—trusted by world-class
          professionals and passionate amateurs alike.
        </p>
      </section>

      {/* CTA */}
      <section className={styles.sectionDark}>
        <h2 className={styles.sectionTitle}>Official Retailer</h2>
        <p
          className={styles.paragraph}
          style={{ textAlign: "center", color: "#ddd" }}
        >
          Explore the full Yasaka range at our official retailer.
        </p>
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <Link
            href="https://yasakatabletennis.com"
            className={styles.btnPrimary}
          >
            Visit yasakatabletennis.com →
          </Link>
        </div>
      </section>
    </main>
  );
}
