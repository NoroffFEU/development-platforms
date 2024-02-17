---
title: Strapi RESTful API Integration with React
author: Karen Jo Fiksdahl <KarenJoo> (https://github.com/KarenJoo)
tags: react, strapi, frameworks, case study, app, CMS
---

![image of react frontend and strapi backend logo](/src/assets/frameworks/strapi-react/image.png)

### Introduction
In this tutorial, we will explore the process of creating a RESTful API using Strapi and integrating it with a React frontend. Strapi offers a powerful platform for quickly setting up APIs with RESTful endpoints, enabling seamless communication between the backend and frontend of web applications. By following this walkthrough, you will learn how to efficiently fetch data from the backend, utilize Strapi's RESTful endpoints, and render the content on a React frontend.

In this case study, the author has developed a straightforward demo app named 'Shoedays,' designed to highlight upcoming men's and women's footwear. As this app serves solely as a demonstration for this case study, its design remains simple. Our project consists of two primary phases: backend integration and frontend integration.

    Backend Integration: We'll leverage Strapi to establish RESTful API endpoints for each product. This entails configuring Strapi to manage our data and expose APIs for interaction.

    Frontend Integration: Utilizing React as our frontend framework, we'll fetch, render, and display products from the API endpoints.

Throughout this tutorial, we'll work with various tools and programs:

    Terminal: We'll install and configure Strapi and React.

    VSCode: We'll use this to create separate backend and frontend projects.

    Strapi Admin Panel: This interface will assist us in creating endpoints with a RESTful API.

    Postman: We'll employ Postman to test our API endpoints.

    React: Our frontend framework.


This case study is not delving too deeply into Strapi or React concepts, as you can refer to the respective case studies for more in-depth knowledge. 

### Goal of this tutorial
The goal of this case study is to guide you through the integration of Strapi with React. Please note that while this tutorial covers the setup of the 'Shoedays' demo app, the focus is not on the responsiveness or styling of the app itself, but rather on creating endpoints for our products and fetching them in our demo application. 







With our backend up and running, we can fetch data via Strapi's REST API endpoints and test them using Postman. Now, we'll pivot to building the frontend of our fictitious e-commerce app.

Here's a quick rundown of our next steps:

    Create a Repository on GitHub: We'll start by setting up a GitHub repository for our project.
    Set Up Development Servers: We'll use react-scripts start for our frontend and a separate server for our Strapi backend. This setup facilitates hot reloading and streamlines frontend development.
    Configure Proxying or CORS Settings: To enable seamless communication between the frontend and backend during development, we'll configure proxying or CORS settings.

