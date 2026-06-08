/** Renderiza los iconos de Lucide presentes en el DOM (atributos data-lucide). */
export function initIcons() {
  if (window.lucide) window.lucide.createIcons();
}
