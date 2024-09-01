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
| *Use Cases* | Best for real-time collaborative apps, multiplayer games, and IoT platforms where instant updates are critical. | More generalized use cases including content management, e-commerce, and data analytics. |
| *Community & Ecosystem* | Smaller ecosystem with fewer integrations and tools compared to MongoDB. | Large ecosystem with extensive integrations, tools, and cloud services (MongoDB Atlas). |

*Advantages of RethinkDB*
- Real-time Push: RethinkDB natively pushes updates to clients in real-time without needing complex infrastructure.
- Ease of Use for Real-time Apps: Simplifies building real-time applications with less effort compared to MongoDB, which requires additional tools like Kafka or Change Streams for similar functionality.
*Advantages of MongoDB*
- Wider Adoption: MongoDB has a larger user base and ecosystem, making it easier to find community support, drivers, and integrations.
- More Generalized: While RethinkDB is specialized for real-time apps, MongoDB serves a broader range of applications across different industries.

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

RethinkDB stands out as a compelling choice for real-time data applications, offering unique advantages that cater specifically to use cases requiring immediate data updates. Its built-in real-time data push, facilitated by the changefeeds feature, simplifies the development of dynamic, interactive applications, reducing the complexity associated with real-time data delivery. The intuitive ReQL query language further enhances its usability, making it a strong candidate for developers focused on real-time functionalities, such as collaborative tools, multiplayer games, and IoT platforms.

However, RethinkDB is not without its limitations. Its ecosystem is relatively smaller compared to competitors like MongoDB, which boasts a larger community and a more extensive range of integrations and tools. MongoDB's versatility and wider adoption make it suitable for a broader array of applications, from content management to data analytics, and it benefits from a robust support network and cloud services like MongoDB Atlas.

In summary, RethinkDB excels in scenarios where real-time data push is critical, providing a streamlined approach to building real-time applications. For projects requiring real-time features with less architectural overhead, RethinkDB is a powerful and efficient choice. On the other hand, MongoDB remains a more generalized solution with extensive support and flexibility for a wide range of applications. As the database landscape evolves, RethinkDB’s focus on real-time data delivery will continue to offer significant value to developers working on cutting-edge applications where instant updates are crucial.

## References

- [FAQ: What is RethinkDB?](https://rethinkdb.com/faq)
- [RethinkDB joins The Linux Foundation](https://rethinkdb.com/blog/rethinkdb-joins-linux-foundation)
- [Wikipedia: RethinkDB](https://en.wikipedia.org/wiki/RethinkDB)
- [Changefeeds in RethinkDB](https://rethinkdb.com/docs/changefeeds/javascript/)
- [Introduction to ReQL](https://rethinkdb.com/docs/introduction-to-reql/)
- [YouTube: What is RethinkDB](https://www.youtube.com/watch?v=qKPKsBNw604)
- [What is MongoDB?](https://www.mongodb.com/docs/manual/)
- [MongoDB Features](https://www.mongodb.com/resources/products/fundamentals/features)
