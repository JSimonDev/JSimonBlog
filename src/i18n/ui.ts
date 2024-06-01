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
  },
  en: {
    'nav.inicio': 'Home',
    'nav.blog': 'Blog',
    'nav.etiquetas': 'Tags',
    'nav.sobre-mi': 'About me',
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