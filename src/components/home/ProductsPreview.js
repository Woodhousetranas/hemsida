'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/theme.module.css';

const products = [
  {
    name: 'Ma Lin Soft Carbon',
    image: '/images/malin-soft-carbon.jpg',
    link: '/posts/ma-lin-soft-carbon'
  },
  {
    name: 'Rakza XX',
    image: '/images/rakza-xx.jpg',
    link: '/posts/rakza-xx'
  },
  {
    name: 'Sweden Extra',
    image: '/images/sweden-extra.jpg',
    link: '/posts/sweden-extra'
  }
];

export default function ProductsPreview() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Popular Products</h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          maxWidth: '1100px',
          margin: '0 auto'
        }}
      >
        {products.map((product) => (
          <Link
            href={product.link}
            key={product.name}
            style={{
              display: 'block',
              background: 'var(--color-background)',
              borderRadius: '12px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
              padding: '1.5rem',
              textAlign: 'center',
              transition: 'transform 0.2s ease'
            }}
            className="product-tile"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={180}
              height={120}
              style={{
                objectFit: 'contain',
                marginBottom: '1rem'
              }}
            />
            <h3
              style={{
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: '1.3rem',
                color: 'var(--color-text)'
              }}
            >
              {product.name}
            </h3>
          </Link>
        ))}
      </div>

      <style jsx>{`
        .product-tile:hover {
          transform: scale(1.03);
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </section>
  );
}
