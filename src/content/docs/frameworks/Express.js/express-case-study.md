---
title: Express.js
author: Stian Stordal [<StianSto>](https://github.com/StianSto)
tags: backend, framework, node, nodejs, javascript, api, server-side, MERN
---

## Introduction

ExpressJS is a Node.js web application framework. It was created by [TJ Holowaychuk](https://github.com/tj), but is now maintained by Douglas Wilson and [others](https://expressjs.com/en/resources/community.html). It is used on the backend to create server-side applications and is frequently used to make APIs. Express is one of the Core tools in the MEAN-/MERN-/MEVN -stack

<details >
	<summary>what is Node.js?</summary>

> Node.js is an "asynchronous event-driven JavaScript runtime" ([nodejs.org](https://nodejs.org/en/about)). This means that node will execute tasks based on certain events, like a user trying to access a port, or sending an HTTP request. Node.js being a runtime means that you don't need to be in a browser environment to run your code. Instead you can run it on a local environment in Node, which makes it ideal to develop web servers and other backend applications on. If you are already familiar with javascript, chances are, that you have already used Node.js a lot already. Like installing node modules in your project (bootstrap, dotenv, sass etc...), or using npm to switch betwee node versions.

</details>
<details >
	<summary>what is MEAN/MERN/MEVN -stack?</summary>

> these stacks refers to a collection of tools:
>
> MongoDB (database)
> Express (backend, server-side app)
> React/Angular/Vue or other front end frameworks (frontend)
> Node.js (backend)
>
> with all these tools you can build a fullstack application from scratch.

</details>

## Brief History

- 2010: ExpressJS released by [TJ Holowaychuk](https://github.com/tj)
- 2014: StrongLoop acquired the rights to manage the project.
- 2015: StrongLoop was acquired by IBM, along with the rights to Express

## Main Features

- **routing**: Express offers a robust routing system. This makes it a popular choice for route handling in APIs and serving static files
- **middleware**: Express has support for middleware functions that you can use to handle errors, authentication and more. read more about middleware [here](#middleware)
- **template engines**: you can use Express and Node js to create a _dynamic website_. to do that express has support for template engines like EJS and PUG. read more about creating dynamic websites [here](#dynamic-website)
- **easy to get into**: Express and Node is written in the very familiar language of JavaScript. This helps to ease front-end developers into the backend, instead of having to learn a whole new language like python, C#, Ruby or GO.
- **community**: Express is one of the most used Web Application Frameworks for Node.js. It is therefore no surprise that there is a huge community around Express that aims to teach and further develop it.

## Market Comparison

Express has been and still is one of the most used frameworks for Node.js. It has also solidified its popularity by being part of the MERN/-stack (MongoDB, Express, React(or other front-end frameworks like angular), and Node.js). It is safe to say express is not going anywhere anytime soon.

That being said, Express has gotten a lot more competition in the last few years. In 2017 Fastify was released and has given Express a run for its money, by offering better speed and performance. In addition to Fastify, there is also Koa.js, Nest.js (which uses express "under the hood", but can be configured to use Fastify), and Hapi

Express being a framework based on Node.js might also be getting some serious competition from [Deno](https://deno.land/), which aims to replace Node.js. Deno offers better speeds and better security. Right now Deno reports they have compatibility with NPM, but we might see a Web Application Framework built on Deno, like [Oak](https://deno.land/x/oak@v12.1.0), outperforming both Express and Fastify in the coming future. That being said, Node.js is not about to be completely replaced anytime soon, after being the gold standard for JavaScript developers for a long time. And since Deno offers compatibility with NPM, Express is not likely to fall off the wagon even if Deno becomes the new gold standard.

In addition to Deno, there is also the newer competitor: [Bun](https://bun.sh/), which claims to be even faster than Deno, and with native support for node packages and more. I should mention that bun is still in version 0.5.9 as of writing this, and still has a few things to iron out, but it will be interesting to try out Express with Bun when it is fully ready.

## Getting Started

Below is a very simple setup of an Express app that renders a hello world page on localhost. In addition to this, MDN has a very thorough tutorial on creating a web app with express [here](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website)

#### Step 0: Setup

before we install express, we need to make sure we have everything we need. if you already know how to install node, and initialize a node project, continue to [step 1](#gettingsStartedStep1).

create and open a folder in your favorite code editor.
run this command to confirm node is installed.

```bash
node -v
```

if it returns a version number you can continue. if not, install node.

Next we initialize our project

```bash
npm init
```

After you have filled in the required fields in the CLI, a package.json file should appear. We can now install Express.

#### Step 1: Install Express

To install Express run this command. This will install Express as a dependency in your project.

```bash
npm i express
```

> you can also quickly install an Express skeleton with [_express generator_](https://expressjs.com/en/starter/generator.html), which can save you a lot of time. I recommend doing this only when you are familiar with the ins and outs of Express.

#### Step 2: Create an Express app file

Next we will make the app file that runs our web app. create a file called app.js. in this file add this:

```js
const express = require("express")
const app = express()
const port = 3000

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.listen(port, () => {
  console.log(`Hello world! im on http://localhost:${port}`)
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

## Conclusion

In conclusion, ExpressJS is a widely used Node.js web application framework with a rich set of features, such as routing, middleware support, and template engine integration. ExpressJS has a significant community around it and is an integral part of the MEAN/MERN/MEVN stack. While ExpressJS faces competition from newer frameworks such as Fastify, Koa.js, and Nest.js, it continues to maintain its position as a popular choice for backend development. With the emergence of Deno and its superior speed and security, it is possible that we may see a new web application framework built on top of it, which could challenge ExpressJS's dominance in the future.

## References

- [expressjs.com](https://expressjs.com/)
- [npmjs.com - expressjs](https://www.npmjs.com/package/express?activeTab=readme)
- [StrongLoop blog - TJ Holowaychuk Passes Sponsorship of Express to StrongLoop](https://web.archive.org/web/20161011091052/https://strongloop.com/strongblog/tj-holowaychuk-sponsorship-of-express/)
- [node.js tutorial - what is express js?](https://www.simplilearn.com/tutorials/nodejs-tutorial/what-is-express-js)
- [mdn web docs - Express/NodeJS](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/)
- [educative.io - Fastify vs. express](https://www.educative.io/answers/fastify-vs-express)

## Additional Recources

### Glossary

Below are some additional paragraphs to further explain some important words, definitions or elements used in this document.

#### Middleware

Expressjs.com defines middleware as

> "functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle. The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware."
>
> [expressjs.com - Writing middleware for use in Express apps](https://expressjs.com/en/guide/writing-middleware.html)

explained in the simplest way i can think of: Middleware functions are executed after the request is recieved, and before the response has been sent out. the next() function allows you to chain middleware functions together like this: (note that the arrow function is also a middleware function)

```js
app.get("/", middleware1, middleware2, middleware3, (req, res) => {
  console.log("Hello World")
})
```

The usefullnes of middleware functions comes in when creating your own. Lets create a simple _greeting function_

```js
function greeting(req, res, next) {
  console.log("hello friend!")
  res.send("Hello World!")
  next()
}
```

this function takes in three parameters: the request, the response and a function called next. We need to use next to tell the server to continue to the next middleware function.

We can run our middleware function in two ways, globally or as a specific middleware in our router.
The global is simple enough, add this above the routers, but after the imports:

```js
app.use(greeting)
```

now greeting will run everytime a request is sent to the server. But what if you only want to use this middleware when you request the "/greeting" endpoint. lets create the route for greeting.

```js
app.get("/greeting", greeting)
```

if you make a GET request to "/greeting" you will now see that the page renders "Hello World!", and in the CLI it will log "hello friend!".

#### Dynamic website

a dynamic website differs from a static website in that it _generates_ the static files based on the request. Lets say we have a site about animals. Instead of creating an html file for cat, dog and sheep each, we need only one template file. We can take the template file, input the relevant data, send it to the client which renders it on the browser. lets make a very simple example

```js
// app.js

const express = require("express")
const app = express()
const port = 3000

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
]

// route to /animals/:race. runs the findAnimalByRace middleware
app.get("/animals/:race", findAnimalByRace)

// our middleware for finding and returning
function findAnimalByRace(req, res, next) {
  // find animal by the race value
  const findByRace = animals.find(animals => animals.race === req.params.race)

  // send the result to the client. If server couldn't find the animal, it sends a 404 status.
  if (findByRace === undefined) res.status(404).send(`we could not find ${req.params.race} :( `)
  res.status(200).send(`${findByRace.name} the ${findByRace.race}`)

  next()
}

app.listen(port, () => {
  console.log(`Hello world! im on http://localhost:${port}`)
})
```

<details>
	<summary>note: we are not creating HTML files but sending plain text in this example</summary>

> you can further Improve this feature by utilizing _view template engines_, such as EJS, or PUG. With these tools, you can create static HTML pages dynamically and send them to the client server. For this example, however, we'll stick with plain text for simplicity's sake.

</details>

Run this with `node app.js` and go to http://localhost/animals/dog and see what happens. You should now see "Rufus the dog" on the site. Try entering different animals including animals that don't exist in our "database", and see what happens. Congratulations, you created a dynamic website! :tada:
