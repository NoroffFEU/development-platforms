---
title: Svelte Case Study
keywords: JavaScript, Svelte, SvelteKit, JavaScript framework, Web framework, Component framework
tags: JavaScript, Svelte, SvelteKit, JavaScript framework, Web framework, Component framework
sidebar: development-platforms
permalink: development-platforms/svelte.html
folder: development-platforms
---

# Svelte

## Table of Content

1. [Introduction](#introduction)
2. [Brief History](#brief-history)
3. [Developer Votes](#developer-votes)
4. [Features](#features)
5. [Strengths](#strengths)
6. [Weaknesses](#weaknesses)
7. [Comparison](#comparison)
8. [Summary](#summary)
9. [References](#references)

## Introduction

Svelte, loaned from the french meaning "Stretched Out" is a free and open source component framework, compiler as well as a language created by Rich Harris and it's focus is to limit how much is transferred between the server and client, it builds everything as JavaScript during the build-time so the browser only needs to receive JavaScript and that's all it'll receive instead of a framework, this helps keeping Svelte lightweight with great performance, whilst the language only requires you to know HTML, CSS and JavaScript to build a quick and responsive Svelte or SvelteKit application as it's very easy to learn.

It was created by Rich Harris who had previously worked on ractive.js and was originally written in JavaScript but was later written in TypeScript. in 2021 SvelteKit came and improved upon Svelte with taking the good bits from it and got the ability to handle the building of a fullstack application with server-side rendering, API and endpoints to name a few.

## Brief History

- 2016.11.29 Version 1 of Svelte was released, it was ractive.js with a compiler and written in JavaScript at this point.
- 2018.04.19 Version 2 of Svelte was released, it's maintainers switched it from double curly braces to single curly braces.
- 2019.04.21 Version 3 of Svelte was released, it's now written in TypeScript.
- 2020.10.19 The SvelteKit framework was announced.
- 2021.03.23 SvelteKit enters public beta.
- 2021.11.11 Svelte was bought by Vercel, the creator of next.js and brought Rich Harris into Vercel, enabling him to be the first full time contributor for Svelte.

## Developer Votes

- 2019 Svelte was voted 2nd in retention, 1st in interest (wanting to use again, wanting to learn).
- 2020 Svelte was voted 1st in retention, 1st in interest.
- 2021 Svelte was voted 2nd in retention, 1st in interest.
- 2021 Svelte was voted as the "most loved web framework" on stackoverflow.
- 2022 Svelte was voted 2nd in retention, 1st in interest.

## Features

**Component-based:** You can make reusable UI components to reduce the amount of code in your project and reduce the size the client has to deal with, svelte components are built and end with .svelte, examples of reusable UI components would be buttons, headers and footers.

**It's a compiler:** Being more of a compiler than a framework, Svelte allows you to write Svelte code that becomes optimised and lightweight JavaScript code for the browser to reduce loadtime, you send the least amount of code necessary to get exactly the results you want. This is very small in size and very efficient for the client to work with.

**Code-splitting:** SvelteKit uses code-splitting to only use the code needed for that **route** to reduce the load by only sending to the client only what is needed for the page, and reusing components and get what is lacking when opening new pages on the website.

**Server-side rendering:** SvelteKit will render the contents of the page as HTML before sending it to the client, limiting the initial loadtime and improving the user experience for the user and then hydrating the JavaScript to become functional on the client's side with client-side rendering.

Server-side rendering also helps with Search Engine Optimisation, as by sending the HTML first Google can find your site's metadata and credit you appropriately and put you higher on search results,
as well as limits the amount of resources the client needs to use to view the site and allows for faster loading.

**Reactivity:** Instead of relying on an API to tell the virtual DOM what to do when and being tied to it as in, without the Virtual DOM it'll never have any idea of when a change in data is occuring and can't react without it.
The virtual DOM also has to check with an earlier snapshot of the virtual DOM to make comparisons to know what to change before sending the next changes to the DOM which increases the load.
Svelte on the other hand "surgically" update the app whenever there's a change, not needing to look at the virtual DOM for changes and directly works with the DOM.

## Strengths

- Very small file size, Svelte's bundle size being 1.6KB
- Simple syntax so it's easy to learn, only need knowledge of HTML, CSS and JavaScript to get started in learning how to use Svelte and SvelteKit.
- Fast speed and performance, with server-side rendering you take care of the rendering and don't make the end user use computational power to see your site.

## Weaknesses

- Not used by any major entity the size of, e.g React with Facebook or Angular with Google
- Smaller community than tried and tested frameworks like React and Vue so possibly harder to find a solution or get help fast with an issue.
- Might be more troublesome when you start building larger project where React shines more wih making complex components.

## Comparison

### React

- Comparing React's performance with Svelte, Svelte has it beat since it compiles the code into efficient JavaScript that directly manipulates the DOM, whereas React will make the site during the runtime, on the client's side and because it has to maintain the virtual DOM and spend resources on that, making the responsiveness a tiny bit worse with Svelte.
- Comparing the bundle size, Svelte comes out at 1.6KB and React comes out at 42.2KB, this is thanks to Svelte's compile-time approach whilst React needs to make a bit more code so it can maintain the Virtual DOM that Svelte does not use.
- Comparing the community sizes, React's community and user base is much larger than Svelte's since it's tried and tested and a very widely used framework, which leads to many developers that are able to help you with your issues on StackOverflow among other places.
- Comparing the maintenance, React has Facebook backing and maintaining it with people hired specifically to maintain it whilst Svelte is owned by Vercel with only a few full time maintainers it's mainly them and community contributors who maintain the code since Vercel also maintains next.js.
- Comparing which framework to pick, if it's a small(er) project, Svelte is great and will run fast but for larger and more complex projects where you (and a team) need to build fast it's a great framework to use due to it's reliability and built in features and tools.

## Summary

Svelte is a open source compiler and component framework that has revolutionised loading times for the end user by fully embracing Server Side Rendering with SvelteKit, it's currently best for smaller and simpler projects and it's easy to learn and get into.
It has really grown in the few years since it's launch and so has the continued interest in learning and wanting to use it based on the developer feedback

### Credits

- Martin Pedersen (MartinP3)

#### References

Introduction:</br>
https://www.okupter.com/blog/svelte-vs-sveltekit-the-difference

Brief history:</br>
https://en.wikipedia.org/wiki/Svelte#cite_note-infoq-8 </br>
https://youtu.be/kMlkCYL9qo0 </br>
https://youtu.be/qSfdtmcZ4d0 </br>
https://vercel.com/blog/vercel-welcomes-rich-harris-creator-of-svelte </br>
https://svelte.dev/ </br>
https://dev.to/mandrasch/ </br>

Developer Votes:</br>
https://2022.stateofjs.com/en-US/libraries/front-end-frameworks/ </br>
https://insights.stackoverflow.com/survey/2021#most-loved-dreaded-and-wanted-webframe-want </br>

Features:</br>
https://vercel.com/docs/beginner-sveltekit </br>
https://searchengineland.com/server-side-rendering-what-seos-need-to-understand-346296 </br>

Comparison:</br>
https://refine.dev/blog/svelte-vs-react/#:~:text=Svelte%20is%20a%20relatively%20new,based%20approach%20to%20web%20development.
