---
title: Astro
author: Bjørnar Heian Langved <bLangved>
keywords: development platforms, web-framework
tags: Development Platforms
---

![Astro logo](https://cdn.buttercms.com/xrVbfdR5TBy4iTaY4xl7 "Astro logo with spacey background")

# "There’s a simple secret to building a faster website — just ship less."

_- Fred Schott & Nate Moore (Founders of Astro)_

## Introduction

**This is how Astro explains itself:**

_"Astro is a web framework that takes the best from the early internet (think HTML and CSS) and puts it to work in a next-gen architecture to make every Astro site, and the whole web, faster. Whereas most frameworks today are designed for web apps, Astro is built for content-rich sites where performance matters most. Pull content from anywhere, deploy everywhere, and let's build the web we want, together."_

<br>

**How Astro works in simple terms:**

Unlike a lot of frameworks that is created based on Javascript, Astro produces zero Javascript by default. It emphasizes on HTML-first design philosophy, and renders your entire page to static HTML during the build. This all results in much faster load times, since the browser reads the website as static HTML. Should client-side Javascript be necessary (lets say shopping carts, image carousels etc), Astro will only load in the specific components and dependencies needed for the job.

## History of Astro

## Islands and Components

### Islands

Astro "Islands" are interactive UI components that runs in isolation in an Astro project, or more precisely , it runs in isolation from other Islands. Imagine you have a static, server-rendered HTML page and at the top of the site, you probably have a banner. The banner contains a logo, a searchbar and some navigation for your site, and this section is probably the same across your whole website. This could be ideal as an Island.

![Astro logo](https://res.cloudinary.com/wedding-website/image/upload/v1596766231/islands-architecture-1.png "Astro islands")
Source: [Islands Architecture: Jason Miller](https://jasonformat.com/islands-architecture/ "Article about Astro islands")

### Components

Astro "Components" are defined as building blocks in any Astro Project, and can be spotted with the .astro extension.
![Astro extension](/static/images/astro_extension.png "Astro extension in VS Code")
The core concept of Components is that they **do not render on the client**, but rather at build-time or on-demand using server-side rendering (SSR).
<br><br>
Components are not limited to small sections of code, and can be entire pages. Your landing/home page would normally be a .astro file, and inside that file, you could import other components.
It is easy to compare it to a large Javascript file that you chose to modularize into smaller "fractions" of code. You then export those code blocks from their respective files, and import them into the "main" Javascript file.

## Getting started with Astro

- **Official documentation:** https://docs.astro.build/en/getting-started/

## References & Learn more

- **Official website:** https://astro.build/
- **Official website / press:** https://astro.build/press/
- **First blog posts:** https://astro.build/blog/introducing-astro/
- **Github:** https://github.com/withastro/astro
- **DEV Community:** https://dev.to/sm0ke/astro-framework-resources-free-starters-3jae
- **LogRocket:** https://blog.logrocket.com/astro-adoption-guide/
- **Linkedin / Codingmart Technologies:** https://www.linkedin.com/pulse/astro-all-in-one-web-framework-codingmart-technologies/
- **Jason Miller - Blog** https://jasonformat.com/islands-architecture/
