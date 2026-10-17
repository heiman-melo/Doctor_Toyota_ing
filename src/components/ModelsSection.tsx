'use client';

import React, { useState } from 'react';
import { TOYOTA_MODELS, WORKSHOP_INFO } from '../data/toyotaData';
import { Car, ChevronRight, MessageCircle } from './Icons';

export default function ModelsSection() {
  const [selectedFilter, setSelectedFilter] = useState<'Todos' | '4x4 & Camionetas' | 'SUVs & Todoterreno' | 'Sedán & Crossover'>('Todos');

  const filteredModels =
    selectedFilter === 'Todos'
      ? TOYOTA_MODELS
      : TOYOTA_MODELS.filter((m) => m.category === selectedFilter);

  const getModelWhatsAppUrl = (modelName: string) => {
    const text = `Hola Doctor Toyota, tengo un *${modelName}* y quisiera saber más sobre mantenimientos preventivos o agendar un escaneo para este modelo.`;
    return `https://wa.me/${WORKSHOP_INFO.phoneClean}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="modelos" className="py-16 sm:py-24 bg-[#161616] relative border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#202020] text-[#EB0A1E] text-xs font-bold uppercase tracking-wider mb-3 border border-[#333]">
            <Car size={14} />
            <span>Flota & Modelos Especializados</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Especialistas Exclusivos en Toda la Línea Toyota
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400">
            Contamos con la herramienta de calibración y los manuales de fábrica para cada plataforma: desde pickups de
            trabajo pesado y leyendas del todoterreno hasta híbridos de última generación.
          </p>

          {/* Model Filter Pills */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
            {(['Todos', '4x4 & Camionetas', 'SUVs & Todoterreno', 'Sedán & Crossover'] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedFilter(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedFilter === cat
                    ? 'bg-[#EB0A1E] text-white shadow-md shadow-[#EB0A1E]/30'
                    : 'bg-[#1E1E1E] text-gray-400 hover:text-white border border-[#2B2B2B]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Grid: 1 col on mobile, 2 cols on tablet, 4 cols on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {filteredModels.map((model) => (
            <div
              key={model.id}
              className="bg-[#1C1C1C] rounded-2xl border border-[#2E2E2E] overflow-hidden flex flex-col justify-between hover:border-[#EB0A1E]/60 transition-all duration-300 hover:shadow-xl hover:shadow-[#EB0A1E]/10 group"
            >
              <div>
                {/* Image & Badge Header */}
                <div className="relative h-44 w-full bg-[#121212] overflow-hidden">
                  <img
                    src={model.image}
                    alt={model.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-transparent to-black/30" />
                  <span className="absolute top-3 right-3 text-[10px] font-extrabold px-2.5 py-0.5 rounded-md bg-[#EB0A1E] text-white tracking-wider uppercase shadow-md">
                    {model.badge}
                  </span>
                  <span className="absolute bottom-2 left-3 text-[11px] font-semibold text-gray-300 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded">
                    {model.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5">
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                    {model.name}
                  </h3>
                  <p className="text-xs text-[#EB0A1E] font-medium mt-0.5">{model.tag}</p>

                  <p className="text-xs text-gray-400 mt-2.5 line-clamp-2 leading-relaxed">
                    {model.description}
                  </p>

                  {/* Engines Badges */}
                  <div className="mt-3.5 pt-3 border-t border-[#2A2A2A]">
                    <span className="text-[11px] text-gray-500 font-semibold block mb-1.5 uppercase tracking-wider">
                      Motorizaciones habituales:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {model.engines.map((eng, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] bg-[#141414] text-gray-300 px-2 py-0.5 rounded border border-[#2F2F2F]"
                        >
                          {eng}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-4 sm:p-5 pt-0">
                <a
                  href={getModelWhatsAppUrl(model.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#242424] hover:bg-[#EB0A1E] text-gray-200 hover:text-white text-xs font-bold border border-[#333333] hover:border-transparent transition-all"
                >
                  <MessageCircle size={14} />
                  <span>Cotizar para {model.name.replace('Toyota ', '')}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
