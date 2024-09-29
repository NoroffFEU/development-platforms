---
title: Appwrite Case Study
author: Taran Johannessen <TaranJ>
tags: open-source, BaaS, backend, self-hosted, databases, authentication, messaging
---

## Introduction

Appwrite is an open-source BaaS platform designed to simplify the development of web and mobile applications. It provides developers with a set of backend tools and services that can manage authentication, databases, functions, storage and messaging. It supports multiple programming languages and frameworks. The goal of Appwrite is to be a tool for a developer that wants to focus on their applications' frontend and core logic, and build secure and scalable applications without extensive backend knowledge.

Appwrite is one of the fastest growing open-source platforms on GitHub with more than 150,000 developers and 550 maintainers around the globe.

## Brief History

- 2019: Appwrite was created by Eldad Fux, an Israeli software engineer and entrepreneur. The initial idea behind Appwrite was to simplify the development of mobile and web applications by providing an easy-to-use, self-hosted backend solution. Eldad wanted to provide developers with a way to manage their application's backend without needing extensive server-side knowledge.

- 2020-2021: Appwrite keeps enhancing and expanding it's features, improving documentation and expanding its ecosystem with SDKs and integrations for various programming languages and frameworks.

- 2022: Appwrite raised $27 million in a Series A round, led by prominent investors like Tiger Global Management and Bessemer Venture Partners. The funding has allowed the company to expand its team and continue its mission of supporting the open-source community. One of the notable initiatives launched by Appwrite is the Open Source Software Fund (OSS Fund), which provides financial support to maintainers of critical open-source projects.

- 2023-2024: Appwrite is constantly updating and improving it's platform. Appwrite 1.5 launched in March 2024 and included a new messaging feature.

## Main Features

**Authentication:** Appwrite Authentication delivers more than just user sign up and log in. Authentication makes it easy to build secure and robust authentication with support for many different authentication methods. It supports authentication through email and password, phone (SMS), magic URL, email OTP, OAuth 2, JWT tokens, server-side rendering and multifactor authenticaton.

**Database Management:** Appwrite Databases let you store and query structured data. Databases provide high-performance and scalable data storage for your key application, business, and user data. You can organize data into databases, collections, and documents. You can also paginate, order, and query documents. For complex business logic, Appwrite supports relationships to help you model your data.

**Functions:** Appwrite Functions unlock limitless potential for developers to extend Appwrite with code snippets. Appwrite Functions are user-defined functions that can start small and scale big, deploying automatically from source control. These Functions can be triggered by HTTP requests, SDK methods, server events, webhooks, and scheduled executions. Each function will have its own URL, execute in its own isolated container, and have its own configurable environment variables and permissions.

**Storage:** Appwrite Storage allows you to manage files in your project. You can use it to store images, videos, documents, and other files for your projects. It provides APIs to upload, download, delete, and list files, with many added utilities.

**Messaging:** Appwrite messaging allows you to send SMS, email, and push notifications through a variety of 3rd party providers such as Twilio, APNS, Firebase cloud messaging, Vonage, Sendgrid, Mailgun, and more. You can also use Appwrite Messaging to implement security checks and custom authentication flows

## Market Comparison

Appwrite is a strong competitor in the BaaS space, offering both advantages and challenges compared to other platforms like Firebase, AWS Amplify, and Supabase.

**Open-Source Flexibility**:
Appwrite's main advantage over many competitors is its open-source nature, allowing full control and customization. This flexibility is ideal for projects that require specific configurations or need to avoid vendor lock-in. Both Firebase and AWS Amplify are proprietary platforms.

**Deployment Options**: Appwrite is designed to be self-hosted, which means it can be deployed on any cloud provider or on-premise infrastructure. This is beneficial for developers who need full control over their environment or need to meet specific regulatory requirements. Other platforms are fully managed services hosted on given platforms, like Google Cloud for Firebase. While this reduces the complexity of deployment, it limits developers to the hosting environment provided by these companies. Both Appwrite and Supabase are self-hosted using Docker. Appwrite offers a single installation command with a pre-built configuration to simplify the self-hosting process, making it more straightforward and cohesive.

**Community and Ecosystem**: As a newer platform, Appwrite has a rapidly growing community but still lacks the large user base and extensive documentation that more established platforms offer. This can make finding solutions or community-driven support more challenging.

**Ease of use**: Appwrite is powerful but can be complex to set up and maintain due to its broad language support and flexibility. This makes it potentially overwhelming for new developers or those with simpler use cases.

## Getting Started

These steps provide instructions for setting up Appwrite via browser:

- **Access the Appwrite Console**: Open your web browser and navigate to [Appwrite.io](https://appwrite.io/). If you don't have an account, sign up for free. Otherwise, log in to your existing account.

- **Create a New Project**: Via "Projects" in the sidebar, create a new project. Give it a name and optionally a description.

- **Get Your Project ID and API Keys**: The project ID is available to you as soon as a project is created while you need to generate a new API key. You will use this in your application to set up the Appwrite client and authenticate API requests.

After completing the initial setup steps, you are ready to integrate Appwrite into a project. You will need to install SDKs and implement backend services depending on what you need. [Appwrite's official documentation](https://appwrite.io/docs) offers detailed instructions and examples to help you through each stage of the integration process. You can choose quick start options or more detailed instructions, all depending on your chosen frameworks.

## Conclusion

Appwrite is a flexible and open-source BaaS platform, offering a range of backend services such as authentication, database management, serverless functions, storage, and messaging. Its self-hosted model provides developers with control over their infrastructure, which can be particularly useful for projects with specific requirements or those needing to meet certain regulatory standards.

As a newer platform, Appwrite is rapidly gaining traction with a growing community and frequent updates. While the setup and maintenance can be complex due to its broad language support and customization options, it remains a viable option for developers looking for a customizable backend solution.

## References

- https://appwrite.io/
- https://dev.to/alexindevs/why-appwrite-is-your-ideal-baas-in-2024-im-5aom
- https://www.calcalistech.com/ctechnews/article/bj60000nyq5
- https://www.opensourceforu.com/2022/05/open-source-developer-creates-first-of-its-kind-fund-to-support-maintainers/
- https://www.youtube.com/watch?v=wKE0py6sIbY
- https://appwrite.io/blog/post/appwrite-compared-to-supabase
