---
title: Strapi RESTful API Integration with React
author: Karen Jo Fiksdahl <KarenJoo> (https://github.com/KarenJoo)
tags: react, strapi, frameworks, case study, app, CMS
---

![image of react frontend and strapi backend logo](/src/assets/frameworks/strapi-react/image.png)

## Introduction
In this tutorial, we'll cover the creation of a RESTful API with Strapi and its integration with a React frontend.

Strapi simplifies the setup of RESTful APIs, facilitating seamless communication between backend and frontend. By following this guide, you'll learn to efficiently fetch backend data, leverage Strapi's RESTful endpoints, and display content on a React frontend.

We'll begin by creating RESTful API endpoints using Strapi. It's important to note that the first part of the walkthrough is identical to the one provided in the Strapi case study, authored by the same individual responsible for this case study. Additionally, the author of this case study has developed a basic demo app called 'Shoedays' only for this purpose.This app's straightforward design serves as a demonstration for this case study, focusing on two key phases: backend integration and frontend.

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

## Strapi set up using the Quickstart option







With our backend up and running, we can fetch data via Strapi's REST API endpoints and test them using Postman. Now, we'll pivot to building the frontend of our fictitious e-commerce app.

Here's a quick rundown of our next steps:

    Create a Repository on GitHub: We'll start by setting up a GitHub repository for our project.
    Set Up Development Servers: We'll use react-scripts start for our frontend and a separate server for our Strapi backend. This setup facilitates hot reloading and streamlines frontend development.
    Configure Proxying or CORS Settings: To enable seamless communication between the frontend and backend during development, we'll configure proxying or CORS settings.

