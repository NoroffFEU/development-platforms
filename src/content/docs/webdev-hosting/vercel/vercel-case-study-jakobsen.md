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

- 2015: Vercel was originally founded by Guillermo Rauch, Tony Kovanen and Naoyuki Kanezawa.
- 2020: ZEIT rebranded to Vercel.
- 2021: Vercel raised $102 million in a Series C funding round.
- 2021: Vercel acquired Turborepo.
- 2022: Vercel acquired Splitbee.
- 2024: Vercel is valued at $3.25 billion.

## Main Features
(Describe the primary purpose of the tool that you have selected. Which problems does it solve? Is there something unique about this tool? How can it be useful to developers?)

Vercel is known for its focus on speed, simplicity and developer experience. It is a prfect choose for personal blogs, portofolios, informational sites etc. It is very userfriendly and beginnerfriendly with a simple setup and maintence, and it does not require a backend. It is also extreamly fast since files are served directly from a server or CDN. The Vercel Company maintains the Next.js web development framework, and therefor it is a popular choice for those using Next.js as a framwork on their application.

Vercel supports a wide range of the most popular frontend frameworks, optimizing how your site builds and runs no matter what tool you use.

Deploying on Vercel with one of the supported frameworks gives access to many features, such as:

- Serverless Functions enable developers to write functions that scale based on traffic demands, preventing failures during peak hours and reducing costs during low activity.

- Edge Functions are a fast, scalable solution for delivering dynamic content quickly and globally. By default, Edge Functions are deployed near your site's visitors in one of Vercel's Edge regions.

- Edge Middleware is code that executes before a request is processed on a site, enabling you to modify the response. Because it runs before the cache, Edge Middleware is an effective way to personalize statically generated content.

- Multi-runtime Support allows the use of various runtimes for your functions, each with unique libraries, APIs, and features tailored to different technical requirements.

- Incremental Static Regeneration enables content updates without redeployment. Vercel caches the page to serve it statically and rebuilds it on a specified interval.

- Speed Insights provide data on your project's Core Web Vitals performance in the Vercel dashboard, helping you improve loading speed, responsiveness, and visual stability.

- Analytics offer detailed insights into your website's performance over time, including metrics like top pages, top referrers, and user demographics.

- Skew Protection uses version locking to ensure that the client and server use the same version of your application, preventing version skew and related errors.

## Market Comparison

Comparison of a Cloud Hosting(AWS, GCP, Azure) and a Static Web Hosting(i.e Vercel, Netlify, GitHub Pages):

| Feature | Cloud Hosting | Static Web Hosting |
| --- | --- |
| Content Type | Dynamic and Static | Static Only |
| Scalability | Highly scalability| Limited scalability |
| Cost | Pay-as-you-go; varies with usage | Low or free for simple websites |
| Complexity | High | Simple and beginner-friendly |
| Performance | Fast, but depends on setup | Extremely fast with CDNs |


Comparison of Vercel and Netlify:

| Vercel | Netlify |
| --- | --- |
| Optimized for Next.js, but supports others | Ane framework, with focus on JAMstack |
| Example Feature | This feature does something for a specific reason. |
| Example Feature | This feature does something for a specific reason. |

## Problems or challenges

Most resources include an amount of usage your projects can use within your billing cycle. If you exceed the included amount, you are charged for the extra usage.



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
Once you've selected a template, Click Deploy on the template page to start the process.
To ensure you can easily update your project after deploying it, Vercel will create a new repository with your chosen Git provider. Every push to that Git repository will be deployed automatically.
First, select the Git provider that you'd like to connect to. Once you’ve signed in, you’ll need to set the scope and repository name. At this point, Vercel will clone a copy of the source code into your Git account.
Once the project has been cloned to your git provider, Vercel will automatically start deploying the project. This starts with building your project, then assigning the domain, and finally celebrating your deployed project with confetti.

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

Vercel is great for smaller projects and static web applications, and if you are using any of Vercel´s supported frameworks.

This section can be used to summarize your findings. What are the main advantages and disadvantages of your chosen tool? What are the main use cases for this tool? What are the main limitations of this tool? What does the future look like for this tool?


## References

- [vercel.com](https://vercel.com)
- [wikipedia.org] (https://en.wikipedia.org/wiki/Vercel)
- [Chatgpt.com] (https://www.chatgpt.com)