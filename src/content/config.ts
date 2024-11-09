import { defineCollection, z } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";

export const collections = {
  docs: defineCollection({
    type: 'content',
    schema: docsSchema({
      extend: z.object({
        title: z.string(),               // Title alanını zorunlu yapıyoruz
        date: z.string().datetime(),     // Date alanını zorunlu yapıyoruz
        author: z.string().optional()    // Author alanını isteğe bağlı bırakıyoruz
      })
    })
  })
};
