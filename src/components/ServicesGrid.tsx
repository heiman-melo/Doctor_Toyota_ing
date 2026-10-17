'use client';

import React, { useState } from 'react';
import { TOYOTA_SERVICES, WORKSHOP_INFO } from '../data/toyotaData';
import { Cpu, Compass, Wrench, Gauge, Disc, ShieldCheck, CheckCircle2, Clock, MessageCircle } from './Icons';

export default function ServicesGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Electrónica', 'Tracción & Tren', 'Preventivo', 'Mecánica Mayor'];

  const filteredServices =
    selectedCategory === 'Todos'
      ? TOYOTA_SERVICES
      : TOYOTA_SERVICES.filter((s) => s.category === selectedCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu size={26} className="text-[#EB0A1E]" />;
      case 'Compass':
        return <Compass size={26} className="text-[#EB0A1E]" />;
      case 'Wrench':
        return <Wrench size={26} className="text-[#EB0A1E]" />;
      case 'Gauge':
        return <Gauge size={26} className="text-[#EB0A1E]" />;
      case 'Disc':
        return <Disc size={26} className="text-[#EB0A1E]" />;
      case 'ShieldCheck':
      default:
        return <ShieldCheck size={26} className="text-[#EB0A1E]" />;
    }
  };

  const getServiceWhatsAppUrl = (serviceTitle: string) => {
    const text = `Hola Doctor Toyota, deseo consultar detalles y agendar una cita para el servicio: *${serviceTitle}*. ¿Qué disponibilidad tienen esta semana?`;
    return `https://wa.me/${WORKSHOP_INFO.phoneClean}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="servicios" className="py-16 sm:py-24 bg-[#121212] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C1C1C] border border-[#2B2B2B] text-gray-300 text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EB0A1E]" />
            <span>Ingeniería Japonesa Certificada</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Catálogo de Servicios Especializados Toyota
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400">
            Procedimientos calibrados bajo especificaciones de fábrica. Protegemos el valor residual, el confort y la
            confiabilidad legendaria de tu Toyota.
          </p>

          {/* Category Filter Pills (Mobile Scrollable) */}
          <div className="mt-8 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#EB0A1E] text-white shadow-lg shadow-[#EB0A1E]/30'
                    : 'bg-[#1C1C1C] text-gray-400 hover:text-white hover:bg-[#252525] border border-[#2A2A2A]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Responsive Grid (1 col on mobile, 2 cols on tablet, 3 cols on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-gradient-to-b from-[#1A1A1A] to-[#141414] rounded-2xl border border-[#2A2A2A] hover:border-[#EB0A1E]/60 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-[#EB0A1E]/10 group"
            >
              <div>
                {/* Header Icon + Badge */}
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="w-13 h-13 p-3.5 rounded-xl bg-[#242424] border border-[#333333] group-hover:bg-[#2A2A2A] group-hover:scale-105 transition-all">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#EB0A1E]/15 text-[#EB0A1E] border border-[#EB0A1E]/30 shrink-0">
                    {service.badge}
                  </span>
                </div>

                {/* Title & Short Description */}
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-red-400 transition-colors leading-tight mb-2">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4">
                  {service.shortDesc}
                </p>

                {/* Features Checklist */}
                <div className="border-t border-[#262626] pt-4 mb-5">
                  <span className="text-xs font-semibold text-gray-300 mb-2.5 block">Incluye en el taller:</span>
                  <ul className="space-y-2">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                        <CheckCircle2 size={14} className="text-[#EB0A1E] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Specs & Action Button */}
              <div className="border-t border-[#262626] pt-4">
                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} className="text-[#EB0A1E]" />
                    <span>{service.estimatedTime}</span>
                  </div>
                  <span className="text-[11px] text-gray-500 font-medium">{service.recommendedKm}</span>
                </div>

                <a
                  href={getServiceWhatsAppUrl(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#222222] hover:bg-[#EB0A1E] text-gray-200 hover:text-white text-xs sm:text-sm font-bold border border-[#333333] hover:border-transparent transition-all shadow-sm"
                >
                  <MessageCircle size={16} />
                  <span>Agendar este Servicio</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
