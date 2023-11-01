---
title: Docker
keywords: development platform, containerzation, package, docker
tags: development platform, containerzation, package, docker
---

# Docker

## Introduction

Docker is a tool that is used to automate the deployment of applications in lightweight containers so that applications can work efficiently in different environments in isolation. Docker is a way to package software so it can run on any hardware.

![It works on my machine, then we will ship your machine. That is how docker was born.](https://pbs.twimg.com/media/FPKqqiFX0AMRBu4?format=png&name=small)

Docker fixes the problem, where the developer code works on his hardware, but does not work on other machines. So you will never run into this situation with your software testers:

![Tester holding a gun: Say "It works on my computer" one more time.](https://spectralops.io/wp-content/uploads/2023/08/Docker-Meme.jpg)

## You preffer Video?

[Docker in 100 seconds](https://www.youtube.com/watch?v=Gjnup-PuquQ)
[Learn Docker in 7 Easy Steps - Full Beginnner's Tutorial](https://www.youtube.com/watch?v=gAkwW2tuIqE)

## Brief History Year by Year

| Year | Milestone                                                                                                                                                                                                                                                          |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2010 | Docker Inc. founded by Kamel Founadi, Solomon Hykes, and Sebastien Pahl during the Y Combinator Summer 2010 startup incubator group.                                                                                                                               |
| 2011 | Docker officially launched.                                                                                                                                                                                                                                        |
| 2013 | Docker debuted publicly at PyCon and was released as open-source. It initially used LXC as its default execution environment.                                                                                                                                      |
| 2014 | Docker replaced LXC with its own component, libcontainer, with the release of version 0.9. Collaboration with Red Hat, Microsoft announced integration of Docker engine into Windows Server, and Docker container services for Amazon Elastic Compute Cloud (EC2). |
| 2017 | Docker created the Moby project for open research and development.                                                                                                                                                                                                 |
| 2015 | Collaboration with Stratoscale, IBM, and other companies on an OS-independent standard for software containers.                                                                                                                                                    |
| 2016 | Docker's presence grew significantly on LinkedIn profiles.                                                                                                                                                                                                         |
| 2019 | Docker announced working on a version for Windows that runs on Windows Subsystem for Linux (WSL) 2.                                                                                                                                                                |
| 2020 | Microsoft backported WSL2 to Windows 10 versions 1903 and 1909, and Docker became available for these platforms.                                                                                                                                                   |
| 2021 | Docker Desktop for Windows and MacOS is no longer free for enterprise users; it introduced a Personal plan. Docker on Linux distributions remained unaffected.                                                                                                     |

## Features

| **Feature**                     | **Description**                                                                                                                       |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Faster and Easier Configuration | Docker simplifies the setup and configuration of applications, making it quicker and more straightforward.                            |
| Application Isolation           | Docker containers provide isolation, ensuring that each application runs independently without interfering with others.               |
| Increased Productivity          | Docker streamlines development and deployment, saving time and improving developer productivity.                                      |
| Swarm                           | Docker Swarm is a tool for clustering and managing Docker containers, making it easy to scale and manage containerized applications.  |
| Services                        | Docker services allow you to define and manage the desired state of a service, ensuring high availability and scalability.            |
| Routing Mesh                    | Docker's routing mesh feature enables load balancing and service discovery for containers in a Swarm.                                 |
| Security Management             | Docker offers robust security measures to protect containerized applications, including image scanning and container isolation.       |
| Rapid Scaling of Systems        | Docker's scalability makes it simple to scale applications up or down as needed, ensuring optimal performance.                        |
| Better Software Delivery        | Docker enhances software delivery through consistent environments and version control, reducing deployment issues.                    |
| Software-defined Networking     | Docker enables software-defined networking, allowing containers to communicate and be connected easily across different environments. |
| Size Reduction                  | Docker's containerization technology reduces the size of applications and their dependencies, optimizing resource usage.              |

## Why would you use Docker?

| **Reason**                 | **Description**                                                                          |
| -------------------------- | ---------------------------------------------------------------------------------------- |
| Consistency                | Ensures applications run consistently across different environments.                     |
| Isolation                  | Provides application isolation, allowing them to run independently.                      |
| Portability                | Enables applications to run on any system supporting Docker.                             |
| Efficiency                 | Offers lightweight containers, resource efficiency, and fast startup times.              |
| Version Control            | Allows versioning and precise control over application versions.                         |
| Scalability                | Provides tools for orchestrating and scaling applications, ideal for microservices.      |
| DevOps and CI/CD           | Essential for automating build, test, and deployment processes in DevOps and CI/CD.      |
| Security                   | Enhances application security through container isolation and image scanning.            |
| Resource Optimization      | Efficiently utilizes server resources with multiple containers on one host.              |
| Community and Ecosystem    | Benefits from a large and active community with extensive resources and plugins.         |
| Microservices Architecture | Supports the development of microservices by breaking down monolithic applications.      |
| Hybrid Cloud Environments  | Compatible with various cloud providers for running applications in hybrid environments. |

## Competitors

| **Alternative**              | **Description**                                                                                                                                   | **Use Case**                                                                                                                                           |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Podman**                   | An open-source, daemon-less container engine by Red Hat. Offers storage flexibility and simplifies container management.                          | Use Podman when you need a lightweight, open-source container engine that doesn't require a full orchestration system like Kubernetes.                 |
| **Buildah**                  | Allows building OCI container images without Docker, offering compatibility with Docker and Kubernetes.                                           | Utilize Buildah when you need fine-grained control over image creation for CI/CD pipelines and creating images from scratch.                           |
| **runC**                     | An interoperable container runtime adhering to OCI standards, suitable for running isolated applications within containers.                       | Opt for runC when you need a lightweight, open-source container runtime compatible with Kubernetes and Docker.                                         |
| **BuildKit**                 | A powerful image-building engine that offers faster image building, enhanced caching, and fine-grained control over the build process.            | Consider BuildKit when you require efficient image building capabilities, parallel processing, and rootless build support.                             |
| **LXD**                      | Manages lightweight container-based virtual machines on Linux hosts, suitable for development, testing, and production environments.              | Use LXD for managing container-based virtual machines on Linux hosts, offering efficiency, scalability, and user-friendliness.                         |
| **Apache Mesos**             | An open-source container and data center management software suitable for large-scale clustered environments.                                     | Consider Apache Mesos for deploying and managing applications in large-scale clustered environments with self-healing and fault tolerance.             |
| **Containerd**               | A lightweight, feature-packed container runtime for managing containers on physical or virtual machines, cross-platform compatible.               | Opt for Containerd for a versatile and cross-platform container runtime with complete container lifecycle management and multi-tenant support.         |
| **VirtualBox**               | A virtualization tool for creating and testing applications in a virtual environment, suitable for a wide range of system configurations.         | Use VirtualBox when you need to create and test applications in a virtual environment, accommodating various system configurations.                    |
| **Rkt**                      | An application container engine known for simplicity and security features, with cross-functionality and support for App Container format.        | Choose Rkt for secure and lightweight container runtime, simplicity, and cross-functionality, while supporting various container images.               |
| **Azure Container Registry** | A secure Docker registry service on Microsoft Azure for deploying, managing, and storing Docker container images across environments.             | Opt for Azure Container Registry for secure image storage, image signing, and integration with Azure Active Directory for authentication.              |
| **Kaniko**                   | An open-source tool for building container images from Dockerfiles within Kubernetes clusters or containers. Secure and efficient image creation. | Use Kaniko when building container images within Kubernetes clusters without privileged access to a Docker daemon, enhancing security and performance. |

![Table of Features of Docker](https://www.simform.com/wp-content/uploads/2023/08/Comparison-of-Docker-Alternatives.webp)

## Strengths

-   Authentication is secure and can be done by email and password, facebook and other SSO methods.
-   Provides realtime data to the developer.
-   API is easy to integrate and has really good documentation official and community documentation
    By community documentation i mean solutions to error messages on sites such as github and stackoverflow!
-   File backup is done by using Google Cloud

## Weaknesses

-   Support for iOS development is limited compared to Android
-   Focuses mostly on Android apps & services
-   limited data migration

## Comparison

### AWS (Amazon Web Services)

-   Firebase is faster then AWS
-   Also cheaper then AWS
-   AWS also has easy setup and integration, it also has a big library of different choices the developer can pick from when it comes to hardware.
-   AWS is quite expensive as it's pay per use. It calculates cost based on traffic.

## Summary

Firebase is a great choice if your application needs a database, and if you lack the needed backend knowledge to host the database and such.
It makes it easy and fast to set up, something that would previously take quite a while to get right.
The overview you get by using Firebase is amazing, and is without a doubt the best in the business at the time of writing this.
Considering the community support Firebase has aswell you rarley get stuck on a error message as it's almost guaranteed that other developer
have encounterd that error aswell, making it easy to solve and move on.

## Credits

Written by:

Mindaugas Bankauskas

## References

[Docker Official Website](https://www.docker.com/)
[Docker Docs](https://docs.docker.com/)
[It works on my machine MEME](https://twitter.com/FrancescoCiull4/status/1509458241524224005)
[Dockerfile WORKDIR: How to Get Started and Advanced Usage](https://spectralops.io/blog/dockerfile-workdir-how-to-get-started-and-advanced-usage/)
[Docker in 100 seconds](https://www.youtube.com/watch?v=Gjnup-PuquQ)
[Learn Docker in 7 Easy Steps - Full Beginnner's Tutorial](https://www.youtube.com/watch?v=gAkwW2tuIqE)
[Docker wiki page](<https://en.wikipedia.org/wiki/Docker_(software)>)
[Competitors & Alternatives to Docker](https://www.gartner.com/reviews/market/application-platforms-reviews/vendor/docker/product/docker/alternatives)
[Docker Alternatives](https://www.simform.com/blog/docker-alternatives/)
[Top 11 Docker Features](https://www.knowledgehut.com/blog/devops/docker-features)
