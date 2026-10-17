'use client';

import React, { useState } from 'react';
import { WORKSHOP_INFO, TOYOTA_MODELS } from '../data/toyotaData';
import { MapPin, Phone, Clock, Calendar, Send, CheckCircle2, MessageCircle } from './Icons';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    model: TOYOTA_MODELS[0].name,
    year: '2022',
    service: 'Mantenimiento Preventivo y Escaneo Techstream',
    preferredDate: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const generateWhatsAppUrl = () => {
    const text = `Hola *Doctor Toyota*, deseo agendar un turno formal en el taller:
    
👤 *Nombre:* ${formData.name || 'Cliente'} 
📱 *Teléfono:* ${formData.phone || 'Por confirmar'}
🚗 *Vehículo:* ${formData.model} (Año ${formData.year})
🔧 *Servicio requerido:* ${formData.service}
📅 *Fecha preferida:* ${formData.preferredDate || 'Lo más pronto posible'}
📝 *Observaciones:* ${formData.notes || 'Ninguna'}

Agradezco confirmar si tienen espacio disponible en el horario indicado.`;

    return `https://wa.me/${WORKSHOP_INFO.phoneClean}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contacto" className="py-16 sm:py-24 bg-[#141414] relative border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F1F1F] text-[#EB0A1E] text-xs font-bold uppercase tracking-wider mb-3 border border-[#333]">
            <MapPin size={14} />
            <span>Sede Principal & Agendamiento</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Agenda tu Turno en el Taller
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400">
            Estamos ubicados estratégicamente para brindarte atención rápida. Completa el formulario o contáctanos por
            WhatsApp para reservar el elevador de tu Toyota.
          </p>
        </div>

        {/* 2-Column Responsive Layout: Schedule & Location on Left (5 cols), Form on Right (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
          {/* Left Column: Workshop Info & Map (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Workshop Address Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#1A1A1A] border border-[#2E2E2E] shadow-xl">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <MapPin size={20} className="text-[#EB0A1E]" />
                <span>Ubicación del Taller</span>
              </h3>

              <p className="text-sm text-gray-300 font-semibold">{WORKSHOP_INFO.address}</p>
              <p className="text-xs text-gray-400 mt-1">{WORKSHOP_INFO.city}</p>

              {/* Map Preview Simulation */}
              <div className="mt-4 rounded-xl overflow-hidden border border-[#333333] relative h-48 bg-[#1f2421] flex flex-col items-center justify-center p-4 text-center group">
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#EB0A1E_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="w-12 h-12 rounded-full bg-[#EB0A1E] flex items-center justify-center text-white shadow-xl shadow-[#EB0A1E]/50 z-10 mb-2 animate-bounce">
                  <MapPin size={24} />
                </div>
                <span className="text-white text-xs font-bold z-10 bg-black/80 px-3 py-1 rounded-full border border-gray-700">
                  Doctor Toyota — Taller Central
                </span>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(WORKSHOP_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 z-10 text-xs text-[#EB0A1E] font-bold bg-[#141414]/90 px-3 py-1.5 rounded-lg border border-[#3A3A3A] hover:bg-[#EB0A1E] hover:text-white transition-colors"
                >
                  Abrir en Google Maps / Waze ↗
                </a>
              </div>

              {/* Call & WhatsApp direct buttons */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`tel:${WORKSHOP_INFO.phoneClean}`}
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#242424] hover:bg-[#2A2A2A] text-white text-xs font-bold border border-[#3A3A3A] transition-colors"
                >
                  <Phone size={16} className="text-[#EB0A1E]" />
                  <span>{WORKSHOP_INFO.phone}</span>
                </a>

                <a
                  href={`https://wa.me/${WORKSHOP_INFO.phoneClean}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] text-xs font-bold border border-[#25D366]/30 transition-colors"
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp Directo</span>
                </a>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#1A1A1A] border border-[#2E2E2E] shadow-xl">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Clock size={20} className="text-[#EB0A1E]" />
                <span>Horarios de Atención</span>
              </h3>

              <div className="space-y-3">
                {WORKSHOP_INFO.workingHours.map((wh, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between pb-2.5 border-b border-[#292929] last:border-0 last:pb-0">
                    <span className="text-xs font-bold text-gray-300">{wh.days}</span>
                    <span className="text-xs text-gray-400 font-medium">{wh.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Appointment Form (7 Cols) */}
          <div className="lg:col-span-7 bg-[#1A1A1A] p-6 sm:p-8 rounded-2xl border border-[#2E2E2E] shadow-2xl">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#2C2C2C]">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Calendar size={20} className="text-[#EB0A1E]" />
                  <span>Formulario de Citas para Taller</span>
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  Reserva tu espacio para evitar filas y asegurar repuestos genuinos disponibles.
                </p>
              </div>
            </div>

            {submitted ? (
              <div className="p-8 text-center bg-[#141414] rounded-xl border border-emerald-500/40 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={36} />
                </div>
                <h4 className="text-xl font-bold text-white">¡Solicitud Registrada con Éxito!</h4>
                <p className="text-sm text-gray-300 mt-2 max-w-md mx-auto">
                  Hemos guardado los datos para tu <strong className="text-white">{formData.model}</strong>. Un asesor
                  del taller te contactará en breve al <strong className="text-white">{formData.phone}</strong>.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-bold shadow-lg shadow-green-900/30"
                  >
                    <MessageCircle size={18} />
                    <span>Confirmar Inmediato por WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="py-3 px-5 rounded-xl bg-[#242424] text-gray-300 hover:text-white text-xs font-semibold"
                  >
                    Nuevo Formulario
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* 2 Cols: Nombre & Telefono */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="client-name" className="block text-xs font-semibold text-gray-300 mb-1">
                      Nombre y Apellido <span className="text-[#EB0A1E]">*</span>
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      required
                      placeholder="Ej: Carlos Ramírez"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#121212] border border-[#333333] focus:border-[#EB0A1E] text-white text-sm rounded-xl px-3.5 py-3 outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="client-phone" className="block text-xs font-semibold text-gray-300 mb-1">
                      Teléfono Celular / WhatsApp <span className="text-[#EB0A1E]">*</span>
                    </label>
                    <input
                      id="client-phone"
                      type="tel"
                      required
                      placeholder="Ej: 312 456 7890"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#121212] border border-[#333333] focus:border-[#EB0A1E] text-white text-sm rounded-xl px-3.5 py-3 outline-none"
                    />
                  </div>
                </div>

                {/* 2 Cols: Modelo & Año */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="appointment-model" className="block text-xs font-semibold text-gray-300 mb-1">
                      Modelo Toyota <span className="text-[#EB0A1E]">*</span>
                    </label>
                    <select
                      id="appointment-model"
                      value={formData.model}
                      onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                      className="w-full bg-[#121212] border border-[#333333] focus:border-[#EB0A1E] text-white text-sm rounded-xl px-3.5 py-3 outline-none"
                    >
                      {TOYOTA_MODELS.map((m) => (
                        <option key={m.id} value={m.name} className="bg-[#1A1A1A]">
                          {m.name}
                        </option>
                      ))}
                      <option value="Otro Modelo Toyota" className="bg-[#1A1A1A]">
                        Otro Modelo Toyota
                      </option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="appointment-year" className="block text-xs font-semibold text-gray-300 mb-1">
                      Año del Vehículo
                    </label>
                    <input
                      id="appointment-year"
                      type="number"
                      min="1990"
                      max="2026"
                      placeholder="2022"
                      value={formData.year}
                      onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                      className="w-full bg-[#121212] border border-[#333333] focus:border-[#EB0A1E] text-white text-sm rounded-xl px-3.5 py-3 outline-none"
                    />
                  </div>
                </div>

                {/* 2 Cols: Servicio & Fecha */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="appointment-service" className="block text-xs font-semibold text-gray-300 mb-1">
                      Servicio Solicitado
                    </label>
                    <select
                      id="appointment-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#121212] border border-[#333333] focus:border-[#EB0A1E] text-white text-sm rounded-xl px-3.5 py-3 outline-none"
                    >
                      <option value="Diagnóstico Electrónico Techstream" className="bg-[#1A1A1A]">
                        Diagnóstico Electrónico Techstream
                      </option>
                      <option value="Mantenimiento Preventivo (Aceite/Filtros)" className="bg-[#1A1A1A]">
                        Mantenimiento Preventivo (Aceite/Filtros)
                      </option>
                      <option value="Mantenimiento 4x4 y Transmisión" className="bg-[#1A1A1A]">
                        Mantenimiento 4x4 y Transmisión
                      </option>
                      <option value="Inyección Diésel D-4D / Gasolina" className="bg-[#1A1A1A]">
                        Inyección Diésel D-4D / Gasolina
                      </option>
                      <option value="Frenos y Control de Estabilidad" className="bg-[#1A1A1A]">
                        Frenos y Control de Estabilidad
                      </option>
                      <option value="Suspensión y Tren Delantero" className="bg-[#1A1A1A]">
                        Suspensión y Tren Delantero
                      </option>
                      <option value="Mecánica Mayor / Ajuste de Motor" className="bg-[#1A1A1A]">
                        Mecánica Mayor / Ajuste de Motor
                      </option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="appointment-preferred-date" className="block text-xs font-semibold text-gray-300 mb-1">
                      Fecha Tentativa Deseada
                    </label>
                    <input
                      id="appointment-preferred-date"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full bg-[#121212] border border-[#333333] focus:border-[#EB0A1E] text-white text-sm rounded-xl px-3.5 py-3 outline-none"
                    />
                  </div>
                </div>

                {/* Observaciones */}
                <div>
                  <label htmlFor="appointment-notes" className="block text-xs font-semibold text-gray-300 mb-1">
                    Describe la falla, síntoma o requerimiento (Opcional)
                  </label>
                  <textarea
                    id="appointment-notes"
                    rows={2}
                    placeholder="Ej: El carro perdió fuerza en subida, o deseo revisión antes de un viaje largo..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-[#121212] border border-[#333333] focus:border-[#EB0A1E] text-white text-sm rounded-xl px-3.5 py-2.5 outline-none resize-none"
                  />
                </div>

                {/* Submit Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#EB0A1E] hover:bg-[#c90819] text-white font-bold text-sm shadow-xl shadow-[#EB0A1E]/30 transition-all active:scale-[0.99]"
                  >
                    <Send size={16} />
                    <span>Enviar Solicitud de Cita</span>
                  </button>

                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-lg transition-all"
                    title="Enviar directamente por WhatsApp"
                  >
                    <MessageCircle size={18} />
                    <span>WhatsApp Directo</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
