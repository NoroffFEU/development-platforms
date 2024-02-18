---
title: Remix
author: Kim Rune Møller <kimrm>
tags: remix, case study, react, framework
---

## Introduction

<em>"While you were waiting for your static site to build, distributed web infra­structure got really good. Break through the static." - Remix slogan.</em>

Remix is a fairly new JavaScript full stack web framework, built on React, React Router and the Web Fetch API, that aims to be the View and Controller in the Model-View-Controller(MVC) design pattern. The model is left up to you and you can utilize ORM-s or the database technology of your choice. Remix is created by the people behind React Router.

## Brief History

Since Remix is a new framework, there isn't much history to it. It was released in 2021 as open source and has since then been gaining popularity. It was acquired by Shopify in 2022:

- 2021: released as open source.
- 2022: acquired by Shopify.
- 2023: Remix 2.0 released.

## Main Features

As stated, Remix is built on top of React Router and can be said to be four things:

1. A compiler.
2. A server-side HTTP handler.
3. A server framework.
4. A browser framework.

The purpose of Remix is to be a JavaScript full-stack framework. It can take care of routing, data fetching, and rendering on the server and the client. It is not a Static Site Generator(SSG) framework like Next.js and other modern JavaScript frameworks. Remix, by default, renders the page on the server on the first request. Once Remix has served the document to the browser, it "hydrates" the page with the browser build's JavaScript modules. Co-creator of Remix, Michael Jackson, has said <em>"Remix is basically all of our opinions about web development, built on top of React Router". It takes a lot of inspiration from old PHP frameworks and also from Ruby on Rails.</em> Ref: [thenewstack.io - Remix takes on Next.js in Battle of the React Frameworks](https://thenewstack.io/remix-takes-on-next-js-in-battle-of-the-react-frameworks/)

### Primary Purpose

The goal of Remix is to ease the development of web applications that are fast, scalable and easy to maintain. It streamlines many aspects of web development, from routing and data loading to server-side rendering and caching.

### Strengths

<strong>Performance:</strong> Remix is designed to optimize performance out-of-the-box. It does this by supporting features like automatic code splitting and efficient data loading patterns, which help in reducing the load time of web applications.

<strong>Developer Experience:</strong> Remix reduces the boilerplate code needed to get started with a new project. It offers a simple approach to routing, data fetching, and form handling, which simplifies the development process.

<strong>Enhanced User Experience:</strong> By supporting server-side rendering (SSR), developers can build applications that are not just fast but also SEO-friendly. This enhances the overall user experience, as users benefit from fast, interactive pages.

<strong>Integration with the Web Platform:</strong> Remix embraces the web platform and web standards, using standard browser features and APIs to manage navigation, caching, and data management.

## Weaknesses

<strong>Small community: </strong> Compared to other more mature frameworks, Remix still has a relatively small community.

<strong>No SSG: </strong> Remix does not offer Static Site Generation out-of-the-box, so it may not be as suitable for smaller blog type web apps or landing pages.

### Unique features

<strong>Nested Routing:</strong> Remix supports nested routing, that allows developers to better organize their applications.

<strong>Data Loading:</strong> Remix provides a unique approach to data loading and mutations.

<strong>Error Handling:</strong> Remix has built-in error boundaries that make handling errors at different levels of the application easy.

<strong>Form handling: </strong> Remix has a built-in Form component that simplifies form handling.

## Market Comparison

It makes sense to compare Remix to Next.js since both are JavaScript frameworks with server-side rendering (SSR) functionality.

### Remix vs. Next.js

Both frameworks offer excellent support for SSR, which gives better performance and SEO. Next.js has Static-Site-Generation(SSG) functionality which Remix does not have out-of-the-box, but it can be enabled using a package like [remix-ssg](https://github.com/jacob-ebey/remix-ssg), or by clever use of caching.
Next.js has been acclaimed for its ease of use and developer-friendly features. Remix, however, focuses on improving the developer experience by offering a more integrated approach to routing, data fetching, and form handling, which can reduce boilerplate code.
Next.js has a wide ecosystem and has been around longer, which might offer more plugins and integrations.
Remix is praised for it's focus on web standards and the tie between server and frontend may make more backend focused developers feel more at home.

## Getting Started

The features of Remix are maybe best demonstrated by examples, and the following examples will showcase some of the unique and elegant features of Remix.

There are many community templates available for Remix which include TypeScript setups, databases, authentication and more available on the [Remix Resources page](https://remix.run/resources?category=templates), but in the following examples we will use a minimal starter template, using TypeScript, to get you started.

### Install and run your first project

Use the Remix CLI to create a new project:

```sh
npx create-remix@latest
```

This command installs the following packages:
@remix-run/node, @remix-run/react, @remix-run/serve, isbot@4, react, react-dom as runtime dependencies, and @remix-run/dev as a development dependency.

Start the development server:

```sh
npm run dev
```

You'll now be able to access your very basic Remix app at `http://localhost:3000`.

The apps starting point is the `app/root.tsx` file. If you open this file you'll see a collection of elements that are used to define the layout and structure of the app. You can start editing this file to see the changes in the browser.

```tsx
// app/root.tsx

import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div>This is some content added as an example</div>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
```

### Routing

When examining the root.tsx file, notice the `<Outlet />` element. This is where the "routed content" will be rendered.
To define a route simply create a component file in the `app/routes` directory. The file name will be the route path.
See the example under.

```tsx
// app/routes/example.tsx

import { Link } from "@remix-run/react";

function Example() {
  return (
    <div>
      <h1>Hi from the Example Page</h1>
      <Link to={"/"}>Go back to the home page</Link>
    </div>
  );
}

export default Example;
```

You can now visit `http://localhost:3000/example` to see the page. The example page will be rendered in place of the `<Outlet />` element in root.tsx.

The `<Link>` element is used to navigate between routes. It's important to use the `<Link>` element instead of the standard anchor tag to ensure that the app is a single page application and the browser doesn't need to reload the page when navigating between routes.

### Nested routes

You can create nested routes using dot delimiters in the file names. As an example we can create the file `example.contact.tsx`

```tsx
// app/routes/example.contact.tsx

function Contact() {
  return (
    <div>
      <h2>Contact information</h2>
      <p>Email: developer@test.com</p>
    </div>
  );
}

export default Contact;
```

Now, in `example.tsx` we can add the `<Outlet />` element to enable rendering of the nested route.

```tsx
// app/routes/example.tsx

import { Link, Outlet } from "@remix-run/react";

function Example() {
  return (
    <div>
      <h1>Hi from the Example Page</h1>
      <Link to={"/"}>Go back to the home page</Link>
      <Outlet />
    </div>
  );
}

export default Example;
```

If you now visit `http://localhost:3000/example/contact` you will see the contact information component rendered in the `<Outlet />` element.

### Dynamic routes

Dynamic routes are defined using the `$` sign in the file name.
E.g. file name `example.$id.tsx` gives the route <em>/example/123</em>, or whatever you chose to put in place of `$id`. The value of `$id` can be retrieved using the `useParams` hook.

```tsx
// app/routes/example.$id.tsx

import { useParams } from "@remix-run/react";

function ExampleItem() {
  const { id } = useParams();
  return <div>Example Item #{id}</div>;
}

export default ExampleItem;
```

Now, try visiting `http://localhost:3000/example/123`.

### Data fetching

Data fetching is done with a `loader` function that runs on the server before the page is served to the browser. It can be compared to `getServerSideProps` in Next.js
Here's the example page extended with data loading capability:

```tsx
// app/routes/example.tsx

import { Link, useLoaderData } from "@remix-run/react";

// this is just a TypeScript type definition, and has nothing to do with Remix
type todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

async function loader() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  return data;
}

function Example() {
  const todos = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>Hi from the Example Page</h1>
      <Link to={"/"}>Go back to the home page</Link>
      <h2>My To-do List</h2>
      <ul>
        {todos.map((todo: todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export { loader };

export default Example;
```

In this example `useLoaderData` "hooks" in to the `loader` function defined in the example.tsx file and stores the data in the constant `todos`, and you can "map out" the data in JSX like you normally would in a React app.

### React

You can use all the regular React hooks also. Here's an example using the `useState` and `useEffect` hook. This will set the `todo` state, using the `useEffect` hook, when `data` is set with the `useLoaderData` hook.

```tsx
// app/routes/example.tsx

import { Link, useLoaderData } from "@remix-run/react";
import { useState, useEffect } from "react";

type todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

async function loader() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  return data;
}

function Example() {
  const data = useLoaderData<typeof loader>();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(data);
  }, [data]);

  return (
    <div>
      <h1>Hi from the Example Page</h1>
      <Link to={"/"}>Go back to the home page</Link>
      <h2>My To-do List</h2>
      <ul>
        {todos.map((todo: todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export { loader };

export default Example;
```

## Conclusion

Remix is a fresh new take on React development with it's server-side focus. Since it it's built on the [Web Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) it enables Remix to run on any Node.js server. It can be deployed to Vercel, Netlify, etc, and also non-Node.js environments. This gives you more freedom of choice for your production environment compared to the "main competitor" Next.js.

Compared to Next.js, Remix has a smaller community and therefore it may be harder to find resources to help in learning it, but it's gaining traction and is owned by Shopify which gives it the financial backing it needs to be a big player in the world of React frameworks in the years to come. Shopify has also stated that <em>Remix is now the recommended way to build Admin apps on Shopify.</em> Ref: [Shopify](https://shopify.engineering/shopifys-platform-is-the-web-platform)

## Credit(s)

Author - Kim Rune Møller [GitHub: kimrm](https://github.com/kimrm)

## References

- [Remix website](https://remix.run)
- [Remix docs](https://remix.run/docs/en/main)
- [Shopify](https://shopify.engineering/shopifys-platform-is-the-web-platform)
- [thenewstack.io - Remix takes on Next.js in Battle of the React Frameworks](https://thenewstack.io/remix-takes-on-next-js-in-battle-of-the-react-frameworks/)

## Additional Resources

- [Remix 30m tutorial](https://remix.run/docs/en/main/start/tutorial)
- [Remix vs. Next.js](https://remix.run/blog/remix-vs-next)
