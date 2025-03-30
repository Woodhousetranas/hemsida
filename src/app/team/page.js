'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/theme.module.css';
import TeamMemberModal from '@/components/TeamMemberModal';

const team = [
  {
    name: 'Fredrik',
    title: 'CEO',
    email: 'fredrik@woodhouse.se',
    linkedin: 'https://se.linkedin.com/in/fredrikgustafssonwoodhouse',
    image: '/images/fredrik.jpg',
    description: 'Fredrik leads our team with vision, strategy, and Swedish precision.'
  },
  {
    name: 'Mattias',
    title: 'Deputy CEO',
    email: 'mattias@woodhouse.se',
    linkedin: 'https://se.linkedin.com/in/mattias-rittmark-95b70897',
    image: '/images/mattias.jpg',
    description: 'Mattias ensures our operations run efficiently day to day.'
  },
  {
    name: 'Christopher',
    title: 'Production Manager',
    email: 'christopher@woodhouse.se',
    image: '/images/christopher.jpg',
    description: 'Responsible for our blades production and factory flow.'
  },
  {
    name: 'Ponti',
    title: 'Production Supervisor',
    email: 'ponti@woodhouse.se',
    image: '/images/ponti.jpg',
    description: 'Leads day-to-day production with a sharp eye for detail.'
  },
  {
    name: 'Bengt',
    title: 'Key Account Manager',
    email: 'bengt@woodhouse.se',
    linkedin: 'https://se.linkedin.com/in/bengt-gunnarsson-27b02b11',
    image: '/images/bengt.jpg',
    description: 'Keeps our customers happy and our brand growing.'
  },
  {
    name: 'Olle',
    title: 'Player Manager & Marketing',
    email: 'olle@woodhouse.se',
    image: '/images/olle.jpg',
    description: 'Leading #TeamYasaka & pushing our brands to new heights.'
  }
];

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <main className={styles.section}>
      <h1 className={styles.heading}>Meet the Wood House Team</h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        {team.map((member) => (
          <div
            key={member.name}
            className={styles.tile}
            style={{ cursor: 'pointer' }}
            onClick={() => setSelectedMember(member)}
          >
            <Image
              src={member.image}
              alt={member.name}
              width={150}
              height={150}
              style={{
                borderRadius: '50%',
                objectFit: 'cover',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{ fontFamily: 'Bebas Neue', fontSize: '1.3rem', marginBottom: '0.25rem' }}>
              {member.name}
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text)' }}>{member.title}</p>
          </div>
        ))}
      </div>

      <TeamMemberModal member={selectedMember} onClose={() => setSelectedMember(null)} />
    </main>
  );
}
