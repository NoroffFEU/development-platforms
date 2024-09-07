---
title: Sanity
author: Anne-Serine ([title](https://github.com/Anne-Serine))
tags: sanity, case study, cms, crystallize, wordpress
---

![sanity logo](https://cdn.worldvectorlogo.com/logos/sanity.svg)

## Introduction

Sanity is a cloud-based, open-source content management platform designed to handle structured content across various devices and channels. It operates as a headless CMS, meaning it separates content management from content presentation, allowing developers to deliver content anywhere, including websites, apps, and other digital platforms, through APIs.

Sanity offers a fully customizable, real-time backend and a flexible user interface called Sanity Studio, which developers can tailor to specific needs. The platform supports integration with other technologies and frameworks, making it a versatile tool for managing and distributing content efficiently. Trusted by major brands, Sanity is designed for flexibility, scalability, and collaboration, making it suitable for both small teams and large enterprises.

## Brief History

Sanity originated from a Norwegian digital agency called Bengler, and it was founded in 2017 by Øyvind Rostad, Simen Svale Skogsrud, Magnus Hillestad, and Even Westvang. The company started as a response to the limitations they encountered while building digital products and managing content for clients.

The idea for Sanity emerged during a project for Amedia, a group of 60 Norwegian newspapers. The team built a system to manage content in a flexible way, treating content as structured data that could be easily reused and adapted for different channels. This was a new approach compared to traditional content management systems, which were often rigid and hard to customize.

Their success with Amedia and other projects showed them that this structured content approach could change how digital products were built. While working on a project for the Dutch architectural firm OMA, they developed an early version of Sanity. The project needed an archive for hundreds of projects and contributors, and Sanity's flexibility allowed the creation of both a dynamic website and print-on-demand books without needing to reformat the content.

After two years of refining the platform and testing it with customers, Sanity was officially launched in November 2017. It was designed to overcome the shortcomings of existing content management systems, which were often complex and not well-suited for modern needs.

The founders designed Sanity to evolve with future content needs, enabling real-time collaboration and easy integration with various digital platforms. The company has continued to grow, especially in the U.S., and is building a strong community around its open-source tools.

## Main Features

| Feature                 | Description                                                                                                                                                                                                                                                                                                     |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Structured Content      | In Sanity, content is stored as structured data, typically in JSON format. This means that every piece of content, whether it's text, images, or metadata, is treated as data that can be easily queried, manipulated, and reused.                                                                              |
| Real-Time Collaboration | Real-time collaboration in Sanity allows multiple users to work on the same document at the same time. Changes made by one user are instantly visible to others, making it easier to work together without having to wait or worry about overwriting someone else’s work.                                       |
| API-First Approach      | Makes Sanity incredibly flexible, powerful, and adaptable for modern content needs. The API-first approach allows you to query exactly the content you need, optimizing performance and reducing unnecessary data load. Sanity uses GROQ (Graph-Relational Object Queries) or GraphQL-API to fetch the content. |
| Sanity Studio           | Sanity Studio is the customizable content management interface of Sanity.io, providing a unique and flexible way to manage content. Unlike traditional CMS dashboards, Sanity Studio is built as a React single page application (SPA), making it highly adaptable to fit specific project needs.               |

## Comparison

### Sanity vs. WordPress (Traditional CMS platform)

A headless CMS like Sanity provides a backend-only approach where content is delivered via APIs to any frontend, offering flexibility to use any technology or framework. It's ideal for developers who want full control over their frontend and need to deliver content across multiple platforms (web, mobile, etc.). While more scalable and secure, it requires more setup and technical skills.

In contrast, a traditional CMS like WordPress is an all-in-one solution that includes both backend and built-in frontend capabilities. It is user-friendly and designed for non-developers, with themes and plugins for easy setup. However, it's less flexible, and performance can suffer without careful management. WordPress is best suited for simpler websites, blogs, or quick projects that don't require much coding.

Overall, Sanity offers greater flexibility and control for complex projects, while WordPress is perfect for simpler, faster setups with minimal technical overhead.

![Architecture of a monolithic CMS - ref. Sanity Website](https://cdn.sanity.io/images/3do82whm/next/cd1a1fe036fdc880c3ca189ac28eda1f036273d4-662x232.svg?h=232&fit=max&auto=format)
*Architecture of a monolithic CMS - ref. Sanity Website*

### Sanity vs. Crystallize (Headless Commerce platform)

While Sanity and Crystallize are both headless CMSs, Sanity is more flexible and general-purpose, suitable for various types and channels, while Crystallize is tailored specifically for eCommerce.

Crystallize provides advanced product management features, such as product variants, rich descriptions, pricing, and inventory. It’s optimized for fast content delivery with a powerful GraphQL API, making data fetching quick and efficient. Crystallize also includes built-in support for eCommerce functionalities like subscriptions, payments, and checkout processes. It is ideal for businesses focused on online retail, offering robust product catalog management, quick setup for selling online, and seamless integration with eCommerce tools.

![Architecture of a headless CMS - ref. Sanity Website](https://cdn.sanity.io/images/3do82whm/next/a6631afb88ab609e8bc64b700b9f2c50998739b4-685x345.svg?h=345&fit=max&auto=format)
*Architecture of a headless CMS - ref. Sanity Website*

### Comparison table

**Sanity, Crystallize, and WordPress**

| **Feature**                  | **Sanity**                                                      | **Crystallize**                                                  | **WordPress**                                                    |
| ---------------------------- | --------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| **API**                      | GROQ (native query language)                                    | GraphQL API for granular data fetching                           | RESTful API                                                      |
|                              | GraphQL API support                                             |                                                                  | GraphQL support via plugins                                      |
| **Structured Data**          | Strong focus on structured content                              | Optimized for structured eCommerce data                          | Primarily for unstructured content                               |
|                              | Suitable for both eCommerce and general content management      | Includes Product Information Management (PIM)                    | Structured data possible with plugins or custom development      |
| **Data Storage**             | Schemaless document store, flexible content modeling            | Structured data for products, categories, and variants           | MySQL relational database                                        |
|                              |                                                                 | PIM capabilities                                                 | Custom fields require plugins or code                            |
| **Content Management**       | Real-time collaboration                                         | Product and category management                                  | Full content creation and management                             |
|                              | Rich text, images, documents                                    | Price rules, assets, descriptions, technical details             | Support for posts, pages, custom post types                      |
|                              | Highly customizable content types                               |                                                                  |                                                                  |
| **Hosting**                  | Fully cloud-based, managed by Sanity                            | Cloud-based, managed by Crystallize                              | Self-hosted or managed hosting solutions                         |
|                              | Globally distributed CDN                                        | Includes CDN and performance optimizations                       | Requires PHP and MySQL                                           |
| **Infrastructure**           | Decoupled and modular services                                  | Decoupled architecture                                           | Integrated, monolithic structure                                 |
|                              | Separate and replaceable services (CMS, search, media)          | Modular services (CMS, PIM, checkout)                            | Extensible with plugins                                          |
| **Frontend**                 | No built-in frontend                                            | No built-in frontend                                             | Built-in frontend with themes and templates                      |
|                              | Headless CMS, requires custom frontend (React, Vue, etc.)       | Headless approach, custom frontend development required          | Supports headless architecture with REST or GraphQL              |
| **Customization**            | Highly customizable with Sanity Studio                          | Customizable through APIs, webhooks, and SDKs                    | Extensive customization via themes, plugins, and custom code     |
|                              | Plugin support                                                  | Focused on enhancing eCommerce capabilities                      | Supports child themes for more control                           |
|                              | React-based SPA (Single Page Application) support               |                                                                  |                                                                  |
| **Ecosystem and Plugins**    | Growing ecosystem                                               | Limited plugin ecosystem                                         | Vast ecosystem with thousands of plugins and themes              |
|                              | Official and community plugins                                  | Focused on integrations with eCommerce tools (payment, shipping) | Covers nearly every use case                                     |
| **SEO Capabilities**         | Custom setup or third-party integration required for SEO        | SEO handled via custom development or third-party tools          | Strong SEO capabilities with plugins like Yoast SEO              |
|                              |                                                                 |                                                                  | Built-in permalink structure customization                       |
| **Scalability**              | Highly scalable, supports high traffic with real-time updates   | Designed for scalability in large eCommerce applications         | Scalable, but performance depends on hosting and management      |
|                              | Cloud infrastructure                                            | Can handle extensive catalogs and transactions                   |                                                                  |
| **Performance**              | Optimized for performance                                       | High performance for eCommerce                                   | Performance varies                                               |
|                              | Real-time updates, CDN integration, flexible data querying      | Optimized data fetching and delivery                             | Can be optimized with caching plugins, CDNs, proper hosting      |
| **Security**                 | Managed by Sanity                                               | Managed by Crystallize                                           | Requires regular updates to core, themes, and plugins            |
|                              | Regular updates, encryption, compliance with security standards | SSL, regular updates, data protection built-in                   | Common target for attacks but can be secured with best practices |
| **Maintenance**              | Low maintenance                                                 | Minimal maintenance                                              | High maintenance                                                 |
|                              | Updates handled by Sanity                                       | Updates managed by Crystallize                                   | Frequent updates needed for core, plugins, themes                |
| **Pricing**                  | Tiered pricing based on usage                                   | Pricing based on usage                                           | Open-source and free to use                                      |
|                              | Free tier for small projects                                    | Plans suited for different eCommerce needs                       | Costs for hosting, premium plugins, and themes can add up        |
|                              | Scalable with enterprise plans                                  |                                                                  |                                                                  |
| **Community and Support**    | Growing community                                               | Smaller community                                                | Large, active community                                          |
|                              | Official documentation                                          | Strong support for eCommerce users                               | Extensive resources, forums, tutorials, third-party support      |
|                              | Enterprise-level support available                              | Official documentation and customer support                      |                                                                  |
| **Use Cases**                | Ideal for content-driven websites                               | Best for large-scale eCommerce platforms                         | Suitable for blogs, small to medium-sized websites               |
|                              | Suitable for eCommerce with customization                       | Multi-channel retail, robust product management                  | Content-heavy sites, basic eCommerce                             |
|                              | Real-time collaboration platforms                               |                                                                  |                                                                  |
|                              | Projects requiring structured content                           |                                                                  |                                                                  |
| **Internationalization**     | Supports multiple languages and locales                         | Designed with international eCommerce in mind                    | Multi-language support through plugins                           |
|                              | Custom setups needed for complex internationalization           | Supports multiple currencies, languages, tax rules               | Requires additional setup for global eCommerce                   |
| **Integration Capabilities** | Integrates with various services via API                        | Integrates with popular eCommerce tools                          | Extensive integration options with CRM, eCommerce, marketing     |
|                              | Supports eCommerce platforms, marketing tools, analytics        | Payment gateways, shipping providers                             | Automation, social media through plugins and APIs                |
| **Real-Time Collaboration**  | Built-in real-time editing and collaboration features           | No real-time collaboration features                              | No native real-time collaboration                                |
|                              | Suitable for teams working on content simultaneously            | Focused on eCommerce workflows                                   | Possible through third-party plugins or services                 |
| **Versioning**               | Content versioning and history built-in                         | Versioning focused on product and pricing data changes           | Basic content revision history                                   |
|                              | Easy rollback to previous versions                              | Not as comprehensive as Sanity’s content versioning              | Not as robust as Sanity's versioning                             |
| **Learning Curve**           | Moderate learning curve                                         | Moderate learning curve                                          | Relatively low learning curve for basic use                      |
|                              | Especially if unfamiliar with headless CMS concepts and GROQ    | Especially for developers new to GraphQL or headless eCommerce   | Higher for advanced customization or headless implementations    |

## Getting Started

### Sanity account
You will need a **Sanity account**, this is free and you can create one at Sanity´s website: <br>
  [Sanity - create account](https://www.sanity.io/login/sign-up?origin=https%3A%2F%2Fwww.sanity.io%2Fget-started%3Fref%3Dnavbar)

### Node and npm
To install and run the Sanity Studio development server locally, you need **Node and npm** installed (or an npm-compatible JavaScript runtime) <br>
  For more information how to do this: <br>
  [npm Docs - downloading and installing Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### Create a new project from the command line

This command creates a new project and dataset, and sets up a new project folder with all the files and dependencies you need to get started. <br>
Open terminal, and type:

```
npm create sanity@latest
```

- Agree to install Sanity package (create-sanity@current-version-number)
- Log in with Google, GitHub or email/password
- Answer the following questions (select project, create project name, template, package manager for installation etc.)

When this is done, navigate to the correct folder

```
cd new-example-project-path
```

For opening it in VScode:

```
code .
```

When you are inside the project in VScode open the terminal. To get it up and run locally, type:

```
npm run dev
```

Click the link, and it will open Sanity Studio in the browser.


### Deployment
In order to **deploy** you need to install the Sanity CLI

```
npm i -g sanity@latest
```
```
npm run build
```
```
npm run deploy
```


### Other helpful commands

To open the documentation in a browser
```
npm run docs
``` 

To open the project settings in a browser
```
npm run manage
``` 
To explore the CLI manual
```
npm run help
```

You can add these as scripts in package.json

example:
```
"scripts": {
  "docs": "sanity docs"
}

```

## Conclusion

To sum it up, when looking at Sanity, Crystallize and WordPress, each of these CMS platforms has its own strengths depending on what you need. Sanity stands out for its flexibility, real-time collaboration, and the way it handles data, making it easy to use across different devices via API. This makes it a solid choice for developers who want to create uniqe, dynamic content experiences on any platform.

Crystallize shares many of Sanity´s strengts, particulary in terms of data structuring and API-driven content delivery. However, it is more specialized, with a strong focus on eCommerce. This makes Crystallize an attractive option for developers who are building online stores and need robust product management, inventory, and checkout features built right in.

WordPress, on the other hand, is a more traditional CMS that provides a complete package with both backend and frontend services. Its ease of use and extensive plugin ecosystem make it accessible to users with minimal development experience.

In the end, the choice between these platforms really comes down to what your project needs and how much control you want over the frontend. For developers, headless CMSs like Sanity can be especially appealing because they offer the freedom and customization to build things exactly how you want, even if it means a bit more setup and development work upfront.

## References

- [Sanity website](https://www.sanity.io/)
- [ikius.com - blog](https://ikius.com/blog/sanity-io)
- [try.no - Sanity partner](https://try.no/en/tjenester/teknologi/sanity-partner)
- [cmsConnected - news archive](https://www.cms-connected.com/News-Archive/June-2018/Norwegian-CMS-startup-Sanity-The-New-Kid-in-Town)
- [SWHabitation - blog](https://www.swhabitation.com/blogs/what-is-sanity-a-beginner-friendly-guide)
- [Crystallize website](https://crystallize.com/)
- [PearlConvert - website (Digital commerce website)](https://www.pearlconvert.no/en)
- [PearlConvert - website (about Crystallize)](https://www.pearlconvert.no/tjenester/teknologi/crystallize-headless-commerce)
- [WordPress website](https://wordpress.com/)
- [Headless CMS explained in 2 minutes](https://www.youtube.com/watch?v=-Uor3I0n_vQ)

**Logo and pictures**
- [Sanity logo](https://worldvectorlogo.com/logo/sanity)
- [Illustration of a headless CMS](https://www.sanity.io/headless-cms)
- [Illustration of a monolithic CMS](https://www.sanity.io/headless-cms)

## Additional Resources

- [Sanity documentation](https://www.sanity.io/docs)
- [Sanity Crash Course](https://www.youtube.com/watch?v=bDVAQZVeebw&t=59s)
- [npm Docs - downloading and installing Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
