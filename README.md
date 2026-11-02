# 🚗 Doctor Toyota — Especialistas Automotrices

Sitio web oficial para **Doctor Toyota**, taller mecánico de alta ingeniería especializado exclusivamente en vehículos Toyota (Hilux, Land Cruiser, Prado, Fortuner, 4Runner, RAV4, Corolla, FJ Cruiser).

---

## 🛠️ Tecnologías y Arquitectura

- **Framework:** [Next.js](https://nextjs.org/) (App Router) con TypeScript.
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) (diseño dark automotriz industrial: `#121212`, `#2A2A2A`, `#EB0A1E`).
- **Diseño Mobile-First:** 100% responsivo para smartphone, tablet y escritorio.
- **Iconos:** Librería modular SVG adaptada a Lucide.
- **Integraciones:** Generador inteligente de cotizaciones con mensajes directos a WhatsApp y apertura de mapas (Google Maps / Waze).

---

## 📂 Estructura del Proyecto

```text
├── public/                 # Recursos estáticos
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css     # Estilos globales y paleta Doctor Toyota
│   │   ├── layout.tsx      # RootLayout con viewport y SEO
│   │   └── page.tsx        # Página principal ensamblada
│   ├── components/         # Módulos de interfaz de Doctor Toyota
│   │   ├── ContactSection.tsx     # Ubicación, mapa, horarios y agendamiento
│   │   ├── DiagnosticSteps.tsx    # Método transparente en 3 pasos
│   │   ├── Footer.tsx             # Pie de página y disclaimer legal
│   │   ├── Hero.tsx               # Encabezado principal y badges de confianza
│   │   ├── Icons.tsx              # Componentes de iconografía SVG
│   │   ├── ModelsSection.tsx      # Catálogo de modelos Toyota y motorizaciones
│   │   ├── Navbar.tsx             # Barra de navegación con menú móvil
│   │   ├── ServiceCalculator.tsx  # Cotizador interactivo en tiempo real
│   │   ├── ServicesGrid.tsx       # Catálogo filtrable de servicios
│   │   └── WhatsAppFloat.tsx      # Botón flotante persistente de contacto
│   └── data/
│       └── toyotaData.ts   # Modelos, especificaciones, servicios y datos de contacto
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 Inicio Rápido

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.
