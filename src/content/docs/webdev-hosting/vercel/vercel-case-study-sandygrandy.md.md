---
title: Vercel web hosting service
author: Sandra Grande < sandygrandy >
tags: hosting, deployment, service
---

## Introduction

Vercel is one of the leading hosting and deployment platforms for modern web applications. Vercel offers ways to build, preview and deploy projects. Focuses on performance, scalability and simplicity. It is a go-to platform for many using frameworks like Next.js, Svelte, React and more. This case study explores history, features, use cases, strength and weaknesses and more.

## Brief History

You may use a bullet point list or subheadings to structure a timeline of your chosen topic's history:

- 2015: Founded by Tony Kovanen (vercels ex-cto), and Naoyuki Kanezawa. Originally named Zeit
- 2016: Vercel created Next.js
- 2020: Rebranded from Zeit to Vercel.
- 2021: Raised $102 million in a Series C funding round.
- 2021: Vercel aquired Turborepo (incremental bundler system for JavaScript and TypeScript).
- 2022: Vercel aquired Splitbee (tracking and analyzing for online businesses).
- 2024: Vercel is valued at $3.25 billion.

## Main Features

Vercel is a complete hosting platform for developers, providing mulitple technologies for the Front-end but also some elements requires for the back-end as well. Vercels product stack is meant to be end-to-end in that it adresses functionality around developing, previewing and deployment for developers.

- **Easy deployment features:**
  Vercel features easy deployment, allowing developers to integrate their Git repositories directly. Pushing to main branch or PR automatically triggers a build and deploys a preview. Eliminates the steps of manual deployment steps.

- **Serverless functions:**
  Vercel includes built-it support for serverless functions. This allows developers to add a dynamic backend to their frontend apps without provisioning or managing servers. These functions are automatically deployed as API-endpoints and scales on demand.

- **Edge network and Global CDN:**
  Vercel’s platform is powered by a globally distributed edge network. This ensures that applications are delivered to users with minimal latency, regardless of their geographic location. Static assets, serverless functions, and dynamic content all benefit from this edge-first approach.

- **Framework support:**
  Vercel is optimized for modern frameworks with first-class support for Next.js, which Vercel created. It also supports other popular frameworks like React, Vue.js, and Svelte. Developers can leverage Vercel’s platform to build and deploy static sites, single-page applications, and server-side rendered apps with ease.

- **Analytics and performance monitoring:**
  Vercel provides built-in analytics tools to track performance metrics like page load speed, time to first byte (TTFB), and other web vitals. These insights help developers optimize their applications.

- **CI/CD Integration:**
  Vercel automates the continuous integration and continuous deployment (CI/CD) process. Every push to a repository automatically creates a deployment preview, enabling developers and stakeholders to test changes before merging them into production.

## Market Comparison

Vercel vs. Netlify

Netlify and Vercel are two large, popular plaforms for web hosting. They provide most of the same services, while they do have some differences.

- **Ease of use:**
  Both platforms are simple and easy to use with minimal configuration.

- **Deployment speed**
  Both platforms provide seamless Git integration and fast deployments. Although Vercel with Next.js offers the capability to deploy a server-side rendered Next.js application, which is not as easy with Netlify.

- **Serverless functions:**
  Both platforms offers serverless functions as a part of their service, but Vercels is a bit more powerful with its integration of Next.js.

- **Global delivery:**
  Both platforms use global CDNs to ensure fast and reliable content delivery to their users.

- **Pricing:**
  Both platforms offer a free, pro and enterprise pricing for projects. The pro plan is similar in pricing with 19$ at Netlify and 20$ at Vercel and similar features. What suits who depends on the project and what features are needed.

## Getting Started with Vercel

**To deploy a project:**

1. You need to create a user at Vercel. You can also sign up with Github, GitLab and Bitbucket.

2. Install a project locally with npx or npm:

   npx create-next-app@latest my-vercel-app
   cd my-vercel-app

   After this, you can customise your project as needed.

3. Initialise Git with your project:

   git init
   git add .
   git commit -m "Initial commit"

   Create new repo on Github or preffered Git provider and push your project.

   git remote add origin <your-repo-url>
   git branch -M main
   git push -u origin main

4. Connect repository to Vercel

   Log in and go to your dashboard.
   Click "new project" and select "Import Git repository"
   Pick Git provider and select your repository.
   Configure any deployment settings if needed and click "Deploy"

5. Wait for deployment

   Vercel will automatically detect the framework and configure the build process.

   Once done with deploying, Vercel provides you with an unique URL for your project.

   It is as easy as that!

**To make changes to your project:**

1. Edit code locally

2. Push changes to Git

3. Vercel will automatically trigger a new deployment!

**Use Analytics and Monitoring:**

Head to the analytics tab in the Vercel dashboard. Here you can track performance metrics like load times and user data.

**Collaborate with a team:**

Go to settings and find the team section to invite team members to your project.

## Conclusion

Vercel is a top platform for frontend developers that offers a combination of simplicity, performance, and scalability. The seamless deployment process, built-in serverless functions and global edge network make it a easy choice for hosting modern web applications. While it does have some limitations, especially for heavy backend use cases, it excels as a platform for static sites, server-side rendered apps, and especially for projects using modern frameworks like Next.js. For developers looking to streamline their workflows and deliver lightning-fast experiences to users, Vercel is a tool to consider.

## References

- https://research.contrary.com/company/vercel
- https://en.wikipedia.org/wiki/Vercel
- https://vercel.com/docs
- https://dev.to/lilxyzz/netlify-vs-vercel-2024-free-hosting-face-off-oo9
- https://www.getfishtank.com/insights/vercel-vs-netlify
- https://vercel.com/docs/getting-started-with-vercel

## Additional Resources

- https://turbo.build/
- https://nextjs.org/governance
- https://vercel.com/pricing?utm_source=google&utm_medium=cpc&utm_campaign=Brand_Vercel_T2&utm_campaign_id=17166484772&utm_term=vercel%20pricing&utm_content=150538224945_665278891380&gad_source=1&gclid=Cj0KCQiA19e8BhCVARIsALpFMgE-A6UEpft4wuy_J_BbLkrtNUEOrCNyvbEdr2bRvkh_MI_GyblrOSkaAnIcEALw_wcB
- https://www.netlify.com/pricing/
