---
title: Infrastructure as Code
author: Kristine Alexandersen
tags: infrastructure, cloud, automation, terraform
---

## Introduction

Infrastructure as Code (IaC) is a methodology that allows developers to define and automate the infrastructure of a project. This includes components such as servers, databases, networks, and more. In the field of information technology, IaC provides a way to define infrastructure using human-readable machine code written in plain text, which is then executed using tools such as Terraform.
This approach helps automate time-consuming tasks that would otherwise have to be performed manually, freeing up developers to focus less on provisioning and deploying servers and more on higher-value tasks.
Today, the most commonly used cloud providers for provisioning infrastructure are the major cloud platforms, including Google Cloud, AWS (Amazon Web Services), and Microsoft Azure.

## Brief History

- **1993**: _CFEngine_ is released by Mark Burgess, introducing early concepts of automated configuration management.
- **2006**: _AWS_ launches **Elastic Compute Cloud (EC2)**, marking the beginning of widespread cloud-based services.
- **2009**: _Chef_ is introduced, a programming language-based framework for configuration management.
- **2010**: _AWS_ introduces **CloudFormation**.
- **2011**: _Microsoft_ launches **Azure Resource Manager (ARM)**, enabling declarative management of Azure cloud resources.
- **2012**: _Ansible_ is released.
- **2014**: _Terraform_ is launched by **HashiCorp**.
- **2015**: _Google_ introduces **Cloud Deployment Manager**.
- **2018**: _Pulumi_ is released.
- **2019**: _AWS_ introduces **Cloud Development Kit (CDK)**.
- **2020**: _Microsoft_ launches **Bicep**, a domain-specific language for defining Azure resources.
- **2020**: _AWS_ launches **AWS Copilot**.

## Main features

IaC follows a DevOps methodology, incorporating principles from software development such as version control, collaboration, and continuous integration and delivery (CI/CD). It is a descriptive model for defining and deploying infrastructure. Users are encouraged to utilize configuration files (declarative definition files), which specify the desired end state of the infrastructure. There is no need for a step-by-step guide explaining how to achieve this state—this is handled by an IaC tool such as Terraform.

There is no standard syntax for defining these configuration files, but different platforms support formats such as YML, JSON, and XML. This practice is crucial for DevOps workflows and continuous delivery. With IaC, DevOps teams can collaborate using consistent practices and tools to deliver their applications efficiently.

Without IaC, development teams would need to manually facilitate deployment environments, increasing the risk of human error. Idempotence is a key principle in IaC, meaning that a given operation will always produce the same result. The environment remains in the same configuration, ensuring that the infrastructure always reaches the desired state, regardless of its initial condition before running the code.

When working agile in teams, as most industries do nowadays, collaboration is a key element. Multiple team members may work on infrastructure changes simultaneously, making version control essential. Just like software code is versioned and tracked, IaC allows infrastructure to be versioned using tools such as Git. This enables team members to keep track of changes over time, roll back to previous configurations, and collaborate more efficiently. If someone makes a change, others can review it and merge it if it meets the required standards.

By using IaC, scaling infrastructure becomes significantly easier. The available tools can automate processes such as spinning up new servers or deploying additional resources in a faster and more efficient manner than before. As an application grows and requires more resources to meet user demands, the infrastructure can automatically scale up without manual intervention. The same applies to scaling down. For example, if a website promotes a highly popular product for sale, the infrastructure can scale up on the sale date to prevent downtime due to high traffic. Once the sale is over and traffic returns to normal, the infrastructure will scale down accordingly. This is an efficient and automated process made possible with IaC tools, resulting in cost savings by eliminating time-consuming manual processes that are prone to errors. By leveraging IaC, organizations can optimize resource utilization and only pay for what they use.

## Challenges of IaC

Traditionally, developers were primarily responsible for writing and optimizing code, while operations teams managed infrastructure. With the rise of IaC and DevOps, these boundaries have become more blurred, and developers are now expected to understand and configure infrastructure, just as operations teams need a broader understanding of software development. This is fundamentally a beneficial concept, but it also increases the pressure on individuals to master a broader set of skills.

Another challenge with IaC, in theory, is that it has a slower development cycle compared to traditional software development. Provisioning resources takes time because cloud providers need to allocate, configure, and prepare them. Additionally, if a configuration error occurs, resources must be deleted and re-provisioned, further extending the development cycle. With IaC, the entire infrastructure must be provisioned before it can be tested, and if errors arise, the process must be restarted after debugging. This contrasts with traditional development, where code can be quickly tested in a local or test environment.

Rollbacks can be costly since provisioned resources in cloud environments can be expensive. Additionally, it can take longer to receive feedback on whether a code change works, as the infrastructure must be fully deployed first. However, in practice, large companies mitigate these challenges by using local or emulated test environments before applying changes to the cloud. IaC code can also be validated and tested using tools such as **terraform plan** before running **terraform apply**. By using a modular architecture, teams can avoid re-provisioning the entire infrastructure for small changes. Additionally, CI/CD pipelines for IaC can be implemented, ensuring that infrastructure changes are automatically tested before deployment.

A greater practical challenge is getting people who have worked in traditional environments to adapt to a new and agile way of working. It represents a different culture in how infrastructure is provisioned and managed, and some may have difficulty understanding and embracing it. Therefore, effective motivators and training initiatives within organizations are essential to help people adjust to these new working methods.

## Popular tools for IaC

| Name          | Description                                                                                                                                                                        | Main Function            | Supported Platforms                  | Language                                                | First Released |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | ------------------------------------ | ------------------------------------------------------- | -------------- |
| **Terraform** | Used for IaC to create, provision, and configure infrastructure such as servers, databases, and networks. Can also be used for multi-cloud provisioning and Kubernetes management. | Provisioning             | AWS, Azure, Google Cloud, Kubernetes | HCL (HashiCorp Configuration Language)                  | 2014           |
| **Pulumi**    | Allows users to define infrastructure using standard programming languages. Supports cloud platforms and Kubernetes.                                                               | Provisioning             | AWS, Azure, Google Cloud, Kubernetes | Multiple languages (TypeScript, Python, Go, .NET, Java) | 2017           |
| **Bicep**     | Domain-specific language for defining and deploying Azure resources. Simpler syntax than JSON but limited to Azure.                                                                | Deployment               | Microsoft Azure only                 | Bicep                                                   | 2020           |
| **Ansible**   | Automates provisioning, configuration management, and application deployment using playbooks.                                                                                      | Configuration management | Linux, Windows, Cloud platforms      | YAML                                                    | 2012           |

## Terraform

When it comes to IaC, there are many advantages to this method, but the most important ones are: it is consistent- meaning that the infrastructure is defined in a consistent and repeatable way, ensuring that it is always configured the same way, regardless of who set it up. It is reusable- meaning that the code can be reused across different environments. It uses version control, just like a developer uses in programming (Git). The code can be shared, allowing for team collaboration, where everyone has the same understanding of infrastructure management. And it automates provisioning and management of the infrastructure. This helps reduce the risk of human error and minimizes the amount of manual work required.

Terraform is, as mentioned earlier, a tool that makes this possible. What makes it a popular choice for Infrastructure as Code is that Terraform works the same way regardless of which cloud provider is used. The syntax, logic, and code structure remain the same whether you choose to use Google Cloud or Azure, as well as other platforms. This is not always the case with other IaC tools available.

HCL (HashiCorp Configuration Language) is a simple, human-readable language, and this is the language Terraform uses. It is a domain-specific language used to define infrastructure resources and their dependencies.

### Getting started with Terraform

To try Terraform, visit their official website – https://www.terraform.io/ – and follow their guide. The first step is to choose the platform you want to use. I chose Microsoft Azure. From there, you get an introduction to Infrastructure as Code (IaC) and how Terraform can be used to:

- Build infrastructure using code (IaC) quickly
- Efficiently manage infrastructure
- Standardize deployment workflows
- Track changes and infrastructure state over time
- Collaborate on infrastructure code

### Installing Terraform

The next step explains how to install Terraform on different systems. I used Linux Ubuntu. The guide provides a step-by-step explanation of how to install and verify the Terraform installation.

After installation, HashiCorp’s guide provides instructions on how to set up an NGINX server using Docker (which is used to manage containers as part of a local test environment, not an actual cloud infrastructure). The guide walks you through creating a project directory and writing a **main.tf** file containing the Terraform configuration.
Next, you initialize the project using:

```
terraform init
```

This command initializes the Terraform configuration for your environment and downloads the necessary providers and plugins required for managing infrastructure, such as Docker.

By running:

```
terraform plan
```

You will get a detailed plan of what is about to happen: which new and existing resources will be updated, and which will be deleted.

Then run:

```
terraform apply
```

By visiting **localhost** in a browser, you can confirm that the NGINX container is running. **terraform apply** executes the planned changes and creates or updates the infrastructure based on the desired state defined in your declarative Terraform configuration files written in HCL.

The guide also demonstrates how to remove the container using:

```
terraform destroy
```

### Creating cloud infrastructure with Terraform

The next step explains how to create cloud infrastructure. Terraform supports multiple cloud providers, and I chose Azure. To start building infrastructure in Azure, you first need to create an Azure account. If you are only testing Terraform, a free Azure account is sufficient. Additionally, you need Terraform (version 1.2.0+) and the Azure CLI installed.

The guide provides clear instructions on how to create a Terraform configuration to deploy an Azure Resource Group. One important note is that when logging in with:

```
az login
```

Microsoft has updated the response format. You still receive the necessary information, but with the following warning:

> _The login output has been updated. Please be aware that it no longer displays the full list of available subscriptions by default._

However, the guide still displays this code snippet:

```
You have logged in. Now let us find all the subscriptions to which you have access...

[
  {
    "cloudName": "AzureCloud",
    "homeTenantId": "0envbwi39-home-Tenant-Id",
    "id": "35akss-subscription-id",
    "isDefault": true,
    "managedByTenants": [],
    "name": "Subscription-Name",
    "state": "Enabled",
    "tenantId": "0envbwi39-TenantId",
    "user": {
      "name": "your-username@domain.com",
      "type": "user"
    }
  }
]

```

### Setting up Terraform for Azure

Next, the guide walks through:

- Creating a Service Principal (an identity in Azure for automated authentication)
- Setting up environment variables to authenticate Terraform with Azure
- Writing a Terraform configuration for Azure, with explanations of the different sections in **main.tf**

This is an excellent guide for getting familiar with Terraform. You learn how to initialize and apply a Terraform configuration, inspect the Terraform state file, and manage infrastructure in Azure. After setup, you can log in to the https://portal.azure.com to continue managing your cloud infrastructure.

Terraform helps keep track of the content in the state file (terraform.tfstate) and uses that information to keep the infrastructure in sync with your changes in code. When you update the configuration, the Terraform state file determines what needs to be updated.

## Conclution

We live in a time where efficiency is a top priority. Unlike traditional approaches, new methods have been developed to enable this. Since the early 1990s, various automation techniques for infrastructure have been continuously improved. With the rise of cloud computing in the early 2000s as an alternative to traditional on-premise servers, many major organizations have embraced this transformation.

The leading cloud providers all offer their own tools for infrastructure provisioning, but these are often tied to their specific platforms. Today, many organizations operate in hybrid environments, combining multiple cloud platforms with on-premise solutions. This is where HashiCorp’s Terraform provides a powerful advantage, enabling seamless infrastructure provisioning by defining infrastructure as code.

By reducing the need for manual configuration, organizations can achieve significant cost savings, increased efficiency, and minimized human errors. Additionally, Infrastructure as Code enhances visibility and control over infrastructure, allowing organizations to respond more quickly to incidents and adapt to changes. This is precisely why more and more companies are adopting IaC to manage their applications and business operations. IaC paves the way for a more agile, efficient and error-free process within handling infrastructure. This correlates well with DevOps' philosophy of automation and collaboration.

## References

- https://www.terraform.io/
- https://www.pulumi.com/docs/iac/
- https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/overview?tabs=bicep
- https://bjerk.io/artikler/2023/hva-er-infrastruktur-som-kode
- https://www.varonis.com/blog/azure-bicep
- https://docs.ansible.com/ansible/latest/getting_started/introduction.html?extIdCarryOver=true&intcmp=7015Y000003t7aWQAQ&sc_cid=701f2000001OH7EAAW
- https://www.kode24.no/artikkel/hva-er-greia-med-terraform-og-infrastruktur-som-kode-bratt-laeringskurve/78543729
- https://developer.hashicorp.com/terraform/tutorials/azure-get-started/
- https://www.iver.com/no/presse-og-artikler/hashicorp-terraform---slik-administrerer-du-infrastrukturen-somlost-pa-tvers-av-ulike-skyplattformer/
- https://thenewstack.io/the-pros-and-cons-of-iac-what-you-need-to-know/
