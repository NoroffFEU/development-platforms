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

1. **Install Minikube**  
   A local Kubernetes setup tool for experimenting with Kubernetes on a single machine.

```bash
brew install minikube
minikube start
```

2. **Kubectl**
   The command-line tool to manage Kubernetes.

```bash
brew install kubectl
kubectl get nodes
```

3. **Define a Deployment & Service**
   Create YAML manifests that describe your desired application state.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: example-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: example
  template:
    metadata:
      labels:
        app: example
    spec:
      containers:
        - name: example-container
          image: nginx:latest
          ports:
            - containerPort: 80
```

Then expose this deployment as a service:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: example-service
spec:
  type: NodePort
  selector:
    app: example
  ports:
    - protocol: TCP
      port: 80
      nodePort: 30000
```

4. **Apply Configuration**
   Use `kubectl apply` to create the deployment and service:

```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```

5. **Access Your App**
   Once deployed, you can access your application on `<NodeIP>:30000`.

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
