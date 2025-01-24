---
title: TypeScript
author: Mathias K. Moen
tags: typescript, type safety, syntax, tool, error handling, scaling, javascript, development platform 
---

## Introduction

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It adds optional static typing, classes, and modules to JavaScript, allowing developers to write more robust and maintainable code. This case study explores TypeScript's history, features, market position, and how to get started with it.

## Brief History

- 2010: Development of TypeScript begins at Microsoft under Anders Hejlsberg's leadership.
- 2012: Microsoft publicly announces TypeScript 0.8.
- 2013: TypeScript 0.9 is released with generics support.
- 2014: TypeScript 1.0 is released.
- 2016: TypeScript 2.0 introduces major improvements including non-nullable types.
- 2018: TypeScript 3.0 is released with project references and tuples in rest parameters.
- 2020: TypeScript 4.0 debuts with variadic tuple types and labeled tuple elements.
- 2022: TypeScript 4.7 adds ECMAScript module support in Node.js.
- 2023: TypeScript 5.0 is released with decorators and const type parameters.

## Main Features

TypeScript offers several key features that enhance JavaScript development:

| Feature | Description |
| --- | --- |
| Static Typing | Optional type annotations that catch errors at compile time |
| Object-Oriented Programming | Support for classes, interfaces, and modules |
| IDE Support | Enhanced autocompletion, navigation, and refactoring |
| ECMAScript Compatibility | Supports the latest ECMAScript features |
| Transpilation | Compiles to readable JavaScript that runs anywhere JavaScript runs |
| Type Inference | Automatically deduces types in many cases |
| Generics | Enables the creation of reusable components |
| Union and Intersection Types | Allows for more precise type definitions |

## Market Comparison



TypeScript has gained significant popularity among developers, but it's not the only option for adding types to JavaScript. I'll give a few comparisons, starting with TS vs JS:

1. **TypeScript vs. JavaScript**

   - Advantages:
     - TypeScript: Static typing, better tooling, easier refactoring, scaling, autocompletion, easier to find errors
     - Javascript: Dynamic typing, no compilation step, more flexible, widely used, faster development cycle

   - Disadvantages:
     - TypeScript: Learning curve, compilation step, slightly more verbose
     - Javascript: Error prone, harder to maintain large codebases, less tooling support, difficult to refactor
   
![Javascript Example](/src/assets/TypeScript/js-example.png "Javascript Example")
![Javascript Example](/src/assets/TypeScript/ts-example.png "TypeScript Example")

1. **TypeScript vs. Flow (Facebook's static type checker)**
   - Advantages: Larger community, better tooling, more frequent updates
   - Disadvantages: Requires compilation, slightly more complex setup

2. **TypeScript vs. Dart**
   - TypeScript: Closer to JavaScript, easier adoption for JS developers
   - Dart: Dart has better performance for mobile apps (Flutter)

3. **TypeScript vs. JSDoc**
   - Advantages:
     - TypeScript: Built-in type system, stronger static analysis, better tooling, ideal for large projects.
     - JSDoc: No compilation required, easy to add incrementally, works with plain JavaScript.

   - Disadvantages:
     - TypeScript: Requires a build step, more setup, steeper learning curve.
     - JSDoc: Limited type-checking, verbose syntax, less consistency for advanced features.

![Javascript Example](/src/assets/TypeScript/jsdoc-example.png "JSDocs Example")

## Getting Started

To start using TypeScript:

1. Install TypeScript globally:
```bash
npm install -g TypeScript
```

2. Create a TypeScript file (e.g., `hello.ts`):
```TypeScript
function greet(name: string) {
  console.log(`Hello, ${name}!`);
}

greet("TypeScript");
```

3. Compile the TypeScript file:
```bash
tsc hello.ts
```

4. Run the resulting Javascript file:
```bash
node hello.js
```

## Conclusion

TypeScript has become an essential tool for many JavaScript developers, especially for large-scale applications. Its static typing system helps catch errors early, improves code quality, and enhances developer productivity through better tooling and IDE support. While it does introduce a compilation step and a learning curve, the benefits often outweigh these drawbacks for many projects.  
Personally I would strongly suggest learning at least the basics since most open JavaScript positions (Norwegian market) uses TypeScript. 

As JavaScript continues to evolve, TypeScript is likely to remain relevant by quickly adopting new ECMAScript features and providing type definitions for popular libraries. Its growing ecosystem and strong community support suggest a bright future for TypeScript in web and Node.js development.

## References

- [TypeScript Official Website](https://www.TypeScriptlang.org/)
- [TypeScript Github Repo](https://github.com/microsoft/TypeScript)
- [TypeScript Docs](https://www.TypeScriptlang.org/docs/handbook/release-notes/overview.html)
- [TypeScript Wikipedia](https://en.wikipedia.org/wiki/TypeScript)
- [TypeScript in 100 seconds](https://www.youtube.com/watch?v=zQnBQ4tB3ZA)

## Additional Resources

- [Youtube - TypeScript - The basics](https://www.youtube.com/watch?v=ahCwqrYpIuM)
- [Youtube - Learn TypeScript Generics](https://www.youtube.com/watch?v=EcCTIExsqmI)
- [Youtube - React TypeScript Tutorial Series](https://www.youtube.com/watch?v=TiSGujM22OI&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&index=1) (Codevolution is recommended, free and easily digested tutorials on different dev platforms/tools)
- [VSCode Extension - Pretty TypeScript Errors](https://marketplace.visualstudio.com/items?itemName=YoavBls.pretty-ts-errors)