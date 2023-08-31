---
title: Docker Case Study
author: Håkon Willand Engebretsen/BishopWeyland
tags: Docker, image, container, containerization, development platform
---

## Introduction

Making sure applications work the same way on different computers can be a challenge. That is where Docker comes in. Docker packages software and its dependencies together into a standardized unit called a container, so it can run on any hardware and in various environments without causing compatibility issues.

## Brief History

- 2008: dotCloud was founded by Kamel Founadi, Solomon Hykes and Sebastiem Pahl.
- 2013: March: Public release of Docker as open-source.
- 2013: October: dotCloud was renamed Docker Inc.
- 2017: Docker creates the Moby project for open research and development.
- 2021: Docker Desktop for MacOS and windows is no longer free for business users.

## Main Features

| Feature    | Description                                                                                                                                                                                                                                                                                                                               |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Dockerfile | A Dockerfile is like a list of step-by-step instructions for making a special package containing everything an application needs to run. These instructions say what files and settings to put in the package and how they should be arranged. It's used to create a consistent package that can be used to start containers.             |
| Image      | An image is like a ready-to-use package that holds all the parts an application requires to work, including the code, tools, and settings. It's created based on the Dockerfile instructions. Think of it as a snapshot of the application setup that can be easily shared and used to create containers.                                 |
| Container  | A container is like a separate box where you can put your application and run it. It's made from an image. Containers keep everything your application needs in one place, so it can run the same way no matter where it's used. They're isolated from each other, so they can run without affecting other containers or the host system. |

## Market Comparison

Pros and cons using Docker versus other containerization tools.

| Aspect   | Docker                                                    | Podman                                      | Containerd                     | LXD                                       |
| -------- | --------------------------------------------------------- | ------------------------------------------- | ------------------------------ | ----------------------------------------- |
| **Pros** | - Widely used and established.                            | - Safer setup without a background service. | - Lightweight and fast.        | - Efficient for limited resources.        |
|          | - Comes with lots of features.                            | - Doesn't need special access rights.       | - Simple interface.            | - Easy-to-use commands.                   |
|          | - Has a big community and good documentation.             | - Familiar commands like Docker.            | - Works well with Kubernetes.  | - Works well with existing tools.         |
|          |                                                           | - Supports different container formats.     | - Can be customized.           | - Offers advanced features.               |
| **Cons** | - Uses a background service which can be a security risk. | - Not as feature-rich as Docker.            | - Fewer features than Docker.  | - More about system-level than app-level. |
|          | - Requires special access rights.                         | - Smaller community.                        | - May not be as user-friendly. | - Not as versatile as Docker.             |
|          | - Needs an internet connection for images.                |                                             |                                |                                           |
|          | - Networking can be tricky.                               |                                             |                                |                                           |

## Getting Started

1. Install Docker desktop application.
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
