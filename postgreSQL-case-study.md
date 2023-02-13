---
title: PostgreSQL Case Study
keywords: development platforms, postgreSQL, database, datastores
tags: Development Platforms, postgreSQL, database, datastores
sidebar: development-platforms
permalink: development-platforms/postgresql.html
folder: development-platforms
---

## Introduction

PostgreSQL is one of the most advanced open-source relational databases. It's been active in development for 30+ years and has earned a strong reputation for its reliability, feature robustness, and performance.

## Brief History

This ORDBMS which stands for Object Relational Database Management system is PostgreSQL which is taken from the POSTGRES package written at the University of California, Berkley. POSTGRES was used for different research and production application which include a financial data analysis system, a jet engine performance monitoring package, an asteroid tracking database, a medical information database, and several geographic information systems. It has also been used as an educational tool at several universities. 

### The Berkley POSTGRES Project

1986 - The implementation of POSTGRES began and the project, led by Professor Michael Stonebraker, was sponsored by the Defense Advanced Research Agency, the Army Research Office, the National Science Foundation, and ESL, Inc.

1987 - The first "demoware" system became operational.

1988 - The system was shown at the ACM-SIGMOD Conference.

1989 - Version 1 was released to a few external users.

1990 - Following a critique of the first rule system, the rule system was redesigned and Version 2 was released with the new rule system.

1991 - Version 3 appeared where it was added support for multiple storage managers, and improved query executor, and a rewritten rule system. 

1992 - POSTGRES became the primary data manager for the Sequoia 2000 scientific computing project.

1993 - The size of the external user community almost doubled. The Berkley POSTGRES Project officially ended with Version 4.2 because the maintenance of the prototype code took up large amounts of time that should have been devoted to database research.

### Postgres95

1994 - An SQL language interpreter was added by Andrew Yu and Jolly Chen, and Postgres95 which was its new name, was released to the web as an open-source descendant of the original POSTGRES. 
Performance and maintenance were improved, it ran faster, bugs were fixed, and got many enhancements.

### PostgreSQL

1996 - New name was implemented to PostgreSQL to reflect the relationship between the original POSTGRES and the more recent versions with SQL capability. 

## Features

PostgreSQL has a large list of features which consists of many relating to performance, security, programming extensions, and configurations.

Here are a few key features:
* Runs on most operating systems like Windows, Linux on all recent distributions, macOS, NetBSD, FreeBSD etc.
* PostgreSQL also supports a lot of data types;
     Besides the string, numeric, boolean, date, POSTGRES also supports enumerated, geometric, hstores, network adresses, binary, xml, json, array, uuid, monetary and more. 
* Table inheritance.
     Allows you to create a child table based on another table, where the child table will include all of the columns in the parent table.
* Asynchronous replication
     Asynchronous is the standard in PostgreSQL to replicate data. It's a reliable and easy way to distribute data making setups more failsafe. 
* Multi-version concurrency control(MVCC)
    MVCC is an advanced technique for improving database performance in a multi-user environment. 

Read more: https://www.postgresql.org/about/featurematrix/

## Strengths

### Open-source
PostgreSQL is an open-source database making it free to use which allows users to use, modify and implement as they want. Thus it has a strong and active community that has contributed to it's development. This type of community-driven development has resulted in a lot of participation from it's users. 

### Programming language support
In addition to being a free and an open-source software, it has support for writing functions(programming languages) such as:
    SQL, Python, Perl, Tcl, Java, R, Javascript, shell, and Lua.

### Extensibility
PostgreSQL is designed to be extensible. It allows you to define your own data types, index types, operators, functional languages, access methods etc, making PostgreSQL extremely programmable.  

### Scalability
Scalability is how a system/database can handle a growing amount of demands by adding resources, and PostgreSQL can do just that. It can handle large amounts of data and it scales up as the data grows. 

### ACID Compliant
PostgreSQL is reliable because it is ACID(Atomicity, Consistency, Isolation, and Durability) compliant meaning queries will maintain data integrity. POSTGRES is known for its rock solid referential and transactional integrity.

## Weaknesses

### Learning curve
Learning PostgreSQL can be a little hard, and it can take time to be good at it.

### Performance
Even though PostgreSQL is a very efficient database, it may not be as fast as some other databases in certain areas.

## Comparison

PostgreSQL VS MYSQL

Differences:
* PostgreSQL is an Object Relational Database Management System(ORDBMS) and MySQL is Relational Database Management System(RDBMS). Meaning in MySQL, all tables are interrelated, but PostgreSQL combines the characteristics of both ORDBMS and RDMBS so it doesn't only contain interrelated tables, but it also supports objects, classes, and inheritances.
* PostgreSQL supports modern application features such as JSON, XML etc, while MySQL only supports JSON.
* While PostgreSQL supports advanced data types such as arrays, hstore, and user-defined data types, MySQL only supports standard data types such as numeric, date and time, string, spatial and the JSON data type.
* PostgreSQL is maintained by developers who volunteer, while MySQL is maintained by Oracle Corporation.
* PostgreSQL is also fully ACID compliant while MySQL is ACID compliant only through InnoDB and NDB Cluster Storage engines. 
* In terms of how the learning curve is for these databases, PostgreSQL may be harder for beginners to learn compared to MySQL which is more user-friendly as takes less time to build a project from scratch.

Similarities:
* Both rely on SQL which enables tables to be joined using few lines of code.
* Both PostgreSQL and MySQL have communities to provide support to their users where they have many volunteers that devote their time to offer free advice, recommendation and support to users.
* On both DBMSs, you can use JSON for transporting and storing data, objects, and arrays.

## Summary

Summarise the content and highlight the relevance of the product to a web developer.

PostgreSQL, also known as Postgres, is a free and open-source Object Relational Database Management system with more than 30+ years of active development. It dates back to '80s when it was created by a computer science professor named Michael Stonebraker at the University of California, Berkley. It has then been renamed twice and now called PostgreSQL to signify the relationship between the original name and the use of SQL. It has many advanced features that safely store and scale the most complicated workloads. Though PostgreSQL has its strength with its many built-in features and more such as supporting many programming languages, being extensible, and handling large amount of data, it also has its challenges. PostgreSQL has a steep learning curve, making it hard for beginners and it also may be slower than other databases in certain workloads. 

### Credits

- Karla Mae Rabe(@Noizenne)

#### References

- https://www.postgresql.org
- https://en.wikipedia.org/wiki/PostgreSQL
- https://www.postgresqltutorial.com
- https://dev.mysql.com
- https://www.sql-workbench.eu/dbms_comparison.html
- https://www.linkedin.com/pulse/what-postgresql-introduction-advantages-disadvantages-ankita-sharda/
- https://hackr.io/blog/postgresql-vs-mysql
