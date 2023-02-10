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

## Introduction

Svelte, loaned from the french meaning "Stretched Out" is a free and open source component framework, compiler as well as a language created by Rich Harris and it's focus is to limit how much is transferred between the server and client as a Single Page Application, it builds everything as JavaScript during the build-time so the browser only needs to receive JavaScript and that's all it'll receive instead of a framework, this helps keeping Svelte lightweight with great performance, whilst the language only requires you to know HTML, CSS and JavaScript to build a quick and responsive Svelte or SvelteKit application as it's very easy to learn.

It was created by Rich Harris who had previously worked on ractive.js and was originally written in JavaScript but was later written in TypeScript. in 2021 SvelteKit came and improved upon Svelte with taking the good bits from it and got the ability to handle the building of a fullstack application with server-side rendering, API and endpoints to name a few.

## Brief History

- 2016.11.29 Version 1 of Svelte was released, it was ractive.js with a compiler and written in JavaScript at this point.
- 2018.04.19 Version 2 of Svelte was released, it's maintainers switched it from double curly braces to single curly braces.
- 2019.04.21 Version 3 of Svelte was released, it's now written in TypeScript.
- 2020.10.19 The SvelteKit framework was announced.
- 2021.03.23 SvelteKit enters public beta.
- 2021.11.11 Svelte was bought by Vercel, the creator of next.js and brought Rich Harris into Vercel, enabling him to be the first full time contributor for Svelte.
- 2021 Svelte was voted as the "most loved web framework" and 4th most wanted

## Features

**It's a compiler:** Being more of a compiler than a framework, Svelte allows you to write Svelte code that becomes optimised and lightweight JavaScript code for the browser to reduce loadtime, you send the least amount of code necessary to get exactly the results you want. This is very small in size and very efficient for the client to work with.

**Reactivity:** Instead of relying on an API to tell the virtual DOM what to do when and being tied to it as in, without the Virtual DOM it'll never have any idea of when a change in data is occuring and can't react without it. Svelte on the other hand "surgically" update the app whenever there's a change, not needing to look at the virtual DOM for changes

**Code-splitting:** SvelteKit uses code-splitting to only use the code needed for that **route** to reduce the load

## Strengths

## Weaknesses

- Not used by any major entity the size of, e.g React with Facebook, Angular with Google

## Comparison

## Summary

### Credits

- Martin Pedersen (MartinP3)

#### References

Introduction:
https://www.okupter.com/blog/svelte-vs-sveltekit-the-difference

Brief history:
https://en.wikipedia.org/wiki/Svelte#cite_note-infoq-8
https://youtu.be/kMlkCYL9qo0
https://youtu.be/qSfdtmcZ4d0 2020.10.19 SvelteKit was announced
https://vercel.com/blog/vercel-welcomes-rich-harris-creator-of-svelte
https://insights.stackoverflow.com/survey/2021#most-loved-dreaded-and-wanted-webframe-want
https://svelte.dev/

Features:
https://vercel.com/docs/beginner-sveltekit
