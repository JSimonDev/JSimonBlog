import type { Site } from "./types";

export const SITE: Site = {
  website: "https://blog.jsimon.dev/",
  author: "Jonathan Simon",
  desc: "A blog about web development, software engineering, and other tech topics.",
  title: "JSimon Blog",
  ogImage: "jsimon-blog-og.jpg",
  lightAndDarkMode: true,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};
