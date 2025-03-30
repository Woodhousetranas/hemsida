"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/theme.module.css";

export default function DonicPage() {
  return (
    <main className={styles.sectionLight}>
      <div style={{ textAlign: "center" }}>
        <Image
          src="/images/donic-logo.png"
          alt="Donic logo"
          width={200}
          height={80}
          style={{ objectFit: "contain", margin: "2rem auto" }}
        />

        <h1 className={styles.heading}>
          Donic – German Engineering in Table Tennis
        </h1>
        <p
          className={styles.paragraph}
          style={{ maxWidth: "800px", margin: "0 auto" }}
        >
          Donic stands for world-class German technology in table tennis. With a
          long history of supporting champions and developing innovative
          equipment, Donic continues to push the sport forward.
        </p>

        <h2 className={styles.heading} style={{ marginTop: "4rem" }}>
          Our Philosophy
        </h2>
        <p
          className={styles.paragraph}
          style={{ maxWidth: "800px", margin: "0 auto" }}
        >
          At Donic, innovation meets tradition. Every product is engineered with
          precision and crafted for peak performance, trusted by professionals
          around the world.
        </p>

        <div style={{ marginTop: "3rem" }}>
          <Link
            href="https://www.donic.com/"
            target="_blank"
            className={styles.btnPrimary}
          >
            Visit donic.com →
          </Link>
        </div>
      </div>
    </main>
  );
}
