"use client"

import { useLanguage } from "./language-provider"

const labels = {
  es: {
    label: "ES",
    aria: "Cambiar a inglés",
  },
  en: {
    label: "EN",
    aria: "Switch to Spanish",
  },
}

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      onClick={toggleLanguage}
      aria-label={labels[language].aria}
      title={labels[language].aria}
      className="px-2.5 py-1.5 rounded-lg border text-xs font-semibold transition
                 bg-white dark:bg-neutral-900
                 border-neutral-300 dark:border-neutral-700"
    >
      {labels[language].label}
    </button>
  )
}
