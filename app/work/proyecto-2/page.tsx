import React from "react";
import Link from "next/link";

export default function Proyecto2Page() {
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
            Automatización de informes UX: métricas + voz del cliente en un flujo mensual
          </h1>
          <p className="text-lg opacity-80">
            Convertí el reporte mensual de experiencia en un sistema repetible y consistente
            que integra métricas (SUS, NPS, CES), comportamiento, errores y comentarios para
            producir hallazgos accionables listos para stakeholders.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div><strong>Rol:</strong> UX / Data</div>
          <div><strong>Canales:</strong> App + portal</div>
          <div><strong>Frecuencia:</strong> Mensual</div>
          <div><strong>Enfoque:</strong> Métricas + VOC + Storytelling</div>
        </div>

        <div className="border rounded-xl p-6 space-y-3 bg-neutral-900/30">
          <h2 className="font-semibold">Resultado</h2>
          <p className="opacity-80">
            Un pipeline de reporting que reduce trabajo manual, estandariza indicadores
            y conecta datos cuantitativos con señales cualitativas para mejorar la toma
            de decisiones y la priorización.
          </p>
        </div>
      </section>

      {/* ========================= */}
      {/* CONTEXTO */}
      {/* ========================= */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Contexto</h2>
        <p>
          El equipo necesitaba reportar el estado de la experiencia con frecuencia mensual,
          combinando métricas y voz del cliente. El proceso era altamente manual, con riesgos
          de inconsistencia en definiciones, demoras y baja trazabilidad del “por qué”.
        </p>
      </section>

      {/* ========================= */}
      {/* PROBLEMA */}
      {/* ========================= */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Problema</h2>
        <ul className="list-disc pl-6 space-y-2 opacity-90">
          <li>Demasiado tiempo invertido en armar el informe cada mes.</li>
          <li>Variación en criterios (definiciones, cortes, comparaciones).</li>
          <li>Lectura difícil para stakeholders: muchos números, poca narrativa.</li>
          <li>Desconexión entre métricas y dolores reales (comentarios / fricciones).</li>
        </ul>
      </section>

      {/* ========================= */}
      {/* OBJETIVO */}
      {/* ========================= */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Objetivo</h2>
        <p>
          Diseñar un sistema de reporting mensual que:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Estandarice indicadores (SUS, NPS, CES) y su lectura.</li>
          <li>Integre comportamiento, errores, eventos y transaccionalidad.</li>
          <li>Conecte cuantitativo + cualitativo (VOC) en hallazgos accionables.</li>
          <li>Genere salidas listas para comunicación interna.</li>
        </ul>
      </section>

      {/* ========================= */}
      {/* INSUMOS */}
      {/* ========================= */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Insumos utilizados</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Métricas de experiencia: SUS, NPS, CES.</li>
          <li>Comentarios abiertos de usuarios (VOC).</li>
          <li>Errores y eventos del canal.</li>
          <li>Transacciones monetarias y no monetarias.</li>
          <li>Históricos para comparación y tendencia.</li>
        </ul>
      </section>

      {/* ========================= */}
      {/* SOLUCIÓN */}
      {/* ========================= */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Solución</h2>
        <p>
          Estructuré el informe como un flujo repetible con capas claras:
        </p>

        <div className="grid gap-4">
          <div className="border rounded-xl p-5">
            <h3 className="font-semibold">1) Preparación y estandarización</h3>
            <p className="text-sm opacity-80 mt-1">
              Definiciones fijas de indicadores, cortes temporales y comparaciones para evitar variación mes a mes.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold">2) Lectura cuantitativa</h3>
            <p className="text-sm opacity-80 mt-1">
              Tendencias, funnels, tasas de error y comportamiento para detectar fricción y oportunidades.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold">3) Lectura cualitativa (VOC)</h3>
            <p className="text-sm opacity-80 mt-1">
              Agrupación de comentarios en categorías y hallazgos, con verbatims representativos.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold">4) Síntesis accionable</h3>
            <p className="text-sm opacity-80 mt-1">
              Principales dolores del mes + recomendaciones + oportunidades priorizadas.
            </p>
          </div>
        </div>

        <div className="border rounded-xl h-56 flex items-center justify-center opacity-60">
          Aquí puedes poner después: captura del dashboard / tabla de indicadores / slide del informe.
        </div>
      </section>

      {/* ========================= */}
      {/* IMPACTO */}
      {/* ========================= */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Impacto</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Reducción del esfuerzo manual de armado mensual.</li>
          <li>Mayor consistencia en lectura y comunicación de métricas.</li>
          <li>Mejor conexión entre números y dolores reales del usuario.</li>
          <li>Base sólida para priorización e iniciativas (incl. WOW).</li>
        </ul>
        <p className="opacity-75 text-sm">
          *Los impactos pueden cuantificarse luego midiendo horas invertidas, tiempos de entrega y adopción del reporte por stakeholders.
        </p>
      </section>

      {/* ========================= */}
      {/* APRENDIZAJES */}
      {/* ========================= */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Aprendizajes</h2>
        <p>
          Un buen informe no es una tabla bonita: es una narrativa que conecta señales
          (data + voz) con decisiones. La estandarización libera tiempo para analizar y actuar.
        </p>
      </section>

    </main>
  );
}