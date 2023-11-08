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

- Is Free!
- Real-time relational database
- Authentication file storage
- Is entirely self-hostable
- Embedded database (SQLite) with realtime subscriptions
- Built-in files and users management
- Convenient Admin dashboard UI
- Simple REST-ish API
- Easy to migrate

Describe the primary purpose of the tool that you have selected. Which problems does it solve? Is there something unique about this tool? How can it be useful to developers?

| Feature                                          | Description                                                            |
| ------------------------------------------------ | ---------------------------------------------------------------------- |
| Real-time relational database                    | Necessary to make a chat in your application.                          |
| It’s based on the Go language                    | Which usually equates to being fast.                                   |
| It uses SQLite                                   | No RDMS, no NoSQL either.                                              |
| Pocketbase lives inside a single executable file | This means that you don’t need an entire code base for a simple thing. |

## Market Comparison

PocketBase differs from the other similar backend solutions like Firebase, Supabase, Nhost, etc. and doesn't support running cloud functions.
Instead, PocketBase could be used as a Go or JS framework that enables you to build your own custom app specific business logic and still have a portable backend at the end.

## Getting Started

Download the archive here: https://pocketbase.io/docs/

Once you've extracted the archive, you could start the application by running

```sh ./pocketbase serve```

in the extracted directory.

Then can access the Pocketbase admin dashboard UI at the following URL

```sh http://127.0.0.1:8090/_/ ```

## Conclusion

PocketBase is a very good alternative to Supabase and Firebase especially if you are looking at hosting it yourself (or you can use a free host like https://pockethost.io/). PocketBase is also open source so you are sure that the code is not controlled by some big tech firm. PocketBase is also extremely fast and reliable. It's going to save you hours of development time if your application requires a backend service and it keeps you glued to focusing on what matters. PocketBase is a great choice for small and midsize applications - SaaS, mobile api backend, intranet, etc.

- Disvantages

It scale only on a single server, aka. vertical. In 90% of the cases you may not need the complexity of managing a fleet of machines and services just to run your backend, but for bigger applications coiuld be a problem.

## Credits

- Corrado Di Rofi (corrado1982)

## References

- [Article](https://javascript.plainenglish.io/you-dont-have-to-code-your-own-backends-anymore-try-pocketbase-instead-70924fe45040)
- [github](https://github.com/pocketbase/pocketbase)
- [Review](https://www.sitepoint.com/best-backend-as-a-service-baas-in-2023/)
- [PocketBase](https://pocketbase.io/faq/)

## Additional Resources

- [Video](https://www.youtube.com/watch?v=HlA3Pl8YkRg)
- [Video 2](https://www.youtube.com/watch?v=Wqy3PBEglXQ)
