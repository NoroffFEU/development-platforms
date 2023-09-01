---
title: React Case Study
author: Cristina Syversen
tags: React, React Native, DOM, JXS, Frameworks, JavaScript library, case study, platform
---

---

---

## Introduction

**React** (also known as _React.js_ or _Reactjs_) is a javascript library for building dynamic and interactive user interfaces. It was created at facebook in 2011, and it was currently the most widely used Javascript library for front end development.

## Brief History

React was created by **Jordan Walke**, a software engineer at Meta, who realesed an early prototype of React called _FaxJS_:

-   2011: It was first deployed on Facebook's newsfeed.
-   2012: Deployed on Instagram
-   May 2013: _The initial public release of React_ used the Apache License 2.0.
-   October 2014: React 0.12.00 replaced this with the _3-clause BSD license_ and added a separate PATENTS text file that permits usage of any Facebook patents related to the software.
-   Febuary 2015: **React Native**, which enables native Android, iOS and UWP development with React, was announced at Facebook's React Conf.
-   March 2016: React Native public release.
-   April 18, 2017: Facebook announced **React Fiber**, a new set of internal algotithms for rendering, as opposed to React's old rendering algorithm, Stack.
-   September 26, 2017: _React 16.0_ was released to the public.
-   August 10, 2020: the React team announced the first release candidate for _React v17.0_, notable as the first major release without changes to the React developer-facing API.
-   March 29, 2022: React 18 was released which introduced a new concurrent renderer, automatic batching and support for server side rendering with suspense.

## Main Features

React is an open-source and component-based front-end library developed by Facebook for creating dynamic and interactive applications and building better UI/UX design for web and mobile applications.

**The Major Features of React**

-   **JSX(JavaScript Syntax Extension):** JSX is a combination of HTML and JavaScript. You can embed JavaScript objects inside the HTML elements. JSX makes codes easy and understandble.

-   **Virtual DOM:** React uses virtual DOM which is an exact copy of the real DOM. Whenever there is a modification in the web application, the whole virtual DOM is updated first and finds the difference between real DOM and Virtual DOM. Once it finds the difference, then DOM updates only the part that has changed recently and everything remains the same.

-   **One-way data binding:** The data in react flows only in one direction i.e. from parent components to child components. The properties (props). in the child component cannot return the data to its parent according to the provided inputs.

-   **Performance:** React uses virtual DOM and updates only the modified parts, which makes it faster than the other JavaScript frameworks.

-   **Extensions:** React has many extentions that we can use to create full-fledged UI applications. It supports mobile app development and provides server-side rendering. React is extended with Flux, Redux, React Native, etc., which helps us to create good-looking UI.

-   **Conditional Statements:** JSX allows us to write conditional statements. The data in the browser is displayed according to the conditions provided inside the JSX.

-   **Components** React adheres to the declarative programming paradigm, where developers design views for each state of an application, and React updates and renders components when data changes.

## Market Comparison

React is one of the most popular front-end libraries used for building dynamic and interactive applications. According to a survey conducted in 2023, Node.js overtook React.js to become the most used web framework among software developers worldwide. However, React still holds a significant market share of **4.1%** among all websites that use JavaScript libraries.

### Comparison:

|                       | **REACT**                                                                                                                                                                                 | **ANGULAR**                                                                                                                                    |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **Architecture**      | React is a library that focuses on the _view layer_ of an application.                                                                                                                    | Angular is a _full-fledged framework_ that provides a complete solution for building web applications.                                         |
| **Language**          | React uses JavaScript                                                                                                                                                                     | Angular uses Typescript                                                                                                                        |
| **DOM**               | React uses _Virtual DOM_, which is an in-memory representation of the real DOM.                                                                                                           | Angular uses _Real DOM_, which is a tree-like structure of HTML elements                                                                       |
| **Data Binding**      | React uses _one-way data binding_, which means that data flows only in one direction, from parent components to child components.                                                         | Angular uses _two-waydata binding_, which means that data flows in both directions, from parent components to child components and vice versa. |
| **Performance**       | React is faster than Angular because it uses Virtual DOM, which updates only the modified parts of the web application                                                                    | Angular updates the whole Real DOM every time there is a change in the application.                                                            |
| **Learning Curve**    | React has a relatively low learning curve compared to Angular because it is just a library and not a full-fledged framework. However, it requires knowledge of JavaScript and JSX syntax. |
| **Community Support** | Both React and Angular have a large communities that provide support and resources for developers. However, React has more third-party libraries and tools available than Angular.        |

## Installation

React has been designed from the start for gradual adoption. You can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to an HTML page, or start a complex React-powered app, this section will help you to get started.

### Getting Started

-   In React applications, we don't query and update the DOM. Instead, we describe our application using small, reusable components. React will take care of rfficiently creating and updating DOM elements.
-   React components can be created using function or a class. Function-based components are the preffred approach as they're more concise and easier to work with.
-   JSX stands for JavaScript XML. It is a syntax that allows us to write components that combine HTML and Java Script in a readable and expressive way, making it easier to create complex user interfaces.
-   When our application starts, React takes a tree of components and builds a JavaScript data structure called the virtual DOM. This virtual DOM is different from the actual DOM in the browser. It's a lightweight, in-memory representation of our component tree.

### Bulding Components

-   In React apps, a component can only return a single element. To return multiple elements, we wrap them in a fragment, which is represented by empty angle brakets.
-   To render a list in JSX, we use the ´array.map()´ method. When mapping items, each item must have a unique key, which can be a string or a number.
-   To conditionally render content, we can use an ´if´ statement or a ternary operator.
-   We use the state hook to define (data that can change oever time) in a component. A hook is a function that allows us to tap into built-in features in React.
-   Components can optionally have props (short for properties) to accept input.
-   We can pass data and functions to component using props. Functions are used to notify the parent (consumer) of a component about certain events that occur in the component, such as an item being clicked or selected.
-   We should treat props as immutable (read-only) and not modify them.
-   When the state or props of a component change, React will re-remder the component and update DOM accordingly.

### Styling Components

-   We have several options for styling React components, including vanilla CSS, CSS modules, CSS-in-JS, and inline styles.
-   With vanilla Css, we write our component syulrs in a separate CSS file and import it imto the component file. However, we may encounter conflicts if ths same CSS classes are defined in multiple files.
-   CSS modules resolve the issue by generating unique class names during the build process.
-   With CSS-in-JS, we define all the styles for a component alongside its code. Like CSS modules, this provides scoping for CSS classes and eliminates conflicts. It also makes it easier for us to change or delete a component without affecting other components.
-   The separation of concerns principle suggets that we divide a program into distinct sections or modules where each section handles a specific functionality, It helps us build modular and maintainable applications.
-   With this principle, the complexity and implementation details of a module are hidden behined a well-defiend interface.
-   Separation of concerns is not just about organizing code inlto files, but rather dividing areas of functionality. Therefore, CSS-in-JS does not violate the separation of concerns principle as all the complexity for a component remains hidden its interface.
-   Although inline styles are easy to apply, they can make code difficult to maintain over time and should only be used as a last resort.
-   We can add icons to our applications using react-icons library.
    -There are several UI libraries availble that can assist us in quickly building beautiful and modern applications. Some popular options include Bootstrap, Material UI, TailwindCSS, DaisyUI, ChakraUI, and more.

### Managing Components

-   Thes state hook allows us to add state to function components.
-   Hooks can only be called at the top level of components.
-   State variables, unlike local vatiables in a function, stay in memory as long as the component is visible on the screen. This is because state is tied to the component instance, and React will destroy the component and its state when itis removed from the screen.
-   React updates state in an asynchronous manner, so updates are not applied immediately. Instead, they’re batched and applied at once after all event handlers have finished execution. Once the state is updated, React re-renders our component.
-   Group related state variables into an object to keep them organized.
-   avoid deeply nested state objects as they can be hard to update and maintain.
-   To keep state as minimal as posible, avoid redundant state variables that can be computed from existing varisbles.
-   A pure fucntion is one that always returns the same result given the same input. Pure functions should not modify objects of the function.
-   React expects our function components to be pure. A pure component should always return the same JSX givien the same input.
-   To keep our components pure, we should avoid making changes during the render phase.
-   Strict mode helps us catch potential problems such as impure components. Starting from React 18, it is enabled by default. It renders our components twice in development mode to detect any potential side effects.
-   When updating objects or ar
    rays, we should treat them as immutable objects. Instead of mutating them, we should create new objects or arrays to update the state
-   Immer is a library that can help us update objects and arrays in a more concise and mutable way.
-   To share state between components, we should lift the state up to the closest parent component and pass it down as props to child components.
-   The component that holds some state should be the one that updates it. If a child component needs to update some state, it should notify the parent component using a callback function passed down as a prop.

### Building Forms

-   To handle form submissions, we set the onSubmit attribute of the form element.
-   We can use the ref hook to access elements in the DOM. This technique is often used to read the value of input fields upon submitting a form.
-   We can also use the state hook to create state variables and update them as the user types into input fields. With this technique, every time the user types a character into an input field, the component containing the form gets re-rendered. While in theory this can cause a performance penalty, in practice this is often negligible.
-   React Hook Form is a popular library that helps us build forms quickly with less code. With React Hook Form, we no longer have to worry about using the ref or state hooks to manage the form state. •
-   React Hook Form supports the standard HTML attributes for data validation such as required, minLength, etc.
-   We can validate our forms using schema-based validation libraries such as joi, yup, zod, etc. With these libraries, we can define all our validation rules in a single place called a schema.

### Connecting to the Back-end

-   We use the effect hook to perform side effects, such as fetching data or updating the DOM.
-   The effect hook takes a function that performs the side effect and an optional array of dependencies. Whenever the dependencies change, the effect hook runs again.
-   To clean up any resources that were created by the effect hook, we can include a clean-up function that runs when the component unmounts or the dependencies change.
-   React is a library for building front-end user interfaces, but to create complete apps, we also need a back-end server to handle business logic, data storage, and other functionality.
-   The communication between the front-end and the back-end happens over HTTP, the same protocol that powers the web. The front-end sends an HTTP request to the back-end, and the back-end sends an HTTP response back.
-   Each HTTP request and response contains a header and a body. The header provides metadata about the message, such as the content type and HTTP status code, while the body contains the actual data being sent or received.

## Conclusion

React is a popular front-end library that provides several advantages over other JavaScript frameworks. Here are some of the advantages of using React:

**Reusable Components:** React allows developers to create reusable components that can be used across different applications. This feature saves time and effort in coding and testing.

**Virtual DOM:** React uses Virtual DOM, which is an in-memory representation of the real DOM. Whenever there is a modification in the web application, the whole virtual DOM is updated first and finds the difference between real DOM and Virtual DOM. Once it finds the difference, then DOM updates only the part that has changed recently and everything remains the same. This feature makes React faster than other JavaScript frameworks.

**One-way Data Binding:** The data in React flows only in one direction i.e. from parent components to child components. The properties (props) in the child component cannot return the data to its parent component but it can have communication with the parent components to modify the states according to the provided inputs. This feature makes React more predictable and easier to debug .

**Easy to Learn:** React has a relatively low learning curve compared to other JavaScript frameworks because it is just a library and not a full-fledged framework. However, it requires knowledge of JavaScript and JSX syntax .

**Extensions:** React has many extentions that we can use to create full-fledged UI applications. It supports mobile app development and provides server-side rendering. React is extended with Flux, Redux, React Native, etc., which helps us to create good-looking UI.

**Large Community Support:** React has a large community that provides support and resources for developers. It also has more third-party libraries and tools available than other JavaScript frameworks.

**SEO Friendly:** React provides server-side rendering, which makes it easier for search engines to crawl web pages built with React.

**Performance:** React is faster than other JavaScript frameworks because it uses Virtual DOM, which updates only the modified parts of the web application, whereas other frameworks update the whole Real DOM every time there is a change in the application .

## References

-   [Google](https://google.com)
-   [Bing](https://bing.com)

## Additional Resources

-   [Code with Mosh](https://members.codewithmosh.com/courses/ultimate-react-part1/lectures/45916469)
-   [Wikipedia](https://www.wikipedia.org/)
