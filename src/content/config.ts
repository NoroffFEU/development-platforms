import { defineCollection, z } from "astro:content"
import { docsSchema } from "@astrojs/starlight/schema"

export const collections = {
  docs: defineCollection({
    type: 'content',
    schema: docsSchema({
      extend: z.object(
        {
          author: z.string().optional()
        }
      )
    })
  })
}
