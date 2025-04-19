// src/app/team/page.js
"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/theme.module.css";
import TeamMemberModal from "@/components/TeamMemberModal";

const team = [
  {
    name: "Fredrik",
    title: "CEO",
    email: "fredrik@woodhouse.se",
    linkedin: "https://se.linkedin.com/in/fredrikgustafssonwoodhouse",
    image: "/images/fredrik.jpg",
    description:
      "Fredrik leads our team with vision, strategy, and Swedish precision.",
  },
  {
    name: "Mattias",
    title: "Deputy CEO",
    email: "mattias@woodhouse.se",
    linkedin: "https://se.linkedin.com/in/mattias-rittmark-95b70897",
    image: "/images/mattias.jpg",
    description: "Mattias ensures our operations run efficiently day to day.",
  },
  {
    name: "Christopher",
    title: "Production Manager",
    email: "christopher@woodhouse.se",
    image: "/images/christopher.jpg",
    description: "Responsible for our blades production and factory flow.",
  },
  {
    name: "Ponti",
    title: "Production Supervisor",
    email: "ponti@woodhouse.se",
    image: "/images/ponti.jpg",
    description: "Leads day-to-day production with a sharp eye for detail.",
  },
  {
    name: "Bengt",
    title: "Key Account Manager",
    email: "bengt@woodhouse.se",
    linkedin: "https://se.linkedin.com/in/bengt-gunnarsson-27b02b11",
    image: "/images/bengt.jpg",
    description: "Keeps our customers happy and our brand growing.",
  },
  {
    name: "Olle",
    title: "Logistics & Marketing",
    email: "olle@woodhouse.se",
    image: "/images/olle.jpg",
    description: "Oversees warehousing, logistics and player management.",
  },
];

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <>
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.centered}>
          <h1 className={styles.heading}>Meet the Wood House Team</h1>
        </div>
        <div className={styles["grid-3"]}>
          {team.map((member) => (
            <div
              key={member.name}
              className={styles.tile}
              onClick={() => setSelectedMember(member)}
              style={{ cursor: "pointer" }}
            >
              <Image
                src={member.image}
                alt={member.name}
                width={150}
                height={150}
                style={{ borderRadius: "50%", objectFit: "cover" }}
              />
              <h3 style={{ marginTop: "var(--space-sm)", fontWeight: 600 }}>
                {member.name}
              </h3>
              <p style={{ color: "#555" }}>{member.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      <TeamMemberModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </>
  );
}
