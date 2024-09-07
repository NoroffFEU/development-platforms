---
title: Hygraph
keywords: development platforms, cms, hygraph
tags: development platforms, cms, headless-cms
---

## Introduction

Developing a fully functional website for a client involves more than just implementing good design and a responsive front-end application. In a recent project, I was tasked with building a restaurant website that required a dynamic menu page and an events page. To meet the client’s needs, which included the ability to easily access, edit, and delete items on these pages, I needed to find an appropriate back-end platform and framework that could handle content management without requiring coding knowledge.

## Exploring Frameworks options

A simple search reveals numerous frameworks, which can make the selection process overwhelming. To streamline my decision-making process, I focused on React-based frameworks, which are known for their flexibility and performance. After considering several options, including React Native, Next.js, and Gatsby, I decided to proceed with Next.js, primarily because it best suited the project’s requirements for a web-based solution.

### why Next.js

Below is a table outlining several reasons why I chose Next.js over Gatsby:

| Criteria      |                       Next.js                       |                                  Gatsby |
| ------------- | :-------------------------------------------------: | --------------------------------------: |
| Ease of Use   |           Simpler setup and configuration           |             Requires more initial setup |
| Performance   |           Excellent server-side rendering           |        Relies on static site generation |
| Flexibility   |        Offers both static and dynamic pages         |       Primarily focuses on static sites |
| Data Handling |    Direct API integration and server-side logic     |       Prefers GraphQL for data fetching |
| Scalability   | Better suited for larger, more complex applications | Ideal for smaller, content-driven sites |

Next.js offers a more flexible approach by supporting both static and dynamic content, making it a robust solution for this project, which required dynamic updates to the website content. Additionally, the server-side rendering capabilities of Next.js ensure improved performance and SEO, both critical factors for a client-facing website.

## What back-end?

To complement the front-end framework, I needed a back-end solution that was flexible, user-friendly, and accessible to the client without requiring any coding expertise. It was also essential that the solution offered basic functionality without incurring additional costs.

### what I needed

The back-end needed to meet the following criteria:

-   Easy to learn
-   Flexible and adaptable
-   User-friendly interface for the client
-   Free or affordable pricing plans
-   Secure and reliable
-   Well-documented for smooth development

### Exploring Top CMS Options

When it comes to content management systems (CMS), various excellent choices cater to different project needs and scales. Here are some CMS options considered before making the final decision:

#### Decap CMS (formerly known as Netlify CMS)

Decap CMS is an open-source CMS designed for use with static site generators like Gatsby and Hugo. It is known for its simplicity and ease of use, making it an excellent choice for content editors. Decap CMS stores content directly in your Git repository, offering seamless version control and effortless static site deployment. It integrates smoothly with popular Git platforms like GitHub, GitLab, and Bitbucket, making it a convenient and reliable option for developers.

#### Sanity

Sanity is a headless CMS that stands out for its real-time collaboration features and highly customizable content structure. With a React-based content studio, Sanity allows you to tailor the editing experience to fit the unique requirements of your project. It also features GROQ, a powerful query language that gives developers precise control over content retrieval and manipulation. Sanity’s flexible schema, live editing capabilities, and robust APIs make it a top choice for dynamic websites, applications, and complex digital experiences.

#### Hygraph (formerly GraphCMS)

Hygraph is a robust headless CMS that combines the versatility of a GraphQL API with an intuitive content management interface. It allows developers to create custom content models and APIs, supporting a wide array of use cases—from simple websites to intricate applications. Hygraph excels in managing structured content and offers advanced features like content localization, roles and permissions, and seamless integrations with various third-party services.

## Choosing a Back-End

Hygraph is a robust headless CMS that offers the versatility of a GraphQL API combined with an intuitive content management interface. It enables developers to create custom content models and APIs, supporting a wide range of use cases—from simple websites to complex applications. Hygraph excels in managing structured content and includes advanced features such as content localization, roles and permissions, and seamless integration with various third-party services.

One of the key advantages of Hygraph for this project was its accessibility. It required no coding knowledge from the client's side, allowing them to easily manage and update content without technical assistance. Additionally, Hygraph's ability to handle queries and data management without needing front-end coding expertise made it an ideal choice for the restaurant website. This ease of setup and use ensured that the client could efficiently manage their website content, including menus and events, directly through the CMS interface, streamlining the entire content management process.

## Summary

In this project, a restaurant website was developed with dynamic content needs, including menu and events pages. After evaluating various React-based frameworks, Next.js was selected for its flexibility, performance, and ability to support both static and dynamic content. To complement this, Hygraph was chosen as the back-end solution due to its robust headless CMS capabilities, which included a user-friendly interface and seamless GraphQL API integration. Hygraph's ease of use allowed the client to manage content effortlessly without needing any coding knowledge, making it an ideal choice for the project. This combination of Next.js and Hygraph provided a scalable, efficient solution that met the client’s requirements and enhanced the website's performance and usability.

The restaurant site that has been created with those decisions: [www.tarbush.no](https://www.tarbush.no)

## References

-   [Next JS vs Gatsby: Choosing the Right React Framework](https://radixweb.com/blog/next-js-vs-gatsby)
-   [Next.js documentation!](https://nextjs.org/docs)
-   [Gatsby Way of Building](https://www.gatsbyjs.com/docs)
-   [Hygraph Docs](https://hygraph.com/docs)
-   [Sanity's Documentation](https://www.sanity.io/docs)
-   [Decapcms Docs](https://decapcms.org/docs/intro/)
