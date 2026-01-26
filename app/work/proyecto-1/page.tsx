import React from "react";
import Link from "next/link";

export default function Proyecto1Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 space-y-24">

      {/* NAV */}
      <Link href="/work" className="text-sm opacity-70 hover:opacity-100">
        ← Volver a proyectos
      </Link>

      {/* ========================= */}
      {/* EXECUTIVE SUMMARY */}
      {/* ========================= */}
      <section className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold leading-tight">
            Research a escala: entrevistas sintéticas y user personas para segmentos bancarios
          </h1>
          <p className="text-lg opacity-80">
            Diseñé un sistema de generación de usuarios sintéticos y arquetipos para escalar
            el research cualitativo en segmentos complejos, manteniendo trazabilidad,
            control de calidad y conexión con data real.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div><strong>Rol:</strong> UX / Research</div>
          <div><strong>Contexto:</strong> Banca digital</div>
          <div><strong>Segmentos:</strong> +50, policías, maestros, militares</div>
          <div><strong>Enfoque:</strong> Research Ops + IA aplicada</div>
        </div>

        <div className="border rounded-xl p-6 space-y-3 bg-neutral-900/30">
          <h2 className="font-semibold">Resultado</h2>
          <p className="opacity-80">
            Un sistema de research sintético que permite explorar comportamientos,
            necesidades y fricciones de segmentos estratégicos, apoyando la creación
            de ofertas de valor, experiencias y lenguaje más cercano para estos usuarios.
          </p>
        </div>
      </section>

      {/* ========================= */}
      {/* CONTEXTO */}
      {/* ========================= */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Contexto</h2>
        <p>
          El banco trabaja con segmentos altamente específicos como usuarios +50,
          policías, maestros y militares. Realizar research profundo y constante
          con cada uno de ellos era costoso, lento y difícil de escalar.
        </p>
        <p>
          A pesar de contar con grandes volúmenes de data, comentarios y estudios,
          estos insumos se encontraban dispersos y no siempre se traducían en
          herramientas accionables para diseño, negocio e innovación.
        </p>
      </section>

      {/* ========================= */}
      {/* PROBLEMA */}
      {/* ========================= */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Problema</h2>
        <ul className="list-disc pl-6 space-y-2 opacity-90">
          <li>Dificultad para escalar research cualitativo por segmento.</li>
          <li>Conocimiento fragmentado en informes, dashboards y documentos.</li>
          <li>Poca agilidad para generar hipótesis y nuevas propuestas de valor.</li>
          <li>Riesgo de diseñar desde supuestos y no desde evidencia.</li>
        </ul>
      </section>

      {/* ========================= */}
      {/* OBJETIVO */}
      {/* ========================= */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Objetivo</h2>
        <p>
          Diseñar un sistema que permitiera sintetizar múltiples fuentes de información
          para generar entrevistas simuladas, user personas y líneas de trabajo claras,
          manteniendo coherencia con la data real del banco y el conocimiento experto interno.
        </p>
      </section>

      {/* ========================= */}
      {/* INSUMOS */}
      {/* ========================= */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Insumos utilizados</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Comentarios de encuestas (NPS, SUS, CES).</li>
          <li>Entrevistas reales del segmento +50.</li>
          <li>Data de transacciones monetarias y no monetarias.</li>
          <li>Registros de errores y fricciones en canales digitales.</li>
          <li>Métricas históricas de experiencia.</li>
          <li>Informes de consumo nacional.</li>
          <li>Investigaciones de segmentos y estudios universitarios.</li>
          <li>Documentación interna del proyecto de user personas.</li>
        </ul>
      </section>

      {/* ========================= */}
      {/* SOLUCIÓN */}
      {/* ========================= */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Solución</h2>
        <p>
          Construí un framework de research sintético que recibe múltiples fuentes
          documentales y de data para generar:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Entrevistas sintéticas caracterizadas por segmento.</li>
          <li>User personas con necesidades, miedos, deseos y dolores.</li>
          <li>Insights accionables para diseño, negocio y estrategia.</li>
          <li>Líneas guía sobre cómo abordar la experiencia y la oferta de valor.</li>
        </ul>

        <div className="border rounded-xl h-56 flex items-center justify-center opacity-60">
          Aquí puedes poner después: diagrama del sistema, flujo o ejemplos de outputs.
        </div>
      </section>

      {/* ========================= */}
      {/* CALIDAD Y CONTROL */}
      {/* ========================= */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Control de calidad</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Iteraciones continuas con nueva documentación.</li>
          <li>Revisión humana por equipo del banco y áreas de experiencia.</li>
          <li>Contraste constante con data existente.</li>
          <li>Ajustes de prompts, estructura y salidas.</li>
        </ul>
      </section>

      {/* ========================= */}
      {/* IMPACTO */}
      {/* ========================= */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Impacto</h2>
        <p>
          Aunque no se planteó como un proyecto de impacto inmediato en KPI,
          el sistema se diseñó como habilitador estratégico para:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Creación de nuevas ofertas de valor y experiencias.</li>
          <li>Mejor adecuación del lenguaje y propuestas por segmento.</li>
          <li>Mayor cercanía con necesidades reales.</li>
          <li>Incrementar adopción, permanencia y transaccionalidad.</li>
        </ul>
      </section>

      {/* ========================= */}
      {/* APRENDIZAJES */}
      {/* ========================= */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Aprendizajes</h2>
        <p>
          Escalar research no es automatizar decisiones. Es diseñar sistemas que
          amplifiquen el conocimiento, mantengan evidencia y ayuden a los equipos
          a pensar mejor, no solo más rápido.
        </p>
      </section>

    </main>
  );
}