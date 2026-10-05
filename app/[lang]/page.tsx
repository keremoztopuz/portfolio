import Image from "next/image";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { ExternalLink } from "@/components/ExternalLink";
import { ProjectList } from "@/components/ProjectList";
import { Section } from "@/components/Section";
import { experience, profile, skills } from "@/content/profile";
import { projects } from "@/content/projects";
import { getDictionary } from "@/lib/dictionary";
import { hasLocale } from "@/lib/i18n";
import portrait from "@/assets/kerem.jpg";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <Header lang={lang} dict={dict} />

      <main id="main" className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Intro */}
        <section id="top" className="fade-in grid gap-8 py-20 md:grid-cols-12 md:py-32">
          <div className="md:col-span-3">
            <Image
              src={portrait}
              alt={dict.intro.photoAlt}
              preload
              placeholder="blur"
              sizes="(min-width: 768px) 220px, 128px"
              className="aspect-[4/5] w-32 rounded-sm object-cover md:w-full"
            />
          </div>
          <div className="md:col-span-9">
            <p className="font-mono text-xs text-muted">
              {dict.intro.role} · {dict.intro.location}
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-3 text-xl tracking-tight text-muted sm:text-2xl">{dict.intro.focus}</p>
            <p className="mt-8 max-w-[60ch] text-pretty">{dict.intro.bio}</p>
            <p className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <ExternalLink href={profile.github}>GitHub</ExternalLink>
              <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
              <a
                href={`mailto:${profile.email}`}
                className="underline decoration-border underline-offset-4 transition-colors duration-200 hover:text-accent hover:decoration-accent"
              >
                {profile.email}
              </a>
            </p>
          </div>
        </section>

        <Section id="work" index="01" title={dict.work.title}>
          <ProjectList projects={projects} lang={lang} labels={dict.work} />
        </Section>

        <Section id="experience" index="02" title={dict.experience.title}>
          <ol className="space-y-10">
            {experience.map((job) => (
              <li key={job.company} className="grid gap-2 sm:grid-cols-[4rem_1fr] sm:gap-6">
                <p className="font-mono text-xs text-muted sm:pt-1">{job.year}</p>
                <div>
                  <h3 className="font-semibold tracking-tight">
                    {job.company}
                    <span className="font-normal text-muted"> · {job.role[lang]}</span>
                  </h3>
                  <ul className="mt-2 max-w-[68ch] space-y-1.5 text-muted">
                    {job.points[lang].map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="skills" index="03" title={dict.skills.title}>
          <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {skills.map((group) => (
              <div key={group.label.en}>
                <dt className="font-mono text-xs text-muted">{group.label[lang]}</dt>
                <dd className="mt-1.5">{group.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="education" index="04" title={dict.education.title}>
          <div className="grid gap-2 sm:grid-cols-[4rem_1fr] sm:gap-6">
            <p className="font-mono text-xs text-muted sm:pt-1">2021-26</p>
            <div>
              <h3 className="font-semibold tracking-tight">{dict.education.degree}</h3>
              <p className="text-muted">{dict.education.school}</p>
              <p className="mt-2 text-sm text-muted">{dict.education.coursework}</p>
            </div>
          </div>
        </Section>

        <Section id="contact" index="05" title={dict.contact.title}>
          <p className="max-w-[60ch] text-muted">{dict.contact.text}</p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-6 inline-block text-2xl font-semibold tracking-tight underline decoration-border decoration-1 underline-offset-8 transition-colors duration-200 hover:text-accent hover:decoration-accent sm:text-3xl break-all"
          >
            {profile.email}
          </a>
          <p className="mt-6 flex gap-6 text-sm">
            <ExternalLink href={profile.github}>GitHub</ExternalLink>
            <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
          </p>
        </Section>
      </main>

      <footer className="mx-auto max-w-5xl border-t border-border px-4 py-8 font-mono text-xs text-muted sm:px-6">
        <p>© {new Date().getFullYear()} {profile.name}</p>
      </footer>
    </>
  );
}
