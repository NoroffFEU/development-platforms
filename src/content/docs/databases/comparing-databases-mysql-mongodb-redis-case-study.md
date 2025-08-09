---
title: "Comparing databases: MySQL, MongoDB, Redis"
keywords: Development Platforms, Case Study, Database, Datastore
tags: Relational database, NoSQL, In-memory, MySQL, MongoDB, Redis, Open-source
---

## Introduction

Database Management Systems (DBMS) play a vital role in modern information technology by organising and managing structured data efficiently. In this document we will learn about fundamental concepts such as what database is, ACID properties, different types of databases like relational, NoSQL, and in-memory databases.

Comparing different data stores like MySQL, MongoDB, and Redis focusing on key aspects such as data model, scalability, and performance, which play a crucial part in effective data management. By understanding the strengths and weaknesses of each, stakeholders can make informed decisions, ensuring smooth operations and optimal performance for their projects.

## Main Features

### Database

Database is an organised collection of structured data stored in tables, and is controlled by a database management system (DBMS). DBMS is a link between the databases and the end users or application programs. It ensures that the data is always organized and easy to find. DBMS allows users to create, modify and query a database, as well as manage the security and access controls for that database. DBMS manages all requests, freeing end users and software programs from the need to understand where the data is physically stored or the type of storage medium it lives in.

In practice, it is common to have multiple databases, as well as multiple DBMS. Different DBMS have different strengths and weaknesses. The best database for a specific organization depends on how the organization intends to use the data.

When choosing between different types of databases, it is good to answer some questions:

1. Data Accuracy Requirements:
   - What are the data accuracy requirements?
   - Will data storage and accuracy rely on business logic?
   - Does the data have strict requirements for accuracy?
2. Scalability:
   - Is scalability needed?
   - What is the scale of the data to be managed, and what it expected growth?
   - Will the database model need to support mirrored database copies for scalability?
   - How likely is it to maintain the data consistency across those instances?
3. Concurrency:
   - How important is concurrency?
   - Will multiple users and applications need simultaneous data access?
   - Does the database software support concurrency while protecting the data?
4. Performance and reliability:
   - What are our performance and reliability needs?
   - Is a high-performance, high-reliability product needed?
   - What are the requirements for query-response performance?
   - What are the vendor’s commitments for service level agreements (SLAs) or unplanned downtime?

#### ACID properties

Atomicity, Consistency, Isolation, and Durability (ACID) properties must be considered in database transactions to ensure consistency. When changes are made to a database, the data management should continue to be integrated. If there are compromises in the integrity of the data, the entire data set will be disturbed and corrupted. Transactions, a singular logical units, use read and write operations to access and modify data.

- Atomicity: Known as “All or nothing rule”. All commands in a transactions are treated as a single unit, and all of them succeed or fail together. There is no in-between, the transactions don’t occur partially. Any failure results in complete rollback to its original state.
- Consistency: The data’s integrity is maintained by saving any modifications made to the database, which ensures that the database is consistent before and after the transaction.
- Isolation: Simultaneous transactions are isolated from each other to ensure one transaction isn’t visible to others until the first transaction is committed. This prevents interference from concurrent transactions until they are completed.
- Durability: Once transactions are completed and committed, data remains in the database permanently, and will survive in case of a system crash or failure.

### Relational database

Data in a relational database is organized as a set of tables with columns and rows. Each row represents a record identified by a unique key, and columns store attributes with corresponding values, making it easy to establish the relationships among data points. Relational databases ensure that multiple instances of a database have the same data all the time.

The relational model separates logical data structures from physical storage, allowing administrators to optimize storage without changing the logical structure. This makes it easier to manage and maintain databases.

The relational database management system (RDBMS) provides an interface between the users, applications and the database.

| Pros                                                  | Cons                                                  |
| ----------------------------------------------------- | ----------------------------------------------------- |
| Data is easily structured into categories.            | Scaling is more difficult with growing data.          |
| Data is consistent in input and meaning.              | Updates to schema are complicated and time-consuming. |
| Relationships are easily defined between data points. | Indexes can take up a lot of space.                   |
| SQL makes it easy to query and update data.           |                                                       |

### NoSQL

Also known as “non-relational database” is s database design that allows the storage and querying of data outside the traditional structures of relational structures.

NoSQL database stores data within one data structure, such as JSON document, for rapid scalability of large, unstructured data sets. It’s also distributed databse, which means that data is copied and stored on various servers that can be remote or local. This ensures availability and reliability of data.

#### Types of NoSQL

1. Key-value store: Dictionary data structure with objects representing data fields. Each object is assigned a unique key, and to access it, a specific key is required. The key provieds the value assigned to the key.
2. Document store: It stores data as documents, such as JSON, XML, or BSON formats. This approach keeps data together when used in an application, reducing the amount of translation needed. It provides more flexibility because data schemas don’t need to match across documents. However, in more complex transactions, it poses a potential risk and can lead to data corruptions
3. Wide-column store: Organizes data in columns, allowing users to access specific columns without allocating additional memory for irrelevant data. It tries to improve key-value and document stores weaknesses, but it can be a more complex system to mange.
4. Graph store: It stores data from a knowledge graph, where data elements are stored as nodes (object), edges (relationship between nodes), and properties.

| Pros                                             | Cons                                                          |
| ------------------------------------------------ | ------------------------------------------------------------- |
| Data is not confined to structured group.        | Data may not be consistent.                                   |
| Perform functions allow for greater flexibility. | Data integrity can be compromised if not managed correctly.   |
| Data and analysis are more dynamic.              | No “universal” language can lead to difficulty querying data. |

### In-Memory Database

Also known as a “main memory database”, “real-time database”, or “in-memory database system”, an in-memory database stores data in the random access memory (RAM) of a computer.

In-memory database provides faster access to their content than disk-based systems. However, they carry a higher risk of losing data if the server is down. This can be prevented by replicating sets, which is available in modern databases such as MongoDB with a combination of in-memory engines and traditional on-disk storage.

Developers would choose an in-memory database primarily for performance reasons. These databases offer many useful data structures, simplifying and optimizing data manipulation.

| Pros                                                                       | Cons                                                          |
| -------------------------------------------------------------------------- | ------------------------------------------------------------- |
| Allows faster query responses and real-time data processing.               | RAM is more expensive than disk storage.                      |
| Easily scales to manage large volumes.                                     | RAM is volatile; if the server is down, data is lost.         |
| Offers data durability and reliability, even though it’s stored in memory. | There is a limit to how big an individual system's memory is. |

### MySQL

#### Brief History

- 1994: MySQL development begins by Widenious and Axmark.
- 1995: First version of MySQL released by MySQL AB.
- 1998: MySQL's first version for Windows OS released.
- 2001: MySQL version 3.23 declared stable.
- 2003: Production release of MySQL version 4.0, introducing set operations.
- 2004: Release of MySQL version 4.1, adding subqueries and prepared statements.
- 2005: Launch of MySQL version 5.0, featuring cursors, stored procedures, triggers, and views.
- 2008: Sun Microsystems acquires MySQL AB.
- 2010: Oracle Corporation acquires Sun Microsystems; MySQL forked into MariaDB by Michael Widenius.
- 2010: General availability of MySQL Server 5.5, with enhancements like InnoDB as the default storage engine and improved SMP support.
- 2013: Release of MySQL version 5.6, introducing performance improvements and NoSQL-style memcached APIs.
- 2015: General availability of MySQL 5.7, with native JSON data type support.
- 2018: Announcement of MySQL Server 8.0, featuring a NoSQL Document Store and JSON table functions.
- 2019: MySQL DBMS ranked as the most important by DB-Engines.

#### About MySQL

MySQL established in 1995 by MySQL AB and later acquired by Sun Microsystems and subsequently Oracle Corporation. MySQL is a leading Relational Database Management System (RDBMS) utilising Structured Query Language (SQL) and developed as open-source software. Renowned for its robustness, MySQL seamlessly operates across multiple platforms, harnessing the power of SQL for effective data management.

From personal projects to enterprise-level applications, MySQL offers a rich array of features tailored to diverse needs. Its performance, reliability, and user-friendliness have made it an integral part of the technology stack for countless developers and businesses worldwide.

Adhering to SQL standards and continuously evolving to meet the demands of modern applications, MySQL has solidified its status as the preferred choice for organisations of all sizes. Its compatibility with various operating systems and adaptable deployment options further enhance its appeal, ensuring seamless integration into diverse environments.

In essence, MySQL's enduring popularity is rooted in its ability to deliver exceptional speed, scalability, and ease of use, making it the optimal solution for a wide spectrum of web-based applications across industries.

| Pros                                                                                                            | Cons                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| **Scalability and Flexibility:** Scales from embedded to massive data warehouses with customization options.    | **Limited Handling of Large Data:** Impact performance and scalability with very large datasets.                                                                                                         |
| **High Performance:** Delivers exceptional performance for various applications.                                | **Absence of SQL Check Constraints:** Challenge data integrity without native support.                                                                                                          |
| **High Availability:** Ensures constant uptime with robust reliability features.                                | **Transaction Inefficiency and Data Corruption:** Risk data reliability due to transaction issues.                                                                                                           |
| **Robust Transactional Support:** Provides powerful transactional capabilities for data integrity.              | **Feature Limitations in Older Versions:** Hampers application development lacking essential features.                                                                                                         |
| **Web and Data Warehouse Strengths:** Excels in high-traffic web and data warehousing environments.             | **Scalability Challenges:** Limits usability for growing systems.                                                                                                          |  
| **Strong Data Protection:** Offers extensive security features for data privacy and integrity.                  | **Weaknesses in Stored Procedures:** Impacts application performance and maintainability.                                                                                                  |
| **Comprehensive Application Development:** Supports various development needs with multiple features.           | **Complex Database Cluster Installation:** Challenging and resource-intensive cluster setup and maintenance.                                                                                                  |
| **Management Ease:** Provides quick installation, self-management, and graphical tools for administration.      | **Issues with Group By Functionality:** Complicates query development and result accuracy due to inconsistent behaviour.                                                                                    |

### MongoDB

#### Brief History

- 2007: MongoDB founded by Dwight Merriman, Eliot Horowitz, and Kevin Ryan.
- 2009: Launched as an open-source development platform.
- 2015: Version 3.0 with WiredTiger Storage Engine.
- 2015: Version 3.2 with Encrypted Storage Engine, In-Memory Storage Engine, MongoDB Compass, and MongoDB Connector for BI.
- 2016: Version 3.4 with MongoDB Atlas, Zoned sharding, and MongoDB Connector for Apache Spark.
- 2017: Version 3.6 with Fully managed MongoDB Atlas and change streams.
- 2018: Version 4.0 with multi-document ACID transactions and MongoDB Atlas Global Clusters. Introduced MongoDB Charts.
- 2019: Version 4.2 with MongoDB Atlas Search, MongoDB Atlas Data Lake, MongoDB Operator for Kubernetes, and MongoDB Connector for Apache Kafka.
- 2020: Version 4.4 with MongoDB Atlas Online Archive, Realm & Sync, and MongoDB Atlas multi-cloud clusters.
- 2021-2022: Version 5.0 and Rapid releases including MongoDB Stable API and Atlas Server-less instances.
- 2022: Version 6.0 with significant updates like Atlas Server-less instances, Atlas Data API, and Cluster-to-cluster sync. Introduced Atlas CLI and Flexible Sync, Atlas Data Lake, Atlas Data Federation, and Atlas SQL Interface.

#### About MongoDB

MongoDB, short for "Humongous DataBase," is a dynamic, open-source document-oriented database system renowned for its scalability and flexibility. It diverges from traditional relational databases by storing data in flexible, JSON-like documents with optional schemas. This approach allows developers to effortlessly handle diverse data types and adapt to evolving data structures.

As a versatile tool, MongoDB functions as more than just a database. It serves as a powerful solution for various applications, including internet and business applications that demand rapid evolution and seamless scalability. MongoDB's horizontal scale-out architecture enables developers to effortlessly expand their databases as their application grows, ensuring smooth operation even under heavy workloads.

Driven by a vibrant developer community and open-source ethos drive continuous innovation and improvement. This collaborative environment ensures that MongoDB remains at the forefront of database technology, evolving to meet the dynamic needs of modern applications.

MongoDB is crafted to enhance application performance and scalability. With its flexible schema, efficient querying, and broad language support, MongoDB is an ideal choice for various use cases, including real-time applications, data caching, and distributed systems.

| Pros                                                                                                            | Cons                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| **Scalable:** Effortlessly scales to handle growing data and user loads.                                        | **High Storage Usage:** Consumes significant storage due to its document-oriented model.                                                                                                            |
| **High Performance:** Ensures quick storage and retrieval of complex data.                                      | **Security Concerns:** May pose security challenges if not properly configured.                                                                                                       |
| **Flexible:** Schema-less design simplifies storage and querying of diverse data structures.                    | **Complex Joins:** Joining documents can impact query performance.                                                                                                      |
| **Integration:** Seamlessly integrates with popular programming languages.                                      | **Size Constraint:** Imposes a limit of 16MB on document size.                                                                                                             |
| **Reliable:** Ensures data availability and reliability through robust replication.                             | **Nesting Limitations:** Restrictions apply to document nesting.                                                                                                          |
| **Multi-language Support:** Provides official drivers for multiple programming languages, facilitating seamless multi-language support. | **Troubleshooting Challenges:** Can pose difficulties in troubleshooting due to limited community support.                                                                 |
| **Comprehensive:** Provides extensive functionality for data analysis and reporting.                            | **Query Language Complexity:** MongoDB's query language (MQL) can present challenges in comprehension.                                                                                                    |
| **Developer-friendly:** Prioritizes ease-of-use and productivity for developers.                                | **Data Consistency:** The absence of native transactions may result in inconsistencies.                                                                                                  |

### Redis

#### Brief History

- 2009: Salvatore Sanfilippo develops Redis as an open-source in-memory storage solution.
- 2013: Redis gains popularity as a distributed, in-memory key-value database, cache, and message broker.
- 2015: Redis continues to be widely adopted by various companies.
- 2023: Redis version 7.2.3, the most stable release, is launched on November 1st, enhancing its features and stability.


#### About Redis

Redis, short for Remote Dictionary Server, is an open-source, high-performance, in-memory data structure store. It serves as a versatile tool, operating as a caching solution, database and message broker. Renowned for its rapid read and write operations, Redis supports various data structures like strings, lists and sets. Its in-memory storage approach ensures unparalleled speed, making it ideal for real-time applications, caching and distributed systems. 

Additionally, Redis offers built-in replication capabilities for fault tolerance and supports advanced features like LRU (Least Recently Used) eviction policies and transactions. The LRU eviction policy efficiently manages memory by removing the least recently accessed data when space is needed for new entries. This ensures optimal performance by prioritising frequently accessed data, thus maximising memory efficiency.

Overall, Redis is meticulously designed to enhance application performance and scalability. Its broad compatibility across programming languages enables developers to effectively optimise their applications. With its versatility, Redis is a top choice for a wide range of use cases, including real-time applications, caching and distributed systems, ensuring seamless operation and improved performance.

| Pros                                                                                                            | Cons                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| **High Performance:** Offers lightning-fast speeds, making it perfect for real-time applications.               | **Memory Intensive:** Requires significant memory resources.                             |
| **Scalability:** Scales effortlessly, handling increased data and user loads.                                   | **No Native Transactions:** Lack of native transaction support affects data consistency. |
| **Low Latency:** Ensures low latency, enabling quick data retrieval and response.                               | **Limited Querying:** Limited querying capabilities.                                     |
| **Data Structures:** Supports various data structures, offering flexibility in operations.                      | **Single-threaded:** Its single-threaded nature may limit performance.                   |
| **Persistence:** Provides persistence options for data durability and recovery.                                 | **Use Case Limitations:** Not suitable for all use cases.                                |
| **Pub/Sub Messaging:** Provides efficient publish/subscribe functionality for seamless real-time communication. | **Disk Persistence Impact:** Disk persistence can impact performance.                    |
| **Built-in Replication:** includes integrated replication, ensuring data redundancy and fault tolerance.        | **Learning Curve:** May pose a learning curve for users unfamiliar with its intricacies. |
| **Versatility:** Flexible, catering to diverse use cases such as caching, session management, and analytics.    | **Persistence Complexity:** Configuring persistence can be complex.                      |

## Marked Comparison

### MySQL vs. MongoDB vs. Redis

#### Data Model and Schema Flexibility:

- `MySQL:` Relational database with a rigid schema requiring predefined table structures.
- `MongoDB:` Flexible document-based NoSQL database allowing dynamic schema and nested data structures.
- `Redis:` Schema-less, key-value store suitable for caching and real-time applications.

#### Scalability:

- `MySQL:` Scales vertically by adding more resources to the existing server; limited horizontal scalability.
- `MongoDB:` Horizontally scalable, supports sharding for distributing data across multiple nodes.
- `Redis:` Horizontally scalable, handles increased data and user loads effortlessly.

#### Performance:

- `MySQL:` High performance for structured data and complex queries with proper indexing.
- `MongoDB:` Offers quick storage and retrieval of complex data, suitable for high-throughput applications.
- `Redis:` Lightning-fast speed due to in-memory storage, ideal for real-time applications and caching.

#### Data Integrity and Transactions:

- `MySQL:` Strong support for ACID transactions, ensuring data consistency and reliability.
- `MongoDB:` Provides eventual consistency by default, supports multi-document transactions in recent versions.
- `Redis:` Lacks native transaction support, which may impact data consistency.

#### Use Cases:

- `MySQL:` Well-suited for structured data, transactional applications, and relational queries.
- `MongoDB:` Best for unstructured or semi-structured data, document storage, and horizontal scalability.
- `Redis:` Ideal for caching, real-time analytics, session management, and distributed systems.

#### Developer Experience and Learning Curve:

- `MySQL:` Widely adopted, extensive documentation, and mature ecosystem; familiar SQL interface.
- `MongoDB:` Developer-friendly with JSON-like documents, but may have a learning curve for those accustomed to SQL.
- `Redis:` Simple and easy-to-use, with straightforward commands and minimal configuration.

#### Resource Utilization:

- `MySQL:` Moderate resource usage, requires disk storage for data persistence.
- `MongoDB:` Consumes significant storage due to document-oriented model, requires adequate disk space.
- `Redis:` Memory-intensive due to in-memory storage, may require careful memory management.

MySQL is well-suited for structured data and relational queries, prioritizing data integrity and transactional support. However, it may face challenges with very large datasets and lacks some advanced features found in other systems.

MongoDB excels in handling unstructured data and offers seamless scalability, making it ideal for rapidly changing data schemas or high write throughput requirements. Its schema-less design simplifies storage and querying of diverse data structures, albeit with a learning curve for SQL users.

Redis is exceptionally fast and versatile, catering to real-time applications, caching, and distributed systems. Despite its low latency and efficient data retrieval, its in-memory storage can be memory-intensive and its single-threaded nature may limit performance in certain scenarios.

## Getting Started

### MySQL

To get started with MySQL you can download and install the latest version from the [official website](https://dev.mysql.com/).
Follow the instructions [how to get started](https://dev.mysql.com/doc/mysql-getting-started/en)

### MongoDB

To get started with MongoDB you can download and install the latest version from the [official website](https://www.mongodb.com/).
Follow the instructions on from this [video](https://www.mongodb.com/docs/manual/tutorial/getting-started/)

### Redis

To get started with Redis you can download and install the latest version from the [official website](https://redis.io/docs/install/).
Follow the instructions [how to get started](https://redis.io/docs/install/install-redis/)

## Conclusion

The choice between relational, NoSQL and in-memory databases, and more specifically data stores, such as MySQL, MongoDB, and Redis depends on the specific requirements of the project. Each database type and data store has its own advantages and disadvantages.

Relational databases provides structured data and consistency, but may face challenges with scaling. NoSQL databases offer flexibility and scalability, but may compromise data consistency. In-memory databases provide speed and real-time processing, while it may risk data loss in the event of server failure.

MySQL is optimal for data integrity and transactional support, MongoDB for unstructured data and scalability, and Redis for speed and versatility, particularly in real-time and caching scenarios.

In conclusion, choosing the right data store depends on a project specific requirements, such as scalability and performance priorities of your application.

## References

- [What Is DBMS (Database Management System)? Definition, Types, Properties, and Examples](https://www.spiceworks.com/tech/cloud/articles/database-management-systems-dbms/)
- [Database Introduction Part 1](https://medium.com/omarelgabrys-blog/database-introduction-part-1-4844fada1fb0)
- [What is a Database?](https://www.oracle.com/database/what-is-database/)
- [What is a Relational Database?](https://www.oracle.com/database/what-is-a-relational-database/)
- [Relational Databases](https://www.ibm.com/topics/relational-databases)
- [NoSQL Databases](https://www.ibm.com/topics/nosql-databases)
- [Deep Dive into NoSQL Database Types](https://ganganichamika.medium.com/deep-dive-into-nosql-database-types-80340598124)
- [In-Memory Database](https://www.heavy.ai/technical-glossary/in-memory-database)
- [What is an in-memory database?](https://www.mongodb.com/databases/in-memory-database)
- [In-Memory Databases Explained](https://www.influxdata.com/in-memory-database/)
- [Couchbase - In-Memory Database](https://www.couchbase.com/resources/concepts/in-memory-database/)
- [Relational vs. Non-Relational Database Pros and Cons](https://aloa.co/blog/relational-vs-non-relational-database-pros-cons)
- [NoSQL](https://aws.amazon.com/nosql/)
- [MySQL](https://en.wikipedia.org/wiki/MySQL)
- [Why MySQL is so Popular](https://medium.com/@bhavithach8/why-mysql-is-so-popular-a4483971800d)
- [MongoDB](https://en.wikipedia.org/wiki/MongoDB)
- [What is MongoDB](https://www.ibm.com/topics/mongodb?mhsrc=ibmsearch_a&mhq=mongodb)
- [Top Best Database for Web Applications](https://www.mobulous.com/blog/top-best-database-for-web-applications/)
- [Best Database for Web Apps](https://www.expertappdevs.com/blog/best-database-for-web-apps)
- [Redis](https://redis.io/)
- [Redis](https://www.ibm.com/topics/redi)
- [The Difference Between Redis and MongoDB](https://aws.amazon.com/compare/the-difference-between-redis-and-mongodb/)
- [MongoDB vs MySQL](https://www.mongodb.com/compare/mongodb-mysql)
