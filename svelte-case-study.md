---
title: Svelte Case Study
keywords: development platforms, svelte project, development
tags: Development Platforms, Svelte Project, Development
sidebar: development-platforms
permalink: development-platforms/svelte-product.html
folder: development-platforms
---

## Table of content

- [Introduction](#svelte-intro)
- [Brief History](#svelte-history)
- [Features](#svelte-features)
- [Setup](#svelte-setup)
- [Using Svelte](#using-svelte)
- [Strenghts](#svelte-strenghts)
- [Weaknesses](#svelte-weaknesses)
- [Compared to react](#svelte-vs-react)
- [Summary](#summary)
- [Credtis & Refrences](#credits-and-refrences)

## Introduction {#svelte-intro}

Svelte is a javascript compiler, its similar to React, but react uses Virtual DOM and Svelte is a javascript Compiler, both provide a similar component-based architecture -- that means both enable a CDD bottom-up development, and both enable sharing their components between apps, via tools and platforms like [Github](www.github.com).

## Brief History {#svelte-history}

## Features {#svelte-features}

Svelte is purely a compiler, that converts your application into ideal JavaScript code when you build your application for production.

## Setup {#svelte-setup}

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

## Using svelte {#using-svelte}

If you are using Visual Studio Code, I would recommend downloading the svelte extension "Svelte for VS code" it will give you formatting, auto completions and it allows you to use emmet inside you svelte components.

example of a fetch using svelte.

## Strengths {#svelte-strengths}

- The building time is much faster when compared to react or even other frameworks.

- Bundle size is smaller and tiny when gzipped compared to react

- Binding classes and variables are relative easy, and custom logic is not needed when binding classes.

## Weaknesses {#svelte-weaknesses}

- Svelte won't listen for refrence updates and array mutations, and developers need to acctively look out for this and make sure arrays are reassigned so the UI will be updated

- Usage syntax for DOM events can also be annoying, cannot directly use `onClick`, but instead use special syntax such as `on:click`

- Svelte is a new and young framework with minimal community support,
thereby doesnt have support for a wide range of plugins and integrations that might be required by heavy production applications. React is the powerful contender here. 

Discuss the product's weaknesses.

## Comparison {#svelte-vs-react}

Compare the product to other products in the same category, if applicable.

## Summary {#summary}

Summarise the content and highlight the relevance of the product to a web developer.

### Credits

- Sigvel

### References

- https://svelte.dev/docs

- https://blog.bitsrc.io/react-vs-sveltejs-the-war-between-virtual-and-real-dom-59cbebbab9e9

- https://www.eternaldev.com/blog/build-and-deploy-apps-with-svelte-and-vite/

- https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started

#### Video References

- https://www.youtube.com/watch?v=3TVy6GdtNuQ

#### Additional refrences

- [Degit npm docs](https://www.npmjs.com/package/degit)

- [Setting up svelte with degit](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_Todo_list_beginning)
