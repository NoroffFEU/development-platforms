---
title: Vue 3 with Composition API
author: Anne Ramstad
tags: vue, javascript, composition-api, frontend, development-platforms
---

## Introduction

Vue.js is a progressive Javascript framework for building user interfaces, from simple wab pages to large-scale applications. With Vue 3, the Composition API was intriduced as a new way to organize component logic. It allows developers to write cleaner, more modular code, making it easier to integrate with APIs, cloud-based backends, and modern full-stack workflows, where frontend applications often interact with Backend as a Service (BaaS), Database as a Service (DBaaS), and other APIs.

## Brief History

- 2013: Evan You begins developing Vue.js as a personal side project.
- 2014: First public release of Vue, version 0.8.
- 2015: Vue 1.0 released, adding a virtual DOM and improved performance.
- 2016: Vue 2.0 introduces better Typescript support and improved syntax.
- 2020: Vue 3.0 launches, bringing the Composition API and major performance enhancements.
- 2023: Vue 2 reaches End of Life; Vue 3 becomes the standard version.

## Main Features of the Composition API

The Composition API chanhes how Vue components are written, moving away from the traditional **Options API** towards a function-based approach. Key features include:

| Feature                           | Description                                                                                                                                  |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **Setup Function**                | The central entry point for component logic, making it easy to gruop related code together and integrate with APIs or services.              |
| **Reactive References (`ref`)**   | Creates reactive state variables that update the UI automatically when their values change.                                                  |
| **Reactive Objects (`reactive`)** | Provides deep reactivity for complex objects such as a database records or API responses.                                                    |
| **Computed Properties**           | Automatically updates derived values based on reactive state changes.                                                                        |
| **Lifecycle Hooks**               | Run logic at specific times (e.g., on mount, on unmount) - useful for connecting to or disconnecting from external data sources.             |
| **Composable Functions**          | Reusable functions that encapsulate logic, making it easy to share API calls, authentication handling, or state management across compoents. |

## Market Comparison

The Composition API can be compared to similar patterns in other frameworks:

| Aspect                    | Vue 3 Composition API                             | React Hooks                          | Angular Services                             |
| ------------------------- | ------------------------------------------------- | ------------------------------------ | -------------------------------------------- |
| **Logic Organization**    | Grouped by feature, not component section         | Grouped by feature                   | Often organized in injectable services       |
| **State Management**      | Built-in reactivity with `ref` and `reactive`     | `useState`, `useReducer` hooks       | Managed via services and RxJS                |
| **Learning Curve**        | Easy for rhose familiar with JavaScript functions | Moderate; requires JSX understanding | Steep; involves TypeScript decorators and DI |
| **Integration with APIs** | Direct in `setup()`                               | Via `useEffect`                      | Typically handled in services                |
| **Reusability**           | High, via composables                             | High, via custom hooks               | High, via shared services                    |

## Getting Started with the Composition API

To start a new Vue 3 project:

```bash
npm init vue@latest
```

Select the desired features (TypeScript, routing, state management).

Inside a component, you can use the Composition API like this:

```javascript
import { ref, onMounted } from "vue";

export default {
  setup() {
    const users = ref([]);

    onMounted(async () => {
      const res = await fetch("https://api.example.com/users");
      users.value = await res.json();
    });

    return { users };
  },
};
```

This example shows how easy it is to integrate Composition API with external REST API, a scenario common in development platforms where the frontend consumes a BaaS or DBaaS service.

## Conclusion

The Composition API in Vue 3 is a powerful evolution in component design. By grouping related logic together, it makes complex applications easier to maintain and extend. For developers working in environments with cloud-based backends, API-driven workflows, and modern database solutions - as covered in the Development Platforms course - the Compisition API provides a clean, scalable way to build responsive and maintainable user interfaces.

### Advantages

- Modular and reusable code structure
- Built-in reactivity for state management
- Excellent integration with APIs and external services
- Strong TypeScript support

### Limitations

- Slight learning curve for developers used to the Options API
- Requires dicipline to maintain readability in large setup() functions

## References

- (https://vuejs.org/)
- (https://vuejs.org/guide/extras/composition-api-faq)
- (https://dev.to/jacobandrewsky/understanding-the-vue-3-composition-api-fa2)
- (https://vueschool.io/articles/vuejs-tutorials/options-api-vs-composition-api/)

## Additional Resources

- (https://www.freecodecamp.org/news/between-the-wires-an-interview-with-vue-js-creator-evan-you-e383cbf57cc4/)
