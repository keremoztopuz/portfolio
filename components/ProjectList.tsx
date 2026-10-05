"use client";

import { useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import type { Category, Project } from "@/content/projects";
import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { ProjectRow } from "./ProjectRow";

type Filter = "all" | Category;

type Props = {
  projects: Project[];
  lang: Locale;
  labels: Dictionary["work"];
};

const filters: Filter[] = ["all", "ml", "games", "web"];

export function ProjectList({ projects, lang, labels }: Props) {
  const [active, setActive] = useState<Filter>("all");
  const visible = active === "all" ? projects : projects.filter((p) => p.category === active);
  const countFor = (filter: Filter) =>
    filter === "all" ? projects.length : projects.filter((p) => p.category === filter).length;

  return (
    // reducedMotion="user" turns these animations off when the OS asks for less motion.
    <MotionConfig reducedMotion="user" transition={{ duration: 0.25, ease: "easeOut" }}>
      <div role="group" aria-label={labels.title} className="flex flex-wrap gap-x-5 sm:gap-x-6">
        {filters.map((filter) => {
          const isActive = filter === active;
          return (
            <button
              key={filter}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(filter)}
              className={`relative inline-flex h-11 cursor-pointer items-center gap-1.5 text-sm transition-colors duration-200 ${
                isActive ? "text-fg" : "text-muted hover:text-fg"
              }`}
            >
              {labels.filters[filter]}
              <span className="font-mono text-[11px] text-muted">{countFor(filter)}</span>
              {isActive && (
                <motion.span
                  layoutId="filter-underline"
                  aria-hidden
                  className="absolute inset-x-0 bottom-2 h-px bg-fg"
                />
              )}
            </button>
          );
        })}
      </div>

      <ul className="mt-4 divide-y divide-border border-y border-border">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((project) => (
            <motion.li
              key={project.slug}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
            >
              <ProjectRow
                project={project}
                lang={lang}
                labels={labels}
              />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </MotionConfig>
  );
}
