---
title: Angular Case Study
author: Elise Marie Hogsnes <elli95>
tags: Angular, open-source framework, TypeScript.
---

## Introduction

Angular, a robust open-source framework developed by Google, serves as a powerful ally in the realm of web development. Whether you're embarking on a single-page application or tackling a complex enterprise solution, Angular equips you with the essential tools and a well-defined structure. Angular is written in TypeScript, a superset of JavaScript that introduces static typing and advanced features. With Angular, you can create reusable components, manage data flow, handle routing, and more.

In this case study, we'll delve into Angular's rich history, explore its strengths and weaknesses, analyze competitors, and gain insights into real-world usage scenarios.

## Brief History

- **2009**: Software engineers **Misko Hevery** and **Adam Abrons** collaborated to create a powerful web framework called **AngularJS** officially released 2010.

- **2016**: In September, **Angular 2** was **released**, a completely reworked version of AngularJS. Since **Angular 2**, the framework has adhered to semantic versioning (SemVer). This means that new releases follow a predictable schedule every six months.

  - Later the announcement of **Angular 4** followed December the same year.

  - **Angular 3** was skipped due to a router package misalignment.

- **2017**: This year introduced **Angular 4** and **Angular 5**.

  - **Angular 4** was released in March. This version brought significant improvements, including a more efficient compiler that trimmed the size of **JavaScript** code generated from Angular's **TypeScript** and **HTML** by over half. Additionally, **animations** were moved to their own separate package, which helped streamline the production bundle and improve performance.

  - Later that year, in November, **Angular 5** was introduced. This version focused on simplifying the process of building **progressive web apps** (PWAs) and introduced **CLI Workspaces**, a feature that makes it easier to manage multiple Angular projects.

- **2018**: **Angular 6** and **Angular 7** was introduced this year.

  - **Angular 6** was released in May, bringing with it a host of enhancements that made it easier for developers to work with the framework. One notably enhancements was the improvement to the **Angular CLI**, including new commands that streamlined the process of **updating Angular** and adding new packages.

  - In October, 2018, **Angular 7** continued the framework's evolution, introducing further enhancements and optimizations. This time the **CLI** got an upgrade, complete with helpful prompts explaining its functions.

- **2019**: **Angular 8** was released in May, introducing a preview of **Ivy Renderer** a new generation renderer, with the aim to enhance app performance and reduce the bundle size.

- **2020**: This year brought several updates for **Angular**:

  - **Angular 9** (released in February) implemented a complete transition to **Ivy**, where it became the default compiler for all applications.

  - **Angular 10** (released in June) prioritized quality and performance enhancements over new features.

  - **Angular 11** (released in November) introduced **Component Test Harnesses** to assist with testing Angular Material components.

- **2021**: This year **Angular 12** and **Angular 13** was released.

  - **Angular 12** (released in May) focused on stylistic enhancements, removing legacy components and providing developers with more control over the project.

  - **Angular 13** (released in November) discontinued support for several applications, including **View Engine**, **Internet Explorer 11**, and **Node.js** versions prior to 12.20.0. This version also simplified the creation of dynamic components.

- **2022**: **Angular 14** and **Angular 15** was released this year.

  - **Angular 14** was released in June. This update brought the long awaited feature **Strictly Typed Forms**. Many engineers regard this as a highly significant upgrade that solved an issue with TypeScript’s inability to catch many common errors, caused by **Reactive** or **Model-Driven Forms** in Angular lack of type definitions.

  - **Angular 15** was released in November. This update introduced a stable standalone API, allowing developers to build apps without having to use Ng Modules. This update also reduces the amount of boilerplate code needed, improved performance, and introduces a new directive composition API.

- **2023**: Introduced this year was **Angular 16** and **Angular 17**.

  - In May, **Angular 16** was released, marking a significant milestone in Angular's development. This version introduced several new features that improved performance and enhanced the developer experience. The new **reactive mode**l and the **Angular Signals library** made it easier to work with reactivity in Angular applications. Improvements to **Server-Side Rendering** and **Hydration** also led to better server-side rendering and user experience.

  - Later in the same year, in November, **Angular 17** was released. This update offers several new features and improvements. It includes **deferrable views** which help improve performance and make it easier for developers to work with Angular. There is also a **built-in control flow loops** that make the runtime up to 90% faster in public benchmarks. Additionally, builds for hybrid rendering are up to 87% faster, and for client-side rendering, they're up to 67% faster.

## Main Features

| Angular Features                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Start quickly                   | As you start small with Angular, you'll find several features that support scaling your Angular app as it grows.                                                                                                                                                                                                                                                                                                                                                  |
| Enterprise capable              | As your team and apps grow, Angular provides a platform that guides you with best practices. This enables you to create user interfaces that are both testable and scalable, ensuring they perform well as your projects expand.                                                                                                                                                                                                                                  |
| Predictable releases            | With Angular's predictable release schedule and update tools, it strives to keep its app framework and web platform up to date with the latest advancements. This stability is essential for the Angular ecosystem to grow and thrive, ensuring that reusable components, libraries, tutorials, tools, and learned practices remain relevant and up to date.                                                                                                      |
| Community resources             | The Angular community consist of a global network of many local organizations that curate a variety of resources, including podcasts and other community-created content.                                                                                                                                                                                                                                                                                         |
| Education resources             | The Angular community offers resources in many forms such as books, workshops, on-site training, and online training to help you get started.                                                                                                                                                                                                                                                                                                                     |
| Development resources           | The Angular team and community provide resources such as IDEs, tools, data libraries, UI components, and Cross-Platform Development to help you in all stages of development.                                                                                                                                                                                                                                                                                     |
| Powerful command-line interface | The Angular command-line interface (CLI) is a powerful tool that helps you start a project and guide it to production, ensuring consistency across your teams and projects.                                                                                                                                                                                                                                                                                       |
| Forms and routing               | The Angular team has created and maintains Angular's forms and routing features, which offer stability and seamless integration with the rest of the platform.                                                                                                                                                                                                                                                                                                    |
| Development tools               | Angular offers autocomplete and type checking with its integrated development environment (IDE) tools.                                                                                                                                                                                                                                                                                                                                                            |
| Internationalization tools      | Angular's Internationalization (i18n) and Localization (l10n) tools enables your app to reach a global audience. Internationalization involves designing and preparing your project for use in different locales around the world, while localization involves creating versions of your project for different locales. These locales determine the formatting and parsing of measurement units, date and time, currencies, time zones, languages, and countries. |
| Accessibility tools             | Angular provides tools to help you create accessible apps, such as developer guides, ARIA-enabled components, and built-in Accessibility (a11y) test infrastructure. These tools are crucial because the web is used by people with a range of abilities, and designing for accessibility not only benefits those with disabilities but also enhances the user experience for everyone.                                                                           |
| Component libraries             | Angular apps have access to a variety of component libraries. One such library is the Material component library, which is used with confidence by thousands of Google apps.                                                                                                                                                                                                                                                                                      |

### Advantages of Angular

**Angular** offers numerous advantages to developers. Its **component-based architecture** simplifies development and enhances code quality. **TypeScript**, the language Angular is written in, improves tooling, code cleanliness, and scalability. **RxJS**, a library used with Angular, enables efficient asynchronous programming, though it does have a steep learning curve.

Furthermore, Angular embodies a **platform-agnostic philosophy**, ensuring its adaptability and suitability for both web and mobile applications. Its performance is notably high, thanks to features such as **hierarchical dependency injection**, **Angular Universal**, **Ivy renderer**, and **differential loading**. The support and documentation from **Google**, coupled with the availability of **Angular Material components** and the thriving Angular community, significantly bolster its appeal.

Moreover, Angular provides a seamless update experience through **Angular CLI**, streamlining the process of updating dependencies and the Angular framework itself. The extensive ecosystem surrounding Angular encompasses a diverse array of packages, plugins, add-ons, and development tools. Additionally, Angular elements facilitate compatibility with various engineering environments, enabling the reuse of Angular components in projects built with other technologies like **Vue.js**, **React**, or **jQuery**.

### Disadvantages of Angular

**Angular** has been a subject of criticism and **controversy** within its community. While it was once highly popular, it has since seen a decline in usage. Migrating from **AngularJS** to **Angular** is a complex process that requires time and effort, especially for legacy systems. Angular is also criticized for its verbosity and **complexity**, with developers spending a lot of time on repetitive tasks. Additionally, the **learning curve** for Angular is considered steep, with new developers finding it challenging compared to **React** or **Vue**. The need to learn **TypeScript** and **RxJS** further adds to the difficulty.

## Market Comparison

**Angular** has several competitors in the market, in this comparison, we will examine how **React** stack up against **Angular**.

1. **Popularity**:

   - According to the [statistics of Most used web frameworks among developers](https://www.statista.com/statistics/1124699/worldwide-developer-survey-most-used-frameworks-web/) **Angular** is curently on a fifth plase with 17%.

   - **React**, on the other hand, is currently more [popular](https://www.statista.com/statistics/1124699/worldwide-developer-survey-most-used-frameworks-web/) than Angular. Here, React secured second place with 40%.

2. **Performance**:

   Both Angular and React are known for their excellent performance.

   - **Angular's** bidirectional data-binding process requires a watcher for each binding, and each loop continues until all watchers are confirmed. This process may negatively impact Angular's performance. However, the introduction and improvement of new technology like Ivy to Angular may change this in the future.

   - In contrast, **React's** Virtual DOM trees are built on the server and are lightweight, which contributes to its superior runtime performance compared to Angular. Additionally, React's unidirectional data-binding process means that bindings do not require watchers, reducing workload.

3. **Language**:

   - **Angular** utilizes TypeScript, a superset of JavaScript, which simplifies the process of identifying typos and navigating through code.

   - In contrast, **React** allows developers to write code in JavaScript ES6+ with JSX, a syntax extension that resembles HTML. React also supports TypeScript, but it is not natively integrated.

4. **When to Choose What**:

   - Choose Angular when the developers are tasked with creating a feature-rich, enterprise-grade application with a low to medium level of complexity. The developers seeking pre-built solutions and enhanced productivity, and are well-versed in C#, Java, and Angular.

   - Choose **React** when the developers have a solid grasp of HTML, CSS, and JavaScript. The developers seeking a customized application that can handle multiple events and incorporates shareable elements.

5. **Learning Curve**:

   - **Angular** have what is considered a steeper learning curve.

   - **React** have what is considered a moderate learning curve.

Both Angular and React are popular front-end technologies. React is often preferred as it offers benefits and solutions for developers, reducing development time and errors. When choosing between React and Angular, consider your project requirements.

## Getting Started

**Step 1: Install Node.js and npm**

- Ensure you have **Node.js** and **npm** (Node Package Manager) installed. You can download them from the [official Node.js website](https://nodejs.org/).
- Open your terminal or command prompt and verify the installation by running:
  ```
    node -v
    npm -v
  ```

**Step 2: Install Angular CLI**

- **Angular CLI** (Command Line Interface) simplifies project setup and development.
- Install it globally by running:
  ```
  npm install -g @angular/cli
  ```

**Step 3: Create a New Angular Project**

- Navigate to the directory where you want to create your project.
- Run the following command to generate a new Angular project:
  ```
  ng new my-angular-app
  ```
- Select your preferred stylesheet format (CSS or SCSS) and continue.

**Step 4: Navigate to Your Project Directory**

- Change into your project directory:
  ```
  cd my-angular-app
  ```

**Step 5: Serve Your Application**

- Start the development server to see your application in action:
  ```
  ng serve --open
  ```
- Your browser will open to `http://localhost:4200/`.

**Step 6: Explore the Generated Files**

- Angular CLI creates a basic project structure for you. Key files and folders include:
- `src/app`: This folder contains your Angular components, services, and other application files.
- `src/index.html`: The main HTML file where your app starts.
- `src/styles.css` (or `.scss`): Global styles for your app.
- `angular.json`: Configuration file for your project.

**Step 7: Create Hello World**

Let's update the Angular project files.

- Open `my-angular-app/src/index.html`.
- Replace the `<title>` element in order to update the title:
  ```
  <title>Hello</title>
  ```
- Save.

- Next, open `my-angular-app/src/app/app.component.ts`.
- In app.component.ts, in the `@Component` definition, replace `templateUrl` with this code in order to change the text in the app.

  ```
  template: `<h1>Hello world!</h1>`,
  ```

- Or use `templateUrl` if you wish to refer to a different file with your design.

- In the `AppComponent` definition, replace `title ` with `Hello` used earlier.
  ```
  title = 'Hello';
  ```
- Save. Your changes should now appear in the localhost.

## Conclusion

**Angular** has undergone significant evolution since its inception in 2009, starting with AngularJS and development to Angular 2, Angular 4, and beyond. This framework offers a wide range of features and benefits, including scalability, predictability, and a strong community, making it a solid choice for developing feature-rich, enterprise-grade applications. However, Angular has faced criticism for its steep learning curve, verbosity, and complexity, especially when transitioning from AngularJS to Angular. With competitors like React and the constantly changing landscape of technology, there is still room for Angular to grow and maintain a steady user base. While Angular may not be as popular as it once was, it still has a place in the development community. However, this may change, for better or worse, with future developments and trends.

## References

- [The Good and the Bad of Angular Development](https://www.altexsoft.com/blog/the-good-and-the-bad-of-angular-development/)
- [Angular’s History: Development and Change Line from 1 to 17](https://medium.com/@bazobehram/angulars-history-development-and-change-line-from-1-to-17-0882e048710f)
- [What’s New in Angular 15: Deep Dive into Latest Features of Angular v15](https://www.bacancytechnology.com/blog/whats-new-in-angular-15)
- [Introducing Angular v17](https://blog.angular.io/introducing-angular-v17-4d7033312e4b)
- [Angular versioning and releases](https://angular.io/guide/releases)
- [ANGULAR FEATURES](https://angular.io/features)
- [Most used web frameworks among developers worldwide, as of 2023](https://www.statista.com/statistics/1124699/worldwide-developer-survey-most-used-frameworks-web/)
- [React vs Angular: Which JS Framework to choose for Front-end Development?](https://radixweb.com/blog/react-vs-angular)
- [Build your first Angular app](https://angular.io/tutorial/first-app)
- [Create a new project](https://angular.io/tutorial/tour-of-heroes/toh-pt0)

## Additional Resources

- [Copilot](https://copilot.microsoft.com/)
- [ChatGPT](https://chat.openai.com/)
