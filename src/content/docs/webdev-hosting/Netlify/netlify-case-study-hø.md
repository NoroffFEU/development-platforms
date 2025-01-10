---
title: Netlify Case Study
author: Hikari Øverby <H-chai>
tags: Netlify, Web hosting, Development Platforms, Static Websites
---

## Introduction

Netlify is a essential platform designed to make modern web development easier and faster. It helps developers build, deploy, and manage websites, especially those using the JAMstack approach. With its user-friendly tools and global CDN, Netlify simplifies hosting and ensures websites are high-performing, scalable, and ready for production faster.

## Brief History

**2014:** Netlify was founded by Mathias Biilmann (CEO) and Chris Bach (CSO) with the vision of creating a platform that empowers developers to build, deploy, and manage websites effortlessly.

**2015:** Netlify was officially launched and quickly gained popularity for its ability to simplify web development and deployment, offering scalability and flexibility.

**2017:** MakerLoop was rebranded as Netlify.

## Main Features

**Continuous deployment:**
Netlify simplify and accelerate release process of site or app with deploy management options:

- Integrates with GitLab, GitHub, and Bitbucket. When developers push code changes to a connected git repository, Netlify automatically builds and deploys the site.
- Offers deploy previews, allowing developers to review site changes before pushing them to production.
- Provides notifications and logs, enabling developers to track updates directly from Slack, email, or deploy logs.
- Supports branch deploys, so developers can maintain and test alternate versions of site content.

**Serverless functions:**
Netlify supports serverless functions, eliminating the need for developers to manage servers while providing built-in service discovery via an API gateway:

- Enables developers to implement backend services logic without managing servers. Developers can solely focus on code execution.
- Allows atomic deployment, where both frontend code and backend functions are deployed together seamlessly without downtime.
- Currently supports serverless functions built with TypeScript, JavaScript and Go can be deployed.

**Hosting for static websites(Netlify Edge):**
Netlify integrates with a global CDN (content delivery network) and it enables web experiences fast, reliable and secure.

- Every deploy is distributed across Netlify's global edge locations, enabling incredibly fast performance and reduced latency.
- With Netlify Edge Functions, developers can create dynamic, personalized experiences, such as localized content, banner ads, or custom authentication flows.
- Sites and apps are deployed to multiple cloud providers for ultimate reliability.
- Ensures secure web experiences through pre-rendered pages served via edge nodes.

## Advantages

**Improved development efficiency through automated deployment:**

- Netlify integrates with GitLab, GitHub, and Bitbucket, enabling the build and deployment process to be fully automated. This eliminates the need for manual tasks, allowing developers to improve their efficiency.

**Simplification of various tasks through plugins:**

- Netlify offers a variety of plugins that simplify tasks such as setting up custom domains, managing forms, and optimizing images. Additionally, it allows developers to create custom plugins tailored to their specific needs.

**Cost reduction through serverless functions/architecture:**

- Netlify adopts a serverless architecture, eliminating the need for servers. This not only reduces the effort required for server setup and management but also helps lower costs.

## Disadvantages

**Limitations of serverless architecture:**

- Netlify adopts a serverless architecture, eliminating the need for servers. However, when server-side processing is required, it is necessary to use other services.

**Increased costs based on the scale of the project:**

- Netlify offers both a free and a paid plan, but as the scale of the project increases, the costs may rise.

**Concerns about security-related issues:**

- Since the CDN cache may contain sensitive information such as personal data, it is essential to implement thorough security measures.

## References

- [Netlify Docs](https://docs.netlify.com/platform/what-is-netlify/)
- [Netguru](https://www.netguru.com/blog/what-is-netlify)
- [Canvas Business Model](https://canvasbusinessmodel.com/blogs/brief-history/netlify-brief-history)
- [Netlify functions](https://www.netlify.com/platform/core/functions/)
- [Netlify edge](https://www.netlify.com/platform/core/edge/)
- [OTAKOYI](https://otakoyi.software/blog/overview-of-benefits-and-drawbacks-of-netlify-cms)
