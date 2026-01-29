"use client"

import Link from "next/link"
import { useLanguage } from "../components/language-provider"
import Sidebar from "../components/sidebar"
import { homeCopy } from "../content/home-copy"

export default function Home() {
  const { language } = useLanguage()
  const copy = homeCopy[language]

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-50">
      <div className="md:flex">
        <Sidebar />

        <main className="flex-1">
          {/* Hero */}
          <section id="perfil" className="max-w-6xl mx-auto px-6 pt-14 pb-10 scroll-mt-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div className="space-y-6">
            <p className="text-sm opacity-70">{copy.hero.greeting}</p>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              {copy.hero.headline}
            </h1>

            <p className="text-lg opacity-80 max-w-xl">{copy.hero.intro}</p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#proyectos"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                {copy.hero.ctaPrimary}
              </a>

              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition"
              >
                {copy.hero.ctaSecondary}
              </a>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 text-sm">
              {copy.hero.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-zinc-200 dark:border-zinc-800 rounded-full px-3 py-1 opacity-80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Photo card */}
          <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm">
            <div className="flex items-center gap-5">
              <div className="h-24 w-24 rounded-2xl overflow-hidden bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center">
                {/* Pon tu foto en /public/felipe.jpg */}
                <img
                  src="/FElipe.jpeg"
                  alt="Foto de Felipe"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="space-y-1">
                <p className="text-sm opacity-70">{copy.summary.label}</p>
                <p className="font-semibold text-lg">{copy.summary.title}</p>
                <p className="text-sm opacity-80">{copy.summary.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6 text-sm">
              {copy.summary.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4"
                >
                  <p className="opacity-70">{stat.label}</p>
                  <p className="font-semibold mt-1">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold">{copy.projects.title}</h2>
            <p className="opacity-70 mt-1">{copy.projects.description}</p>
          </div>
          <Link
            href="/work"
            className="
    inline-flex items-center gap-2
    px-5 py-2.5 rounded-xl text-sm font-semibold
    border transition backdrop-blur

    bg-white text-neutral-900 border-neutral-200
    hover:bg-neutral-100

    dark:bg-neutral-900 dark:text-neutral-100 dark:border-neutral-800
    dark:hover:bg-neutral-800
  "
          >
            {copy.projects.viewAll}
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {copy.projects.cards.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-900 hover:shadow-md transition"
            >
              <p className="text-sm opacity-70">{project.eyebrow}</p>
              <h3 className="text-lg font-semibold mt-1">{project.title}</h3>
              <p className="text-sm opacity-80 mt-2">{project.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Experiencia */}
      <div className="max-w-6xl mx-auto px-6">
        <section id="experiencia" className="mt-24 scroll-mt-28">
          <h2 className="text-3xl font-bold">{copy.experience.title}</h2>
          <p className="mt-1 text-neutral-600 dark:text-neutral-400 whitespace-pre-line">
            {copy.experience.description}
          </p>

          <div className="mt-8 space-y-6">
            {copy.experience.roles.map((role) => (
              <div
                key={role.company}
                className="rounded-3xl border border-neutral-200/70 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/40 p-8 shadow-sm dark:shadow-none"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
                      {role.company}
                    </h3>
                    <p className="mt-1 text-neutral-600 dark:text-neutral-400">
                      {role.area}
                    </p>
                  </div>

                  <div className="text-neutral-300/80 text-sm md:text-base">
                    {role.period}
                  </div>
                </div>

                <ul className="mt-6 space-y-2 text-neutral-700 dark:text-neutral-200/90">
                  {role.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link
                    href={role.href}
                    className="
      inline-flex items-center justify-center gap-2
      rounded-xl px-4 py-2.5
      text-sm font-semibold

      border border-white/10
      bg-white/5 backdrop-blur

      opacity-70 group-hover:opacity-100
      hover:bg-white/10 hover:border-white/20
      active:scale-[0.98]

      transition
    "
                  >
                    {role.cta} 
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Formación */}
        <section id="formacion" className="mt-24 scroll-mt-28">
          <h2 className="text-3xl font-bold">{copy.education.title}</h2>
          <p className="mt-1 text-neutral-600 dark:text-neutral-400">
            {copy.education.description}
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-neutral-200/70 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/40 p-8 shadow-sm dark:shadow-none">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
                {copy.education.university.name}
              </h3>
              <p className="mt-1 text-neutral-600 dark:text-neutral-400">
                {copy.education.university.degree}
              </p>
              <p className="mt-1 text-neutral-600 dark:text-neutral-400">
                {copy.education.university.year}
              </p>

              <p className="mt-1 text-neutral-600 dark:text-neutral-400">
                {copy.education.university.detail}
              </p>
            </div>

            <div className="rounded-3xl border border-neutral-200/70 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/40 p-8 shadow-sm dark:shadow-none">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
                {copy.education.certifications.title}
              </h3>

              <div className="mt-5 space-y-6">
                <div>
                  <p className="mt-1 text-neutral-600 dark:text-neutral-400">
                    {copy.education.certifications.udemy.title}
                  </p>
                  <ul className="mt-6 space-y-2 text-neutral-700 dark:text-neutral-200/90">
                    {copy.education.certifications.udemy.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="mt-1 text-neutral-600 dark:text-neutral-400">
                    {copy.education.certifications.ltc.title}
                  </p>
                  <p className="mt-1 text-neutral-600 dark:text-neutral-400">
                    {copy.education.certifications.ltc.detail}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
          {/* Contacto */}
          <section id="contacto" className="max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-semibold">{copy.contact.title}</h2>
        <p className="opacity-70 mt-1">{copy.contact.subtitle}</p>

        <div className="mt-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-900">
          <p className="opacity-80">{copy.contact.prompt}</p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <a
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-blue-600 text-white hover:bg-blue-700 transition"
              href="mailto:sfsierra22@gmail.com"
            >
              {copy.contact.email}
            </a>
            <a
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition"
              href="https://www.linkedin.com/in/felipesierra22/"
              target="_blank"
              rel="noreferrer"
            >
              {copy.header.nav.linkedin}
            </a>
          </div>
        </div>
          </section>

          {/* Footer */}
          <footer className="py-10 flex justify-center text-sm opacity-60">
            {copy.footer.replace("{year}", String(new Date().getFullYear()))}
          </footer>
        </main>
      </div>
    </div>
  )
}
