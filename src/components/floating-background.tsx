"use client";

import { motion } from "framer-motion";

const orbs = [
  { size: "h-72 w-72", left: "left-[6%]", top: "top-24", color: "from-cyan-500/40 to-purple-500/20", delay: 0 },
  { size: "h-80 w-80", left: "right-[10%]", top: "top-[35%]", color: "from-fuchsia-500/30 to-blue-500/10", delay: 1.2 },
  { size: "h-64 w-64", left: "left-[32%]", top: "bottom-[12%]", color: "from-indigo-500/35 to-cyan-500/10", delay: 0.7 },
];

export function FloatingBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.2),_transparent_46%),radial-gradient(circle_at_80%_30%,_rgba(124,58,237,0.12),_transparent_42%)]" />
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className={`absolute ${orb.size} ${orb.left} ${orb.top} rounded-full bg-gradient-to-br ${orb.color} blur-3xl`}
          animate={{ y: [0, -22, 0], x: [0, 12, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 10 + index * 2.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: orb.delay }}
        />
      ))}
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.8),rgba(237,245,255,0.92))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_45%,_rgba(229,238,252,0.88)_100%)]" />
    </div>
  );
}
