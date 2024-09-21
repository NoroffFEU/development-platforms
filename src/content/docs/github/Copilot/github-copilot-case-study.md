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
<p align="center">
  <img src="https://github.com/user-attachments/assets/11363817-3df6-414d-8941-2d7238f84aac"/>
</p>
The chat function is a great feature that gives you an ai prompt inside the vsc editor and can provide assistance to you project at will.

Copilot is designed to improve productivity, reduce repetitive tasks, and enhance learning for developers of all skill levels.


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
     
   <img src="https://github.com/user-attachments/assets/00cb882d-e6d9-44b8-af7f-6e40739ab686" alt="install-copilot-extension" style="width: 600px;">  
   <img src="https://github.com/user-attachments/assets/5dcc43fe-2a8a-4e5b-888c-3f8d775956a5" alt="install-copilot-extension" style="width: 600px;">
     
   After that is installed, Copilot will prompt you to sign in to GitHUb:

   <img src="https://github.com/user-attachments/assets/689c8204-7b91-4c7d-a830-87baad61e256" alt="install-copilot-extension" style="width: 600px;">
     
   After signing in to GitHub, check the **Copilot status** in Visual Studio Code. Open VS Code and look for the GitHub Copilot icon in the lower-right corner of the status bar. This icon indicates that
   GitHub Copilot is active:

   <img src="https://github.com/user-attachments/assets/26ea980f-c39a-4487-b277-7acc78e1bbcf" alt="install-copilot-extension" style="width: 600px;">
     
   Click the GitHub Copilot icon to open the Copilot status. The Copilot status should show **Ready**:

   <img src="https://github.com/user-attachments/assets/461fab17-8d17-45d5-9612-50934604cc07" alt="install-copilot-extension" style="width: 600px;">  

### How to use GitHub Copilot (key features)

#### Get code completion suggestions
- **Automatic code suggestions**:</br>
  To get code suggestions from Copilot all you need to do is type code in your editor and Copilot automatically presents you code suggestions, to help you code more effectively.
  Below you see a simple example.
  If you write `<!DOCTYPE>`, Copilot will recognize that the next tag to add is the `<html>` tag. You'll see the suggestion from Copilot in gray, and you can press the **Tab** key to accept it.

  <img src="https://github.com/user-attachments/assets/234fe114-292f-431c-a426-ff4729461912" alt="install-copilot-extension" style="width: 300px;">  

- **Use comments to get code suggestions**:</br>
  Below are examples of how GitHub Copilot provides code suggestions in HTML, CSS, or JS files based on comments:

  <img src="https://github.com/user-attachments/assets/80c1c93a-3faf-424e-9528-2d5e97b7b3ad" alt="install-copilot-extension" style="width: 600px;">

- **Navigate between multiple suggestions**:</br>
  When GitHub Copilot suggests code in grey, there are often multiple options available. To view different suggestions, hover over the suggestion in the editor, and a control panel will appear.
  You can then use the arrow keys to navigate between the previous and next suggestions.

  <img src="https://github.com/user-attachments/assets/fa264992-369a-45a0-8e60-872935e7f27a" alt="install-copilot-extension" style="width: 600px;">

  Click **Accept** on the suggestion that best fits your needs.</br>
  You can also click the ellipsis to the right in the panel and select **Open GitHub Copilot**. A new window will open in VS Code, displaying all the different solutions or suggestions.
  It may take a few seconds for Copilot to synthesize the available options before they are fully visible.

#### Use Copilot inline chat
- **Improve existing code**: Copilot's inline chat is excellent for refactoring or improving existing code. With the inline chat you can ask Copilot for assistance in the moment, without switching context. 
  The Copilot Chat extension is automatically installed along with the GitHub Copilot extension.  

- **To use the inline chat**, press `Ctrl + I` on your keyboard, and a chat interface will appear in your editor. You can use this chat to ask questions about your code. 
  Copilot will return a response directly in the editor. Select **Accept** or press `Ctrl + Enter` to apply the proposed code changes.
- **Highlighting code**: To provide Copilot with more context about your request, you can highlight a range of code or text in the editor before pressing `Ctrl + I`.

  <img src="https://github.com/user-attachments/assets/5e249ebe-8ac3-44a3-bbf6-c323e9acc931" alt="install-copilot-extension" style="width: 600px;">

#### Copilot Chat for general programming questions




     

   





## Conclusion

This section can be used to summarize your findings. What are the main advantages and disadvantages of your chosen tool? What are the main use cases for this tool? What are the main limitations of this tool? What does the future look like for this tool?

## References

- [GitHub Blog - Inside GitHub: Working with the LLMs behind GitHub Copilot](https://github.blog/ai-and-ml/github-copilot/inside-github-working-with-the-llms-behind-github-copilot/)
- [GitHub Blog - GitHub Copilot X: The AI-powered developer experience](https://github.blog/news-insights/product-news/github-copilot-x-the-ai-powered-developer-experience/)
- [Wkipedia - GitHub Copilot](https://en.wikipedia.org/wiki/GitHub_Copilot)
- [OpenAI Codex](https://openai.com/index/openai-codex/)
- [SD Times - GitHub Copilot now available in Visual Studio 2022](https://sdtimes.com/softwaredev/github-copilot-now-available-in-visual-studio-2022/)
- [GitHub Copilot Changelog](https://github.blog/changelog/label/copilot/)
- [GitHub Docs - Quickstart for GitHub Copilot](https://docs.github.com/en/copilot/quickstart?tool=vscode)
- [Visual Studio Docs - Set up GitHub Copilot in VS Code](https://code.visualstudio.com/docs/copilot/setup)
- [YouTube Video Tutorial - Get Started with GitHub Copilot in VS Code](https://www.youtube.com/watch?v=Fi3AJZZregI)
- [Visual Studio Code - Docs - Getting started with GitHUb Copilot in VS Code](https://code.visualstudio.com/docs/copilot/getting-started)
- *Good Examples* by John Doe, 1990
- The Example Podcast, Episode 1

## Additional Resources

- [More about Examples](https://example.com)
- [Examples, the Full Course](https://youtu.be/dQw4w9WgXcQ)
