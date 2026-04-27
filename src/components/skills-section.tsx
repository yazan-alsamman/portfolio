"use client";

import { motion } from "framer-motion";
import { Cpu, Layers, WandSparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const skills = [
  {
    title: "Technical Precision",
    text: "Scalable frontend systems, resilient architecture, and measured performance tuning for fast, elegant interfaces.",
    icon: Cpu,
  },
  {
    title: "Digital Architecture",
    text: "Design systems and product flows built for growth, balancing strategy with deeply polished user interaction.",
    icon: Layers,
  },
  {
    title: "Creative Execution",
    text: "Premium visual storytelling through animation, interaction details, and modern brand-forward interface language.",
    icon: WandSparkles,
  },
];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

const heatLevelClasses = [
  "bg-[#ecfeff] dark:bg-cyan-950/35",
  "bg-[#cffafe] dark:bg-cyan-900/38",
  "bg-[#a5f3fc] dark:bg-cyan-800/42",
  "bg-[#67e8f9] dark:bg-cyan-700/48",
  "bg-[#22d3ee] dark:bg-cyan-500/55",
];

export function SkillsSection() {
  return (
    <section id="skills" className="px-4 pt-28 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Expertise Matrix"
          title="High-Performance Craft, Product-Level Quality"
          description="A focused blend of technical depth and visual innovation, shaped for modern teams and premium digital products."
        />
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {skills.map((skill, index) => (
              <motion.article
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="group rounded-3xl border border-slate-200/90 bg-white p-7 shadow-[0_10px_40px_-12px_rgba(15,23,42,0.06)] backdrop-blur-xl transition hover:border-teal-200/80 hover:shadow-[0_20px_50px_-14px_rgba(15,23,42,0.08)] dark:border-[var(--card-border)] dark:bg-[var(--card)] dark:shadow-none dark:hover:border-cyan-300/45 dark:hover:shadow-[0_24px_54px_rgba(6,12,24,0.58)]"
              >
                <skill.icon className="h-8 w-8 text-[#0891b2] dark:text-cyan-300" />
                <h3 className="mt-4 text-xl font-semibold text-[var(--text)]">{skill.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{skill.text}</p>
              </motion.article>
            ))}
          </div>
          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75 }}
            className="rounded-3xl border border-slate-200/90 bg-white p-7 shadow-[0_10px_40px_-12px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-[var(--card-border)] dark:bg-[var(--card-strong)] dark:shadow-none"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0d9488] dark:text-cyan-200/80">Contribution Pulse</p>
            <div className="mt-6 space-y-3">
              {months.map((month, row) => (
                <div key={month} className="grid grid-cols-[38px_1fr] items-center gap-3">
                  <span className="text-xs text-[var(--muted)]">{month}</span>
                  <div className="grid grid-cols-8 gap-2">
                    {Array.from({ length: 8 }).map((_, col) => {
                      const intensity = ((row + col) % 5) + 1;
                      const levelClass = heatLevelClasses[intensity - 1] ?? heatLevelClasses[0];
                      return (
                        <motion.span
                          key={`${month}-${col}`}
                          className={`h-7 rounded-md shadow-none ${levelClass} ${intensity > 3 ? "shadow-sm shadow-cyan-300/40 dark:shadow-[0_0_12px_rgba(34,211,238,0.35)]" : ""}`}
                          animate={{ opacity: [0.88, 1, 0.88] }}
                          transition={{
                            duration: 2.8,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: (row + col) * 0.08,
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
