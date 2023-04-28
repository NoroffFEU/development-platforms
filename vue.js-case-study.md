---
title: Vue.js Case Study
author: Lars Halvor Vikse Kallåk <lhvk>
tags: javascript, framework, vue
---

## Introduction
 
 ![Image of Vue logo](https://res.cloudinary.com/practicaldev/image/fetch/s--q6AIFazN--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ll22z8mea106b4vjdjy7.jpeg)

Vue is a Javascript framework for building user interfaces and single-page applications (SPAs). It builds on top of standard HTML, CSS and Javascript and is fairly easy for beginners to learn, given that you have experience with the previously mentioned frontend languages. This distinguishes Vue from competitors that require deep knowledge of Typescript, JSX, and an array of different libraries.

## Brief History

Vue was created by Evan You, a Google software engineer, in 2013 and had its official release in 2014. The name derives from the French word vue, meaning view. He had previously worked on several large-scale projects using other popular frameworks, but found that they often came with a steep learning curve and a lot of overhead that was not necessary for smaller projects.
 
Evan wanted to create a framework that was easy to understand and use, yet still powerful enough to handle complex applications. He was inspired by the simplicity and elegance of React's component-based architecture and Angular's two-way data binding, and set out to create a framework that combined the best of both worlds.

#### Here is a timeline highlighting the major events:
 
- **2013:** Version 0.6 In December Evan You created the first version of Vue
- **2014:** Version 0.8 First public release
- **2015:** Version 1.0 Was released, which featured a virtual DOM and improved performance.
- **2016:** Version 2.0 Was released, which introduced significant performance improvements, better TypeScript support, and a new syntax for components.
- **2020:** Version 3.0 Was released, which introduced several new features and performance improvements over the previous version.

## Main Features
 
| Feature | Description |
| :--- | :--- |
| Virtual DOM | Virtual representation of the DOM tree, a copy of the real DOM, that is compared whenever a change is made and updates the UI accordingly, resulting in better performance |
| Data Binding | Manipulates/assign values to HTML attributes, change style or assign classes etc. |
| Components | Create custom reusable HTML elements |
| Event Handling | Event listeners |
| Animation/Transition | Built-in wrappers and/or third party libraries for transition effects |
| Computed Properties | Listens to changes made to UI elements and performs necessary calculations without additional coding |
| Templates | Compiles templates into virtual DOM render functions |
| Directives | Built-in directives such as: v-if, v-else, v-show, v-on, v-bind, and v-model |
| Watchers | Applied to changing data such as form inputs. Data handling is taken care of by a watcher |
| Routing | Vue-router helps with navigation between pages |
| Lightweight | Light and fast performing |

## Market Comparison

 ### Vue vs React
 
 ![Vue vs React image](https://www.monterail.com/hs-fs/hubfs/blog_graphics/xVue_vs_React_comparison_of_technologies.png,qwidth=1172,aheight=1722,aname=Vue_vs_React_comparison_of_technologies.png.pagespeed.ic.nlnRETuray.webp)
 
#### Virtual DOM
 - Both use virtual DOM which makes it faster.
#### Template vs JSX
 - Vue uses html, js and css seperately, which makes it easier for beginners to learn Vue. This resembles a vanilla based approach to making UI. React on the other hand use jsx, which means that html and css are used in the js files either as styled components, function components or class components.
#### Installation Tools
 - React uses create react app and Vue uses vue-cli /CDN/npm. React needs webpack for the build, whereas VueJS does not. We can start with VueJS coding anywhere in jsfiddle or codepen using the cdn library.
#### Popularity
 - React is popular than Vue. The job opportunity with React is more than Vue. There is a big name behind React i.e. Facebook which makes it more popular
 
 ### Pros
- **Small in size:** The framework is only 18kb and is fast to install
- **Performance:** Using a virtual DOM, page rendering is pretty quick and thus improves the application's overall performance
- **Data-binding:** Two-way databinding allows for a component class to share data between itself and its template.
- **Light learning curve:** All you need to know is basic HTML, CSS and Javascript
 - **Community support:** Vue has a pretty active community on Discord chat and forum
 
  ### Cons
- **Language barrier:** Due to its popularity in China, much of the community support will be in Chinese
- **Lack of support for large-scale projects:** For large-scale projects a framework must ensure stability and strong support. Vue does not have many problems, but are used in relatively small projects
- **Lack of experienced developers:** Vue is steadily gaining momentum, but it's a still relatively young technology
 
## Getting Started
 
 
```
npm init vue@latest
```

### Vue from CDN
 ```ruby
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```
 
## Conclusion

Vue is a lightweight framework that is easier for beginners to master. It has some powerful features such as the virtual DOM, data-binding etc. Vue has taken the good parts from Angular and React and has built a powerful library, but has still a way to go before they reach Angular and React levels of popularity. Vue is a developing framework and thus still a work in progress. 

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Vue.js)
- [Vue Documentary](https://www.youtube.com/watch?v=OrxmtDw4pVI)
- [Tutorialspoint](https://www.tutorialspoint.com/vuejs/vuejs_overview.htm)
- [Blog](https://www.altexsoft.com/blog/engineering/pros-and-cons-of-vue-js/)
- [Monterail](https://www.monterail.com/blog/vue-vs-react)
## Additional Resources

- [Official Website](https://vuejs.org/)
