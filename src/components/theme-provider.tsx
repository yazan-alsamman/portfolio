"use client";

import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export const THEME_STORAGE_KEY = "portfolio-theme";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: Theme;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyThemeToDocument(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme === "dark" ? "dark" : "light";
}

function readStoredTheme(): Theme {
  try {
    const v = localStorage.getItem(THEME_STORAGE_KEY);
    if (v === "dark" || v === "light") return v;
  } catch {
    /* ignore */
  }
  return "light";
}

const listeners = new Set<() => void>();

function emitThemeChange() {
  listeners.forEach((l) => l());
}

function subscribeTheme(listener: () => void) {
  listeners.add(listener);
  const onStorage = (e: StorageEvent) => {
    if (e.key === THEME_STORAGE_KEY) listener();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

function getThemeSnapshot(): Theme {
  return readStoredTheme();
}

function getServerThemeSnapshot(): Theme {
  return "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const storedTheme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getServerThemeSnapshot);

  useLayoutEffect(() => {
    applyThemeToDocument(storedTheme);
  }, [storedTheme]);

  const setTheme = useCallback((next: Theme) => {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    applyThemeToDocument(next);
    emitThemeChange();
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme: storedTheme,
      setTheme,
      resolvedTheme: storedTheme,
    }),
    [storedTheme, setTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useAppTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useAppTheme must be used within ThemeProvider");
  }
  return ctx;
}
