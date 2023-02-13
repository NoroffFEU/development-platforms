---
title: Astro Case Study
keywords: development platforms, example project, category name
tags: Development Platforms, Example Project, Category Name
sidebar: development-platforms
permalink: development-platforms/astro-case-study.md
folder: development-platforms
---

# Astro

## Content

- Introduction
- Brief history
- Features
- Strengths
- Weaknesses
- Comparison
- Summary
- References

## Introduction

Astro is a fairly new and upcoming framework for building static websites. It allows you to use your preferred framework to build your website, which Astro then renders to static HTML with no JavaScript by default. Some JavaScript is usually unavoidable or required, however, Astro only loads JavaScript components when they are needed instead of loading the whole page with JavaScript right away. This results in a fast loading, high performing website.

Astro is designed to be a content-focused framework, rather than application-focused. The framework is therefore better suited for portfolios, blogs and similar content-based websites, rather than social networks, logged-in dashboards and other application-like projects.

## Brief History

Astro was first publicly introduced in June 2021. At that point the framework was still in beta and there were still missing features and bugs to be fixed.

In September 2021 Netlify became Astro’s official hosting partner, and their first corporate sponsor.

The 1.0 beta version was released in April 2022. This launch featured the stabilisation of all major API’s and they had no plans for any major changes before the official release of Astro 1.0.

In August 2022 the final 1.0 version was released. Since the first introduction and beta 16 months earlier, Astro had grown from an empty repo to over 30.000 users. This release included some new features and improvements.

Astro’s latest major release, version 2.0, was introduced in January 2023. With this release Astro wanted to tackle problems connected to working with Markdown, and they became the first major framework to deliver complete type-safety for Markdown and MDX. Astro 2.0 also introduces hybrid rendering. Previously Astro let you choose between static or server build output, but with this upgraded version you are able to combine them.

## Features

- **Astro Islands**: Astro Islands are based off of the island architecture pattern. This technique builds on _partial hydration_, only loading JavaScript when necessary.
- **Server-first**: Astro uses server-side rendering over client-side rendering as much as possible. Rendering a website on the server rather than the browser enables the page to load faster. Server-side rendering also improves the SEO for search engines.
- **No JavaScript by default**: As JavaScript is the slowest loading asset, Astro generates every page with no client-side JavaScript by default.
- **Customisable**: Astro supports Tailwind CSS, MDX, many more integrations as plugins.
- **Framework-agnostic**: Astro supports a range of frameworks. React, Svelte and Vue are just a few of the most popular. You are free to choose which framework you want and you can easily switch between them and even combine several different frameworks in the same project.

## Strengths

### Designed for performance

Astro's main focus is to build fast websites. The approach Astro uses to achieve this is called island architecture, which Astro introduces as Astro Islands. The general idea behind island architecture is rendering static content on the server and then implementing, “hydrating”, the page with islands of dynamic behaviour. Multiple different islands can exist on one page, but every island always renders in isolation. The benefit of this approach is mainly good performance, but also parallel loading. Different components can load in parallel but hydrate in isolation. This means that one component won't block the other from loading or having to wait for the other to load.

### Fully featured

Astro supports a range of different tools, libraries and frameworks. So, you are able to use a framework you are probably already familiar with and don’t necessarily have to learn a whole new syntax. Astro also has their own built-in language, so you don't even need to use an additional framework if you don't want to.

The flexibility to choose your own frameworks not only makes it easier for the developer, but it also reduces the problem of vendor lock-in. Meaning you are not dependent on a framework and it's easy to switch to new ones. This also makes it easier for new and upcoming frameworks to gain traction.

In addition to using your preferred framework, Astro gives you the opportunity to combine multiple different frameworks in the same application, using their plugin system. Astro also covers everything else you would need to build a website. This includes file-based routing, component syntax, data-fetching, build process, bundling and many more features. You can find all of Astro's integrations and plugins here (https://astro.build/integrations/).

### Accessible

Astros goal is to be accessible and easy to use for all developers. The framework was designed to feel approachable regardless of skills and experience. Astro‘s own language is designed to be less complex than other frameworks and languages. It is heavily influenced by HTML and all valid HTML snippets are already valid Astro components. So, either by choosing your preferred framework or just plain HTML, CSS and vanilla JavaScript, it is fully up to you as the developer how you want to build with Astro.

## Weaknesses

### Limited use cases

While most frameworks today are designed for creating applications, Astro was designed for creating content-based websites. Because Astro leverages server-side rendering over client-side rendering, Astro might not be ideal when creating bigger and more elaborate applications. Before using Astro you have to consider the scale and complexity of your project. This most likely leaves out projects like social media networks, logged-in admin dashboards and other more complex application-like projects. Another reason limiting the use case of Astro is the fact that, because the framework is relatively new, it is not an in-demand skill yet and likely won't be used in the workplace for a while, if ever.

## Comparison

### Next.js

The closest and most commonly compared framework to Astro is Next.js. Next.js is a full-stack framework for building web applications with React.

#### Similarities

- Both Astro and Next.js are static site generators. They both use the same folder structure, so creating and managing pages are similar.
- They both offer extensive support for React web applications. Next.js is specifically built for React, while Astro has an official integration for using React components.
- Both frameworks offer plugins and integrations to add and extend functionality.

#### Differences

- With Astro you are able to choose your framework and use several frameworks together. Next.js is strictly React only.
- Next.js uses SPA (Single Page Application) architecture while Astro uses MPA (Multi Page Application).

#### Astro vs Next.js

Astro offers a wide range of choices and flexibility when it comes to frameworks, tools and libraries. Next.js is limited to React only. But, because of this they provide an extensive set of React features.

Astro is a MPA framework, meaning most of the page's HTML is rendered on the server. Next.js is a SPA framework, which renders most of the HTML in the browser as a single JavaScript application. The main differences between MPAs and SPAs are site behaviour, SEO and performance. A SPA needs to run an entire JavaScript application just to render the HTML of the page, while an MPA doesn't require much, if any, JavaScript to run. This gives an MPA a much faster first page load than a SPA. However, once a SPA is fully loaded it may offer a faster second or third page load experience than an MPA. Because SPAs are rendered as a single JavaScript application, it lets the application control memory and state across multiple pages. This makes SPAs offer more powerful transitions across page navigation and the superior option when it comes to interactive and data-driven applications. Because of the fast first load experience, MPAs are best when it comes to content-full websites.

They both offer unique methods and features. Astro prioritises performance and simplicity, while Next.js prioritise powerful features. Astro would probably be the best option for static content-based websites, while Next.js would be better for more dynamic and interactive websites.

## Summary

### Credits

#### References
