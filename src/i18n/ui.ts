export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    'nav.inicio': 'Inicio',
    'nav.blog': 'Blog',
    'nav.etiquetas': 'Etiquetas',
    'nav.sobre-mi': 'Sobre mí',
    'site.desc': "Espero y disfrutes de mi blog personal, donde comparto contenido sobre tecnología, Flutter, curiosidades y básicamente cualquier cosa que se me ocurra, espero que disfrutes de este blog y que aprendas algo nuevo.",
  },
  en: {
    'nav.inicio': 'Home',
    'nav.blog': 'Blog',
    'nav.etiquetas': 'Tags',
    'nav.sobre-mi': 'About me',
    'site.desc': "I hope you enjoy my personal blog, where I share content about technology, Flutter, curiosities and basically anything that occurs to me, I hope you enjoy this blog and learn something new.",
  },
} as const;

export const showDefaultLang = false;

export const routes = {
  de: {
    'services': 'leistungen',
  },
  fr: {
    'services': 'prestations-de-service',
  },
}