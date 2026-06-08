/**
 * Utilidades de renderizado compartidas por todos los componentes.
 *
 * SRP: aísla el "cómo se construye y se inserta el HTML" del resto del código,
 * de modo que los componentes solo se preocupan de su propio marcado.
 */

/** Convierte un valor interpolado en texto; une los arrays sin comas. */
const aTexto = (valor) => (Array.isArray(valor) ? valor.join('') : valor ?? '');

/**
 * Plantilla etiquetada para componer HTML de forma legible.
 * Permite interpolar tanto strings como arrays de fragmentos.
 */
export const html = (strings, ...valores) =>
  strings.reduce((acc, str, i) => acc + str + aTexto(valores[i]), '');

/** Inserta el marcado en el contenedor indicado (selector o nodo). */
export function montar(destino, marcado) {
  const nodo = typeof destino === 'string' ? document.querySelector(destino) : destino;
  if (!nodo) throw new Error(`No se encontró el contenedor de montaje: ${destino}`);
  nodo.innerHTML = marcado;
  return nodo;
}
