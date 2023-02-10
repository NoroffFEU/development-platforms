---
title: Firebase Case Study
keywords: development platforms, Firebase, BaaS
tags: Development Platforms, Firebase, BaaS
sidebar: development-platforms
permalink: development-platforms/firebase.html
folder: development-platforms
---

## Introduction

Firebase is a Backend-as-a-Service (Baas) platform that offer various tools including servers, APIs and datastores to assist developers in the development process.

## Brief History

Firebase was established in 2011 by former Google engineers James Tamplin and Andrew Lee. The company initially offered a real-time database for app/website development, enabling developers to store and sync data across devices with ease. Over time, Firebase broadened its offerings to include other backend services such as authentication, hosting, cloud functions, and analytics.

In 2014, Google acquired Firebase and integrated it into its cloud platform. Since then, Firebase has continued to grow, introducing new features and functionalities to meet the changing needs of app developers. Today, Firebase is a leading backend as a service platform, used by millions of developers around the world – all from big companies such Twitch to hobby programmers.


## Features

Firebase offers product features which can handle of your backend all for your projects, and more. Here are the most used features:

**Real-time database**: A cloud-hosted NoSQL database that enables data to be stored and synced in real-time across all connected devices.

**Authentication**: A secure user authentication solution that facilitates the integration of email and password, phone number, or social logins like Google, Facebook, or Twitter.

**Hosting**: A hosting service for production-grade web content, including HTML, CSS, and JavaScript files.

**Cloud Functions** (serverless computing): A serverless computing solution that allows developers to run backend code in response to events triggered by Firebase features or HTTPS requests, eliminating the need for server management and scaling.

**Analytics**: An analytics tool that provides in-depth insights into app usage and user behavior, allowing developers to make data-driven decisions about their app's development and marketing efforts.


## Strengths

**Seamless scalability**
Firebase ensures that your code remains unchanged as you grow from your first to your millionth user, which has become increasingly important in today's world.  It achieves this by utilizing linear upscaling to calculate the minimum number of updates required to maintain synchronization among all users.

**Real-time database**
One of Firebase's defining strengths is its real-time database. The real-time database uses WebSockets to provide fast, two-way communication between the client and server, allowing for real-time updates without the need for constant polling (sending request to the server). This results in a seamless user experience and a more responsive app.

**Effortless Authentication and Hosting**
Firebase provides several methods of authentication, including email and password, phone, and social media logins. The authentication service integrates seamlessly with other Firebase services, such as the real-time database, cloud functions, and storage, providing a secure and convenient way to manage user data. The authentication service also includes security features such as password hashing and data encryption, ensuring that user data is protected.
Its hosting service is another major strength. It is built on Google Cloud Platform and provides quick and reliable hosting for web and mobile apps. Firebase hosting is easy to set up and comes with a variety of features, including automatic SSL certification and custom domains.

**Serverless Computing** 
Additionally, Firebase offers cloud functions, which enable serverless computing. This allows developers to run backend code without managing servers, saving time and reducing costs. Firebase's cloud functions are easy to set up and integrate seamlessly with other Firebase services.

**Robust Analytics**
Finally, Firebase provides robust analytics, allowing developers to track user behavior and make improvements to the user experience. Firebase Analytics uses Google Analytics as the underlying technology to collect and process event data. This allows Firebase Analytics to take advantage of the robust infrastructure, security, and data privacy features of Google Analytics. The analytics service provides detailed information about user engagement, such as the number of active users, session length, and user demographics.


## Weaknesses

**Vendor Lock-in**
Vendor lock-in refers to a situation where a customer becomes dependent on a particular vendor or technology and finds it difficult or expensive to switch to another vendor or technology. Firebase is an app development platform that does not provide protection against vendor lock-in, which can be a major drawback for those who choose to use the Firebase backend service. Furthermore, the lack of migration tools for transferring data to other platforms is a significant disadvantage.

**No SQL Support**
SQL is a relational database management system, offering a structured approach to data management and querying. It is more suitable for complex, data-driven applications than Firebase, which is a NoSQL database. Firebase only offers NoSQL databases, Realtime and Firestore. It does not support SQL databases, making it difficult to run complex database queries.

**Limited Flexibility** 
While Firebase provides a lot of built-in features, it can be challenging to modify them to fit unique requirements.


## Comparison

Firebase faces competition from several other cloud-based platforms and services that provide similar functionality. Some of the biggest competitors include Amazon Web Services (AWS), Microsoft Azure, Supabase, Parse Server, and traditional databases like SQL and MongoDB. Each of these competitors offers a different set of features and tools, and the choice of which to use depends on the specific needs of a project. For example, AWS offers a vast array of cloud-based services, including hosting, storage, databases, and machine learning, while Parse Server provides a platform for building mobile apps. On the other hand, SQL and MongoDB are popular databases used for traditional server-based app development. 

**Amazon Web Services (AWS)**: AWS is a comprehensive cloud computing platform that provides a wide range of backend services for app development. It is more powerful and flexible than Firebase, which makes it more popular in for very hig businiesses. On the other hans, it is more complex and difficult to use for smaller projects.

**Supabase**: is a relatively new platform that aims to provide an open-source alternative to Firebase. Supabase provides similar services, but has less product offerings comparing to Firebase.  However, they both offers a lot of the key features you’re a looking for when selecting a BaaS. One of the biggest is differences between the two, is that Supabase is completely open source, as well as it offers SQL support. In addition, Supabase is designed to be more flexible and scalable, making it a better choice for larger applications.

**Appwrite** is also popular BaaS, but distinguish from Firebase in a few ways. Firebase is a cloud-based platform hosted by Google and offers a paid service with a free tier, while Appwrite is a self-hosted platform that is open-source and free to use but requires hosting and setup costs. Firebase has a more straightforward setup process, but provides limited control over your backend infrastructure and data, whereas Appwrite provides greater control but requires more advanced setup. Appwrite also focuses on the APIs. This makes it well-suited for developers who want to build APIs or integrate their applications with other APIs such as server-side validation, image and video manipulation, and more.


## Summary

When selecting a BaaS, Firebase may be a great option due to its scalable nature, real-time database capabilities, and ease of authentication and hosting. However, it's important to consider its limitations and how they may impact your project over time. There are many excellent BaaS platforms that compete with Firebase, so it's crucial to thoroughly consider your options before making a final decision.

### Credits

- August Wahlberg (AugustWahlberg)

#### References

- https://firebase.google.com/
- https://cloud.google.com/firebase/ 
- https://firebase.google.com/pricing 
- https://firebase.google.com/docs/ 
- https://www.linkedin.com/learning/firebase-essential-training/control-access-with-cloud-functions?autoplay=true&resume=false 
- https://trustradius.com/products/firebase/reviews?qs=pros-and-cons#reviews 
- https://medium.com/moqod-software-company/downsides-of-firebase-limitations-to-be-aware-of-886ade5ae5a2 
- https://www.youtube.com/watch?v=kJbw02AGiGw
