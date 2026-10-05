type Props = {
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
};

// Two-column section: numbered label on the left, content on the right.
export function Section({ id, index, title, children }: Props) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="grid gap-6 border-t border-border py-16 md:grid-cols-12 md:gap-8 md:py-24"
    >
      <header className="md:col-span-3">
        <h2 id={`${id}-title`} className="flex items-baseline gap-3 text-sm font-medium">
          <span className="font-mono text-xs text-muted">{index}</span>
          {title}
        </h2>
      </header>
      <div className="md:col-span-9">{children}</div>
    </section>
  );
}
