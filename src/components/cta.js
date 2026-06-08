import { html } from '../lib/renderer.js';

/** Sección final de llamada a la acción. Interfaz: (content) => string */
export const CallToAction = ({ contacto }) => html`
  <section id="contacto" class="py-24">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <div class="glass-card p-12 border-brand-primary/30">
        <h2 class="text-3xl md:text-4xl font-bold text-ink-strong mb-6">${contacto.titulo}</h2>
        <p class="text-ink-muted mb-10 text-lg">${contacto.descripcion}</p>
        <a href="${contacto.cta.href}" target="_blank" rel="noopener" class="btn-primary inline-block text-lg px-10">${contacto.cta.etiqueta}</a>
      </div>
    </div>
  </section>
`;
