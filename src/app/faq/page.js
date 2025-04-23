// src/app/faq/page.js
"use client";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import FAQSection from "@/components/FAQSection";
import styles from "@/styles/theme.module.css";

export const metadata = {
  title: "FAQ – Wood House AB",
  description:
    "Frequently asked questions about our blades and manufacturing process",
};

export default function FAQPage() {
  return (
    <main>
      {/* HERO‑INTRO */}
      <motion.section
        className={styles.sectionLight}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Container className="text-center">
          <h1 className={styles.heading}>FAQ — Frequently Asked Questions</h1>
          <p className={styles.paragraph}>
            Here you’ll find answers to the most common questions about our
            table tennis blades and manufacturing process.
          </p>
        </Container>
      </motion.section>

      {/* FAQ‑SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Container>
          <FAQSection />
        </Container>
      </motion.section>

      {/* CTA BOTTOM */}
      <motion.section
        className={styles.sectionLight}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Container className="text-center">
          <h2 className={styles.sectionTitle}>Need More Help?</h2>
          <p className={styles.paragraph}>
            Feel free to reach out if you have any further questions!
          </p>
          <a href="mailto:info@woodhouse.se" className={styles.btnPrimary}>
            Email Us →
          </a>
        </Container>
      </motion.section>
    </main>
  );
}
