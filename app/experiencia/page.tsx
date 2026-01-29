import Link from "next/link"
import Sidebar from "../../components/sidebar"

export default function ExperienciaPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-50">
      <div className="md:flex">
        <Sidebar sectionBasePath="/" />

        <main className="flex-1 max-w-6xl mx-auto px-6 py-12">
          <div className="flex justify-end mb-6">
            <Link
              href="/"
              className="px-4 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900 transition"
            >
              ← Volver al inicio
            </Link>
          </div>
        <section className="max-w-3xl">
          <p className="text-sm opacity-70">Experiencia</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
            Mi recorrido diseñando productos digitales con research, data y toma de decisiones.
          </h1>
          <p className="mt-5 text-zinc-700 dark:text-zinc-300 text-base md:text-lg">
            He trabajado entre innovación y banca digital en contextos corporativos, conectando diseño,
            negocio y tecnología. Mi enfoque: reducir fricción, mejorar claridad y construir confianza con evidencia.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 text-sm">
            {[
              "UX end-to-end",
              "Research",
              "Banca digital",
              "Producto",
              "Métricas (SUS/NPS/CES)",
              "Co-creación",
            ].map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-950/40"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { k: "Años en el sector", v: "2017 — Actualidad" },
            { k: "Industria", v: "Financiero / Banca" },
            { k: "Foco", v: "Clarity · Trust · Fricción" },
            { k: "Evidencia", v: "Research + métricas" },
          ].map((x) => (
            <div
              key={x.k}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-950/40 p-5"
            >
              <p className="text-xs opacity-70">{x.k}</p>
              <p className="mt-2 font-semibold">{x.v}</p>
            </div>
          ))}
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold">Timeline</h2>
          <div className="mt-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-950/40 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="mt-1 h-3 w-3 rounded-full bg-zinc-900 dark:bg-zinc-50" />
                <div>
                  <p className="font-semibold">Banco Davivienda — Grupo Bolívar</p>
                  <p className="text-sm opacity-70">Diseñador UX · Innovación</p>
                  <p className="text-sm mt-1">2017 — 2019</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 h-3 w-3 rounded-full bg-zinc-900 dark:bg-zinc-50" />
                <div>
                  <p className="font-semibold">ADL Digital Lab</p>
                  <p className="text-sm opacity-70">Operaciones Digitales · UX / Research / Data</p>
                  <p className="text-sm mt-1">2019 — Actualidad</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-14 space-y-10">
          <article id="adl" className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-950/40 p-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold">ADL Digital Lab</h3>
                <p className="mt-1 text-sm opacity-70">
                  Operaciones Digitales · UX / Research / Data
                </p>
              </div>
              <p className="text-sm md:text-base opacity-80">2019 — Actualidad</p>
            </div>

            <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
              <SectionBlock
                title="Contexto"
                items={[
                  "Productos digitales para distintos clientes, principalmente sector financiero (Banco de Occidente y Banco Popular).",
                  "Trabajo interdisciplinar con negocio, tecnología, diseño y data.",
                ]}
              />
              <SectionBlock
                title="Rol y responsabilidades"
                items={[
                  "Diseño end-to-end (de descubrimiento a entrega).",
                  "Research y validación de prototipos centrados en el usuario.",
                  "Análisis y monitoreo de métricas de experiencia y conversión.",
                  "Traducción de hallazgos en oportunidades y accionables.",
                ]}
              />
              <SectionBlock
                title="Práctica (lo que hago)"
                items={[
                  "Co-creación y facilitación con equipos.",
                  "Diseño de flujos, prototipos y UI.",
                  "Pruebas con usuarios + VOC.",
                  "Triangulación cualitativa + cuantitativa.",
                ]}
              />
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6">
              <p className="text-sm opacity-70">Impacto</p>
              <ul className="mt-3 space-y-2 text-sm md:text-base">
                <li>• Optimización de flujos críticos mediante evidencia (research + métricas).</li>
                <li>• Lectura continua de experiencia para priorizar mejoras y sostener decisiones de producto.</li>
                <li>• Alineación diseño–negocio–tech con entregables accionables (insights, oportunidades, validaciones).</li>
              </ul>
            </div>
          </article>

          <article id="davivienda" className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-950/40 p-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold">Banco Davivienda — Grupo Bolívar</h3>
                <p className="mt-1 text-sm opacity-70">
                  Diseñador UX · Gestor de Proyectos de Innovación
                </p>
              </div>
              <p className="text-sm md:text-base opacity-80">2017 — 2019</p>
            </div>

            <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
              <SectionBlock
                title="Contexto"
                items={[
                  "Área de innovación del Grupo Bolívar.",
                  "Soluciones digitales para Banco Davivienda y unidades del grupo.",
                ]}
              />
              <SectionBlock
                title="Rol y responsabilidades"
                items={[
                  "Diseño de experiencia (UX) para iniciativas digitales.",
                  "Innovación incremental y organizacional.",
                  "Articulación entre diseño, negocio y tecnología.",
                ]}
              />
              <SectionBlock
                title="Qué hacía"
                items={[
                  "Ideación y conceptualización.",
                  "Diseño de flujos y prototipos.",
                  "Talleres de co-creación.",
                  "Validación temprana con stakeholders/usuarios.",
                ]}
              />
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6">
              <p className="text-sm opacity-70">Aprendizajes clave</p>
              <p className="mt-3 text-sm md:text-base">
                Consolidé una base metodológica fuerte en innovación y diseño centrado en el usuario,
                fortaleciendo visión sistémica y capacidad para estructurar problemas complejos en entornos corporativos.
              </p>
            </div>
          </article>
        </section>

        <section className="mt-14 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-950/40 p-8">
          <h2 className="text-2xl font-bold">Cómo se conecta con lo que hago hoy</h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300 text-base md:text-lg">
            Hoy diseño experiencias digitales donde investigación, métricas y diseño se integran para
            construir productos claros, útiles y medibles. Me siento especialmente cómodo en contextos
            corporativos donde el diseño se conecta con negocio, tecnología y toma de decisiones.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/#proyectos"
              className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition font-semibold text-white"
            >
              Ver proyectos
            </Link>
            <Link
              href="/"
              className="px-5 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition font-semibold"
            >
              Volver al inicio
            </Link>
          </div>
        </section>
      </main>
    </div>
    </div>
  )
}

function SectionBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6">
      <p className="text-sm opacity-70">{title}</p>
      <ul className="mt-3 space-y-2 text-sm md:text-base">
        {items.map((x) => (
          <li key={x}>• {x}</li>
        ))}
      </ul>
    </div>
  )
}
