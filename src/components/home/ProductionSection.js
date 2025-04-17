// src/components/production/ProductionSection.js
"use client";

import styles from "@/styles/theme.module.css";

export default function ProductionSection() {
  return (
    <section className={styles.sectionLight}>
      <div className={styles.centeredContent}>
        <h1 className={styles.heading}>Manufacturing</h1>
        <p className={styles.paragraph}>
          Our state-of-the-art manufacturing facility in Tranås is at the core
          of Wood House’s operations. Here, traditional Swedish woodworking
          skills seamlessly integrate with cutting-edge technology, resulting in
          the production of world-class table tennis blades renowned for their
          unmatched quality. Esteemed brands such as Donic, Yasaka, and Nittaku
          consistently entrust us with crafting their premium blades, relied
          upon by elite players globally.
        </p>
        <p className={styles.paragraph}>
          Our highly skilled craftsmen meticulously oversee every step of the
          production process—from the careful selection of superior wood species
          to precision assembly, rigorous quality checks, and immaculate final
          finishing. This meticulous attention to detail ensures that each blade
          achieves consistent excellence and optimal performance, perfectly
          balancing speed, control, and tactile feedback.
        </p>
        <p className={styles.paragraph}>
          Swedish-made table tennis blades enjoy a distinguished reputation
          worldwide, synonymous with innovation, durability, and precision. At
          Wood House, we proudly uphold and enhance this tradition. Players
          around the globe trust our blades not only for their exceptional
          craftsmanship and performance but also for embodying genuine Swedish
          quality and dedication. Each blade crafted at Wood House represents
          decades of experience, expertise, and a commitment to excellence,
          allowing players to perform confidently at their highest potential.
        </p>
      </div>
    </section>
  );
}
