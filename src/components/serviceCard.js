import { html } from '../lib/renderer.js';

/**
 * Tarjeta individual de servicio.
 * SRP: solo conoce la forma de UNA tarjeta; `Services` se encarga de la lista.
 */
export const ServiceCard = ({ icono, titulo, descripcion, acento }) => html`
  <div class="glass-card p-8 reveal">
    <div class="w-14 h-14 ${acento.fondo} rounded-2xl flex items-center justify-center ${acento.texto} mb-6">
      <i data-lucide="${icono}"></i>
    </div>
    <h3 class="text-xl font-semibold text-ink-strong mb-3">${titulo}</h3>
    <p class="text-ink-muted text-sm leading-relaxed">${descripcion}</p>
  </div>
`;
