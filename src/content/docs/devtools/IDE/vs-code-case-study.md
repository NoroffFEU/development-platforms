---
title: Visual Studio Code
keywords: vscode, case study, code editor, vscode
tags: vscode, case study, code editor, vscode
---

## Introduction

Visual Studio Code is a widely used, and one of the leading code-editors out there right now. A powerful, simple, easy-to-use, free and open-source platform developed by Microsoft. It has a huge marketplace for plug-ins and built-in support for debugging with breakpoints. It also supports multiple languages.

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

![Left side panel where your can find the extensions](~/assets/ide/vscode-extensions-preview.png)

### Debugging:

Debugging is an essential part of the software development process, and Visual Studio Code provides a powerful set of tools for debugging your code. Its built-in debugger helps accelerate your edit, compile, and debug loop. It offers support for for the Node.js runtime and can debug JavaScript, TypeScript, or any other language that gets transpiled to JavaScript. To debug other languages and runtimes search for Debuggers extensions (read on how to install extensions in the Extension Section above).

Key things to know about debugging in VS Code:

Before you can start debugging, you need to create a **launch configuration**. This configuration specifies how to launch your application and how to attach the debugger to it. You can create launch configurations for different types of applications, such as Node.js, Python, or C# applications.

![Debugger icon in left side panel](~/assets/ide/vscode-debugger-icon.png)

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

Syntax highlighting is a common feature is most modern code editors, including VS Code. It helps make code easier to read and understand by visually distingushing different components of the code. Syntax highlighting does as exactly what you would expect from reading the name, it highlights different elements of the code with distinct colors or styles, sutch as strings, comments, keywords, variables and more. this makes it easier for developers to visually see differences between components of the code, which can be very helpful when working with large codebases or trying to debug issues in the code.

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

Git is a widely used version control system that allows developers to manage and track changes done to their code. VSCode has a buildt in support for Git, which makes it easy for developers to do git operations without even leaving the code editor. Here are some things you can do with it:

- Stage changes
- Commit changes
- Create and switch between branches
- Pull and push changes
- Fix merge conflics
- view commit history

for the more experianced users, VSCode also provides more advanced git features such as support for git submodules, stashing changes, and tagging commits.
for more information about Git version control, check out this link:

[More info on git version control](https://code.visualstudio.com/docs/sourcecontrol/overview)

## Market Comparison

**Visual Studio Code** is one of the most widely used code editor in the market right now. One of the advantages of Vscode is its extensibility. Where it has huge marketplace of plugins, extensions and themes, making it easier for developers to customize their experience and tailor the editor to their specific needs. This extensibility makes it a popular choice among developers across different domains.

It is designed to be fast, lightweight, and powerful, providing developers with an efficient tool for editing and debugging code in various programming languages.

VS Code has built-in support for Node. js, TypeScript, and JavaScript and a feature-rich extension ecosystem for different languages like C++, Java, C#, PHP, Go, and Python.

You can find lots of code editor alternatives in the market right now.

### Top alternatives

- Atom
- Webstorm
- Eclipse
- Visual code
- Sublime text
- SonarQube
- Gitlab
  and many more!

But let's focus with two alternatives ( **Atom and Webstorm**) and compare those two with then vscode.

### Differences between VS Code and Atom

![Vscode vs Atom](https://user-images.githubusercontent.com/95321157/232502911-85b6d9d8-07de-4eee-9f73-1ece70dcab2e.jpg)

**Atom** and **VS Code** are both free and open-source code editor and part of Microsoft family, whereas Atom was originally created by github and Vscode was developed by Microsoft, and both have their own strengths and weaknesses.

**Atom** is an all-in-one platform that’s perfect for an absolute beginner but is still suitably advanced for seasoned users with extensive coding and HTML knowledge. It's go-to choice for users looking for a basic-level editor, where it is easy to customized.

Built for collaboration. It has already inbuilt Git and complete Github integration, with easy-to-install and update plugins, it lets you create new branches, resolve merge conflicts, and view pull requests directly from the text editor.

It has a simple and customizable user interface, and its key features include code highlighting, auto-completion, and multiple panes. Atom also has a large library of plugins and themes that can be easily installed to extend its functionality.

While the **VS Code** has a more streamlined user interface compared to Atom and provides a range of advanced features like debugging, Git integration, and intelligent code completion.

Developers who choose to use vscode are those who had no interest in expirementing with their code editor, They are the ones who wants more near-IDE functionality with simple and clean code editor. Even though they can install certain plugins to add themes, features and additional support for languages, it remains the same after adding some certain plugins.

Here are some of the pros and cons of Atom and VS Code:

#### Pros

| Atom                                               | VS Code                                                                |
| :------------------------------------------------- | :--------------------------------------------------------------------- |
| Caters to all skills levels(Specially entry level) | Fast and responsive performance, even with large files and projects    |
| Easy theming                                       | Powerful, feature-rich editor with built-in support for many languages |
| Excellent extension offering                       | Extensive extensions marketplace                                       |
| Greater flexibility                                | Smart Feature set                                                      |
| Good for web development and front-end languages   | Good for back-end development and scripting                            |
| Supports multiple panes for easy navigation        | Advanced debugging features and support for extensions                 |

#### Cons

| Atom                                                             | VS Code                                                            |
| :--------------------------------------------------------------- | :----------------------------------------------------------------- |
| Can be slow and resource-intensive, especially with larger files | Can be overwhelming for beginners due to its extensive feature set |
| Requires additional configuration                                | Source control integration                                         |
| Limited built-in features compared to other editors              | Limited plugin elasticity                                          |
| Sometimes has issues with stability and crashes                  | Not as customizable as Atom in terms of themes and UI              |

All in all, choosing between VS Code and Atom will depend on developers personal preferences and their specific needs for their projects. Both have pros and cons. VS Code is often considered more powerful and efficient than Atom due to its extensive features and better performance. But it's worth trying both code editors to see what works best for you as a developer.

### Differences between VS Code and WebStorm

![Vscode vs WebStorm](https://user-images.githubusercontent.com/95321157/232600821-5f6779a6-591f-4224-8325-d9d1c4c70911.jpg)

**WebStorm and Visual Studio Code (VS Code)** are two popular integrated development environments (**IDEs**) used by developers for web development.

**WebStorm**, developed by JetBrains, is a full-fledged IDE designed specifically for JavaScript, CSS, and HTML development. It has a rich set of features for coding, debugging, and testing web applications. It comes with a myriad of out-of-the-box features intended for rapid prototyping and deployment.**WebStorm is a commercial product and requires a paid license to use.**

WebStorm mainly focuses on web development. It supports many languages such as Angular, React, HTML, CSS, JavaSript, Vue.js, TypeScript, AngularJS, React Native and PhoneGap. And if you notice many those langauges is JavaScript-based, as WebStorm was developed primarily for JavaScript.

On the other hand, like what i said between VS Code and Atom. **VS Code** is a free, open-source IDE developed by Microsoft that supports a wide range of programming languages including JavaScript, CSS, and HTML. It has a large and active community that has contributed to the development of numerous extensions and plugins. Programmers can develop an app from start to finish but with fewer features available — it isn’t a full development environment unlike WebStorm. VS Code still provides quality of life features, like code assistance and debugging support for the programmers.

Visual Studio Code supports more on major programming languages such as Python, C, C++, C#, Java and JavaScript, although a JavaScript developer can safely use either platform.

Here are some of the pros and cons of WebStorm and VS Code:

#### Pros

| Webstorm                                                                                         | VS Code                                                                                                      |
| :----------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------- |
| Includes a robust built-in debugger that supports a wide range of debugging scenarios            | Supports a wide range of programming languages, including JavaScript, Java, C++, Python, and many others.    |
| Comprehensive and powerful IDE for JavaScript, CSS, and HTML development.                        | Free and open source for everyone                                                                            |
| Integrates well with other JetBrains tools, such as IntelliJ IDEA, PyCharm, and PhpStorm.        | Has a lightweight and customizable interface that allows developers to personalize their workspace.          |
| Has strong built-in support for popular front-end frameworks such as React, Angular, and Vue.js. | Has a large and active community that has contributed to the development of numerous extensions and plugins. |
| Has a built-in code quality analysis tool that can detect errors and code smells.                | Offers a seamless remote development experience.                                                             |

#### Cons

| Webstorm                                               | VS Code                                                                                                     |
| :----------------------------------------------------- | :---------------------------------------------------------------------------------------------------------- |
| Requires a paid license to use.                        | Some features may require the installation of extensions, which can sometimes lead to compatibility issues. |
| Has a steeper learning curve than some other IDEs.     | Doesn't have as many built-in features for web development as WebStorm.                                     |
| Can be resource-intensive and slow on older computers. | May not be suitable for larger and more complex projects that require a more robust IDE.                    |
| Takes up a good chunk of computer processor.           | Searching for settings is a bit complicated.                                                                |
| Slows down for large codebases.                        | VS Code gets high CPU usage for running                                                                     |

The choice between **WebStorm** and **VS Code** depends on the developer's needs. Choose WebStorm if you are primarily a JavaScript developer, interested in AI code-generation features, and want a fully integrated development environment. Choose VS Code if you need to develop in other languages besides JavaScript, want a lightweight, easy-to-use code editor, and prefer a free, open-source platform.

## Getting Started with VS Code

To start using VS Code, follow these steps:

1. **Download VS Code:** You can download VS Code for your operating system from the [official website](https://code.visualstudio.com/). Click on the "Download for [Your OS]" button, and follow the instructions to download and install the software.

2. **Install VS Code:** Once the download is complete, open the installer and follow the instructions to install VS Code on your computer.

3. **Launch VS Code:** Once the installation is complete, launch VS Code by clicking on the icon in your application folder, desktop or by searching for it in your operating system's search bar.

4. **Open a folder or file:** After launching VS Code you can open a folder or file to start coding. To open a folder, click on "File" in the top menu and select "Open Folder." To open a file, click on "File" and select "Open File."

![Open folder or file](~/assets/ide/vscode-open-folder-file.png)

5. **Start coding:** Once you have opened a folder or file, you can start coding in the editor.

6. **Install extensions:** Remember that VS Code have powerful extensions that allows you to customize your workflow and add new features to the editor. Be sure to check these out to make your coding easier and more fun!

That's it! With these steps, you should be able to start using VS Code for your coding projects.

For more resources, tips and help view the [VS Code Docs](https://code.visualstudio.com/docs)

## Fun Easter Eggs

VS Code has several tricks and hacks that are fun to know about! In this section i will give you a quick summary of some of them.

1. **Party Mode:** This feature turns your code editor into a disco party. To activate it, open the command palette (Ctrl+shift+P), type "Party mode", and select "Start Party", Your entire screen will start flashing and changing colors!

2. **Code Tracker:** This easter Egg tracks the number of keystrokes you make in a day and displays it in the status bar. To activate it, again you have to open your command palette and type "Code Tracker".

3. **Cow say:** This feature addsa cow that says a message of your choice to the integrated terminal. To activate it, open a terminal and type "cowsay" followed by ur message. For example, "cowsay Hello there", The cow will apear and say your message.

4. **Zen Mode:** This is a feature that removes all distractions by hiding everything except ur code editor. To activate it, click the Zen mode button in the satus bar, or press f11. The screen will turn black, and only the code editor will be visable.

5. **Tetris game:** Did you know you can play games inside VScode? well, now you do! To active this feature, open the command palette, type in "Tetris", and select "Start game". A new tab will open with the game!

6. **Konami Code:** If you press the konami code (up, up, down, down, left, right, left, right, B, A) in VS Code, a little surprise will apear on the bottom right of your screen.

7. **Emmet Abbrevation:** Emmmet is actually a popular tool for writing HTML and CSS code quickly. In VS code, you can type somthing such as "ul>li\*3" and press Tab to expand it into the full code. This could save you a lot of time and effort, and is maybe my favorit trick!

**I hope you find these fun Easter eggs and hidden features in VS Code interesting and enjoyable!**

## Conclusion

In conclusion, VS Code is a popular choice among developers due to its powerful features and user-friendly interface. Its vast library of extensions and plugins enables developers to customize their coding environment to their liking. While there are many alternatives in the market, VSCode's continued development and support from Microsoft suggest it will remain a leading code editor for years to come. Ultimately, the choice of code editor is a matter of personal preference, and developers who prioritize simplicity and power may find VS Code to be their ideal choice.

## Credits

- Jonas Hope (JonasHope)
- Ma Enirose Hellum (Enirose)
- Marita M Stenersen (MaritaMalvinsdatter)

## References

- (https://stackshare.io/visual-studio-code/alternatives)
- (https://www.getapp.com/development-tools-software/a/visual-studio-code/alternatives/)
- (https://www.crazyegg.com/blog/atom-vs-visual-studio-code/)
- (https://code.visualstudio.com/docs)
- (https://www.trustradius.com/products/microsoft-visual-studio-code/reviews#reviews)
- (https://www.techrepublic.com/article/webstorm-vs-vscode/)
- (https://www.trustradius.com/products/intellij-webstorm/reviews?qs=pros-and-cons#comparisons)
- (https://en.wikipedia.org/wiki/Visual_Studio_Code)
- (https://geekflare.com/vs-code-extensions/)
