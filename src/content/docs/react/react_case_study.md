---
title: React
keywords: components,JSX,State,Prop,Virtual DOM
author: Anand Chetty
---

History:

In 2011 the Facebook had issues with code maintenance due to increasing numbers of features. The growing number of team-members and app-features slowed them down so over time their app became difficult to maintain.The engineers could not keep up with the cascading updates.
-cascading updates ensure that when a primary key in a parent table changes, the related foreign keys in child tables are automatically updated to maintain data integrity.

- React was created by Jordan Walke, initially called "F-Bolt" then "FaxJS". Deployed on Facebook's News Feed in 2011, then integrated on instagram in 2012. In 2013 the project is officially open-sourced.Most of this was done by Pete Hunt.

-2014 React developer tools: Now you able to monitor your react code via Chrome DevTools, here you are able to select root components and sub components(more on that later), here you are also able to step through the components with breakpoints.

-2015 React Native(Mobil:Android,iOS,OWP) was announced at Facebook's React Conf in February 2015 and open-sourced in March 2015.

-2016 React turns mainstream: React 15 was released in April 2016, focusing on performance improvements, particularly with updates to how React handled rendering and the DOM. This helped establish it as a mature and reliable framework. By 2016, React was well on its way to becoming the dominant choice for building modern web applications, a status it continues to hold in many contexts today.

What is React?
React is a Javascript-based library that employs Webpack to automatically compile React, JSX and Es6
while also handling Css prefixes. Essentially a library to build dynamic and interactive web applications.

Key Features of React:

1. Components :

In React, there are two main types of components: class components and function components.

Class component: A class component in React is an ES6 JavaScript class that extends React.Component. It allows you to create reusable, stateful UI components with access to React’s lifecycle methods.
• It inherits from React.Component, which gives it special features.
• It can store its own data (called “state”) and react to changes.
• It has lifecycle methods—special functions that run at different points in the component’s life, like when it’s added to the page or updated.

Function components have become the standard approach for modern React development.
• Hooks(Hooks are functions introduced in React 16.8 that allow you to use state and lifecycle features in function components) making function components as powerful as class components.
• They are easier to read, write, and test.
• They result in smaller bundle sizes and better performance.

2. JSX

JSX(Javascript XML) is an extension to Javascript which lets you write HTML-like code in Javascript. It looks like HTML ,but behind the scenes React transforms it into Javascript functions.

JSX example: const element = <h1>Hello, world!</h1>;

React conversion: const element = React.createElement('h1', null, 'Hello, world!');

Here we see React convert the code from JSX to JS. This lets us work with both HTML-markup and JS in the same file,making the code easier to read and manage.

3. Props

Props(properties)is a way to pass data from the parent component into the child component. These props are read-only and cannot be modified by child components.
Props makes a component re-usable and and allows for a component to display different content depending on the passed data(props).

4. State and useState

State and useState in React is used to deal with data that can be manipulated over time. This makes React a powerful dynamic tool.

-it allows for components render and re-render in regards to the changes to set data.

const [state, setState] = useState(initialValue);

    •	state: The current value of the state.
    •	setState: A function to update the state.
    •	initialValue: The starting value of the state.

4. Virtual DOM

React uses a concept called the Virtual DOM, which is an in-memory representation of the real DOM. Instead of directly updating the entire DOM whenever there is a change, React updates the Virtual DOM first. It then compares this updated Virtual DOM with the previous version to identify what has changed. This process is called reconciliation.

By applying only the necessary changes to the real DOM, React minimizes costly recalculations and repainting in the browser. This makes React highly efficient and improves performance, especially for applications with frequent updates.

5.  Lifecycle and Hooks

The React component lifecycle has three main phases: 1. Mounting:
• This is the initial phase when a component is created and added to the DOM for the first time.
• Example: constructor(), componentDidMount(), or useEffect with an empty dependency array. 2. Updating:
• This phase occurs whenever a component’s state or props change, triggering a re-render.
• Example: componentDidUpdate() or useEffect with dependencies. 3. Unmounting:
• The final phase where the component is removed from the DOM and cleanup is performed.
• Example: componentWillUnmount() or the cleanup function in useEffect.

    Hooks:

    Hooks are special functions that give you options like useState,useEffect and many more. These give you the the ability to tap into Reacts capabilities

    1. useState(state management)
       is one of the more common hooks.
       lets you add state management to a functional component

       here is an example:

            import React, { useState } from "react";

            function Counter() {
            const [count, setCount] = useState(0); // [stateVariable, updateFunction]

            return (
                <div>
                 <p>Count: {count}</p>
                 <button onClick={() => setCount(count + 1)}>Increase</button>
                </div>
                 );
                }

    2.	useEffect (Side Effects)
    	Lets you fetch data, set up subscriptions, or update the DOM after rendering.

        here is an example:

             import React, { useState, useEffect } from "react";

             function Counter() {
             const [count, setCount] = useState(0);

             useEffect(() => {
             console.log(`Count is now ${count}`);
             }, [count]); // Dependency array to control when the effect runs.

             return (
             <div>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Increase</button>
             </div>
           );
        }

React Vs. Vue.js and Angular

Though React is one of the biggest players in the library and framework ecosystem, it faces strong competition from capable alternatives like Vue.js and Angular.

Here are some of the strengths and weaknesses:

    Vue.js:

        -Strengths
                    •   Simple syntax and easy to learn for beginners
                    •   Lightweight and fast initial load
                    •	Strong community support

        -Weaknesses
                    •   Not as common in enterprise environments vs React
                    •   Fewer 3rd party libraries vs React


    Angular:

        -Strengths
                    •   Delivered with built-in-tool for routing, forms, and HTTP services
                    •   Typescript-based
                    •   Excellent for enterprise-standard applications

        -Weaknesses
                    •   Complex
                    •   Large bundle size

All frameworks and libraries have their pros and cons. Choosing a a framework or library depends on the team preference ,scalability and the specific project at hand.

References:

            ChatGPT

            Linkedin-Learning:React Essential Training https://www.linkedin.com/learning/search?keywords=react%20&promptType=LEARNER_TYPED&u=43268076

            https://react.dev/blog/2023/03/16/introducing-react-dev

             https://www.w3schools.com/react/default.asp

             React.js : The Documentary  https://www.youtube.com/watch?v=8pDqJVdNa44

             Wikipedia: https://en.wikipedia.org/wiki/React_(software)
             #:~:text=JavaScript%20syntax%20improvements.-,History,HTML%20component%20library%20for%20PHP.

             10 Key Reasons Why You Should Use React for Web Development:https://www.techmagic.co/blog/why-we-use-react-js-in-the-development#:~:text=React%20is%20a%20JavaScript%20library,usually%20works%20fast%20and%20efficiently.



