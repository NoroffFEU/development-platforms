---
title: Apache Cassandra Case Study
keywords: development platforms, apache cassandra, database
tags: Development Platforms, Apache Cassandra, Database
sidebar: development-platforms
permalink:development-platforms/apache-cassandra.html
folder:development-platforms
---
# Apache Cassandra 
## Introduction
Cassandra, also known as Apache Cassandra, is a free and open-source NoSQL database. It is based on a distributed architecture which makes it scalable, very reliable and able to handle large amounts of data across multiple commodity servers. 
It was released in 2008, and is now used by big companies such as Apple, Netflix, Twitter and thousands of other clients for purposes such as content management, e-commerce and more.  

## Brief history
Cassandra was first developed in 2008 by Avinash Lakshman and Prashant Malik to power Facebooks inbox search feature. It was made open-source not long after, and then it became an Apache Incubator project. Since 2010 it has been a top-level project of Apache. 

### Version history
2010-2015 – Nine versions were released over 5 years, from 0.6 to 2.2. These are no longer supported. The release changes included adding support for integrated caching, adding the Cassandra Query Language (CQL), adding clustering across virtual nodes and other improvements. 

2015-2021 – Over these three years versions 3.0, 3.11 and 4.0 were released. These versions are still supported to this day. 

2022 – The latest version, version 4.1, came out December 13 of 2022.

## Features
Cassandra has many key features that makes it so widely used around the world. These are:

### Open-source
Cassandra is free and open-source, making it publicly accessible for anyone who wants to use it. This is probably also why it is so popular among both big and small companies. 

### Distributed architecture and replicability
The fact that Cassandra is based on a distributed architecture means that the system is made up of a cluster of nodes. The nodes are all of the same significance, and data is replicated across nodes. If one node goes down, either permanently or in periods, it won’t lead to any data loss. This means that the data of the companies using Cassandra won’t get lost or accidentally deleted, making it a very trusted database management system. 

### Horizontal scalability
Due to the distributed architecture, clients can easily extend or shrink their need for space to store data. This is done by adding or removing nodes, and there is no down-time, so the users would not notice if there were any problems with nodes. 

## Strengths
Cassandras strengths lies in its distributed architecture, scalability and partitioning system. The nodes represent a single instance of Cassandra, and they can be organized into nodes in clusters called a datacenters. The nodes communicate via a protocol called Gossip and this is called peer-to-peer communication because all the nodes are of equal importance and they have the same functionality. Since the data can be replicated across nodes, this way of organizing data eliminates a single point of failure, and users will automatically be routed to a healthy node containing the data they need. 

The scalability in Cassandra makes it a good system for companies in e-commerce and social media. Here there can be big changes in traffic on an application or site depending on different variables, and the need to store data can change depending on traffic. This can be a time-consuming and costly process, but with Cassandra it is easily done by just adding more nodes. 

Cassandra is also able to handle and store large amounts of data due to its partitioning system. This is a system where a partition key determines where the first copy of the data is stored, and how it is retrieved. 
Other strengths of Cassandra include the Cassandra Query Language. This is fairly similar to regular SQL, making it easy for developers to learn. CQL also stores data in tables and columns, and many of the interactions and data types are the same for both languages. There are however some differences, like every query must have a partition key defined in CQL, but the learning curve is easy. 

## Weaknesses
### Acid compliant
Since Cassandra is a NoSQL database it does not support ACID (atomicity, consistency, isolation, durability) transactions. So it cannot guarantee full data integrity. 
### Other 
Cassandra also has some other weaknesses having to do with querying, storage and data modelling. For example, there is no joins support in Cassandra like one would have in relational databases. This leads to a bit more cumbersome way of trying to achieve the same action, and this again leads to having to do more work. 

One also can have latency issues because Cassandra handles large amounts of data and requests, and due to the data model, the same data may be stored multiple times. 

## Comparison
If one compares Cassandra to another NoSQL database such as MongoDB you can see many similarities and differences. They are both open-source, they both are compatible with Windows, MacOS and Linux, they are both well-established. But they do however differ on some areas. They have a slightly different structure, where Cassandra uses rows and columns and MongoDB uses a data-oriented model. Cassandra also offers better availability and scalability due to its multiple master modes, where MongoDB uses a single master node. Cassandra also has its own query language. 

In terms of use cases, Cassandra is better suited if the need for scalability is high, in for example e-commerce. And if you need to run real-time analytics, for example in working with mobile apps, MongoDB is the best option to use. 

## Summary
Apache Cassandra is a NoSQL database released in 2008, and later made free and open-source. It is a database known for its distributed architecture, and some of its strengths are its scalability and availability. It is able to handle large amounts of data, and therefore it is a popular database used by big companies such as Apple, Netflix and Twitter.  

## Credits
-	Emilie Herrera Thomsen (ehteht487)

## References
-	https://cassandra.apache.org/_/cassandra-basics.html
-	https://www.youtube.com/watch?v=ziq7FUKpCS8&t=2s&ab_channel=DataStaxDevelopers
-	https://en.wikipedia.org/wiki/Apache_Cassandra
-	https://www.spiceworks.com/tech/big-data/articles/what-is-cassandra/
-	https://www.datastax.com/what-is/cassandra
-	https://alronz.github.io/Factors-Influencing-NoSQL-Adoption/site/Cassandra/Results/Strengths%20and%20Weaknesses/
-	https://www.simplilearn.com/cassandra-vs-mongodb-article
-	https://www.simplilearn.com/cassandra-vs-mongodb-article







