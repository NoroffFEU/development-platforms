---
title: Firebase
author: Anders Nes <https://github.com/Noroff-Anders>
tags: Firbase, case study, BaaS
---

## Introduction

Firebase is an Backend-as-a-Service (BaaS) platform developed by Google. It provides a wide range of services for app developers, including authentication, databases, hosting, and alot of other useful features. 

Firebase is a great tool for developers who want to focus on building their app, rather than spending time on maintaining the backend.

## Brief History


- 2011: James Tamplin and Andrew Lee founded Firebase as a separate company from another comapanyy they founded a year before named Envolve. Envolve was an API that allowed developers to integrate chat into their apps but developers was using it for other purposes than chat like sync application data such as game state in real time across their users. Tamplin and Lee noticed this and decided to pivot the company to focus on the real-time database product and named it Firebase.

- 2014-2015: Firebase i acquired by Google and launches two new products: Firebase Hosting and Firebase Authentichation. In 2015  Google aquires  Divshot wich is an HTML hosting service and integrates it into Firebase Hosting.

- 2016: Firebase analytics is annouced. Google aslo annouced that they are expanding its services to become a unified backend-as-a-service (BaaS) platform for mobile developers.

- 2017 - today: Firebase continues to grow and expand its services. Google annouces that they are expanding the platform to web developers and annouces that they are adding support for web applications. Today Firebase is a popular choice for developers who want to build apps for both mobile and web.

## Main Features

Firebase's featuere set is quite extensive and includes the following features. I found the most relevant features for a front-end developer to know about.


 ### Build features
| Feature | Description |
| --- | --- |
| Realtime Database| - Cloud-hosted NoSQL database that allow you to store and sync data in realtime. Realtime syncing allows users to easily get their data from any device.<br> - Allows building serverless apps. Firebase ships with mobile and web SDKs that allow you to build apps without managing servers. <br> - When an device goes offline Realtime SDK's use local cache to serve and store changes  |
| Authentication | Allows for easy secure authentication. With firebase auth you can use the normal email and password login, or for example google facebook, twitter, and other login options |
| Cloud Messaging | -Provides an connection beetween server and device for sending and receiving message at no cost <br> - Advanced message targeting allows for targeting a predefined segment. For instance  You can also target message to devices that are subscrivet to a topic <br> Firebase messagin allows for customized notication messages that can be sent instantly. These are fully integrated with google analytics for monitoring effectiveness and engagement. |
| Hosting | Firebase can host your web apps without any infrastructure management needed. Hosting features such as domain management, No cost SSL certificat and effective scalability makes this a great product for front end devs. |
| Cloud Storage | Allows for storing and serving user-generated content. Cloud storage also allows for easy scaling if needed  |
| Machine Learning | With firebase machine learning you can train your own model or  start with an existing tensorflow model. Wiith AI things such as an chatbot or image classification model can improve your apps. |

### Monitor features
| Google Analytics| Analytics tool for data collecition such as users stats, crash reports and google ads to help you get the data you need for making the best improvements to your apps |
| crashlytics| real time crash reporting alows for quick bug fixing. With crashlytics you get a timeline of all the events leading up to a crash makes for easy reproducing of the problem. |
| Performance Monitoring  | Monitor your app performance. Performance Monitoring gives you insight to where improvements might be need to optamize your app  |


## Market Comparison

Firebase is not the only BaaS platform on the market. There are several other platforms that offer similar services. Some of the most popular alternatives to Firebase include supabase, AWS Amplify, and Back4App. In this section, I will compare Firebase to supabase as it is a popular alternative to Firebase and is advertising as an open source alternative to Firebase 
on their home page.

### Firebase vs Supabase


Supabase:

    Open-source: Supabase is an open-source platform, meaning its source code is freely available for anyone to use, modify, and distribute.

    PostgreSQL: Supabase uses PostgreSQL as its underlying database, offering powerful relational database features that are well-suited for complex queries and transactions.

    Flexibility: Users have greater flexibility and control over their applications with Supabase. They can self-host their applications or deploy them to various cloud providers.

    Growing platform: As a newer platform, Supabase is continually evolving and adding features. While it may not be as feature-complete as Firebase, it's rapidly gaining traction and community support.

    Cost: Supabase is generally more cost-effective, especially for larger projects, as it doesn't have the same scalability costs associated with proprietary cloud services.

Firebase:

    Proprietary service: Firebase is a proprietary platform developed by Google. While this means it's not open-source, it benefits from Google's infrastructure and resources.

    NoSQL database: Firebase utilizes a NoSQL database, which excels at handling large volumes of unstructured or semi-structured data. However, it may not be ideal for applications requiring complex relational queries.

    Reliability and scalability: Backed by Google's infrastructure, Firebase offers high reliability and scalability, making it suitable for large-scale applications with high traffic volumes.

    Comprehensive feature set: Firebase provides a comprehensive set of features for app development, including real-time database, authentication, cloud storage, hosting, and more.

    Vendor lock-in: Using Firebase may entail a risk of vendor lock-in, as developers become dependent on Google's ecosystem and services.

In summary, Supabase offers flexibility, cost-effectiveness, and powerful database capabilities, making it a compelling choice for developers seeking control and customization. On the other hand, Firebase provides reliability, scalability, and a comprehensive suite of features, albeit with the potential drawback of vendor lock-in.

## Getting Started

Since its relevant for front end developers, here is an example of how to get started with Firebase in your javascript project:


Step 1: Create a Firebase Project and register you project with Firebase. You can do this by going to the Firebase console and clicking on "Add Project". Then follow the instructions to register your project.

step 2: Install the SDK and initialize Firebase

you can install the SDK by typing the following command in your CLI: ```npm install firebase ```
Then you can initialize Firebase in your project by adding the following code to your project:

``` import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);
```

step 3: Access Firebase in your app

```
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}
```


## Conclusion

This section can be used to summarize your findings. What are the main advantages and disadvantages of your chosen tool? What are the main use cases for this tool? What are the main limitations of this tool? What does the future look like for this tool?

## References

- [Example.com](https://example.com)
- *Good Examples* by John Doe, 1990
- The Example Podcast, Episode 1
- [Examples Explained](https://youtu.be/dQw4w9WgXcQ)

## Additional Resources

- [More about Examples](https://example.com)
- [Examples, the Full Course](https://youtu.be/dQw4w9WgXcQ)