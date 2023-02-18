---
title: Vite JS development platform
keywords: development platforms, vite js, tailwindcss, school project
tags: Development Platforms, Example Project, Category Name
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

Vite JS was created as a building tool for frontend development and the goal is to give the developers an faster and a more satisfy
experience for modern web projects.

In this case you will be reading about the strengths and weaknesses of choosing Vite js as a building tool.


## Brief History

### Vite.js development platform

Vite is an relatively new frontend tooling that was first launched in 2020 by Evan You, the creator of Vue js.
The goal of this building tool is to speed up the process of using a frontend tool and building to the production.
Vite comes with esbuild that's bundling the dependencies during the development and makes the bundling extremely quick compared to other frontend tooling package.

A key functions that's have made vite so successfully is the advantage of using native ES modules that's is supported in almost all
moderne web-browsers. With this key function and together with esbuild and HMR (Hot module replace) vite is able to just process that specific file/code that's is provided to the page in the browser instead of load all of the code that's not is in use on that specific page. 

### Vite 4.0 released

In the latest release of Vite 4.0 the are also using the advantage of Rollup 3

### Milestone

Vite.js does not have any official reported milestones on theirs own homepage, but I would still say that's there are some few that's is worth to mentation.

- Launched in 2020
- Vite 2.0 released *16.02.2021*
    - [Release notes](https://vitejs.dev/blog/announcing-vite2.html)
- 1 million monthly downloads
    <blockquote class="twitter-tweet"><p lang="en" dir="ltr">We crossed 1 million monthly npm downloads! 🎉<br>The ecosystem keeps growing, thanks to all the people working on plugins and integrations, improving Vite core, helping each other, and enjoying the boost in DX while developing their apps ⚡️<a href="https://t.co/33gOH9Xf6j">https://t.co/33gOH9Xf6j</a> <a href="https://t.co/AolM8sgoDX">pic.twitter.com/AolM8sgoDX</a></p>&mdash; Vite ⚡ (@vite_js) <a href="https://twitter.com/vite_js/status/1440654364100550656?ref_src=twsrc%5Etfw">September 22, 2021</a>[^1].</blockquote>
- Vite 3.0 released *06.09.2022*
    - [Release notes](https://vitejs.dev/blog/announcing-vite3.html#what-s-next)
- Vite 4.0 released *09.12.2022*
    - [Release notes](https://vitejs.dev/blog/announcing-vite4.html)

### Vite vs. competitor

Vite is new in the marked were there are a couple of well known bundlers for many years, but Vite.js has managed to become famous for it's incredible simplicity and for the speed.
A competitor with the name Snowpack was a competitor that's was launched in the same year as Vite and has similarly functionality and features has also been growing during the last years but
not in the same numbers as Vite and is now longer maintained.

Another competitor is the well known Webpack, they have been on the marked for 11 years and is the most popular of them all. 

- Vite (3 years)
- Snowpack (3 years)
- Parcel (8 years)
- Webpack (11) years)

## Features

- Fast building process, Vite.js uses the advantage of using ES modules which improves the building process, even for larger projects.
- Using esbuild which re-building the dependencies during the development.
- Uses Rollup when it's time to build for the production.
- No bundler is required, Vite.js does not require any bundler to be used which will make the setup process easy & quick.

## Strengths

The strength with Vite is the uses of Hot Module Replace together with native ES modules which will speed up the building process for the developers. Hot module Replace will reconstruction only the file's or code that's have been changed and therefore will not be needed to re-build the hole project. 
It's will also an positive affect for the end-user in the end as well, the webpage is only loading the information that's is needed with ES modules. 

## Weaknesses

Something that's is important to remember is that Vite is still pretty new in the marked and even if they have had an explosive growing the last month/year will there still be some weaknesses compered to others.
If we are looking into plugins we will have some limitations at Vite. 

- Plugins
    - As an example does Vite js have 6 official plugins available on their webpage and if we compere with Webpack js that's have 23 plugins available


## Comparison

- Compare the product to other products in the same category, if applicable.

There will always be some pros and cons when you are comparing different technology or platforms and it's hard to say which of them that is best for you.
You are the only one that can decide this and compare them against each other. 

In the table below can you see some pros and cons on Vite and Webpack and can decide based in them.  

**Vite**

|    Pros                       |     Cons      |
| -------------                 | ------------- |
| Fast build                    | Less plugins and third-party tools  |
| Hot Module Replacement        | Compatibility with older browser could be an issues  |
| ESbuild built-in              | Smaller community and support  |
| TypeScript out of box         |   |
| Less configuration needed     |   |
| New beginner friendly         |   |
| Open source                   |   |

**Webpack**

|    Pros                           |     Cons      |
| -------------                     | ------------- |
| Plugins and third-party tools     | Longer waiting time when building  |
| Larger community support          | More configuration out of the box  |
| Supporting ESM and CommonJS       |   |
| Support of older browser          |   |
| Less configuration needed         |   |
| Large community and support       |   |

Compared to other development platform as Webpack for an example is the

## Summary

Summaries the content and highlight the relevance of the product to a web developer.



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