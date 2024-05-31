import type { Site } from "./types";

export const SITE: Site = {
  website: "https://blog.jsimon.dev/", // replace this with your deployed domain
  author: "Jonathan Simon",
  desc: "A blog about web development, software engineering, and other tech topics.",
  title: "JSimon Blog",
  ogImage: "jsimon-blog-og.jpg",
  lightAndDarkMode: true,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "es", // html lang code. Set this empty and default will be "en"
  langTag: ["es-ES"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};
