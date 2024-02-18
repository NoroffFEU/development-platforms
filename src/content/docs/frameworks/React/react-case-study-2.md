---
title: React Case Study
author: Vladimira Dmitrovic <vanya992>
tags: react, javascript, framework
---

# React Case Study

[https://cdn.dribbble.com/users/2442115/screenshots/8699490/dec-01-2019_19-16-16.gif]

## Introduction

React has emerged as a cornerstone in modern web development, offering developers a declarative, efficient, and flexible framework for constructing dynamic user interfaces. With its component-based architecture, React enables the seamless composition of intricate UIs from modular, reusable building blocks. Initially developed to meet Facebook's internal needs, React has gained prominence across industry giants such as Instagram, Airbnb, Netflix, and Uber Eats, solidifying its position as the preferred choice for developing high-performance web applications."

## Brief History

    - **2011**: Conceived by Jordan Walke, a software engineer at Meta (formerly Facebook).
    - **2012***: Deployed on Facebook's News Feed, marking its initial real-world usage.
    - **2013**: Open-sourced, fostering a vibrant community and widespread adoption.
    - **2015**: Introduction of React Native, facilitating cross-platform native app development.
    - **2017**: Launch of React Fiber, a rewrite of the reconciliation algorithm, enhancing performance and concurrency capabilities.
    - **2017** (later): Release of React 16.0, refining the framework's features and performance.
    - **2020**: Introduction of React 17, focusing on stability and minor improvements without altering the developer-facing API significantly.
    - **2022**: Unveiling of React 18, featuring a groundbreaking concurrent renderer, automatic batching, and enhanced support for server-side rendering with suspense.

## Main Features

React is gaining popularity as the best JavaScript framework among web developers. Main features that he is providing are:

- **Declarative UI:** Declarative aproach is the when you describe the final state og the desired UI. It allows React to create more dynamic and interactive user interface. This feature makes React code more readable, and user-friendly, especially helps with bugs fixing.

- **Virtual DOM:** React uses a virtual copy of the original DOM object, which allows it to efficiently track changes in components, with minimal use of the real DOM.

- **Components:** Components are one of the core concepts of React. They are the foundation upon which you build user interfaces. They serve as self-contained and reusable units of UI elements. Each component operates independently, containing its own functionality and rendering HTML output.

```bash
    function Greeting(props) {
 return <h1>Hello, {props.name}</h1>;
}
```

- **JSX:** JSX is a syntax extension for JavaScript that React uses so it lets you write HTML-like markup inside a JavaScript file.

  ```js
  const element = <h1>Hello, world!</h1>;
  ```

- **Unidirectional data flow:** In React, data flows in one direction, making it simpler to track how data changes happen in the application. Data moves from parent components to child components, which helps minimize bugs and makes the code easier to follow and predict.

## Market Comparison

    React holds the leading position in the JavaScript framework market, closely followed by Vue.js and Angular. In this comparison, I'll explore the similarities and differences among them, and delve into what sets React apart as the most popular framework.

    - **Similarities:**

        - **Single-Page-Application (SPA) Support: They all support the development og single-page applications, providing tools and features to create fast and responsive user experience.

        - **Component-Based Architecture:** All of the above mentioned frameworks follow a component based architecture allowing developers to build applications by composing reusable and independent components.

        - **Virtual DOM:** React, Vue.js, and Angular utilize a virtual DOM mechanism to optimize performance by reducing unnecessary DOM manipulations.

    - **Differences:**

        - **Learning curve:** Angular, unlike React and Vue.js, tends to have a steeper learning curve primarily because of its comprehensive feature set and deep integration with TypeScript. In contrast, React and Vue.js are more lightweight and flexible libraries that focus primarily on the view layer of applications. They provide simpler APIs and offer greater freedom in terms of architectural choices, which can make them easier for beginners to pick up.

        - **Size and performance:** Vue.js is known for its small size and dast performance, while Angular file can be larger, and React´s performance can vary depending on how it is optimized.

        - **Syntax and Templating**: React uses JSX for templating, Vue.js offers a combination of HTML templates and JavaScript, while Angular relies on TypeScript and HTML templates with its own syntax.

        - **Tools and Resources:** React is backed by Facebook, Vue.js by an independent community, and Angular by Google. Each framework has its own ecosystem of tools, libraries, and resources.

    - **What Makes React Most Popular**

    Since we already stated that it is the most popular framework, here are a few reasons that compliment that fact:

        - As we have already mentioned, React´s declarative syntax makes it easier to understand and write code, leading to improved developer productivity.

        - Large Ecosystem and Community: React has a vast Ecosystem of libraries, tools and resources supported by a vibrant community, providing solutions to various development needs.

        - Reacts lightweight core and flexible architecture allow developers to adapt it to different project requirements and scale applications efficiently.

        - Since it is developed and maintained by Facebook, it has regular updates and improvements, as well as a strong support system.

## Getting Started

To have React in your project you will need to follow these steps. First, you have to ensure that you have Node.js installed on your device. If that is correct, than do the following:

    1. In your terminal type:
    ``` bash
        npx create-react-app your-app-name .
    ```

    Dot in the end will create a folder in directory you are currently on. Replace your-app-name with the actuall name.

    2. After it has been succesfully installed(it takes about two minutes), to get started type in your terminal:
    ``` bash
    npm start
    ```

## Conclusion

React is like the superstar of front-end web development. It gives developers amazing freedom to create, and it's super fast and can handle big projects easily. With React, you have lots of tools and help from other developers, so you're always on the cutting edge of building awesome websites. Even though there are other options out there like Angular and Vue.js, React's mix of being easy to use, fast, and having a big community makes it the top pick for making modern websites.

## References

- [React](https://react.dev);
- [React for Front-end Developers](https://www.educative.io)
- [Difference between React and Angular](https://www.ailoitte.com/blog/difference-between-react-and-angular/)
- [Difference between React and Vue.js](https://youtu.be/dQw4w9WgXcQ)
- [Comparisson of three frameworks: React, Angular, Vue.js](https://www.yourteaminindia.com/blog/angular-vs-react-vs-vue#:~:text=Q%3A%20Which%20is%20more%20popular,%25%20and%2018.97%25%2C%20respectively)
- [Front-end Frameworks and more](https://www.simform.com/blog/best-frontend-frameworks/)

## Additional Resources

- [Chat GPT]
- [A friend that is working as a React developer for 5+ years]
