import { defineConfig } from "astro/config"
import starlight from "@astrojs/starlight"

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Noroff Case Studies",
      description: "Case studies made by Noroff students",
      social: {
        github: "https://github.com/NoroffFEU/development-platforms/"
      },
      editLink: {
        baseUrl: "https://github.com/NoroffFEU/development-platforms/edit/main/"
      },
      lastUpdated: true,
      pagination: false,
      sidebar: [
        { label: "AI/ML Frameworks", collapsed: true, autogenerate: { directory: "ai-ml" } },
        { label: "Akamai", collapsed: true, autogenerate: { directory: "akamai" } },
        { label: "Amazon", collapsed: true, autogenerate: { directory: "amazon" } },
        { label: "BaaS", collapsed: true, autogenerate: { directory: "baas" } },
        { label: "CDN", collapsed: true, autogenerate: { directory: "cdn" } },
        { label: "CMS", collapsed: true, autogenerate: { directory: "cms" } },
        { label: "CodePen", collapsed: true, autogenerate: { directory: "codepen" } },
        { label: "Databases", collapsed: true, autogenerate: { directory: "databases" } },
        { label: "Development Tools", collapsed: true, autogenerate: { directory: "devtools" } },
        { label: "Frameworks & Other tools", collapsed: true, autogenerate: { directory: "frameworks" } },
        { label: "GitHub", collapsed: true, autogenerate: { directory: "github" } },
        { label: "GitLab", collapsed: true, autogenerate: { directory: "gitlab" } },
        { label: "Google", collapsed: true, autogenerate: { directory: "google" } },
        { label: "Microsoft", collapsed: true, autogenerate: { directory: "microsoft" } },
        {
          label: "Monitoring & Observability",
          collapsed: true,
          autogenerate: { directory: "monitoring-observability" }
        },
        { label: "Node", collapsed: true, autogenerate: { directory: "node" }},
        { label: "OpenAI", collapsed: true, autogenerate: { directory: "openai" } },
        { label: "Reverse Proxy", collapsed: true, autogenerate: { directory: "reverse-proxy" } },
        { label: "ServiceNow", collapsed: true, autogenerate: { directory: "servicenow" } },
        { label: "Shopify", collapsed: true, autogenerate: { directory: "shopify" } },
        { label: "TanStack", collapsed: true, autogenerate: { directory: "tanstack" } },
        { label: "UX Monitoring", collapsed: true, autogenerate: { directory: "ux-monitoring" } },
        { label: "Web Development & Hosting", collapsed: true, autogenerate: { directory: "webdev-hosting" } }
      ]
    })
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: "astro/assets/services/sharp" } }
})
