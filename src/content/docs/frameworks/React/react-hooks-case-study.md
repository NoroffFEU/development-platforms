---
title: React Hooks
author: Thi Kim Yen Nguyen <thikimyen-nguyen>
tags: framework, case study, react hooks
---


## Introduction

React 16.8 introduced React Hooks, enabling developers to utilize state and React features without the complexity of class components. Functions prefixed with "use" are labeled Hooks, facilitating the sharing of logic between components.

React's status as a preferred framework for modern web applications and React Hooks gain widespread adoption underscores their effectiveness for state management and side effects in the React community.


## Brief History

- 2018: At React Conf 2018, Sophie Alpert and Dan Abramov introduced React Hooks.
- 2019: React v16.8 was released and marked the official integration of React Hooks, enabling state and React features in functional components without writing a class.
- 2022: Release of React v18.0 with new hooks (`useId`, `useTransition`, `useDeferredValue`, `useSyncExternalStore`, `useInsertionEffect`).
- Oct 2022: A new Hook named `use` was revealed but is currently only available in React’s Canary and experimental channels.
- 2023 - ongoing: `useOptimistic` hook has not been officially released. It is currently only available in React’s Canary and experimental channels but promising to simplify optimistic update handling in React applications.

## Main Features

***What are the problems and What does React Hooks solve?***
| Problems                                | Solutions                                                     |
| -------------------------------------- | ------------------------------------------------------------ |
| Complexity of State Management         | `useState` Hook simplifies state management in functional components. |
| Reusability of Stateful Logic          | Custom Hooks enable the encapsulation and reuse of stateful logic across components. |
| Lifecycle Methods and Side Effects     | `useEffect` Hook provides a simpler way to handle side effects and mimic lifecycle behavior in functional components. |
| Component Logic Organization           | Hooks encourage breaking down component logic into smaller, focused functions, improving code organization. |
| Class Boilerplate                      | Functional components with Hooks eliminate class-related boilerplate, resulting in cleaner code. |
| Prop Drilling                          | Context API combined with `useContext` Hook helps avoid prop drilling, making it easier to share state across components. |
| Code Duplication                       | Custom Hooks promote the reuse of logic without the need for inheritance or complex patterns, reducing code duplication. |
| Functional Components Preferred        | The introduction of hooks makes functional components more powerful and preferred over class components. |
| Complexity in Understanding Components | Use Hooks to split components based on related logic, offering better code organization and understandability. |
| Classes Create Confusion and Barriers to Learning | Replace classes with Hooks to simplify the mental model, reduce learning barriers, and eliminate binding complexities. |
| Code Maintenance Challenges and Limited Optimizations | Adopt Hooks for better code maintenance, improved optimization potential, and enhanced tool compatibility.     |

There are two types of Hooks: 
- **Built-in Hooks:** These are APIs like `useState()` provide function components with the capability to seamlessly integrate with all of React's features.


- **Custom Hooks:** These are functions we create to use the built-in Hooks and share reusable logic across different components.

React version 18 came with 15 built-in hooks, and you can achieve similar functionality to a class-based component.

***1. `useState`*** Allows the addition of state to functional components.
```jsx
import { useState } from 'react';

function MyComponent() {
  const [age, setAge] = useState(28);
  const [name, setName] = useState('Taylor');
  const [todos, setTodos] = useState(() => createTodos());
  // ...
```

***2. `useEffect`*** Handles side effects in functional components, such as data fetching or subscriptions
```jsx
import { useEffect } from 'react';
import { createConnection } from './chat.js';

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [serverUrl, roomId]);
  // ...
}
```

***3. `useContext`*** Accesses the value of a React context within a functional component.
```jsx
import { useState, createContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext()
function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </UserContext.Provider>
  );
}
```

***4. `useReducer`*** Allows for custom state logic, similar to the `useState` Hook.
```jsx
import { useReducer } from 'react';

function reducer(state, action) {
  // ...
}

function MyComponent() {
  const [state, dispatch] = useReducer(reducer, { age: 42 });
  // ...
```

***5. `useCallback`*** Memoizes callback functions to prevent unnecessary re-renders.
```jsx
import { useCallback } from 'react';

export default function ProductPage({ productId, referrer, theme }) {
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);
  ```
***6. `useMemo`*** Caches the result of a calculation between re-renders.
```jsx
import { useMemo } from 'react';

function TodoList({ todos, tab }) {
  const visibleTodos = useMemo(
    () => filterTodos(todos, tab),
    [todos, tab]
  );
  // ...
}
```

***7. `useRef`*** Allows to persist values between renders.
```jsx
import { useRef } from 'react';

function MyComponent() {
  const intervalRef = useRef(0);
  const inputRef = useRef(null);
  // ...
```

***8. `useLayoutEffect`*** Similar to useEffect, but it fires synchronously after all DOM mutations. It’s rarely necessary and should be used with caution.
```jsx
import { useState, useRef, useLayoutEffect } from 'react';

function Tooltip() {
  const ref = useRef(null);
  const [tooltipHeight, setTooltipHeight] = useState(0);

  useLayoutEffect(() => {
    const { height } = ref.current.getBoundingClientRect();
    setTooltipHeight(height);
  }, []);
  // ...
```

***9. `useDebugValue`*** Displays custom labels or values in React DevTools for custom hooks.  
```jsx
import { useDebugValue } from 'react';

function useOnlineStatus() {
  // ...
  useDebugValue(isOnline ? 'Online' : 'Offline');
  // ...
}
```
***10. `useDeferredValue`*** Defers updating a part of the UI.
```jsx
import { useState, useDeferredValue } from 'react';

function SearchPage() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  // ...
}
```

***11. `useId`*** Generates unique IDs that can be passed to accessibility attributes.
```jsx
import { useId } from 'react';

function PasswordField() {
  const passwordHintId = useId();
  // ...
```

***12. `useImperativeHandle`*** Customizes the handle exposed as a ref.
```jsx
import { forwardRef, useImperativeHandle } from 'react';

const MyInput = forwardRef(function MyInput(props, ref) {
  useImperativeHandle(ref, () => {
    return {
      // ... your methods ...
    };
  }, []);
  // ...
  ```

***13. `useInsertionEffect`*** Allows inserting elements into the DOM before any layout effects fire, when working on a CSS-in-JS library and need a place to inject the styles.
```jsx
import { useInsertionEffect } from 'react';

// Inside your CSS-in-JS library
function useCSS(rule) {
  useInsertionEffect(() => {
    // ... inject <style> tags here ...
  });
  return rule;
}
```

***14. `useSyncExternalStore`*** Subscribes to an external store.
```jsx
import { useSyncExternalStore } from 'react';
import { todosStore } from './todoStore.js';

function TodosApp() {
  const todos = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot);
  // ...
}
```

***15. `useTransition`*** Updates the state without blocking the UI.
```jsx
import { useTransition } from 'react';

function TabContainer() {
  const [isPending, startTransition] = useTransition();
  // ...
}
```
There are two more hooks named `use` and `useOptimistic`; however, they are currently only available in React’s Canary and experimental channels. 
```jsx
import { use } from 'react';

function MessageComponent({ messagePromise }) {
  const message = use(messagePromise);
  const theme = use(ThemeContext);
  // ...
```
```jsx
import { useOptimistic } from 'react';

function AppContainer() {
  const [optimisticState, addOptimistic] = useOptimistic(
    state,
    // updateFn
    (currentState, optimisticValue) => {
      // merge and return new state
      // with optimistic value
    }
  );
}
```


## Market Comparison

This section can be used to compare the advantages and disadvantages of your chosen tool to other similar tools. You may use subheadings, tables or bullet points to structure your description.

If you are writing about an open source tool, it may be a good idea to compare it to similar proprietary tools. Likewise, if you are writing about a proprietary tool, it may be a good idea to compare it to similar open source tools.

Similarly, a self hosted tool and a cloud based tool with a similar purpose may make for a good comparison.

## Getting Started

If applicable, describe how to get started with your chosen tool. By providing examples, this can help to demystify a tool and make it more accessible to beginners.
## Rules of Hooks
There is a consolidated set of dos and don'ts for working with React Hooks:
### ✅ Dos:
1. Call Hooks at the top level in the body of a function component.

```jsx
// Correct
function ValidComponent() {
  const [state, setState] = useState();
  useEffect(() => {
    // ...
  }, []);
  return <div>Hello</div>;
}
```
2. Call Hooks at the top level in the body of a custom Hook.

```jsx
// Correct
function useCustomHook() {
  const [state, setState] = useState();
  useEffect(() => {
    // ...
  }, []);
  return [state, setState];
}
```

### 🔴 Don'ts:
1. Do not call Hooks inside conditions or loops.
```jsx
// Incorrect
function InvalidComponent() {
  if (condition) {
    const [value, setValue] = useState();
  }
  return <div>Hello</div>;
}

// Correct: Move the useState call outside the condition, ensuring it is called unconditionally at the top level of the component.
function ValidComponent() {
  const [value, setValue] = useState();

  if (condition) {
    // Use the state here if needed
  }

  return <div>Hello</div>;
}

```
2. Do not call Hooks after a conditional return statement.
```jsx
// Incorrect
function InvalidComponent() {
  if (condition) {
    return <div>Condition is true</div>;
  }
  const [value, setValue] = useState();
  return <div>Hello</div>;
}

// Correct: Ensure that the useState call is made before the conditional return statement, providing consistent order of Hook calls.
function ValidComponent() {
  let content;
  
  if (condition) {
    content = <div>Condition is true</div>;
  } else {
    const [value, setValue] = useState();
    content = <div>Hello</div>;
  }

  return content;
}
```
3. Do not call Hooks in event handlers.
```jsx
// Incorrect
function InvalidComponent() {
  const handleClick = () => {
    const [value, setValue] = useState();
  };
  return <button onClick={handleClick}>Click me</button>;
}

// Correct
function ValidComponent() {
  const handleClick = () => {
  };
  return <button onClick={handleClick}>Click me</button>;
}
```
4. Do not call Hooks in class components.
```jsx
// Incorrect
class InvalidComponent extends React.Component {
  componentDidMount() {
    const [value, setValue] = useState();
  }

  render() {
    return <div>Hello</div>;
  }
}

// Correct: Use the state property within the class component instead of directly calling useState inside a lifecycle method.

class ValidComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  componentDidMount() {
    this.setState({ value: /* initialize state value */ });
  }

  render() {
    return <div>Hello</div>;
  }
}
```
5. Do not call Hooks inside functions passed to useMemo, useReducer, or useEffect.
```jsx
// Incorrect
function InvalidComponent() {
  useMemo(() => {
    const [value, setValue] = useState();
  }, [dependency]);

  useEffect(() => {
    const [value, setValue] = useState();
  }, [dependency]);

  return <div>Hello</div>;
}

// Correct: Move the stateful logic outside of the useMemo and useEffect callbacks, ensuring Hooks are not directly called inside them.
function ValidComponent() {
  // Use stateful logic here without calling useState directly

  useMemo(() => {
    // Memoized logic
  }, [dependency]);

  useEffect(() => {
    // Effect logic
  }, [dependency]);

  return <div>Hello</div>;
}
```




## Conclusion

This section can be used to summarize your findings. What are the main advantages and disadvantages of your chosen tool? What are the main use cases for this tool? What are the main limitations of this tool? What does the future look like for this tool?



## References

- [React Hooks Documentation](https://reactjs.org/docs/hooks-intro.html)
- [Updated React Hooks Documentation](https://react.dev/reference/react/hooks)
- [React Dev Blog](https://react.dev/blog/2022/03/29/react-v18)
- [Rules of Hooks](https://react.dev/warnings/invalid-hook-call-warning)
- [React Hooks on w3schools](https://www.w3schools.com/react/react_hooks.asp)


## Additional Resources

- [React Hooks blog](https://stackoverflow.blog/2021/10/20/why-hooks-are-the-best-thing-to-happen-to-react/)
- [How many Hooks are in React? React Provides 17 hooks ](https://akcoding.com/how-many-hooks-are-in-react/)
- [Milestones in the Evolution of React](https://medium.com/@lotus.lin/milestones-in-the-evolution-of-react-f7c681a96ec0)
- [Reactjs github](https://github.com/reactjs/rfcs/pull/229)
- [Exploring the New useOptimistic Hook in React: Enhancing UI with Optimistic Updates](https://dev.to/barrymichaeldoyle/exploring-reacts-new-useoptimistic-hook-an-early-look-1a80)
- [Chat GPT](https://chat.openai.com/)