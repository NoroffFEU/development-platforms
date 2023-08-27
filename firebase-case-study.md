---
title: Firebase Case Study
author: Antonio Arabejo
tags: firebase, case study, development, platform, BaaS
---

## Introduction

As a front-end web developer, my knowledge in building web applications is only limited to the client side. When working with companies, this might not be a problem because they will hire other people who have knowledge of back-end development. The challenge of "for me" I guess, is when a front-developer wants to  build their own projects or work as a freelancer. In order to solve this problem, there are development platforms that can be used as a back-end. One of the commonly used Backend as a Service (BaaS) development platform is Firebase.

In this case study, I will discuss Firebase. The history of it, what are the services it offers, its strengths and also its weakness, and also the reason why I prefer it to the other BAas development platforms.

## Brief History[^1][^2][^3][^4]

- 2011 : Andrew Lee and James Tamplin started a company called "Envolve". It offers API for websites' online chat integration but some users use it as a real-time application for data syncing.
- 2012 : Firebase was founded in 2011 but publicly launched in April 2012.
- 2013 : Raised funding of $5.6 million from Flybridge Capital Partners and Union Square Ventures in June 2023.
- 2014 : Google acquired Firebase.
- 2017 : Firebase released beta version of Cloud Firestore in October 03, 2017. An improved version of original Firebase Realtime database.
- 2019 : Firebase Cloud Firestorre introduced an improved version of data storing structure in January 2019.
- 2023 : Firebase released an AI-powered extensions powered by PaLM API(Pathways Language Model).

## Main Features

Firebase is a feature-heavy BaaS that helps building any application (web or mobile) faster and easier[^5]. It is a development platform that aims to solve three main struggles of developers in building applications[^6], which are to be build the application faster, release and monitor the application with confidence on its performance and stability, and to engage with appllication users. To solve these problems, here are the main features of firebase to boost building application.

 - ### Build Products[^7]

   Firebase Build products are tools that can be used to manage the infrastructure of the application in order to accelerate and scale the development.
   
   - **Cloud Firestore** : is a NoSQL document database. NoSQL stands for "not only SQL" which is a type of managing a database system that is different from the traditional relational databases. It is designed to handle large volume of data. Cloud Firestore stored datas in a collection of documents, this documents can also stored sub-collection of documents and so on. Even how big your data will become, Cloud Firestore can retrieve data easily using their expressive queries. The following are more of their build products :
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
    - **Firebase Crashlytics** : is a crash and error reporting tool. When an application, whether it is web or mobile, encounter a problem as experienced by the actual user, it sends an error report in real-time. It helps developers to fix bugs in the application as quickly as possible. It sends also important informations for troubleshooting the caused of the crash or the error. The following are more of their release and monitor products :
       - **Google Analytics**
       - **Remote Config**
       - **Performance Monitoring**
       - **Test Lab**
       - **App Distribution**
  
- ### Engage Products[^9]
   - **Remote Config** : is a feature management tool. Developer can quickly change the behavior and appearance of the application without updating the application from an app store. It allows also for developers to customize the content of the application based on user's location, age, gender or how much they spent with your application. This tool is good if you want ot test your applications with different target of audience without doing much stuff in changing your codes and no need for the users to update their app. The following are more of their engage products :
       - **Google Analytics**
       - **A/B Testing(Beta)**
       - **Authentication**
       - **Cloud Messaging**
       - **Crashlytics**
       - **In-App Messaging**

[^1]: https://blog.back4app.com/firebase/
[^2]: https://www.c-sharpcorner.com/article/introduction-to-google-firebase/
[^3]: https://cloud.google.com/firestore/docs/release-notes#October_03_2017
[^4]: https://firebase.blog/posts/2023/05/whats-new-at-google-io
[^5]: Yahiaoui, Housen, _Firebase:Cookbook_, Pack Publishing, 2017, pp. 7
[^6]: https://blog.back4app.com/firebase/
[^7]: https://firebase.google.com/products-build
[^8]: https://firebase.google.com/products-release
[^9]: https://firebase.google.com/products-engage
