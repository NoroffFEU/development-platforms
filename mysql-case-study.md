---
title: MySQL Case Study
keywords: development platforms, example project, category name
tags: Development Platforms, MySQL, Relational Databases
sidebar: development-platforms
permalink: development-platforms/example-product.html
folder: development-platforms
---

## Introduction

Summarise the product's primary purpose in one or two paragraphs.

I have chosen to write a case study about MySQL, because it is one of the world's most popular and widely used databases.
My goal is to weigh it's strengths and weaknesses against other technologies of the same kind to figure out
if this is a product worth using, if there are other more modern products with better solutions and
which cases you should use or not use MySQL.

<!-- Also I will have a look at other NoSQL databases to make a comparison -->

MySQL is an open source relational database management system (RDBMS).
A relational database can store data in tables consisting of rows and columns
that can be related to each other using id's and something called foreign keys.
The SQL in MySQL stands for Structured Query Language, which is a standardised language used by
developers to either create, select, update or delete data, among other commands.

Think of a relational database (RDB) as a digital file cabinet for storing files.
It's very important that the data stored in a database can be relied upon, to be secure and persist.

<!-- relational databases like MySQL have several features that helps secure and persist data, like: -->

RDBs have stood the test of time and are still today the most used types of databases,
and MySQL is currently the most commonly used RDB.

## Brief History

Provide a brief history of the product, including major milestones or events.
You may use bullet points, numbered lists, paragraphs or a timeline.

The first development of MySQL started in 1994 by swedish developers Allan Larson, David Axamark
and finnish developer Michael "Monty" Widenius. MySQL was initially intended for personal usage
and derived from it's proprietary predecessor mSQL, another database management system
based the low-lever language ISAM. The developers considered mSQL to be slow and inflexible
and created a new SQL interface that used the same API as mSQL.
Keeping the same API allowed many developers to switch to MySQL
after it's first release in May 23rd 1995.

In the year 2000, MySQL went open source which allowed it to be accessed and used by everyone.  
Since then it has grown in popularity and is currently ranked the world's most used open source database
with over 5 million active installations,
and ranks second most used overall, behind Oracle's proprietary enterprise database.

Here's a timeline of MySQL

- 1994, development starts
- 1995, first release on May 23rd.
- 1996, version 3.19
- 1997, version 3.20
- 1998, January 8th, version realeased for windows 95. - version 3.21 Production realease from www.mysql.com - version 3.22 alpha, beta
- 1999,

- 2000, version 3.23 beta, MySQL goes open source
- 2001, version 3.23
- 2002, version 4.0 beta
- 2003, version 4.0
- 2004, version 4.1 beta June, production release October 2004 (B-trees and R-trees, prepared statements, subqueries)
- 2005, version 5.0 beta March, production release October Oracle acquires Innobase, the company responsible for backend storage of MySQL.
- 2006,
- 2007,
- 2008,
  - Sun Microsystems acquire MySQL AB, version 5.1 released November
    (partitioning, event scheduler, plugin API, server log tables, row based replication)
  - version 5.1 contained lots of bugs, most of them were fixed by V 5.1.51
  - version 5.1 and 6.0-alpha had issues with data warehousing - partialy because of it's inability to utilize multiple CPU cores for processing a single query.
- 2009, version 6.0.11-alpha annouced.
- 2010, Oracle acquires Sun Microsystems - legal complications in the EU - January 27th - Michael "Monty" Widenius forked MySQL and created MariaDB to keep it open source - MariaDB API remains compatible with MySQL.
- 2011,
- 2012,
- 2013, general availability for version 5.6 anounced. Big update
- 2014,
- 2015, general availability for version 5.7 anounced - supports native JSON data.
- 2016,
- 2017,
- 2018, version 8.0 - update indcuded NoSQL Document Store.
- 2019, MySQL won price of best DBMS from DB-Enginges ranking

- 2020,
- 2021,
- 2022,
- 2023,

## Features

Outline the product's key features.

#### Internals

- MySQL is written in C and C++.
- The C API gives a low level access to the client/server protocol.
- the server design is multi-layered and has independent modules.
- It's been tested on a wide selection of different compilers and platforms.
- Allows for multithreading using kernel threads and can utilize multiple CPUs with ease, if available.
- supports both transactional and non-transactional storage engines.
- B-tree disk tables and index compression.
- Storage engines can be added relatively easy. This makes it easier to add SQL interface for in-house databases.
- Purify has been used to test for memory leak detection.
- Valgrind has been used for GPL/GNU General Public License.
- The servere is provided as a separate program when using a networked client/server program.
- Configured with CMake for optimal portability.
- Memory allocation system is fast-thread based.
- Designed to implement SQL functions unsing optimized class library.
- Uses in-memory hash tables as temporary tables
- Joins are optimized and very fast using nested-loop join.

#### Data Types

<!-- todo: write synthax -->

##### Numeric Data Types

![Required Storage and Range for Integer Types Supported by MySQL](./images/Screenshot-integers.png)

> image from: https://dev.mysql.com/doc/refman/8.0/en/integer-types.html

SQL standard integer types:

- INTEGER (INT), SMALLINT, TINYINT, MEDIUMINT, BIGINT

Fixed-Point types:

- DECIMAL and NUMERIC - Stores exact value. Often used for monetary data

Floating-Point types:

- FLOAT and DOUBLE - stores aproximate numeric value, single precision uses four bytes and double precision uses eight

Bit-value type:

- Stores value in binary. Read more about binary values here: https://www.techtarget.com/whatis/definition/binary

Numeric type Attributes: Numeric datatypes can have attributes to spesify the width of an integer. E.g. INT(3)

Out-of-Range and Overflow Handling: Allows for both "strict SQL mode" and "no restrictive mode".
Strict mode returns an error if the integer is out of range and no-strict clips the value to appropriatley
fit the column data and stores the result instead.

SIGNED and UNSIGNED values:

- signed values can store zero, negative and positive numbers.
- UNSIGNED values can only store zero and positive numbers.

What numeric types one should use depends on the what it is used for. In general one would want to use the type that atores the most correct value and uses the least amout of storage. E.g: DECIMAL is great for monetary use where FLOAT and DOUBLE are often used for scientific numbers where every decimal number counts.

##### String Data Types

The string data types consist are: CHAR,VARCHAR,BINARY,VARBINARY,TEXT,BLOB,SET and ENUM.

CHAR (fixed length)

- The length of a "CHAR value" is a "fixed length" that is declared when a table is created.
  This can be anything between 0 to 255. The "CHAR value" is then padded to the right with spaces to match the "fixed value".
  Trailing spaces will be removed when a "CHAR value" is retrieved, unless PAD_CHAR_TO_FULL_LENGTH mode is activated.
- CHAR uses static memory allocation
- Faster
- typically used for phone numbers, zip codes etc.
  E.G. CHAR(10) = "abc-------"

VARCHAR (variable length)

- VARCHAR values are stored with either 1 or 2 byte prefix pluss data.
- Uses dynamic memory allocations
- Better for storage space
- Slower
- typically used for storing names or other values that can vary in length.
  E.G. VARCHAR(10) = "abc"

![Difference between CHAR and VARCHAR](./images/Screenshot-CHAR-VARCHAR.png)

> image from: https://dev.mysql.com/doc/refman/8.0/en/char.html

BINARY and VARBINARY have many similarities with CHAR and VARCAHR. The difference is that the values are stored as byte strings rather than character strings.
The size of BINARY and VARBINARY values can be specified like in CHAR and VARCHAR by using parathesies e.g. Binary(40).
In this example the value will allow storage for 40 bytes and padds the potentialy "missing" space with 0x00, which are then ratained when the value is retrieved.
VARBINARY will do the same as VARCHAR by initially using 1 or 2 byte prefix pluss data. There is no padding

BLOB and TEXT

- BLOB stands for "Binary Large OBject". There are four different types of BLOBs: TINYBLOB,BLOB,MEDIUMBLOB AND LONGBLOB.
  BLOBs stores the value as binary strings
- TEXT is the "non-binary" equivalent to blob, There are four different types of TEXT: TINYTEXT,TEXT,MEDIUMTEXT AND LONGTEXT.
  TEXT stores values as character strings.

- some developers argue that you CAN utilize BLOBs and TEXTs as a "document-database storage", meaning you can use a relational database to achieve some of the same benefits from a document-no-SQL database. However, this seems to be an ongoing debate.

ENUM

- ENUM, which is short for enumeration. Is a string object where a set of values are enumerated.
  Think of this as an array of string values, each value has an index and only one value can be selected at the time.
  ENUMs store the string values as numbers to save data and returns strings when retieved.
  Only one index can be selected at the time.

SET

- SET are in many ways similar to ENUMs. SET allows you to select many options, as opposed to ENUM which only allows one.
  A SET column can have up to 64 members.
  An error will occur if the values are duplicated when stict SQL mode is active.
  Some argue that SET can be an inefficient way to store data because of it's limiting storage capacity when working with a "many to many relationship"

##### Date and Time Data Types

The Date and Time Data Types are: DATE,TIME,YEAR,DATETIME and TIMESTAMP.

DATE

- Function: Is used for date only.
- Format: "YYYY-MM-DD".
- Range: From "1000-01-01" to "9999-12-31".
- Timezone coversion: Not possible.

TIME

- Function: Is used for time only.
- Format: "HH:MM:SS" or "HHH:MM:SS" for large hours.
- Range: From "-838:59:59.000000" to "838:59:59.000000".
- Timezone coversion: Not possible.

DATETIME

- Function: Is used for both date and time.
- Format: "YYYY-MM-DD hh:mm:ss".
- Range: From "1000-01-01 00:00:00" to "9999-12-31 23:59:59".
- Timezone coversion: Not possible.

TIMESTAMP

- Function: Is used for date, time and timezone conversion.
- Format: "YYYY-MM-DD hh:mm:ss".
- Range: From "1970-01-01 00:00:01.000000" UTC to "2038-01-19 03:14:07.999999" UTC.
- Timezone coversion: Possible.

Both TIMESTAMP and DATETIME can include fractional seconds up to 6 digits.

YEAR

- Function: Is used for year only.
- Format: "YYYY".
- Range: 1901 to 2155.
- Timezone coversion: Not possible.
- 1-byte storage value.

##### Spatial Data Types

Spatial data types can consist of single geometry values:

- GEOMETRY
- POINT
- POLYGON
- LINESTRING

The other types of spatial data consists of a collection of values:

- MULTIPOINT
- MULTILINESTRING
- MULTIPOLYGON
- GEOMETRYCOLLECTION

This type of data is typically used in a geographic setting.

##### The JSON Data Type

MySQL supports JSON (Javascript Object Notation). JSON stores it's values inside an object with key value pairs.
E.G. { key: "value", key2: 29 }
MySQL automatically valiadates the document when storing JSON instead of a string.
JSON stored in JSON columns allows for opimized storage, quicker conversion because JSON is stored as a binary format with a structure that enables the server to look up objects dirctly by key or array indexes.

#### Statments and Functions

MySQL has a large and comprehensive list of built in statements and funtions that makes it easier to perform taskt.

Statements in MySQL unsually starts with one of the following keywords: SELECT, SHOW, INSERT, UPDATE, DROP, DELETE, ALTER, CREATE, USE.
This enables the user to manipulate data in the database using a Stuctured Query Language.

Functions are pre-build programs that takes parameters and returns a value or completes a task based on the parameters passed by the developer.

The syntax for a MySQL function is:

```
CREATE FUNCTION function_name [(parameter datatype [, parameter datatype])]

RETURNS return_datatype

BEGIN

declaration code here

execute code here

END;
```

#### Security

Some of the main secutity features are:

- User authentication: Access to the database can be controlled by the use of username and password authentication.
- Access control: A user can be granted spesiffic access priveleges such as the ability to read write or execute spesific commands.
- Encryption: MySQL uses different forms of encryption for data in transit such as SSL (Secure Sockets Layer),
  TSL (Transport Layer Security) and AES (Advanced Encryption Standard) for data at rest.
- Data validation: Provided contraints such as primary keys, foreign keys and checks helps preventing corruption
  and keeps the data accurate, valid and consistent.
- Auditing: You can log and monitor user activities to detect suspicious behaviour
- Firewall: Access to a MySQL server can be restricted with the use of firewalls and allowing only authorized connections.

Note that it's important to configure your own security-best-practises to ensure that the data is seccure.

#### Scalability

MySQL supports large databases. There are databases with over 50 million records, 200,000 tables and around 5 billion rows.
The maximum number of tables is generally limited by the storage engine used.

#### Connectivity

There are several protocols for connecting to MySQL servers:

- TCP/IP sockets on any platform.
- Named pipes and shared-memory connections. Optional: (--protocol=memory)
- Unix domain socket files for Unix systems.
- Client programs for many languages. APIs are available for C, C++, Perl, Java, Eiffel, Tcl, PHP, Ruby, and Python.
- Provides conneectors for ODBC (Open Database Connectivity), JDBC (Java Database Connectivity) and .NET applications.

#### Localization

- Servers provide error messages in many languages.
- Supports different character and unicode sets. Data is sorted and saved in selected language.
- Time zones can be changed dynamically for servers and clients.

#### Clients and Tools

- Includes client and utility programs such as "MySQLDump", "MySQLAdmin" and "MySQL Workbench"
- Provides CLI for SQL statements such as "MySQLCheck" and "MyISAMchk" to repair, check and optimize tables.
- programs can be requested using `-?` or `--help` for online assistance

#### ACID Compliant

- Supports ANSI/ISO SQL standard
- Developed in C and C++ and is postable across a variety of platforms.
- Fast stable and scalable
- stored procedures
- triggers
- cursors
- updated views
- query cache
- subselects

- ACID compliance

  - Atomicity - all or nothing.
  - Consitency - transactions are valid to rules of the db.
  - Isolation - Results of transactions are as if they are done end to end.
  - Durability - Once a transaction is committed, it remains so. - non ACID complient databases potentially trade integrity for speed.

- Editions

  MySQL community edition

  - open source GPL, free to use
  - community support only

  MySQL standard edition (annual subscription of about 2000 usd / year per server )

  - 24/7 support from oracle.
  - mostly the same as community edition but with support.

  MySQL enterprise edition (5000 usd / year per server)

  - cluster routing and partitioning features
  - tools for security, backups and monitoring
  - thread pooling for performance increase during large loads

  MySQL cluster CGE (10.000 usd / year per server)

  - designed for linear scalability
  - higly available, high volume

## Strengths

Discuss the product's strengths.

- consistency
- stored procedures
- locking and concurrency
- add graphs

## Weaknesses

Discuss the product's weaknesses.

## Comparison

Compare the product to other products in the same category, if applicable.

## Summary

Summarise the content and highlight the relevance of the product to a web developer.

### Credits

- Student Name (studentGitHubUsername)

#### References

- List of video or links used during research

Articles:

- https://dev.mysql.com/
- https://dev.mysql.com/doc/refman/8.0/en/features.html
- https://www.tutorialspoint.com/what-are-the-main-features-of-mysql
- https://dev.mysql.com/doc/c-api/8.0/en/
- https://dev.mysql.com/doc/refman/8.0/en/data-types.html
- https://en.wikipedia.org/wiki/MySQL
- https://en.wikipedia.org/wiki/MSQL
- https://www.tutorialspoint.com/discuss-the-history-of-mysql#:~:text=Timeline%20of%20MySQL&text=MySQL%20was%20founded%20in%201995,in%20addition%20to%20Sweden%20headquarters.
- https://www.interviewbit.com/blog/mysql-commands/
- https://www.techonthenet.com/mysql/functions.php
- https://dev.mysql.com/doc/mysql-reslimits-excerpt/8.0/en/table-size-limit.html#:~:text=You%20are%20using%20a%20MyISAM,2567%20%E2%88%92%201%20bytes).
- https://satoricyber.com/mysql-security/mysql-security-common-threats-and-8-best-practices/#:~:text=MySQL%20protects%20sensitive%20data%20access,Asymmetric%20Public%20Key%20Encryption%2FDecryption

Videos:

- https://www.youtube.com/watch?v=OqjJjpjDRLc
- https://www.youtube.com/watch?v=EIo1JFCWpfA&t=90s
- https://www.youtube.com/watch?v=UGu9unCW4PA&list=PL_c9BZzLwBRKn20DFbNeLAAbw4ZMTlZPH
