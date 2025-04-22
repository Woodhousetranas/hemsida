"use client";

import { Dialog } from "@headlessui/react";
import Image from "next/image";
import styles from "@/styles/theme.module.css";

export default function TeamMemberModal({ member, onClose }) {
  if (!member) return null;

  return (
    <Dialog
      open={true}
      onClose={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-60" />

      <Dialog.Panel className={`${styles.modal} relative`}>
        <button type="button" className={styles.closeButton} onClick={onClose}>
          ×
        </button>

        <div className="text-center mb-4">
          <Image
            src={member.image}
            alt={member.name}
            width={150}
            height={150}
            className={styles.modalImage}
          />
        </div>

        <h3 className="text-xl font-bold mb-1 text-center">{member.name}</h3>
        <p className="text-gray-600 mb-4 text-center">{member.title}</p>
        <p className="mb-6 text-center">{member.description}</p>

        {member.email && (
          <div className="text-center mb-2">
            <a href={`mailto:${member.email}`} className={styles.btnSecondary}>
              Email: {member.email}
            </a>
          </div>
        )}
        {member.linkedin && (
          <div className="text-center">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnSecondary}
            >
              LinkedIn Profile
            </a>
          </div>
        )}
      </Dialog.Panel>
    </Dialog>
  );
}
