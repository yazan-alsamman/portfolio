"use client";

import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const activeTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = activeTheme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-300/80 bg-white text-slate-800 shadow-sm transition hover:border-cyan-400/60 hover:text-cyan-700 dark:border-slate-500/50 dark:bg-slate-900/90 dark:text-slate-100 dark:hover:border-cyan-400/50 dark:hover:text-cyan-200"
    >
      {isDark ? <Sun className="h-[18px] w-[18px]" /> : <MoonStar className="h-[18px] w-[18px]" />}
    </button>
  );
}
