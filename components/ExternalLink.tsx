import { ArrowUpRight } from "lucide-react";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

// Link to another site, with an arrow that nudges on hover.
export function ExternalLink({ href, children, className = "" }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-1 underline decoration-border underline-offset-4 transition-colors duration-200 hover:text-accent hover:decoration-accent ${className}`}
    >
      {children}
      <ArrowUpRight
        aria-hidden
        className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </a>
  );
}
