---
title: PostgreSQL Case Study
keywords: development platforms, PostgreSQL project, Structured Query Language,
tags: development platforms, PostgreSQL project, Structured Query Language,
sidebar: development-platforms
permalink: development-platforms/example-product.html
folder: development-platforms
---

## Table of contents

1. [Introduction](#introduction)
2. [Brief History](#Brief-History)
3. [Features](#features)
4. [Strengths](#strengths)
5. [Weaknesses](#weaknesses)
6. [Comparison](#comparison)
7. [Summary](#summary)
8. [Credits](#credits)
9. [References](#references)

## Introduction

![Introduction](images/postgres.png)

PostgreSQL also known as Postgres, is a flexible open-source object-relational database management system (RDBMS) that has been around for decades. It is designed to manage a huge variety of use cases, from single machines to data warehouses to web services with several concurrent users. It is also the default database for macOS servers and is also available for Linux, FreeBSD, OpenBSD, and Windows.

## Brief History

Postgres was created at the University of California, Berkley by computer science professor Michael Stonebraker. It evolved from the Ingres project which was an important milestone in the history of database development. The PostgreSQL project was sponsored by de Defense Advanced Research Projects Agency, the Army Research Office, the National Science Foundation and ESL, inc.

The implementation of Postgres began in 1986, and a prototype version was shown at the 1988 ACM SIGMOD Conference. Version 1 was released to a small number of users in 1989 and version 2 in 1990 which contained a re-written rules system. Version 3 came out in 1991. In 1993 the number of users began to overwhelm the project with a demand for support and features, and by 94 the project ended. Then Berkley released postgres under an MIT license which made it possible for other developers to use the code for any use.

In 1996, Marc Fournier at Hub.org Networking Services provided the very first non-university development server for open-source development. With the help of Bruce Momjian and Vadim B. Mikheev, the work began to stabilize the code inherited from Berkeley. The first PostgreSQL release formed version 6.0 in 1997. Since back then, developers and volunteers around the globe have maintained the software as The PostgreSQL Global Development Group. The project carries on to make releases available under its free and open-source software PostgreSQL License. The code comes from contributions from proprietary vendors, support companies and open-source programmers.

By 1996 Postgres was called Postgres95. It became clear that this name would not stand the test of time. A new name was decided which was PostgreSQL. The name was chosen to reflect the relationship between the original POSTGRES and the more recent versions with SQL capability. Still, many people refer to postgresSQL as Postgres, because of tradition or because it is easier to pronounce.

## Features

![Features](images/PostgreSQL-Features.jpg)

### JSON language support

- PostgreSQL supports Json language. You can define table columns as Json or Jsonb data types and use Json functions to parse and manipulate the content.

#### Security

- Has a lot of ways to handle several kinds of security issues. Encryption options are provided at several levels and provide flexibility in protecting data from disclosure due to database server theft, unscrupulous administrations, and insecure networks.

- password encryption
  Database user passwords are stored as hashes so the administrator cannot determine the actual password assigned to the user.

- Encryption for specific columns
  The pgcrypto module offers certain fields to be stored encrypted. This is useful if only some of the data is sensitive. The client provides the decryption key and the data is decrypted on the server and then sent to the client.

#### Concurrency

- PostgreSQL supports concurrent ACID transactions. To do this, PostgreSQL may use multiple locks to serialize database changes. when concurrent changes are made, the first transaction may proceed, and the second pause until the first commits or aborts.

### Feature highlights

- User defined types
- Table inheritance
- Sophisticated locking mechanism
- Foreign key referential integrity
- Views, rules, subquery
- Nested transactions
- Multi version concurrency control
- Asynchronous replication

## Strengths

### Features

- There are several relational database management systems to choose from, and postgreSQL is one of the most popular ones. One of the key reasons for choosing PostgreSQL is its large list of features. Some of them where covered in the section above.

### Large community

- Another important advantage of choosing PostgreSQL is the strong open-source development community. There are several open-source relational databases but PostgreSQL is developed and managed without a corporate owner or a commercial counterpart. This helps the contributors chart their path and work on features that the community cares about the most. This focus on community-driven development has resulted in great participation from PostgreSQL's users.

### SQL or NoSQL

- Postgres can be used as both SQL for transactional or statistical data or NoSQL for storing JSON documents.

### Programming languages

- Postgres supports a large list of programming languages such as C/C++, Delphi, Erlang, Go, Java, Javascript, JSON, Lisp, .Net, Python, R and Tcl.

### Compatibility

- Postgres is compatible with all the leading operating systems like Windows, Linux, macOS, UNIX, etc.

### Data types

- Supports wide data types like Primitives(string, numeric, integer, boolean), structured(array, date/time, UUID, range), document (XML, JSON/JSONB, key-value), and customization (custom types, composite)

## Weaknesses

### Beginners

- The installation process can be a bit challenging for beginners.

### Performance

- Postgres may not be as fast as other databases in some situations.

### Not restrained by a single owner

- While it's listed in the strengths above, it can also have a potential downside. Users or companies moving to Postgres will have to choose from multiple vendors and solutions that perform the same function. This means that if you are a beginner it can take some time to understand the benefits and challenges of each one.

## Comparison

## Postgres VS MySQL

### Similarities

- Both have syntax similarities.
- Both support many of the same languages. Some of them are C/C++, Delphi, Erlang, Go, Java and Lisp.
- Both offer distinct indexing options.
- Both have a large community to provide support for users.

### Differences

- Postgres is an object-relational database while MySQL is a purely relational database. This means Postgres offers more complex data types and also allows objects to inherit properties. Because of this Postgres can sometimes be more complex to work with compared to MySQL
- Postgres is more SQL compliant than MySQL, supporting most of the primary SQL features.
- Postgres provides a wider variety of data types.
- MySQL may be more user-friendly for beginners.
- MySQL supports native window services, PAM and LDAP for user authentication, while Postgres supports IP-based client authentication and filtering using Kreberos and PAM.

## Summary

- Postgres has been around for decades and will probably exist for many more. With its big community and open-source guidance, it is no wonder that Postgres is one of the most used ones. Postgres provides a large list of features, language support and data types. With its stability, advancements, and functionality Postgres is a great choice to handle simple to complex data projects. It can be a bit challenging with installation and configuration for beginners. Thankfully with the strong open-source documentation and with its big community, it is possible to get the help you need.

### Credits

- Adrian Brandshaug (Git Hub: [adrianBrands](https://github.com/adrianBrands))

#### References

- https://en.wikipedia.org/wiki/Ingres_(database)
- https://en.wikipedia.org/wiki/PostgreSQL
- https://www.postgresql.org/docs/current/history.html
- https://aiven.io/blog/an-introduction-to-postgresql
- https://www.postgresql.org/docs/12/encryption-options.html
- https://www.prisma.io/dataguide/postgresql/benefits-of-postgresql#open-source-development-and-community
- https://www.infoworld.com/article/3619531/postgresql-benefits-and-challenges-a-snapshot.html
- https://www.keitaro.com/2021/09/14/advantages-of-using-postgresql/
- https://www.fivetran.com/blog/postgresql-vs-mysql
- https://cdn.educba.com/academy/wp-content/uploads/2020/02/PostgreSQL-Features.jpg
- https://kinsta.com/wp-content/uploads/2022/02/postgres-logo.png

