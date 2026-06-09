/**
 * Anima la aparición de los elementos con la clase `.reveal` al hacer scroll.
 * SRP: este módulo solo gestiona el efecto de aparición.
 */
// Retardo entre tarjetas hermanas de una rejilla (ms) y tope para no encadenar
// esperas largas si hubiera muchas.
const PASO_STAGGER = 90;
const STAGGER_MAX = 6;

export function initReveal() {
  const elementos = document.querySelectorAll('.reveal');

  // Stagger: cada `.reveal` se retrasa según su posición entre los hermanos
  // `.reveal` de su mismo contenedor, de modo que las tarjetas de una rejilla
  // (servicios, beneficios) aparecen en secuencia y no todas a la vez. Los
  // elementos sueltos (un encabezado) quedan con índice 0 → sin retardo.
  elementos.forEach((el) => {
    const hermanos = Array.from(el.parentElement?.children || []).filter((n) =>
      n.classList.contains('reveal'),
    );
    const indice = Math.min(hermanos.indexOf(el), STAGGER_MAX);
    el.style.transitionDelay = `${indice * PASO_STAGGER}ms`;
  });

  // Fallback: si no hay IntersectionObserver, se muestran directamente.
  if (!('IntersectionObserver' in window)) {
    elementos.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('is-visible');
          observador.unobserve(entrada.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  elementos.forEach((el) => observador.observe(el));
}
