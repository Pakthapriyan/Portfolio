import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ className = "" }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Initialize from localStorage or system preference
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const enableDark = stored ? stored === "dark" : prefersDark;
    setIsDark(enableDark);
    document.documentElement.classList.toggle("dark", enableDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={toggleTheme}
      className={`inline-flex items-center justify-center rounded-full border border-black/20 dark:border-white/20 bg-white/70 dark:bg-black/30 text-black dark:text-white p-2 hover:bg-white/90 dark:hover:bg-black/50 transition ${className}`}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
