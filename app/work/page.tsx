import React from "react";
import Link from "next/link";

const projects = [
    {
      href: "/work/proyecto-1",
      title: "Research a escala (Personas + entrevistas sintéticas)",
      desc: "Diseñé un sistema para generar insights y arquetipos por segmento con trazabilidad y control de calidad.",
      year: "2025",
      tags: ["Research Ops", "IA aplicada", "Calidad/QA"],
      metric: "↓ tiempo de discovery",
      bullets: ["Framework de prompts + plantillas", "Evidencia y trazabilidad por hallazgo", "Validación con equipo/usuario"],
    },
    {
      href: "/work/proyecto-2",
      title: "Automatización de informes de métricas UX",
      desc: "Convertí el reporte mensual en un flujo repetible: métricas + VOC + hallazgos accionables.",
      year: "2025",
      tags: ["Data UX", "Dashboards", "VOC"],
      metric: "↓ tiempo de reporting",
      bullets: ["Estandarización de indicadores", "Conexión cuantitativo + cualitativo", "Salida lista para stakeholders"],
    },
    {
      href: "/work/proyecto-3",
      title: "Innovación WOW (Behavioral design)",
      desc: "Iniciativas trimestrales con foco en valor, innovación y novedad en canales digitales.",
      year: "2025",
      tags: ["Behavioral design", "Experimentación", "UX/UI"],
      metric: "↑ adopción",
      bullets: ["Dolores reales del mes → soluciones", "Benchmark + prototipado", "Priorización por impacto/esfuerzo"],
    },
  ];

export default function WorkPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20 space-y-10">
        <Link
  href="/"
  className="inline-flex items-center gap-2 text-sm opacity-70 hover:opacity-100 mb-8 transition border border-zinc-700 px-3 py-2 rounded-lg"
>
  ← Volver al inicio
</Link>
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Trabajo</h1>
        <p className="opacity-80">
          Casos de estudio enfocados en producto, banca y decisiones basadas en data.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            className="block border rounded-xl p-6 hover:bg-neutral-900/30 transition"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold">{p.title}</h2>
                <p className="text-sm opacity-75 mt-1">{p.desc}</p>
                <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
  {p.tags.map((t) => (
    <span key={t} className="border rounded-full px-2 py-1 opacity-80">
      {t}
    </span>
  ))}
  <span className="ml-auto text-xs opacity-70">{p.metric}</span>
</div>
              </div>
              <span className="text-sm opacity-60">{p.year}</span>
            </div>

            <ul className="list-disc pl-6 mt-4 space-y-1 text-sm opacity-85">
              {p.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </Link>
        ))}
      </section>
    </main>
  );
}