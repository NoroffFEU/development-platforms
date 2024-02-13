---
title: Comparing databases: MySQL, MongoDB, Redis
keywords: Development Platforms, Case Study, Database 
tags: Relational database, NoSQL, In-memory, MySQL, MongoDB, Redis
---

## Introduction

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

| Pros                                                 | Cons                                                 |
| ---------------------------------------------------- | ---------------------------------------------------- |
| Data is easily structured into categories            | Scaling is more difficult with growing data          |
| Data is consistent in input and meaning              | Updates to schema are complicated and time-consuming |
| Relationships are easily defined between data points | Indexes can take up a lot of space                   |
| SQL makes it easy to query and update data           |                                                      |

#### MySQL

MySQL is an open-source Relational Database Management System that enables users to store, manage, and retrieve structured data efficiently. It is used for web-based applications, ranging from personal projects and websites to e-commerce and information services, as well as high-profile web properties.

### NoSQL

Also known as “non-relational database” is s database design that allows the storage and querying of data outside the traditional structures of relational structures.

NoSQL database stores data within one data structure, such as JSON document, for rapid scalability of large, unstructured data sets. It’s also distributed databse, which means that data is copied and stored on various servers that can be remote or local. This ensures availability and reliability of data.

#### Types of NoSQL

1. Key-value store: Dictionary data structure with objects representing data fields. Each object is assigned a unique key, and to access it, a specific key is required. The key provieds the value assigned to the key.
2. Document store: It stores data as documents, such as JSON, XML, or BSON formats. This approach keeps data together when used in an application, reducing the amount of translation needed. It provides more flexibility because data schemas don’t need to match across documents. However, in more complex transactions, it poses a potential risk and can lead to data corruptions
3. Wide-column store: Organizes data in columns, allowing users to access specific columns without allocating additional memory for irrelevant data. It tries to improve key-value and document stores weaknesses, but it can be a more complex system to mange.
4. Graph store: It stores data from a knowledge graph, where data elements are stored as nodes (object), edges (relationship between nodes), and properties.

| Pros                                            | Cons                                                         |
| ----------------------------------------------- | ------------------------------------------------------------ |
| Data is not confined to structured group        | Data may not be consistent                                   |
| Perform functions allow for greater flexibility | Data integrity can be compromised if not managed correctly   |
| Data and analysis are more dynamic              | No “universal” language can lead to difficulty querying data |

#### MongoDB

MongoDB is an open-source document database built on a horizontal scale-out architecture, with flexible schema for storing data. It is designed for developers creating internet and business applications who need to evolve quickly and scale elegantly.

### In-Memory Database

Also known as a “main memory database”, “real-time database”, or “in-memory database system”, an in-memory database stores data in the random access memory (RAM) of a computer.

In-memory database provides faster access to their content than disk-based systems. However, they carry a higher risk of losing data if the server is down. This can be prevented by replicating sets, which is available in modern databases such as MongoDB with a combination of in-memory engines and traditional on-disk storage.

Developers would choose an in-memory database primarily for performance reasons. These databases offer many useful data structures, simplifying and optimizing data manipulation.

| Pros                                                                      | Cons                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------ |
| Allows faster query responses and real-time data processing               | RAM is more expensive than disk storage                      |
| Easily scales to manage large volumes                                     | RAM is volatile; if the server is down, data is lost         |
| Offers data durability and reliability, even though it’s stored in memory | There is a limit to how big an individual system's memory is |

#### Redis

Remote Dictionary Server (Redis) is an open-source, in-memory data store, and NoSQL key-value store. It’s commonly used as an application cache or quick-response database, storing data in memory, instead of on a disk or solid-state drive.

### Relational database vs. NoSQL

|                   | Relational Database                                                                                                  | NoSQL                                                                                                                 |
| ----------------- | -------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Optimal Workloads | Designed for transactional and analytical processing                                                                 | Designed for low-latency application and analytics over semi-structured data                                          |
| Data Model        | Normalizes data into tables with rows and columns, enforces referential integrity in the relationship between tables | Provides various data models, such as key-values, document, graph, and wide columns                                   |
| ACID Properties   | Provides ACID properties                                                                                             | Offers trade-offs by relaxing some ACID properties in favor of a more flexible data model that can scale horizontally |
| Performance       | Dependent on the disk subsystem's performance                                                                        | A function of the underlying hardware cluster size, network latency, and the calling application                      |
| Scale             | Scales up by increasing hardware capabilities or scales out by adding replicas for read-only workloads               | Is partitionable, scaling horizontally                                                                                |

### In-Memory vs Relational database

|                  | In-Memory Database                     | Relational Database            |
| ---------------- | -------------------------------------- | ------------------------------ |
| Performance      | Faster due to direct memory            | Slower due to disk latency     |
| Cost             | More expensive due to high cost of RAM | Less expensive                 |
| Data Persistence | Often volatile                         | High persistence               |
| Scalability      | Limited                                | Can store data on a large disk |

## Conclusion

The choice between relational, NoSQL, and in-memory databases depends on the specific requirements of the project. Relational databases provied structued data and consistency, NoSQL databases offer flexibility and scalability, and in-memory databases provieds speed and real-time processing.

Each databse has it’s own strenghts and weaknesses. Relational databases’s weakness is scaling, NoSQL databases’s may compromise data consistency, and in-memory databases risk data loss in the event of server failure.

In conclusion, choosing the right datastore depends on a project specific requirenments, such as scalability and performance needs.

## References

- [What Is DBMS (Database Management System)? Definition, Types, Properties, and Examples](https://www.spiceworks.com/tech/cloud/articles/database-management-systems-dbms/)
- [Database Introduction Part 1](https://medium.com/omarelgabrys-blog/database-introduction-part-1-4844fada1fb0)
- [What is a Database?](https://www.oracle.com/database/what-is-database/)
- [What is a Relational Database?](https://www.oracle.com/database/what-is-a-relational-database/)
- [Relational Databases](https://www.ibm.com/topics/relational-databases)
- [MySQL](https://hub.docker.com/_/mysql)
- [NoSQL Databases](https://www.ibm.com/topics/nosql-databases)
- [Deep Dive into NoSQL Database Types](https://ganganichamika.medium.com/deep-dive-into-nosql-database-types-80340598124)
- [Why Use MongoDB?](https://www.mongodb.com/why-use-mongodb)
- [In-Memory Database](https://www.heavy.ai/technical-glossary/in-memory-database)
- [What is an in-memory database?](https://www.mongodb.com/databases/in-memory-database)
- [In-Memory Databases Explained](https://www.influxdata.com/in-memory-database/)
- [Couchbase - In-Memory Database](https://www.couchbase.com/resources/concepts/in-memory-database/)
- [Relational vs. Non-Relational Database Pros and Cons](https://aloa.co/blog/relational-vs-non-relational-database-pros-cons)
- [NoSQL](https://aws.amazon.com/nosql/)
