---
title: Azure DevOps Case Study
keywords: development platforms, Azure DevOps, Microsoft
tags: Development Platforms, Azure DevOps, Microsoft
sidebar: development-platforms
permalink: development-platforms/case-study-azure-devops.html
folder: development-platforms
---

## Table of contents

1. [Introduction](#introduction)
2. [Brief History](#brief-history)
3. [Features](#features)
4. [Strengths](#strengths)
5. [Weaknesses](#weaknesses)
6. [Pricing](#pricing)
7. [Comparison](#comparison)
8. [How To](#how-to)
9. [Summary](#summary)
10. [Credits](#credits)
11. [References](#references)

## **Introduction**

<div style="width: 600px;">

![Azure DevOps offerings](https://miro.medium.com/max/800/1*8orwInnxqPRhrcKf9aOo9Q.png)

<p style="padding: 0; margin: 0;">

*Source: google*

</p>

</div>

**Azure DevOps** was initially released in 2018 by Microsoft. It is a set of developer tools, services, and features that enable teams to plan, develop, test, and deliver software more effectively. Azure DevOps integrates with the broader Azure cloud computing platform, enabling users to take advantage of its features and services, such as continuous integration and deployment, and virtual machines. Azure DevOps has since become one of the leading development platforms and is widely used by development teams across the world.

Azure DevOps is for the most part free to use, however there is some limitations with using only a free tier option. I will go in deeper details about the pricing [here](#pricing)

## **Brief History**

In 2005 the service that we today refer to as Azure DevOps was named Team Foundation server(TFS). It was released as a set of development tools and services for teams building software applications. After its release in 2005 it has evolved and expanded with new features and services and have quickly become the most popular development platforms for Microsoft-centric teams. TFS has been around for more than a decade, and it has evolved a lot since its inception in 2005. There are professionals in the industry whose entire careers have been dedicated to managing TFS. Such expertise has been necessary because it was quite complicated to administer.

In 2012, TFS morphed into a tool that helped teams manage their software development projects using Agile. [[1](#references)]

The name **"Azure DevOps"** came in 2018. Microsoft re-branded TFS to Azure DevOps, this reflecting Microsoft shift to a cloud based service and its focus on providing organizations with a more comprehensive set of tools and services.
After the re-branding Azure DevOps has continued to evolve and add more features, you can read more about the features [here](#features). Azure DevOps has also integrated other Azure services such as Azure functions, Azure Container and Azure Kubernetes service. [[2](#references)]

## **Features**

<div style="width: 600px;">

![Azure DevOps offerings](https://www.kovair.com/blog/wp-content/uploads/2022/03/Image-1-Azure-DevOps.png)

<p style="padding: 0; margin: 0;">

*Source: google*

</p>

</div>

### Source Code Management

Azure DevOps provides source code management through Git repositories, which are used to store and track changes to your code. Git is a distributed version control system that allows multiple developers to work on the same codebase and track changes to the code over time.

With Azure DevOps, you can create a Git repository for your project and store your source code in it. You can then invite other developers to collaborate on your project and make changes to the code. Git tracks each change made to the code, allowing you to revert to a previous version if needed, view a history of changes, and compare different versions of the code.

Azure DevOps provides a web-based user interface that makes it easy to perform Git-related operations, such as cloning a repository, committing changes, and creating pull requests. You can also use the command-line interface or a Git client of your choice to interact with your Git repositories in Azure DevOps.

By using Git in Azure DevOps, you can benefit from the power and flexibility of Git, while also taking advantage of the collaboration and integration features provided by Azure DevOps.

*Reference [[3](#references)]*

### Continuous Integration (CI) and Continuous Delivery (CD)

With Azure DevOps pipeline you can set up automatic builds and tests for your code project. It have support for all major languages and project types.

The continuous Integration set up to catch bugs early in the development cycle will benefit you as a programmer to save time and money due to less fixing of bugs later on.

The continuous Delivery is a process by which code is built, tested, and deployed to one or more test and production environments. Deploying and testing in multiple environments increases quality

<div style="width: 600px;">

![Azure DevOps offerings](https://xam.com.au/wp-content/uploads/2022/03/devops-infinity-1-1.png)

<p style="padding: 0; margin: 0;">

*Source: google*

</p>
</div>

*Reference [[4](#references)]*

### Project Management

With Azure Boards you can manage your projects in great detail. It provides a rich set of capabilities including native support for Agile, Scrum, and Kanban processes, calendar views, configurable dashboards, and integrated reporting.

The boards have many great features that you can use for free as long as you have an account, and you can have a total 5 team members when using the free basic plan details about pricing, limitations and the different plans you will find under pricing.

*Reference [[5](#references)]*

### Work Item Tracking

You track your’s or your team's work by creating a work item. In Azure DevOps you will need to choose what system process you want to work by. There are four of them.

1. Agile
2. Basic
3. Scrum
4. Capability maturity model integration

In the video below I will demonstrate how to create a new work item inside the board

<a href="https://www.loom.com/share/2fccb37e458941fbae25e87f309ba55e"><img src="https://i.ibb.co/d07zn4d/Screenshot-2023-01-31-at-14-43-11-Development-platforms-Team-Features-Board-Boards.png" style="width: 600px;"/></a>

*Reference [[6](#references)]*

### Test Case Management

With Azure Test Plans you and your team are provided with a rich and powerful tool that can be used to drive quality and collaboration during the project process. Testing is done in a browser-based test management. By using the test plan you can get feedback from stakeholders, developers can request feedback on their user stories and features. Stakeholders can respond to feedback requests using the browser-based Test & Feedback extension - not just to rate and send comments, but also by capturing rich diagnostic data and filing bugs and tasks directly.

With the test plan you can set up manual and automatic testing, its easy to trace and get reports from the testing that have been done.

*Reference [[7](#references)]*

### Release Management

Azure DevOps offer a classic release pipeline setup where you can easily and safely deploy their applications to multiple environments. There are options for setting up fully automated testing and deployment or setting up a semi-automated process.

<div style="width: 600px;">

![Pipelines service Image](https://learn.microsoft.com/en-us/azure/devops/pipelines/release/media/what-is-release-management/understand-rm-05.png?view=azure-devops)

<p style="padding: 0; margin: 0;">

*Source: Azure DevOps documentation*

</p>

</div>

*Reference [[8](#references)]*

### Collaboration

There are multiple ways to arrange good collaboration when using Azure DevOps, I will give you a quick overview of the different options you will have when working with Azure DevOps.

#### Agile project management

With the Agile project management that Azure DevOps offer, collaboration between your team members. You can create branches for each team member to contribute their work to the project.
And with the board management that they offer you and your team can keep good track of the work that is being done.

*Reference [[9](#references)]*

#### Teams collaboration

Azure DevOps also offer integrations with Microsoft Teams, but to be able to use this feature you should have an Office365 account, they are offering a free trial of the Office365 for you to be able to test out the integration between teams and Azure DevOps. You can read more about this and see how you make the integration if you have a look at the reference link.

By using Azure DevOps and Microsoft team you and your team will have a really good way of collaborating and making sure that your project goes according to plan. You can show and adjust your team board in the teams app.

<div style="width: 600px;">

![Price Image](https://www.azuredevopslabs.com/labs/vstsextend/teams/images/kanbanboard_teams_new.png)

<p style="padding: 0; margin: 0;">

*Source: Azure DevOps Labs*

</p>

</div>

*Reference [[10](#references)]*

#### Azure DevOps Wiki

Each project in Azure DevOps supports its own wiki, which enables you to conveniently write pages that help your team members and other users understand, use, and contribute to your project.
The wiki pages you create can be edited in your preferred IDE. YOu only need to clone the Wiki into your IDE and you can work on it there. It's powered by a git repository.

Normally the developer will have a Markdown file to store documentation, alongside the source code in a folder or just directly in the area you are working on. By using the Wiki feature you are able to store your documentation, and it's easy to add to your existing project. Wiki scan your files and make each markdown file into a wiki note.

Here is a <a href="https://www.youtube.com/embed/Mmyw8rLs11c">Youtube video</a> showcasing the power of Azure DevOps Wiki features.

*Reference [[11](#references)]*

### Package Management

Azure DevOps provides Package Management, which is a feature that helps you manage and share packages across your organization. Package Management supports several popular package formats, including NuGet, npm, Maven, and Python packages.

With Package Management, you can publish your packages to an internal or external feed, and then consume them in your builds and releases. You can also manage packages from different package sources, such as public feeds like npmjs.com or Maven Central, or private feeds created by your team.

When you publish a package, Azure DevOps stores the package and its metadata in the Package Management feed. You can then share the feed with others in your organization and use it as a source for your builds and releases.

In your builds and releases, you can use the packages from the Package Management feed by specifying the feed in your build or release definition. Azure DevOps will then download the packages and make them available to your build agents or release agents.

Package Management in Azure DevOps helps you centralize your package management and improve collaboration and reuse within your organization. By using Package Management, you can ensure that your builds and releases use consistent and up-to-date packages.

*Reference [[12](#references)]*

### Code Review and Feedback

Azure DevOps offers a code review and feedback system similar to other popular platforms, like GitHub. You create a pull request and on that request you can add your colleges to look at your code and review it.

*Reference [[13](#references)]*

### Integrated Analytics

Azure DevOps provides Integrated Analytics, which is a feature that helps you analyze and visualize data from various sources within Azure DevOps. Integrated Analytics uses Azure Boards and Azure DevOps data to provide insights into your work items, code changes, and pipelines.

With Integrated Analytics, you can create and share reports and dashboards that visualize data from Azure DevOps in meaningful ways. For example, you can create a dashboard that shows the status of your work items, the number of code changes made in a given time period, and the success rate of your pipelines.

To create a report or dashboard, you can use the built-in report authoring tools in Azure DevOps, or you can use Power BI, which is a data visualization tool provided by Microsoft. To create a report or dashboard in Power BI, you can connect to the Azure DevOps data source and use the data to create charts, graphs, and other visualizations.

Integrated Analytics in Azure DevOps helps you make data-driven decisions by giving you access to rich data visualizations and insights into your work. With Integrated Analytics, you can monitor the progress of your work and identify areas where improvements can be made.

*Reference [[14](#references)]*

## **Strengths**

Easy to integrate with GitHub. In 2018 Microsoft bought GitHub for $7.5 billion, so the connection between the popular code-repository service used by many developers and large companies and Azure DevOps is really easy to setup and use. The boards that Azure provides have more options to offer and look better then in the project boards that Github provides. So to be able to use the boards that Azure DevOps offer combined with Github repo is great.

Azure DevOps has a huge documentation archive that describes in detail how to use the service. [[15](#references)]

Azure DevOps have a extension for Visual Studio Code [[16](#references)]. The extension features the ability to export a planning session into Azure DevOps system. Planning in Azure DevOps itself is hard, way too much clicking. It's so much easier to just type all the tasks in a simple text form and then just export them.

## **Weaknesses**

There are some weaknesses with Azure DevOps, like any software platform.

One of the weaknesses is the cost for larger organizations that need additional service and support, or have really large teams. It's also a bit complex to the new DevOps, so there might be a steep learning curve to be able to use Azure DevOps and to be able to use all that is available. Also, if you are new to the system of Azure DevOps, it can come across as a bit confusing or cluttered when it comes to the user experience.

Azure DevOps is highly customizable, but this can lead to a lack of standardization across projects and teams, making it more difficult to manage and maintain the platform.

## **Pricing**

The pricing of using Azure DevOps depends on the size of your team or organization. The image below will show you the pricing model that Azure DevOps have.

<div style="width: 600px;">

![Price Image](https://i.ibb.co/5jCdgMn/image.png)

<p style="padding: 0; margin: 0;">

*Source: Azure DevOps homepage*

</p>

</div>

As you can see in the image above there is a wide range of options to choose from when it comes to the services that Azure DevOps have to offer.

The **Basic plan** of Azure DevOps is a free plan that provides limited features for small teams or individual developers. You will have access to the following features with basic plan:

1. Version control, you can use Git to manage your source code
2. Work Tracking by using the project boards. You can create work items to track issues, bugs, tasks and backlogs to prioritize and manage work.
3. Package management.
4. Basic security and compliance: You can use features such as pull requests and code reviews to secure your code, and compliance features such as auditing and disaster recovery to meet regulatory requirements.
5. Continuous integration (CI): You can set up CI pipelines to automatically build, test, and deploy your code.
(*There are some limitations with the Basic plan, such as the number of parallel pipelines and the number of minutes available for CI/CD, but it is a great option for small teams or individual developers who are just getting started with DevOps.*)

### **Support**

There is also an option for premium support from Azure DevOps.
The cost of premium support for Azure DevOps varies based on a number of factors, including the level of support required, the number of users, and the level of service desired.

Microsoft does not publicly disclose the exact cost of its premium support plans for Azure DevOps, as the pricing is customized for each organization based on its specific needs and requirements. To obtain an accurate estimate of the cost of premium support for Azure DevOps, organizations should contact Microsoft directly to discuss their specific needs and requirements.

It is worth noting that while premium support may have a higher upfront cost than basic support, it can provide organizations with a number of benefits, including faster response times, dedicated support engineers, and access to a wider range of support resources and expertise, which can help to minimize downtime and ensure that any issues are resolved quickly and effectively.

## **Comparison**

- AWS CodeStar
- GitHub
- GitLab
- Jira by Atlassian

## **How to**

## **Summary**

Azure DevOps is a cloud computing platform and infrastructure with many features that can help you and your team with the workflow on your project. It's easy to create a free account with a small team and for a larger team you have more options.

All work when using Azure DevOps can be done with your IDE. Integration with Visual Studio Code and git, you can work mainly in the IDE but based on my research I have found that with the IDE and Microsoft Team you can have your code and communication with your team, manage your work board tasks.

The platform itself is clean and easy to use with loads of documentation for you to be able to make the most out of the platform.

### **Credits**

Author: Christopher Tønnesland

**Contact**

<div style="display: flex; gap: 15px; flex-wrap: wrap;">
	<a href="mailto:christopher.tonnesland@gmail.com"><img img src="https://img.shields.io/badge/gmail-%23EA4335.svg?style=plastic&logo=gmail&logoColor=white" alt="Gmail"/></a>
	<a href="https://github.com/christonn"><img src="https://img.shields.io/badge/github-%23181717.svg?style=plastic&logo=github&logoColor=white" alt="GitHub"/></a>
	<a href="https://wa.me/+4745481637"><img src="https://img.shields.io/badge/whatsapp-%2325D366.svg?style=plastic&logo=whatsapp&logoColor=white" alt="Whatsapp"/></a>
	<a href="https://linkedin.com/in/christopher tønnesland"><img src="https://img.shields.io/badge/linkedin-%230A66C2.svg?style=plastic&logo=linkedin&logoColor=white" alt="LinkedIn"/></a>
	<a href="https://www.facebook.com/christonn93/"><img src="https://img.shields.io/badge/facebook-%231877F2.svg?style=plastic&logo=facebook&logoColor=white" alt="Facebook"/></a>
</div>
</br>

#### **References**

1. [TSF information](https://www.perforce.com/blog/vcs/what-team-foundation-server-tfs)
2. [Image of chatGDP response](https://ibb.co/dW1KqYj)
3. [What is Azure Repos?](https://learn.microsoft.com/en-us/azure/devops/repos/get-started/what-is-repos?view=azure-devops)
4. [What is Azure Pipelines?](https://learn.microsoft.com/en-us/azure/devops/pipelines/get-started/what-is-azure-pipelines?view=azure-devops)
5. [What is Azure Boards?](https://learn.microsoft.com/en-us/azure/devops/boards/get-started/what-is-azure-boards?view=azure-devops)
6. [Plan and track work in Azure Boards](https://learn.microsoft.com/en-us/azure/devops/boards/get-started/plan-track-work?view=azure-devops&tabs=agile-process)
7. [What is Azure Test Plans?](https://learn.microsoft.com/en-us/azure/devops/test/overview?view=azure-devops)
8. [Classic release pipelines](https://learn.microsoft.com/en-us/azure/devops/pipelines/release/?view=azure-devops)
9. [Best practices for "light-weight" Agile project management](https://learn.microsoft.com/en-us/azure/devops/boards/best-practices-agile-project-management?view=azure-devops&tabs=agile-process)
10. [Microsoft Teams with Azure DevOps Services (Collaborate, Communicate and Celebrate)](https://www.azuredevopslabs.com/labs/vstsextend/teams/)
11. [Collaborating using Azure DevOps Wiki](https://azuredevopslabs.com/labs/azuredevops/wiki/)
12. [Image of chatGDP response](https://i.ibb.co/ngqTLPy/image.png)
13. [Add reviewers to a pull request](https://learn.microsoft.com/en-us/azure/devops/repos/git/pull-requests?view=azure-devops&tabs=browser#add-reviewers-to-a-pull-request)
14. [Image of chatGDP response](https://i.ibb.co/S6YgWR2/image.png)
15. [Azure DevOps documentation](https://learn.microsoft.com/en-us/azure/devops/?view=azure-devops)
16. [Azure DevOps planner](https://marketplace.visualstudio.com/items?itemName=ipatalas.vscode-sprint-planner)

[Azure DevOps Learning Path](https://azuredevopslabs.com/)
[Visual Studio Code extension](https://marketplace.visualstudio.com/publishers/Microsoft%20DevLabs)
