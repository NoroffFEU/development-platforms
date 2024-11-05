---
title: Xata Case Study
author: Marte Lilleberre <@Berrinj>
tags: xata, case study, database, postgres, branching, deploy, open source, serverless, free plan, platform
---

<img src="\Xata.png">

## Introduction

<b>Postgres, powered up.</b> The X in Xata stands for extended data, and built on top of PostgreSQL (uses PostgreSQL under the hood to store your data), Xata is a serverless data platform designed for developers to make building easy. Xata provides the best free plan in the industry and is production ready by default. It's easy to upgrade when your project needs to scale, and in addition to the free plan(Best for personal projects and new ideas.) they offer Pro(A usage based plan built for small to medium sized teams.) that starts at 20$ per month, and Enterprise(Best for high scale use cases and large teams.) that has custom pricing. <br>
It's open source and built with features that simplify complex database management tasks. It plugs easily into your favorite front-end frameworks and platforms.

### Mission

"Our mission is to radically simplify the way developers work with data. Your database can do more than store rows and columns in a table. We want to remove the glue out of your stack and provide a connected data platform that works with the tools you love."

## Brief History

You may use a bullet point list or subheadings to structure a timeline of your chosen topic's history:

- 2021: founded by Monica Sarbu, who previously held leadership roles in the tech industry, including at Elastic.
- 2022: Beta version launched, introducing its core serverless database features, which focused on ease of integration for developers and serverless scalability
- 2022(late): The platform expanded to include full-text search and collaborative features, allowing real-time data editing and collaborative work environments.
- 2023: Xata gained traction among development teams and startups as a robust alternative to traditional database and search solutions, thanks to its user-friendly API and seamless integration
- 2024: They have several features in Beta live on their site, including PR based workflow, Usage metrics and Vector search.

## Main Features

- **Branching:** Create a new branch of your data to work on new features or experiments without affecting the main branch.|
- **Collaboration:** Xata supports collaborative features that help teams work on the same data in real-time.
- **Developer-Friendly API:** No need for extensive SQL knowledge
- **Serverless Architecture:** Xata automatically handles scaling and performance optimization, allowing developers to avoid manual database server management
- **Full-Text Search:** | Powered by Elasticsearch, customizable to make it extremely easy to build a powerful search experience in your app
- **Integrations:** GitHub, Vercel and Netlify integrations makes Xata the perfect pairing for preview deployment workflows.
- **Tutorials:** Xata provides a packed [blog](https://xata.io/blog), [YouTube channel](https://www.youtube.com/@xataio) and great [Docs](https://xata.io/docs) to get you started.

| Feature                      | Description                                                                                                                                                        |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Branching:**               | Create a new branch of your data to work on new features or experiments without affecting the main branch.                                                         |
| **Collaboration:**           | Xata supports collaborative features that help teams work on the same data in real-time.                                                                           |
| **Developer-Friendly API:**  | No need for extensive SQL knowledge                                                                                                                                |
| **Serverless Architecture:** | Xata automatically handles scaling and performance optimization, allowing developers to avoid manual database server management                                    |
| **Full-Text Search:**        | Powered by Elasticsearch, customizable to make it extremely easy to build a powerful search experience in your app                                                 |
| **Integrations:**            | GitHub, Vercel and Netlify integrations makes Xata the perfect pairing for preview deployment workflows.                                                           |
| **Tutorials/Docs:**          | Xata provides a packed [blog](https://xata.io/blog), [YouTube channel](https://www.youtube.com/@xataio) and great [Docs](https://xata.io/docs) to get you started. |

## Market Comparison, serverless Database: PlanetScale vs Xata.io

| Feature        | Xata                                                                                              | PlanetScale                                                                                                          |
| -------------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Free plan      | Yes                                                                                               | No, as of april 20024                                                                                                |
| Infrastructure | PostgreSQL, Apache Kafka, ElasticSearch                                                           | MySQL, Vitess, GCP, AWS                                                                                              |
| Branching      | Git style branching, for development and testing and production                                   | Git-style branching for development, testing, and production                                                         |
| Search         | Built-in full-text search                                                                         | MySQL search                                                                                                         |
| Scaling        | Scales automatically based on reserved capacity; suitable for applications with varying workloads | Highly scalable, leveraging Vitess for horizontal scaling and sharding, making it ideal for large-scale applications |

## Getting Started

I# Install the CLI globally
npm install -g @xata.io/cli

# Authenticate the CLI to your account

xata auth login

# Initialize xata in your project directory

xata init

# Pull down schema changes and generate typings

xata pull

## Conclusion

When looking for a platform offering a free plan I landed on the fairly new alternative Xata. It proves to be a great choice for developers wanting to build an application with a serverless database, starting out with no billed plan witch is a great feature for new developers testing out their product. For high traffic platforms with bigger data storage it might face higher costs compared to traditional databases. As a new developer myself I find Xata to be a platform I will use for my upcoming projects based on what I've learned.

### Advantages

- Discord channel maintained by by the Xata team where you can get help, showcase your work and get into discussions.
- Built-in full-text search
- Serverless architecture
- Flexible data model, ideal for apps needing both structure and flexibility
- Real-time collaborations, allowing multiple users working on the same data
- Branching, allowing users to create isolated environments for testing, staging or development, similar to Git.

### Limitations

- Xata provides SQL-like querying but does not offer direct SQL support, which can be restrictive for developers familiar with traditional SQL databases and needing advanced SQL queries.
- As a serverless platform, costs can accumulate based on usage. For applications with extremely high query loads or large data storage needs, pricing could become a factor compared to more traditional databases.
- As a newer platform, Xata has a smaller developer community and ecosystem compared to established databases like PostgreSQL or MySQL

## References

- [Xata.io](https://xata.io/)
- [Xata introduction](https://youtu.be/gXuyYIV_dmc?si=PE4bpb8MnE3xX6lm)

## Additional Resources

- [Xata Product Walkthrough](https://youtu.be/-KNRS2fIWdA?si=vSJjSepU7EOEyjQE)
