# Portfolio

Personal site of Berat Kerem Öztopuz, in English (`/en`) and Turkish (`/tr`).

Built with Next.js (App Router), Tailwind CSS and a little Framer Motion. Both language pages are generated at build time.

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
```

Before pushing:

```bash
npm run lint
npm run build
```

## Where things live

| Path | What it holds |
| --- | --- |
| `content/projects.ts` | Projects shown in the Work section (both languages) |
| `content/profile.ts` | Contact links, experience, skills |
| `lib/dictionary.ts` | Interface text (headings, buttons) in both languages |
| `app/[lang]/page.tsx` | The page itself |
| `app/globals.css` | Colour tokens for light and dark themes |
| `proxy.ts` | Sends `/` to `/en` or `/tr` based on the browser language |
| `design-system/portfolio/MASTER.md` | Design decisions (palette, type, motion) |

Adding a project means adding one object to `content/projects.ts`.

## Deploy

The site is deployed on Vercel. Every push to `main` deploys to production, and every pull request gets its own preview URL.

Set `NEXT_PUBLIC_SITE_URL` in the Vercel project settings once a custom domain is attached. Until then the Vercel production URL is used for the sitemap and social preview links.
