'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/theme.module.css';

const products = [
  {
    name: 'Ma Lin Soft Carbon',
    image: '/images/blade1.jpg',
    href: '/posts/ma-lin-soft-carbon',
    description: 'High speed, exceptional control, premium craftsmanship.'
  },
  {
    name: 'Rakza XX',
    image: '/images/blade2.jpg',
    href: '/posts/rakza-xx',
    description: 'High speed, exceptional control, premium craftsmanship.'
  },
  {
    name: 'Sweden Extra',
    image: '/images/blade3.jpg',
    href: '/posts/sweden-extra',
    description: 'High speed, exceptional control, premium craftsmanship.'
  }
];

export default function ProductsPreview() {
  return (
    <section className={styles.sectionLight}>
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
  <h2 className={styles.heading}>Popular Products</h2>
</div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '2rem',
        maxWidth: '1000px',
        margin: '0 auto'
        
      }}>
        {products.map((product) => (
          <Link
            key={product.name}
            href={product.href}
            className={styles.tile}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={180}
              height={180}
              className={styles.tileImage}
            />
            <h3 style={{
              fontSize: '1.1rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              marginTop: '0.8rem',
              color: '#111',
              textAlign: 'center'
            }}>
              {product.name}
            </h3>
            <p style={{
              fontSize: '0.9rem',
              color: '#666',
              textAlign: 'center',
              marginTop: '0.5rem'
            }}>
              {product.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
