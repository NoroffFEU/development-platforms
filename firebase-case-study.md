---
title: Firebase Case Study
author: Antonio Arabejo
tags: Firebase, case study, development, platform, BaaS
---

## Introduction

Front-end developers focus on creating the user interface (UI) that the user can see on screen and can interact with. They must make sure that it functions smoothly and appealing to the users. When comes to the data the users enter into an application, these things are handled by a back-end developer. This is one of the challenges a front-end developer faces when deciding to create a full-stack application. A front-end developer's knowledge is focused only on the client side and has limited or no knowledge of server or data handling. When working with companies, this might be fine because they will hire other people who know about backend development. The challenge is when a front-end developer wants to  build their projects or work as a freelancer. To solve this problem, Backend as a Service (BaaS) was created.

Backend as a Service is a cloud service model that provides a pre-written code or software to handle the back-end development. Using this service, developers only focus on building the front-end of the app and takes a little time to handle data since it is already provided by the vendors. These are some of the services provided by a BaaS vendor:[^1]
 - Database management
 - Cloud storage
 - User authentication
 - Push notification
 - Hosting

One of the commonly used Backend as a Service (BaaS) development platform is Firebase.

In this case study, it will focus on discussing Firebase. The history of it, what are the services it offers, its strengths and weaknesses, comparison to other BaaS platform vendors, and also why some prefer to use it over others.

## Brief History[^2][^3][^4][^5]

- 2011 : Andrew Lee and James Tamplin started "Envolve." It offers API for websites' online chat integration, but some users use it as a real-time application for data syncing.
- 2012 : Firebase was founded to be used as a real-time database instead of "Envolve" in 2011 but publicly launched in April 2012.
- 2013 : Raised funding of $5.6 million from Flybridge Capital Partners and Union Square Ventures in June 2023.
- 2014 : Google acquired Firebase.
- 2017 : Firebase released a beta version of Cloud Firestore on October 03, 2017. An improved version of the original Firebase Real-time database.
- 2019 : Firebase Cloud Firestore introduced an improved version of the data storing structure in January 2019.
- 2023 : Firebase released an AI-powered extension powered by PaLM API(Pathways Language Model).

## Main Features

Firebase is a feature-heavy BaaS that helps build any application (web or mobile) faster and easier[^6]. It is a development platform that aims to solve three main struggles of developers in building applications[^7]: to build the application faster, release and monitor the application with confidence in its performance and stability, and engage with application users. To solve these problems, here are the main features of Firebase to boost building applications.

 - ### Build Products[^8]

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
         
- ### Release And Monitor Products[^9]

  Firebase release and monitor products help developers manage and maintain application quality and stability quickly with less effort.

    - **Firebase Crashlytics** : is a crash and error reporting tool. When an application, whether web or mobile, encounters a problem experienced by the user, it sends an error report in real time. It helps developers to fix bugs in the application as quickly as possible. It also sends essential information for troubleshooting the cause of the crash or the error. The following are more of their release and monitor products :
       - **Google Analytics**
       - **Remote Config**
       - **Performance Monitoring**
       - **Test Lab**
       - **App Distribution**
  
- ### Engage Products[^10]

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

## Comparison

Firebase is always compared to Supabase as the open-source alternative. Although they have a lot in common or have the same features, Supabase is still far from being an alternative to Firebase. Firebase has a lot more to offer than Firebase. If all these features are available in Supabase, then it can be considered as an alternative to Firebase. But here are some parts or features of Firebase that can be compared to Supabase.

- **Price**[^11][^12] : Firebase has only two choices free plan and a pay-as-you-go plan. Supabase has four choices, depending on how big your project will be. Both of them offer a free tier for small projects but Supabase has a limit only for two projects while Firebase has unlimited.
- **Database**[^13][^14]: Firebase is built from NoSQL while Supabase is built from PostgreSQL. NoSQL is advantageous for real-time data synchronization while PostgreSQL is advantageous in migrating your database.
- **Products**[^15][^16]: Firebase has 18 products while Supabase has only 6. Firebase also offers some extensions and integration with other applications.

Another BaaS platform that competes with Firebase is Amazon Web Services (AWS). There are also well-known companies that use AWS services. AWS is a comprehensive cloud service vendor that provides a wide range of services in building applications. Because of this, this can be complex and intimidating for new front-end developers. While Firebase is focused on building the applications fast and easy, and so developers find it simple and easy to use. Here are some of the comparisons between AWS and Firebase.

- **Price**[^12][^17] : Although AWS offers also a free tier like Firebase, the difference is that some of their product is available for free only for a limited time. You must be careful and make sure that the product you using is always free or limited time only in order to avoid unexpected bills. AWS also offers a pay-as-you-go plan.
- **Database**[^14][^18] : AWS offers a different kinds of database. They offer PostgreSQL like Supabase, NoSQL like Firebase, and many more. You can choose the database that suits your needs.
- **Products**[^16][^18] : Since AWS is a comprehensive cloud service, it has a lot more to offer than Firebase which focuses only on web and mobile application development.

One more BaaS platform available in the market today is Appwrite[^19]. Like Supabase, Appwrite is an open-source BaaS platform, and like Firebase it uses a NoSQL database. Although it uses a NoSQL database, Aopwrite has a built-in database. It means the database is integrated tightly to the platform so it will work smoothly with its features and services. Unlike Firebase you have to use their other feature Firestore.

## Conclusion

Although Firebase has some issues with how its data is structured, there are a lot of supports you can find on how to optimize and use Firebase. You can find a big community online and also textbooks for Firebase. There is also a long list of well-known companies that uses Firebase and its other product. Support and the integrity of the company or the owner of the platform have a big impact on choosing the right Baas provider as a front-end developer. For the satisfaction of customers, having more features to help with development and optimizing the application is great for developers, which Firebase can offer. AWS could also be a great choice, but a developer must have a deep understanding or knowledge of its different services and configurations which may slow down the development. Unlike Firebase which focused on speeding up the application development.

## References

- https://www.cloudflare.com/
- https://supabase.com/
- https://firebase.google.com/
- https://blog.back4app.com/firebase/
- https://www.c-sharpcorner.com/article/introduction-to-google-firebase/
- https://firebase.blog/posts/2023/05/whats-new-at-google-io
- https://aws.amazon.com/?nc2=h_lg
- https://appwrite.io/
- Firebase: Cookbook, 2017, Housen Yahiaoui
  
[^1]: https://www.cloudflare.com/learning/serverless/glossary/backend-as-a-service-baas/
[^2]: https://blog.back4app.com/firebase/
[^3]: https://www.c-sharpcorner.com/article/introduction-to-google-firebase/
[^4]: https://cloud.google.com/firestore/docs/release-notes#October_03_2017
[^5]: https://firebase.blog/posts/2023/05/whats-new-at-google-io
[^6]: Yahiaoui, Housen, _Firebase:Cookbook_, Pack Publishing, 2017, pp. 7
[^7]: https://blog.back4app.com/firebase/
[^8]: https://firebase.google.com/products-build
[^9]: https://firebase.google.com/products-release
[^10]: https://firebase.google.com/products-engage
[^11]: https://supabase.com/pricing
[^12]: https://firebase.google.com/pricing
[^13]: https://supabase.com/database
[^14]: https://firebase.google.com/docs/database
[^15]: https://supabase.com/
[^16]: https://firebase.google.com/
[^17]: https://aws.amazon.com/pricing/?nc2=h_ql_pr_ln&aws-products-pricing.sort-by=item.additionalFields.productNameLowercase&aws-products-pricing.sort-order=asc&awsf.Free%20Tier%20Type=*all&awsf.tech-category=*all
[^18]: https://aws.amazon.com/?nc2=h_lg
[^19]: https://appwrite.io/
