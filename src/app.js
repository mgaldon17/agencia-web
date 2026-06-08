import { content } from './data/content.js';
import { montar } from './lib/renderer.js';

import { Navbar } from './components/navbar.js';
import { Hero } from './components/hero.js';
import { Services } from './components/services.js';
import { Benefits } from './components/benefits.js';
import { CallToAction } from './components/cta.js';
import { Footer } from './components/footer.js';

import { initIcons } from './behaviors/icons.js';
import { initReveal } from './behaviors/reveal.js';
import { initNavbarScroll } from './behaviors/navbar.js';
import { initTheme } from './behaviors/theme.js';

/**
 * Composition root de la aplicación.
 *
 * DIP: la `App` no construye sus dependencias internamente de forma rígida;
 *      recibe la lista ordenada de componentes (secciones) y de comportamientos.
 *      Reordenar la página o desactivar un efecto se hace cambiando estos arrays.
 * OCP: añadir una sección nueva = registrarla en `secciones`.
 * LSP/ISP: todos los componentes cumplen la misma interfaz `(content) => string`
 *          y todos los comportamientos la interfaz `() => void`.
 */
export function createApp({
  raiz = '#app',
  datos = content,
  secciones = [Navbar, Hero, Services, Benefits, CallToAction, Footer],
  comportamientos = [initIcons, initReveal, initNavbarScroll, initTheme],
} = {}) {
  return {
    mount() {
      const marcado = secciones.map((seccion) => seccion(datos)).join('');
      montar(raiz, marcado);
      // Los comportamientos se inicializan tras insertar el DOM.
      comportamientos.forEach((init) => init());
    },
  };
}
