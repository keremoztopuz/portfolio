export const locales = ["en", "tr"] as const;
export const defaultLocale = "en";

export type Locale = (typeof locales)[number];

// Text that exists in both languages.
export type Localized<T = string> = Record<Locale, T>;

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
