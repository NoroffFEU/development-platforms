---
title: React.js
author: Camilla Horneland <CamillaHorneland>
tags: javascript, libary, react
---

## Introduction

<img src="/src/assets/frameworks/trpc/react_icon.png" alt="React" icon width="250" height="250">

React is an open-source frontend JavaScript library for building user interfaces based on UI components. The UI is built from small units like buttons, text, and images. React lets you combine them into reusable, nestable components. React is maintained by Meta and a community of individual developers and companies.

React is the most used library among developers over the years. React is not a framework; it's a library that exclusively concentrates on the app's user interface layer. To create a complete development toolkit for your project, you still need to select other technologies.

## Brief History

### 2011:

- React was created by Jordan Walke, a software engineer at Facebook. Initially, React was called FaxJS and was an early prototype of React.

### 2012:

- React was continued and adopted in the image-sharing service Instagram.

### 2013:

- In 2013, React was open-sourced, allowing developers outside Facebook to use and contribute to the project. This move quickly attracted attention from the web development community.

- React pioneered the concept of the Virtual DOM in the same year, introducing a lightweight, in-memory representation of the browser's Document Object Model (DOM). This innovation significantly improved performance by reducing the need for direct manipulation of the DOM.

- React quickly gained wider adoption in various tech communities, becoming available on platforms like JSFiddle (June 2), integrated with Ruby on Rails (July 30), and extended to Python applications (August 19).

- The JSConfEU 2013 conference featured a speech by Pete Hunt that challenged established best practices, contributing to React's recognition and adoption.

- In December, David Nolen introduced OM, a library based on React, which helped showcase React's superiority over other alternatives, furthering its acknowledgment and popularity.

### 2014:

- React continued to gain popularity, particularly for enterprise adoption, emphasizing stability and reliability.

- The #reactjsworldtour conferences were initiated to build a community of React enthusiasts and advocates.

- In January, React Developer Tools became an extension of the Chrome Developer Tools, enhancing the developer experience.

- In February, Atom was introduced as a hackable text editor for the 21st century and played a role in Facebook's development of React Native, a framework for building mobile applications using React and JavaScript.

- React London 2014, held from April 7-9, provided a platform for React enthusiasts to gather and exchange insights.

- In June, the emergence of ReactiveX.io further solidified React's presence in the developer community.

- In July, React Hot Loader was released, allowing for live reloading of React components without losing their state.

- Additionally, Facebook introduced Flux Architecture, a pattern for managing application state. While not officially part of React, Flux was often used in combination with React to handle complex data flow control.

- In October, React's software license was changed from the Apache license to the BSD license with an additional patent clause, reserving Facebook's right to revoke the license in case of patent disputes. This unconventional clause sparked a controversial discussion.

- In December, PlanOut 0.5 was released, featuring a React-based PlanOut language editor and achieving feature parity with Facebook's internal version.

### 2015:

- Early in the year, Flipboard released React Canvas, demonstrating React's versatility.

- React Native was introduced this year, bringing React's principles to mobile app development, enabling developers to create cross-platform mobile applications using React and native components.

- In January Facebook unveiled the first version of React Native, enabling cross-platform mobile app development.

- Same month, Netflix expressed interest in React, signaling its growing adoption.

- Airbnb also started using React for web development in early 2015.

- In February, Relay and GraphQL were introduced at React.js Conf, offering efficient data-fetching mechanisms for React applications.

- In March, Facebook announced that React Native for iOS was open and available on GitHub, fostering community involvement.

- In June the release of Redux by Dan Abramov and Andrew Clark, become a popular state management library for React.

- September 2 marked the launch of the first stable version of the new React Developer Tools, assisting developers in debugging React applications.

- On September 14, React Native for Android was released, extending React Native's reach to the Android platform.

### 2016:

- In February, React Conf 2016, held in San Francisco, provided a platform for important announcements and insights into React's future.

- Draft.js was introduced at React Conf by Isaac Salier-Hellendag, offering a rich text editor framework for React applications.

- In March, Mobx was introduced, becoming a popular state management library within the React ecosystem.

- Also in March, React Storybook was unveiled, offering a development environment for building and testing React components in isolation.

- In June, ReactEurope 2016 brought the React community together for further discussions and innovations.

- In July, React introduced its Error Code System, improving error handling and debugging in React applications.

- In November, Blueprint was introduced, a React UI toolkit for web development, further expanding the React ecosystem.

- 2017: Early this year, Airbnb introduced React Sketch.app, a new open-source library.

- In April, React Fiber was open-sourced at F8 2017, making it accessible to a wider developer community.

- In July, the Apache Software Foundation announced that Apache projects were not allowed to use a particular additional license.

- In September, React v16 was released, introducing features like error boundaries, portals, fragments, and the new Fiber architecture.

- To resolve the license conflict, Facebook also released React version 16.0.0 under the MIT license, marking a significant change from the previous license controversy in 2014.

- Same month, React, along with related projects such as Jest, Flow, and Immutable.js, underwent a relicensing process.

- In October, Netflix removed client-side React.js from their tech stack, showcasing the dynamic nature of technology adoption.

- In November, React v16.2.0 was released, featuring improved support for Fragments, a key aspect of React's architecture.

### 2018:

- React v16.3.0 was released.

### 2019:

- React introduced Hooks in version v16.8, offering a simpler and more functional approach to managing component state and lifecycle methods, enhancing the development experience.

### 2020:

- React Concurrent Mode, still in the experimental stages, aims to enhance user experience by enabling React to handle multiple tasks simultaneously, resulting in more responsive applications.

- React Server Components are in research and development.

### 2022:

- React v18.0 available on npm.

## Main Features

The primary purpose of React is to simplify and improve the process of building user interfaces for web applications. React simplifies the development of complex web applications, offers a more predictable development process, and is supported by a thriving community, making it an invaluable tool for developers.

| Feature                           | Description                                                                                                                                                                                                                                                     |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| JSX (JavaScript Syntax Extension) | JSX, is a syntax extension for JavaScript often used in the context of React. It allows developers to write HTML-like code within their JavaScript files, making it easier to define the structure and appearance of user interfaces.                           |
| Virtual DOM                       | The Virtual DOM is a key optimization feature in React that improves the performance and efficiency of updating the user interface. It is an in-memory representation of the actual DOM elements in a web application.                                          |
| One-way data binding              | One-way data binding is a concept that plays a significant role in how data is managed and displayed in React.                                                                                                                                                  |
| Performance                       | Performance is a key concern in React applications, as it directly impacts how efficiently the user interface is rendered and updated.                                                                                                                          |
| Extensions                        | React extensions encompass a wide range of libraries, tools, and technologies that can be integrated with React to extend its functionality and simplify common development tasks.                                                                              |
| Conditional statements            | Conditional statements in React allow developers to control the rendering of content or components based on dynamic conditions, enabling the creation of responsive and interactive user interfaces.                                                            |
| Components                        | Components are at the core of React's design philosophy, enabling developers to create modular, reusable, and maintainable user interfaces. .                                                                                                                   |
| Simplicity                        | React places a strong emphasis on simplicity, which is one of the reasons it has gained widespread adoption and popularity among developers.                                                                                                                    |
| Declarative user interface        | The declarative user interface empowers the creation of dynamic and interactive user interfaces for websites and mobile applications. This characteristic enhances the readability and user-friendliness of React code, particularly when addressing bug fixes. |

## Market Comparison

### React:

React is primarily a JavaScript library developed by Facebook for building user interfaces.
It focuses on the view layer and allows developers to create user interfaces using a component-based architecture.
React provides the core functionality for building UIs but relies on external libraries and tools for additional features like routing and state management.

- #### Advantages:

Component-Based: React's component-based architecture promotes reusability, maintainability, and a clear separation of concerns.
Virtual DOM: The Virtual DOM helps optimize performance by minimizing direct DOM manipulation, resulting in faster updates.
Large Ecosystem: React has a vast ecosystem of libraries and tools, including state management solutions like Redux and Mobx, which can be integrated as needed.
React Native: React can be used to build not only web applications but also native mobile apps using React Native, enabling code sharing between web and mobile projects.
Community: React has a massive and active community, providing resources, tutorials, and support.

- #### Disadvantages:

Learning Curve: React's ecosystem, including build tools and state management, can have a steeper learning curve, especially for beginners.
Configuration Overhead: Setting up a React project may involve more configuration and choices compared to some other frameworks.
Boilerplate: React can require writing more code and boilerplate for certain tasks, which may lead to more verbose code.

### Angular:

Angular is a comprehensive front-end framework developed by Google.
It includes a wide range of features and tools, such as routing, forms, dependency injection, and an integrated development environment (Angular CLI).
Angular follows a more opinionated structure and offers a comprehensive solution for building web applications.

- #### Advantages:

Full Framework: Angular is a complete, full-fledged framework that provides solutions for routing, form handling, HTTP requests, and more out of the box.
TypeScript: Angular is built with TypeScript, which offers strong typing and tools for better code quality.
Dependency Injection: Angular's built-in dependency injection system simplifies the management of application services.
Two-Way Data Binding: Angular offers two-way data binding, simplifying real-time updates of UI elements when the underlying data changes.

- #### Disadvantages:

Complexity: Angular can be seen as more complex due to its comprehensive feature set, which may be overkill for small to medium-sized projects.
Learning Curve: Learning Angular can be challenging, especially for developers new to web development or JavaScript frameworks.
Performance Overhead: Angular's complexity and built-in features may lead to a performance overhead for simple applications.

### Vue.js:

Vue.js is a progressive front-end framework that is often described as a combination of a library and a framework.
Vue's core library focuses on the view layer, similar to React, but it provides optional packages for features like routing and state management.
Vue.js is known for its simplicity and a more gradual learning curve.

- #### Advantages:

Ease of Learning: Vue.js is often praised for its gentle learning curve, making it accessible to newcomers and developers with varying levels of experience.
Flexibility: Vue.js provides a flexible ecosystem, allowing you to incrementally adopt its features as needed, making it suitable for both small and large projects.
Single-File Components: Vue's single-file components simplify component structure and allow for easy organization of HTML, JavaScript, and CSS.
Great Documentation: Vue.js offers comprehensive and well-structured documentation, making it easy to find information and get started.

- #### Disadvantages:

Smaller Ecosystem: While Vue.js has a growing ecosystem, it is not as extensive as React's or Angular's.
Less Built-In Features: Vue.js offers fewer built-in features compared to Angular, which might require you to rely on external libraries or write custom solutions for certain tasks.
Community Size: While Vue.js has a strong and active community, it may not be as large as React's, which could impact the availability of resources and support.

### Svelte:

Svelte is a modern JavaScript framework for building user interfaces. It takes a different approach compared to React, Angular, and Vue.js, with a focus on compiling components to highly efficient and optimized JavaScript code.

#### Advantages:

Compiler Approach: Svelte compiles components into highly optimized vanilla JavaScript at build time. This leads to smaller bundle sizes and faster runtime performance.
No Virtual DOM: Svelte eliminates the need for a Virtual DOM, reducing the overhead of DOM diffing and reconciliation, resulting in faster updates.
Simplicity: Svelte has a minimalistic and easy-to-learn syntax, making it approachable for both new and experienced developers.
Reactivity: Svelte's reactivity system is simple and intuitive, allowing you to define reactive variables and update the UI without complex state management libraries.
Scoped CSS: CSS is scoped to individual components by default, preventing style clashes and making CSS management straightforward.
Small Bundle Sizes: Svelte generates smaller bundle sizes compared to some other frameworks, improving initial load times.

#### Disadvantages:

Smaller Ecosystem: Svelte's ecosystem is growing but not as extensive as React's. You may find fewer third-party libraries and tools.
Learning Curve: While Svelte is generally easy to learn, it may not have as many learning resources or a community as large as React's or Vue.js's.
Limited SSR Support: Server-Side Rendering (SSR) in Svelte is not as well-established as in some other frameworks, which might be a consideration for certain applications.

- React and Svelte are typically classified as JavaScript libraries for building user interfaces, offering a component-based approach and a vast ecosystem of libraries and tools. Developers often choose React and Svelte for their flexibility and ability to be used with other libraries and tools, making them suitable for a wide range of projects.

- Angular and Vue.js, on the other hand, are considered full-fledged front-end frameworks, providing more built-in features and a structured approach. These frameworks can be advantageous for larger and complex applications due to their comprehensive feature sets and opinionated structures.

## Getting Started with React

If you're new to React and want to start a new project, you can follow these steps:

1. **Install Node.js**:

   - Ensure you have Node.js installed on your computer. You can download and install it from the official website: [Node.js Download](https://nodejs.org/).

2. **Install npm (Node.js package manager)**:

   - npm (Node Package Manager) comes bundled with Node.js. To check if you have it installed, open your terminal or command prompt and run:
     ```
     npm -v
     ```
   - If you see a version number, npm is installed. If not, you can update npm by running:
     ```
     npm install -g npm
     ```

3. **Create a New React Project**:

   - To start a new React project, you can use the "Create React App" tool, which sets up a basic React application with all the necessary configurations and dependencies. Open your terminal and run:
     ```
     npx create-react-app project-name
     ```
     Replace `project-name` with the desired name of your project. This will create a new directory with the project files.

4. **Navigate to Your Project**:

   - Use the `cd` command to navigate to your project directory:
     ```
     cd project-name
     ```

5. **Start the React Project**:

   - To launch your React project, run the following command:
     ```
     npm start
     ```
     This will start a development server, and your React application will be available at `http://localhost:3000` in your web browser.

6. **Edit and Build**:

   - You can start editing your React components and project files. Any changes you make will automatically trigger a hot-reload, meaning you can instantly see the results in your browser. Your project will also be automatically rebuilt.

7. **Deployment**:
   - When you're ready to deploy your React application, you can create a production build using:
     ```
     npm run build
     ```
     This will generate optimized, minified, and bundled files in the `build` directory that you can then deploy to a web server.

These steps should help you get started with a new React project. React offers a powerful and flexible environment for building dynamic user interfaces, and the "Create React App" tool simplifies the initial setup process.

## Conclusion

React is well-suited for building user interfaces in web applications, especially those that require interactive and dynamic content. It is often chosen for projects that prioritize reusability, modularity, and a component-based approach.

React's learning curve can be challenging for newcomers to web development and JavaScript frameworks. Additionally, setting up a React project may involve more configuration and choices, which can be overwhelming. While React is flexible, it may not be the ideal choice for smaller projects where the overhead of learning and configuration outweighs the benefits.

React continues to evolve and improve with each new version. The React team actively maintains and enhances the library. Future versions are likely to introduce additional features and optimizations, keeping React at the forefront of web development technologies.

## References

Image:

- [Iconfinder](https://www.iconfinder.com/icons/1174949/js_react_js_logo_react_react_native_icon)

Content React:

- [React.dev](https://react.dev/learn/describing-the-ui)
- [Cegal](https://www.cegal.com/no/ordbok/react)
- [Wikipedia](https://wikipedia.org/wiki/React)
- [React.dev.learn](https://react.dev/learn)
- [React blog](https://react.dev/blog)
- [Feautures](https:/www.greeksforgeeks.org/what-are-the-features-of-reactjs/)
- [Feautures2](https://educative.io/answers/what-are-the-features-of-react)

Angular:

- [Angular.io](https://angular.io/)
- [W3schools](https://www.w3schools.com/angular/)

Vue:

- [Vuejs](https://Vuejs.org/)
- [W3schools](https://www.w3schools.com/vue/)

Svelte:

- [Svelte.dev](https://svelte.dev/)
- [Mozilla](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started)

## Additional Resources

- [chatGPT](https://chat.openai.com)
