"use client";

import Link from "next/link";
import styles from "@/styles/theme.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          MADE IN SWEDEN
          <br />
          POWERED BY WOOD HOUSE
        </h1>
        <Link href="/production" className={styles.heroButton}>
          Explore Our Craft
        </Link>
      </div>
    </section>
  );
}
