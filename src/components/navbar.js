import { html } from '../lib/renderer.js';

/** Barra de navegación fija. Interfaz de componente: (datos) => string */
export const Navbar = ({ marca, navegacion, ui, _i18n }) => {
  const { idioma, idiomas } = _i18n;
  // Con 2+ idiomas, el botón ofrece el siguiente distinto al actual.
  const siguiente = idiomas.find((l) => l !== idioma) || idioma;

  return html`
  <nav id="navbar" class="fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <div class="flex items-center gap-2">
        <div class="w-8 h-8 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg"></div>
        <span class="text-xl font-bold tracking-tight text-ink-strong">${marca.nombre}<span class="text-brand-primary">${marca.destacado}</span></span>
      </div>
      <div class="flex items-center gap-4 md:gap-8">
        <div class="hidden md:flex items-center gap-8 text-sm font-medium text-ink-muted">
          ${navegacion.enlaces.map(
            (enlace) => html`<a href="${enlace.href}" class="hover:text-ink-strong transition-colors">${enlace.etiqueta}</a>`,
          )}
          <a href="${navegacion.cta.href}" target="_blank" rel="noopener" class="btn-secondary py-2 px-4 text-sm">${navegacion.cta.etiqueta}</a>
        </div>
        <div class="flex items-center gap-2">
          <button id="lang-toggle" type="button" data-destino="${siguiente}" class="theme-toggle w-auto px-2.5 gap-1.5 text-xs font-semibold" aria-label="${ui.cambiarIdioma}" title="${ui.cambiarIdioma}">
            <i data-lucide="languages" class="w-4 h-4"></i>${siguiente.toUpperCase()}
          </button>
          <button id="theme-toggle" type="button" class="theme-toggle" aria-label="${ui.cambiarTema}" title="${ui.cambiarTema}">
            <i data-lucide="sun" class="w-5 h-5 hidden dark:block"></i>
            <i data-lucide="moon" class="w-5 h-5 block dark:hidden"></i>
          </button>
        </div>
      </div>
    </div>
  </nav>
`;
};
