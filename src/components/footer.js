import { html } from '../lib/renderer.js';

/** Pie de página. Interfaz: (content) => string */
export const Footer = ({ pie }) => html`
  <footer class="py-12 border-t border-line/10 text-center text-ink-muted text-sm">
    <p>${pie.texto}</p>
  </footer>
`;
