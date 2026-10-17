'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Calendar, ShieldCheck } from './Icons';
import { WORKSHOP_INFO } from '../data/toyotaData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Cotizador Rápido', href: '#cotizador' },
    { name: 'Modelos Toyota', href: '#modelos' },
    { name: 'Método Diagnóstico', href: '#diagnostico' },
    { name: 'Ubicación & Citas', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#121212]/95 backdrop-blur-md border-b border-[#2A2A2A] shadow-xl py-3'
          : 'bg-[#121212]/80 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-br from-[#EB0A1E] to-[#990000] p-0.5 flex items-center justify-center shadow-lg shadow-[#EB0A1E]/30 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#121212] rounded-[7px] flex items-center justify-center">
                <span className="text-[#EB0A1E] font-black text-xl tracking-tighter">DT</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-extrabold text-base sm:text-lg md:text-xl tracking-tight leading-none flex items-center gap-1.5">
                DOCTOR <span className="text-[#EB0A1E]">TOYOTA</span>
              </span>
              <span className="text-[10px] sm:text-xs text-gray-400 font-medium tracking-wider uppercase mt-0.5">
                Especialistas Automotrices
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-[#2A2A2A]/50 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${WORKSHOP_INFO.phoneClean}`}
              className="flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-white py-2 px-3 rounded-lg border border-[#2A2A2A] hover:border-gray-500 transition-colors"
              title="Llamada directa al taller"
            >
              <Phone size={15} className="text-[#EB0A1E]" />
              <span>{WORKSHOP_INFO.phone}</span>
            </a>
            <a
              href="#cotizador"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#EB0A1E] hover:bg-[#c90819] text-white text-sm font-bold tracking-wide shadow-md shadow-[#EB0A1E]/30 hover:shadow-lg hover:shadow-[#EB0A1E]/50 transition-all transform hover:-translate-y-0.5"
            >
              <Calendar size={16} />
              <span>Agendar Cita</span>
            </a>
          </div>

          {/* Mobile Action & Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${WORKSHOP_INFO.phoneClean}`}
              aria-label="Llamar al taller"
              className="p-2.5 rounded-lg bg-[#2A2A2A] text-white hover:bg-[#3A3A3A] transition-colors border border-[#3A3A3A]"
            >
              <Phone size={18} className="text-[#EB0A1E]" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-[#2A2A2A] text-gray-200 hover:text-white hover:bg-[#3A3A3A] transition-colors border border-[#3A3A3A] focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Menú principal"
            >
              {mobileMenuOpen ? <X size={22} className="text-[#EB0A1E]" /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#181818] border-b border-[#2A2A2A] px-4 pt-4 pb-6 mt-3 shadow-2xl transition-all animate-fadeIn">
          <div className="flex flex-col space-y-1">
            <div className="px-3 py-1.5 mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider border-b border-[#2A2A2A]">
              Navegación Rápida
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-base font-medium text-gray-200 hover:bg-[#2A2A2A] hover:text-[#EB0A1E] transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-gray-500 text-xs">→</span>
              </a>
            ))}
          </div>

          {/* Mobile Buttons */}
          <div className="mt-5 pt-4 border-t border-[#2A2A2A] flex flex-col gap-3">
            <a
              href="#cotizador"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#EB0A1E] active:bg-[#c90819] text-white font-bold text-base shadow-lg shadow-[#EB0A1E]/30"
            >
              <Calendar size={18} />
              <span>Agendar Cita en Taller</span>
            </a>

            <div className="flex items-center justify-center gap-2 text-xs text-gray-400 py-1">
              <ShieldCheck size={14} className="text-emerald-400" />
              <span>Atención Oficial y Repuestos Genuinos Toyota</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
