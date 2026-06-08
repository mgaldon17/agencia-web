/**
 * Única fuente de verdad del contenido del sitio (en español).
 *
 * SRP: este módulo solo describe QUÉ se muestra, nunca CÓMO se renderiza.
 * OCP: para añadir un servicio, un beneficio o un enlace basta con ampliar
 *      estos arrays; los componentes los recorren sin necesidad de modificarlos.
 */

const URL_RESERVA = 'https://cal.com/manuel-galdon-lyesrx';

export const content = {
  urlReserva: URL_RESERVA,

  marca: {
    nombre: 'AGENCIA',
    destacado: 'IA',
  },

  navegacion: {
    enlaces: [
      { etiqueta: 'Servicios', href: '#servicios' },
      { etiqueta: 'Beneficios', href: '#beneficios' },
      { etiqueta: 'Contacto', href: '#contacto' },
    ],
    cta: { etiqueta: 'Agendar Demo', href: URL_RESERVA },
  },

  hero: {
    tituloPre: 'Automatiza tu crecimiento con ',
    tituloResaltado: 'Inteligencia Artificial',
    subtitulo:
      'Escala tus operaciones, reduce costes y atiende a tus clientes 24/7 con agentes autónomos diseñados a medida.',
    acciones: [
      { etiqueta: 'Ver Servicios', href: '#servicios', estilo: 'primary' },
      { etiqueta: 'Agendar Consultoría', href: URL_RESERVA, estilo: 'secondary' },
    ],
  },

  servicios: {
    titulo: 'Soluciones de IA Avanzada',
    subtitulo:
      'Implementamos tecnología de vanguardia para resolver los cuellos de botella de tu negocio.',
    items: [
      {
        icono: 'message-square',
        titulo: 'Chatbots de WhatsApp',
        descripcion:
          'Atención inmediata, cierre de ventas y soporte técnico 24/7 directamente en el chat de tus clientes.',
        acento: { fondo: 'bg-brand-primary/20', texto: 'text-brand-primary' },
      },
      {
        icono: 'share-2',
        titulo: 'Automatización de Redes Sociales',
        descripcion:
          'Gestión inteligente de contenido y respuestas automáticas en Instagram, LinkedIn y X para mantener tu marca activa.',
        acento: { fondo: 'bg-brand-secondary/20', texto: 'text-brand-secondary' },
      },
      {
        icono: 'mic',
        titulo: 'Agentes de Voz con IA',
        descripcion:
          'Agentes de voz con lenguaje natural para llamadas de soporte, ventas o gestión de citas telefónicas.',
        acento: { fondo: 'bg-brand-accent/20', texto: 'text-brand-accent' },
      },
      {
        icono: 'workflow',
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

  pie: {
    texto: '© 2026 Agencia IA. Todos los derechos reservados.',
  },
};
