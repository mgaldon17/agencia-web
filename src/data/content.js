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

// Variables de negocio: cambia el número aquí y se actualiza en todos los textos
// (es/en). PRECIO = montaje único; VALOR_PACIENTE = valor de un paciente nuevo.
const PRECIO = '500 €';

// Los `href` de navegación apuntan a IDs de sección fijos: no se traducen.
const ANCLAS = { servicios: '#servicios', beneficios: '#beneficios', contacto: '#contacto' };

const es = {
  urlReserva: URL_RESERVA,
  marca: { nombre: 'Recepción', destacado: 'WhatsApp' },
  ui: {
    cambiarTema: 'Cambiar modo día/noche',
    cambiarIdioma: 'Cambiar idioma / Switch language',
  },
  navegacion: {
    enlaces: [
      { etiqueta: 'Qué hace', href: ANCLAS.servicios },
      { etiqueta: 'Ventajas', href: ANCLAS.beneficios },
      { etiqueta: 'Ver demo', href: ANCLAS.contacto },
    ],
    cta: { etiqueta: 'Ver demo', href: URL_RESERVA },
  },
  hero: {
    tituloPre: 'Tu clínica responde a cada paciente al instante y ',
    tituloResaltado: 'le agenda la cita sola',
    subtitulo:
      'También cuando estáis llenos o cerrados. Deja de perder pacientes nuevos por un mensaje sin contestar y reduce las ausencias.',
    acciones: [
      { etiqueta: 'Ver una demo con el WhatsApp de tu clínica', href: URL_RESERVA, estilo: 'primary' },
      { etiqueta: 'Ver qué hace', href: ANCLAS.servicios, estilo: 'secondary' },
    ],
  },
  servicios: {
    titulo: 'Qué hace por tu clínica',
    subtitulo:
      'Una recepción que no duerme, sobre el WhatsApp de siempre de tu clínica.',
    items: [
      {
        icono: 'message-square',
        titulo: 'Contesta al instante',
        descripcion:
          'Responde al momento las preguntas de siempre: horarios, tratamientos y cómo es la primera visita.',
        acento: { fondo: 'bg-brand-primary/20', texto: 'text-brand-primary' },
      },
      {
        icono: 'calendar',
        titulo: 'Agenda las citas',
        descripcion:
          'Agenda, reprograma y cancela citas directamente en vuestra agenda, sin que nadie tenga que coger el teléfono.',
        acento: { fondo: 'bg-brand-secondary/20', texto: 'text-brand-secondary' },
      },
      {
        icono: 'bell',
        titulo: 'Recuerda la cita',
        descripcion:
          'Envía un recordatorio antes de cada cita para que el paciente no se olvide. Menos ausencias.',
        acento: { fondo: 'bg-brand-accent/20', texto: 'text-brand-accent' },
      },
      {
        icono: 'users',
        titulo: 'Pasa a recepción',
        descripcion:
          'Cuando hace falta una persona, pasa la conversación a recepción sin perder el hilo.',
        acento: { fondo: 'bg-ink-strong/10', texto: 'text-ink-strong' },
      },
    ],
  },
  beneficios: {
    titulo: 'Lo que cambia en tu día a día',
    subtitulo:
      'Más pacientes atendidos y una agenda más llena, sin cambiar cómo trabajáis.',
    items: [
      {
        icono: 'moon',
        titulo: 'Ningún paciente se escapa',
        descripcion:
          'Ni de noche ni en fin de semana: cada mensaje recibe respuesta y se queda dentro.',
      },
      {
        icono: 'phone-off',
        titulo: 'Recepción más libre',
        descripcion:
          'Deja de coger el teléfono para lo repetitivo y dedica ese tiempo al paciente que tienes delante.',
      },
      {
        icono: 'trending-down',
        titulo: 'Menos ausencias',
        descripcion:
          'Los recordatorios reducen los huecos de última hora. Agenda más llena.',
      },
      {
        icono: 'puzzle',
        titulo: 'Sobre vuestro WhatsApp',
        descripcion:
          'Funciona sobre el WhatsApp de siempre de la clínica. No cambiáis de número ni de forma de trabajar.',
      },
    ],
  },
  contacto: {
    titulo: '¿Lo vemos con el WhatsApp de tu propia clínica?',
    descripcion:
      `Pago único por el montaje, sin cuota mensual obligatoria. El WhatsApp de Meta sale gratis al volumen de una clínica pequeña. Montaje desde ${PRECIO}.`,
    cta: { etiqueta: 'Ver mi demo', href: URL_RESERVA },
  },
  pie: { texto: '© 2026 Recepción WhatsApp. Todos los derechos reservados.' },
};

const en = {
  urlReserva: URL_RESERVA,
  marca: { nombre: 'Reception', destacado: 'WhatsApp' },
  ui: {
    cambiarTema: 'Toggle day/night mode',
    cambiarIdioma: 'Switch language / Cambiar idioma',
  },
  navegacion: {
    enlaces: [
      { etiqueta: 'What it does', href: ANCLAS.servicios },
      { etiqueta: 'Benefits', href: ANCLAS.beneficios },
      { etiqueta: 'See demo', href: ANCLAS.contacto },
    ],
    cta: { etiqueta: 'See demo', href: URL_RESERVA },
  },
  hero: {
    tituloPre: 'Your clinic answers every patient instantly and ',
    tituloResaltado: 'books the appointment on its own',
    subtitulo:
      'Even when you are full or closed. Stop losing new patients to an unanswered message and cut no-shows.',
    acciones: [
      { etiqueta: 'See a demo on your clinic’s WhatsApp', href: URL_RESERVA, estilo: 'primary' },
      { etiqueta: 'See what it does', href: ANCLAS.servicios, estilo: 'secondary' },
    ],
  },
  servicios: {
    titulo: 'What it does for your clinic',
    subtitulo:
      'A reception that never sleeps, on your clinic’s usual WhatsApp.',
    items: [
      {
        icono: 'message-square',
        titulo: 'Answers instantly',
        descripcion:
          'Replies right away to the usual questions: opening hours, treatments and what the first visit is like.',
        acento: { fondo: 'bg-brand-primary/20', texto: 'text-brand-primary' },
      },
      {
        icono: 'calendar',
        titulo: 'Books appointments',
        descripcion:
          'Books, reschedules and cancels appointments straight into your calendar, with no one picking up the phone.',
        acento: { fondo: 'bg-brand-secondary/20', texto: 'text-brand-secondary' },
      },
      {
        icono: 'bell',
        titulo: 'Reminds the patient',
        descripcion:
          'Sends a reminder before each appointment so the patient does not forget. Fewer no-shows.',
        acento: { fondo: 'bg-brand-accent/20', texto: 'text-brand-accent' },
      },
      {
        icono: 'users',
        titulo: 'Hands over to reception',
        descripcion:
          'When a person is needed, it hands the conversation to reception without losing track.',
        acento: { fondo: 'bg-ink-strong/10', texto: 'text-ink-strong' },
      },
    ],
  },
  beneficios: {
    titulo: 'What changes in your day to day',
    subtitulo:
      'More patients attended and a fuller calendar, without changing how you work.',
    items: [
      {
        icono: 'moon',
        titulo: 'No patient slips away',
        descripcion:
          'Day or night, weekday or weekend: every message gets an answer and stays with you.',
      },
      {
        icono: 'phone-off',
        titulo: 'Reception, more free',
        descripcion:
          'Stop picking up the phone for the repetitive stuff and spend that time on the patient in front of you.',
      },
      {
        icono: 'trending-down',
        titulo: 'Fewer no-shows',
        descripcion:
          'Reminders cut last-minute gaps. A fuller calendar.',
      },
      {
        icono: 'puzzle',
        titulo: 'On your WhatsApp',
        descripcion:
          'It runs on the clinic’s usual WhatsApp. You keep your number and your way of working.',
      },
    ],
  },
  contacto: {
    titulo: 'Shall we see it on your own clinic’s WhatsApp?',
    descripcion:
      `One-time setup fee, no mandatory monthly subscription. Meta’s WhatsApp is free at a small clinic’s volume. Setup from ${PRECIO}.`,
    cta: { etiqueta: 'See my demo', href: URL_RESERVA },
  },
  pie: { texto: '© 2026 Recepción WhatsApp. All rights reserved.' },
};

export const traducciones = { es, en };
export const idiomaPorDefecto = 'es';
