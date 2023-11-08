---
title: Docker
keywords: development platform, containerzation, package, docker
tags: development platform, containerzation, package, docker
---

# Docker

## Introduction

Docker is a tool that is used to automate the deployment of applications in lightweight containers so that applications can work efficiently in different environments in isolation.\
Docker is a way to package software so it can run on any hardware.

<div style="display:flex justify-content:space-between">
    <img src="https://pbs.twimg.com/media/FPKqqiFX0AMRBu4?format=png&name=small" alt="It works on my machine, then we will ship your machine. That is how Docker was born." width="50%" height="auto">
</div>

Docker fixes the problem, where the developer code works on his hardware, but does not work on other machines.\
So you will never run into this situation with your software testers:

<div style="display:flex justify-content:space-between">
    <img src="https://spectralops.io/wp-content/uploads/2023/08/Docker-Meme.jpg" alt="" width="50%" height="auto">
</div>

## You preffer Video?

-   [Docker in 100 seconds](https://www.youtube.com/watch?v=Gjnup-PuquQ)
-   [Learn Docker in 7 Easy Steps - Full Beginnner's Tutorial](https://www.youtube.com/watch?v=gAkwW2tuIqE)

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

**Simplified Configuration**: Docker streamlines the process of configuring applications, leading to faster and more efficient setup.

**Segregated Application Run**: Docker ensures that applications are isolated in their own containers, avoiding conflicts and interferences.

**Productivity Boost**: Docker's approach reduces the complexity of development and deployment, enhancing overall efficiency.

**Docker Swarm Management**: Swarm, Docker's container clustering tool, facilitates easy scaling and management of containerized systems.

**Service State Control**: Docker services are designed to maintain and regulate a service's intended state, prioritizing availability and scalability.

**Load Balancing and Discovery**: The routing mesh feature in Docker provides an intelligent routing mechanism for balancing the load and discovering services within a Swarm.

**Security Protocols**: Docker prioritizes security by providing mechanisms like image scanning and secure container isolation to safeguard applications.

**System Scalability**: Docker allows for rapid adjustment in the scale of applications, ensuring they perform effectively under varying loads.

**Streamlined Software Deployment**: Docker promotes better software deployment practices with consistent environments and version tracking, minimizing release complications.

**Network Customization**: With Docker, creating software-defined networks is effortless, ensuring seamless inter-container communication across diverse settings.

**Application Size Efficiency**: Docker reduces the footprint of applications and their dependencies through containerization, optimizing the use of system resources.

## Why would you use Docker?

| **Reason**                   | **Description**                                                                                           |
| ---------------------------- | --------------------------------------------------------------------------------------------------------- |
| Environment Consistency      | Docker guarantees that applications behave consistently in varied deployment environments.                |
| Isolated Execution           | Offers the independence of applications through container-based isolation.                                |
| Cross-Platform Compatibility | Facilitates the operation of applications on any Docker-compatible system, ensuring portability.          |
| Resource Efficacy            | Docker is renowned for its resource-efficient containers and rapid launch times.                          |
| Application Versioning       | Supports meticulous version control for applications, streamlining updates and rollbacks.                 |
| Application Orchestration    | Docker's tools are built to adeptly manage and scale applications, especially for microservices.          |
| DevOps Integration           | Docker is integral for the automated workflows in DevOps and continuous integration/delivery.             |
| Enhanced Security            | Offers improved security features through container isolation and regular image scans.                    |
| Resource Optimization        | Utilizes server resources with finesse by hosting multiple containers per server.                         |
| Vibrant Community Support    | Boasts a robust community offering a wealth of resources, plugins, and collaborative support.             |
| Microservices Support        | Ideal for building microservices due to its capability to deconstruct complex apps into smaller services. |
| Multi-cloud Flexibility      | Adapts seamlessly to various cloud environments, enabling hybrid cloud strategies.                        |

## Competitors

| **Option**                   | **Description**                                                                                                                               | **When to Use**                                                                                                                                        |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Podman**                   | A daemon-free, open-source container engine from Red Hat that enhances storage options and streamlines container operations.                  | Podman is ideal for those seeking a daemon-less, open-source container engine without the need for Kubernetes' full orchestration capabilities.        |
| **Buildah**                  | A tool for building OCI-compatible container images sans Docker, offering Docker and Kubernetes compatibility.                                | Buildah is best for scenarios requiring detailed control over container image construction, perfect for CI/CD workflows and crafting images from base. |
| **runC**                     | A container runtime compliant with OCI specifications, facilitating the execution of containers as isolated systems.                          | runC is suitable when you require a container runtime that aligns with OCI standards, ensuring compatibility with Kubernetes and Docker ecosystems.    |
| **BuildKit**                 | A modern toolkit for constructing container images, noted for expedited builds, improved caching, and intricate build process management.     | BuildKit should be considered when advanced image build performance and capabilities such as concurrent building and non-root builds are necessary.    |
| **LXD**                      | A system for operating lightweight VM-like containers, offering a balance of performance and versatility for various environments.            | LXD is useful for managing VM-like containers with a focus on performance, scalability, and a user-friendly experience, suitable across use cases.     |
| **Apache Mesos**             | A container orchestrator and data center manager, it excels in handling container deployment in extensive, clustered setups.                  | Apache Mesos is appropriate for orchestrating and managing applications in high-scale cluster environments, emphasizing durability and recovery.       |
| **Containerd**               | A minimal and versatile container supervisor, designed for container life-cycle management on diverse platforms.                              | Containerd is a good choice for comprehensive container lifecycle control across multiple platforms with added support for multi-tenancy.              |
| **VirtualBox**               | A general-purpose virtualizer, valuable for simulating varied system setups and application testing.                                          | VirtualBox fits when a flexible virtual environment is needed for app development and testing, supporting diverse system setups.                       |
| **Rkt**                      | A straightforward and secure container engine, recognized for its simplicity and adherence to the App Container spec.                         | Rkt is advantageous for its robust security and uncomplicated operation, compatible with various container formats and requirements.                   |
| **Azure Container Registry** | Microsoft Azure's managed Docker registry service allows for the secure management and storage of container images across platforms.          | Azure Container Registry is tailored for secure Docker image management and storage, with added benefits like image signing and Active Directory.      |
| **Kaniko**                   | This tool is dedicated to building container images from Dockerfiles directly within Kubernetes clusters or other containerized environments. | Kaniko is the go-to for securely constructing container images within Kubernetes or any container-native scenario, streamlining image creation.        |

### More information about larger competitors

![Table of Features of Docker](https://www.simform.com/wp-content/uploads/2023/08/Comparison-of-Docker-Alternatives.webp)

## Some weaknesses you might consider before using Docker

**Non-bare-metal Performance**: Containers incur a performance overhead due to additional layers such as overlay networking and container-to-host communication, falling short of bare-metal speeds.

**Fragmented Container Landscape**: Diverse container technologies may lack interoperability owing to competitive dynamics; for instance, OpenShift is tailored exclusively for Kubernetes.

**Challenges with Persistent Storage**: Container data can be ephemeral, risking data loss unless external storage solutions are implemented, which may add complexity.

**Limitations with GUI-based Applications**: Docker's architecture is primarily suited for headless server applications, as graphical user interfaces in containers face certain constraints.

**Selective Application Compatibility**: Docker excels with applications structured as microservices, but monolithic applications might not reap the same distribution benefits.

**Storage Integration Complexities**: Despite ongoing advancements, linking containers to persistent storage solutions demands intricate manual setup.

**Basic Monitoring Capabilities**: Docker provides elementary monitoring through its `stats` command; comprehensive analysis typically requires additional third-party tools.

**Unfulfilled Feature Enhancements**: Docker is actively developing features such as container self-inspection and improved file transfer capabilities, which are not yet standard.

**Data Vulnerability**: Establishing backup and recovery protocols for Docker involves manual intervention, casting doubts on its reliability for data resilience.

**Optimizing Application Speed**: Containers offer reduced overhead compared to VMs, but they can't match the performance of running directly on bare-metal hardware.

**Limited OS Compatibility**: Docker's design can introduce compatibility hurdles, as containers built for one operating system may not function seamlessly on another.

**Suboptimal for GUI Applications**: While feasible, operating GUI-centric applications in Docker is not ideal, given the platform's focus on command-line interface operations.

**Incomplete Security Solutions**: Docker's security model presents unique challenges that must be specifically addressed beyond traditional security practices.

**Pace of Evolution**: Docker's rapid development cycle can lead to a lag in the supporting ecosystem, creating documentation gaps and learning challenges.

**Adaptation Difficulty**: Engineers new to containerization may find Docker's learning curve steep, although more intuitive tools are available to ease the transition.

### [Start using Docker](https://docs.docker.com/)

## Summary

Docker is a tool that helps developers package their applications into containers, which are like lightweight, portable boxes. These containers hold everything the application needs to run, including the code, a runtime environment, libraries, and settings. Because they contain everything, containers can run on any system that has Docker installed, without any compatibility issues. This makes it easy for developers to develop, ship, and run applications the same way no matter where they are—on a personal computer, a server, or in the cloud. Docker is popular because it simplifies setting up environments, scales quickly, and streamlines the development process, making it a go-to tool for modern software development.

## Credits

Written by:
Mindaugas Bankauskas

## References

-   [Docker Official Website](https://www.docker.com/)
-   [Docker Docs](https://docs.docker.com/)
-   [It works on my machine MEME](https://twitter.com/FrancescoCiull4/status/1509458241524224005)
-   [Dockerfile WORKDIR: How to Get Started and Advanced Usage](https://spectralops.io/blog/dockerfile-workdir-how-to-get-started-and-advanced-usage/)
-   [Docker in 100 seconds](https://www.youtube.com/watch?v=Gjnup-PuquQ)
-   [Learn Docker in 7 Easy Steps - Full Beginner's Tutorial](https://www.youtube.com/watch?v=gAkwW2tuIqE)
-   [Docker wiki page](<https://en.wikipedia.org/wiki/Docker_(software)>)
-   [Competitors & Alternatives to Docker](https://www.gartner.com/reviews/market/application-platforms-reviews/vendor/docker/product/docker/alternatives)
-   [Docker Alternatives](https://www.simform.com/blog/docker-alternatives/)
-   [Top 11 Docker Features](https://www.knowledgehut.com/blog/devops/docker-features)
-   [Disadvantages of Docker](https://bobcares.com/blog/disadvantages-of-containerization-docker/)
