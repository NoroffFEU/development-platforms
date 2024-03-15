---
title: Strapi
keywords: development platforms, cms, strapi, postman, API
tags: development platforms, cms, strapi, postman, API
---

## Introduction

The creation and maintenance of databases or Application Programming Interfaces (APIs) are tasks typically associated with the work of a backend or fullstack developer. The work of a frontend developer, on the other hand, is typically associated with consuming that data – turning it into chunks of information that will hopefully be meaningful to the end user of a given service or product.

However, web development platforms and technologies are evolving in such a way that the distance between frontend and backend developers is getting shorter and shorter. The widespread adoption of Strapi is an example of that trend. Strapi is an open-source headless Content Management System (CMS). It is arguably the easiest way for developers to create and manage their own APIs.

This article will explain what Strapi is, why it was created and how it currently works. It will also cover some of its strengths and weaknesses. At the end, there will be a demonstration of Strapi in action – in combination with PostgreSQL – to create a simple API that serves developers with academic articles ready to be used in their frontend projects. Additionally, we'll also explore another approach: leveraging Strapi's Quickstart option to swiftly set up an API without the need for a specific database backend. This hands-on walkthrough will include testing the API endpoints in Postman.

## Brief History

Strapi was founded in 2015, in France. Soon after its first public repository was published on Github, in October that year, the company attracted the attention of developers from across the globe. Back then, developers weren't seeing a lot of innovation in the niche of Content Management Systems (CMSs). Wordpress, Drupal, Joomla and others were the main players in this field. However, most of these tools were considered either too limited or too complex. While they still allow developers to create their own APIs, they do so in ways that we can consider, perhaps, a little too old-fashioned.

The creators of Strapi took advantage of this market opportunity. A new open-source tool that allowed developers to create and manage APIs in an easy and straight-forward manner was a rather relevant innovation at the time. In 2017, Strapi was already a much talked-about product. A popular experimental version (V.3 alpha) was released. The first stable version came out in 2020, along with a new branding and an enterprise plan that consolidated the company's presence as an important player in the realm of headless CMSs. At the time of writing, Strapi's latest version is 4.3.9. It has become a ubiquitous service used by frontend, backend and fullstack developers who need to efficiently create and manage APIs.

## Features

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

## Strengths

The features listed in the previous chapter actually constitute Strapi's main strengths. In addition to those, the following items should also be considered:

- Since it is an open-source headless CMS, its code base is freely available for anyone to review it. The likelihood of vendor lock-in is, therefore, very low. This is an important aspect to consider. After all, open-source platforms are often associated with long-term predictability and viability for digital projects.
- The fact that Strapi is "100% JavaScript", as phrased in its homepage, may also be seen as a strength. The reason is simple: Javascript is usually the programming language that frontend developers are most familiar with. Consequently, a field which was previously dominated by backend developers can now be safely explored by frontend developers as well, or by other professionals who have limited knowledge of backend technologies. This may have been one of the main reasons behind Strapi's rapid dissemination and adoption by tech communities.
- The REST APIs created via Strapi can be easily documented with popular tools such as Swagger.

## Weaknesses

Strapi has, of course, some weaknesses too. For some projects, the following topics may be a hindrance:

- Strapi's documentation is perhaps not as well updated as we would wish. An example: at the time of writing, following the official documentation is not enough to successfully install Strapi in an M1 MacBook Pro. In order to complete the installation, one needs to to rely on other forums and external tutorials that covered issues not mentioned in the official documentation.
- Strapi may not be the ideal platform for projects primarily written in Typescript. There surely are external tools and resources that allow developers to integrate Typescript in their Strapi projects. However, the fact that Typescript has not been fully incorporated into the Strapi world yet may be a relevant limitation to some developers.
- Strapi does not have a native hosting environment yet, although they have recently announced StrapiCloud, as a tool which will fill this gap in the future.
- Strapi is rapidly evolving and that means it is frequently updated. Some of these updates may be disruptive, as they implement breaking changes that may compromise some projects.

## Market Comparison

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

## Use case: creating an API with Strapi

It's time to see Strapi in action. First, make sure you have both NodeJS and npm installed in your development environment. 

Let's dive into the practical side of Strapi by creating an API. There are many ways of creating a Strapi API, and one effective method involves integrating Strapi with a PostgreSQL database. Another approach is installing Strapi using the Quickstart option, which doesn't require a connection to PostgreSQL. This approach is perfect for quickly setting up an API without the need for a specific database backend.

Regardless of these two methods, each entry in the API will include essential fields such as title, authors, publication date, body, references, and more. Let's get started on building a API with Strapi! Below, we'll explore two demonstrations illustrating how to create a simple API.

### 1. Strapi with PostgreSQL

In this demonstration, we'll guide you through the process of installing Strapi alongside PostgreSQL. We'll focus on creating an API tailored to serve clients with academic articles. This tutorial will cover the installation steps and showcase the configuration needed to set up your API efficiently.

#### Installing PostgreSQL

1. Download PosgreSQL. Go to https://www.postgresql.org, and download the version that corresponds to your operating system.
2. Install PostgreSQL. An installation wizard will be prompted. Follow the steps and select the default options.
3. You will be asked to create a password and confirm it.
4. You will be asked to select a port. Chose the default value (5432).
5. The next options should also be kept in their default settings.
6. Once the installation is complete, open the application called PGAdmin. This is where you will actually create the database. You may need to enter your password again.
7. Right-click on "Databases" and click on "Create". Give it a name and save. Your database will have been created under the "Databases" folder.

#### Installing Strapi with PostgreSQL

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

#### Accessing the API data

29. It's time to check whether the API is already available. Go to http://localhost:1337/api/articles. Nothing is displayed yet (403 status). That's because the API has net yet been set to public. To do that, go back to Strapi's dashboard and click on "Settings".
30. Under the "Users & Permissions Plugin" area, click on "Roles". Then click on "Public".
31. Under permissions, you will be able to edit the public access to the different content-types you have created. In our case, let's click on "Articles". Tick the "find" and "findOne" boxes. Then click on save. This enable the API users to access individual endpoints for each article.
32. Now, if you repeat step 29 (or refresh the page), the API data will be correctly displayed. It is ready to be consumed in our local development environment.
33. The API will continue to be available for as long as the `npm run develop` command keeps running in your terminal. In order to interrupt the process, exit the process (by pressing "control C", for example). After refreshing the page, the API will no longer be available. To make it locally available again, run the command `npm run develop` one more time.

### 2. Strapi using the Quickstart option

In this tutorial, we'll explore the practical steps of setting up and utilizing Strapi to construct API endpoints. Our focus will be on creating a backend for an fictive online shoe store named "ShoeDays.", created only for this demos purpose. Through Strapi's Quickstart option, we'll swiftly install Strapi and proceed to define dedicated endpoints for each product in the ShoeDays inventory. This walkthrough provides a hands-on experience in Strapi's efficiency for API development.

#### Installing Strapi with the terminal 
1. Begin by opening your terminal and navigating to the directory where you intend to install your project.

2. Once in the desired directory, create a new folder for your project using the 'mkdir' command followed by the desired name.

3. Enter the newly created folder by using the 'cd' command. Within this folder, create a subdirectory named "backend" to house your Strapi project.

4. Initiate the creation of a Strapi project by executing the command 'npx create-strapi-app' and specifying the project name as 'backend'.

    ![img of terminal](/src/assets/cms/strapi/image.png)

5. Upon completion, Strapi will automatically launch a local development server. Access the Strapi welcome page via your web browser and proceed to authenticate as an admin user. 
![img of strapi welcome page](/src/assets/cms/strapi/image-1.png)

8. Once authenticated, return to your terminal and terminate the local server by pressing 'ctrl + C'. Then, navigate into the 'backend' folder and open it in VS Code using the command 'code .'.
![img of terminal creating a folder](/src/assets/cms/strapi/image-2.png)	

9. To restart the server and regain access to the Strapi admin panel, open a new terminal window in VSCode and execute the command 'npm run develop'.
![img of terminal accessing the server](/src/assets/cms/strapi/image-3.png)

#### Adding content in Strapi to fetch API endpoints
1. Within the Strapi admin panel, navigate to 'Plugins' > 'Content-Types Builder'.
Content-Type-Builder: is a blueprint for the content describing the contents fields and datatypes.

2. Click on 'Create new Collection type' to initiate the creation of a new content type.
![img of strapi create new collection type](/src/assets/cms/strapi/image-4.png)

3. Next, select "Add another field to this collection type" to begin defining the fields for your collection.
![img of adding another filed to collection type](/src/assets/cms/strapi/image-5.png)

4.Begin by adding fields that capture relevant information about each shoe product, such as Name ('Text' field), Description ('Text' field), Price ('Number' field), Gender ('Enumeration' field), and Image ('Media' field).
![img of adding fields to each product](/src/assets/cms/strapi/image-6.png)

5. Add the 'Name' field with the type 'Short text'.
![img of setting values to each product](/src/assets/cms/strapi/image-7.png)

6. Configure the advanced settings by setting a default value, marking it as a required field, and making it unique.
![img of setting required and unique field to product](/src/assets/cms/strapi/image-8.png)

7. Proceed to add the 'Description' field with the type 'Long text'.
![img of adding description to product](/src/assets/cms/strapi/image-9.png)

8. 	Add an 'Enumeration field' named 'Gender' and define its values.
![img of adding enumeration field to product](/src/assets/cms/strapi/image-10.png)

9. Configure the advanced settings for the 'Gender' field by setting a default value, such as 'Unisex'.
![img of adding default value to product](/src/assets/cms/strapi/image-11.png)

10. Include a 'Media' field named 'Image' with the type 'Multiple media'.
![img of adding media field to product ](/src/assets/cms/strapi/image-12.png)

11. Specify the allowed types of media in the 'Advanced settings' for the 'Image' field.
![img of selecting allowed media type to product](/src/assets/cms/strapi/image-13.png)

12. Add a 'Number' field named 'Price' with the number format set to 'Decimal'.
![img of adding number field and price format to product](/src/assets/cms/strapi/image-14.png)

13.	Once all fields are configured, save the collection type. Strapi will automatically save and refresh the server.
![img of saving collection type](/src/assets/cms/strapi/image-15.png)

14. To access the newly created collection type, navigate to 'Content Manager' > 'Collection Types' > 'product' on the Strapi Dashboard.

#### Creating products with Custom Fields
1. Now, let's proceed to create products using our custom set fields.
Create a new entry by selecting 'Create new entry'.

2. Fill in the required fields such as name(*), description, gender, price, and image. Don't forget to add Alternative text for the image.
![Alt text](/src/assets/cms/strapi/image-16.png)

3. 	Once all product details are entered, proceed to save the entry.
![Alt text](/src/assets/cms/strapi/image-17.png)

3. Upon creating a new 'Content-type' for our products, Strapi automatically generates corresponding endpoints in our backend project. These endpoints are located within the 'product' folder inside the 'api' directory. Additionally, you can find the configuration file for these routes in the 'config' folder.

### Testing the endpoints in Postman
Postman is a versatile tool used for testing RESTful API endpoints. In this section, we will utilize Postman as our frontend to interact with the API endpoints generated by our backend in Strapi. We'll create an authenticated user role in Strapi and use token-based access generated in Postman to perform CRUD operations. This will allow us to test the functionality of our endpoints effectively.

Download Postman app: https://www.postman.com/ 

1. 	Begin by creating a new collection in Postman. For this example, let's name the collection 'ShoeDays' and create a New HTTP request.
![img of creating a new collection in Postman](/src/assets/cms/strapi/image-18.png)

2. 	Send a GET request to http://localhost:1337/product. You may receive a 403 error initially because Strapi automatically protects content-types from public access.
![img of receiving a 403 error after sending a GET request](/src/assets/cms/strapi/image-19.png)

3. 	Save the request as 'all products' within a collection folder named 'Strapi'.
![img of saving the GET request in a strapi folder](/src/assets/cms/strapi/image-20.png)

4. 	To gain access to the product endpoints, navigate back to the Strapi dashboard and go to General > Settings > Users & Permissions Plugin > Roles.
![img of setting roles in Strapi](/src/assets/cms/strapi/image-21.png)

5. Under 'Permissions', ensure that 'find' and 'findOne' are checked to grant unauthorized/unauthenticated users access to fetch data. 
![img of checking the boxes find and findOne](/src/assets/cms/strapi/image-22.png)

6. 	Return to Postman and resend the request. You should now receive a JSON response containing all products.
![img of returning json response in Postman](/src/assets/cms/strapi/image-23.png)

7. 	To get the single product, we need to get it by its :id
create a new HTTP GET request to http://localhost:1337/api/products/1 
Save the request in the 'Strapi' collection as 'single product'.

![img of sending GET request by id](/src/assets/cms/strapi/image-24.png)

#### 	Using Postman as frontend to test authenticated requests

By default, Strapi restricts unauthorized users from performing CREATE, PUT, and DELETE requests. Let's set up authentication in Strapi and test authenticated requests using Postman. As this project is focused on showcasing the functionality of a authenticated role within the system, we will not create additional roles, such as typical buyer roles, since the scope of this project is limited.

	
  1. In Strapi, navigate to Settings > Users & Permissions Plugin > Roles > Authenticated > Permissions > Product. Select all options to grant permissions.
![img of selecting all options for Roles permissions in Strapi](/src/assets/cms/strapi/image-25.png)

2. 	Create a new role by clicking on '+ Add new role' in the Roles section.
![img of setting new role in Strapi](/src/assets/cms/strapi/image-26.png)

3. 	Create a role named 'auth' for authenticated users, allowing them to CRUD and publish content.
![img of creating a auth role in Strapi](/src/assets/cms/strapi/image-27.png)

4. Create a new user in Strapi under Content-manager > Collection types > User. Ensure to set the role as 'Authenticated' and confirm the user. 
![img of creating a new entry in Strapi](/src/assets/cms/strapi/image-28.png)

5. 	Save the request in the 'Strapi' collection folder.
![img of setting default values to role in Strapi](/src/assets/cms/strapi/image-29.png)

6. Log in to Postman as the admin user by sending a request to the authenticated endpoint (ex, http://localhost:1337/api/auth/local) with the username and password included in the request body.
![img of setting id and password in raw JSON in Postman](/src/assets/cms/strapi/image-30.png)

7. 	Save the request in the 'Strapi' collection folder.
![img of saving the request as admin in Postman](/src/assets/cms/strapi/image-31.png)

8. 	Upon sending the request, you will receive a JWT token in the response, allowing you to authenticate as the admin user for CRUD operations.
![img of receiving the jwt as response in Postman](/src/assets/cms/strapi/image-32.png)

9. Test authentication by creating a new HTTP DELETE request to a single product by it's id > http://localhost:1337/api/products/1. Set the authentication type to 'Bearer Token' and paste the JWT token in the Token field.
![img of inserting token and receiving data](/src/assets/cms/strapi/image-33.png)

10. You can now access and manage products through authenticated requests using Postman.



### Deploying the API

The Strapi API which has been created by following the steps above will only be available in your local environment. Deploying the API to make it publicly available requires another sequence of procedures –- like integrating your newly-created API with a remote server and a remote database. There are many ways of doing that. While deployment strategies are not the main intent of this article, a sample API has been deployed, for demonstration purposes, by using the following method:

a) Creating a Strapi project, similarly to what has been done in the previous chapters;
b) Installing the Cloudinary Strapi plugin;
c) Using Render.com to host a PostgreSQL database;
d) Connecting Render.com to a Github repository containing the Strapi project.

A detailed guide on how to implement these steps can be found on this [online tutorial](https://www.youtube.com/watch?v=akvItcWW81g)). The result has been a functional live API deployed at:

`https://fff-api.onrender.com/api/articles`

The admin panel for managing the API can be accessed at:

`https://fff-api.onrender.com/api/articles/admin`

A few notes on how to use this API:

- The endpoint `https://fff-api.onrender.com/api/articles` will show a list of all articles.
- The endpoint `https://fff-api.onrender.com/api/articles/2` will show an individual article based on its ID number.
- By default, Strapi hides media fields. For that reason, if we need to fetch specific media elements, we must explicitly add the following URL query parameter: `https://fff-api.onrender.com/api/articles/populate=coverImage`. More than one parameter can be added simultaneously. For example: `https://fff-api.onrender.com/api/articles?populate=coverImage,imageGallery`.
- Another useful way of manipulating Strapi API calls is by using the `fields` URL parameter. The URL `https://fff-api.onrender.com/api/articles?fields=title` will only fetch the titles of the respective items included in the articles array.
- Filtering is also a useful technique. For example, by using the URL `https://fff-api.onrender.com/api/articles?fields=publishedAt` the user will be fetching only the `publishedAt` parameters. We can further filter that API call by adding the following: `https://fff-api.onrender.com/api/articles?fields=publishedAt&sort=publishedAt:desc`. This will sort the articles based on their publication date. Both `asc` and `desc` can be used, meaning "ascendant" and "descendant" order.
- Making use of the concepts above descried, we can, for example, create the following endpoint: `https://fff-api.onrender.com/api/articles?fields=title,author,publishedAt&sort=publishedAt:desc`. This will serve us with a filtered list containing only the properties "title", "author" and "publishedAt". in this case, the latest article will appear as the first item of the array.
- As well as "content-type" categories, Strapi also offers the possibility of creating "single-type" categories. A practical application of that is to have several items under "content-type", while having just one item under the "single-type". To demonstrate this concept, the following endpoint has been created: `https://fff-api.onrender.com/api/about`.
- The API's repository on Github can be accessed via the following link: `https://github.com/NehGuk/fff-api`.

## Summary

This article has covered one of the many possible ways of getting started with Strapi APIs. This service is one of the most popular choices among developers who wish to create and maintain their APIs without necessarily resorting to in-depth knowledge on backend technologies. Ease of use has made Strapi a sensible alternative for developers who wish to work with headless CMS projects -- without having to rely on legacy platforms like Wordpress. 

This article has also provided a simple walkthrough of one of many potential pathways for getting started with Strapi. Throughout the walkthroughs, readers were guided through the process of setting up Strapi, creating custom content types, and testing endpoints using Postman. Strapi's user-friendly interface and flexibility make it an attractive option for developers seeking to create and maintain APIs without extensive backend knowledge, particularly for headless CMS projects. 

This article has only served as an introduction to the topic, however. There is, of course, a lot more to explore and discover. It is very likely that, sooner or later, you will encounter Strapi APIs in your future projects.

## Credits

Henri Kugler ([@NehGuk](https://github.com/NehGuk))

Karen Jo Fiksdahl ([@KarenJoo](https://github.com/KarenJoo))

## References

- [Strapi's official documentation](https://docs.strapi.io/developer-docs/latest/getting-started/quick-start.html#_1-install-strapi-and-create-a-new-project)
- [PostgreSQL official documentation](https://www.postgresql.org)
- [BuiltWith: Open Source Usage Distribution in the Top 10k Sites](https://trends.builtwith.com/shop/open-source/traffic/Top-10k)
- [Contentful](https://www.contentful.com)
- [Sanity.io](https://www.sanity.io)
- [Getting started with Strapi Headless CMS on mac with PostgreSQL](https://www.youtube.com/watch?v=FeZyCxwb1aQ)
- [Laith Academy: Strap1 v4 Crash Course](https://www.youtube.com/watch?v=vcopLqUq594)
- [Strapi v4 Deploy with PostgreSQL Database and Cloudinary Free](https://www.youtube.com/watch?v=akvItcWW81g)
- [Cloudinary's Official website](https://strapi.io/blog/add-cloudinary-support-to-your-strapi-application)
- [Render's official website](https://render.com)
- [Farming for the future](https://map.farmingforthefuture.site)
