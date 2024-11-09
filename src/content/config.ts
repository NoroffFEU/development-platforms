import { defineCollection, z } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";

export const collections = {
  docs: defineCollection({
    type: 'content',
    schema: docsSchema({
      extend: z.object({
        title: z.string(),
        date: z.string().datetime().optional(),
        author: z.string().optional(),
      }),
    }),
  }),
};
