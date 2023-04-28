---
Title: MySQL Case Study
Author: Jøran Engelund
Tags: MySQL, Datastore, Database, Relational Database, Relational Database Management System, Open-Source
---

## Table of Contents:
1. sad
    1a. asd

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

MySQL is as mentioned a relational database management system (RDBMS) based on the structural query language (SQL) and is one of the most popular RDBMS softwares in the market for accessing and managing table records. MySQL is also a open-source and free software under the GNU license.

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
- - `FLOAT`, `DOUBLE`, `CHAR`, `VARCHAR`, `BINARY`, `VARBINARY`, `TEXT`, `BLOB`, `DATE`, `TIME`, `DATETIME`, `TIMESTAMP`, `YEAR`, `SET`, `ENUM` and OpenGIS spatial types

**Statements and Functions:**
- Full operator and function support in the SELECT list and WHERE clause of queries. For example:
```sql
mysql> SELECT CONCAT(first_name, ' ', last_name)
    -> FROM citizen
    -> WHERE income/dependents > 10000 AND age > 30;
```
- Full support of SQL `GROUP BY` and `ORDER BY` clauses. Support for functions as `COUNT()`, `AVG()`, `STD()`, `SUM()`, `MAX()`, `MIN()`, and `GROUP CONCAT()`
- It supports `LEFT OUTER JOIN` and `RIGHT OUTER JOIN` with both standard SQL and ODBC (Open Database Connectivity) syntax
- Support `DELETE`, `INSERT`, `REPLACE`, and `UPDATE` to return the number of rows that were changed/affected, or to return the number of rows matched instead of setting a flag when connecting to the server
- Support for MySQL-specific `SHOW` statements that retrieve information about databases, storage engines, tables, and indexes. Support for the `INFORMATION_SCHEMA` database, implemented according to standard SQL.
- An `EXPLAIN` to show how the optimizer resolves a query
- Independence of function names from table or column names. For example, `ABS` is a valid column name. The only restriction is that for a function call no spaces are permitted between the function name and the `()` that follows it
- Users can refer to tables from different databases in the same statement

**Security:**
- MySQL consists of a solid data security layer that protects sensitive data from intruders
- A privilege and password system that is very flexible and secure, and that enables host-based verification
- Password security by encryption of all password traffic when you connect to a server.

**Scalability and Limits:**
- Support for large databases. MySQL Server offers databases that contains 50 million records. There are also users who use MySQL Server with 200,000 tables and about 5,000,000,000 rows
- Support for up to 64 indexes per table. Each index may consist of 1 to 16 columns or parts of columns. The maximum index width of `InnoDB` tables is either 767 bytes or 3072 bytes. The maximum index width for `MyISAM` tables is 1000 bytes. Also, an index may use prefix of a column for `CHAR`, `VARCHAR`, `BLOB`, or `TEXT` column types

**Connectivity:**
- Clients can connect to MySQL Server using several protocols:
- - Clients can connect using TCP/IP sockets on any platform
- - On Windows systems, clients can connect using named pipes if the server is started with `named_pipe` system variable enabled
- - Windows servers also support shared-memory connections if started with the `shared_memory` system variabe enabled
- - Clients can connect through shared memory by using the `--protocol=memory` option
- - on Unix systems, clients can connect using Unix domain socket files
- MySQL client programs can be written in many languages. A client library written in `C` is available for clients written in `C` or `C++`, or for any language that provides `C` bindings
- APIs for `C`, `C++`, `Eiffel`, `Java`, `Perl`, `PHP`, `Phyton`, `Ruby` and `TcI` are available, enabling MySQL clients to be written in many languages
- The connector/ODBC (MyODBC) interface provides MySQL support for client programs that use ODBC (Open Database Connectivity) connections. 
- - For example, you can use MS Access to connect your MySQL Server. Clients can be run on Windows or Unix.
- The Connector/J interface provides MySQL support for Java client programs that use JDBC connections. Clients can be run on Windows or Unix
- MySQL Connector/NET enables developers to easily create `.NET` applications that require secure, high-performance data connectivity with MySQL. It implements the required `ADO.NET` interfaces and integrates into `ADO.NET` aware tools. Developers can build applications using their choice of `.NET` languages
- MySQL Connector/NET is a fully managed `ADO.NET` driver written 100% in pure `C#`

**Localization:**
- The MySQL Server can provide error messages to clients in many languages
- MySQL has full support for several different character sets, including `latin1(cp1252)`, `german`, `big5`, `ujis`, several Unicode character sets, and more
- - for example, the scandinavian characters `"Å"`, `"Ä"`, `Ø`, and `Ö` are permitted in the table and column names
- All data is saved in the chosen character set
- Sorting and comparisons are done according to the default character set and collation. It is possible to change this when the MySQL Server is started
- The server time zone can be changed dynamically, and individual clients can specify their own time zone

**Clients and Tools:**

MySQL includes several client and utility programs. These include both command-line programs such as `mysqldump` and `mysqladmin`, and graphical programs such as MySQL Workbench. MySQL Server also has an built-in support for SQL statements to check, optimize, and repair tables. These statements are available from the command-line utility for performing these operations on `MyISAM` tables. MySQL programs can aswell be invoked with the `--help` or `-?` option to obtain online assistance


## Limitations
When users use storage engines other than the default of InnoDB, MySQL doesn't comply with the full SQL standard for some of the implemented functionality, including foreign key references. Check constraints are also parsed but ignored by all storage engines before MySQL version 8.0.15.


Up until MySQL 5.7, triggers are limited to one per action / timing, meaning that at most one trigger can be defined to be executed after an `INSERT` operation, and one before `INSERT` on the same table.


MySQL database's inbuilt function like `UNIX_TIMESTAMP()` will also return 0 after 03:14:07 UTC on the 19th of January 2038. Recently, there had been an attempt to solve this problem which had been assigned to the internal queue.


## Market Comparison


![mysql-vs-mariadb](https://user-images.githubusercontent.com/56642663/235160360-28a7f502-86ce-4564-b8d2-da54c2464b02.png)

### What is MariaDB?
MariaDB is as MySQL, an open-source RDBMS, and also a fork from MySQL created in 2009 when Oracle acquired Sun Microsystems and in that process, gained control over MySQL. MariaDB is an backward-compatible improved version of MySQL. It comes with various inbuilt capable features and many security and execution improvements that's missing in MySQL. MariaDB supports the same features that MySQL does but also offers additional ones too.

Replacing MySQL, MariaDB has become a seamless process for most applications and CMS (Content Management Systems), especially WordPress. The existing software, from popular CMS tools like WordPress, Joomla, and Drupal, to applications like phpMyAdmin, works out of the box and the actual data can be exported/imported without any changes

|   	|  **MariaDB** 	| **MySQL**  	|
|---	|---	|---	|
| **Storage Engines**  	| MariaDB supports a wide variety of storage engines like Blackhole, CSV, XtraDB, Aria, InnoDB, Archive, MariaDB ColumnStore, Connect, Cassandra Storage Engine, etc.  	| MySQL offer fewer alternatives for storage engine compared to MariaDB like example: MyISAM, Merge, Federated, InnoDB, Archive, Memory, CSV, Blackhole  	|
|   **Oracle Database Compatability**	| MariaDB is the only open-source database compatible with Oracle Database stored procedures, sequences, data types, etc.  	| MySQL has some basic Oracle features compatibility  	|
| **Speed / Performance**  	| MariaDB is faster when it comes to replication and performing queries. Also supports a high concurrent number of connections without much performance degradation  	| MySQL does have the ability to thread pool. It is however only available in the Enterprise Edition of MySQL. This means that the free-to-use community version doesn't include thread pooling  	|
| **Replication**  	| MariaDB allows Master to Slave data transfer and enables Master to Master replication. This provides administrators with added functionality to work with multiple Master databases at once  	| MySQL offers asynchronous replication, which means it is a one-way process  	|
| **Clustering**   	| MariaDB uses the Galera Cluster to perform advanced replication for multi-master nodes. It is built by default in MariaDB and can be easily enabled by activating the configuration parameters   	| MySQL uses a specialized cluster technology called MySQL Cluster. This is a separate product from the MySQL Community/Enterprise Editions. It provides another storage engine to MySQL, distributing records over multiple hosts by a key hash
| **Support**  	| MariaDB provides a top-quality support option that offers 24/7 technical support throughout the year. In addition, their engineer are quite skilled in both MariaDB and MySQL, which helps helps alot if the user decides to switch between the two databases  	| MySQL offers an enterprise version of its product that includes complimentary security features and 24/ support. Backed by the Oracle Corporation, MySQL is an excellent option for business customers looking for steady improvements, consistent updates, and enterprise-level support  	|
| **Security**   	| MariaDB offers three password authentication plugins, which gives the users more security in their database management  	| MySQL comes with the validate_password component, which is used to verify and increase password security. MySQL also comes with a privilege and password system that is very flexible and secure, that enables host-based verification. It also offers password security by encryption of all password traffic when you connect to a server.
| **Encryption**   	| MariaDB supports binary log encryption and temporary table encryption  	| MySQL gives the authentication to configure and encrypts redo/undo logs, while it doesn't encrypt temporary tablespace or binary logs  	|
| **Community & License**  	| MariaDB provides a complete package  	| MySQL comes with certain limitations. The community edition is missing capabilities like Threadpool, which significantly impairs the database and query speed 	|

![Thread-Pooling](https://user-images.githubusercontent.com/56642663/235178708-c7df5fc0-a1d9-4f7e-8d69-2216be88eb9c.png)

---

#### Conclusion of Market Comparison:

Both MariaDB and MySQL offers a range of features and benefits for the users. MariaDB has an edge over MySQL when it comes to storage engine alternatives, replication, clustering and compatibility with Oracle Databases. MariaDB also offers high speed / performance and security features, with the three password authentication plugins and the support for binary log encryption. However, MySQL is being backed by Oracle Corporation, which provides the users with a enterprise-level support and consistent updates, which in turns makes it a solid choice for business customers looking for a steady RDBMS. While MariaDB offers a complete package in regards of Community & License, the MySQL's community edition has some certain limitations that in the end could impact the database and query speed. In the end, the choice between MySQL and MariaDB will depend on the users specific needs, like performance, scalability, support and the compatibility with other tools  

## Getting Started with MySQL

#### Installing and Starting MySQL:
**Linux:**
- The easiest way to install MySQL is to use the [MySQL repositories](https://dev.mysql.com/downloads/)

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
