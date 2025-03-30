"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/theme.module.css";

export default function DonicPage() {
  return (
    <main>
      {/* Hero + Logo */}
      <section
        style={{
          backgroundImage: "url('/images/donic-hero.jpg')",
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
            src="/images/donic-logo.png"
            alt="Donic"
            width={200}
            height={80}
            style={{ objectFit: "contain" }}
          />
        </div>
      </section>

      {/* Intro */}
      <section className={styles.sectionLight}>
        <h2 className={styles.sectionTitle}>
          Donic – German Engineering in Table Tennis
        </h2>
        <p
          className={styles.paragraph}
          style={{ maxWidth: "800px", margin: "0 auto" }}
        >
          Donic stands for world-class German technology in table tennis. With a
          long history of supporting champions and developing innovative
          equipment, Donic continues to push the sport forward.
        </p>
      </section>

      {/* Filosofi */}
      <section className={styles.sectionLight}>
        <h2 className={styles.sectionTitle}>Our Philosophy</h2>
        <p
          className={styles.paragraph}
          style={{ maxWidth: "800px", margin: "0 auto" }}
        >
          At Donic, innovation meets tradition. Every product is engineered with
          precision and crafted for peak performance, trusted by professionals
          around the world.
        </p>
      </section>

      {/* CTA */}
      <section className={styles.sectionDark}>
        <h2 className={styles.sectionTitle}>Official Website</h2>
        <p
          className={styles.paragraph}
          style={{ textAlign: "center", color: "#ddd" }}
        >
          Discover more about Donic and browse their full collection.
        </p>
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <Link href="https://www.donic.com/" className={styles.btnPrimary}>
            Visit donic.com →
          </Link>
        </div>
      </section>
    </main>
  );
}
