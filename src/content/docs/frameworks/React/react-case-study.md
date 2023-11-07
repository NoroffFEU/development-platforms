---
title: React
author: Emily Rego <Emilyrf>
tags: react, case study, framework
---

## Introduction
![React logo GIF](https://miro.medium.com/v2/resize:fit:720/0*EitUXT-pqbaQSCTt.gif)

React is a JavaScript framework created by Facebook (now Meta) that is used to build user interfaces (UI) in web applications. It is popular for being easy to use, highly flexible and scalable, and is used by many technology companies, including Facebook, Instagram, and Airbnb. React is known for its simplicity, efficiency, and the ability to create interactive, dynamic, and responsive web applications.

## Brief History

- 2011: Jordan Walke created FaxJS, the first prototype of React — a research project at Facebook.

- 2013: Jordan Walke announced React as an open-source project.

- 2014: React Developer Tools became an extension of the Chrome Developer Tools. React Hot Loader, a plugin that allows React components to be live-reloaded without the loss of state, was released.

- 2015: React Native was announced, a framework for building native mobile applications using React principles. Netflix and Airbnb started using React.

- 2016:  React 15.0 introduced the ability to reuse existing DOM elements.

- 2017: Release of React 16.0 with error boundaries and improved server-side rendering.

- 2019: React 16.8 officially introduced Hooks.

- 2022: React 18 was released. Concurrent Mode, automatic batching, new Suspense features, transitions, client and server rendering APIs, new strict mode behaviors, and new hooks were introduced in this version.

## Main Features
Here are some React features:

**Components:** Components are a crucial concept in React, they enable the division of the UI into self-contained, reusable parts.
Functional Components are defined as JavaScript functions. They accept properties (props) as input and return a React element, typically in the form of HTML content. Example:
````
function Title(props) {
  return <h1>{props.text}</h1>;
}

````

**JSX:** JSX is an extension of the JavaScript language used by React to create user interfaces. It allows you to mix JavaScript code with HTML-like syntax, making it easier to write user interface components in a single code file.
Example:
````
function Bnt(props) {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  );
}
````

**Unidirectional Data Flow:** React enforces a unidirectional data flow, making it easier to understand how data changes in an application. Data flows from parent components to child components, reducing the risk of bugs and making the code more predictable.


**Declarative UI:** React uses a declarative approach where developers specify how the UI should look at any given point, and React takes care of updating the actual DOM to match this description efficiently.


**Virtual DOM:** React uses a virtual representation of the DOM to optimize updates. When data changes, React calculates the minimum required changes to the actual DOM, resulting in better performance. 


