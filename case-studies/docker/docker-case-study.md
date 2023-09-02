---
title: Docker Case Study 
keywords: Development platforms,
author: Kent Erik Hole
tags: 
sidebar: development platforms
permalink: 
folder: 
---

# Docker Case Study

<summary>Contents</summary>
<ol>
    <li>
      <a href="#Introduction">Introduction</a>
    </li>
    <li>
      <a href="#Brief-History">Brief History</a>
    </li>
    <li>
        <a href="#Features">Features</a>
        <ul>
            <li>
                <a href="#docker-engine">Docker Engine</a>
                <ul>
                    <li><a href="#docker-enging-network">Docker Enging Network</a>
                    </li>
                    <li><a href="#docker-engine-storage">Docker Engine Storage</a></li>
                </ul>
            </li>
            <li><a href="#docker-hub">Docker hub</a></li>
            <li><a href="#docker-image">Docker image</a></li>
        </ul>
    </li>
    <li><a href="#pros">Pros</a></li>
    <li><a href="#cons">Cons</a></li>
    <li><a href="#conclusion">Conclusion</a></li>
    <li>
        <a href="#getting-started-with-docker">Getting started with Docker</a>
        <ul>
            <li>
                <a href="#installing">Installing</a>
                <ul>
                    <li><a href="#windows">Windows</a></li>
                    <li><a href="#macos">MacOS</a></li>
                </ul>
                <li><a href="#use-docker">Use Docker</a></li>
            </li>
        </ul>
    </li>
    <li><a href="#references">References</a></li>     
  </ol>

## Introduction 

Docker is one of the most popular containerizing technology companies. Still, the word Docker can be referred to [Docker Inc.](https://www.docker.com/), the company it can also be used when it comes to [Docker Engine](https://docs.docker.com/engine/), running the virtualizing environment. Most have heard of virtualizing, and many will think about virtualizing a game or virtual environment. But if you have heard about [Virtual Machine](https://en.wikipedia.org/wiki/Virtual_machine), the docker engine is like this but with some changes. Docker shares the kernel with the host machine,
This makes it much faster to boot and does not need [kernel](https://en.wikipedia.org/wiki/KERNAL) to run; Docker will then use fewer H/W resources to run. Docker takes the application and dependencies to run a Container, and the docker engine runs with [REST API](https://en.wikipedia.org/wiki/Representational_state_transfer) and [CLI](https://en.wikipedia.org/wiki/Command-line_interface) to let a user connect to the Container. For developer it's good development platform for building good workflow, Version Control on Software, like [NodeJS](https://en.wikipedia.org/wiki/Node.js), [Java](https://en.wikipedia.org/wiki/Java_(programming_language)), [python](https://en.wikipedia.org/wiki/Python_(programming_language)), [MariaDB](https://en.wikipedia.org/wiki/MariaDB), [SQL](https://en.wikipedia.org/wiki/SQL). However, not only developers use this platform, Cybersecurity resources, and base Platform. Docker is a good tool in the IT world today. Most Operative system, Client base, and server has support for Docker. Today, Docker has one of the world's most extensive Container image libraries on [Docker Hub](https://hub.docker.com/). 



## Brief History 

When Docker launched in 2013, it was a Linux-based kernel containerization technology. Only Linux user was using Docker before Docker partnered up with [Redhat](https://www.redhat.com/en), and This may be the most prosperous partnership Docker has made because this led to an even more extensive collaboration in docker history, [Microsoft](https://www.microsoft.com/) wants to make this technology ready for Windows users and Windows server before Microsoft made a partnership with Docker [LinkedIn](https://www.linkedin.com/) so that Docker had grew by 160% present by 2016. By 2019, Docker and Microsoft released Docker to Windows and Windows servers. 



- 2013 Docker and Red Hat Announced a collaboration around Fedora, Red Hat Enterprise, and OpenShift.
- In October 2014, Microsoft announced the integration of the Docker engine into Windows Server and support for Docker clients in Windows.
- November 2014: Docker container services were announced for the Amazon Elastic Computer cloud. 
- 2014 November: Docker announced a partnership with Stratoscal.
- In December 2014, IBM announced a partnership with Docker that enables Docker to integrate more into the IBM cloud.
- 2015 December: Oracle Cloud added Docker container support after acquiring SlackEngine. 
- 2016 April: Windoc and an independent software vendor released a port of open source project to Windows, supporting Windows 2012 R2.
- 2016 May: Analysis of LinkedIn profile mentions showed Docker grew by 160% in 2016.
- 2019 May Announced the second version of Windows subsystem for the link (WSL) from Microsoft.
- 2019 Aug Annoced a backport of WLS2 to Windows from Microsoft.
- 2021 Aug: Docker Desktop from Windows and MacOS is no longer Free accessible for enterprise users.

## Features 

* Docker Engine
* Docker HUB
* Docker Image 
* Docker Container 
    

### Docker Engine 

The Docker engine is Client-server Technology. This supports the tasks and workflow in building, shipping, and running the containerizing technology.  

Docker Engine uses a server with [daemon](https://en.wikipedia.org/wiki/Daemon_(computing)) process technology called Docker using REST-API and a client-side [CLI](https://en.wikipedia.org/wiki/Command-line_interface) (Command-line Interface) called Docker.

#### Docker Engine Network

The Docker engine provides a network driver to host and Bridge containers. 
Docker Network helps host and connect to a different network, and the Docker engine Has three other network models. 

* **Bridge**</br>The Default network Docker0.

* **None**</br>None is for connecting to a specific network, but this does not have the container access to the external network. 

* **Host**</br>This will add the Container or containers to the host network with no isolation between the host machine and the Container.

#### Docker Engine Storage 

Docker Engine creates a data volume concurrently with the container image, including the data copied from the parent image. However, the Docker engine comes with three different types of books:

* **Host volumes**</br>Host Volumes are where and what is live on the file - system.

* **Named volumes**</br>docker manages this on the disk where the volume is created and named.

* **Anonymous Volumes**</br>This is similar to name volumes.

### Docker hub 

Docker Hub is a register for images and containers where we can get official images. This is one of the more extensive registers of container images. Nevertheless, not all images are shared publicly. You can share private images there. However, there is a different payment plan for this on the free version. You can share only in private.

Hub is using a Trust system called Trusted Content 
These three categories make it easier to find the right Image, which is essential because of the security when developing and hosting a docker container. 

**Categories** 

1. Docker Official image
2. Verified Publisher
3. Sponsored OSS



[Docker Hub image](https://hub.docker.com/search?q=)
[Docker hub prices](https://www.docker.com/pricing/)
 


### Docker Image 

Docker image Package of software that includes the Dependents and application.
Using Dockerfile, we are setting the dependents' version and where the application is. So, think of the docker image as a template for the Container.

The Dockerfile is called a Base Image, but when we import an image from NodeJS to the Dockerfile, the command FROM is called a Parent Image. However, we often need to add multiple layers to the; this can be the setting of an open port or username.

Docker image is a package of software that includes the dependents and applications. 
Think of it like a Templet for a container. When we start using a Docker image, we use a Dockerfile to build template images. 

Building a template from a Dockerfile is called a Base image, where we may need to get images from different vendors like NodeJS, Ubuntu, MariaDB, and MongoDB.

That is what we call the parent image. 
However, we need to make some layers; this can be set as a User and Password or adding an application to copy to the project.

## Pros 
Docker is easy to maintain software update; because Docker is open source, they are plenty of help to get started using it., When it comes to the development platform, it is an excellent environment to develop the application when the developer does not need to install it to run the development application. A Docker container will boot faster than a virtual machine and will not require much memory or hardware.

* **Portability**</br>For faster deployment, we can use services Like GitHub and Docker Hub to share the repository.

 
* **Maintaining**</br>It is easier to maintain a Docker container than a virtual machine. The cost of having a docker container is less when it comes to Cost-Per-Person offense.

* **Scalability**</br>Containers can hosted on a single host, and this is why cloud services often use containerizing technology like Google. 

* **Run-Cost**</br>It is usually cheaper to run docker containers than standard servers because docker tech has less memory, CPU, and HDD resources.

## cons

Docker has many benefits, but when it comes to security, this is the biggest drawback to using Docker because of the lightweight that Docker runs on single applications and dependencies. It would help if you thought more about security when using Docker. Black hat hacker has less to think about to find the venerability when it comes to docker container, so when you start learning Docker, you need to think about security.

* **Security**</br>Docker runs a lightweight version, so there is less security on the default image.

* **Learning curved**</br>Dockers do not have an out-of-the-run system; one must learn to set up and add security to use Docker.

* **Single application**</br>Docker container will only run most single applications when need to run more Container or use a Virtual Machine.

* **Interface**</br>Docker has better-using UI, but Containers using CLI are not an Operative System UI; they need to learn to use the Command line to use Docker 100% 

## Conclusion 

If you want to use Docker, you need to see if you have the neologies about Docker and security, or think in the long run, you need to cut costs or be willing to spend the time and money to learn Docker. The guard on the docker host has become more secure because of the many users docker has today. But think about what you want today: A virtual machine or out-of-the-box system hosting your application or data. You will need to think about what most are imported for your application. They are planning a security system for hosting with Docker. Docker has maintenance for workflow or hosting. Docker has a good place for an effective workflow for a team of developers. Docker has one of the biggest userbase Containerization platforms, so finding help and tutorials in the community is there for you.

**Before start to use Docker engine**

* **Risk Analyze**</br>Resource security and vulnerability are needed in dependence on the library that they want to use. 

* **Image Risk**</br>Regarding using Docker, because of open source, everyone can make an Image, So the Best practice is to use the official Image because of security. 


**Note from the author**</br>In this case study, I need to understand what Docker is and how it works and start learning it, so I have done one project. If you want to test it, visit my [GitHub](https://github.com/nexnic/Docker-NodeJS) repository or continue reading.  

## Getting started with Docker 

### Installing 
To install Docker on Windows, you need Windows subsystem Linux enabled

Using the Docker Desktop

| Platform  | x86_64 / amd64 | arm64 (Apple Silicon) |
| --------- | -------------- | --------------------- |
| Windows  | ✅ | |
| macOS  | ✅ | ✅ |
| Linux  | ✅ ||

#### Windows

For install docker on windows need Windows subsystem Linux enable, [Read-more](https://docs.microsoft.com/en-us/windows/wsl/install-win10) And download docker install file [Download-here](https://docs.docker.com/desktop/install/windows-install/) and install it. 

**Requierment** 
* WLS version 1.1.3 or newer 
* Windows 11 Home or Pro version 21H2
* Windows 10 Home or Pro version 21H2
* Turn on the WSL [Document](https://docs.microsoft.com/en-us/windows/wsl/install-win10)
* Ram 4GB / Bios Virtualization support

#### MacOS

**Requierment**

*intel Chip*
* OS much be Big sur or newer
* Ram 4 Gb
If you have VirtualBox version 4.3.30 
Need to uninstall it

*Apple Silicon*
* Os much be Big sur or newer
* Ram 4 Gb

### Use Docker 
Okay, now you have installed Docker, we can test it out. I have made a Docker image to make it easier to understand how Docker works. You only need to download the Image from GitHub [here](https://github.com/nexnic/docker-api).

When you have downloaded the repository, Open a terminal and go to the root folder of the repository. 

```
docker build -t name .
```

This will build the Image from this template. And if you look at your docker desktop, you see a new image inside. 


Now, we are going to start it and make it to Container. 
```
docker run -p 8000:8000 name
```

Now the server has started up, you will get a message from the server Inside the CLI.
```
Server is Listen on Port:8000
```

## References 


- **NTNU**
- https://ntnuopen.ntnu.no/ntnu-xmlui/bitstream/handle/11250/2451326/17303_FULLTEXT.pdf?sequence=1&isAllowed=y 
- https://ntnuopen.ntnu.no/ntnu-xmlui/bitstream/handle/11250/2609601/no.ntnu:inspera:2338130.pdf?sequence=1
- **Docker Doc**
- https://docs.docker.com
- **OWASP**
- https://cheatsheetseries.owasp.org/cheatsheets/Docker_Security_Cheat_Sheet.html 
- **techtarget**
- https://www.techtarget.com/searchitoperations/definition/Docker-Engine 
- **Wikipedia**
- https://en.wikipedia.org/wiki/Docker_(software)
- https://en.wikipedia.org/wiki/KERNAL