/**
 * Aplica un fondo translúcido a la barra de navegación al desplazarse.
 * SRP: este módulo solo gestiona el estado visual del navbar según el scroll.
 */
export function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const actualizar = () => navbar.classList.toggle('navbar-scrolled', window.scrollY > 20);

  actualizar();
  window.addEventListener('scroll', actualizar, { passive: true });
}
