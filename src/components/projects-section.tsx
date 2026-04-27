"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const projects = [
  {
    title: "Neuro Commerce OS",
    category: "SaaS Platform",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    span: "md:col-span-2",
  },
  {
    title: "Signal Health Dashboard",
    category: "Product Design",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
    span: "",
  },
  {
    title: "Pulse Mobility System",
    category: "Web Experience",
    image:
      "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80",
    span: "",
  },
  {
    title: "Aura Creative Suite",
    category: "Brand Engine",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    span: "md:col-span-2",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="px-4 pt-28 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Project Masonry"
          title="Curated Work Across Product, Brand, and Engineering"
          description="Each project showcases a blend of interaction design, narrative structure, and high-performance front-end execution."
        />
        <div className="grid auto-rows-[260px] gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className={`group relative overflow-hidden rounded-3xl border border-[var(--card-border)] ${project.span}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.55, delay: index * 0.07 }}
              whileHover={{ y: -4 }}
            >
              <Image src={project.image} alt={project.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/76 via-slate-800/28 to-transparent dark:from-slate-950/86 dark:via-slate-900/32" />
              <div className="absolute inset-0 bg-cyan-400/0 transition duration-500 group-hover:bg-cyan-400/10 dark:group-hover:bg-cyan-500/8" />
              <div className="absolute bottom-0 z-10 flex w-full items-end justify-between p-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/80">{project.category}</p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-100">{project.title}</h3>
                </div>
                <button
                  aria-label={`Open ${project.title} case study`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur transition hover:border-cyan-200 hover:bg-cyan-300/20"
                >
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
