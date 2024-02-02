---
title: Tanstack Query
author: Kyrre Gjerstad
tags: tanstack, tanstack-query, state management, asynchronous, data fetching, caching
---

# Tanstack Query

## Notes

- Not a data fetching library, but an asynchronous state management library
- Bring your own fetch
- TRPC is based on Tanstack Query
- Simplifies handling of data fetching, loading, caching, errors, and invalidation
- Open source, MIT license

Tanner Linsley has been involved in open source for about 10 years. First as a consumer and then as a contributor, as he wanted to give something back.
The idea for react query came from wanting to move away from Redux in favour of something less manual. React hooks allowed for a good API to create this. Inspired by a library called [Draqula](https://github.com/vadimdemedes/draqula). You can see the similarity of the API design there already, with the useQuery hook returning `{data, isLoading, error}`. Draqula felt like a lightweight [Apollo](https://www.apollographql.com/docs/react/).

Originally created as an internal tool for [Nozzle](https://www.youtube.com/watch?v=JhXlIHPIljQ&t=2s), creating a data fetching specific API with Redux store. When open sourcing it, the Redux store got swapped to a custom built store, designed to handle data fetching and caching. Built in a "headless" way, and framework agnostic.

[![Star History Chart](https://api.star-history.com/svg?repos=tanstack/query&type=Date)](https://star-history.com/#tanstack/query&Date)

## Introduction

- Overview of Tanstack Query
- Why do we need Tanstack Query?
- What problems does it solve?

## History

### Origins

The idea for Tanstack Query was conceived out of the need for a better way to manage asynchronous state in React applications. Tanner Linsley, the creator of the library, wanted to simplify the process of fetching, caching, and updating data in his applications. He was inspired by the React hooks API and the simplicity of the `useState` and `useEffect` hooks, and wanted to create a similar experience for data fetching.

The name "Tanstack Query" is derived from Tanner's last name, "Linsley", and the term "stack", which refers to the technology stack of a software application. The library was initially developed as an internal tool for Tanner's company, Nozzle, and was later open-sourced to the public.

### Philosophy

Tanstack Query was designed with several core principles in mind:

- **Ergonomic**: The library should be easy to use and integrate into existing React applications.
- **Simple**: The API should be straightforward and intuitive, with minimal boilerplate code required.
- **Forgiving**: The library should handle common use cases and edge cases gracefully, without requiring complex workarounds.
- **Customizable**: Users should be able to customize and extend the library to suit their specific needs.
- **Flexible**: The library should be adaptable to a wide range of data fetching scenarios and application requirements.

These principles have guided the development of Tanstack Query and have shaped its design and feature set.

### Timeline

#### V1: The Beginning

**26/02/2020**

The first version of React Query was released on February 26th, 2020. It was a very basic, yet powerful, library that provided a new way of managing asynchronous state in React. It was designed to be a drop-in replacement for your existing data fetching libraries and state management solutions. It introduced a simple, yet powerful, useQuery hook that provided a consistent way to fetch, cache, and update asynchronous data in your application.

- Introduced a new way of managing asynchronous state in React.
- Provided a drop-in replacement for existing data fetching libraries and state management solutions.
- Introduced a simple, yet powerful, useQuery hook for fetching, caching, and updating asynchronous data.

#### V2: Refining The Core Foundation

**22/06/2020**

- Introduced the `idle` state
- Added the boolean status indicators we know and love: `{ isLoading, isSuccess, isError }`

#### V3: SSR and Scalability

**08/10/2020**

In V3 brought in SSR support, flexible cache configurations, and innovative features like bi-directional infinite queries and data selectors. The introduction of the `useQueries` hook for parallel queries, enhanced mutation support, and the integration of devtools directly into the package.

- Improved cache configuration for scalability and testability.
- Advanced support for SSR, accommodating complex rendering strategies.
- Implemented bi-directional scrolling capabilities for infinite queries.
- Introduced data selectors for query result transformation.
- Added useQueries hook for executing variable-length parallel queries.
- Expanded mutation support with retry, offline handling, and replay functionalities.
- Extended library's core logic and observability beyond React components.
- Integrated devtools directly into the main package for enhanced debugging.
- Introduced experimental cache persistence features.

#### V4: Rebranding and Framework Agnosticism

**17/07/2022**

A significant update where ReactQuery got rebranded to **TanstackQuery** and restructured to a monorepo. This change allowed for the extension of its core functionalities to other frameworks beyond React, such as Vue, Svelte, and Solid, by using framework-specific adapters while sharing a common core logic.

- Transitioned to Tanstack Query and adopted a monorepo structure to support multiple frameworks.
- Emphasized true asynchronous state management and improved offline capabilities.
- Introduced a new network mode for better handling of online/offline states.
- Implemented stable persisters (SyncStoragePersister, AsyncStoragePersister) for query cache synchronization.
- Ensured compatibility with React 18, leveraging concurrent features.
- Activated tracked queries by default for optimized render performance.
- Streamlined API and addressed inconsistencies for a better developer experience.

#### V5: Simplification and Unification

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
