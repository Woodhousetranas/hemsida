"use client";

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import styles from "@/styles/theme.module.css";

const faqs = [
  {
    question: "How do I choose the right blade?",
    answer:
      "Use our Product Comparison tool or ask our AI‑bot via chat for personalized recommendations.",
  },
  {
    question: "What’s your manufacturing process?",
    answer:
      "All steps are detailed on our Production page— from wood selection to final finishing in Tranås.",
  },
  // Lägg till fler frågor här…
];

export default function FAQSection() {
  return (
    <section className={`${styles.sectionLight}`}>
      <div className={styles.centered}>
        <h2 className={styles.heading}>FAQ</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <Disclosure key={idx}>
              {({ open }) => (
                <>
                  <Disclosure.Button className={styles.faqButton}>
                    <span>{faq.question}</span>
                    <ChevronUpIcon
                      className={`w-5 h-5 transition-transform ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className={styles.faqPanel}>
                    {faq.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
}
