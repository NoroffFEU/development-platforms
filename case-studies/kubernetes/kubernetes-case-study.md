---
Title: Kubernetes Case Study
Author: Ken Thore <k12re>
Tags: Containerization, Case study, Platform
---

## Introduction

Kubernetes is an open-source container operating system under the Apache Licence 2.0 used for automating deployment, scaling and management.
Containers contain all needed application code and dependencies within a microservice architecture. These are self contained and can run anywhere; cloud, local etc.
Kubernetes task is to operate them in production at any given scale, making the the application owners able to deploy complex applications rapidly and reliably.
Kubernetes is written in the Go language.

## Brief History

- 2014: Kubernetes is announced by Google.
- 2015: Kubernetes 1.0 is released.
- 2016: Helm package manager for Kubernetes is released.
- 2017: The most important competitors announced adding native support for Kubernetes (VMware, Mesosphere, Docker Inc, Microsoft Azure, AWS)

## Main Features

Kubernetes groups containers making up an application into logical units for easy discovery and management.

- **Scaling:** Kubernetes can scale without needing to increase the operating team.
- **Never outgrow:** Kubernetes grows flexibly to deliver applications easily and consistently.
- **Run everywhere:** Open-source gives you freedom to use however and whereever you want.

Features:

| Feature | Description |
| --- | --- |
| Automated rollouts and rollbacks | Progressive rollouts and monitoring. Rollbacks if something goes wrong |
| Service discovery and load balancing | Each Pod has unique IP adress and can load balance acroos |
| Storage orchestration | Automatically mount storage system, local cloud or network |
| Self-healing | Restarts failing containers and kills non-responding nodes |
| Secret and configuration management | Deploy and update secrets and configuration without rebuilding image |
| Automatic bin packing | Automatically place containers based on resources and contraints |
| Batch execution | Can manage batch an CI workloads |
| Horizontal scaling | Scales automatically, or with a simple command |
| IPv4/IPv6 dual-stack | Allocate IPv4 and IPv6 to Pods and Services |
| Designed for extensibility | Add features without changing upstream source code |



## Market Comparison

Compared to Docker (Swarm).
Kubernetes and Docker are mostly complementary tools. Kubernetes can work together with Docker. But either can be used without the other.

When installing Kubernetes for a production environment, Kubernetes clusters need proper planning an preparation. A production environment has more requirements than a learning environment, eg secure access for a number of users, availability and resources matching the changing demand.

Setting up a production environment means you have to consider separating control plane from nodes, replicating control plane on multiple nodes, balancing traffic to the clusters API server, have enough nodes ready, or quickly available.
You also need to consider scaling as your application grows, or if it has increasing demands during specific times or events.
Security and access to cluster resources will also need to be considered and handled.

You can also consider putting some of the handling over to a third party, eg. [Kubernetes Partners](https://kubernetes.io/partners/).
This includes Serverless options, meaning they handle the clusters.
Managed control plane; the partner manages scale and availability, also patches and upgrades.
Managed nodes; the provider will configure pools of nodes to meet your demand, and have these available and ready.
Integration; provideres can integrate Kubernetes withs other services you might need, sucha as storage, container registries, authentication methods and dev tools.

Kubernetes is more complex, regarding installation and learning curve. It can automatically scale and has built in monitoring.
You need to setup load balancer manually, and you also need a separate CLI tool.

Docker Swarm on the other hand is easier to install and has a flatter learning curve. Docker is a suite of tools for creating, sharing and running containers (Swarm).
It doesn't automatically scale, and needs third party tools for monitoring. It has an automatic load balancer and integrated CLI.

Docker Desktop is a one-click install, that lets you build, share and run containerized applications.
You can manage your containers, applications and images directly from your machine using a straightforward GUI interface.
This can be used alone or in complement to the CLI Docker provides.
Docker includes swarm mode for natively managing clusters (called swarm). Docker CLI can be used to create a swarm, deploy application services to a swarm, and manage behaviour.

Docker Desktop gives you the ability to focus on writing code instead of complex installation and setup routines.
It takes care of port mapping, file system and other default settings. It is also regularly updated with bug fixes and security updates.



## Getting Started

When you install Kubernetes, you can choose an installation type based on ease of maintenance, security, control, resources and expertise to operate and manage the cluster.
You can deploy a Kubernetes cluster on a local machine, cloud, or your own datacentre.
Kubernetes components should be run as container images wherever possible, and have Kubernetes manage those components.

Find the latest version and download here:
[Download Kubernetes](https://downloadkubernetes.com)
or here:
[Latest Kubectl](https://dl.k8s.io/release/v1.28.1/bin/windows/amd64/kubectl.exe)

kubectl is Kubernetes command line tool, allowing you to run commands against the Kubernetes clusters. It is available for a number of operating systems.
You can use kubectl to inspect, manage and deploy clusters.

If you want to run Kubernetes on your local computer, you need [kind](https://github.com/kubernetes-sigs/kind), which is a tool for running local Kubernetes clusters using Docker container nodes.
This tool requires that you have either Docker or Podman installed.

The Kubernetes master node handles the control pane of the cluster and is built out of various components;

API server: Serves the Kubernetes API over HTTP using JSON.
Scheduler: Tracks resource allocation and ensures workload does not exceed available resources on the various nodes.
Controllers: Communicates with the API to create, update and delete the resoures it manages on the cluster of nodes. 
Nodes: A machine where containers are deployed.
Pods: Is a basic scheduling unit and consists of one or more containers on the same node. Containers reside inside Pods.
Workloads: Allows users to define and manage workloads at a higher level than Pods.
Services: A set of Pods that work together.
Volumes, ConfigMaps, Labels and Add-ons and more are even more components included in the master node. 



## Conclusion

Kubernetes can automate deployment and management of containerized applications, so you don't have to individually manage each container.
It can also scale, meaning it will determine placement of the containers to ensure efficient resource use on the host machine(s).
Challenges include security, although there are multiple built in mechanisms to prevent vulnerabilities. This includes secure container deployment pipelines, encrypted network traffic and more. It will require a thorough DevSecOps approach as these systems alone are not sufficient.

What are the main use cases? 
It "fetches" a container image from a repository and deploys it on a host machine. It is also able to automatically re-create failed containers, reducing down-time.

What are the main challenges? 
Networking the containers, and their secure communication is a comprehensive task, and you need a balancer to distribute traffic across multiple hosts.
Operating teams depend on detailed monitoring data to ensure that the heallth of the infrastructure and the application itself is in good condition.

In conclusion Kubernetes is an environment for enterprise scale application as it demands complex installation and operation resources.
I would consider using Kubernetes when operating on a big scale, or an a business with quick growth.

On the other hand, Docker seems to be the easier approach and give you the possibility to focus on building you app instead of managing it.
Would consider using this to smaller production environments as it demands fewer resources to operate.

As Kubernetes is at the core of the cloud native movement, I would imagine it will only grow in the future as more and more applications are moved to cloud technology.

## References

- [Kubernetes.io](https://kubernetes.io)
- [Wikipedia](https://https://en.wikipedia.org/wiki/Kubernetes)
- [Dynatrace](https://https://dynatrace.com/news/blog/kubernetes-vs-docker/)

## Additional Resources

- [Docker.com](https://www.docker.com)
- [Podman.io](https://www.podman.io)
