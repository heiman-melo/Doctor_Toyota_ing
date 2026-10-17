'use client';

import React from 'react';
import { ShieldCheck, Cpu, MessageCircle, ChevronRight, Award, Clock } from './Icons';
import { WORKSHOP_INFO } from '../data/toyotaData';

export default function Hero() {
  const whatsappUrl = `https://wa.me/${WORKSHOP_INFO.phoneClean}?text=${encodeURIComponent(
    'Hola Doctor Toyota! Quisiera solicitar un diagnóstico especializado para mi vehículo Toyota.'
  )}`;

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-[#121212]">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-[#EB0A1E]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-0 w-72 h-72 bg-red-600/10 rounded-full blur-[90px] pointer-events-none" />

      {/* Industrial Grid Lines Effect */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F1F1F] border border-[#2E2E2E] shadow-inner mb-6 sm:mb-8 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-[#EB0A1E]" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-gray-200">
              Especialistas Exclusivos en la Marca Toyota
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15] sm:leading-[1.1]">
            Especialistas Certificados en la Salud de tu{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB0A1E] via-red-500 to-[#FF4D4D] inline-block">
              Toyota
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 sm:mt-7 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Mantenimiento preventivo, diagnóstico por computadora y mecánica especializada para vehículos Toyota de
            origen japonés. Hilux, Prado, Land Cruiser, Fortuner, 4Runner, Corolla y RAV4.
          </p>

          {/* Call to Actions (Mobile First Buttons) */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 max-w-md sm:max-w-none mx-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#EB0A1E] hover:bg-[#c90819] text-white text-base font-bold shadow-xl shadow-[#EB0A1E]/30 hover:shadow-[#EB0A1E]/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle size={20} />
              <span>Solicitar Diagnóstico por WhatsApp</span>
            </a>

            <a
              href="#servicios"
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#1C1C1C] hover:bg-[#262626] text-gray-200 hover:text-white text-base font-semibold border border-[#333333] transition-all hover:border-gray-500"
            >
              <span>Ver Servicios Especializados</span>
              <ChevronRight size={18} className="text-gray-400" />
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-10 sm:mt-12 pt-8 border-t border-[#222222] grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 text-left">
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#171717] border border-[#262626]">
              <div className="p-2.5 rounded-lg bg-[#EB0A1E]/10 text-[#EB0A1E] shrink-0">
                <ShieldCheck size={22} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Repuestos 100% Genuinos</h4>
                <p className="text-xs text-gray-400">Garantía escrita y piezas originales</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#171717] border border-[#262626]">
              <div className="p-2.5 rounded-lg bg-[#EB0A1E]/10 text-[#EB0A1E] shrink-0">
                <Cpu size={22} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Scanner Oficial GTS+</h4>
                <p className="text-xs text-gray-400">Software Toyota Techstream Japón</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#171717] border border-[#262626]">
              <div className="p-2.5 rounded-lg bg-[#EB0A1E]/10 text-[#EB0A1E] shrink-0">
                <Award size={22} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Atención Transparente</h4>
                <p className="text-xs text-gray-400">Reporte en video antes de reparar</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {WORKSHOP_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#1E1E1E] to-[#141414] border border-[#2A2A2A] text-center hover:border-[#EB0A1E]/50 transition-colors"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#EB0A1E] mt-1">{stat.label}</div>
              <div className="text-[11px] sm:text-xs text-gray-400 mt-0.5">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
