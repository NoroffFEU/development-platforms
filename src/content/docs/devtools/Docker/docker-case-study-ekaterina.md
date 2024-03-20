---
title: Docker Case Study
author: Ekaterina Nattrass <EkaterinaNattrass>
tags: Docker, Containerization, Deployment, Dockerfile, Container Orchestration
---

## Introduction

Imagine there's a platform that allows you to package your applications and their dependencies into small and portable containers. These containers can be easily shared and run on any machine in the world regardless of its operating system or installed software. Sounds too good to be true? Not really. Docker uses images and containers to allow applications to run anywhere consistently.

## Virtualization

Before delving into the history of containers, it's important to understand the concept of virtualization in general. According to AWS website, virtualization is 'technology that you can use to create virtual representations of servers, storage, networks, and other physical machines. Virtual software mimics the functions of physical hardware to run multiple virtual machines simultaneously on a single physical machine.' Usage of virtualization has a number of advantages:

- **_lower costs_** (reduces the amount of hardware servers, improves energy savings);
- **_easier testing_** (testing is less complicated in a virtual environment);
- **_easier disaster recovery_** (in an emergency situation data can be migrated to a new location within minutes);
- **_improved efficiency and easier administration_** (less time is spent maintaining the servers, the time spent on the tasks is drastically decreased);
- **_easier migration to the cloud_**.

## History of Containers

- **1979, the chroot**: development of the chroot(change root) command made it possible to change the root directory for a running process and its children to a new location in the filesystem; the command was added to the 7th edition of Unix in 1982;
- **2000, FreeBSD Jails**: introduction of FreeBSD jail command allowed the hosting provider to separate its services from those of its customers, isolate filesystems, users, networks etc. and to assign an IP address, configure custom software installations and make modifications to each jail;
- **2001, Linux VServer**: an early virtualization solution that transformed a single physical server into multiple isolated environments called virtual private servers (VPS);
- **2004, Solaris Containers**: Solaris Containers created full application environments through the use of Solaris Zones, which combined system resource controls and boundary separation, and also icluded new features like snapshots and cloning from ZFS;
- **2005, OpenVZ**: Linux developed a container-based virtualization solution which shared the host kernel among multiple containers;
- **2006, Process Containers**: launched by Google Process Containers were designed for isolating and limiting the resource usage of a process; they were renamed control groups(cgroups) in 2007;
- **2008, LinuX Containers(LXC)**: the project provided virtualization at the operating system level by allowing multiple isolated Linux environments to run on a shared Linux kernel;
- **2013, Let Me Contain That For You**: an open-source version of Google's container stack that allowed applications to be 'container aware' and programmed to create and manage their own sub-containers;
- **2013, Docker**: Docker was released as an open-source project which revolutionized containerization and led to increase of containers popularity; Docker provided the ability to package containers so that they could be moved from one environment to another;
- **2014, Kubernetes**: Google launched Kubernetes as an open-source container orchestration platform for automating deployment, scaling and management of containerized applications;
- **2016, Container Security**: further development of container-based applications and appearance of vulnerablities like dirty COW increased the importance of container security implementation on each step of container app development, which led to appearance of the DevSecOps principle (development, security and operations);
- **2017, rkt**: rkt(pronounced 'rocket'), an application container engine designed for cloud-native environments, was adopted by Cloud Native Computing Foundation(CNCF);
- **2018, The Gold Standard**: containerization became the foundation for modern software infrastructure and Kubernetes was used for most container projects; development of several open-source projects (Kata containers, gVisor, Nabla and Podman) provided stronger workload isolation;

## Docker advantages

Docker solves several common problems in software development and offers unique features which makes it a valuable tool for developers:

- **Fast,consistent delivery of applications**:

Docker enables work in standardized environments using local containers which provide your application and services, they are also great for continuous integration and continuous delivery (CI/CD) workflows.

- **Responsive deployment and scaling**

Docker containers can run on physical and virtual machines, on cloud providers and in a mixture of environments.

Developers can also dynamically manage workloads scaling up and down applications based on the needs.

- **Running more workloads on the same hardware**:

Thanks to Docker software engineers can use more of server capacity, which is perfect when you don't have access to huge amount of resources.

## Docker Architecture

Docker uses a client-server architecture. **The Docker client** communicates to the **Docker daemon**(with use of a REST API, over UNIX sockets or a network interface), which in its own turn builds, runs and distributes **Docker containers**.

-**The Docker client(docker)**

It is the primary way to interact with Docker through commands such as

- `docker run`: used to create and start a new container based on a Docker image;
- `docker build`: used to build a Docker image from a Dockerfile;
- `docker pull`: used to pull a Docker image from a registry;
- `docker ps`: used to list running containers;
- `docker images`: used to list Docker images;
- `docker start`: used to start a stopped container;
- `docker stop`: used to stop a running container;
- `docker restart`: used to restart a running or stopped container;
- `docker rm`: used to remove one or more containers;
- `docker rmi`: used to remove one or more images;
- `docker logs`: used to display logs of a container;
- `docker exec`: used to run a command inside a running container;

-**The Docker daemon(dockerd)**

The Docker daemon listens for Docker API requests and manages Docker objects such as images, containers, networks, plugins, volumes and others. It can also communicate with other daemons.

- **_Images_** are read-only templates with instructions for creating a Docker container. They include the application code, runtime, libraries, dependencies and other files and configurations and are stored in a registry, such as Docker Hub or a private registry.
- **_Containers_** are executable instances of Docker images, which can be created, started, stopped, paused, restarted, moved or deleted with help of Docker API or CLI. Containers can communicate with each other and with external networks using Docker networking.
- **_Networks_** allow containers to communicate with each other and with external networks, include bridge networks, overlay networks, host networks and custom networks.
- **_Volumes_** provide storage for containers, allowing data to persist even after a container is stopped or deleted.
- **_Plugins_** are extensions that provide additional functionality and integrate Docker with external systems and services, and incorporate:
- **_Network plugins_** extend Docker's networking capabilities and include, for example, [Contiv Networking](https://github.com/contiv/netplugin) ( provides infrastructure and security policies) and [Kuryr Network Plugin](https://github.com/openstack/kuryr) (implements the Docker networking remote driver API)
- **_Volume plugins_** extend volume management capabilities, most popular among which are [Portwox Volume Plugin](https://github.com/portworx/px-dev) and [REX-Ray plugin](https://github.com/rexray/rexray)
- **_Authorization plugins_** enable users to integrate Docker with external authentication and authorization systems and include, among others, [Casbin AuthZ Plugin](https://github.com/casbin/docker-casbin-plugin)
- **_Logging plugins_** allow users to manage container logs, enabling easier troubleshooting, monitoring and analysis of containerized applications, for example, [Fluentd Docker logging driver](https://docs.fluentd.org/)
- **_Runtime plugins_** extend container runtime capabilities, the most famous among these is probably [containerd](https://containerd.io/)
- **_Service Discovery plugins_** enable containers to dynamically discover and communicate with other services and resources in the environment, for example, [Consul Docker service discovery](https://github.com/bitsofinfo/docker-discovery-registrator-consul)

## Getting Started

You can download and install Docker on multiple platforms.

- **Docker Desktop for Mac**

  1. Download the installer using the [link](https://docs.docker.com/desktop/install/mac-install/)
  2. Double-click Docker.dmg to open the installer and then drag the Docker icon to the Applications folder
  3. Double-click Docker.app in the Applications folder to start Docker

- **Docker Desktop for Windows**

  1. Download the installer using the [link](https://docs.docker.com/desktop/install/windows-install/)
  2. Double-click Docker Desktop Installer.exe to run the installer, follow the instructions to proceed with the installation process
  3. When the installations is done, select Close to complete the installation process

- **Docker Desktop on Linux**
  1. Download the correct package and install it with the corresponding package manager:
     [Install on Debian](https://docs.docker.com/desktop/install/debian/)
     [Install on Fedora](https://docs.docker.com/desktop/install/fedora/)
     [Install on Ubuntu](https://docs.docker.com/desktop/install/ubuntu/)
     [Install on Arch](https://docs.docker.com/desktop/install/archlinux/)
  2. Open the application menu in Gnome/KDE Desktop and search for Docker Desktop and select it to start Docker

## Docker Demonstration

Now that everything is set up, let's look at how Docker works in practice. In order to create a container you need command `docker container create` and at least one argument (the image). The most popular ones in 2024 according to Google are Alpine, BusyBox and Ubuntu, but we´ll be using hello-world Docker image in this demonstration, which just contains a text file with the text "Hello, World".

![Docker create command example](~/assets/docker/ekaterina/create.png)

Below the command you can see the container ID, which is unique and helps a developer interact with the created container.

It's also important to mention that the `docker container create` command creates a container, but doesn't start it. In order to start it, you need to run `docker container start` plus the ID of the container.

![Docker start command example](~/assets/docker/ekaterina/start.png)

The fact that we got the container ID again means that Docker managed to start the container successfully.

There is also a shortcut command `docker container run` which combines `create` and `start` in one command.

![Docker run command example](~/assets/docker/ekaterina/run.png)

If we run `docker ps -a` command which shows us all the existing containers, we will see that we have a new hello-world container with a new ID.

![Docker ps -a command example](~/assets/docker/ekaterina/ps.png)

In order to stop a container we need to run command `docker stop` plus the container ID (you can use the first three characters of the ID as a shortcut).

![Docker stop command example](~/assets/docker/ekaterina/stop.png)

It's important to highlight that this command only stops the container, but doesn't delete it. In order to remove a container use command `docker rm` plus the ID (or the three character shortcut).

![Docker remove command example](~/assets/docker/ekaterina/remove.png)

If we run the command `docker ps -a` again, we can make sure that there is no more container with this ID.

![Another Docker ps -a command example](~/assets/docker/ekaterina/ps-a.png)

## Market Comparison

There are a few alternative containerization tools that can be used instead of Docker, but not all of them can be used as a full alternative, but just as an alternative to certain components of Docker, and therefore address only specific parts of Docker's functionality. The most interesting tools among them are:

### LXC

[LXC](https://linuxcontainers.org/) is a set of low-level container management tools that are part of a Linux open-source project.

Both Docker and LXC provide containerization capabilities, but Docker offers a more extensive set of tools and additional features for image management, security and deployment. LXC, on the other hand, may be preferred when low-level control over the container environment is required. Another difference is that with LXC a developer can run more than one process in a container, whereas Docker is designed to run only one process in each container.

### Hyper-V

[Hyper-V](https://learn.microsoft.com/en-us/virtualization/hyper-v-on-windows/about/) is a virtualization tool developed by Microsoft that allows users to create and manage virtual machines on Windows-based systems.

Among the advantages of Hyper-V one can name greater portability than traditional containers and better security as a result of increased isolation. But Hyper-V and Docker serve different virtualization needs, with Hyper-V being suitable for running isolated virtual machines with different operating systems, while Docker is designed for building and deploying cloud-native applications using containerization.

### Podman

[Podman](https://podman.io/) is an open-source containerization tool that provides a daemonless and rootless alternative to Docker, allowing users to manage containers and pods without requiring a central daemon process. Its command-line interface is practically identical to Docker's (for example, `podman start`, which just like in Docker starts one or more containers), which makes it easy for Docker users to transition to Podman.

The key difference between the two is that Podman functions without a central daemon. Instead, it uses a client-server model similar to Git, where commands interact directly with the container runtime. The rootless character of Podman provides better security and isolation. Additionally, unlike Docker, it doesn't require root privileges to manage containers.

### Containerd

[Containerd](https://containerd.io/) is an open-source container runtime that provides a platform for core operations, such as image distribution, container execution, snapshot functionality and storage management through the use of simple API requests. It was buillt as part of the Docker system, but then spun off as an independent open-source project.

Containerd is designed to be modular and pluggable, can be integrated into various container orchestration platforms and container management tools. Whereas, Docker offers a more integrated approach to containerization, adding additional features and tools to Containerd to provide a complete container platform.

## Conclusion

Containerization is the future of software development. Although there are many platforms in this sphere, Docker can be easily called the most popular one, as it has a large and established community with extensive documentation, tutorials and third-party integrations. It is widely adopted in the industry and supported by major cloud providers, including AWS, Microsoft Azure and GCP. Moreover, the deployment goes quickly and smoothly, and applications built using Docker will run on any compatible operating system. Don't forget about high level of security and user-friendly interface which make Docker choice number one among developers.

## References

-[Docker Overview](https://docs.docker.com/get-started/overview/)

- [Docker Plugins](https://docs.docker.com/engine/extend/legacy_plugins/)

- [Docker Install](https://docs.docker.com/desktop/install/)

- [LinkedIn Course, Learning Docker](https://www.linkedin.com/learning/learning-docker-17236240/get-up-and-running-quick-with-docker?u=43268076)

- [History of Containers](https://www.aquasec.com/blog/a-brief-history-of-containers-from-1970s-chroot-to-docker-2016/)

- [More on History of Containers](https://www.pluralsight.com/resources/blog/cloud/history-of-container-technology)

- [Virtualization](https://aws.amazon.com/what-is/virtualization/)

- [More on Virtualization](https://www.techtarget.com/searchitoperations/definition/virtualization)

- [Other Containerization Tools](https://jfrog.com/devops-tools/article/alternatives-to-docker/)
