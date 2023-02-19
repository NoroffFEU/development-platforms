---
title: Github Copilot Case Study
keywords: development platforms, machine learning, ai, programming
tags: Development platforms, Machine learning, AI, Programming, Github Copilot
sidebar: development-platforms
permalink: development-platforms/github-copilot.html
folder: development-platforms
---

# [Github Copilot](https://copilot.github.com/)

## Introduction

Github Copilot is a machine learning coding tool made to make development easier and faster trough automatic code completion and code suggestions. It is integrated right into VSC with an extension and works with several of the most common programming languages including Javascript, Python, Go and Typescript.

Copilot is based on OpenAI's codex, trained on billions of lines of code and allows the developer to generate code either by telling it how the logic should work trough a comment or by starting to write the code and letting it fill in the rest once it's got enough context.

## Brief History

Github Copilot is a collaboration between OpenAI and Github, first launched as a technical preview for visual studio code in june 2021. Support for JetBrains and Neovim came in october same year. Support for visual studio came in march of 2022. In june of 2022 Github announced that Copilot was out of beta and available for individual developers as a subscription service at 10$/month. In the middle of february 2023 Github launched Copilot for business, adding some additional features and priced at 19$/month per user.

## Features

Github Copilot offers a wide range of features to help developers write code faster and easier. The main features are:

- Code completion
- Code suggestions
- Code generation

In addition to that Github Copilot can also fill in boilerplate code like building a simple html page using just a few prompts to describe the page, It can fill in placeholder copy for example if you find lorem ipsum to be a bit to repetitive. One example of this is this document you are reading right now, as I am writing this Copilot is giving me real time suggestions and completions for the text I am writing and doing a surprisingly good job at it.

## Strengths

I think one of Copilot's biggest strengths is that it is really fast, the suggestions come almost instantly as I am writing and from my testing so far it doesn't seem to take a big toll on system performance. Other strengths include:

- Easy IDE integration
- Ok [pricing](https://copilot.github.com/pricing)
- Easy to use and very intuitive
- Good language support for most of the most common languages
- Good code suggestions and completions
- Possibility to use either to complete code or to generate new code based on comments
- Easy to install and setup
- 60 Days free trial

## Weaknesses

I would say one of it's biggest weaknesses is that it's not perfect. While the code suggestions and completions are really good they're not perfect and you will still have to read trough every line of code to make sure it's all correct and does what you expect. Another weakness is that it's not free. In my opinion the pricing is ok and seems worth it so far for me at least but I can see how some people might not be willing to pay for it. It also shares a weakness i've heard a lot of discussion about with chatGPT and other natural language models, that it can be wrong very convincingly. This is especially true when writing, like when writing this document. I've seen several suggestions that are completely wrong, like making suggestions to write that Copilot is free, that it support languages or ide's that it doesn't support and it keeps suggesting that it's still in beta. For instance, Copilot suggested this sentence to follow the last:

"I've also seen it suggest that it's not free and that it's not in beta. So it's not perfect and it can be wrong but it's still really good and I think it's worth the price."

This just highlights the fact that it does "lie" sometimes as i've never seen it suggest that it's not in beta or that it's not free. As for the coding side of it I'm not sure how often it will be wrong but I can see how it could be a problem if you're writing code that needs to be 100% correct, or if you don't have good routines for continuous testing and end up having to go back and debug a lot of code that you're not as familiar with as you would be if you'd written it yourself.

Another HUGE weakness is that it requires a internet connection to work. This could be a big problem for people that travel a lot or have a bad internet connection.

## Comparison

There are several other code completion and code suggestion tools out there, I have not tested any of them my self but I will compare some of they're features and pricing.

1. [Tabnine](https://www.tabnine.com/)

   - Superior IDE integration
   - Free tier for short code completion
   - Pro tier with whole line and full function code completion as well as natural language to code completion
   - Learns you're personal coding style and adjusts the ai accordingly
   - Possibility for local hosing
   - Greater language support

2. [Captain Stack](https://github.com/hieunc229/copilot-clone)

   - Free
   - Open source
   - Uses a combination of google, stack overflow and Github gist to generate code suggestions rather than an ai

3. [CodeGPT](https://www.codegpt.co/)
   - Free ish, depending on the ai api you choose to use
   - Open source
   - Uses an ai to generate personalized code suggestions

Based on my research Tabnine is the most popular option and it also seems to be the most feature rich. I would say the biggest advantages to using Tabnine over Copilot is that it can be hosted locally and that the ai is evolving and learning based on the developer(s) using it. It also supports more languages and more IDEs than Copilot.

As for the actual code completion and generation capabilities compared to Copilot I cant say for sure who is better, but given the fact that Tabnine learns based on user input to train the personal local ai model I would think Tabnine could become better than Copilot over time. It would probably also implement better into you're workflow as it would learn your personal coding style and adapt to it whereas Github Copilot is as far as I'm aware exclusively trained on open source and public code, hence it will not learn your personal coding style. It does however analyze the context and setting of you're code and adapt based on that.

As for privacy the clear winner here is Tabnine as it can be hosed locally and it will not use any of your personal code to train any other ai models. Copilot on the other hand <em>can</em> use your code to train the public ai model and it can also use your code snippets to generate suggestions for other developers.

There is also a legal component to this as Copilot's model is trained on both open source and public code, meaning that there could be intellectual property issues down the road which could impact the developers using Copilot. Tabnine on the other hand is exclusively trained on open source code for the public model and the local models learn from you're personal code and snippets in addition to the open source code used to train the public model. For this reason I would think that Tabnine is a better alternative for businesses and developers that need to be absolutely certain that the code they're writing is 100% original and that they're not infringing on any intellectual property rights.

As for the other two options mentioned, Captain Stack seems like a cool alternative if you are looking for a free open source alternative to make you're coding a little faster and I think the concept is cool but I don't think it's nearly as effective as either Copilot or Tabnine. CodeGPT seems like a cool concept and I'm sure there are instances where having the ability to choose what ai api you want to use could be useful but for the average developer just looking to improve their workflow I think Copilot and Tabnine are the better options.

## Summary

To summarize I think Github Copilot is an awesome tool and I will for sure keep using it after this assignment. Other than the IDE and git I would say Copilot, or Tabnine for that matter must be some of if not the most impactful tools to streamline and improve the development workflow and experience. The pricing might be a bit too steep for some, but it's definitely worth it to me. I might give Tabnine a shot later on as it seems like a great alternative tough it costs a bit more than Copilot to get the same features.

<em>The possible legal issues related to IP rights is something that's worth keeping an eye on as this could impact the developers using Copilot in the future.</em>

I think Copilot is a great tool for web developers specifically because it has support for all the major web languages, not only js, html and css but also typescript, ruby and php. It also includes at least partial support for frameworks like react and bootstrap. Another great feature is the possibility to fill in placeholder text that hold some relevance to the project you're working on. Instead of just using lorem ipsum you can ask Copilot to fill in more relevant copy until you have the time to write the actual copy yourself or until the copywriters have finished their work.

### Credits

- Kristoffer Mikkelsen

### Disclaimer

While writing this document Copilot have been active and I have used it to complete some sentences and for checking my spelling and wording. Any information provided by Copilot have been checked to make sure it is correct and edited to convey the information in the way I wanted to present it. Copilot's impact in the way I wrote this assignment was minor at best but I figured it might be worth mentioning.

#### References

- https://www.tabnine.com/blog/github-copilot-alternatives/
- https://github.blog/2023-02-14-github-copilot-for-business-is-now-available/
- https://docs.github.com/en/enterprise-cloud@latest/get-started/learning-about-github/github-language-support
- https://en.wikipedia.org/wiki/GitHub_Copilot
- https://docs.github.com/en/copilot
- https://github.com/features/copilot
- https://techcrunch.com/2022/12/08/github-launches-copilot-for-business-plan-as-legal-questions-remain-unresolved/?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAANRQeqyGFXwoTVdbKbBmx0PK40vz6Za33s1lGtOI0j5Bwlwo3MRNfzeqmMqlUXfsBqjbH3E65SuraadysJyliBp1wJNt3J_5wQ7smQebhj7gGuvBcgljzXHpOP5FljlM1s6uNhvVwBY_g3JqiqdugBabR0zNqqtvevnVfzjNlw_p
