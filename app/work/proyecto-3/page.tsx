import React from "react";
import Link from "next/link";

export default function Proyecto3Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 space-y-24">
      <Link href="/work" className="text-sm opacity-70 hover:opacity-100">
        ← Volver a proyectos
      </Link>

      <section className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold leading-tight">
            Innovación WOW: iniciativas trimestrales guiadas por data + behavioral design
          </h1>
          <p className="text-lg opacity-80">
            Diseñé iniciativas WOW para mejorar la experiencia en app y portal, partiendo de dolores
            reales del mes (métricas + VOC) y traduciendo hallazgos en funcionalidades y micro-interacciones
            con foco en adopción, claridad y confianza.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div><strong>Rol:</strong> UX/UI</div>
          <div><strong>Cadencia:</strong> Trimestral</div>
          <div><strong>Canales:</strong> App + portal</div>
          <div><strong>Enfoque:</strong> Behavioral design</div>
        </div>

        <div className="border rounded-xl p-6 bg-neutral-900/30 space-y-2">
          <h2 className="font-semibold">Outcome</h2>
          <p className="opacity-80">
            Backlog de iniciativas priorizadas y propuestas de experiencia (incluyendo referentes y racional)
            listas para prototipar, testear e implementar.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Proceso</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Lectura mensual: indicadores + errores + eventos + VOC.</li>
          <li>Identificación de dolores dominantes y causas probables.</li>
          <li>Ideación con lentes de behavioral design (fricción, confianza, claridad).</li>
          <li>Benchmark y referentes (fintech/global).</li>
          <li>Priorización impacto/esfuerzo y definición de criterios de éxito.</li>
        </ol>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Ejemplos de iniciativas</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Mensajes/micro-animaciones contextuales en el home/dashboard.</li>
          <li>Mejoras de claridad en saldos/movimientos con tooltips inteligentes.</li>
          <li>Acciones rápidas personalizadas para reducir esfuerzo cognitivo.</li>
        </ul>

        <div className="border rounded-xl h-56 flex items-center justify-center opacity-60">
          Aquí puedes poner después: mockups, prototipos o capturas de referentes.
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Aprendizajes</h2>
        <p>
          La innovación que escala no es “ideas cool”, sino un sistema que conecta señales
          (data + voz) con intervenciones pequeñas, medibles y con alta adopción.
        </p>
      </section>
    </main>
  );
}