---
title: Firebase
keywords: backend solution, firebase
tags: backend, google, firebase
---

## Introduction

Firebase provides users easy access to app authentication, databases, hosting and a handfull of other usefull features.
This makes maintaining the app wuite alot easier then if you would do it by yourself!

## Brief History Year by Year

### 2012

Firebase launched to the public april 2012.
It launched with the Firebase Realtime Database, a solution that synchronies data across multiple platforms including mobile apps and web apps!

### 2014

Firebase launched 2 new products to it's users, Firebase Hosting and Authentication, this made Firebase a "MBaaS" short for "mobile backend as a service", more commonly known as backend as a service, which is a solution that provides mobile apps and web apps developers a way to integrate their application with push notifications and messaging services.

In october 2014 Google acquired Firebase

### 2015

Google acquired the company "Divshot" and merged Divshot with Firebase

### 2016

At Google I/O (Google's conference for showing that's coming) they announced Firebase Analytics.
Firebase also integrates with google services such as Google Cloud Platform and Google Ads.
Google acquired more company's and merged them with Firebase, these companys are
LaunchKit and Crashlytics.

## Features

Firebase's Key Features are:

- Cloud Messaging (Used for push notifications)
- Authentication
- Test Lab
- Hosting
- Remote Configuration
- Dynamic Links
- Crash Reporting
- Real-time Database
- Storage

## What do these features do?

I'll be going over 4 of these features starting with:

### Cloud Messaging

Firebase Cloud Messaging (FCM) is a tool that lets you send messages cross platform in a good and reliable way.
It uses push notification to send these messages, which can be sendt through the firebase console website.
The push notifications is handled through the API and can handle 2 types of messages, which are notification messages and data messages.
Notification messages are the push notifications, which will be displayed on the user device, while data messages are directly handled by the application.

### Authentication

Firebase Authentication provides the backend and UI for authentication.
It supports login using password, phone numbers and authenticating with social media, such as Facebook, Google and Twitter and more.
The service uses the industry standards such as OAuth 2.0 and OpenID Connect which makes it possible to integrate it with your own custom backend service. Making it appealing for most developers.

### Test Lab

This is a feature i've personally used before, and it works really well.
The program runs through your application checking for bugs or security failures,
it also records the process so you won't struggle finding where the bug or leak was when it was detected.
Another key feature is the possibility of configuring and testing the app,
on different devices so you can get a better idea on how it runs in the real world.

### Real-Time Database

The real-time database store and syncs the data with Google's NoSQL database, which is stored in the cloud.
All devices on the application shares one Realtime Database instance and it automatically syncs in real time with all the users.
The database is a one big JSON object and can be handled and updated by developers in real time,
aswell making it easy to maintain and push changes to the application.

## Strengths

- Authentication is secure and can be done by email and password, facebook and other SSO methods.
- Provides realtime data to the developer.
- API is easy to integrate and has really good documentation official and community documentation
  By community documentation i mean solutions to error messages on sites such as github and stackoverflow!
- File backup is done by using Google Cloud

## Weaknesses

- Support for iOS development is limited compared to Android
- Focuses mostly on Android apps & services
- limited data migration

## Comparison

### AWS (Amazon Web Services)

- Firebase is faster then AWS
- Also cheaper then AWS
- AWS also has easy setup and integration, it also has a big library of different choices the developer can pick from when it comes to hardware.
- AWS is quite expensive as it's pay per use. It calculates cost based on traffic.

## Summary

Firebase is a great choice if your application needs a database, and if you lack the needed backend knowledge to host the database and such.
It makes it easy and fast to set up, something that would previously take quite a while to get right.
The overview you get by using Firebase is amazing, and is without a doubt the best in the business at the time of writing this.
Considering the community support Firebase has aswell you rarley get stuck on a error message as it's almost guaranteed that other developer
have encounterd that error aswell, making it easy to solve and move on.

### Credits

Written by:

- Patrick Nordbo Johnsen (pnordboj)

#### References

### Articles

- https://en.wikipedia.org/wiki/Firebase
- https://www.javatpoint.com/features-of-firebase
- https://osdb.io/firebase-pros-and-cons-when-you-should-and-shouldnt-use-firebase-osdb/
- https://os-system.com/blog/comparison-firebase-with-other-platforms/
- https://en.wikipedia.org/wiki/Mobile_backend_as_a_service

### Videos

#### These videos are made by fireship

#### Short 100 seconds video with history and example

- https://www.youtube.com/watch?v=vAoB4VbhRzM

#### Longer video, where he makes a messaging app using Firebase

- https://www.youtube.com/watch?v=zQyrwxMPm88

#### 5 Alternatives to Firebase

- https://www.youtube.com/watch?v=SXmYUalHyYk
