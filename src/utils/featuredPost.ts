import type { CollectionEntry } from "astro:content";


const featuredPosts = (posts: CollectionEntry<"blog">[]) => {
  // Ordenar por fecha de más reciente a menos
  posts.sort((a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime());

  // Filtrar por featured
  const featuredPosts = posts.filter(post => post.data.featured === true);

  return featuredPosts;
}

export default featuredPosts;