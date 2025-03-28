'use client';

import { useState, useEffect } from 'react';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      style={{
        padding: '0.5rem 1rem',
        backgroundColor: darkMode ? '#333' : '#0070f3',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginLeft: '1rem'
      }}
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}
