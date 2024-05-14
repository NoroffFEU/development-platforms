---
title: CodeSandbox Case Study
author: Alexander Weidemann <Zaracki>, Cecilie Sunde <cecsun>, Charlotte Valset <CharlotteValset>
tags: codesandbox, case study, platform, IDE
---

![CodeSandbox Logo](~/assets/codesandbox/codesandbox-logo.jpg)

## Introduction

CodeSandbox offers a fully collaborative cloud development environment for teams to code, share and collaborate across multiple devices. The core vision of CodeSandbox is to empower users to start coding instantly with minimal prior knowledge, while also providing a platform to easily discover examples.

In addition to its collaborative functions, CodeSandbox makes the development process easier by offering an extensive library of pre-configured templates, libraries and frameworks. This allows users to start coding without spending much time setting up environments.

## Brief History

- **2017**: Founded in the Netherlands by **Ives van Hoorne** and **Bas Buursma**. **CodeSandbox** is an online code editor with a focus on sharing projects in React.
- **2018**: **CodeSandbox Live** is announced, enabling live collaboration and sharing. **Dashboard** and **Teams** features are introduced for enhanced organization and collaboration.
- **2019**: Secures $2.4M in seed funding led by **Kleiner Perkins** and surpasses 2 million projects created.
  - **CodeSandbox v3** is announced, introducing support for **VS Code Extensions**.
- **2020**: Raises $12.7M in funding led by **EQT Ventures**, with support from existing investors and introduces **Team Pro** for collaborative coding across your team.
- **2021**: The acquisition of **Play.js** leads to its integration into **CodeSandbox**, alongside the introduction of **Play.js Live** for real-time collaboration from iPhone or iPad.
- **2022**: **CodeSandbox Projects** is announced, featuring tight integration with **Git** and **VS Code**.
  - **CodeSandbox** for **iOS** and **CodeSandbox GitHub App** is released.
- **2023**: Support for PHP development environments, **VS Code** support for Sandboxes, and integration of **GO** language support are announced.
  - The beta release of **Boxy**, an AI coding assistant for **CodeSandbox** is also released.
- **2024**: **CodeSandbox** introduces **CodeSandbox CDE**, making their cloud-based coding accessible to everyone, and achieves a milestone of 3 million registered users.

## Main Features

| Feature                                                             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| microVMs                                                            | CodeSandbox keeps the users code running on fast microVMs that resume any development environment within 2 seconds. CodeSandbox runs the project and turns it into a link the user can share with anyone. By following the link everyone can see the running code, and with “fork” the other users can get a copy within 2 seconds so they can easily contribute back.                                                                                                                       |
| GitHub App                                                          | The integration between CodeSandbox and Github allows the user to instantly run every pull request and include all the review tooling needed to accelerate the review process.                                                                                                                                                                                                                                                                                                               |
| Context-Aware AI assistant: Boxy (Available to all Pro subscribers) | CodeSandbox has created an AI coding companion called Boxy to make development more accessible and to increase the state of flow. Boxy can assist users directly through the app preview and provide the user with explanations and insights, as well as generate new code for the project that is tailored to the user's specific context within CodeSandbox.                                                                                                                               |
| Pre-configured environments                                         | Users can configure and run containers in any development environment in CodeSandbox with Dev Containers. Dev Containers allows users to customize their own container using Dockerfile, or use existing container images to set up the development environment. With Dev Containers users can enhance their environment by adding features on top of the container, and they can also use Docker Compose or a Dockerfile to run additional services.                                        |
| Powerful DevTools                                                   | CodeSandbox allows users to add as many DevTools as they want, and with DevTools they can create shortcuts to run any command. DevTools are useful for debugging, testing, and developing, and users can share their content as they are collaborative by default. <br/> <br/> Available DevTools: <br/> - Preview <br/> - Task <br/> - Terminal <br/> - VM resource usage <br/> - Debug (Chrome DevTools)                                                                                   |
| Low Code Tooling (Available to Team Pro subscribers)                | CodeSandbox wants to empower everyone to contribute and bring code beyond the development team. Their codebase is within reach of every single team member, including members with other skills like Product, Design and Marketing. Any team member can get a preview of development work, easily make changes and commit them with low-code tools.                                                                                                                                          |
| VS Code Extension                                                   | VS Code extensions is beneficial for collaboration, and it allows all the team members to follow the steps on VS Code without leaving the Web Editor. Users can choose if they want to use the CodeSandbox editor for VS Code, or they can do all their work in VS Code without accessing CodeSandbox on the web. The CodeSandbox GitHub App will let a user review PRs directly from VS Code while connected to CodeSandbox, where every PR will have a link to open the branch in VS Code. |
| Online Code Editor                                                  | CodeSandbox has a web editor with a variety of templates, frameworks and playgrounds that allows users to code anything right from their browser, from prototypes to full-scale projects.                                                                                                                                                                                                                                                                                                    |

## Market Comparison

In the competitive landscape of online integrated development environments (IDEs), CodeSandbox stands out as a specialized platform for web development. Its primary competitors include Replit, StackBlitz, CodePen, and Glitch.

CodeSandbox distinguishes itself by focusing specifically on web development, offering pre-configured environments for various frameworks and libraries commonly used in front-end and back-end development. This specialization makes it an attractive choice for developers looking for a comprehensive solution tailored to their needs.

### Strengths and Weaknesses

One of CodeSandbox's key strengths lies in its comprehensive feature set. It provides support for multiple files, dependencies management, live previews, built-in terminals, and collaboration tools, all within a simple and intuitive interface. It seamlessly integrates with version control systems like Azure DevOps, GitHub, GitLab, and Bitbucket, allowing developers to import existing projects or save work directly to repositories.

Despite its strengths, CodeSandbox may have a learning curve for new users with less development knowledge, mainly those unfamiliar with its feature set. The platform's performance may be impacted by the complexity of projects. Upgrading to the paid Pro plan may further enhance performance, offering additional resources for handling such demands.

### CodeSandbox vs Replit

CodeSandbox and Replit are both online platforms designed to help developers write, share, and collaborate on web development projects. While they share similarities, there are some key differences between them:

|        Feature        | CodeSandbox                                                                                                                                                                                                                                                              | Replit                                                                                                                                                                                                                                                                                                   |
| :-------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|         Focus         | Offers a comprehensive development environment that supports full-stack web development. It provides pre-configured environments for various frameworks and libraries, allowing developers to work on more complex projects, including both front-end and back-end code. | Focuses on providing a versatile coding environment for a wide range of programming languages and projects.  While it also supports web development, it caters to a broader audience, including students, educators, and hobbyists, making it suitable for various use cases beyond just web development. |
|      Environment      | CodeSandbox provides a complete development environment with support for multiple files, dependencies, and configurations. It is well-suited for developing and testing entire applications, including those built with frameworks like React, Vue.js, and Angular. The environment is pre-configured for web development, making it easier to manage back-end and front-end code in a cohesive manner, especially when using frameworks and libraries typically found in modern web development stacks.                | Replit provides a flexible coding environment that supports a variety of programming languages and frameworks. Its Linux-based environment allows for more traditional back-end development with a wider array of frameworks and programming languages. Additionally, Replit offers a simple and intuitive interface for writing and running code online, making it accessible to users of all skill levels.                                                                 |
| Dependency Management | Provides robust dependency management through package managers like npm and Yarn. It offers pre-configured environments for popular frameworks and libraries, allowing developers to add dependencies and manage project configurations.                                 | Replit facilitates dependency management, allowing users to install and manage dependencies for their projects across a wide range of programming languages and packages.                                                  |
|      Integration      | Integrates with version control systems like Azure DevOps, GitHub, GitLab, and Bitbucket, making it easier to import existing projects or save work directly to repositories.                                                                                            | Replit seamlessly integrates with Git, enabling project imports from GitHub and built-in version control for easy collaboration and change tracking.                                                                                                                                                     |
|     Collaboration     | Offers real-time editing, sharing of entire projects and Live Sessions - a feature where users can code synchronously.  | Facilitates real-time editing and sharing of projects, they also offers multiplayer coding sessions, enabling multiple users to code together simultaneously.                                                                                                                                                   |
|       Community       |Builds a community centred on development and application building. Developers on CodeSandbox create and share templates and sandboxes, promoting project collaboration. This environment supports insight exchange and peer support, nurturing a community of passionate web developers.| A community focused on education, learning, and collaboration is actively supported, providing resources for teachers and students, encouraging user collaboration, and hosting coding challenges and events to engage the community.                                                     |
| Pricing | The **Free** plan of CodeSandbox offers all features, but with limited resources and a restricted number of Codeium AI code completions. Their **Pro** plan, which provides **Boxy**(Context-Aware AI Assistant), expanded resources, all features, unlimited Codeium AI code completions, and the option to add more virtual machine credits as needed. **Pro** plan is $12/month or $9/month if you pay yearly| Replit's free plan **Starter** provides basic workspace access with limited AI capabilities and community support. On the other hand, their paid plan **ReplitCore** offers $8 of flexible credits monthly, unlimited basic AI chat responses, access to advanced AI models, enhanced workspace features, unlimited private projects, and member support. **ReplitCore** is $20/month or $12/month if you pay yearly|

## Getting Started

When entering CodeSandbox, there are two options:

1. **Try for Free**: Create a Devbox/Sandbox, choose an environment template, and start coding as a not-logged-in user.
2. **Sign In**: Sign in with GitHub, Google, Apple, or SSO (Single Sign-On).

Logged-in users can additionally import repositories from Github (using Terminal they can also import from GitLab, Bitbucket and Azure DevOps) and CodeSandbox will automatically scan the package.json to detect and suggest the best configuration, or they can set up a custom environment using the built-in Dev Container integration.

### Importing repository from GitHub

- **Sign in**

  ![CodeSandbox, Sign in](~/assets/codesandbox/codesandbox-sign_in.png)

- **Select "Import repository"**

  ![CodeSandbox, Project choices](~/assets/codesandbox/codesandbox-project_choices.png)

- **Locate the repository**

- **Project setup**

  - Step 1: Configure microVM environment

    ![CodeSandbox, Project setup - step 1](~/assets/codesandbox/codesandbox-step1.png)

  - Step 2: Define tasks

    ![CodeSandbox, Project setup - step 2](~/assets/codesandbox/codesandbox-step2.png)

  - Step 3: Set environment variables

    ![CodeSandbox, Project setup - step 3](~/assets/codesandbox/codesandbox-step3.png)

  - Step 4: Install GitHub App

    ![CodeSandbox, Project setup - step 4](~/assets/codesandbox/codesandbox-step4.png)

  - Step 5: Preferences

    ![CodeSandbox, Project setup - step 5](~/assets/codesandbox/codesandbox-step5.png)

  - Step 6: Review and run your setup

    ![CodeSandbox, Project setup - step 6](~/assets/codesandbox/codesandbox-step6.png)

- **Start coding!**

  ![CodeSandbox, Start coding](~/assets/codesandbox/codesandbox-start_coding.png)

## Conclusion

CodeSandbox is a specialized platform for web development that offers pre-configured environments for various frameworks and libraries, which makes this platform an attractive choice for developers. The main advantages of CodeSandbox is their 24/7 collaborative cloud development environments suitable for full-stack web development, followed by their comprehensive set of features. Although CodeSandbox offers an extensive set of features suitable for all development, this may also be one of their disadvantages as the learning curve may be steep for new users with less development knowledge when getting to know all the different features.

The main use case for CodeSandbox is that it allows the user to resume any development environment within 2 seconds. CodeSandbox includes all the review tooling needed to accelerate the review process. Another use case for this platform is that it allows users to start coding instantly and add as many devtools as they want for the development. CodeSandbox offers an online code editor for developers to learn and experiment with different templates, frameworks etc.

As CodeSandbox runs entirely from the browser, it encounters potential limitations
because of its browser based development environments. These include potential slow performance when dealing with large projects, interruption due to loss of internet connection when working individually or collaboratively and limited support for niche libraries.

## References

- CodeSandbox <https://codesandbox.io>
- CodeSandbox <https://codesandbox.io/d>
- CodeSandbox <https://codesandbox.io/?from-app=1>
- CodeSandbox <https://codesandbox.io/features>
- CodeSandbox <https://codesandbox.io/blog>
- CodeSandbox <https://codesandbox.io/docs/faq>
- CodeSandbox <https://codesandbox.io/docs/learn/integrations/github-app>
- CodeSandbox <https://codesandbox.io/docs/tutorial/getting-started-with-dev-containers>
- CodeSandbox <https://codesandbox.io/docs/learn/devboxes/devtools>
- CodeSandbox <https://codesandbox.io/docs/learn/editors/vscode/overview>
- CodeSandbox <https://www.codesandbox.community/>
- Replit: <https://replit.com/>
- Replit: <https://docs.replit.com/>
- Replit: <https://ask.replit.com/>
- Replit: <https://replit.com/community-hub>
- CodePen: <https://codepen.io>
- StackBlitz: <https://stackblitz.com//>
- Glitch: <https://glitch.com/>

## Additional Resources

- [Getting started with CodeSandbox, tutorial YouTube](https://www.youtube.com/watch?v=aSDSpRxkTnY)
- ChatGPT <https://chat.openai.com/>
