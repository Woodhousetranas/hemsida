// src/app/agencies/donic/page.js
"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import Link from "next/link";
import styles from "@/styles/theme.module.css";

export default function DonicPage() {
  return (
    <>
      {/* HERO */}
      <motion.section
        className={styles.sectionLight}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Container className="text-center">
          <h2 className={styles.sectionTitle}>Donic</h2>
          <p className={`${styles.paragraph} font-semibold text-lg mt-2`}>
            German engineering meets world‑class champions.
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
        <Container className="text-center">
          <p className={styles.paragraph}>
            Donic is a world-renowned German table tennis brand celebrated for
            innovation and a complete product range catering to players of all
            levels. Established in the 1970s, Donic’s elite reputation is
            reinforced by close collaborations with legendary Swedish champions
            like Jan‑Ove Waldner and Jörgen Persson.
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
        <Container className="text-center">
          <p className={`${styles.paragraph} text-white`}>
            As the official agent of Donic in Scandinavia, we provide seamless
            logistics, storage, and marketing. Scandinavian retailers and clubs
            rely on us to access Donic’s acclaimed Original Senso blade series
            and Formula DONIC rubbers with built‑in speed glue effect.
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
        <Container>
          <h3 className={styles.sectionTitle}>Why Players Choose Donic</h3>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <li className={styles.tile}>
              <strong>Original Senso Series</strong>
              <p className="mt-2 text-sm text-gray-600">
                A top choice for competitive players seeking control and power.
              </p>
            </li>
            <li className={styles.tile}>
              <strong>Formula Donic</strong>
              <p className="mt-2 text-sm text-gray-600">
                Advanced rubbers with built‑in speed glue effect.
              </p>
            </li>
            <li className={styles.tile}>
              <strong>Champions’ Legacy</strong>
              <p className="mt-2 text-sm text-gray-600">
                Trusted by Waldner, Persson, and generations of elite players.
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
        <Container className="text-center">
          <Link
            href="https://www.donic.com/"
            className={styles.btnPrimary}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Donic.com &rarr;
          </Link>
        </Container>
      </motion.section>
    </>
  );
}
