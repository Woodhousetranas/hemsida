'use client';

import Image from 'next/image';
import Link from 'next/link';

const brands = [
  {
    name: 'Yasaka',
    logo: '/images/yasaka-logo.png',
    href: '/agencies/yasaka'
  },
  {
    name: 'Donic',
    logo: '/images/donic-logo.png',
    href: '/agencies/donic'
  },
  {
    name: 'Nittaku',
    logo: '/images/nittaku-logo.png',
    href: '/agencies/nittaku'
  }
];

export default function BrandsSection() {
  return (
    <section style={{ padding: '4rem 1rem', textAlign: 'center' }}>
      <h2 style={{
        fontFamily: 'Bebas Neue, sans-serif',
        fontSize: '2rem',
        color: 'var(--color-heading)',
        marginBottom: '2rem'
      }}>
        Our Brands
      </h2>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '2rem'
      }}>
        {brands.map((brand) => (
          <Link
            key={brand.name}
            href={brand.href}
            style={{
              display: 'inline-block',
              padding: '1.5rem 2rem',
              background: 'var(--color-background)',
              borderRadius: '10px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
              transition: 'all 0.2s ease',
              textAlign: 'center'
            }}
            className="brand-tile"
          >
            <Image
              src={brand.logo}
              alt={brand.name}
              width={140}
              height={60}
              style={{ objectFit: 'contain' }}
            />
            <p style={{
              marginTop: '0.75rem',
              fontSize: '0.95rem',
              color: 'var(--color-text)',
              fontWeight: 500,
              fontFamily: 'Inter, sans-serif'
            }}>
              {brand.name}
            </p>
          </Link>
        ))}
      </div>

      <style jsx>{`
        .brand-tile:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }
      `}</style>
    </section>
  );
}
