// src/app/contact/page.js
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import styles from "./Contact.module.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending…");

    // Här kan du skicka datan till en API‑endpoint
    await new Promise((res) => setTimeout(res, 1000));

    setStatus("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.section
      className="py-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Container as="div">
        <div className={styles.container}>
          <h1 className={styles.title}>Contact Us</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className={styles.input}
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className={styles.input}
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="message" className={styles.label}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className={styles.textarea}
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>

          {status && <p className={styles.status}>{status}</p>}
        </div>
      </Container>
    </motion.section>
  );
}
