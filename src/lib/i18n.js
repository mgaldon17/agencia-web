/**
 * Utilidades de idioma: detección inicial y persistencia.
 * SRP: aísla de la App la lógica de "qué idioma usar y cómo recordarlo".
 */
const CLAVE = 'idioma';

/** Devuelve el idioma a usar: guardado > idioma del navegador > por defecto. */
export function detectarIdioma(idiomas, pordefecto) {
  try {
    const guardado = localStorage.getItem(CLAVE);
    if (guardado && idiomas.includes(guardado)) return guardado;
  } catch (_) {
    /* localStorage no disponible */
  }
  const navegador = (navigator.language || pordefecto).slice(0, 2).toLowerCase();
  return idiomas.includes(navegador) ? navegador : pordefecto;
}

/** Guarda el idioma elegido para próximas visitas. */
export function persistirIdioma(idioma) {
  try {
    localStorage.setItem(CLAVE, idioma);
  } catch (_) {
    /* localStorage no disponible: se mantiene solo en la sesión */
  }
}
