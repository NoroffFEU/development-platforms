---
title: MariaDB Case Study
author: Hanna Fjeldsaa
tags: MariaDB, case study, development platform, RDBMS, database
---
![MariaDB logo](https://yt3.googleusercontent.com/ytc/AOPolaQkgygSY8Rb5kSDHjXza_cM0zrB0Z4dNg65hFTSNg=s176-c-k-c0x00ffffff-no-rj)

## Introduction
As a front-end developer and for better understanding back-end development, I researched the MariaDB software. It is essential for applications to have datastores to store data collections (e.g. contacts, photos, messages, favourites etc.). Every database employs one or multiple APIs for the creation, access, management, search, and replication of the data it contains. [^21] At the moment there are three important types of databases which are Relational, Non-relational and In-memory databases. 

MariaDB is an open source Relational Database Management Systems(RDBMS) that was established in 2009 by community-development. It is a free and open-source software under the GNU General Public License, version 2 (GPLv2). This RDBMS is based on the Structure Query Language (SQL), which is a standard programming language for storing and processing information in a relational database. MariaDB is available for various operating systems such as Linux, windows and macOS. [^3]

## History [^3][^18] 
Relational «data banks» have existed in many years and can be found described as early as in 1970. Much has happened since then, but in 2009 the open source database MySQL was obtained by Oracle when they acquired Sun Microsystems. Developers feared that MySQL could become licensed by Oracle. Therefore the community of MySQL, forked MySQL and made an enhanced, drop-in replacement of MySQL that was called MariaDB. MySQL and MariaDB are named after the lead developer Michael Monty Widenius first daughter My, and second daughter Maria. Many of the original developers from MySQL joined the new project and MariaDB server has continued to develop rapidly since then. There is a MySQL Case study you can read in this repository if interested.

In December 2012 the MariaDB Foundation was created to grantee that the relational database was to remain open source. Essential documentation, downloads and events can be found at MariaDB Foundation website: https://mariadb.org/

The first years the MariaDB version followed MySQL’s number scheme until November 2012. That was when the version 10.0 was released after developers decided a major version number change was necessary because of a growing number of features that was not available in MySQL. In December 2012 the MariaDB Foundation was created to grantee that the relational database was to remain open source.

MariaDB Corporation was formed after a merge between SkySQL Corporation and Monty Program in 2013. The Corporation’s focus is providing products and services around or on the MariaDB server as well as being a big sponsor to the MariaDB Foundation.  

Nowadays MariaDB is claimed to be one of the most popular database server in the world. Many well-known companies sponsor the MariaDB foundation, including Microsoft, Intel, Alibaba cloud, Visma, IBM and more. MariaDB server have notable users including Wikipedia, WordPress.com and Google. 

## Features
MariaDB is a relational database management systems(RDBMS) and a popular open-source software for accessing and managing table records. MariaDB can be used for high-availability transaction data, customer information, analytics and as an embedded server. MariaDB Server was originally designed to be a drop-in replacement for MySQL and MariaDB still supports the same features that MySQL but it offers additional ones too. [^20] 

MariaDB has an open development model where you can find the MariaDB Server code base in a repository on GitHub [^18]: https://github.com/MariaDB/server

Recently MariaDB Foundation asked developers “What programming languages do your applications that communicate with MariaDB use?” The result was published on 15.08.2023 and is listed below. As you can see the most popular code language used was Python and PHP. [^19]

- Python: 30%
- PHP: 30%
- Java: 19%
- NodeJS: 16%
- C#: 15%
- C/C++: 11%
- Bash/Shell/Powershell: 7%
- Other: 7%
- TypeScript: 6%
- Go: 6%
- Rust:	4%
- R: 3%
- Ruby:	2%

### Additional MariaDB features:
- Written in C, C++, Perl and Bash. [^3]
- MariaDB runs on operating systems like windows, Linux and macOS. [^3]
- The RDBMS provides an SQL interface for accessing data. [^17]
- MariaDB can easily be integrated with other RDBMS
- MariaDB is compatible with MySQL, Postgres, MongoDB, and Oracle. [^18]
- Transactional and analytical scalability.
- With the MariaBackup open source tool MariaDB enables recovery from online backups and point-in-time restore. [^12]
- Transparent data encryption ans dynamic data masking for security.
- MariaDB includes a wide selection of storage engines, including some high-performance storage engines, for working with other RDBMS data sources. Plugins will be more discussed below.
- The latest versions of MariaDB Server also include several JSON features. [^17]
- Possibility for more features and support by purchasing a MariaDB platform subscription called MariaDB Community server, enterprise or SKYSQL. Theese subscription can be found at https://mariadb.com/pricing/

### Plugins – A software add-on that is installed on a program, enhancing its capabilities [^18]:
- MariaDB supports plugins and it can even be added to the core software without having to rebuild the MariaDB server from source code. This means the running server will not be interrupted when plugins are loaded and unloaded. Another advantage is the possibility to load plugins at start-up.  Using plugins is normally implemented to add the desired storage engine, additional security requirement or special logging information regarding the server. 
#### Example of some plugins: 
- Performance Schema: This plugin makes it possible to monitor the performance of your MariaDB server.
- MariaDB Audit: Logs server activity, which is necessary for some auditing regulations.
- ed25519 authentication: An improved SHA-1 based user authenticator and used to securely save users passwords.
- Cracklib password check: Tests the new passwords strength.

### Storage engines:
MariaDB is famous for its diverse collection in storage engines. They have storage engines for:
#### General purpose 
	- InnoDB: General transaction storage engine. [^18]
	- MyISAM: Enables easy table copying between systems and has a small footprint. It is an old non-transactional MySQL storage engine, but the more modern improved engine Aria is more often used if possible. [^14]
	- Aria: Modern improved MyISAM with better performance, caching and the goal of being crash-safe. The other goal behind Aria engine is to become the default transactional and non-transactional storage engine for MariaDB and MySQL. [^8]	[^18] 

#### Scaling, partitioning
    To optimize the scaling properties MariaDB server can split database loads on several serves. Only Linux users can use MariaDB Galera, a cluster technology. [^9]
	- ColumnStore: It is a columnar storage engine that uses a massively parallel distributed data architecture. The engine is designed for big data scaling to process even petabytes of data. Perfect storage engine for Data warehousing. [^5][^13/]
	- Spider: Supports the XA Transactions and uses partitioning to enable data sharing through multiple servers. [^15]		
#### Compression / archiving:
	- MyRock: Typical for web scale type applications. It allow greater compression ratio, greater writing efficiency, faster data loading and faster replication. This storage engine was originally developed by Facebook. [^7]
#### Connection to internal and external data sources:
	- Connect: Permits access to various local and remote data as if it were regular MariaDB tables. [^18]
#### Search:
	- Mroonga: Search optimised storage engine. Mroonga is based on Groonga, a fast and full text search storage engine using column store. [^6]
#### Other storage engines:
	- S3 Storage engine: A read-only engine that stores MariaDB tables in Amazon S3 buckets, or any third-party private or public cloud that implements the S3 API. [^16]
	- OQGRAPH: The Open Query Graph enable developers to handle hierarchies (tree structures) and complex graphs (node containing numerous connections in multiple directions) [^18]

 A list of MariaDB plugins and storage engines can be found here: https://mariadb.com/kb/en/list-of-plugins/

## Strengths
- MariaDB is among the best open source options available for RDBMS today. It is very likely to remain a fully free software giving you complete access to its features in the future as well. Since there is no single corporate entity controlling MariaDB, the chance of sudden predatory licensing is minimal.
- Migrating from MySQL to MariaDB can often be both quick and simple.
- MariaDB includes numerous storage engines and tools described earlier, making it versatile for lots of use cases.
- MariaDB offers great query execution and handles large-sized data pretty well with the ColumnStore storage engine. [^18]
- Security complexity: MariaDB offers encryption, access control mechanisms, authorization, user authentication and SSL/TLS support. [^1]
- MariaDB is backwards compatible. This means that the latest version is compatible with older versions. [^18]
- By purchasing a MariaDB Platform subscription it is possible to get expert support and enterprise-grade features. MariaDB engineer are quite skilled in both MariaDB and MySQL which is useful if the user is switching between those two databases.

## Weaknesses
- MariaDB is moving further away from MySQL making migration over to MariaDB more complex in the future.
- It is difficult to migrate from MariaDB to MySQL. [^2]
-   The MariaDB community server version offers no support, which leaves the user to troubleshoot using forums and technical documentation.

## Comparison
There are several other free RDBMS other than MariaDB and MySQL like PostgreSQL, SQLite and Apache Hive. [^22] Since MySQL is MariaDB predecessor, this section will mostly compare those two softwares.

The earlier term drop-in replacement for MySQL is no longer used according to MariaDB Foundation. Their argument is that MariaDB Server has many new features and the goal has diverged from MySQL’s. It is still mostly compatible with MySQL, and most popular applications that use MySQL can also run with MariaDB. [^18]  

If you want faster development cycles, consider using MariaDB which does more server releases. [^23] If you do not want frequent updates MySQL may be a better choice. [^3]

MariaDB offer a wide variety of storage engines like spider, CSV, SEQUENCE, Merge, OQGRAPH, MyRock, Aria, Archive, MyISAM, ColumnStore, CONNECT, S3 Storage engine, etc. MySQL offers less choice in storage engines compared to MariaDB and therefore sometimes reduced performance compared with MariaDB. [^4][^2]

MySQL provides dynamic columns that allow data masking to protect sensitive information. while MariaDB provides with invisible columns. [^1] Both supports JSON format. However MariaDB stores JSON document as strings, while MySQL stores them as binary objects. [^10]

The thread pool feature is a built in feature in MariaDB, but this particular feature is not included in MySQL unless you buy enterprise Edition of MySQL. This feature enhances speed and helps to support many simultaneously connections. [^2]

## Conclusion
There are several different free Relational Database Management Systems on the market, but MariaDB is a good choice if you want many features in form of many different storage engines. Dependent on a specific situation MariaDB is likely to have the best suited types of storage engine to use. MariaDB has a big community and there are plenty of documentation and information on forums. MariaDB is mostly compatible with MySQL and other. This makes it possible to first try MySQL and then migrate to MariaDB. The frequent developing cycles in MariaDB can help for more development of new features for optimization which is great for developers.

## Reference
[^1]: https://aws.amazon.com/compare/the-difference-between-mariadb-vs-mysql/
[^2]: https://cloudinfrastructureservices.co.uk/mariadb-vs-mysql/
[^3]: https://en.wikipedia.org/wiki/MariaDB
[^4]: https://www.hostinger.com/tutorials/mariadb-vs-mysql
[^5]: https://mariadb.com/docs/columnstore/	
[^6]: https://mariadb.com/kb/en/about-mroonga/
[^7]: https://mariadb.com/kb/en/about-myrocks-for-mariadb/
[^8]: https://mariadb.com/kb/en/aria-storage-engine/
[^9]: https://mariadb.com/kb/en/galera-cluster/
[^10]: https://mariadb.com/kb/en/json-data-type/
[^11]: https://mariadb.com/kb/en/list-of-plugins/
[^12]: https://mariadb.com/kb/en/mariabackup-overview/
[^13]: https://mariadb.com/kb/en/mariadb-vs-mysql-features/
[^14]: https://mariadb.com/kb/en/myisam-storage-engine/
[^15]: https://mariadb.com/kb/en/spider/
[^16]: https://mariadb.com/kb/en/using-the-s3-storage-engine/
[^17]: https://mariadb.org/about/
[^18]: https://mariadb.org/en/
[^19]: https://mariadb.org/what-programming-languages-do-your-applications-that-communicate-with-mariadb-use/
[^20]: https://www.cloudways.com/blog/mariadb-vs-mysql/
[^21]: https://www.tutorialspoint.com/mariadb/mariadb_introduction.htm
[^22]: https://en.wikipedia.org/wiki/Relational_database
[^23]: https://mariadb.com/kb/en/mariadb-server-release-dates/
