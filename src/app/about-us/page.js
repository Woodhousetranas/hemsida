// src/app/about-us/page.js
import styles from "@/styles/theme.module.css";

export default function AboutPage() {
  return (
    <>
      {/* INTRODUCTION — WHITE SECTION */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.centered}>
          <h1 className={styles.heading}>About Wood House AB</h1>
          <p className={styles.paragraph}>
            Wood House i Tranås AB is a Swedish company renowned for its
            extensive expertise and experience in the table tennis industry.
            Established in the early 1990s, our company has evolved
            significantly over the years, continuously expanding our presence
            and reputation. Today, as Wood House i Tranås AB, we proudly serve
            as a key player in the international table tennis market.
          </p>
          <p className={styles.paragraph}>
            With over 25 years of dedicated experience, we manufacture and
            distribute some of the world's most prestigious table tennis brands
            – Donic, Nittaku, and Yasaka. Our products are trusted by both
            recreational enthusiasts and world champions alike. Our team in
            Tranås combines traditional Swedish craftsmanship with advanced
            production techniques, delivering premium-quality table tennis
            blades. Through our international partnerships with Germany (Donic)
            and Japan (Nittaku and Yasaka), we continuously drive innovation and
            excellence.
          </p>
        </div>
      </section>

      {/* PHILOSOPHY & HERITAGE — DARK SECTION */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.centered}>
          <p
            className={styles.paragraph}
            style={{ color: "var(--color-white)" }}
          >
            At Wood House, we take pride in our contribution to the sport's rich
            heritage and promising future. Passion for table tennis drives our
            mission to deliver reliable products, unmatched expertise, and
            exceptional service to all our customers and partners. Each blade
            crafted at Wood House represents decades of experience, expertise,
            and a commitment to excellence, allowing players to perform
            confidently at their highest potential.
          </p>
        </div>
      </section>
    </>
  );
}
