---
title: Svelte - A Case Study
keywords: development platforms, Svelte, JavaScript framework
tags: Development Platforms, Svelte, JavaScript framework
sidebar: development-platforms
permalink: development-platforms/svelte.html
folder: development-platforms
---

## Svelte - the magical disappearing UI framework

Svelte is a free and open-source front-end component framework in the JavaScript ecosystem. Created by Rich Harris in 2016, it has quickly become one of the most popular JavaScript frameworks available. Svelte differs from other JavaScript frameworks, mainly in how it ships components to the browser. Unlike React and Vue, which render components in a virtual DOM, Svelte compiles HTML templates into specialized, highly optimized code at build time, resulting in improved performance.

<p align="center">
  <img src="https://user-images.githubusercontent.com/30121693/217351206-6f367e60-d963-40a4-81f2-2f4ec54b910f.png" alt="Svelte messiah meme"/>
</p>

This case study aims to introduce the reader to Svelte as a development tool for building front-end applications. It does not aim to make the reader an expert in the framework by the end, but rather to provide the reader with the necessary information to form an informed opinion on whether or not Svelte will be a good development platform for them.

## Brief History

Released in November 2016, Svelte started out as an improved version of its predecessor, Ractive.js, with the addition of a compiler. Ractive.js was created at The Guardian as an in-house tool, but eventually, Rich Harris took it to the next level and released it to the world as Svelte. In April 2018, the developers released the second version to correct what they considered to be mistakes in the previous build. The major turning point came in April 2019 with the release of version 3. Svelte was re-built using TypeScript and had a completely rethought reactivity system, using its compiler to handle the heavy lifting behind the scenes. Svelte, like a magician who leads you to focus on a specific part of the show instead of the set-up of the trick, handles component loading and unloading out of view of the user instead of a virtual DOM.

The extension, SvelteKit, was announced in October 2020 and entered beta in March 2021. SvelteKit aims to be a more complete, or all-in-one, service. It is designed to make it easier to build fast, modern web applications by offering a set of tools for building, deploying, and scaling applications with Svelte. SvelteKit provides a standard architecture for building web applications and makes it easier to handle common tasks such as routing, code splitting, and asset handling. It also provides a set of features for building server-side rendering applications and integrates with modern tools such as webpack and Rollup. SvelteKit is designed to work seamlessly with the Svelte JavaScript framework and provides a familiar and consistent development experience for Svelte developers.

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

When a component is added to the DOM, Svelte sets up the reactive values for that component and starts observing changes to them. When the component is removed from the DOM, Svelte stops observing those values and cleans up any associated resources, freeing up more resources compared to other frameworks.

Svelte uses a system of reactive statements, such as {#if} blocks, to conditionally render or destroy a component based on its reactive values. For example, if a component has a reactive value visible that determines whether it should be displayed or not, you could use an {#if} block to conditionally render the component, like this:

```js
{#if visible}
  <HiddenComponent msg="Hello World!"/>
{/if}
```

When the value of visible changes, Svelte automatically updates the DOM to reflect the change and render or destroy the component as needed. This allows for easy control over component loading and unloading, and ensures that resources are only used when they are actually required, instead of constantly rendering every component like in some high-budget slideshow.

  <img src="https://user-images.githubusercontent.com/30121693/217382445-d5addc54-21a2-48bd-b613-dd9cac2e657b.png" alt="Svelte's key features"/>

## Strengths

Svelte is well known for its performance. It does not use a virtual DOM, instead, it generates HTML at build-time, resulting in a faster runtime performance compared to other popular frameworks. Its simple and intuitive syntax makes it easy to learn and use, leading to easier maintenance and scalability over time.

Svelte uses a reactive and declarative syntax for building UI components, making it easy to understand and use for developers of all skill levels. It also provides out-of-the-box support for server-side rendering, improving Search Engine Optimization and helping users with slow networks.

Svelte excels in creating Single Page Applications (SPAs). When building a SPA in Svelte, you typically use Svelte components to create a modular and reusable UI. The SPA handles navigation and data management, dynamically updating the content of the page based on user interactions and changes in data. This can be done using a routing library such as Svelte SPA Router.

Svelte also performs well when creating Multi Page Applications (MPAs). When building an MPA in Svelte, you would typically use a routing library such as Sapper to handle navigation between pages, with each page being built as a separate Svelte component. The components are loaded and unloaded based on the current URL, with data management handled separately for each page.

## Weaknesses

Svelte's weaknesses mainly stem from it being a relatively new framework compared to its largest competitors. It has a smaller community of developers and a more limited number of available resources. It is also not as widely used as other popular JavaScript frameworks, meaning that it may be more difficult to find experienced developers, tools, and resources to work with compared to competing frameworks. It also does not have an abundance of available packages, plugins and tools, which may prevent you from performing specific tasks or adding specific functionality to your apps.

As mentioned previously, Svelte uses a relatively simple syntax. It does, however, also have a very different approach to building web applications compared to other popular frameworks, mainly by not utilizing a virtual DOM. This can result in a steep learning curve, especially for experienced developers who are used to the virtual DOM approach.

In conclusion, while Svelte has some advantages over other frameworks, it also has its own set of limitations. Whether or not Svelte is the right choice for your project will depend on your specific requirements, the size and complexity of the project, and the experience and skill level of your development team. It may be best to consider using Svelte for smaller projects or as a part of a larger, more complex application built with other frameworks.

## Comparison

Although Svelte, React, Vue.js and Angular are all popular JavaScript frameworks for building web applications, they have some very different design philosophies, strengths and weaknesses depending on their use.

Svelte has a relatively simple syntax and a different approach to building web applications, making it relatively easy to learn. React has a steeper learning curve due to its use of a virtual DOM, although it has a large and supportive community. Vue.js has a similar learning curve to React, but with a simpler syntax. Angular has the steepest learning curve of the four frameworks, due to its complex syntax and larger feature set. They also all differ in scope, as Svelte is mainly meant for smaller applications, where as React and Vue are tailored towards medium to large-size applications which do not require many different pages. Angular on the other hand is tailored towards very large applications with many different views, pages and URLs.

<p align="center">
  <img src="https://user-images.githubusercontent.com/30121693/217382010-89301416-a474-42e3-a6e7-81b518ad4c0a.png" alt="React vs Svelte Syntax comparison meme"/>
</p>

Svelte has a performance advantage over the other frameworks, due to its ability to compile components into highly optimized code at build-time, reducing the need for a virtual DOM and resulting in faster runtime performance. React and Vue.js both use a virtual DOM, which can result in slower performance compared to Svelte. These do, however, have optimizations available to minimize the impact. Angular, being an all-in-one framework, also has a performance advantage compared to the other frameworks.

React has, without a doubt, the largest community of developers, as well as the largest number of available resources, including packages, plugins, and tools. Vue.js also has a large and growing community, while Svelte is a relatively new framework with a smaller community of developers. Angular has a large and mature community, but its syntax and complexity may make it less appealing to new developers.

Svelte is, however, increasing in popularity at an incredible rate. According to the [State of JavaScript Survey](https://2022.stateofjs.com/en-US/libraries/front-end-frameworks/), Svelte has had the highest percentage of interest since 2019 compared to its competitors. It also scores very high in awareness and retention, but lacks behind in usage. 

## Getting started with Svelte

- Installing
- Creating a component

It is recommended to install Svelte through a bundler or through Svelte's own `create-svelte` npm package.
Vite:
```bash
npm init vite@latest
```
This will initialize the Vite installer where you can choose a Svelte environment. Enter a project name when prompted and then select Svelte when prompted to select a framework. You can here also opt in to using TypeScript with Svelte if you wish.

create-svelte:
```bash
npm create svelte@latest myapp
```
Follow the install prompt and customize as needed.

### Creating your first component
Open the `App.svelte` file in the `/src/` folder of your install directory. This is the base file for your SPA and is where you will load and unload your components as necessary. If you installed Svelte with its default boilerplate code, you can take a look at the layout of the code.
`.svelte` files are built up usually of a `<script>`, a HTML and a `<style>` section. The script section is where the component related JavaScript goes, the HTML is where you handle the component logic and the style section is the styling specific to the component.
Navigate to the `/lib/` folder, or create it within the `/src/` directory. Create a new file called `Counter.svelte` and add the following boilerplate code:
```
<script>
  let count = 0
  const increment = () => {
    count += 1
  }
</script>

<button on:click={increment}>
  count is {count}
</button>
```

Inside `App.svelte`, add the following inside the `<main>` element:
```
<Counter />
```
This should initialize a new element in your DOM where you can click to increment a counter.
We can also add another button to `Counter.svelte`, like so:
```
<script>
  let count = 0
  const increment = () => {
    count += 1
  }
  const decrement = () => {
    count -= 1
  }
</script>

<button on:click={increment}>
  count is {count}
</button>
<button on:click={decrement}>
  count is {count}
</button>
```

This will give us another button to decrement the counter variable.
You've now created your first component!

### Passing props
Passing props in Svelte is incredibly easy. To utilize a prop in a component, you simply export it from the component file and use it where the component is called.
For example in `App.svelte`, we can call a component like so:
```
<main>
  <Greeting name={"Mike"}/>
</main>
```

In `Greeting.svelte`, we set up the prop:
```
<script>
  export let name
</script>

<div>
  Hello {name}!
</div>
```

Congratulations, you've passed a prop!
In your face, React.

## Summary

Svelte is a free and open source front-end component framework within the JavaScript ecosystem. Svelte differs from other JavaScript frameworks mainly in how the components are shipped to the browser. Where React and Vue render components in a virtual DOM, Svelte instead compiles HTML templates to specialized, highly optimized code at build-time, which in turn increases performance.

Key features include: no virtual DOM, reactive declarative syntax, small bundle size, built-in animations and transitions and server-side rendering, all while being easy to learn.

Svelte's main strength lies in creating `Single Page Applications` or SPAs. When building a SPA in Svelte, you would typically use the Svelte components to create a modular and reusable UI. The SPA would handle navigation and data management, dynamically updating the content of the page based on user interactions and changes in data.

Since it's release in 2016, Svelte has grown to become one of the most popular JavaScript frameworks available, as shown in the [State of JavaScript Survey](https://2022.stateofjs.com/en-US/libraries/front-end-frameworks/) because it is so simple to use compared to its competitors. This is also why web developers are starting to favor it while more and more companies are adopting it into their tech stack.

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
- Richard Dawkins
