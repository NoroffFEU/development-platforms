---
title: Supabase Case Study
author: Sayeda Chattopadhyay <sayeda-chattopadhy>
tags: Development Platforms, Supabase, BaaS platform
---

# Supabase Case Study

![Supabase logo](/static/images/Supabase.png)

### Table of content

1. Introduction
2. History
3. Features
4. Strengths
5. Weaknesses
6. Comparison
7. Summary
8. Credits
9. References

## Introduction

Supabase is an open-source Backend-as-a-Service (BaaS) platform. It is a free and open-source tool that helps developers build web and mobile apps. It provides several services, including a cloud-hosted database, authentication, real-time subscriptions, and API generation services.

Developers can easily use Supabase with popular programming languages like JavaScript, Python, and Ruby by using the provided SDKs (software development kits). This allows them to easily build and manage the backend of their app.

Supabase is scalable, customizable, and secure, making it a great choice for developers who want to build apps quickly and efficiently without having to worry about managing their own servers or databases.

Since Supabase is licensed under the Apache License 2.0, it is free to use and modify. This makes it an ideal choice for businesses and enterprises of all sizes and it has gained popularity among developers, making it a good alternative to other BaaS platforms e.g Firebase, Parse, Appwrite, Nhost and AWS Amplify.

## Brief History

Supabase was founded in January 2020 by Paul Copplestone and Tan Li Hau as an open-source alternative to Firebase. In April 2020, they launched the alpha version of Supabase with capability to provide a cloud-hosted PostgreSQL database with a RESTful API and real-time subscriptions. Supabase received seed funding from investors including Mozilla. In 2021 the first public version was launched, making Supabase available to all developerss. In the same year, Supabase received further funding in the range of $30M. Since then Supabase continue to develop and increase its user base. Curretly, there are several ongoing developments and updates to Supabase with a significant contribution from the developer community.

## Features

Some of the key features of Supabase include:

| Feature                          | Description                                                                                                                                                                                                                                |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Setting up and managing backend infrastructure           | Supabase helps with setting up and managing backend infrastructure for web and mobile applications. This can be time-consuming and complicated, especially for smaller teams with limited resources. Supabase provides a range of services for the backend, including cloud-hosted databases, real-time subscriptions, and authentication, that allow developers to focus on building their applications and delivering value to their users without having to worry about the backend infrastructure.                                                           |
| Realtime subscriptions | Real-time subscriptions refer to the ability of a system to push data changes in real-time to connected clients, enabling them to receive updates as soon as changes occur. This means that developer can build applications that automatically update themselves without requiring the user to refresh the page. For example, in a chat application, when a new message is sent, it will automatically appear on the recipient's screen without them having to manually refresh the page. Real-time subscriptions make it easier to build dynamic and responsive applications that provide users with a better experience. 
| Authentication and authorization | Supabase has built-in features to manage how users sign up, log in, reset their passwords, and control what parts of an application they can access. It helps developers easily handle user authentication and authorization without having to create those features from scratch. **Authentication** in Supabase refers to the process of verifying the identity of a user who wants to use a particular application or service. This can be done by entering login information like email and password or using external providers like Google or Facebook.**Authorization**, on the other hand, is the process of deciding what resources or actions an authenticated user can access. This is based on the user's role and permissions, which determines what they can do and what they cannot. It ensures that users can only access the resources they are authorized to access and perform actions they are authorized to perform.                                                              |
| Database management              | Supabase has a system for managing databases, which is based on a popular database software called Postgres. Developers can use Supabase to create, manage, and ask questions to databases using a special language called SQL. Supabase also has tools to check that the data entered in the database is correct, and to easily build queries to extract specific information from the database.                                        |
| APIs and SDKs                    | Supabase provides tools for developers to easily integrate its services into their code, including APIs and SDKs for popular programming languages like Python and JavaScript.                                                                             |
| Serverless Functions             | Serverless Functions are a way to run small pieces of code on the cloud without needing to manage any server infrastructure. It allows developers to focus on writing the code for their application without worrying about the underlying infrastructure, as the cloud provider automatically takes care of it. Supabase allows developers to deploy serverless functions, which are performing a specific action in response to an event, such as processing an HTTP request, responding to a database update, or handling an event from a message queue. |
| Storage                          | Supabase includes cloud storage for storing and serving files, such as images, audio, and video.                                                                                                                                           |
| Customization                    | Supabase is an open-source platform that can be customized and modified to suit specific requirements. Users can also contribute to the development of Supabase.                               |
| Scalability and performance      | Automatic scaling, caching, and CDNs are features in Supabase that help improve the performance of web applications. **Automatic scaling** means that Supabase can handle sudden increases in traffic by automatically allocating more resources to handle the increased load.  **Caching** saves data that is used often to make it quicker to find, making it faster to get the information from the database. **CDN** stands for Content Delivery Network, which is a system of distributed servers that deliver content to users based on their geographic location. This improves website performance by reducing the time it takes to deliver content.                                                                                                                                                                      |
| Cost                             | Supabase offers paid plans but at the same time the free plan has good usage limits affordable for small / medium projects.                                                                                                                |

## Strengths

Supabase has several strengths as outlines below:

- It is an Open-source platform where the user commuinty contributes to its development.

- Supabase provides a simple and easy-to-use solution with straightforward APIs and SDKs. These makes it accessible for developers of different skill levels.

- It provides all necessary services for a backend solution e.g. cloud-hosted database, authentication, real-time subscriptions, and API generation.

- It is flexible with the possibility of customization allowing developers more control.

- Being a open source solution Supabase is cost effective option as there are no upfront costs and potential for cost savings in hosting and infrastructure.

## Weaknesses

The weaknesses of Supabase can be outlined as follows:

- It is relatively new BaaS platform compared to Firebase or AWS Amplify. So, it has a much smaller user community. In addition, it will require the users to invest some time to adapt and familiar themselves with its APIs and SDKs.

- Some established platforms may have more features than Supabase. Supabase primarily focuses on backend services and does not offer hosting services like Firebase. Therefore, it is natural for many developers to prefer using different solutions for their frontend applications.

## Market Comparison

Here are some of the top Backend as a Service (BaaS) platforms.
- Firebase by Google:
- AWS Amplify by Amazon Web Services (AWS):
- Microsoft Azure Mobile Apps
- Parse Platform:
- Backendless
- Kinvey

Here we compare supabase with Firebase.

![Supabase logo](/static/images/supabase-vs-firebase.png)

- **Database** : Supabase uses PostgreSQL, which is a powerful, open-source relational database, while Firebase uses NoSQL, which is a flexible, schema-less database.

- **Authentication** : Supabase supports authentication with popular providers like Google, GitHub, and Facebook, while Firebase also supports those providers as well as several others, like Apple and Twitter.

- **Pricing**: Supabase is open source and free to use, while Firebase has a free tier with limited features and charges based on usage beyond that.

- **Customization**: Supabase allows developers to write custom business logic in their database, while Firebase relies on cloud functions to achieve the same functionality.

- **Real-time updates**: Supabase uses a built-in system in PostgreSQL (which is a type of database) to provide real-time updates. On the other hand, Firebase has a real-time database that is specifically designed for real-time updates.

- **Vendor locking**: It is a potential concern with Firebase, as it is owned by Google and therefore may not be easily transferable to other platforms or services. This could limit the flexibility of developers who rely heavily on Firebase's services and features, and may lead to difficulties if they wish to migrate their application to a different platform or service in the future.

## Getting started:

**Sign up for an account**: To start using Supabase, you need to create an account by going to their website, which is https://supabase.io/. It's free to sign up, but you'll need to provide some information such as your email address and a password. You also need to agree to their terms of service. Supabase offers multiple ways to sign in, including using your email and password, magic links, or authentication with popular providers such as Google, GitHub, Twitter, and Facebook. If you already have an authentication token from other services like OAuth, JWT, or OpenID Connect, you can also use that to sign in to Supabase.

**Create a new project** : Once you have an account, you can create a new project in the Supabase dashboard. This will create a new instance of Supabase for your project and provide you with the necessary credentials to access the Supabase services.

**Install the Supabase client library**: Supabase provides client libraries for various programming languages, such as JavaScript, Python, Ruby, and others. You will need to install the appropriate client library for your chosen language in your development environment.

**Connect to your Supabase project**: Using the credentials provided in the Supabase dashboard, you can connect to your Supabase project using the client library in your application code. This will allow you to interact with the Supabase services, such as the database, authentication, and real-time subscriptions.

**Use Supabase services in your application**: Once connected, you can start using the Supabase services in your application code. For example, you can create and manage database tables, authenticate users, and perform real-time data synchronization using Supabase's APIs and SDKs.

## Summary

Supabase is an open-source BaaS platform that offers a range of backend services for both web and mobile applications. Its services include real-time data synchronization, built-in authentication, and authorization. It is designed to be developer-friendly, scalable, flexible, and cost-effective. The main strengths are that it is open-source and very user-friendly, allowing for positive contributions from the user community to its development. However, there are some limitations as it is a comparatively new platform and does not have self-hosting capability.

### Credits

- Sjur Hassel(VaNomad)
- Rohit Kumar Amdahl(RohitAmdahl)
- Sayeda Chattopadhyay (sayeda-chattopadhyay)

#### References

- https://supabase.com/docs
- https://github.com/supabase/supabase
- https://supabase.com/blog
- https://www.youtube.com/c/Supabase
- https://makerkit.dev/blog/saas/supabase-vs-firebase
- https://www.red-gate.com/simple-talk/development/other-development/firebase-and-supabase-key-differences/

#### Supabase Crash Course

- https://www.youtube.com/watch?v=7uKQBl9uZ00&t=3s
- https://www.youtube.com/watch?v=ydz7Dj5QHKY&list=PL4cUxeGkcC9hUb6sHthUEwG7r9VDPBMKO

#### Tools

- https://chat.openai.com
