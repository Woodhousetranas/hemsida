// src/app/contact/page.js
import Link from "next/link";
import styles from "@/styles/theme.module.css";

export default function ContactPage() {
  return (
    <>
      {/* CONTACT INTRO — LIGHT SECTION */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.centered}>
          <h1 className={styles.heading}>Contact Us</h1>
          <p className={styles.paragraph}>
            We warmly invite you to reach out to Wood House i Tranås AB to
            discuss partnerships, dealership opportunities, or any questions
            regarding our products and services. We value open dialogue and look
            forward to supporting you with our extensive expertise and dedicated
            customer service.
          </p>
          <Link href="mailto:info@woodhouse.se" className={styles.btnPrimary}>
            Email Us →
          </Link>
        </div>
      </section>
    </>
  );
}
