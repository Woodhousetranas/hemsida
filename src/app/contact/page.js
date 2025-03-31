"use client";

import styles from "@/styles/theme.module.css";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className={styles.sectionLight}>
        <div
          style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
        >
          <h1 className={styles.heading}>Contact Us</h1>
          <p
            className={styles.paragraph}
            style={{ marginTop: "0.5rem", fontSize: "1.1rem" }}
          >
            We warmly invite you to reach out to Wood House i Tranås AB to
            discuss partnerships, dealership opportunities, or any questions
            regarding our products and services.
          </p>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className={styles.sectionDark}>
        <div
          style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}
        >
          <p
            className={styles.paragraph}
            style={{ color: "#fff", marginBottom: "2rem" }}
          >
            We value open dialogue and look forward to supporting you with our
            extensive expertise and dedicated customer service.
          </p>

          <form
            style={{ display: "grid", gap: "1rem", textAlign: "left" }}
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const name = formData.get("name").trim();
              const email = formData.get("email").trim();
              const message = formData.get("message").trim();

              if (!name || !email || !message) {
                alert("All fields are required.");
                return;
              }

              if (!/\S+@\S+\.\S+/.test(email)) {
                alert("Please enter a valid email address.");
                return;
              }

              alert("Form submitted successfully!");
              // Add further processing logic here, e.g., sending data to a server
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              style={{
                padding: "0.75rem",
                borderRadius: "6px",
                border: "1px solid #ccc",
                fontSize: "1rem",
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              style={{
                padding: "0.75rem",
                borderRadius: "6px",
                border: "1px solid #ccc",
                fontSize: "1rem",
              }}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              style={{
                padding: "0.75rem",
                borderRadius: "6px",
                border: "1px solid #ccc",
                fontSize: "1rem",
                resize: "vertical",
              }}
            />
            <button
              type="submit"
              className={styles.btnPrimary}
              style={{ marginTop: "0.5rem" }}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
