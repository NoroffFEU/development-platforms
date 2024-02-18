---
title: TanStack Query
author: Kyrre Gjerstad
tags: tanstack, tanstack query, react query, state management, asynchronous, data fetching, caching
---

## Introduction

TanStack Query, formerly known as React Query, is a JavaScript library designed to improve the handling of asynchronous data handling in web applications, without directly handling data fetching. It allows developers to use their preferred fetching methods, such as the native fetch API or Axios, and focuses on managing the data lifecycle. Offering a declarative alternative to traditional state management solutions like Redux, TanStack Query is framework-agnostic making it suitable for any JavaScript framework, though it was initially tailored for React.
Features such as automatic refetching, caching, query invalidation, and prefetching has made it a popular choice for developers looking to simplify their data fetching and state management needs.

## History

[![Star History Chart](https://api.star-history.com/svg?repos=tanstack/query&type=Date)](https://star-history.com/#tanstack/query&Date)

### Origins

The idea for TanStack Query came from wanting to move away from Redux in favour of a better, simpler way to manage asynchronous state in React applications. Tanner Linsley, the creator of the library, wanted to simplify the process of fetching, caching, and updating data in his own application, [Nozzle.io](https://nozzle.io/). Inspired by the introduction of the React hooks API, a replacement of the class based approach at the time, and the straightforwardness of `useState` and `useEffect` hooks, he aspired to create a similar experience for data fetching. The API was inspired by and built on the same design principles as [Draqula](https://github.com/vadimdemedes/draqula) by Vadim Demedes, a lightweight alternative to Apollo Client.

### Philosophy

TanStack Query was designed with these core principles in mind:

- **Ergonomic**: The library should be easy to use and integrate into existing React applications.
- **Simple**: The API should be straightforward and intuitive, with minimal boilerplate required.
- **Forgiving**: The library should handle common use cases and edge cases gracefully, without requiring complex workarounds.
- **Customizable**: Users should be able to customize and extend the library to suit a wide range of data fetching scenarios and application requirements.

### Milestones

- **V1 Release (26/02/2020):** Marked the debut of React Query, introducing the useQuery hook, providing a seamless way to fetch, cache, and update data.
- **V2 Enhancements (22/06/2020):** Introduced boolean status indicators (isLoading, isSuccess, isError), the useMutation hook for data mutations, and useQueryClient for query client access.
- **V3 Advancements (08/10/2020):** Brought SSR support, flexible caching, bi-directional infinite queries, and the useQueries hook for parallel queries.
- **Rebranding to TanStack Query (17/07/2022):** With V4, React Query became TanStack Query, extending its core to support multiple frameworks beyond React, enhancing TypeScript support, and introducing a new plugin system.
- **V5 Innovations (17/10/2023):** Focused on streamlining the API, improving TypeScript integration, and introducing features like optimistic updates and first-class support for React's suspense, emphasizing a smaller, more intuitive library.

---

## Why do we need TanStack Query?

### The problem

The following code demonstrates a common pattern for fetching and displaying data in a React component, using the native fetch API and the useState and useEffect hooks. It fetches data from an API and displays it in the component, handling loading and error states as well as cancellation of ongoing fetch requests.

```tsx
// Abort controller to dedupe requests and cancel ongoing fetches
let ongoingFetchRequest: AbortController | null = null;

const FetchWithUseEffect = () => {
  const [data, setData] = useState<Data | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // If there's an ongoing fetch request, abort it
    if (ongoingFetchRequest) {
      ongoingFetchRequest.abort();
    }
    const abortController = new AbortController();
    ongoingFetchRequest = abortController;

    const fetchData = async () => {
      setIsLoading(true); // Set loading state
      setError(null); // Clear error state
      try {
        const response = await fetch('https://api.example.com/data', {
          signal: abortController.signal, // Pass the signal to the fetch request
        });
        if (!response.ok) {
          throw new Error('Failed to fetch data'); // Throw an error if the response is not ok
        }
        const result: Data = await response.json();
        setData(result); // Set the fetched data
      } catch (err) {
        // If the error is an instance of Error and not an AbortError, set the error state
        if (err instanceof Error && err.name !== 'AbortError') {
          setError(err);
        }
      } finally {
        setIsLoading(false);
        // If the ongoing fetch request is the same as the current one, set it to null
        if (ongoingFetchRequest === abortController) {
          ongoingFetchRequest = null;
        }
      }
    };

    fetchData();

    // Cleanup function to abort the fetch request if the component is unmounted
    return () => {
      abortController.abort();
      if (ongoingFetchRequest === abortController) {
        ongoingFetchRequest = null;
      }
    };
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // finally, we can render the data
  return <div>{JSON.stringify(data)}</div>;
};
```

### The solution

Now, compare the above example with the following code using TanStack Query. It provides a more ergonomic and powerful way to manage asynchronous state in React applications, with the added benefit of caching, query invalidation, prefetching, and more.

```tsx
const FetchWithUseQuery = () => {
  // destructure the data, error, and isLoading state from the useQuery hook
  const { data, error, isLoading } = useQuery<Data, Error>({
    queryKey: ['dataKey'], // pass a query key to identify the query
    queryFn: async () => {
      // pass a query function to fetch the data
      const response = await fetch('https://api.example.com/data');
      if (!response.ok) throw new Error('Network response was not ok'); // throw an error if the response is not ok
      return response.json();
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  // render the data
  return <div>{JSON.stringify(data)}</div>;
};
```

The result is a more concise and readable component that handles loading and error states, as well as cancellation of ongoing fetch requests, without the need for manual cleanup. The useQuery hook handles all of this for you, and more. Of course, both of these examples could be further improved and abstracted, but the point is to illustrate the difference in complexity and ergonomics between the two approaches.

---

## Getting started

This section will guide you through setting up TanStack Query in a TypeScript-based React application, demonstrating how to use the `useQuery` hook for data fetching and caching.

### Setting Up the Project

Initialize a new React TypeScript project and install TanStack Query:

```bash
npm create vite@latest tanstack-query -- --template react-ts
cd tanstack-query
npm i @tanstack/react-query
```

### Configuring TanStack Query

Wrap your application with `QueryClientProvider` to make the `QueryClient` available throughout your app. The `QueryClient` manages queries and their caching:

```tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Page } from './Page.tsx';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Page />
    </QueryClientProvider>
  );
};
```

### Fetching Data with `useQuery`

Use the useQuery hook to fetch and cache data in your components. In this example, getTodos is a function that fetches a list of todo items from an API:

```tsx
import { useQuery } from '@tanstack/react-query';
import { getTodos } from './api'; // Assume this is an async function fetching todos

const TodoList = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};
```

- `queryKey` uniquely identifies the query across your application and can be used for refetching, caching, and sharing query results.
- `queryFn` is the function that fetches your data. It should return a promise that resolves to the data.
- The `useQuery` hook automatically manages the loading and error states, making your component cleaner and more concise.

For a full example of a basic React Todo app using TanStack Query, see the following StackBlitz project. The project includes a simple API for fetching and updating todo items, and demonstrates how to use the useQuery and useMutation hooks to fetch and update data, using optimistic updates and error handling.

[![Edit tanstack-query-todo-app](~/assets/stackblitz/stackblitzButton.svg)](https://stackblitz.com/~/github.com/kyrregjerstad/tanstack-query-react-example)

The source code for the example can be found in the following GitHub repository:
[kyrregjerstad/tanstack-query-react-example](https://github.com/kyrregjerstad/tanstack-query-react-example)

## Comparison with other libraries

Comparing TanStack Query with other popular state management and data fetching libraries, such as SWR, Redux, Apollo, and MobX, can help you understand the strengths and weaknesses of each library and when to use one over the other.

### SWR

SWR is a popular data fetching library for React, developed by Vercel. It provides a simple and efficient way to fetch and cache data in React applications, with a focus on revalidation and reactivity. SWR is similar to TanStack Query in that it provides a hook-based API for fetching and caching data, but it has a different approach to caching and revalidation. SWR uses a stale-while-revalidate strategy to keep data fresh and up-to-date, while TanStack Query uses a more traditional cache-and-invalidate approach. Compared to TanStack Query, SWR might have limitations in terms of query cancellation and advanced caching strategies. It's more suited for simpler use cases and might not scale as well for complex data-fetching scenarios.

### RTK Query:

RTK Query is a data fetching and caching library for Redux Toolkit, developed by the Redux team. It provides a way to fetch and cache data from an API, with a focus on type safety and query composition. RTK Query is similar to TanStack Query in that it provides a way to fetch and cache data, but it has a different approach to data fetching and caching. RTK Query uses a more Redux-centric approach to data fetching and caching, while TanStack Query provides a more flexible and ergonomic way to manage asynchronous state. RTK Query's reliance on Redux might be excessive for projects not already using Redux or those looking for a lighter solution. The learning curve can be steeper for developers unfamiliar with Redux.

### Axios Hooks:

Axios Hooks provide a simple way to fetch data using Axios inside React components, leveraging the familiar Axios API. It's lightweight and straightforward, ideal for projects already using Axios. However, it lacks features such as caching, query invalidation, and prefetching, which are essential for more complex data-fetching scenarios. TanStack Query provides a more comprehensive solution for managing asynchronous state, with support for caching, query invalidation, and prefetching.

### tRPC

tRPC is a TypeScript-first framework for building scalable and type-safe APIs. It provides a way to define and consume APIs in a type-safe manner, with a focus on type safety and developer experience. tRPC uses TanStack Query under the hood to provide a way to fetch and cache data from tRPC APIs. It's a great choice for projects written fully in typescript and structured in a mono-repo, where the backend and frontend are closely coupled and share the same TypeScript types. For smaller projects, tRPC might be overkill, and TanStack Query can be used directly to fetch and cache data from any API.

---

| Feature                    | TanStack Query           | SWR                            | RTK Query                        | Axios Hooks             | tRPC                       |
| -------------------------- | ------------------------ | ------------------------------ | -------------------------------- | ----------------------- | -------------------------- |
| **Data Fetching**          | Hook-based, flexible API | Hook-based, revalidation focus | Redux-centric, comprehensive API | Simple, Axios-based API | Type-safe, RPC-style API   |
| **Caching**                | ✅ customizable          | ✅ Stale-while-revalidate      | ✅                               | ❌                      | ✅                         |
| **Query Invalidation**     | ✅                       | ✅                             | ✅                               | ❌                      | ✅                         |
| **Re-fetching Strategies** | ✅ Configurable          | ✅ Stale-while-revalidate      | ✅ Polling, conditional fetching | ❌                      | ✅ Configurable            |
| **Optimistic Updates**     | ✅                       | ⛔ Limited support             | ✅                               | ❌                      | ✅                         |
| **Type-Safe**              | ✅                       | ✅                             | ✅                               | ✅                      | ✅                         |
| **Framework Agnosticism**  | ✅                       | ❌                             | ❌                               | ❌                      | ✅                         |
| **Learning Curve**         | Moderate                 | Low                            | Moderate to high                 | Low                     | Moderate to high           |
| **Use Case**               | Broad, flexible          | Simple to moderate scenarios   | Redux-based projects             | Simple fetching needs   | TypeScript based monorepos |

## Conclusion

TanStack Query is a powerful and flexible library for managing asynchronous state in web applications. It provides a simple and ergonomic way to fetch and cache data, with support for advanced features such as query invalidation, prefetching, and optimistic updates. It's a great choice for projects looking to simplify their data fetching and state management needs, without being tied to a specific data fetching library or state management solution. With its focus on ergonomics, simplicity, and flexibility, TanStack Query is a great fit for a wide range of data-fetching scenarios and application requirements.

## References

- [TanStack Query - Official documentation](https://tanstack.com/query/latest)
- [TanStack Query - GitHub repository](https://github.com/tanstack/query)
- [TanStack (react-query) in-depth look at suspenseful hooks with Tanner Linsley, the creator!](https://www.youtube.com/watch?v=JhXlIHPIljQ&t=2s)
- [Interview with React Query's creator: Tanner Linsley](https://nosleepjavascript.com/interview-tanner-linsley/)
