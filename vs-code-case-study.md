---
title: Visual Studio Code (VS Code) case study
author: 
  - Jonas Hope <JonasHope>
  - Ma Enirose Hellum <Enirose>
  - Marita M Stenersen <MaritaMalvinsdatter>
tags: vscode, case study, code editor
---

## Introduction

## Brief History
  
  Here is a breif timeline of the history of VS Code
  
  - 2011: Microsoft released a lightweight editor called "Monaco" as part of Azure Cloud Shell.
  - 2013: Microsoft began developing a more robust version of Monaco to be used for desktop applications.
  - 2015: VS Code was released to the public as a free and open-Source code editor.
  - 2016: Visual Studio Code won the Editor's Choice award by PCMag.
  - 2017: VS Code became the most popular development enviroment, overtaking JetBrains IntelliJ, it was also the top choice for code editing in the Stack Overflow developer survey.
  - 2018 Visual Studio Code Marketplace reached the astonishing 1 million downloads per week.
  - 2019: Microsoft released an online version of VS Code called "Visual Studio Online" for cloud-based development.
  - 2021: Visual Studio Code introduced support for Apples new silicon processors, allowing it to run natively on the new architecture.

## Main Features

### Live Share:

Live Share is a feature in Visual Studio Code that allows developers to collaborate on code in real-time, even if they are not in the same physical location. 

With Live Share, multiple people can work together on the same codebase simultaneously, making it easier to collaborate on projects and work more efficiently. It's available as a free extension for Visual Studio Code and it’s a powerful tool for remote collaboration that can be especially helpful for distributed teams or remote workers.

Live Share allows you to share your entire workspace or a specific file with others. You can invite other people to collaborate by sharing a link or by adding them to your Live Share session. Once they join, they can see your code and any changes you make in real-time. They can also edit the code themselves, and you can see their changes in real-time as well.
Live Share also includes features for code debugging and testing. For example, you can start a debugging session and share it with others, allowing them to see and interact with the debugging interface in real-time. This can be particularly helpful when trying to diagnose complex bugs or issues.


### Web IDE:

A web IDE (Integrated Development Environment) in VS Code allows developers to code, test and debug their applications entirely from within the browser, without having to install any additional software or set up any local development environments. It also offers the convenience of collaborative coding, where multiple developers can work on the same codebase simultaneously from different locations, and see changes made by others in real-time.

Web IDE in VS Code is made possible through the use of a technology called "Visual Studio Code Online" (formerly known as "Visual Studio Online"), which is a cloud-based version of the popular code editor. This technology enables developers to access a complete and fully-featured version of VS Code from within a web browser, including features like code highlighting, IntelliSense, debugging, and more.

To use the web IDE in VS Code, you need to have an Azure account and set up a "Visual Studio Code Online" instance in Azure. Once you have done this, you can access the web IDE through a web browser by entering the URL provided by Azure.

Overall, web IDE in VS Code offers a convenient and powerful way for developers to code and collaborate on projects from anywhere, without the need for extensive setup or installation processes.

### Extensions:

VS Code extensions are additional features that users can add to the editor to customize it according to their specific requirements. Apart from this, the VS Code Extension API enables users to develop and share their own extensions, which can provide new functionalities or features to the editor. This feature empowers developers to enhance the editor's capabilities and share their extensions with the community.

Some of the most popular extensions are: 

- **Prettier**: This popular extension provides automatic code formatting for JavaScript, TypeScript, CSS, JSON, and more. It can help make your code more readable and consistent by automatically formatting it according to a set of rules. You can customize this rules to your own needs or go with the standard rules already in place. 

- **Live Server**: This extension provides a simple web server that allows you to see live changes to your HTML, CSS, and JavaScript code in real-time. It automatically refreshes your browser whenever you make changes to your code, making it easier to test and debug your web applications.

- **Code Spell Checker**: This extension checks your code for spelling errors and typos and provides suggestions for corrections. It can help you avoid mistakes in your code and improve the readability of your code.

- **IntelliCode**: Thiis extension was released in 2018 by Microsoft and has since been continuously updated and improved with new features and capabilities. It uses artificial intelligence to provide smarter coding assistance. It uses machine learning algorithms to analyze your code and suggest the most likely code completions, and after using it for a while it will learn your coding habits and can provide personalized suggestions based on your coding style and preferences.The IntelliCode extension supports multiple programming languages, including C#, JavaScript, Python, and more.

- **Python**: With over 80 million downloads this the extension is at the top over the most popular and most downloaded extentions in VS Code. It provides a range of features to make developing Python applications easier and more efficien with features like code editing, debugging, testing, code linting and more. It is overall a powerfull tool for Python developers that helps you write, test, and debug Python code more efficiently. 

To install an extension, simply search for it in the Extensions panel on the left side of the editor, and click the Install button. VS Code automatically checks for updates to extensions and notifies you when a new version is available. You can manage your extensions by disabling or uninstalling them, or configure their settings. 

![Left side panel where your can find the extensions](image.png.png)


### Debugging:

Debugging is an essential part of the software development process, and Visual Studio Code provides a powerful set of tools for debugging your code. Its built-in debugger helps accelerate your edit, compile, and debug loop. It offers support for for the Node.js runtime and can debug JavaScript, TypeScript, or any other language that gets transpiled to JavaScript. To debug other languages and runtimes search for Debuggers extensions (read on how to install extensions in the Extension Section above). 

Key things to know about debugging in VS Code: 

Before you can start debugging, you need to create a **launch configuration**. This configuration specifies how to launch your application and how to attach the debugger to it. You can create launch configurations for different types of applications, such as Node.js, Python, or C# applications.

![Debugger icon in left side panel](2023-04-16-15-04-37.png)

VS Code provides several **debugging views** that help you analyze your code as it runs. These views include the Debug Console, which displays output from your application and the Debug Explorer, which displays information about your running applications and allows you to control the debugger.

**Breakpoints** are markers that you can place in your code to pause the debugger when it reaches a particular line. This allows you to inspect the state of your application at that point in the code and diagnose issues. There are also **Conditional breakpoints** that allow you to pause the debugger only when a particular condition is met. This can be useful for debugging complex logic or loops. You can also set breakpoints in your unit tests and step through your tests to diagnose issues that comes up. 

**Watch expressions** allow you to monitor the value of a variable or expression as your code runs. You can add watch expressions to the Debug Console or the Variables view and see how their values change as your code executes.

Overall, debugging in VS Code is a powerful and flexible feature that can help you diagnose issues and improve the quality of your code. By leveraging the built-in debugging tools and views, you can gain insights into your code as it runs and identify and fix issues more efficiently.


### Source Control:

Visual Studio Code has a built-in support for source control, this allows developers to manage changes to their code over time. It is an important feature for developers as it allows them to track changes to their codebase, collaborate with other developers, and revert changes if necessary.
The source control functionality is based on Git, which is a popular distributed version control system that is widely used in the development industry, Git allows developers to create multiple branches of their codebase, which makes it possible for developers to work on different features or bug fixes simultaneously without interfering with each other's work. Changes to the code can be commited to the local Git repository, then pushed to a remote repository for sharing with fellow developers.

In VSCode, the source control functionally is easily accessed through the **Source Control Panel**, which can be opned by clicking on the icon that looks like a branch with a circle around it in the left-hand sidebar. From here, you can create new branches, commit changes, push changes and view the status of their git repository. 

Additionally, VSCode has several features that make working with source control easier and more efficient. Heres some examples, it provides visual cues in the editor to show which lines have been added, removed or modified since last commit. It also provides a visual difference (diff) tool, which allows you to see the differences between different versions your code. Last but not least, it has a intergrated support for pull requests and code reviews, this allows teams to collaborate on code changes and ensure that changes are reviewd and tested before they are merged into the main codebase.


### Syntax Highlighting:
  
Syntax highlighting is a common feature is most modern code editors, including VS Code. It helps make code easier to read and understand by visually distingushing    different components of the code. Syntax highlighting does as exactly what you would expect from reading the name, it highlights different elements of the code with distinct colors or styles, sutch as strings, comments, keywords, variables and more. this makes it easier for developers to visually see  differences between components of the code, which can be very helpful when working with large codebases or trying to debug issues in the code.
  
![Example image of syntax highlighting](https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)
  
Another great feature with syntax highlighting is that it's often customizable, allowing developers to change the colors and styles for different elements of the code. This can be specially useful for developers who have different preferences or visual needs. Some code editors may even have different themes or styles that can be applied to the syntax feature, allowing developers to quickly switch between different styles.
  
Making the code easier to read is only one of the great features of syntax highlighting, another great feature is it's ability to help you prevent errors by highlighting potential mistakes or inconsistencies in the code. For example, if a variable is misspelled, the syntax highlighting would give a different color than normal, which would indicate that it is not recognized as a variable. This can help developers catch mistakes early, and making it easier to fix issues and typos before they cause larger problems down the line.
  
Overall, syntax highlighting is an important feature of VS Code that can help make coding easier, faster and more efficent. By visually distingushing different components of the code, syntax highlighting can help developers read and understand code more easily, catch mistakes early on, and improve the overall quality of their code.

  
### Code Refactoring:
 
Code refactoring is about improving code quality by making it more efficient, readable and maintainable. VSCode has several built-in tools to help you with this. These tools allow developers to modify exsiting code without changing its behavior or functionality.
  
Some of the code refactoring features in VSCode include these features:
  
  - **Renaming**: Imagine you want to change the name of a variable, function or class, but you have lost control of all the places you have used it. This feature allows you to change the name trough out your entire code base with a single action. This makes it easier to maintain consistency and clarity within the codebase.
Simply press **F2** or right click on the code and select **Rename Symbol** to use this feature.
  
  [More info about renaming](https://code.visualstudio.com/docs/editor/editingevolved#_rename-symbol)
  
  - **Extracting code**: Extracting code refers to the process of taking a piece of code and turning it into a separate function, variable or class. This can help make the code more modular and reusable.
In VSCode, the process of extracting code is often called "The Extact Method" or "Extract Function". This can be done with the use of an extenstion, for example "JavaScript ES6 code snippets", which includes a shortcut for extracting code. It is also possible to do this without the use of an extenstion, select the code you wish to extract, right click on it, and choose "Refactor > Extract Method/Function" from the context menu.
  
  - **Organizing imports**: This feature automatically sorts and removes unused import statements, making the codebase cleaner and more efficient. This can be done using the "Organize Imports" command, simply open the file you wish to organize and click on the "Organize Imports" button in the top right corner of the editor window. Theres also a shortcut command "Shift+Alt+O (shift+option+o on mac)". Running this command will sort your imports alphabetically, remove any unused imports and group imports from the same package together.
  
  - **Code Analysis**: In VSCode, code analysis is a built in service, which automatically analysis your code in real time. It includes error detection, code highlighting and code completion suggestions. By analyzing the code, it can identify potential issues and suggest improvements. It is also possible to congfigure the feature to fit your specific needs, allowing you to tailor the feedback. Overall this feature is designed to help you write better code, faster.

### Git Version Control:

## Market Comparison

## Getting Started

## Conclusion

## References
