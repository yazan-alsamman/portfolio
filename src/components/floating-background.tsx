"use client";

import { motion } from "framer-motion";

const orbs = [
  {
    size: "h-72 w-72",
    left: "left-[6%]",
    top: "top-24",
    color: "from-sky-200/35 to-cyan-100/20",
    darkColor: "dark:from-cyan-500/24 dark:to-indigo-500/12",
    delay: 0,
  },
  {
    size: "h-80 w-80",
    left: "right-[10%]",
    top: "top-[35%]",
    color: "from-violet-200/25 to-sky-100/15",
    darkColor: "dark:from-violet-500/18 dark:to-blue-500/10",
    delay: 1.2,
  },
  {
    size: "h-64 w-64",
    left: "left-[32%]",
    top: "bottom-[12%]",
    color: "from-cyan-100/30 to-indigo-100/12",
    darkColor: "dark:from-indigo-500/18 dark:to-cyan-500/8",
    delay: 0.7,
  },
];

export function FloatingBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-10%,rgba(56,189,248,0.08),transparent_55%),radial-gradient(ellipse_70%_50%_at_100%_0%,rgba(129,140,248,0.06),transparent_50%)] dark:bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_46%),radial-gradient(circle_at_80%_30%,_rgba(124,58,237,0.14),_transparent_42%)]" />
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className={`absolute ${orb.size} ${orb.left} ${orb.top} rounded-full bg-gradient-to-br ${orb.color} ${orb.darkColor} blur-3xl opacity-90 dark:opacity-80`}
          animate={{ y: [0, -22, 0], x: [0, 12, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 10 + index * 2.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: orb.delay }}
        />
      ))}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#f8fafc_0%,#f1f5f9_45%,#f8fafc_100%)] dark:bg-[linear-gradient(120deg,rgba(8,13,27,0.9),rgba(4,8,19,0.95))]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_100%,rgba(255,255,255,0.5),transparent_55%)] dark:bg-[radial-gradient(circle_at_center,_transparent_45%,_rgba(3,7,18,0.92)_100%)]" />
    </div>
  );
}
