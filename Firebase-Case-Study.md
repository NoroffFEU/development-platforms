# Everything I wondered about Firebase: Answered

## Brief History

## BaaS

## Open source or not

## What makes Firebase unique

## Creating a Firebase Project

### Requirements

NodeJS
A code editor like VSC

### Files and folders

The following should be your filing tree.

Root
|**src/
| |\_index.js
|**dist/
| |\_index.html
|
|\_webpack.config.js
|\_package.json

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

### Queries

Queries specifies what documents you want to collect from a collection or collection group. Below is a query that collects the documents from our Ingredients collection, where the name attribute is equal to "tomato".

```js
const q = query(colIngredients, where("name", "==", "tomato"));
```

You can now use the q variable as your parameter in your onSnapshot function, where it will retrieve only a snapshot of data that matches the query.
The queries are unfortunately case-sensitive and you will, to the best of my research, have to create one query for uppercase and one for lowercase if you want the query to be practically case-sensitive.

## Security

## Hosting

## Summary

## Sources

https://firebase.google.com/docs/web/setup
https://www.youtube.com/watch?v=9zdvmgGsww0&list=PL4cUxeGkcC9jERUGvbudErNCeSZHWUVlb&index=1
