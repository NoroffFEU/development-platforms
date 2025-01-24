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
