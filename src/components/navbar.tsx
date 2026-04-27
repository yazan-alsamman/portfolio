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
        className="rounded-full border border-slate-200/80 bg-white/95 px-3 py-2 shadow-[0_10px_40px_-12px_rgba(15,23,42,0.08),0_2px_8px_-4px_rgba(15,23,42,0.04)] backdrop-blur-xl dark:border-[var(--card-border)] dark:bg-[var(--card)] dark:shadow-[var(--panel-shadow)] sm:px-5"
      >
        <ul className="flex w-full flex-wrap items-center gap-x-1 gap-y-2 sm:flex-nowrap sm:gap-3">
          <li className="order-first hidden shrink-0 sm:block">
            <span className="inline-flex rounded-full border border-teal-200/90 bg-sky-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-teal-900 dark:border-cyan-300/35 dark:bg-cyan-400/10 dark:text-cyan-200">
              Identity Aura
            </span>
          </li>
          <li className="flex min-w-0 flex-1 flex-wrap items-center justify-center gap-x-0.5 sm:justify-center sm:gap-x-1 md:gap-x-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="inline-flex shrink-0 rounded-full px-3 py-2 text-xs font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-[var(--muted)] dark:hover:bg-cyan-500/10 dark:hover:text-cyan-300 sm:px-4 sm:text-sm"
              >
                {item.label}
              </a>
            ))}
          </li>
          <li className="ml-auto shrink-0 sm:ml-0">
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}
