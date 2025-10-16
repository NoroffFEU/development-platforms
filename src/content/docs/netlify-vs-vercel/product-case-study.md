---
title: Vercel vs Netlify Case Study
author: Veronica Brun-pedersen <Veronicabrun>
tags:
  - vercel
  - netlify
  - case-study
  - devops
  - serverless
  - cdn
  - nextjs
  - jamstack
---

## Introduction

This case study compares Vercel and Netlify – platforms for building and publishing frontend apps with Git-driven CI/CD and a global CDN. The goal is to show what they do well, when you should choose one or the other, and when a hybrid solution is better.

Both platforms build and deploy automatically from Git (GitHub/GitLab/Bitbucket). Every change gets a _preview URL_ for easy testing before production. Content is served via a global CDN for fast load times, and you can add a bit of backend with serverless/edge functions (without operating your own servers). Vercel is especially tightly integrated with **Next.js**; Netlify is framework-agnostic and has useful built-in things like **Netlify Forms** and simple DNS/domain setup.

## Brief History
- **2014–2015:** Netlify is founded by Mathias Biilmann and Christian Bach. The goal is to make Jamstack popular: statically built pages delivered via CDN, dynamics via APIs and serverless. Focus: a faster web and less operational overhead.
- **2015–2016:** ZEIT (later Vercel) is founded by Guillermo Rauch. In 2016 Next.js (React framework) is launched, which makes SSR (server-side rendering) and SSG (static site generation) simple.  
- **2017–2018:** Netlify launches Deploy Previews (preview per change/PR) and Netlify Functions (serverless functions). ZEIT/Vercel ties itself closely to Next.js and standardizes “preview per PR” as part of the CI/CD flow.  
- **2019–2023:** Netlify builds out Forms, Identity, Redirects/Headers, Edge Functions, solid DNS guides, and a growing plugin ecosystem. ZEIT → Vercel (name change in 2020) and Vercel launches Edge Middleware/Functions, ISR (Incremental Static Regeneration), Image Optimization, and strong monorepo support (among other things via Turborepo). The developer experience is polished significantly.  
- **Today:** Both offer Git-driven CI/CD with preview environments, global CDN/caching, serverless/edge, environment variables (secrets), logs/analytics and good team flow – they take care of much of the “traditional DevOps job” for frontend projects.  
  Shared idea: Connect repo → build automatically → deliver globally via CDN → add a bit of backend with serverless → manage domains/DNS, environment variables and logs in the dashboard → troubleshoot quickly when needed.

## Main Features
Vercel and Netlify are “frontend platforms” that automate build/deploy (CI/CD), deliver files quickly via CDN (a global network of servers that cache content near the user), and let you add a bit of backend with serverless functions (code that only runs when called). The result: you avoid operating your own servers for common web projects.

1) **Git-driven CI/CD + Preview Deployments**  
• *What it is:* Connect the repo (GitHub/GitLab/Bitbucket), then the platform builds and publishes automatically on each push/PR. Every change gets its own preview URL you can share.  
• *Why it’s useful:* You get CI/CD in practice (automatic build/test/deploy), simpler collaboration (everyone can test) and fewer manual errors.

2) **Global CDN and caching**  
• *What it is:* HTML/CSS/JS/images are delivered via a global network (CDN). Content is cached near the user.  
• *Why it’s useful:* Much faster pages and better experience, especially for static assets and users in different countries.

3) **Serverless Functions (both) + Edge Functions (both; Vercel has deeper Next.js integration)**  
• *What it is:* Small API endpoints in your project (e.g., `/api/checkout`) that run on request. Edge means that the code runs on nodes near the user for lower latency.  
• *Why it’s useful:* Easy to solve “small backend needs” without your own server: form submission, webhooks, Stripe payment, calls to Supabase/Firebase, simple CRUD operations. Edge is great for e.g. geo-adaptation and A/B testing.

4) **Frameworks and rendering**  
• *Vercel:* Especially close to Next.js (React framework). First-class support for SSG (build static pages at deploy), SSR (make HTML per request), and ISR (update static pages in the background).  
• *Netlify:* Framework-agnostic and very friendly for static/SPA setups (Vite, Astro, Svelte, 11ty, pure HTML/CSS/JS).  
• *Why it’s useful:* You can choose the right rendering strategy per page/feature (speed vs. fresh data) without heavy configuration.

5) **Forms, domains/DNS and HTTPS**  
• *Netlify Forms:* Detects `<form>` forms and collects submissions – without you creating a backend yourself.  
• *Domains/DNS:* Easy to add your own domain and get automatic HTTPS on both platforms.  
• *Why it’s useful:* Fast path to production with “common” needs (forms, domain, secure connection) without extra services.

6) **Environment variables (secrets) and security**  
• *What it is:* API keys (Stripe/Supabase/Firebase) are not placed in Git but in the platform’s dashboard as environment variables (read in code as `process.env.MY_KEY`).  
• *Why it’s useful:* Safe handling of secrets; reduces the risk of leaking keys in the repo.

7) **Logs, analytics and rollback**  
• *What it is:* Build and function logs, performance insight/analytics and quick rollback to the previous version.  
• *Why it’s useful:* Easier troubleshooting, measurement and confidence when something goes wrong.

8) **Team, access and monorepo**  
• *What it is:* Project/team roles, per-environment variables (dev/staging/prod) and good support for monorepo (several apps in the same repo).  
• *Why it’s useful:* Scales better when more people work together and when the code is organized in larger projects.

### Short comparison of features

| Function             | Vercel                  | Netlify                       | Why it matters                                |
| ---                  | ---                     | ---                           | ---                                           |
| CI/CD + Previews     | Yes (very polished)     | Yes                           | Fast feedback on every change                 |
| CDN & caching        | Yes                     | Yes                           | Global performance “out of the box”           |
| Serverless Functions | Yes                     | Yes                           | Small backend without server operations       |
| Edge Functions       | Strong focus            | Yes (also supported)          | Low latency, geo/A/B, auth checks             |
| Next.js support      | Deep (SSR/SSG/ISR)      | Good, but not as deep         | Choose Vercel if a lot of Next.js             |
| Forms/Identity       | External services       | Netlify Forms/Identity built-in | Easy form handling without backend          |
| Domains/HTTPS/DNS    | Yes                     | Yes (good guides)             | Own domain in minutes                         |
| Environment variables| Yes (UI/CLI)            | Yes (UI/CLI)                  | Secure handling of secrets                    |
| Logs/Analytics       | Yes (build + tools)     | Yes (build + tools)           | Insight and troubleshooting                   |
| Monorepo             | Very good               | Good                          | Important for larger codebases                |

## Applications
- **Portfolios/blogs:** static generation (SSG) + free/hobby plan works fine.  
- **Documentation/manuals:** SSG with automatic build and preview URL per PR.  
- **Landing pages/campaigns:** Edge functions for A/B testing and geo-adaptation.  
- **Forms without backend:** Netlify Forms for contact/order straight from HTML `<form>`.  
- **Simple e-commerce:** Stripe Checkout + serverless webhooks for receipt/email.

## Market Comparison
**Summarized:**  
- Choose **Vercel** when you build a lot with Next.js and want to use edge/ISR/SSR seamlessly.  
- Choose **Netlify** when you want framework-agnostic simplicity, Forms without backend and pleasant domain/DNS setup.  
- Both give you CI/CD, CDN, serverless, environment variables and a developer experience that covers much of “classic DevOps” for frontend.

## Pricing & use (short and practical)
**Plan levels (typical for both):**  
- **Free / Hobby** – For students, prototypes and personal projects. Git-connected CI/CD, preview deploys and global CDN within moderate limits.  
- **Pro (per user/seat)** – For small teams. Higher limits, more team features/insight, faster build queue and support options.  
- **Enterprise** – For larger orgs. SLA, SSO/SAML, advanced security/compliance, dedicated agreements and support.

**Costs you should watch:**  
- Bandwidth/transfer (CDN)  
- Build minutes (build time in CI/CD)  
- Serverless/Edge/SSR calls (pay-per-request/compute time)  
- Image services/optimization  
- Storage/logging/analytics (beyond the basics)

**Rule of thumb:** Free often holds for learning/portfolio. Pro fits small teams. Enterprise is about security, support and predictability.  
**Use in the world:** Everything from personal blogs and student projects to well-known brands (marketing pages, documentation, landing pages, Next.js apps, etc.). They are mature for production — but keep an eye on the cost drivers above if traffic/SSR/edge usage becomes high.

## When should you not use Netlify/Vercel alone?
Netlify and Vercel are perfect for frontend and a bit of light backend (serverless functions). But some types of needs fit poorly in pure serverless/CDN setups. Then one often chooses a **hybrid**: frontend on Netlify/Vercel, while “heavy” things run on a cloud provider (AWS/GCP/Azure) or a PaaS that gives more control.

**Signs that you need more than Netlify/Vercel alone:**  
- **Jobs that must run long or at fixed times (cron/background jobs):** When something must run for minutes/hours or nightly without a user clicking anything.  
  Example: Import a large CSV every night, send 20,000 newsletters, generate 5,000 PDF invoices.  
- **Heavy computations or files:** Video transcoding, image processing at large scale, PDF generation – things that take a long time/CPU.  
  Example: A user uploads video that must be converted to multiple formats.  
- **Strict data requirements and networking (compliance/VPC/region requirements):**  
  Data must be stored in a specific country, or you must go into a private network/VPN to internal systems.  
  Example: Public sector/health/finance with requirements for EU storage and access to internal databases.  
- **Databases with special needs:**  
  Large/heavy queries, replication, tailored performance and backup/restore.  
  Example: Large Postgres instance with many concurrent reports.  
- **Custom server environment/Docker or special tools:**  
  You need system tools that are not available in standard serverless (e.g., ffmpeg, wkhtmltopdf) or GPU for ML.  
  Example: Image/video AI that must run on GPU.  
- **A lot of dynamic rendering for each page view (expensive/unpredictable):**  
  Thousands of SSR calls per minute can become expensive in “pay-per-request.”  
  Example: Large news site with personalized front pages on each request.  
- **Secure connections:**  
  Talk together over HTTPS APIs, keep secret keys in environment variables, and let Netlify/Vercel still deliver the website itself quickly via CDN.

**Rule of thumb:**  
If the app is “static or lightly dynamic frontend + some API calls,” Netlify/Vercel fits great. If you need “always-on processes, heavy jobs or strict data requirements,” use a hybrid – then you get both simple developer flow and full control where it’s needed.

## Getting Started
**Netlify (from repo to live)**  
1. Push the code to GitHub/GitLab/Bitbucket.  
2. Log in to Netlify → *Add new site* → *Import an existing project* → choose repo.  
3. Set **Build command** (e.g., `npm run build`) and **Publish directory** (e.g., `dist/` or `build/`).  
4. Click **Deploy site** → you get a live URL (and preview URL for PRs).  
5. **Domain:** *Site settings* → *Domain management* → add domain and update DNS.  
6. **Environment variables:** *Site settings* → *Build & deploy* → *Environment* (e.g., `STRIPE_SECRET_KEY`).  
7. **Serverless function (simple):** Create `netlify/functions/hello.js`, push, and call `/.netlify/functions/hello`.

**Vercel (from repo to live)**  
1. Push the code to GitHub/GitLab/Bitbucket.  
2. Log in to Vercel → **Add New** → **Project** → choose repo.  
3. Confirm framework/build setup (Vercel often recognizes automatically).  
4. Click **Deploy** → you get a production URL and preview URL for each PR.  
5. **Domain:** *Project → Settings → Domains* → add domain and update DNS.  
6. **Environment variables:** *Project → Settings → Environment Variables* (e.g., `STRIPE_SECRET_KEY`).  
7. **API route in Next.js:** Create `pages/api/hello.js` (or `app/api/hello/route.js` in the new App Router) and call `/api/hello`.

## Conclusion
**What they solve:** Both provide Git-driven CI/CD, global CDN and serverless – that is, fast rollout, good performance and a bit of backend without operating servers.

**When to choose what:**  
- **Vercel:** Next.js, SSR/ISR, edge logic, monorepo — everything feels seamless.  
- **Netlify:** Static pages/SPA, framework-agnostic simplicity, Forms/Identity and pleasant domain/DNS.

**Limitations:** For heavier needs (long background jobs, large real-time, special databases/requirements) a hybrid is common: frontend on Vercel/Netlify, while API, jobs and DB lie on a cloud provider or PaaS.

**Summarized advice:** Start simple on Vercel/Netlify. When the requirements grow, keep the frontend there (for speed and workflow), but move “heavy” logic to where it fits best.

## References
- Vercel Docs — https://vercel.com/docs
- Vercel Edge Functions — https://vercel.com/docs/functions/edge-functions
- Vercel Middleware (Next.js) — https://vercel.com/docs/frameworks/nextjs
- Next.js Docs (SSR/SSG/ISR) — https://nextjs.org/docs
- Netlify Docs — https://docs.netlify.com/
- Netlify Functions — https://docs.netlify.com/functions/overview/
- Netlify Edge Functions — https://docs.netlify.com/edge-functions/overview/
- Netlify Forms — https://docs.netlify.com/forms/setup/
- Jamstack — https://jamstack.org/
- Stripe Checkout — https://stripe.com/docs/checkout
- Supabase Docs — https://supabase.com/docs
- Firebase Docs — https://firebase.google.com/docs
- Turborepo (Monorepo) — https://turbo.build/repo
