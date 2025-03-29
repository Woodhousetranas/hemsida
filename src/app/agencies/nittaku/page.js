export default function NittakuPage() {
  return (
    <main style={{ padding: '4rem 1rem', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{
        fontFamily: 'Bebas Neue, sans-serif',
        fontSize: '2.5rem',
        color: '#0D47A1',
        marginBottom: '1rem',
        textTransform: 'uppercase'
      }}>
        Nittaku
      </h1>
      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '1.1rem',
        color: '#444',
        marginBottom: '2rem',
        lineHeight: 1.6
      }}>
        Nittaku is Japan’s most premium table tennis brand and official ball supplier for major events.
        With decades of legacy and attention to detail, Nittaku offers elite-level products favored by professionals worldwide.
      </p>
      <img
        src="/images/nittaku-banner.jpg"
        alt="Nittaku Brand"
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
