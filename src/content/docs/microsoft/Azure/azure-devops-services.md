---
title: Azure DevOps Services - Azure Boards Case Study
author: Alexander Dyb <alexanderdyb>
tags: azure boards, azure devops services
---

## Introduction

Azure DevOps Services, formerly Visual Studio Team Services (VSTS), is Microsoft's all-in-one development toolset. It manages everything from repositories and project management to automated testing and deployment. All this to make team collaboration easier.

Azure DevOps is built with scalability in mind, catering to the needs of individual developers working on small projects to large enterprises with complex requirements. In addition to its features, Azure DevOps can be customized with extensions and integrations from the Azure DevOps Marketplace, where developers can find tools that complement and extend the functionality of Azure DevOps.

## Brief History

- 2013: Microsoft launched a new cloud service for software development called Visual Studio Online on November 13, 2013. It was previously called Team Foundation Services and is a part of the Azure cloud platform.
- Users could sign up through the Azure website and get features like online code editing and project management tools.
- 2015: In 2015, Microsoft changed the name to Visual Studio Team Services.
- 2018: On the 10th of September in 2018, Microsoft renamed Visual Studio Team Services (VSTS) to Azure DevOps Services.

## Main Features

Here's is the features Azure DevOps offers:

- **Azure Boards:** Azure Boards is an tool that helps teams organize and keep track of their work during software development. It works well with agile methods like Scrum and Kanban.
- **Azure Repos:** Azure Repos help to keep track of the coding work and makes it possible for a team to work on the same project.
- **Azure Pipelines:** Azure Pipelines is a tool that helps automate the process of getting the project ready and ensuring it works properly. It is a tool for build and testing.
- **Azure Test Plans:** Azure Test Plans helps teams make sure the project works well. It's used right in the web browser and gives you everything you need to carry out different types of testing.
- **Azure Artifacts:** Azure Artifacts is a tool that lets us handle all code and packages in one place. It makes it easy to share the code that is written with other people on the team, company and more.

### Azure Boards

In this study, I will concentrate on Azure Boards, a core feature of Azure DevOps that facilitates project management and collaboration.

## Market Comparison

### Advantages

Using Azure Boards comes with a lot of advantages. The platform's visual and interactive tools, like Kanban boards, make it easy for teams to see progress and plan work effectively. It is easy to collaborate on issues and tasks with the comment section. If you want to get someone's attention or include them in the conversation, you just type "@" followed by their name.

Azure Boards lets you keep a lot of information about your projects. You can add detailed descriptions, pictures right in the text, and big files up to 60 MB to your tasks. It's also simple to connect related tasks together, which helps you keep everything organized and track how tasks change over time.

In Azure Boards, it's easy to find the things you need, even if your project is really big. They have good search tools and you can set up notifications the way you like. Keeping an eye on how your project is doing is simple too, with dashboards and tools. You can make your own reports and see the big picture of your project with these customizable features.

### Disadvantages

Azure Boards is compatible with the Scaled Agile Framework (SAFe), although it isn't specifically created for any large-scale Agile framework. To handle budgeting and reporting for Agile at a larger scale, it needs more setup and adjustments because it doesn't come with a lot of these features ready out of the box.

### Comparison to GitHub Projects

GitHub Projects and Azure Boards are both project management tools that offer issue and progress tracking for software development. It is a tool you can use to organize issues. You can sort your tasks, make charts to see how you're doing, and note down extra details your team might need. It's made to be easy to change, so it can match the way your team likes to work.

It works seamlessly with GitHub repositories, issues, and pull requests, since it is a part of the Github platform. It's designed to be flexible, and thats allowing teams to use it without enforcing a particular methodology.

## Getting Started

To begin using Azure DevOps, you'll need a Microsoft account. If you don't already have one, you'll need to create it. Once you have your Microsoft account ready, follow these steps:

1. Visit the Azure DevOps website.
2. Click on the "Start free" button.
3. Sign in with your Microsoft account credentials.
4. Complete the sign-up process.
5. After signing up, Azure DevOps automatically sets up an organization for you. It also creates a default project named after your Microsoft account. If you used an existing Microsoft account to sign up, you'll need to create a new project manually.

You can access your Azure DevOps organization at any time by navigating to https://dev.azure.com/{Your_Organization} in your web browser, replacing {Your_Organization} with the name of your organization.

## Conclusion

Azure Boards is a feature-rich project management platform that's part of the Azure DevOps suite. It's designed for larger teams and projects that require detailed planning, extensive tracking, and integration with a variety of development tools. With Azure Boards, teams can utilize customizable Kanban boards, backlogs, sprints, and numerous workflow tools to implement Agile methodologies.

On the other hand, GitHub Projects is a simple, flexible project management tool integrated with GitHub, making it ideal for individual developers and teams who want to manage tasks within their GitHub repositories.

## References

- [learn.microsoft.com](https://learn.microsoft.com/en-us/azure/devops/user-guide/what-is-azure-devops?toc=%2Fazure%2Fdevops%2Fget-started%2Ftoc.json&view=azure-devops)
- [learn.microsoft.com](https://learn.microsoft.com/en-us/azure/devops/user-guide/services?toc=%2Fazure%2Fdevops%2Fget-started%2Ftoc.json&view=azure-devops)
- [learn.microsoft.com](https://learn.microsoft.com/en-us/azure/devops/boards/?view=azure-devops)
- [learn.microsoft.com](https://learn.microsoft.com/en-us/azure/devops/user-guide/sign-up-invite-teammates?toc=%2Fazure%2Fdevops%2Fget-started%2Ftoc.json&view=azure-devops&tabs=microsoft-account#sign-up)
- [learn.microsoft.com](https://learn.microsoft.com/en-us/azure/devops/marketplace/install-extension?view=azure-devops&tabs=browser)
- [docs.github.com](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)
