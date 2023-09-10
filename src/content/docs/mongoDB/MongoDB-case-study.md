---
title: MongoDB Case Study
author: Stian Daniel Hetzler Libeck <LSDsloth>
tags: MongoDB, case study, NoSQL
---

## Introduction

MongoDB was the first true "document style NoSQL" datastore to be released. It is still one of the most popular NoSQL databases. In this report we will be covering its history, applications, strengths and weaknesses.

## Brief History

MongoDB was developed by a company called 10gen. The name "Mongo" stands for "Extreamly large/humongous", reflecting the database's ability to handle enormous amounts of data efficiently. 
- 2007: 10gen starts the development of MongoDB.
- 2009: MongoDB goes open-source under the AGPL (Affero General Public License).
- 2013: 10gen changed their name to MongoDB, inc to reflect the company's focus on developing and supporting MongoDB as its flagship product.
- 2018: The software's license changed from AGPL 3.0 to SSPL.
- 2001: E.G. Group acquires Example Company for $1.23 billion.

## Main Features

Describe the primary purpose of the tool that you have selected. Which problems does it solve? Is there something unique about this tool? How can it be useful to developers?
MongoDB is a free-to-use open source NoSQL database management program
MongoDB feature table:

| Feature | Description |
| --- | --- |
| Ad-hoc queries | An ad hoc query is a short-lived command whose value depends on a variable. MongoDB supports field queries, range queries, and regular expression searches. Queries can return specific fields and also account for user-defined functions.  |
| Indexing | Fields in a MongoDB document can be indexed with primary and secondary indices or index. MongoDB offers a broad range of indices and features with language-specific sort orders that support complex access patterns to datasets. |
| Replication | MongoDB replication is the process of creating a copy of the same data set in more than one MongoDB server to prevent vulnerabilities such as server crash, service interruptions, or even hardware failure. This greatly increased data availability and stability. |
| Sharding | Sharding is a method for distributing or partitioning data across multiple machines by horizontally scaling. This is very usefull when one single machine can't handle the workload. Horizontal scaling refers to adding machines to share the data set and load. Horizontal scaling allows for near-limitless scaling to handle big data and intense workloads. |
| Database Triggers | Database Triggers allow you to execute server-side logic whenever a document is added, updated, or removed in a linked MongoDB Atlas cluster. Unlike SQL data triggers, which run on the database server, triggers run on a serverless compute layer that scales independently of the database server |

### MongoDB editions
MongoDB got three editions to choose from depending on your needs. There are MongoDB Community, MongoDB Enterprise and MongoDB Atlas.

#### MongoDB Community
MongoDB Community is an open-source, free-to-use database which is best suited for startups or small projects where all the features the other editions provide is not needed. Can be self-hosted on your own servers or cloud infrastructure.
- Document-oriented data storage
- Basic security features like authentication and authorization
- Horizontal scalability through sharding

#### MongoDB Enterprise
MongoDB Enterprise is the subscription-based edition. This is best suited for enterprise-grade workloads and development projects. Can be own hosted on your own infrastructure or cloud servers.
- Advanced security features like LDAP integration, auditing, and encryption at rest
- Support for Kerberos authentication
- Enhanced monitoring and management capabilities
- Professional support with guaranteed response times

#### MongoDB Atlas
MongoDB Atlas is a cloud based database designed to simplify database management by handling infrastructure tasks, such as backups, scaling, and maintenance.
- Cloud-based
- Automated backups and disaster recovery
- Security features like encryption, authentication, and role-based access control
- Support for multiple cloud providers (AWS, Azure, Google Cloud...)
- Automated updates and maintenance

## Getting Started

### MongoDB Atlas
There is two ways to get started with MongoDB Atlas.

__Atlas CLI__
1. Sign up for an Atlas account.
2. Authenticate with the new Atlas account.
3. Create one free database.
4. Load sample data into your Atlas database.
5. Add your IP address to your project's IP access list.
6. Create a MongoDB user for your Atlas database deployment.
7. Connect to your new database deployment using the MongoDB Shell, 
mongosh.

To see a step-by-step guide you can follow [this link](https://www.mongodb.com/docs/atlas/cli/stable/atlas-cli-getting-started/)

__Atlas UI__
1. Create an Atlas account
2. Deploy a free cluster
3. Add your connection IP address to your IP access list
4. Create a database user for your cluster
5. Connect to your cluster
6. Insert and view a document
7. Load sample data

To get more info about how to do this steps follow [this link](https://www.mongodb.com/docs/atlas/getting-started/)



## Conclusion

In this report we have learned about its history, What the different editions are. We have also learned how to get started with MongoDB. MongoDB is a versatile database, but it may not be the best choice for all scenarios. If you are designing an application where you need high availability, clustering, fast performance this is the perfect choice. In use cases that demand strict ACID compliance, complex joins, or require a fixed schema may be better served by traditional relational databases.

## References

- [MongoDB top 5 features](https://www.mongodb.com/what-is-mongodb/features)
- [MongoDB wikipedia](https://en.wikipedia.org/wiki/MongoDB#:~:text=History,-See%20also%3A%20MongoDB&text=The%20US%20software%20company%2010gen,its%20name%20to%20MongoDB%20Inc.)
- [Atlas CLI step-by-step guide](https://www.mongodb.com/docs/atlas/cli/stable/atlas-cli-getting-started/)
- [Atlas UI guide](https://www.mongodb.com/docs/atlas/getting-started/)
