---
title: MongoDB Case Study
author: Stian Daniel Hetzler Libeck <LSDsloth>
tags: MongoDB, case study, NoSQL
---

## Introduction

MongoDB was the first true "document style NoSQL" datastore to be released. It is still one of the most popular NoSQL databases. In this report we will be covering its history, applications, strengths and weaknesses, and a comparative analysis within the NoSQL database category.

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

### MongoDB editions and how to get started
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
  ##### Getting started

## Market Comparison

This section can be used to compare the advantages and disadvantages of your chosen tool to other similar tools. You may use subheadings, tables or bullet points to structure your description.

If you are writing about an open source tool, it may be a good idea to compare it to similar proprietary tools. Likewise, if you are writing about a proprietary tool, it may be a good idea to compare it to similar open source tools.

Similarly, a self hosted tool and a cloud based tool with a similar purpose may make for a good comparison.

## Getting Started

If applicable, describe how to get started with your chosen tool. By providing examples, this can help to demystify a tool and make it more accessible to beginners.

## Conclusion

This section can be used to summarize your findings. What are the main advantages and disadvantages of your chosen tool? What are the main use cases for this tool? What are the main limitations of this tool? What does the future look like for this tool?

## References

- [MongoDB top 5 features](https://www.mongodb.com/what-is-mongodb/features)
- [MongoDB wikipedia](https://en.wikipedia.org/wiki/MongoDB#:~:text=History,-See%20also%3A%20MongoDB&text=The%20US%20software%20company%2010gen,its%20name%20to%20MongoDB%20Inc.)
## Additional Resources

- [More about Examples](https://example.com)
- [Examples, the Full Course](https://youtu.be/dQw4w9WgXcQ)
