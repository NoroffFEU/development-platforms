---
title: Case Study on MYSQL
keywords: development platforms,MYSQL
tags: Development Platforms, MYSQL,Database
sidebar: development-platforms
permalink: development-platforms
folder: development-platforms
---

## Introduction

In this research report the student chose MYSQL as a product. MYSQL is an open source relational database that runs on Structured Query Language(SQL) which is distributed and supported by Oracle Corporation. MYSQL runs on Linux,Windows and UNIX,MYSQL is an important component on open source stacks such as LAMP, WAMP,MAMP.
These stacks are built with a combination of  operating system,web server,database,script interpreter. 

RDBMS is the acronym for the Relational Database Management system. In DBMS, the data is stored as a file, whereas in RDBMS, data is stored in the form of tables. 
MYSQL is the one of the most popular RDBMS currently in use, many of the top websites in the world and countless corporate and consumer-facing web-based applications, including Facebook, Twitter and YouTube.


## Brief History

MySQL was founded in 1995 in Sweden. In 2000, MySQL went open source. In the year 2001, Marten Mickos was elected as the CEO of MySQL. It is written in C and C++. In 2008 Sun Microsystems acquired MYSQL.

### Timeline of MySQL
- MySQL was founded in 1995 in Sweden.
- First internal release on 23 May 1995.
- Windows version was released on 8 January 1998 for Windows 95 and NT
- In 2000, MySQL went open source, so it could be accessed and used by all.
- In the year 2001, Marten Mickos was elected as the CEO of MySQL.
- In the year 2002, MySQL launched its headquarters in the USA.
- In 2003, MySQL entered into a partnership with SAP, and many features were developed in MySQL keeping SAP in mind.
- In 2005, MySQL launched MySQL Network. Oracle purchased Innobase, which is the backend of MySQL's InnoDB storage.
- In 2008, MySQL was acquired by Sun Microsystems.
- In 2009, Sun Microsystems and Oracle entered into a definitive agreement under which Oracle acquired Sun Microsystems.

## Features
### Open Source
MYSQL is an open source RDBMS, which is freely available to use under General Public License [(GNU)](https://www.gnu.org/licenses/gpl-3.0.en.html).Source code is available on GitHub.
### Data Security 
MySQL provides a variety of security measures to protect sensitive data, including encryption, access control, and user management. MYSQL uses different types of encrypting tools to protect data. Tools such as Asymmetric Public Key Encryption/Decryption.
Access control has two stages in MYSQL; one is based on your user credentials the user provides,it will accept or reject the connection. The second is server Assumes that user can connect,and the server checks each statement user issue to decide whether you have sufficient privileges to perform it.
User management in MYSQL is that the admin user can create users and give different levels of access to the databases.


 ### Scalability
MySQL is designed to database vertically at lower cost by adding more resources as needed to support growing demands.

 ### High Performance
MySQL has been optimized for fast performance, making it a popular choice for high-traffic websites and applications.

### Cross-Platform Support 
MySQL can run on a variety of operating systems, such as Windows, Linux, and macOS, making it a flexible choice for an extensive range of environments.

 ### GUI support
There are plenty of GUI tools available in MySQL such as HeidiSQL,PHPMyAdmin & Navicat. These tools simplify the process of creating, designing, and administrating the databases.

### Huge Community
MYSQL has a large active community of users and developers available to support queries from all kinds of users.

### Support for NoSQL
MySQL delivers support for NoSQL with its JSON data type, allowing developers to store and manipulate JSON data directly in the database.

 ### Automation
MYSQL provides automation in the database with Triggers & Procedures.
 
 ### Replication
MySQL provides support for replication, allowing data to be easily shared and synced across multiple servers.

## Strengths

- MYSQL is a mostly used RDBMS database for web-based applications.
- It is designed to scale easily.Horizontally scalable on low cost.
- It is an open source software freely available to use.
- It supports data normalization by having a separate table and reduces data redundancy.
- By having constraints MYSQL prevents data inconsistency.
- It has triggers & procedures which can help automate the tasks and improve data management efficiency.
- Indexing makes faster data retrieval.

## Weaknesses
MYSQL has few weaknesses that should be discussed in this section, but can be avoided by planning well , proper configuration, using appropriate tools and technologies.

### Limited support on NoSQL
Since MYSQL is a relational database it has limited support to non relational databases. It is not the best choice with json and xml documents.

### Security 
Since MYSQL is an Open Source, it's easy for hackers to identify the loop-holes.


### Replication 
Replication could be a difficult process due to different versions and configurations across the servers.

### Advanced Analytics
MYSQL is not fitted for advanced data analysis such as data mining,machine learning and Artificial intelligence.



## Comparison

In this research report the student has chosen to compare MYSQL with MongoDB. These are two different databases that are covered in the course. MYSQL is a Relational database and MongoDB is a non-relational database.

### Scalability
In MYSQL vertical scaling is possible, which means it can handle large amounts of data by increasing processing power.Vertical scaling can be expensive.

In MongoDB horizontal scaling is possible.It means by adding more machines to the system you can increase the data and the traffic. This process is less expensive compared to the above but it can be more complex than the other.


### Data consistency 

In MYSQL high data consistency is maintained using ACID modal, which means the set of rules that makes sure transactions are processed reliably. This is very important in financial and e-commerce applications.

Whereas in MongoDB eventual consistency model is used. This results in short periods of data consistency. However MongoDb has few tools that developers can make use of to control the data consistency
 [read](https://www.mongodb.com/docs/manual/reference/read-concern/) preferences &  [write](https://www.mongodb.com/docs/manual/reference/write-concern/) concern. 

### Performance 
MYSQL stores data in a table format using a normalized data model. This is to make sure of the data redundancy and integrity of the data. CRUD process can be slow in MYSQL while dealing with large amounts of data. 

Since MongoDB stores unstructured data and follows a document-based storage approach its faster to [CRUD](https://www.sumologic.com/glossary/crud/) data than MYSQL.

### Data Format
In MYSQL, data is stored as rows and columns so that it is difficult to do any changes.

| ID | FirstName | LastName |
| -------- | -------- | -------- |
| 101|Joe |Doe |
| 102|David |Beckham |


Whereas in MongoDB the data is stored as json format. It is very easy to make changes to this data.

```javascript
{
  "ID": 101,
  "FirstName": "Jon",
  "LastName": "Doe"
}
```
### Flexibility
MYSQL uses a schema-based database which means it stores data in tables as rows and columns with a predefined structure relationship and constraints between tables. Once you define the schema it does not give you much flexibility to modify it, this will make sure a better data consistency which is critical for certain sectors.

MongoDB is a document oriented database which uses flexible schema with less data structure. Therefore its easy to modify fields & data.

## Summary

In this research report the student has chosen MYSQL as a product and writes about the product and compares the product with another competitor which is MongoDB. 

Whether to choose SQL or NoSQL databases for a project or company depends on various factors such as  the project nature,requirements and personal preferences of the developers.  Both MYSQL & MongoDB have their own strengths and weaknesses. 

MySQL is a well-structured, open-source database management system that is particularly suited for financial transactions and complex queries that involve table relationships. The research conducted in this report was primarily focused on an e-commerce project, and it suggests MySQL as a choice when compared to MongoDB.


### Credits

- Student Name (studentGitHubUsername)

#### References

- List of video or links used during research
- [History of MYSQL](https://en.wikipedia.org/wiki/MySQL)
- [Open source stacks](https://www.geeksforgeeks.org/what-is-the-difference-between-lamp-stack-mamp-stack-and-wamp-stack/)
- [About mysql](https://dev.mysql.com/doc/refman/8.0/en/what-is-mysql.html)
-[MQSQL security](https://satoricyber.com/mysql-security/mysql-security-common-threats-and-8-best-practices/)
- [MYSQL vs MongoDB](https://kinsta.com/blog/mongodb-vs-mysql/)