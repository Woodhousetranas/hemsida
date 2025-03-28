'use client';

import { useState } from 'react';
import styles from './Team.module.css';

const teamMembers = [
  {
    id: 1,
    name: 'Fredrik',
    title: 'VD',
    bio: 'Fredrik leder företaget med vision och erfarenhet.',
    image: '/images/fredrik.jpg',
  },
  {
    id: 2,
    name: 'Mattias',
    title: 'vVD',
    bio: 'Mattias stödjer VD med strategiskt och operativt ledarskap.',
    image: '/images/mattias.jpg',
  },
  {
    id: 3,
    name: 'Christopher',
    title: 'Produktions- och planeringsansvarig',
    bio: 'Christopher ansvarar för produktion och planering.',
    image: '/images/christopher.jpg',
  },
  {
    id: 4,
    name: 'Ponti',
    title: 'Driftansvarig produktion',
    bio: 'Ponti ser till att produktionsdriften flyter smidigt.',
    image: '/images/ponti.jpg',
  },
  {
    id: 5,
    name: 'Bengt',
    title: 'Key Account Manager',
    bio: 'Bengt hanterar nyckelkunder och ser till att våra relationer är starka.',
    image: '/images/bengt.jpg',
  },
  {
    id: 6,
    name: 'Olle',
    title: 'Lager/Logistik',
    bio: 'Olle ansvarar för lager och logistik.',
    image: '/images/olle.jpg',
  },
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Vårt Team</h1>
      <div className={styles.grid}>
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className={styles.card}
            onClick={() => setSelectedMember(member)}
          >
            <img src={member.image} alt={member.name} className={styles.image} />
            <h2>{member.name}</h2>
            <p>{member.title}</p>
          </div>
        ))}
      </div>

      {selectedMember && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedMember(null)}
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeButton}
              onClick={() => setSelectedMember(null)}
            >
              Close
            </button>
            <img
              src={selectedMember.image}
              alt={selectedMember.name}
              className={styles.modalImage}
            />
            <h2>{selectedMember.name}</h2>
            <h3>{selectedMember.title}</h3>
            <p>{selectedMember.bio}</p>
          </div>
        </div>
      )}
    </main>
  );
}
