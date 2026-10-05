"use client";

import { Moon, Sun } from "lucide-react";

// The inline script in the layout sets the first theme; this only flips it.
// Both icons are rendered and CSS shows the right one, so server and client HTML match.
export function ThemeToggle({ label }: { label: string }) {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be blocked (private mode); the toggle still works for this visit.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="inline-flex size-11 cursor-pointer items-center justify-center rounded-md text-muted transition-colors duration-200 hover:bg-surface hover:text-fg"
    >
      <Moon aria-hidden className="size-4 dark:hidden" />
      <Sun aria-hidden className="hidden size-4 dark:block" />
    </button>
  );
}
