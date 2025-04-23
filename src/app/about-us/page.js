// src/app/about-us/page.js
"use client";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import styles from "@/styles/theme.module.css";

export default function AboutPage() {
  return (
    <>
      {/* INTRODUCTION — LIGHT SECTION */}
      <motion.section
        className={`${styles.section} ${styles.sectionLight}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Container as="div" className="text-center">
          <h2 className={styles.sectionTitle}>About Wood House AB</h2>
          <p className={styles.paragraph}>
            Wood House i Tranås AB is a Swedish company with deep expertise in
            table tennis manufacturing. Founded in the early 1990s, we have
            steadily expanded our presence and today stand as a key player in
            the international table tennis market.
          </p>
          <p className={styles.paragraph}>
            With over 25 years of dedicated experience, we produce and
            distribute premium blades for leading brands such as Donic, Nittaku,
            and Yasaka. Our passion blends traditional craftsmanship with modern
            production techniques to deliver top‑quality equipment trusted by
            both hobbyists and world champions.
          </p>
        </Container>
      </motion.section>

      {/* PHILOSOPHY — DARK SECTION */}
      <motion.section
        className={`${styles.section} ${styles.sectionDark}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Container as="div" className="text-center">
          <p className={`${styles.paragraph} text-white`}>
            At Wood House, we take pride in our contribution to the sport’s rich
            heritage and promising future. Our mission is to deliver reliable
            products, unparalleled expertise, and exceptional service to all our
            customers and partners. Each blade we craft reflects decades of
            experience, skill, and an unwavering commitment to excellence,
            empowering players to perform at their highest level.
          </p>
        </Container>
      </motion.section>
    </>
  );
}
