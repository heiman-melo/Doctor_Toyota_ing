'use client';

// PATRÓN ESTÁNDAR: Importaciones de React
// useState SIEMPRE se importa cuando necesitas estado local en un componente
import { useState } from 'react';

// PATRÓN ESTÁNDAR: Importaciones de Material UI
// Los componentes se importan desde '@mui/material'
// Los iconos se importan desde '@mui/icons-material'
import {
  Drawer,          // Caja lateral que puede ser temporal o permanente
  List,            // Contenedor para listas de items
  ListItem,        // Item individual de una lista
  ListItemButton,  // Botón dentro de un ListItem (clickeable)
  ListItemText,    // Texto dentro de un ListItem
  ListItemIcon,    // Icono dentro de un ListItem
  Toolbar,         // Barra de herramientas (parte de AppBar)
  AppBar,          // Barra superior fija de la aplicación
  Box,             // Contenedor genérico (como un div con estilos)
  IconButton,      // Botón con icono
  Typography,      // Componente para texto con variantes (h1, h2, etc)
  useMediaQuery,   // Hook para detectar el tamaño de pantalla
  useTheme,        // Hook para acceder al tema actual
  Collapse,        // Componente para animar apertura/cierre
  Divider          // Línea separadora
} from '@mui/material';

// PATRÓN ESTÁNDAR: Importación de iconos de Material UI
// Los iconos SIEMPRE se importan desde '@mui/icons-material'
// Cuando hay conflicto de nombres, se usa 'as' para renombrar
import {
  Menu as MenuIcon,    // Icono de menú hamburguesa
  ExpandLess,          // Flecha hacia arriba (para colapsar)
  ExpandMore,          // Flecha hacia abajo (para expandir)
  Home as HomeIcon     // Icono de casa (para el inicio)
} from '@mui/icons-material';

// PATRÓN ESTÁNDAR: Importaciones de Next.js
// Link SIEMPRE se usa para navegación interna (como <a> pero sin recargar)
// usePathname SIEMPRE se usa para obtener la URL actual
// useRouter SIEMPRE se usa para navegación programática
import Link from 'next/link'; // ya vi que no usaste este porque no quiciste cambiar la estructura que ya tenias con material UI
import { usePathname, useRouter } from 'next/navigation';

// Importación de nuestros datos y tipos
import { reactTopics } from '../data/reactTopics';

// PATRÓN ESTÁNDAR: Constante de configuración
// Las constantes en MAYÚSCULAS SIEMPRE indican valores fijos
const DRAWER_WIDTH = 280; // Ancho del menú lateral en píxeles

// PATRÓN ESTÁNDAR: Definición de props (propiedades) del componente
// Las props SIEMPRE se definen como interface cuando el componente recibe parámetros
// El '?' indica que la prop es OPCIONAL
interface NavigationProps {
  onSubtopicSelect?: (subtopic: string) => void; // Callback cuando se selecciona un subtema
}

// PATRÓN ESTÁNDAR: Componente funcional con props
// 'export default' SIEMPRE se usa para exportar el componente principal
// 'function NombreComponente({ props })' es la forma estándar
export default function Navigation({ onSubtopicSelect }: NavigationProps) {
  // PATRÓN ESTÁNDAR: Hooks de Material UI
  // useTheme() SIEMPRE se usa dentro de ThemeProvider para acceder al tema
  const theme = useTheme();

  // PATRÓN ESTÁNDAR: useMediaQuery para diseño (responsive)
  // theme.breakpoints.down('md') significa "pantallas más pequeñas que medium"
  // Esto SIEMPRE devuelve true en móvil, false en desktop
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // PATRÓN ESTÁNDAR: useState para estado local
  // useState(false) SIEMPRE se usa para inicializar el estado
  // mobileOpen controla si el menú está abierto en móvil
  const [mobileOpen, setMobileOpen] = useState(false);

  // PATRÓN ESTÁNDAR: useState con Set para manejar colecciones únicas
  // Set<string> SIEMPRE se usa cuando necesitas una colección sin duplicados
  // expandedTopics guarda qué temas están expandidos (desplegados)
  const [expandedTopics, setExpandedTopics] = useState<Set<string>>(new Set());

  // PATRÓN ESTÁNDAR: usePathname para saber la URL actual (Next.js)
  // pathname SIEMPRE contiene la ruta actual (ej: '/hooks/usestate')
  const pathname = usePathname();

  // PATRÓN ESTÁNDAR: useRouter para navegación programática
  const router = useRouter();

  // PATRÓN ESTÁNDAR: Handler de evento (función que maneja un evento)
  // handleXxx() SIEMPRE se usa para nombrar funciones que manejan eventos
  const handleDrawerToggle = () => {
    // PATRÓN ESTÁNDAR: Actualización de estado con valor anterior
    // setMobileOpen(!mobileOpen) SIEMPRE invierte el valor booleano
    setMobileOpen(!mobileOpen);
  };

  // Handler para expandir/colapsar un tema
  const handleTopicClick = (topicId: string) => {
    // PATRÓN ESTÁNDAR: Crear copia del estado antes de modificar
    // new Set(expandedTopics) SIEMPRE crea una copia del Set existente
    const newExpanded = new Set(expandedTopics);

    // PATRÓN ESTÁNDAR: Lógica de toggle (activar/desactivar)
    // if (has) remove else add es un patrón común
    if (newExpanded.has(topicId)) {
      newExpanded.delete(topicId); // Si ya está expandido, colapsarlo
    } else {
      newExpanded.add(topicId);    // Si no está expandido, expandirlo
    }

    // PATRÓN ESTÁNDAR: Actualizar estado con el nuevo valor
    setExpandedTopics(newExpanded);
  };

  // PATRÓN ESTÁNDAR: Extracción de JSX a variable
  // Esto SIEMPRE se hace cuando el JSX es complejo o se reutiliza
  const drawerContent = (
    <div>
      {/* Toolbar: Barra superior del drawer con el título */}
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          📚 Next.js Teoría
        </Typography>
      </Toolbar>

      {/* Divider: Línea separadora */}
      <Divider />

      {/* List: Contenedor de la lista de navegación */}
      <List sx={{ pt: 0 }}>
        {/* Item de Inicio */}
        <ListItem disablePadding>
          <ListItemButton
            selected={pathname === '/'}
            onClick={() => {
              router.push('/');
              isMobile && setMobileOpen(false);
            }}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Inicio" />
          </ListItemButton>
        </ListItem>

        {/* Mapeo de temas: PATRÓN ESTÁNDAR para renderizar listas */}
        {reactTopics.map((topic) => (
          <div key={topic.id}>
            {/* Item del tema principal */}
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleTopicClick(topic.id)}>
                <ListItemIcon sx={{ fontSize: '1.2rem' }}>
                  {topic.icon}
                </ListItemIcon>
                <ListItemText primary={topic.title} />
                {/* Icono de flecha según estado expandido/colapsado */}
                {expandedTopics.has(topic.id) ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>

            {/* Collapse: Anima la aparición/desaparición de subtemas */}
            <Collapse in={expandedTopics.has(topic.id)} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {/* Mapeo de subtemas */}
                {topic.subtopics?.map((subtopic) => (
                  <ListItem key={subtopic.id} disablePadding>
                    <ListItemButton
                      selected={pathname === subtopic.path}
                      sx={{ pl: 4 }}
                      onClick={() => {
                        router.push(subtopic.path);
                        isMobile && setMobileOpen(false);
                        onSubtopicSelect?.(subtopic.id);
                      }}
                    >
                      <ListItemText primary={subtopic.title} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </div>
        ))}
      </List>
    </div>
  );

  // RETORNO del componente: JSX que se renderiza
  return (
    <>
      {/* AppBar: Barra superior fija de la aplicación */}
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${DRAWER_WIDTH}px)` },
          ml: { md: `${DRAWER_WIDTH}px` },
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          {/* Botón hamburguesa: Solo visible en móvil */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Sistema de Aprendizaje Next.js
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Contenedor del menú lateral */}
      <Box
        component="nav"
        sx={{ width: { md: DRAWER_WIDTH }, flexShrink: { md: 0 } }}
      >
        {/* PATRÓN ESTÁNDAR: Renderizado condicional para responsive */}
        {isMobile ? (
          // En móvil: Drawer temporal (se abre/cierra)
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: DRAWER_WIDTH,
              },
            }}
          >
            {drawerContent}
          </Drawer>
        ) : (
          // En desktop: Drawer permanente (siempre visible)
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', md: 'block' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: DRAWER_WIDTH,
              },
            }}
            open
          >
            {drawerContent}
          </Drawer>
        )}
      </Box>
    </>
  );
}
