---
title: Svelte - A Case Study
keywords: development platforms, Svelte, JavaScript framework
tags: Development Platforms, Svelte, JavaScript framework
sidebar: development-platforms
permalink: development-platforms/svelte.html
folder: development-platforms
---

## Svelte - the magical disappearing UI framework

Svelte is a free and open source front-end component framework within the JavaScript ecosystem. Created by Rich Harris in 2016, it has quickly risen to become one of the most popular JavaScript frameworks currently available. Svelte differs from other JavaScript frameworks mainly in how the components are shipped to the browser. Where React and Vue render components in a virtual DOM, Svelte instead compiles HTML templates to specialized, highly optimized code at build-time, which in turn increases performance.

<p align="center">
  <img src="https://user-images.githubusercontent.com/30121693/217351206-6f367e60-d963-40a4-81f2-2f4ec54b910f.png" alt="Svelte messiah meme"/>
</p>

This case study aims to introduce the reader to Svelte as a development tool to build front-end applications with and will not make the reader an expert in the framework by the end of the case study. It instead hopes to give the reader the tools necessary to form an informed opinion on whether or not Svelte will serve as a good development platform for them.

## Brief History

Released in November 2016, Svelte started out basically as nothing more than its predecessor, Ractive.js, but with a compiler. Ractive.js was originally created at The Guardian mainly as an in-house tool, but eventually Rich Harris took it a step further and released it to the world as Svelte. In April of 2018, the developers released the second version which set out to correct what the developers viewed as mistakes in the previous build. The major turning point came in April of 2019 when version 3 was released. Svelte had been rebuilt using TypeScript and completely rethought reactivity by using its compiler to orchestrate the heavy lifting behind the scenes. Much like a magician will lead you into focusing on an arbitrary part of the show rather than the actual set up of the trick, Svelte does the same by handling component loading and unloading out of the view of the user instead of a virtual DOM.

The extension, SvelteKit, was announced in October 2020 and entered beta in March 2021. 

## Features

The key features of Svelte are:

- No virtual DOM
  - Omitting a virtual DOM results in faster performance compared to other popular frameworks
- Reactive Declarative Syntax
  - Svelte uses a reactive and declarative syntax for building UI components, which makes it easy to understand and use for developers of all skill levels.
- Small bundle size
  - This makes it an ideal choice for lightweight applications or for use on slow networks.
- Built-in animations and  transitions
  - Includes built-in support for animations and transitions, allowing developers to easily add animations to their applications without requiring additional libraries or plugins.
- Server-side Rendering
  - Supports server-side rendering, making it easy to optimize the performance of applications for search engines and users with slow networks.
- Easy to learn
  - Svelte has a simple and intuitive syntax, making it easy to learn and use, even for developers new to web development.

When a component is added to the DOM, Svelte sets up the reactive values for that component and starts observing changes to them. When the component is removed from the DOM, Svelte stops observing those values and cleans up any associated resources. This frees up more resources compared to other frameworks.

Svelte uses a system of reactive statements, such as `{#if}` blocks, that can conditionally render or destroy a component based on its reactive values. For example, if a component has a reactive value `visible` that determines whether it should be displayed or not, you could use an `{#if}` block to conditionally render the component like so:

```js
{#if visible}
  <HiddenComponent msg="Hello World!"/>
{/if}
```

When the value of `visible` changes, Svelte will automatically update the DOM to reflect the change and render or destroy the component as needed. This allows for easy control over component loading and unloading, and ensures that resources are only used when they are actually needed, instead of constantly rendering every component like some high-budget slideshow.

## Strengths

Svelte is most known for its performance. Because it does not use a virtual DOM and instead generates HTML at build-time, it has a faster runtime performance compared to other popular frameworks. It also has a simple and intuitive syntax, which makes it easy to learn and use. This in turn also means Svelte applications are easier to maintain and scale over time.

Svelte uses a reactive and declarative syntax for building UI components, which makes it easy to understand and use for developers of all skill levels. It also includes out-of-the-box support for server-side rendering, making it easy to optimize the performance of applications built with it. This helps Search Engine Optimization as well as users with slow networks.

Its main strength lies in creating `Single Page Applications` or SPAs. When building a SPA in Svelte, you would typically use the Svelte components to create a modular and reusable UI. The SPA would handle navigation and data management, dynamically updating the content of the page based on user interactions and changes in data. This is often done together with a `router` such as [Svelte SPA Router](https://github.com/ItalyPaleAle/svelte-spa-router).
Svelte does, however, also perform quite well when creating `Multi Page Applications`, or MPAs. When building an MPA in Svelte, you would typically use a routing library such as Sapper to handle navigation between pages, and each page would be built as a separate Svelte component. The components would be loaded and unloaded based on the current URL, and data management would be handled separately for each page.

## Weaknesses

Svelte's weaknesses mainly stem from it being a relatively new framework compared to its largest competitors. It has a smaller community of developers and a more limited number of available resources. It is also not as widely used as other popular JavaScript frameworks, meaning that it may be more difficult to find experienced developers, tools, and resources to work with compared to competing frameworks. It also does not have an abundance of available packages, plugins and tools, which may prevent you from performing specific tasks or adding specific functionality to your apps.

As mentioned previously, Svelte uses a relatively simple syntax. It does, however, also have a very different approach to building web applications compared to other popular frameworks, mainly by not utilizing a virtual DOM. This can result in a steep learning curve, especially for experienced developers who are used to the virtual DOM approach.

Lastly, Svelte is best suited for smaller and simpler applications, and may become insufficient for applications that require a large number of components or complex data management.

## Comparison

Although Svelte, React, Vue.js and Angular are all popular JavaScript frameworks for building web applications, they have some very different design philosophies, strengths and weaknesses depending on their use.

Svelte has a relatively simple syntax and a different approach to building web applications, making it relatively easy to learn. React has a steeper learning curve due to its use of a virtual DOM, although it has a large and supportive community. Vue.js has a similar learning curve to React, but with a simpler syntax. Angular has the steepest learning curve of the four frameworks, due to its complex syntax and larger feature set. They also all differ in scope, as Svelte is mainly meant for smaller applications, where as React and Vue are tailored towards medium to large-size applications which do not require many different pages. Angular on the other hand is tailored towards very large applications with many different views, pages and URLs.

<p align="center">
  <img src="https://user-images.githubusercontent.com/30121693/217382010-89301416-a474-42e3-a6e7-81b518ad4c0a.png" alt="React vs Svelte Syntax comparison meme"/>
</p>

Svelte has a performance advantage over the other frameworks, due to its ability to compile components into highly optimized code at build-time, reducing the need for a virtual DOM and resulting in faster runtime performance. React and Vue.js both use a virtual DOM, which can result in slower performance compared to Svelte. These do, however, have optimizations available to minimize the impact. Angular, being an all-in-one framework, also has a performance advantage compared to the other frameworks.

React has, without a doubt, the largest community of developers, as well as the largest number of available resources, including packages, plugins, and tools. Vue.js also has a large and growing community, while Svelte is a relatively new framework with a smaller community of developers. Angular has a large and mature community, but its syntax and complexity may make it less appealing to new developers.

Svelte is, however, increasing in popularity at an incredible rate. According to the [State of JavaScript Survey](https://2022.stateofjs.com/en-US/libraries/front-end-frameworks/), Svelte has had the highest percentage of interest since 2019 compared to its competitors. It also scores very high in awareness and retention, but lacks behind in usage. 

## Summary

Summarise the content and highlight the relevance of the product to a web developer.

https://2022.stateofjs.com/en-US/libraries/front-end-frameworks/

![meme](https://user-images.githubusercontent.com/30121693/217350618-46a4aa69-c4c4-4f13-9c9b-c2156b1f48cb.png)

### Credits

- Eric Pretzinger (pretzL)

#### References

- https://svelte.dev/
- https://en.wikipedia.org/wiki/Svelte
- https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started
- https://subscribe.packtpub.com/why-use-svelte-for-your-next-javascript-project/#:~:text=Svelte%20is%20a%20modern%20JavaScript,Vue%2C%20or%20any%20other%20frameworks.
- https://2022.stateofjs.com/en-US/libraries/front-end-frameworks/
- https://ractive.js.org/
