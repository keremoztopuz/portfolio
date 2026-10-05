import type { Project } from "@/content/projects";
import type { Locale } from "@/lib/i18n";
import { ExternalLink } from "./ExternalLink";

type Props = {
  project: Project;
  lang: Locale;
  labels: { featured: string; repo: string; live: string; stack: string };
};

export function ProjectRow({ project, lang, labels }: Props) {
  const highlights = project.highlights?.[lang];

  return (
    <article className="grid gap-2 py-8 sm:grid-cols-[4rem_1fr] sm:gap-6">
      <p className="font-mono text-xs text-muted sm:pt-1">{project.year}</p>
      <div>
        <h3 className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-lg font-semibold tracking-tight">
          {project.title[lang]}
          {project.featured && (
            <span className="font-mono text-[11px] font-normal uppercase tracking-wider text-accent">
              {labels.featured}
            </span>
          )}
        </h3>
        <p className="mt-2 max-w-[68ch] text-muted">{project.summary[lang]}</p>

        {highlights && (
          <ul className="mt-4 max-w-[68ch] space-y-1.5 text-sm">
            {highlights.map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-muted" />
                {item}
              </li>
            ))}
          </ul>
        )}

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={labels.stack}>
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-sm border border-border px-1.5 py-0.5 font-mono text-[11px] text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        <p className="mt-4 flex gap-5 text-sm">
          <ExternalLink href={project.repo}>{labels.repo}</ExternalLink>
          {project.live && <ExternalLink href={project.live}>{labels.live}</ExternalLink>}
        </p>
      </div>
    </article>
  );
}
