/**
 * Conecta el botón de cambio de idioma con la App.
 * SRP: este módulo solo escucha el clic y delega el cambio en `cambiarIdioma`.
 *
 * Recibe el contexto de la App: { idioma, idiomas, cambiarIdioma }.
 */
export function initLanguage({ cambiarIdioma } = {}) {
  const boton = document.getElementById('lang-toggle');
  if (!boton || typeof cambiarIdioma !== 'function') return;

  boton.addEventListener('click', () => cambiarIdioma(boton.dataset.destino));
}
