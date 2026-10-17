'use client';

import React, { useState } from 'react';
import { TOYOTA_MODELS, TOYOTA_SERVICES, WORKSHOP_INFO } from '../data/toyotaData';
import { MessageCircle, Clock, ShieldCheck, CheckCircle2, Sparkles, Car } from './Icons';

export default function ServiceCalculator() {
  const [selectedModelId, setSelectedModelId] = useState(TOYOTA_MODELS[0].id);
  const [selectedServiceId, setSelectedServiceId] = useState(TOYOTA_SERVICES[0].id);
  const [selectedMileage, setSelectedMileage] = useState('40,000 km - 60,000 km');
  const [vehicleYear, setVehicleYear] = useState('2021');
  const [symptomNotes, setSymptomNotes] = useState('');

  const selectedModel = TOYOTA_MODELS.find((m) => m.id === selectedModelId) || TOYOTA_MODELS[0];
  const selectedService = TOYOTA_SERVICES.find((s) => s.id === selectedServiceId) || TOYOTA_SERVICES[0];

  const mileageOptions = [
    'Menos de 20,000 km',
    '20,000 km - 40,000 km',
    '40,000 km - 60,000 km',
    '60,000 km - 100,000 km',
    'Más de 100,000 km (Servicio Mayor)',
  ];

  const generateWhatsAppMessage = () => {
    const text = `Hola *Doctor Toyota*, deseo cotizar y agendar servicio:
    
🚗 *Vehículo:* ${selectedModel.name} (Año ${vehicleYear})
⚙️ *Kilometraje aprox.:* ${selectedMileage}
🔧 *Servicio requerido:* ${selectedService.title}
📝 *Síntoma / Detalle:* ${symptomNotes.trim() ? symptomNotes.trim() : 'Mantenimiento preventivo / revisión general'}

Por favor confírmenme disponibilidad de turno y valor estimado.`;

    return `https://wa.me/${WORKSHOP_INFO.phoneClean}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="cotizador" className="py-16 sm:py-24 bg-[#151515] relative border-y border-[#262626]">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#EB0A1E]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#202020] text-[#EB0A1E] text-xs font-bold tracking-wider uppercase mb-3 border border-[#333]">
            <Sparkles size={14} />
            <span>Cotizador Automotriz Rápido</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Calcula y Agenda tu Servicio Toyota en 1 Clic
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400">
            Selecciona tu modelo y el trabajo que necesitas. Te generamos un resumen técnico listo para coordinar tu cita
            directo por WhatsApp con el jefe de taller.
          </p>
        </div>

        {/* 2-Column Responsive Layout: Inputs on Left, Real-Time Summary on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Form Configuration Card (7 Cols) */}
          <div className="lg:col-span-7 bg-[#1A1A1A] p-5 sm:p-7 rounded-2xl border border-[#2D2D2D] shadow-xl">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-5 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-[#EB0A1E] flex items-center justify-center text-white text-xs font-black">
                1
              </span>
              <span>Datos del Vehículo y Servicio</span>
            </h3>

            <div className="space-y-4 sm:space-y-5">
              {/* Modelo Toyota */}
              <div>
                <label htmlFor="toyota-model-select" className="block text-xs sm:text-sm font-semibold text-gray-300 mb-1.5">
                  1. Modelo Toyota <span className="text-[#EB0A1E]">*</span>
                </label>
                <div className="relative">
                  <select
                    id="toyota-model-select"
                    value={selectedModelId}
                    onChange={(e) => setSelectedModelId(e.target.value)}
                    className="w-full bg-[#121212] border border-[#383838] focus:border-[#EB0A1E] focus:ring-1 focus:ring-[#EB0A1E] text-white text-sm sm:text-base rounded-xl px-4 py-3.5 appearance-none cursor-pointer outline-none transition-colors"
                  >
                    {TOYOTA_MODELS.map((model) => (
                      <option key={model.id} value={model.id} className="bg-[#1A1A1A] text-white">
                        {model.name} — ({model.category})
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">
                    ▼
                  </div>
                </div>
              </div>

              {/* Año y Kilometraje (2 Cols on sm+) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="toyota-year-select" className="block text-xs sm:text-sm font-semibold text-gray-300 mb-1.5">
                    2. Año del Vehículo
                  </label>
                  <select
                    id="toyota-year-select"
                    value={vehicleYear}
                    onChange={(e) => setVehicleYear(e.target.value)}
                    className="w-full bg-[#121212] border border-[#383838] focus:border-[#EB0A1E] text-white text-sm sm:text-base rounded-xl px-3.5 py-3 outline-none"
                  >
                    {Array.from({ length: 27 }, (_, i) => 2026 - i).map((year) => (
                      <option key={year} value={year} className="bg-[#1A1A1A]">
                        {year}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="toyota-mileage-select" className="block text-xs sm:text-sm font-semibold text-gray-300 mb-1.5">
                    3. Kilometraje Aproximado
                  </label>
                  <select
                    id="toyota-mileage-select"
                    value={selectedMileage}
                    onChange={(e) => setSelectedMileage(e.target.value)}
                    className="w-full bg-[#121212] border border-[#383838] focus:border-[#EB0A1E] text-white text-sm sm:text-base rounded-xl px-3.5 py-3 outline-none"
                  >
                    {mileageOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#1A1A1A]">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Servicio Requerido */}
              <div>
                <label htmlFor="toyota-service-select" className="block text-xs sm:text-sm font-semibold text-gray-300 mb-1.5">
                  4. Servicio o Tipo de Trabajo <span className="text-[#EB0A1E]">*</span>
                </label>
                <div className="relative">
                  <select
                    id="toyota-service-select"
                    value={selectedServiceId}
                    onChange={(e) => setSelectedServiceId(e.target.value)}
                    className="w-full bg-[#121212] border border-[#383838] focus:border-[#EB0A1E] focus:ring-1 focus:ring-[#EB0A1E] text-white text-sm sm:text-base rounded-xl px-4 py-3.5 appearance-none cursor-pointer outline-none transition-colors"
                  >
                    {TOYOTA_SERVICES.map((srv) => (
                      <option key={srv.id} value={srv.id} className="bg-[#1A1A1A] text-white">
                        {srv.title} [{srv.badge}]
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">
                    ▼
                  </div>
                </div>
              </div>

              {/* Notas adicionales */}
              <div>
                <label htmlFor="toyota-symptom-notes" className="block text-xs sm:text-sm font-semibold text-gray-300 mb-1.5">
                  5. Síntomas observados o requerimiento puntual (Opcional)
                </label>
                <textarea
                  id="toyota-symptom-notes"
                  rows={2}
                  placeholder="Ej: Luz Check Engine parpadea, ruido metálico al frenar, toca hacer cambio de correas..."
                  value={symptomNotes}
                  onChange={(e) => setSymptomNotes(e.target.value)}
                  className="w-full bg-[#121212] border border-[#383838] focus:border-[#EB0A1E] text-white text-sm rounded-xl px-3.5 py-3 outline-none resize-none placeholder-gray-500"
                />
              </div>
            </div>
          </div>

          {/* Real-Time Summary & CTA (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#1F1F1F] to-[#161616] p-5 sm:p-7 rounded-2xl border-2 border-[#EB0A1E]/40 shadow-2xl relative overflow-hidden">
            {/* Top Badge */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#2C2C2C]">
              <div className="flex items-center gap-2 text-xs font-bold text-[#EB0A1E] uppercase tracking-wider">
                <Car size={16} />
                <span>Resumen Técnico de Cita</span>
              </div>
              <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#EB0A1E]/20 text-[#EB0A1E] border border-[#EB0A1E]/30">
                Respuesta en &lt; 15 min
              </span>
            </div>

            {/* Selected Vehicle Card Header */}
            <div className="flex items-center gap-3.5 mb-4 p-3 rounded-xl bg-[#141414] border border-[#2B2B2B]">
              <div className="w-12 h-12 rounded-lg bg-[#242424] overflow-hidden shrink-0 flex items-center justify-center border border-[#383838]">
                <img
                  src={selectedModel.image}
                  alt={selectedModel.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">{selectedModel.name}</h4>
                <p className="text-xs text-gray-400">Año {vehicleYear} • {selectedMileage}</p>
              </div>
            </div>

            {/* Service Details Box */}
            <div className="space-y-3 mb-5">
              <div>
                <span className="text-xs text-gray-400 font-medium">Servicio Seleccionado:</span>
                <p className="text-sm font-bold text-white leading-snug mt-0.5">{selectedService.title}</p>
              </div>

              {/* Specs & Time */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#2A2A2A]">
                <div className="p-2.5 rounded-lg bg-[#141414] border border-[#262626]">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-0.5">
                    <Clock size={13} className="text-[#EB0A1E]" />
                    <span>Tiempo Taller</span>
                  </div>
                  <span className="text-xs font-bold text-gray-200">{selectedService.estimatedTime}</span>
                </div>

                <div className="p-2.5 rounded-lg bg-[#141414] border border-[#262626]">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-0.5">
                    <ShieldCheck size={13} className="text-emerald-400" />
                    <span>Garantía</span>
                  </div>
                  <span className="text-xs font-bold text-gray-200">100% Repuestos Genuinos</span>
                </div>
              </div>

              {/* Service inclusions */}
              <div className="pt-2">
                <span className="text-xs text-gray-400 font-semibold mb-2 block">Puntos Clave del Servicio:</span>
                <ul className="space-y-1.5">
                  {selectedService.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle2 size={13} className="text-[#EB0A1E] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Instant WhatsApp CTA Button */}
            <a
              href={generateWhatsAppMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 py-4 px-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20ba59] hover:to-[#0f7a6d] text-white font-extrabold text-sm sm:text-base shadow-xl shadow-green-900/20 active:scale-[0.99] transition-all"
            >
              <MessageCircle size={20} />
              <span>Agendar por WhatsApp con estos Datos</span>
            </a>

            <p className="text-[11px] text-gray-400 text-center mt-3">
              Al hacer clic se abrirá WhatsApp con los detalles de tu Toyota precargados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
