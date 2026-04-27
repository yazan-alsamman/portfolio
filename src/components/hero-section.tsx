"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="relative px-4 pt-14 sm:px-6 lg:px-10">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 rounded-[2rem] border border-slate-200/90 bg-white p-6 shadow-[var(--panel-shadow)] backdrop-blur-xl sm:rounded-[2.25rem] sm:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:p-14 dark:border-[var(--card-border)] dark:bg-[var(--card)]">
        <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-200/90 bg-sky-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-900 dark:border-cyan-400/25 dark:bg-cyan-500/10 dark:text-cyan-200">
            <Sparkles className="h-4 w-4 text-teal-600 dark:text-cyan-200" />
            Identity Aura
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl">
            Your Visual Identity,
            <span className="mt-1 block bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-cyan-200 dark:via-blue-300 dark:to-violet-300">
              Reimagined for Tomorrow
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            I design immersive digital products where strategic thinking, modern engineering, and cinematic visual language merge into one living portfolio.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_36px_-8px_rgba(37,99,235,0.45),0_8px_24px_-6px_rgba(6,182,212,0.35)] transition dark:from-cyan-500 dark:via-blue-500 dark:to-indigo-500 dark:text-slate-950 dark:shadow-[0_10px_30px_rgba(37,99,235,0.26)]"
            >
              Start Your Journey
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </motion.a>
            <a
              href="#projects"
              className="inline-flex items-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 dark:border-[var(--card-border)] dark:bg-[var(--card-strong)] dark:text-[var(--text)] dark:shadow-none dark:hover:bg-cyan-500/10"
            >
              View Signature Work
            </a>
          </div>
        </motion.div>
        <motion.div
          className="relative mx-auto max-w-sm"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          <div className="absolute -inset-8 rounded-[2rem] bg-gradient-to-tr from-sky-200/50 via-violet-200/35 to-cyan-100/40 blur-2xl dark:from-cyan-500/20 dark:via-blue-500/16 dark:to-indigo-500/14" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200/90 bg-white p-3 shadow-[0_12px_40px_-12px_rgba(15,23,42,0.1)] dark:border-[var(--card-border)] dark:bg-[var(--card-strong)] dark:shadow-none">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.65),transparent_50%)] dark:bg-[linear-gradient(145deg,rgba(255,255,255,0.12),transparent_45%)]" />
            <Image
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=900&q=80"
              alt="Portrait profile"
              width={600}
              height={700}
              className="h-[420px] w-full rounded-[1.2rem] object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
