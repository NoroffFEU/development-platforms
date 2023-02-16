---
title: Everything I wondered about Firebase; Answered
keywords: development platforms, Firebase
tags: Development Platforms, Firebase
sidebar: development-platforms
permalink: development-platforms/firebase-case-study.html
folder: Development platforms
---

## Table of contents

1. [Introduction](#introduction)
2. [Brief History](#brief-history)
3. [Potential Issues](#potential-issues)
4. [Strengths](#strengths)
5. [Creating a Firebase Project](#creating-a-firebase-project)
6. [Database](#database)
7. [Security](#security)
8. [Hosting](#hosting)
9. [Summary](#summary)

# Introduction

Firebase is a development platform and tool provided by Google. Some might call it a BaaS (Backend as a Service), which would be both right and wrong, as Firebase encompasses but also expands beyond the utilities of a BaaS.
Firebase provides an arsenal of different tools and features required to build an app through SDKs (Software Development Kits).
These include Authentication, Hosting, Cloud Functions, Cloud Storage, Realtime Database, Performance Monitoring, Analytics, Cloud Messaging, and more.

In this case study, I aim to answer everything you may initially be wondering about Firebase, including practical examples. Let's begin.

# Brief History

Firebase originated as Evolve, an API that enables the integration of online chat functionality to websites. When the founders discovered that the service was being used to pass application data that were not chat messages, they decided to separate the chat system and the real-time architecture that powered it. Firebase was founded as a separate company in 2011. In 2014, Firebase is acquired by Google.

# Potential issues

## Vendor lock-in

When using external development platforms like BaaS, you are often required to use the company's SDKs, therefore building your application on their terms, using their methods. This may cause the issue of "Vendor Lock-in", where your code is tied to the service to such an extent that although you want to switch services, the amount of work required to do it prevents you.

Being vendor locked in can be a major issue if:

- The service provider shuts down.
- The service provider increases prices.
- You reach a technical barrier to the service

Let's consider this in the context of Firebase. Unfortunately, your code will become quite specific to their service, as most functions are imported from their library, which means that Vendor Lock-in with Firebase will occur to some extent. However, Google is a gigantic company with a small to no probability of shutting down the service. Being Vendor locked into this behemoth is therefore less of a concern than being locked into a smaller and less predictable provider. When it comes to pricing, big ships turn slowly. Currently, Firebase provides a brilliant "pay as you grow" plan, which we will discuss later.

## Closed Source

Although Firebase is not open source, many of its features are. This is done for increased transparency and to build a stronger developer community. Open source components from Firebase include SDKs, libraries, and samples, all posted on their GitHub page.
Unless you plan to build something that outlives or rivals Google, you don't need to worry about Firebase's closed source. However, very large companies may benefit from building their infrastructure using open-source alternatives to ensure independence.

## Only NoSQL Database

Firebase does not offer SQL databases, and you will have to use one of the NoSQL databases they provide. This can be both good and bad, depending on your data and structure. It is however important to be vigilant when constructing your NoSQL database.
The topic of databases deserves its own section and is discussed further [Here](#database).

# Strengths

## Easy Initialization

The primary benefit of Firebase contra no BaaS or another BaaS provider is that it handles challenging and time-consuming tasks for you, so you can focus on advancing your front end rapidly and with no cost until your application is already highly trafficked.

For reference, the so-called Spark plan allows 50k monthly active users and 50k documents read from the Firestore database each month for free and the equivalent of 20M messages stored. Should however your reads and writes to the database contain videos or images, you will likely reach various limits of data transfer faster.
The general impression I am getting here is that by the time you need to worry about costs, you should have enough users to not have to worry about the costs.
One notable downside of their pricing plan is that it may be hard to estimate costs way down the line.

Setting up a project is not very challenging, and you can have a front end connected to a database within minutes. We will go through the steps for connecting to a database [later](#creating-a-firebase-project)

## Well documented

Although closed source, Firebase has a great developer community and is a topic with many discussions and youtube videos surrounding it. Firebase also provides an abundance of learning material in text or videos on its website. For troubleshooting and issues, you can also contact customer support, although some inquiries about debugging and writing code will be "Out of scope" unless you have a paid support plan.

## Integrations and Extensions

Firebase provides a bunch of out-of-the-box code to handle various tasks and simplify the development process. Some are provided directly from Firebase and some are found in the Extension Marketplace. Below are some examples;

- Firebase has its own integrated authentication for registering users and log-in/log-out.
- Payment Extension with Stripe
- Page search extension
- Email trigger to users on specific database alternations

# Creating a Firebase Project

## Requirements

- NodeJS
- A code editor like VSC

## Files and folders

The following should be your filing tree.

Root  
|-src/  
| |-index.js  
|-dist/  
| |-index.html  
|  
|-webpack.config.js  
|-package.json

## Bundling

Before you start, you will need to install and set up a bundler to bundle your application-specific code with your imported library code.

- Libraries like React or Svelte would have their own bundler.

- If writing in vanilla JS, we can use a bundler called Webpack.

We install Webpack using the following command:

```
npm i webpack webpack-cli -D
```

When run, Webpack will look for a file called index.js in our src folder, and output a main.js in our dist folder.
However, the source code will look messy in the browser, making debugging a hassle. To solve this, we can use "source maps".
Source maps are a method of bringing a compiled file back to its pre-built state, visually reversing the bundling.

To do this, we create a file **webpack.config.js**.

Without going into great detail, our webpack.config.js will look like this with our chosen tools:

```js
const path = require("path");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  watch: true,
};
```

Then we go to our package.json file and change our build command in the script tag to the following:

```
"build": "webpack --mode=development",
```

We may now run our command in the CLI

```
npm run build
```

This should build a file called bundle.js in our dist folder.
After the file is created, we may change our javascript source to the newly created "bundle.js" in our index.html, and see that the source of our js in the developer tools looks neat.

## Create Project

We may now continue to the Firebase website and create a **web** project. In the Project Settings, you will find a tab called SDK setup and configuration.
Select the "Config" radio button, and copy the config code presented. It should look something like this:

```js
const firebaseConfig = {
  apiKey: "AIzaSyDqDxBkLIvpFxETujLljHo8ZVw1bxE",
  authDomain: "project-9b742.firebaseapp.com",
  projectId: "project-9b742",
  storageBucket: "project-9b742.appspot.com",
  messagingSenderId: "551318158478",
  appId: "1:551328158478:web:5f6e33537bdad4053e1ddf",
};
```

Go to your index.js file and paste it in.

Further, we will need to use functions from the Firebase library. We therefore first need to run the command to download Firebase. Run the following command in the CLI:

```
npm i firebase
```

We can now import our Firebase functions. Above the config, place the following import:

```js
import { initializeApp } from "firebase/app";
```

We have now imported the initializeApp function and may use it to initialize our app with our config.

Below our config, paste the following function:

```js
initializeApp(firebaseConfig);
```

Our app is now connected to our online Firebase project.

# Database

## Realtime Database & Firestore

Firebase offers two databases: Firestore and Firebase Realtime Database.  
Both are [NoSQL](#nosql) real-time databases, with slightly different use cases.

- Firebase Realtime Database uses a JSON-based data model, and is more flexible in terms of structure, as it does not require a fixed schema and allows you to store nested data structures. It is more suited when real-time synchronization is important and complex data & querying is not needed.

- Firestore is a newer and enhanced version of Realtime Database, which uses a document-oriented data model, where data is stored as collections of documents, each of which contains key-value pairs. Firestore allows more complex querying than Realtime Database and slightly more options for security, although both databases exhibit robust security. It is more suited for larger data where more complex querying and security are important.

## NoSQL

NoSQL, meaning "Not only SQL", are databases that store data with methods other than tabular relations. NoSQL databases do not require a specific input format and are more flexible than relational databases, making them an attractive choice for dynamic applications with many users and unstructured data.
Some of the advantages of using NoSQL databases include horizontal scalability, flexibility, and ease of development. NoSQL databases are also well-suited for handling big data, real-time data, and cloud-based applications.
They may, however, experience difficulty handling a lot of reads due to the potential complexity of your database structure, and for the same reason may not perform as well as relational databases in handling complex queries. In addition to this, unlike their relational counterpart, there is no standard language for NoSQL databases. This often makes database providers construct their own language, thus providing an extra layer of vendor lock-in to that specific database.

## Migration

Migrating away from Firestore may be highly difficult, depending on the size and complexity of your data. Due to the specific structure and syntax, migration to another database would require significant changes in your code.
It is however not impossible, and should the need desperately arise, you can consult with experts in database migration.

## Queries

A Firebase query is the method of getting your desired data from the database. This is done by using Firebase's imported functions together with your own defined query.
In my Firebase project console, I have created a collection called **Ingredients**, and I have a document in that collection with the name attribute of "tomato".
Below is an example I created of a query to get all results from the **Ingredients** collection with the name "tomato".

```js
// Creates a variable for the Ingredients Collection in the database
const colIngredients = collection(db, "ingredients");

// Create a const q that contains the query function
const q = query(colIngredients, where("name", "==", "tomato"));

// Real time collection data with onSnapshot
function getIngredients(query) {
  onSnapshot(
    query,
    (querySnapshot) => {
      let ingredients = [];
      querySnapshot.forEach((doc) => {
        ingredients.push({ ...doc.data(), id: doc.id });
      });
      console.log("Data from onSnapshot: ", ingredients);
      buildList(ingredients);
    },
    (error) => {
      console.log("Error getting documents: ", error);
    }
  );
}
getIngredients(q);
```

# Security

With Firebase projects, you work with authentication and database queries entirely from the front end, meaning our database is exposed to the client. One might think this renders your data exposed to hackers.
However, Firebase maintains a high level of security through something called "Security rules". Let's have a deeper look.

On a normal application, you would have a protected server that uses cookies or tokens to verify if you have permission to access the server or not.
Firebase Security Rules perform the same task, but without the need to write server-side code. Instead, you create a policy in the Firebase console that defines who has access to what in your database, using an intuitive language called **Common expression language**. Every read or write request to the database is routed through these policies and denied by default until potentially finding a rule that allows it.

# Hosting

Firebase provides quick and easy hosting of your project, with benefits like custom domains, automatic versioning that lets you fall back to a previous version if needed and URL rewrites and redirects.

You can deploy your project from your firebase CLI with the following command:

```
firebase deploy
```

# Summary

Firebase is a brilliant tool when you are unsure about the success of your application, and you want to give it a go with costs and minimal time invested.
You will be vendor locked in, and migrating to another service later is not easy. However, Firebase will most likely offer everything you need. The X factor is pricing, but when this becomes an issue, your application is already successful, and you may then have the means to hire assistance to migrate to another service if needed.

## Credit

- Tom Erik William Ertvaag (WParsec)

### Sources

https://firebase.google.com/docs/web/setup  
https://www.youtube.com/watch?v=9zdvmgGsww0&list=PL4cUxeGkcC9jERUGvbudErNCeSZHWUVlbindex=1  
https://firebaseopensource.com/  
https://firebase.google.com/learn/pathways/firebase-firestore  
https://www.youtube.com/watch?v=v_hR4K4auoQ&ab_channel=Firebase  
https://firebase.google.com/docs/database/rtdb-vs-firestore  
https://www.youtube.com/watch?v=gEaY2GZMino&ab_channel=TheNetNinja  
https://firebase.google.com/docs/firestore/query-data/queries  
https://www.youtube.com/watch?v=sw1Uy3zwsLs&ab_channel=Fireship
