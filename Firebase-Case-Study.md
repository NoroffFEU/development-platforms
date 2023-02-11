# Everything I wondered about Firebase: Answered

## What is Firebase

Firebase is a development platform & tool provided by Google. Some might call it a BaaS (Backend as a service), which would be both wrong and right, as Firebase encompasses but also expands beyond the utilities of a BaaS.
Firebase provides an arsenal of different tools and features needed to build an app through an SDK (Software Development Kit).
These include Authentication, Hosting, Cloud functions, Cloud storage, Realtime database, Performance monitoring, Analytics, Cloud messaging and more.

## Vendor lock-in

- Google is gigantic with small to no probability of shutting down the service. Being Vendor locked-in to this behemoth is therefore less of a concern than being locked-in to a minor and less predictable provider.

## Open source or not

## What makes Firebase unique

## Creating a Firebase Project

### Requirements

NodeJS
A code editor like VSC

### Files and folders

The following should be your filing tree.

Root  
|-src/  
| |-index.js  
|-dist/  
| |-index.html  
|  
|-webpack.config.js  
|-package.json

### Bundling

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

### Create Project

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

Above the config, we have to import our Firebase functions. We do this with the following command:

```js
import { initializeApp } from "firebase/app";
```

We have now imported the initializeApp function, and may use it to initialize our app with our config.

Below our config, paste the following function:

```js
initializeApp(firebaseConfig);
```

Our app is now connected to our online Firebase project.

## Security

## Hosting

## Summary

## Sources

https://firebase.google.com/docs/web/setup
https://www.youtube.com/watch?v=9zdvmgGsww0&list=PL4cUxeGkcC9jERUGvbudErNCeSZHWUVlb&index=1
