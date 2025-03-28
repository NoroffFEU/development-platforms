---
title: preact case study
author: kine jakobsen
tags: case study, preact, react, DOM
---

## Introduction
Preact is a javascript library that was created by Jason Miller as a smaller and faster alternative to React. The goal of preact is to create a library that has several factors. On their website, they state these five goals: Performance, size, efficiency, understandability and compatibility - which will be looked further into when looking at the features of preact. Considering preact is an alternative to react, there are many similarities between them, and Preact is highly compatible with the react librar, and can utilize many of its features. Preact uses a minimal virtual DOM abstraction. This is utilized so that the performance of the site will be optimized as there are less direct DOM manipulation

## Brief History
 - 2015: Preact was created as an alternative to React. Preact was created by Jason Miller, and he aimed to create a framework that would be faster and smaller.
   
 - 2016: Preact 8.0 was released to update the framework.
   
 - 2017: Added Preact/compat to make the library compatible with React.
   
 - 2018: Preact CLI was added. This added a client for the user, to have a better and easier way of implementing Preact.
    
 - 2020: Preact X was added. The goal of preact X was adding features such as hooks support and more efficient development tools and better compatibility with React.
   
 - 2024: Continuous updates and optimization of the library.


## Main Features / Strengths
| Feature  | Description|
| ----------- | ----------- |
| **Small** | Preact is a smaller Library. This means that you will have less js that is needed to download, parse and execute.|
| **Fast** | Considering preact is smaller, it has less items to download and therefore will make the utilization faster and more seamless.  
|**Virtual DOM compatibility**| using a virtual DOM means you can optimize performance, as only the parts of the page that needs updating are changed. Furthermore, Preact utilizes the algorith called diff implementation, which compares the virtual DOM tree continuously, and only changes the the DOM elements that needs change.|
|**Compatibility**| Preact is compatible with React, and can therefore utilize the react components if needed, by using preact/compat.|
|**Adaptibility**| Considering React is a popular library, many users are familiar with it. Preact being so similar and compatible to React.js, means the users can adapt to Preact library easier than other options.|



## weaknesses
| Feature  | Description|
| ----------- | ----------- |
|**Less support**| Preact is a smaller library, and does not have the resources many of the bigger libraries have. This means, that there are less resources available, and could also mean updates and bug fixes may be a bit slower than their bigger competitors |
|**Small**| Considering the goal of Preact was to create a smaller and more efficient library, it makes sense that it is smaller. In some instances this would be a weakness, such as larger scale applications.| 
|**synthetic event handling**| Preact does not utilize synthetic event handling, and this could slow down the app, as well as create maintenance issues.|

## Market Comparison

### React
---
Preact has similarities with several different javascript libraries and frameworks, but it is the most similar to react. Preact states that they do not intend to be the same as react or an implementation, rather, they aim to cut down the size of the features of react in a way that would make the library small and focused. 
Main differences between preact and react is that preact does not use the synthetic event system. A synthetic event system is used by libraries to handle the different events, rather than using the browsers built-in system. The reason Preact chooses not to use this, is that not doing so will decrease the size of the code and to make the framework work faster.  

### Vue.js
---
React also has a competitor in Vue.js. Vue is a framework that focuses on building user interfaces.There are pros and cons with using Preact instead of vue. One being preacts compatability with react, which means programmers familiar with react has an easier start to Preact. Furthermore, considering vue is a framework it has its own syntax and ecosystem, so it is larger and more space consuming than preact. 


## Getting Started

Getting started with Preact is simple, as there are several options for tutorials/help. 

**The first option** is on the landing page of their [website]( https://preactjs.com/)

![Capture](https://github.com/user-attachments/assets/908cee20-8565-400f-a849-992bd2ed27b7)

When this button is clicked, the user is brought an [introduction page](https://preactjs.com/guide/v10/getting-started) 

![Tutorial 2](https://github.com/user-attachments/assets/42fec941-d23f-49e2-a09c-73293326e9ea)

On this page there are step by step guides as to how to proceed, as well as many other helpful tips and tricks, as well as answers to questions you may or may not have. 

**The second option** the user has is a tutorial. 
The user needs to click the tutorial tab on the top of the page, and this will bring them to a [tutorial page](https://preactjs.com/tutorial)

![tutorial3](https://github.com/user-attachments/assets/311774e0-4bfa-4e4b-b016-bacc6557aa34)

Beginning the tutorial brings the user to the [tutorial](https://preactjs.com/tutorial/01-vdom)

![tutorial4](https://github.com/user-attachments/assets/1b9db829-ebf8-40e2-82a8-19ee40a784d0)

Here there are step by step instructions, as well as tasks for the user to do so that they get familiar with the product. 

## Conclusion
In conclusion, there are pros and cons when it comes to react. In essence, it depends on the situation the library will be used. If the project is small (i.e. a simple app) preact will be a great choice, but it could be lacking when it comes to larger scale applications. Furthermore, preact is compatible with the react library, which in turn means preact can utilize the code if needed. However, if the project is on a larger scale, react might be the better choice, as it is larger, and has access to more third-party libraries and components.  Another limitation for preact is that the team at preact is smaller than several other competitors (i.e. react), meaning preact may not be able to update and fix bugs in the same capacity as the larger libraries. Preact keeps growing however, and they release new versions and updates regularly. Preact is therefore a great alternative for smaller scale applications, and starting to use preact is simple and well laid out. Preact keeps growing in popularity, and will - in my opinion - be one of the more popular libraries with time.  



## References

-  https://blog.logrocket.com/introduction-to-preact-a-smaller-faster-react-alternative-ad5532eb6d79/
- https://preactjs.com/guide/v10/differences-to-react
- https://graffersid.com/preact-vs-react/
- https://www.angularminds.com/blog/preact-vs-react-a-detailed-guide
- https://www.softude.com/blog/preact-vs-reactjs-which-javascript-library-is-better-and-why
- https://www.preact.js/
- https://moiva.io/?npm=preact+vue




