/**
 * Gestiona el modo día/noche.
 * SRP: este módulo solo conmuta y persiste el tema.
 *
 * La aplicación inicial del tema se hace con un script en línea en <head>
 * (ver index.html) para evitar el parpadeo (FOUC) antes de pintar.
 */
const CLAVE = 'tema';

const esOscuro = () => document.documentElement.classList.contains('dark');

function aplicar(tema) {
  document.documentElement.classList.toggle('dark', tema === 'oscuro');
}

export function initTheme() {
  const boton = document.getElementById('theme-toggle');
  if (!boton) return;

  boton.addEventListener('click', () => {
    const nuevo = esOscuro() ? 'claro' : 'oscuro';
    aplicar(nuevo);
    try {
      localStorage.setItem(CLAVE, nuevo);
    } catch (_) {
      /* localStorage no disponible: el cambio sigue aplicándose en la sesión. */
    }
  });
}
