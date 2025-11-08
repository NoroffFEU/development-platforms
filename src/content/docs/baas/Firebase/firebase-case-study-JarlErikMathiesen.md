---
title: Firebase Case Study
author: Jarl Erik Mathiesen
tags: baas, firebase, case study, platform
---

## Introduction

Firebase is a Backend-as-a-Service (BaaS) platform developed by Google that provides a suite of tools for building web and mobile applications. It is particularly popular among frontend developers because it allows them to focus on user interfaces while outsourcing backend infrastructure, such as databases, authentication, and hosting.

## History

Firebase was originaly started in 2011 by James Tamplin and Andrew Lee, then under the name Envolve. Envolve provided an API for adding chat functionality to websites. Developers quickly discovered that it could be used not just for chatting, but also for syncing application data in real-time. This was due to the clever architecture using the websocket which became available with HTML5. On earlier versions, developers hacked it with “long polling” (client keeps asking the server repeatedly), which was clunky and resource-heavy. Developers started using Envolve not for chat, but to sync data in real time for things like games, collaborative apps, and dashboards. That’s when the founders realized their backend had much bigger potential. They rebranded and relaunched the syncing as a general-purpose real-time backend service under the name Firebase in 2012. It was eventually aquired by google, and has focused on providing a unified platform for building and scaling modern web and mobile apps without managing server infrastructure.

## Features

Firebase offers a variety of features that simplify backend development for web and mobile apps. Some of the most notable include:

- **Realtime Database & Firestore**:  
  Store and sync data in real-time across all clients. Firestore provides a flexible, NoSQL database structure, while automatically handling offline support and data synchronization.

- **Authentication**:  
  Built-in authentication supports email/password, social logins (Google, Facebook, Twitter), and custom providers. It also integrates seamlessly with OAuth, making user login frictionless.

- **Hosting**:  
  Firebase provides secure and fast static site hosting with a global CDN. Deployment is simple and integrates directly with your development workflow.

- **Cloud Functions**:  
  Run backend logic in response to events without managing servers. Functions can handle tasks like sending notifications, processing payments, or validating data.

- **Cloud Storage**:  
  Store and serve user-generated content, such as images and videos, securely and efficiently.

- **Analytics & Performance Monitoring**:  
  Built-in tools help you track user behavior, app performance, and errors in real-time, helping improve user experience.

- **Push Notifications & Messaging**:  
  Firebase Cloud Messaging allows sending targeted notifications to users on multiple platforms.

- **Extensive Integrations**:  
  Firebase works seamlessly with other Google services, such as Google Ads, Google Cloud, and BigQuery, making it easier to scale and analyze data.

Firebase’s feature set is designed to allow developers to focus on building functionality without worrying about the underlying infrastructure, making it especially appealing for small to medium apps, prototypes, and fast iteration cycles.

## Competitors

Firebase is just one of several Baas-providers that each has their own strengths and weaknesses. I have chosen to compare it with two other well known services, Supabase and AWS Amplify.

| Feature / Service  | **Firebase** (Google)                                               | **Supabase** (Open-source)                                          | **AWS Amplify** (Amazon)                                       |
| ------------------ | ------------------------------------------------------------------- | ------------------------------------------------------------------- | -------------------------------------------------------------- |
| **Database**       | Firestore (NoSQL, real-time)                                        | PostgreSQL (SQL, relational, real-time)                             | DynamoDB (NoSQL) or AppSync (GraphQL with multiple DBs)        |
| **Authentication** | Built-in (email, social, custom providers)                          | Built-in (email, social, magic links)                               | AWS Cognito (more complex, but powerful)                       |
| **Hosting**        | Static site hosting + CDN (very simple to set up)                   | Basic hosting (not primary focus, often paired with Netlify/Vercel) | Amplify Hosting (connected to GitHub, CI/CD support)           |
| **Ease of Use**    | Very beginner-friendly, excellent docs, great for small/medium apps | Beginner-friendly, especially if you know SQL                       | Steeper learning curve, more setup needed, enterprise focus    |
| **Pricing**        | Free tier + pay-as-you-go (can get expensive at scale)              | Generous free tier, usage-based pricing                             | Free tier + pay-as-you-go (enterprise pricing, can scale huge) |
| **Open Source?**   | ❌ Proprietary (Google-owned)                                       | ✅ 100% open source                                                 | ❌ Proprietary (Amazon-owned)                                  |
| **Best For**       | Prototyping, small/medium apps, mobile/web apps                     | Projects needing SQL & self-hosting, developer-friendly             | Enterprise-scale apps needing AWS ecosystem integration        |

Firebase is great for quickly building small to medium web or mobile apps. Its real-time database makes syncing data between users effortless, and it’s very beginner-friendly thanks to clear documentation and a large community. The fact that its tied to Google can be a strength because it makes integration over the platform easier, but it also mean you risk vendor lock-in, since migrating your data can be complicated.

Supabase takes a different approach. It’s open-source and uses PostgreSQL, making it perfect if you need SQL and relational data. It also supports real-time updates and can be self-hosted, giving you more control. If you use structured data that is well suited to relational databases like PostgreSQL, Supabase will be faster than Firebase which uses a NoSQL database. While being more technically demanding, the risk of vendor lock-in is lessened by the fact that you can easily migrate your database if you wish to change your provider later.

AWS Amplify shines for enterprise-level projects. It integrates deeply with AWS services, handles complex authentication, and scales easily. The downside is a steeper learning curve and more setup, plus costs can grow fast if you’re not careful.

## Testing

I was uncertain what i was going to write about and wanted it to be a technology it that could be useful to learn about as a frontend developer. I landed on firebase since it's popular among frontend developers, provides a lot of the backend in a simple way and it was new so i could learn a technology i didn't know anything about.

I decided to test it by making a miniblog. On an earlier assignment we used a headless CMS to load and make posts from a database in Wordpress. I did the hosting on netlify. Since firebase had its own database system i wanted to see how simple it would be to integrate this compared to netlify. The ability to host and have backend services at one place was very attractive.

The setup was fairly simple and it didn't take more than a few hours to set up simple page. Seeing if it worked was the main issue, so i spent no time on the design. It updated very fast and i was surprised that it went so smoothly.

Firebase also has built-in authentication and i really wanted to check this out. As a user i really like it when a page lets me authenticate using my Google account since it spares me the bother of having to write in my personal info and come up with a new password. So i wanted the user to be able to read the posts on the site, but only to be able to write when they where logged in. This also went smooth and i just had to change the ruleset to only let logged in users write to the database and update my html and javascript.

Link to the miniblog: https://mini-blog-1f44c.firebaseapp.com/

## Conclusion

On earlier assignments we have learned how to work on APIs and on headless CMSs to handle user input to and from a database. To authenticate we used localstorage and JWT. I'm glad we where taught this methods since its necessary to know about them. But with firebase you don't need to handle this things which makes it very easy to set up a page quickly without having to find a database provider. And the use of Oauth makes it possible to login without having to register on the page. Forcing users to register before they can explore a website increases the interaction cost, often leading users to abandon the site for other alternatives. In the fierce battle for user engagement, making sure they stay on your site by lowering the barrier by making authentication simple is a great tool.

This case study has also taught me a lot about how technology has evolved since the early 2010s, and I have a greater appreciation for how WebSockets made real-time data synchronization simple and efficient. Seeing how platforms like Firebase abstract away the complexity of servers, authentication, and data syncing makes it clear why modern web and mobile development has become faster and more accessible. I now better understand the value of these tools not just for convenience, but also for improving user experience and allowing developers to focus on building features rather than infrastructure.

Setting it up Firebase was simple, especially compared to the big job it was setting things up with earlier projects. This is the strength of Backend as a service technologies, it does the Backend part so we can focus on the Frontend. There are some concerns i would have if beeing involved in bigger projects. Because Firebase uses its own proprietary database, Firestore, it can be complicated to migrate the database to another system if you wish to change vendors later. Combined with the fact that prices can get expensive with a lot of traffic, i would have to think about what the consequences would be down the line. AWS Amplify reportedly have some of the same issues with spiraling costs with high traffic, but due to a more modular approach its simpler to migrate the database. This also leads to greater complexity and a steeper learning curve. Supabase uses SQL which is easier to migrate than non-relational databases. Since you have the ability to choose your host, its also easier to predict the pricing and choose what suits you best. But using Supabase means you need to know at least a little SQL and its customizability also contributes to more complexity.

My conclusion is that Firebase greatest strength compared to the competitors i have compared it with, is its ease of use. It doesn't have the customizability of Supabase or the Scalability of AWS Amplify, but its simplicity makes it perfect for prototyping and small apps

## References

- [Login Walls Stop Users in Their Tracks](https://www.nngroup.com/articles/login-walls)
- [History of Firebase](https://en.wikipedia.org/wiki/Firebase)
- [WebSockets Protocol and Long Polling](https://www.geeksforgeeks.org/computer-networks/websockets-protocol-and-long-polling)
- [Firebase vs Supabase vs AWS Amplify vs Appwrite](https://aaron-russell.co.uk/blog/firebase-vs-supabase-vs-aws-amplify-vs-appwrite)
