"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/theme.module.css";

export default function NittakuPage() {
  return (
    <main className={styles.sectionLight}>
      <div style={{ textAlign: "center" }}>
        <Image
          src="/images/nittaku-logo.png"
          alt="Nittaku logo"
          width={200}
          height={80}
          style={{ objectFit: "contain", margin: "2rem auto" }}
        />

        <h1 className={styles.heading}>Nittaku – Japan’s Premium Brand</h1>
        <p
          className={styles.paragraph}
          style={{ maxWidth: "800px", margin: "0 auto" }}
        >
          Nittaku has long been recognized for its quality and innovation in the
          world of table tennis. As the official ball supplier for the Olympics,
          their commitment to excellence is unmatched.
        </p>

        <h2 className={styles.heading} style={{ marginTop: "4rem" }}>
          Our Philosophy
        </h2>
        <p
          className={styles.paragraph}
          style={{ maxWidth: "800px", margin: "0 auto" }}
        >
          Nittaku combines precision Japanese engineering with decades of
          experience to produce some of the most respected equipment in the
          sport.
        </p>

        <div style={{ marginTop: "3rem" }}>
          <Link
            href="https://www.nittaku.com/"
            target="_blank"
            className={styles.btnPrimary}
          >
            Visit nittaku.com →
          </Link>
        </div>
      </div>
    </main>
  );
}
