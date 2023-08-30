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

**What is Docker Why use docker**

Docker is one of the most popular containerizing technology companies, but the word Docker is can be referred to [Docker inc](https://www.docker.com/), the company it can also be use when it comes to [Docker Engine](https://docs.docker.com/engine/) this is running the virtualizing environment. most have heard of virtualizing, many will think about virtualizing of game, virtual environment. But if you have heard about [Virtual Machine](https://en.wikipedia.org/wiki/Virtual_machine) docker engine is like this but with some changes docker share the kernel with the host machine,
This makes much faster to boot and it do not need [kernel](https://en.wikipedia.org/wiki/KERNAL) to run, Docker will then use less H/W resources to run. Docker take the application, Dependencies to run a Container and the docker engine run with [REST API](https://en.wikipedia.org/wiki/Representational_state_transfer) and [CLI](https://en.wikipedia.org/wiki/Command-line_interface) to let user connect to the container. For developer it's good development platform for building good workflow, Version Control on Software, like [NodeJS](https://en.wikipedia.org/wiki/Node.js), [Java](https://en.wikipedia.org/wiki/Java_(programming_language)), [python](https://en.wikipedia.org/wiki/Python_(programming_language)), [MariaDB](https://en.wikipedia.org/wiki/MariaDB), [SQL](https://en.wikipedia.org/wiki/SQL). but not only developer use this platform, Cyber-security resource, Cloud base Platform. Docker is good tool in the IT world today. Most Operative system, Client base and server has support for docker. today Docker has one of the biggest Container image libraries in the world on [Docker Hub](https://hub.docker.com/). 



## Brief History 

when docker launched in 2013 it’s, was a Linux-based kernel containerization technology. Only Linux user was using docker before docker partner up with [Redhat](https://www.redhat.com/en) and This may be the most prosperous partnership Docker has made because this led to even bigger partnership in docker history, [Microsoft](https://www.microsoft.com/) wants to make this technology ready for Windows users and Windows server. Before Microsoft made partnership with Docker [LinkedIn](https://www.linkedin.com/) so that Docker had grew by 160% present by 2016. By 2019 docker and Microsoft released docker to windows and windows server.  



- 2013 Docker and Red Hat Announced a collaboration around Fedora, Red Hat Enterprise, OpenShift
- 2014 October Microsoft announced the intergration of the Docker engine into Windows Server, Support for Docker client in windows. 
- November 2014: Docker container services ware announced for the Amazon elastic Computer cloud. 
- 2014 November: Docker annonced a partership with Stratoscal.
- 2014 December IBM anounced a partnershipt with Docker that enables Docker to integrate more to IBM cloud.
- 2015 December: Oracle Cloud added Docker container support after acquiring SlackEngine.  
- 2016 April: Windoc and independent software vendor released a port of open source project to windows, supporting windows 2012 R2 
- 2016 May: Analysis of Linkedin profile mentoions showed Docker grew by 160% in 2016
- 2019 May Announced the second verison of windows subsystem for link (WSL) from microsoft
- 2019 aug Annoced a backport of WLS2 to windows from microsoft 
- 2021 Aug: Docker Desktop from windows and MacOS is no longer fre for enterprise user 

## Features 

What is Docker the term docker can refer to Docker engine or to the company Docker Inc. Docker is Containerization technology around Docker engine, but we are going to this cover what is underneath Docker envierment

**Features**

* Docker Engine 
* Docker Hub
* Docker Image 
* Docker Container 
    

### Docker Engine 

What is Docker engine is Client-server Technology this support the tasks and workflow that is involved in building, shipping and running the containerizing technology. 

Docker Engine using a server with daemon ##Link to deamon# process technology called dockerd using REST-API and a client-side CLI ## Link to CLI## (Command-line Interface) called docker.
The engine creates a server-side daemon process hosts image, containers, network, storage. By using a CLI (Command-line interface) that users interact with the docker daemon via API. ## Link to api## 

#### Docker Enging Network

Docker engine provides a network driver so you can host and Bridge containers 
This is useful when for hosting and connect to different network and Docker engine Have three different network models 

* **Bridge**</br>the default network Docker0

* **None**</br>this is for connect to specific network, but this do not give the container to external network. 

* **Host**</br>this will add the container or containers to the host network, with no isolation between host machine and the container. 

#### Docker Engine Storage 

Docker Engine create a data volume concurrently with the container image and this include the data was copied from the parent image. but Docker engine comes with three different types of volumes:

* **Host volumes**</br>this is what are live in the file system.

* **Named volumes**</br>this is managed by docker on the disk where the volume is created and name. 

* **Anonymous Volumes**</br>This are similar to name volumes. 

### Docker hub 

Hub is register for image, container where we can get official image, this is one of the bigger registers of container image. but not all images are share public, you can share private image there. But it’s different payment plane for this on the free version you can share only on private. 

Docker hub is using a Trust system and is called Trusted Content 
This has three different categories make it easier to find right image and this is import because of the security when you are developing and host a docker container. 

**Name of the Categories** 

1. Docker Official image
2. Verified Publisher
3. Sponsored OSS



[Docker Hub image](https://hub.docker.com/search?q=)</br>
[Docker hub prices](https://www.docker.com/pricing/)
 


### Docker Image 

Docker image Package of software that include the Dependents and application.
Using Dockerfile we are setting the version of dependents and sett where the application is. So, think of the docker image as templet for container. 

The Dockerfile is called a Base Image but when we are using image from NodeJS to import to the Dockerfile Using the command FROM is called a Parent Image. but need often need to add some layers to the this can be the set an open port or username.

Docker image is package of software they include the dependents and application 
Think of it like a Templet for a container, when we are started to use a docker image you can build your self using Dockerfile or use a Docker image. 

When build a templet from a Dockerfile, this is called a Base image but may need to get image from different vendor like NodeJS, Ubuntu, MariaDB, MongoDB.
This is called a Parent images. 
But we need to make some layers, this can be set a User and Passwd or adding application to copy to the project. 

## Pros 
Docker is easily to maintain software update, because docker is open source they are plenty of help to get start using it., when I come to development platform it good environment to develop the application when come to the developer do not need to install application to run the development-application. Docker container will boot faster than a Virtual-machine and it will not require that much memory or hardware to run.

* **Portability**</br>Faster deployment you can use service Like GitHub, Docker Hub to share the repository, 

* **Maintaining**</br>It's more easily to maintain a Docker container then a Virtual-Machine, The cost have docker container is less when comes to Cost-Per-Person offend.

* **Scalability**</br>Containers can be host on single host, this is way cloud service often use containerizing technology Like google 

* **Run-Cost**</br>Most of the time is cheaper to run docker container then standard servers, because of docker tech less memory, CPU, HDD resource to run. 

## cons

Docker has many benefits, but when it comes to security this is the biggest drawback to using docker because of the lightweight that docker run on single applications and dependencies need to think more about security when you are using docker, black hacker has less to think about to find the venerability when it comes to docker container, so when you are start learning docker need to think about security. 

* **Security**</br>Docker run lightweight version so less security on the default image.

* **Learning curved**</br>Docker do not have out-of-the box run system need to learn to setup and add security to have so use docker. 

* **Single application**</br>Docker container will only run most single application, when need to run more Container or use Virtual Machine

* **Interface**</br>Docker has go then better using UI, but container are using CLI are not a Operatives System UI, Need to learn to use the Command line to use docker 100%

## Conclusion 

When it comes to if you want use docker, need to see if you have the neologies about docker and security, or think in the long run need to cut down cost or willing to spend the time and money to learn Docker. the security on docker host has become more secure because of have many users docker has today. But need to think about what you want today, Virtual-machine or out-of-the-box system for hosting you application or data. you will need to think about what most are imported for you application. They are pay plan security system for hosting with docker. Docker has an easily maintain for workflow or hosting I will say docker has a good place for good an effective workflow for team of developer. Docker has one biggest userbase Containerization platform so finding help, tutorials the community there for you.

**Before start to use Docker engine**

* **Risk Analyze**</br>Need to resource security and vulnerability in dependence and the library that want to use. 

* **Image Risk**</br>When it’s  come to using docker because open source everyone can make image, use the official Image because security. 


**Note from the author**</br>In this case study I need to not only understand what docker is and how it works, but need to start learning it to so I have made one project so if you want to test it out visited my GitHub repository, or continue to read.   

## Getting started with Docker 

### Installing 
Docker Engine avaible on a variety of linux platform,MacOS,Windows
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
Ok now you have installed docker we can test it out, I have made a docker image we can use for making it easier to understand how docker works. Only thing you need is to download the image from GitHub [here](https://github.com/nexnic/docker-api).

When you have donwload the repository, Open a terminal and go to the root folder of the repository 

```
docker build -t name .
```

This will build the image from this templet. and if you see at your docker desktop see new image inside. 

Now we are going to start it make it to container 

```
docker run -p 8000:8000 name
```

Now the server has start up will server message. 
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