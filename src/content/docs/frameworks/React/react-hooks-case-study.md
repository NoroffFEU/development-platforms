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


## Main Features
| Problem                                     | Solution                                                                                         |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Complex State Logic in Functional Components | Hooks (`useState`, `useEffect`) enable functional components to manage state and side effects.    |
| Reuse of Stateful Logic                     | Custom hooks allow the encapsulation and reuse of stateful logic across multiple components.        |
| Class Component Boilerplate                 | Functional components with Hooks provide a more concise and readable alternative.                |
| Managing Side Effects                       | `useEffect` simplifies the management of side effects in functional components.                   |
| Difficulty in Understanding Lifecycle      | Hooks like `useEffect` mirror lifecycle behavior but are easier to understand and manage.          |
| Avoiding Wrapper Components                  | Custom hooks enable the creation of standalone logic that can be easily shared between components. |
| Making Functional Components More Powerful  | Hooks empower functional components to manage state, side effects, and other features.             |
| Simplifying Context Usage                   | `useContext` simplifies the consumption of context in functional components.                       |

Describe the primary purpose of the tool that you have selected. Which problems does it solve? Is there something unique about this tool? How can it be useful to developers?

You may use subheadings, tables or bullet points to structure your description:
- **Example Feature:** This feature does something for a specific reason.
- **Example Feature:** This feature does something for a specific reason.
- **Example Feature:** This feature does something for a specific reason.

Example feature table:

| Feature | Description |
| --- | --- |
| Example Feature | This feature does something for a specific reason. |
| Example Feature | This feature does something for a specific reason. |
| Example Feature | This feature does something for a specific reason. |

You may find this online tool useful for creating tables: https://www.tablesgenerator.com/markdown_tables

## Market Comparison

This section can be used to compare the advantages and disadvantages of your chosen tool to other similar tools. You may use subheadings, tables or bullet points to structure your description.

If you are writing about an open source tool, it may be a good idea to compare it to similar proprietary tools. Likewise, if you are writing about a proprietary tool, it may be a good idea to compare it to similar open source tools.

Similarly, a self hosted tool and a cloud based tool with a similar purpose may make for a good comparison.

## Getting Started

If applicable, describe how to get started with your chosen tool. By providing examples, this can help to demystify a tool and make it more accessible to beginners.

## Conclusion

This section can be used to summarize your findings. What are the main advantages and disadvantages of your chosen tool? What are the main use cases for this tool? What are the main limitations of this tool? What does the future look like for this tool?



## References

- [React Hooks Documentation](https://reactjs.org/docs/hooks-intro.html)
- [React Hooks blog](https://stackoverflow.blog/2021/10/20/why-hooks-are-the-best-thing-to-happen-to-react/)
- [Updated React Hooks Documentation](https://react.dev/reference/react/hooks)
- [React Dev Blog](https://react.dev/blog/2022/03/29/react-v18)
- [Rules of Hooks](https://react.dev/warnings/invalid-hook-call-warning)

## Additional Resources

- [React Hooks Cheat Sheet](https://react-hooks-cheatsheet.com/)
- [React Hooks on w3schools](https://www.w3schools.com/react/react_hooks.asp#:~:text=Hooks%20were%20added%20to%20React,state%20and%20other%20React%20features.)
- [How many Hooks are in React? React Provides 17 hooks ](https://akcoding.com/how-many-hooks-are-in-react/)
- [Milestones in the Evolution of React](https://medium.com/@lotus.lin/milestones-in-the-evolution-of-react-f7c681a96ec0)
- [Reactjs github](https://github.com/reactjs/rfcs/pull/229)
- [Exploring the New useOptimistic Hook in React: Enhancing UI with Optimistic Updates](https://dev.to/barrymichaeldoyle/exploring-reacts-new-useoptimistic-hook-an-early-look-1a80)
- ChatGPT