---
title: MongoDB Product Case Study
keywords: development platforms, MongoDB project, NoSQL 
tags: Development Platforms, MongoDB Project, NoSQL
sidebar: development-platforms
permalink: development-platforms/mongoDB.html
folder: development-platforms
---

## Introduction to MongoDB 

MongoDB is a open source NoSQL database management program that has focus on being scalable and flexible, allowing for storaging of big amounts of data in a fast and agile database. 
MongoDB was created by the owners of a internet adverticement company, called DoubleClick, they struggled with the storage databases not being scalable and agil enough. 
Instead of using tabels and rows, like the SQL databases, MongoDB gathers information and data in collections and documents. 


## Brief History

In the earlie days, 1970s, NoSQL was just a suppliment to the SQL ways of storing data. But as the internet grew and evolved, so did the users, the records and the size of data being stored. The SQL had limitations, and they became more and more apparent. So adopting a more flexible and scalable way to store data was a priority. This formed the evolution of NoSQL, and from that MongoDB arrised. 

In the points below, I will list the startup points to MongoDB, but also the biggest releases added to the database throughout the years. 

- 2007 - MongoDB was founded by Dwight Merriman, Eliot Horrowitz and Kevin Ryan. 
- 2007 - MongoDB the work begins and it was initially developed as a component of a planning platform as a service platform. 
- 2009 - launched and shifted to a open-source development platform.
- 2015 - In the early 2015 MongoDB released their version 3.0 - With WiredTiger Storage Enigne, Ops Manager and 50-member replica sets. 
- 2015 - Later the same year the released their verion 3.2 - With Encrypted Storage Engine, In-Memory Storage Engine. They also released the MongoDB Compass and MongoDB Connector for BI. 
- 2016 - Released the version 3.4 - MongoDB Atlas released, same with Zoned sharding and MongoDB Connector for Apache Spark. 
- 2017 - Released the version 3.6 - Fully managed MongoDB Atlas. change streams to build always-on, real time, reactive applicaions. 
- 2018 - Released the version 4.0 - Offers multi-document ACID transactions. MongoDB Atlas Global Clusters and enterprise security controls, and MongoDB Charts. 
- 2019 - Released the version 4.2 - MongoDB Atlas Search and MongoDB Atlas Data Lake. And MongoDB Operator for Kubernetes and MongoDB Connector for Apache Kafka. 
- 2020 - Released the version 4.4 - MongoDB Atlas Online Archive, Realm & Sync, MongoDB Atlas multi-cloud clusters. 
- 2021-2022 - Released the version 5.0, and Rapid released - MongoDB 5.x, MongoDB Stable API, Atlas Serverless instances, MongoDB Atlas Data API
- 2022 - Released the version 6.0 - Atlas Serverless instances, Atlas Data API, Atlas CLI and Flexible Sync. Atlas Data Lase, Atlas Data Federation and Atlas SQL Interface. And Cluster-to-cluster sync. 

## MongoDBs main Features

* Indexing 
  - This makes the searching though the database less time consuming and makes it easier. This means that every field in the documents are indexed with primary and secondary indices. 
* Replication 
  - This means the database makes copies of the data and sends it to multiple servers. Which make the data more available and redundant, if one server fails, the data can be retreived from another server. A replica set can contain of two or more copies of the data, each set may act in the role of primary or secondary replica. Where it is the primary replica that serves as the main server and interacts with the client and performs the read/write operations. The secondary replica is a copy of the data of the primary using built-in replication. If the primary replica should fail, it automatically switches to the secondary, that then serves as the primary server. 
* Aggregation 
  - Makes it possible to perform operations on the grouped data, and then recieve a singel or computed result. This is thanks to the three different aggregation methods; aggregation pipeline, map-reduce function and a singel-purpose aggregation methods. 
* Scalability 
  - Through sharding you distribute the data to different servers, where the data is partitioned into chunks using a shard key. These chunks are evenly distibuted across shards thats placed on different servers. This way MongoDB provides horizontal scalability, which balances the load to keep the system up and running, and gives less chance of hardware failure. 
* Document-oriented
  - Each database contains a collection which contains documents. And each document can be different, with variations in number of fields and size. 
  - The documents structure can be familiar to developers, as they are constructed like objects.  
* Ad hoc queries 
  - Supports search by field, range queries and by regular expression searches. 


## Strengths

Discuss the product's strengths.
* It is schema-less - you don't need to design any schema. 
* It's flexible. 
* High-performing
* Available and Scalable. 
* It replications makes it less prone to hardware failures. 
* Programming languages - they have offical drives for multiple programming languages, both major and a large number of smaller once. 

## Weaknesses

Discuss the product's weaknesses.
* Uses a lot of memory for data storage. 
* Security may not be their strongest suite as there has been reports of MongoDB installations has been stolen, and servers has been held for ransome. Creators claim to have taken measures to upscale the security. 
* Joining - there isn't a simple, automated way to join documents. This can be done, but has to be done manually
* Limited data size - a document can't be more tha 16MB. 
* Limitation to nesting - it can nest, but there is no nesting above 100 levels. 

## Comparison

Compare the product to other products in the same category, if applicable.

## Summary

Summarise the content and highlight the relevance of the product to a web developer.

### Credits

- Jenny Marie Feragen (Jenfer93)

#### References

- List of video or links used during research
- https://www.techtarget.com/searchdatamanagement/definition/MongoDB
- https://www.mongodb.com/company 
- https://www.mongodb.com/evolved
- https://en.wikipedia.org/wiki/MongoDB
- https://webandcrafts.com/blog/mongodb-advantages-and-disadvantages/
