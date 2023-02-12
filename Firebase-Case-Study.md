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

# Introduction

Firebase is a development platform & tool provided by Google. Some might call it a BaaS (Backend as a service), which would be both wrong and right, as Firebase encompasses but also expands beyond the utilities of a BaaS.
Firebase provides an arsenal of different tools and features needed to build an app through an SDK (Software Development Kit).
These include Authentication, Hosting, Cloud functions, Cloud storage, Realtime database, Performance monitoring, Analytics, Cloud messaging and more.  
Let us dive deeper.

# Brief History

Firebase originated as Evolve, an API that enables integration of online chat functionality to websites. When the founders discovered that the service was being used to pass application data that were not chat messages, they decided to separate the chat system and the real-time architecture that powered it. Firebase was founded as a separate company in 2011. In 2014, Firebase is acquired by Google.

# Potential issues

## Vendor lock-in

When using external development platforms like BaaS's, you are often required to use the company's SDK's, and therefore building your application on their terms, using their methods. This may cause the issue of "Vendor Lock-in", where your code is tied to the service to such an extent that although you want to switch service, the amount of work required to do it prevents you.

Being vendor locked in can be a major issue if:

- The service provider shuts down.
- The service provider increases prices.
- You reach a technical barrier of the service

Lets look at these in regards of Firebase.  
Unfortunately, your code will become quite specified to their service, as most functions are imported from their library, meaning Vendor Lock-in with Firebase will occur to at least some extent. However, Google is a gigantic company with small to no probability of shutting down the service. Being Vendor locked-in to this behemoth is therefore less of a concern than being locked-in to a minor and less predictable provider. When it comes to pricing, big ships turn slowly. Currently, Firebase provides a brilliant "pay as you grow" plan, which we will discuss later.

## Closed Source

Although Firebase is not Open Source, many of their features are. This is done for increased transparency and building a stronger developer community.
Open Source components from Firebase include SDK´s, libraries and samples, all posted on their Github.
Unless your plan is to build something that outlives or rivals Google, I will not personally worry about Firebase´s closed source. Very large companies may however benefit from building their own infrastructure using open source alternatives, to ensure independency.

## NoSQL Database

This can be both good and bad, depending on your data and structure. It is however important to be vigilant when constructing your NoSQL database.
The topic of database deserves it's own section, and is discussed further [Here](#database).

# Strengths

## Pricing

In my opinion, Firebase has an attractive pricing strategy. It offers a "Spark" plan, which is free until your app or website reach a certain amount of traffic or storage. These amounts are relatively high if your application mostly deals in low sizes of data.
For reference, the Spark plan allows 50k monthly active users and 50k document reads from the Firestore database each month for free and the equivalent of 20M messages storing. Should however your reads and database contain videos or images, you will likely reach various limits faster.
The general feel here is that by the time you need to worry about costs, you should have enough users to not have to worry about the costs.

## Well documented

Although closed source, Firebase has a great developer community and is a topic with many discussions and youtube videos surrounding it. Firebase also provides an abundance of learning material in text or videos on their website. For troubleshooting and issues you can also contact customer support, although some inquiries about debugging and writing code will be "Out of scope" unless you have a paid support plan.

## Integrations and Extensions

Firebase provides a bunch of out of the box code to handle various tasks and simplify development process. Some are provided directly from Firebase and some are found in the Extension Marketplace. Below are some examples;

- Firebase have their own integrated authentication for registering users and login/logout.
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

Before you start, you will need to install and setup a bundler to bundle your application specific code with your imported library code.

- Libraries like React or Svelte would have their own bundler.

- If writing in vanilla JS, we can use a bundler called Webpack.

We install webpack using the following command:

```
npm i webpack webpack-cli -D
```

When run, webpack will look for a file called index.js in our src folder, and output a main.js in our dist folder.
However, the source code will look messy in the browser, making debugging a hassle. To solve this, we can use "source-maps".
Source maps are a method of bringing a compiled file back to its pre-built state, visually reversing the bundling.

To do this, we create a file **webpack.config.js**.

Without going into much details, our webpack.config.js will look like this with our chosen tools:

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
After the file is created, we may change our javascript source to the newly created "bundle.js" in our index.html, and see that the source of our js in the developer tools look neat.

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

Further, we will need to use functions from Firebase library. We therefore first need to run the command to download Firebase. Run the following command in the CLI:

```
npm i firebase
```

We can now import our Firebase functions. Above the config, place the following import:

```js
import { initializeApp } from "firebase/app";
```

We have now imported the initializeApp function, and may use it to initialize our app with our config.

Below our config, paste the following function:

```js
initializeApp(firebaseConfig);
```

Our app is now connected to our online Firebase project.

# Database

- Realtime / Firestore
- noSQL - benefits - weaknesses - method how to query
- Works online by caching changes and syncing when online
- Queries

# Security

# Hosting

# Summary

# Sources

https://firebase.google.com/docs/web/setup
https://www.youtube.com/watch?v=9zdvmgGsww0&list=PL4cUxeGkcC9jERUGvbudErNCeSZHWUVlb&index=1
https://firebaseopensource.com/
https://firebase.google.com/learn/pathways/firebase-firestore
