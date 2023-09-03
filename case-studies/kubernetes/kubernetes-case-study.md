---
title: Kubernetes Case Study
author: Margrethe By <margretheby>
tags: kubernetes, case study, containerization
---

![Image of Kubernetes Logo](./kubernetes-logo.png)


| **Table of content**                            |
| ----------------------------------------------- |
| [Introduction](#introduction)                   |
| [History](#history)                             |
| [Features](#features)                           |
| [Market comparison](#market-comparison)                           |
| [Conclusion](#conclusion)                       |
| [References](#references)                       |

## Introduction

Kubernetes (K8s) in an open-source container orchestration platform created to simplify the deployment, scaling, and management of containerized applications. K8s was originally developed by Google and is now maintained by the Cloud Native Computing Foundation (CNCF). K8s is useful in managing different aspects of deploying and maintaining applications in a distributed environment.

## History

- 2014: Kubernetes was announced by Google. Created by Joe Beda, Brendan Burns and Craig McLuckie.
- 2015: Kubernetes 1.0 was released.
- 2016: The Helm package manager for Kubernetes was released.
- 2018: By the number of commits, Kubernetes project was in 9th place in the list of GitHub projects. 

## Features

| Feature | Description |
| --- | --- |
| Container Orchestration | K8s manages containers. Containers are lightweight and consistent units for packaging and running applications and their dependencies. It automates tasks such as deploying containers, scaling them up or down based on demand, and distributing traffic among them. In other words, K8s makes sure that different programs can work together and talk to each other without getting confused. |
| Automated Load Balancing | K8s provides built-in load balancing to distribute network traffic across multiple instances of an application. This ensures that the application remains accessible and responsive even as the number of instances changes. Imagine we have many people visiting a website at once. K8s makes sure that the website stays fast and responsive, even when lots of people are using it. |
| Scaling | We can scale applications up or down based on different factors. Sometimes, we need more or fewer copies of a program to handle lots of users. K8s automatically manages the deployment of new instances or the removal of existing ones to maintain the desired state.  |
| Self Healing | If a container or node fails, K8s automatically detects it and takes corrective actions. It can reschedule containers onto healthy nodes, replace failed containers, and maintain the desired state of the application. This means that if something goes wrong with one part of a program, K8s can automatically try to fix it so that the whole program keeps running smoothly. |
| Service Discovery and DNS | To make it easier for services to discover and communicate with each other, regardless of their location within the cluster, K8s gives a unique IP address and DNS name to each service.  |
| Rolling Updates and Rollbacks | K8s allows us to perform rolling updates, meaning we can update our application without downtime by gradually replacing old instances with new ones. If an update goes wrong, we can quickly roll back to a previous version. |
| Configuration Management | K8s allows us to define our application's configuration and requirements using declarative manifests (YAML or JSON files). This includes specifying the desired number of replicas, resource limits, networking, and more. In other words, we can tell K8s how much memory or power each program should use, and it will make sure these rules are followed. |
| Storage Orchestration | K8s supports various storage solutions, allowing us to mount storage volumes to containers and manage the lifecycle of those volumes. This is useful when we need to store important information, like files or data, that should stay even if the program stops and starts again. |
| Secrets and Configuration Management | K8s provides a way to manage sensitive information like passwords, tokens, and API keys securely. By using its secrets management feature, K8s keeps it safe and hidden from the general public. |
| Multi-Environment Deployment | K8s can be used across various environments, including data centers, cloud services (like AWS, Azure, and GCP), and hybrid setups. This makes it easier to maintain consistency in our application deployment process.  |
| Extensibility | K8s has a modular architecture, and its functionality can be extended through plugins and custom resources, allowing us to tailor it to our specific needs. So if we want to make Kubernetes do something it doesn't do by default, we can add additional features. |


## Market Comparison
Even though K8s is one of the most popular container orchestration tools, there are other container tools and platforms that can be considered. 

### Docker Swarm
Provided by Docker, Docker Swarm is a container orchestration tool. Docker Swarm is more suitable for smaller-scale deployments and focuses on simplicity. It is known to be user-friendly both with setup and management. Compared to K8s, it is simpler to learn and operate. K8s is also more suitable for complex and large-scale applications containing multiple services and microservices. When it comes to scaling, K8s handles more advanced scaling options and features compared to Docker Swarm. K8s can be a better fit for applications that need integration with multiple tools and services, due to K8s' support from various cloud providers.

### Amazon ECS (Elastic Container Service)
Amazon Web Services (AWS) offers Amazon ECS as a container orchestration service. It is well integrated with AWS services and aims to work seamlessly within the AWS systems. ECS is therefore a convenient choice for applications hosted on AWS. ECS, like Docker Swarm, offers an easier setup and management experience, especially for users that are familiar with other AWS services. In terms of infrastructure choices, K8s offers more flexibility due to its ability to be deployed on various cloud providers or environments. Compared to ECS, K8s offers a better portability across these providers and environments since ECS is more connected to AWS. 

### OpenShift
Red Hat have developed a container platform called OpenShift. It builds onto Kubernetes but provides additional features and tools for managing and deploying applications. OpenShift offers extra security features, and emphasizes a developer-friendly experience. OpenShift provides tools for easier application deployment and management. Although OpenShift simplifies some aspects, it also introduces additional complexity due to the added features and customization options. It is suitable for organizations with specific needs and requirements since OneShift provides commercial support and features designed for enterprises.

## Getting started
To get started with K8s we first have to set up a development environment. Then we run the installation in the terminal. There are different ways to do this based on what operating system we are using:

### Linux
1. Open the terminal.
2. Run these two commands in the following order:
- `sudo apt-get update` (This updates your computer's information about available software.)
- `sudo apt-get install -y kubectl` (This installs kubectl.)
3. To check if it's installed, type `kubectl version --client`.

### macOS
1. Open the terminal.
2. If we don't have it already, install a program called Homebrew by running this command:
- `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"`
3. Once Homebrew is installed, type `brew install kubectl`.
4. To check if it's installed, type `kubectl version --client`.

### Windows
1. Download kubectl for Windows from this website: https://dl.k8s.io/release/stable.txt (Look for the latest stable version).
2. Open a Command Prompt or PowerShell window.
3. In the window, copy and paste this command, replacing `<VERSION>` with the version you downloaded:
- `curl -LO https://dl.k8s.io/release/<VERSION>/bin/windows/amd64/kubectl.exe`
4. Move the downloaded file to a folder that's in our computer's list of places to find programs.
5. To check if it's installed, type `kubectl version --client`.

A more detailed tutorial can be found [here](https://dev.to/stevenmcgown/kubernetes-for-dummies-5hmh).

## Conclusion
When choosing a container orchestration platform, we should consider the complexity of our application, integration requirements, needs for scalability, our team's experience, and cloud provider preferences. K8s is known for having broad community support and extensive features. Although it is a popular choice, other tools like Docker Swarm, ECS and OpenShift can be more suitable in specific use cases.


## References
- [Kubernetes.io](https://kubernetes.io/)
- [Documentation](https://kubernetes.io/docs/home/)
- [Wikipedia History](https://en.wikipedia.org/wiki/Kubernetes)
- [Explained by IBM Technology](https://www.youtube.com/watch?v=aSrqRSk43lY)
- [Docker Swarm Documentation](https://docs.docker.com/engine/swarm/)
- [Amazon ECS Documentation](https://docs.aws.amazon.com/ecs/)
- [OpenShift Documentation](https://docs.openshift.com/container-platform/4.13/welcome/oke_about.html)

## Additional Resources
- ["Kubernetes for Dummies" - K8s explained and tutorial](https://dev.to/stevenmcgown/kubernetes-for-dummies-5hmh)