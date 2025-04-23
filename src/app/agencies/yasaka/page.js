// src/app/agencies/yasaka/page.js
"use client";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import Link from "next/link";
import styles from "@/styles/theme.module.css";

export default function YasakaPage() {
  return (
    <>
      {/* HERO */}
      <motion.section
        className={`${styles.sectionLight}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Container as="div" className="text-center">
          <h2 className={styles.sectionTitle}>Yasaka</h2>
          <p className={`${styles.paragraph} font-semibold text-lg mt-2`}>
            Japanese innovation meets Swedish craftsmanship.
          </p>
        </Container>
      </motion.section>

      {/* BRAND STORY */}
      <motion.section
        className={`${styles.sectionLight} pt-4`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Container as="div" className="text-center">
          <p className={styles.paragraph}>
            Yasaka combines legendary Japanese innovation with premium Swedish
            craftsmanship. Established in 1947 and renowned for their Mark V
            rubber, Yasaka continues to innovate with top‑quality products like
            the Rakza series rubbers and a wide selection of blades meticulously
            crafted at our Tranås facility.
          </p>
        </Container>
      </motion.section>

      {/* PHILOSOPHY & DISTRIBUTION */}
      <motion.section
        className={`${styles.sectionDark} pt-4`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Container as="div" className="text-center">
          <p className={`${styles.paragraph} text-white`}>
            As the exclusive distributor for Yasaka across Europe, we maintain a
            robust network, providing swift and efficient access to retailers
            and clubs. This ensures Yasaka remains a trusted and preferred
            choice for both amateur and professional players throughout the
            continent.
          </p>
        </Container>
      </motion.section>

      {/* PRODUCT STRENGTHS */}
      <motion.section
        className={`${styles.sectionLight} pt-4`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Container as="div">
          <h3 className={styles.sectionTitle}>Why Players Choose Yasaka</h3>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <li className={styles.tile}>
              <strong>Rakza Series</strong>
              <p className="mt-2 text-sm text-gray-600">
                Easy‑to‑play high‑performance rubbers trusted by pros and
                amateurs.
              </p>
            </li>
            <li className={styles.tile}>
              <strong>Made in Tranås</strong>
              <p className="mt-2 text-sm text-gray-600">
                Blades built with precision and pride in Sweden.
              </p>
            </li>
            <li className={styles.tile}>
              <strong>Mark V Legacy</strong>
              <p className="mt-2 text-sm text-gray-600">
                A true classic still used around the world by loyal fans.
              </p>
            </li>
          </ul>
        </Container>
      </motion.section>

      {/* CTA */}
      <motion.section
        className={`${styles.sectionLight} pt-6`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Container as="div" className="text-center">
          <Link
            href="https://yasakatabletennis.com"
            className={styles.btnPrimary}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit YasakaTableTennis.com &rarr;
          </Link>
        </Container>
      </motion.section>
    </>
  );
}
