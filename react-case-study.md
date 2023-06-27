---
title: React Case Study
author: Tonje Totland Jenssen <tonjetj>
tags:  React, Case study, Front-end Development, JavaScript library
---

## Introduction

React is a free and open-source, highly popular and widely used JavaScript library for building fast and dynamic user interfaces. Its efficiency, flexibility and component-based architecture makes it an easy framework to work with, providing a seamless rendering and optimal performance. As one of the most popular frameworks, React is used on major platforms such as Netflix, Uber and Airbnb. 

In this case study, I'll go through React as a development platform, examining its features, strengths and weaknesses. I'll also compare React to other frameworks, such as Svelte and Vue, aiming to understand why it has become the preferred choice for many developers when building modern web applications.

## Brief History

React was created by Jordan Walke, a software engineer at Facebook. He was influenced by an HTML component library for PHP called XHP. Today, React has a full-time dedicated team working on it along with thousands of open source contributors. 

Here is a timeline showcasing some of the main events for React: 

- 2011: Jordan Walke, a software engineer at Facebook, creates an early prototype of React called "FaxJS."
- 2012: React is deployed on Facebook's News Feed and later on Instagram.
- 2013: React is officially introduced to the public at JSConf US and open-sourced by Facebook.
- 2015: React Native, a framework for building native mobile apps using React, is released.
- 2016: React.js Conf is held, displaying the latest advancements and updates in the React ecosystem.
- 2017: React Fiber, a complete rewrite of React's core algorithm, is introduced, improving performance and enabling concurrent rendering.
- 2018: React 16 is released, introducing features like React Hooks, Error Boundaries, and Context API updates.
- 2020: Concurrent Mode, a new experimental feature for concurrent rendering, is announced and gradually made available.
- 2021: React 18 Alpha is released, featuring new features like React Server Components and Automatic batching. 
- 2022: React 18 was released which introduced a new concurrent renderer, automatic batching and support for server side rendering with Suspense.

## Main Features

React is a powerful JavaScript library designed primarily for building user interfaces (UI). It offers a range of features that simplify the development process and enhance the performance of web applications. 

React is simple to use and learn. A developer with knowledge in JavaScript can quickly understand the concept of React and start the development of applications. 

Here are some of the key aspects of React: 

| **Feature** | **Description** | **Code Snippets** | **Explanation** |
| --- | --- | --- | --- |
| **Virtual Dom** | React's virtual DOM efficiently updates and renders components by performing minimal changes to the actual DOM. This leads to an improved performance and a nicer user experience. | *image* | This is the code responsible for rendering the root component of the application into the DOM. This code is located in the index.js file of your React project. The "ReactDOM.render()" function renders the "<App/>" component, which is used as the root component of the app. The rendered result is attached to the element with the "id" of "root" in the DOM.  |
| **Reusable Components** | React's component-based architecture enables the creation of reusable UI components to build complex UI as well as reducing development time. | *image* | Notice how <MyButton/> starts with a capital letter. All components must start with a capital letter, while HTML tags must be lowercase. |
| **React Hooks** | Hooks allows developers to use state and other React features in functional components. Hooks simplify state management leading to more concise and readable code. | *image* | Functions starting with ```use``` are *Hooks*. useState is a built-in Hook. Hooks are more restrictive than other functions. You can only call Hooks *at the top* of your components (or other Hooks). In this example, the count in ```MyApp``` will change both of the counts in ```MyButton```.  |
| **React Router** | React Router provides declarative routing for React applications, allowing you to create a dynamic navigation UI with several URLs and viewed components. | *image* | The Routes and Route components handle declarative routing. The App component renders the Routes component. Each Route component has a path and an element prop which corresponds to the component it renders. Here, ```Home``` is rendered when the path is "/", and the ```About``` component is rendered when the path is "/about". The Link component inside the nav element is used to create a navigational link to the two components, ```Home``` and ```About```. The "to" prop decides the destination path for each link. When the links are clicked, they will render the component specified in the "Route" component. |
| **JSX Syntax** | JSX combines HTML-like syntax with JavaScript, allowing developers to write expressive and dynamic UI components. It helps you simplify the creation of complex UI structures and makes it easier to visualize the component hierarchy. Unlike Vue, another popular framework, React doesn't overwhelm developers with an abundance of extra HTML attributes.| *image* | JSX is stricter than HTML. You need to close tags like <br/>. Your component also cannot return multiple JSX tags. You need to wrap them into a shared parent: "<div> ... </div>" or "<> ... </>" wrapper. |

React's uniqueness comes from its ability to combine the benefits of a virtual DOM and its powerful features which contributes to its success in building great UI that is scalable, maintainable and efficient. 

What also makes React great to use, is it's large and active community of developers who contribute to its "ecosystem". This in particular makes React extremely available and makes it easier for developers to get started as it results in a huge learning resource, library and tools that are helpful. 

## React's tools and libraries

With React follows a bunch of great React UI libraries that makes your task of creating a beautiful web application much easier. These React UI libraries will help you cut down on time and ensure that your website is built with great design and user experience.

Here are three of the best React UI libraries that helps you create a beautiful web application in a shorter amount of time: 

1. **[TailwindCSS](https://tailwindcss.com/):** TailwindCSS is a utility-first CSS framework. 

How it works: 
Utility class names define what to do. To make a CSS property activate, you need to find the relevant class and assign it to your element. 

// Insert ss photo here

What's nice about TailwindCSS is how it will remove all unused CSS when building for a production. 

2. **[MUI](https://mui.com/):** MUI is free and fully-loaded component library. 

It contains four libraries: 
1. **Material UI:** Contains React UI components which implements Google's Material Design. 
2. **Joy UI:** A library with beautifully designed React UI components.
3. **MUI Base:** Has headless, or unstyled, React UI components and low-level hooks.
4. **MUI System:** Is a collection of CSS utilities for laying out your own designs with MUI components libraries. 


3. **[Chakra UI](https://chakra-ui.com/):** This is a popular library allowing developers to design components. It is similar to both MUI and TailwindCSS in being open-sourced. 

Chakra UI focuses on simplicity, consistent design patterns and accessibility. 

What's nice about Chakra UI components is that they are dark mode compatible.


There are of course a many other React UI libraries to choose from when developing with React, but these three are one of the more popular ones to use. 


## Market Comparison

In this section I'll compare React to Vue.js and Svelte, which are two other popular JavaScript frameworks for building UI. I'll also go through the frameworks, explaining briefly how they work and what their benefits are. 

### Svelte

**What is Svelte?**

Svelte is a JavaScript framework for building web application UIs. It prioritizes fast performance, small size, and easy-to-learn syntax. Developed by Rich Harris in 2016, it is an open-source front-end compiler written in TypeScript. Svelte is particularly suitable for smaller to medium-sized projects with simpler components, emphasizing speed and a compact codebase.

**Benefits of using Svelte**

So, what makes Svelte good? 

- Overhead-free: Unlike React, Svelte eliminates the overhead associated with the virtual DOM. It compiles HTML templates into efficient code that directly manipulates the DOM, resulting in reduced file sizes and improved client performance.

- Simplicity: Svelte's code resembles Vanilla JavaScript, enabling developers to achieve project goals with fewer lines of code.

- Powerful tools: Svelte provides excellent control over state management, routing, and infrastructure building. It excels in DOM manipulation, reactive frameworks, and emerging markets.

**When to use Svelte?**

Svelte is recommended for applications running on low-capacity or low-power devices, such as older smartphones or tablets with limited processing power and battery life compared to high-end devices.

### Vue.js

**What is Vue.js?**

Vue.js is a flexible and approachable JavaScript framework for building user interfaces. It offers developers a wide range of features and tools to create complex and scalable applications efficiently, making it a popular choice for developers.

**Benefits of using Vue.js**

- Flexible and Easy to Use: Vue.js provides a flexible template syntax that is easy to learn and use. Its HTML-like templates can be parsed and compiled into virtual DOM render functions, enabling the creation of dynamic and interactive user interfaces with minimal code.

- Plugin System: Vue.js incorporates a plugin system that allows developers to customize the framework with their own functionality. This extensibility enables the rapid addition of new features and capabilities to applications without modifying the core Vue.js code.

- Simplified Data Management and Navigation: Vue.js simplifies the process of managing application data and navigation flow. Its template syntax facilitates the construction of reusable components, making it easier to maintain and update the application's user interface.

**When to use Vue.js**

Vue.js is well-suited for various use cases, including:

- Lightweight Web Interfaces and Single-Page Applications (SPAs): Vue.js is well suited for creating lightweight web interfaces and SPAs where smooth rendering and seamless navigation are essential. It offers built-in routing capabilities and state management options that contribute to a seamless user experience.

- Desktop and Mobile Apps: Vue.js can also be employed to build desktop and mobile applications.

### Trends and statistics: React vs Svelte vs Vue.js

I did a search on Google Trends to compare the three frameworks. The charts will only display the search interest. The chart displays a period covering the last 5 years, dating back to July 1st, 2018. React has the blue color, Vue.js has the red color and Svelte the yellow color.

// Insert ss
*(Screenshot from Google Trends)*
This chart display the interest in React as a framework compared to Svelte and Vue.js based on an online search. 

I also did a search on the website [npm trends]() - containing stats about package download counts over time in the developing community - to get a overview on the stats for React vs Svelte vs Vue. 

// Insert ss
*(Screenshot from npm trends website)*

This chart displays the amount of downloads of the three different frameworks from the last 5 years to June 18th 2023. You can see that the interest of both Svelte and Vue.js peaked sometime in the end of 2022. However, React still remains a very popular framework to download.

// Insert ss
*(Screenshot from npm trends website)*
This statistics shows the amount of stars, issues, versions, when the frameworks last got updated, and when they were created. 

Here you can see that React is the number one framework when it comes to the amount of times it has been starred on GitHub. Starring is something you do to make it easier to find a repository or topic again later. This just showcases that React is a framework used by a lot of people, and more rapidly used over time than both Svelte or Vue.js has.  


In [this article](https://medium.com/javascript-scene/top-javascript-frameworks-and-technology-2023-4e4a06d6be93) written by Eric Elliott, he mentions how the job market in 2023 looks for the following frameworks: 

- React
- Angular
- Vue.js
- Svelte
- SolidJS

// Insert ss
*(Screenshot taken from the article above.)*

He found that according to Indeed.com, React was mentioned in over 57% of all job listings that mentioned any front-end framework, with Vue.js landing the third place and Svelte on a shared fourth. This shows that React is still an in demand framework to use in the job market. 

// Insert ss x 3
*(Screenshots taken from [State of JS](https://2022.stateofjs.com/en-US/libraries/))*

Here's three different screenshot showing the difference between React, Vue.js and Svelte. The chart shows that a higher point means a technology has been used by more people, and a point further to the right means more users *wants* to learn it or have used it and would use it again. 

This chart clearly shows React dominating both Svelte and Vue.js in how many have used it. Vue.js is just below the Y-axis and Svelte much further down. However, all three frameworks remain on the positive side of the X-axis, making all three frameworks technologies users wants to learn or wants to use again. 

// Insert ss
*(Screenshot taken from [State of JS](https://2022.stateofjs.com/en-US/libraries/front-end-frameworks/))*

This graph splits positive vs negative, where the positive (green) means "wants to learn" or "would use again", while negative (red) means "would not use again" and/or "not interested". 

Here you can see that React has the most positive feedback from users, placing Svelte in tight second and Vue.js on third. 

All of these graphs and statistics clearly shows that even though both Svelte and Vue.js are two popular frameworks to use, React still remain the number one framework people shows interest in using and learning.

### What is the advantages of React compared to Svelte and Vue?

React is a highly popular JavaScript framework known for its efficient and scalable UI development. When comparing React to Svelte and Vue, it becomes evident that React offers numerous advantages that make it the winning framework in many scenarios.

React is a widely adopted JavaScript library for building user interfaces. Its popularity stems from its robust ecosystem, extensive community support, and strong backing from Facebook. 

React stands out as a powerful framework when compared to Vue.js and Svelte. Its extensive ecosystem, high performance, and virtual DOM implementation have contributed to its widespread adoption. React's emphasis on reusability, component composition, and declarative syntax provide developers with a flexible and efficient development experience. While both Vue.js and Svelte also offer component-based architectures and their own unique advantages, React's maturity, community support, and performance optimizations make it a popular choice for building complex web applications.

### What is the disadvantages of React?

While React is a powerful framework, there are a few considerations to keep in mind when comparing it to Vue.js and Svelte. One disadvantage is how React's syntax often requires developers to write more code compared to Vue.js and Svelte. This can lead to increased development time and potentially more room for error.

Another aspect to consider is React's performance in certain scenarios. While React's virtual DOM efficiently updates the UI, it may still face performance issues when dealing with extremely large and complex applications. In contrast, Vue's reactivity system and Svelte's compile-time optimizations allow them to achieve better performance in certain cases.

Lastly, React's ecosystem, while extensive, can be overwhelming. With numerous libraries, tools, and community-driven solutions available, developers may find it challenging to navigate and choose the right options for their specific needs. In comparison, Vue's and Svelte's ecosystems are often regarded as more cohesive and beginner-friendly.

It's important to note that React remains a widely adopted framework with strong community support. Ultimately, the choice between React, Vue.js, and Svelte depends on your project's needs. However, considering that Vue.js and Svelte are both two very popular frameworks to use, React still has a steady foot when it comes to job market and how in demand it is as a framework. React is the number one framework mentioned of all job listings for front-end frameworks, thus making React a very attractive framework to know. 

## Real-world Use Cases

**Netflix**
// Insert ss
*(Screenshot taken from [this website](https://www.digi.no/artikler/netflix-reduserer-videokvaliteten-i-30-dager/488109) since I don't have Netflix myself.)*

- Netflix is a popular streaming platform which uses React for its web interface.
- React enables Netflix with a smooth and interactive UX.
- Netflix uses React for their Gibbon platform that is used for low-performance TV devices. 
- React's component-based architecture allows Netflix to build and maintain a scalable and modular UI system. 
- Netflix uses React for image synthesis and in other server-side functions.

**Uber**
// Insert ss
*(Screenshot taken from [uber's website](https://www.uber.com/no/nb/))*

- Uber is a popular "taxi" or transportation service which allows users to request rides, track the ride in real-time and make payments via the application.  
- React's fast rendering and component reusability contributes to the responsive and real-time updates in the driver dashboard and food ordering experience. 

**Airbnb**
// Insert ss
*(Screenshot taken from [Airbnb's website](https://www.airbnb.no/))*

- Airbnb is an online application for lodging and tourism experiences, which uses React. 
- React's virtual DOM and efficient rendering help Airbnb deliver real-time search results, dynamic filters, and responsive UI. 
- React's reusable components enables Airbnb to build and customize UI components across their platform. 
- React's flexibility has allowed Airbnb to reuse React code for different functions.

**Bonus**
Here's a [link](https://github.com/Th3Wall/Fakeflix) to a GitHub repository made by a guy who recreated Netflix's website using React, Redux, Firebase and Framer Motion, calling it Fakeflix. 

## Getting Started with React

To get started with React, follow these steps: 

1. **Installation:** Begin by setting up the necessary tools and dependencies for React development. React can be integrated into new or existing projects. You can install React by using npm (Node Package Manager) or yarn, which are popular package managers for JavaScript projects. Open your terminal or command prompt and run the following command to create a new React application:
```
npx create-react-app my-react-app
```

This command will create a new directory called "my-react-app" and set up a basic React project structure for you. 

2. **Project structure:** Once the installation is complete, navigate to the project directory using the command:

```
cd my-react-app
```
Inside the project directory, you will find the core files and folders of a React application, such as the `src` folder where your application code resides, the `public` folder for static assets, and configuration files like `package.json` and `webpack.config.js`.

3. **Development Server:** React provides a built-in development server that allows you to preview and test your application locally. Start the development server by running the following command:

```
npm start
```
This command will start the development server and automatically open your application in a web browser. Any changes you make to your code will be hot-reloaded, meaning you can see the updates instantly without manually refreshing the page.

4. **Writing React Components:** In React, UI elements are created using components. Components are reusable, self-contained units that hold specific functionality and rendering logic. To create a new component, you can define a JavaScript function or class that returns JSX (a combination of HTML and JavaScript syntax). Here's an example of a simple functional component:

jsx file
```
import React from 'react';

function Greeting() {
  return <h1>Hello, React!</h1>;
}

export default Greeting;

```
You can use this component in other parts of your application by importing it and including it in the JSX code.

You can visit [React's](https://react.dev/learn) homepage to read more about documentation and how to use React. 

## Conclusion

Throughout this case study I have explored the key strengths of React, its market position, and the disadvantages with React. 

Front-end development is ever-evolving, with new trends and frameworks constantly appearing. While React's dominance is unquestionable, keeping an eye on these trends and how they shape the industry is still important.

While Vue.js and Svelte have their own advantages, React's maturity, ecosystem, and performance optimizations have made it the preferred framework for many developers.

Looking ahead, the future for React appears promising. In terms of market comparison, React has emerged as the framework of choice for many developers. It has gained an impressive growth over time, surpassing competing frameworks like Vue.js and Svelte in terms of popularity, community support, and job market demand. 

In conclusion, React has established itself as a leading JavaScript library for building user interfaces in front-end development. It offers a powerful and efficient solution for building UI. Its efficiency, reusability, and thriving ecosystem, position it as a top choice for front-end development. This makes React a valuable development platform for developers aiming to build modern and scalable web applications.

## Credits
- Tonje Totland Jenssen (tonjetj)

## References
- *React (software)* by Wikipedia
- [The Article](https://en.wikipedia.org/wiki/React_(software))
- *Top 10 Big Companies Using React* by Olga Melnyk, January 4, 2023
- [The Article](https://careerkarma.com/blog/companies-that-use-react/)
- *How difficult is it to Learn React* by Noble Desktop
- [The Article](https://www.nobledesktop.com/learn/react/how-difficult-is-it-to-learn-react)
- *11 Reasons Why React.js is Still Popular in 2023*, by iFour Team, February 28, 2023
- [The Article](https://www.ifourtechnolab.com/blog/11-reasons-why-react-js-is-still-popular-in-2023)
- *Everything you need to know about React*, by The Research Nest, November 15, 2021
- [The Article](https://medium.com/the-research-nest/everything-you-need-to-know-about-react-ab24da4275ea)
- *What are the Pros and Cons of React*, by KnowledgeHut, June 15, 2023
- [The Blog Article](https://medium.com/the-research-nest/everything-you-need-to-know-about-react-ab24da4275ea)
- *Svelte vs React: Which JavaScript Framework is Better?*, by Kedar Kanekar, May 5, 2023
- [The Article](https://www.turing.com/blog/svelte-vs-react-which-javascript-framework-should-you-choose/)
- *Vue vs React: Which One To Choose in 2023?*, by Oleg Goncharenko, March 30, 2023
- [The Article](https://brocoders.com/blog/react-vs-vue/)
- *The History of React.js on a Timeline*, by Ferenc Hámori, May 31, 2022
- [The Article](https://blog.risingstack.com/the-history-of-react-js-on-a-timeline/)
- *Acknowledgements* 
- [Page with short information about React](https://blog.risingstack.com/the-history-of-react-js-on-a-timeline/)
- *The JavaScript Frameworks and Technology 2023*, by Eric Elliott, February 20th, 2023
- [Article](https://medium.com/javascript-scene/top-javascript-frameworks-and-technology-2023-4e4a06d6be93)
- *10 Best Free React UI Libraries in 2023*, by Ashutosh Mishra, January 23, 2023 
- [Article](https://www.wearedevelopers.com/magazine/best-free-react-ui-libraries)
- [React website](https://react.dev/)
- [npm trends showing statistics on popularity between React, Svelte and Vue](https://npmtrends.com/react-vs-svelte-vs-vue)
- [Google Trends](https://trends.google.com/trends/explore?cat=1142&date=all&q=%2Fm%2F012l1vxv,%2Fg%2F11c0vmgx5d,%2Fg%2F11c5t00h04&hl=no)
- [Charts and statistics](https://2022.stateofjs.com/en-US/libraries/front-end-frameworks/)
- [Charts and statistics](https://2022.stateofjs.com/en-US/libraries/)
- *Top 30 Companies Using React JS Development*, April 11, 2023 
- [Article](https://jaydevs.com/top-companies-using-react-js/)
