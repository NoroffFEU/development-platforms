---
title: Qwik Case Study
author: Rune Unhjem <runeunhjem>
tags: Qwik, case study, web framework, performance, lazy loading, server-side rendering
---

<a href="https://qwik.builder.io/" title="Visit Qwik" target="_blank">
    <img src="https://seeklogo.com/images/Q/qwik-logo-4D2D8CA440-seeklogo.com.png" alt="Qwik Logo" width="100" height="100">
</a>

# Qwik -  Deliver instant apps at scale

#### <i>A New Approach to Performance Optimization</i>

## Introduction
Qwik, a modern and fairly new web framework, is uniquely designed for optimal performance in web applications.
Sites and apps can boot with an initial payload of about 1kb of JS (regardless of application complexity), giving instant interactivity, and achieving consistent performance at scale. (The total JavaScript size will depend on the application's complexity and the amount of code lazily loaded over time).
With its focus on [resumability](https://qwik.dev/docs/concepts/resumable/) and fine-grained lazy loading, Qwik is a standout choice for projects where speed and efficiency are crucial.

## Brief History

- **2021**: Introduction of Qwik, highlighting lazy-loading and SSR.
- **2022**: Growing adoption, demonstrating its efficiency in reducing load times.
- **2023**: Qwik gains traction as a performance-focused framework, and reached Qwik v1.0 in May 2023.

## What is the problem?
Modern websites require vast amounts of JavaScript to become interactive. Too much JavaScript manifests itself in two problems:

- **Startup Time:** The time it takes for the application to become interactive is too long, leading to a poor user experience. Once on the client, the code needs to be executed (as part of hydration) <a href="https://www.builder.io/blog/hydration-is-pure-overhead?__hstc=186550006.ef833f74d0b2cb5d8c93b63a79de5b49.1706623625832.1707120344013.1707124709195.4&__hssc=186550006.3.1707124709195&__hsfp=1673902278" title="Read more about hydration here" target="_blank">[?]</a> to get the site interactive.
- **Network Bandwith:** A large amount of code is shipped to the client, which may take a long time on slow networks. Unnecessary code is transferred, increasing data usage and slowing down the user experience.

As our applications get more complex with a higher fidelity of interactivity, the amount of code has steadily increased over the years with no sign of stopping. Simply put, our sites are getting more complex. An increase in site complexity, in turn, requires more code. All of this code negatively impacts site startup performance.

To make matters worse, JavaScript is single-threaded; therefore, our complex sites can't take advantage of modern multi-core CPUs. This means that the more JavaScript we ship, the slower our sites become.

## How does Qwik solve the problem?

Qwik addresses these issues by introducing a new approach to web development, focusing on performance optimization.
It achieves this by using the following <b>core concepts</b>:

- **Resumability <a href="https://qwik.dev/docs/concepts/resumable/" title="Read more about resumability here" target="_blank"> [?]</a>:** Qwik's resumable architecture allows the application to resume interactivity quickly, even after a page refresh or a network interruption.
- **Fine-Grained Lazy Loading:** Qwik only loads the necessary code chunks during user interactions, reducing the amount of code shipped to the client.
- **Server-Side Rendering (SSR):** Qwik enhances initial load performance and SEO by rendering the initial HTML on the server.
- **State Management:** Qwik efficiently manages, serializes, and transfers state, reducing the amount of data transferred between the client and server.
- **Framework Agnostic:** Qwik can be used with other frameworks like React or Angular, allowing developers to leverage its performance benefits without having to rewrite their entire application.
- **Web Standards:** Qwik leverages standard web APIs, ensuring that it remains future-proof and compatible with modern web technologies.

Qwik is designed from the ground up to address the size problem. Small bundle size is its initial goal, and all other design decisions are subservient to that goal.

It is not about creating less JavaScript. Qwik is about not having to ship all of that JavaScript to the client at once on application startup. Qwik is what you end up with when you take the idea of "delay loading of JavaScript" to the extreme.

Yes, Qwik requires a different way of thinking and designing your application, but the result is near zero initial JavaScript with progressive JavaScript download based on user interactions.

## Scenarios Where Qwik Outperforms Other Frameworks
- High-Performance Web Applications: For applications where performance, particularly initial load time and time to interactive (TTI), is critical, Qwik's design to minimize the initial JavaScript payload can lead to significantly faster performance compared to more traditional frameworks. This is especially true for complex applications served to users on slow networks or less powerful devices.

- E-Commerce Websites: In e-commerce, every millisecond of delay can reduce conversion rates. Qwik's ability to deliver nearly instant interactivity could lead to higher engagement and conversion rates, making it an excellent choice for retail websites looking to maximize user experience and sales.

- Content-Heavy Sites: Media sites, blogs, and other content-heavy platforms that benefit from fast page loads and seamless user navigation can leverage Qwik's server-side rendering and fine-grained lazy loading. This ensures users access content quickly, improving overall user satisfaction and SEO performance.

- Progressive Web Apps (PWAs): Qwik's architecture supports building PWAs that require rapid loading and interactivity across various network conditions. Its efficient state management and lazy loading are advantageous for PWAs aiming to provide a native app-like experience on the web.

## Scenarios Where Qwik Might Not Be the Best Choice
- Simple Websites or Landing Pages: For very simple sites or basic landing pages with minimal interactivity, the advanced features and optimizations offered by Qwik might be overkill. In such cases, simpler solutions or static site generators could be more efficient and easier to implement.

- Projects Requiring Extensive Third-Party Integrations: While Qwik is designed to be framework-agnostic and can work alongside other libraries, projects heavily reliant on a wide array of third-party integrations and plugins might encounter challenges. This is particularly true if those integrations are not optimized for Qwik's lazy loading and resumable architecture.

- Teams Unfamiliar with Qwik's Paradigms: Qwik introduces unique concepts and approaches to web development, such as resumability and fine-grained lazy loading. Teams without the time or inclination to learn these new paradigms might prefer sticking with more familiar frameworks, especially under tight deadlines or with existing codebases.

- Legacy Applications: Refactoring large, legacy applications to take full advantage of Qwik's architecture could be a significant undertaking. In cases where an existing application already performs adequately using another framework, the cost and effort of migrating to Qwik might not be justified.

## Advantages and Challenges

#### Advantages
- Qwik excels in high-performance environments, improving loading times and interaction speed.
- Its architecture is beneficial for complex applications requiring rapid startup and responsiveness.
- Exceptional performance and speed.
- Minimal JavaScript overhead.
- HTML-centric approach.
- Server rendering by default.

#### Challenges
- Relatively new with a smaller community.
- Developers accustomed to traditional frameworks may face a learning curve understanding Qwik's lazy-loading and state management.
- Limited ecosystem compared to older frameworks.

## Market Position and Comparison
According to the [2022 State of JavaScript survey](https://2022.stateofjs.com/en-US/libraries/front-end-frameworks/), Qwik is gaining traction, especially in the performance category. The following table shows the retention and usage of Qwik compared to other popular frameworks:

| Framework |	Retention in 2022 (%) |	Retention in 2021 (%) |	Usage in 2022 (%) |	Years since release as of 2023 |
|-----------|------------------------|------------------------|-------------------|--------------------------------|
|Solid| 91 | 90 | 6 | 3 |
|Svelte| 90 | 90 | 21| 7 |
|Qwik| 85 | 0 | 2 | 2 |
|React| 83 | 84 | 82 | 10 |
|Vue.js| 77 | 80 | 46 | 9 |
|Angular| 43 | 45 | 49 | 14 |

As seen in the table, Qwik has a retention rate of 85% in 2022, which is impressive for a framework that was released only two years ago. This indicates that Qwik is gaining traction and is being adopted by developers.
And looking at the usage in 2022, Qwik has a 2% usage rate, which is also impressive for a framework that was released only two years ago.

<img src="./qwik-vs-others.png" alt="Qwik versus other frameworks">
(Screenshot from Manu Martinez-Almeida'S - <a href="https://www.youtube.com/watch?v=bvSlEweRyjE&list=PLq_6N4Z1G7mSAh_v9jfVUcu_R1vOM5Nob" title="See the full video on youtube" target="_blank">Qwik: Performance is a Human Design Issue | ViteConf 2023</a>)

The bigger and more complex the app or site, the more JS is shipped to the client.
Qwik is designed to address this problem by shipping only the necessary code to the client, resulting in faster load times and better performance.

**Qwik is gaining attention for its performance optimization compared to React, Vue.js, or Angular:**

1. **Performance:** Superior load times and interaction handling.
2. **Adoption:** Gaining traction despite being less widely adopted.
3. **Learning Curve:** Steeper for those unfamiliar with its unique concepts.
4. **Community and Support:** Growing community contributing to its development.

[DeveloperTown](https://developertown.com/) has a comparison of popular frameworks with pro's and cons, which can be found here:
<a href="https://developertown.com/javascript-framework-comparison" title="JavaScript Framework Comparison" target="_blank">JavaScript Framework Comparison</a>

## Use Cases and Applications
Qwik shines in scenarios demanding rapid load times and interactivity, such as:

- E-Commerce Platforms: Where performance directly impacts conversion rates.
- Media Sites: Handling dynamic content with seamless user experiences.
- Interactive Dashboards: For real-time data with optimal responsiveness.

## Getting Started

Begin with Qwik by understanding basic HTML, CSS, and JavaScript.
Knowledge of modern web development concepts is beneficial, but not mandatory.

#### Prerequisites:

To get started with Qwik locally, you need the following:

- [Node.js v16.8](https://nodejs.org/en/download/) or higher
- Your favorite IDE ([vscode](https://code.visualstudio.com/) recommended)

#### Installation and setup:

Run the Qwik CLI in your shell. Qwik supports npm, yarn, pnpm and bun. Choose the package manager you prefer and run one of the following commands:

```bash
npm create qwik@latest
```
```bash
pnpm create qwik@latest
```
```bash
yarn create qwik
```
```bash
bun create qwik@latest
```
The CLI guides you through an interactive menu to set the project name, select one of the starters and ask if you want to install the dependencies. Find out more about the files generated by referring to the [Project Structure](https://qwik.dev/docs/project-structure/) documentation.

Start the development server:

```bash
npm start
```
```bash
pnpm start
```
```bash
yarn start
```
```bash
bun start
```

## Practical Example: Building a Simple App

```bash
// A simple Qwik component
import { component$, useStore$ } from "@builder.io/qwik";

export const Counter = component$(() => {
  const state = useStore$({ count: 0 });
  return (
    <button onClick$={() => state.count++}>
      Count is: {state.count}
    </button>
  );
});
```

## Qwik City

While Qwik focuses on Component API, Qwik City contains API to support the component with common server-focused features:
- [routing](https://qwik.dev/docs/routing/): Define your application routes with directory-based routing. (Supports both MPA and SPA routing models.)
- [pages](https://qwik.dev/docs/pages): Render application pages, the main feature of an application.
- [layouts](https://qwik.dev/docs/layout/): Define common shared page layouts to be reused across pages.
- [loaders](https://qwik.dev/docs/route-loader/): Fetch data on the server to be used by the component.
- [actions](https://qwik.dev/docs/action/): Provide a way for the component to request the server to perform an action.
- [validators](https://qwik.dev/docs/validator/): Provide a way for validating actions and loaders.
- [endpoints](https://qwik.dev/docs/endpoints/): A way to define data endpoints for your RESTful API, GraphQL API, JSON, XML or reverse proxy.
- [middleware](https://qwik.dev/docs/middleware/): A centralized way to perform cross-cutting concerns such as authentication, security, caching, redirects, and logging.
- [server](https://qwik.dev/docs/server$/): A simple way to execute logic on the server.
- [cache](https://qwik.dev/docs/caching/): Control caching of your content.
- [env variables](https://qwik.dev/docs/env-variables/): API to manage reading environment variables, commonly used for keys, in a platform-independent way.
- Supports both Server Side Rendering (SSR) for fully dynamic sites as well as Static Site Generation (SSG) to be hosted on static web servers and CDNs.

###### Qwik City is also being called a <i>meta-framework</i> for Qwik. It is to Qwik, what [Next.js](https://nextjs.org/) is to React, what [Nuxt](https://nuxt.com/) is to Vue, [SvelteKit](https://kit.svelte.dev/) to Svelte and [Analog](https://analogjs.org/) is to Angular.

## Conclusion

Qwik is a forward-thinking framework, addressing the needs of modern web applications with a focus on performance. For now, the usage is quite limited, but it shows the potential to become a significant player in the web development arena, thanks to its innovative approach.

## References

- [A quick introduction to Qwik](https://www.youtube.com/watch?v=m5PX9XF1in8) 15m 40s by Dev Leonardo
- [Qwik - Official Site](https://qwik.builder.io/)
- [Qwik Documentation](https://qwik.builder.io/docs/)
- [Qwik GitHub Repository](https://github.com/BuilderIO/qwik)
- [WeAreDevelopers](https://www.wearedevelopers.com/magazine/best-javascript-frameworks-to-learn)

## Additional Resources

- [Qwik: Performance is a Human Design Issue](https://www.youtube.com/watch?v=bvSlEweRyjE&list=PLq_6N4Z1G7mSAh_v9jfVUcu_R1vOM5Nob)
A 20m 44s video by Manu Martinez-Almeida from ViteConf 2023
- [Building a Sample App with Qwik](https://qwik.builder.io/tutorial/)
- [A first look at Qwik - the HTML-first framework](https://www.builder.io/blog/introducing-qwik-framework)
- [Qwik Framework Deep-Dive Full Course with Misko Hevery](https://www.youtube.com/watch?v=dc6mUwXnyqE) A 3hr 20 min deep dive into Qwik with Misko Hevery (The Creator of Angular & now Qwik)

Rune Unhjem on [GitHub](https://github.com/runeunhjem), Published: 2024-02-16