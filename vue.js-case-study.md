---
title: Vue.js Case Study
author: Lars Halvor Vikse Kallåk <lhvk>
tags: javascript, framework, vue
---

## Introduction
 
 ![Image of Vue logo](https://res.cloudinary.com/practicaldev/image/fetch/s--q6AIFazN--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ll22z8mea106b4vjdjy7.jpeg)

I've chosen Vue as my case study because frontend is what I study. I've never used Vue and I have zero experience with it, so I reckon this would be pretty interesting to dive deeper into.

## Brief History

Vue was created by Evan You, a Google software engineer, in 2013 and had its official release in 2014. The name derives from the French word vue, meaning view. Evan wanted to create a framework that was lightweight and included the best parts from Angular, which he had been using at Google.

#### Here is a timeline highlighting the major events:
 
- **2013:** Version 0.6 In December Evan You created the first version of Vue
- **2014:** Version 0.8 First public release
- **2015:** Version 1.0 Released
- **2016:** Version 2.0 Released
- **2020:** Version 3.0 Released

## Main Features
 
Vue is a Javascript framework used to build frontend UI. It is simple and has a small learning curve, good library support and is efficient.

| Feature | Description |
| :--- | :--- |
| Virtual DOM | Virtual representation of the DOM tree that makes the page faster |
| Data Binding | Manipulates/assign values to HTML attributes, change style or assign classes etc. |
| Components | Create custom reusable HTML elements |
| Event Handling | Event listeners |
| Animation/Transition | Built-in wrappers and/or third party libraries for transition effects |
| Computed Properties | Listens to changes made to UI elements and performs necessary calculations without additional coding |
| Templates | Compiles templates into virtual DOM render functions |
| Directives | Buil-in directives such as: v-if, v-else, v-show, v-on, v-bind, and v-model |
| Watchers | Applied to changing data such as form inputs. Data handling is taken care of by a watcher |
| Routing | Vue-router helps with navigation between pages |
| Lightweight | Light and fast performing |

## Market Comparison

 ### Vue vs React
 
#### Virtual DOM
 - Both use virtual DOM which makes it faster
#### Template vs JSX
 - Vue uses html, js and css seperately, which makes it easier for beginners to learn Vue. This resembles a vanilla based approach to making UI. React on the other hand use jsx, which means that html and css are used in the js files either as styled components, function components or class components.
#### Installation Tools
 - React uses create react app and VueJS uses vue-cli /CDN/npm.
 
 ### Pros
- **Small in size:** The framework is only 18kb and is fast to install
- **Performance:** Using a virtual DOM, page rendering is pretty quick and thus improves the application's overall performance
- **Data-binding:** Two-way databinding
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


## References

- [Wikipedia](https://en.wikipedia.org/wiki/Vue.js)
- [Vue Documentary](https://www.youtube.com/watch?v=OrxmtDw4pVI)
- [Tutorialspoint](https://www.tutorialspoint.com/vuejs/vuejs_overview.htm)
## Additional Resources

- [Official Website](https://vuejs.org/)
