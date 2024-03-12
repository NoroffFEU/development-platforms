---
title: Astro
authors: Mathias B. Herholdt <MHerholdt94> & Bjørnar Heian Langved <blangved>
tags: astro, javascript framework, component-based, static site generation, development platforms
---

![Astro logo](https://cdn.buttercms.com/xrVbfdR5TBy4iTaY4xl7 "Astro logo with spacey background")

> ### _"There’s a simple secret to building a faster website — just ship less."_

**- Fred Schott & Nate Moore (Founders of Astro)**

---

## Introduction

In an ever evolving industry that is web development, several innovative frameworks has seen the light of day with a mission to improve performance optimization without compromising on user experience and developer convenience. Among these is Astro, which version 1.0 released in May 2022 and already stands out as a revolutionary front-runner. Astro is developed with the modern web in mind and introduces a unique approach to building fast and efficient websites that is also developer friendly. At its core, Astro has a component based architecture, similar to other popular frameworks like React and
Vue.js, yet it differs in its concept of partial hydration, a technique that dramatically reduces the amount of JavaScript sent to the browser. Astro renders its components to static HTML at build time, which ensures very fast load times.

**In Astro's own words:**

_"Astro is a web framework that takes the best from the early internet (think HTML and CSS) and puts it to work in a next-gen architecture to make every Astro site, and the whole web, faster. Whereas most frameworks today are designed for web apps, Astro is built for content-rich sites where performance matters most. Pull content from anywhere, deploy everywhere, and let's build the web we want, together."_

This case study looks into Astro's features, its potential impact on the future of web development and how it balances performance, functionality and ease of use by positioning itself as a front-runner in the next generation of web development tools.

## History of Astro

Astro is an MIT-licensed open source build tool, and the company behind it, "The Astro Technology Company", was established in 2019 by Fred Schott. Astro as a development tool was created by Fred Schott, Nate Moore and a group of other contributors. It first released in beta, June 8, 2021, and launched its official 1.0 release on August 9, 2022.

### Timeline

- **February 2021:** Astro is publicly announced and released in its first beta version. The release introduces the idea of a static site generator with a focus on performance and partial hydration (reducing amount of JS sent to the browser).

- **November 2021:** Astro v0.21 is released which included improved build optimizations, enhanced CSS and image handling and more support for component frameworks.

- **August 2022:** Astro reaches an important milestone with the release of v1.0. This major release solidified its core features and offered enhanced stability, better performance and even better developer convenience.

- **2024:** Astro has a continued development and community growth and it keeps evolving with regular updates, solidifying its position in the world of web development.

## Main Features

- **Partial hydration:** Astro allows you to only hydrate the components that need JavaScript interaction instead of loading and executing all of it. This makes the application a lot faster, since it doesn't load unnecessary JavaScript. By default, zero JavaScript is served to your webpages, which means faster load times and a better user experience, especially on mobile devices or if you have slow internet connection. JavaScript is only added as needed for interactive components.

- **Islands:** This ties to partial hydration. Island architecture is the idea of thinking of each interactive part of a webpage as an "island" of interactivity in a sea of static content. This allows the website to build faster and be more scalable by only using JavaScript where needed.

- **Framework-agnostic:** Astro allows you to write components using frameworks like React, Vue.js or Svelte, all in the same project. This is handy if you're working with a team with different preferences or if you're transitioning from one technology to another.

- **Built-in image optimization:** Astro comes with a built-in support of image optimization, which can reduce load times by a lot by automatically resizing and optimizing images for the web.

- **Markdown support:** Astro has a great support for markdown, allowing you to add, for example, blog posts or documentation directly into the website.

- **Easy deployment:** Astro is designed to be serverless-first. This makes it very easy to deploy on platforms like Netlify.

## Components and Islands

### Components

Astro components are defined as building blocks in any Astro Project, identifiable by their .astro file extension.

<img src="/static/images/astro/astro_extension.png" alt="Example of an Astro extension in VS Code" width="30%">
<sub>Figure 1: File with the .astro file extension</sub>

The core concept of components is that they **do not render on the client**, but rather at build-time or on-demand using server-side rendering (SSR). This approach ensures that the components are pre-rendered for the client using the website, leading to faster page loads and improved performance.

Components are not limited to small sections of code and can be entire web pages. In an Astro project, what would typically be an .html file becomes an .astro file. These .astro files can also contain additional components.
This modular approach is comparable to other development practices. An example is a Javascript file that you chose to modularize into smaller fractions of code. These fractions are exported from their source files, and then imported into a central file.

<img src="/static/images/astro/astro-example1.png" alt="Example of how to import and use components in Astro" width="100%">
<sub>Figure 2: Example of how to import and use components in Astro</sub>

<img src="/static/images/astro/astro-example2.png" alt="Two images, one Header component and one Footer component" width="100%">
<sub>Figure 3: A Header component (left) and a Footer component (right)</sub>

**Let's take a look at the images above to demonstrate this**

In the 'src/pages' directory of this Astro project, we find the index.astro file, which is the entry point to our website, and also serves as an Astro component. The 'src/components' directory contains Header.astro and Footer.astro (Astro uses "Pascal Case" as naming convention for components), which define the upper and lower sections of the website, respectively.

These components are structured within their individual files. In the index.astro file, these components are imported and placed at the desired locations.
In larger projects with multiple pages, the same header and footer components can be reused across all pages, by importing them into each .astro page component. This modular structure is an example of Astro's component-based architecture.

This is, of course, an overly simplified example of using Astro components (but a valid one), since these examples contain nothing but a little static HTML. In a real-life scenario, these sections of code would probably contain some styling, various scripts for interactivity, dynamic navigation changes, and more.

**So let's have a look at that:**

Components also include support for `<style>` and `<script>` tags directly within .astro files. This allows for various languages and tools, such as SCSS —a CSS pre-processor that uses SASS syntax, or even JavaScript frameworks like React or Vue within script tags.
Because we isolate parts of the code with components, we can target HTML elements directly without needing to rely on class names or IDs, providing a more straightforward approach to styling and scripting.

<img src="/static/images/astro/astro-example3.png" alt="Example of added styles and interactivity to a component" width="100%">
<sub>Figure 4: Example of added styles and interactivity to a component</sub>

In our example (Figure 4), we have applied light styling to the header element and its child navigation list items using SCSS syntax. For interactivity, we loop over the list-items, and apply color changes upon mouse hover events.

Besides working with HTML, CSS, and Javascript in an isolated "environment", which could result in easier management, these components will also be pre-rendered for the browser, resulting in faster load times, and the user is not relying on Javascript, since this in now converted to static HTML.

## Islands

Astro islands are in themselves components, but there is a difference. A normal component does not necessarily need any Javascript to work, and could be pure static HTML that has been rendered on the server before it reaches the client. An island on the other hand is designed to be interactive and require client-side JavaScript to function. Islands also use Astro's partial hydration feature which is unique by only making that island "hydrated" or "active" with Javascript when necessarily.

```
// Let's say this was your regular Astro component:

    <MyComponent />
```

```
// This is now an Astro island:

    <MyComponent client:load/>
```

Turning any regular Astro component into an interactive island, only requires a `client:*` directive. Even though Astro has many different directive-types, the "client" is used for Islands, and works like this:

`client:load:` Used by UI elements requiring immediate interaction as the page loads. Suitable for essential, visible components like interactive buttons or input forms.

`client:idle:` Delays loading until after the page has fully loaded and the browser is idle. Ideal For elements that are not critical for the immediate interaction.

`client:visible:` This directive waits to load and hydrate the component until it actually enters the user's viewport. Perfect for content lower on the page, or components that uses a lot of resources, but not always likely to be interact with.

`client:media:` Loads components based on CSS media query conditions, perfect for adapting to various screen sizes and enhancing responsive designs. A "hamburger menu"-toggle that's only relevant on mobile devices is a good example.

`client:only:` Skips server-side rendering entirely, directly rendering components in the browser. Essential for integrating client-specific frameworks like React or Vue, ensuring compatibility and performance.

![Astro logo](https://res.cloudinary.com/wedding-website/image/upload/v1596766231/islands-architecture-1.png "Astro islands")
&nbsp;
<sup>Source: [Islands Architecture: Jason Miller](https://jasonformat.com/islands-architecture/ "Article about Astro islands")</sup>
<br>

We can think of islands as "mini-apps" or "widgets" on the website. They work in isolation inside an Astro project, or more precisely, in isolation from other islands. Imagine a website with different sections of content like the image above. The banner on top, the sidebar visible for larger displays, or the image carousel; all of these are perfect as islands. However, using different directives could be smart since they may not always be displayed or interacted with right away. The banner is high priority, and `client:load` should be ideal. The sidebar will probably only be visible by larger devices, so `client:visible` or `client:media` might be more appropriate. The image carousel is probably a bit further down on the page (and maybe not visible right away), so `client:visible` could be perfect, allowing other content gets higher priority during page load.

## Market Comparison

Astro stands out for its innovative approach to web development, and while it faces competition from some more established and popular frameworks like Next.js and Gatsby, its unique features and flexibility gives it an advantage on a few points. The choice between using Astro or another framework often comes down to specific project requirements and the desired balance between performance and features.

Below is a comparison between Astro and Next.js, what their advantages and disadvantages are on specific parts like performance, flexibility and community.

### Astro vs. Next.js

#### Performance and Optimization

- **Astro**

  - **Built for performance:** Astro's architecture is optimized for delivering the fastest possible website by default. It does this with being a static site generator and with partial hydration (see Main Features for more info on partial hydration).

  - **Zero-JS by default:** Astro generates static sites with zero JavaScript on the initial load by default. This enhances load times and SEO.

- **Next.js**

  - **Optimized for universal rendering:** While Next.js can produce highly optimized sites, its strength lies in server-side rendering and static site generation with automatic image optimization, code splitting and more. This, however, can lead to more JavaScript on the initial load compared to Astro's zero-JS by default.

#### Developer Convenience and Flexibility

- **Astro**

  - **Front-end agnostic:** One of Astro's primary features is its ability to use components from multiple frameworks like React, Vue.js and Svelte in the same project without the need to ship said frameworks' runtime in the browser. This flexibility allows developers to use their preferred framework components on one and the same project.

  - **Markdown support:** Astro has great support for Markdown, which allows developers to add dynamic components within Markdown files easily.

- **Next.js**

  - **Built-in development environment:** Next.js offers a more integrated approach with a focus on React. It provides features like API routes which allows developers to build full-stack applications within the same project.

  - **"Fast refresh:** Next.js offers a great developer experience with features like fast refresh which makes it easier to develop and debug applications.

#### Ecosystem and Community

- **Astro**

  - **Growing ecosystem:** Although Astro's ecosystem is growing, it is still smaller compared to Next.js. This means it might be fewer resources, plugins etc. from the community.

  - **Active development:** Astro is under active development with new features and improvements being added frequently. The community is enthusiastic and growing, which bodes well for the framework's future.

- **Next.js**

  - **Mature ecosystem:** Next.js has a large, mature ecosystem with an active community. There are a long list of resources, plugins etc. available which makes it easier to find solutions to potential issues or challenges.

  - **Backed by Vercel:** The framework is backed by Vercel which ensures active development and cloud deployment solutions. This provides a seamless deployment-to-deployment pipeline.

#### Use Cases

- **Astro**

  - **Ideal for static sites:** Astro is a great choice for projects where performance is important and the primary content is static. This includes blogs, portfolios, documentation sites etc.

  - **Learning resources:** Astro's documentation and learning resources are evolving despite already being pretty comprehensive. The framework is straightforward to pick up for developers familiar with JavaScript and component-based frameworks like React.

- **Next.js**

  - **Versatile web applications:** Next.js is a robust solution for building just about any kind of web application from static sites to fully dynamic applications that require server-side rendering and API integration.

  - **Enterprise adoption:** With its mature ecosystem and large community, Next.js was a wide array of comprehensive features which makes it a good choice for many enterprise-level applications.

#### Summary

Both Astro and Next.js offers great features for web development, but they cater to slightly different niches. If you are looking into making a mostly static site like a blog or portfolio where performance is crucial, Astro is a great choice. On the other hand, if you want a more dynamic web application backed by a robust ecosystem and community support, Next.js offers a more built-in solution for building your desired web application. The choice between these two frameworks comes down to specific project requirements, performance priorities and developer preferences.

### Cloud-based vs. Self-hosted

Astro is a modern, open-source framework for building fast, static websites with a focus on performance and developer convenience. Being a static site generator, it primarily creates static assets that can be hosted on any static site hosting service. This makes Astro flexible for both self-hosting and cloud-based hosting solutions. In contrast to this, cloud-based platforms may offer built-in hosting and backend services but with less control over the deployment and the costs could potentially be higher.

- **Self-hosted (using Astro)**

  - **Advantages:** Full control over hosting environment. This can potentially lower costs and it provides more flexibility.

  - **Disadvantages:** Requires setup and maintenance of hosting infrastructure, which can increase its complexity.

- **Cloud-based solutions (e.g. Vercel, Netlify)**

  - **Advantages:** Simplified deployment process with scalable infrastructure and build-in CI/CD pipelines.

  - **Disadvantages:** Less control over the hosting environment. This can potentially increase costs as it is scaled with usage.

## Getting Started with Astro

Astro is designed to be approachable and straightforward. Below is a step-by-step guide to creating your first project with Astro.

**NB**: _Given the rapidly evolving nature of development, it's recommended to check out the [Getting Started](https://docs.astro.build/en/getting-started/) section in the Astro documentation. This will ensure the latest instructions on how to install and set up your project with Astro. Procedures outlined here could become outdated shortly._

### Prerequisites

Before you begin, make sure you have the correct version of Node.js installed. Astro requires Node.js version `14.15.0` or higher. You can check your Node.js version by running `node -v` in your terminal.

### Step 1: Create a New Astro Project

Open your terminal and run the following command to start Astro's handy install wizard:

```bash
npm create astro@latest
```

You can run `create astro` anywhere on your machine, so there's no need to create a new empty directory for your project before you begin. If you don't have an empty directory, the install wizard will create one for you.
Next, `cd` into your new project directory to begin using Astro. Make sure to install your dependencies by running `npm install` if you skipped this during the CLI wizard.

#### Project Structure

This is the structure of your new Astro project. You will find multiple directories and files as described below:

- `src/` Contains your project's source code.
- `src/pages/` Your website's pages. Astro uses these files to generate your site.
- `astro.config.mjs` The configuration file for your Astro project.
- `public/` Static assets like images go here.

### Step 2: Run your Astro Project Locally

Run the `astro dev` command to start the local development server. The starter template comes with a pre-configured script that will run `astro dev` for you:

```bash
npm run dev
```

Now you can see your project on `http://localhost/4321/`. Astro will listen for changes in files in the `src/` directory, so you will not need to restart the server after changes are made during development.

#### Astro Dev Toolbar

When viewing your project in the browser you will notice a partially hidden toolbar at the bottom of the project window. This is the `Astro Dev Toolbar` and will help you inspect your islands, spot accessibility issues and more.

## Conclusion

Astro emerges as a revolutionary framework in the world of web development with the aim to address the web's demands for high performance websites and improves developer convenience. With its release in May 2022, it marked the beginning of a new era in static site generation by offering a blend of features that makes it unique compared to its competitors. With an active development and growing community, it stands to further cement itself among the more established frameworks and static site generators with its innovations and enhancements.

## Learning Resources

If you found yourself intrigued after reading this case study on Astro, we'd recommend you check out the wide array of resources below:

**[Official Documentation](https://docs.astro.build)**: An obvious (but good one). Start with Astro's comprehensive documentation, which covers everything from basic setup to advanced features.

**[Web Pages in Half The Time](https://astro.build/case-studies/microsoft/)**: A case study from october 2023 on why Microsoft chose Astro to build their Fluent 2 design system website.

**[Astro in 100 seconds](https://www.youtube.com/watch?v=dsTXcSeAZq8)**: The title says it all. A short and concise video that explains Astro quick and easy.

**[Creating HTML template layouts](https://www.youtube.com/watch?v=o7iQAF2EvUU)**: Kevin Powell is a content creator which normally focus on vanilla HTML, CSS, and JS, but shows how Astro components can create layouts on pages.

**PodRocket - A web development podcast from LogRocket:** PodRocket have multiple episodes on Astro, where they discuss Astro's newest features with different guests.

- [Astro 2.0 with Ben Holmes](https://open.spotify.com/episode/1e9wRcZehVo1bVmODewQt4?si=f06a4ef50c6a4579)
- [Astro 3.0 with Matthew Phillips and Ben Holmes](https://open.spotify.com/episode/0aUdfZzOjtz2j97xPISaOx?si=26e278e90643448c)
- [Astro 4.0 with Elian Van Cutsem](https://open.spotify.com/episode/5pWvBCukkWpvJNkhUOfTlI?si=6ea17d4f26ce4dcf)

## References

- Website: [Astro Official Website](https://astro.build/)
- Website: [Official Website / Press](https://astro.build/press/)
- Website: [Crunchbase - Organization Info](https://www.crunchbase.com/organization/astro-0f1c)
- Repository: [GitHub Repo](https://github.com/withastro/astro)
- Docs: [Astro Documentation](https://docs.astro.build/en/getting-started/)
- Blog: [Introducing Astro](https://astro.build/blog/introducing-astro/)
- Blog: [Astro 0.21](https://astro.build/blog/astro-021-release/)
- Blog: [Astro 1.0](https://astro.build/blog/astro-1/)
- Blog: [Islands Architecture](https://jasonformat.com/islands-architecture/)
- Article: [What Is Astro? An Introduction to the Popular Static Site Generator](https://kinsta.com/blog/astro-js/)
- Article: [Astro: everything you need to know about this increasingly popular framework](https://www.devinterface.com/en/blog/astro-everything-about-framework)
- Article: [Astro Framework - Resources & Free Starters](https://dev.to/sm0ke/astro-framework-resources-free-starters-3jae)
- Article: [Astro adoption guide: Overview, examples, and alternatives](https://blog.logrocket.com/astro-adoption-guide/)
- Article: [Astro: The All-In-One Web Framework](https://www.linkedin.com/pulse/astro-all-in-one-web-framework-codingmart-technologies/)
- Video: [Astro just Launched... Could it be the ultimate web framework?](https://youtu.be/gxBkghlglTg?si=5czwlxVZjeDtm0sE)
