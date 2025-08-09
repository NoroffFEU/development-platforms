---
title: Docker Case Study
author: Håkon Willand Engebretsen/BishopWeyland
tags: Docker, image, container, containerization, development platform
---

## Introduction

Making sure applications work the same way on different computers can be a challenge. That is where Docker comes in. Docker packages software and its dependencies together into a standardized unit called a container, so it can run on any hardware and in various environments without causing compatibility issues. Docker was created to adress the problem of software development, distribution, and deployment accross different environments and operating systems. Docker improves consistency, portability, scalability, and resource efficiency during software development.

## Brief History

- 2008: dotCloud was founded by Kamel Founadi, Solomon Hykes and Sebastiem Pahl.
- 2013: March: Public release of Docker as open-source.
- 2013: October: dotCloud was renamed Docker Inc.
- 2017: Docker creates the Moby project for open research and development.
- 2021: Docker Desktop for MacOS and windows is no longer free for business users.

## Main Features

| Feature           | Description                                                                                                                                                                                                                                                                                                                               |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Dockerfile        | A Dockerfile is like a list of step-by-step instructions for making a special package containing everything an application needs to run. These instructions say what files and settings to put in the package and how they should be arranged. It's used to create a consistent package that can be used to start containers.             |
| Image             | An image is like a ready-to-use package that holds all the parts an application requires to work, including the code, tools, and settings. It's created based on the Dockerfile instructions. Think of it as a snapshot of the application setup that can be easily shared and used to create containers.                                 |
| Container         | A container is like a separate box where you can put your application and run it. It's made from an image. Containers keep everything your application needs in one place, so it can run the same way no matter where it's used. They're isolated from each other, so they can run without affecting other containers or the host system. |
| Docker Compose    | Docker Compose is a tool for defining and running multi-container Docker applications. It allows you to specify an entire application stack, including services, networks, and volumes, in a single Compose file, making it easier to manage complex applications.                                                                        |
| Docker Swarm      | Orchestrates containers for high availability and scalability across multiple hosts.                                                                                                                                                                                                                                                      |
| Docker Hub        | A cloud-based library for sharing and discovering container images.                                                                                                                                                                                                                                                                       |
| Docker Networking | Various network options for container communication, ensuring isolation and conectivity among containers.                                                                                                                                                                                                                                 |

## Market Comparison

### Docker:

Docker is widely used and feature-rich, with strong community support. However, it relies on a background service wich could be a potential security risk, demands special access rights, requires an internet connection for image retrieval, and can be complex for networking.

### Podman:

Podman offers a safer setup without a background service, making it more secure. Its Docker-like commands ease the transition, and it supports various container formats. Yet, it lacks some features compared to Docker and has a smaller community, which could limit resources and support.

### Containerd:

Containerd is lightweight and efficient, ideal for Kubernetes setups. It's highly customizable but offers fewer features than Docker and could not be as user-friendly.

### LXD:

LXD is efficient for limited resources and excels at system-level virtualization. It has straightforward commands but is less versatile than Docker for diverse applications.

In summary, Docker is feature-rich but comes with security and complexity concerns. Podman is safer and familiar but lacks some Docker features. Containerd is efficient but less feature-rich and user-friendly. LXD is efficient for resource-constrained environments but less versatile than Docker for various workloads. Choose based on your specific needs and priorities.

## Getting Started

Docker is available on macOS, Windows and Linux.
On windows and macOS you can install the Docker Desktop application, which provides an interface for managing Docker containers.

On Linux you interact with the Docker Engine directly and would need to install using a terminal.

To verify you installed Docker correctly, run:
`docker --version`

Docker has an extension for VS Code, that provides tools and features to make it easier to work with Docker containers directly in VS Code.

1. Install Docker desktop application (macOS and Windows only).
2. install Docker extension for VS Code.
3. Create an account for Docker Hub to accsess library for container images.

## Conclusion

In conclusion, Docker ensures seamless application performance across diverse environments by packaging software and dependencies. Its key features dockerfiles, images, and containers promote efficiency and uniform execution.
Compared to other tools, Docker's broad adoption, features, and community support set it apart. Despite drawbacks, its capabilities and compatibility drive popularity.

## References

- [Docker docs](https://docs.docker.com/get-started/)
- [Docker](https://www.docker.com/)
- [Docker hub](https://hub.docker.com/)
- [Docker software](<https://en.wikipedia.org/wiki/Docker_(software)>)
- [Docker , Inc.](https://en.wikipedia.org/wiki/Docker,_Inc.)

## Additional Resources

- [Learn Docker in 7 Easy Steps - Full Beginner's Tutorial by Fireship](https://www.youtube.com/watch?v=gAkwW2tuIqE)
- [Top 3 Docker Alternatives to Consider in 2023 by BuildPiper](https://medium.com/buildpiper/top-3-docker-alternatives-to-consider-in-2023-712b1ca0cdd1)
- [Podman docs](https://docs.podman.io/en/latest/Introduction.html)
- [Containerd docs](https://github.com/containerd/containerd/blob/main/docs/getting-started.md)
- [LXD docs](https://documentation.ubuntu.com/lxd/en/latest/.)
