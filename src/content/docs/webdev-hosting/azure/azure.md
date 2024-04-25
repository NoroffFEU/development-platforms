---
title: Azure Case Study
author: ArneBHuset/Arne Hustveit
tags: Microsoft Azure, case study, platform, webhosting
---

## Introduction

Microsoft Azure, most often refered to as Azure, is a cloud computing platform, created by Microsoft. Im broad terms, Azures offers tools and services to help businesses and individuals manage and enahance their digital operations. The platform consists of more then 200 products meant for building, testing, deploying and managing applications and services, all utilizing cloud technology. In this case study, i will dive deeper into the this technology, it's history, background, features and market comparison. We wil also dive into some examples of how to utlize and setup the technology.  

## Brief History

- 2008: Microsoft Azure is announced as a competitor to Amazon EC2 and Google App Engine.
- 2010: Azure becomes commercially available.
- 2011: The concept of "infrastrucutre as a service" (IaaS) is introduced, allowing users to run virtual machines on the cloud. 
- 2012: Windows Azure Websites was annonced, allowing developers to build sites using ASP.NET, PHP, Node.js or Pyhthon and easily deploy them to the cloud. 
- 2014: Windows Azure was rebranded Microsoft Azure to reflect the growing capabilities beyond Windows. 
- 2016: Azure stack is announced, allowing organizations to run Azure services from their own data centers. 
- 2017: Axure Comsos DB, a globally distributed, multi-model database service was announced. 
- 2018: Azure kubernetes services (AKS) was announced, offering managed Kubernetes on Azure. Confidential computing was made available, adding new data security technologies. 
- 2019: Microsoft announced Azure Blockchain Service, making it simpler to deploy secure blockchain networks
- 2020: New AI-driven data analytics platform called Azure Synapse Analaytics was introduced. 
- 2021: Microsoft Mesh was announced, offering mixed realtiy capabilities integrated with Azure. 
- 2022: Azure OpenAI was launched. Integrating AI models like GPT-3 into its cloud offering
- 2023: More advanced AI and machine learning tools are made available. Increased efforts in Azures sustainability efforts, including tools to measure and manage carbon emissions. 
- 2024: Ongoing plans to move Azure's global infrastrucutre towards, and further integrating is with quantom computing technologies. 

## Bacground

To understand Microsfot Azure, one has to understand the term cloud computing in corrolation with computer science. Cloud computing includes several computing services, including servers, storage, databases, networking, software analytics and intelligence organized over the internet instead of local datacenters and servers. Utilizing cloud echnology have proven benefitial in several aspects.

**COST**
Companies that have moved to cloud solutions have a lower IT cost, seeing as they dont need to buy hardware and software for onsite datacenters. 

**SCALEABILITY**
It is far easier to scale your software and business more rapidly using the cloud. One can easily adjust the amount of computing power, storage and bandwith needed, for the right need. 

**SPEED**
The speed of cloud computing has significnatly accelerated the pace of technological innovation. This is due to the possability to quickly iterate on applications more quickly without having to change hardware. 

**PERFORMANCE**
Cloud computing services are regurarly updated to the latest generation. This ensures the fastest available commuting power. 

**SECURITY**
Most cloud technologies have implemented policies and systems designed to ensure that data, apps and infrastructure is protected from threats.

DIFFERENT SOLUTIONS
Not all cloud soltions are the same. We can differ between public-, private-, and hybrid clouds. Microsoft Azure is an example of a public cloud, delivering computing resources for customers but managed and owned by Microsoft themselves. A private cloud however, would be a cloud deployed and maintained from a private datacentre. The main benefit from this would be more control of the cloud environment and the possability fo higher levels of security. The hybrid ooption would be a combination of these two. 

Furthermore, we can differ between four types of cloud services:
**IaaS - Infrastrucutre as a service**
Most basic solution. Customer would rent the IT infrastructure, servers and virtual machines from a cloud provider. 

**PaaS - Platforms as a serivce**
Supplies an on demand environment for developing, testing, delivering and managing softwware applications. It is designed to make it easier for developers to quickly create web or mobile apps, without worrying about the underlying infrastrucutre. 

**Serverless - Software as a service**
A method of delivering software applications over the internet, on demand. Cloud providers host and manage the software application and the underlying infrastructure.  

**Saas - Serverless computing**
Similar to PaaS, serveless computing allows for builing app functionalities wihtout spending time on servers and infrastructure. THe cloud provider handels all of this.


## Main Features
 
FEATURES INCLUDED IN MICROSOFT AZURE INCLUDE
**Creating cloud-native applications**
 Using computing technologies like containers, Kubernetes, microservice architecture, API-driven communications and DevOps. 
 **Store, back up, and recover data** 
 Azure provide scaleable cloud storage for data objects, file systems, and databases with services like Azure Blob Storage, Azure File Storage and Azure SQL database. 
 **Networking**
 Azure faciliates for the creation of private networks thorugh services like Azure virtual networks, Azure ExpressRoute and Azure DNS.
**IoT** 
Azure IoT Hub and Azure Sphere are designed to support IoT applications, providing tools to securly connect, monitor and manage IoT assets. 
**Utilize intellingent data capture and LLM models**
to make more informed decisions and allow for AI-powered features in applications. 

Azure would most likely be utlized by fullstack and backend developers. However, it's popularity and broad application makes it relevant for frontend-developers too. Some exampels include:
**Webhosting with azure App services** 
**Static website hosting in Azure Blob Storage**
**API Management**
**Serverless computing with Azure Functions**
**Real-time features with Azure SignalIR service**
**Developement and deplyoment pipeline**
**Authentication and authorization**


## Market Comparison
Although Microsoft Azure is one of the leading cloud computing services, it is altso competing big-tech and their solutions like Amazon Web Serivces (AWS), Google Cloud Platform (GCP), Kamatera and Alibaba cloud to name a few. 

**BENEFITS**
One of the main benefits Microsoft Azure offers, is easy integration with the full microsoft ecosystem. Seeing a so many businesses allready use Microsoft, it makes it easier for them to adopt Azure aswell. Azure is also known for easily scaleability and high levels of compliance and security. This would ecpecially important for industries like finance and healthcare.
**DOWNSIDES**
Some of the downsides of Microsoft Azure are the complexity of it's systems. It might be difficult to learn and time consuming for small projects. Also, the pricing may vary between different services. An article by Hosting Sprout, suggests that one might get an inital impression of Azure beeing afordable, but it the businesses scale, the prices get's quite high. Also, technical service is a paid service which will drastically increase the users monthly costs. Finally, some might consider the compatability with the microsfot eco-system as a benfit, this might also be a downside for businesses who want to use other systems instead. 

In an article by Hosting Sprout, The hosting platform Kamatera is ranked as the number 1 alternative to Azure. Simplicity and ease of use are listed as some of the main improvements. Allthough beeing a more simplified alterantive, they provide many of the same solutions with great customer support. 

## Getting Started

**Hosting an app**
In these examples of how to utlize Microsfot Azure, is have looked at it from a frontend perspective, specifically for hosting an app. 

After creating an acount and setting up an appropraite subscription, the next step would be to create a new app service in the Azure portal. This will be the platform for deploying and managing the web application. The next step then is to select runtime stack, like Node.js or Python, and which region is closest to your user base for optimal speed. 

After developing your web application locally and ensuring it is able to interact with backend services. The code and application can be depolyed using Azure DevOps (GitHub can also be used) to deploy to the Azure App Serivce, where enironment variabels such as APIkey can be configured. 

After deployment, utlize Azures tools to monitor and track the performance of the application. If scaling is needed, the Azure auto-scale feature allows for this on demand. 

**Utilzing Azure Machine Learning**
The machine learning capabilities can be used to offer users personalized recommendations based on their browsing history and preference. 

First one would have to create a machine learning workspace within the Azure UI, aswell as uploading behavioral and preference data to the Azure Blob Storage, which can be accessed from the Azure Machine learning workspace. 

It's now possible to create recommendation models via the Azure Machine learning studio. Different tools and techniques like colloborative filtering, deep-learning models and different algorithms can be applied using a no-code interface in Azure. 

After the trained model is finished, it can be deployed to a web service on Azure. This will allow the frontend application to send data to the model and receive recommendations in real-time using API. This will allow for personalized recommendations, which will enhance user engagement. It also allows for deeper insight into user behavior. 

## Conclusion

In this case study, we have looked at what Microsfot Azure is, it's history and it's core techonolgy. Azure is a cloud platform offering different tools for different digital operations. Since it's commercial release in 2010, Azure has grown to be one of the lead providers of cloud solutions, having a indsutry advantage of beein easily integrated with the microsoft eco-system. In the later years, AI and machinlearning technologies have been added for different purposes. 

Azures cloud technologies allows customers to get rid of much of their own hardware, and use centralized hardware and datacenteres owned by Microsoft instead. This makes it easier to only pay for exactly what you need, and scale accroding to your changing business needs.  

Although the use of Azure is most relevant for fullstack- and backend developers, it might be beneficial for frontend developers who are looking to deploy and host an app using the Azure portal and implement machine learning algorithms which can dynamically controll the displayed content on the frontend-side. 

 Inn comparision to other services, Azure might be a bit difficult to naviate and overly complex for small projects. It's also one of the more expensice options, especially when scaling up. 


## References

| Forbes, 2020 | https://www.forbes.com/sites/janakirammsv/2020/02/03 a-look-back-at-ten-years-of-microsoft-azure/|
| Microsoft | https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-cloud-computing/ |
| Hosting Sprout, 2024 | https://www.hostingsprout.com/microsoft-azure-alternatives/#:~:text=Top%2010%20Best%20Microsoft%20Azure%20Alternatives%20and%20Competitors for%20Unmanaged%20Clouds%20...%206%206.%20InterServer%20 |
| Microsfot | https://learn.microsoft.com/en-us/azure/machine-learning/tutorial-azure-ml-in-a-day?view=azureml-api-2 |
| Microsoft | https://learn.microsoft.com/en-us/azure/developer/intro/hosting-apps-on-azure|

## Additional Resources
ChatGPT was used as a support for this case study. 