"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/theme.module.css";

const agencies = [
  {
    name: "Yasaka",
    logo: "/images/yasaka-logo.png",
    href: "/agencies/yasaka",
    description:
      "Japanese-Swedish craftsmanship with legendary rubbers and blades.",
  },
  {
    name: "Donic",
    logo: "/images/donic-logo.png",
    href: "/agencies/donic",
    description: "High-end German technology used by world champions.",
  },
  {
    name: "Nittaku",
    logo: "/images/nittaku-logo.png",
    href: "/agencies/nittaku",
    description:
      "Japan’s most premium table tennis brand and official ball supplier.",
  },
];

export default function AgenciesPage() {
  return (
    <main className={styles.sectionLight}>
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <h1 className={styles.heading}>Our Agencies</h1>
        <p className={styles.paragraph}>
          At Wood House AB, we are honored to represent some of the most
          respected brands in the world of table tennis. Yasaka, Donic and
          Nittaku have entrusted us as their exclusive agency partner in the
          Nordic region — a responsibility we carry with pride and dedication.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2.5rem",
          maxWidth: "1100px",
          margin: "4rem auto 0",
        }}
      >
        {agencies.map((agency) => (
          <div
            key={agency.name}
            className={styles.tile}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              padding: "2rem",
            }}
          >
            <Image
              src={agency.logo}
              alt={agency.name}
              width={160}
              height={70}
              style={{
                objectFit: "contain",
                marginBottom: "1rem",
                filter: "grayscale(100%)",
              }}
            />
            <h2 style={{ marginBottom: "0.5rem" }}>{agency.name}</h2>
            <p
              style={{
                fontSize: "0.95rem",
                color: "#666",
                marginBottom: "1.5rem",
              }}
            >
              {agency.description}
            </p>
            <Link href={agency.href} className={styles.btnSecondary}>
              Learn more →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
