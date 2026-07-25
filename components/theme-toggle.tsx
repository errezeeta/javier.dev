"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-8 h-8" />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-5 right-5 z-50 w-8 h-8 flex items-center justify-center rounded-md border border-[hsl(var(--border-color))] bg-[hsl(var(--bg-elevated))] text-[hsl(var(--text-tertiary))] hover:text-[hsl(var(--text-primary))] hover:border-[hsl(var(--accent)/0.3)] transition-all duration-200 no-print"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-3.5 w-3.5" />
      ) : (
        <Moon className="h-3.5 w-3.5" />
      )}
    </button>
  );
}
