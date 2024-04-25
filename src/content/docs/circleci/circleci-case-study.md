---
title: CircleCI
author: Stian Busengdal <Fadecap>
tags: devops, ci, circleci
---

![CircleCI Process](./src/content/docs/circleci/circlecilogo.png "CircleCI Process")

### Overview

**CircleCI** is a continuous integration and continuous delivery (CI/CD) platform that automates the software development process, allowing developers to focus on writing code rather than managing infrastructure. It can integrate with GitHub, Bitbucket, and other version control systems to automate the build, test, and deployment processes. This means developers can focus more on writing code and delivering value to users.

### History of CircleCI

**2011**: Founded by Paul Biggar and Allen Rohner to automate build, test, and deployment workflows.

**2014**: Gained traction globally; enhanced integrations with GitHub, Bitbucket, and GitLab.

**2017**: Introduced CircleCI 2.0 with new configuration system, improved Docker support, and custom workflows.

**2018**: Formed strategic partnerships with AWS, Google Cloud, Slack, and expanded ecosystem.

**2021-Present**: Launched CircleCI 3.0, focusing on performance, scalability, and developer experience.

### Main Features of CircleCI

- **Automated Workflows**: CircleCI automates build, test, and deployment processes, reducing manual tasks and improving efficiency.
  
- **Standardized Environments**: CircleCI ensures consistent build environments and configurations across projects, leveraging Docker support for reproducible builds.
  
- **Scalability and Flexibility**: CircleCI's cloud-based platform scales easily to support growing projects and teams, offering flexible pricing and resource optimization.
  
- **Comprehensive Testing**: CircleCI integrates with popular testing frameworks to run automated tests, enhancing code quality and reliability.
  
- **Extensive Integrations**: CircleCI integrates seamlessly with GitHub, Bitbucket, AWS, Google Cloud, and more, streamlining the development workflow and enhancing collaboration.

**Here we can see how the process of CircleCI works:**

![CircleCI Process](./src/content/docs/circleci/circleci.png "CircleCI Process")

### Pros and Cons of CircleCI

| **Pros** | **Cons** |
|----------|----------|
| - User-Friendly Interface | - Learning Curve |
| - Automation and Efficiency | - Cost and Pricing |
| - Scalability and Flexibility | - Complexity and Customization |
| - Comprehensive Testing and Validation | - Performance and Resource Utilization |
| - Extensive Integrations and Ecosystem | - Support and Documentation |

#### Pros

- **User-Friendly Interface**: Intuitive design for easy CI/CD pipeline management.
  
- **Automation and Efficiency**: Streamlines build, test, and deployment processes for increased productivity.
  
- **Scalability and Flexibility**: Cloud-based platform scales easily with flexible pricing, suitable for projects of all sizes.
  
- **Comprehensive Testing**: Seamless integration with popular testing frameworks enhances code quality and reliability.
  
- **Extensive Integrations**: Wide range of integrations with popular tools and services, enhancing collaboration and workflow.

#### Cons

- **Learning Curve**: New developers may face challenges in understanding and configuring CircleCI effectively.
  
- **Cost and Pricing**: Scaling and accessing advanced features may lead to increased costs over time.
  
- **Complexity**: Customizing complex build configurations and workflows may require advanced expertise.
  
- **Performance**: Ongoing monitoring and maintenance needed for optimal performance and resource utilization.
  
- **Support**: Accessing timely support and navigating complex scenarios may require additional assistance and collaboration.

### Installation

- 1. To start building on CircleCI, we first need to ***Sign up***. Sign up with your preferred email address and connect your Github, Bitbucket or GitLab account

- 2. Create a Project
In the CircleCI web app, select Projects from the sidebar. Click Create Project, then select the repository you would like to connect from the dropdown. If you don’t see these options, use the org selector in the top left corner to find the correct organization.

- 3. Generate Config
Give your project a name, check the options, then click Create Project. A `config.yml` file is generated for you based on the languages and frameworks used in your project.

- 4. Commit and Run Your Config
Click Commit and Run. This will create a `.circleci/config.yml` file at the root of your repository on a new branch called `circleci-project-setup`. You can also choose Review Configuration File if you would rather check or make changes to the config file before committing.

### Conclusion

CircleCI's platform seems to become more and more attractive to companies as the development continues, it's used by everything from new start ups all the way up to some of the largest companies. The advancements of CircleCI have contributed to increased efficiency, accelerated development cycles, and improved collaboration within our development environment. As it seems CircleCI will continue to deliver improvements to our development processes, collaboration and overall software delivery.

### References

<https://circleci.com/> - CircleCI homepage

<https://circleci.com/docs/> - CircleCI's docs

<https://circleci.com/docs/about-circleci/> - About section from CircleCI's docs

<https://circleci.com/blog/what-is-a-ci-cd-pipeline/> - Video on how CI/CD pipelines work
