---
title: Docker Case Study
author: Christel Østerbøe <Christelmarita>
tags: example, case study, platform, docker, devtool
---

![Docker logomark in white](~/assets/devtools/docker/04-light-blue-docker-logo.svg)

## Introduction

Docker is a game-changer in software development, providing a way to package applications and their dependencies into lightweight, portable containers. These containers ensure consistency across different environments, making development, deployment, and scaling more efficient. Since it´s debut in 2013 Docker has become an essential tool, simplifying the complexities of software deployment and enhancing collaboration among developers.

#### Docker key features:
- **Docker Desktop:** An all-in-one solution that provides a lightweight runtime for managing containers on your local machine. It seamlessly integrates the Docker Engine, Docker Hub, and additional tools to streamline the development, testing, and deployment of containerized applications.
- **Docker Extensions:** Tools that extend Docker Desktop's functionality by allowing the integration of third-party tools. These extensions enhance development workflows with features like debugging, testing, security, and networking. Extensions can be explored and installed from the Extensions Marketplace within Docker Desktop.
- **Docker Scout:** A proactive tool designed to identify and fix vulnerabilities in container images. Docker Scout analyzes container images, creates a Software Bill of Materials (SBOM) to catalog layers and packages, and correlates this information with a continuously updated vulnerability database. Available in Docker Desktop, Docker Hub, Docker CLI, and the Docker Scout Dashboard, it also supports integrations with third-party systems.
- **Docker Engine:** The core runtime component that executes and manages Docker containers. Docker Desktop includes the Docker Engine to facilitate a seamless containerization experience on your local machine.
- **Docker Build:** A tool within Docker Desktop for defining and running multi-container Docker applications. It simplifies the process of building, managing, and deploying applications with multiple interconnected containers.
- **Docker Compose:** A powerful tool for defining and running multi-container Docker applications. Docker Compose allows you to specify all the services, networks, and volumes in a YAML file, simplifying the orchestration of complex applications. It's particularly useful for managing interconnected services during development and testing.
- **Docker Hub:**  A cloud service that enables the sharing and distribution of containerized applications. Docker Desktop integrates with Docker Hub, allowing developers to easily access and share container images.

## Brief History

### A quick history of Docker:
- 2013: Docker is first introduced by Solomon Hykes at PyCon.
- 2014: Docker 1.0 is released.
- 2015: Docker aquired SocketPlane. Docker Swarm for container orchestration was introduced.
- 2016: Docker Datacenter is announced.
- 2019: Docker announces support for Kubernetes.
- 2023: Docker introduces experimental support for containerd as the content store in Docker 24.0, replacing existing storage drivers.
- 2024: Docker Desktop 4.27 with the open source project Moby 25.0 is released.

## Main Features

### What is Docker?
Docker is a platform that lets you package and distribute applications along with everything they need to run, regardless of the environment they're in. It's essentially wrapping up your entire application, including its dependencies, settings, and code, into a single package called a "container".

### What does the container contain?

A container is like a standalone, lightweight executable package. It contains your application code, runtime, libraries, and system tools. This container can run consistently on any machine that has Docker installed, ensuring that your application behaves the same way everywhere.

#### Components Inside a Docker Container:
- **Application Code:** The actual codebase of your software, ensuring your application runs as intended.
- **Runtime:** The environment needed to execute your application, whether it's a specific version of Python, Node.js, or another runtime.
- **Libraries:** Dependencies and libraries required for your application to function correctly.
- **System Tools:** Tools and utilities essential for your application to interact with the operating system.

These features collectively make Docker containers a powerful tool for developers, enhancing the development and deployment workflow.

## Market Comparison

### **Advantages of Docker:**

- **Portability:** Ensures consistent performance across various environments, promoting seamless transitions from development to production.
- **Consistency:** Eliminates the "it works on my machine" issue by ensuring uniform behavior across different systems.
- **Isolation:** Containers encapsulate applications and dependencies, preventing conflicts with other applications.
- **Efficiency:** Lightweight containers optimize system resources, enabling the concurrent running of multiple instances without significant overhead.
- **Easy Deployment:** Simplifies the deployment process, facilitating the smooth movement of applications across development, testing, and production environments.

### **Disadvantages of Docker:**

- **Resource Intensive:** Docker Desktop can be resource-intensive, especially in terms of memory usage.
- **Daemon Dependency:** Docker relies on a central daemon process, which may pose security concerns.

### **Docker vs. Podman: A Comparison**

Podman is a container management tool that serves as an alternative to Docker. Like Docker, Podman allows users to create, manage, and run containers. However, there are some key differences between Podman and Docker, primarily in their architecture and security approach.

#### **Architecture:**
- **Docker:** Centralized architecture with a daemon process.
- **Podman:** Daemonless architecture, operates without a central daemon.

#### **Security:**
- **Docker:** Requires root privileges for running containers.
- **Podman:** Supports rootless containers, eliminating the need for root privileges.

#### **Ecosystem:**
- **Docker:** Boasts a large and mature ecosystem with extensive community support.
- **Podman:** Features a growing ecosystem with compatibility for Docker images and Compose files.

#### **Ease of Use:**
- **Docker:** Provides a user-friendly interface and graphical tools.
- **Podman:** Offers a straightforward command-line interface.


### **Considerations:**

#### Choose Docker if:
- A mature ecosystem and extensive community support are your priorities.
- Seamless integration with Kubernetes is essential.
- User-friendly tools and documentation hold significant importance.


#### Choose Podman if:
- Enhanced security, especially in a rootless environment, is a priority.
- Compatibility with Docker images and Compose files is crucial.
- You prefer a simple command-line interface without a central daemon.


## Getting Started with Docker

Here's a beginner-friendly guide to help you get started:

### 1. Installation

#### Windows and Mac

- Visit the [Docker Desktop](https://www.docker.com/products/docker-desktop) website.
- Download the installer for your operating system.
- Follow the installation instructions to set up Docker Desktop on your machine.

#### Linux

- Refer to the official documentation for [Installing Docker Engine on Linux](https://docs.docker.com/engine/install/).
- Follow the steps specific to your Linux distribution to install Docker.

### 2. Verify Installation

- Open a terminal or command prompt.
- Run the following command to verify your Docker installation:
  ```bash
  docker --version

### 3. Run Your First Container

Use the following command to pull and run a simple "Hello World" container:

```bash
docker run hello-world
```

And that's it! You've run your first Docker container.

### For Additional Info

Visit the [Getting Started](https://docs.docker.com/get-started/) guide for further info about how to apply Docker on already existing projects.

## Conclusion
In summary, Docker transforms software development, making it easier to package and deploy applications. Lightweight containers ensure simplicity in development and reliable performance in various environments.

Key features like Docker Desktop and Docker Compose enhance the development process with powerful container management tools. Despite Docker's clear benefits, it's crucial to be mindful of resource usage and security.

As you start using Docker, remember that it significantly improves development workflows. Staying informed about its details ensures a smooth experience. Docker remains a strong solution, influencing how applications are delivered. Enjoy using Docker!

## References

- [Docker intro](https://www.simplilearn.com/tutorials/docker-tutorial)
- [Docker History](https://www.techtarget.com/searchitoperations/feature/The-history-of-Dockers-climb-in-the-container-management-market)
- [Docker](https://www.docker.com/)
- [Docker Video Case Study by Per Edward Nilsen at Noroff](https://library.noroff.dev/devtools/docker/docker-video-case-study/)