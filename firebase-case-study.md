---
title: Firebase - a BaaS for Front-end Developers
author: Ole Marius Sandø Rognan <olem90>
tags: Firebase, BaaS, case study, Development Platforms
---

## Introduction
Firebase is a Backend-as-a-Service (BaaS) with cloud computing features, offered by Google. It provides a range 
of tools for app development like databases, analytics, and machine learning. Its main advantage is that it takes 
care of the back-end work, allowing developers to focus on front-end tasks.

In this case study, we'll go over Firebase's history, its key features, and its pros and cons. 

## Brief History

- **2011:** Firebase was founded by James Tamplin and Andrew Lee.

- **2012:** Firebase was officially launched to the public.

- **2014:** Google acquired Firebase and integrated it into its Cloud services.

- **2016:** Firebase introduced Firebase Analytics and announced that it was expanding 
            its services to become a unified backend-as-a-service (BaaS) platform for mobile developers.

- **2017:** Firebase launched Cloud Firestore, a real-time document database as the successor product to the original Firebase Realtime Database. 


## Main Features

- **Hosting:** Ensures your web assets are globally accessible and automatically secured with SSL.

- **Cloud Storage:** Is ideal for storing files like images, audio, and videos.

- **Cloud Messaging:** Firebase allows us to deliver and receive messages in a more reliable way across platforms.

- **Authentication:** Supports multiple methods including email/password, third-party providers, and phone number authentication.
 
- **Realtime Database and Firestore:** are both NoSQL databases, with Firestore having more advanced querying capabilities and is generally more scalable.

- **Machine Learning:** Is there to integrate machine learning models into your app.

- **Crashlytics:** Helps you monitor, report, and fix issues with your app's stability.

- **Test Lab:** Provides cloud-based app testing. 

- **Remote Config:** Allows you to update the appearance and behavior of your app without requiring users to download an app update.

- **Performance Monitoring:** Is a service that helps you to gain insight into the performance characteristics of your apps.


## Market Comparison

### Advantages of firebase

**Free Plan**  
The availability of a free plan called Spark on Firebase makes it a good choice for developers worldwide. 
You can easily sign in with an existing Google account and start developing your apps.

Although this plan is free, it offers all the features required to build a functional app. Firebase users have 
the option of upgrading to the blaze plan when they want to build apps with advanced features. The Blaze plan offers 
all the features to build sophisticated apps.

While upgrading from the Spark plan, you simply pay for the extra server resources used beyond the limits of the free plan.

**Faster App Development**  
Firebase speeds up the development cycle by handling all backend needs, letting a front-end team bring an app to market quickly. 
It offers pre-built services and a supportive community, cutting down on coding time and complexities.

**Turnkey App Development Service**  
Firebase provides tools that make app development faster and more straightforward. Such as database options of using Firestore and 
Firestore Realtime Database. The platform covers all aspects of your app, from creation and deployment to monitoring. After launching 
your app, Firebase also offers tools that allow you to engage with users so they can continue using your app.

**Google Supports Firebase**  
One of the top advantages of Firebase is that it’s supported by Google, one of the leading technology giants in the world today.
which has led to improved features and better security and stability. 

**Enables Developers to Focus on Frontend Coding**  
With Firebase handling backend tasks, developers are free to prioritize frontend features and improve user experience. 
The platform's simplicity and standardized backend also speed up development, remove the need for boilerplate code, and make it 
easier to train maintenance teams.

**Serverless Platform**  
Firebase's serverless environment simplifies app scaling, eliminating the need for a specialized engineering team. You're only 
charged for the resources you use, and the platform auto-scales without requiring your input, making DevOps and resource management more efficient.

**Integrated Machine Learning Functions**  
Firebase lets you easily add machine learning to your apps. With built-in APIs, you can include features like barcode scanning, 
image labeling, text identification, face detection, and many more.

**Generates Traffic**  
Firebase provides features that allow you to navigate app indexing procedures so you can make your app visible on search.
Such features help you increase your app’s ranking which gives more visibility and leads to more downloads and app usage. 

**App Monitoring**  
Firebase's Crashlytics feature helps you identify, solve, and fix stability issues in your app. It monitors all errors, 
big or small, and provides detailed crash reports to show how they impact your users.

**Top-Notch Security**  
Firebase manages backup procedures efficiently, so you don’t have to bother about data loss. The secure Firebase server 
environment secures your app and ensures your data is protected by making backups regularly. Blaze users can configure 
automatic backup with the Realtime Database.


### Disdvantages of firebase:

**A Closed Source Platform**  
Firebase is not open-source, which limits developer control, disallowing code modifications. Although SDKs and libraries on GitHub offer 
some workarounds, the platform doesn't support community contributions or self-hosting options for those not satisfied with the pricing.

**Vendor Lock-In**  
The fact that Firebase users are locked in on the platform is a major disadvantage of using Firebase for app development projects.
Because it makes it hard to move to another platform later.

**Complex Pricing Model**  
Firebase's pricing can be complex and potentially expensive. While the free tier offers basic features, advanced functionalities 
come at a cost. It's challenging to estimate final expenses due to the resource-based billing model. 

**Not Available Globally**  
Since Firebase is an official Google product with its URL taking a Google subdomain, i.e, firebase.google.com, the service is blocked 
in China and other countries that block Google services.

Therefore, developers in such countries cannot use the Firebase platform to build and host their app backend. 

**Do Not Support SQL Database**  
The two databases available on Firebase are NoSQL databases. In essence, Firebase and Realtime databases cannot support relational database structures.
Although Firebase has added several features and upgrades to Firestore, running complex database queries is still challenging on the platform.

**Handling of ACID properties**  
ACID properties in Firebase's Realtime Database can be complex compared to relational databases. Transactions require specific coding, 
and data migration is slow and difficult. 

The use of JSON which lacks SQL functions is a significant factor that makes Firebase databases complicated. 

**Usage and Limits**  
While Firestore has excellent features like real-time database updates, offline query, and seamless scaling of the app, 
the Firebase database still has some quotas such as:

- Maximum of one million concurrent connections.
- Maximum of 10MB API request size.
- Maximum of 10MB API request size.
- Lack of native aggregation of query.
- Slow queries undermine database performance.
- The query pattern is not very flexible.

**Free Plan Support Basic Functions Only**  
The free Spark plan on Firebase offers basic app-building features, while advanced options like Machine Learning and Cloud Functions 
are for premium Blaze users. Cloud Functions have a free quota that is restricted to Blaze users only, and charges apply after exceeding the free limit.

**Restricted to Google Cloud**  
Firebase is hosted on Google Cloud, which means you can't use it with other cloud providers like AWS, Azure, or DigitalOcean. 
This limits your options for potentially cheaper hosting. Firebase users do not have server-level access, which makes server customization difficult.

**Lacks Dedicated Server and Enterprise Support**  
Firebase does not offer dedicated server plans and enterprise support, which can be an issue for certain users.
While Firebase works excellently as a serverless platform, such a hosting approach might not be appropriate for projects 
that need a higher level of customization on fully dedicated server clusters.

**No GraphQL APIs**  
Firebase provides REST as the default API option while GraphQL is unavailable. However, you can create a workaround to implement GraphQL API on Firebase.


## Getting Started

1. **Sign Up**: If you don’t have a Google account, you’ll need to create one. Then go to <u>[Firebase website](https://firebase.google.com/)</u>
2. **Create a project**: Click on "create a project" to create a new project. And follow the on-screen instructions. 
You'll need to give your project a name, select a Cloud Firestore location, and more. 
3. After creating your new project, you can press the "Sign Up" button to sign up for firebase.


## Conclusion

Firebase serves as a comprehensive Backend-as-a-Service (BaaS) platform that stands out for its user-friendly features, robust performance, 
and strong backing from Google. 
By taking care of the backend responsibilities, it makes it much easier for front-end developers to focus on developing an optimized user 
experience without being weighed down by the complexities of server management, data storage, and other backend complexities.

With a history that demonstrates constant growth from its acquisition by Google to its present day status as a 
unified BaaS solution.Firebase has evolved alongside the needs of the modern developer. Features such as Cloud Storage, Authentication, 
and Real-time Database makes Firebase an all-in-one platform for app development, maintenance, and scalability.

However, it's not without its limitations. The platform is not open-source, locking developers to its platform and limiting 
customization at the server level. Its pricing can get complex and potentially expensive, and it is not offering dedicated server plans 
and enterprise support, which can be an issue for certain users.

Overall, Firebase is a powerful tool for fast application development, particularly for front-end focused teams. Its limitations, 
while noteworthy, are often overlooked by the wide range of features it offers, making it a great choice for many development projects.
The decision to use Firebase should be determined by your specific needs, the scale of your project, and your willingness to 
work within the constraints of a Google supported ecosystem. 


## References
- [Wikipedia](https://en.wikipedia.org/wiki/Firebase)
- [Firebase - Back to the Basics](https://www.youtube.com/watch?v=q5J5ho7YUhA)
- [Firebase Features](https://www.javatpoint.com/features-of-firebase)
- [Firebase docs](https://firebase.google.com/docs/)
- [Back4app blog](https://blog.back4app.com/firebase-advantages-and-disadvantages/)