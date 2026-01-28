import "./globals.css"
import { ThemeProviderWrapper } from "./providers/theme-provider"
import { LanguageProvider } from "../components/language-provider"

export const metadata = {
  title: "Felipe — Portafolio UX/UI",
  description: "Diseño UX/UI enfocado en productos digitales y banca.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
        <ThemeProviderWrapper>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProviderWrapper>
      </body>
    </html>
  )
}
