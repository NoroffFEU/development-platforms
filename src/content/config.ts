import { defineCollection, z } from "astro:content";

export const collections = {
  docs: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(), // title zorunlu
      author: z.string().optional(), // author isteğe bağlı
    }),
  }),
};
