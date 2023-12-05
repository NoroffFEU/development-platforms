---
title: VSCode Dev Containers case study
author: Ingeborg Sanna / Spekkhogger
tags: devcontainers, containers, docker, VSCode, microsoft
---

## Introduction
Dev Containers is a feature within Visual Studio Code, and is used in combination with Docker. It is a tool that streamlines the process of setting up and managing a development enviorment. It enables the developers to save all tools, dependencies, and configurations within a container, making it easy to share and maintain development enviornments across machines and team members.

Combining Dev Containers with Docker enhances the development experience by simplifying environment setup, ensuring consistency, and providing a smooth workflow within Visual Studio Code. While Docker is a powerful containerization tool, Dev Containers make it more accessible and developer-friendly, particularly for those who prefer using Visual Studio Code.

## Brief History
As Dev Containers is a relatively new feature it's history is truly brief. The history of Dev Containers lay within the history of Remote Development, and was only recently separated and made into it's own extension. 

It can still be installed as a part of Remote Development extension.

- 2017: Dev containers were officially introduced as a part of VSCode by Microsoft
- 2019: Microsoft integrated Dev Containers with the Remote Development extension for VSCode
- 2020: Dev Containers was expanded with the development of container images for various programming languages, frameworks, and development scenarios.
- 2022 - Present: Microsoft and the open source community continue to improve features.

## Main Features
| Feature:          | Description:                                                                                                                                                                       |
|---|---|
| Reproducibility   | Dev Containers ensure that all team members have identical development environments. This reduces the "it works on my machine" problem and minimizes configuration-related issues. |
| Consistency       | Dev Containers standardize the development process, ensuring that the same tools and configurations are used.                                                                      |
| Scalability       | Containers can be easily scaled and managed, making it convenient for projects with complex dependencies or multiple microservices.                                                |
| Security          | Dev Containers provide a layer of security by isolating development environments. Any changes made within the container do not affect the host system.                             |
| Templates(Images) | Templates provide preconfigured settings and dependencies tailored to a specific languages.     

#### Notaable weaknesses
1. Dev Containers ties you to use both VSCode and Docker. It is currently being made available to other code editors, but the 1st class integration it has towards VSCode is so far unmatched. 
2. The setup and learning curve of Dev Containers can be complex, especially for those without prior experience with Docker or similar containers. 


## Market Comparison
#### A short comparison between Dev Containers and Codespaces(Github): 
| Comparison | Description: |
|---|---|
| Use cases | Dev Containers are ideal for local development and those who prefer Visual Studio Code as their code editor. Codespaces are well-suited for collaborative development, remote work, and projects hosted on GitHub. |
| Location | Dev Containers are local and run on your machine, while Codespaces are hosted remotely in the cloud. |
| Integration | Dev Containers are integrated with Visual Studio Code, while Codespaces are closely integrated with GitHub, making them an attractive choice for projects hosted on GitHub. |
| Customization | Dev Containers provide more options in customizing development environments. Codespaces might have some restrictions. |

In summary both provide you with great tools that streamlines the process of setting up and managing development enviorments. Which you should choose will depend on the needs of your project. While Dev Containers are primarily used for local development, Codespaces is a remote and collaborative enviorment. They both tie you to other tools. With Dev Containers you will be tied to VSCode and Docker, and Codespaces with tie you to Github. For a more custamizable enviornment, Dev Containers will be the better choice. 

Note: Both are owned by Microsoft. 

## Getting Started
This guide will show you how to open an existing project using one of templates provided by Dev Containers. 

1. Install [VSCode](https://code.visualstudio.com/)
2. Install [Docker](https://docs.docker.com/)
3. Install the Dev Container extension in VSCode
4. Open your existing project in VSCode. Open the command line in VSCode(F1)
5. Select "Dev Containers: Open folder in container..." 
6. Select the appropriate image template for your project. Select version and wanted features as prompted. 
    You may also create a Dev Container configuration in an existing folder using a configuration file -> devcontainer.json
7. Wait for the container to build. 


## Conclusion
Dev Containers are a valuable tool for modern software development, offering a solution to the challenges of environment setup and configuration management. It is a great assent for development teams that are already using VSCode and other Microsoft products. Once familiar with the extension it can be a great tool for the team to streamline and improve the overall development experience.

## References
1. [VSCode Dev Container tutorial](https://code.visualstudio.com/docs/devcontainers/tutorial)
2. [Marketplace](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers&ssr=false#overview)
3. [Development Containers](https://containers.dev/)

Videos: 
4. [VSCode Youtube](https://www.youtube.com/watch?v=b1RavPr_878&ab_channel=VisualStudioCode)
5. [Working with Dev Containers by Chris Ayers](https://www.youtube.com/watch?v=HV7LJ_LUZ5A&t=1129s&ab_channel=Devoxx)