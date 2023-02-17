---
title: AWS Amplify Product Case Study
keywords: development platforms, AWS, Cloud Computing, Amplify
tags: Development Platforms, AWS, Cloud Computing, Amplify
sidebar: development-platforms
permalink: development-platforms/example-product.html
folder: development-platforms
---

## Table of contents

1. [Introduction](#introduction)
2. [Milestones in the history of AWS and cloud computing](#milestones-in-the-history-of-aws-and-cloud-computing)
3. [Features](#features)
4. [Strengths](#strengths)
5. [Weaknesses](#weaknesses)
6. [Comparison](#comparison)
7. [Summary](#summary)
8. [Credits](#credits)
9. [References](#references)


## Introduction

Cloud computing is the on-demand delivery of computing power, database, storage, applications, and other IT resources

In this study case, I will be looking into the world’s biggest cloud platform Amazon Web Services (AWS), and have a closer look at using AWS Amplify as a BaaS platform 


## Milestones in the history of AWS and cloud computing 

* 1950s 
  * The Invention of mainframe computing, using a central computer accessed by several devices, all using the capabilities of the central computer. 

* 1970s
  * The concept of Virtual machines emerges, having multiple complete operating systems that "live" in a single piece of hardware. This allowed a mainframe computer to run multiple operating systems at the same time. 

* 1989 
  * UK computer scientist Tim Berners-Lee invented the World Wide Web.

* 1999 
  * Cloud-based software company Salesforce was founded.
 
* 2002 
  * Amazon Web Services (AWS) launched as a free service 

* 2006 
  * AWS started offering web-based computing infrastructure services, now known as cloud computing.

* 2008 
  * Google announced App Engine, a developer tool that allowed users to run web applications on Google infrastructure.

* 2010 
  * Microsoft released Azure, its cloud computing service.

* 2011
  * IBM introduced the SmartCloud framework.

* 2015 
  * Google and Microsoft lead massive build-outs of data centers.

* 2018 
  * Leading data center operators started the migration to 400G data speeds.
  * AWS Amplify Console launched.
  


## Features

Amazon Web Services (AWS) is the largest online retailer in the world. AWS provides cloud computing services to individuals, companies, and governments. In addition, it offers a set of remote computing services, including hosting and storage space on its servers, access to these resources through the internet, tools for managing them, and a range of other features that make it easier to build large-scale web applications

![image](https://user-images.githubusercontent.com/80599295/216784422-20d9a0c5-a882-403a-a768-8ec1658163b6.png)

pie chart by [Synergy Research Group](https://www.srgresearch.com/)
 <br>
 <br>
 <br>

AWS offers a vast number of services, too many to make an in-depth study case. so now that we had a quick look at AWS and cloud computing in general I will now focus on **AWS Amplify** AWS Amplify is an open-source JavaScript library provided by Amazon Web Services (AWS).

If you want to learn more about other services provided by AWS click [here](https://aws.amazon.com/products/?aws-products) to see a full list of products offered by AWS. 


#### AWS Amplify as a BaaS platform

AWS Amplify is a BaaS platform by Amazon to help developers quickly build full-stack applications on AWS. To make it possible, Amplify provides the following set of tools: 

##### Amplify Studio
Amplify Studio is a visual interface that offers a point-and-click environment for building full-stack applications (both front and backend).

##### Amplify CLI
Amplify CLI is a toolchain for configuring and managing an application backend.

##### Amplify Libraries
Amplify Libraries is an open-source set of client libraries used to build cloud-native mobile and web apps.

##### Amplify UI Components
Amplify UI Components is an open-source design system that uses cloud-connected components to enable the efficient building of applications.

##### Amplify Web Hosting

Amplify Web Hosting is a fully-managed continuous integration and continuous delivery/continuous deployment (CI/CD) service for hosting static and server-side rendered applications.

With Amplify, you can configure a web or mobile app backend, connect your app in minutes, visually build a web frontend UI, and manage app content outside the AWS console. Ship faster and scale effortlessly—with no cloud expertise needed. (Source: 
[AWS amplify](https://aws.amazon.com/amplify/))

Amplify Hosting supports common SPA frameworks like React, Vue.js, Ionic and Ember as well as statistic site generators like Gatsby, VuePress and Jekyll.   

If you have existing code, and you want to deploy it through Amplify Web Hosting, then you can connect your git repository (GitHub, BitBucket Cloud, GitLab, and AWS CodeCommit) to set up continuous deployment.    

Other components provided by AWS Amplify: 

* Storage
  * Keep your app data synced with the cloud, manage your distributed data, and handle subscriptions and messaging.
* Analytics
  * Track user sessions and report on their behavior. Set up custom attributes and analyze conversion funnels. 
* Authentication
  * Access ready-to-use workflows for MFA, single sign-on, forgot password, etc.
* Push Notifications
  * Manage your campaigns and send messages to your users across multiple channels, including text, email, and push. 

AWS Amplify is used by companies like Neiman Marcus, Noom, Amazon Music, Credit Genie, HyperTrack, and many more.

## Strengths

#### Advantages of using AWS Amplify as a Baas platform

* Built on top of other AWS services. The free tier offers to get you started for free.  
* Create and deploy web applications without any coding.

#### Additional benefits that come with cloud computing  

* Unlimited capacity.
* Increase speed and agility
* No need to run and maintain data centers. 
* Reduce costs with scalable capacity 
* Go global in minutes 

## Weaknesses

###### Downtime 
<br>
When the cloud provider has an internet outage or weak connectivity, services will get interrupted. It is rare for a cloud provider to experience an outage, but it does happen. 


###### Security 
<br>
According to this survey, almost [98% of companies using cloud computing services experienced at least one data breach](https://ermetic.com/blog/cloud/state-of-cloud-security-2021-more-aware-yet-very-exposed) from 2020 to 2022. Inadequate cloud security measures lead to data leakage over cloud networks which can result in intellectual property theft, contract breaches, and malware attacks. Hackers can also control how companies provide services to their customers or end-users. 



###### Vendor Lock-in
<br>
Vendor lock-in refers to a situation where we become heavily dependent on the cloud computing services of a particular vendor making it difficult to switch to a different vendor. This usually happens because of large amounts of data which is difficult to migrate, and the codebase and architecture of the application may need to be significantly refactored to work with another vendor’s infrastructure and APIs. 

AWS although admitting that there is a degree of dependency, claims that vendor lock-in is not the challenge you might perceive, as data can be moved freely, and it is made as open source available to all, enabling to make their own technology choice at any point up the stack. You can read more [here](https://aws.amazon.com/campaigns/uk-enterprise-executive-leaders/vendor-lock-in-blog) and [here.](https://docs.aws.amazon.com/whitepapers/latest/unpicking-vendor-lock-in/unpick-vendor-lock-in.html) 

###### Costs can add up quickly 
<br>
Costs can be both a significant advantage and disadvantage of cloud computing. 

## Comparison

#### AWS Amplify vs Azure Mobile apps

Both AWS Amplify and Azure Mobile apps are cloud-based platforms and offer similar services. Both support popular frameworks, such as React Native, Xamarin, and Angular <However, there are some differences too. 

###### Differences:  
1. Amplify offers tools for building a full-stack web application, while Azure Mobile apps only offer backend services.
2. Amplify supports front-end frameworks like React Native and Angular, while Azure mobile apps integrate with client platforms, such as iOS, Android, and Windows, and it supports Xamarin and React Native. 
3. Pricing: AWS Amplify has a flexible pricing model that charges based on usage, while Azure Mobile Apps has a set pricing model that charges based on the number of API calls and data storage.
4. Amplify provides a limited set of libraries, and UI components (see [Features](#features) for details) making it easier to get started while Mobile Apps provides a comprehensive set of features and services, but may require more setup and configuration compared to AWS Amplify.

#### AWS Amplify vs Google Firebase

Firebase was originally founded as an independent company, but was acquired by Google in 2014, and has since then been integrated with other services that they offer, such as the Google Cloud Platform. 


###### Differences:  
1. Firebase is mostly geared toward Android users and does not provide the same capabilities for IOS apps.  
2. Firebase has been around for longer and has a more extensive feature set.
3. Firebase is not yet as integrated into other cloud platform services as Amplify.  

## Summary
AWS Amplify does take time to master but will provide benefits once it is mastered. it provides developers with tools like authentications, notifications, and APIs. 
Overall, AWS Amplify is a powerful tool for developers who want to build web and mobile apps quickly and easily. 

### Credits

Martin Mroz (Git Hub: [martinMr79](https://github.com/martinMr79))

#### References

[Introduction to AWS for Non-Engineers: 1 Cloud Concepts](https://www.linkedin.com/learning/introduction-to-aws-for-non-engineers-1-cloud-concepts-2/how-did-we-get-in-the-cloud?autoplay=true&resume=false&u=43268076)

[AWS docs/getting started](https://aws.amazon.com/getting-started/cloud-essentials/)

[Cloud computing timeline](https://www.verdict.co.uk/cloud-computing-timeline/)

[Synergy Research Group](https://www.srgresearch.com/)

[Research](https://www.commoninja.com/blog/top-backend-as-a-service-baas-platforms-in-2022)

[AWS Essential Training for Developer](https://www.linkedin.com/learning/aws-essential-training-for-developers-17237791/what-is-the-best-way-to-use-aws?autoplay=true&u=43268076)

[AWS Amplify](https://aws.amazon.com/amplify/)

[Amplify vs. Firebase](https://www.bairesdev.com/blog/amplify-vs-firebase-which-one-is-best)

[Disadvantages of cloud computing](https://emeritus.org/blog/technology-disadvantages-of-cloud-computing/#:~:text=Data%20security%20and%20privacy%20threats,breach%20from%202020%20to%202022)

[cloud computing security](https://ermetic.com/blog/cloud/state-of-cloud-security-2021-more-aware-yet-very-exposed)

[AWS - misunderstandings about vendor lock-in](https://aws.amazon.com/campaigns/uk-enterprise-executive-leaders/vendor-lock-in-blog)

[Unpicking vendor lock-in](https://docs.aws.amazon.com/whitepapers/latest/unpicking-vendor-lock-in/unpick-vendor-lock-in.html)

[chatGPT](https://openai.com/) *

<br>
<br>
*information received from chatGPT data has been backed up by at least one additional source. 
