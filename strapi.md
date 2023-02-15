---
title: Strapi
keywords: development platforms, cms, strapi
tags: development platforms, cms, strapi
sidebar: development-platforms
permalink: development-platforms/strapi.html
folder: development-platforms
---

# Strapi

## 1. Introduction

The creation and maintenance of databases or Application Programming Interfaces (APIs) are tasks typically associated with the work of a backend or fullstack developer. The work of a frontend developer, on the other hand, is typically associated with consuming that data – turning it into chunks of information that will hopefully be meaningful to the end user of a given service of product.

However, web development platforms and technologies are evolving in such a way that the distance between frontend and backend developers is getting shorter and shorter. The widespread adoption of Strapi is an example of that trend. Strapi is an open-source headless Content Management System (CMS). It is arguably the easiest way for developers to create and manage their own APIs.

This article will explain what Strapi is, why it was created and how it currently works. It will also cover some of its strengths and weaknesses. At the end, there will be a demonstration of Strapi in action – in combination with PostgreSQL – to create a simple API that serves developers with academic articles ready to be used in their frontend projects.

## 2. Brief History

Strapi was founded in 2015, in France. Soon after its first public repository was published on Github, in October that year, the company attracted the attention of developers from across the globe. Back then, developers weren't seeing a lot of innovation in the niche of Content Management Systems (CMSs). Wordpress, Drupal, Joomla and others were the main players in this field. However, most of these tools were considered either too limited or too complex. While they still allow developers to create their own APIs, they do so in ways that we can consider, perhaps, a little too old-fashioned.

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

The features listed in the previous chapter actually constitute Strapi's main strengths. In addition to those, the following items should also be considered:

- Since it is an open-source headless CMS, its code base is freely available for anyone to review it. The likelihood of vendor lock-in is, therefore, very low. This is an important aspect to consider. After all, open-source platforms are often associated with long-term predictability and viability for digital projects.
- The fact that Strapi is "100% JavaScript", as phrased in its homepage, may also be seen as a strength. The reason is simple: Javascript is usually the programming language that frontend developers are most familiar with. Consequently, a field which was previously dominated by backend developers can now be safely explored by frontend developers as well, or by other professionals who have limited knowledge of backend technologies. This may have been one of the main reasons behind Strapi's rapid dissemination and adoption by tech communities.
- The REST APIs created via Strapi can be easily documented with popular tools such as Swagger.

## 5. Weaknesses

Strapi has, of course, some weaknesses too. For some projects, the following topics may be a hindrance:

- Strapi's documentation is perhaps not as well updated as we would wish. An example: at the time of writing, following the official documentation is not enough to successfully install Strapi in an M1 MacBook Pro. In order to complete the installation, one needs to to rely on other forums and external tutorials that covered issues not mentioned in the official documentation.
- Strapi may not be the ideal platform for projects primarily written in Typescript. There surely are external tools and resources that allow developers to integrate Typescript in their Strapi projects. However, the fact that Typescript has not been fully incorporated into the Strapi world yet may be a relevant limitation to some developers.
- Strapi does not have a native hosting environment yet, although they have recently announced StrapiCloud, as a tool which will fill this gap in the future.
- Strapi is rapidly evolving and that means it is frequently updated. Some of these updates may be disruptive, as they implement breaking changes that may compromise some projects.

## 6. Comparison

There are at least two ways of comparing Strapi with similar products: (a) analysing how it differs from more traditional CMS platforms like Wordpress (WP), Drupal and Joomla; and (b) analysing how it differs from more modern products that perform similar roles, even though these may not be strictly equivalent in terms of functionalities.

### Strapi vs. Traditional CMS platforms

Wordpress (WP) is one of the most popular development platforms of all time. It still powers a significant share (over 40%) of the web. While WP is often used as headless CMS, offering developers the capability to create their own APIs, it is not always seen as an ideal choice. The reason is simple. When creating an API via WP, one would typically need to rely on a plethora of third-party plugins – maintained by different companies or independent developers. Such scenario can often result in issues related to maintenance, reliability and scalability.

The same is true for other contenders in the field of traditional CMSs. Drupal and Joomla are two well-known examples -- in my opinion, they both feel like legacy technologies. Joomla is arguably falling into disuse, being rarely considered a desired option for modern web development projects. Drupal, on the other hand, still plays a somewhat important role in the market, powering "at least 18% of the top 10,000 websites worldwide", according to a [BuiltWith report](https://trends.builtwith.com/shop/open-source/traffic/Top-10k).

When it comes to the creation and maintenance of APIs, the issue with these traditional platforms is that they are not focussed enough. They really are technologies from a previous era, when API-centric development was still not an option. In these platforms, creating an API might be a labour-intensive task. Also, many developers tend to frown upon PHP, which, despite being still very useful in some niches, is a language that many prefer to ignore.

### Strapi vs. Modern CMS platforms

On the other hand, in recent years we have seen the emergence of numerous other platforms which, like Strapi, allow developers to create their own APIs in a relatively easier and more reliable fashion. While not always being directly comparable, it might be useful for developers to know about their existence.

One of Strapi's closest competitors is [Contentful](https://www.contentful.com). This platform is also based on an API-first architecture. It compares to Strapi to the extent that developers can benefit from a simple installation process, a user-friendly interface and, most importantly, a focused environment whose sole purpose is to create and manage APIs. It is not open-source, however. On the other hand, unlike Strapi, it does offer integrated hosting services for its APIs. Being a product tailored to the corporate world, the high monthly costs of Contentful can be an impeding factor for many projects.

Another product that can be compared to Strapi is [Sanity](https://www.sanity.io). It is also an open-source CMS that offers powerful and very customisable functionalities. It has extra functionalities that may be appealing for professionals who may want to edit image files without leaving the platform. The API functionalities are comparable to Strapi's, although not as granular. Like Contentful, Sanity also offers integrated hosting.

On the one hand, Strapi seems to be the most flexible and most customisable of these tools, but it does require some extra work in terms of setting up external hosting and databases. On the other hand, Contentful and Sanity are a simpler tools that, despite offering hosting out of the box, have disadvantages for those wanting to create highly granular and customisable APIs. What do they have in common? All of them play well with most modern frontend frameworks, as well as with most popular static hosting services. Also, the three tools offer free tiers that are probably enough for most individual, small-scale projects.

There are of course numerous other tools that allow developers to create their own APIs (like Netlify CMS, Butter CMS, Umbraco CMS, Firebase, AppWrite, Parse, AWS Amplify and countless others). But many of these fall into the Backend as a service (BaaS) category, which means they go beyond merely CMS functionalities. For that reason, they should not be directly compared to products that primarily advertise themselves as headless CMS platforms.

## 7. Use case: creating an API

It's time to see Strapi in action. In this demonstration, a simple API designed to serve clients with academic articles will be created. Each entry will consist of fields like title, authors, publication date, body, references and so on. There are many ways of creating a Strapi API. One of them is by integrating Strapi with PostgreSQL database. First, make sure you have both NodeJS and npm installed in your development environment. Then, follow the steps:

### Installing PostgreSQL

1. Download PosgreSQL. Go to https://www.postgresql.org, and download the version that corresponds to your operating system.
2. Install PostgreSQL. An installation wizard will be prompted. Follow the steps and select the default options.
3. You will be asked to create a password and confirm it.
4. You will be asked to select a port. Chose the default value (5432).
5. The next options should also be kept in their default settings.
6. Once the installation is complete, open the application called PGAdmin. This is where you will actually create the database. You may need to enter your password again.
7. Right-click on "Databases" and click on "Create". Give it a name and save. Your database will have been created under the "Databases" folder.

### Installing Strapi

8. Now it's time to start using Strapi. Create a folder where you would like to install it.
9. In the command line, type `npx create-strapi-app project-name`. Make sure you run this command inside the folder where you wish to install it. Here you can give your project any name you like. For demonstration purposes, the project name will be `fff`. So the full command to be execute is `npx create-strapi-app fff`.
10. Now, choose "custom", since we are using a PostgreSQL database.
11. Select "Javascrip".
12. Select "PostgreSQL".
13. Now type the name of the database that you created in step 7.
14. Select the default options fot host and port (127.0.0.1 and 5432, respectively).
15. You will now insert the username. Type "postgres".
16. Now enter your the password you created for your database in step 3.
17. Select "no" for SSL connection, since we are working in our local server.
18. Hit enter and wait for the installation to be completed.
19. After a successful installation, a new folder will have been created with the project name that you chose in step 9.
20. Make sure you navigate to the newly created folder (in this case, it is called "fff-strapi-api") in the command line. Then run the command `npm run build`.
21. Finally, run the command `npm run develop`. This will launch the Strapi interface in your browser.

### Creating and managing the API

22. Enter you credentials. You are now in the Strapi dashboard, where you can finally create and manage you API.
23. Click on "Content-type builder". This is where you can create, for example, an article archetype. A content-type called "Users" is added by default, which is a useful feature for most APIs.
24. Create a new content-type called "article". This is template will be used when new articles are added to the API.
25. Now it's time to populate the newly-created "article" content-type with the fields that you want. When creating a new field, make sure to check the "advanced settings" tab. That's where you can setup a field as mandatory, as well as set up a default value and other variables. The API created in this demonstration will have the following fields:

- title
- blurb
- authors
- publicationDate
- body
- references
- mediaCover
- mediaGallery
- location
- isCoverStory
- isFeatureStory

26. Once you are finished, click on "Save" and your content-type will be created.
27. To add new content via the Strapi interface, go to "Content manager", select the desired content-type and click on "Create new entry". For example, to create your first article, fill all the necessary fields and click "Save". After the entry is save, it is necessary to "Publish" it, so it becomes available via the API. Try to add a few articles. Once they are ready, we will be able to start using the API.
28. To check whether your database has been correctly updated with the newly added information, you can go back to the PGAdmin application. Open the database, click on "Schema" and then on "Tables". A new table named "articles" will be available. Right-click that table and go to "View data" and a list of updated items will be displayed.

### Accessing the API data

29. It's time to check whether the API is already available. Go to http://localhost:1337/api/articles. Nothing is displayed yet (403 status). That's because the API has net yet been set to public. To do that, go back to Strapi's dashboard and click on "Settings".
30. Under the "Users & Permissions Plugin" area, click on "Roles". Then click on "Public".
31. Under permissions, you will be able to edit the public access to the different content-types you have created. In our case, let's click on "Articles". Tick the "find" and "findOne" boxes. Then click on save.
32. Now, if you repeat step 29 (or refresh the page), the API data will be correctly displayed. It is ready to be consumed in our local development environment.
33. The API will continue to be available for as long as the `npm run develop` command keeps running in your terminal. In order to interrupt the process, exit the process (by pressing "control C", for example). After refreshing the page, the API will no longer be available. To make it locally available again, run the command `npm run develop` one more time.

34. Accessing the data
    1.  Try going to http://localhost:1337/api/articles
    2.  It does not allow us to see the content. All endpoints are private, unless we give permission.
    3.  To get permission: settings > Roles > Public
    4.  Tick the box "find" and save. Now, we can see the data that Strapi provides us.
    5.  Find: to find all items
    6.  Findone: to be able to find one by ID, for example
    7.  Count: gives the count
    8.  Now, the data is available in JSON format ready to be used.

## Summary

This article has covered one of the many possible ways of getting started with Strapi APIs in a local development environment. A PostgreSQL database is usually a welcome addition to Strapi APIs, considering it is also a popular and open-source technology. Strapi offers, of course, many more features and functionalities that are worth exploring.

## Credits

Henri Kugler (@NehGuk)

## References
