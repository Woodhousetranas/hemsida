// src/app/faq/page.js
import FAQSection from "@/components/FAQSection";
import styles from "@/styles/theme.module.css";

export const metadata = {
  title: "FAQ – Wood House AB",
  description: "Vanliga frågor och svar om våra produkter och processer",
};

export default function FAQPage() {
  return (
    <main>
      {/* Hero‑intro, om du vill */}
      <section className={styles.sectionLight}>
        <div className={styles.centered}>
          <h1 className={styles.heading}>FAQ — Frequently Asked Questions</h1>
          <p className={styles.paragraph}>
            Här hittar du svar på de vanligaste frågorna om våra
            bordtennisstommar och vår tillverkningsprocess.
          </p>
        </div>
      </section>

      {/* Själva FAQ‑sektionen */}
      <FAQSection />

      {/* Valfri CTA längst ner */}
      <section className={styles.sectionLight}>
        <div className={styles.centered}>
          <h2 className={styles.heading}>Behöver du mer hjälp?</h2>
          <p className={styles.paragraph}>
            Kontakta oss gärna om du har ytterligare frågor!
          </p>
          <a href="mailto:info@woodhouse.se" className={styles.btnPrimary}>
            Mejla oss →
          </a>
        </div>
      </section>
    </main>
  );
}
