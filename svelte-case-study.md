---
title: Svelte Case Study
keywords: development platforms, svelte, development, compiler, Web Framework
tags: Development Platforms, Svelte Project, Development
sidebar: development-platforms
permalink: development-platforms/svelte-product.html
folder: development-platforms
---

## Table of content
- [Introduction](#introduction)
- [Brief History](#brief-history)
- [Features](#features)
- [Setup](#setup)
- [Using Svelte](#using-svelte)
- [Strenghts](#strengths)
- [Weaknesses](#weaknesses)
- [Compared to react](#comparison)
- [Summary](#summary)
- [Credtis & Refrences](#credits)

## Introduction
Svelte is a javascript compiler, its similar to React, but react uses Virtual DOM and both provide a similar component-based architecture -- that means both enable a CDD bottom-up development, and both enable sharing their components between apps, via tools and platforms like [Github](www.github.com).

In this study case i will get into how to use it.

## Brief History
[Svelte](https://svelte.dev/) was created by Rich Harris. Svelte is a free and open source front end component framework / language, it is not a monolithic JavaScript library imported by applications. Instead, it compiles HTML templates to specialized code that manipulates the DOM directly. And was initial released / first commit on `26th November, 2016`.

- `26th November, 2016` The initial commit to the svelte Github repo.

- `29th November, 2016` The first stable version 1.0 was lunched.

- `29th November, 2017` Version 2.0 is released, major performance improvements and a new API for writing components.

- `5th March, 2018` Version 2.5 is released, with new features like context API and improved TypeScript support.

- `19th April, 2019` Svelte is written in TypeScript

- `3th September, 2019` Version 3.0 is released, with a rewritten compiler, improved performance and a new feature like reactive declarations and context API.

- `22th October, 2020` Svelte Summit, the first virtual confrence dedicated to Svelte took place.

- `1th December, 2020` SvelteKit was announced in a blog post. 

- `March 2021` SvelteKit entered beta.

- `December 2022` SvelteKit was released after two years in development.

## Features

Svelte's template syntax is easy to read and write, and allows you to create dynamic UI elements.

Svelte can be used for server-side rendering, which can improve the performance and accessibility.

Svelte provides efficient bundling and code splitting mechanism, which can help to reduce the size of your application and improve performance.

you can create CSS styles that are scoped to specific components, so they won't interfere with other parts of your application. This makes it easier to manage your styles and ensure they only apply where you want them to, without causing conflicts or unintended side effects.

## Setup

I am using [vite](https://vitejs.dev/) to create a new svelte project, there is other way's than vite like degit and then rollup would be the default, but im not gonna get into that. If you want a full-fledged app framework you can also use [SvelteKit](https://svelte.dev/docs) it will also be utilizing vite. But since im only gonna build a simple front-end only site/app, i will use svelte (without kit).

You start by navigating to the folder where you want to create the project, then open a terminal in the folder and type this command and hit enter.

```
npm init vite@latest
```

You will then get prompted some options.

1. Write the name of the project or hit enter for default.

2. You will get options of frameworks, choose svelte.

3. you will get options for variant like javaScript, TypeScript or SvelteKit.

Im going to choose javascript for this project, feel free to choose whatever floats your boat.

Go into the project folder `cd "name of your project"`.
Write this command in the terminal `code .` that will open the project in a new vscode session.

open terminal and write these commands:

```
npm i
```
```
npm run dev
```

And your server will be live and running.
if you want to configure vite more you can find the docs [here](https://vitejs.dev/config/).

## Using svelte

If you are using Visual Studio Code, I would recommend downloading the svelte extension "Svelte for VS code" it will give you formatting, auto completions and it allows you to use emmet inside you svelte components.

This is an example of a fetch using svelte.
```js
 <div class="items-container">
   <ul>
     {#await fetchItems(baseUrl + API_KEY + langEnUs)}
       <p style="font-weight: bold">loading...</p>
     {:then items}
       {#each items as item}
         <li id={item.id}>{item.name}</li>
       {/each}
     {:catch err}
       <p class="error">Something went wrong! -- {err}</p>
     {/await}
   </ul>
 </div>
```
This code will generate the items straight in the html using the `#await` syntax.

You combined this with a script tag in the svelte file where you will be setting up the fetch.
```js
<script>
  const baseUrl = "your url";
  const API_KEY = import.meta.env.YOUR_API_KEY;

  /**
   * Fetches the api item.
   * @param url contains the targeted API url for the wanted object.
   * @returns Should return the response to the svelte #await in the html block.
   */
  export async function getGenres(url) {
      // fetches the item from the url target.
      const res = await fetch(url);

      // Handles bad requests / error responses
      if (!res.ok) {
        throw new Error(`Bad request ${res.statusText}`);
      }

      // setting the response to a variable and returning it
      const data = await res.json();
      return data.items;
  }
</script>
```

#### If you want to specify the context of the script, you can use different context attributes to the script tag.

- If you are using typescript you can use the following at the top of your script file
`<script lang="ts"></script>`

- If your script should be a module you can use the following in the same way
`<script lang="ts" context="module"></script>` this is the deault so instead you can use the `<script context></script>` in the instance of reffering to it as a module.

- If your script should be a instance, you just switch out module for instance.

#### Syntax 

Svelte application components are defined with `.svelte` files. Wich are HTML files extended with templating syntax that is based on Javascript and is similar to JSX.



## Strengths

- The building time is much faster when compared to react or even other frameworks.

- Bundle size is smaller and tiny when gzipped compared to react

- Binding classes and variables are relative easy, and custom logic is not needed when binding classes.

## Weaknesses

- Svelte won't listen for refrence updates and array mutations, and developers need to acctively look out for this and make sure arrays are reassigned so the UI will be updated

- Usage syntax for DOM events can also be annoying, cannot directly use `onClick`, but instead use special syntax such as `on:click`

- Svelte is a new and young framework with minimal community support,
thereby doesnt have support for a wide range of plugins and integrations that might be required by heavy production applications. React is the powerful contender here. 

Discuss the product's weaknesses.

## Comparison

Compare the product to other products in the same category, if applicable.

## Summary

Summarise the content and highlight the relevance of the product to a web developer.

### Credits

- Sigvel

### References

- https://svelte.dev/docs

- https://blog.bitsrc.io/react-vs-sveltejs-the-war-between-virtual-and-real-dom-59cbebbab9e9

- https://www.eternaldev.com/blog/build-and-deploy-apps-with-svelte-and-vite/

- https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started

- https://www.youtube.com/watch?v=rkwKpULfWZA

- https://chat.openai.com/chat

#### Video References

- https://www.youtube.com/watch?v=3TVy6GdtNuQ

#### Additional refrences

- [Degit npm docs](https://www.npmjs.com/package/degit)

- [Setting up svelte with degit](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_Todo_list_beginning)
