// Header.js
"use client";

import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/Container";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about-us" },
  { name: "Agencies", href: "/agencies" },
  { name: "Production", href: "/production" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <Disclosure
      as="nav"
      className="bg-white/70 backdrop-blur sticky top-0 z-50 shadow-sm"
    >
      {({ open }) => (
        <>
          <Container className="flex h-16 items-center justify-center">
            <Link href="/" className="text-2xl font-bold tracking-wide">
              Wood House AB
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`text-sm transition-colors ${
                      active
                        ? "text-primary font-semibold"
                        : "text-gray-700 hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            <div className="md:hidden">
              <Disclosure.Button className="p-2 rounded hover:bg-gray-100 focus:outline-none">
                {open ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </Disclosure.Button>
            </div>
          </Container>

          <Disclosure.Panel className="md:hidden bg-white/80 backdrop-blur">
            <Container className="space-y-1 py-2">
              {navigation.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
                      active
                        ? "bg-primary/10 text-primary"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </Container>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
