'use client';

import React from 'react';
import Link from 'next/link';
import { WORKSHOP_INFO, TOYOTA_MODELS } from '../data/toyotaData';
import { ShieldCheck, Phone, MapPin, Clock, MessageCircle, ChevronRight } from './Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D0D0D] text-gray-400 border-t border-[#222222] pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-12 border-b border-[#1F1F1F]">
          {/* Brand Info (Col 1 & 2 on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group inline-flex">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#EB0A1E] to-[#990000] p-0.5 flex items-center justify-center shadow-lg shadow-[#EB0A1E]/30">
                <div className="w-full h-full bg-[#121212] rounded-[7px] flex items-center justify-center">
                  <span className="text-[#EB0A1E] font-black text-xl tracking-tighter">DT</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-extrabold text-lg sm:text-xl tracking-tight leading-none">
                  DOCTOR <span className="text-[#EB0A1E]">TOYOTA</span>
                </span>
                <span className="text-[10px] sm:text-xs text-gray-400 font-medium tracking-wider uppercase mt-0.5">
                  Especialistas Automotrices
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-gray-400 max-w-sm leading-relaxed">
              Taller de alta ingeniería automotriz especializado exclusivamente en la marca Toyota. Diagnóstico
              electrónico con escáner oficial GTS+, mantenimiento de sistemas 4x4 y mecánica pesada con repuestos 100%
              genuinos.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs text-gray-300 font-medium">
              <ShieldCheck size={16} className="text-[#EB0A1E]" />
              <span>Garantía escrita de 6 a 12 meses en cada intervención.</span>
            </div>
          </div>

          {/* Quick Links (Col 3) */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-[#222222] pb-2">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#servicios" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight size={13} className="text-[#EB0A1E]" />
                  <span>Servicios Especializados</span>
                </a>
              </li>
              <li>
                <a href="#cotizador" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight size={13} className="text-[#EB0A1E]" />
                  <span>Cotizador en Línea</span>
                </a>
              </li>
              <li>
                <a href="#modelos" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight size={13} className="text-[#EB0A1E]" />
                  <span>Modelos Atendidos</span>
                </a>
              </li>
              <li>
                <a href="#diagnostico" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight size={13} className="text-[#EB0A1E]" />
                  <span>Método de 3 Pasos</span>
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight size={13} className="text-[#EB0A1E]" />
                  <span>Ubicación & Citas</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Featured Models (Col 4) */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-[#222222] pb-2">
              Modelos Toyota
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {TOYOTA_MODELS.slice(0, 5).map((m) => (
                <li key={m.id}>
                  <a href="#modelos" className="hover:text-[#EB0A1E] transition-colors">
                    {m.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="#modelos" className="text-[#EB0A1E] font-semibold hover:underline text-xs">
                  + Ver todos los modelos →
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours (Col 5) */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-[#222222] pb-2">
              Atención
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2">
                <MapPin size={15} className="text-[#EB0A1E] shrink-0 mt-0.5" />
                <span>{WORKSHOP_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={15} className="text-[#EB0A1E] shrink-0" />
                <a href={`tel:${WORKSHOP_INFO.phoneClean}`} className="text-white hover:underline">
                  {WORKSHOP_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle size={15} className="text-[#25D366] shrink-0" />
                <a
                  href={`https://wa.me/${WORKSHOP_INFO.phoneClean}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline"
                >
                  WhatsApp: +57 312 450 8920
                </a>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <Clock size={15} className="text-gray-400 shrink-0 mt-0.5" />
                <span className="text-gray-400">Lun - Vie: 7:30 AM - 6:00 PM | Sáb: 8:00 AM - 2:30 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs text-gray-500">
          <p className="max-w-3xl leading-relaxed">
            <strong>Aviso de Independencia:</strong> Doctor Toyota es un taller mecánico automotriz independiente y
            especializado en el mantenimiento y reparación de vehículos de la marca Toyota. Los nombres Toyota, Hilux,
            Prado, Land Cruiser, Fortuner, 4Runner, Corolla, RAV4 y sus logotipos son marcas registradas de Toyota Motor
            Corporation. Su uso en este sitio web es estrictamente descriptivo con fines de compatibilidad técnica.
          </p>

          <div className="shrink-0 text-gray-400">
            © {currentYear} <span className="text-white font-semibold">Doctor Toyota</span>. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
