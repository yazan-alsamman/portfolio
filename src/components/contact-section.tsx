"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Cpu, Globe, Layers, Mail, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: Globe },
  { label: "GitHub", href: "https://github.com", icon: Cpu },
  { label: "Behance", href: "https://behance.net", icon: BadgeCheck },
  { label: "Dribbble", href: "https://dribbble.com", icon: Layers },
];

export function ContactSection() {
  return (
    <section id="contact" className="px-4 pb-14 pt-28 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Connection Hub"
          title="Let&apos;s Shape Your Next Signature Experience"
          description="Open for product collaborations, strategic design partnerships, and visionary digital initiatives."
        />
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="grid gap-5 rounded-[2rem] border border-slate-200/90 bg-white p-6 shadow-[var(--panel-shadow)] backdrop-blur-2xl sm:rounded-[2.25rem] sm:p-8 lg:grid-cols-[1fr_0.85fr] dark:border-[var(--card-border)] dark:bg-[var(--card)] dark:shadow-none"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#0d9488] dark:text-cyan-200/80">Social Networks</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 dark:border-[var(--card-border)] dark:bg-[var(--card-strong)] dark:text-[var(--text)] dark:shadow-none dark:hover:border-cyan-300/40 dark:hover:bg-cyan-400/8"
                >
                  <social.icon className="h-4 w-4 text-slate-700 dark:text-inherit" />
                  {social.label}
                </a>
              ))}
            </div>
            <motion.a
              href="mailto:hello@identityaura.dev"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 inline-flex rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_40px_-6px_rgba(37,99,235,0.45),0_8px_24px_-6px_rgba(6,182,212,0.3)] dark:from-cyan-500 dark:via-blue-500 dark:to-indigo-500 dark:text-slate-950 dark:shadow-[0_12px_42px_rgba(59,130,246,0.45)]"
            >
              Launch a Conversation
            </motion.a>
          </div>
          <aside className="rounded-3xl border border-slate-200/90 bg-slate-50/80 p-6 backdrop-blur-xl dark:border-[var(--card-border)] dark:bg-[var(--card-strong)]">
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-[var(--text)]">
                <Mail className="h-4 w-4 text-cyan-600 dark:text-cyan-300" />
                hello@identityaura.dev
              </li>
              <li className="flex items-center gap-3 text-sm text-[var(--text)]">
                <Phone className="h-4 w-4 text-cyan-600 dark:text-cyan-300" />
                +1 (555) 874-2009
              </li>
              <li className="flex items-center gap-3 text-sm text-[var(--text)]">
                <MapPin className="h-4 w-4 text-cyan-600 dark:text-cyan-300" />
                Dubai, UAE
              </li>
            </ul>
          </aside>
        </motion.div>
      </div>
    </section>
  );
}
