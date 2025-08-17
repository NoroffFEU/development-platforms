---
title: Next.JS for fullstack 
author: Andre Strøm <Andlie94>
keywords: development platforms, Next Js, Backend, Frontend, Fullstack
tags: Development Platforms, Next Js, Frameworks, Fullstack, React, Vue, Vercel
---
# Next.js: A complete framework for web development
## Intro

In a world where everything needs to happen fast, few things evolve faster than technology. That’s why there are so many developer tools available on the market. These tools are designed to make it easier and faster for us developers to do our jobs.

In this case study, I will focus on one of these developer tools — namely Next.js.
Next.js is an open source React framework developed by Vercel for full stack development. Next.js supports frontend and backend functionality, such as API routes and server-side rendering.

With Next.js, it becomes easier for developers to write, optimize, and maintain clean and efficient code.

Next.js offers a range of features including routing, server-side rendering, API routes, built-in build tools, CSS support, and much more — all of which collectively improve the development process.

In this case study we are going through Next.js history – a tutorial how to use it - swot analyses – competition in the same market, the future for Next.js and a summary. 

## History and updates

2016 
Next.js was first introduced in the fall of 2016 by Vercel. Next.js was developed by Guillermo Rauch, CEO of Vercel. Next.js was initially introduced as a frontend tool designed to make it easier for developers to structure and streamline the development process, especially through server-side rendering and automatic routing.

2019
In February 2019, a major update was released that revolutionized how Next.js was used. Version 8 made it possible to split the code into smaller parts, which improved performance when developers and users requested the website. This meant that it was no longer necessary to load the entire code when requesting a page. This made the web application’s response faster.

Version 8 also improved support for preloading, which allowed the website to load in the background, making pages feel faster when clicking on a link.

In July 2019, version 9 was released. This update made it possible for developers to create API endpoints directly in Next.js without having to set up a separate server. Before this, developers had to set up their own servers, which could be challenging and take a long time to do. This also enabled Next.js to be used as a full stack tool.

Version 9 also introduced support for dynamic URL parameters (for example, /blog/[id]), which made routing much more flexible and powerful.

2020 
One of the main features of Next.js version 9.5 was Incremental Static Regeneration (ISR), which allowed consumers and developers to request the website without having to rebuild the entire page on every request. With this, only the necessary code was loaded to display the page. This made page requests faster.


2022
App routing came with version 13. This made it easier for developers to manage the organization of the website’s pages and menu options.

With React Server Components, the components were stored on a server instead of the user’s browser, which made the website load faster since there was less code to fetch.

Turbo was a new tool that makes the website build and update much faster when the developer is working on it. It saves time.

2024
With version 15, Next.js received full support for React 19, making it easier to handle asynchronous tasks in the app.

Turbopack became more stable and significantly faster, with improvements in startup time and page updates.

Better support for self-hosting was introduced, giving developers more control by allowing them to run Next.js applications on their own servers.


The development of Next.js has been an important part of technology within the web industry.
Next.js has made it easier to organize, update, and maintain websites.
Although it started as a frontend tool, it has evolved into a full stack tool.
It has made it easier to have control over both the backend and frontend parts of web development by offering the ability to create your own API endpoints without having to use another third-party developer tool.

## How to use Next.js

In this section, we will go through how to set up Next.js for your project, how routing works, adding some navigation, basic fetching, and setting up API routing. Finally, we will try to run the site.

Before you start with Next.js make sure to have installed node 18.18 or a later version.
After downloading Node.js, we can install Next.js in our project.
Start by writing in the terminal in vs code. 

```npx create-next-app@latest```

After entering the command, you’ll be prompted to install various options. You can simply select “yes” to all of them to ensure a complete setup.

What is your project named? my-app.
- Would you like to use TypeScript? No / Yes
- Would you like to use ESLint? No / Yes
- Would you like to use Tailwind CSS? No / Yes
- Would you like your code inside a `src/` directory? No / Yes
- Would you like to use App Router? (recommended) No / Yes
- Would you like to use Turbopack for `next dev`?  No / Yes
- Would you like to customize the import alias (`@/*` by default)? No / Yes
- What import alias would you like configured? @/*

Now, let’s go through how the routing function in Next.js works.
First, we create a folder called Main, and inside it, we have a page named page.tsx.
It’s important to name the pages page.tsx so that Next.js recognizes them as pages.
Below is an image showing the folder structure and how routing works.

<img src="https://i.imgur.com/uxbCy85.png" alt="Picture of folder structure of a Next.js project" width="300" />
<p><small>Source: Imgur user "Andlie94"</small></p>

Now we will look at how to create simple navigation within the site.
It is important to import the Link component, which we do using the import function.
The difference between version 12 and 13 is that you no longer need the ```<a>``` tag; now you can just use only the ```<Link>``` tag.

```js
//example of how to link works in Next.js
import link from 'next/link';
<Link href="/about">About us</Link>
```

Now we will look at how to fetch data in Next.js. In this example, we have taken a contact page as the starting point, using a test API
```js
//example of how to fetch in Next.js
'use client';

import { useState, useEffect } from 'react';

export default function ContactPage() {
  const [contactInfo, setContactInfo] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(data => setContactInfo(data));
  }, []);

  if (!contactInfo) return <p>loading...</p>;

  return (
    <main>
      <h1>Contact us</h1>
      <p><strong>phone:</strong> {contactInfo.phone}</p>
    </main>
  );
}
```
Then using Next.js, we don’t have to manually manipulate the DOM elements. This happens automatically when we use the useState hook. The useState hook in Next.js saves a lot of time because it eliminates the need to manually manipulate the DOM. React automatically updates the UI when the state changes.
This helps us save a lot of code and space.

Using Next.js also makes it easier for developers to maintain the code.
It makes it easier to expand with more states and hooks if you plan to scale your site significantly.

API routing in Next.js allows developers to have full control over the backend part of a full stack project.

When creating a project, we need to create a folder called pages/api. Files in this folder are treated as API endpoints, not as pages as mentioned earlier in the assignment.
This allows the APIs to handle requests such as GET, POST, DELETE.

What’s great about Next.js API routing is that you can have both backend and frontend in the same project.
What can be challenging with this is that you have to write a lot more code compared to using services like Supabase or Firebase. Supabase offers ready-made services, which means you have to write less code.

Now, we will show how to run the app and start a live server.
To run the web app locally, you write npm run dev in the terminal in VS Code.
This starts a development server with live reload.



## SWOT 

| **Strengths**                                                                                                                       | **Weaknesses**                                                                                                         |
|------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| - Good for search engine optimization, making the website easier to find in search results.                                        | - Too complex to use for small projects.                                                                              |
| - Keeps the code cleaner when building larger web applications.                                                                    | - Can be complicated for developers, with a steep learning curve.                                                     |
| - Reduces loading time since JavaScript code is split into smaller parts instead of loading all at once.                           | - Next.js often receives new updates, which can make maintenance challenging.                                         |
| - Simplifies the development process with automatic routing and code splitting, allowing developers to focus on functionality instead of setup. | - Not as flexible as competitors like Astro or Remix in handling data and rendering.                                  |
| - Plenty of documentation from third-party developers.                                                                             | - To use Next.js effectively, you must learn React.                                                                   |
|                                                                                                                                    | - On the backend side, you may need to write more code compared to simply setting up a backend with tools like Supabase. |

| **Opportunities**                                                                                                                  | **Threats**                                                                                                            |
|-----------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| - Ability to build both frontend and backend within the same project.                                                              | - High competition in the market with similar products (e.g., Nuxt.js, Astro, Gatsby).                                |
| - Developers can create their own API routes and backend functions without setting up a separate server.                           | - Rapid changes in technology make it difficult to keep up with competitors and the latest features.                   |
| - Full control over backend logic instead of relying on services like Supabase, allowing for exactly what you need without extra features. | - Other tools make backend development easier and require less code, such as Supabase, Firebase, or Appwrite.          |

## Competitors

In this section of the assignment, we will compare two competitors: Nuxt.js, which was launched in 2017, and Astro, a newer framework that was released in 2021.
We will look at the differences between Next.js, Nuxt.js, and Astro, and discuss when it might be appropriate to choose one framework over the others.
To make this clearer, I have created a table showing the main differences between the frameworks.

### Next.js vs Nuxt.js
|                        | NEXT.JS                           | NUXT.JS                            |
|------------------------|---------------------------------|----------------------------------|
| **Framework**           | React                           | Vue                              |
| **Developer Experience**| Great docs, larger community    | Fast setup, smaller but growing community |
| **Server-side Rendering (SSR)** | Yes                      | Yes                              |
| **Static Site Generation (SSG)** | Yes (via getStaticProps) | Yes (via Static mode)             |
| **API Routes**          | Built-in API support (/api routes) | Via Nitro server components    |
| **TypeScript Support**  | Fully integrated                | Possible, but needs more setup    |
| **Image Optimization**  | Built-in (next/image)           | Requires external packages        |
| **Code Splitting**      | Automatic                      | Automatic                        |
| **Popularity & Community** | Larger, more third-party resources | Smaller, but rapidly growing  |


It is an advantage to use Next.js if you are a developer familiar with React. If you are a developer who knows Vue, it might be better to use Nuxt.js. Next.js has a somewhat larger community, which means there is more third-party information available about the framework. Nuxt.js may require more configuration before getting started with your project.

### Next.js vs Astro

| Feature                  | NEXT.JS                             | Astro                                    |
|--------------------------|-----------------------------------|------------------------------------------|
| Framework                | React                             | Support React, Vue, Svelte, etc.         |
| Developer Experience     | Great docs, larger community      | Small, came out 2021                      |
| Server-side Rendering (SSR) | Yes                              | Limited support                           |
| Static Site Generation (SSG) | Yes (via getStaticProps)          | Yes                                      |
| API Routes               | Built-in API support (/api routes) | No support, needs 3rd party developer    |
| Flexibility              | Limited to React                  | High, can combine with more frameworks   |
| Image Optimization       | Built-in (next/image)             | Needs support from 3rd party developer   |
| Code Splitting           | Automatic                        | Yes, via island architecture and directives (client:*) |
| Popularity & Community   | Larger, more third-party resources | Smaller, but rapidly growing             |


Astro is suitable for web applications that are static and have heavy content. Astro has better performance than Next.js and is much more flexible than Next.js since you can use React, Vue, and Svelte. Astro requires more third-party support than Next.js. Since Astro was released in 2021, there is not as much third-party documentation available compared to Next.js.

## What will the future bring for Next.js

Next.js is currently one of the largest frameworks available today. There is a lot of competition in the market offering similar features to Next.js, such as API routing and server-side rendering. The question is whether Next.js will be overtaken by competitors or if it will continue to be among the market leaders.
My view is that investors and development teams will almost always seek methods to make the development process faster and more cost-effective. For Next.js to survive, it depends on smart updates that make the development process easier and more efficient.

As we can see, Next.js is still evolving with regular updates that simplify the development of web applications.

## Summary

Finally, we can conclude that Next.js is a very important tool for developers to have control over the entire development process. It makes it easier for developers to combine backend and frontend solutions in one and the same project. Next.js has helped speed up the development process with its integrated routing solutions. There is a lot of competition in the market, Next.js is still one of the best-documented web development tools available. Competition from other frameworks has contributed to Next.js continuing to develop. Even though there are many alternatives to Next.js, we can conclude that Next.js is one of the better solutions if you are used to developing with React and want to use a framework.

There are also good solutions when it comes to API routing in Next.js. What Next.js does well is that you can have both backend and frontend in the same project. The downside is that if the developers or the team consist of frontend developers, it can be difficult to learn backend since it requires a lot of code to set up API endpoints. In that case, a better solution might be to use Supabase, Firebase, etc., since these require less code. However, they can include many unnecessary features that you may not need. With Next.js, by building your own API, you can control exactly what you need. You are also responsible for security yourself.

What you choose is completely up to the developer, but throughout this case study, we have highlighted points on why you might choose Next.js and why you might alternatively choose other options or just use vanilla HTML, CSS, and JavaScript.

## Source:

(n.d.). Next.js Documentation. Retrieved August 4, 2025, from  https://nextjs.org/docs 

NEXT.JS (07.07.). The Story of Next.js: How One Framework Tried to Fix the Web. Retrieved August 4, 2025 from https://dev.to/homayunmmdy/the-story-of-nextjs-how-one-framework-tried-to-fix-the-web-5303

(31.01.). The Evolution of Next.js: From Inception to Cutting-Edge Framework. Retrieved August 4, 2025 from  https://dev.to/skyz03/the-evolution-of-nextjs-from-inception-to-cutting-edge-framework-2837?utm_source=chatgpt.com

(21.10.24.). Next.JS 15. Retrieved August 6, 2025, from  https://nextjs.org/blog/next-15

(n.d.). installation. Retrieved August 6, 2025, from https://nextjs.org/docs/app/getting-started/installation

(04.04.25) Top 5 alternatives to Next.js. August 6, 2025, from https://strapi.io/blog/alternatives-to-nextjs

(23.07.25) Next.js vs Remix. August 6, 2025, from https://www.geeksforgeeks.org/javascript/next-js-vs-remix/

(03.12.24) Astro vs. Next.js: Features, performance, and use cases compared August 6, 2025, from https://www.contentful.com/blog/astro-next-js-compared/

(n.d.) Installation,
August 11, 2025, from https://nextjs.org/docs/app/getting-started/installation

(n.d.) API Routes, august 12, 2025, from https://nextjs.org/docs/pages/building-your-application/routing/api-routes 
