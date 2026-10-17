export interface ToyotaModel {
  id: string;
  name: string;
  category: '4x4 & Camionetas' | 'SUVs & Todoterreno' | 'Sedán & Crossover';
  tag: string;
  badge: string;
  image: string;
  engines: string[];
  drivetrain: string;
  commonServices: string[];
  description: string;
}

export interface ToyotaService {
  id: string;
  title: string;
  category: 'Electrónica' | 'Mecánica Mayor' | 'Preventivo' | 'Tracción & Tren';
  iconName: 'Cpu' | 'Compass' | 'Wrench' | 'Gauge' | 'Disc' | 'ShieldCheck';
  badge: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  estimatedTime: string;
  priceNote: string;
  recommendedKm: string;
}

export interface DiagnosticStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  icon: 'Cpu' | 'Camera' | 'ShieldCheck';
}

export const WORKSHOP_INFO = {
  name: 'Doctor Toyota',
  slogan: 'Especialistas Automotrices en Vehículos Toyota',
  subtitle: 'Diagnóstico Oficial Techstream OBD-II, Mantenimiento Preventivo y Mecánica Pesada',
  phone: '+57 312 450 8920',
  phoneClean: '573124508920',
  whatsappMessage: 'Hola Doctor Toyota, deseo solicitar información o agendar una cita para mi vehículo Toyota.',
  address: 'Av. Industrial Automotriz #45-80, Zona Especializada',
  city: 'Sede Principal - Taller Especializado Toyota',
  email: 'servicio@doctortoyota.com',
  workingHours: [
    { days: 'Lunes a Viernes', hours: '7:30 AM - 6:00 PM (Jornada Continua)' },
    { days: 'Sábados', hours: '8:00 AM - 2:30 PM' },
    { days: 'Domingos y Feriados', hours: 'Atención de Emergencias WhatsApp' },
  ],
  stats: [
    { value: '+12', label: 'Años de Experiencia', desc: 'Exclusivamente con la marca Toyota' },
    { value: '+8,500', label: 'Toyotas Diagnosticados', desc: 'Hilux, Prado, Land Cruiser y más' },
    { value: '100%', label: 'Scanner Oficial Techstream', desc: 'Protocolo de fábrica Toyota GTS' },
    { value: '12 Meses', label: 'Garantía Escrita', desc: 'En repuestos genuinos y mano de obra' },
  ],
  trustBadges: [
    'Repuestos 100% Genuinos Toyota',
    'Software Oficial Toyota Techstream GTS+',
    'Técnicos Especialistas Certificados',
    'Reporte Multimedia Antes de Reparar',
  ],
};

export const TOYOTA_MODELS: ToyotaModel[] = [
  {
    id: 'hilux',
    name: 'Toyota Hilux',
    category: '4x4 & Camionetas',
    tag: 'El Caballo de Batalla Imparable',
    badge: 'Más Solicitado',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    engines: ['1GD-FTV 2.8L Diésel Turbo', '2GD-FTV 2.4L Diésel', '2TR-FE 2.7L Gasolina'],
    drivetrain: '4x4 Part-Time con reductora (4L/4H) y bloqueo de diferencial',
    commonServices: [
      'Calibración D-4D y Common Rail',
      'Mantenimiento de Transfer y Diferenciales',
      'Suspensión Reforzada y Ballestas',
      'Cambio de Kit de Distribución y Correas',
    ],
    description: 'Especialistas en la plataforma Hilux (Vigo y Revo). Diagnóstico de inyección diésel, regeneración de DPF y refuerzo de suspensión para trabajo duro o expedición.',
  },
  {
    id: 'land-cruiser',
    name: 'Land Cruiser (Serie 70 / 200 / 300)',
    category: 'SUVs & Todoterreno',
    tag: 'El Rey Indiscutible del Off-Road',
    badge: 'Gama Legend',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80',
    engines: ['1VD-FTV 4.5L V8 Twin Turbo Diésel', 'F33A-FTV 3.3L V6 Twin Turbo', '1GR-FE 4.0L V6'],
    drivetrain: '4WD Full-Time con Torsen central y bloqueos de diferencial',
    commonServices: [
      'Diagnóstico de Doble Turbo V8 / V6',
      'Servicio de Caja Automática Aisin 6/8/10 Vel',
      'Mantenimiento Sistema KDSS y AHC Hidroneumático',
      'Frenos de Alto Rendimiento',
    ],
    description: 'Atención de precisión para vehículos insignia. Experiencia comprobada en motores V8 turbodiésel 1VD y la nueva plataforma LC300.',
  },
  {
    id: 'prado',
    name: 'Toyota Land Cruiser Prado',
    category: 'SUVs & Todoterreno',
    tag: 'Lujo, Fortaleza y Capacidad Total',
    badge: 'Favorito Premium',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    engines: ['1GD-FTV 2.8L Diésel', '1KD-FTV 3.0L Diésel D-4D', '1GR-FE 4.0L V6 Gasolina'],
    drivetrain: 'Tracción Integral Permanente 4WD con selector 4L/4H',
    commonServices: [
      'Sincronización de Inyección Common Rail',
      'Mantenimiento Sistema de Estabilidad VSC & A-TRC',
      'Purgado de Frenos Electrónico Techstream',
      'Revisión Integral de Suspensión KDSS',
    ],
    description: 'Diagnóstico meticuloso para Prado TX, TXL y VX. Cuidado de la electrónica de tracción y confort de marcha.',
  },
  {
    id: 'fortuner',
    name: 'Toyota Fortuner / SW4',
    category: 'SUVs & Todoterreno',
    tag: 'Robustez de Camioneta con Confort SUV',
    badge: 'Alta Demanda',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    engines: ['1GD-FTV 2.8L Diésel', '2TR-FE 2.7L Gasolina Dual VVT-i', '1GR-FE 4.0L V6'],
    drivetrain: '4x4 Desconectable / Permanente según versión',
    commonServices: [
      'Alineación y Mantenimiento de Transmisión 4x4',
      'Limpieza por Ultrasonido de Inyectores',
      'Cambio de Aceite Sintético TGMO 5W-30 / 0W-20',
      'Diagnóstico Electrónico de Módulos ECM/TCM',
    ],
    description: 'Mantenimiento integral para toda la familia Fortuner. Protección de tren motriz y puesta a punto para viajes largos y terreno destapado.',
  },
  {
    id: '4runner',
    name: 'Toyota 4Runner (SR5 / TRD / Limited)',
    category: 'SUVs & Todoterreno',
    tag: 'Auténtico ADN 4x4 Norteamericano',
    badge: 'Especialidad TRD',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
    engines: ['1GR-FE 4.0L V6 con Dual VVT-i'],
    drivetrain: 'Part-Time 4WD / Full-Time con Active Traction Control',
    commonServices: [
      'Calibración Crawl Control & Multi-Terrain Select',
      'Mantenimiento y Revalvulado de Amortiguadores TRD/Fox',
      'Diagnóstico de Caja Automática 5-Velocidades',
      'Inspección de Módulo ABS/Brake Booster Eléctrico',
    ],
    description: 'Configuración y puesta a punto para entusiastas de 4Runner. Diagnóstico del sistema de frenado electro-hidráulico y suspensión off-road.',
  },
  {
    id: 'rav4',
    name: 'Toyota RAV4 (Gasolina & Hybrid)',
    category: 'Sedán & Crossover',
    tag: 'Eficiencia y Versatilidad Moderna',
    badge: 'Híbridos & Gasolina',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80',
    engines: ['A25A-FXS 2.5L Híbrido Dynamic Force', '2AR-FE 2.5L', 'M20A-FKS 2.0L'],
    drivetrain: 'AWD Eléctrico e-Four / FWD / AWD Mecánico con desconexión dinámica',
    commonServices: [
      'Diagnóstico de Batería Híbrida y Sistema Inversor',
      'Mantenimiento Transmisión e-CVT / Direct Shift',
      'Limpieza del Sistema de Refrigeración Inversor',
      'Inspección de Paquete Toyota Safety Sense (TSS)',
    ],
    description: 'Equipamiento especializado para la nueva generación híbrida de Toyota. Escaneo de celdas de batería y eficiencia térmica de ciclo Atkinson.',
  },
  {
    id: 'corolla',
    name: 'Toyota Corolla / Corolla Cross',
    category: 'Sedán & Crossover',
    tag: 'El Automóvil Más Vendido del Planeta',
    badge: 'Garantía de Rendimiento',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=800&q=80',
    engines: ['2ZR-FXE 1.8L Híbrido', 'M20A-FKS 2.0L Dynamic Force', '1.8L Dual VVT-i'],
    drivetrain: 'FWD / e-Four en Cross',
    commonServices: [
      'Afinamiento Mayor de Motor con Bujías Iridium Denso',
      'Fluidos Originales Toyota CVT Fluid FE / e-CVT',
      'Diagnóstico y Calibración Cámara / Radar TSS',
      'Mantenimiento Integral de Frenos Regenerativos',
    ],
    description: 'Máxima durabilidad y consumo mínimo. Mantenimientos preventivos rigurosos siguiendo las especificaciones oficiales del fabricante japonés.',
  },
  {
    id: 'fj-cruiser',
    name: 'Toyota FJ Cruiser',
    category: '4x4 & Camionetas',
    tag: 'Diseño Retro con Mecánica indestructible',
    badge: 'Edición Especial',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
    engines: ['1GR-FE 4.0L V6 VVT-i'],
    drivetrain: '4WD con A-TRC y Bloqueo Electrónico Posterior',
    commonServices: [
      'Mantenimiento de Diferencial Trasero y Bloqueo',
      'Protección y Engrase de Cardán y Homocinéticas',
      'Ajuste y Sincronización Electrónica V6',
      'Reemplazo de Bujes de Tijera y Barra Estabilizadora',
    ],
    description: 'Cuidado especializado para este clásico moderno todoterreno. Garantizamos su desempeño en trocha y durabilidad mecánica por años.',
  },
];

export const TOYOTA_SERVICES: ToyotaService[] = [
  {
    id: 'diagnostico-techstream',
    title: 'Diagnóstico Computarizado Oficial Toyota Techstream',
    category: 'Electrónica',
    iconName: 'Cpu',
    badge: 'Scanner Oficial GTS+',
    shortDesc: 'Lectura en vivo de parámetros de fábrica, códigos DTC propietarios y calibración electrónica.',
    fullDesc: 'Conexión directa con la interfaz oficial de Toyota Japón (Techstream Global TechStream). Detectamos fallas invisibles para scanners genéricos: estado de inyectores, presión de riel diésel, salud de módulos ECM/TCM/ABS, calibración de sensores de ángulo de dirección y reseteo de testigos de advertencia.',
    features: [
      'Lectura de parámetros en vivo (Live Data Stream)',
      'Pruebas de actuadores (corte de cilindros, solenoides de caja)',
      'Chequeo de salud del DPF (Filtro de Partículas Diésel)',
      'Calibración de cuerpos de aceleración y sensores de ángulo SAS',
      'Informe técnico impreso o enviado digitalmente en PDF',
    ],
    estimatedTime: '45 - 60 minutos',
    priceNote: 'Incluye escaneo completo y reporte detallado',
    recommendedKm: 'Cada 10,000 km o ante cualquier testigo encendido',
  },
  {
    id: 'mantenimiento-4x4',
    title: 'Mantenimiento Integral de Sistemas 4x4 y Transmisión',
    category: 'Tracción & Tren',
    iconName: 'Compass',
    badge: 'Especialistas Off-Road',
    shortDesc: 'Cajas de transferencia, diferenciales delantero/trasero, cardanes y actuadores de doble tracción.',
    fullDesc: 'Los sistemas 4WD de Toyota (Hilux, Prado, Land Cruiser, Fortuner) requieren lubricación de extrema presión y ajustes precisos. Drenamos y sustituimos fluidos con aceites sintéticos específicos para diferenciales LSD y abiertos, inspeccionamos retenedores, engrasamos crucetas y probamos actuadores de acople.',
    features: [
      'Cambio de valvulina sintética en diferencial delantero y trasero (75W-85 / 80W-90 GL-5)',
      'Mantenimiento de caja de transferencia (Transfer Case)',
      'Engrase de crucetas, yugos y estrías de transmisión',
      'Verificación y prueba de vacío/eléctrica de actuadores 4H / 4L',
      'Inspección de respiraderos de diferencial para evitar entrada de agua',
    ],
    estimatedTime: '2 - 3 horas',
    priceNote: 'Uso exclusivo de fluidos de especificación Toyota',
    recommendedKm: 'Cada 30,000 km o después de vadeos severos',
  },
  {
    id: 'preventivo-kilometraje',
    title: 'Mantenimiento Preventivo por Kilometraje Toyota',
    category: 'Preventivo',
    iconName: 'Wrench',
    badge: '100% Repuestos Genuinos',
    shortDesc: 'Pautas oficiales de servicio para 5k, 10k, 20k, 40k, 80k y 100k kilómetros.',
    fullDesc: 'Seguimos estrictamente el manual de servicio oficial de Toyota Japón. Utilizamos aceite de motor genuino TGMO (Toyota Genuine Motor Oil), filtros de aceite de microfibra original y filtros de combustible con trampa de agua para proteger los delicados inyectores diésel y gasolina.',
    features: [
      'Cambio de Aceite Sintético TGMO (0W-20, 5W-30 o 15W-40 Diésel)',
      'Filtro de aceite y arandela de tapón de cárter genuinos',
      'Filtro de combustible original (crítico en diésel D-4D)',
      'Filtro de aire de alta filtración y filtro de polen de cabina',
      'Inspección de 50 puntos de seguridad (frenos, fugas, rótulas, luces)',
    ],
    estimatedTime: '1.5 - 2 horas',
    priceNote: 'Incluye revisión preventiva de seguridad de 50 puntos',
    recommendedKm: 'Cada 5,000 km (mineral) o 10,000 km (100% sintético)',
  },
  {
    id: 'inyeccion-diesel-commonrail',
    title: 'Inyección Diésel D-4D / GD & Limpieza de Inyectores',
    category: 'Mecánica Mayor',
    iconName: 'Gauge',
    badge: 'Laboratorio Diésel',
    shortDesc: 'Diagnóstico de retorno de inyectores Denso, bomba de alta presión y descarbonización.',
    fullDesc: 'Los motores Toyota Diésel (1KD, 2KD, 1GD, 2GD) dependen de tolerancias milimétricas en su sistema de inyección Common Rail. Evaluamos los caudales de inyección en tiempo real con Techstream, limpiamos bancos de inyección y descarbonizamos válvulas EGR y múltiples de admisión para devolver la potencia original.',
    features: [
      'Prueba de compensación de inyección por cilindro vía scanner',
      'Limpieza y descarbonización de válvula EGR y cuerpo de mariposa',
      'Inspección y prueba de presión en rampa de alta presión Common Rail',
      'Calibración de códigos de compensación QR de inyectores Denso',
      'Tratamiento de limpieza de tanque y circuito de combustible diésel',
    ],
    estimatedTime: '3 - 5 horas',
    priceNote: 'Recupera torque, elimina humo negro y reduce consumo',
    recommendedKm: 'Cada 40,000 km o ante pérdida de fuerza',
  },
  {
    id: 'frenos-estabilidad',
    title: 'Sistema de Frenos & Control Dinámico (VSC, TRC, ABS)',
    category: 'Mecánica Mayor',
    iconName: 'Disc',
    badge: 'Seguridad Máxima',
    shortDesc: 'Rectificado de discos, pastillas cerámicas Denso/Akebono y purgado electrónico del módulo ABS.',
    fullDesc: 'El peso y tamaño de los vehículos Toyota (Hilux, Prado, 4Runner) exige un frenado impecable. Realizamos mantenimiento integral con pastillas de compuesto cerámico de bajo desvanecimiento térmico, rectificado de discos con micrómetro y purgado electrónico de líquido de frenos DOT 4.',
    features: [
      'Reemplazo de pastillas delanteras y zapatas/bandas traseras con material OEM',
      'Rectificado de discos de freno con tolerancia micrométrica',
      'Limpieza, engrase térmico de pasadores de cáliper y guardapolvos',
      'Purgado de líquido de frenos con máquina presurizada y scanner Techstream',
      'Calibración del sensor de desaceleración y módulo VSC',
    ],
    estimatedTime: '2 - 3 horas',
    priceNote: 'Garantía de frenado suave sin chirridos ni vibraciones',
    recommendedKm: 'Cada 20,000 km revisión preventiva',
  },
  {
    id: 'suspension-direccion',
    title: 'Suspensión Especializada, Amortiguación y Dirección',
    category: 'Tracción & Tren',
    iconName: 'ShieldCheck',
    badge: 'Confort & Carga',
    shortDesc: 'Revisión y sustitución de tijeras, bujes poliuretano/caucho original, terminales y amortiguadores.',
    fullDesc: 'La durabilidad de un Toyota depende de su tren delantero. Detectamos holguras en terminales axiales, rótulas superiores/inferiores, barras estabilizadoras y amortiguadores (OEM o marcas reconocidas como Bilstein, OME y Fox). Alineación computarizada y balanceo de alta precisión.',
    features: [
      'Diagnóstico de amortiguadores en fosa con detección de fugas',
      'Prensa hidráulica para cambio de bujes en tijeras de suspensión',
      'Revisión y apriete con torquímetro según manual de taller Toyota',
      'Engrase y alineación de paquetes de ballestas traseras',
      'Prueba de ruta previa y posterior al servicio',
    ],
    estimatedTime: '2 - 4 horas',
    priceNote: 'Eliminación garantizada de golpes y ruidos metálicos',
    recommendedKm: 'Cada 25,000 km o tras recorridos en terreno destapado',
  },
];

export const DIAGNOSTIC_STEPS: DiagnosticStep[] = [
  {
    step: '01',
    title: 'Recepción Técnica & Escaneo Computarizado',
    subtitle: 'Inspección de 50 puntos con Toyota Techstream',
    description: 'Conectamos el escáner oficial GTS+ para leer la memoria de las computadoras del vehículo (ECM, TCM, ABS, BCM). Paralelamente, nuestro jefe de taller sube el vehículo al elevador para inspeccionar holguras en suspensión, fugas de fluidos, estado de correas y frenos.',
    deliverables: [
      'Lectura completa de códigos DTC históricos y actuales',
      'Chequeo físico de fugas y niveles de fluidos',
      'Medición de vida útil en frenos y neumáticos con micrómetro',
    ],
    icon: 'Cpu',
  },
  {
    step: '02',
    title: 'Reporte Multimedia Directo por WhatsApp',
    subtitle: 'Transparencia absoluta: Fotos y video antes de reparar',
    description: 'Cero sorpresas en tu factura. Antes de desmontar o sustituir cualquier repuesto, te enviamos un video explicativo grabado por el técnico asignado con fotos en primer plano de las piezas desgastadas y una cotización detallada con desglose de repuestos y mano de obra.',
    deliverables: [
      'Video personalizado mostrando el fallo real',
      'Fotos en alta resolución de las piezas afectadas',
      'Cotización formal con opciones de repuestos originales o equivalentes',
      'Aprobación directa del cliente vía WhatsApp',
    ],
    icon: 'Camera',
  },
  {
    step: '03',
    title: 'Reparación Certificada, Prueba de Ruta & Garantía',
    subtitle: 'Mano de obra especializada y garantía por escrito',
    description: 'Instalamos repuestos garantizados aplicando los pares de apriete (torque) establecidos por los manuales de fábrica Toyota. Realizamos prueba de ruta supervisada, borrado de memorias adaptativas y entregamos tu vehículo limpio con certificado de garantía física y digital.',
    deliverables: [
      'Entrega de las piezas sustituidas en caja de repuesto original',
      'Prueba de ruta en condiciones reales de marcha',
      'Certificado de garantía de 6 a 12 meses por escrito',
      'Historial de mantenimiento digital registrado en nuestra base de datos',
    ],
    icon: 'ShieldCheck',
  },
];
