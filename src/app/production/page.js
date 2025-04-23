// src/app/production/page.js
"use client";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import Link from "next/link";
import styles from "@/styles/theme.module.css";

export default function ProductionPage() {
  return (
    <>
      {/* SECTION 1: INTRODUCTION */}
      <motion.section
        className={`${styles.section} ${styles.sectionLight}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Container className="text-center">
          <h2 className={styles.sectionTitle}>Manufacturing</h2>
          <p className={styles.paragraph}>
            Our state‑of‑the‑art manufacturing facility in Tranås is at the core
            of Wood House’s operations. Here, traditional Swedish woodworking
            skills seamlessly integrate with cutting‑edge technology, producing
            world‑class table tennis blades renowned for their unmatched
            quality. Esteemed brands such as Donic, Yasaka, and Nittaku
            consistently entrust us with crafting their premium blades, relied
            upon by elite players globally.
          </p>
        </Container>
      </motion.section>

      {/* SECTION 2: PROCESS DETAILS */}
      <motion.section
        className={`${styles.section} ${styles.sectionLight}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Container className="text-center space-y-6">
          <p className={styles.paragraph}>
            Our highly skilled craftsmen meticulously oversee every step of the
            production process—from the careful selection of superior wood
            species to precision assembly, rigorous quality checks, and
            immaculate final finishing. This meticulous attention to detail
            ensures each blade achieves consistent excellence and optimal
            performance, perfectly balancing speed, control, and tactile
            feedback.
          </p>
          <p className={styles.paragraph}>
            Swedish‑made table tennis blades enjoy a distinguished reputation
            worldwide, synonymous with innovation, durability, and precision. At
            Wood House, we proudly uphold and enhance this tradition. Players
            around the globe trust our blades not only for their exceptional
            craftsmanship and performance but also for embodying genuine Swedish
            quality and dedication.
          </p>
          <Link href="/contact" className={styles.btnPrimary}>
            Contact Us to Learn More →
          </Link>
        </Container>
      </motion.section>
    </>
  );
}
