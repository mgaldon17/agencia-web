import { html } from '../lib/renderer.js';

const BenefitItem = ({ icono, titulo, descripcion }) => html`
  <div class="flex gap-4 reveal">
    <div class="shrink-0 w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary">
      <i data-lucide="${icono}"></i>
    </div>
    <div>
      <h3 class="text-lg font-semibold text-ink-strong mb-1">${titulo}</h3>
      <p class="text-ink-muted text-sm leading-relaxed">${descripcion}</p>
    </div>
  </div>
`;

/**
 * Sección de beneficios (referenciada por el menú `#beneficios`).
 * OCP: la lista se alimenta de `content.js`.
 */
export const Benefits = ({ beneficios }) => html`
  <section id="beneficios" class="py-24">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16 reveal">
        <h2 class="text-3xl md:text-4xl font-bold text-ink-strong mb-4">${beneficios.titulo}</h2>
        <p class="text-ink-muted max-w-2xl mx-auto">${beneficios.subtitulo}</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        ${beneficios.items.map(BenefitItem)}
      </div>
    </div>
  </section>
`;
