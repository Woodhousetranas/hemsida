"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/theme.module.css";

const brands = [
  {
    name: "Yasaka",
    logo: "/images/yasaka-logo.png",
    link: "/agencies/yasaka",
    tagline: "Japanese-Swedish excellence",
  },
  {
    name: "Donic",
    logo: "/images/donic-logo.png",
    link: "/agencies/donic",
    tagline: "German technology, world-class performance",
  },
  {
    name: "Nittaku",
    logo: "/images/nittaku-logo.png",
    link: "/agencies/nittaku",
    tagline: "Japan’s premier table tennis brand",
  },
];

export default function AgenciesPage() {
  return (
    <main className={styles.sectionLight}>
      <h1 className={styles.heading}>Our Brands</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "2rem",
          maxWidth: "1000px",
          margin: "2rem auto 0",
        }}
      >
        {brands.map((brand) => (
          <Link
            href={brand.link}
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
                filter: "grayscale(100%)",
              }}
            />
            <h3 style={{ fontSize: "1.2rem", fontWeight: 600 }}>
              {brand.name}
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#666" }}>{brand.tagline}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
