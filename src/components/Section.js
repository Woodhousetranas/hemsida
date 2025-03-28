'use client';

export default function Section({ title, children }) {
  return (
    <section style={{ marginBottom: '2rem', padding: '1rem 0' }}>
      {title && (
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', textAlign: 'center' }}>
          {title}
        </h2>
      )}
      <div>{children}</div>
    </section>
  );
}
