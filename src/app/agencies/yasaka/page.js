export default function YasakaPage() {
  return (
    <main style={{ padding: '4rem 1rem', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{
        fontFamily: 'Bebas Neue, sans-serif',
        fontSize: '2.5rem',
        color: '#0D47A1',
        marginBottom: '1rem',
        textTransform: 'uppercase'
      }}>
        Yasaka
      </h1>
      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '1.1rem',
        color: '#444',
        marginBottom: '2rem',
        lineHeight: 1.6
      }}>
        Yasaka is known for blending Japanese precision with Swedish blade craftsmanship.
        Home of legendary rubbers like <strong>Rakza</strong> and trusted by world-class players,
        Yasaka represents a perfect mix of tradition and modern table tennis innovation.
      </p>
      <img
        src="/images/yasaka-banner.jpg"
        alt="Yasaka Brand"
        style={{
          width: '100%',
          maxWidth: '700px',
          borderRadius: '10px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
          marginBottom: '2rem'
        }}
      />
    </main>
  );
}
