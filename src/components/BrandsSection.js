// src/components/home/BrandsSection.js
"use client";
import Image from "next/image";
import Link from "next/link";

/* 1) Importera loggorna – när du import‑erar statiska bilder
      får du Next.js inbyggda blur‑placeholder gratis. */
import yasakaLogo from "@/public/images/yasaka-logo.png";
import donicLogo from "@/public/images/donic-logo.png";
import nittakuLogo from "@/public/images/nittaku-logo.png";

const brands = [
  { name: "Yasaka", logo: yasakaLogo, href: "/agencies/yasaka" },
  { name: "Donic", logo: donicLogo, href: "/agencies/donic" },
  { name: "Nittaku", logo: nittakuLogo, href: "/agencies/nittaku" },
];

export default function BrandsSection() {
  return (
    <section className="bg-gray-900 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold tracking-wide text-white">
          Our&nbsp;Brands
        </h2>
        <div className="mt-6 h-1 w-12 bg-primary mx-auto" />

        {/* Kort‑grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((b) => (
            <Link
              key={b.name}
              href={b.href}
              className="group rounded-xl bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl flex flex-col items-center"
            >
              <Image
                src={b.logo}
                alt={`${b.name} logo`}
                className="h-20 w-auto object-contain mb-4 group-hover:scale-105 transition"
                placeholder="blur"
              />
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary">
                {b.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
