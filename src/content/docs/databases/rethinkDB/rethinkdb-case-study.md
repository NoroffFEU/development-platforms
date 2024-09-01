---
title: rethinkDB Case Study
author: Aashild L. Rasmussen <aa096>
---

## Introduction

RethinkDB is an open-source, distributed NoSQL database designed specially for real-time web applications. Unlike traditional databases that require polling for changes, RethinkDB introduces a new approach by continuously pushing updated query results to applications as data changes. This real-time push architecture significantly simplifies the process of building scalable, real-time applications.

Beyond its real-time capabilities, RethinkDB features a flexible query language, user-friendly APIs for operations and monitoring, and is easy to set up and learn, making it a powerful tool for developers.

## Brief History

- 2009: RethinkDB was founded in 2009 by Mike Glukhovsky and Slava Akhmechet.
- 2012: Open-sourced at version 1.2.
- 2015: released version 2.0, announcing as production-ready
- 2016: RethinkDB announced it was shutting down and transitioned its engineering team to Stripe.
- 2017: The Cloud Native Computing Foundation purchased the rights to the source code and relicensed it under the Apache License 2.0.


## Main Features

- **Real-time Data Push:** Unlike traditional databases that require polling for changes, RethinkDB uses a "changefeed" feature. It continuously pushes updated query results to applications in real-time, significantly simplifying the creation of dynamic, interactive apps.
- **Flexible Query Language (ReQL):** RethinkDB’s ReQL language is designed to be both powerful and intuitive, supporting functions like joins, map-reduce, and filters. This makes it suitable for a wide range of complex queries while still being easy to learn.
- **Scalability & High Availability:** RethinkDB supports automatic sharding and replication, ensuring horizontal scalability. It also offers high availability through automatic failover, ensuring minimal downtime during server failures.
- **Built-in Web UI:**  RethinkDB includes a web-based admin dashboard that allows developers to monitor clusters, view statistics, and perform administrative tasks with ease.
- **Flexible Data Storage:** The database is schema-less, making it suitable for storing dynamic JSON documents and handling unstructured data.


## Market Comparison: RethinkDB vs. MongoDB

**Similarities**

- NoSQL Database: Both RethinkDB and MongoDB are NoSQL databases, using a flexible JSON document model to store data without a predefined schema.
- Scalability: Both support horizontal scaling through sharding, making them suitable for distributed applications that handle large datasets.
- Open Source: Both are open-source databases with large communities and comprehensive documentation, making them accessible for developers to implement.

**Key Differences**

| *Feature* | *RethinkDB* | *MongoDB* |
|---|---|---|
| *Real-time Capabilities* | Built-in real-time data push with changefeeds, allowing real-time updates to client applications. | Requires external tools like MongoDB Change Streams for real-time functionality. |
| *Query Language* | ReQL: A functional, intuitive query language with built-in support for changefeeds and real-time queries. | MongoDB Query Language (MQL): Flexible, but lacks native real-time querying without additional configurations. |
| *Sharding and Replication* | RethinkDB offers automatic sharding and replication with built-in high availability. | MongoDB supports advanced sharding and replication but often requires manual configuration. |
|   |   |   |
|   |   |   |

## When is RethinkDB a good choice? 

RethinkDB is an excellent option for applications that benefit from real-time data feeds. While the traditional query-response model aligns well with HTTP's request-response structure, modern applications often need to send updates to clients in real-time. This is where RethinkDB excels with its real-time push architecture.

Some common use cases where companies have leveraged RethinkDB’s capabilities include:

- Collaborative web and mobile applications
- Streaming analytics platforms
- Multiplayer games
- Real-time marketplaces
- Connected IoT devices

For instance, in a collaborative design app, when one user moves a button, RethinkDB allows the server to instantly notify other users working on the same project. While technologies like WebSockets and long-lived HTTP connections help browsers handle these updates, adapting databases to push data in real-time is a complex challenge that RethinkDB addresses head-on.

As the first open-source, scalable database specifically designed for real-time data delivery, RethinkDB significantly reduces the complexity and time required to develop scalable, real-time applications. It empowers developers to build dynamic, real-time features with less effort​


## Conclusion

This section can be used to summarize your findings. What are the main advantages and disadvantages of your chosen tool? What are the main use cases for this tool? What are the main limitations of this tool? What does the future look like for this tool?

## References

- [What is RethinkDB? FAQ](https://rethinkdb.com/faq)
- [RethinkDB joins The Linux Foundation](https://rethinkdb.com/blog/rethinkdb-joins-linux-foundation)
- [Wikipedia: RethinkDB](https://en.wikipedia.org/wiki/RethinkDB)
- [Changefeeds in RethinkDB](https://rethinkdb.com/docs/changefeeds/javascript/)
- [Introduction to ReQL](https://rethinkdb.com/docs/introduction-to-reql/)
- [YouTube: What is RethinkDB](https://www.youtube.com/watch?v=qKPKsBNw604)

## Additional Resources

- [More about Examples](https://example.com)
- [Examples, the Full Course](https://youtu.be/dQw4w9WgXcQ)