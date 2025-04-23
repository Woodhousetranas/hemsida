// src/app/team/page.js
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/Container";
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
      <motion.section
        className={`${styles.section} ${styles.sectionLight}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Container className="text-center">
          <h2 className={styles.sectionTitle}>Meet the Wood House Team</h2>
        </Container>

        <Container as="div" className="mt-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <motion.div
                key={member.name}
                className={styles.tile + " cursor-pointer"}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedMember(member)}
              >
                <div className="w-36 h-36 mx-auto overflow-hidden rounded-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={144}
                    height={144}
                    className="object-cover"
                    placeholder="blur"
                  />
                </div>
                <h3 className="mt-4 text-center text-lg font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-center text-sm text-gray-600">
                  {member.title}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </motion.section>

      {/* Modal */}
      {selectedMember && (
        <TeamMemberModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </>
  );
}
