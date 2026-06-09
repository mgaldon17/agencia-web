/**
 * Aplica un fondo translúcido a la barra de navegación al desplazarse.
 * SRP: este módulo solo gestiona el estado visual del navbar según el scroll.
 *
 * Idempotente: el listener de scroll se instala una sola vez y busca el
 * #navbar vigente en cada evento, de modo que sobrevive a los re-renders
 * (p. ej. al cambiar de idioma) sin acumular listeners.
 */
let instalado = false;

function actualizar() {
  const navbar = document.getElementById('navbar');
  if (navbar) navbar.classList.toggle('navbar-scrolled', window.scrollY > 20);
}

export function initNavbarScroll() {
  actualizar(); // sincroniza el navbar recién renderizado
  if (instalado) return;
  instalado = true;
  window.addEventListener('scroll', actualizar, { passive: true });
}
