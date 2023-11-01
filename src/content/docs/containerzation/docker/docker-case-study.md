---
title: Docker
keywords: development platform, containerzation, package, docker
tags: development platform, containerzation, package, docker
---

## Introduction

Docker is a tool that is used to automate the deployment of applications in lightweight containers so that applications can work efficiently in different environments in isolation.

## Brief History Year by Year

| Year | Milestone                                                                                                                                                                                                                                                          |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2010 | Docker Inc. founded by Kamel Founadi, Solomon Hykes, and Sebastien Pahl during the Y Combinator Summer 2010 startup incubator group.                                                                                                                               |
| 2011 | Docker officially launched.                                                                                                                                                                                                                                        |
| 2013 | Docker debuted publicly at PyCon and was released as open-source. It initially used LXC as its default execution environment.                                                                                                                                      |
| 2014 | Docker replaced LXC with its own component, libcontainer, with the release of version 0.9. Collaboration with Red Hat, Microsoft announced integration of Docker engine into Windows Server, and Docker container services for Amazon Elastic Compute Cloud (EC2). |
| 2017 | Docker created the Moby project for open research and development.                                                                                                                                                                                                 |
| 2015 | Collaboration with Stratoscale, IBM, and other companies on an OS-independent standard for software containers.                                                                                                                                                    |
| 2016 | Docker's presence grew significantly on LinkedIn profiles.                                                                                                                                                                                                         |
| 2019 | Docker announced working on a version for Windows that runs on Windows Subsystem for Linux (WSL) 2.                                                                                                                                                                |
| 2020 | Microsoft backported WSL2 to Windows 10 versions 1903 and 1909, and Docker became available for these platforms.                                                                                                                                                   |
| 2021 | Docker Desktop for Windows and MacOS is no longer free for enterprise users; it introduced a Personal plan. Docker on Linux distributions remained unaffected.                                                                                                     |

You can copy and paste this Markdown code into your document to create the table.

## Features

Firebase's Key Features are:

-   Cloud Messaging (Used for push notifications)
-   Authentication
-   Test Lab
-   Hosting
-   Remote Configuration
-   Dynamic Links
-   Crash Reporting
-   Real-time Database
-   Storage

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

-   Authentication is secure and can be done by email and password, facebook and other SSO methods.
-   Provides realtime data to the developer.
-   API is easy to integrate and has really good documentation official and community documentation
    By community documentation i mean solutions to error messages on sites such as github and stackoverflow!
-   File backup is done by using Google Cloud

## Weaknesses

-   Support for iOS development is limited compared to Android
-   Focuses mostly on Android apps & services
-   limited data migration

## Comparison

### AWS (Amazon Web Services)

-   Firebase is faster then AWS
-   Also cheaper then AWS
-   AWS also has easy setup and integration, it also has a big library of different choices the developer can pick from when it comes to hardware.
-   AWS is quite expensive as it's pay per use. It calculates cost based on traffic.

## Summary

Firebase is a great choice if your application needs a database, and if you lack the needed backend knowledge to host the database and such.
It makes it easy and fast to set up, something that would previously take quite a while to get right.
The overview you get by using Firebase is amazing, and is without a doubt the best in the business at the time of writing this.
Considering the community support Firebase has aswell you rarley get stuck on a error message as it's almost guaranteed that other developer
have encounterd that error aswell, making it easy to solve and move on.

### Credits

Written by:

-   Patrick Nordbo Johnsen (pnordboj)

### References

### Articles

-   https://en.wikipedia.org/wiki/Firebase
-   https://www.javatpoint.com/features-of-firebase
-   https://osdb.io/firebase-pros-and-cons-when-you-should-and-shouldnt-use-firebase-osdb/
-   https://os-system.com/blog/comparison-firebase-with-other-platforms/
-   https://en.wikipedia.org/wiki/Mobile_backend_as_a_service

### Videos

#### These videos are made by fireship

#### Short 100 seconds video with history and example

-   https://www.youtube.com/watch?v=vAoB4VbhRzM

#### Longer video, where he makes a messaging app using Firebase

-   https://www.youtube.com/watch?v=zQyrwxMPm88

#### 5 Alternatives to Firebase

-   https://www.youtube.com/watch?v=SXmYUalHyYk
