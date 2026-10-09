# Diferencias entre React y Next.js

Este documento describe las diferencias clave encontradas al portar el proyecto de React a Next.js.

## 🔄 Diferencias Principales

### 1. Enrutamiento

#### React (react-router-dom)
```tsx
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';

// Configuración en App.tsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/:topicId/:subtopicId" element={<TopicPage />} />
  </Routes>
</BrowserRouter>

// Navegación
<Link to="/ruta">Ir a ruta</Link>
const navigate = useNavigate();
navigate('/ruta');
const location = useLocation();
```

#### Next.js (App Router)
```tsx
// Rutas basadas en archivos: src/app/[topicId]/[subtopicId]/page.tsx
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

// Navegación
<Link href="/ruta">Ir a ruta</Link>
const router = useRouter();
router.push('/ruta');
const pathname = usePathname();
```

**Diferencias:**
- React usa configuración manual de rutas en código
- Next.js usa estructura de archivos (`page.tsx` define rutas)
- React: `useLocation` → Next.js: `usePathname`
- React: `useNavigate` → Next.js: `useRouter().push()`
- React: `<Link to="...">` → Next.js: `<Link href="...">`

---

### 2. Componentes Cliente vs Servidor

#### React
Todos los componentes corren en el cliente por defecto. No existe distinción.

#### Next.js
```tsx
'use client'; // Necesario para componentes que usan hooks de React o interactividad

import { useState, useEffect } from 'react';

export default function ComponenteCliente() {
  const [count, setCount] = useState(0);
  // ...
}
```

**Diferencias:**
- React: Todo es cliente por defecto
- Next.js: Por defecto los componentes son del servidor (Server Components)
- Next.js: Necesita `'use client'` para usar hooks (`useState`, `useEffect`, etc.)
- Next.js: Server Components permiten renderizado en servidor para mejor SEO y performance

---

### 3. Layouts

#### React
```tsx
// Layout manual en App.tsx o con componentes wrapper
function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <main>
        <AppRoutes />
      </main>
    </BrowserRouter>
  );
}
```

#### Next.js
```tsx
// src/app/layout.tsx (automático para todas las páginas)
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
```

**Diferencias:**
- React: Layout se maneja manualmente en componentes
- Next.js: `layout.tsx` envuelve automáticamente todas las páginas
- Next.js: Layouts anidados (puedes tener layout por carpeta)
- Next.js: El layout mantiene el estado entre navegaciones

---

### 4. Links con Material UI

#### React
```tsx
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

// Funciona directamente
<Button component={Link} to="/ruta">
  Botón
</Button>
```

#### Next.js
```tsx
import Link from 'next/link';
import { Button } from '@mui/material';

// Opción 1: Enviar Link como componente NO funciona
// ❌ <Button component={Link} href="/ruta"> NO FUNCIONA

// Opción 2: Enviar Link envolviendo
<Link href="/ruta" style={{ textDecoration: 'none', color: 'inherit' }}>
  <Button>Botón</Button>
</Link>

// Opción 3: Usar onClick con router
const router = useRouter();
<Button onClick={() => router.push('/ruta')}>
  Botón
</Button>
```

**Diferencias:**
- React: `component={Link}` funciona con react-router
- Next.js: No puedes pasar `Link` de Next.js como `component` a Material UI
- Next.js: Debes envolver el componente o usar `router.push()`

---

### 5. Metadata y SEO

#### React
```tsx
// Configuración manual en index.html
// O librerías como react-helmet
<Helmet>
  <title>React App</title>
  <meta name="description" content="Descripción" />
</Helmet>
```

#### Next.js
```tsx
// src/app/layout.tsx
export const metadata: Metadata = {
  title: "Next.js Teoría",
  description: "Sistema de aprendizaje de Next.js",
};
```

**Diferencias:**
- React: Manual en `index.html` o con librerías adicionales
- Next.js: `export const metadata` automático y optimizado para SEO
- Next.js: Soporta metadata dinámica por página

---

### 6. Estilos

#### React
```tsx
// CSS Modules
import styles from './App.module.css';
<div className={styles.page}>

// O CSS tradicional
import './App.css';
```

#### Next.js
```tsx
// CSS Modules
import styles from './page.module.css';
<div className={styles.page}>

// Global CSS en layout.tsx
import './globals.css';
```

**Diferencias:**
- React: CSS Modules y CSS tradicional
- Next.js: CSS Modules + Global CSS + Tailwind CSS integrado
- Next.js: CSS global solo en `layout.tsx` o `page.tsx` del root

---

### 7. Optimización de Imágenes

#### React
```tsx
import img from './image.png';
<img src={img} alt="description" />
```

#### Next.js
```tsx
import Image from 'next/image';
<Image
  src="/image.png"
  alt="description"
  width={500}
  height={300}
  priority
/>
```

**Diferencias:**
- React: Imágenes estáticas
- Next.js: Componente `Image` optimizado automáticamente
- Next.js: Lazy loading automático, optimización de formatos, responsive

---

### 8. Componentes que NO se usan en Next.js (de React)

❌ **NO se usan en Next.js:**
- `BrowserRouter` (reemplazado por App Router)
- `Routes` (reemplazado por estructura de archivos)
- `Route` (reemplazado por archivos `page.tsx`)
- `useLocation` (reemplazado por `usePathname`)
- `useNavigate` (reemplazado por `useRouter`)
- `Link` de react-router (reemplazado por `Link` de Next.js)
- `Navigate` (redirecciones se manejan diferente)
- Configuración manual de rutas en código

✅ **SÍ se usan en Next.js:**
- Componentes de React (`useState`, `useEffect`, etc.)
- Hooks de React (con `'use client'`)
- Lógica de componentes (misma que React)
- Material UI (adaptado para Next.js)
- TypeScript (igual que React)

---

### 9. Estructura de Carpetas

#### React
```
src/
├── components/
├── pages/
├── routes/
├── data/
├── App.tsx
├── main.tsx
└── index.html
```

#### Next.js (App Router)
```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── [topicId]/
│       └── [subtopicId]/
│           └── page.tsx
├── components/
├── data/
└── public/
```

**Diferencias:**
- React: Estructura flexible basada en preferencias
- Next.js: Estructura basada en sistema de archivos (file-based routing)
- Next.js: `app/` es la carpeta principal del App Router
- Next.js: Rutas dinámicas con `[param]` en nombres de carpetas

---

### 10. Build y Despliegue

#### React
```bash
npm run build  # Crea carpeta dist/
# Solo archivos estáticos
```

#### Next.js
```bash
npm run build  # Crea carpeta .next/
# Optimización automática, SSR, SSG, ISR
npm run start  # Servidor de producción
```

**Diferencias:**
- React: Solo archivos estáticos (SPA)
- Next.js: Soporta SSR (Server-Side Rendering), SSG (Static Site Generation), ISR (Incremental Static Regeneration)
- Next.js: Optimización automática de código, imágenes, fuentes
- Next.js: Mejor SEO por defecto

---

## 📝 Resumen de Cambios al Portear

1. **Cambiar imports de routing:**
   - `react-router-dom` → `next/navigation`
   - `useLocation` → `usePathname`
   - `useNavigate` → `useRouter().push()`
   - `Link` de react-router → `Link` de Next.js

2. **Agregar `'use client'`** a componentes que usan hooks de React

3. **Crear estructura de rutas basada en archivos** en lugar de configuración manual

4. **Adaptar Links de Material UI** para Next.js (no usar `component={Link}`)

5. **Usar `layout.tsx`** para layouts compartidos

6. **Usar `export const metadata`** para SEO en lugar de `index.html`

7. **Ajustar rutas de importación** según la estructura de carpetas de Next.js

---

## 🎯 Ventajas de Next.js sobre React

- ✅ Mejor SEO (Server-Side Rendering)
- ✅ Mejor performance (optimización automática)
- ✅ Enrutamiento basado en archivos (más sencillo)
- ✅ Optimización de imágenes y fuentes automática
- ✅ API Routes integradas
- ✅ Soporte para Server Components (menos JavaScript enviado al cliente)
- ✅ Mejor DX (Developer Experience) con convenciones

## ⚠️ Consideraciones

- ❌ Curva de aprendizaje inicial (nuevos conceptos como Server Components)
- ❌ Más restricciones (no todo funciona igual que en React puro)
- ❌ Algunas librerías de React necesitan adaptación para Next.js
- ❌ Debugging puede ser más complejo con SSR

---

## 📚 Recursos

- [Next.js Documentation](https://nextjs.org/docs)
- [React Router vs Next.js](https://nextjs.org/docs/app/building-your-application/routing/colocation)
- [Client vs Server Components](https://nextjs.org/docs/app/building-your-application/rendering/client-and-server-components)
