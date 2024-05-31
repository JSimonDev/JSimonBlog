// Importa las utilidades de `astro:content`
import { z, defineCollection } from "astro:content";
// Define un `type` y un `schema` para cada colección
const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    color: z.string().optional(),
    pubDate: z.date(),
    modDate: z.date().optional().nullable(),
    description: z.string(),
    author: z.string(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    ogImage: image()
    .refine(img => img.width >= 1200 && img.height >= 630, {
      message: "OpenGraph image must be at least 1200 X 630 pixels!",
    })
    .or(z.string())
    .optional(),
    tags: z.array(z.string()).default(["others"]),
    canonicalURL: z.string().optional(),
  }),
});
// Exporta un solo objeto `collections` con las colecciones registradas
export const collections = { blog: blogCollection };
