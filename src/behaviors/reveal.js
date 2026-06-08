/**
 * Anima la aparición de los elementos con la clase `.reveal` al hacer scroll.
 * SRP: este módulo solo gestiona el efecto de aparición.
 */
export function initReveal() {
  const elementos = document.querySelectorAll('.reveal');

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
