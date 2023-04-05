---
title: ExpressJS Case Study
author: Stian Stordal [<StianSto>](https://github.com/StianSto)
tags:
---

# ExpressJS Case Study

| **Table of contents**                         |
| --------------------------------------------- |
| [Introduction](#Introduction)                 |
| [Brief History](#Brief-History)               |
| [Main Features](#Main-Features)               |
| [Market Comparison](#Market-Comparison)       |
| [Getting Started](#Getting-Started)           |
| [References](#References)                     |
| [Additional Recources](#Additional-Recources) |

<br>
<br>

## Introduction

ExpressJS is a Node.js web application framework. It was created by [TJ Holowaychuk](https://github.com/tj), but is now maintained by Douglas Wilson and [others](https://expressjs.com/en/resources/community.html). It is used on the backend to create server-side applications and is frequently used to make APIs. Express is one of the Core tools in the MEAN-/MERN-/MEVN-stack

<details open>
	<summary>what is Node.js?</summary>

> Node.js is an "asynchronous event-driven JavaScript runtime" ([nodejs.org](https://nodejs.org/en/about)). This means that node will execute tasks based on certain events, like a user trying to access a port, or sending an HTTP request. Node.js being a runtime means that you don't need to be in a browser environment to run your code. Instead you can run it on a local environment in Node, which makes it ideal to develop web servers and other backend applications on.

</details>

<br>

## Brief History

- 2010: ExpressJS released by [TJ Holowaychuk](https://github.com/tj)
- 2014: StrongLoop acquired the rights to manage the project.
- 2015: StrongLoop was acquired by IBM, along with the rights to Express

<br>

## Main Features

- **routing**: Express offers a robust routing system. This makes it a popular choice for route handling in APIs and serving static files
- **middleware**: Express has support for middleware functions that you can use to handle errors, authentication and more. read more about middleware [here](#middleware)
- **template engines**: you can use Express and Node js to create a _dynamic website_. to do that express has support for template engines like EJS and PUG. read more about creating dynamic websites [here](#dynamic-website)
- **easy to get into**: Express and Node is written in the very familiar language of JavaScript. This helps to ease front-end developers into the backend, instead of having to learn a whole new language like python, C#, Ruby or GO.
- **community**: Express is one of the most used Web Application Frameworks for Node.js. It is therefore no surprise that there is a huge community around Express that aims to teach and further develop it.

<br>

## Market Comparison

Express has been and still is one of the most used frameworks for Node.js. It has also solidified its popularity by being part of the MERN/-stack (MongoDB, Express, React(or other front-end frameworks like angular), and Node.js). It is safe to say express is not going anywhere anytime soon.

That being said, Express has gotten a lot more competition in the last few years. in 2017 Fastify was released and has given Express a run for its money, by offering better speed and performance. In addition to Fastify, there is also Koa.js, Nest.js (which uses express "under the hood", but can be configured to use Fastify), and Hapi

Express being a framework based on Node.js might also be getting some serious competition from Deno, which aims to replace Node.js. Deno offers better speeds and better security. Right now Deno reports they have compatibility with NPM, but we might see a Web Application Framework built on Deno, like [Oak](https://deno.land/x/oak@v12.1.0), outperforming both Express and Fastify in the coming future. That being said, Node.js is not about to be completely replaced anytime soon, after being the gold standard for JavaScript developers for a long time. And since Deno offers compatibility with NPM, Express is not likely to fall off the wagon even if Deno becomes the new gold standard.

<br>

## Getting Started

Below is a very simple setup of an Express app that renders a hello world page on localhost. In addition to this, MDN has a very thorough tutorial on creating a web app with express [here](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website)

#### step 0: setup <a id="gettingsStartedStep0"></a>

before we install express, we need to make sure we have everything we need. if you already know how to install node, and initialize a node project, continue to [step 1](#gettingsStartedStep1).

create and open a folder in your favorite code editor.
run this command to confirm node is installed.

```
node -v
```

if it returns a version number you can continue. if not, install node.

Next we initialize our project

```
npm init
```

After you have filled in the required fields in the CLI, a package.json file should appear. We can now install Express.

#### step 1: install express <a id="gettingsStartedStep1"></a>

To install Express run this command. This will install Express as a dependency in your project.

```
npm i express
```

> you can also quickly install an Express skeleton with [_express generator_](https://expressjs.com/en/starter/generator.html), which can save you a lot of time. I recommend doing this only when you are familiar with the ins and outs of Express.

#### step 2: Create an Express app file <a id="gettingsStartedStep2"></a>

Next we will make the app file that runs our web app. create a file called app.js. in this file add this:

```
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Hello world! im on http://localhost:${port}`);
})
```

<details>
<summary>what do these lines of code do?</summary>

> ```
> const express = require('express')
> const app = express()
> ```
>
> This imports express into the the file so we can use it. we then create an instance called _app_.

> ```
> app.get('/', (req, res) => {
>  res.send('Hello World!')
> })
> ```
>
> This is a route handler. when the user sends a HTTP GET request to the "/" path, the server will respond with the plain text 'Hello World'. This is what will be rendered on the page.

> ```
> app.listen(port, () => {
>  console.log(`Hello world! im on http://localhost:${port}`);
> })
> ```
>
> This starts the server on the specified port. in our case it is on `http://localhost:3000`. When we execute this app it will console log "Hello world! I'm on http://localhost:3000"

</details>

Great! We can now start our app by running `node app.js` in our CLI. You should see  
 "Hello world! I'm on http://localhost:3000" in your CLI.  
 click the link (you may have to ctrl or cmd-click it) or copy it into your browser. If your page says "Hello world" it was successful.

Congratulations! you have made your very own server-side rendered web app :tada:
<br>

## Conclusion

<br>

## References

- [expressjs.com](https://expressjs.com/)
- [npmjs.com - expressjs](https://www.npmjs.com/package/express?activeTab=readme)
- [StrongLoop blog - TJ Holowaychuk Passes Sponsorship of Express to StrongLoop](https://web.archive.org/web/20161011091052/https://strongloop.com/strongblog/tj-holowaychuk-sponsorship-of-express/)
- [node.js tutorial - what is express js?](https://www.simplilearn.com/tutorials/nodejs-tutorial/what-is-express-js)
- [mdn web docs - Express/NodeJS](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/)
- [educative.io - Fastify vs. express](https://www.educative.io/answers/fastify-vs-express)

<br>

## Additional Recources

### Glossary

Below are some additional paragraphs to further explain some important words, definitions or elements used in this document.

<br>

#### Middleware

Kyle Cook (a.k.a WebDevSimplified) defines middleware as

> "a function, a program or something that is going to run between the time the server gets the request, and the time the server sends the response out to the client"

Looking at the example above in the [getting started](#getting-started) section, we can say that app.get is a middleware function. The server receives a GET request to "/" from the client, and the server runs app.js and tries to match the routes, in this case it is a get request, so app.get is run, and the route matches also, so the callback function (req, res) => {res.send("Hello World!")} is also run.

We can also make our own middleware function, which is where the power of middleware comes to light. lets create a simple _greeting function_

```
function greeting(req, res, next) {
	console.log('hello friend!')
	next()
}
```

this function takes in three parameters: the request, the response and a function called next. We need to use next to tell the server to continue to the next middleware function.

when can run our middleware function in two ways, globally or as a specific middleware in our router.

the global is simple enough, add this above the routers, but after the imports:

```
app.use(greeting)
```

now greeting will run everytime a request is sent to the server. But what if you only want to use this middleware when you request the "/greeting" endpoint. lets create the route for greeting first.

```
app.get("/greeting", (req, res) => {
	res.send('hello friend, how are you?')
})
```

now we add our greeting middleware function to this route as a parameter

```
app.get("/greeting", greeting, (req, res) => {
	res.send('hello friend, how are you?')
})
```

if you make a GET request to "/greeting" you will now see that the page renders "hello friend, how are you?" and in the cli, it has logged "hello friend!". Now for the final step

Now we now everything we need to know to create our modular middleware functions. lets clean up these routes, and change the behaviour a little.

```
function helloWorld(req, res, next) {
	res.send('Hello World!')
}
function greeting(req, res, next) {
	res.send('Hello Friend')
}

app.get("/", helloWorld)
app.get("/greeting", greeting)
```

if you visit "/" in your browser, you should now see "Hello World!", and if you go to "/greeting" you will see "Hello Friend". we just made our code a lot more readable and made a usable router for "/" and "/greeting"

<br>

#### Dynamic website

a dynamic website differs from a static website in that it _generates_ the static files based on the request. Lets say we have a site about animals. Instead of creating an html file for cat, dog and sheep each, we need only one template file. We can take the template file, input the relevant data, send it to the client which renders it on the browser. lets make a very simple example

```js
// app.js

const express = require("express");
const app = express();
const port = 3000;

// our hardcoded database of animals
const animals = [
  {
    race: "dog",
    name: "Rufus",
  },
  {
    race: "sheep",
    name: "Barnaby",
  },
  {
    race: "cat",
    name: "Cathy",
  },
];

// route to /animals/:race. runs the findAnimalByRace middleware
app.get("/animals/:race", findAnimalByRace);

// our middleware for finding and returning
function findAnimalByRace(req, res, next) {
  // find animal by the race value
  const findByRace = animals.find(
    (animals) => animals.race === req.params.race
  );

  // send the result to the client. If server couldn't find the animal, it sends a 404 status.
  if (findByRace === undefined)
    res.status(404).send(`we could not find ${req.params.race} :( `);
  res.status(200).send(`${findByRace.name} the ${findByRace.race}`);

  next();
}

app.listen(port, () => {
  console.log(`Hello world! im on http://localhost:${port}`);
});
```

<details>
	<summary>note: we are not creating HTML files but sending plain text in this example</summary>

you can further Improve this feature by utilizing _view template engines_, such as EJS, or PUG. With these tools, you can create static HTML pages dynamically and send them to the client server. For this example, however, we'll stick with plain text for simplicity's sake.

</details>

run this with `node app.js` and go to http://localhost/animals/dog and see what happens. You should now see "Rufus the dog" on the site. Try entering different animals including animals that don't exist in our "database", and see what happens. Congratulations, you created a dynamic website! :tada:
