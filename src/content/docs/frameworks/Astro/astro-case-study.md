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

This case study won't be able to cover everything there is to know about Astro, but will give a brief introduction to the framework, its uniqueness, and some core functionalities. By reading this, you should have an understanding on how Astro works, and how to get started with core concepts like Astro islands and components.

## Introduction

**This is how Astro explains itself:**

_"Astro is a web framework that takes the best from the early internet (think HTML and CSS) and puts it to work in a next-gen architecture to make every Astro site, and the whole web, faster. Whereas most frameworks today are designed for web apps, Astro is built for content-rich sites where performance matters most. Pull content from anywhere, deploy everywhere, and let's build the web we want, together."_

**How Astro works in simple terms:**

Unlike a lot of frameworks that are created based on Javascript, Astro produces zero Javascript by default. It emphasizes an HTML-first design philosophy, and renders your entire page to static HTML during the build. This all results in much faster load times, since the browser reads the website as static HTML. Should client-side Javascript be necessary (let's say shopping carts, image carousels etc.), Astro will only load in the specific components and dependencies needed for the job.

## History of Astro

Astro is an MIT-licensed open source build tool, and the company behind it, "The Astro Technology Company", was established in 2019 by Fred Schott. Astro as a development tool was created by Fred Schott, Nate Moore and a group of other contributors. It first released in beta, June 8, 2021, and launched its official 1.0 release on August 9, 2022.

## Components and Islands

### Components

Astro components are defined as building blocks in any Astro Project, identifiable by their .astro file extension.

<img src="/static/images/astro/astro_extension.png" alt="Astro extension in VS Code" width="100%">

The core concept of components is that they **do not render on the client**, but rather at build-time or on-demand using server-side rendering (SSR). This approach ensures that the components are pre-rendered for the client using the website, leading to faster page loads and improved performance.

Components are not limited to small sections of code and can be entire web pages. In an Astro project, what would typically be an .html file becomes an .astro file. These .astro files can also contain additional components.
This modular approach is comparable to other development practices. An example is a Javascript file that you chose to modularize into smaller fractions of code. These fractions are exported from their source files, and then imported into a central file.

<img src="/static/images/astro/astro-example1.png" alt="Astro example 1" width="100%">
<img src="/static/images/astro/astro-example2.png" alt="Astro example 2" width="100%">

**Let's take a look at the images above to demonstrate this**

In the 'src/pages' directory of this Astro project, we find the index.astro file, which is the entry point to our website, and also serves as an Astro component. The 'src/components' directory contains Header.astro and Footer.astro (Astro uses "Pascal Case" as naming convention for components), which define the upper and lower sections of the website, respectively.

These components are structured within their individual files. In the index.astro file, these components are imported and placed at the desired locations.
In larger projects with multiple pages, the same header and footer components can be reused across all pages, by importing them into each .astro page component. This modular structure is an example of Astro's component-based architecture.

This is, of course, an overly simplified example of using Astro components (but a valid one), since these examples contain nothing but a little static HTML. In a real-life scenario, these sections of code would probably contain some styling, various scripts for interactivity, dynamic navigation changes, and more.

<img src="/static/images/astro/astro-example3.png" alt="Astro example 3" width="100%">

**So let's have a look at that:**

Components also include support for `<style>` and `<script>` tags directly within .astro files. This allows for various languages and tools, such as SCSS —a CSS pre-processor that uses SASS syntax, or even JavaScript frameworks like React or Vue within script tags.
Because we isolate parts of the code with components, we can target HTML elements directly without needing to rely on class names or IDs, providing a more straightforward approach to styling and scripting.

In our example, we have applied light styling to the header element and its child navigation list items using SCSS syntax. For interactivity, we loop over the list-items, and apply color changes upon mouse hover events.

Besides working with HTML, CSS, and Javascript in an isolated "environment", which could result in easier management, these components will also be pre-rendered for the browser, resulting in faster load times, and the user is not relying on Javascript, since this in now converted to static HTML.

### Islands

Astro islands are in themselves components, but there is a difference. A normal component does not necessarily need any Javascript to work, and could be pure static HTML that has been rendered on the server before it reaches the client. An island on the other hand is designed to be interactive and require client-side JavaScript to function. Islands also use Astro's _partial hydration feature_ which is unique by only making that island "hydrated" or "active" with Javascript when necessarily.

```
// Lets say this was your regular Astro component:

    <MyComponent />
```

```
// This is now an Astro island:

    <MyComponent client:load/>
```

Turning any regular Astro component into an interactive island, only requires a `client:*` directive. Even though Astro has many different directive-types, the "client" is used for Islands, and works like this:

`client:load:` Used by UI elements requiring immediate interaction as the page loads. Suitable for essential, visible components like interactive buttons or input forms.

`client:idle:` Delays loading until after the page has fully loaded and the browser is idle. Ideal For elements that are not critical for the immediate interaction.

`client:visible:` This directive waits to load and hydrate the component until it actually enters the user's viewport. Perfect for content lower on the page, or components that uses a lot of resources, but not always likely to be interact with.

`client:media:` Loads components based on CSS media query conditions, perfect for adapting to various screen sizes and enhancing responsive designs. A "hamburger menu"-toggle that's only relevant on mobile devices is a good example.

`client:only:` Skips server-side rendering entirely, directly rendering components in the browser. Essential for integrating client-specific frameworks like React or Vue, ensuring compatibility and performance.

![Astro logo](https://res.cloudinary.com/wedding-website/image/upload/v1596766231/islands-architecture-1.png "Astro islands")
Source: [Islands Architecture: Jason Miller](https://jasonformat.com/islands-architecture/ "Article about Astro islands")

We can think of islands as "mini-apps" or "widgets" on the website. They work in isolation inside an Astro project, or more precisely, in isolation from other islands. Imagine a website with different sections of content like the image above. The banner on top, the sidebar visible for larger displays, or the image carousel; all of these are perfect as islands. However, using different directives could be smart since they may not always be displayed or interacted with right away. The banner is high priority, and `client:load` should be ideal. The sidebar will probably only be visible by larger devices, so `client:visible` or `client:media` might be more appropriate. The image carousel is probably a bit further down on the page (and maybe not visible right away), so `client:visible` could be perfect, allowing other content gets higher priority during page load.

## Getting started with Astro

Given the rapidly evolving nature of development, it's recommended to check out the "Getting Started" section in the Astro documentation. This will ensure the latest instructions on how to install and set up your project with Astro. Procedures outlined here could become outdated shortly.

**Official documentation:** https://docs.astro.build/en/getting-started/

## Learning Resources

There won't be a full "how to learn Astro" guide here, but some resources worth checking out, if you found this case study intriguing:

**Official Documentation:** An obvious (but good one). Start with Astro's comprehensive documentation, which covers everything from basic setup to advanced features.

- https://docs.astro.build

**Astro in 100 seconds:** The title says it all. A short and concise video that explains Astro quick and easy.

- https://www.youtube.com/watch?v=dsTXcSeAZq8

**Creating HTML template layouts:** Kevin Powell is a content creator which normally focus on vanilla HTML, CSS, and JS, but shows how Astro components can create layouts on pages.

- https://www.youtube.com/watch?v=o7iQAF2EvUU

## References

- **Official website:** https://astro.build/
- **Official website / press:** https://astro.build/press/
- **First blog posts:** https://astro.build/blog/introducing-astro/
- **Github:** https://github.com/withastro/astro
- **DEV Community:** https://dev.to/sm0ke/astro-framework-resources-free-starters-3jae
- **LogRocket:** https://blog.logrocket.com/astro-adoption-guide/
- **Linkedin / Codingmart Technologies:** https://www.linkedin.com/pulse/astro-all-in-one-web-framework-codingmart-technologies/
- **Jason Miller - Blog** https://jasonformat.com/islands-architecture/
- **Crunchbase - Organization info:** https://www.crunchbase.com/organization/astro-0f1c
