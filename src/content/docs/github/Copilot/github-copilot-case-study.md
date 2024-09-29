---
title: Github Copilot case study
author: Bjørn Håvard Steinnes and Elise Aurtande
tags: Github Copilot, Machine learning, AI
---
## Table of Contents
1. [Introduction](#introduction)
2. [Brief History](#brief-history)
3. [Main Features](#main-features)
4. [Market Comparison](#market-comparison)
5. [Getting Started](#getting-started)
6. [Conclusion](#conclusion)

## Introduction

<img src="https://github.com/user-attachments/assets/ee091dbc-c378-44e6-b0f9-432857f36edb" alt="Screenshot of copilot" style="width: 600px;" />


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

<img src="https://github.com/user-attachments/assets/636f5513-1475-4563-8ba5-b2f744ffc56d" alt="Screenshot of copilot autocomplete" style="width: 600px;"/>

This makes it less timeconsuming to add code in your project as you progress since copilot gives examples of what you may want.

### Copilot chat example:

<img src="https://github.com/user-attachments/assets/11363817-3df6-414d-8941-2d7238f84aac" alt="Screenshot of copilot chat" style="width: 600px;"/>

The chat function is an excellent feature that offers an AI prompt within the VSC editor, providing on-demand assistance for your project.

Copilot is designed to improve productivity, reduce repetitive tasks, and enhance learning for developers of all skill levels.


## Market Comparison

This a comparison of GitHub Copilot against the alternatives, focusing on key factors such as language support, integration, AI capabilities, privacy, and specific strengths.

### Tabnine vs. GitHub Copilot

  <a href="https://www.tabnine.com/get-free-90-day-trial/?utm_term=tabnine&utm_campaign=%5BUS%5D+%7C+%5Ben%5D+%7C+%5Bdesktop%5D+%7C+%5BSearch:Brand%5D+%7C+%5BTabnine%5D&utm_source=adwords&utm_medium=ppc&hsa_acc=4311736126&hsa_cam=21073527735&hsa_grp=159292934283&hsa_ad=713438295761&hsa_src=g&hsa_tgt=kwd-915660947489&hsa_kw=tabnine&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQjwo8S3BhDeARIsAFRmkOMcafCSEVhPm9gye_aBRZel-NaUK6zn83y4QQjOruSA-Us-RWxohycaAmUkEALw_wcB">
  <img src="https://github.com/user-attachments/assets/414366e1-e193-48b9-9e51-9875e9fe4913" alt="Tabnine" style="width: 600px;">
</a>

 - **Language Support:** Both tools support a wide range of languages, but Copilot may have an edge in terms of the depth of its understanding, thanks to its underlying Codex model.
 - **Integration:** Tabnine integrates with most IDEs (e.g., VS Code, JetBrains, Sublime Text), just like Copilot, which is mainly focused on Visual Studio Code and JetBrains IDEs.
 - **AI Model:** Copilot uses the Codex model, which is a powerful, transformer-based model by OpenAI, providing more nuanced suggestions, especially for natural language to code translation. Tabnine, while still robust, 
   often relies on smaller models or a local-first approach, so it may not have as advanced reasoning capabilities as Copilot.
 - **Privacy:** Tabnine offers a local model option for privacy-conscious developers, while Copilot processes code suggestions on Microsoft/Cloud servers. Tabnine is better for teams with strict data privacy requirements.
 - **Strength:** Copilot shines with its natural language to code capabilities, while Tabnine is more privacy-focused with flexible deployment options.

### Replit Ghostwriter vs. GitHub Copilot

<a href="https://www.programai.co/?gad_source=1&gclid=Cj0KCQjwo8S3BhDeARIsAFRmkOOokZLt_LUXT3cBR3fYAMMU45tCfbhmfJb_TX9CtczEVtFSnugGR4gaAgwNEALw_wcB">
  <img src="https://github.com/user-attachments/assets/3bd184ce-7c0e-458b-a129-7f31687e9a87" alt="Replit ghostwriter" style="width: 600px;">
</a>

 - **Language Support:** Copilot supports more languages, while Ghostwriter is deeply integrated with the Replit environment and supports languages that are typically used in this space, like Python, JavaScript, and HTML/CSS.
 - **Integration:** Ghostwriter is tightly integrated within the Replit online IDE, offering cloud-based coding, whereas Copilot is a plugin for more traditional IDEs like VS Code.
 - **AI Model:** GitHub Copilot (Codex) tends to have more advanced code generation capabilities, but Ghostwriter's integration with Replit makes it a great tool for quick, cloud-based coding and education.
 - **Strength:** Copilot is better suited for larger, more complex projects in various IDEs. Ghostwriter is better for users who prefer a lightweight, browser-based environment.

### Codeium vs. GitHub Copilot

<a href="https://codeium.com/">
  <img src="https://github.com/user-attachments/assets/6b8fac51-ae64-40b8-b76f-c065753d82f7" alt="Codeium" style="width: 600px;">
</a>

 - **Language Support:** Codeium offers wide language support, comparable to Copilot, although Copilot may cover a broader range of languages in more depth.
 - **Integration:** Codeium works with popular IDEs like VS Code and JetBrains, just like Copilot, so integration is nearly on par.
 - **AI Model:** Codeium is designed to be fast and responsive, and although it is still developing, Codex (Copilot’s model) is generally more robust and powerful.
 - **Cost:** Codeium is completely free, whereas GitHub Copilot is a paid service.
 - **Strength:** Codeium is great for developers looking for a free solution with many similar features to Copilot, although Copilot may provide more refined suggestions.

### Amazon CodeWhisperer vs. GitHub Copilot

<a href="https://docs.aws.amazon.com/codewhisperer/latest/userguide/what-is-cwspr.html">
  <img src="https://github.com/user-attachments/assets/f2e38fa2-3573-4f6c-91db-1fa379036794" alt="Amazon codewhisperer" style="width: 600px;">
</a>

 - **Language Support:** CodeWhisperer supports fewer languages than Copilot, primarily focusing on languages and frameworks tied to AWS development (e.g., Python, Java, JavaScript).
 - **Integration:** CodeWhisperer integrates tightly with AWS environments like Lambda and CodeCommit, whereas Copilot integrates with broader IDEs such as VS Code.
 - **AI Model:** Both tools offer strong AI-assisted code completion, but Copilot’s Codex model offers a deeper understanding of natural language queries. CodeWhisperer includes security scanning for vulnerabilities, which 
   Copilot lacks.
 - **Strength:** CodeWhisperer is ideal for developers working with AWS infrastructure, especially those looking for integrated security checks. Copilot is more versatile for general development across multiple platforms.

### IntelliCode (Microsoft) vs. GitHub Copilot

<a href="https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode">
  <img src="https://github.com/user-attachments/assets/371fbf09-7b61-46a4-90bb-57124570add2" alt="intellicode" style="width: 600px;">
</a>

 - **Language Support:** IntelliCode focuses more on Microsoft-supported languages (C#, TypeScript, Python), whereas Copilot supports a wider variety of languages.
 - **Integration:** IntelliCode is natively integrated into Visual Studio and VS Code, just like Copilot. However, Copilot supports more IDEs (e.g., JetBrains).
 - **AI Model:** IntelliCode offers AI-assisted code suggestions but doesn’t provide the same natural language to code translation as Copilot, which excels at transforming comments and prompts into code.
 - **Strength:** IntelliCode is perfect for developers using Microsoft tools extensively, while Copilot is better for those wanting more advanced, flexible AI suggestions across different languages and frameworks.

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
     
   <img src="https://github.com/user-attachments/assets/00cb882d-e6d9-44b8-af7f-6e40739ab686" alt="install-copilot-extension-step-1" style="width: 600px;">  
   <img src="https://github.com/user-attachments/assets/5dcc43fe-2a8a-4e5b-888c-3f8d775956a5" alt="install-copilot-extension-step-2" style="width: 600px;">
     
   After that is installed, Copilot will prompt you to sign in to GitHub:

   <img src="https://github.com/user-attachments/assets/689c8204-7b91-4c7d-a830-87baad61e256" alt="sign-in-to-github" style="width: 600px;">
     
   After signing in to GitHub, check the **Copilot status** in Visual Studio Code. Open VS Code and look for the GitHub Copilot icon in the lower-right corner of the status bar. This icon indicates that
   GitHub Copilot is active:

   <img src="https://github.com/user-attachments/assets/26ea980f-c39a-4487-b277-7acc78e1bbcf" alt="check-copilot-status-step-1" style="width: 600px;">
     
   Click the GitHub Copilot icon to open the Copilot status. The Copilot status should show **Ready**:

   <img src="https://github.com/user-attachments/assets/461fab17-8d17-45d5-9612-50934604cc07" alt="check-copilot-status-step-2" style="width: 600px;">  

### How to use GitHub Copilot (key features)

#### Get code completion suggestions
- **Automatic code suggestions**:</br>
  To get code suggestions from Copilot all you need to do is type code in your editor and Copilot automatically presents you code suggestions, to help you code more effectively.
  Below you see two simple examples.
  If you press enter after the `<title>` tag, Copilot will recognize that the next tag to add is the `<link>` tag. Or as the second example show, Copilot will add a pharagraph after the `<h1>`.
  You'll see the suggestions from Copilot in grey, and you can press the **Tab** key to accept it.
    
  <img src="https://github.com/user-attachments/assets/9d0133e9-813e-43ca-a198-8bdf4275c869" alt="automatic-suggestions" style="width: 600px;"> 

- **Use comments to get code suggestions**:</br>
  Below are examples of how GitHub Copilot provides code suggestions in HTML, CSS, or JS files based on comments:

  <img src="https://github.com/user-attachments/assets/fd6eeb5a-75c2-4a6b-82a2-c9696111433b" alt="suggestions-based-on-comments" style="width: 600px;">
    
- **Navigate between multiple suggestions**:</br>
  When GitHub Copilot suggests code in grey, there are often multiple options available. To view different suggestions, hover over the suggestion in the editor, and a control panel will appear.
  You can then use the arrow keys to navigate between the previous and next suggestions.

  <img src="https://github.com/user-attachments/assets/cff91c49-57ae-4f8e-a10c-4538d49f0e15" alt="navigate-suggestions-in-control-panel" style="width: 600px;">  

  Click **Accept** on the suggestion that best fits your needs.</br>

  You can also click the ellipsis to the right in the panel and select **Open GitHub Copilot** or press `Ctrl + Enter`. A new window will open in VS Code, displaying all the different solutions or suggestions.
  It may take a few seconds for Copilot to synthesize the available options before they are fully visible.

  <img src="https://github.com/user-attachments/assets/904ad6f2-6c53-452c-9ad7-a618db9aeb3f" alt="suggestion-window" style="width: 500px;">


#### Use Copilot inline chat
- **Improve existing code**: Copilot's inline chat is excellent for refactoring or improving existing code. With the inline chat you can ask Copilot for assistance in the moment, without switching context. 
  The Copilot Chat extension is automatically installed along with the GitHub Copilot extension.  

- **To use the inline chat**, press `Ctrl + I` on your keyboard, and a chat interface will appear in your editor. You can use this chat to ask questions about your code.

  <img src="https://github.com/user-attachments/assets/0bb16f87-d12a-4c41-a779-fd2e988d718f" alt="inline-chat-panel" style="width: 500px;">  

  <img src="https://github.com/user-attachments/assets/bc32fb61-e333-43c1-8973-70d3f8bcff21" alt="inline-chat-panel-with-question" style="width: 500px;"> 

  Copilot will return a response directly in the editor. Select **Accept** or press `Ctrl + Enter` to apply the proposed code changes.

  <img src="https://github.com/user-attachments/assets/36228173-9b6a-4f92-9d40-bc0d18a2807f" alt="inline-chat-panel-with-answer" style="width: 500px;">

- **Highlighting code**: To provide Copilot with more context about your request, you can highlight a range of code or text in the editor before pressing `Ctrl + I`.
   
#### Copilot Chat for general programming questions
- If you have general programming questions, Copilot Chat is a great tool for learning and exploring.
  The chat opens on the side, so it won’t interrupt your coding, and it keeps track of all your questions.
- You can access the Chat view from the Activity Bar or by pressing `Ctrl+Alt+I`.

  <img src="https://github.com/user-attachments/assets/c568d067-6a30-4969-81f8-9794af270795" alt="copilot-general-chat" style="width: 500px;">  

- Simply type your question into the chat input field and press `Enter` to submit your request to Copilot.

  <img src="https://github.com/user-attachments/assets/a149cabb-99b8-4226-9a65-1b83e7f07eda" alt="copilot-general-chat-question-and-answer" style="width: 500px;">  

- The chat response will include both text and a code block.
  The code block supports IntelliSense, allowing you to get information about methods and symbols by hovering over them or going to their definition.

- For more details on how to get the most out of the general chat and inline chat, visit [Copilot Chat Tutorial](https://code.visualstudio.com/docs/copilot/getting-started-chat) in VS Code Docs

## Conclusion

GitHub Copilot is a fantastic tool that makes coding more efficient and is particularly well-suited for repetitive tasks as well as for learning and exploring topics within programming. The combination of code completion, inline chat assistance, and a general chat for more exploratory and general questions allows you to stay focused where you are, instead of switching platforms and programs when problems and questions arise.

In many ways, GitHub Copilot has revolutionized the development process, making developers more productive by allowing them to spend more time on complex problems rather than writing hundreds of lines of streamlined and repetitive code. It helps reduce the time spent looking up syntax or documentation. For beginners, Copilot can act as a teacher, offering code suggestions that can be studied and learned from, especially in combination with the chat function. It will help beginners learn best practices and common patterns in programming. A major advantage is that GitHub Copilot works on several different IDEs, like Visual Studio Code, JetBrains, and Neovim, while also understanding many different programming languages. It is especially good at converting natural language into code, improving overall code quality, and reducing errors.

On the other hand, there are also some drawbacks. GitHub Copilot is trained on publicly available code, meaning one must be very aware of the risk of plagiarizing existing copyrighted code. It also has its limitations, especially in terms of data privacy, as it relies on cloud-based servers for code generation, which may not appeal to teams with strict security requirements.

There is also a risk that developers might rely too much on AI-generated code from Copilot. So, while it is a great tool for streamlining programming, it is still important for the developer to have a deep understanding of the code they write. Over-reliance on Copilot could lead to a decline in coding skills, reducing the ability to think critically and solve problems. The suggestions Copilot provides are good but not always perfect. It is essential for developers to remain vigilant and carefully review the generated code to ensure accuracy.

The future of GitHub Copilot looks bright. What we are seeing now is only the beginning, and after just a short time of use, it’s easy to see that this is a tool that is here to stay. As AI models continue to improve, we can expect even more advanced tools in the future that will handle more complex tasks. Everything from debugging to full-scale project management is something we can expect.


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
- [Medium - The Future of Coding: How GitHub Copilot AI is Transforming Software Development](https://medium.com/@thavinduwrites/the-future-of-coding-how-github-copilot-ai-is-transforming-software-development-565a3d78c88c)

## Additional Resources

- [Tabnine](https://www.tabnine.com/get-free-90-day-trial/?utm_term=tabnine&utm_campaign=%5BUS%5D+%7C+%5Ben%5D+%7C+%5Bdesktop%5D+%7C+%5BSearch:Brand%5D+%7C+%5BTabnine%5D&utm_source=adwords&utm_medium=ppc&hsa_acc=4311736126&hsa_cam=21073527735&hsa_grp=159292934283&hsa_ad=713438295761&hsa_src=g&hsa_tgt=kwd-915660947489&hsa_kw=tabnine&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQjwxsm3BhDrARIsAMtVz6MjGPO6-iw23omcaUwOxTGDUUIpC-ED_OTEzzI9an5t2Fv8nMmp1FMaApaAEALw_wcB)
- [Replit Ghostwriter](https://www.programai.co/?gad_source=1&gclid=Cj0KCQjwo8S3BhDeARIsAFRmkOOokZLt_LUXT3cBR3fYAMMU45tCfbhmfJb_TX9CtczEVtFSnugGR4gaAgwNEALw_wcB)
- [Codeium](https://codeium.com/)
- [Amazon Codewhisperer](https://docs.aws.amazon.com/codewhisperer/latest/userguide/what-is-cwspr.html)
- [Intellicode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)
  
## Authors

- [Elise Aurtande](https://github.com/EliseAur)
- [Bjørn Håvard Steinnes](https://github.com/bjornhaavard)
