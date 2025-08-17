---
title: Express.js
author: Stian Johansen
tags: backend, framework, node, nodejs, javascript, api, server-side, MERN
---

## Introduction

[Express.js](https://expressjs.com/) is a lightweight, unopinionated web framework for Node.js. It is designed to simplify building web applications and APIs by providing powerful routing, middleware, and integration options.

Since its release in 2010, Express has become the **most widely used Node.js framework** and is often the first step for front-end developers learning backend development. It is a core component of the popular **MERN** and **MEAN** stacks.

Express is especially known for:

- Quick prototyping of APIs
- Flexible application structure
- Large ecosystem of middleware and extensions

<details>
  <summary>What is Node.js?</summary>

Node.js is a JavaScript runtime built on Chrome’s V8 engine. Unlike browsers, it allows JavaScript to run on the server, making it possible to write backend applications entirely in JavaScript. Node.js is event-driven and non-blocking, which makes it efficient for handling many requests simultaneously.

</details>

<details>
  <summary>What is the MERN stack?</summary>

The MERN stack combines:

- **MongoDB** (database)
- **Express.js** (server-side framework)
- **React** (frontend library)
- **Node.js** (runtime)

This combination allows developers to build full-stack web applications entirely with JavaScript.

</details>

---

## Brief History

- **2010** – Created by [TJ Holowaychuk](https://github.com/tj) as a small framework for Node.js
- **2014** – Taken over by StrongLoop, a company specializing in Node.js tools
- **2015** – IBM acquired StrongLoop, and Express became part of the Node.js Foundation (now [OpenJS Foundation](https://openjsf.org/))
- **Today** – Maintained by a large community, with millions of downloads weekly via npm

Express has stood the test of time, remaining a go-to solution for developers even as newer frameworks have emerged.

---

## Main Features

- **Routing:** Easy-to-use system for handling URLs and HTTP methods (GET, POST, PUT, DELETE).
- **Middleware Support:** Functions that can modify requests and responses, making it easy to add authentication, logging, or error handling.
- **Static File Serving:** Built-in ability to serve files such as HTML, CSS, and images.
- **Template Engines:** Works with Pug, EJS, Handlebars, and others to build dynamic websites.
- **Flexibility:** Unopinionated — developers choose how to structure projects.
- **Integration:** Works with databases, frontend frameworks, and third-party APIs.

---

## Real-World Usage

Express.js is used by companies and open-source projects across industries:

- **FreeCodeCamp** – Uses Express to power its backend API, serving millions of learners.
- **Uber** – Leveraged Express and Node.js to handle geolocation and trip matching services at scale.
- **Ghost (CMS)** – Originally used Express for its blogging platform backend.
- **IBM Cloud** – Integrates Express in some of its microservice offerings.
- **Startups** – Frequently use Express for quick MVPs before scaling up.

This mix of small projects and enterprise adoption highlights Express’s adaptability.

---

## Market Comparison

While Express remains the most widely used Node.js framework, several strong competitors have emerged:

- **Fastify (2017):** Built for speed, offers JSON schema validation and better performance out of the box.
- **NestJS:** A TypeScript-first, opinionated backend framework that runs on top of Node.js. By default it uses **Express.js** under the hood (or Fastify if configured). It provides enterprise-ready architecture, decorators, and dependency injection, making it ideal for large projects.
- **Koa.js:** Created by the same team as Express, but uses modern async/await for cleaner middleware handling.
- **Hapi.js:** Focused on configuration over code, with strong built-in features for validation and security.

Beyond Node.js itself, **Deno** and **Bun** are rising runtimes that may inspire new frameworks, potentially challenging Express in the future.

---

## Getting Started

Here’s a simple Express.js app that returns a “Hello World” response:

```js
// app.js
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World from Express!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
```

Run this with:

```bash
node app.js
```

Open [http://localhost:3000](http://localhost:3000) in your browser — you should see "Hello World from Express!"

---

## Glossary

### Middleware

Middleware functions are functions that run between a request and a response. They can log requests, handle authentication, parse JSON, or send errors. For example:

```js
function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}

app.use(logger);
```

This will log every request to the console before moving to the next route handler.

Another common use case is **authentication middleware**, where you restrict access to certain routes:

```js
function isAuthenticated(req, res, next) {
  if (req.headers["authorization"] === "mysecrettoken") {
    next(); // user is authorized, proceed
  } else {
    res.status(401).send("Unauthorized");
  }
}

app.get("/dashboard", isAuthenticated, (req, res) => {
  res.send("Welcome to your dashboard!");
});
```

This ensures only users with the correct credentials can access protected resources.

### Dynamic Websites

Using template engines, Express can generate dynamic HTML. Example with **EJS**:

```js
app.set("view engine", "ejs");

app.get("/greet/:name", (req, res) => {
  res.render("greet", { name: req.params.name });
});
```

If `greet.ejs` contains `<h1>Hello <%= name %></h1>`, visiting `/greet/Alice` will display “Hello Alice”.

---

## Conclusion

Express.js is one of the most influential frameworks in modern web development. Its balance of simplicity, flexibility, and community support makes it ideal for both beginners and professionals.

While newer frameworks like **Fastify** and **NestJS** offer speed and structure, Express remains a dominant choice due to its ecosystem, stability, and ease of learning. For developers building APIs, learning Express provides a foundation that translates well to any backend framework.

---

## References

- [Express.js official site](https://expressjs.com/)
- [Node.js official site](https://nodejs.org/)
- [FreeCodeCamp engineering blog](https://www.freecodecamp.org/news/tag/engineering/)
- [Educative.io – Fastify vs Express](https://www.educative.io/answers/fastify-vs-express)
- [MDN Express Tutorial](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs)
