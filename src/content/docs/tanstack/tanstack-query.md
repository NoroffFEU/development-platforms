---
title: Tanstack Query
author: Kyrre Gjerstad
tags: tanstack, tanstack query, react query, state management, asynchronous, data fetching, caching
---

# Tanstack Query

[![Star History Chart](https://api.star-history.com/svg?repos=tanstack/query&type=Date)](https://star-history.com/#tanstack/query&Date)

## Introduction

- Why do we need Tanstack Query?
- What problems does it solve?

## Overview

TanStack Query, formerly known as React Query, is a JavaScript library designed to enhance the management of asynchronous data in web applications without directly handling data fetching. It enables developers to use their preferred fetching methods, such as the native fetch API or Axios, and focuses on managing the fetched data. Offering a declarative alternative to traditional state management solutions like Redux, Tanstack Query is framework-agnostic, making it suitable for any JavaScript framework, though it was initially tailored for React.
Its key features, such as automatic background refetching, caching, query invalidation, and prefetching, along with a vibrant community and an expanding ecosystem of tools and extensions, has made it a popular choice for developers looking to simplify their data fetching and state management needs.

## Why do we need Tanstack Query?

## History

### Origins

The idea for Tanstack Query came from wanting to move away from Redux in favour of a better, simpler way to manage asynchronous state in React applications. Tanner Linsley, the creator of the library, wanted to simplify the process of fetching, caching, and updating data in his own application, [Nozzle.io](https://nozzle.io/). Inspired by the introduction of the React hooks API, a replacement of the class based approach at the time, and the straightforwardness of `useState` and `useEffect` hooks, he aspired to create a similar experience for data fetching. The API builds on the same principles as a library called [Draqula](https://github.com/vadimdemedes/draqula) by Vadim Demedes, which was a lightweight alternative to Apollo Client.

### Philosophy

Tanstack Query was designed with these core principles in mind:

- **Ergonomic**: The library should be easy to use and integrate into existing React applications.
- **Simple**: The API should be straightforward and intuitive, with minimal boilerplate required.
- **Forgiving**: The library should handle common use cases and edge cases gracefully, without requiring complex workarounds.
- **Customizable**: Users should be able to customize and extend the library to suit a wide range of data fetching scenarios and application requirements.

These principles have guided the development of Tanstack Query and have shaped its design and feature set.

### Timeline

#### V1

**26/02/2020**

The first version of React Query was released on February 26th, 2020. It was a very basic, yet powerful, library that provided a new way of managing asynchronous state in React. It was designed to be a drop-in replacement for your existing data fetching libraries and state management solutions. It introduced a simple, yet powerful, useQuery hook that provided a consistent way to fetch, cache, and update asynchronous data in your application.

- Introduced a new way of managing asynchronous state in React.
- Provided a drop-in replacement for existing data fetching libraries and state management solutions.
- Introduced a simple, yet powerful, useQuery hook for fetching, caching, and updating asynchronous data.

#### V2

**22/06/2020**

- Introduced the `idle` state
- Added the boolean status indicators we know and love: `{ isLoading, isSuccess, isError }`

#### V3

**08/10/2020**

In V3 brought in SSR support, flexible cache configurations, and innovative features like bi-directional infinite queries and data selectors. The introduction of the `useQueries` hook for parallel queries, enhanced mutation support, and the integration of devtools directly into the package.

- Improved cache configuration.
- Advanced support for SSR.
- Bi-directional scrolling capabilities for infinite queries.
- Data selectors for query result transformation.
- useQueries hook for executing variable-length parallel queries.
- Expanded mutation support with retry, offline handling, and replay functionalities.
- Integrated devtools directly into the main package for enhanced debugging.
- Introduced experimental cache persistence features.

#### V4

**17/07/2022**

A significant update where **ReactQuery** got rebranded to **TanstackQuery** and restructured to a monorepo. This change allowed for the extension of its core functionalities to other frameworks beyond React, such as Vue, Svelte, and Solid, by using framework-specific adapters while sharing a common core logic.

- True asynchronous state management and improved offline capabilities.
- New network mode for better handling of online/offline states.
- Stable persisters (SyncStoragePersister, AsyncStoragePersister) for query cache synchronization.
- Tracked queries by default for optimized render performance.

#### V5

**17/10/2023**

Version 5 further built on the foundations laid by version 4, aiming to make the library smaller, more intuitive, and consistent.

- Simplification and unification of API usage.
- Renaming loading states to pending, removing callbacks from useQuery.
- Introduction of simplified optimistic updates, shareable mutation state through the useMutationState hook, and first-class support for React's suspense feature.
- Experimental support for streaming with React Server Components in Next.js
- Improved infinite queries, and a revamped, framework-agnostic Query Devtools.
- New plugin for fine-grained persistence.
- queryOptions API to facilitate sharing and type-safety of query definitions​​.

---

## Getting started

- Installation
- Basic usage
- Introduction to the useQuery hook

This will guide you through the process of installing Tanstack Query and using the `useQuery` hook to fetch and cache data in a basic React application with Typescript.

```bash
npm create vite@latest tanstack-query -- --template react-ts
cd tanstack-query
npm i @tanstack/react-query
```

## Core concepts

- Queries and Query keys
- Fetching data
- Caching and cache invalidation
- Loading and error states
- Query invalidation

## Advanced usage

- Pagination and infinite queries
- Mutations
- Optimistic updates
- Query pre-fetching
- Server-side rendering? With Next.js 13+?

## Integrations

- React

## Best practices

- How to structure your Query Keys
- Error handling and loading UI patterns

## Comparison with other libraries

- SWR, Redux, Apollo, MobX
- When to use Tanstack Query over other libraries

## Future of Tanstack Query

- What's next for Tanstack Query?
- Roadmap
- Community and contributions

## Conclusion

- Summary of Tanstack Query
- Personal evaluation and recommendations?

## References

- Official documentation
- GitHub repository
- Community resources

---

[TanStack (react-query) in-depth look at suspenseful hooks with Tanner Linsley, the creator!](https://www.youtube.com/watch?v=JhXlIHPIljQ&t=2s)
