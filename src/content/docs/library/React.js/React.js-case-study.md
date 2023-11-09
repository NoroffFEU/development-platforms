---
title: React.js
author: Camilla Horneland <CamillaHorneland>
tags: javascript, framework, react
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

| Feature                           | Description                                                                                                                                                                                                                           |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| JSX (JavaScript Syntax Extension) | JSX, is a syntax extension for JavaScript often used in the context of React. It allows developers to write HTML-like code within their JavaScript files, making it easier to define the structure and appearance of user interfaces. |
| Virtual DOM                       | The Virtual DOM is a key optimization feature in React that improves the performance and efficiency of updating the user interface. It is an in-memory representation of the actual DOM elements in a web application.                |
| One-way data binding              | One-way data binding is a concept that plays a significant role in how data is managed and displayed in React.                                                                                                                        |
| Performance                       | Performance is a key concern in React applications, as it directly impacts how efficiently the user interface is rendered and updated.                                                                                                |
| Extensions                        | React extensions encompass a wide range of libraries, tools, and technologies that can be integrated with React to extend its functionality and simplify common development tasks.                                                    |
| Conditional statements            | Conditional statements in React allow developers to control the rendering of content or components based on dynamic conditions, enabling the creation of responsive and interactive user interfaces.                                  |
| Components                        | Components are at the core of React's design philosophy, enabling developers to create modular, reusable, and maintainable user interfaces. .                                                                                         |
| Simplicity                        | React places a strong emphasis on simplicity, which is one of the reasons it has gained widespread adoption and popularity among developers.                                                                                          |

<!-- ## Market Comparison

This section can be used to compare the advantages and disadvantages of your chosen tool to other similar tools. You may use subheadings, tables or bullet points to structure your description.

If you are writing about an open source tool, it may be a good idea to compare it to similar proprietary tools. Likewise, if you are writing about a proprietary tool, it may be a good idea to compare it to similar open source tools.

Similarly, a self hosted tool and a cloud based tool with a similar purpose may make for a good comparison. -->

<!-- ## Getting Started

If applicable, describe how to get started with your chosen tool. By providing examples, this can help to demystify a tool and make it more accessible to beginners. -->

<!-- ## Conclusion

This section can be used to summarize your findings. What are the main advantages and disadvantages of your chosen tool? What are the main use cases for this tool? What are the main limitations of this tool? What does the future look like for this tool? -->

<!-- ## References

- [Example.com](https://example.com)
- *Good Examples* by John Doe, 1990
- The Example Podcast, Episode 1
- [Examples Explained](https://youtu.be/dQw4w9WgXcQ) -->

<!-- ## Additional Resources

- [More about Examples](https://example.com)
- [Examples, the Full Course](https://youtu.be/dQw4w9WgXcQ) -->
