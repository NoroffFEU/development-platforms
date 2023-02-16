---
title: Supabase Case Study
keywords: development platforms, BaaS
tags: Development Platforms, backend
sidebar: development-platforms
permalink: development-platforms/Supabase.html
folder: development-platforms
---

# Supabase

## Introduction

Supabase is a development platform that aims to help developers get a backend for mobile/web apps up and running.
The platform is built with open source technology and it is built on top of PostgreSQL, which is a popular database management system. Although Supabase is still in its infancy, the platform is evolving rapidly with new features. It's backed by YC and Mozilla and is one of the fastest-growing BaaS platforms. Supabase market itself as a direct replacement for Firebase. The Supabase team is a globally remote team that aim to deliver a secure, stable and scalable system.
It provides all the backend services you need to build a product and has good documentation.
Using a BaaS like Supabase allows developers to focus on the product and on providing the best user interface and user experience, without paying too much attention to the backend.
Although it is free to use and modify, the hosting costs money.

## Brief History

In 2019 Supabase started development as an open-source alternative to Firebase and the development continues with new features being added.
In May 2022 Supabase announced that it raised $80 million funding for further growth and the community surpassed 80,000 developers

## Features

-   Authentication
    -   Leverages Postgres' built in auth functionality and row level security
    -   Provides a suite of authentication providers and login methods
-   Hosting
    -   Offer a free plan, pro plan and enterprise plan
    -   500MB database & 1GB file storage for free
    -   Option to self-host
    -   predictable pricing with a price cap option
-   Serverless database
    -   Hosted platform with a simple to use UI
    -   Create database tables easily
    -   SQL editor if a non default-schema or action is needed
    -   Automatically generated API's for CRUD operations right out the box
    -   unlimited api request for free
-   Realtime database
    -   Can listen to changes in the database and broadcast those changes
    -   Can listen to changes in different sorts of databases
    -   Can listen to stock market events and broadcast them
    -   Can listen to web3 / blockchain market and broadcast them
    -   Can listen to changes in the database and broadcast those changes
    -   Can broadcast a server clock (timer)
-   SDK's (software development kit) for JavaScript, Go, .net, Java, Python, C#

## Strengths

Supabase enables a rich set of performant querying capabilities out of the box and because the database is SQL, data is easy to configure and query if you are familiar with SQL.
The Supabase developers utilizes only free open source software, and if no tool exists needed for the feature they are building, they develop the tool themselves and then open-source it.
It is possible to self host a Supabase project, the developer has full access to the source code. This is by many considered an advantage and it prevents you from vendor locking. The Supabase documentation provides good information on [self-hosting with docker](https://supabase.com/docs/guides/self-hosting/docker#file-storage-backend-on-macos).
They offer generous hosting plans with unlimited api requests and storage up to 1GB. You can later go for the pro plan if needed.

## Weaknesses

-   The relational database can be drawback depending on the application. NoSQL databases are more flexible than relational and can be faster to query, which is preferred for for apps with more unstructured data and many users.
-   As Supabase is still a relatively new service it lacks many features as compared to its competitors. However, Supabase is catching up fast and is adding new features regularly. But for mobile app development, other services such as firebase is to prefer.
-   If you choose to self host your project, although the reason for choosing a BaaS most likely is that you didn't intend to that, you will need some technical knowledge on backend development. You most certainly will have to do some configurations before production.

## Comparison

When comparing Supabase to other services in terms of web app development, Supabase offers many of same features as for example Firebase.
Supabase is a relational database whereas Firebase is a NoSQL database. When considering which service you want to use, it is relevant to know what kind of database is used when choosing a BaaS.
Relational databases are useful when data is related, rigid, and needs to be consistent every time. On the other hand, it might be better to use NoSQL if we have flexible data with different data types.
Both database types have their pros and cons. For instance, NoSQL databases could be repetitive, but querying the database is fast. That’s why it’s used for search engines and social media feeds. Consistency and performance are two big factors.
Choosing the right BaaS is very much dependent on your project’s functional requirements and expected growth.

## Summary

Being familiar with a backend service such as Supabase can be a huge advantage for front-end developers. The benefits includes lower engineering costs and faster development for web applications. It helps the developer to do all the backend services in one go, and put their main focus on the front-end development. PaaS(Platform-as-a-Service) can also be an alternative for your app if you wish to develop the backend yourself.

### Credits

-   Ole Martin Snoen (olemart1n)

#### References

-   https://medium.com/@tkarmakar27112000/appwrite-vs-supabase-vs-firebase-48d1dd79bdc2
-   https://thenewstack.io/supabase-takes-aim-at-firebase-with-a-scalable-postgres-service/
-   https://supabase.com/blog/supabase-realtime-with-multiplayer-features
-   https://happyteam.io/blog/supabase-open-source-baas-can-it-work/
-   https://supabase.com/docs/guides/
-   https://www.freecodecamp.org/news/the-complete-guide-to-full-stack-development-with-supabas/
-   https://supabase.com/docs/guides/self-hosting/docker#file-storage-backend-on-macos
-   https://www.analyticssteps.com/blogs/what-backend-service-baas
-   https://www.prnewswire.com/news-releases/supabase-announces-80-million-series-b-led-by-felicis-301544453.html

<a href="https://supabase.com/" align="center">

<img width="300" src="https://raw.githubusercontent.com/supabase/supabase/master/packages/common/assets/images/supabase-logo-wordmark--dark.svg#gh-dark-mode-only">

</a>
