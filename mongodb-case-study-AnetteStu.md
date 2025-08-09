---
title: MongoDB Case Study
keywords: Development platforms, Mongo, MongoDB, DBaaS
tags: Development Platforms, Mongo, MongoDB, DBaaS, Database
sidebar: development-platforms
permalink: development-platforms/mongoDB.html
folder: development-platforms
---

## Table of contents

1. [Introduction](#introduction)
2. [Brief History](#brief-history)
3. [Features](#features)
4. [Cluster Solutions](#cluster-solutions)
5. [Strengths](#strengths)
6. [Weaknesses](#weaknesses)
7. [Pricing](#pricing) 
8. [Comparison](#comparison)
9. [Directions](#directions)
10. [Summary](#summary)
11. [Credits](#credits)
12. [References](#references)

## **Introduction**
**MongoDB Atlas** is a DBaaS (Database as a Service), open-source NoSQL database which provide back-end services to their consumers, They use RAM to store the data to make it easily and quickly accessible to the consumer. They focus on staying flexible and working towards streamlining their databases to make it easier for the end-users. They offer three different options for serving your clusters. MongoDB Atlas market themselves as an integrated suite of data services centered around a cloud database, designed to accelerate and simplify how you build with data. 

They provide easy-to-follow guidelines to set up your clusters and free alternatives to learn how their database work. This free alternative can later, very simply be upgraded to some of their other cluster alternatives, to expand your project and take it to the next level. Their databases are document-based and horizontally flexible, their services can be used for both Web and Mobile apps development.  

## **Brief History**
- **2007** 10gen created an open-source database with horizontal scaling, they called this MongoDB.
- **2010** version 1.4 hit the market, this was the first version ready to be used by consumers.
- **2013** subscription based alternatives was released to the public. 10Gen also re-branded to MongoDB inc.
- **2014** version 2.4.9 launched, which was a more stable build. 
- **2016** MongoDB inc launched their cloud service, Atlas! 
- **2020** Atlas advances with Atlas Data lake, Atlas Search and MongoDB realm

## **Features**
DBaaS, cloud service, scalable, free trial forever, chose between Shared, Dedicated and Serverless clusters as well as different tiers and configurations for them all. 

Comes with a high focus for security, is horizontally scalable (Instead of expanding existing storage, which is costly, you can utilize more smaller servers, also called sharing.), it uses noSQL, document-based indexing, which makes finding, updating and maintaining data very easy and accessible. 

Can be self-hosted or hosted with Atlas(Global cloud DBaaS, select region for better read and write time (or ping)), can also be multi-region for better read/write times worldwide, both can be free or paid services. 24/7 uptime with DBaaS, sing Amazon, google or Azure servers. 
Comes with Compass, which is a UI where you can interact with data with full CRUD functionality, and manage and modify your Database.
Backend comes with trigger, functions and graphQL
With Atlas comes an integrated Search functionality on top of your databases that is lucene powered with typo-tolerance, autocomplete, filters and more....

Other features
* Charts
* Archives 
* Data Lake

## **Cluster Solutions**
**Shared**<br>
Shared solutions are the cheapest alternative (Including free), it shares hardware with other users, which slows down response time. You also have limited configuration options with this alternative. With shared clusters, you've got the from 512Mg to 5Gb storage space, whereas 3Gb and 3Gb are paid plans. The shared solution option is created purely to try out MongoDB and learn how it works. 

**Dedicated**<br>
Dedicated solutions are the business solution created for production applications, with sophisticated workload requirements. The available space for dedicated clusters varies from 10Gb to 4Tb(4000Gb) and you get the option to dedicate RAM to your cluster, this varies from 2Gb to a whopping 768Gb. Additionally you get an extra layer of safety with network isolation and more control over your cluster settings. To top it off, you get spread out multi-region and multi-cloud options, to make your contents available worldwide at fast load speeds. 

**Serverless**<br>
Serverless is the newest addition to the cluster variants MongoDB. It is a flexible option that scales to your projects traffic, it automatically assign more or less working RAM depending on how much workload your project is under. In retrospect, this means that in down-times with little traffic, you pay way less, since less resources are needed to keep uptime for your project. This is a perfect solution for a small business with varied traffic or a promotion website with large inactive times.

## **Strengths**
- Document-based storage, giving consumers the ability to store any kind of data, anywhere in the database. 
- Supports geo-location
- Has built in search-functions and aggregation to API calls
- Objects can be nested inside of objects
- Has a very good structure with projects > clusters > databases > collections 
- Cloud based, hence easily accessible 
- High security with IP configuration possibilities
- Easy to learn and has excellent teaching practices 
- No need to install a server and maintain it
- Patching, backups, crashing and security vulnerabilities are taken care of by MongoDB Atlas

## **Weaknesses**
- You depend a lot on the provider to keep your database up and running
- You lose a lot of the specific controls to make your database run at peak performance, seeing you essentially need to share resources (more or less) with other consumers.
- May experience latency because the service isn't tweaked to peek the performance of your own project.
- May not be easy to convert from one database to another, namely vendor lock-in
- Can become very expensive, depending on cluster solution chosen
- There's a vulnerability to the update syntax whereas you use just "update" instead of "updateOne" or "updateMany" where it will will delete a lot of crucial information from the object you tried to update. Only the value you updated will remain. 

## **Pricing**
The specific differences for the prices can be found in 
[Cluster Solutions](#cluster-solutions) <br>
Serverless: 
- Ranges from $0.10 to $2.50 per hour/Month/GB<br>
Varies a lot depending on the services you wish for. You only pay for what your operation runs.

Dedicated: 
- M10 ($0.08/hr) > M700 ($36/hr)

Shared: 
- M0(Free) > M5 ($25/month)

## **Comparison**
Baas systems has much more freedom when for tweaking settings, you have 100% control over everything, but there's a lot of backend responsibility such as making sure unauthorized users don't get access to restricted resources, as well as making sure to always have a reliable backups, in case something goes wrong. 

You can also decide exactly what users can gain access too and what strategy for backup and restore you want to utilize.
Baas is fundamentally free, but will require uptime from a server at all time, making it energy and is dependent on that someone maintains it (Close to) 24/7.

## **Directions**
Getting started with MongoDB Atlas is not only easy but you also got the option to try it out for free. 
There's many variables for how to set up your MongoDB Atlas database, but this is how I prefer to do it for my test-project. 
Get started by signing up (Either by email, or an already existing GitHub or Google account). Once you're set with your account, you'll be redirected to a setup where you're prompted to specify what you'll be using MongoDB for. (If needed you can select "Learn MongoDB" to be introduced to the different tools with a wizard and you get the option to get sample collections for your database.)

- Select which Cloud database you want, Serverless, dedicated or shared (Shared is free and best for testing smaller-scale projects)
- Select provider and region, it's recommended to select a region close to your physical location for quicker response time. 
- Cluster Tier, additional settings and Cluster name doesn't need to be edited for a simple test-setup. Though you might want to migrate backup later if you want to publish the project. 
- You'll be prompted to do a quick reCAPTCHA test to verify you're a human
- Setup authentication with "Username and Password", insert your username and password and click "create user"
- Use "My Local Environment" for connection. I put 0.0.0.0/0 for allowing me to manage my cluster from any computer and without needing to worry about being unauthorized, and having to re-add my IP address every time it regenerates. You may want to set a static IP address on your network and insert this to protect your clusters, but this is not recommended if you're currently using a standard home-network, this is a better alternative for businesses with dedicated servers. 
- Initialization of the database may take a little while, perfect opportunity to enjoy a coffee or lunch break
- You can set up a test database by heading "Database" on the left-hand screen, click "+ Create Database". Insert your desired name Database and collection name and hit create
- You can click the collection and add a value here, or you can do that later in testing. 

There's a few settings you need to adjust in order to connect to the database, I've chosen to connect to it using their API. 
- In "Data API" on the left-hand of the screen, click "Create API Key", insert a name and hit "create". Make sure to copy the API Key and save it, this will only be shown once.
- You need to enable access to the API endpoints, to do so you need to head to "App Services", click the app on the bottom left, and finally, on the left hand side under "build" click "HTTPS Endpoints", then "Data API" at the top, make sure Data API are enabled for the endpoints you want to use and hit save. 
- You can test the API and create a fork to your postman for testing endpoints, select the database and collection you want to connect to and hit the "Run in postman" button. 
You'll be redirected to postman and need to edit the variables.
- Insert your API Key to "API_KEY", and insert the URL from "URL Endpoint" on the Data API Page you're on, and fill in the remainder variables with the corresponding values from your database, you may also want to paste the values to "Current Value" for the call to work properly. 
Also read <a href="https://www.mongodb.com/docs/atlas/api/data-api/#call-a-data-api-endpoint">this documentation</a> for additional information about connecting to the endpoint.
- In the "Authorization" tab in postman, select type "API Key" and insert "api-key" in the key and the API key you saved earlier in the "Value", the "Add to" should be set to header. This needs to be done for every action type you want to try
- Now you can call the different endpoints with the example data given by the fork

## **Summary**
MongoDB is a very versatile and scalable system for managing content, it's easy to set up, connect to, retrieve and edit data.
With MongoDB Atlas got a very versatile and forward leaning Database system which sets your projects up for success. They're cloud based, you've got plenty of alternatives for your clusters varying from a completely free Shared solution to the higher-end Dedicated and Serverless solutions, where you can chose how much capacity you need, can easily upgrade or chose the auto-scalable solution with serverless. Alternatively they offer some amazing in-app services which lets you filter and sort your query results in a very simple manner, with built-in search functions, as well as aggregation. 

### **Credits**

- Anette Stustad (AnetteStu)

### **References**
#### <span style="color:grey;font-weight:bold">Documents</span>
- <a href="https://www.mongodb.com/pricing">MongoDB Prices (+ prices found locally in my project)</a>
- <a href="https://petedejoy.com/writing/mongodb">A short history of MongoDB</a>
- <a href="https://www.w3schools.in/mongodb/history">History of MongoDB by w3Schools</a>
- <a href="https://www.mongodb.com/company#:~:text=MongoDB%20was%20founded%20in%202007,the%20shortcomings%20of%20existing%20databases.">MongoDB About Us</a>
- <a href="https://www.mongodb.com/database-as-a-service#how-to-choose-a-databaseasaservice">MongoDB - Database as a Service Explained</a>

#### <span style="color:grey;font-weight:bold">Videos</span>

- <a href="https://www.youtube.com/watch?v=8suRVB5h5-w&ab_channel=HiteshChoudhary">Database issues with Update in mongodb</a>
- <a href="https://www.youtube.com/watch?v=1EaOihoxyoE&ab_channel=MongoDB">What is MongoDB Atlas</a>
- <a href="https://www.youtube.com/watch?v=VOLeKvNz-Zo&ab_channel=IBMTechnology">What is mongoDB - IBM</a>
- <a href="https://www.youtube.com/watch?v=RGfFpQF0NpE&ab_channel=MongoDB">MongoDB Explained in 10 Minutes | SQL vs NoSQL | Jumpstart</a>
- <a href="https://www.youtube.com/watch?v=t3UjWbh7mqI&ab_channel=CalebCurry">Connect to MongoDB - React Tutorial 79</a>
- <a href="https://www.youtube.com/watch?v=ofme2o29ngU&ab_channel=WebDevSimplified ">Mongo DB Crash Course</a>
- <a href="https://www.youtube.com/watch?v=-bt_y4Loofg&ab_channel=Fireship">MongoDB in 100 Seconds</a>
- <a href="https://www.youtube.com/watch?v=qfiOVB3yMHQ&ab_channel=IBMTechnology">What is DBaaS? Should you use it?</a>

#### <span style="color:grey;font-weight:bold">Mist. Other resources</span>
- <a href="https://www.oracle.com/database/what-is-a-cloud-database/dbaas/">DBaaS (and Paas)</a>
- <a href="https://www.ibm.com/topics/dbaas?utm_medium=OSocial&utm_source=Youtube&utm_content=SOFWW&utm_id=YTDescription-What-is-DBaaS-LH"> DBaaS IBM</a>
- <a href="https://www.ibm.com/cloud/databases?utm_medium=OSocial&utm_source=Youtube&utm_content=SOFWW&utm_id=YTDescription-What-is-DBaaS-Product-Cloud-Databases">Cloud Database free trial from IBM</a>
- <a href="https://www.ibm.com/cloud/free/databases"> IBM Free Databases</a> 
- <a href="https://cloud.ibm.com/catalog?category=databases&search=label%3Aibm_created%20label%3Afree">IBM Datasets</a>

- <a href="https://www.ibm.com/topics/faas?utm_medium=OSocial&utm_source=Youtube&utm_content=000023UA&utm_term=10010608&utm_id=YTDescription-101-What-is-FaaS-Learn-Hub-Functions-as-a-Service-Guide">IBM Faas</a>

- <a href="https://www.youtube.com/watch?v=Q5aTUc7c4jg&ab_channel=IBMTechnology ">Irrational, SQL vs NoSQL</a>
- <a href="https://www.youtube.com/watch?v=EOIja7yFScs&ab_channel=IBMTechnology">Faas</a>
- <a href="https://www.youtube.com/watch?v=0buKQHokLK8&ab_channel=SimplyExplained">NoSQL simply explained</a>
