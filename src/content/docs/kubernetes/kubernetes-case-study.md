---
title: Kubernetes (k8s)
author: Erlend Johnsen <johnsulf>
tags: containerization, orchestration, devops, kubernetes, k8s
---

## Introduction

Kubernetes, often called _k8s_, is an open-source container orchestration platform designed to automate the deployment, scaling, and management of containerized applications. Originally developed by Google, Kubernetes has become a de facto standard for container orchestration due to its flexibility, scalability, and robust community support.

## Brief History

- **June 6, 2014 - First Commit**  
  The very [first Kubernetes commit](https://github.com/kubernetes/kubernetes/commit/2c4b3a562ce34cddc3f8218a2c4d11c7310e6d56) is pushed to GitHub, containing over 47,000 lines of code. This marks the project’s official start, although ideas and prototypes had been brewing at Google for months beforehand.

- **June 10, 2014 - Public announcement**  
  Google’s Eric Brewer [announces Kubernetes at DockerCon 2014](https://youtu.be/YrxnVKZeqK8?si=Q_wYBFn7dsS9H3k3), highlighting it as an open-source container orchestration solution inspired by Google’s internal systems (Borg and Omega).

- **July 21, 2015 – Version 1.0 and CNCF**  
  [Kubernetes 1.0](https://cloudplatform.googleblog.com/2015/07/Kubernetes-V1-Released.html) is released, and Google donates the project to the newly formed [Cloud Native Computing Foundation (CNCF)](https://www.cncf.io/announcements/2015/06/21/new-cloud-native-computing-foundation-to-drive-alignment-among-container-technologies/). At this point, the community is mostly engineers from Google and Red Hat.

- **2016 – Project Matures**

  - Kubernetes outpaces alternatives like Docker Swarm and Mesos, becoming a market leader for container orchestration.
  - Kelsey Hightower publishes the [first commit of Kubernetes the Hard Way](https://github.com/kelseyhightower/kubernetes-the-hard-way/commit/9d7ace8b186f6ebd2e93e08265f3530ec2fba81c) in July, aiming to demystify cluster setup.

- **2017–2019 – Rapid Feature Growth**

  - [Role-Based Access Control (RBAC)](https://kubernetes.io/blog/2017/04/rbac-support-in-kubernetes/) is added in early 2017.
  - ThirdPartyResources are replaced with **Custom Resource Definitions (CRDs)** in [Kubernetes 1.7](https://kubernetes.io/blog/2017/06/kubernetes-1-7-security-hardening-stateful-application-extensibility-updates/), later moving to GA in 2019.
  - Workloads API (Deployment, ReplicaSet) reaches GA in [Kubernetes 1.9](https://kubernetes.io/blog/2017/12/kubernetes-19-workloads-expanded-ecosystem/) (December 2017).

- **2020–2022 – Major Changes & Deprecations**

  - [Dockershim is deprecated](https://kubernetes.io/blog/2020/12/18/kubernetes-1.20-pod-impersonation-short-lived-volumes-in-csi/) in 1.20 (December 2020) and fully removed by 1.24 (May 2022).
  - Release cadence shifts from four to three releases per year.
  - Kubernetes continues refining APIs (widely used beta APIs removed in 1.22).

- **2023–2024 – Looking Ahead**
  - Kubernetes celebrates its **10-year** milestone since the first commit (June 6, 2014). By now, it has grown to one of the largest open-source communities, with over 88,000 contributors.
  - Key focus areas include removing legacy in-tree cloud providers (trimming ~1.5 million lines of code) and evolving the registry to `registry.k8s.io` for improved distribution.
  - AI/ML workloads are increasingly important, spurring new working groups (like the Serving WG) and driving further improvements in batch scheduling, GPU/accelerator support, and cluster resource management.
- **Today**  
  Kubernetes continues to evolve rapidly with a robust community that consistently drives new features, best practices, and ecosystem projects. This ensures Kubernetes remains a **pillar** of cloud-native infrastructure - even a decade after that first fateful commit.

Source: [10 Years of Kubernetes, June 06, 2024, kubernetes.io](https://kubernetes.io/blog/2024/06/06/10-years-of-kubernetes/)

## Main Features

- **Automated Scheduling & Deployment**  
  Automatically schedule containers across a cluster and manage container lifecycles using declarative specifications.

- **Load Balancing & Service Discovery**  
  Exposes containers via built-in service discovery features and balances network traffic to ensure optimal resource usage.

- **Self-Healing**  
  Automatically restarts failed containers, replaces and reschedules containers when nodes die, and kills containers that don’t respond to health checks.

- **Horizontal Scaling**  
  Easily scale applications up or down based on CPU usage or custom metrics, using the Horizontal Pod Autoscaler.

- **Declarative Configuration**  
  Manage infrastructure using YAML or JSON manifests, ensuring that the cluster’s actual state matches the desired state.

| Feature                            | Description                                                                        |
| ---------------------------------- | ---------------------------------------------------------------------------------- |
| Automated Scheduling & Deployment  | Helps with container placement and lifecycle management.                           |
| Load Balancing & Service Discovery | Built-in DNS, service objects, and load balancing for container traffic.           |
| Self-Healing                       | Monitors container health, restarts or replaces failed containers automatically.   |
| Horizontal Scaling                 | Increases or decreases the number of container replicas based on observed metrics. |
| Declarative Configuration          | Uses configuration files to define the desired state, which Kubernetes enforces.   |

## Market Comparison

Below is a brief comparison of Kubernetes with other container orchestration solutions:

| Orchestrator     | Pros                                       | Cons                                                   |
| ---------------- | ------------------------------------------ | ------------------------------------------------------ |
| **Kubernetes**   | Robust community, highly extensible        | Steep learning curve, complex setup for small projects |
| **Docker Swarm** | Simpler setup, tight Docker integration    | Limited feature set compared to Kubernetes             |
| **Apache Mesos** | General-purpose cluster manager            | Not as focused on containers, can be more complex      |
| **AWS ECS/EKS**  | Seamless AWS integration, managed services | Ties you to the AWS ecosystem                          |

## Getting Started

Below is a short guide to help you containerize a basic application and run it locally using **Docker Desktop** and **Minikube** on a macOS machine. This approach is great for front-end developers who want to simulate a containerized environment or get a taste of Kubernetes.

---

### 1. Install Docker Desktop

Docker Desktop is a convenient way to install and manage Docker Engine on macOS, providing a graphical interface and all necessary tooling.

```bash
brew install --cask docker
```

1. Once installed, open Docker Desktop via Spotlight (cmd+SPACE and search for docker).
2. Wait until it says “Docker is running” (a whale symbol) in the status.
3. In a new terminal, run:

```bash
docker version
```

You should see both Client and Server sections if Docker is operational.

### 2. Install Minikube and Kubectl

**Minikube** allows you to create a local Kubernetes cluster on your machine.
**Kubectl** is the official Kubernetes CLI tool for interacting with that cluster.

```bash
brew install minikube
```

**Note:** On newer versions of Homebrew, installing Minikube may also install Kubectl. If not, you can install Kubectl separately with `brew install kubectl`

### 3. Start Minikube with Docker as the driver

Since you have Docker Desktop running, specify Docker as the underlying driver for Minikube:

```bash
minikube start --driver=docker
```

- Minikube spins up a single-node Kubernetes cluster on your Mac.
- This can take a few moments while it downloads base images.

Check that your cluster is running:

```bash
  kubectl get nodes
```

You should see something like this:
| NAME | STATUS | ROLES | AGE | VERSION |
| ---------| ------------| --------------| ----| --------|
| minikube | Ready | control-plane | 35s | v1.XX.X |

### 4. Containerize your application

Choose an existing project, f.ex. your latest Noroff assignment.

1. Open the project in VS Code.
1. Optionally create a new Git branch for your Docker changes:

```bash
git checkout -b docker-setup
```

3. In the project's root folder, run:

```bash
docker init
```

Docker will walk you through a few questions to create a `Dockerfile` and a `compose.yaml` (Compose file) with sensible defaults.

1. **Dockerfile** – defines how to build and run your container (e.g., specifying the base image, copying files, running build scripts).
2. **compose.yaml** – defines how to combine multiple containers or services (e.g., a front-end and a backend) in a single environment.

**Tip:** Inspect these files. They often include detailed inline comments to explain each section.

You may now run `docker compose up` to run your project. Be aware that the `Dockerfile` and `compose.yaml` files may need additional changes. In that case, the [Dockerfile reference](https://docs.docker.com/reference/dockerfile/) and [Compose file reference](https://docs.docker.com/reference/compose-file/) may be good places to look.

### Next Steps: Deploying to Minikube

If you want to take your Dockerized app and run it in Kubernetes:

1. Push your Docker image to a registry (e.g., Docker Hub) or use your local Docker daemon with Minikube.
2. Create Kubernetes manifests (Deployment, Service) describing how your containers should run.
3. Use kubectl apply -f to deploy those manifests to your Minikube cluster.
4. Access your service using minikube service <service-name> or by checking your NodePort.

### Wrap-Up

By installing Docker Desktop and Minikube, you’ve set up a modern, local development environment suitable for containerizing and orchestrating front-end (and back-end) applications. Whether you choose to run your app via simple Docker Compose or go full-on Kubernetes with Minikube, you now have the fundamental building blocks to experiment with containerized workflows and microservices architecture.

Feel free to explore further:

- Docker best practices (multi-stage builds, Docker secrets).
- Minikube advanced usage (ingress controllers, volumes, multi-cluster management).
- Kubernetes basics (Deployments, Services, Ingress, ConfigMaps, Secrets).

With this setup, you’re well on your way to becoming proficient in container-based development!

## Should You Use Kubernetes in Your Project?

Choosing to adopt Kubernetes depends on the size and complexity of your application. Here are some considerations:

1. **Scalability and Complexity**

   - **Good Fit**: If you foresee significant growth, require scaling across multiple servers, or have microservices that need robust orchestration, Kubernetes can help you manage it efficiently.
   - **Less Ideal**: Smaller projects or simple web apps might not need the overhead of Kubernetes. A basic Docker setup or a Platform-as-a-Service (PaaS) solution (e.g., Heroku) may be more straightforward.

2. **Team Expertise**

   - **Good Fit**: If your team is experienced with containers, networking, and DevOps best practices, Kubernetes can bring significant benefits.
   - **Less Ideal**: If your team is completely new to containerization, the learning curve for Kubernetes may slow development, and you might start with simpler tools like Docker Swarm or single-host Docker.

3. **Deployment Environment**

   - **Good Fit**: Kubernetes is highly portable across on-premises, cloud, and hybrid environments, making it perfect if you want a unified deployment strategy.
   - **Less Ideal**: If your application is intended for a single VPS or a serverless environment, setting up Kubernetes could be an overkill compared to using managed services.

4. **Budget and Tooling**
   - **Good Fit**: Large organizations or projects that can invest in a dedicated DevOps team—and possibly a managed Kubernetes service (like GKE, EKS, or AKS)—stand to benefit the most.
   - **Less Ideal**: If you have limited resources or a minimal hosting budget, managing your own Kubernetes cluster can become expensive and time-consuming.

Ultimately, Kubernetes shines in **microservices** or **large-scale** environments where automation, resilience, and scalability are top priorities. For smaller or simpler deployments, consider whether a lighter-weight solution will satisfy your requirements without adding complexity.

## Conclusion

Kubernetes is a powerful solution for modern, cloud-native applications. By providing automated deployment, load balancing, self-healing, and scaling, it simplifies managing distributed systems. Although it comes with a steeper learning curve, Kubernetes remains the go-to choice for organizations seeking a highly extensible and community-driven platform to orchestrate their containerized workloads.

## References

- [Kubernetes Official Documentation](https://kubernetes.io/docs/home/)
- [Cloud Native Computing Foundation](https://www.cncf.io/)
- [Kubernetes on GitHub](https://www.github.com/kubernetes/kubernetes)
