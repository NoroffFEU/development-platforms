---
Title: Jenkins Case Study
Author: Frederick Santos
Tags: DevOps, CI, CD, automation, case study
---
# Jenkins
![Jenkins logo](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Jenkins_logo_with_title.svg/1598px-Jenkins_logo_with_title.svg.png?20120629215426)
Visit the [Jenkins.io](https://www.jenkins.io/) project.

## Introduction

Jenkins is an open source automation server that simplifies the process of building, deploying, and automating projects, used as a tool in continuous integration(CI) and continuous delivery(CD). It enables us as developers to make our projects easier to  maintain, test and deploy our software and applications by automating different stages in the development lifecycle.


## Brief History

- **2005**: Jenkins was originally named Hudson, which was released as a open source CI tool started by Koshuke Kawaguchi. It was developped while he was working at Sun Microsystems and the Hudson became a popular software rapidly within the dev community who appreciated its capabilities in automating software development processes.
  
- **2010**: Oracle acquired Sun Microsystem which led to a dispute between Oracle and the Hudson community. The issues between these two were related to Oracles control and governance of Hudson, and also Oracles intention to claim and trademark the name. This led to a lot of discontent within the Hudson community.
  
- **2011**: The majority of the development commmunity decided to continue the project under the name Jenkins. Jenkins and Hudson continued as two independent projects. With the new Jenkins community they decided to fork the project from Oracle's Hudson but instead of working on a commercial version they maintained the core principles of automation and emphasizing community-driven development and open governance. With contributions from individuals, companies and organization across the software industry the Jenkins project grew and gradually introduced the concept of plugins to allow users to customize and extend its functionality.
  
- **2018**: Jenkins get the recognition as a leading tool in CI/CD as they joined the [Continous Delivery Foundation](https://cd.foundation/about/) which is a open-source software foundation that pushes to improve the delivery of quality software more secure and faster.


## Main Features

### Why we use Jenkins?
Jenkins is a open source CI/CD-tool that developers use to automate various stages in the process of software development, with Jenkins developers can easier integrate changes to projects. It makes the development lifecycle less time-consuming by maintaing, test and deploy software and applications. For each commit changes to a shared repository it triggers a server we call the Jenkins CI-server to automate build, testing and deployment.

To get a better understanding of what Jenkins is and why developers use it, let's go back in time and see how it was before Jenkins and other CI/CD-tools.

Before Jenkins and other CI/CD-tools build, testing and deployment processes were often more time-consuming, cumbersome and error-prone. As developers we all write and submit code, and in scenarios when working in bigger teams our code and environment can often be inconsistant when submitting to the same source code and repository. It can lead to a development hell were we encounter more bugs, issues with integration and delay in testing and deliverying software. Testing in this case were often done manually and code integration often happened infrequently, usually before a major release of software and applications. 

Before automation of running tests, creating build and deploying applications, these processes as mentioned were done manually which is both a very time consuming practice and leads to bigger risk of unclear and unefficient communication among team memebers. It was also more infrequently integration of code which often lead to integration problems were bugs was more difficult to fix and identify due too big codebase changes made at once. The lack of automation led both to inefficiencies, longer development cycles and increased chance of errors. 

With the introduction of tools like Jenkins, developers were able to automate various stages of the development process. This also enabled developers to identify bugs and errors earlier and improve collaboration between developer teams. With CI teams could integrate code more regularly in smaller bulks with automated build and test processes which made it quicker to always deliver a software or application in a deployable state.

### Features
| Feature | Description |
| :---: | --- |
| **Open Source** | It's a completely free and open source tool available for everyone with a Windows, Mac OS and Unix-like OS to install. |
| **Community** | Jenkins is backed by a big community of users and support. With such a big community and contributers the Jenkins project is always maintained with regular updates, improvements and new features. |
| **Continuous Integration** | The Jenkins CI server automates processes involved in building, testing and deploying projects. It gets triggered to integrate code by new commits to the source code in a shared repo. Depending on predefined build scripts and commands that we use, the CI-server will run tests, compile code etc based on our requirements and configuration. Jenkins will also let the developer know through a report if a build or test succeeds or failes, which gives developers quick feedback to correct errors, deploy code and reduce cut off time. |
| **Plugins**| With the help from plugins, Jenkins let us extend our environment and achieve continuous integration. Jenkins' plugin library includes 1800+ plugins to support building, deploying and automating projects. The Jenkins Pipeline Plugin is a plugin that helps developers to implement build, test and deployment with just a Jenkinsfile (written in Groovy). Docker Plugin is a helpful plugin to run Jenkins with containers instead via server. |
| **Continuous Deployment/Delivery** | Jenkins facilitates CD and let developers move to production code and deliver software quicker and more frequently. |
| **Deployment Pipeline** | Series of events that we add and are connected to make quick release of software and application. Involves CI and CD processes' and is the lifecycle of a development process. The pipeline are responsible for build, running tests, monitoring and deploy new software and applications. |
| **Simple setup** | Simple to use nature and a straight forward GUI to help understanding and setup plugins. Jenkins also have a diverse support for languages, including but not limited to JavaScript, Java, Groovy, Ruby and Shell scripts. |


## Market Comparison

To see the difference between CI/CD tools lets compare Jenkins to GitHub Actions which is also a well known CI/CD tool. GitHub Actions operates within the framework of your GitHub repository. It's more beginner-friendly, its less maintenance since you are provided with free runners (machines that execute jobs and perform CI/CD operations) that is maintained by GitHub. While in Jenkins you will be running on a custom server which demand maintaing the Jenkins CI server. Self-hosted runners is also possible in GitHub Actions. 

When using GitHub Actions your source code are more or less tied to GitHub, while using Jenkins since its a more mature CI/CD tool you are more flexible to where you store your repository, you can even store code in GitHub and still use Jenkins. Since Jenkins is more mature the community and support isn't as limited as GitHub Action which is still a very new tool compared to Jenkins. While GitHub actions have runners, a plugin with similar effect when using Jenkins is the Docker Plugin. Istead of running the builds on the CI-server, we can run the process with Docker containers which reduce resources.

The [image](https://faun.pub/github-actions-vs-jenkins-which-should-you-use-d7ba6800e8bb) below illustrate how flexible Jenkins is as a tool, since the combinations available to the environment pipeline is wider in terms of combining with third-party services. On the other hand you can also see that Jenkins quickly can a bit more developer-centric and might demand more experience since it's so dependent on different plugins. GitHub is way more friendly to use, but again more limited. Also Jenkinsfiles are written in Groovy, which is for many developers a bit of a struggle compared to GitHubs workflow written in the more common YAML.  

![Jenkins logo](https://miro.medium.com/v2/resize:fit:1400/0*-Ka3EdaF5Puo9_Xn)
Image from [Faun.pub via Medium.com](https://faun.pub/github-actions-vs-jenkins-which-should-you-use-d7ba6800e8bb)

It is worth mentioning that GitHub offers [GitHub Enterprise](https://github.com/enterprise) which is a more flexible and server-based similar to Jenkins, but since its a paid plan its not used in this comparison. Jenkins is totally free and even though GitHub Actions offers free accounts keep in mind you don't have unlimited free minutes, at a certain point when having numerous and larger projects you will have to pay in line with the complexity of these. 


## Getting Started

| OS | Available |
| :---: | :---: |
| **Mac OS** | ✅ |
| **Window** | ✅ |
| **Unix-like** | ✅ |

Depends on the type of OS we are using but all documentation for installing is described on [Installing Jenkins](https://www.jenkins.io/doc/book/installing/).

**Installation MacOS**
For Mac at least we can install Jenkins in a few different ways. The two most common ways is with Homebrew or with help of containers using Docker or Kubernetes. This example only shows the installation for MacOS using Homenbrew.

Make sure Homebrew is installed before starting installing Jenkins. To install Jenkins, we run the command below in out terminal:
```
brew install jenkins-lts //lts = long term support
```
After installing confirmation we can start Jenkins by using the command:
```
brew services start jenkins-lts
```
Jenkins has now started and we can go to our web browser and head to localhost:8080. On this page we will be asked to «Unlock Jenkins» with a administration password:
![Localhost:8080](https://www.jenkins.io/doc/book/resources/tutorials/setup-jenkins-01-unlock-jenkins-page.jpg)
Image from [Jenkins.io](https://www.jenkins.io/doc/book/installing/macos/)

Where to find this password is not mentioned, but we can find it in the teminal by calling the ```cat``` command followed by the file path on the page ```/var/lib/jenkins/secrets/initialAdminPassword``` command:
```
cat /var/lib/jenkins/secrets/initialAdminPassword
```
![Teminal session](https://www.jenkins.io/doc/book/resources/tutorials/setup-jenkins-02-copying-initial-admin-password.png)
Image from [Jenkins.io](https://www.jenkins.io/doc/book/installing/macos/)

Copy the password generated from the terminal and paste it in the browser. The next step is where the installation process actually starts and we are asked to either **Install suggested plugins** or **Select plugins to install**. In the documentation Jenkins tells us to install suggested plugins if we're not sure which plugins we need and that we can install additional plugins or remove them at a later stage.

Now we can add a admin user that we can use to log in next time we use Jenkins instead of rememering the ```initialAdminPassword```. Finally Jenkins will try to detect where the installation is, which in this case we used http://localhost:8080/. Now we can start using Jenkins with their GUI and from here we can create jobs and see how they run.


## Conclusion

### Advantages
- It is a free open source tool and distributed under the MIT Licence. Worth noting that its completely free unless its associated with the cost from third-party plugins and services.
  
- Great open source community to back and support you.

- Huge selection of plugins to make a custom environment that fits an organizations need regarding i terms of support building, testing, deploying and automating projects.
  
- Easy to install and setup. And since its been around for many years already it can easily be integrated with third-party services.

### Disadvantages
- Its a jungle with the amount of plugins released in Jenkins and the tool very depenant on plugins, and not all of them are maintained as frequently. So make sure the plugins we choose have a proper support.
- 
- You need to be very hands on to maintain the Jenkins infrastructure, so it demands a higher level of technical abilities.
  
### Final conclusion
There isn't really a winner or loser in terms of CI tools, it's more of which tool fits the project and the user. Jenkins is high rated amongst many developers because its much more mature and comes with a bigger open-source community.


## References

- [Jenkins.io](https://www.jenkins.io/)
- [Simplilearn.com](https://www.simplilearn.com/tutorials/jenkins-tutorial/what-is-jenkins)
- [Wikipedia](https://en.wikipedia.org/wiki/Jenkins_(software))
- [CD.Foundation](https://cd.foundation/about/)
- [Faun.pub](https://faun.pub/github-actions-vs-jenkins-which-should-you-use-d7ba6800e8bb)
- [Pluralsight.com](https://www.pluralsight.com/resources/blog/cloud/comparing-github-actions-vs-jenkins-ci-showdown)
- [Jenkins, macOS installer](https://www.jenkins.io/doc/book/installing/macos/)
- ChatGPT
