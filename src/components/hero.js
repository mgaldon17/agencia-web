import { html } from '../lib/renderer.js';

const claseBoton = (estilo) => (estilo === 'primary' ? 'btn-primary' : 'btn-secondary');

/** Sección principal (hero). Interfaz de componente: (content) => string */
export const Hero = ({ hero }) => html`
  <section class="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-primary/10 blur-[120px] rounded-full -z-10"></div>
    <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-secondary/10 blur-[100px] rounded-full -z-10"></div>

    <div class="max-w-7xl mx-auto px-6 w-full">
      <div class="max-w-3xl reveal">
        <h1 class="text-5xl md:text-7xl font-extrabold text-ink-strong leading-tight mb-6">
          ${hero.tituloPre}<span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent">${hero.tituloResaltado}</span>
        </h1>
        <p class="text-lg md:text-xl text-ink-muted mb-10 leading-relaxed">${hero.subtitulo}</p>
        <div class="flex flex-col sm:flex-row gap-4">
          ${hero.acciones.map(
            (accion) => html`<a href="${accion.href}"${accion.href.startsWith('#') ? '' : ' target="_blank" rel="noopener"'} class="${claseBoton(accion.estilo)} text-center">${accion.etiqueta}</a>`,
          )}
        </div>
      </div>
    </div>
  </section>
`;
