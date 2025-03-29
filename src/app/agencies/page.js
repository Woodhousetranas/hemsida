'use client';

import Link from 'next/link';
import Image from 'next/image';

const agencies = [
  {
    name: 'Yasaka',
    logo: '/images/yasaka-logo.png',
    href: '/agencies/yasaka',
    description: 'Japanese-Swedish craftsmanship with legendary rubbers and blades.'
  },
  {
    name: 'Donic',
    logo: '/images/donic-logo.png',
    href: '/agencies/donic',
    description: 'High-end German technology used by world champions.'
  },
  {
    name: 'Nittaku',
    logo: '/images/nittaku-logo.png',
    href: '/agencies/nittaku',
    description: 'Japan’s most premium table tennis brand and official ball supplier.'
  }
];

export default function AgenciesPage() {
  return (
    <main style={{ padding: '4rem 1rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '2.5rem',
          marginBottom: '0.5rem',
          textTransform: 'uppercase',
          color: '#0D47A1'
        }}>
          Our Brands
        </h1>

        <h2 style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '1.1rem',
          textTransform: 'uppercase',
          color: '#444',
          letterSpacing: '0.5px'
        }}>
          Made in Sweden – Powered by Wood House
        </h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2.5rem',
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        {agencies.map((agency) => (
          <div key={agency.name} style={{
            background: '#fff',
            borderRadius: '12px',
            padding: '2rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <Image
              src={agency.logo}
              alt={agency.name}
              width={160}
              height={70}
              style={{ objectFit: 'contain', marginBottom: '1rem' }}
            />
            <h2 style={{
              marginBottom: '0.5rem',
              fontFamily: 'Bebas Neue, sans-serif',
              textTransform: 'uppercase',
              fontSize: '1.5rem'
            }}>
              {agency.name}
            </h2>
            <p style={{
              fontSize: '0.95rem',
              color: '#666',
              marginBottom: '1.5rem',
              fontFamily: 'Inter, sans-serif'
            }}>
              {agency.description}
            </p>
            <Link
              href={agency.href}
              style={{
                background: '#0D47A1',
                color: '#fff',
                padding: '0.6rem 1.2rem',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: 500,
                fontFamily: 'Inter, sans-serif'
              }}
            >
              Learn more →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
