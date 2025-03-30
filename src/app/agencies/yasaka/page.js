"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/theme.module.css";

export default function YasakaPage() {
  return (
    <main className={styles.sectionLight}>
      <div style={{ textAlign: "center" }}>
        <Image
          src="/images/yasaka-logo.png"
          alt="Yasaka logo"
          width={200}
          height={80}
          style={{ objectFit: "contain", margin: "2rem auto" }}
        />

        <h1 className={styles.heading}>
          Yasaka – Japanese-Swedish Table Tennis Heritage
        </h1>
        <p
          className={styles.paragraph}
          style={{ maxWidth: "800px", margin: "0 auto" }}
        >
          Yasaka is a legendary brand known for its blend of Japanese precision
          and Swedish blade craftsmanship. With iconic rubbers like Mark V and
          the Rakza series, Yasaka has helped shape the history of modern table
          tennis.
        </p>

        <h2 className={styles.heading} style={{ marginTop: "4rem" }}>
          Our Philosophy
        </h2>
        <p
          className={styles.paragraph}
          style={{ maxWidth: "800px", margin: "0 auto" }}
        >
          Yasaka blends cutting-edge rubber development from Japan with premium
          blade production in Sweden. Every product is designed with
          performance, durability, and feel in mind—trusted by world-class
          professionals and passionate amateurs alike.
        </p>

        <div style={{ marginTop: "3rem" }}>
          <Link
            href="https://yasakatabletennis.com/"
            target="_blank"
            className={styles.btnPrimary}
          >
            Visit yasakatabletennis.com →
          </Link>
        </div>
      </div>
    </main>
  );
}
