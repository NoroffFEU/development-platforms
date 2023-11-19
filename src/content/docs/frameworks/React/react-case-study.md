---
title: React
author: Ritu Gunjan <ritugunjan>
tags: javascript, framework, react
---

## Introduction

React, also known as React.js or ReactJS, is an open-source JavaScript library. It was developed by Facebook and was first released to the public in 2013. The library was created to address the challenges of building large-scale, dynamic user interfaces with better performance and maintainability. It uses a new way of rendering webpages, making them highly dynamic and responsive to user input. React is particularly well-suited for creating single-page applications where the content is updated dynamically, without requiring a full page reload.

## Brief History

React was created by Jordan Walke, a software engineer at Facebook, who released an early prototype of React called "FaxJS". He was influenced by XHP, an HTML component library for PHP.
- **Initial Development (2011-2013):** React was initially developed by Jordan Walke, a software engineer at Facebook. The development began in 2011 when Jordan was working on the Facebook Ads platform. It was first deployed on Facebook's News Feed in 2011 and on Instagram in 2012.

- **Open Sourcing (May 2013):** React was officially introduced to the public at the JSConf US conference in May 2013. It was open-sourced on GitHub, allowing developers outside of Facebook to use and contribute to the library.

- **Early Adoption and Community Growth:** React quickly gained popularity due to its innovative approach to building user interfaces, particularly its virtual DOM concept and component-based architecture. The React community started to grow, and developers began using React to build a variety of applications.

- **Introduction of JSX:** JSX, a syntax extension for JavaScript that allows embedding XML/HTML-like code within JavaScript, was introduced. It provided a more concise and readable way to define UI components.

- **React Native (2015):** In 2015, Facebook introduced React Native, a framework for building mobile applications using React. React Native allows developers to use React to build cross-platform mobile apps with native-like performance.

- **Release of React16 (2017):** React 16 was a significant release that introduced the concept of "Fiber," a new reconciliation algorithm that improved performance and laid the groundwork for future features.

- **React Hooks (2018):** React 16.8 introduced Hooks, a feature that allows developers to use state and other React features in functional components. Hooks provide a more straightforward and flexible way to manage state and side effects.

- **React 17 and Concurrent Mode (2020):** React 17 was a gradual upgrade that focused on making it easier to upgrade existing applications to newer versions of React. Concurrent Mode, an experimental set of features aimed at making React applications more responsive and resilient, was introduced.

## Main Features

- **Component-Based Architecture:** React follows a component-based architecture, allowing developers to break down the UI into modular and reusable components. This makes it easier to manage and maintain code, as well as promote code reusability.
- **Virtual DOM:** React uses a virtual DOM (Document Object Model) to improve the performance of web applications. Instead of updating the entire DOM when changes occur, React updates a virtual representation of the DOM and then efficiently applies the minimal necessary updates to the actual DOM. This results in faster rendering and improved performance.
- **Declarative Syntax:** React uses a declarative approach to define how the UI should look, making the code more predictable and easier to understand. Developers describe the desired UI state, and React takes care of updating the DOM to match that state.
- **JSX (JavaScript XML):** JSX is a syntax extension for JavaScript used with React, which allows developers to write UI components in a syntax that closely resembles HTML. This helps in creating more readable and concise code.
- **Unidirectional Dataflow:** React enforces a unidirectional data flow, which means that data changes in an application follow a single direction, making it easier to understand and debug. This helps prevent common issues related to two-way data binding.
- **React Native for Mobile Development:** React can be used to build not only web applications but also mobile applications through React Native. This allows developers to use their React skills to create native mobile apps for iOS and Android platforms.
- **Large and Active Community:** React has a large and active community of developers, which means there are a wealth of resources, tutorials, and third-party libraries available. The community support contributes to the library's stability and the availability of solutions to common issues.
- **Strong Ecosystem:** React is part of a larger ecosystem that includes tools like Redux for state management, React Router for navigation, and Next.js for server-side rendering. This ecosystem provides additional tools and libraries to enhance React development.
- **Backed by Facebook:** React was developed and is maintained by Facebook, which gives it a level of credibility and resources. The backing of a major technology company ensures ongoing development, support, and improvements.
- **Easy Integration:** React can be easily integrated into existing projects, allowing developers to adopt it incrementally. It is also compatible with other libraries and frameworks.
	


## Market Comparison

### React vs VueJS

#### Template Syntax:

- React uses JSX (JavaScript XML) for defining components. JSX allows mixing HTML-like syntax with JavaScript, making the code more expressive and concise whereas VueJS uses template syntax that resembles HTML. Templates are written in a separate file and are more HTML-centric, making it easier for designers and developers with HTML/CSS background to get started.

#### Component Structure:

- React components are defined using JavaScript classes or functional components. State management is often handled using the useState hook, and global state can be managed with libraries like Redux whereas VueJS components are defined using a combination of JavaScript objects and a template. Vue.js provides a more straightforward way to handle component-local state, and global state management can be done using Vuex.

#### Directives and Components:

- React uses a more JavaScript-centric approach. It doesn't have directives like Vue.js but achieves similar functionality through a combination of JSX, props, and state whereas VueJS utilizes directives in templates (e.g., v-if, v-for) to manipulate the DOM. Components in Vue.js are also more feature-rich, with built-in lifecycle hooks and a more explicit API for component configuration.

#### Integration with Other Libraries:

- React can be easily integrated into existing projects, and there is a wide range of third-party libraries and tools that work well with React whereas VueJS also allows easy integration and has a growing ecosystem, though it may not be as extensive as React's.


## Getting Started

https://legacy.reactjs.org/docs/getting-started.html

## Conclusion

In conclusion, React's combination of a component-based architecture, virtual DOM, declarative syntax, and a strong ecosystem has made it a preferred choice for many developers and organizations. Its flexibility, performance optimizations, and support for both web and mobile development contribute to its continued prominence in the world of front-end development.

## References

- [Wikipedia]( https://en.wikipedia.org/wiki/React_(software))
- [Blog] (https://radixweb.com/blog/react-vs-vue)
- [Blog] (https://wpwebinfotech.com/blog/javascript-frameworks/)
- [Blog]( https://www.altexsoft.com/blog/the-good-and-the-bad-of-reactjs-and-react-native/)

