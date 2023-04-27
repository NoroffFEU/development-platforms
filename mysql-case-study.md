---
Title: MySQL Case Study
Author: Jøran Engelund
Tags: MySQL, Datastore, Database, Relational Database, Relational Database Management System, Open-Source
---

![mysql-official](https://user-images.githubusercontent.com/56642663/234897614-037394b5-4c2c-459d-9934-a4e7c9175933.svg)

## Introduction

MySQL is a Relational Database Management System (RDBMS), based on Structured Query Language (SQL). MySQL was originally developed and released on 23rd of May in 1995 by the swedish company MySQL AB, founded by David Axmark, Allan Larsson and Michael Widenius. MySQL was in 2008 bought by Sun Microsystems (later acquired by Oracle Corporation in 2010). MySQL is an open-source software that runs on most operating systems (OS).


## Brief History

- 1994: Original Development of MySQL by Widenious and Axmark
- 1995: First version released by MySQL AB, by David Axmark, Allan Larsson and Michael Widenius.
- 1998: First version for Windows OS was released for Windows 95 and NT
- 1998: Production release from www.mysql.com
- 2001: Production release, MySQL version 3.23 declared stable
- 2003: Production release, version 4.0: Set operations allow the results of multiple queries to be combined into a single result: (UNION, INTERSECT, EXCEPT)
- 2004: Production release, version 4.1: Subqueries, prepared statements, R-trees, B-trees
- 2005: Production release, version 5.0: Cursors, Stored Procedures, Triggers, Views, Database Transactions (XA transactions)
- 2008: MySQL AB acquired by Sun Microsystems
- 2008: Production release, version 5.1: Event scheduler, partitioning, plugin API, row-based replication, server log tables
- 2010: Sun Microsystems acquired by Oracle Corporation
- 2010: Michael Widenius forked MySQL the day Oracle announced the purchase of Sun Microsystems, launching MariaDB
- 2010: MySQL Server 5.5 generally available, with features and enchancementes included: 
- - Default storage engine InnoDB (supports transactions and referential integrity constraints)
- - Improved InnoDB I/O subsystem
- - Improved SMP support
- - Semisynchronous replication
- - SIGNAL and RESIGNAL statement in compliance with the SQL standard
- - Support for supplementary Unicode characters sets utf-16, utf-32 and utf-8mb4
- - New options for user-defined partitioning
- 2013: The general availability of MySQL version 5.6 announced, with new features like:
- - Performance improvements to the query optimizer
- - Higher transactional throughput in InnoDB
- - new NoSQL-style memcached APIs
- - Improvements to partitioningfor querying and managing very large tables
- - TIMESTAMP column type that correctly stores milliseconds
- - Improvements to replication
- - InnoDB storage engine included support for full-text search and improved group commit performance
- 2015: The general availability of MySQL 5.7: MySQL supports a native JSON data type defined by RFC 7159
- 2018: MySQL Server 8.0 announced, including:
- - NoSQL Document Store
- - Atomic and crash safe DDL sentences and JSON Extended syntax
- - JSON table functions
- - Improved sorting
- - Partial updates
- 2019: DB-Engines ranking declares MySQL DBMS

## Main Features

MySQL is as mentioned a relational database management system (RDBMS) based on the structural query language (SQL) and is one of the most popular languages in the market for accessing and managing table records. MySQL is also a open-source and free software under the GNU license.

The following section describes some of the most important features and characteristics of the MySQL Database Software:

**Internals and Portability:**
- Written in C and C++
- Tested with a broad range of different compilers
- Works on many different platforms
- For portability, configured using CMake
- Tested with Purify (commercial memory leakage detector) as well as with Valgrind (a GPL tool)
- Uses multi-layered server design with independent modules
- Designed to be fully multithreaded using kernel threads, to easily use multiple CPUs if they are available
- Provides transactional and non-transactional storage engines
- Uses very fast B-tree disk tables (MyISAM) with index compression
- Designed to make it relatively easy to add other storage engines. This is useful if you want to provide an SQL interface for an in-house database
- Executes very fast JOINs using an optimized nested-loop JOIN.
- Implements SQL functions using highly optimized class library that should be as fast as possible. Usually there is no memory allocation at all after query initialization
- Provides the server as a separate program for use in a client/server networked environment

**Data Types:**
- Fixed length and variable-length string types
- Many data types:
- - signed/unsigned integers 1, 2, 3, 4 and 8 bytes long
- - FLOAT, DOUBLE, CHAR, VARCHAR, BINARY, VARBINARY, TEXT, BLOB, DATE, TIME, DATETIME, TIMESTAMP, YEAR, SET, ENUM and OpenGIS spatial types

**Statements and Functions:**
- Full operator and function support in the SELECT list and WHERE clause of queries. For example:
```sql
mysql> SELECT CONCAT(first_name, ' ', last_name)
    -> FROM citizen
    -> WHERE income/dependents > 10000 AND age > 30;
```


Example feature table:

| Feature | Description |
| --- | --- |
| Example Feature | This feature does something for a specific reason. |
| Example Feature | This feature does something for a specific reason. |
| Example Feature | This feature does something for a specific reason. |

You may find this online tool useful for creating tables: https://www.tablesgenerator.com/markdown_tables

## Market Comparison

This section can be used to compare the advantages and disadvantages of your chosen tool to other similar tools. You may use subheadings, tables or bullet points to structure your description.

If you are writing about an open source tool, it may be a good idea to compare it to similar proprietary tools. Likewise, if you are writing about a proprietary tool, it may be a good idea to compare it to similar open source tools.

Similarly, a self hosted tool and a cloud based tool with a similar purpose may make for a good comparison.

## Getting Started

If applicable, describe how to get started with your chosen tool. By providing examples, this can help to demystify a tool and make it more accessible to beginners.

## Conclusion

This section can be used to summarize your findings. What are the main advantages and disadvantages of your chosen tool? What are the main use cases for this tool? What are the main limitations of this tool? What does the future look like for this tool?

## References

- [Example.com](https://example.com)
- *Good Examples* by John Doe, 1990
- The Example Podcast, Episode 1
- [Examples Explained](https://youtu.be/dQw4w9WgXcQ)

## Additional Resources

- [More about Examples](https://example.com)
- [Examples, the Full Course](https://youtu.be/dQw4w9WgXcQ)
