---
title: Case Study of Prettier Code Formatter, a VSCode Extension
author: Roar Falch Hanssen (roahan10771@stud.noroff.no)
tags: Prettier Code Formatter, VSCode extension, Case study
---

## Introduction

Prettier Code Formatter is an extension for Visual Studio Code. Prettier formats your code, making it neat and organized. Additionally, using Prettier is a time-saving practice.

Prettier supports various programming languages and automatically formats your code based on predefined rules. This enhances the visual appeal of the code and significantly improves readability.

To make the most of Prettier, it is recommended to run it from within Visual Studio Code. To do this, you need to install the extension. If you configure Prettier to format the code every time you save, you won't have to worry about running it manually. The code will be formatted automatically upon saving.

## Brief History

- April 2017 – Prettier was launched by James Long as a tool for formatting JavaScript.
- June 2017 – Prettier was extended to support TypeScript, CSS, Less, and SCSS.

## Main Features

### Code Formatting:

It formats the code so you don't have to worry about it. This is the fundamental concept behind Prettier. If you write JavaScript code without including semicolons, Prettier will insert semicolons when formatting your code. Prettier also ensures that the code is organized, placing items that should be on separate lines accordingly. Prettier can be configured to format the code every time you save the document.

### Format on Save:

Format on save is the most powerful feature of Prettier for VSCode. This feature has transformed the way people write code.

### Language Support:

Prettier supports various programming languages, including JavaScript, HTML, CSS, SCSS, TypeScript, Markdown, and many more.

## Market Comparison

There are several alternatives to Prettier Code Formatter, and some of these include ESLint, JsFmt, StandardJS, +EditorConfig, and JSBeautifier.

### A closer look at the differences between Prettier and ESLint.

Both Prettier and ESLint are popular code formatters, but they serve different purposes.

ESLint primarily focuses on static code analysis, identifying and fixing coding errors, and adhering to coding style rules. On the other hand, Prettier is more focused on code formatting. Prettier does not consider any errors in the code but ensures that the code looks neat based on predefined rules.

ESLint is mainly used for JavaScript but can be customized to support other formats. Prettier supports various formats, including JavaScript, HTML, CSS, and more.

While ESLint is easy to configure and can be extended with plugins, Prettier has a set of rules that cannot be configured. Prettier ensures good formatting without much configuration, whereas ESLint allows you to customize rules.

Both Prettier and ESLint can be integrated into IDEs or code editors, but Prettier can also be run independently.

ESLint and Prettier are often used together. Prettier takes care of code formatting, while ESLint analyzes the code and ensures that the rules are followed.

## Getting Started

For getting started with Prettier, follow these steps:

### Step 1: Install Prettier Code Formatter

Search for the Prettier extension in VS Code. Make sure you are installing "Prettier – Code formatter." To verify, check under "More Info" and look for "Identifier," which should be "esbenp.prettier-vscode." Press install.

### Step 2: Set Automatic Saving

Once the installation is complete, open settings in VS Code (shortcut: press CTRL + , in Windows). Go to Text Editor in the left menu and select Formatting. There, you should find a checkbox for "Format on save." Check this box.

### Step 3: Format the Code

Now you can highlight your code, right-click, and choose "Format Document." You will see a dialog box prompting you to configure your code formatter. Select which code formatter should be the default and press Configure.

### Step 4: Choose Prettier as the Default Code Formatter

Now choose Prettier as your default code formatter.

That's it! Your code will now be formatted with Prettier every time you save your document.

## Conclusion

Prettier simplifies the job for programmers significantly. Previously, a programmer had to invest a lot of time in making the code look neat and organized. Now, Prettier handles this automatically for you every time you save the document.

This is a great help for programmers, allowing them to concentrate on making the code function correctly instead of spending considerable time on its appearance.

Prettier is easy to adopt, lowering the barrier for programmers to start using it.

## References

James Long (2017) _A Prettier JavaScript Formatter_. Available at: https://archive.jlongster.com/A-Prettier-Formatter (Accessed: 03.02.2024)

James Long/Christopher Chedeau (2017) _Releasing Prettier 1.0_. Available at: https://archive.jlongster.com/prettier-1.0 (Accessed: 05.02.2024)

Christopher Chedeau (2017) _Prettier 1.4: TypeScript and CSS support_. Available at: https://prettier.io/blog/2017/06/03/1.4.0 (Accessed: 05.02.2024)

Tomasz Kozon (2024) _Prettier_. Available at: https://boringowl.io/en/tag/prettier (Accessed: 06.02.2024)

Editor Integration (no date) _Editor Integration_. Available at: https://prettier.io/docs/en/editors.html (Accessed: 06.02.2024)

Kamaldeen Lawal (2023) _Alternatives to Prettier – Popular Code Linting and Formatting Tools_. Available at: https://www.freecodecamp.org/news/alternatives-to-prettier/ (Accessed: 08.02.2024)

Christopher Chedeau (2024). _No title_. Message on X. Available at: The appendix of this document. (Accessed: 10.02.2024)

Joel Olawanle (2023) _Top 30 VS Code Extensions for Enhanced Programming Experience_. Available at: https://kinsta.com/blog/vscode-extensions/ (Accessed: 10.02.2024)

Theodore Kelechukwu Onyejiaku (2024) _How to set up Prettier and automatic formatting on VS Code_. Available at: https://www.educative.io/answers/how-to-set-up-prettier-and-automatic-formatting-on-vs-code (Accessed: 11.02.2024)

Sumit Kumar Singh (2023) _ESLint vs Prettier_. Available at: https://javascript.plainenglish.io/eslint-vs-prettier-387408e9be5f (Accessed: 12.02.2024)

## Appendix

![The image contain a chat history with Christopher Chedeau from X](https://falchhanssen.net/prettier/X-message_ChristopherChedeau_10.02.2024.png "X-message from Christopher Chedeau")
