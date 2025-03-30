"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/theme.module.css";

export default function AboutUsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          height: "60vh",
          backgroundImage: "url(/images/about-us.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0, 0, 0, 0.5)",
          }}
        ></div>
        <div style={{ zIndex: 1, padding: "1rem" }}>
          <h1 style={{ fontSize: "3rem", fontWeight: 700 }}>
            About Wood House AB
          </h1>
        </div>
      </section>

      {/* Company Intro */}
      <section className={styles.sectionLight}>
        <div
          style={{ maxWidth: "850px", margin: "0 auto", textAlign: "center" }}
        >
          <h2 className={styles.heading}>A Swedish Legacy in Table Tennis</h2>
          <p className={styles.paragraph}>
            Wood House AB is a premium Swedish manufacturer of professional
            table tennis blades. Based in Tranås, we combine Scandinavian
            craftsmanship with world-class technology to deliver
            high-performance equipment for players at all levels. We proudly
            produce for some of the most respected names in the sport —{" "}
            <strong>Yasaka, Donic, and Nittaku</strong>.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className={styles.sectionDark}>
        <div
          style={{ maxWidth: "850px", margin: "0 auto", textAlign: "center" }}
        >
          <h2 className={styles.heading}>Our Philosophy</h2>
          <p className={styles.paragraph}>
            Every blade we make reflects our core values: precision,
            performance, and passion. We believe in long-term partnerships,
            sustainable production, and constant innovation. Our team consists
            of dedicated specialists who ensure that each product meets the
            highest quality standards — from material selection to final finish.
          </p>
        </div>
      </section>

      {/* Brands Overview */}
      <section className={styles.sectionLight}>
        <div style={{ textAlign: "center" }}>
          <h2 className={styles.heading}>Trusted by Global Brands</h2>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "3rem",
            marginTop: "2rem",
          }}
        >
          <Image
            src="/images/yasaka-logo.png"
            alt="Yasaka"
            width={160}
            height={60}
            style={{ objectFit: "contain", filter: "grayscale(100%)" }}
          />
          <Image
            src="/images/donic-logo.png"
            alt="Donic"
            width={160}
            height={60}
            style={{ objectFit: "contain", filter: "grayscale(100%)" }}
          />
          <Image
            src="/images/nittaku-logo.png"
            alt="Nittaku"
            width={160}
            height={60}
            style={{ objectFit: "contain", filter: "grayscale(100%)" }}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.sectionDark}>
        <div
          style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
        >
          <h2 className={styles.heading} style={{ color: "#fff" }}>
            Ready to Learn More?
          </h2>
          <p className={styles.paragraph} style={{ color: "#ddd" }}>
            Discover our production process and explore the precision behind
            every blade we craft.
          </p>
          <Link href="/production" className={styles.btnPrimary}>
            Explore Our Production →
          </Link>
        </div>
      </section>
    </main>
  );
}
