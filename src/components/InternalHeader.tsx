'use client';

// PATRÓN ESTÁNDAR: Importaciones de Material UI
import { Box, Tabs, Tab, useTheme, useMediaQuery, IconButton, Menu, MenuItem } from '@mui/material';

// PATRÓN ESTÁNDAR: Importación de useState
import { useState } from 'react';

// PATRÓN ESTÁNDAR: Importaciones de Next.js
// Link SIEMPRE se usa para navegación interna
// usePathname SIEMPRE se usa para obtener la URL actual
// useRouter SIEMPRE se usa para navegar programáticamente
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

// Importación de iconos desde material icons previamente instalados
import { Menu as MenuIcon } from '@mui/icons-material';

// Importación de datos aqui se importan los datos del MENU
import { reactTopics } from '../data/reactTopics';

// PATRÓN ESTÁNDAR: Definición de props que se pasaran al componenete que renderizara el menu
interface InternalHeaderProps {
  currentTopic?: string; // ID del tema actual (opcional)
}

// PATRÓN ESTÁNDAR: Componente funcional con props funcion o componenete genberal de estes archivo
export default function InternalHeader({ currentTopic }: InternalHeaderProps) {
  // PATRÓN ESTÁNDAR: useTheme para acceder al tema de material UI
  const theme = useTheme();

  // PATRÓN ESTÁNDAR: useMediaQuery para responsive material UI
  // down('sm') significa "pantallas más pequeñas que small"
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // PATRÓN ESTÁNDAR: useState para controlar el menú móvil
  // (estado) anchorEl guarda la referencia al elemento del menú
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // PATRÓN ESTÁNDAR: usePathname para saber la URL actual (Next.js)
  const pathname = usePathname();

  // PATRÓN ESTÁNDAR: useRouter para navegar programáticamente (Next.js)
  const router = useRouter();

  // Buscar el tema actual en los datos
  const currentTopicData = reactTopics.find(t => t.id === currentTopic);

  // Handler para abrir el menú móvil
  const handleMenuOpen = (evt: React.MouseEvent<HTMLElement>) => {
    const { currentTarget } = evt;
    setAnchorEl(currentTarget);
  };

  // Handler para cerrar el menú móvil
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Handler para cambiar de tab en desktop
  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    void event;
    router.push(newValue);
  };

  // Si no hay tema o no tiene subtemas, no renderizar nada
  if (!currentTopicData || !currentTopicData.subtopics) {
    return null;
  }

  // Contenido de tabs para desktop
  const tabsContent = (
    <Tabs
      value={pathname}
      onChange={handleTabChange}
      variant="scrollable"
      scrollButtons="auto"
      sx={{ borderBottom: 1, borderColor: 'divider' }}
    >
      {/* PATRÓN ESTÁNDAR: Mapeo para renderizar tabs */}
      {currentTopicData.subtopics.map((subtopic) => (
        <Tab
          key={subtopic.id}
          label={subtopic.title}
          value={subtopic.path}
          onClick={() => router.push(subtopic.path)}
        />
      ))}
    </Tabs>
  );

  // Contenido de menú para móvil
  const mobileMenuContent = (
    <>
      {/* Botón para abrir el menú */}
      <IconButton
        color="inherit"
        onClick={handleMenuOpen}
        sx={{ ml: 'auto' }}
      >
        <MenuIcon />
      </IconButton>

      {/* Menú desplegable */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {/* PATRÓN ESTÁNDAR: Mapeo para renderizar items del menú */}
        {currentTopicData.subtopics.map((subtopic) => (
          <MenuItem
            key={subtopic.id}
            selected={pathname === subtopic.path}
            onClick={() => {
              router.push(subtopic.path);
              handleMenuClose();
            }}
          >
            {subtopic.title}
          </MenuItem>
        ))}
      </Menu>
    </>
  );

  // RETORNO del componente
  return (
    <Box sx={{ bgcolor: 'background.paper', mb: 2 }}>
      {/* Header con información del tema */}
      <Box sx={{ px: 2, py: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Icono y título del tema */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <span style={{ fontSize: '1.5rem' }}>{currentTopicData.icon}</span>
            <Box>
              <Box sx={{ typography: 'h6', fontSize: '1rem' }}>
                {currentTopicData.title}
              </Box>
              <Box sx={{ typography: 'caption', color: 'text.secondary' }}>
                {currentTopicData.description}
              </Box>
            </Box>
          </Box>

          {/* En móvil, mostrar el botón de menú */}
          {isMobile && mobileMenuContent}
        </Box>
      </Box>

      {/* En desktop, mostrar los tabs */}
      {!isMobile && tabsContent}
    </Box>
  );
}
