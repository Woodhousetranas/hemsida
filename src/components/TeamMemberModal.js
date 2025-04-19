// src/components/TeamMemberModal.js
"use client";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import styles from "@/styles/theme.module.css";

export default function TeamMemberModal({ member, onClose }) {
  if (!member) return null;

  return (
    <Transition.Root show={!!member} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={onClose}
      >
        <div className="flex items-center justify-center min-h-screen px-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-60" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div
              className={`bg-white rounded-lg p-6 max-w-lg w-full ${styles.modal}`}
            >
              <div className="flex justify-end">
                <button
                  onClick={onClose}
                  className={`text-gray-500 hover:text-gray-700 ${styles.closeButton}`}
                >
                  ×
                </button>
              </div>
              <div className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="mx-auto w-32 h-32 rounded-full object-cover mb-4"
                />
                <h2 className="text-2xl font-bold mb-1">{member.name}</h2>
                <p className="text-gray-600 mb-4">{member.title}</p>
                <p className="mb-4">{member.description}</p>
                {member.email && (
                  <p className="mb-2">
                    <a
                      href={`mailto:${member.email}`}
                      className={styles.btnSecondary}
                    >
                      Email: {member.email}
                    </a>
                  </p>
                )}
                {member.linkedin && (
                  <p>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.btnSecondary}
                    >
                      LinkedIn Profile
                    </a>
                  </p>
                )}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
