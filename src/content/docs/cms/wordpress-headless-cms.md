---
title: WordPress as a Headless CMS 
keywords: development platforms, cms, wordpress
tags: development platforms, cms, wordpress
---

## Introduction 
WordPress is an open-source CMS (content management system) that began in 2003 as a fork of the b2/cafelog project. Built on PHP and MySQL, it has grown to power over 43% of all websites globally. While traditionally used as a platform for creating and managing content, WordPress has evolved to offer a powerful REST API, making it a viable option for headless CMS solutions.
In recent years, there has been a shift in web development towards decoupling the front end from the back end. This approach, known as Headless WordPress, leverages the flexibility of the REST API, allowing developers to use WordPress solely for content management while building custom front-end experiences. This decoupled architecture is gaining popularity for its ability to provide developers with greater creative freedom and adaptability.

## History:
WordPress was created by Matt Mullenweg and Mike Little in 2003 as a simple blogging tool, derived from b2/cafelog. Over the years, it has transformed into a versatile and powerful CMS, with features like plugins, themes, and the Gutenberg block editor, enabling extensive customization. By 2023, WordPress had become the most widely used CMS, powering over 835 million websites.
A significant milestone in WordPress’s evolution was the introduction of the REST API in 2016. This API allows developers to manage and interact with WordPress content from external applications, effectively enabling WordPress to be used as a headless CMS. By using HTTP requests (GET, POST, PUT, DELETE), developers could retrieve, create, update, and delete content, effectively transforming WordPress into a flexible back-end solution for a wide range of digital experiences.
The REST API has been instrumental in maintaining WordPress's relevance in an increasingly complex digital landscape, where the demand for headless CMS solutions is growing. As more businesses and developers seek to decouple their front-end and back-end systems, WordPress's ability to serve as a headless CMS has positioned it as a strong contender in this space, combining the power of its robust content management capabilities with the flexibility of modern front-end frameworks.

## How WordPress as an API Works:

In this demonstration, we will set up WordPress as a headless CMS to serve content via its REST API. This setup allows developers to use WordPress solely for content management while leveraging any technology or framework for the front end. The example will guide you through installing WordPress, setting up the necessary plugins, and configuring the REST API to deliver content.

### Installing WordPress

Step 1: Download WordPress
-	Go to WordPress.org and download the latest version of WordPress.

Step 2: Set Up a Local Server

-	Install a local server environment like XAMPP, MAMP, or WAMP on your machine. This will provide the necessary PHP and MySQL support.
-	Unzip the WordPress files and place them in the htdocs folder (XAMPP) or the equivalent directory for your environment.

Step 3: Create a Database
-	Open phpMyAdmin and create a new database for your WordPress installation.

Step 4: Install WordPress
-	Go to http://localhost/your-folder-name/ in your browser and follow the on-screen instructions to install WordPress.
-	Use the database details you created in the previous step.

### Setting Up Plugins for Headless WordPress

Step 5: Install Required Plugins
-	WPGraphQL (optional): If you prefer using GraphQL instead of REST API (installed by default), install the WPGraphQL plugin.
-	Advanced Custom Fields (ACF): Install and activate ACF, especially if your content model requires custom fields.
-	ACF to REST API: Install and activate this plugin to expose ACF fields via the REST API.

### Configuring WordPress as a Headless CMS

Step 6: Configure Permalinks
-	Go to Settings > Permalinks in the WordPress dashboard, and select a user-friendly permalink structure (e.g., Post name).

Step 7: Create Content Types
-	Go to Custom Fields > Add New to create custom fields that your content will use, such as title, author, publication date, etc.
-	Assign these fields to your posts, pages, or custom post types as needed.

Step 8: Expose Content via REST API
-	By default, WordPress exposes content types like posts, pages, and custom post types via the REST API. You can access these at http://localhost/your-site/wp-json/wp/v2/posts.
-	If using WPGraphQL, you can access your content via GraphQL queries at http://localhost/your-site/graphql.
 
### Creating and Managing Content

Step 9: Add Content
-	Create new posts, pages, or custom post types in the WordPress dashboard. These will automatically be exposed via the REST API.
-	Use ACF fields to structure your content, which will then be available in the API responses.

Step 10: Fetching Content
-	Use fetch, axios, or similar tools in your frontend application to retrieve content from the API endpoints.
-	Example REST API request: http://localhost/your-site/wp-json/wp/v2/posts
-	Example WPGraphQL query:

```graphql
{
  posts {
    nodes {
      title
      content
      date
    }
  }
}
```

### Deploying WordPress as a Headless CMS

Step 11: Choose a Hosting Provider
-	Deploy your WordPress installation on a hosting provider that supports PHP and MySQL, such as SiteGround, Bluehost, or a custom VPS.

Step 12: Manage API Access
-	Ensure that your API is secure, especially if deploying a public-facing API. Use plugins like JWT Authentication to secure your endpoints.

Step 13: Set Up CORS
-	Configure Cross-Origin Resource Sharing (CORS) if your frontend and backend are hosted on different domains.
-	Add the following to your .htaccess or server configuration:

```graphql
Header set Access-Control-Allow-Origin "*"
Header set Access-Control-Allow-Methods "GET, POST, OPTIONS"
Header set Access-Control-Allow-Headers "Content-Type"
```

### Accessing and Using the API

Step 14: Access the API
-	Retrieve your content through the REST API at http://your-domain.com/wp-json/wp/v2/posts or through GraphQL at http://your-domain.com/graphql.

Step 15: Frontend Integration
-	Build your frontend with any modern framework like React, Vue, or Angular. Use the API endpoints to dynamically load and display content.

Step 16: Deploying Frontend
-	Host your frontend on platforms like Netlify, Vercel, or your preferred hosting service.
