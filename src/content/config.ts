import { defineCollection, z } from "astro:content";

export const collections = {
  docs: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(), // Title alanı zorunlu
      date: z.string().optional(), // Tarih alanı isteğe bağlı
      author: z.string().optional(), // Author isteğe bağlı
      keywords: z.array(z.string()).optional(), // Keywords isteğe bağlı
      tags: z.array(z.string()).optional(), // Tags isteğe bağlı
    }),
  }),
};
