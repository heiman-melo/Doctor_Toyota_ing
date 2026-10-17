import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServiceCalculator from '../components/ServiceCalculator';
import ServicesGrid from '../components/ServicesGrid';
import ModelsSection from '../components/ModelsSection';
import DiagnosticSteps from '../components/DiagnosticSteps';
import ContactSection from '../components/ContactSection';
import WhatsAppFloat from '../components/WhatsAppFloat';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Doctor Toyota | Especialistas Automotrices Toyota - Hilux, Prado, Land Cruiser',
  description:
    'Taller automotriz especializado en la marca Toyota. Diagnóstico computarizado con scanner oficial Techstream GTS+, mantenimiento preventivo, sistemas 4x4 y mecánica pesada con repuestos 100% genuinos.',
  keywords: [
    'Doctor Toyota',
    'Taller Toyota',
    'Mecánica Toyota',
    'Scanner Techstream',
    'Repuestos Toyota Genuinos',
    'Mantenimiento Hilux',
    'Taller Prado',
    'Taller Land Cruiser',
    'Inyección Diésel D-4D',
    'Mantenimiento 4x4 Toyota',
  ],
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#121212] text-white flex flex-col overflow-x-hidden selection:bg-[#EB0A1E] selection:text-white">
      {/* Header / Navbar Responsivo */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* 1. Hero Section Adaptable */}
        <Hero />

        {/* 2. Módulo Calculadora / Cotizador de Servicio Rápido */}
        <ServiceCalculator />

        {/* 3. Catálogo de Servicios Especializados */}
        <ServicesGrid />

        {/* 4. Sección Modelos que Atendemos */}
        <ModelsSection />

        {/* 5. Sección de Confianza y Transparencia ("El Diagnóstico Doctor Toyota") */}
        <DiagnosticSteps />

        {/* 6. Ubicación, Horarios y Formulario de Agendamiento */}
        <ContactSection />
      </main>

      {/* Botón Flotante Persistente de WhatsApp */}
      <WhatsAppFloat />

      {/* Footer Completo */}
      <Footer />
    </div>
  );
}
