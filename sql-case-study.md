---
title: SQL Case Study
author: Marie Sæter <mariesaeter>
tags: sql, case study, platform, database
---

## Introduction

Structured query language (SQL) is an open-source programming language used for storing, accessing and manipulating data in tables where attributes from rows and columns are in relation to each other, also called a relation database. SQL was developed in the 1970s by IBM and it is a global standard relational database management systen (RDBMS). Different databases such as MySQL, PostgreSQL and Oracle has their own variants of SQL known as SQL dialects.

## Brief History

- 1970: Dr. E. F. Codd published a paper "A Relation Model of Data for Large Shared Data Banks".
- 1974: Sequel was invented by Raymond Boyce and Donald Chamberlin at IBM based on Codd's paper.
- 1977: Sequel was shortened to SQL due to trademark issues.
- 1979: SQL was commercially released through to the public through a company called Relation Software, later named Oracle.
- 1986: SQL became a standard of the American National Standards Institute (ANSI).
- 1987: SQL bacame a standard of the International Organization for Standardization (ISO).

## Main Features

SQL as mentioned is a programming language that communicates with relation databases. It is the most commonly used database language and it is used almost everywhere website that needs to store relational data. SQL is used for the back-end data storage and processing solutions on websites such as facebook and spotify. Here are some of the main features of SQL.

### Query language

By using query language, SQL provides many commands for retrieving data by querying through a database. This includes commands to filter, sort, group, and join data from several tables.

### Data Definition Language (DDL)

DDL contains commands that is used to define the data

- **create:** Creates a table
- **drop:** Deletes the table and its attributes
- **alter:** Modifies the table structures (e.g. adding new rows and columns)
- **rename:** Changes the name of a table

### Data Manipulating Language (DML)

DML contains commands that is used for manipulating data

- **insert:** Used after create command to insert values into the table
- **delete:** Deletes specified rows, tuples or cardinality from the table
- **update:** Updates the tuples in the table
- **triggers:** Performed when specific conditions are met. Split into three parts.
  - **Event:** Change that activates trigger
  - **Condition:** Test or query executed after the trigger is activated
  - **Action:** Procedure executed after the condition is met

### Transaction Control Language (TCL)

TCL is used to manage transactions witin a database through a set of commands and is used for maintaining database consistency. Database transactions are the operations preformed in a database, such as creating, updating and retrieving data. A transaction in SQL begins with a particular set of task and ends when the task is completed successfully. If the task fails the transaction is a fail and can be reverted through a rollback command.

**TCL commands**

- **commit:** Saves database when it's inconsistent
- **rollback:** Rolls back to the previous transaction
- **savepoint:** Saves a transaction temporarily so you can rollback to that specific savepoint without running through all of the transaction.

### Security and authentication

SQL provides features that can limit the detailes from the database that is shown to the user. The original database is secured by DBMS.

### User Access Control

Mechanisms that controls a users access to a database. Provides the ability to change the priveleges to perform certain operations on the database.

### Embedded SQL

SQL can embed other languages such as COBOL, C, Java.

In addition to these features, SQL is characterized to have high performance (capability for heavy workload and high usage), and for being highly available (good compatibility with relation DBMS).

## Drawbacks of SQL

- **Difficult interface:** SQL has a complext interface which can be difficult for some user to access.
- **Partial Control:** The programmers using SQL only have partial control of the database because of hidden business rules.
- **Implementation:** Some of the databases adds proprietary extensions to SQL to ensure vendor lock-in.
- **Cost:** Operating costs is added to some SQL versions, for example SQL Server, making it difficult for some programmers to access.

## Conclusion

SQL has over 50 years become one of the most used database languages on a global scale. It is a standard for the International Organization for Standardization and American National Standard Institute. Although there are some drawbacks of SQL, the features provided by SQL is difficult to compare to other programming languages which is focused on managing RDBMS.

## References

- [learnsql.com](https://learnsql.com/blog/what-sql-dialect-to-learn/)
- [w3schools.com](https://www.w3schools.com/sql/sql_intro.asp)
- [businessnewsdaily.com](https://www.businessnewsdaily.com/5804-what-is-sql.html#)
- [aws.amazon.com](https://aws.amazon.com/what-is/sql/)
- _Early History of SQL_ by Donald D. Chamberlin, 2012
- [geeksforgeeks.org](https://www.geeksforgeeks.org/features-of-structured-query-language-sql/)
- [intellipaat.com](https://intellipaat.com/blog/tutorial/sql-tutorial/sql-features/)
- [scaler.com](https://www.scaler.com/topics/tcl-commands-in-sql/#)
- [whatisdbms.com](https://whatisdbms.com/what-is-sql-applications-advantages-and-disadvantages/)
