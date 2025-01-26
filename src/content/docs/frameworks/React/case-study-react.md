---
title: React Case Study
author: Renate Yooyued <renayoo>
tags: react, case-study, frameworks, app, developmental platforms
---

## Introduction

React is a popular JavaScript development tool widely used for building user interfaces by composing individual pieces called components. React makes it easier to create dynamic, interactive, single-page applications (SPA). One of the key benefits of using React is its ability to seamlessly combine components created by different developers, making it an excellent choice for collaborative development and team projects. React lets you build both web apps and native apps using the same skills. 

## Brief History
Timelines   

**2011:** Jordan Walke created an early prototype of React, FaxJS. It was created to addresss challenges Facebook faced with its complex UI.  

**2013:** React was first released in May 29th 2013. It was developed by Jordan Walke. Since its release, it is one of the most popular JavaScript libraries for building User Interfaces. 
  
  Fun fact: When React was first introduced, the audience was skeptical and most people thought React was a huge step backwards. 

**2015:** React is stable. Many popular companies likes React. Airbnb uses this library. 



## Main Features
- **JSX (JavaScript Syntax Extension):** Syntax extension that combines JavaScript with HTML elements, making it easier to decribe the UI within the code. JSX enhances code readability and simplifies the developmental process.
- **Virtual DOM (Document Object Model)**: DOM is the most important part of the web as it divides into modules and executes the code. When using JavaScript Frameworks, the whole DOM updates at once, making web applications slow. React uses Vitual DOM which is the exact copy of real DOM. When there is a modification in the web application, the vitual DOM is updated first and finds the difference, and then only updates the changed part. This makes web applications more efficient, and enhances performance. 
- **Component based architecture**: React devides a web page into components. Each compontent is a part of the UI design with its own logic and design. Examples of React components include "Thumbnail", "LikeButton", and "Video".


```jsx
function Video({ video }) {
  return (
    <div>
      <Thumbnail video={video} />
      <a href={video.url}>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </a>
      <LikeButton video={video} />
    </div>
  );
}
```
<br>

## Strengths and Weaknesses:

### Strengths

**Performance**
 - When a change occurs in the web application, React checks the updated virtual DOM with the previous state and only updates the changed part which enchances performance. 

**Easy to learn**
- React can be coded in JavaScript or in TypeScript. The core concepts of React are easy to learn. To start learing React, the basic knowledge of JavaScript is enough. 

**Large communtity** 
 - React is an active and large community which makes communicating with other developer easier if you need help. 

### Weaknesses

**Lack of quality documentation and standard recommondation** 
 - React's website covers basic concepts with few examples. It does not provide deep and detailed explanations or examples. React can be used to create large applications, but there is no standard way to do it. This can make a wrong choice in the beginning more complicated and may delay the development of the application.

 **Developmental pace**
 - React has a fast developmental pace and releases new versions of the library a few times a year. A developer need to learn fast to apply new concepts of the application.

 **Advanced use of JavaScript**
 - The basic concepts of React are easy to learn, but the advanced concepts are complex. It exploits advanced features of JavaScript. 


## Comparison with other Frameworks

| Feature            | React                                  | Vue.js                                  |
|--------------------|----------------------------------------|-----------------------------------------|
| **Learning Curve**  | Steeper, requires understanding JSX    | Easier for beginners                   |
| **Community**       | Larger, more mature community          | Smaller but growing rapidly             |
| **Performance**     | High performance with Virtual DOM      | Comparable performance, with optimizations |
| **Integration**     | Works well with existing codebases     | Easy integration into projects         |
| **Size**            | Heavier (about 100KB)                  | Lighter (about 60KB)                   |
|**Ecosystem**|Rich ecosystem with tools like React Router, Redux, React Native, Next.js etc. | Smaller ecosystem, but growing with tools like Vue Router, Vuex, Next.js| 
---

## Getting Started with React

To start a React project, you should have **Node.js** installed on your system. If you don’t have it yet, you can download and install it from [nodejs.org](https://nodejs.org/).

### Step 1: Create a New Vite Project

[Vite](https://vitejs.dev/) is a fast build tool that offers a streamlined experience for modern web development, especially with React. To create a new React project using Vite, open your terminal and run the following command:

```bash
npx create-vite your-project-name --template react
```

Replace _your-project-name_ with your preferred project name.

### Step 2: Navigate to the Project Directory

After the project is created, navigate to the newly created project directory:

```bash
cd your-project-name
```

### Step 3: Install Dependencies

Next, install all required dependencies for the project:

```bash
npm install
```

### Step 4: Run the Development Server

To start the development server and see your app in action, run:

```bash
npm run dev
```

This will start the server and the app will be available at `http://localhost:3000` by default.


## Conclusion

React offers a powerful, component-based architecture for building dynamic user interfaces. Its main advantages include high performance, ease of learning, and a large supportive community. However, the library's lack of detailed documentation and the fast-paced development cycle can make it challenging for developers to stay updated. Additionally, React's use of advanced JavaScript concepts requires a deeper understanding of the language.

React is ideal for building single-page applications (SPAs), developing collaborative projects, and supporting cross-platform apps via React Native. Despite some limitations, React's future remains promising with ongoing improvements, making it a top choice for modern web and mobile development.



## References

- [React](https://react.dev/)
- [MyGreatLearning - History of React](https://www.mygreatlearning.com/react-js/tutorials/history-of-reactjs)
- [RisingStack - React Timeline](https://blog.risingstack.com/the-history-of-react-js-on-a-timeline/#:~:text=2013%20%E2%80%93%20The%20year%20of%20the,2016%20%E2%80%93%20React%20gets%20mainstream)  
- [GeeksForGeeks - Main features of ReactJS](https://www.geeksforgeeks.org/what-are-the-features-of-reactjs/?utm_source=chatgpt.com)
- [TutorialsPoint - Advantages & Disadvantages](https://www.tutorialspoint.com/reactjs/reactjs_advantages_and_disadvantages.htm?utm_source=chatgpt.com)
 - [Radix - React vs Vue](https://radixweb.com/blog/react-vs-vue)