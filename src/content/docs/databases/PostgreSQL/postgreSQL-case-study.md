---
title: PostgreSQL Case Study
author: JeanettKM
tags: Development platforms, PostgreSQL, School project, Databases, Structured Query Language, Case Study Assigment
---

## Introduction

PostgreSQL, previously known as Postgres, is a open-source object-relational database management system (RDBMS). It was developed in 1986 by college researcher Michael Stonebraker. PostgreSQL is a flexible solution created to work with and manage many diverse cases, everything from small machines to big data warehouses and lots more. It is integrated into macOS servers by default and work perfectly with Linux, FreeBSD, OpenBSD, and Windows aswell.

## Brief History

- Development from 1986-1994

  - 1986: PostgreSQL which was at first named Postgres, is developed by Michael Stonebraker. Michael is a database researcher who was located at the University of California.
  - 1995: Postgres got a new name, PostgreSQL 6.0 is created and becomes the first released version to the public. PostgreSQL was before this only available to the researchers within the university.

- Growth and Management from 1996-2005

  - 1996: As the userbase grows they recognize that a control group has to be formed to ensure the projects constant development and safety, so the PostgreSQL Global Development Group is formed.

- Tech and Feature impovements from 2010-2020

  - 2010: PostgreSQL version 9.0 comes with a new feature called built-in replication. This feature makes PostgreSQL suitable for being implemented into critical systems. In simpler terms it learned how to copy itself incase something went wrong or a critical error were to happen.
  - 2017: PostgreSQL version 10.0 is released with a feautre called native partitioning. This feature makes PostgreSQL great at handling alot of information from big datasets. This feature made PostgreSQL more efficient at sorting through data.
  - 2020: Version 13 of PostgreSQL is released and it contains alot of new features for perfomance improvement and heightened security.

## Main Features: PostgreSQL

| **Feature**                      | **Description**                                                                              |
| -------------------------------- | -------------------------------------------------------------------------------------------- |
| **Flexibility**                  | Supports adding custom extensions for adaptability.                                          |
| **Security**                     | Focuses on secruity with ACID complience: Atomicity, Consistency, Isolation, and Durability. |
| **Language support**             | Designed to includes most developers by supporting multiple languages and formats.           |
| **Fast and efficient searching** | Offers multiple tools to make fast and efficient searches in large, structured databases.    |

## Market Comparison: PostgreSQL vs. MongoDB

- I would like to compare PostgreSQL to MongoDB to showcase the difference between these two database management systems and why they work the best for their own usecases.

| **Aspect**                   | **PostgreSQL**                                                                                                   | **MongoDB**                                                                                                                                                     |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Storage Behaviour**        | Stores data in a organized, object-rational way. Using tables, rows and columns almost like a spreadsheet.       | Uses a NoSQL document-oriented model, like how information is stored in JSON documents.                                                                         |
| **Storage Unit**             | Rows, called tuples.                                                                                             | Serialized JSON documents.                                                                                                                                      |
| **When to use**              | Ideal for applications with structured information and type traditional applications including alot of features. | Suited for applications with unstructured, changing data or information that can be changed in real-time. For example: streaming services or financial systems. |
| **Scalability**              | Works great vertically, it adds on and becomes more powerful by adding resources to one server.                  | Works great horizontally, it spreads the workload onto multiple servers to ensure efficiancy.                                                                   |
| **Indexing**                 | Supports B-tree, hash, GIN, GiST, Sp-GiST index types.                                                           | Indexes at the field and collection level, supporting several index types: B-tree, compound, text, geospatial, hashed, and clustered indexes.                   |
| **Query language**           | Uses a SQL variation that is compatible with standard SQL queries.                                               | Uses MongoDB Query Language (MQL).                                                                                                                              |
| **Features & Functionality** | Load balancing, connection pooling tools, ACID compliance and advanced indexing.                                 | Horizontal scalability using sharding, data balancing and native support for JSON/BSON.                                                                         |

## Getting Started

### Installation

1. **Download and Install PostgreSQL:**

   - Visit and download PostgreSQL applicable for your operation system from the [PostgreSQL Download Website](https://www.postgresql.org/download/).
   - Follow the installation instructions for your operating system. I would follow the installation instructions from this page: [PostgreSQL Tutorial - Getting Started](https://www.postgresqltutorial.com/postgresql-getting-started/).

2. **Configuration and Setup:**

   - Following the installation you will be asked to set up a SuperUser account, your SuperUser information is important to remember.

3. **Connect to PostgreSQL:**
   - For detailed steps on connecting to PostgreSQL using the terminal or pgAdmin, please take a look at [PostgreSQL Tutorial - Connect to PostgreSQL](https://www.postgresqltutorial.com/postgresql-getting-started/connect-to-postgresql-database/).

## Conclusion

In conclusion, PostgreSQL is a strong, dependable, robust and adaptable open-source object-relational database management system (RDBMS) which have been developed and improved over a long time.

### Key Findings:

- **Flexibility and Stability:** PostgreSQL ensures flexibility, and works best for typical applications who handles alot of structred information, requiring high safety and fast searching. However it can still be very adapatble and flexible, so its highly usable for a wide range of use cases. Its stable performance and reliability make it go-to choice for alot of developers and programmers.

- **Advanced Features:** Over the years, PostgreSQL has evolved and added features to meet the needs of its developers and users. These include built-in replication, native partitioning, and regular updates for better performance and increased security.

### Advantages:

- **ACID Compliance:** PostgreSQL puts data integrity on its highest priority with ACID compliance. This makes PostgreSQL a good choice for most applications.

- **Language Support:** With support for multiple languages and formats, PostgreSQL can be used by most developers.

- **Efficient Searching:** PostgreSQL makes searching fast and efficient using powerful tools like B-tree, hash, and GiST indexing methods. This is very useful with large databases.

### Disadvantages:

- **Learning Curve:** PostgreSQL may be harder to learn for developers who are new or unfamiliar to databases and its usages, but there are amazing tutorials out there on how to get famillier with all of it.

### Main Use Cases:

- **Structured Information:** PostgreSQL excels in applications using and storing structured information. It is best for projects with easily sortable and structured data in small to large-scale databases.

- **Unstructured Data:** PostgreSQL might not be the best choice for applications using unstructured, live changing data. Like for example in banking, or streamings services. In projects like these I would rather reccomend MongoDB or similar databases.

### PostgreSQL's Future:

PostgreSQL has been constantly getting better and improving since it started. It is now a very big and reliable database management system with a strong, supportive community and a large number of contributors who are dedicated to contiunuing its improvement and development. With ongoing development and a commitment to meeting user needs, PostgreSQL seems to remain as an essential tool for managing data in the future aswell as today.

It looks to me like its future is very bright.

## References

- [PostgreSQL Official Website](https://www.postgresql.org/)
- [PostgreSQL Download Website](https://www.postgresql.org/download/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [PostgreSQL History Timeline](https://www.postgresql.org/about/history/)
- [Database Journal - What is PostgreSQL?](https://www.databasejournal.com/features/what-is-postgresql/)
- [AWS - The Difference Between MongoDB and PostgreSQL](https://aws.amazon.com/compare/the-difference-between-mongodb-and-postgresql/)
- [MongoDB Official Website](https://www.mongodb.com/compare/mongodb-postgresql)
- [PostgreSQL Tutorial - Getting Started](https://www.postgresqltutorial.com/postgresql-getting-started/)
- [PostgreSQL Tutorial - Connect to PostgreSQL](https://www.postgresqltutorial.com/postgresql-getting-started/connect-to-postgresql-database/)

## Additional Resources

- There are no additional resources.
