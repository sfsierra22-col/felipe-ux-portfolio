"use client"

import Link from "next/link"
import { useLanguage } from "./language-provider"
import LanguageToggle from "./language-toggle"
import ThemeToggle from "./theme-toggle"
import { homeCopy } from "../content/home-copy"

type SidebarProps = {
  sectionBasePath?: string
}

const iconClassName = "h-4 w-4"

const icons = {
  profile: (
    <svg viewBox="0 0 24 24" className={iconClassName} aria-hidden="true">
      <path
        d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-3.314 0-6 1.79-6 4v1h12v-1c0-2.21-2.686-4-6-4Z"
        fill="currentColor"
      />
    </svg>
  ),
  projects: (
    <svg viewBox="0 0 24 24" className={iconClassName} aria-hidden="true">
      <path
        d="M8 6V4h8v2h5v14H3V6h5Zm1 0h6V5H9v1Zm10 4H5v8h14v-8Z"
        fill="currentColor"
      />
    </svg>
  ),
  experience: (
    <svg viewBox="0 0 24 24" className={iconClassName} aria-hidden="true">
      <path
        d="M4 5h16v2H4V5Zm0 6h16v2H4v-2Zm0 6h16v2H4v-2Z"
        fill="currentColor"
      />
    </svg>
  ),
  education: (
    <svg viewBox="0 0 24 24" className={iconClassName} aria-hidden="true">
      <path
        d="M12 3 1 9l11 6 9-4.91V17h2V9L12 3Zm0 9.75L4.67 9 12 5.25 19.33 9 12 12.75Z"
        fill="currentColor"
      />
    </svg>
  ),
  contact: (
    <svg viewBox="0 0 24 24" className={iconClassName} aria-hidden="true">
      <path
        d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5Z"
        fill="currentColor"
      />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" className={iconClassName} aria-hidden="true">
      <path
        d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05a4.18 4.18 0 0 1 3.76-2.07C20.4 8.57 22 10.25 22 13.8V21h-4v-6.3c0-1.5-.03-3.43-2.09-3.43-2.1 0-2.42 1.64-2.42 3.33V21h-4V9Z"
        fill="currentColor"
      />
    </svg>
  ),
  theme: (
    <svg viewBox="0 0 24 24" className={iconClassName} aria-hidden="true">
      <path
        d="M12 2a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Zm0 16a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm8-4a1 1 0 0 1 1 1v.5a1 1 0 1 1-2 0V15a1 1 0 0 1 1-1Zm-16 0a1 1 0 0 1 1 1v.5a1 1 0 1 1-2 0V15a1 1 0 0 1 1-1Zm13.07-7.07a1 1 0 0 1 1.42 0l.35.35a1 1 0 1 1-1.42 1.42l-.35-.35a1 1 0 0 1 0-1.42ZM5.16 17.84a1 1 0 0 1 1.42 0l.35.35a1 1 0 1 1-1.42 1.42l-.35-.35a1 1 0 0 1 0-1.42Zm12.68 1.07a1 1 0 0 1 1.42-1.42l.35.35a1 1 0 1 1-1.42 1.42l-.35-.35Zm-12.68-12.68a1 1 0 0 1 1.42-1.42l.35.35a1 1 0 1 1-1.42 1.42l-.35-.35Z"
        fill="currentColor"
      />
    </svg>
  ),
  language: (
    <svg viewBox="0 0 24 24" className={iconClassName} aria-hidden="true">
      <path
        d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm6.93 9h-3.02a15.77 15.77 0 0 0-1.12-5 8.03 8.03 0 0 1 4.14 5ZM12 4a13.61 13.61 0 0 1 1.65 5H10.35A13.61 13.61 0 0 1 12 4ZM5.07 11a8.03 8.03 0 0 1 4.14-5 15.77 15.77 0 0 0-1.12 5H5.07Zm0 2h3.02a15.77 15.77 0 0 0 1.12 5A8.03 8.03 0 0 1 5.07 13Zm6.93 7a13.61 13.61 0 0 1-1.65-5h3.3A13.61 13.61 0 0 1 12 20Zm2.79-2a15.77 15.77 0 0 0 1.12-5h3.02a8.03 8.03 0 0 1-4.14 5Z"
        fill="currentColor"
      />
    </svg>
  ),
}

export default function Sidebar({ sectionBasePath = "" }: SidebarProps) {
  const { language } = useLanguage()
  const copy = homeCopy[language]

  const sectionHref = (id: string) =>
    sectionBasePath ? `${sectionBasePath}#${id}` : `#${id}`

  return (
    <aside className="w-full md:w-64 lg:w-72 border-b md:border-b-0 md:border-r border-zinc-200/70 dark:border-zinc-800 bg-zinc-50/80 dark:bg-black/70 backdrop-blur md:min-h-screen">
      <div className="px-6 py-6 md:py-10 flex flex-col gap-6">
        <Link href={sectionHref("perfil")} className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center font-bold">
            F
          </div>
          <div className="leading-tight">
            <p className="font-semibold">{copy.header.name}</p>
            <p className="text-xs opacity-70">{copy.header.title}</p>
          </div>
        </Link>

        <nav className="space-y-1 text-sm font-medium">
          <Link
            href={sectionHref("perfil")}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100/70 dark:hover:bg-zinc-900/70 transition"
          >
            {icons.profile}
            <span>{copy.header.nav.profile}</span>
          </Link>
          <Link
            href={sectionHref("proyectos")}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100/70 dark:hover:bg-zinc-900/70 transition"
          >
            {icons.projects}
            <span>{copy.header.nav.projects}</span>
          </Link>
          <Link
            href={sectionHref("experiencia")}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100/70 dark:hover:bg-zinc-900/70 transition"
          >
            {icons.experience}
            <span>{copy.header.nav.experience}</span>
          </Link>
          <Link
            href={sectionHref("formacion")}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100/70 dark:hover:bg-zinc-900/70 transition"
          >
            {icons.education}
            <span>{copy.header.nav.education}</span>
          </Link>
          <Link
            href={sectionHref("contacto")}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100/70 dark:hover:bg-zinc-900/70 transition"
          >
            {icons.contact}
            <span>{copy.header.nav.contact}</span>
          </Link>
          <a
            href="https://www.linkedin.com/in/felipesierra22/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100/70 dark:hover:bg-zinc-900/70 transition"
          >
            {icons.linkedin}
            <span>{copy.header.nav.linkedin}</span>
          </a>
        </nav>

        <div className="border-t border-zinc-200/70 dark:border-zinc-800 pt-4 space-y-3">
          <div className="flex items-center justify-between gap-3 text-sm">
            <span className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300">
              {icons.theme}
              {copy.header.controls.theme}
            </span>
            <ThemeToggle />
          </div>
          <div className="flex items-center justify-between gap-3 text-sm">
            <span className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300">
              {icons.language}
              {copy.header.controls.language}
            </span>
            <LanguageToggle />
          </div>
        </div>
      </div>
    </aside>
  )
}
