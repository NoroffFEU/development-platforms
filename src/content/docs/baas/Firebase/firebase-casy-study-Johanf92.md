---
title: Firebase
author: Johan Frederic Aas-Haug <johanf92>
tags: Baas, Google, Firebase, Baas, backend as a service, development platforms
---

## Introduction

Firebase is a cloud-based development platform by Google, it's designed to support applications of all sizes, from small projects with small user bases to large user bases. It offers a wide range of tools and services, including authentication, database hosting, and integration features, making it a powerful choice for developers. With nearly 20 products, like Google Analytics and Ads, and compatibility with multiple platforms, Firebase is a versatile Backend-as-a-Service (BaaS) solution that can grow alongside your project.

For frontend developers, Firebase is very helpful as it eliminates the need to write and manage backend code, streamlining the development process.

## Brief History

- Firebase was founded in 2011 by James Tamplin and Andrew Lee. Firebase evolved from Envolve, a platform that provided an API for integrating online chat functionality. Since the chat functionality was being used for purposes beyond its initial scope, the founders decided to shift their focus and establish Firebase as a separate platform in 2012.
- Firebase first product was the Firebase Realtime Database, designed for mobile and web applications. It allowed developers to create real-time applications and collaborate on projects seamlessly.
- In May 2012, just one month after launching, Firebase raised $1.1 million in seed funding. By June 2013, they secured an additional $5.6 million in further funding.
- In 2014, Firebase expanded its offerings with the launch of Firebase Hosting and Firebase Authentication. That same year, in October, Firebase was acquired by Google.
- In 2015, Google acquired Divshot, an HTML5 web-hosting platform, to integrate with Firebase services. The following year, 2016, LaunchKit joined Firebase to enhance its growth tools, which further improved the app-building and scaling experience.
- In 2017, Google launched Cloud Firestore. Firestore is a real-time document database that can sync data across different platforms, offering more flexibility and scalability for developers.

## Main Features:

Firebase is packed with tools that make it easier for developers to build, improve, and grow their apps. To help with app development, Firebase offers features like Authentication for creating secure login systems, Cloud Storage for managing user files, and Cloud Functions for handling backend tasks. Hosting is available for deploying web apps, while Cloud Firestore and Realtime Database provide powerful options for real-time and scalable data management. If you’re looking to add advanced features, Firebase also includes Machine Learning tools. Plus, Extensions can save time by simplifying common development tasks.

To ensure your app performs well, Firebase provides tools like Crashlytics, which helps you track and fix crashes, and Performance Monitoring to boost app speed. You can test your app on multiple devices with Test Lab and share builds easily using App Distribution.

When it’s time to grow your app, Firebase supports you with Analytics to understand user behavior and Remote Config to update app settings on the fly. You can send notifications through Cloud Messaging, use A/B Testing to find the best user experience, and engage users with In-App Messaging. Dynamic Links let you create smart links that guide users to specific content in your app.

## Strengths:

**User Friendly** It’s very easy for beginners; offering many pre-built solutions like mentioned above with authentication and hosting.
**Real time capabilities** Allows instant data synchronization across devices, making it a solution for chat functionality, collaborative tools and live updates.
**Cross-Platform Support** - Supports Android iOS and web apps. Making it easy for teams to develop.
**Integration with google services** Tightly integrated with Google’s ecosystem, including Analytics and Machine Learning.
**Scalable infrastructure** Designed for both large and small user bases.
**Generous free tier**

## Weaknesses:

**Cost at scale** Attractive free tier, but might cost you a lot of money if you don’t keep track of your purchases with scaling usage or with apps with high database read/write operations.
**Vendor lock in** Your project is dependendt on the supplier, google. Making it very hard to move your project in the future. If you follow good software principles it might make it easier to move in the future.

## Quick comparison to Supabase

Firebase, as mentioned above, is a widely-used Backend-as-a-Service (BaaS) platform, offering tools for real-time apps and seamless integration with Google services. Supabase, an open-source alternative, is built on PostgreSQL and appeals to developers needing SQL for complex queries or relational data. It also allows self-hosting for greater control, while Firebase emphasizes simplicity in a managed environment. Both platforms support scalability through pay-as-you-go pricing, catering to different developer preferences and project needs.

**Firebase Pros:**

- Works seamlessly with Google’s ecosystem.
- Powerful real-time database features for instant updates.
- Beginner-friendly, with excellent documentation and ease of use.
- Managed environment simplifies backend tasks.

**Firebase Cons:**

- Costs can increase significantly as usage scales.
- Proprietary, leading to potential vendor lock-in.
- NoSQL databases are less flexible compared to SQL for certain queries.

**Supabase Pros:**

- Open-source and SQL-first, leveraging PostgreSQL.
- Ideal for complex queries, transactions, and relational data structures.
- Offers self-hosting options for greater cost control and independence.

**Supabase Cons:**

- Not as mature as Firebase and has fewer third-party integrations.
- Real-time database features are less developed compared to Firebase.
- Requires more backend management, making it less beginner-friendly.

### Others:

Just to mention other widely-used alternatives, AWS Amplify and MongoDB are also prominent players in the BaaS space. AWS Amplify is deeply integrated into the Amazon Web Services ecosystem and offers robust features for backend services like authentication, APIs, and scalable storage. MongoDB, on the other hand, provides a popular NoSQL database solution, often combined with its cloud service, MongoDB Atlas, for developers seeking flexibility and scalability in data management. Both platforms cater to specific needs and preferences, further enriching the variety of tools available for app development.

## Pricing

Firebase uses a pay-as-you-go pricing model that makes it flexible for developers at different stages of their projects. It offers a free tier, called the Spark Plan, which is great for beginners or small apps. This plan comes with generous limits for features like authentication, database usage, and hosting, making it ideal for testing or small-scale prototypes.

For larger or more demanding apps, Firebase provides the Blaze Plan, where you only pay for what you use. While this model supports scalability, costs can add up quickly if your app requires heavy database usage, extensive reads/writes, or large amounts of cloud storage. Keeping track of your usage is important to avoid unexpected bills.

## Conclusion

Firebase is a popular choice among developers, offering a powerful platform that simplifies app development. Its seamless integration with Google services and features like real-time data synchronization, authentication, and hosting makes Firebase an excellent choice for creating scalable and efficient applications. The free tier is a great starting point for smaller projects, but costs can escalate quickly as your app grows. This is an important consideration for larger applications.

Firebase is beginner-friendly and packed with features, but this can lead to vendor lock-in, which may limit your flexibility in the long run. Developers looking for more customization, open-source options, or SQL-first solutions might find platforms like Supabase, AWS Amplify, or MongoDB better suited to their needs.

All in all, Firebase's balance of ease of use, and advanced functionality makes it an attractive option, especially for projects that benefit from its real-time capabilities and tight integration with Google's ecosystem. However, evaluating the specific needs of your project will help determine if Firebase or an alternative platform is the best fit.

## Refrences:

https://npm-compare.com/@supabase/supabase-js,aws-amplify,firebase,parse-server
https://www.reddit.com/r/reactnative/comments/16b53hn/baas_opinions_firebase_vs_aws_vs_supabase_vs/
https://invozone.com/blog/firebase-vs-supabase-key-differences-choosing-guide/
https://firebase.google.com/

### Strenght/weakness:

https://blog.back4app.com/firebase-advantages-and-disadvantages/
https://pangea.ai/resources/should-professionals-use-firebase-pros-and-cons

### Pros/cons

https://www.peerspot.com/products/google-firebase-pros-and-cons
https://www.weetechsolution.com/blog/mongodb-vs-firebase-which-is-the-right-database
https://blog.minimacode.com/use-firebase-for-your-project/
