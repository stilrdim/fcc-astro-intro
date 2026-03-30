import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
console.log("config loaded");
const postsCollection = defineCollection({
  loader: glob({ base: "./src/content/posts", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      author: z.string(),
      date: z.string(),
      image: image(),
      title: z.string(),
      categories: z.array(z.string()).optional(),
      featured: z.boolean().optional(),
    }),
});

export const collections = {
  // Match "posts" name to the folder name being "posts" in this case
  posts: postsCollection,
};
