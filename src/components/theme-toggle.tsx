"use client";

import { useSyncExternalStore } from "react";
import { MoonStar, Sun } from "lucide-react";
import { useAppTheme } from "@/components/theme-provider";

const noopSubscribe = () => () => {};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useAppTheme();
  const hydrated = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={hydrated ? (isDark ? "Switch to light mode" : "Switch to dark mode") : "Toggle color theme"}
      title={hydrated ? (isDark ? "Light mode" : "Dark mode") : undefined}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-300/80 bg-white text-slate-800 shadow-sm transition hover:border-cyan-400/60 hover:text-cyan-700 dark:border-slate-500/50 dark:bg-slate-900/90 dark:text-slate-100 dark:hover:border-cyan-400/50 dark:hover:text-cyan-200"
    >
      {!hydrated ? (
        <MoonStar className="h-[18px] w-[18px] opacity-40" aria-hidden />
      ) : isDark ? (
        <Sun className="h-[18px] w-[18px]" aria-hidden />
      ) : (
        <MoonStar className="h-[18px] w-[18px]" aria-hidden />
      )}
    </button>
  );
}
