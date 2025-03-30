"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/theme.module.css";

export default function NittakuPage() {
  return (
    <main>
      {/* Hero + Logo */}
      <section
        style={{
          backgroundImage: "url('/images/nittaku-hero.jpg')",
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
            src="/images/nittaku-logo.png"
            alt="Nittaku"
            width={200}
            height={80}
            style={{ objectFit: "contain" }}
          />
        </div>
      </section>

      {/* Intro */}
      <section className={styles.sectionLight}>
        <h2 className={styles.sectionTitle}>Nittaku – Japan’s Premium Brand</h2>
        <p
          className={styles.paragraph}
          style={{ maxWidth: "800px", margin: "0 auto" }}
        >
          Nittaku has long been recognized for its quality and innovation in the
          world of table tennis. As the official ball supplier for the Olympics,
          their commitment to excellence is unmatched.
        </p>
      </section>

      {/* Filosofi */}
      <section className={styles.sectionLight}>
        <h2 className={styles.sectionTitle}>Our Philosophy</h2>
        <p
          className={styles.paragraph}
          style={{ maxWidth: "800px", margin: "0 auto" }}
        >
          Nittaku combines precision Japanese engineering with decades of
          experience to produce some of the most respected equipment in the
          sport.
        </p>
      </section>

      {/* CTA */}
      <section className={styles.sectionDark}>
        <h2 className={styles.sectionTitle}>Official Website</h2>
        <p
          className={styles.paragraph}
          style={{ textAlign: "center", color: "#ddd" }}
        >
          Explore the full world of Nittaku, from rubbers and blades to balls
          and accessories.
        </p>
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <Link href="https://www.nittaku.com/" className={styles.btnPrimary}>
            Visit nittaku.com →
          </Link>
        </div>
      </section>
    </main>
  );
}
