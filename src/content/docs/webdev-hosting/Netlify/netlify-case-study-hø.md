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

## Market Comparison

| Feature                               | Netlify                                                                                                                                             | Vercel                                                                                                                                                                |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Server-Side Rendering (SSR)**       | Netlify doesn’t offer native support for SSR in the same way as Vercel                                                                              | Deeply integrates with Next.js, making it a better choice for projects where SSR is essential, such as those requiring dynamic content and improved SEO performance   |
| **Edge Network Support**              | Utilizes a global CDN to ensure fast content delivery                                                                                               | Ideal for apps where performance is the highest priority and users are distributed globally                                                                           |
| **Scalability and Automatic Scaling** | Offers automatic scaling and works well for various project sizes, but Vercel is better for handling highly dynamic apps requiring advanced scaling | Excels in scaling by automatically adjusting serverless functions and edge deployments based on demand. A better choice for large-scale apps with fluctuating traffic |
| **Asynchronous execution**            | Offers "background functions" that run asynchronously for up to 15 minutes, ideal for tasks like batch processing or web scraping                   | Serverless functions are synchronous by nature                                                                                                                        |
| **Analytics**                         | Server-side, GDPR-compliant, tracks visitors and performance without slowing the site                                                               | Client-side, focuses on Core Web Vitals but may slow down the site; supports Next.js, Nuxt, and Gatsby                                                                |
| **Pricing**                           | 100 GB free bandwidth, 1 TB on Pro; 300 build minutes/month with extra 500 minutes for $7                                                           | 100 GB free bandwidth, 1 TB on Pro; 6000 build minutes/month                                                                                                          |

## Getting Started

1. **Signing Up**
   Create a free account on Netlify. You can sign up using GitHub, GitLab, Bitbucket, or email.

2. **Connect and select repository**
   Click the "Deploy to Netlify" button to be directed to the Netlify app. Choose a platform to deploy your project from—GitHub, GitLab, Bitbucket, or Azure DevOps—and select the repository you want to deploy.

3. **Configuration for the project**
   Set up the build settings, including the deployment branch, build command, and publish directory. You can also customize the site name, which determines the default URL for your site.

4. **Deploy your site**
   Once your settings are configured, click the "Deploy [your project name]" button to start the deployment process. Netlify will clone the repository and build the project. When the deployment is successful, you'll receive a production URL to access your website.

## Conclusion

Netlify stands out as a powerful and user-friendly platform for modern web development. Its features, such as continuous deployment, serverless functions, and global CDN, make it an excellent choice for developers seeking efficiency and scalability. While it excels in simplifying web development and deploying static sites, its serverless architecture and pricing structure may pose limitations for large-scale projects or applications requiring advanced backend processes.

Choosing between Netlify and Vercel depends on the specific requirements of your project, such as the need for asynchronous execution, serverless architecture, or seamless SSR integration.

Ultimately, Netlify provides a robust solution for developers looking to streamline workflows, deliver high-performing websites, and maintain cost-effectiveness, making it a competitive option in the ever-growing landscape of web hosting platforms.

## References

- [Netlify Docs](https://docs.netlify.com/platform/what-is-netlify/)
- [Netguru](https://www.netguru.com/blog/what-is-netlify)
- [Canvas Business Model](https://canvasbusinessmodel.com/blogs/brief-history/netlify-brief-history)
- [Netlify functions](https://www.netlify.com/platform/core/functions/)
- [Netlify edge](https://www.netlify.com/platform/core/edge/)
- [OTAKOYI](https://otakoyi.software/blog/overview-of-benefits-and-drawbacks-of-netlify-cms)
- [Vercel vs Netlify: How to Pick the Right Platform](https://focusreactive.com/vercel-vs-netlify-how-to-pick-the-right-platform/)
- [Vercel vs Netlify: Battle of the Composable Web platforms](https://ikius.com/blog/vercel-vs-netlify)
