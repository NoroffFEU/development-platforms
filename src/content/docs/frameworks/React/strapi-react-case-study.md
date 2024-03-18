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

## Backend set up with Strapi

### Strapi set up using the Quickstart option
Through Strapi's Quickstart option, we'll swiftly install Strapi and proceed to define dedicated endpoints for each product in the ShoeDays inventory. This walkthrough provides a hands-on experience in Strapi's efficiency for API development.

### Installing Strapi with the terminal
1. Begin by opening your terminal and navigating to the directory where you intend to install your project.

2. Once in the desired directory, create a new folder for your project using the 'mkdir' command followed by the desired name. In this demo we will call the project folder 'strapi-react-app'. 

3. Create a strapi project by typing 'npx create-strapi-app' and name the project 'backend'.

![img of walkthrough strapi](/src/assets/frameworks/strapi-react/strapi-img/image.png)


4. Initiate the creation of a Strapi project by executing the command 'npx create-strapi-app' and specifying the project name as 'backend'.

![img of walkthrough strapi](/src/assets/frameworks/strapi-react/strapi-img/image-0.png)

5. Upon completion, Strapi will automatically launch a local development server. Access the Strapi welcome page via your web browser and proceed to authenticate as an admin user. 

![img of walkthrough strapi](/src/assets/frameworks/strapi-react/strapi-img/image-4.png)

6. Once authenticated, return to your terminal and terminate the local server by pressing 'ctrl + C'. Then, navigate into the 'backend' folder and open it in VS Code using the command 'code .'.

![img of walkthrough strapi](/src/assets/frameworks/strapi-react/strapi-img/image-5.png)

7. To restart the server and regain access to the Strapi admin panel, open a new terminal window in VSCode and execute the command 'npm run develop'.

![img of walkthrough strapi](/src/assets/frameworks/strapi-react/strapi-img/image-6.png)

### Adding content in Strapi to fetch API endpoints
1. Within the Strapi admin panel, navigate to 'Plugins' > 'Content-Types Builder'.
Content-Type-Builder: is a blueprint for the content describing the contents fields and datatypes.

2. Click on 'Create new Collection type' to initiate the creation of a new content type.

![img of walkthrough strapi](/src/assets/frameworks/strapi-react/strapi-img/image-7.png)

3. Next, select "Add another field to this collection type" to begin defining the fields for your collection.

![img of walkthrough strapi](/src/assets/frameworks/strapi-react/strapi-img/image-8.png)

4. Begin by adding fields that capture relevant information about each shoe product, such as Name ('Text' field), Description ('Text' field), Price ('Number' field), Gender ('Enumeration' field), and Image ('Media' field).

![img of walkthrough strapi](/src/assets/frameworks/strapi-react/strapi-img/image-9.png)

5. Add the 'Name' field with the type 'Short text'.

![img of walkthrough strapi](/src/assets/frameworks/strapi-react/strapi-img/image-10.png)

6. Configure the advanced settings by setting a default value, marking it as a required field, and making it unique.

![img of walkthrough strapi](/src/assets/frameworks/strapi-react/strapi-img/image-11.png)

7. Proceed to add the 'Description' field with the type 'Long text'.

![img of walkthrough strapi](/src/assets/frameworks/strapi-react/strapi-img/image-12.png)

8. 	Add an 'Enumeration field' named 'Gender' and define its values.

![img of walkthrough strapi](/src/assets/frameworks/strapi-react/strapi-img/image-13.png)

9. Configure the advanced settings for the 'Gender' field by setting a default value, such as 'Unisex'.

![img of walkthrough strapi](/src/assets/frameworks/strapi-react/strapi-img/image-14.png)

10. Include a 'Media' field named 'Image' with the type 'Multiple media'.

![img of walkthrough strapi](/src/assets/frameworks/strapi-react/strapi-img/image-15.png)

11. Specify the allowed types of media in the 'Advanced settings' for the 'Image' field.

![img of walkthrough strapi](/src/assets/frameworks/strapi-react/strapi-img/image-16.png)

12. Add a 'Number' field named 'Price' with the number format set to 'Decimal'.

![img of walkthrough strapi](/src/assets/frameworks/strapi-react/strapi-img/image-17.png)

13. Once all fields are configured, save the collection type. Strapi will automatically save and refresh the server. To access the newly created collection type, navigate to 'Content Manager' > 'Collection Types' > 'product' on the Strapi Dashboard.

### Creating products with Custom Fields

1. Now, let's proceed to create products using our custom set fields.

![img of walkthrough strapi](/src/assets/frameworks/strapi-react/strapi-img/image-18.png)

2. Fill in the required fields such as name(*), description, gender, price, and image. Don't forget to add Alternative text for the image.

![img of walkthrough strapi](/src/assets/frameworks/strapi-react/strapi-img/image-19.png)

3. 	Once all product details are entered, proceed to save the entry.

![img of walkthrough strapi](/src/assets/frameworks/strapi-react/strapi-img/image-20.png)

Now that we've set up our products with attributes such as ID, name, description, gender, price, and image, they are prepared to be fetched, rendered, and displayed on the frontend using React.

When we established a new 'Content-type' for our products, Strapi automatically generated an endpoint to access our backend project and created the 'product' folder within the API directory. Inside this folder, we can locate the API controllers and routes in the src/api directory.

![img of walkthrough strapi](/src/assets/frameworks/strapi-react/strapi-img/image-21.png)

## Summary and Next steps
With our backend up and running, we can fetch data via Strapi's REST API endpoints and test them using Postman. Now, we'll pivot to building the frontend of our fictitious e-commerce app.

Here's a quick rundown of our next steps:

    Create a Repository on GitHub: We'll start by setting up a GitHub repository for our project.

    Set Up Development Servers: We'll use react-scripts start for our frontend and a separate server for our Strapi backend. 

## Frontend integration with React
In this part of the case study, we'll cover how to fetch the product endpoints we created in Strapi using React and display them on the demo app 'Shoedays.' This section won't delve into the basics of React, as those are covered in the existing React case study. Due to the length constraints of the case study, we'll focus solely on a walkthrough of fetching all the products from Strapi, excluding relational data. For this part, we'll utilize tools such as the terminal for creating a project directory for the frontend, VSCode, Strapi and Postman for testing purposes.

### Setting Up the Frontend Environment: Initial Steps
1. Navigate to the project directory named 'strapi-react-app' in your terminal, where the 'backend' folder is installed.

![img of walkthrough react](/src/assets/frameworks/strapi-react/react-img/image.png)

2. Change directory into the 'frontend' folder and open it in VSCode using the command 'code .'

![img of walkthrough react](/src/assets/frameworks/strapi-react/react-img/image-1.png)

3. Create a new branch from the 'main' branch as the working branch. For example, name it 'dev' for the development branch.

![img of walkthrough react](/src/assets/frameworks/strapi-react/react-img/image-2.png)

4. Install React Scripts by running the command npm install react-scripts in the Git CLI. This installs the necessary scripts and configurations for developing and building React applications.

![img of walkthrough react](/src/assets/frameworks/strapi-react/react-img/image-3.png)

5. Check the available scripts commands in your package.json file. During development, you'll often want to preview the web application in a browser.

    To start the local development server, run: npm run start

![img of walkthrough react](/src/assets/frameworks/strapi-react/react-img/image-4.png)

6. Clean Up the Project Setup and delete the following files:
            
- src/App.css: As all CSS will be stored in the index.css folder.
- src/App.test.js: Testing will not be covered in this demonstration.
- src/logo.svg: The React logo is unnecessary.
- reportWebVitals.js: Web vitals reporting will not be covered in this demo.
- setupTest.js: Jest environment testing will not be covered in this demo.

![img of walkthrough react](/src/assets/frameworks/strapi-react/react-img/image-5.png)

7. Remove all imports inside App.js as we deleted these files, and remove the content within the "header" tag.

![img of walkthrough react](/src/assets/frameworks/strapi-react/react-img/image-6.png)

8. Install the extension: ES/React/Redux/GraphQL/React-Native snippets to access React.js snippets.

![img of walkthrough react](/src/assets/frameworks/strapi-react/react-img/image-7.png)

9. Create two new folders in the src folder:

- Components: For Navbar.js.

- Pages: For Category.js, Homepage.js, and ProductDetails.js. Only Homepage and ProductDetails will be covered; Category is for relational data and will not be addressed.

![img of walkthrough react](/src/assets/frameworks/strapi-react/react-img/image-8.png)

10. After installing the ES7 React extension, utilize React snippets for each page. To begin, type 'rfc' (short for React functional component) at the top of the page and press enter. This will create a React Functional Component and automatically import React from 'react'.

![img of walkthrough react](/src/assets/frameworks/strapi-react/react-img/image-9.png)

### Creating the Navbar
For the components, we'll begin by creating the navbar, which will be displayed at the top of every page. Please note that this walkthrough will not include specific styling, as the demo app does not focus on design or UX.

1. To enable the use of URL link tags in React, we need to install React Router DOM, which also allows us to set up routes inside the root.

![img of walkthrough react](/src/assets/frameworks/strapi-react/react-img/image-10.png)

2. Create a new file named Navbar.js in the components folder and type 'rfc' followed by Enter.

- Insert the className 'navbar'.
- Set up a link to the homepage to establish the link until we set up the router.

![img of walkthrough react](/src/assets/frameworks/strapi-react/react-img/image-11.png)

###  Setting up the Routes
Now that React Router DOM is installed, we can proceed to set up the routes for the pages inside the App.js file.

1. Import these files into App.js:
- BrowserRouter from react-router-dom.
- All our created .js pages, including the Navbar, from the components folder.
- Configure the router accordingly.

![img of walkthrough react](/src/assets/frameworks/strapi-react/react-img/image-12.png)

### Working Simultaneously with Frontend and Backend
To streamline development, we will divide the terminal into three sections:

- node Backend: Running Strapi on a separate port.
- node Frontend: Running the React framework on a separate port.
- Zsh Backend: This terminal is dedicated to backend operations, where we will continuously save commits.

![img of walkthrough react](/src/assets/frameworks/strapi-react/react-img/image-13.png)

To navigate between the frontend and backend directories in the terminal, use 'cd ..' to return to the root of the strapi-react-app project, then use 'cd' followed by the folder name to enter either the frontend or backend folder.

![img of walkthrough react](/src/assets/frameworks/strapi-react/react-img/image-14.png)

The structure of the strapi-react-app project includes a backend folder connected to Strapi, where the Collection type Product we recently created is stored inside the src/api folder and managed by Strapi. Additionally, there's a frontend folder connected to React.

![img of walkthrough react](/src/assets/frameworks/strapi-react/react-img/image-15.png)

### Fetching Data from Backend Endpoints

1. To retrieve product data from the Strapi REST API, we'll utilize a custom hook for improved reusability. The useFetch hook simplifies data fetching, while managing loading and error states.

- Create a New Hooks Folder:
        Within the frontend project's src folder, create a new directory named 'hooks'.
- Importing React Hooks:
        Import the useEffect and useState hooks from the React library.

- Defining the useFetch Hook:
        Develop a custom useFetch hook that accepts a URL parameter.

- Setting State Variables:
        Initialize state variables data, error, and loading using the useState hook.

- Fetching Data with useEffect:
        Employ the useEffect hook to fetch data upon component mounting or when the URL changes.

![img of walkthrough react](/src/assets/frameworks/strapi-react/react-img/image-16.png)

2. Inside the useEffect:
Define an asynchronous function fetchData to fetch data from the specified URL.
- Setting Loading State: Set the loading state to true before starting the data fetch operation.
- Fetching Data from API:Utilize the fetch API to make a GET request to the specified URL and parse the JSON response.
- Setting Data State: Upon successful fetch, update the data state with the fetched data extracted from the response.
- Setting Error State: If an error occurs during fetch, update the error state with the error object.
- Setting Loading State: Set the loading state to false after fetching or encountering an error.
- Returning State Variables: Return an object containing loading, error, and data state variables from the hook.
- Exporting the Hook: Export the useFetch hook to make it available for use in other components.

![img of walkthrough react](/src/assets/frameworks/strapi-react/react-img/image-17.png)

## Populating Media Fields in Strapi
When utilizing Strapi as our content management system to store product information, we rely on the populate parameter in our API requests. This parameter enables us to explicitly specify the fields we wish to populate in our query response. 

Strapi's documentation provides guidance on retrieving media fields associated with our products by incorporating "?populate=*" in our request.

![img of walkthrough react](/src/assets/frameworks/strapi-react/react-img/image-18.png)

To retrieve product data from Strapi, send a GET request to http://localhost:1337/api/products. However, to include the media field, you must send a GET request to http://localhost:1337/api/products?populate=*. Once populated, we'll utilize this endpoint to fetch the data in homepage.js.

![img of walkthrough react](/src/assets/frameworks/strapi-react/react-img/image-19.png)

### Fetch the product data from the API endpoint
We will now fetch our product data from the API endpoint in Homepage.js.

1. Importing Libraries: Import react from react, useFetch from hooks, and Link from react-router-dom.

2. Creating the Product Card: Define a template for each product called ProductCard.
3. Product Card Structure: Inside ProductCard, create two div components:
- "image-container": Display the product image with alternative text.
- "card-content": Show the product name, description, and price.

4. Fetching Product Data: Utilize the useFetch hook to request information about all the products from the server.

5. Loading and Error Handling: Display a loading message while waiting for the server response. If an error occurs, show an error message instead.

6. Displaying Products: After receiving the product data, iterate through each product and display it using the ProductCard template.

7. Sending Users to Product Pages: Include a link in each product card. Clicking the link navigates users to a page with more details about the product.

![img of walkthrough react](/src/assets/frameworks/strapi-react/react-img/image-20.png)

In our Shoedays app, we can utilize the developer tool to inspect the data received from the fetch request. Here, you'll notice that the image is stored as data.

![img of walkthrough react](/src/assets/frameworks/strapi-react/react-img/image-21.png)

## Fetching Single Product by ID
Having retrieved all products from our API endpoint on the homepage, we'll now focus on fetching a single product on the ProductDetails.js page.
When a user selects a product card on the homepage, they'll be directed to the individual product details page. Here, we'll demonstrate fetching product ID 7.

![img of walkthrough react](/src/assets/frameworks/strapi-react/react-img/image-22.png)

In the Strapi admin panel, we can easily access and manage individual product endpoints. We'll focus on product ID 7, "Trendstep Streetstyle," demonstrating how to fetch and display it in the ProductDetails.js page when the user clicks on the product card with ID 7.

![img of walkthrough react](/src/assets/frameworks/strapi-react/react-img/image-23.png)

To facilitate the display of the selected single product, several steps are taken within the ProductDetails component:

- Extracting Product ID: The useParams hook from React Router is employed to extract the product ID from the URL parameters.

- Fetching Product Data: The useFetch custom hook is utilized to fetch product data from the API by appending the extracted product ID to the endpoint URL.

- Initializing State Variables: State variables (loading, error, data, and product) are initialized using the useState hook to manage the fetching process and component rendering.

- Updating Product State: An useEffect hook is utilized to update the product state once the data is successfully loaded.

- Conditional Rendering: Conditional rendering is implemented to display loading indicators, error messages, or product content based on the fetch status.

- Rendering Product Details: Once the data is successfully fetched and loaded, the product details are rendered, including the product name, description, price, and an image if available.

- Displaying "Buy Now" Button: A "Buy Now" button is displayed to facilitate potential purchase action for the product.

![img of walkthrough react](/src/assets/frameworks/strapi-react/react-img/image-24.png)

By implementing the described steps, we can now display the data associated with the product ID 7, the "Trendstep Streetstyle" shoe. Additionally, upon successful retrieval of the product data, we log this information in the console for further analysis or debugging purposes.

![img of walkthrough react](/src/assets/frameworks/strapi-react/react-img/image-25.png)

## Summary 
In this case study, we seamlessly integrated Strapi, a headless CMS, with React to establish a RESTful API and frontend interface for showcasing product details. 

Beginning with Strapi, we configured RESTful API endpoints, managed data, and validated functionality using Postman. Transitioning to the frontend, we leveraged React to efficiently fetch and exhibit product data retrieved from the Strapi backend. 

Employing React hooks such as useState, useEffect, and useParams facilitated state management and data fetching. Our approach prioritized practical implementation over React fundamentals, utilizing tools like the terminal, VSCode, and Strapi Admin Panel for enhanced development efficiency. Through this process, we successfully linked the frontend and backend of our Shoedays app, ensuring smooth functionality and laying the groundwork for future enhancements and expansions.

To take the app and skills further, you can add more features using React, make it more personalized with Strapi, and improve performance with technologies like GraphQL or Redux. For deployment, consider platforms like Netlify or Vercel for hosting your React frontend, while Strapi supports various databases including SQL databases like MySQL, PostgreSQL, and SQLite, alongside NoSQL databases like MongoDB. 

## Credits
Karen Jo Fiksdahl <KarenJoo> (https://github.com/KarenJoo)

## References
- [Strapi's official documentation](https://docs.strapi.io/developer-docs/latest/getting-started/quick-start.html#_1-install-strapi-and-create-a-new-project)
- [NetNinja Full react Tutorial](https://www.youtube.com/watch?v=4Ntd414raYc&list=PL4cUxeGkcC9h6OY8_8Oq6JerWqsKdAPxn&index=1&t=8s)
- [NetNinja Strapi crash course](https://www.youtube.com/playlist?list=PL4cUxeGkcC9h6OY8_8Oq6JerWqsKdAPxn)
- [Kinsta.com React Errors](https://kinsta.com/knowledgebase/attempted-import-error-switch-is-not-exported-from-react-router-dom/)
- [Forum.strapi.io No image in the API response](https://forum.strapi.io/t/no-image-in-the-api-response/13281) 

