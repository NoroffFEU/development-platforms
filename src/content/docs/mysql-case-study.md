---
title: MySQL Case Study
keywords: development platforms, Case Study, Database
tags: MySQL, Datastore, Database, Relational Database, Relational Database Management System, Open-Source
---

## Table of Contents:

1. **[Introduction](https://github.com/JoranEngelund/development-platforms/blob/mysql-case-study/mysql-case-study.md#introduction)**
2. **[Brief History](https://github.com/JoranEngelund/development-platforms/blob/mysql-case-study/mysql-case-study.md#brief-history)**
3. **[Main Features:](https://github.com/JoranEngelund/development-platforms/blob/mysql-case-study/mysql-case-study.md#main-features)**

- - 3a. _[Internals and Portability](https://github.com/JoranEngelund/development-platforms/blob/mysql-case-study/mysql-case-study.md#internals-and-portability)_
- - 3b. _[Data Types](https://github.com/JoranEngelund/development-platforms/blob/mysql-case-study/mysql-case-study.md#data-types)_
- - 3c. _[Statements and Functions](https://github.com/JoranEngelund/development-platforms/blob/mysql-case-study/mysql-case-study.md#statements-and-functions)_
- - 3d. _[Security](https://github.com/JoranEngelund/development-platforms/blob/mysql-case-study/mysql-case-study.md#security)_
- - 3e. _[Scalability and Limits](https://github.com/JoranEngelund/development-platforms/blob/mysql-case-study/mysql-case-study.md#scalability-and-limits)_
- - 3f. _[Connectivity](https://github.com/JoranEngelund/development-platforms/blob/mysql-case-study/mysql-case-study.md#connectivity)_
- - 3g. _[Localization](https://github.com/JoranEngelund/development-platforms/blob/mysql-case-study/mysql-case-study.md#localization)_
- - 3h. _[Clients and Tools](https://github.com/JoranEngelund/development-platforms/blob/mysql-case-study/mysql-case-study.md#clients-and-tools)_

4. **[Limitations](https://github.com/JoranEngelund/development-platforms/blob/mysql-case-study/mysql-case-study.md#limitations)**
5. **[Market Comparison:](https://github.com/JoranEngelund/development-platforms/blob/mysql-case-study/mysql-case-study.md#market-comparison)**

- - 5a. _[What is MariaDB?](https://github.com/JoranEngelund/development-platforms/blob/mysql-case-study/mysql-case-study.md#what-is-mariadb)_
- - 5b. _[Comparison](https://github.com/JoranEngelund/development-platforms/blob/mysql-case-study/mysql-case-study.md#comparison)_
- - 5c. _[Conclusion of Market Comparison](https://github.com/JoranEngelund/development-platforms/blob/mysql-case-study/mysql-case-study.md#conclusion-of-market-comparison)_

6. **[Getting Started with MySQL:](https://github.com/JoranEngelund/development-platforms/blob/mysql-case-study/mysql-case-study.md#getting-started-with-mysql)**

- - 6a. _[Installing and Starting MySQL:](https://github.com/JoranEngelund/development-platforms/blob/mysql-case-study/mysql-case-study.md#installing-and-starting-mysql)_
- - - 6a.1 _[Linux](https://github.com/JoranEngelund/development-platforms/blob/mysql-case-study/mysql-case-study.md#linux)_
- - - 6a.2 _[Microsoft Windows](https://github.com/JoranEngelund/development-platforms/blob/mysql-case-study/mysql-case-study.md#microsoft-windows)_
- - - 6a.3 _[macOS](https://github.com/JoranEngelund/development-platforms/blob/mysql-case-study/mysql-case-study.md#macos)_
- - - 6a.4 _[Other Platforms](https://github.com/JoranEngelund/development-platforms/blob/mysql-case-study/mysql-case-study.md#other-platforms)_
- - 6b. _[Connecting to the MySQL Server with the msql client:](https://github.com/JoranEngelund/development-platforms/blob/mysql-case-study/mysql-case-study.md#connecting-to-the-mysql-server-with-the-mysql-client)_
- - - 6b.1 _[Linux](https://github.com/JoranEngelund/development-platforms/blob/mysql-case-study/mysql-case-study.md#for-linux)_
- - - 6b.2 _[Windows](https://github.com/JoranEngelund/development-platforms/blob/mysql-case-study/mysql-case-study.md#for-windows)_
- - 6c. _[Some Basic Operations with MySQL:](https://github.com/JoranEngelund/development-platforms/blob/mysql-case-study/mysql-case-study.md#some-basic-operations-with-mysql)_
- - - 6c.1 _[Creating a new database](https://github.com/JoranEngelund/development-platforms/blob/mysql-case-study/mysql-case-study.md#creating-a-new-database)_
- - - 6c.2 _[Showing existing databases](https://github.com/JoranEngelund/development-platforms/blob/mysql-case-study/mysql-case-study.md#showing-existing-databases)_

7. **[Conclusion](https://github.com/JoranEngelund/development-platforms/blob/mysql-case-study/mysql-case-study.md#conclusion)**
8. **[References](https://github.com/JoranEngelund/development-platforms/blob/mysql-case-study/mysql-case-study.md#references)**

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

MySQL is as mentioned a relational database management system (RDBMS) based on the structural query language (SQL) and is one of the most popular RDBMS softwares in the market for accessing and managing table records. MySQL is also a open-source and free software under the GNU license.

The following section describes some of the most important features and characteristics of the MySQL Database Software:

#### Internals and Portability:

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

#### Data Types:

- Fixed length and variable-length string types
- Many data types:
- - signed/unsigned integers 1, 2, 3, 4 and 8 bytes long
- - `FLOAT`, `DOUBLE`, `CHAR`, `VARCHAR`, `BINARY`, `VARBINARY`, `TEXT`, `BLOB`, `DATE`, `TIME`, `DATETIME`, `TIMESTAMP`, `YEAR`, `SET`, `ENUM` and OpenGIS spatial types

#### Statements and Functions:

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

#### Security:

- MySQL consists of a solid data security layer that protects sensitive data from intruders
- A privilege and password system that is very flexible and secure, and that enables host-based verification
- Password security by encryption of all password traffic when you connect to a server.

#### Scalability and Limits:

- Support for large databases. MySQL Server offers databases that contains 50 million records. There are also users who use MySQL Server with 200,000 tables and about 5,000,000,000 rows
- Support for up to 64 indexes per table. Each index may consist of 1 to 16 columns or parts of columns. The maximum index width of `InnoDB` tables is either 767 bytes or 3072 bytes. The maximum index width for `MyISAM` tables is 1000 bytes. Also, an index may use prefix of a column for `CHAR`, `VARCHAR`, `BLOB`, or `TEXT` column types

#### Connectivity:

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

#### Localization:

- The MySQL Server can provide error messages to clients in many languages
- MySQL has full support for several different character sets, including `latin1(cp1252)`, `german`, `big5`, `ujis`, several Unicode character sets, and more
- - for example, the scandinavian characters `"Å"`, `"Ä"`, `Ø`, and `Ö` are permitted in the table and column names
- All data is saved in the chosen character set
- Sorting and comparisons are done according to the default character set and collation. It is possible to change this when the MySQL Server is started
- The server time zone can be changed dynamically, and individual clients can specify their own time zone

#### Clients and Tools:

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

#### Comparison:

|                                   | **MariaDB**                                                                                                                                                                                                                                                   | **MySQL**                                                                                                                                                                                                                                                                                                                                    |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Storage Engines**               | MariaDB supports a wide variety of storage engines like Blackhole, CSV, XtraDB, Aria, InnoDB, Archive, MariaDB ColumnStore, Connect, Cassandra Storage Engine, etc.                                                                                           | MySQL offer fewer alternatives for storage engine compared to MariaDB like example: MyISAM, Merge, Federated, InnoDB, Archive, Memory, CSV, Blackhole                                                                                                                                                                                        |
| **Oracle Database Compatability** | MariaDB is the only open-source database compatible with Oracle Database stored procedures, sequences, data types, etc.                                                                                                                                       | MySQL has some basic Oracle features compatibility                                                                                                                                                                                                                                                                                           |
| **Speed / Performance**           | MariaDB is faster when it comes to replication and performing queries. Also supports a high concurrent number of connections without much performance degradation                                                                                             | MySQL does have the ability to thread pool. It is however only available in the Enterprise Edition of MySQL. This means that the free-to-use community version doesn't include thread pooling                                                                                                                                                |
| **Replication**                   | MariaDB allows Master to Slave data transfer and enables Master to Master replication. This provides administrators with added functionality to work with multiple Master databases at once                                                                   | MySQL offers asynchronous replication, which means it is a one-way process                                                                                                                                                                                                                                                                   |
| **Clustering**                    | MariaDB uses the Galera Cluster to perform advanced replication for multi-master nodes. It is built by default in MariaDB and can be easily enabled by activating the configuration parameters                                                                | MySQL uses a specialized cluster technology called MySQL Cluster. This is a separate product from the MySQL Community/Enterprise Editions. It provides another storage engine to MySQL, distributing records over multiple hosts by a key hash                                                                                               |
| **Support**                       | MariaDB provides a top-quality support option that offers 24/7 technical support throughout the year. In addition, their engineer are quite skilled in both MariaDB and MySQL, which helps helps alot if the user decides to switch between the two databases | MySQL offers an enterprise version of its product that includes complimentary security features and 24/ support. Backed by the Oracle Corporation, MySQL is an excellent option for business customers looking for steady improvements, consistent updates, and enterprise-level support                                                     |
| **Security**                      | MariaDB offers three password authentication plugins, which gives the users more security in their database management                                                                                                                                        | MySQL comes with the validate_password component, which is used to verify and increase password security. MySQL also comes with a privilege and password system that is very flexible and secure, that enables host-based verification. It also offers password security by encryption of all password traffic when you connect to a server. |
| **Encryption**                    | MariaDB supports binary log encryption and temporary table encryption                                                                                                                                                                                         | MySQL gives the authentication to configure and encrypts redo/undo logs, while it doesn't encrypt temporary tablespace or binary logs                                                                                                                                                                                                        |
| **Community & License**           | MariaDB provides a complete package                                                                                                                                                                                                                           | MySQL comes with certain limitations. The community edition is missing capabilities like Threadpool, which significantly impairs the database and query speed                                                                                                                                                                                |

![Thread-Pooling](https://user-images.githubusercontent.com/56642663/235178708-c7df5fc0-a1d9-4f7e-8d69-2216be88eb9c.png)

---

#### Conclusion of Market Comparison:

Both MariaDB and MySQL offers a range of features and benefits for the users. MariaDB has an edge over MySQL when it comes to storage engine alternatives, replication, clustering and compatibility with Oracle Databases. MariaDB also offers high speed / performance and security features, with the three password authentication plugins and the support for binary log encryption. However, MySQL is being backed by Oracle Corporation, which provides the users with a enterprise-level support and consistent updates, which in turns makes it a solid choice for business customers looking for a steady RDBMS. While MariaDB offers a complete package in regards of Community & License, the MySQL's community edition has some certain limitations that in the end could impact the database and query speed. In the end, the choice between MySQL and MariaDB will depend on the users specific needs, like performance, scalability, support and the compatibility with other tools

## Getting Started with MySQL

### Installing and Starting MySQL:

#### Linux:

- The easiest way to install MySQL is to use the [MySQL repositories](https://dev.mysql.com/downloads/)
- - Next, start the MySQL Server if your installation includes [mysqld_safe:](https://dev.mysql.com/doc/refman/8.0/en/mysqld-safe.html)

```sql
 $> bin/mysqld_safe --user=mysql &
```

- - If your installation includes systemd support, start the server like this:

```sql
$> systemctl start mysqld
```

- It is important that the MySQL Server is being runned using an unprivileged login account. To ensure this, run [mysqld_safe](https://dev.mysql.com/doc/refman/8.0/en/mysqld-safe.html) as `root` and include `--user` option as shown. Otherwise, you should execute the program while logged in as `mysql`, in which case you can omit the `--user` option from the command.

#### Microsoft Windows:

- The recommended way to install MySQL on Windows is to use the [MySQL Installer](https://dev.mysql.com/downloads/installer/)
- If you have chosen to configure MySQL as a Windows service during the installation process, which is the default option, the MySQL server will start automatically after the installation process is completed.

#### macOS:

- The recommended way for installing on macOS is to use the [macOS installer package](https://dev.mysql.com/doc/refman/8.0/en/macos-installation-pkg.html)

#### Other platforms:

- For installations on other platforms, as well as installation methods not covered above, see [Installing and Upgrading MySQL](https://dev.mysql.com/doc/refman/8.0/en/installing.html)

---

### Connecting to the MySQL Server with the mysql client:

- Once your MySQL server is up and running, you can connect to it as the superuser `root` with the [mysql client](https://dev.mysql.com/doc/refman/8.0/en/mysql.html)

#### For Linux:

- Enter the following command at the command line terminal

```sql
$> mysql -u root -p
```

#### For Windows:

- Click `Start` -> `All Programs` -> `MySQL Command Line Client`
- If MySQL wasn't installed with the MySQL Installer, open a command prompt, go to the `bin` folder under the base directory of your MySQL installation, and write the following command:

```sql
C:\> mysql -u root -p
```

- You are then asked for the `root` password, which was assigned in different manners according to the way MySQL was installed

---

### Some Basic Operations with MySQL:

#### Creating a new database:

- Use a CREATE DATABASE statement:

```sql
mysql> CREATE DATABASE pets;
Query OK, 1 row affected (0.01 sec)
```

- Check if the database has been created:

```sql
mysql> SHOW DATABASES;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| pets               |
| sys                |
+--------------------+
5 rows in set (0.00 sec)
```

#### Showing existing databases:

- Use a SHOW DATABASES statement:

```sql
mysql> SHOW DATABASES;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
4 rows in set (0.00 sec)
```

## Conclusion

MySQL has a rich and diverse history of development and releases. From the initial development in 1994 and the release in 1995, to the acquisation by Sun Microsystems and eventually the ownership by Oracle, MySQL has steadily provided reliable and efficient Relational Database Management solutions. Over the years, MySQL has continued to evolve and change to the needs of its users, with new features and enhancements added in each version release.

MySQL is also a popular open-source relational database management system that offers various features and functionalitites to access and manage table records. It has a range of characteristics such as portability, scalability, data security and connectivity, and can handle large databases with millions of records

With the Market Comparison between MySQL and MariaDB, both of them has their own unique strengths and limitations. MariaDB offers a wide range og storage engine options, replication and cluster features, while MySQL has the advantage of being backed by Oracle, which serves top-tier support for enterprise-customers aswell with steady and consistent updates

Installing and starting MySQL is a simple process that varies depending on which platform the user is using. For Linux users, repositories is the easiest way to install. On Windows, it is recommended to use the MySQL installer, which will automatically configure MySQL as a windows service. Once the MySQL Server is up and running, you can connect to it using mysql client and perform basic operations like creating a new database and showing existing ones

## References

- [MySQL - Wikipedia](https://en.wikipedia.org/wiki/MySQL)
- [History of MySQL - Data Science Central](https://www.datasciencecentral.com/history-of-mysql/)
- [Understanding MySQL Internals - O'Reilly](https://www.oreilly.com/library/view/understanding-mysql-internals/0596009577/ch01.html)
- [MySQL features - JavatPoint](https://www.javatpoint.com/mysql-features)
- [MySQL features - dev.mysql.com](https://dev.mysql.com/doc/refman/8.0/en/features.html)
- [MySQL vs MariaDB - linuxac](https://linuxiac.com/mysql-vs-mariadb/)
- [MySQL vs MariaDB - Cloudways](https://www.cloudways.com/blog/mariadb-vs-mysql/)
- [Getting started with MySQL - dev.mysql.com](https://dev.mysql.com/doc/mysql-getting-started/en/)
