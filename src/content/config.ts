import { defineCollection, z } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";

export const collections = {
  docs: defineCollection({
    type: 'content',
    schema: docsSchema({
      extend: z.object({
        title: z.string(),               // Zorunlu bir başlık
        date: z.string().datetime().optional(), // İsteğe bağlı tarih alanı (ISO formatında)
        author: z.string().optional(),   // İsteğe bağlı yazar adı
        tags: z.array(z.string()).optional() // İsteğe bağlı etiketler
      }),
    }),
  }),
};
