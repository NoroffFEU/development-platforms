import { defineConfig } from "astro/config"
import starlight from "@astrojs/starlight"

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Noroff Case Studies",
      description: "Case studies made by Noroff students",
      social: {
        github: "https://github.com/NoroffFEU/development-platforms/",
      },
      editLink: {
        baseUrl: "https://github.com/NoroffFEU/development-platforms/edit/main/",
      },
      lastUpdated: true,
      pagination: false,
      sidebar: [
        { label: "Akamai", collapsed: true, autogenerate: { directory: "akamai" } },
        { label: "Apache", collapsed: true, autogenerate: { directory: "apache" } },
        { label: "Appwrite", collapsed: true, autogenerate: { directory: "appwrite" } },
        { label: "AWS", collapsed: true, autogenerate: { directory: "aws" } },
        { label: "Azure", collapsed: true, autogenerate: { directory: "azure" } },
        { label: "BaaS", collapsed: true, autogenerate: { directory: "baas" } },
        { label: "CMS", collapsed: true, autogenerate: { directory: "cms" } },
        { label: "Databases", collapsed: true, autogenerate: { directory: "databases" } },
        { label: "Firebase", collapsed: true, autogenerate: { directory: "firebase" } },
        { label: "Frameworks & Other tools", collapsed: true, autogenerate: { directory: "frameworks" } },
        { label: "GitHub", collapsed: true, autogenerate: { directory: "github" } },
        { label: "GitKraken", collapsed: true, autogenerate: { directory: "gitkraken" } },
        { label: "Google", collapsed: true, autogenerate: { directory: "google" } },
        { label: "Hotjar", collapsed: true, autogenerate: { directory: "hotjar" } },
        { label: "IDE", collapsed: true, autogenerate: { directory: "ide" } },
        { label: "Machine Learning", collapsed: true, autogenerate: { directory: "machine-learning" } },
        { label: "Microsoft", collapsed: true, autogenerate: { directory: "microsoft" } },
        { label: "MongoDB", collapsed: true, autogenerate: { directory: "mongodb" } },
        { label: "Neo4j", collapsed: true, autogenerate: { directory: "neo4j" } },
        { label: "OpenAI", collapsed: true, autogenerate: { directory: "openai" } },
        { label: "Prometheus", collapsed: true, autogenerate: { directory: "prometheus" } },
        { label: "ServiceNow", collapsed: true, autogenerate: { directory: "servicenow" } },
        { label: "Shopify", collapsed: true, autogenerate: { directory: "shopify" } },
        { label: "Tensorflow", collapsed: true, autogenerate: { directory: "tensorflow" } },
        { label: "Wappler", collapsed: true, autogenerate: { directory: "wappler" } },
        { label: "Webhosting", collapsed: true, autogenerate: { directory: "webhosting" } },
      ],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: "astro/assets/services/sharp" } },
})
