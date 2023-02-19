---
title: Vite js development platform
keywords: development platforms, vite js, school project
tags: Development Platforms, Vite js, School project, Building tools, Frontend tools
sidebar: development-platforms
permalink: development-platforms/example-product.html
folder: development-platforms
---

## Content

1. Introduction
2. Brief history
3. Features
4. Strengths
5. Weaknesses
6. Comparison
7. Summary
8. Reference

## Introduction

I have chosen to learn more about what a bundler is and why we need to have them. I wanted to dig in and learn more about the building tool Vite js.

Vite js is a building tool for frontend development and the goal is to give the developers an faster and a more satisfy
experience for modern web projects.

In this case you will be reading about the strengths and weaknesses of choosing Vite js as a building tool.


## Brief History

### **What is a bundler?**

What is a bundler and why does we need them? Todays building of an modern website or project could contains over hundreds of different file's and developers can been using of different technology and libraries of CSS frameworks and JS frameworks. A bundler will be bundling the hole project into one single file instead of using hundreds of file's and make it ready for production.

Many bundlers come with different features and plugins that's also will help the developers to be more efficient and productive during the development of the projects.
Just to mentation some of the key features as: HMR & ESM. We will look into this two features during this study.


### **Vite js development platform**

Vite is an relatively new frontend tooling that was first launched in 2020 by Evan You, the creator of Vue js.
The goal of this building tool is to speed up the process of using a frontend tool to make to developer more productive.

Vite comes with **ESBuild** that's bundling the dependencies during the development and makes the bundling extremely quick compared to other frontend tooling package.
Another key functions that's have made it so successfully is the advantage of using native ES modules that's is supported in almost all
moderne web-browsers. Developers will notice the speed during the development when HMR (Hot Module Replacement) will kick-in over ESM (ECMAScript modules), the instantly update in the browser when changes is made instead of the need to reload the hole page.

The slogan for Vite is "Next Generation Frontend Tooling" which they really lives up to.

### **Milestone**

Vite.js does not have any official reported milestones on theirs own homepage, but I would still say that's there are some few that's is worth to mentation.

- Launched in 2020

- 1 million monthly downloads
    <blockquote class="twitter-tweet"><p lang="en" dir="ltr">We crossed 1 million monthly npm downloads! 🎉<br>The ecosystem keeps growing, thanks to all the people working on plugins and integrations, improving Vite core, helping each other, and enjoying the boost in DX while developing their apps ⚡️<a href="https://t.co/33gOH9Xf6j">https://t.co/33gOH9Xf6j</a> <a href="https://t.co/AolM8sgoDX">pic.twitter.com/AolM8sgoDX</a></p>&mdash; Vite ⚡ (@vite_js) <a href="https://twitter.com/vite_js/status/1440654364100550656?ref_src=twsrc%5Etfw">September 22, 2021</a>[^1].</blockquote>


### **Vite vs. competitor**

As mentation earlier Vite is pretty new in the marked were there are a couple of well known bundlers for many years, but Vite has managed to become famous for it's incredible simplicity and for the speed. A competitor with the name Snowpack was a competitor that's was launched in the same year as Vite and has similarly functionality and features has also been growing during the last years but not in the same numbers as Vite and is now longer maintained.

Another competitor is the well known Webpack, they have been on the marked for 11 years and is the most popular of them all. 

- Vite (3 years)
- Snowpack (3 years)
- ESbuild (5 years)
- Rollup (8 years)
- Parcel (10 years)
- Webpack (11 years)

## Features

- ES modules

    With the new modern web and browsers that's take the advantages of ES modules is a very good news. The modern browsers can now speed up the process and optimize the loading of modules which will give the end-user a much better experience of the site. The strength with ESM is that's the browser is able to load only the modules that's is needed. Not more or less.

- HMR

    Hot Module Replacement is a built-in features in Vite which will made the development much easier and faster. HMR is a feature that's update the JavaScript module during the development which will give the developer instantly updates in the browser without a full reload of the application. HMR is able to other building tool as well but in Vite it's comes already built-in and is taking the advantage directly with ESM which will speed up the feature.

- ESBuild & Rollup

    ESBuild is another development platform that's is made for frontend which is one of the fastest bundler when it's time to building for the production. Vite is using some of the functionality of ESBuilding during the development performance in Vite.
    Bundling the dependencies with ESBuild and together with Rollup will make to building process to production both stable, reliable and fast.


## Strengths

The strength with Vite is the uses of Hot Module Replace together with native ES modules which will speed up the building process for the developers. Hot module Replace will reconstruction only the file's or code that's have been changed and therefore will not be needed to re-build the hole project. 
ES modules will also has a positive affect for the end-user in the end as well, the webpage is only loading the information that's is needed with ES modules. 

- Fast building process
- Using esbuild which re-building the dependencies during the development.
- HMR, which work with ES modules to update only the changes instantly to the dev server.
- No bundler is required, Vite does not require any bundler to be used which will make the setup process easy & quick.

## Weaknesses

Something that's is important to remember is that Vite is still pretty new in the marked and even if they have had an explosive growing the last month/year will there still be some weaknesses compered to others.
If we are looking into plugins we will have some limitations at Vite. 

- Plugins
    
    As an example does Vite js have 6 official plugins available on their webpage and if we compere with Webpack js that's have 23 plugins available


## Comparison

There will always be some pros and cons when you are comparing different technology or platforms and it's hard to say which of them that is best for you.
You are the only one that can decide this and compare them against each other. 

In the table below can you see some pros and cons on Vite and Webpack and can decide based in them.  

**Vite**

|    Pros                       |     Cons      |
| -------------                 | ------------- |
| Fast build                    | Less plugins and third-party tools  |
| Hot Module Replacement        | Compatibility with older browser could be an issues  |
| ES Modules                    | Smaller community and support  |
| TypeScript out of box         | Less plugins & third party tools |
| Less configuration needed     | |
| New beginner friendly         |   |
| Open source                   |   |

**Webpack**

|    Pros                               |     Cons      |
| -------------                         | ------------- |
| Large plugins and third-party tools   | Longer waiting time when building  |
| Larger community support              | More configuration out of the box  |
| Support of older browser              |   |
| Large community and support           |   |
| Open source                           |   |
| Compatibility                         |   |


## Summary

**So what do we think of Vite as an frontend development tool?**

There is a lot of positive things with Vite, even if they are new. They have used new technology as ES modules together with HMR which have been
an really success for Vite and the developers. Companies and developers can save a lot of time during development because of the speed. 

**But can Vite beat out their competitors?**

Their is not any unique with Vite that's not any other frontend tools could do, without of thinking of the development speed to Vite.
Some other competitors could also in some way be a better choice because of the compatibility and the amount of plugins. With having said that, this does not mean that Vite is in anyway bad, but it may be that other tools are better suited depending on the project. 

Based on my knowledge as a frontend student would I personally recommend to use Vite as a frontend tool, it's very easy to setup and less configuration out of the box.
And as Vite themselves would have said, Vite is the "Next Generation Frontend Tooling".

Vite is still young in the marked and have achieved a lot. So I have the believing on that Vite could be our most used frontend tooling within some years. 

### Credits

- Linus Aakerberg (LAakerberg)

#### References


- Npm trends & charts:
    - [Npm trends](https://npmtrends.com/snowpack-vs-vite)
    - [Npm charts](https://npmcharts.com/compare/vite?interval=30)


- Vite js: General references
    - [Vite in 100 Seconds video](youtube.com/watch?v=KCrXgy8qtjM)
    - [Why vite?](https://vitejs.dev/guide/why.html)
    - [Vite Getting Started](https://vitejs.dev/guide/)

- Vue Mastery blog
    - [Vite vs Webpack](https://www.vuemastery.com/blog/vite-vs-webpack/)

- What is bundlers?
    - [JavaScript Module Bundlers](https://snipcart.com/blog/javascript-module-bundler)
    - [How JavaScript Bundlers work](https://medium.com/@gimenete/how-javascript-bundlers-work-1fc0d0caf2da)
    - [JavaScript Bundlers](https://dev.to/underscorecode/javascript-bundlers-an-in-depth-comparative-is-webpack-still-the-best-bundler-in-2021-59jk)

- ES modules
    - [Noroff - ES6 Modules introduction](https://content.noroff.dev/javascript-2/introduction.html)
    - [Noroff - ES6 Modules Setup](https://content.noroff.dev/javascript-2/setup.html)
    - [Noroff - ES6 Modules Basics](https://content.noroff.dev/javascript-2/basics.html)
    - [V8 Dev - JavaScript Modules](https://v8.dev/features/modules)
    - [Developer - JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
    - [JavaScript Tutorial - A Comprehensive Look at ES6 Modules](https://www.javascripttutorial.net/es6/es6-modules/)


- Hot Module Replacement
    - [Vite - Slow updates, HMR](https://vitejs.dev/guide/why.html#slow-updates)

- ESbuild
    - [ESbuild](https://esbuild.github.io/)