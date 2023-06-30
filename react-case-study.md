---
title: React Case Study
author: Tonje Totland Jenssen <tonjetj>
tags:  React, Case study, Front-end Development, JavaScript library
---

## Introduction

This is a case study about the popular JavaScript framework called React. React is a free to use, open-source, and widely used JavaScript library. The framework is used for building dynamic user interfaces (UI) for web and mobile applications.  It is an easy framework to work with due to its efficiency, flexibility and component-based architecture, which can result in seamless rendering and great performance. As one of the most popular frameworks, React is used on major platforms such as Netflix, Uber and Airbnb. 

In this case study, I'll go through React as a development platform, examining its features, strengths and weaknesses. I'll also compare React to two other highly popular frameworks, Svelte and Vue.js, and try understand *why* it's still the preferred framework to work with for many developers when building modern web applications. 

## Brief History

The journey of React started when Jordan Walke, a software engineer at Facebook, created the framework after being influenced by an HTML component library for PHP, called XHP. Since 2013, when React was officially introduced to the public at JSConf US, its increasing popularity amongst developers has made it one of the leading JavaScript frameworks in the industry. Today, React has a full-time dedicated team working on it along with thousands of open source contributors and is being used in major platforms most of us are familiar with, such as Netflix, Uber, Airbnb, and many more. 

- 2011: Jordan Walke creates an early prototype of React called "FaxJS."
- 2013: React is officially introduced to the public at JSConf US and open-sourced by Facebook.

## Main Features

React is a powerful, flexible and easy-to-learn JavaScript library. It is designed primarily for building user interfaces (UI). React offers a range of different features that simplifies and enhance the development process and performance of web applications. A developer with some knowledge in JavaScript can quickly adapt to Reacts concept and start their development of applications. 

Here are some of the key aspects of React: 

| **Feature** | **Description** | **Code Snippets** | **Explanation** |
| --- | --- | --- | --- |
| **Virtual Dom** | React's virtual DOM will update and render components through performing minimal changes to the actual DOM. This creates an improved performance and a nicer user experience. | *image* | This is the code responsible for rendering the root component of the application into the DOM. This code is typically located in the ```index.js``` file of your React project. The "ReactDOM.render()" function renders the "<App/>" component, which is used as the root component of the app. The rendered result is linked to the element with the "id" of "root" in the DOM.  |
| **Reusable Components** | React's component-based architecture enables the creation of reusable UI components, which can help reduce the development time, and create complex but great UI. | *image* | A component, such as <MyButton/>, needs to start with a capital letter, while HTML tags must be lowercase. |
| **React Hooks** | Hooks lets developers use state and other React features in functional components. | *image* | Functions starting with ```use``` are *Hooks*. useState is a built-in Hook. You can only call Hooks *at the top* of your components (or other Hooks). In this example, the count in ```MyApp``` will change both of the counts in ```MyButton```.  |
| **React Router** | React Router provides declarative routing for React applications, which can result in a dynamic navigation UI with several URLs and viewed components. | *image* | The ```Routes``` and ```Route``` components handle declarative routing. The ```App``` component renders the ```Routes``` component. Each ```Route``` component has a path and an element prop which corresponds to the component it renders. Here, ```Home``` is rendered when the path is "/", and the ```About``` component is rendered when the path is "/about". The ```Link``` component inside the nav element is used to create a navigational link to the two components, ```Home``` and ```About```. The "to" prop decides the destination path for each link. When the links are clicked, they will render the component specified in the "Route" component. |
| **JSX Syntax** | JSX combines HTML-like syntax with JavaScript. It allows developers to write expressive and dynamic UI components. JSX helps you simplify the creation of complex UI structures and makes it easier to visualize the component hierarchy.| *image* | JSX is stricter than HTML. You need to close tags like ```<br/>```. Your component also cannot return multiple JSX tags. You need to wrap them into a shared parent: "<div> ... </div>" or "<> ... </>" wrapper. |

React has the ability of letting developers achieve building great user interfaces that is scalable, maintainable and efficient. Its large and active community of developers who contribute to its "ecosystem" helps making React a great framework to use. This "ecosystem" in particular, makes React extremely available and easier for developers to get started, as it results in a huge learning resource, library and tools that are helpful. 

## React's tools and libraries

With React follows a bunch of great React UI libraries that makes your task of creating a beautiful web application much easier. These React UI libraries will help you cut down on time and make sure your website is built with great design and user experience.

Here are three of the best React UI libraries that helps you create a beautiful web application in a shorter amount of time: 

1. **[TailwindCSS](https://tailwindcss.com/):** TailwindCSS is a utility-first CSS framework. 

How it works: 
Utility class names define what to do. To make a CSS property activate, you need to find the relevant class and assign it to your element. 

// Insert ss photo here

What's nice about TailwindCSS is how it will remove all unused CSS when building for a production. 

2. **[MUI](https://mui.com/):** MUI is a free component library. 

It contains four libraries: 
1. **Material UI:** Contains React UI components which implements Google's Material Design. 
2. **Joy UI:** A library with beautifully designed React UI components.
3. **MUI Base:** Has headless, or unstyled, React UI components and low-level hooks.
4. **MUI System:** Is a collection of CSS utilities for laying out your own designs with MUI components libraries. 


3. **[Chakra UI](https://chakra-ui.com/):** Chakra is a popular library which allows developers to design components. Just as MUI and TailwindCSS, Chakra is an open-sourced React library. 

Chakra UI focuses on simplicity, consistent design patterns and accessibility. 

What's nice about Chakra UI components is that they are dark mode compatible.


There are of course a many other React UI libraries to choose from when developing with React, but these three are one of the more popular ones to use. 

## Market Comparison

In this section I'll compare React to Vue.js and Svelte, which also are two popular JavaScript frameworks for building UI. I'll also go through the frameworks, explaining briefly how they work and what their benefits are. 

### Svelte

**What is Svelte?**

Svelte is a UI framework for creating web applications, developed by Rich Harris in 2016. It is a free and open-source front-end compiler. Just as React, it lets you build web applications explicitly out of components. Svelte will compile the components into tiny, yet efficient, JavaScript modules. This makes the web application you're building overhead-free and will instead manipulate the DOM directly. 

**Benefits of using Svelte**

- Overhead-free: Different to React, Svelte doesn't use the overhead associated with the virtual DOM. Instead, it compiles HTML templates and turns them into efficient code which directly manipulates the DOM. This results in reduced file sizes and improved performance since the browser has less work to do.

- Less code: Svelte's code is similar to Vanilla JavaScript, letting developers create compact projects with less code.

- Small size, high performance: Svelte will compile your code into minimal JavaScript before it gets to your browser, and thus leaves a way smaller footprint than what React does. 

- Easy to learn: Compared to React, Svelte is simpler to understand and start using due to it mostly being Vanilla JavaScript, HTML and CSS. 

- It's a loved framework: Svelte has a high level of satisfaction among developers. 

**When to use Svelte?**

Svelte is recommended for small to medium-sized applications, and can be a useful framework when you want to reduce your package size to improve the performance on your website. 

### Vue.js

**What is Vue.js?**

Vue.js is a flexible and approachable JavaScript framework for building user interfaces. Similar to Svelte and React, Vue.js will also let you create web applications explicitly out of components. It offers developers a wide range of features and tools to create complex and scalable applications efficiently, which makes it a popular choice for developers. The framework uses standard HTML with a template syntax that lets you describe HTML output based on JavaScript state. 

**Benefits of using Vue.js**

- Flexible and Easy to Use: Vue.js has a flexible template syntax that is easy to learn and use. Its HTML-like templates can be parsed and compiled into virtual DOM render functions, enabling you to build dynamic and interactive UI with little code.

- Plugin System: This Plugin System allows developers to customize the framework with their own functionality and rapidly add new features and functionality to the application without having to modify the core Vue.js code.

- Developer-friendly: Vue is extremely customizable and scalable between the library and the framework. It allows you to integrate different projects and will help out with developing the Vue-based app without much struggle. 

- Great documentation: Vue's documentation is very detailed and impressive, providing developers with information for simple installations to giving an overview of how Vue works. The documentation also compares Vue with other JavaScript frameworks. 

**When to use Vue.js**

It is well suited for creating lightweight web interfaces and SPAs where smooth rendering and seamless navigation are essential. It offers built-in routing capabilities and state management options that contribute to a great user experience.

### Trends and statistics: React vs Svelte vs Vue.js

I did a search on Google Trends to compare the three frameworks. The charts will only display the search interest. The chart displays a period covering the last 5 years, dating back to July 1st, 2018. React has the blue color, Vue.js has the red color, and Svelte the yellow color.

// Insert ss
*(Screenshot from Google Trends)*
This chart display the interest in React as a framework compared to Svelte and Vue.js based on an online search. 

I also did a search on the website [npm trends](https://npmtrends.com/react-vs-svelte-vs-vue) - containing stats about package download counts over time in the developing community - to get an overview on the stats for React vs Svelte vs Vue. 

// Insert ss
*(Screenshot from npm trends website)*

This chart displays the amount of downloads of the three different frameworks from the last 5 years to June 18th 2023. You can see that the interest of both Svelte and Vue.js peaked sometime in the end of 2022. However, React still remains a very popular framework to download.

// Insert ss
*(Screenshot from npm trends website)*
This statistics shows the amount of stars, issues, versions, when the frameworks last got updated, and when they were created. 

Here you can see that React is the number one framework when it comes to the amount of times it has been starred on GitHub. Starring is something you do to make it easier to find a repository or topic again later. This just showcases that React is a framework used by a lot of people, and more rapidly used over time than both Svelte and Vue.js are.  


In [this article](https://medium.com/javascript-scene/top-javascript-frameworks-and-technology-2023-4e4a06d6be93) written by Eric Elliott, he mentions how the job market in 2023 looks for React, Svelte and Vue.js, as well as Angular and SolidJS. 

// Insert ss
*(Screenshot taken from the article above.)*

According to Indeed.com, React was mentioned in over 57% of all job listings that mentioned any front-end framework, with Vue.js landing the third place and Svelte on a shared fourth. This shows that React is still an in demand framework to use in the job market. 

// Insert ss x 3
*(Screenshots taken from [State of JS](https://2022.stateofjs.com/en-US/libraries/))*

Here's three different screenshot showing the difference between React, Vue.js and Svelte. The chart shows that a higher point up the Y-axis means a technology has been used by more people, and a point further to the right on the X-axis means more users *wants* to learn it or have used it and would use it again. 

This chart clearly shows React dominating both Svelte and Vue.js in how many have used it. Vue.js is just below the Y-axis and Svelte much further down. However, all three frameworks remain on the positive side of the X-axis, making all three frameworks technologies users wants to learn or wants to use again. 

// Insert ss
*(Screenshot taken from [State of JS](https://2022.stateofjs.com/en-US/libraries/front-end-frameworks/))*

This graph splits positive vs negative, where the positive (green) means "wants to learn" or "would use again", while negative (red) means "would not use again" and/or "not interested". 

Here you can see that React has the most positive feedback from users, placing Svelte in a tight second and Vue.js on third. 

All of these graphs and statistics shows that even though both Svelte and Vue.js are two popular frameworks to use, React still remain the number one framework people shows interest in using and learning.

### What is the advantages of React compared to Svelte and Vue?

React is a highly popular JavaScript framework known for its efficient and scalable UI development. When comparing React to Svelte and Vue, it becomes evident that React offers numerous advantages that make it the winning framework in many scenarios. 

React stands out as a powerful framework when compared to Vue.js and Svelte. Its large community, great ecosystem, and strong backing from Facebook means that you can ask a React specialist from anywhere in the world for help. Its high performance and virtual DOM implementation have contributed to it being used by so many developers. You might also have a higher chance of getting hired if you know how to use React for UI development.

While both Vue.js and Svelte also offer component-based architectures and their own unique advantages, React's maturity, community support, and performance optimizations make it a popular choice for building complex web applications.

### What is the disadvantages of React?

While React is a powerful framework, there are a few considerations to keep in mind when comparing it to Vue.js and Svelte. One disadvantage is how React's syntax often requires developers to write more code compared to Vue.js and Svelte. This can lead to increased development time and potentially more room for error.

Another aspect to consider is React's performance in certain scenarios. While React's virtual DOM efficiently updates the UI, it may still face performance issues when dealing with extremely large and complex applications. In contrast, Vue's reactivity system and Svelte's compile-time optimizations allow them to achieve better performance in some cases.

Lastly, React's ecosystem *can* be overwhelming. With numerous libraries, tools, and community-driven solutions available, developers may find it challenging to navigate and choose the right options for their specific needs. In comparison, Vue's and Svelte's ecosystems are often regarded as more cohesive and beginner-friendly.

It's important to note that React remains a widely adopted framework with strong community support. Ultimately, the choice between React, Vue.js, and Svelte depends on your project's needs. However, considering that Vue.js and Svelte are both two very popular frameworks to use, React still wins in terms of when it comes to the job market and how in demand it is as a framework. React is the number one framework mentioned of all job listings for front-end frameworks, thus making React a very attractive framework to know. 

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
**Introduction and Brief History**
- [React's website](https://react.dev)
- [*React (software)*](https://en.wikipedia.org/wiki/React_(software)) by Wikipedia

**Main Features**
- [React's website](https://react.dev)
- [MUI](https://mui.com/)
- [Chakra UI](https://chakra-ui.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [*10 Best Free React UI Libraries in 2023*](https://www.wearedevelopers.com/magazine/best-free-react-ui-libraries), by Ashutosh Mishra, January 23 2023 


**Market Comparison**
*Svelte*
- [Svelte's website](https://learn.svelte.dev/tutorial/welcome-to-svelte)
- [*Svelte vs React: Which JavaScript Framework is Better?*](https://www.turing.com/blog/svelte-vs-react-which-javascript-framework-should-you-choose/), by Kedar Kanekar, May 5th 2023
- [*React vs. Svelte: Performance, DX, and more*](https://blog.logrocket.com/react-vs-svelte/#react-virtual-dom-vs-svelte-compiler), by Carlos Mucuho, May 17 2023

*Vue.js*
- [Vue.js's website](https://vuejs.org)
- [*Vue vs. React - Which One To Choose In 2023?*](https://brocoders.com/blog/react-vs-vue/) by Oleg Goncharenko, March 30th 2023

*Trends and Statistics*
- [*The JavaScript Frameworks and Technology 2023*](https://medium.com/javascript-scene/top-javascript-frameworks-and-technology-2023-4e4a06d6be93), by Eric Elliott, February 20th 2023
- [*npm trends showing statistics on popularity between React, Svelte and Vue*](https://npmtrends.com/react-vs-svelte-vs-vue)
- [*Google Trends*](https://trends.google.com/trends/explore?cat=1142&date=all&q=%2Fm%2F012l1vxv,%2Fg%2F11c0vmgx5d,%2Fg%2F11c5t00h04&hl=no)
- [*Charts and statistics*](https://2022.stateofjs.com/en-US/libraries/front-end-frameworks/)
- [*Charts and statistics*](https://2022.stateofjs.com/en-US/libraries/)
- [*Top 30 Companies Using React JS Development*](https://jaydevs.com/top-companies-using-react-js/), April 11, 2023 


