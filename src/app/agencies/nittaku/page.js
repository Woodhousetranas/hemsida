// src/app/agencies/nittaku/page.js
"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import Link from "next/link";
import styles from "@/styles/theme.module.css";

export default function NittakuPage() {
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
          <h2 className={styles.sectionTitle}>Nittaku</h2>
          <p className={`${styles.paragraph} font-semibold text-lg mt-2`}>
            Japanese precision. Olympic performance.
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
            Nittaku is a premium Japanese brand known for exceptional
            craftsmanship and global recognition. Their competition‑grade balls
            are frequently used at World Championships and Olympic Games. Their
            rubbers and blades are trusted by elite players around the world.
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
            As the official Nittaku agent in Scandinavia, we ensure local
            support and fast logistics. Products like the Violin and Acoustic
            blade series reach passionate players who value precision, quality,
            and performance.
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
          <h3 className={styles.sectionTitle}>Why Players Choose Nittaku</h3>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <li className={styles.tile}>
              <strong>Competition Balls</strong>
              <p className="mt-2 text-sm text-gray-600">
                Used in Olympics and World Championships for unmatched
                consistency.
              </p>
            </li>
            <li className={styles.tile}>
              <strong>Violin & Acoustic Blades</strong>
              <p className="mt-2 text-sm text-gray-600">
                Crafted with musical wood technology for feel and precision.
              </p>
            </li>
            <li className={styles.tile}>
              <strong>Japanese Excellence</strong>
              <p className="mt-2 text-sm text-gray-600">
                Meticulously engineered for professional‑level play.
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
            href="https://www.nittaku.com/"
            className={styles.btnPrimary}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Nittaku.com &rarr;
          </Link>
        </Container>
      </motion.section>
    </>
  );
}
