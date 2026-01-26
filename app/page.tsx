import ThemeToggle from "../components/theme-toggle"
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-50">
      {/* Top Bar */}
     
      <header className="sticky top-0 z-50 border-b border-zinc-200/70 dark:border-zinc-800 bg-zinc-50/80 dark:bg-black/70 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center font-bold">
              F
            </div>
            <div className="leading-tight">
              <p className="font-semibold">Sebastian Felipe Sierra Chacon</p>
              <p className="text-xs opacity-70">UX/UI · Research · Data</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#proyectos" className="opacity-80 hover:opacity-100 transition">
              Proyectos
            </a>
            <a href="#experiencia" className="opacity-80 hover:opacity-100 transition">
              Experiencia
            </a>
            <a href="#formacion" className="opacity-80 hover:opacity-100 transition">
              Formación
            </a>
            <a href="#contacto" className="opacity-80 hover:opacity-100 transition">
              Contacto
            </a>

            <div className="w-px h-5 bg-zinc-300 dark:bg-zinc-700 mx-1" />

            <a
              href="https://www.linkedin.com/in/felipesierra22/"
              target="_blank"
              rel="noreferrer"
              className="opacity-80 hover:opacity-100 transition"
            >
              LinkedIn
            </a>

            <a
              href="/cv-felipe.pdf"
              target="_blank"
              className="inline-flex items-center rounded-lg px-3 py-1.5 border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition"
            >
              Descargar CV
            </a>
          </nav>

          {/* Mobile quick link */}
          <Link
            href="/work"
            className="md:hidden inline-flex items-center rounded-lg px-3 py-1.5 border border-zinc-300 dark:border-zinc-700"
          >
            Work
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-14 pb-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div className="space-y-6">
            <p className="text-sm opacity-70">Hola 👋</p>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Sebas en el trabajo, Felipe fuera de el. Diseño experiencias digitales con research y data.
            </h1>

            <p className="text-lg opacity-80 max-w-xl">
              Trabajo en banca digital y conecto métricas (SUS/NPS/CES), voz del cliente y
              comportamiento para reducir fricción, aumentar claridad y crear soluciones
              útiles y medibles.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#proyectos"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Ver proyectos
              </a>

              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition"
              >
                Contacto
              </a>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 text-sm">
              {["UX/UI", "Research", "UX Data", "Banca digital", "Behavioral design"].map((t) => (
                <span
                  key={t}
                  className="border border-zinc-200 dark:border-zinc-800 rounded-full px-3 py-1 opacity-80"
                >
                  {t}
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
                <p className="text-sm opacity-70">Resumen</p>
                <p className="font-semibold text-lg">UX/UI · Research · Data</p>
                <p className="text-sm opacity-80">
                  Enfoque: reducir fricción, mejorar claridad y construir confianza.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6 text-sm">
              <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4">
                <p className="opacity-70">Especialidad</p>
                <p className="font-semibold mt-1">Banca digital</p>
              </div>
              <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4">
                <p className="opacity-70">Métodos</p>
                <p className="font-semibold mt-1">VOC + Métricas</p>
              </div>
              <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4">
                <p className="opacity-70">Foco</p>
                <p className="font-semibold mt-1">Clarity & Trust</p>
              </div>
              <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4">
                <p className="opacity-70">Trabajo</p>
                <p className="font-semibold mt-1">Proyectos end-to-end</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold">Proyectos</h2>
            <p className="opacity-70 mt-1">
              Tres casos reales: research a escala, reporting de experiencia e innovación.
            </p>
          </div>
          <Link href="/work" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
            Ver todo →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Link
            href="/work/proyecto-1"
            className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-900 hover:shadow-md transition"
          >
            <p className="text-sm opacity-70">Usuarios IA sintetizados</p>
            <h3 className="text-lg font-semibold mt-1">User personas & entrevistas sintéticas</h3>
            <p className="text-sm opacity-80 mt-2">
              Síntesis de evidencia + generación de arquetipos accionables por segmento.
            </p>
          </Link>

          <Link
            href="/work/proyecto-2"
            className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-900 hover:shadow-md transition"
          >
            <p className="text-sm opacity-70">Triangulación de métricas UX</p>
            <h3 className="text-lg font-semibold mt-1">Automatización de informes UX</h3>
            <p className="text-sm opacity-80 mt-2">
              Métricas + VOC + errores + transacciones → hallazgos listos para decisión.
            </p>
          </Link>

          <Link
            href="/work/proyecto-3"
            className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-900 hover:shadow-md transition"
          >
            <p className="text-sm opacity-70">Proyecto 3</p>
            <h3 className="text-lg font-semibold mt-1">Iniciativas WOW basadas en data</h3>
            <p className="text-sm opacity-80 mt-2">
              Priorización y propuestas con behavioral design para claridad y confianza.
            </p>
          </Link>
        </div>
      </section>

      {/* Experiencia */}
      <div className="max-w-6xl mx-auto px-6">
      <section id="experiencia" className="mt-24 scroll-mt-28">
  <h2 className="text-3xl font-bold">Experiencia</h2>
  <p className="text-neutral-300/80 mt-2">
    Resumen profesional (luego lo refinamos con logros y métricas).
  </p>

  <div className="mt-8 space-y-6">

    {/* ADL */}
    <div className="rounded-3xl border border-neutral-800 bg-neutral-950/40 p-8 group">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">ADL Digital Lab Diseñador UX/UI Sr</h3>
          <p className="text-neutral-400 mt-1">
            Operaciones Digitales · UX / Research / Data
          </p>
        </div>

        <div className="text-neutral-300/80 text-sm md:text-base">
          2019 — Actualidad
        </div>
      </div>

      <ul className="mt-6 space-y-2 text-neutral-200/90">
        <li>• Aplicación de metodologías de diseño y metodologías ágiles en productos digitales para distintos clientes.</li>
        <li>• Acompañamiento en procesos de co-creación y desarrollo con equipos interdisciplinares.</li>
        <li>• Pruebas y testeos para prototipos digitales centrados en el usuario (Banco de Occidente y Banco Popular).</li>
        <li>• Monitoreo de métricas de experiencia, flujos de conversión y accionables (Banco de Occidente).</li>
        <li>• Análisis y triangulación de data cualitativa y cuantitativa (Banco Popular).</li>
      </ul>
      <div className="mt-6">
  <Link
    href="/experiencia#adl"
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
    Ver experiencia a detalle <span aria-hidden>→</span>
  </Link>
</div>
    </div>
   
    {/* DAVIVIENDA */}
    <div className="rounded-3xl border border-neutral-800 bg-neutral-950/40 p-8 group">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">Banco Davivienda — Grupo Bolívar</h3>
          <p className="text-neutral-400 mt-1">
            Diseñador UX · Gestor de Proyectos de Innovación
          </p>
        </div>

        <div className="text-neutral-300/80 text-sm md:text-base">
          2017 — 2019
        </div>
      </div>

      <ul className="mt-6 space-y-2 text-neutral-200/90">
        <li>• Desarrollo de soluciones digitales para el Grupo Bolívar y el área de innovación.</li>
        <li>• Diseño UX y soluciones de innovación incremental y organizacional.</li>
      </ul>
      <div className="mt-6">
  <Link
    href="/experiencia#adl"
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
    Ver experiencia a detalle <span aria-hidden>→</span>
  </Link>
</div>
    </div>
  </div>
  
</section>
      {/* Formación */}
      <section id="formacion" className="mt-24 scroll-mt-28">
  <h2 className="text-3xl font-bold">Formación</h2>
  <p className="text-neutral-300/80 mt-2">
    Educación formal + certificaciones y cursos relevantes.
  </p>

  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">

    <div className="rounded-3xl border border-neutral-800 bg-neutral-950/40 p-8">
      <h3 className="text-xl font-semibold">Pontificia Universidad Javeriana</h3>
      <p className="text-neutral-400 mt-1">Pregrado en Diseño Industrial</p>
      <p className="text-neutral-300/80 mt-2">2018</p>

      <p className="mt-5 text-neutral-200/90">
        Formación base en diseño, pensamiento sistémico y soluciones centradas en las personas.
      </p>
    </div>

    <div className="rounded-3xl border border-neutral-800 bg-neutral-950/40 p-8">
      <h3 className="text-xl font-semibold">Certificaciones / Cursos</h3>

      <div className="mt-5 space-y-6">
        <div>
          <p className="text-neutral-400 text-sm">Udemy</p>
          <ul className="mt-2 space-y-2 text-neutral-200/90">
            <li>• Liderazgo y gestión de equipos</li>
            <li>• Creatividad e innovación en los negocios</li>
            <li>• Presentaciones efectivas: Storytelling</li>
          </ul>
        </div>

        <div>
          <p className="text-neutral-400 text-sm">LTC — Language Teaching Center</p>
          <p className="text-neutral-200/90 mt-2">
            English Language Short Course — Eastbourne, United Kingdom (2012)
            B2 level in English.
          </p>
        </div>
      </div>
    </div>

  </div>
</section>
</div>
      {/* Contacto */}
      <section id="contacto" className="max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-semibold">Contacto</h2>
        <p className="opacity-70 mt-1">Hablemos 👇</p>

        <div className="mt-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-900">
          <p className="opacity-80">
            ¿Te gustaría que trabajemos juntos? Escríbeme:
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <a
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-blue-600 text-white hover:bg-blue-700 transition"
              href="mailto:sfsierra22@gmail.com"
            >
              Enviar correo
            </a>
            <a
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition"
              href="https://www.linkedin.com/in/felipesierra22/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 flex justify-center text-sm opacity-60">
        © {new Date().getFullYear()} Felipe · UX/UI · Research · Data
      </footer>
    </div>
  );
}