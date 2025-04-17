"use client";

import styles from "@/styles/theme.module.css";

const timelineData = [
  {
    year: "1990s",
    title: "Founded in Tranås",
    description: "Wood House begins its journey with a focus on precision woodworking in the heart of Sweden.",
  },
  {
    year: "2005",
    title: "European Expansion",
    description: "Partnerships with Donic and Nittaku are established, marking the beginning of large-scale blade production.",
  },
  {
    year: "2015",
    title: "Yasaka Collaboration",
    description: "Yasaka blades start production in Tranås, blending Japanese innovation with Swedish craftsmanship.",
  },
  {
    year: "2024",
    title: "Modernization & Innovation",
    description: "Wood House rebrands as a premium manufacturer with an immersive digital presence and sustainability focus.",
  },
];

export default function TimelineSection() {
  return (
    <section className={styles.sectionLight}>
      <h2 className={styles.heading}>Our Craftsmanship Journey</h2>
      <div className={styles.timeline}>
        {timelineData.map((item, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              <h3>{item.year}</h3>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
