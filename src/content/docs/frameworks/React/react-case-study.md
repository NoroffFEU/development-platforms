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
```js
function Title(props) {
  return <h1>{props.text}</h1>;
}

```

**JSX:** JSX is an extension of the JavaScript language used by React to create user interfaces. It allows you to mix JavaScript code with HTML-like syntax, making it easier to write user interface components in a single code file.
Example:
```js
function Btn(props) {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  );
}
```

**Unidirectional Data Flow:** React enforces a unidirectional data flow, making it easier to understand how data changes in an application. Data flows from parent components to child components, reducing the risk of bugs and making the code more predictable.


**Declarative UI:** React uses a declarative approach where developers specify how the UI should look at any given point, and React takes care of updating the actual DOM to match this description efficiently.


**Virtual DOM:** React uses a virtual representation of the DOM to optimize updates. When data changes, React calculates the minimum required changes to the actual DOM, resulting in better performance. 


## Pros of React

React provides developers with the ability to craft lightweight applications enriched with modern features in a significantly reduced timeframe. It offers a vast library of developer tools for enhanced productivity.


## Cons of React
React can present some challenges, as it is continuously evolving, requiring constant learning and adaptation. The use of JSX, while offering flexibility, can be perceived as confusing.



## Market Comparison
According to research and statistics, React is the predominant choice among front-end developers. However, there are notable alternatives, such as Vue, Angular and Svelte that also command a significant presence.


1. **Learning Curve:**
   - React: React may have some initial complexity for beginners due to concepts like JSX and the need to understand component lifecycles. However, it offers a relatively manageable learning curve overall.

   - Angular: Angular has a steeper learning curve due to its comprehensive and opinionated nature. It uses TypeScript, has a complex setup, and requires an understanding of various concepts like modules and decorators.

   - Vue: Vue is often considered more approachable for newcomers. Its single-file components with HTML, CSS, and JavaScript make it easier to grasp. Vue also provides clear and concise documentation.

   - Svelte: Svelte has a low learning curve. Its templating syntax is similar to HTML and JavaScript, and it eliminates the need for a virtual DOM. Svelte’s documentation is very easy to follow and features a detailed in-built tutorial.


2. **Community:**
   - React: Since Facebook backs this technology, React has a strong developer community that provides a wealth of resources and support.
 
   - Angular: Angular has a mature ecosystem, including a well-established community, offers extensive documentation, and is supported by Google.

   - Vue:  Vue has a smaller community with limited resources and modules, but it is still supported by Evan You and the team.

   - Svelte: As a newer framework, Svelte currently has less support in terms of libraries, plugins, and integrations. However, it is gaining popularity.


3. **Performance:**
   - React: React uses a virtual DOM to optimize updates and improve performance. It is highly efficient and suitable for large applications.

   - Angular: Angular uses the real DOM for its applications, which can impact performance and efficiency.

   - Vue: Vue also uses a virtual DOM and offers good performance, contributing to its responsiveness and efficient rendering.

   - Svelte: The Svelte compiler reads the written code and compiles it into pure JavaScript, without utilizing a Virtual DOM. Its unique approach to reactivity is exceptionally performant compared to its counterparts.
  

4. **Adoption by Tech Giants:**
   - React: React is used by Facebook, Instagram, WhatsApp, and many other companies.

   - Angular: Angular is maintained by Google and used by large enterprises like Microsoft, IBM, and Cisco.

   - Vue: Vue is used by Alibaba, Xiaomi, and others, but it's not as prevalent in tech giants as React and Angular.

   - Svelte: Svelte has a limited presence in this context. However, Apple utilizes it for the web version of Apple Music.



## Getting Started

Here are the main steps to start a React project.
Before you begin, make sure you have Node.js installed on your system.

**Step 1: Create a new Vite project**
To create a new project, open your terminal and run the following command:
```bash
npx create-vite your-project-name --template react
```
Replace _your-project-name_ with the name you want for your project.

**Step 2: Navigate to the project directory**
Once the project is created, navigate to the project directory:
```bash
cd your-project-name
```

**Step 3: Install dependencies**
```bash
npm i
```
**Step 4: Run the development server**
```bash
npm run dev
```

## Conclusion

According to surveys, React stands out in popularity and adoption among developers. This is attributed to its exceptional speed, flexibility, SEO-friendliness and lightweight library.
React is firmly established in the market and is in high demand in job listings. 


## References

- [The History of React.js on a Timeline](https://blog.risingstack.com/the-history-of-react-js-on-a-timeline/)
- [React](https://react.dev)
- [Frontend frameworks popularity](https://gist.github.com/tkrotoff/b1caa4c3a185629299ec234d2314e190#stack-overflow-survey)
- [Angular vs. React: A Complete Comparison Guide ](https://www.cuelogic.com/blog/what-are-the-differences-between-angular-and-react#:~:text=In%20Angular%20apps%2C%20a%20real,to%20update%20the%20entire%20tree.)
- [Angular vs. React vs. Vue.js: Comparing performance](https://blog.logrocket.com/angular-vs-react-vs-vue-js-comparing-performance/#future-frameworks)
- [Svelte: what it is, how it works, and differences with React JS](https://www.alura.com.br/artigos/svelte-versus-react-quais-diferencas)
- [Top 10 Big Companies Using Svelte](https://www.okupter.com/blog/companies-using-svelte#:~:text=Apple%20has%20brought%20Svelte%20to,a%20proud%20user%20of%20Svelte.)

## Additional Resources

- [Course: Explore React with Javascript](https://cursos.alura.com.br/formacao-react-javascript)
- [How A Small Team of Developers Created React at Facebook | React.js: The Documentary](https://youtu.be/8pDqJVdNa44?si=PGlrM6fjmTx5O93u)
- [Chat GPT](https://chat.openai.com/)