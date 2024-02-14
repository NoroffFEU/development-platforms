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

Astro is an MIT-licensed open source build tool, and the company behind it, "The Astro Technology Company" was established in 2019 by Fred Schott. Astro as a development tool was created by Fred Schott, Nate Moore and a group of other contributors. It first released in beta, June 8, 2021, and launched its official 1.0 release on August 9, 2022.

## Islands and Components

### Islands

Astro "Islands" are interactive UI components that runs in isolation in an Astro project, or more precisely , it runs in isolation from other Islands. Imagine you have a static, server-rendered HTML page and at the top of the site, you probably have a banner. The banner contains a logo, a searchbar and some navigation for your site, and this section is probably the same across your whole website. This could be ideal as an Island.

![Astro logo](https://res.cloudinary.com/wedding-website/image/upload/v1596766231/islands-architecture-1.png "Astro islands")
Source: [Islands Architecture: Jason Miller](https://jasonformat.com/islands-architecture/ "Article about Astro islands")

### Components

Astro "Components" are defined as building blocks in any Astro Project, identifiable by their .astro file extension.

<img src="/static/images/astro/astro_extension.png" alt="Astro extension in VS Code" width="100%">

The core concept of Components is that they **do not render on the client**, but rather at build-time or on-demand using server-side rendering (SSR). This approach ensures that the Components are pre-rendered for the client using the website, leading to faster page loads and improved performance.
<br>
Components are not limited to small sections of code, and can be entire web pages. In an Astro project, what would typically be an .html file becomes an .astro file. These .astro files cam also contain additional Components.
This modular approach is comparable to other development practises. An example is a Javascript file that you chose to modularize into smaller fractions of code. These fractions are exported from their source files, and then imported into a central file.

<img src="/static/images/astro/astro-example1.png" alt="Astro example 1" width="100%">
<img src="/static/images/astro/astro-example2.png" alt="Astro example 2" width="100%">

**Lets take a look at the images above to demonstrate this** <br>

In the 'src/pages' directory of this Astro project, we find the index.astro file, which is the entry point to our website, and also serves as an Astro component. The 'src/components' directory contains Header.astro and Footer.astro, which define the upper and lower sections of the website, respectively. <br>

These Components are structured within their individual files. In the index.astro file, these components are imported and placed at the desired locations.
In larger projects with multiple pages, the same header and footer components can be reused across all pages, by importing them into each .astro page component. This modular structure is an example of the power of Astro's component-based architecture.

This is of course an overly simplified example of using Astro components (but a valid one), since these examples contain nothing but a little static HTML. In a real life scenario, these sections of code would probably contain some styling, and various scripts for interactivity, dynamic navigation changes and more.

<img src="/static/images/astro/astro-example3.png" alt="Astro example 3" width="100%">

**So let's have a look at that:**

Components also include support for < style > and < script > tags directly within .astro files. This allows for the use of various languages and tools, such as SCSS —a CSS pre-processor that uses SASS syntax, or even JavaScript frameworks within script tags.
Because we isolate parts of the code with Components, we can target HTML elements directly without needing to rely on class names or ID's, providing a more straightforward approach to styling and scripting. <br>

In our example, we have applied light styling to the header element and its child navigation list items using SCSS syntax. For interactivity, we loop over the list-items, and apply color changes upon mouse hover events. <br>

Besides from working with HTML, CSS and Javascript in an isolated "environment" which could result in easier management, these Components will also be pre-rendered for the browser, resulting in faster load times, and the user is not relying on Javascript, since this in now converted to static HTML.

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
