'use client';

import styles from '@/styles/theme.module.css';

export default function TeamMemberModal({ member, onClose }) {
  if (!member) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.7)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: 'var(--color-white)',
          padding: '2rem',
          borderRadius: '12px',
          maxWidth: '500px',
          width: '90%',
          textAlign: 'center',
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className={styles.heading}>{member.name}</h2>
        <p className={styles.paragraph}>{member.title}</p>

        {/* Klickbar e-post */}
        <p className={styles.paragraph}>
          <a
            href={`mailto:${member.email}`}
            style={{ color: 'var(--color-accent)', fontWeight: '500', textDecoration: 'none' }}
          >
            {member.email}
          </a>
        </p>

        {/* LinkedIn-länk om den finns */}
        {member.linkedin && (
          <p className={styles.paragraph}>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}
            >
              View LinkedIn Profile
            </a>
          </p>
        )}

        <p className={styles.paragraph}>{member.description}</p>

        <button onClick={onClose} className={styles.btnSecondary} style={{ marginTop: '1rem' }}>
          Close
        </button>
      </div>
    </div>
  );
}
