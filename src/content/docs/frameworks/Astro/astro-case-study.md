---
title: Astro
author: Bjørnar Heian Langved <bLangved>
keywords: development platforms, web-framework
tags: Development Platforms
---

![Astro logo](https://cdn.buttercms.com/xrVbfdR5TBy4iTaY4xl7 "Astro logo with spacey background")

# "There’s a simple secret to building a faster website — just ship less."

_- Fred Schott & Nate Moore (Founders of Astro)_

## Summary

This case study won't be able to cover everything there is to know about Astro, but give a brief introduction to the framework, it's uniqueness, and some core functionalities. By reading this, you should have an understanding on how Astro works, and how to get started with core concepts like Astro Islands and components.

## Introduction

**This is how Astro explains itself:**

_"Astro is a web framework that takes the best from the early internet (think HTML and CSS) and puts it to work in a next-gen architecture to make every Astro site, and the whole web, faster. Whereas most frameworks today are designed for web apps, Astro is built for content-rich sites where performance matters most. Pull content from anywhere, deploy everywhere, and let's build the web we want, together."_

<br>

**How Astro works in simple terms:**

Unlike a lot of frameworks that is created based on Javascript, Astro produces zero Javascript by default. It emphasizes on HTML-first design philosophy, and renders your entire page to static HTML during the build. This all results in much faster load times, since the browser reads the website as static HTML. Should client-side Javascript be necessary (lets say shopping carts, image carousels etc), Astro will only load in the specific components and dependencies needed for the job.

## History of Astro

Astro is an MIT-licensed open source build tool, and the company behind it, "The Astro Technology Company" was established in 2019 by Fred Schott. Astro as a development tool was and created by Fred Schott and Nate Moore (with the help of the open-source community). It first released in beta, June 8, 2021, and launched officially it's 1.0 release on August 9, 2022.

## Islands and Components

### Islands

Astro "Islands" are interactive UI components that runs in isolation in an Astro project, or more precisely , it runs in isolation from other Islands. Imagine you have a static, server-rendered HTML page and at the top of the site, you probably have a banner. The banner contains a logo, a searchbar and some navigation for your site, and this section is probably the same across your whole website. This could be ideal as an Island.

![Astro logo](https://res.cloudinary.com/wedding-website/image/upload/v1596766231/islands-architecture-1.png "Astro islands")
Source: [Islands Architecture: Jason Miller](https://jasonformat.com/islands-architecture/ "Article about Astro islands")

### Components

Astro "Components" are defined as building blocks in any Astro Project, and can be spotted with the .astro extension.

<img src="/static/images/astro/astro_extension.png" alt="Astro extension in VS Code" width="100%">

The core concept of Components is that they **do not render on the client**, but rather at build-time or on-demand using server-side rendering (SSR).
<br>
Components are not limited to small sections of code, and can be entire pages. Your landing/home page would normally be a .astro file, and inside that file, you could import other components.
It is easy to compare it to a large Javascript file that you chose to modularize into smaller "fractions" of code. You then export those code blocks from their respective files, and import them into the "main" Javascript file.

<img src="/static/images/astro/astro-example1.png" alt="Astro example 1" width="100%">
<img src="/static/images/astro/astro-example2.png" alt="Astro example 2" width="100%">

**Lets take a look at the images above to demonstrate this** <br>

Inside /src/pages/ we have the index.astro file, which represents our website (this is now an Astro component as well). Inside /src/components, we have the Header.astro and Footer.astro, which represents the top and bottom section of the website. These component blocks are structured in their respective files, and imported into the index.astro file, and then declared where they are supposed to be placed in the DOM. If we had a larger project containing multiple pages, these components could be imported and declared the same way on all pages. <br>

This is of course an overly simplified example of using Astro components, since these examples contain nothing but a little static HTML. In a real life scenario, these sections of code would probably contain various scripts for interactivity and dynamic navigation changes and more.

<img src="/static/images/astro/astro-example3.png" alt="Astro example 3" width="100%">

**Lets go one step further with the image above**

Astro Components also support style and script tags inside the .astro files. These tags have support for various languages, like SCSS (a CSS preprocessor using SASS), or it could have been a Javascript framework inside the script tag. When using components, we isolate parts of the code. This also means that we can target HTML elements without giving them class names and id's, since these elements are only addressed inside the component. In this example, there is some light styling done on the header and list elements inside the nav. The script is looping over the list-items, and adding color changes on cursor hover.

Not only would this be much simpler to manage if either of these parts were in need of adjustments, but neither sections are rendered by the browser, so the website would be loaded in much faster. <br>

## Getting started with Astro

Since the state of development as a whole is in constant changes, please see the "getting started" in Astro docs for how to install and setup your project with Astro. If the procedure is written here, it could be outdated 1 week from now for all we know.

**Official documentation:** https://docs.astro.build/en/getting-started/

## References & Learn more

- **Official website:** https://astro.build/
- **Official website / press:** https://astro.build/press/
- **First blog posts:** https://astro.build/blog/introducing-astro/
- **Github:** https://github.com/withastro/astro
- **DEV Community:** https://dev.to/sm0ke/astro-framework-resources-free-starters-3jae
- **LogRocket:** https://blog.logrocket.com/astro-adoption-guide/
- **Linkedin / Codingmart Technologies:** https://www.linkedin.com/pulse/astro-all-in-one-web-framework-codingmart-technologies/
- **Jason Miller - Blog** https://jasonformat.com/islands-architecture/
- **Crunchbase - Organization info:** https://www.crunchbase.com/organization/astro-0f1c
