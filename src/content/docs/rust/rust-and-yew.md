---
title: Case Study Rust and Yew Framework
author: E. Petrine Lnghaug
tags: example, case study, Rust, Framework.
---

## Introduction

Working with Rust has been both a challenge and a joy. Rust is a modern programming language renowned for its security, high performance, and memory safety—achieved without relying on a garbage collector. Originally developed by Mozilla to build a faster and safer browser engine (Servo), Rust stands out due to its **ownership model**, which automatically manages memory and prevents common errors like data races and memory leaks.

For this case study, I built a **login application** that illustrates how Rust can be used as an end-to-end solution:

- **Strong Typing and Error Handling:** Rust’s type system catches mistakes at compile time, guaranteeing safer code.
- **Frontend Exploration with Yew:** A Rust-based frontend framework compiled to WebAssembly, enabling reactive UI development in Rust.
- **API Integration via Sanity:** Leveraging a headless CMS rather than implementing a custom backend for data storage.

By combining Rust’s backend strengths with Yew’s frontend capabilities, this project tests the feasibility of a unified Rust stack. Although I did not create a custom backend (e.g., via Actix) due to time constraints, using Sanity proved a reliable and efficient alternative. The experience not only pushed my understanding of Rust’s capabilities but also demonstrated how a modern language can integrate seamlessly across the stack.

## Brief History

- **2010:** Rust is started by Mozilla to build a safer and faster browser engine (Servo).  
- **2015:** Rust is publicly released.  
- **2015–2023:** Gains popularity in systems programming and makes inroads into web development.  
- **Present:** Rust is used by companies such as Discord, Meta, Dropbox, and Figma. The rise of WebAssembly (Wasm) has enabled Rust to run in both backend and frontend environments. Frameworks like **Yew** showcase Rust’s potential in the browser, allowing developers to write reactive and efficient web applications.

## Main Features

Rust and Yew each bring unique strengths to modern web development.

### Rust’s Core Features

Rust solves significant problems often encountered in systems programming:

- **Memory Safety without Garbage Collection**
- **Strict Ownership Model** (avoids data races and use-after-free errors)
- **Advanced Compiler** (detailed error messages, strict borrow checker)
- **Result & Option Types** (forcing explicit error handling)
- **High Performance** (comparable to C/C++)

#### Example Feature Table for Rust

| Feature           | Description                                                                                                   |
|-------------------|---------------------------------------------------------------------------------------------------------------|
| Memory Safety     | Prevents memory errors by enforcing strict ownership rules at compile time.                                   |
| Advanced Compiler | Acts as a code auditor, providing detailed error messages for safer, more correct coding.                     |
| Result Type       | Forces explicit handling of success/failure paths, minimizing hidden runtime errors.                          |
| Ownership Model   | Manages memory without GC, eliminating entire classes of concurrency issues.                                  |
| High Performance  | Rust can match C/C++ in speed, making it suitable for performance-critical tasks.                             |

### Yew Framework

Yew is a frontend framework for building web apps in Rust, compiled to WebAssembly.

- **WebAssembly Support:** Offers faster load times and execution compared to JavaScript in some scenarios.  
- **Reactive UI:** Similar in style to React, but with Rust’s safety guarantees.  
- **Memory Safety:** Inherits Rust’s strong compile-time checks.  
- **Shared Codebase:** Allows developers to share logic between backend and frontend.  
- **Tailwind CSS Support:** Easily integrates with popular CSS frameworks.

#### Example Feature Table for Yew

| Feature                  | Description                                                                                                                     |
|--------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| WebAssembly Support      | Compiles to Wasm, offering better performance and smaller resource usage.                                                      |
| Reactive UI             | Enables reactive UIs, akin to React, but leveraging Rust’s type system for added safety.                                        |
| Memory Safety            | Inherits Rust’s ownership model, reducing runtime errors and crashes.                                                           |
| Shared Codebase          | Lets you share Rust code across server and client.                                                                             |
| Tailwind CSS Support     | Integrates smoothly with utility-first styling libraries like Tailwind.                                                         |

### Ownership Model in Rust

Many languages rely on manual memory management (C, C++) or garbage collection (Go, Java, JavaScript). Rust takes a different approach with its **ownership model**:

- **Why It Matters:**
  - Avoids memory leaks by having a single “owner” for each piece of data.
  - Prevents data corruption via strict rules that ensure only one mutable reference at a time.
- **How It Works:**
  - When a variable (e.g., `BlogPost`) goes out of scope, Rust automatically frees it.
  - Rust’s “borrow checker” enforces correct reference usage at compile time.

This model may feel restrictive at first, but it practically eliminates entire classes of bugs, making Rust applications both **fast** and **safe**.

## Market Comparison

### Rust vs. Other Languages

- **Rust**: Excellent memory safety, high performance, steep learning curve, smaller (but growing) ecosystem.
- **C++**: Faster for some tasks, but more prone to memory errors without careful manual management.
- **Go**: Garbage-collected, simpler concurrency model, but lacks Rust’s fine-grained control and zero-cost abstractions.
- **JavaScript**: Ubiquitous for frontend, huge ecosystem, but can’t match Rust’s performance or type safety.

### Yew vs. Traditional JavaScript Frameworks

- **Yew**:
  - Pros: Compiles to WebAssembly, strong typing, potential for high performance.
  - Cons: Smaller community, less documentation, requires Rust/WebAssembly knowledge.

- **React / Vue / Angular**:
  - Pros: Very large ecosystems, extensive documentation, established patterns.
  - Cons: Less inherent safety, must handle typical JavaScript pitfalls like runtime type errors.

## Getting Started

### Rust

1. **Install Rust**:  
   - Download from [rust-lang.org](https://www.rust-lang.org/tools/install).
   - Use `rustup` to manage versions.
2. **Learn the Ownership Model**:  
   - Understand how borrowing, references, and lifetimes work.
3. **Explore Crates**:  
   - Utilize community-maintained libraries from [crates.io](https://crates.io).

### Yew

1. **Setup a New Project**:  
   - Use `cargo new` to create a Rust project.
   - Add Yew and WebAssembly tools in `Cargo.toml`:
     ```toml
     [dependencies]
     yew = "0.20"
     wasm-bindgen = "0.2"
     ```
2. **Install Trunk or wasm-pack**:  
   - Trunk automates building and serving Yew apps. 
   - `cargo install trunk`
3. **Compile to WebAssembly**:  
   - Run `trunk serve` or `wasm-pack build --target web`.
4. **Integrate Tailwind**:  
   - Configure Tailwind’s `postcss.config.js` or `tailwind.config.js`.
   - Replace inline styles with Tailwind classes.

## Conclusion

Rust excels at performance-critical, safety-centric development, and Yew extends these benefits to the frontend by leveraging WebAssembly. While both come with a steep learning curve and smaller ecosystems compared to more established languages and frameworks, the payoff is in robust, maintainable, and performant applications.

- **Advantages**:
  - Compile-time guarantees reduce runtime errors.
  - Memory safety without a garbage collector.
  - Potential for a truly full-stack Rust solution.
- **Disadvantages**:
  - Less documentation and fewer ready-made libraries than mainstream frontend frameworks.
  - Rust’s strict ownership model can be daunting for newcomers.

Despite these hurdles, the future for Rust and Yew looks promising as WebAssembly adoption continues to grow, attracting both low-level systems developers and high-level application creators.

## References

- [Rust Official Website](https://www.rust-lang.org/)
- [Yew Framework](https://yew.rs/)
- [WebAssembly](https://webassembly.org/)
- [Sanity](https://www.sanity.io/)

## Additional Resources

- [Rust Book](https://doc.rust-lang.org/book/)
- [Examples of WebAssembly + Yew](https://github.com/yewstack/yew/tree/master/examples)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
