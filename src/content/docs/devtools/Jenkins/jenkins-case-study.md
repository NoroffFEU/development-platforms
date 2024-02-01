---
title: Jenkins Case Study
author: Ernesto Osorio Jr <nyolarraklay>
tags: jenkins, case study, devOps, CI, hudson
---

## Introduction

Jenkins is a self-contained, open-source automation server which can be used to automate all sorts of tasks related to building, testing, and delivering or deploying software.

It plays a pivotal role in automating repetitive tasks, ensuring code quality, and expediting the software development lifecycle.

Jenkins can be installed through native system packages, Docker, or even run standalone by any machine with a Java Runtime Environment (JRE) installed.

It was built for continuous integration purposes. The main principle underlying CI is that developers should integrate their code changes into a shared repository as often as possible. Each task is performed in a branch, and when that branch is ready to be merged into the main branch, a pull request is created. This allows other team members to review the code changes and ensure that the code is ready to be merged into the main branch. The process of merging code into the main branch can be described as Integration as you integrate the code changes into the main branch.

Jenkins supports plugins, which allow Jenkins to be extended to meet specific needs of individual projects.

## Brief History

- 2004: The Jenkins project was started (originally called Hudson) by Kohsuke Kawaguchi, while he worked for Sun Microsystems. Kohsuke was a developer at Sun and got tired of incurring the wrath of his team every time his code broke the build. He created Jenkins as a way to perform continuous integration – that is, to test his code before he did an actual commit to the repository, to be sure all was well.
- 2007: Hudson became known as a better alternative to Cruise Control and other open-source build-servers.
- 2008: At the JavaOne conference in May 2008 the software won the Duke's Choice Award in the Developer Solutions category.
- 2010: Negotiations between the principal project contributors and Oracle took place, and although there were many areas of agreement a key sticking point was the trademarked name "Hudson," after Oracle claimed the right to the name and applied for a trademark in December 2010.
- 2011: On January 11, 2011, a call for votes was made to change the project name from "Hudson" to "Jenkins."
- 2011: The proposal was overwhelmingly approved by community vote on January 29, 2011, creating the Jenkins project.
- 2011: On February 1, 2011, Oracle said that they intended to continue development of Hudson, and considered Jenkins a fork rather than a rename. Jenkins and Hudson therefore continued as two independent projects, each claiming the other was the fork.
- 2011: Creator Kohsuke Kawaguchi received an O'Reilly Open Source Award for his work on the Hudson/Jenkins project.
- 2016: On April 20, 2016, version 2 was released with the Pipeline plugin enabled by default.
- 2017: Jenkins replaced Hudson since February 8, 2017 in Eclipse.
- 2018: In March 2018 Jenkins X software project for Kubernetes was publicly presented, with support for different cloud providers including AWS EKS among others.
- 2019: In March 2019 the Linux Foundation, along with CloudBees, Google, and a number of other companies, launched a new open source software foundation called the Continuous Delivery Foundation (CDF). Jenkins contributors decided that their project should join this new foundation. Kawaguchi wrote at the time that nothing of significance would change for users.
- 2020: In January 2020 Kawaguchi announced he was moving to his new startup, Launchable. He also said that he would be officially stepping back from Jenkins, although staying on the CDF technical oversight committee. His role at CloudBees changed to advisor.
- As of 2023, Jenkins remains a leader in the CI/CD space. With its extensive plugin architecture and large user base, it is used by thousands of organizations worldwide. According to the 2022 DevOps Survey by the Cloud Native Computing Foundation (CNCF), Jenkins was used by over 50% of respondents for automation and CI/CD, maintaining a significant presence in the market.

## Main Features

| Feature                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Continuous Integration             | Continuous Integration (CI) is a practice in which developers regularly integrate their code changes into a shared code repository. Jenkins supports the CI approach. It allows developers to automate code integration. This means that whenever code changes are pushed to the repository, Jenkins can automatically build and test the project.                                                                                                                                                                                                                                                                                                                                                      |
| Continuous Delivery and Deployment | Continuous Delivery (CD) is a practice that builds upon continuous integration and enables teams to release new software changes to customers at a faster pace. It involves automating the process of testing, building, and deploying code changes so that teams can release new features and updates to customers as soon as they are ready. Jenkins allows for the continuous delivery of software by automating simple deployment processes. With plugins supporting cloud platforms, container orchestration tools, and configuration management systems, Jenkins enables teams to deliver applications to various environments reliably and efficiently.                                          |
| Task Automation                    | Another instance in which one may use Jenkins is to automate workflows and tasks. If a developer is working on several environments, they will need to install or upgrade an item on each of them. If the installation or update requires more than 100 steps to complete, it will be error-prone to do it manually. Instead, you can write down all the steps needed to complete the activity in Jenkins. It will take less time, and you can complete the installation or update without difficulty. From running periodic jobs for code analysis and testing to orchestrating complex workflows, Jenkins can be tailored to meet diverse automation needs within the software development lifecycle. |
| Build Pipeline Visualization       | Another key feature of Jenkins is its build pipeline visualization. This feature allows DevOps teams to visually represent the process of software delivery from code integration to deployment. The pipeline visualization provides a clear and intuitive representation of the software delivery process, making it easier for teams to understand and manage the process.                                                                                                                                                                                                                                                                                                                            |
| Automated Testing                  | Automated testing is another area where Jenkins shines. With Jenkins, DevOps teams can automate the process of testing their code by running scripts and integrating with automated testing tools as part of the build process. Jenkins supports a wide range of testing frameworks and tools, allowing teams to choose the ones that best fit their needs. Moreover, Jenkins can be configured to automatically run tests whenever changes are made to the code. This ensures that any issues or defects in the code are detected early and can be addressed promptly.                                                                                                                                 |

## Market Comparison

Continuous Integration and Continuous Delivery (CI/CD) are integral components of modern software development, and several tools have emerged to streamline these processes. Among the popular CI/CD tools, Jenkins stands as a veteran, but it's essential to explore how it compares to other notable tools in the landscape.

### Jenkins

| Strength                                                                                                                                        | Weakness                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Extensibility: Jenkins boasts a vast library of plugins, enabling integration with various tools and technologies.                              | Learning Curve: Jenkins may have a steeper learning curve, particularly for beginners configuring complex pipelines.                       |
| Community Support: A large and active community contributes to continuous improvement, plugin development, and extensive documentation.         | Resource Intensive: Large-scale projects may find Jenkins to be resource-intensive, impacting scalability and performance.                 |
| Flexibility: Jenkins provides a high degree of customization, allowing users to define their workflows through a web interface or Jenkinsfiles. | User Interface Design: While functional, the user interface design could be considered less intuitive compared to some modern CI/CD tools. |

### GitLab CI/CD

| Strength                                                                                                                                      | Weakness                                                                                                                                        |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Integrated Solution: GitLab CI/CD is tightly integrated with GitLab, offering an all-in-one solution for version control and CI/CD.           | Plugin Ecosystem: While GitLab CI/CD has a good set of features, its plugin ecosystem may not be as extensive as Jenkins.                       |
| Built-in Container Registry: GitLab provides a container registry as part of its ecosystem, simplifying containerized application deployment. | Community Size: The community may not be as large as Jenkins, potentially leading to fewer community-contributed plugins and support resources. |
| GitLab CI/CD YAML: Configuration is done using a simple YAML file, making it easy to define and version control pipelines.                    |                                                                                                                                                 |

### Travis CI

| Strength                                                                                                             | Weakness                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ease of Use: Travis CI is known for its simplicity and ease of use, making it beginner-friendly.                     | Limited Concurrency: Free plans have limitations on concurrency, potentially impacting build times for larger projects.                             |
| GitHub Integration: Seamlessly integrates with GitHub repositories, automatically triggering builds on code changes. | Configuration Complexity: As projects grow in complexity, managing configurations in Travis CI may become less straightforward compared to Jenkins. |
| Managed Service:  Travis CI is a cloud-based, managed service, reducing the infrastructure management burden.         |  |

### CircleCI

| Strength                                                                                                                 | Weakness                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| Parallelism and Concurrency: CircleCI provides excellent support for parallelism and concurrency, improving build times. | Pricing: CircleCI can be relatively more expensive for larger teams or projects with high concurrency needs.      |
| Docker Support: Strong integration with Docker, facilitating containerized builds and deployments.                       | Learning Curve: Similar to Jenkins, there may be a learning curve, especially when configuring complex pipelines. |
| Configuration as Code: Pipeline configuration is done using YAML, promoting version control and easier collaboration.    | |

Choosing the right CI/CD tool depends on various factors, including project requirements, team expertise, and preferences. Jenkins, with its extensibility and community support, remains a robust choice. GitLab CI/CD provides an integrated solution for those using GitLab, while Travis CI and CircleCI offer simplicity and efficiency with different focuses on GitHub integration and parallelism. Each tool has its strengths and weaknesses, and the optimal choice depends on the specific needs and priorities of the development team.

## Getting Started

The simplest way to install Jenkins on Windows is to use the Jenkins Windows installer. That program will install Jenkins as a service using a 64 bit JVM chosen by the user. Keep in mind that to run Jenkins as a service, the account that runs Jenkins must have permission to login as a service.

### Prerequisites

Minimum hardware requirements:

1. 256 MB of RAM

2. 1 GB of drive space (although 10 GB is a recommended minimum if running Jenkins as a Docker container)

Recommended hardware configuration for a small team:

1. 4 GB+ of RAM

2. 50 GB+ of drive space

#### Installing Jenkins on Windows

1. Download Jenkins:

![Jenkins Installation](https://www.jenkins.io/doc/book/resources/tutorials/windows-install.png)

Go to the Jenkins official website: <https://www.jenkins.io/download/>.
Download the Windows installer (jenkins.msi file).
2. Run the Installer:

![Installation Progress](https://www.jenkins.io/doc/book/resources/tutorials/windows-installation-progress.png)

Double-click on the downloaded jenkins.msi file to start the installation process
Follow the on-screen instructions in the Jenkins installer.
3. Choose Installation Directory:

Select the installation directory for Jenkins. The default is usually fine, but you can choose a different directory if needed.
4. Configure Jenkins Service:

![Jenkins Service](https://www.jenkins.io/doc/book/resources/tutorials/windows-jenkins-service.png)

During the installation, you will be asked to configure Jenkins as a Windows service. Choose the option to install Jenkins as a service.
You may also choose whether Jenkins should start automatically when Windows starts.
5. Complete Installation:

Complete the installation process by following the prompts.
6. Access Jenkins:

Once the installation is complete, Jenkins should be accessible through a web browser. By default, Jenkins runs on <http://localhost:8080>.

![Introduction](~/assets/databases/jenkins.png)
7. Unlock Jenkins:

Open a web browser and go to <http://localhost:8080>.
Follow the on-screen instructions to unlock Jenkins. The initial unlock password can be found in the installation directory, typically in a file named initialAdminPassword.
8. Install Plugins:

After unlocking Jenkins, you will be prompted to install plugins. Choose the option to install suggested plugins. This will install the essential plugins for Jenkins.
9. Create an Admin User:

Set up an admin user for Jenkins.
10. Start Using Jenkins:

Once the setup is complete, you can start using Jenkins for your CI/CD tasks.

Always refer to the official Jenkins documentation (<https://www.jenkins.io/doc/book/using/>) for any specific details or changes. Keep in mind that the installation steps may vary slightly depending on the version of Jenkins you are installing, so it's a good idea to check the documentation for the version you download.

## Conclusion

In conclusion, Jenkins’ role in the CI/CD landscape has been pivotal. Its extensive plugin ecosystem, large and active community support, and high degree of flexibility make it a go-to choice for many development teams.

Jenkins excels in providing a customizable environment that caters to the diverse needs of different projects and workflows. The ability to define jobs through a web interface or Jenkinsfiles, coupled with integration capabilities with various version control systems and build tools, makes it a powerful tool for continuous integration, delivery, and deployment. While Jenkins doesn’t eliminate the need to create scripts for individual steps, it does give you a quicker and more robust way to integrate your entire chain of build, test, and deployment tools than you could easily build yourself.

However, it's important to acknowledge that Jenkins is not without its challenges. The learning curve, especially for newcomers, may be steep, and resource-intensive requirements can pose scalability concerns for larger projects. The user interface design, while functional, might be considered less intuitive compared to some of the more modern CI/CD tools.

In essence, Jenkins continues to be a reliable choice for organizations that prioritize customization, extensibility, and community support in their CI/CD processes. As development practices evolve, Jenkins evolves with them, addressing its weaknesses and remaining a cornerstone for those seeking a flexible and adaptable automation solution. Ultimately, the decision to use Jenkins should be based on the specific requirements and preferences of the development team and the nature of the projects they undertake.

## References

- [Wikipedia](<https://en.wikipedia.org/wiki/Jenkins_(software)#History>)
- [What is Jenkins | Jenkins Tutorial for Beginners | Jenkins Continuous Integration Tutorial | Edureka](https://www.youtube.com/watch?v=p7-U1_E_j3w)
- [The Future of Jenkins in 2024](https://devops.com/the-future-of-jenkins-in-2024/#:~:text=Current%20Usage%20and%20Adoption%20Statistics,in%20the%20CI%2FCD%20space.)
- [What Is Jenkins? Working, Uses, Pipelines, and Features](https://www.spiceworks.com/tech/devops/articles/what-is-jenkins/)
- [What is Jenkins? The CI server explained](https://www.infoworld.com/article/3239666/what-is-jenkins-the-ci-server-explained.html)
- [CI/CD Tools Comparison: Jenkins, TeamCity, Bamboo, Travis CI, and More](https://www.altexsoft.com/blog/cicd-tools-comparison/)
- [Installing Jenkins](https://www.jenkins.io/doc/book/installing/windows/)
