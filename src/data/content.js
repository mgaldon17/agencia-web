/**
 * Contenido del sitio en varios idiomas (única fuente de verdad).
 *
 * SRP: este módulo solo describe QUÉ se muestra, nunca CÓMO se renderiza.
 * OCP: añadir un idioma = añadir una entrada a `traducciones` con el mismo
 *      esquema; ni los componentes ni la App necesitan cambios.
 *
 * Las claves de cada idioma son idénticas, de modo que cualquier componente
 * funciona con el contenido de cualquier locale (LSP).
 */

const URL_RESERVA = 'https://cal.com/manuel-galdon-lyesrx';

// Los `href` de navegación apuntan a IDs de sección fijos: no se traducen.
const ANCLAS = { servicios: '#servicios', beneficios: '#beneficios', contacto: '#contacto' };

const es = {
  urlReserva: URL_RESERVA,
  marca: { nombre: 'Agencia', destacado: 'IA' },
  ui: {
    cambiarTema: 'Cambiar modo día/noche',
    cambiarIdioma: 'Cambiar idioma / Switch language',
  },
  navegacion: {
    enlaces: [
      { etiqueta: 'Servicios', href: ANCLAS.servicios },
      { etiqueta: 'Beneficios', href: ANCLAS.beneficios },
      { etiqueta: 'Contacto', href: ANCLAS.contacto },
    ],
    cta: { etiqueta: 'Agendar Demo', href: URL_RESERVA },
  },
  hero: {
    tituloPre: 'Automatiza tu crecimiento con ',
    tituloResaltado: 'Inteligencia Artificial',
    subtitulo:
      'Escala tus operaciones, reduce costes y atiende a tus clientes 24/7 con agentes autónomos diseñados a medida.',
    acciones: [
      { etiqueta: 'Ver Servicios', href: ANCLAS.servicios, estilo: 'primary' },
      { etiqueta: 'Agendar Consultoría', href: URL_RESERVA, estilo: 'secondary' },
    ],
  },
  servicios: {
    titulo: 'Soluciones de IA Avanzada',
    subtitulo:
      'Implementamos tecnología de vanguardia para resolver los cuellos de botella de tu negocio.',
    items: [
      {
        icono: 'bot-message-square',
        titulo: 'Chatbots de WhatsApp',
        descripcion:
          'Atención inmediata, cierre de ventas y soporte técnico 24/7 directamente en el chat de tus clientes.',
        acento: { fondo: 'bg-brand-primary/20', texto: 'text-brand-primary' },
      },
      {
        icono: 'megaphone',
        titulo: 'Automatización de Redes Sociales',
        descripcion:
          'Gestión inteligente de contenido y respuestas automáticas en Instagram, LinkedIn y X para mantener tu marca activa.',
        acento: { fondo: 'bg-brand-secondary/20', texto: 'text-brand-secondary' },
      },
      {
        icono: 'audio-lines',
        titulo: 'Agentes de Voz con IA',
        descripcion:
          'Agentes de voz con lenguaje natural para llamadas de soporte, ventas o gestión de citas telefónicas.',
        acento: { fondo: 'bg-brand-accent/20', texto: 'text-brand-accent' },
      },
      {
        icono: 'waypoints',
        titulo: 'Flujos de Trabajo a Medida',
        descripcion:
          'Conectamos tus herramientas actuales (CRM, Email, Notion) con modelos de IA para automatizar tareas complejas.',
        acento: { fondo: 'bg-ink-strong/10', texto: 'text-ink-strong' },
      },
    ],
  },
  beneficios: {
    titulo: 'Por qué automatizar con nosotros',
    subtitulo:
      'Resultados medibles desde el primer día, sin fricción y con la tecnología trabajando para ti.',
    items: [
      {
        icono: 'clock',
        titulo: 'Disponibilidad 24/7',
        descripcion:
          'Tus clientes reciben respuestas inmediatas a cualquier hora, sin esperas ni colas.',
      },
      {
        icono: 'trending-down',
        titulo: 'Reducción de costes',
        descripcion:
          'Automatiza tareas repetitivas y libera a tu equipo para lo que de verdad importa.',
      },
      {
        icono: 'gauge',
        titulo: 'Escalabilidad inmediata',
        descripcion:
          'Atiende a miles de clientes a la vez sin necesidad de aumentar tu plantilla.',
      },
      {
        icono: 'puzzle',
        titulo: 'Integración total',
        descripcion:
          'Conectamos la IA con las herramientas que ya usas en tu día a día.',
      },
    ],
  },
  contacto: {
    titulo: '¿Listo para dar el salto tecnológico?',
    descripcion:
      'Reserva una sesión de consultoría gratuita de 15 minutos para analizar tus procesos y ver cómo la IA puede ayudarte.',
    cta: { etiqueta: 'Reservar mi sesión', href: URL_RESERVA },
  },
  pie: { texto: '© 2026 Agencia IA. Todos los derechos reservados.' },
};

const en = {
  urlReserva: URL_RESERVA,
  marca: { nombre: 'AI', destacado: 'Agency' },
  ui: {
    cambiarTema: 'Toggle day/night mode',
    cambiarIdioma: 'Switch language / Cambiar idioma',
  },
  navegacion: {
    enlaces: [
      { etiqueta: 'Services', href: ANCLAS.servicios },
      { etiqueta: 'Benefits', href: ANCLAS.beneficios },
      { etiqueta: 'Contact', href: ANCLAS.contacto },
    ],
    cta: { etiqueta: 'Book a Demo', href: URL_RESERVA },
  },
  hero: {
    tituloPre: 'Automate your growth with ',
    tituloResaltado: 'Artificial Intelligence',
    subtitulo:
      'Scale your operations, cut costs and serve your customers 24/7 with custom-built autonomous agents.',
    acciones: [
      { etiqueta: 'View Services', href: ANCLAS.servicios, estilo: 'primary' },
      { etiqueta: 'Book a Consultation', href: URL_RESERVA, estilo: 'secondary' },
    ],
  },
  servicios: {
    titulo: 'Advanced AI Solutions',
    subtitulo:
      'We implement cutting-edge technology to solve your business bottlenecks.',
    items: [
      {
        icono: 'bot-message-square',
        titulo: 'WhatsApp Chatbots',
        descripcion:
          'Instant support, sales closing and 24/7 technical assistance right in your customers’ chat.',
        acento: { fondo: 'bg-brand-primary/20', texto: 'text-brand-primary' },
      },
      {
        icono: 'megaphone',
        titulo: 'Social Media Automation',
        descripcion:
          'Smart content management and automated replies on Instagram, LinkedIn and X to keep your brand active.',
        acento: { fondo: 'bg-brand-secondary/20', texto: 'text-brand-secondary' },
      },
      {
        icono: 'audio-lines',
        titulo: 'AI Voice Agents',
        descripcion:
          'Natural-language voice agents for support calls, sales or phone appointment scheduling.',
        acento: { fondo: 'bg-brand-accent/20', texto: 'text-brand-accent' },
      },
      {
        icono: 'waypoints',
        titulo: 'Custom Workflows',
        descripcion:
          'We connect your current tools (CRM, Email, Notion) with AI models to automate complex tasks.',
        acento: { fondo: 'bg-ink-strong/10', texto: 'text-ink-strong' },
      },
    ],
  },
  beneficios: {
    titulo: 'Why automate with us',
    subtitulo:
      'Measurable results from day one, friction-free and with technology working for you.',
    items: [
      {
        icono: 'clock',
        titulo: '24/7 Availability',
        descripcion:
          'Your customers get instant answers at any time, with no waiting or queues.',
      },
      {
        icono: 'trending-down',
        titulo: 'Cost reduction',
        descripcion:
          'Automate repetitive tasks and free your team for what truly matters.',
      },
      {
        icono: 'gauge',
        titulo: 'Instant scalability',
        descripcion:
          'Serve thousands of customers at once without growing your headcount.',
      },
      {
        icono: 'puzzle',
        titulo: 'Full integration',
        descripcion:
          'We connect AI with the tools you already use every day.',
      },
    ],
  },
  contacto: {
    titulo: 'Ready to take the technological leap?',
    descripcion:
      'Book a free 15-minute consultation to analyze your processes and see how AI can help you.',
    cta: { etiqueta: 'Book my session', href: URL_RESERVA },
  },
  pie: { texto: '© 2026 AI Agency. All rights reserved.' },
};

export const traducciones = { es, en };
export const idiomaPorDefecto = 'es';
