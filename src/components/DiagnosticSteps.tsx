'use client';

import React from 'react';
import { DIAGNOSTIC_STEPS, WORKSHOP_INFO } from '../data/toyotaData';
import { Cpu, Camera, ShieldCheck, CheckCircle2, MessageCircle, Sparkles } from './Icons';

export default function DiagnosticSteps() {
  const getStepIcon = (icon: string) => {
    switch (icon) {
      case 'Cpu':
        return <Cpu size={28} className="text-[#EB0A1E]" />;
      case 'Camera':
        return <Camera size={28} className="text-[#EB0A1E]" />;
      case 'ShieldCheck':
      default:
        return <ShieldCheck size={28} className="text-[#EB0A1E]" />;
    }
  };

  const whatsappUrl = `https://wa.me/${WORKSHOP_INFO.phoneClean}?text=${encodeURIComponent(
    'Hola Doctor Toyota! Quisiera agendar un diagnóstico bajo el método de 3 pasos transparentes.'
  )}`;

  return (
    <section id="diagnostico" className="py-16 sm:py-24 bg-[#121212] relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C1C1C] border border-[#2E2E2E] text-gray-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles size={14} className="text-[#EB0A1E]" />
            <span>Transparencia & Confianza</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            El Método «Diagnóstico Doctor Toyota»
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400">
            Eliminamos la incertidumbre de los talleres tradicionales. No tocamos ni un solo tornillo sin que hayas visto
            exactamente el motivo en video de alta definición.
          </p>
        </div>

        {/* Steps Grid: 1 col on mobile, 3 cols on tablet & desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
          {DIAGNOSTIC_STEPS.map((item, index) => (
            <div
              key={item.step}
              className="bg-gradient-to-b from-[#1A1A1A] to-[#141414] rounded-2xl border border-[#2D2D2D] p-6 sm:p-7 relative flex flex-col justify-between hover:border-[#EB0A1E]/50 transition-all shadow-xl group"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-xl bg-[#242424] border border-[#333333] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getStepIcon(item.icon)}
                  </div>
                  <span className="text-3xl sm:text-4xl font-black text-[#2D2D2D] group-hover:text-[#EB0A1E]/30 transition-colors font-mono">
                    {item.step}
                  </span>
                </div>

                {/* Step Subtitle / Tag */}
                <span className="text-[11px] font-bold text-[#EB0A1E] uppercase tracking-wider block mb-1">
                  Paso {index + 1}
                </span>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-400 mb-4 font-medium leading-relaxed">
                  {item.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-gray-300 mb-6 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Deliverables / Checklist */}
              <div className="pt-4 border-t border-[#262626]">
                <span className="text-xs font-semibold text-gray-400 block mb-2">Lo que recibes:</span>
                <ul className="space-y-2">
                  {item.deliverables.map((deliv, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle2 size={14} className="text-[#EB0A1E] shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-10 sm:mt-12 bg-gradient-to-r from-[#1C1C1C] via-[#221012] to-[#1C1C1C] p-6 sm:p-8 rounded-2xl border border-[#EB0A1E]/40 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#EB0A1E]/20 text-[#EB0A1E] flex items-center justify-center shrink-0">
              <ShieldCheck size={28} />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Garantía Escrita en Repuestos y Mano de Obra
              </h4>
              <p className="text-xs sm:text-sm text-gray-400 mt-0.5">
                Si no quedas 100% satisfecho con el trabajo o el diagnóstico, reexaminamos tu vehículo sin costo adicional.
              </p>
            </div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#EB0A1E] hover:bg-[#c90819] text-white text-sm font-bold shadow-lg shadow-[#EB0A1E]/30 transition-all"
          >
            <MessageCircle size={18} />
            <span>Agendar Diagnóstico</span>
          </a>
        </div>
      </div>
    </section>
  );
}
