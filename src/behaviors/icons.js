/**
 * Renderiza los iconos de Lucide presentes en el DOM (atributos data-lucide).
 *
 * Los iconos se importan desde el paquete `lucide` (instalado vía npm) y se
 * bundlean con la app: NO se carga ningún script de terceros en runtime, lo
 * que elimina el riesgo de cadena de suministro de un CDN externo. Solo se
 * importan los iconos realmente usados para mantener el bundle reducido.
 */
import {
  createIcons,
  Bell,
  Calendar,
  Languages,
  MessageSquare,
  Moon,
  PhoneOff,
  Puzzle,
  Sun,
  TrendingDown,
  Users,
} from 'lucide';

// Solo los iconos referenciados por `data-lucide` en los componentes.
const icons = {
  Bell,
  Calendar,
  Languages,
  MessageSquare,
  Moon,
  PhoneOff,
  Puzzle,
  Sun,
  TrendingDown,
  Users,
};

export function initIcons() {
  createIcons({ icons, nameAttr: 'data-lucide' });
}
