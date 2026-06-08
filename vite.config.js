import { defineConfig } from 'vite';

// `base: './'` genera rutas relativas a los assets, de modo que el sitio
// funciona tanto en la raíz de un dominio como en una subruta de GitHub Pages
// (https://usuario.github.io/<repositorio>/) sin configuración adicional.
export default defineConfig({
  base: './',
});
