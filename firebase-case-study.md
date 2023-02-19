---
title: Firebase Case Study
keywords: Development platforms, backend, backend as a service, baas, javascript
tags: Google, Firebase, BaaS, Javascript
sidebar: development platforms
permalink: development-platforms/firebase-case-study.md / firebase-case-study/firebase-case-study.md
folder: development-platforms / firebase-case-study
---

# Firebase Case Study

## Introduction

Firebase is a cloud based development platform provided by Google. Firebase was created by James Tamplin and Andrew Lee at Envolve in 2011 to funnel data storage and data transfer into one realtime system for the companys chat service. In 2012 Firebase goes public as a separate company to Envolve, and in 2014 Firebase is acquired by Google. The short version of Firebase is that it provides a complete Software Development Kit, or SDK, across multible platforms to create applications with, providing cloud based solutions such as storage, hosting, and serverless computing. This allows developers to focus on building applications without having to worry about managing and maintaining servers or scaling.

## Brief History

- 2011: Firebase is created to funnel data storage and data transfer into one realtime system for Envolves' chat service.
- 2012: Firebase goes public with Realtime Database as their first product.
- 2014: Firebase launches two new products: Firebase Authentication and Firebase Hosting.
- 2014: Firebase is acquired by Google.
- 2016: Firebase expands their product portfolio with Firebase Analytics, Cloud Messaging, Test Lab and Crash Reporting, Notifications, Dynamic Links, Invites, App Indexing, AdWords and AdMob, introduces a new console, new SDK, and moves their documentation.
- 2017: Firebase launches Cloud Firestore, a realtime document database that can synchronize data across platforms.

## Features

The Firebase portfolio of products is divided into three categories: build, release & monitor, and engage. Each category has their own suite of products, tools, and integrations. To best illustrate the size of Firebases' portfolio, I will discuss and elaborate on their products and services by category.

### Build

**Cloud Firestore** is a NoSQL document database and is the next evolution of Realtime Database. Data is stored on documents and is grouped in collections. Becuase data is stored in collections rather than tables and rows like SQL databases, a database can scale horizontally rather than veritcally. Scaling in Firestore is automatic and is limited to 1 million concurrent connections and 10 thousand writes per second. Data is stored across multiple data centers regionally and multi-regionally which increases the reliability and performance of applications. Essentially, Cloud Firestore is constructed to solve performance issues with scalability while also reducing the complexity of data models and querying that Realtime Database has.

**Realtime Database** is a NoSQL database and is the original product Firebase procued since its inception in 2011. Data is stored as JSON and is synchronized across platforms and can be accessed from the client-side SDK, essentially being like an API. Data is cached locally and can be accessed in realtime, even offline, to improve the end-user experience.

**Cloud Functions** is a backend framework for Firebase. Much like express.js, it is a framework to write the logic to handle HTTP requests on the application. Cloud functions are stored in a Cloud Storage Bucket and the code is handled by Google's servers, building the function source, creating new instances to handle multiple events.

**Authentication** is an SDK that leverages industry standard authentication methods like OAuth 2.0 and OpenID Connect. Firebase provides two primary methods of authentication. The first is FirebaseUI Auth and is a complete drop-in product, providing a standardized log-in UI that can be configured accept third party authentication, such as Google Sign-In, Facebook Login, GitHub, etc. The second is the Firebase SDK Authentication which is a suite of authentication methods such as email and password, phone number, and third party authentication. It works by passing the user credentials or third party OAuth token through the Firebase Authentication SDK. Then the credentials are then verified on Firebase's backend services and returns a response. The authenticated response is session based, meaning the user can end and restart the application and continue their session without having to log in again.

**Cloud Messaging** is a messaging and notification service that uses the Cloud Functions environment to push messages to the end users. Messages can be constructed in the Firebase Console GUI, and users can be targeted granularly, by groups, or by categories through serverside code. As with other Firebase products and services, this architeture is focused on scalability.

**Hosting** is a hosting service that serves content over an SSL connection on edge servers on a global CDN.

**Firebase ML** is a mobile SDK that provides machine learning models with APIs in the cloud or on-device. The cloud or on-device API Firebase provides pre-trained models for text recognition, image labeling, object detection and tracking, face detection and contour tracing, barcode scanning, language identification, translation, and smart reply.

### Release & Monitor

**Crashlytics** is a realtime crash reporter for mobile apps. It condenses performance and crash information into managable lists and provides recommended solutions.

**Performance Monitoring** is an SDK that collects data about an applications performance. It monitors things like an applications start-up time and HTTP network requests, and reports this information in the Firebase Console.

**Test Lab** is a cloud based end-to-end testing environment, or lab, to test mobile applications on different devices. An application is hooked onto a device through an API for a device running in a Google Data Center, allowing the application to be tested on the hardware it would be running on in a live environment.

**App Distribution** is another type of testing tool for mobile applications. Uploading IPA (iOS App Store Package) or APK (Android Application Package) files to a Firebase project allows Firebase to distrube the application to testers. Testers are invited through the Firebase Console and applications can be tested at different builds.

### Engage

**Google Analytics** is an SDK that monitors and reports user behavior. Conditions can be configured for measuring any event trigger, views, demographic or specific details about eCommerce or ad revenue. It is one of the free services of Firebase and has unlimited number of reports available to the user. Data is collected and is reported and displayed on a dashboard in the console.

**Remote Config** is a cloud service that lets developers make changes to an application without having the user update the application. These changes can be isolated from the rest of the user population, effecting changes to specific users or groups of users. Remote Config allows developers to make changes in the Firebase Console and roll out said changes to the user population without having to create a new build. Remote Config can also be integrated with A/B Testing.

**A/B Testing** is tool to test any metric of an application in an experiment. It runs on top of Analytics, Cloud Messaging, and Remote Config, allowing you to test for any metric at different builds or variation to an application in sample pool of users. A/B Testing is powered by Google Optimize, which performs Bayesian statistical analysis of the experiment and generates a report of Observed Data and Modeled Data. Observed being totals, averages, and percentile differences, and Modeled being probability, percentile differences from baseline, and metric ranges.

## Strength

Discuss the product's strengths

Comprehensive ecosystem for building and testing

Expansive cross-platform portfolio

Focused on scalability

## Weaknesses

Discuss its' weaknesses

Vendor lock-in

Only NoSQL database available

Can get very expensive

## Comparison

Compare the product to other similar products i.e.: AWS Amplify

## Summary

Summarise with relevance

### Credits

-

### References

- https://firebase.google.com/products-build
- https://www.wired.com/2012/04/firebase/
- https://techcrunch.com/2014/05/13/firebase-adds-web-hosting-to-its-database-platform/
- https://firebase.blog/posts/2014/10/firebase-is-joining-google
- https://techcrunch.com/2014/05/13/firebase-adds-web-hosting-to-its-database-platform/
- https://www.youtube.com/watch?v=QcsAb2RR52c&ab_channel=Firebase
- https://techcrunch.com/2017/10/03/google-launches-cloud-firestore-a-new-document-database-for-app-developers/
- https://firebase.google.com/products-build
- https://firebase.google.com/docs/database/rtdb-vs-firestore
- https://www.youtube.com/watch?v=v_hR4K4auoQ&ab_channel=Firebase
- https://firebase.google.com/docs/database
- https://firebase.google.com/docs/auth
- https://firebase.google.com/docs/cloud-messaging
- https://firebase.google.com/docs/cloud-messaging/fcm-architecture
- https://firebase.google.com/docs/hosting
- https://firebase.google.com/docs/ml
- https://firebase.google.com/docs/crashlytics
- https://firebase.google.com/docs/perf-mon
- https://www.appmysite.com/blog/what-is-an-ipa-file-and-how-can-you-open-one/
- https://firebase.google.com/docs/app-distribution
- https://firebase.google.com/docs/analytics/
- https://firebase.google.com/docs/remote-config
