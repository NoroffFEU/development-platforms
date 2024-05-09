---
title: GitHub Actions
author:  MariuszRozycki https://github.com/MariuszRozycki
tags: CI/CD, GitHub Actions, GitHub
---

# Developer Platforms: GitHub - GitHub Actions
## Introduction

### What GitHub is in general?
Before we will get to know what GitHub Actions are we should write what GitHub is. 
According GitHub webside and Wikipedia - GitHub is a developer platform that allows developers to create, store, manage and share their code. It uses Git software, providing the distributed version control of Git plus access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project. Headquartered in California, it has been a subsidiary of Microsoft since 2018.

It is commonly used to host open source software development projects. As of January 2023, GitHub reported having over 100 million developers and more than 420 million repositories, including at least 28 million public repositories. It is the world's largest source code host as of June 2023. [Wikipedia][1]

### What is a GitHub Actions?
GitHub Actions is a perfect example of a modern development platform that allows us to automate processes throughout the software lifecycle, including testing, building, and deploying applications. Preparing this case study is not only to help  understand GitHub Actions in more depth, but also to demonstrate my research and technical skills. This case study includes demonstrations and configuration scripts that show how GitHub Actions can realistically be used in a development project. To describe GitHub Actions I used mostly GitHub Actions documentation: https://docs.github.com/en/actions/guides

## Brief History

GitHub Actions is a part of GitHub so it's necessary to write some words about GitHub history at the beginning. Platform was founded by Tom Preston-Werner, Chris Wanstrath, P. J. Hyett, and Scott Chacon. The development of GitHub started in 2007, and the platform officially launched in April 2008. Initially, GitHub was designed as a platform for version control and collaboration, leveraging the distributed version control system Git, which was developed by Linus Torvalds for Linux kernel development.

- The initial development of the GitHub platform started on October 19, 2007. By April 2008, founders Tom Preston-Werner, Chris Wanstrath, P. J. Hyett, and Scott Chacon had officially launched the site, which had previously been available in a beta version for a few months. Additionally, GitHub hosts an annual event known as GitHub Universe to showcase new features and developments.

- Originally, GitHub, Inc. operated without middle management, adopting a "self-management" approach where all employees acted as their own managers. This structure allowed employees to select projects that piqued their interest (known as open allocation), although salaries were determined by the CEO or other top executives who also decided on project goals and funding.

- Foundation and Early Development (2007-2008): GitHub was founded on February 8, 2008, by Tom Preston-Werner, Chris Wanstrath, PJ Hyett, and Scott Chacon. The platform was developed as a collaborative environment for open-source software projects, utilizing the distributed version control system Git. The concept of "pull requests" was central to GitHub's functionality, allowing users to suggest changes to projects.
- Public Launch and Initial Growth (2008-2009): After a beta period, GitHub was publicly launched on April 10, 2008. It quickly gained traction in the developer community.
- By February 2009, GitHub boasted over 46,000 public repositories, and by July 2009, it reached 100,000 users.
- By the end of 2009, GitHub hosted 90,000 unique public repositories.
- Rapid Expansion (2010-2012): GitHub's user base and repository count continued to soar. By July 2010, GitHub announced it was hosting 1 million repositories.
- The platform supported projects in over 50 programming languages. In 2011, GitHub became the most popular open source forge. In July 2012, GitHub received a significant investment of $100 million from Andreessen Horowitz.
- Increased Adoption and Features (2012-2013): GitHub's popularity among developers and companies continued to grow. By 2012, the platform was used extensively not just by individual developers but also by large corporations and government organizations. By December 2012, GitHub had jumped to 2.8 million users. In 2013, it introduced features that catered to large enterprise users and reached 3 million users by January.
- Corporate and International Expansion (2014-2015): In 2014, GitHub faced internal challenges, including allegations of harassment which led to the resignation of Tom Preston-Werner. Despite these challenges, GitHub continued to grow, reaching 7 million projects by August 2013. By March 2015, GitHub was the largest host of source code globally with over 21.1 million repositories. In June 2015, GitHub expanded internationally by opening an office in Japan. By September 2015, GitHub had grown to 324 employees and 10 million users.

- On February 28, 2018, GitHub fell victim to the third-largest distributed denial-of-service (DDoS) attack in history, with incoming traffic reaching a peak of about 1.35 terabits per second.
- On June 19, 2018, GitHub expanded its GitHub Education by offering free education bundles to all schools.


## Main Features

GitHub Actions is a powerful feature within GitHub that enhances automation capabilities directly within repositories. <br> The main features of GitHub Actions:

| Feature | Description |
| --- | --- |
| Automation of Workflows: | GitHub Actions allows to automate software development workflows directly in GitHub repository. User can set up workflows to build, test, package, release, and deploy code based on a variety of triggers, such as pushing to a repository or making a pull request. |
| Customizable Workflows: | User can create custom workflows using the YAML syntax to define the steps and tasks that run on specific triggers. This provides flexibility to tailor automation processes to meet specific project needs. |
| Hosted Runners: | GitHub provides hosted virtual environments (runners) where these workflows execute. These runners can be based on Ubuntu Linux, Windows, and macOS. Additionally, user can host own runners for more control and customization. |
| Marketplace Integration: | GitHub Actions integrates with the GitHub Marketplace, allowing users to find and share actions to perform tasks, ranging from code linting and testing to deploying to various cloud providers. |
| CI/CD Support: | GitHub Actions supports Continuous Integration and Continuous Deployment (CI/CD) practices, enabling automated testing and deployment with each code change, helping to maintain code quality and accelerate the deployment cycle. |
| Community and Sharing: | Actions created by the community can be shared and reused across different projects. This fosters a collaborative environment where developers can leverage each other's expertise to streamline development processes. |
| Secrets and Encrypted Keys: | It supports secrets management, allowing user to store sensitive information like API keys or access tokens securely in the GitHub environment. |
| Example Feature | This feature does something for a specific reason. |

These features make GitHub Actions a versatile tool for developers looking to automate their development and deployment workflows directly within GitHub. For more detailed information and guidance on setting up GitHub Actions, you can visit the documentation: https://docs.github.com/en/actions/guides 


## Market Comparison

I choose the following two platforms: GitHub Actions && Azure Pipelines because they are both owned by Microsoft. <br> 

Azure DevOps and GitHub have their own automation and CI/CD (continuous integration and continuous delivery) tools: Azure Pipelines and GitHub Actions.
Both of these tools allow you to create workflows for building, testing, publishing, releasing, and deploying code. They also have similarities in terms of workflow setup.
In both cases, configuration files are saved in YAML format and stored in the code repository. Workflows consist of one or more tasks, and each of these tasks contains one or more individual steps or commands.

Task and step structures in Azure Pipelines are very similar to those in GitHub actions.

However, there are many differences between these two tools.

| GitHub Actions | Azure Pipelines |
| --- | --- |
| Is specific to GitHub. | Can be used with many source control systems. |
| Can be used to automate code review, branch management, or program sorting. |  Is primarily used for automating CI/CD workflows. |
| Manages only self-hosted runners in groups. | Supports environments, deployment groups, and agent pools. |
| Selects self-hosted runners with labels. | Allows the selection of self-hosted agents with capabilities. |
| Doesn't have supports for approvals and gates. | Supports approvals and gates. |
| Only offers webhooks. | Has service connections and webhooks to orchestrate connections to external services in pipelines. |
| GitHub Actions only has secret variables tied to the code repository or organization. | To aid configuration management in pipelines, Azure has variables and variable groups, both secret and plaintext. |
| Doesn't have Secure Files feature. | Offers a Secure Files feature. |
| GitHub Actions requires separating stages into different YAML workflow files. | Supports stages defined in the YAML file to create deployment workflows. |
| Requires explicit configuration, and the YAML structure cannot be omitted. | User can omit part of the structure in job definitions. For a single job, user don’t need to define the job itself, can simply define its steps. |
| Doesn't offer customization of pipeline run name or build number. | The pipeline run name or build number can be customized. |
| Only a single action can be placed in a GitHub repository. | Azure Pipelines extensions can bundle multiple tasks. |


Azure DevOps is often seen as a more mature service with a wider range of features for CI/CD. It also blends more smoothly with enterprise-level tools. On the other hand, GitHub Actions is newer and still proving itself, but it's generally viewed as more user-friendly.

## How does GitHub Actions work?

GitHub Actions is a CI/CD (Continuous Integration/Continuous Deployment) platform that allows you to automate your software workflows directly within GitHub repositories. 
Here’s an overview of how GitHub Actions works:
#### 1. Workflow:
- A workflow is an automated process made up of one or more jobs.
- Workflows are defined using YAML syntax in .yml files stored in the .github/workflows directory of a GitHub repository.
- Each workflow file specifies the sequence of actions to be executed.
#### 2. Events:
  ##### Workflows are triggered by events, which can be:
- Repository Events: push, pull_request, release, etc.
- Scheduled Events: cron syntax for periodic scheduling.
- Manual Triggers: Triggered manually via the GitHub UI.
  ##### Example:
  ```yaml
  on:
  push:
    branches:
      - main
  ```
#### 3. Jobs:
- A workflow consists of one or more jobs.
- Jobs are a set of steps executed sequentially or in parallel.
- Each job runs on a separate runner (virtual machine).
#### 4. Runners:
##### Hosted Runners:
- Provided by GitHub, with pre-installed software.
- Ubuntu, Windows, macOS operating systems are available.
##### Self-Hosted Runners:
- You can set up and manage your own runners.
- Allows for greater customization.
  ##### Example of specifying a runner:
  ```yaml
  jobs:
  build:
    runs-on: ubuntu-latest
  ```
  #### 5. Steps:
- A job consists of multiple steps.
- Steps execute commands or actions.
##### Example of steps in a job:
```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Check out code
        uses: actions/checkout@v3
      - name: Install dependencies
        run: npm install
      - name: Run tests
        run: npm test
```
#### 6. Actions:
- Actions are reusable commands that can be used as steps in a job.
- You can use community actions or create your own.
##### Example using an action:
```yaml
- name: Set up Node.js
  uses: actions/setup-node@v3
  with:
    node-version: '20'
```
### What is workflow?
A workflow is a customizable automated process that can execute one or more jobs. Workflows are specified using a YAML file placed in your repository and are triggered by events in the repository, manually, or according to a set schedule.

Workflows are located in the .github/workflows directory within a repository, and you can have several workflows, each performing a distinct set of tasks. For instance, one workflow might build and test pull requests, another could deploy your application whenever a release is created, and a third might add a label whenever a new issue is opened.

##### Example of Workflows, Jobs and Steps 
![image](https://github.com/MariuszRozycki/development-platforms/assets/55709542/81b6aede-9646-41e3-abfa-1f75631f4def)

#### Example Workflow:
#### In the example below, if you want to use e.g. Jest tests in GitHub Actions *.yaml files, you must first properly configure your package.json file to install e.g. Jest or other testing software. Otherwise GitHub Actions fails.
##### Here’s a complete example of a GitHub Actions workflow:
```yaml
# .github/workflows/ci.yml
name: CI Workflow

# Trigger the workflow on push or pull request events
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-test:
    runs-on: ubuntu-latest

    steps:
      # Check out the repository code
      - name: Check out code
        uses: actions/checkout@v3

      # Set up Node.js environment
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'

      # Install dependencies
      - name: Install dependencies
        run: npm install

      # Run tests
      - name: Run tests
        run: npm test
```

#### Key Features
##### Matrix Builds: Run multiple jobs with different configurations.
```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node: [12, 14, 16, 18, 20, 'lts/*', 'node']
    steps:
      - uses: actions/checkout@v2
      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: ${{ matrix.node }}
      - run: npm install
      - run: npm test
```
##### Secrets and Environment Variables:
- Use GitHub Secrets for sensitive data like API keys.
- Define custom environment variables.
```yaml
env:
  NODE_ENV: production
```


## Getting Started

To start with GitHub Actions, you'll need to create a .github/workflows directory in your GitHub repository. Inside this directory, you create YAML files that define your workflows. You can start simple with a basic file that runs a few commands every time you push changes to your repository. Over time, you can expand your workflows to automate more complex tasks like building, testing, and deploying your code. GitHub provides preconfigured starter workflows to help you get started quickly, and these can be customized to suit your project's needs. For detailed steps and more information, you can check the GitHub Docs on [Quickstart for GitHub Actions](https://docs.github.com/en/actions/quickstart).


### Starting with GitHub Actions involves a few key steps:

1. Create a Workflow File: In your GitHub repository, add a new file in the `.github/workflows` directory.
2. Choose a Trigger: Decide when your workflow should run, such as on a `push` or `pull_request` event to your repository.
3. Define Jobs: Set up the jobs that should run in your workflow.
4. Specify Steps: Inside each job, define the steps to execute, such as running scripts or using actions.

Here’s a basic example of a workflow file that logs messages:

```name: Example Workflow
on: workflow_dispatch
jobs:
  say_hello:
    runs-on: ubuntu-latest
    steps:
    - name: Log a message
      run: echo Hello, world!
```


## Conclusion

GitHub Actions is a versatile CI/CD tool that enables automated workflows within GitHub. By defining workflows in YAML files, you can customize your automation processes to suit your project's requirements, leveraging GitHub’s powerful ecosystem.

## References

[1]: https://en.wikipedia.org/wiki/GitHub
- https://web.archive.org/web/20160409191635/http://www.startlin.es/timelines/github/
- https://datascientest.com/en/azure-devops-vs-github-actions-which-is-the-best-ci-cd-tool
- https://docs.github.com/en/actions/guides


## Additional Resources

- [More about Examples](https://example.com)
- [Examples, the Full Course](https://youtu.be/dQw4w9WgXcQ)
------------------------

# Developer Platforms: GitHub Actions

GitHub Actions is a perfect example of a modern development platform that allows us to automate processes throughout the software lifecycle, including testing, building, and deploying applications. Preparing this case study is not only to help  understand GitHub Actions in more depth, but also to demonstrate my research and technical skills. This case study includes video demonstrations and configuration scripts that show how GitHub Actions can realistically be used in a development project. To describe GitHub Actions I used mostly GitHub Actions documentation: https://docs.github.com/en/actions/guides

## 1.	Introduction to GitHub Actions:
###	What GitHub Actions are and how they are integrated with GitHub, a code hosting and version control platform?

GitHub Actions is a functionality offered by the GitHub platform that allows to automate, customize and execute development processes directly in GitHub repositories. It is a tool for continuous integration (CI) and continuous deployment (CD) of software that enables automatic execution of scripts (so-called actions) in response to various events in the repository.

#### Key features of GitHub Actions:
##### A .Workflow Automation: 
- GitHub Actions allows you to create workflows that are defined in YAML files in the repository. Workflows can be triggered by various events on GitHub, for example push to a branch, creation of a pull request, release of a new version or time-scheduled events (cron jobs).

##### B. Flexibility: 
- Users can create their own actions (scripts) or use existing actions created by the GitHub community and available on the GitHub Marketplace. This gives you a lot of freedom in adapting CI/CD processes to the specific needs of the project.

##### C. GitHub Integration: 
- As a tool built into GitHub, Actions are strongly integrated with other GitHub features such as GitHub Issues, Pull Requests, and GitHub Pages. This makes it easier to manage the entire software lifecycle in one place.

##### D. Container support: 
- GitHub Actions supports running tasks in Docker containers, which allows for even greater control over the environment in which actions and workflows run.

##### E. Security: 
- Mechanisms such as secrets allow for the safe storage and use of sensitive data (e.g. API keys, passwords) that are needed for the operation of scripts and integration with external services.

#### How does integration with GitHub work?
GitHub Actions is an integral part of GitHub, which means that all actions and workflows are managed and run directly from the GitHub UI or via configuration files placed in repositories. Users can easily monitor the results of each running workflow, view logs, manage notifications, and debug issues without leaving the GitHub platform.

GitHub Actions makes it easier to integrate DevOps practices into the daily work of development teams, enabling the automation of testing, building and deploying applications in a much more efficient and controlled way.
<br>
<br>
<br>

## 2.	Basic functions and capabilities:
-	GitHub Actions allows users to create workflows that automatically run when certain events occur in the repository (e.g. push, pull request).
-	List common tasks that can be automated using GitHub Actions, such as building applications, testing, deploying to servers or the cloud.

## 3.	Usage examples:
-	Present a specific example or case study showing how GitHub Actions was used to automate CI/CD processes in a software project.

## 4.	Advantages and disadvantages:
-	Strengths of GitHub Actions such as GitHub integration, ease of setup, scalability, as well as weaknesses which may include limitations in available tools, cost for very large projects, etc.

## 5.	The future of GitHub Actions:
-	Speculate on future trends and developments of GitHub Actions as DevOps and automation grow in popularity.



