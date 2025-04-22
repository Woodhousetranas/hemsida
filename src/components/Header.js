"use client";

import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import styles from "@/styles/theme.module.css";

export default function Header() {
  return (
    <Disclosure as="header" className={styles.header}>
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
            {/* Logo */}
            <Link href="/" className={styles.logo}>
              Wood House AB
            </Link>

            {/* Desktop‑nav */}
            <nav className="hidden md:flex space-x-8">
              {[
                ["Home", "/"],
                ["About Us", "/about-us"],
                ["Team", "/team"],
                ["Agencies", "/agencies"],
                ["Production", "/production"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <Link key={href} href={href} className={styles.navLink}>
                  {label}
                </Link>
              ))}
            </nav>

            {/* Mobile toggle */}
            <Disclosure.Button className={styles.mobileMenuButton}>
              {open ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </Disclosure.Button>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel className="md:hidden bg-white">
            <nav className="flex flex-col px-4 pb-4 space-y-1">
              {[
                ["Home", "/"],
                ["About Us", "/about-us"],
                ["Team", "/team"],
                ["Agencies", "/agencies"],
                ["Production", "/production"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <Disclosure.Button
                  key={href}
                  as={Link}
                  href={href}
                  className="block py-2 text-gray-800 hover:text-[--color-accent]"
                >
                  {label}
                </Disclosure.Button>
              ))}
            </nav>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
