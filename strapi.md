---
title: Strapi
keywords: development platforms, cms, strapi
tags: development platforms, cms, strapi
sidebar: development-platforms
permalink: development-platforms/strapi.html
folder: development-platforms
---

## Table of contents

1. [Introduction](#introduction)
2. [Brief history](#brief-history)
3. [Features](#features)
4. [Strengths](#strengths)
5. [Weaknesses](#weaknesses)
6. [Comparison](#comparison)
7. [Use case: creating an API](#use-case:-creating-an-api)
8. [Summary](#summary)
9. [Credits](#credits)
10. [References](#references)

## Table of content

1. [Introduction](#introduction)
2. [History](#brief-history)
3. [Purpose and Concepts](#purpose-and-concepts)
4. [Features and Ecosystem](#tensorflow-features-and-ecosystem)
5. [Strengths](#strengths)
6. [Weaknesses](#weaknesses)
7. [Comparison](#comparison)
8. [Summary](#summary)
9. [Glossary](#glossary)
10. [References](#references)

## 1. Introduction

The creation and maintenance of databases or Application Programming Interfaces (APIs) are tasks typically associated with the work of a backend or fullstack developer. The work of a frontend developer, on the other hand, is typically associated with consuming that data – turning it into chunks of information that will hopefully be meaningful to the end user of a given service of product.

However, web development platforms and technologies are evolving in such a way that the distance between frontend and backend developers is getting shorter and shorter. The widespread adoption of Strapi is an example of that trend. Strapi is an open-source headless Content Management System (CMS). It is arguably the easiest way for developers to create and manage their own APIs.

In this article, we will understand why Strapi was created and how it currently works. We will also cover some of its strengths and weaknesses. At the end, we will see Strapi in action – in combination with PostgreSQL – to create a simple API that serves developers with academic articles ready to be used in their frontend projects.

## 2. Brief History

Strapi was founded in 2015, in France. Soon after its first public repository was published on Github, in October that year, the company attracted the attention of developers from across the globe. I believe it's fair to say that, back then, developers weren't seeing a lot of innovation in the niche of Content Management Systems (CMSs). Wordpress, Drupal, Joomla and others were the main players in this field. However, most of these tools were considered either too limited or too complex. While they still allow developers to create their own APIs, they do so in ways that we can consider, perhaps, a little too old-fashioned.

The creators of Strapi took advantage of this market opportunity. A new open-source tool that allowed developers to create and manage APIs in an easy and straight-forward manner was a rather relevant innovation at the time. In 2017, Strapi was already a much talked-about product. A popular experimental version (V.3 alpha) was released. The first stable version came out in 2020, along with a new branding and an enterprise plan that consolidated the company's presence as an important player in the realm of headless CMSs. At the time of writing, Strapi's latest version is 4.3.9. It has become a ubiquitous service used by frontend, backend and fullstack developers who need to efficiently create and manage APIs.

## 3. Features

Below is a list of Strapi's main features and functionalities:

- Developers can quickly create APIs that are flexible, well-structured and easy to use.
- It offers adequate support for media libraries (audio, image and video files).
- It allows developers to manage a variety of roles and permissions for the API users.
- It offers a variety of authentication strategies that contribute to the privacy and security of the APIs.
- It offers native support for multi-lingual content.
- It can be used by developers, content managers and business teams.
- It offers flexible deployment options:
  - Strapi projects can be self-hosted.
  - Strapi projects can be deployed with various services such as Amazon AWS, Microsoft Azure, DigitalOcean, Google App Engine, Heroku and others.
  - Strapi projects can also be deployed with Strapi Cloud, although there currently is a waiting list for this functionality
- It presently supports PostgreSQL, MongoDB, SQLite, MySQL and MariaDB databases.
- It is framework agnostic, meaning it plays well with almost any popular framework of your preference.
- It works natively with Docker.
- It has a lively and active community, counting on a variety of plugins and third-party integrations. It also counts on an official Discord server.

## 4. Strengths

The features listed in the previous chapter actually constitute Strapi's main strengths. In addition to those, we can consider a few more topics that, in my opinion, make this platform a competitive choice in the field of headless CMS platforms:

- Since it is an open-source headless CMS, its code base is freely available for anyone to review it. The likelihood of vendor lock-in is, therefore, very low. This is an important aspect to consider. After all, open-source platforms are often associated with long-term predictability and viability for digital projects.
- The fact that Strapi is "100% JavaScript", as phrased in its homepage, may also be seen as a strength. The reason is simple: Javascript is usually the programming language that frontend developers are most familiar with. Consequently, a field which was previously dominated by backend developers can now be safely explored by frontend developers as well, or by other professionals who have limited knowledge of backend technologies. I believe this was one of the main reasons behind Strapi's rapid dissemination and adoption by tech communities.
- The REST APIs created via Strapi can be easily documented with popular tools such as Swagger.

## 5. Weaknesses

Strapi has, of course, some weaknesses too. For some projects, the following topics may be a hindrance:

- Strapi's documentation is perhaps not as well updated as we would wish. To illustrate this point, I will give a quick example that I have experienced while writing this article: following the official documentation was not enough to successfully install Strapi in an M1 MacBook Pro. In order to complete the installation, I had to rely on other forums and external tutorials that covered issues not mentioned in the official documentation.
- Strapi may not be the ideal platform for projects primarily written in Typescript. There surely are external tools and resources that allow developers to integrate Typescript in their Strapi projects. However, the fact that Typescript has not been fully incorporated into the Strapi world yet may be a relevant limitation to some developers.
- Strapi does not have a native hosting environment yet, although they have recently announced StrapiCloud, as a tool which will fill this gap in the future.
- Strapi is rapidly evolving and that means it is frequently updated. Some of these updates may be disruptive, as they implement breaking changes that may compromise some projects.

## 6. Comparison

_Compare the product to other products in the same category, if applicable._

I suggest two ways of comparing Strapi with similar products: (a) we can analyse how it differs from more traditional CMS platforms like Wordpress (WP), Drupal and Joomla; and (b) we can analyse how it differs from more modern products that perform similar roles, even though these may not be strictly equivalent in terms of functionalities.

### Strapi vs. Traditional CMS platforms

Wordpress (WP) is one of the most popular development platforms of all time. It still powers a significant share (over 40%) of the web. While WP is often used as headless CMS, offering developers the capability to create their own APIs, it is not always seen as an ideal choice. The reason is simple. When creating an API via WP, one would typically need to rely on a plethora of third-party plugins – maintained by different companies or independent developers. Such scenario can often result in issues related to maintenance, reliability and scalability.

The same is true for other contenders in the field of traditional CMSs.
Drupal and Joomla are two well-known examples -- in my opinion, they both feel like legacy technologies. Joomla is arguably falling into disuse, being rarely considered a desired option for modern web development projects. Drupal, on the other hand, still plays a somewhat important role in the market, powering "at least 18% of the top 10,000 websites worldwide", according to a BuiltWith report (https://trends.builtwith.com/shop/open-source/traffic/Top-10k).

When it comes to the creation and maintenance of APIs, the issue with these traditional platforms –– in my view, at least –– is that they are not focussed enough. They really are technologies from a previous era, when API-centric development was still not an option. In these platforms, creating an API might be a labour-intensive task. Also, many developers tend to frown upon PHP, which, despite being still very useful in some niches, is a language that many prefer to simply ignore.

### Strapi vs. Modern CMS platforms

On the other hand, in recent years we have seen the emergence of numerous other platforms which, like Strapi, allow developers to create their own APIs in a relatively easier and more reliable fashion. While not always being directly comparable, it might be useful for developers to know about their existence.

One of Strapi's closest competitors is [Contentful](https://www.contentful.com). This platform is also based on an API-first architecture. It compares to Strapi to the extent that developers can benefit from a simple installation process, a user-friendly interface and, most importantly, a focused environment whose sole purpose is to create and manage APIs. It is not open-source, however. On the other hand, unlike Strapi, it does offer integrated hosting services for its APIs. Being a product tailored to the corporate world, the high monthly costs of Contentful can be an impeding factor for many projects.

Another product that can be compared to Strapi is [Sanity](https://www.sanity.io). It is also an open-source CMS that offers powerful and very customisable functionalities. It has extra functionalities that may be appealing for professionals who may want to edit image files without leaving the platform. The API functionalities are comparable to Strapi's, although not as granular. Like Contentful, Sanity also offers integrated hosting.

I think this comparison can be summarised in the following way: on the one hand, Strapi seems to be the most flexible and most customisable of these tools, but it does require some extra work in terms of setting up external hosting and databases. On the other hand, Contentful and Sanity are a simpler tools that, despite offering hosting out of the box, have a light disadvantage for those wanting to create highly granular and customisable APIs. What do they have in common? All of them play well with most modern frontend frameworks, as well as with most popular static hosting services. Also, the three tools offer free tiers that are probably enough for most individual, small-scale projects.

There are of course numerous other tools that allow developers to create their own APIs (like Netlify CMS, Butter CMS, Umbraco CMS, Firebase, AppWrite, Parse, AWS Amplify and countless others). But many of these fall into the Backend as a service (BaaS) category, which means they go beyond merely CMS functionalities. For that reason, I think they should not be directly compared to products that primarily advertise themselves as headless CMS platforms.

## 7. Use case: creating an API

I will now show how to create a simple API with Strapi. For this demonstration, I will be dealing with academic articles – so each entry will consist of fields like title, authors, publication date, body, references and so on. Here is a quick step-by-step guide:

1. Before installing Strapi, the first thing we need to decide is which database we are going to use.

... continue
