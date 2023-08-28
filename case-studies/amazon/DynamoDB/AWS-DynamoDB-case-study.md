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

This section can be used to compare the advantages and disadvantages of your chosen tool to other similar tools. You may use subheadings, tables or bullet points to structure your description.

If you are writing about an open source tool, it may be a good idea to compare it to similar proprietary tools. Likewise, if you are writing about a proprietary tool, it may be a good idea to compare it to similar open source tools.

Similarly, a self hosted tool and a cloud based tool with a similar purpose may make for a good comparison.

## Getting Started

If applicable, describe how to get started with your chosen tool. By providing examples, this can help to demystify a tool and make it more accessible to beginners.

## Conclusion

This section can be used to summarize your findings. What are the main advantages and disadvantages of your chosen tool? What are the main use cases for this tool? What are the main limitations of this tool? What does the future look like for this tool?

## References

- [Amazon DynamoDB](https://aws.amazon.com/dynamodb/)
- [Amazon DynamoDB - Features](https://aws.amazon.com/dynamodb/features/?pg=dynamodbt&sec=hs)
- [Amazon DynamoDB - Documentation and Whitepapers](https://aws.amazon.com/dynamodb/resources/)
- [Dynamo: Amazon's Highly Available Key-value Store - Giuseppe DeCandia](https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf)
- [Amazon’s DynamoDB — 10 years later](https://www.amazon.science/latest-news/amazons-dynamodb-10-years-later)
- [Happy 10th Birthday, DynamoDB!](https://aws.amazon.com/blogs/aws/happy-birthday-dynamodb/)

