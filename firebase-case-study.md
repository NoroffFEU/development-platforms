---
title: Firebase Case Study
author: Antonio Arabejo
tags: Firebase, case study, development, platform, BaaS
---

## Introduction

As a front-end web developer, my web application knowledge is limited to the client side. When working with companies, this might be fine because they will hire other people who know about backend development. I guess the challenge "for me" is when a front-developer wants to  build their projects or work as a freelancer. To solve this problem, there are development platforms that can be used as a backend. One of the commonly used Backend as a Service (BaaS) development platform is Firebase.

In this case study, I will discuss Firebase. The history of it, what are the services it offers, its strengths and weaknesses, and also why I prefer it to the other Baas development platforms.

## Brief History[^1][^2][^3][^4]

- 2011 : Andrew Lee and James Tamplin started "Envolve." It offers API for websites' online chat integration, but some users use it as a real-time application for data syncing.
- 2012 : Firebase was founded to be used as a real-time database instead of "Envolve" in 2011 but publicly launched in April 2012.
- 2013 : Raised funding of $5.6 million from Flybridge Capital Partners and Union Square Ventures in June 2023.
- 2014 : Google acquired Firebase.
- 2017 : Firebase released a beta version of Cloud Firestore on October 03, 2017. An improved version of the original Firebase Real-time database.
- 2019 : Firebase Cloud Firestore introduced an improved version of the data storing structure in January 2019.
- 2023 : Firebase released an AI-powered extension powered by PaLM API(Pathways Language Model).

## Main Features

Firebase is a feature-heavy BaaS that helps build any application (web or mobile) faster and easier[^5]. It is a development platform that aims to solve three main struggles of developers in building applications[^6]: to build the application faster, release and monitor the application with confidence in its performance and stability, and engage with application users. To solve these problems, here are the main features of Firebase to boost building applications.

 - ### Build Products[^7]

   Firebase Build products can manage the application's infrastructure to accelerate and scale the development.
   
   - **Cloud Firestore** : is a NoSQL document database. NoSQL stands for "not only SQL," which manages a database system different from the traditional relational databases. It is designed to handle large volumes of data. Cloud Firestore stores data in a collection of documents; these documents can also stored sub-collection of documents and so on. Even how big your data will become, Cloud Firestore can retrieve data easily using their expressive queries. The following are more of their build products :
       - **Realtime Database**
       - **Remote Config**
       - **Firebase Extension**
       - **App check**
       - **Cloud Functions**
       - **Authentication**
       - **Cloud Messaging**
       - **Hosting**
       - **Cloud Storage**
       - **Firebase ML(Beta)**
         
- ### Release And Monitor Products[^8]

  Firebase release and monitor products help developers manage and maintain application quality and stability quickly with less effort.

    - **Firebase Crashlytics** : is a crash and error reporting tool. When an application, whether web or mobile, encounters a problem experienced by the user, it sends an error report in real time. It helps developers to fix bugs in the application as quickly as possible. It also sends essential information for troubleshooting the cause of the crash or the error. The following are more of their release and monitor products :
       - **Google Analytics**
       - **Remote Config**
       - **Performance Monitoring**
       - **Test Lab**
       - **App Distribution**
  
- ### Engage Products[^9]

  Firebase engage products help optimize the application to suit the user's needs and give them what makes them happy.

   - **Remote Config** : is a feature management tool. Developers can quickly change the behavior and appearance of the application without updating the application from an app store. It also allows developers to customize the application's content based on the user's location, age, gender, or how much they spent with your application. This tool is good if you want to test your applications with different target audiences without doing much stuff in changing your codes, and there is no need for the users to update their apps. The following are more of their engage products :
       - **Google Analytics**
       - **A/B Testing(Beta)**
       - **Authentication**
       - **Cloud Messaging**
       - **Crashlytics**
       - **In-App Messaging**

## Strengths

- **Google** : As the owner of Firebase, Google itself is its biggest strength. Google is a big company with 1% going bankrupt—well-known for its technology products and thousands of developers working with them. Many experienced developers are solving any weakness you might have with Firebase today. Since Google has a lot of products, you can have a lot of tools that can be used to integrate with Firebase.
- **Authentication** : Firebase offers highly secure authentication and identity management services. From its Google account to Facebook, Twitter, and many more.
- **Real-time Database** : It synchronizes data from databases to users' devices in real time. Any changes in the database will reflect automatically simultaneously in the user's device, whether web or mobile. This is commonly used in developing live chat features in the application.
- **Real-time Crash Reporting** : The actual user only discovers some bugs. If these problems are not reported immediately, it will either make more users experience the problem, or your updates will create more problems because you still need to fix the old one. This reporting also helps developers find the root of the problem the fastest way.
- **Remote Config** : Sometimes knotakes, working what your target audience wants is hard. Remote config helps to customize the application based on the type of users without changing codes or updating the application.

## Weaknesses

- **Vendor-Lockin** : Using a lot of tools from Firebase will mean also that you need to change a lot of code when changing providers or platforms. So you will end up taking a lot of time to change your code or keep using it forever.
- **Price** : Since Firebase has a lot of tools or features to offer, it comes with a price also. Although, they provide a free tier for small projects but only for good testing purposes.

[^1]: https://blog.back4app.com/firebase/
[^2]: https://www.c-sharpcorner.com/article/introduction-to-google-firebase/
[^3]: https://cloud.google.com/firestore/docs/release-notes#October_03_2017
[^4]: https://firebase.blog/posts/2023/05/whats-new-at-google-io
[^5]: Yahiaoui, Housen, _Firebase:Cookbook_, Pack Publishing, 2017, pp. 7
[^6]: https://blog.back4app.com/firebase/
[^7]: https://firebase.google.com/products-build
[^8]: https://firebase.google.com/products-release
[^9]: https://firebase.google.com/products-engage
