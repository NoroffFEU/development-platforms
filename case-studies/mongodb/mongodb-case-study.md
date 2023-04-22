| **Table of contents**                           |
| ----------------------------------------------- |
| [Intro](#intro)                                 |
| [History](#history)                             |
| [Features](#features)                           |
| [Strengths & Weaknesses](#strength--weaknesses) |
| [Market Comparison](#market-comparison)         |
| [Summary](#summary)                             |
| [References](#references)                       |

## Intro

MongoDB is a open source NoSQL database management program that has focus on being scalable and flexible, allowing for the storage of large amounts of data in a fast and agile database. It was created by the owners of a internet advertisement company, called DoubleClick, they struggled with the storage databases not being scalable and agile enough. Instead of using tables and rows, like the SQL databases, MongoDB gathers information and data in collections and documents. In this case-study we will explore the key features, benefits, and drawbacks of MongoDB.

![Image of MongoDB](https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png)

## History

### timeline:

- `2007` MongoDB was founded by Dwight Merriman, Eliot Horrowitz and Kevin Ryan.
- `2009` Launched and shifted to a open-source development platform.
- `2015` In the early 2015 MongoDB released their version 3.0 - With WiredTiger Storage Engine, Ops Manager and 50-member replica sets.
- `2015` Later the same year the released their version 3.2 - With Encrypted Storage Engine, In-Memory Storage Engine. They also released the MongoDB Compass and MongoDB Connector for BI.
- `2016` Released the version 3.4 - MongoDB Atlas released, same with Zoned sharding and MongoDB Connector for Apache Spark.
- `2017` Released the version 3.6 - Fully managed MongoDB Atlas. change streams to build always-on, real time, reactive applications.
- `2018` Released the version 4.0 - Offers multi-document ACID transactions. MongoDB Atlas Global Clusters and enterprise security controls, and MongoDB Charts.
- `2019` Released the version 4.2 - MongoDB Atlas Search and MongoDB Atlas Data Lake. And MongoDB Operator for Kubernetes and MongoDB Connector for Apache Kafka.
- `2020` Released the version 4.4 - MongoDB Atlas Online Archive, Realm & Sync, MongoDB Atlas multi-cloud clusters.
- `2021-2022` Released the version 5.0, and Rapid released - MongoDB 5.x, MongoDB Stable API, Atlas Serverless instances, MongoDB Atlas Data API
- `2022` Released the version 6.0 - Atlas Serverless instances, Atlas Data API, Atlas CLI and Flexible Sync. Atlas Data Lase, Atlas Data Federation and Atlas SQL Interface. And Cluster-to-cluster sync.

MongoDB was created because the founders felt that standard relational databases were inadequate to meet the requirements of contemporary online applications, which frequently needed flexible data models and horizontal scalability. They created a brand-new category of database to handle and manage unstructured and semi-structured data in order to solve this problem.

Today, MongoDB is one of the most popular NoSQL databases in the world, with over 100 million downloads and a community of developers and users that continues to grow.

## Features

| MongoDB Features  |
| ----------------- |
| Indexing          |
| Replication       |
| Aggregation       |
| Scalability       |
| Document-oriented |
| Ad hoc queries    |
| ACID              |

### 1. Indexing

MongoDB has a robust indexing system that enables efficient search and retrieval of data. It supports various indexing options, including single-field, compound, and multi-key indexes, which can be customized based on specific data access patterns. MongoDB indexes all fields in the documents with primary and secondary indices to optimize query performance. This ensures that queries are executed faster, resulting in a more efficient search process.

### 2. Replication

MongoDB's replication feature allows for copies of data to be stored on multiple servers, increasing availability and redundancy. A replica set can consist of two or more copies of the data, with each set being able to act as the primary or secondary replica. The primary replica is responsible for interacting with the client and executing read/write operations, while the secondary replica is a copy of the data on the primary replica. If the primary replica fails, the secondary replica automatically takes over and becomes the primary server, ensuring that data remains available.

### 3.Aggregation

MongoDB offers powerful aggregation capabilities that allow businesses to perform sophisticated data analysis and reporting. The aggregation framework supports three different methods: the aggregation pipeline, map-reduce functions, and single-purpose aggregation methods. With these methods, it is possible to perform operations on grouped data and receive a single or computed result. The aggregation framework provides several operations, including filtering, grouping, sorting, and aggregation calculation, which make complex data analysis tasks easier without requiring the creation of complex SQL queries.

### Scalability and sharding

MongoDB can extend horizontally across several servers and is made to manage massive amounts of data. When the amount of data and users rise, it can handle an increasing load thanks to built-in _sharding_ and _replication_ features. Therefore, companies can start small with a single server and then grow to include more servers as their data needs increase.

### Document-oriented

- The document-oriented approach of MongoDB is one of its key characteristics. MongoDB stores data in collections of documents as opposed to the tables that typical relational databases use to store data. Each document is an object that resembles JSON and comprises a collection of key-value pairs that may be nested. Because of this, complex data structures can be stored and queried with greater ease than with conventional relational databases.

- Each database contains a collection which contains documents. And each document can be different, with variations in number of fields and size.
- The documents structure can be familiar to developers, as they are constructed like objects.

### Query Language

Supports search by field, range queries and by regular expression searches. MongoDb's query language has support for ad-hoc queries in real time, which means it can create and execute queries on the fly, without having predefined structures and schemas. This is possible because MongoDB is schema-less

example:
![Image of MongoDB](https://studyopedia.com/wp-content/uploads/2021/06/MongoDB-example.png)

lets take the image above as an example of a document within a collection of "employees". if we wanted to retreive any employees in marketing we could do this:

```js
db.employees.find({ deptname: "marketing" });
```

here we have added a query for all employees in marketing, without ever predefining any schemas.

### ACID (Atomicity, Consistency, Isolation, Durability) (v.4.0+)

MongoDB data model allows data to be stored in a single document, which doesn't require a multi-document transaction. But since version 4.0 MongoDB has had support for _transactions_, and MongoDB now supports multi-document ACID transactions. A transaction is a group of database operations that will only succeeds if all the operations within the transactions succeeds. This can impact a single record or multiple records. The ACID transactions gives a guarantee that the database will be in a consistent state after running a set of operations.

There are some weaknesses to ACID in MongoDB. One is that the database needs to "lock" the resources involved to prevent writes from interfering with one another. So if more than one tries to write in the same data, they can be stuck and have to wait for the current edit to be finished. There is a performance cost to multi-document transactions. Limit transactions to 1 000 document modifications.

## Strength & Weaknesses

| Pros                                                        | Cons                                                      |
| ----------------------------------------------------------- | --------------------------------------------------------- |
| Scalability, performance, and flexibility                   | Not as developed as more established relational databases |
| Simple storage and querying of complex data structures      | Limited support and community help                        |
| Easy integration with popular programming languages         | More difficult query language compared to SQL             |
| Schema-less                                                 | Uses a lot of memory for data storage                     |
| Flexible                                                    | Security concerns                                         |
| High-performance                                            | Joining documents can be challenging                      |
| Replication for reliability                                 | Limited data size (16MB)                                  |
| Multiple official drivers for popular programming languages | Nesting above 100 levels is not supported                 |
| Wide range of functions for data analysis and reporting     |                                                           |
| Developer-friendly                                          |                                                           |

## Market Comparison

CouchDB is also a NoSQL document oriented database. The design favors availability and consistency. The documents are JSON based and are stored in databases. The software can be installed as single instance or a cluster of instances, this makes it durable and gives it give availability.

CouchDB and MongoDB compared on some key features:

#### Data Model

- MongoDB: stores the data in BSON format - documents gets grouped in databases and collections and are returned as JSON. They support a large amount of data types, including: strings, numbers, geo data, dates, arrays, decimal, nested objects, binary data.
- CouchDB: stores JSON documents. They only support data types like: string, numbers, arrays, objects and booleans.

#### Indexing

- MongoDB: indexes are supported in many different types: Compound, Text, Geo, Wild Card, TTL, and Partial.
- CouchDB: indexing is limited, and for some workloads it requires a "design document" definition.

#### Query Language

- MongoDB: Uses their own query language, MongoDB Query Language (MQL). Designed for easy use for developers.
- CouchDB: Uses HTTP protocol for API, javascript.

#### Availability and Scalability

- MongoDB: Using replica and sharding mechanisms. Replica in short: Makes copies of the document so when primary fails, secondary will become primary. Makes it fault tolerant. Sharding in short: Makes it easy to scale collections over replica sets, geo-zone sharding makes it easy to manage data.
- CouchDB: Also uses a concept of replica and sharding. Replica in short: Makes copies of the documents, which makes this fault tolerant, but each "node" is also the shard, the sharding is a automated mechanism making it not possible for the user to define keys or groupings.

This comparison is created with the help of <a href="https://www.mongodb.com/compare/couchdb-vs-mongodb"> MongoDBs own comparison</a>, and <a href="https://couchdb.apache.org/"> CouchDBs homepage </a>.

## Summary

In conclusion, MongoDB is a potent NoSQL database with several advantages for businesses that must store and analyse massive amounts of data. Modern applications that call for advanced data modelling and analysis can benefit from its flexibility, scalability, and performance. However, some businesses may find its inexperience, lack of transaction support, and sophisticated query language to be a detriment. When choosing to use MongoDB as your primary database system, it's crucial to consider these advantages and disadvantages.

## references

this case-study is a consolidation between two prevously written case-studies:

- [case study](./archive/mongoDB-case-study-Jenfer93.md) by [Jenfer93](https://github.com/Jenfer93)
- [case study](./archive/mongodb-case-study-oyvind-meldahl.md) by [ovind-meldahl](https://github.com/oyvind-meldahl)

https://www.mongodb.com/what-is-mongodb/features
