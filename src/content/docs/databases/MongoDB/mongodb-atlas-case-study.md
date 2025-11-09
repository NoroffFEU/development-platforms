---
title: MongoDB Atlas
author: Veronika Reinhaug <VReinhaug>
tags: MongoDB Atlas, Case study, DBaaS
---

## Introduction

MongoDB – short for "humongous database", was founded in 2007, based on the limitations of relational databases. MongoDB Atlas, launched in 2016, is MongoDB’s fully managed, multi-cloud developer data platform. It automates scaling, backups, and monitoring of MongoDB, and offers built-in services like full-text Search, Vector Search, Stream Processing, and strong security and compliance controls — so teams can focus on building instead of running databases. Atlas runs on AWS, Azure, and Google Cloud, with optional multi-region and multi-cloud deployments.

## Brief History

- 2007: MongoDB (formerly known as 10gen) is founded by Dwight Merriman, Eliot Horowitz and Kevin Ryan.
- 2009: MongoDB is launched to the public.
- 2014: Dev Ittycheria joins as President and CEO.
- 2016: The DBaaS product Atlas is launched (initially on AWS).
- 2017: MongoDB Atlas available on AWS, Google Cloud Platform and Microsoft Azure.
- 2017: MongoDB becomes a publicly traded company.
- 2017: MongoDB Atlas is launched on AWS Marketplace.
- 2020: MongoDB Altas Search launched with general availability.
- 2020: MongoDB Atlas is the first cloud database to provide the opportunity to run applications on all major cloud providers simultaneously.
- 2022: MongoDB Atlas Serverless instances and Data API is generally available.
- 2023: MongoDB Atlas announces general availability of Vector Search and Search Nodes.

## Main Features

MongoDB Atlas is a multi-cloud database service that simplifies deploying and managing databases. In addition to deploying, scaling, observing and securing your databases, it also offers services like full-text search, vector search for AI, cloud backups and governance.

### What problems does MongoDB Atlas solve?

- **Operations overhead:** Upgrades, scaling, backups, monitoring and patching are managed for you.
- **Portability and resiliency:** Deploy across AWS, Azure and GCP, including multi-region and multi-cloud deployments.
- **Search and Analytics:** Built-in full-text search and vector search, and stream processing for real-time pipelines.
- **Security and Compliance:** Encryption in transit/at rest, private networking and major certifications and audits to ensure security and compliance across the platform.

### Features

| Feature                      | Description                                                                                                                                                                |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Managed clusters             | Choose between free, flex or dedicated clusters, which could include auto-scaling, backups, metrics, alerts and more.                                                      |
| Multi-region and multi-cloud | Nodes in your deployment can be set to use different cloud providers (AWS, Azure and GCP) and geographic regions.                                                          |
| Backups and restores         | Continuous cloud backup lets you restore data.                                                                                                                             |
| Monitoring                   | Alerts, charts and logs will help you monitor your clusters, and you can improve slow queries with the Performance Advisor.                                                |
| Atlas Search                 | Full-text search.                                                                                                                                                          |
| Vector Search                | Search and index your vector data.                                                                                                                                         |
| Stream Processing            | Read, write and transform streams of data.                                                                                                                                 |
| Data Federation              | Allows for querying, transformation and moving of data across different sources.                                                                                           |
| Security and networking      | Provides mandatory TLS/SSL, VPCs for all projects and authentication from sources you declare.                                                                             |
| Compliance                   | You decide which cloud provider to use, which is subjects to due diligence at least twice per year. You also decide where your customer data should be physically stored. |

## Market Comparison - Amazon DynamoDB

DynamoDB is AWS's native serverless NoSQL database, designed for single-digit millisecond performance at any scale and integration with the AWS stack.

### Similarities vs. Differentials

| Topic                        | MongoDB Atlas                                                   | Amazon DynamoDB                                                      |
| ---------------------------- | --------------------------------------------------------------- | -------------------------------------------------------------------- |
| Service Type (similarity)    | Fully managed cloud database                                    | Fully managed cloud database                                         |
| Transactions (similarity)    | Multi document ACID transactions                                | ACID Transactions across multiple items/tables                       |
| Backups/PITR (similarity)    | Continuous backups and point-in-time restore                    | Continuous backups and point-in-time restore                         |
| Clouds (differential)        | Multi-cloud (AWS, Azure, GCP)                                   | AWS only                                                             |
| Search/AI (differential)     | Built in Atlas Search and Vector Search                         | Use OpenSearch via zero-ETL for full-text and vector search          |
| Scale pattern (differential) | Replica sets and sharding                                       | Global Tables multi-region, multi-active replication                 |
| Data model (differential)    | Document model with flexible documents (BSON)                   | Key-value/document with partitions/sort key design                   |
| Ops model (differential)     | Managed clusters with automated scaling and rich admin controls | Fully serverless with chosen capacity mode, on-demand or provisioned |

## Getting Started

The easiest way to try MongoDB Atlas is to register an Atlas account before you create and deploy a free cluster (the M0 option). Select a provider and a region before you choose a name for your cluster. Note that cluster names can't be changed after the cluster is deployed. Create a database user, and add your IP address to gain access.

MongoDB offers [Atlas Learning Hub](https://www.mongodb.com/resources/product/platform/atlas-learning-hub) where you can attend courses to acquire new skills and learn more about the features MongoDB Atlas provides. You can choose between different learning formats, such as videos, interactive courses and documentation.

## Conclusion

MongoDB Atlas is great when you want a flexible document data model and managed operations, and you value built-in capabilities close to your operational data. The downside is that you have to be thoughtful about sharding and indexing for scale, and keeping an eye on cost for some useful features. If you only need one single cloud and want a purely serverless key-value store, an alternative like Amazon DynamoDB can be a good fit, but for teams that want one platform spanning data storage, search, and AI features across clouds, MongoDB Atlas is the one you want.

## References

- [Our story – mongodb.com](https://www.mongodb.com/company/our-story)
- [Article – venturebeat.com](https://venturebeat.com/business/mongodb-to-acquire-cloud-database-provider-mlab-for-68-million)
- [Press release – mongodb.com](https://www.mongodb.com/company/newsroom/press-releases/mongodb-unveils-mongodb-atlas-the-new-industry-standard-for-database-as-a-service)
- [Press release – mongodb.com](https://www.mongodb.com/company/newsroom/press-releases/mongodb-atlas-launches-on-aws-marketplace-streamlining-purchasing-for-joint-customers)
- [Press release - mongodb.com](https://www.mongodb.com/company/newsroom/press-releases/mongodb-atlas-is-the-first-cloud-database-to-enable-customers-to-run-applications-simultaneously-on-all-major-cloud-providers)
- [Product Announcement – mongodb.com](https://www.mongodb.com/community/forums/t/atlas-search-is-now-ga/5161)
- [Article – infoq.com](https://www.infoq.com/news/2022/06/mongodb-atlas-serverless/)
- [Press release – mongodb.com](https://www.mongodb.com/company/newsroom/press-releases/mongo-db-announces-general-availability-of-new-capabilities-to-power-next-generation-apps)
- [MongoDB Atlas Docs - mongodb.com](https://www.mongodb.com/docs/atlas/)
- [Product Announcement – mongodb.com](https://www.mongodb.com/company/blog/product-release-announcements/atlas-stream-processing-now-generally-available)
- [Customer Service Agreement – mongodb.com](https://www.mongodb.com/legal/customer-service-agreement/technical-and-organizational-security-measures)
- [Developer guide – docs.aws.amazon.com](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html)
- [ACID Transactions - mongodb.com](https://www.mongodb.com/resources/basics/databases/acid-transactions)
- [Product Announcement – aws.amazon.com](https://aws.amazon.com/blogs/aws/amazon-dynamodb-zero-etl-integration-with-amazon-opensearch-service-is-now-generally-available/)
- [Mongo DB Docs - mongodb.com](https://www.mongodb.com/docs/)
