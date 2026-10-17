'use client';

import React, { useState } from 'react';
import { MessageCircle, X } from './Icons';
import { WORKSHOP_INFO } from '../data/toyotaData';

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${WORKSHOP_INFO.phoneClean}?text=${encodeURIComponent(
    'Hola Doctor Toyota! Quisiera hacer una consulta rápida sobre mi vehículo Toyota.'
  )}`;

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex items-end flex-col gap-2 pointer-events-none">
      {/* Tooltip Popup */}
      {showTooltip && (
        <div className="pointer-events-auto bg-[#181818] border border-[#2F2F2F] shadow-2xl rounded-2xl p-3 max-w-[240px] sm:max-w-xs animate-bounce duration-1000">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-xs font-bold text-white">Especialista en Línea</span>
            </div>
            <button
              type="button"
              onClick={() => setShowTooltip(false)}
              className="text-gray-400 hover:text-white p-0.5"
              aria-label="Cerrar notificación"
            >
              <X size={14} />
            </button>
          </div>
          <p className="text-[11px] text-gray-300 mt-1 leading-tight">
            ¿Tienes dudas con tu Toyota? Escríbenos y te asesoramos en minutos.
          </p>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp a Doctor Toyota"
        className="pointer-events-auto group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#25D366] to-[#128C7E] text-white shadow-2xl shadow-green-500/40 hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <MessageCircle size={32} className="group-hover:rotate-6 transition-transform" />
        <span className="sr-only">WhatsApp Doctor Toyota</span>
      </a>
    </div>
  );
}
