'use client';

import Image from 'next/image';
import Link from 'next/link';

const brands = [
  { name: 'Yasaka', logo: '/images/yasaka-logo.png', href: '/yasaka' },
  { name: 'Donic', logo: '/images/donic-logo.png', href: '/donic' },
  { name: 'Nittaku', logo: '/images/nittaku-logo.png', href: '/nittaku' }
];

export default function BrandsSection() {
  return (
    <section className="container" style={{ padding: '4rem 1rem' }}>
      <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '2rem' }}>Our Brands</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
        textAlign: 'center'
      }}>
        {brands.map(brand => (
          <Link href={brand.href} key={brand.name} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textDecoration: 'none',
            color: 'inherit'
          }}>
            <div style={{
              background: '#fff',
              borderRadius: '8px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              padding: '2rem',
              transition: 'transform 0.3s ease',
              width: '100%'
            }}>
              <Image src={brand.logo} alt={brand.name} width={150} height={60} />
              <h3 style={{ marginTop: '1rem' }}>{brand.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
