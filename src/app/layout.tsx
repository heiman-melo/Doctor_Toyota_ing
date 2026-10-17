import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Doctor Toyota | Especialistas Automotrices Toyota - Hilux, Prado, Land Cruiser',
  description:
    'Taller mecánico especializado exclusivo en la marca Toyota. Diagnóstico con escáner oficial GTS+ Techstream, mantenimiento preventivo y mecánica pesada con repuestos 100% genuinos.',
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#121212',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}>
      <head>
        <script src="https://cdn.tailwindcss.com" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                darkMode: 'class',
                theme: {
                  extend: {
                    colors: {
                      toyotaRed: '#EB0A1E',
                      carbon: '#121212',
                      metallic: '#2A2A2A',
                    }
                  }
                }
              }
            `,
          }}
        />
      </head>
      <body className="bg-[#121212] text-white min-h-screen overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
