---
title: PocketBase Case Study
author: Corrado Di Rofi <corrado1982>
tags: pocketbase, case study, SQLite, self-hosted, relational,
---

## Introduction

PocketBase is a mobile-first “1-file” BaaS solution that’s getting the DevOps community quite excited,
for its minimalistic yet effective approach, and for being deployable via one single executable file.

> [!WARNING]
> Please keep in mind that PocketBase is still under active development
> and therefore full backward compatibility is not guaranteed before reaching v1.0.0.

## Main Features

Pocketbase or tools similar to it provide a lot of great features,
especially when it comes to CRUD-based operations.
real-time relational database
authentication file storage
pocketbase is entirely self-hostable
embedded database (SQLite) with realtime subscriptions
built-in files and users management
convenient Admin dashboard UI
and simple REST-ish API
easy to migrate

Describe the primary purpose of the tool that you have selected. Which problems does it solve? Is there something unique about this tool? How can it be useful to developers?

| Feature                                          | Description                                                            |
| ------------------------------------------------ | ---------------------------------------------------------------------- |
| Real-time relational database                    | Necessary to make a chat in your application.                          |
| It’s based on the Go language                    | Which usually equates to being fast.                                   |
| It’s based on the Go language                    | No RDMS, no NoSQL either.                                              |
| Pocketbase lives inside a single executable file | This means that you don’t need an entire code base for a simple thing. |

## Market Comparison

PocketBase differs from the other similar backend solutions like Firebase, Supabase, Nhost, etc. and doesn't support running cloud functions.
Instead, PocketBase could be used as a Go or JS framework that enables you to build your own custom app specific business logic and still have a portable backend at the end.

## Getting Started

Download the archive here: https://pocketbase.io/docs/
Once you've extracted the archive, you could start the application by running
`sh ./pocketbase serve`  
in the extracted directory.
Then can access the Pocketbase admin dashboard UI at the following URL:
`sh http://127.0.0.1:8090/_/ `

## Conclusion

This section can be used to summarize your findings. What are the main advantages and disadvantages of your chosen tool? What are the main use cases for this tool? What are the main limitations of this tool? What does the future look like for this tool?

## References

- [Article](https://javascript.plainenglish.io/you-dont-have-to-code-your-own-backends-anymore-try-pocketbase-instead-70924fe45040)
- [github](https://github.com/pocketbase/pocketbase)
- [Review](https://www.sitepoint.com/best-backend-as-a-service-baas-in-2023/)
- [PocketBase](https://pocketbase.io/faq/)

## Additional Resources

- [Video](https://www.youtube.com/watch?v=HlA3Pl8YkRg)
- [Video 2](https://www.youtube.com/watch?v=Wqy3PBEglXQ)
