---
title: Angular
author: Eskil Torset <eskiltorset>
tags: example, case study, platform
---

![Angular logo](https://i.postimg.cc/43zc1KZ8/Angular-Logo-SVG-svg.png)

## Introduction

Angular is a widely-used framework for building single-page web applications. It was initially developed by Google and is now maintained by a dedicated team of developers and contributors. Angular provides developers with a robust set of tools and features for creating dynamic and interactive user interfaces.

## Brief History

- 2010: The birth of AngularJS
  -- Developed by Miško Hevery at Google, who was at the time developing a side project. This side project was to help make building web applications easier for a couple internal projects he was working on. This project resulted in what we know today as AngularJS.
- 2016: AngularJS unfortunately faced limitations in performance and scalability as web development practices evolved. Becuase of this they released Angular 2 in September 2016, marking a complete rewrite of the framework.
  Angular 2 introduced a component-based architecture, improved performance, and better support for modern web development practices.

<!-- The history of Angular dates back to 2010 when it was first introduced as AngularJS by Misko Hevery and Adam Abrons at Google. Over the years, AngularJS gained popularity among developers for its data binding and dependency injection capabilities. However, as web development practices evolved, AngularJS faced limitations in performance and scalability.

In response to these challenges, the Angular team at Google embarked on a complete rewrite of the framework, resulting in the release of Angular 2 in September 2016. Angular 2 introduced a number of significant changes, including a component-based architecture, improved performance, and better support for modern web development practices such as server-side rendering and progressive web apps. -->

## Main Features

Angular is a widely-used framework for building single-page web applications. It provides developers with a robust set of tools and features for creating dynamic and interactive user interfaces.

### Benefits of Angular

**Angular supports multiple platforms**<br>
Angular is a cross platform language. It supports multiple platforms. You can build different types of apps by using Angular.

- Desktop Applications: Angular empowers developers to craft desktop-installed applications compatible with diverse operating systems such as Windows, macOS, or Linux. Leveraging Angular's familiar methods, developers can seamlessly transition between web, native, and desktop app development.
- Native Applications: Using Angular in tandem with frameworks like Cordova, Ionic, or NativeScript, developers can construct native apps, harnessing the power of Angular's robust features within native environments.
- Progressive Web Applications (PWAs): Angular is a preferred choice for building PWAs, leveraging modern web platform capabilities. PWAs developed with Angular deliver high performance, offline functionality, and effortless installation.

**High Speed, Ultimate Performance**<br>
Angular is amazingly fast and provides a great performance due to the following reasons:

- Universal Support: Angular seamlessly integrates with various back-end technologies such as Node.js, .Net, PHP, Java Struts, and Spring, enabling near-instant rendering in HTML and CSS. This optimization enhances website performance and search engine visibility.
- Code Splitting: Angular's Component Router features automatic code-splitting, ensuring that users only load the code necessary to render requested views. This approach enhances app loading times and overall performance.
- Code Generation: Angular optimizes templates into highly efficient code suitable for modern JavaScript virtual machines, offering the benefits of manually crafted code.

**Productivity**<br>
Angular provides a better productivity due to its simple and powerful template syntax, command line tools and popular editors and IDEs.

- Powerful Templates: Angular provides a simple yet powerful template syntax, enabling developers to swiftly create UI views with ease.
- IDE Integration: Angular seamlessly integrates with popular editors and IDEs, offering features like intelligent code completion and instant error feedback.
- Angular CLI: The Angular CLI empowers developers with command-line tools for rapid development, allowing for quick component creation, testing, and deployment.

**Full Stack Development**<br>
Angular is a complete framework of JavaScript. It provides Testing, animation and Accessibility. It provides full stack development along with Node.js, Express.js, and MongoDB.

- Testing: Angular offers Karma and Jasmine for efficient unit testing, enabling developers to detect and address issues promptly. Karma, a JavaScript test runner, and Jasmine, a testing framework, streamline the testing process, ensuring code integrity.
- Animation Support: Angular simplifies complex animation creation with its intuitive API, enabling developers to design high-performance animations with minimal code.
- Accessibility: Angular empowers developers to build accessible applications by offering ARIA-enabled components, developer guides, and built-in accessibility test infrastructure, ensuring inclusivity and compliance with accessibility standards.

### AngularJS vs Angular

With the rewrite of the frameowrk in 2016, it made the two versions very different from each other. The main difference between AngularJS and Angular is that AngularJS is based on JavaScript, while Angular is based on TypeScript. But there are still several similarities between these two front-end, open-source frameworks that are used to create dynamic web applications and SPAs. The main features for them both are listed below.

#### Angular

| Feature                               | Description                                                                                                                                                                                                      |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cross-Platform                        | With Angular, you can not only create stunning UIs for web applications but also for native mobile applications as well as desktop applications.                                                                 |
| Makes Use of TypeScript               | Makes use of TypeScript.                                                                                                                                                                                         |
| Angular CLI                           | Angular CLI offers a great way to speed up the development process. From setting up the project to adding components and services, there are several tasks that you can do by simply using Angular’s native CLI. |
| Data Binding and Dependency Injection | The data binding feature is what allows you to add dynamic behaviour to the web pages developed                                                                                                                  |
| Unit Testing Support                  | With Angular, it becomes possible to perform unit testing with relative ease and thus, ensure that your code has minimal bugs.                                                                                   |

#### AngularJS

| Feature                    | Description                                                                                                                                                                                                                                                                            |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Use of Plain JavaScript    | AngularJS makes use of JavaScript programming language and it has nothing to do with TypeScript.                                                                                                                                                                                       |
| Controllers and Directives | The directive and controllers in AngularJS give you the authority to decide the functionality and have complete control over the behaviour of an application.                                                                                                                          |
| Reusable Components        | You can create reusable components that you can use multiple times within an application.                                                                                                                                                                                              |
| Routing                    | Routing is the feature that makes it possible to switch between different views of an application. In simple terms, routing allows users to navigate through different pages of a website or different sections of a web app without the need to reload the whole app or the web page. |

### Current State

As of the latest update, Angular is in its version 13.x series, with regular updates and releases aimed at improving performance, stability, and developer experience. The Angular community is active and vibrant, with thousands of developers contributing to the framework's ecosystem through libraries, tools, and resources.

## Market Comparison

Angular faces competition from other frontend frameworks such as React and Vue.js, each offering its own set of advantages and catering to different developer preferences and project requirements. While Angular has a strong and active community, it may not be as large or as diverse as some other frontend communities, which can impact the availability of third-party resources and support.

## Getting Started

A step-by-step guide for starting a project using Angular.

**Step 1**<br>
Create a folder for your application in the desired location on your system and open it on VSCode. Open a new terminal and type in the following command to create your app folder:

```bash
ng new <project_name>
```

**Step 2**<br>
To run the application, change the directory to the folder created, and use the ng command.

```bash
cd <project_name>
```

```bash
ng serve
```

**Step 3**<br>
To open the application in your browser, run this command:

```bash
ng serve --port
```

this will generate a port for you to navigate to. From here you're all set to start developing.

## Conclusion

In conclusion, Angular continues to be a popular choice for frontend development due to its powerful features, active community, and commitment to innovation. By leveraging Angular's capabilities, developers can build scalable, maintainable, and feature-rich web applications that meet the demands of modern users.

## References

- [History of Angular](https://medium.com/the-startup-lab-blog/the-history-of-angular-3e36f7e828c7)
- [AngularJS vs Angular](https://www.interviewbit.com/blog/difference-between-angular-and-angularjs/#:~:text=The%20main%20difference%20between%20AngularJS,dynamic%20web%20applications%20and%20SPAs.)
- [Angular Project: A Step-by-Step Guide to Build First Angular Project](https://www.simplilearn.com/tutorials/angular-tutorial/angular-project)
- [Angular Features](https://www.javatpoint.com/angular-7-features)

## Additional Resources

- [Chat GPT](https://chat.openai.com)
