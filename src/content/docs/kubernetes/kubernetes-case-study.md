---
title: Kubernetes
author: Erlend Johnsen<johnsulf>
tags: containerization, orchestration, devops, kubernetes
---

## Introduction

Kubernetes is an open-source container orchestration platform designed to automate the deployment, scaling, and management of containerized applications. Originally developed by Google, Kubernetes has become a de facto standard for container orchestration due to its flexibility, scalability, and robust community support. 

## Brief History

- **2014**: Kubernetes (often called “K8s”) is introduced by Google, based on their internal orchestration system called Borg.
- **2015**: Kubernetes is donated to the newly formed Cloud Native Computing Foundation (CNCF).
- **2016**: Surpasses early alternatives in popularity, such as Docker Swarm and Mesos, establishing itself as a market leader.
- **Today**: Continues to evolve with regular releases, an extensive plugin ecosystem, and a huge community driving development and best practices.

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

| Feature         | Description                                                                                     |
| --------------- | ----------------------------------------------------------------------------------------------- |
| Automated Scheduling & Deployment | Helps with container placement and lifecycle management.                       |
| Load Balancing & Service Discovery | Built-in DNS, service objects, and load balancing for container traffic.      |
| Self-Healing   | Monitors container health, restarts or replaces failed containers automatically.                 |
| Horizontal Scaling | Increases or decreases the number of container replicas based on observed metrics.           |
| Declarative Configuration | Uses configuration files to define the desired state, which Kubernetes enforces.      |

## Market Comparison

Below is a brief comparison of Kubernetes with other container orchestration solutions:

| Orchestrator       | Pros                                           | Cons                                                   |
| ------------------ | ---------------------------------------------- | ------------------------------------------------------ |
| **Kubernetes**     | Robust community, highly extensible            | Steep learning curve, complex setup for small projects |
| **Docker Swarm**   | Simpler setup, tight Docker integration        | Limited feature set compared to Kubernetes             |
| **Apache Mesos**   | General-purpose cluster manager                | Not as focused on containers, can be more complex      |
| **AWS ECS/EKS**    | Seamless AWS integration, managed services     | Ties you to the AWS ecosystem                          |

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
Copy code
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

## Conclusion
Kubernetes is a powerful solution for modern, cloud-native applications. By providing automated deployment, load balancing, self-healing, and scaling, it simplifies managing distributed systems. Although it comes with a steeper learning curve, Kubernetes remains the go-to choice for organizations seeking a highly extensible and community-driven platform to orchestrate their containerized workloads.

## References
- [Kubernetes Official Documentation](https://kubernetes.io/docs/home/)
- [Cloud Native Computing Foundation](https://www.cncf.io/)
- [Kubernetes on GitHub](https://www.github.com/kubernetes/kubernetes)
