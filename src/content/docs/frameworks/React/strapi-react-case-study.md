---
title: Strapi RESTful API Integration with React
author: Karen Jo Fiksdahl <KarenJoo> (https://github.com/KarenJoo)
tags: react, strapi, frameworks, case study, app, CMS
---

![image of react frontend and strapi backend logo](/src/assets/frameworks/strapi-react/strapi-react.png)

## Introduction
In this tutorial, we'll cover the creation of a RESTful API with Strapi and its integration with a React frontend.

Strapi simplifies the setup of RESTful APIs, facilitating seamless communication between backend and frontend. By following this guide, you'll learn to efficiently fetch backend data, leverage Strapi's RESTful endpoints, and display content on a React frontend.

We'll begin by creating RESTful API endpoints using Strapi. It's important to note that the first part of the walkthrough is nearly identical to the one provided in the Strapi case study, authored by the same individual responsible for this case study. Additionally, the author of this case study has developed a basic demo app called 'Shoedays' only for this purpose.This app's straightforward design serves as a demonstration for this case study, focusing on two key phases: backend integration and frontend.

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
Through Strapi's Quickstart option, we'll swiftly install Strapi and proceed to define dedicated endpoints for each product in the ShoeDays inventory. This walkthrough provides a hands-on experience in Strapi's efficiency for API development.

### Installing Strapi with the terminal
1. Begin by opening your terminal and navigating to the directory where you intend to install your project.

2. Once in the desired directory, create a new folder for your project using the 'mkdir' command followed by the desired name. In this demo we will call the project folder 'strapi-react-app'. 

3. Create a strapi project by typing 'npx create-strapi-app' and name the project 'backend'.

![img of terminal](/src/assets/frameworks/strapi-react/strapi-img/image.png)


4. Initiate the creation of a Strapi project by executing the command 'npx create-strapi-app' and specifying the project name as 'backend'.

![img of terminal](/src/assets/frameworks/strapi-react/strapi-img/image-0.png)

5. Upon completion, Strapi will automatically launch a local development server. Access the Strapi welcome page via your web browser and proceed to authenticate as an admin user. 

![alt text](/src/assets/frameworks/strapi-react/strapi-img/image-4.png)

6. Once authenticated, return to your terminal and terminate the local server by pressing 'ctrl + C'. Then, navigate into the 'backend' folder and open it in VS Code using the command 'code .'.

![alt text](/src/assets/frameworks/strapi-react/strapi-img/image-5.png)

7. To restart the server and regain access to the Strapi admin panel, open a new terminal window in VSCode and execute the command 'npm run develop'.

![alt text](/src/assets/frameworks/strapi-react/strapi-img/image-6.png)

### Adding content in Strapi to fetch API endpoints
1. Within the Strapi admin panel, navigate to 'Plugins' > 'Content-Types Builder'.
Content-Type-Builder: is a blueprint for the content describing the contents fields and datatypes.

2. Click on 'Create new Collection type' to initiate the creation of a new content type.

![alt text](/src/assets/frameworks/strapi-react/strapi-img/image-7.png)

3. Next, select "Add another field to this collection type" to begin defining the fields for your collection.

![alt text](/src/assets/frameworks/strapi-react/strapi-img/image-8.png)

4. Begin by adding fields that capture relevant information about each shoe product, such as Name ('Text' field), Description ('Text' field), Price ('Number' field), Gender ('Enumeration' field), and Image ('Media' field).

![alt text](/src/assets/frameworks/strapi-react/strapi-img/image-9.png)

5. Add the 'Name' field with the type 'Short text'.

![alt text](/src/assets/frameworks/strapi-react/strapi-img/image-10.png)

6. Configure the advanced settings by setting a default value, marking it as a required field, and making it unique.

![alt text](/src/assets/frameworks/strapi-react/strapi-img/image-11.png)

7. Proceed to add the 'Description' field with the type 'Long text'.

![alt text](/src/assets/frameworks/strapi-react/strapi-img/image-12.png)

8. 	Add an 'Enumeration field' named 'Gender' and define its values.

![alt text](/src/assets/frameworks/strapi-react/strapi-img/image-13.png)

9. Configure the advanced settings for the 'Gender' field by setting a default value, such as 'Unisex'.

![alt text](/src/assets/frameworks/strapi-react/strapi-img/image-14.png)

10. Include a 'Media' field named 'Image' with the type 'Multiple media'.

![alt text](/src/assets/frameworks/strapi-react/strapi-img/image-15.png)

11. Specify the allowed types of media in the 'Advanced settings' for the 'Image' field.

![alt text](/src/assets/frameworks/strapi-react/strapi-img/image-16.png)

12. Add a 'Number' field named 'Price' with the number format set to 'Decimal'.

![alt text](/src/assets/frameworks/strapi-react/strapi-img/image-17.png)

13. Once all fields are configured, save the collection type. Strapi will automatically save and refresh the server. To access the newly created collection type, navigate to 'Content Manager' > 'Collection Types' > 'product' on the Strapi Dashboard.

### Creating products with Custom Fields

1. Now, let's proceed to create products using our custom set fields.

![alt text](/src/assets/frameworks/strapi-react/strapi-img/image-18.png)

2. Fill in the required fields such as name(*), description, gender, price, and image. Don't forget to add Alternative text for the image.

![alt text](/src/assets/frameworks/strapi-react/strapi-img/image-19.png)

3. 	Once all product details are entered, proceed to save the entry.

![alt text](/src/assets/frameworks/strapi-react/strapi-img/image-20.png)

Now that we've set up our products with attributes such as ID, name, description, gender, price, and image, they are prepared to be fetched, rendered, and displayed on the frontend using React.

When we established a new 'Content-type' for our products, Strapi automatically generated an endpoint to access our backend project and created the 'product' folder within the API directory. Inside this folder, we can locate the API controllers and routes in the src/api directory.

![alt text](/src/assets/frameworks/strapi-react/strapi-img/image-21.png)




With our backend up and running, we can fetch data via Strapi's REST API endpoints and test them using Postman. Now, we'll pivot to building the frontend of our fictitious e-commerce app.

Here's a quick rundown of our next steps:

    Create a Repository on GitHub: We'll start by setting up a GitHub repository for our project.

    Set Up Development Servers: We'll use react-scripts start for our frontend and a separate server for our Strapi backend. This setup facilitates hot reloading and streamlines frontend development.

    Configure Proxying or CORS Settings: To enable seamless communication between the frontend and backend during development, we'll configure proxying or CORS settings.

