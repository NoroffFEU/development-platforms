---
title: ScyllaDB case study
author: Marte B. Olsen
tags: scylla, nosql, case study, platform
---

## Introduction

ScyllaDB is an open-source NoSQL wide-column database. It was made to work with Apache Cassandra but was built C++ instead of Cassandra's preferred Java. It supports automatic sharding, replication and fault tolerance making it well-suited for applications that require high availability, scalability, and real-time performance.

As well as using Cassandra's protocols, ScyllaDB also implements Amazon's DynamoDB API. Zillow, Discord, Expedia, Ticketmaster, Comcast and Starbucks are just some of the users that use ScyllaDB as their database provider. 

## Brief History

- 2005: The two founders, Avi Kivity and Dor Laor, met at Qumranet.
- 2014: ScyllaDB was launched after the creators spent some time at RedHat.
- 2015: The company launches ScyllaDB beta.
- 2016: ScyllaDB 1.0 gets released. The company holds its first summit and opens their US Headquarters. 
- 2017: ScyllaDB Enterprise and ScyllaDB Open Source 2.0 launches.
- 2018: The company holds the 2018 Summit with guest speakers like Comcast, Grab and Kiwi.com. ScyllaDB Manager and Scylla DB Open Source 3.0 is released.
- 2019: The company expands their offering by launching ScyllaDB Cloud and ScyllaDB University.
- 2020: ScyllaDB 4.0 is launched, and the company adds the Amazon DynamoDB-compatible API to ScyllaDB Cloud.
- 2021: ScyllaDB Enterprise 2021 launches.
- 2022: ScyllaD establishes itself as a serious contender in the market by being ranked as one of the fastest growing companies in North America.

 ## Main Features

ScyllaDB Open Source focuses on high speed data processing and prioritizes high performance above all else. It's useful for any smaller company or developer looking for a database that can handle huge volumes of data with low latency and high throughput. ScyllaDB Enterprise is the premium version and is ideal for larger companies with more complex needs.

- **High Performance:** Handling millions of operations per second er node, the architecture leverages modern hardware to optimize CPU, mempry and storage use.
- **Automatic Sharding:** ScyllaDB automatically distributes data across nodes while using a consistant hashing mechanism. This distributes the data evenly and enables horizontal scaling with having to intervene manually.
- **Fault Tolerance:** ScyllaDB also replicates data automatically across mulitple nodes ensuring that if one node fails, the data is still accessible from other nodes.
- **Compatability:** Emerging as a drop-in replacement for Apache Cassandra means customers can easily migrate their workloads from Cassandra to ScyllaDB with minimal changes.
- **Enterprise Features:** ScyllaDB provides features like encryption at rest and in transit, in addition to authentication and access control to secure your sensitive data.

 ## Market Comparison

As ScyllaDB was inspired by Apache Cassandra it makes sense to compare the two to see how they measure up. We'll also take a look at MongoDB. 

| Feature               | Apache Cassandra                                     | ScyllaDB                            |MongoDB                              |
| --------------------- | ---------------------------------------------------- | ----------------------------------- | ----------------------------------- |
| Implemention Language | Java                                                 | C++                                 | C++ and Javascript                  |
| Performance           | High write throughput, high latency                  | High write throughput, low latency  | High read and write throughput, but varies with workload |
| Scalability           | Horizontally scalable (adds nodes easily)            | Horizontally scalable, linear scaling | Horizontally scalable, sharding required  |
| Fault Tolerance       | Built-in with replication and no single point of failure | Built-in with advanced features like shard-aware repair | Built-in with replica sets, but relies on a primary node |
| Query Language        | CQL (Cassandra Query Language)                       | CQL                                 | MongoDB Query Language (MQL), similar to JSON |
| Deployment Options    | On-premises, cloud, Kubernetes                       | On-premises, cloud, Kubernetes      | On-premises, cloud, Kubernetes      |
| Backup and Restore    | Requires external tools like `nodetool`              | Built-in backup and restore tools   | Built-in tools, including snapshots |
| Pricing               | Open-source, with paid support options               | Open-source, with paid Enterprise version and cloud services  | Open-source, with paid Enterprise version and cloud services |
| Ease of Use           | Moderate, requires tuning and expertise              | Easier than Cassandra, auto-tuning features | Easy to start with, especially for developers |


## Getting Started

Before getting started its a good idea to get an overview of your company or projects needs, and figuring out if the Open Source or Enterprise solution is right for you. You can take a look at the different packages [here](https://www.scylladb.com/pricing/#scylladb-cloud).

1. **Create an account** If you aren't an existing user, register an account at scylladb.com
2. **Make sure you meet the system requirements** Found [here](https://opensource.docs.scylladb.com/stable/getting-started/system-requirements.html)
3. **Download your desired version of [ScyllaDB](https://www.scylladb.com/download/#open-source) for the platform of your choice**
4. **Configure ScyllaDB** You can open the configuration file at "/etc/scylla/scylla.yaml" to adjust your settings like cluser name and data storage. Make sure to restart Scylla if you change any settings
5. **Now you can use your CLI to create a keyspace, table and insert data** You can find further intructions on how to use ScyllaDB [here](https://opensource.docs.scylladb.com/stable/getting-started/tutorials.html)

 ## Conclusion

All in all, ScyllaDB is no doubt a powerful tool if you're looking for a high performance database. With built-in C++ its designed to offer low latency and high throughput, which makes it great for demanding applications, but like with everything else it comes with limitations.

Learning to use ScyllaDB has a steep learning curve, while opting for MongoDB for example, can be easier to transition into if you're already familiar with JSON. But, once learned, ScyllaDB is easier to manage thanks to its many automated features. It's scalability options are easier as all you need to do is add more nodes without worrying about performance drops, which is ideal if your application needs to grow quickly.

Being most known for its speed, ScyllaDB handles heavy workloads with ease, and while still growing as a company, you may find smaller community support than it Cassandra and MongoDB. It is still an excellent choice as ScyllaDB's developers are actively working on new features, performance-improvements and expanding its capabilities. Just be prepared for the learning curve and ensure you have robust enough hardware to truly take advantage of all the things that make ScyllaDB a great choice. 

## References

- [ScyllaDB Wikipedia](https://en.wikipedia.org/wiki/ScyllaDB)
- [ScyllaDB docs](https://docs.scylladb.com/stable/)
- [ScyllaDB.com](https://www.scylladb.com/)
- [Ten reasons to use ScyllaDB](https://www.linkedin.com/pulse/ten-reasons-use-scylladb-abhilash-krishnan-nidqc/) by Abhilash Krishnan at LinkedIn
- [NoSQL Comparison: MongoDB vs ScyllaDB Part 1](https://benchant.com/blog/mongodb-vs-scylladb-comparison#conclusion-and-outlook)
- [NoSQL Comparison: MongoDB vs ScyllaDB Part 2](https://benchant.com/blog/mongodb-vs-scylladb-benchmark)
- [Benchmarking MongoDB vs ScyllaDB](https://scylladb.medium.com/benchmarking-mongodb-vs-scylladb-performance-scalability-cost-08e9fd3983be)
- [Unveiling the NoSQL Titans: ScyllaDB vs. Apache Cassandra](https://jeffrywilson.medium.com/unveiling-the-nosql-titans-scylladb-vs-d5e616ac9824)


## Additional Resources

- [Unleashing the Power of the New Cool Kid on the Database Block](https://medium.com/@gudise.ashok/scylladb-unleashing-the-power-of-the-new-cool-kid-in-the-database-block-c6632ddcfb50)
- [MongoDB Wikipedia](https://en.wikipedia.org/wiki/MongoDB)
- [Cassandra Wikipedia](https://en.wikipedia.org/wiki/Apache_Cassandra)
- [When to use ScyllaDB vs MongoDB](https://www.scylladb.com/2023/06/13/when-to-use-scylladb-vs-mongodb-lessons-learned-from-5-years-in-production/)
