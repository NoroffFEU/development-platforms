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

- SPA vs MPA

Svelte is most known for its performance. Because it does not use a virtual DOM and instead generates HTML at build-time, it has a faster runtime performance compared to other popular frameworks. It also has a simple and intuitive syntax, which makes it easy to learn and use. This in turn also means Svelte applications are easier to maintain and scale over time.

Svelte uses a reactive and declarative syntax for building UI components, which makes it easy to understand and use for developers of all skill levels. It also includes out-of-the-box support for server-side rendering, making it easy to optimize the performance of applications built with it. This helps Search Engine Optimization as well as users with slow networks.

## Weaknesses

Svelte's weaknesses mainly stem from it being a relatively new framework compared to its largest competitors. It has a smaller community of developers and a more limited number of available resources. It is also not as widely used as other popular JavaScript frameworks, meaning that it may be more difficult to find experienced developers, tools, and resources to work with compared to competing frameworks.
As mentioned previously, Svelte uses a relatively simple syntax. It does, however, also have a very different approach to building web applications compared to other popular frameworks, mainly by not utilizing a virtual DOM. This can result in a steep learning curve, especially for experienced developers.
Lastly, Svelte is best suited for smaller and simpler applications, and may become insufficient for applications that require a large number of components or complex data management.

## Comparison

Compare the product to other products in the same category, if applicable.

- React
- Vue
- Angular

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
- https://2022.stateofjs.com/en-US/libraries/front-end-frameworks/
- https://ractive.js.org/
