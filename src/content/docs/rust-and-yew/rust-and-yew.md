---
title: Case Study Rust and Yew Framework
author: Elisabeth Petrine Lynghaug
tags: example, case study, platform
---

## Introduction

Working with Rust has been both a challenge and a joy. Rust is a modern programming language renowned for its security, high performance, and memory safety—achieved without a garbage collector. Originally developed by Mozilla to build a faster and safer browser engine (Servo), Rust stands out thanks to its **ownership model**, which automatically manages memory and prevents common errors like data races and memory leaks.

The goal of this project was to build a login application that illustrates how Rust can be used in a full-stack environment:

- **Strong Typing and Error Handling:** Showcasing how Rust’s type system prevents errors and guarantees safety.
- **Frontend Exploration with Yew:** Leveraging Yew, a Rust-based framework compiled to WebAssembly, to write frontend logic in Rust.
- **API Integration via Sanity:** Instead of creating a custom backend (e.g., using Actix), Sanity (a headless CMS) was used to deliver dynamic content.

By combining Rust’s backend strengths with Yew’s frontend capabilities, this project highlights how Rust can serve as an end-to-end tool for modern application development. Although time constraints meant I did not implement a custom backend in Rust, using Sanity provided a reliable and efficient alternative. Throughout this project, I challenged my own understanding of Rust and discovered how a cutting-edge language can integrate across the stack.

---

## Brief History

You may use a bullet point list or subheadings to structure a timeline of your chosen topic’s history:

- **2010:** Rust was initiated by Mozilla to build a safer and faster browser engine (Servo).  
- **2015:** Rust is publicly released.  
- **2015–2023:** Gains popularity in systems programming and starts making inroads in web development.  
- **Present:** Used by well-known companies like Discord, Meta, Dropbox, and Figma. The rise of WebAssembly (Wasm) enables Rust to be deployed for both backend and frontend. Frameworks like **Yew** showcase Rust’s potential in the browser, allowing developers to write reactive and efficient web applications.

---

## Main Features of Rust and Yew

### Rust's Core Features

| Feature              | Description                                                                                                                                                                                    |
|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Memory Safety**    | Prevents memory errors without garbage collection using the ownership model.                                                                                                                   |
| **Advanced Compiler**| Acts as a code auditor, providing detailed error messages for safer and more correct coding.                                                                                                   |
| **Result Type**      | Forces explicit error handling, preventing critical errors from going unnoticed.                                                                                                               |
| **Ownership Model**  | Manages memory through strict ownership rules, ensuring safety and performance.                                                                                                                |
| **High Performance** | Competes with C/C++ in speed while preserving strict safety guarantees.                                                                                                                       |

#### Unique Concepts in Rust

- **PhantomData**: Enables developers to encode type-state so the compiler prevents misuse of unauthorized states. For instance, you can differentiate between `Unauthorized` and `Authorized` states, ensuring only authenticated users can access certain functions.  
- **Result and Option Types**: Require explicit handling of success and failure cases, reducing runtime surprises.

### Yew Framework

| Feature                  | Description                                                                                                                     |
|--------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| **WebAssembly Support**  | Yew compiles to Wasm, offering better performance and lower resource usage compared to typical JavaScript frameworks.          |
| **Reactive UI**          | Enables modern, reactive interfaces similar to React, but with the added safety of Rust.                                       |
| **Memory Safety**        | Inherits Rust’s safety and ownership model, reducing runtime errors.                                                            |
| **Shared Codebase**      | Allows for shared logic between frontend and backend when both are written in Rust.                                            |
| **Tailwind CSS Support** | Integrates smoothly with popular styling frameworks like Tailwind, easing the styling process.                                 |

**Advantages**
- Faster and more resource-efficient than many JavaScript-based frameworks.  
- Strong type safety and better error handling at compile time.  
- Seamless integration with Rust backend systems.

**Challenges**
- Limited documentation and ecosystem maturity compared to JavaScript frameworks.  
- Requires knowledge of both Rust and WebAssembly, steepening the learning curve.

---

## Ownership Model in Rust

In many programming languages without a garbage collector (e.g., C and C++), developers must manually allocate and free memory. In languages like Go, JavaScript, or Java, you only need to declare a variable, and a garbage collector handles cleanup when memory is no longer needed. In Rust, the **ownership model** elegantly addresses memory management without relying on garbage collection.

### Why the Ownership Model Matters

Traditionally, manual memory management can lead to:
- **Memory Leaks**: Forgetting to free memory once it’s no longer needed.
- **Data Corruption**: Multiple parts of the program accidentally modifying the same memory simultaneously, leading to unpredictable behavior.

Rust’s ownership model ensures each piece of data has a single “owner.” When that owner goes out of scope, Rust automatically frees the associated memory. This makes it impossible to accidentally reference data after it’s been freed, and it prevents data races by strictly controlling who can mutate data and when.

### How Ownership Works in Practice

When you declare a variable—say, a `BlogPost`—and pass it into a function, you transfer its ownership to that function. Once the function finishes and the variable goes out of scope, the memory is automatically freed. Rust also supports **mutable references**, allowing you to mutate data safely, but only under well-defined borrowing rules that prevent concurrent mutable access.

Though these rules may initially seem restrictive, they ultimately reduce many common bugs to compile-time errors. Rust’s ownership model is a key reason why Rust programs are often both **fast** and **safe**.

---

## Market Comparison

When comparing Rust and Yew to more established technologies:

- **Rust**: Offers unmatched memory safety and performance, making it ideal for developers seeking reliability. However, its **learning curve** can be significant, and its **ecosystem**—while fast-growing—is smaller compared to languages like JavaScript and Python.
- **Yew**: Provides efficient, reactive UIs via WebAssembly, benefiting from Rust’s safety guarantees. But it **requires Rust knowledge**, has fewer libraries, and less mature documentation compared to JavaScript frameworks like React or Vue.

Technologies such as JavaScript and React enjoy robust ecosystems and widespread adoption but lack the inherent type safety and performance potential of Rust and Yew.

---

## Getting Started

### Rust

- **Ownership Model**: You must understand how ownership, borrowing, and lifetimes work to write idiomatic Rust.  
- **Strict Typing**: While this leads to safer code, it can feel slower at first if you’re used to more permissive languages.  
- **Growing Ecosystem**: Though Rust’s ecosystem is expanding, you may find fewer “off-the-shelf” solutions than in more mature languages.

### Yew

- **Steep Learning Curve**: Familiarity with Rust and WebAssembly is needed.  
- **Limited Documentation**: As an emerging framework, Yew’s documentation is improving but still limited compared to established frontend technologies.  
- **Wasm Challenges**: Debugging in a browser can be more involved than typical JavaScript debugging.

---

## Key Takeaways: What This Project Tested

1. **End-to-End Rust + Yew Application**  
   - Showcased how to build reactive UI components with Yew, manage app routing, and integrate Rust code on the frontend via WebAssembly.

2. **Authentication & Authorization**  
   - Implemented a simple login system using `gloo_storage` to store user data, demonstrating how local storage can simulate session persistence.
   - Showed **type-state** transitions with `PhantomData` to differentiate between unauthorized and authorized user states.

3. **Routing and Navigation**  
   - Used Yew Router to seamlessly navigate between a Login page, Home page, and Article details.
   - Ensured unauthorized users are automatically redirected to the Login page if they attempt to access protected content.

4. **Data Fetching & Serialization**  
   - Fetched blog posts and articles from a headless CMS (Sanity) using `gloo_net::http::Request`.
   - Deserialized JSON responses into Rust structs with Serde (`Deserialize`), emphasizing type safety.

5. **Asynchronous Operations & Side Effects**  
   - Leveraged `wasm_bindgen_futures::spawn_local` and `use_effect_with` to fetch data without blocking the UI.
   - Showed how to handle network errors and integrate logs via `gloo_console`.

6. **Error Handling & Logging**  
   - Displayed user feedback for login failures or internal state issues.
   - Relied on compile-time guarantees and the `Result` type to prevent hidden runtime errors.

7. **Styling & Tailwind Readiness**  
   - Used inline styles but structured the project to allow easy migration to **Tailwind CSS**.
   - Demonstrated how Rust frameworks can incorporate modern styling approaches alongside Wasm.

8. **Chrono for Date Handling**  
   - Showed basic date usage (`NaiveDate`), illustrating how Rust’s standard and third-party libraries can be combined in a web context.

Overall, these features illustrate how Rust’s strict safety guarantees and Yew’s Wasm-powered frontend can be integrated to create a secure, high-performance, and type-safe web application.

---

## Conclusion

### Rust

Rust is both powerful and flexible, offering high performance alongside guarantees of memory and thread safety. It’s ideal for developers prioritizing reliability and correctness, especially in large, complex systems. While there is an initial learning hurdle due to the ownership model, the long-term payoff is safer, more maintainable code.

### Yew

Yew demonstrates that Rust can be a viable frontend solution, compiling to WebAssembly and providing reactive UIs similar to JavaScript frameworks. Though it’s in an earlier stage of development with limited documentation, Yew holds promise as a path to a unified Rust-based stack—from system-level code all the way to the browser.

Both Rust and Yew demand a substantial investment of time and effort. However, the result is applications that are typically faster, safer, and more robust than those built with many other language and framework combinations.

---

## References

- [Rust Official Website](https://www.rust-lang.org/)
- [Yew Framework](https://yew.rs/)
- [WebAssembly](https://webassembly.org/)
- [Sanity](https://www.sanity.io/)
