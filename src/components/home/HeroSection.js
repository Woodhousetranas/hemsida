"use client";

import Link from "next/link";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay}></div>

      <div className={styles.heroContent}>
        <h1 className={styles.heroHeading}>
          MADE IN SWEDEN
          <br />
          POWERED BY WOOD HOUSE
        </h1>

        <Link href="/production" className={styles.buttonAnimate}>
          Explore Our Craft
        </Link>
      </div>
    </section>
  );
}
