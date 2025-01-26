---
title: Vercel
author: Elin T. Jakobsen <elinkrull>
tags: Vercel, hosting, web-developing, cloud platform
---

## Introduction

Vercel is a modern web hosting platform that provides the tools, workflows, and infrastructure you need to build and deploy your web applications faster, without the need for additional configuration. Vercel is a popular choice for hosting static sites and serverless web applications, especially for those using frameworks like Next.js.
It is easy to use and great for smaller projects.
During development, Vercel provides tools for real-time collaboration on your projects such as automatic preview and production environments, and comments on preview deployments.

## Brief History

- 2015: Vercel was originally founded as ZEIT by Guillermo Rauch, Tony Kovanen and Naoyuki Kanezawa.
- 2020: ZEIT rebranded to Vercel.
- 2021: Vercel raised $102 million in a Series C funding round.
- 2021: Vercel acquired Turborepo.
- 2022: Vercel acquired Splitbee.
- 2024: Vercel was valued at $3.25 billion.

## Main Features

Vercel is known for its focus on speed, simplicity and developer experience. It is a perfect choice for personal blogs, portofolios, informational sites etc. Vercel is offering seamless integration with static site generators and supports a wide range of the most popular frontend frameworks, optimizing how your site builds and runs no matter what tool you use. It is also extreamly fast since files are served directly from a server or a global CDN.
Vercel supports serverless functions, allowing developers to add backend logic without managing servers.

## Market Comparison

Comparison of a Cloud Hosting(AWS, GCP, Azure) and a Static Web Hosting(i.e Vercel, Netlify, GitHub Pages):

| Features | Cloud Hosting | Vercel(static web hosting) |
| --- | --- | --- |
| Content Type | Dynamic, complex apllications | Static, serverless applications |
| Scalability | Highly scalability | Limited scalability |
| Ease of use | Moderate to complex; requires setup | Simple and developer friendly |
| Cost | Pay-as-you-go; varies with usage | Low or free for simple websites |
| Complexity | High | Simple and beginner-friendly |
| Performance | Fast, but depends on setup | Extremely fast with CDNs |
| Dynamic Features | Full backend support, databases, APIs | Serverless functions, APIs |

## Problems or challenges

It is heavily optimized for Next.js, and using other frameworks is supported but may not be as seamless. 

Most resources include an amount of usage your projects can use within your billing cycle. If you exceed the included amount, you are charged for the extra usage.

It has a limited backend capability, and are therefor not a good choice for complex backend applications. 

## Getting Started

- To get started, you must create an account with Vercel.

- Then you select the plan that´s right for you. You can choose bewteen Hobby, Pro and Enterprise depending on your needs.

-  Once you create an account, you can choose to authenticate either with a Git provider or by using an email.

- To deploy a new Project, you must import an existing Git Repository or get started with one of Vercels templates.

- Vercel supports different frameworks, and you will find instructions for your chosen framework in the docs.

- You can use a Vercel CLI to carry out most tasks on Vercel. To use it, you need to install it by typing in pnpm i -g vercel.

- To trigger a deployment, you just have to import an exisiting project or template, or push a Git commit through your connected integration or use vercel deploy from the CLI.

1. Importing by using a template:

- To create a new project on Vercel by using a template, you select a template from https://vercel.com/templates. You can use the filters to select a template based on use case, framework, and other requirements.
Once you've selected a template, click "Deploy" on the template page to start the process.
To ensure you can easily update your project after deploying it, Vercel will create a new repository with your chosen Git provider. Every push to that Git repository will be deployed automatically.
First, select the Git provider that you'd like to connect to. Once you’ve signed in, you’ll need to set the scope and repository name. At this point, Vercel will clone a copy of the source code into your Git account.
Once the project has been cloned to your git provider, Vercel will automatically start deploying the project. This starts with building your project, then assigning the domain, and finally deploying the project.

- When the project is deployed, a URL is generated and are automatically given a subdomain under the vercel.app domain. If you continue to your dashboard, you can click on the domain to preview a live, accessible URL that is instantly available on the internet.

- Finally, you'll want to clone the source files to your local machine so that you can make some changes later. To do this from your dashboard, select the Git repository button and clone the repository.

- The project can be customized by configuring environment variables and build options. 

- Vercel automatically configures builds settings based on your framework, but you can customize the build in your project settings or within a vercel.json file.

- You can assign a domain to your new deployment.

2. Import an existing project: 

- The project can be any web project that outputs static HTML content. If you use any af Vercels´s supported frameworks, the optimal build and deployment configurations will be automatically detected and set.

- On the "New Project" page, select the Git provider that you would like to import your project from. 

- Find the repository in the list and select Import.

- Configure the the Project settings if needed, included build and output settings and Environment Variables.

- Press the "Deploy" button.

- With Vercel you can either buy a new domain or use an existing domain when the site is deployed.

## Conclusion

Vercel is great for smaller projects and static web applications, and if you are using any of Vercel´s supported frameworks, especially Next.js.
They will likely continue focusing on simplisity and developer experience.
As AI-powered web applications grow in popularity, Vercel could explore integrations with AI tools or platforms to simplify deploying machine learning models at the edge or within serverless functions.

## References

- [vercel.com] (https://vercel.com) 
- [vercel.com/docs] (https://vercel.com) 
- [wikipedia.org] (https://en.wikipedia.org/wiki/Vercel)
- [Chatgpt.com] (https://www.chatgpt.com)