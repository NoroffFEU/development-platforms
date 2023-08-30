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
        { label: "AI/ML Frameworks", collapsed: true, autogenerate: { directory: "ai-ml" } },
        { label: "Akamai", collapsed: true, autogenerate: { directory: "akamai" } },
        { label: "Amazon", collapsed: true, autogenerate: { directory: "amazon" } },
        { label: "BaaS", collapsed: true, autogenerate: { directory: "baas" } },
        { label: "CMS", collapsed: true, autogenerate: { directory: "cms" } },
        { label: "Databases", collapsed: true, autogenerate: { directory: "databases" } },
        { label: "Development Tools", collapsed: true, autogenerate: { directory: "devtools" } },
        { label: "Frameworks & Other tools", collapsed: true, autogenerate: { directory: "frameworks" } },
        { label: "GitHub", collapsed: true, autogenerate: { directory: "github" } },
        // { label: "GitKraken", collapsed: true, autogenerate: { directory: "gitkraken" } },
        { label: "Google", collapsed: true, autogenerate: { directory: "google" } },
        // { label: "IDE", collapsed: true, autogenerate: { directory: "ide" } },
        { label: "Microsoft", collapsed: true, autogenerate: { directory: "microsoft" } },
        {
          label: "Monitoring & Observability",
          collapsed: true,
          autogenerate: { directory: "monitoring-observability" },
        },
        { label: "OpenAI", collapsed: true, autogenerate: { directory: "openai" } },
        { label: "ServiceNow", collapsed: true, autogenerate: { directory: "servicenow" } },
        { label: "Shopify", collapsed: true, autogenerate: { directory: "shopify" } },
        { label: "UX Monitoring", collapsed: true, autogenerate: { directory: "ux-monitoring" } },
        { label: "Web Development & Hosting", collapsed: true, autogenerate: { directory: "webdev-hosting" } },
      ],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: "astro/assets/services/sharp" } },
})
