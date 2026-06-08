import { html } from '../lib/renderer.js';
import { ServiceCard } from './serviceCard.js';

/**
 * Sección de servicios. Compone N tarjetas a partir de los datos.
 * OCP: añadir/quitar servicios se hace en `content.js`, no aquí.
 */
export const Services = ({ servicios }) => html`
  <section id="servicios" class="py-24 bg-page-alt transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16 reveal">
        <h2 class="text-3xl md:text-4xl font-bold text-ink-strong mb-4">${servicios.titulo}</h2>
        <p class="text-ink-muted max-w-2xl mx-auto">${servicios.subtitulo}</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        ${servicios.items.map(ServiceCard)}
      </div>
    </div>
  </section>
`;
