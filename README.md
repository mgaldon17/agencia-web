# Agencia IA — Landing

Landing page de una agencia de automatización con IA. Sitio estático de una sola página, bilingüe (ES/EN), con modo día/noche, construido con **Vite + Tailwind CSS v3 + JavaScript vanilla** (sin framework) y desplegado en **GitHub Pages**.

## Comandos

```bash
npm install      # instala dependencias
npm run dev      # servidor de desarrollo (Vite) con recarga en caliente
npm run build    # build de producción a dist/
npm run preview  # sirve dist/ localmente para verificar el build
```

No hay tests ni linter. La verificación es `npm run build` (falla si un componente o el CSS no compila) seguido de `npm run preview`.

## Arquitectura

Toda la UI se **renderiza en cliente**: `index.html` solo contiene `<div id="app"></div>` y un pequeño script anti-FOUC; el contenido se inyecta vía JavaScript. Esto implica que curl/SEO no verán el contenido en el HTML estático — es esperado.

El diseño separa tres capas, y esa separación es la regla principal del proyecto:

| Capa | Ubicación | Responsabilidad |
| --- | --- | --- |
| **Datos** | `src/data/content.js` | Única fuente de verdad de **todo** el texto. Exporta `traducciones = { es, en }`; ambos idiomas comparten el mismo esquema de claves. Añadir un servicio/beneficio/enlace o cambiar texto se hace **solo aquí**. |
| **Componentes** | `src/components/*.js` | Cada uno renderiza una sección y cumple la interfaz `(datos) => string` (devuelven HTML como string). Usan la plantilla `html\`\`` de `src/lib/renderer.js` e **iteran sobre los arrays de datos** — no hardcodean elementos. |
| **Comportamientos** | `src/behaviors/*.js` | Efectos de cliente con interfaz `(contexto) => void` (`initIcons`, `initReveal`, `initNavbarScroll`, `initTheme`, `initLanguage`). Se re-ejecutan tras **cada** render. |

`src/app.js` es el *composition root*: mantiene el estado de idioma, expone `render()` y `cambiarIdioma()`, y recibe datos, secciones y comportamientos por parámetro (arrays con defaults). Reordenar la página o desactivar un efecto es editar un array, no la lógica.

```
src/
├─ main.js              # punto de entrada: createApp().mount()
├─ app.js               # composition root (estado de idioma + render)
├─ data/content.js      # textos ES/EN (única fuente de verdad)
├─ components/          # Navbar, Hero, Services, Benefits, CTA, Footer
├─ behaviors/           # icons, reveal, navbar, theme, language
├─ lib/
│  ├─ renderer.js       # plantilla html`` + montar()
│  └─ i18n.js           # detección y persistencia de idioma
└─ styles/main.css      # paletas día/noche (variables CSS)
```

### Internacionalización (i18n)

Cambiar de idioma **re-renderiza toda la app** (`montar()` reemplaza el `innerHTML` de `#app`). `app.js` inyecta `_i18n: { idioma, idiomas }` en los datos para que la navbar pinte el botón correcto. La detección (guardado > navegador > por defecto) y la persistencia en `localStorage` viven en `src/lib/i18n.js`.

Como los comportamientos se reinician en cada render, cualquiera que añada un listener a `window`/`document` **debe ser idempotente** — ver `src/behaviors/navbar.js`, que instala el listener de scroll una sola vez.

### Tema día/noche

Estrategia `darkMode: 'class'` de Tailwind. Los componentes **no usan `dark:` por todas partes**: usan **tokens semánticos** (`bg-page`, `text-ink-strong`, `text-ink-muted`, `border-line`, `bg-page-alt`) mapeados en `tailwind.config.js` a variables CSS. Las dos paletas viven en `src/styles/main.css`: `:root` = día, `.dark` = noche. **Cambiar una paleta es editar esas variables, no los componentes.** El color de marca (`brand-primary/secondary/accent`) está en `tailwind.config.js`.

Un script inline en `<head>` (`index.html`) aplica el tema guardado antes de pintar, con modo noche por defecto.

### Iconos

Los iconos de [Lucide](https://lucide.dev) se importan vía npm y se **bundlean con la app** (solo los usados, ver `src/behaviors/icons.js`). No se carga ningún script de terceros en runtime. Para añadir un icono nuevo: referénciarlo con `data-lucide="nombre-kebab"` en un componente e importarlo en `icons.js`.

## Despliegue (GitHub Pages)

Tres workflows en `.github/workflows/`, todos sobre el mismo grupo de concurrencia `pages`:

- **`deploy.yml`** — push a `main` (o manual): `npm ci` → `npm run build` → publica `dist/`.
- **`maintenance.yml`** — manual: publica `maintenance/index.html` (página autocontenida, independiente del build principal).
- **`takedown.yml`** — manual con confirmación (escribir `RETIRAR`): da de baja Pages vía API.

Restricciones importantes:

- **El deploy solo se dispara con push a `main`.** El trabajo en curso vive en `develop`; promocionar a `main` despliega.
- `vite.config.js` usa `base: './'` (rutas relativas) para funcionar en la subruta de Pages.
- GitHub Pages requiere que el repo sea **público** (plan gratuito).
- Subir archivos a `.github/workflows/` requiere que el token de `gh` tenga el scope `workflow`.

## Seguridad

- **Sin dependencias de terceros en runtime:** Lucide y los estilos se bundlean; no hay scripts de CDN externos.
- **Content-Security-Policy** restrictiva vía `<meta http-equiv>` en `index.html` y `maintenance/index.html`.
- El renderizado usa `innerHTML` con datos **estáticos y de confianza** (`content.js`). Si en el futuro se interpola contenido externo (URL, API, formularios), debe escaparse antes de inyectarlo para evitar XSS.

## Stack

Vite · Tailwind CSS v3 · JavaScript vanilla (ES Modules) · Lucide Icons · GitHub Pages
