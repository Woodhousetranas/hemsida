export default function HomePage() {
  return (
    <main className="container" style={{ padding: '2rem' }}>
      <section id="hero" style={{ textAlign: 'center', padding: '4rem 0' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          Welcome to Wood House AB
        </h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
          We create unique wood products with passion and precision.
        </p>
      </section>
      <section id="about" style={{ marginBottom: '3rem' }}>
        <h2>About Us</h2>
        <p>
          Wood House AB is a leading company in the wood industry, committed to quality, sustainability, and innovative design.
        </p>
      </section>
      <section id="team" style={{ marginBottom: '3rem' }}>
        <h2>Our Team</h2>
        <p>
          Meet our dedicated team of experts who drive Wood House AB forward.
        </p>
      </section>
      <section id="agencies" style={{ marginBottom: '3rem' }}>
        <h2>Agencies & Retailers</h2>
        <p>
          Discover our partner agencies and official retailers.
        </p>
      </section>
      <section id="production" style={{ marginBottom: '3rem' }}>
        <h2>Production</h2>
        <p>
          See how our products are made with top quality from raw material to finished product.
        </p>
      </section>
      <section id="contact" style={{ marginBottom: '3rem' }}>
        <h2>Contact</h2>
        <p>
          Get in touch with us for more information or partnerships.
        </p>
      </section>
    </main>
  );
}
