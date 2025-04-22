// src/components/ProductTabs.js
"use client";

import { Tab } from "@headlessui/react";
import styles from "@/styles/theme.module.css";

export default function ProductTabs({ details, specs, reviews }) {
  return (
    <Tab.Group>
      <Tab.List className="flex space-x-4 border-b border-gray-200">
        <Tab
          className={({ selected }) =>
            `${
              selected
                ? "border-b-2 border-accent text-accent"
                : "text-gray-600"
            } py-2 px-4 focus:outline-none`
          }
        >
          Details
        </Tab>
        <Tab
          className={({ selected }) =>
            `${
              selected
                ? "border-b-2 border-accent text-accent"
                : "text-gray-600"
            } py-2 px-4 focus:outline-none`
          }
        >
          Specifications
        </Tab>
        <Tab
          className={({ selected }) =>
            `${
              selected
                ? "border-b-2 border-accent text-accent"
                : "text-gray-600"
            } py-2 px-4 focus:outline-none`
          }
        >
          Reviews
        </Tab>
      </Tab.List>
      <Tab.Panels className="mt-4">
        <Tab.Panel className={styles.paragraph}>{details}</Tab.Panel>
        <Tab.Panel className={styles.paragraph}>{specs}</Tab.Panel>
        <Tab.Panel className={styles.paragraph}>{reviews}</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
