import Link from "next/link";
import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { profile } from "@/content/profile";
import { ThemeToggle } from "./ThemeToggle";

type Props = { lang: Locale; dict: Dictionary };

export function Header({ lang, dict }: Props) {
  const otherLang: Locale = lang === "en" ? "tr" : "en";
  const links = [
    { href: "#work", label: dict.nav.work },
    { href: "#experience", label: dict.nav.experience },
    { href: "#skills", label: dict.nav.skills },
    { href: "#contact", label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-10 border-b border-border bg-bg">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:bg-bg focus:px-3 focus:py-2"
      >
        {dict.nav.skipToContent}
      </a>
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="text-sm font-semibold tracking-tight">
          {profile.name}
        </a>
        <nav aria-label="Primary" className="flex items-center">
          <ul className="hidden items-center gap-6 text-sm text-muted md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors duration-200 hover:text-fg">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="ml-4 flex items-center md:ml-6">
            <Link
              href={`/${otherLang}`}
              hrefLang={otherLang}
              aria-label={dict.nav.switchLanguage}
              title={dict.nav.switchLanguage}
              className="inline-flex h-11 min-w-11 items-center justify-center rounded-md px-2 font-mono text-xs uppercase text-muted transition-colors duration-200 hover:bg-surface hover:text-fg"
            >
              {otherLang}
            </Link>
            <ThemeToggle label={dict.nav.toggleTheme} />
          </div>
        </nav>
      </div>
    </header>
  );
}
