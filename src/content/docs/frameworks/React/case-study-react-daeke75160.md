---
title: React
author: Daniel Ekeberg (daeke75160)
tags: react, case study
---

## Introduction
React is a popular JavaScript library for building user interfaces (UI), especially for single-page applications (SPAs). Developed by Facebook, React makes it easy to create interactive and dynamic web applications by breaking the UI into reusable components.

Instead of updating the whole page when data changes, React uses a virtual DOM to efficiently update and render only the parts of the UI that need to change.  This makes apps faster, more efficient, and easier to maintain.

## Brief History
- 2011:
    - Created by Jordan Walke, a software engineer at Facebook.
- 2013: 
    - React was open-sourced in May 2013 at JSConf US.
    - Developers were skeptical at first, mainly because of JSX and the idea of putting HTML in JavaScript.
- 2014
    - Instagram adopted React, showing its real-world scalability.
- 2015
    - React Native was released, allowing developers to write mobile apps using React.
    - This was a game-changer: you could write iOS and Android apps with JavaScript and share code across platforms.
    - React 0.14 introduced stateless (functional) components and support for framgents.
- 2016
    - Facebook introduced React Fiber, a complete rewrite of the core algorithm (but not yet released).
- 2017
    - React 16 was released with the new Fiber architecture, enabling features like:
        - Error boundaries
        - Better handling of asynchronous rendering
    - This update laid the foundation for Concurrent Mode and Suspense.
- 2019
    - React 16.8 introduced Hooks, changing how developers manage state and side effects in functional components.
    - This reduced reliance on class components and made code more reusable and readable.
- 2020
    - Facebook continued work on Concurrent Mode to make React apps more responsive by allowing multiple UI tasks to run in parallel.
    - React DevTools was also upgraded for better debugging.
- 2022
    - React 18 was officially released with:
        - Automatic Batching
        - Concurrent Rendering (enabled by default)
        - Transition API
        - Suspense improvements
    - Major performance and UX improvements

## Main Features

| Feature | Description |
| --- | --- |
| Component-Based | UI is build using reusable, independent components that manage their own logic and rendering.
| JSX | A syntax extension that lets you write HTML-like code inside JavaScript for easier UI creation.
| Virtual DOM | React uses a virtual representation of the DOM to update only what changes, making rendering faster and more efficient.
| Hooks | Functions like useState, useEffect, etc., let developers use state and lifecycle features in functional components.

## Getting Started
You can use different build tools like vite, parcel, or rsbuild. We'll be using vite in these steps.

### 1. Create a New Project
```bash
npm create vite@latest my-app
```
Replace `my-app` with your preferred project name.

### 2. Move into Your Project Folder
```bash
cd my-app
```

### 3. Install Dependencies
```bash
npm install
```
This will install all required packages.

### 4. Start the Development Server
```bash
npm run dev
```
This willl start your app locally, usually at `http://localhost:5137`
(Vites dev server is configured by default to run on port 5173, but you can change the port in vite.config.js)

### 5. Hello, World!
```jsx
function App() {
    return <h1>Hello, World!</h1>
}

export default App;
```
Save and refresh! You should see your first React component rendered.

## Conclusion

React has grown from being an internal Facebook project into one of the most widely used JavaScript libraries for building modern user interfaces. Its component-based architecture, efficient rendering and powerful features, like Hooks, have made it a favorite, despite developers being sceptical at first, for creating scalable, maintainable, and high-performance applications.

### Pros
- Efficient Rendering with Virtual DOM
- Reusable Components
- Comes with JSX
- Scalability


### Cons
- Advanced use of JavaScript
- Fast Development Pace
- Handling Large Applications

## References

- [React](https://react.dev)
- [Wikipedia - React](https://en.wikipedia.org/wiki/React_(software))
- [GeeksForGeeks - What is React](https://www.geeksforgeeks.org/reactjs/what-is-react/)
- [GeeksForGeeks - Advantages of React](https://geeksforgeeks.org/reactjs/what-are-the-advantages-of-react-js/)
- [W3Schools - What is React](https://www.w3schools.com/whatis/whatis_react.asp)
- [GreatLearning - History of React](https://www.mygreatlearning.com/react-js/tutorials/history-of-reactjs)
- [Medium - Advantages and Disadvantages of React](https://medium.com/@reactmasters.in/advantages-and-disadvantages-of-react-js-e6c80b25763b)