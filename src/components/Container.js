// src/components/Container.js
"use client";

export default function Container({
  children,
  as: Tag = "div",
  className = "",
}) {
  return (
    <Tag className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </Tag>
  );
}
