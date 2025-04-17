// src/components/home/BrandsSection.js
"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/theme.module.css";

const brands = [
  {
    name: "Yasaka",
    logo: "/images/yasaka-logo.png",
    href: "/agencies/yasaka",
    tagline: "Japanese-Swedish excellence",
  },
  {
    name: "Donic",
    logo: "/images/donic-logo.png",
    href: "/agencies/donic",
    tagline: "German technology, world-class performance",
  },
  {
    name: "Nittaku",
    logo: "/images/nittaku-logo.png",
    href: "/agencies/nittaku",
    tagline: "Japan’s premier table tennis brand",
  },
];

export default function BrandsSection() {
  return (
    <section className={styles.sectionDark}>
      <div className={styles.centeredContent}>
        <h2 className={styles.heading} style={{ color: "#fff" }}>
          Our Brands
        </h2>
      </div>
      <div className={styles.imageGrid}>
        {brands.map((brand) => (
          <Link
            href={brand.href}
            key={brand.name}
            className={styles.tile}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Image
              src={brand.logo}
              alt={brand.name}
              width={160}
              height={80}
              style={{
                objectFit: "contain",
                marginBottom: "1rem",
                filter: "grayscale(100%) brightness(0) invert(1)",
              }}
            />
            <h3 style={{ color: "#fff", marginBottom: "0.5rem" }}>
              {brand.name}
            </h3>
            <p style={{ color: "#ccc", fontSize: "0.9rem" }}>{brand.tagline}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
