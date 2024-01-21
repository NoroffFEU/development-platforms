---
title: Vercel Case Study
author: Magnus Pladsen <MagnusPladsen>
tags: Vercel, case study, deployment, automation, hosting
---

## Introduction

Vercel, formerly ZEIT, is an american cloud platform designed to streamline the deployment process for web applications. It provides an efficient way for developers to host their projects, simplifying the complexities often associated with deployment. The company is also well known for creating the Next.js react framework.

I will base this case study on being a solo developer using it for private or smaller projects.

## Brief History

| **Year** | **Milestone**                                                                          |
|----------|----------------------------------------------------------------------------------------|
| 2015     | Guillermo Rauch founded Vercel as ZEIT                                                 |
| 2016     | Nicolás Garro joined ZEIT as the Founding Designer and Head of Design                  |
|          | Next.js was released as an open-source project on GitHub                               |
| 2020     | ZEIT was rebranded to Vercel                                                           |
|          | The first Next.js conference took place on October 27                                  |
|          | Next.js Commerce v1 was introduced during the Next.js Conf 2020                        |
| 2021     | Vercel raised $102 million and the company was valued at $2.5 billion November 2021    |
|          | In December Vercel acquired Turborepo                                                  |
| 2022     | Vercel acquired Splitbee                                                               |
| 2023     | Vercel Postgres was introduced, a serverless PostgresAQL database integrated in Vercel |
|          | Vercel introduced v0 AI driver creation of code and design                             |

## Main Features

Some of Vercel's features:

- **Infrastructure and security:** Vercel utilizes an Edge Network for intelligent traffic routing near users, offering dynamic scalability while ensuring default security through isolated request handling and global content replication for stability.
- **Instant deployment:** Vercel enables instant deployment by connecting directly to GIT repositories. When developers push new code trough GIT, Vercel automatically detects changes and deploys the updated version without manual intervention.
- **The native Next.js platform:** Vercel's platform is made by the creators of Next.js, so Next.js applications will have multiple advantages when deployed to Vercel compared to other similar hosting solutions.
- **Vercel PostgreSQL:** is a serverless SQL database that is integrated in Vercel Functions. It enables you to create secure PostgreSQL databases that are easily scalable.
- **Vercel KV:** is a durable Redis database that enabled users to store and retrieve JSON data.
- **Vercel Blob ( Beta ):** allows users to serve and upload files trough a global network with unique and unguessable URLs.
- **Vercel Edge config:** is a global data store that enables experimentation with feature flags, A/B testing, critical redirects, and more. The vast majority of reads from the Edge Config will complete within 15ms to as low as 0ms in some scenarios.

Feature table:

| **Feature**                 | **Description**                                         |
|-----------------------------|---------------------------------------------------------|
| Infrastructure and security | Optimizes performance via global server network         |
| Instant deployment          | Automatically deploys changes from Git repos            |
| The native Next.js platform | Many big advantages with Next.js applications           |
| Vercel PostgreSQL           | Serverless SQL database integrated in Vercel            |
| Vercel KV                   | Serverless Redis database using JSON data               |
| Vercel Blob ( Beta )        | Serve and upload files with unique and unguessable URLs |
| Vercel Edge config          | Global data store with low latency and many features    |

## Market Comparison

Compared to other hosting platforms, Vercel stands out for its seamless integration with version control systems, automated deployment, and its focus on simplicity.

Next.js is a very popular react framework with big advantages over vanilla react, Vercel has many big advantages with Next.js applications that the competition does not have because the developers behind Vercel is the same as Next.js.

Vercel is also the most versatile in accommodating languages and allows for Node, Go, Python, and Ruby. Competitors like Netlify only allows for Node and Go, while Gatsby only allows for Node.

Another advantage that Vercel has over the biggest competitors, Vercel has their own extremely popular framework but also still allows and work very well with other frameworks. Gatsby also has their own framework but don't allow any other frameworks and Netlify does not have their own framework but allows a big collection of frameworks.

**There are many advantages to using Vercel as your hosting platform:**

- Easy-to-use user interface
- Easy integration with backend
- Real-time collaboration with your teammates
- Preview builds live and test automatically
- Smart features like Edge functions, analytics, AI integrations
- The Next.js native platform
- Free domain name
- Free for personal use with unlimited projects
- Integrated support for multiple serverless databases

**Of course as with everything there are some downsides:**

- Can be expensive for bigger and more used applications
- Limited support for databases and backend services prevents them from creating more sophisticated applications
- Interface and documentation to be overly complex, especially for beginners or non-technical users.

**Usage comparison:**

Apparently Vercel is used by 0.4% of all the websites in the world and by 0.6% of all the websites that rank in the top 1,000,000.
Netlify is used by 0.3% of all the websites and by 0.3% of all the websites that rank in the top 1,000,000.
Gatsby cloud is used by less than 0.1% of all the websites.

## Getting Started

### 1.

To get started with Vercel navigate to this link in your browser, [Get started](https://vercel.com/new).

`https://vercel.com/new`

### 2.

Select a GIT provider and import and existing project from a GIT repository.

### Alternative.

Clone a template on the right side of the page. Then you will create an account and deploy a test template.

## Conclusion

Vercel packs a lot of great features that no other competitors have and has a really good free tier.

My focus for this case study was mostly on using Vercel as a hosting platform for a private developer, since that is where most of my experience lies. 

If someone where to only deploy an simple application without any extensive configuration, analytics or frequent redeploy i would also recommend Netlify. 

But if you are interested in using any of Vercel´s features and for an example deploy a Next.js application i would greatly recommend using Vercel.

For personal development or smaller project you can very well use the free tier of Vercel and never need to pay anything at all with the free hosting and free domains.

I believe that the features and possibility of Vercel is outweighing some of the downsides like it's complex documentation and interface.

When you get to know Vercel it has many features that could make your development life easier if not more exiting.

## References

- [Vercel's Wikipedia](https://en.wikipedia.org/wiki/Vercel)
- [Next.js Wikipedia](https://en.wikipedia.org/wiki/Next.js)
- [Vercel's homepage](https://vercel.com/)
- [Vercel's blog](https://vercel.com/blog/category/company-news)
- [What is Vercel and Why You Should Use It](https://www.getfishtank.com/blog/what-is-vercel)
- [5 reasons why vercel is the best for application deployment](https://medium.com/nerd-for-tech/5-reasons-why-vercel-is-the-best-for-application-deployment-92009b17e601)
- [Pros and cons for Vercel](https://www.getapp.com/development-tools-software/a/vercel/reviews/)
- [Contrary report on Vercel](https://research.contrary.com/reports/vercel)
- [Comparing serverless functions providers Vercel vs Netlify vs Gatsby cloud](https://hasura.io/blog/comparing-serverless-functions-providers-vercel-vs-netlify-vs-gatsby-cloud/)
- [Comparison of the usage statistics of Vercel vs. Netlify bs Gatsby cloud for websites](https://w3techs.com/technologies/comparison/ho-gatsbycloud,ho-netlify,ho-vercel)