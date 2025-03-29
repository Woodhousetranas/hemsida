'use client';

import Image from 'next/image';

const team = [
  {
    name: 'Fredrik',
    title: 'CEO',
    image: '/images/fredrik.jpg'
  },
  {
    name: 'Mattias',
    title: 'Deputy CEO',
    image: '/images/mattias.jpg'
  },
  {
    name: 'Christopher',
    title: 'Production & Planning Manager',
    image: '/images/christopher.jpg'
  },
  {
    name: 'Ponti',
    title: 'Production Operations Manager',
    image: '/images/ponti.jpg'
  },
  {
    name: 'Bengt',
    title: 'Key Account Manager',
    image: '/images/bengt.jpg'
  },
  {
    name: 'Olle',
    title: 'Players Manager & Marketing',
    image: '/images/olle.jpg'
  }
];

export default function TeamPage() {
  return (
    <main style={{ padding: '4rem 1rem', maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '2.5rem',
          color: '#0D47A1',
          textTransform: 'uppercase',
          marginBottom: '0.5rem'
        }}>
          Our Team
        </h1>
        <h2 style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '1.1rem',
          color: '#444',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          Made in Sweden – Powered by Wood House
        </h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '2.5rem'
      }}>
        {team.map(member => (
          <div key={member.name} style={{
            textAlign: 'center',
            background: '#fff',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            padding: '1.5rem'
          }}>
            <div style={{ marginBottom: '1rem' }}>
              <Image
                src={member.image}
                alt={member.name}
                width={160}
                height={160}
                style={{
                  borderRadius: '50%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <h3 style={{
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: '1.4rem',
              marginBottom: '0.3rem'
            }}>
              {member.name}
            </h3>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.95rem',
              color: '#666'
            }}>
              {member.title}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
