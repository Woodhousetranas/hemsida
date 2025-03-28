'use client';

import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send the form data to your API or email service.
    console.log(form);
    setStatus('Your message has been sent!');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="subject" className={styles.label}>Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="message" className={styles.label}>Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
            className={styles.textarea}
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Send Message
        </button>
      </form>
      {status && <p className={styles.status}>{status}</p>}
    </main>
  );
}
