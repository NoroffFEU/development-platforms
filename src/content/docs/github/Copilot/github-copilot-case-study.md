---
title: Github Copilot case study
author: Bjørn Håvard and Elise
tags: Github Copilot, Machine learning, AI
---

## Introduction

Github copilot is a code completion tool intergrating AI learning into the coding platform. Developed by Github and OpenAi for autocompleting bits of code to assist developers in Visual Studio Code, Visual Studio, Neovim, and JetBrains integrated development environments. A helpful tool for developers that makes it easier to type in large amounts of code in a faster way. 

## Brief History

- **2020 (June)** - OpenAI released GPT-3, a powerful LLM (large language model). This sparked excitement in the developer community. At GitHub, this marked the beginning of the journey toward building Copilot, focusing on code generation (automatically generating programming code) as a key application.
- **2021 (June)** - GitHub announced GitHub Copilot in a technical preview, available to a limited audience in the Visual Studio Code development environment.
- **2021 (August)** - OpenAI released the [Codex model](https://openai.com/index/openai-codex/), which was built in partnership with GitHub. OpenAI introduced it as the underlying model for GitHub Copilot and as an API available for developers to use directly. This model was a descendant of GPT-3 and trained on billions of lines of public code. In addition to natural language outputs, it also understands and generates code across multiple programming languages.
- **2021 (October)** - GitHub released the GitHub Copilot Neovim plugin as an open-source project for public use.
- **2021 (October)** - GitHub Copilot was made available as a plugin in the JetBrains marketplace, allowing users of JetBrains IDEs to integrate the tool into their development environment.
- **2022 (March)** - GitHub released GitHub Copilot as an extension for Visual Studio 2022  IDE (Integrated Development Environment). This allowed developers (in the technical preview) using Visual Studio 2022 to access GitHub Copilot's AI-powered code completion features directly within their development environment.
- **2022 (June)** - Full-scale release. GitHub Copilot is now available to individual developers as a subscription-based AI pair programmer service.
- **2023 (March)** - GitHub [Copilot X](https://github.blog/news-insights/product-news/github-copilot-x-the-ai-powered-developer-experience/) was announced. This expansion include an adoption of OpenAI's new GPT-4 model and introducing new features, such as chat and voice for Copilot, bringing Copilot to pull requests, the command line, and docs.
-  To explore the complete history and stay updated on the latest releases, visit the official GitHub Copilot changelog at: [GitHub Copilot Changelog](https://github.blog/changelog/label/copilot/).

## Main Features

GitHub Copilot is an AI-powered coding assistant developed by GitHub in collaboration with OpenAI. Its main features include:



| Feature | Description |
| --- | --- |
| Code completion | Autocomplete-style suggestions from Copilot in supported IDEs (Visual Studio Code, Visual Studio, JetBrains IDEs, Azure Data Studio, and Vim/Neovim). |
| Copilot Chat | A chat interface that lets you ask coding-related questions. GitHub Copilot Chat is available in GitHub.com (Copilot Enterprise only), in GitHub Mobile, and in supported IDEs (Visual Studio Code, Visual Studio, and JetBrains IDEs). Copilot Enterprise users can also use skills with Copilot Chat. |
| Copilot in the CLI | A chat-like interface in the terminal, where you can ask questions about the command line. You can ask Copilot to provide command suggestions or explanations of commands. |
| Copilot pull request summaries (Copilot Enterprise only) | AI-generated summaries of the changes that were made in a pull request, which files they impact, and what a reviewer should focus on when they conduct their review. |
| Copilot text completion (beta) (Copilot Enterprise only) | AI-generated text completion to help you write pull request descriptions quickly and accurately. |
| Copilot knowledge bases (Copilot Enterprise only) | Create and manage collections of documentation to use as context for chatting with Copilot. When you ask a question in Copilot Chat in GitHub.com or in VS Code, you can specify a knowledge base as the context for your question. |

### Code Completion example: 
<p align="center">
  <img src="https://github.com/user-attachments/assets/636f5513-1475-4563-8ba5-b2f744ffc56d" alt="Screenshot of copilot autocomplete"/>
</p>
This makes it less timeconsuming to add code in your project as you progress since copilot gives examples of what you may want.

### Copilot chat example:




## Market Comparison

This section can be used to compare the advantages and disadvantages of your chosen tool to other similar tools. You may use subheadings, tables or bullet points to structure your description.

If you are writing about an open source tool, it may be a good idea to compare it to similar proprietary tools. Likewise, if you are writing about a proprietary tool, it may be a good idea to compare it to similar open source tools.

Similarly, a self hosted tool and a cloud based tool with a similar purpose may make for a good comparison.

## Getting Started

This guide will show you how to get started with GitHub Copilot in Visual Studio Code. If you're using JetBrains IDE or Visual Studio, you can refer to the GitHub Copilot documentation here:
- [JetBrains IDE GitHub Copilot Documentation](https://docs.github.com/en/copilot/quickstart?tool=jetbrains)
- [Visual Studio GitHub Copilot Documentation](https://docs.github.com/en/copilot/quickstart?tool=visualstudio)

### Get access to GitHub Copilot in Visual Studio Code
1. **Subscribe or get free access (students)**    
   - To sign up for GitHub Copilot, start a free trial by selecting Copilot Individual from [this link](https://github.com/features/copilot#pricing).
   - **Verified students** can get free access by providing proof of student status. To apply, visit [GitHub Education](https://github.com/education) and click **Join GitHub Education**.
     Follow the instructions to update your GitHub account settings with the necessary information.

2. **Necessary Setup**      
   - Before you install the GitHub Copilot Extension make sure you have the **latest version** of **Visual Studio Code**. To find out you can open VS Code, click on **Help** in the top menu, and select **"Check for updates"**. This will tell you if you're using the latest version or if a new version is available for update.
   - You can also check the [Visual Studio Code release notes](https://code.visualstudio.com/updates/v1_93) or [Visual Studio Code download page](https://code.visualstudio.com/Download) to find the latest
   version.

3. **Install GitHub Copilot Extension in Visual Studio Code**  
   Open the **Extensions: Marketplace** and search for GitHub Copilot.
   Install the extension:

   ![install-copilot-extension](https://github.com/user-attachments/assets/00cb882d-e6d9-44b8-af7f-6e40739ab686)
     
   ![install-copilot-extension-step2](https://github.com/user-attachments/assets/5dcc43fe-2a8a-4e5b-888c-3f8d775956a5)

   After that is installed, Copilot will prompt you to sign in to GitHUb:
     
   ![sign-in-with-github-1](https://github.com/user-attachments/assets/689c8204-7b91-4c7d-a830-87baad61e256)

   After signing in to GitHub, check the **Copilot status** in Visual Studio Code. Open VS Code and look for the GitHub Copilot icon in the lower-right corner of the status bar. This icon indicates that
   GitHub Copilot is active:
     
 ![copilot-icon-status-bar](https://github.com/user-attachments/assets/26ea980f-c39a-4487-b277-7acc78e1bbcf)

   Click the GitHub Copilot icon to open the Copilot status. The Copilot status should show **Ready**:  
     
   ![status-ready](https://github.com/user-attachments/assets/461fab17-8d17-45d5-9612-50934604cc07)

### How to use GitHub Copilot (key features)


   

   

   





## Conclusion

This section can be used to summarize your findings. What are the main advantages and disadvantages of your chosen tool? What are the main use cases for this tool? What are the main limitations of this tool? What does the future look like for this tool?

## References

- [GitHub Blog - Inside GitHub: Working with the LLMs behind GitHub Copilot](https://github.blog/ai-and-ml/github-copilot/inside-github-working-with-the-llms-behind-github-copilot/)
- [Wkipedia - GitHub Copilot](https://en.wikipedia.org/wiki/GitHub_Copilot)
- [OpenAI Codex](https://openai.com/index/openai-codex/)
- [SD Times - GitHub Copilot now available in Visual Studio 2022](https://sdtimes.com/softwaredev/github-copilot-now-available-in-visual-studio-2022/)
- [GitHub Blog - GitHub Copilot X: The AI-powered developer experience](https://github.blog/news-insights/product-news/github-copilot-x-the-ai-powered-developer-experience/)
- [GitHub Copilot Changelog](https://github.blog/changelog/label/copilot/)
- [GitHub Docs - Quickstart for GitHub Copilot](https://docs.github.com/en/copilot/quickstart?tool=vscode)
- [Visual Studio Docs - Set up GitHub Copilot in VS Code](https://code.visualstudio.com/docs/copilot/setup)
- [YouTube Video Tutorial - Get Started with GitHub Copilot in VS Code](https://www.youtube.com/watch?v=Fi3AJZZregI)



- 
  
- *Good Examples* by John Doe, 1990
- The Example Podcast, Episode 1

## Additional Resources

- [More about Examples](https://example.com)
- [Examples, the Full Course](https://youtu.be/dQw4w9WgXcQ)
