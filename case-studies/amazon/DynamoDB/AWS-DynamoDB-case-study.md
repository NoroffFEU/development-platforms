---
title: AWS DynamoDB
author: Elias Ekornås <https://imdev.no>
tags: NoSQL, DBaas, Non-Relational Datastores, Not-Only-SQL
---

![aws-dynamoDB](https://d2908q01vomqb2.cloudfront.net/7b52009b64fd0a2a49e6d8a939753077792b0554/2019/03/05/dynamodb.jpg)

## Introduction

AWS DynamoDB is a managed Non-Relational Database (`NoSQL`) service provided by Amazon Web Services (`AWS`). It was designed to offer a highly scalable, fully managed, and low-latency database solution for developers and businesses needing to handle large amounts of data and high traffic loads.

## Brief History

In the mid-2000s, Amazon.com's exponential e-commerce growth posed a challenge, which was managing and scaling their database infrastructure. Traditional relational databases struggled with the vast data and traffic generated. Amazon sought a solution delivering high `performance`, `scalability`, and `reliability`.

In 2004, Amazon engineers acknowledged the need for a novel database to meet scalability demands. They came up with an internal system named "Amazon Dynamo," designed for high availability, fault tolerance, and consistent performance despite hardware failures or network issues.

In 2007, Amazon's engineers unveiled their work in a paper titled "Dynamo: Amazon's Highly Available Key-value Store." This publication outlined Dynamo's construction principles, attracting significant attention in tech circles. It fueled discussions on distributed databases, NoSQL, and database scalability.

Recognizing growing interest in scalable, available databases, Amazon leveraged their technology for external use via Amazon Web Service (`AWS`). In 2012, Amazon introduced Amazon DynamoDB, a fully managed NoSQL database service on AWS. Developers could delegate database management complexities while leveraging Dynamo's core principles.

## Main Features

DynamoDB has rapidly become a favorite among startups, enterprises, and developers who are in search of reliable and scalable databases, all while avoiding the challenges of managing infrastructure. Its adaptability across various applications, ranging from mobile apps to real-time analytics, has been a key factor in driving its widespread adoption.

By utilizing DynamoDB, developers are liberated from the intricacies of handling both hardware and software components. The platform takes on the intricate task of scaling partitions and re-partitioning data to align with the specific throughput requirements. It accomplishes this seamless scaling without necessitating manual intervention for re-partitioning tables. This automatic process guarantees consistently low latency access to your data, with response times typically in the single-digit millisecond range.

The list below includes but is not limited to some of the most important features that DynamoDB offers it's customers.

|    Features      |              Description                           |
| --------------- | -------------------------------------------------- |
| Managed NoSQL Database | DynamoDB allows you to easily scale up or down based on your application's needs, without requiring you to provision hardware. |
| High Availability | It offers built-in high availability and data durability by automatically replicating data across multiple Availability Zones. |
| Data Replication | DynamoDB supports global tables, enabling you to replicate data across multiple AWS regions for low-latency access from anywhere. |
| On-Demand Capacity | You can choose to pay for read and write capacity by actual usage, known as on-demand capacity mode. |
| Provisioned Capacity | Alternatively, you can provision a specific amount of read and write capacity to handle predictable workloads. |
| Auto Scaling | DynamoDB can automatically adjust capacity to handle traffic spikes without manual intervention. |
| Data Encryption | Data at rest is encrypted using AWS Key Management Service (KMS). Additionally, data in transit can be encrypted using Transport Layer Security (TLS). |
| Fine-Grained Access Control | You can control access to tables and resources using AWS Identity and Access Management (IAM) and fine-grained access control policies. |
| Flexible Schema | DynamoDB's schema-less nature allows you to add or remove attributes from items without altering the database schema. |
| Fully Managed Backups | DynamoDB provides continuous backups and enables point-in-time recovery to protect your data. |
| Global Secondary Indexes (GSI) | GSIs enable you to create alternative query patterns for your data, improving query performance. |
| Local Secondary Indexes (LSI) | LSIs provide another way to query your data, but they are limited to items with the same partition key as the base table. |
| In-Memory Acceleration with DAX | DynamoDB Accelerator (DAX) is an in-memory cache that can significantly improve read performance. |
| Time-to-Live (TTL) | You can configure items to expire automatically after a specified amount of time. |
| Streams | DynamoDB Streams capture changes to the data in real-time, allowing you to react to changes or perform data analysis. |
| Cross-Region Replication | You can replicate tables across regions for disaster recovery or to serve global users with low-latency access. |
| Triggers with AWS Lambda | You can configure triggers to invoke AWS Lambda functions in response to changes in the DynamoDB table. |
| Consistent and Eventually Consistent Reads | DynamoDB offers two types of read consistency options for different application needs. |


## Market Comparison

In this section i will be comparing AWS DynamoDB with Oracle NoSQL Database pricing models and the technical aspects that they both incorporate.

### Provisioned Capacity Pricing Model

Provisioned capacity in the context of databases refers to the pre-allocated resources that you set up to handle the anticipated workload of read and write operations on your database.

In other words, when you provision capacity for a database, you are specifying the amount of computing resources (such as processing power, memory, and storage) that should be dedicated to handling the data access operations. This capacity is allocated based on your expected usage patterns, traffic volume, and performance requirements.

Some of the key points about provisioned capacity are:
1. **Predictable Performance**: By provisioning a set amount of capacity, you can ensure consistent and predictable performance for your database, as it will have a dedicated amount of resources available at all times.
2. **Cost Predictability**: Provisioned capacity typically comes with a fixed cost associated with the allocated resources. You pay for the capacity you provision, regardless of whether you fully utilize it or not.
3. **Adjustable**: While provisioned capacity provides a baseline level of performance, many cloud database services allow you to adjust the provisioned capacity up or down as your needs change. This allows you to scale your resources to match changes in traffic or workload.
4. **Capacity Planning**: Provisioned capacity often requires some level of capacity planning to determine the appropriate amount of resources needed to handle your database's workload effectively.
5. **Optimized for Steady Workloads**: Provisioned capacity is well-suited for workloads that have relatively steady and predictable traffic patterns. It ensures that your application doesn't face performance fluctuations due to sudden spikes in traffic.

One of the drawbacks with provisoned capacity is excess capacity that can lead to over-provisioning which will result in unnecessary costs or provisioning too little capacity which can result in performance bottlenecks during high-demand periods.


ℹ️ **EDITORS NOTE**: I would like to take this opportunity to apologize if some of the price comparisons are not quite correct in the table below, it was difficult to find and adjust the relevant values to compare with one another. ℹ️




|          |             AWS DynamoDB                           |              Oracle NoSQL Database                           |
| --------------- | -------------------------------------------------- | -------------------------------------------------- |
| Monthly write cost | 33.46 USD  | 25.08 USD = 200 writes x $0.1254 |
| Monthly read cost | 3.37 USD  | 1.28 USD = 200 reads x $0.0064 |
| Storage | 7.43 USD = 25GB | 1.65 USD = 25GB |
| Upfront write cost | 356.00 USD  | 0 USD |
| Upfront read cost | 35.60 USD  | 0 USD |
| Total Monthly Billing | First Month: 391.60 USD<br>After: 44.26 USD  | 28.01 USD |
| Total Price First Year | 922.72 USD  | 336.12 USD |

ℹ️ **EDITORS NOTE**: The prices in the table are from the expected calculations provided by each website thus you should take into consideration that there might be some slight differences. ℹ️

### Free Tier Model

Both database providers offer free tiers for their services, below you can see the comparison.

|          |             AWS DynamoDB Free Tier (Provisioned Capacity)                           |              Always Free NoSQL Database Service (Provisioned Capacity)                           |
| --------------- | -------------------------------------------------- | -------------------------------------------------- |
| Free Tier Time Limitation | The free tier is available for up to 12 months from the accounts activation date. | The Always Free services are available for an unlimited period of time. |
| Write Capacity | 25 WCUs of provisioned capacity for tables using the DynamoDB Standard table class. | Write Capacity (Write Units) is 50 and cannot be changed. |
| Read Capacity | 25 RCUs of provisioned capacity for tables using the DynamoDB Standard table class. | Read Capacity (Read Units) is 50 and cannot be changed. |
| Storage | 25 GB of data storage for tables using the DynamoDB Standard table class. | Disk Storage is 25GB and cannot be changed. |
| Replicated Write Cpacity | 25 rWCUs for global tables using the DynamoDB Standard table class deployed in two AWS Regions. | Electable source-replica replication per shard. Support distributed global deployment with Multi-region table feature |
| Streams | 2.5 million stream read requests from DynamoDB Streams | ❌ Oracle Does Not Have This Feature. |
| Data Transfer | 1 GB of data transfer out (15 GB for your first 12 months), aggregated across AWS services | ❌ Oracle Does Not Have This Feature. |


### Technical

The table below shows some of the more technical comparisons of the two databases.

|          |              AWS DynamoDB                           |              Oracle NoSQL Database                           |
| --------------- | -------------------------------------------------- | -------------------------------------------------- |
| Database Model | Document Store<br>Key-Value Store | Document Store<br>Key-Value Store<br>Relational DBMS (Primary Model)<br>Graph DBMS<br>RDF Store<br>Spatial DBMS |
| License | Free tier for a limited amount of database operations. | Proprietary for Enterprise Edition. |
| Cloud-Based Only | ✅ | ❌ |
| Server Operating Systems | Hosted | Linux<br>Solaris SPARC/x86 |
| Support for SQL | ❌ | SQL-like DML and DDL Statements |
| API's and other access methods | RESTful HTTP API | RESTful HTTP API |
| Support Programming Languages | .Net<br>ColdFusion<br>Erlang<br>Groovy<br>Java<br>JavaScript<br>Perl<br>PHP<br>Python<br>Ruby | C<br>C#<br>Go<br>Java<br>JavaScript (Node.js)<br>Python |
| Transaction Concept | ACID across one or more tables within a single AWS account and region. | ACID within a storage node (=shard). |
| API's and other access methods | RESTful HTTP API | RESTful HTTP API |

## Setting up AWS DynamoDB

To use the DynamoDB service, you must have an AWS account. You're not charged for any AWS services that you sign up for unless you use them.

1. If you don't already have one - [Create a new AWS Account](https://portal.aws.amazon.com/billing/signup#/start/email).
- - Follow the online instructions.<br>Part of the sign-up procedure involves receiving a phone call and entering a verification code on the phone keypad.<br>When you sign up for an AWS account, an AWS account root user is created. The root user has access to all AWS services and resources in the account. As a security best practice, [assign administrative access to an administrative user](https://docs.aws.amazon.com/singlesignon/latest/userguide/getting-started.html), and use only the root user to perform tasks that require root user access.
2. [Get an AWS access key](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SettingUp.DynamoWebService.html#SettingUp.DynamoWebService.GetCredentials)
- - Before you can access DynamoDB programmatically or through the AWS Command Line Interface (AWS CLI), you must have programmatic access. You don't need programmatic access if you plan to use the DynamoDB console only.
3. [Configure your credentials](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SettingUp.DynamoWebService.html#SettingUp.DynamoWebService.ConfigureCredentials)
- - Before you can access DynamoDB programmatically or through the AWS CLI, you must configure your credentials to enable authorization for your applications.<br>There are several ways to do this. For example, you can manually create the credentials file to store your access key ID and secret access key. You also can use the aws configure command of the AWS CLI to automatically create the file. Alternatively, you can use environment variables. For more information about configuring your credentials, see the programming-specific AWS SDK developer guide.<br>To install and configure the AWS CLI, see [Using the AWS CLI](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tools.CLI.html).

This should get you up and running with AWS DynamoDB Web service.

### DynamoDB Documentation

The docs files include an extensive range of step by step procedures thus fitting them all in here would be counterproductive, this is why.
I will include some important links to the docs files so that any interested party can have quick access to read material as they see fit.

- [Accessing DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/AccessingDynamoDB.html)
- [Getting started with DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStartedDynamoDB.html)
- [Getting started with DynamoDB and the AWS SDKs](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.html)
- [Programming with DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.html)
- [Working with DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithDynamo.html)
- [In-memory acceleration with DynamoDB Accelerator (DAX)](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.html)
- [Data Modeling](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/data-modeling.html)
- [NoSQL Workbench](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/workbench.html)
- [Code examples](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/service_code_examples.html)
- [Security](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/security.html)
- [Monitoring](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/monitoring.html)
- [Best Practices](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/best-practices.html)
- [Integrating with other AWS services](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/OtherServices.html)
- [Troubleshooting Amazon DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Troubleshooting.html)

## Conclusion

AWS DynamoDB stands as a testament to the ever-evolving landscape of database technology, offering a versatile, scalable, and fully managed NoSQL solution. Its roots in Amazon's need to handle immense e-commerce data led to the development of a groundbreaking database system named "Amazon Dynamo." This innovation not only met Amazon's scaling requirements but also sparked discussions in the tech world about distributed databases, NoSQL, and database scalability.

DynamoDB's journey from an internal system to an external service within AWS has been marked by continuous evolution and the incorporation of features that cater to a wide array of use cases. Developers and businesses have embraced it as a solution that liberates them from the complexities of infrastructure management.

Key features like automatic scaling, data replication, fine-grained access control, and in-memory acceleration with DAX have played a pivotal role in DynamoDB's success. Its flexible schema, global and local secondary indexes, and support for streams and triggers with AWS Lambda make it adaptable to various applications, from mobile apps to real-time analytics.

Additionally, DynamoDB offers multiple capacity modes, including provisioned capacity, allowing users to choose the most suitable model for their workloads. Provisioned capacity provides predictable performance and cost, making it an ideal choice for steady workloads.

In this comprehensive overview, we've also delved into the market comparison between AWS DynamoDB and Oracle NoSQL Database, examining pricing models and technical aspects. DynamoDB's provisioned capacity pricing model ensures performance predictability, while Oracle NoSQL Database offers an always-free provisioned capacity model, although with certain limitations.

In essence, AWS DynamoDB continues to be a significant player in the world of modern database solutions, providing a robust foundation for applications that demand high scalability, availability, and low-latency data access. Its evolution and feature-rich nature make it a compelling choice for developers and businesses alike.

## References

- [Amazon DynamoDB](https://aws.amazon.com/dynamodb/)
- [Amazon DynamoDB - Features](https://aws.amazon.com/dynamodb/features/?pg=dynamodbt&sec=hs)
- [Amazon DynamoDB - Documentation and Whitepapers](https://aws.amazon.com/dynamodb/resources/)
- [AWS Documentation](https://docs.aws.amazon.com/index.html)
- [Pricing for Provisioned Capacity](https://aws.amazon.com/dynamodb/pricing/provisioned/)
- [AWS Free Tier FAQs](https://aws.amazon.com/free/free-tier-faqs/?audit=2019q1)
- [Dynamo: Amazon's Highly Available Key-value Store - Giuseppe DeCandia](https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf)
- [Amazon’s DynamoDB — 10 years later](https://www.amazon.science/latest-news/amazons-dynamodb-10-years-later)
- [Happy 10th Birthday, DynamoDB!](https://aws.amazon.com/blogs/aws/happy-birthday-dynamodb/)
- [DynamoDB vs Oracle NoSQL - The Ultimate Comparison](https://dynobase.dev/dynamodb-vs-oracle/)
- [System Properties Comparison Amazon DynamoDB vs. Oracle NoSQL](https://db-engines.com/en/system/Amazon+DynamoDB%3BOracle+NoSQL)

