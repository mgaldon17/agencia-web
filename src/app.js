import { traducciones, idiomaPorDefecto } from './data/content.js';
import { montar } from './lib/renderer.js';
import { detectarIdioma, persistirIdioma } from './lib/i18n.js';

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
import { initLanguage } from './behaviors/language.js';

/**
 * Composition root de la aplicación.
 *
 * DIP: la `App` recibe el contenido (multiidioma), las secciones y los
 *      comportamientos por parámetro; no los crea de forma rígida.
 * OCP: añadir una sección o un comportamiento = registrarlo en su array;
 *      añadir un idioma = ampliar `contenido`.
 * LSP/ISP: todos los componentes cumplen `(datos) => string` y todos los
 *          comportamientos `(contexto) => void`.
 */
export function createApp({
  raiz = '#app',
  contenido = traducciones,
  secciones = [Navbar, Hero, Services, Benefits, CallToAction, Footer],
  comportamientos = [initIcons, initReveal, initNavbarScroll, initTheme, initLanguage],
} = {}) {
  const idiomas = Object.keys(contenido);
  let idioma = detectarIdioma(idiomas, idiomaPorDefecto);

  function cambiarIdioma(nuevo) {
    if (!idiomas.includes(nuevo) || nuevo === idioma) return;
    idioma = nuevo;
    persistirIdioma(idioma);
    render();
  }

  function render() {
    document.documentElement.lang = idioma;

    // Se inyecta info de idioma para que la navbar pinte el botón correcto.
    const datos = { ...contenido[idioma], _i18n: { idioma, idiomas } };
    montar(raiz, secciones.map((seccion) => seccion(datos)).join(''));

    // Los comportamientos se reinician tras cada render con el contexto actual.
    const contexto = { idioma, idiomas, cambiarIdioma };
    comportamientos.forEach((init) => init(contexto));
  }

  return { mount: render };
}
