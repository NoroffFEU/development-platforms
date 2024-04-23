---
title: Heroku Case Study
author: Fatma Kurtgozu <ftmkrtgz>
tags: heroku, case study, PaaS, Cloud Computing, Web Hosting, DevOps, CI/CD, Heroku CLI
---

![Heroku Logo](../../../assets/heroku/Ekran%20görüntüsü%202024-04-23%20055855.png)

## Introduction

Heroku is a container-based cloud Platform as a Service (PaaS). Developers use Heroku to deploy, manage, and scale modern apps. Our platform is elegant, flexible, and easy to use, offering developers the simplest path to getting their apps to market.

Heroku is fully managed, giving developers the freedom to focus on their core product without the distraction of maintaining servers, hardware, or infrastructure. The Heroku experience provides services, tools, workflows, and polyglot support—all designed to enhance developer productivity.

## Brief History

- **2007**: Heroku is founded by James Lindenbaum, Adam Wiggins, and Orion Henry. **Heroku rolls out** in private beta.
- **2009**: Heroku **launches commercially** with support for Ruby. Over **35,000 apps** are running on Heroku.
- **2010**: Over **60,000 apps** are running on Heroku. **Heroku Add-ons** are introduced. Heroku releases the **PostgreSQL database add-on**. Salesforce.com acquires Heroku.
- **2011**: **Node.js** is officially supported on Heroku. **Yukihiro “Matz” Matsumoto, chief designer of Ruby, joins Heroku** as Chief Architect, Ruby. **Clojure** becomes the third official language on Heroku. **Java** is officially supported on Heroku. **Python** joins the list of officially supported languages. **Scala** is officially supported. **Heroku Postgres** launches as a standalone product.
- **2012**: The **Twelve-Factor App** is published. The **Heroku Dashboard** is introduced.
- **2013**: The **Heroku Platform API** is available in public beta.
- **2014**: The **Heroku Platform API** is released. **Heroku Connect** is introduced. Heroku officially supports **PHP**. **Two-factor Authentication** is generally available. **Heroku DX: Heroku Developer Experience** is introduced. **HTTP Git** is introduced.
- **2015**: **Heroku Enterprise** is released. The **Heroku Elements Marketplace** launches. Heroku supports **Docker**. **Heroku Redis** is released. Heroku officially supports **Go**. **Heroku Flow** is released: Heroku Pipelines, Heroku Review Apps, and GitHub Sync.
- **2016**: **Heroku Private Spaces** is released. **Heroku Teams** is released. **Apache Kafka on Heroku** is released. **SSL is free** on all paid dynos. **PostgreSQL 9.6** is generally available on Heroku.
- **2017**: **Heroku Autoscaling for web dynos** is released. **Automated Certificate Management** is available for paid apps with custom domains. **Heroku CI** is released. **Heroku Shield** for high compliance apps is released. **Heroku ChatOps for Slack** is released. **Heroku Postgres is updated**: configuration, credentials, and CI. **PCI Compliance** for Heroku Shield is announced. **PostgreSQL 10** is generally available on Heroku.
- **2018**: **Heroku Postgres PGX** plans are released. **oclif CLI framework** is open sourced. **Automated SSL Certs** for Private Spaces is released. **Heroku Shield Connect** is released. Heroku achieves **ISO and SOC2 Type I certification**. Building Docker images with **heroku.yml** is released.
- **2019**: **PostgreSQL 11** is generally available on Heroku. The new **Dataclips** is released. **Heroku Postgres via PrivateLink** is generally available. **Heroku Enterprise Accounts** is generally available. **Apache Kafka on Heroku Shield** is released. Heroku data services integrations using **mutual TLS and PrivateLink** is generally available.
- **2020**: **Heroku Shield Redis** is released. **Heroku Review Apps is updated**: public API, greater automation, and easier access. **Heroku Streaming Data Connectors** are generally available.

## Main Features

The Heroku cloud service platform is based on a managed container (called dynos within the Heroku paradigm) system. It has integrated data services and a powerful ecosystem for deploying and running modern applications.

- **Heroku Accommodates Many Development Languages:** Heroku supports several programming languages that are used as a web application deployment model. As one of the first cloud platforms, Heroku has been in development since June 2007. Back then, it supported only the Ruby programming language.
  But now it also supports Java, Node.js, Scala, Clojure, Python, PHP, and Go. This means a variety of developers can look to Heroku for an inexpensive way to scale their application, no matter their preferred development language.

- **Heroku Supports Diverse Solutions:** Heroku also provides custom buildpacks, where developers can deploy apps in any other programming language. For this reason, Heroku is a polyglot platform. It lets the developer build, run, and scale applications in a similar manner across all programming languages.
  Polymorphism and scalability are reasons why Heroku is often seen as a preferred platform amongst developers.

- **Heroku Dynos Enable Easy Development and Better Usability:** Applications that are run on Heroku typically have unique domain names, which are used to route HTTP requests to the correct container. Applications as services use application containers. Containers are designed to package and run services. Each of the application containers is а smart container on a reliable, fully-managed runtime environment. Application containers — referred to as “dynos” in the context of the Heroku platform — are spread across a “dyno grid.” This consists of several servers. The Dyno manager maintains and operates the created dynos.
  All this means is that since Heroku manages and runs applications, there’s no need to manage operating systems or other internal system configurations.

- **Heroku Lets Developers Scale Applications Instantly:** This is accomplished either by increasing the number of dynos or by changing the type of dyno in which the app runs. When the application can scale so easily, the user can always expect more speed when using that application.
  The simple way to scale applications makes working with Heroku easy and convenient.
  Projects created in Heroku are bound to repositories in GitHub. Heroku’s integration with GitHub provides automated builds and deploys of the latest version of code.
  GitHub is a trusted repository of source code, so Heroku’s integration with GitHub and other tools helps developers optimize their efforts and save stakeholders time and money over the course of development projects.

## Market Comparison

The choice between Heroku and other platforms depends on factors such as the specific requirements of the project, preferred programming languages and frameworks, level of control needed over infrastructure, existing ecosystem integrations, and budget considerations. Heroku excels in simplicity, ease of use, and developer experience, making it a popular choice for startups, small to medium-sized businesses, and projects with rapid development cycles.

### Advantages of Using Heroku

- Easy setup - Apache, nginx, unicorn, MySQL, Postgres etc. as a PaaS. You don't need to know how to install and configure
- Easier to scale initially, spin more Dynos, size DBs, etc.
- Great plugin support for third-party apps
- Allows developers to focus on code rather than infrastructure
- Single invoicing can be applied to all projects.
- Salesforce integration.
- 24/7 support from Heroku operations and security team.
- Easy integration with other AWS products.
- Ability to create a new server in 10 seconds.

### Disadvantages of Using Heroku

- At high density, the delay time increases.
- It offers poor network performance.
- Heroku doesn't let you run any other services on dynos.
- To purchase additional dynomo you have to pay $35 per month which is quite costly.
- Not ideal for heavy computing projects.

### Heroku vs AWS

Heroku provides simplicity, ease of use, and rapid deployment for developers and small teams, making it ideal for startups and projects with fast development cycles. On the other hand, AWS offers unmatched flexibility, scalability, and a vast array of services for organizations with complex requirements and larger-scale applications.

|     Feature      |                                                                                                                                 Heroku                                                                                                                                  |                                                                                                                           AWS                                                                                                                           |
| :--------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|       Use        | Heroku prioritizes simplicity and ease of use. Developers can deploy applications quickly using Heroku's intuitive platform and CLI (Command Line Interface). Configuration and deployment are streamlined, making it suitable for teams with limited DevOps expertise. | AWS offers a wide range of services, but its complexity can be overwhelming for beginners. While AWS provides powerful tools and features, setting up and managing applications typically requires more configuration and expertise compared to Heroku. |
|   Scalability    |                         Heroku automatically scales applications based on demand, handling traffic spikes and varying workloads without manual intervention. Developers can easily scale their applications up or down using Heroku's platform.                         |      AWS provides extensive scalability options, including auto-scaling groups, load balancers, and serverless computing services like AWS Lambda. AWS offers more control over scalability but requires additional configuration and management.       |
|   Flexibility    |              Heroku supports a wide range of programming languages and frameworks, offering flexibility for developers to work with their preferred tools. However, Heroku's support for certain languages and frameworks may not be as extensive as AWS.               |    AWS offers unparalleled flexibility, with support for virtually any programming language, framework, or technology stack. Developers have full control over the infrastructure and can customize their environment to meet specific requirements.    |
| Managed Services |             Heroku provides a range of managed services, including databases (Heroku Postgres, Heroku Redis), logging, monitoring, and more. These services abstract away infrastructure management, allowing developers to focus on building applications.             |          AWS offers a vast ecosystem of managed services, covering compute, storage, databases, analytics, machine learning, and more. While AWS provides more options, developers may need to configure and manage these services themselves.          |
|     Pricing      |                           Heroku's pricing model is based on resource consumption, with transparent pricing for compute, database, and other services. Developers pay only for what they use, without upfront costs or long-term commitments.                           |     AWS operates on a pay-as-you-go pricing model, where users are billed based on resource usage. While AWS offers cost-effective options, pricing can be complex, and users may incur additional costs for services, data transfer, and support.      |
|   Integration    |                                           Heroku operates as a standalone platform but integrates well with third-party services and tools. Developers can leverage Heroku's add-ons ecosystem for additional functionality.                                            |                           AWS offers extensive integration with other AWS services and third-party tools. Organizations can build complex architectures using AWS services like AWS Lambda, Amazon S3, Amazon RDS, and more.                            |

## Getting Started

Getting started with Heroku is straightforward, and you can deploy your first application in just a few steps. Here's a general guide to help you get started:

Deploy a Node.js app to Heroku:

1. ### Create a Heroku Account:

- Visit the Heroku website (https://www.heroku.com/) and sign up for a free account if you don't have one already. You'll need to provide some basic information like your email address and create a password.

2. ### Install the Heroku CLI:

- The Heroku Command Line Interface (CLI) allows you to interact with Heroku from your terminal or command prompt. You can download and install the Heroku CLI from the official website: https://devcenter.heroku.com/articles/heroku-cli

- To log in to the Heroku CLI, use the heroku login command.

  ![Heroku Login](../../../assets/heroku/Ekran%20görüntüsü%202024-04-23%20061324.png)
  This command opens your web browser to the Heroku login page. If your browser is already logged in to Heroku, click the Log in button.

3. ### Prepare the App

- In this step, you prepare a sample application that’s ready to be deployed to Heroku.

  ![Prepare the App](../../../assets/heroku/Ekran%20görüntüsü%202024-04-23%20061815.png)

4. ### Deploy the app

- In this step, you deploy the app to Heroku.

  Create an app on Heroku, which prepares Heroku to receive your source code.

  ![Deploy App](../../../assets/heroku/Ekran%20görüntüsü%202024-04-23%20062148.png)

  Deploy your code.

  ![Deploy your code](../../../assets/heroku/Ekran%20görüntüsü%202024-04-23%20062411.png)

  Ensure that at least one instance of the app is running.

  ![App is running](../../../assets/heroku/Ekran%20görüntüsü%202024-04-23%20062631.png)

  Visit the app at the URL generated by its app name. As a shortcut, you can open the website.

  ![Visit the app](../../../assets/heroku/Ekran%20görüntüsü%202024-04-23%20062642.png)

## Conclusion

Heroku is a cloud platform that lets companies build, deliver, and monitor simple applications quickly and without endless infrastructure headaches. The platform is suitable for startup companies, projects, and clients who want to test a first version of their product before investing a lot of money in hardware and infrastructure. Heroku offers simple cost calculation for business leaders, thanks to the cloud’s pay-per-use model. For companies in the earliest stages of business and product development, Heroku can be just the right solution for validating ideas and the quality of early coding efforts.

## References

- Heroku <https://www.heroku.com/about>
- Heroku <https://www.heroku.com/platform>
- Heroku <https://devcenter.heroku.com/articles>
- Heroku <https://devcenter.heroku.com/start>
- Heroku <https://devcenter.heroku.com/articles/getting-started-with-nodejs>
- [What is Heroku and What is it Used For?](https://mentormate.com/blog/what-is-heroku-used-for-cloud-development/)
- [Using Heroku](https://medium.com/@kaankubat)
- [13 Reasons Why You Should Use Heroku in Your Next Project](https://dzone.com/articles/13-reasons-why-you-should-use-heroku-in-your-next)

## Additional Resources

- [Heroku Deployment Methods: 1/3](https://www.youtube.com/watch?v=KD9OaryS1Kw&list=PLgIMQe2PKPSJuYZR50Frphdt4QS9xp6pj&t=12s)
- [Heroku Deployment Methods 2/3](https://www.youtube.com/watch?v=VVjP8bUhlSs&list=PLgIMQe2PKPSJuYZR50Frphdt4QS9xp6pj)
- [Heroku Deployment Methods 3/3](https://www.youtube.com/watch?v=yNRqnrJdAIs&list=PLgIMQe2PKPSJuYZR50Frphdt4QS9xp6pj)
- [Getting Started on Heroku with the CLI](https://www.youtube.com/watch?v=JD_81blLP5w&list=PLgIMQe2PKPSJuYZR50Frphdt4QS9xp6pj)
- [Working with Config Vars on Heroku](https://www.youtube.com/watch?v=g81LARb914Y&list=PLgIMQe2PKPSJuYZR50Frphdt4QS9xp6pj)
- ChatGPT <https://chat.openai.com/>
