import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-4 sm:px-6">
      <p className="font-mono text-xs text-muted">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight">Page not found · Sayfa bulunamadı</h1>
      <Link
        href="/"
        className="mt-6 w-fit underline decoration-border underline-offset-4 transition-colors duration-200 hover:text-accent hover:decoration-accent"
      >
        Home · Ana sayfa
      </Link>
    </main>
  );
}
