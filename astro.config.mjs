import { defineConfig } from "astro/config"
import starlight from "@astrojs/starlight"

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Noroff Case Studies",
      social: {
        github: "https://github.com/NoroffFEU/development-platforms/",
      },
      sidebar: [
        { label: "Akamai", autogenerate: { directory: "akamai" } },
        { label: "AWS", autogenerate: { directory: "aws" } },
      ],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: "astro/assets/services/sharp" } },
})
