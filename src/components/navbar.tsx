"use client";

import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { id: "hero", label: "Identity" },
  { id: "skills", label: "Expertise" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  return (
    <motion.header
      className="sticky top-5 z-50 mx-auto w-[min(94%,1020px)]"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <nav
        aria-label="Section navigation"
        className="rounded-full border border-[var(--card-border)] bg-[var(--card)] px-3 py-2 shadow-[var(--panel-shadow)] backdrop-blur-xl sm:px-5"
      >
        <ul className="flex items-center justify-between gap-2 sm:gap-4">
          <li className="hidden rounded-full bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300 sm:block">
            Neural Persona
          </li>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="inline-flex rounded-full px-4 py-2 text-xs font-medium text-[var(--muted)] transition hover:bg-cyan-500/10 hover:text-cyan-300 sm:text-sm"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}
