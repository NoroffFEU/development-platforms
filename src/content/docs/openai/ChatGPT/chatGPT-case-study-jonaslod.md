---
title: ChatGPT
keywords: development platforms, machine learning, generative ai, text bot, natural language processing, NLP, GPT
tags: Development Platforms, Machine Learning, Generative AI, Text Bot, Natural Language Processing, NLP, GPT
---

## Introduction

ChatGPT is a natural language processing tool developed by [OpenAI](https://openai.com/), released in November 2022. Since its release, it has gained worldwide traction from the tech-industry and the general public. The chatbot can answer open ended questions, and assist users with tasks. Many are amazed about how human-like ChatGPTs responses are, and some are concerned about their jobs being threatened in the near future.

ChatGPT is a natural language processing (NLP) tool driven by artificial intelligence technology. Due to being a NLP tool, the chatbot is trained to predict the next most likely word occurring in a given sentence. The big selling point of ChatGPT is that its input comes from a diverse range of sources including news articles, websites, and books.

## Brief History

ChatGPT is part of a family of models developed by OpenAI that use the _Generative Pre-trained Transformer_ (GPT) architecture. The original GPT model was released in 2018, with each iteration improving the quality of the generated text. The history of ChatGPT itself is short, but there are some previous events that contribute to understanding where ChatGPT, chatbots and AI is today.

- 1950s: Alan Turing, the pioneering British computer scientist, publishes “Computing Machinery and Intelligence”, where he proposes that if a machine can convince a human they're talking to another human, then the machine has intelligence. Later this year, he developed a test called the “Turing Test” to assess machine intelligence.

- 1966: Joseph Weizenbaum, a German computer scientist and Professor at Massachusetts Institute of Technology, developed the program ELIZA inspired by Turing's paper. Eliza's purpose was to trick humans into believing they were chatting with another human and it's considered the first chat bot in human history. It didn't pass the Turing Test.

- 1972: Kenneth Colby, a professor of psychiatry at Stanford University, develops Parry to study the human mind through computer models.

- 1983: William Chamberlain and Thomas Etter create RACTER, a chat bot whose aim is to entertain people who interact with it.

- 2000s: ALICE (Artificial Language Internet Computer Entity) was developed. Although it didn't pass the Turing Test, it became the foundation for most chatbots that exist today.

- 2010: Apple launches their virtual assistant Siri.

- 23rd March 2016: Microsoft releases Tay, a Twitter chat bot that was shut down shortly after because it learnt offensive language.

- 6th November 2016: Amazon launches their virtual assistant Alexa.

- 11th June 2018: OpenAI releases "Improving Language Understanding by Generative Pre-Training", a paper presenting the differences between natural language processing (NLP) models and GPT.

- November 2019: OpenAI launches GPT-2 as a "direct scale-up" of GPT.

- July 2020: GPT-3 is introduced in beta testing mode.

- 29th June 2021: GitHub releases GitHub Copilot, developed in collaboration with OpenAI and based on GPT-3.

- 5th August 2022: Meta launches Blenderbot 3, the company's most advanced AI chatbot to date.

- 30th November 2022: OpenAI launches ChatGPT based on the GPT-3.5 model. It gained 1 million users within 5 days of its release, whereas other successful applications needed months to achieve the first million users. For instance, Netflix achieved its first million in 40 months, Facebook in 10 months, and Instagram in 2.5 months.

- February 2023: Meta AI releases LLaMA (Large Language Model Meta AI)

- 6th Februrary 2023: Google annonces Bard, a conversational chatbot AI powered by Meta AI's LLaMA

- 14th March 2023: GPT-4 is released. It was made publicly avaliable in a limited fashion via ChatGPT Plus, with access to a commercial API being provided through a waitlist.

- 30th March 2023: AutoGPT is released

- 2023: BabyAGI and JARVIS/HuggingGPT is released

## Features

ChatGPT has the ability to remember previous questions asked in a chat, enabling it to effectively interact with humans in a conversational manner. The model was trained on a vast amount of corpus data covering a wide range of topics and styles, making its potential uses diverse.

When asked about what tasks it could assist with (screenshot #1), ChatGPT answered:

```
I can help with a wide range of tasks, including:

1. Answering questions: I can provide information on a variety of topics, including history, science, geography, and more.
2. Writing assistance: I can help with writing tasks such as generating ideas, improving grammar and syntax, and providing suggestions for style and tone.
3. Translation: I can translate text between many different languages.
4. Creative tasks: I can help with creative tasks such as generating ideas for stories, poems, or other written works.
5. Information retrieval: I can help retrieve information from large databases, websites, or other sources.
6. Personalized assistance: I can provide personalized recommendations and suggestions based on a user's preferences, history, or behavior.
7. Customer service: I can assist with customer service inquiries and provide support for a wide range of products and services.

These are just a few examples of the many tasks that I can help with.

```

The bot can produce human-like text in several languages, making it suitable for writing essays, poems, bedtime stories, news articles, and even scientific abstracts. The information provided by ChatGPT might not be reliable in all cases, but the text bot is able to mimic academic language perfectly. It can also improve grammar, explain complex ideas in simple terms, and solve mathematical problems, making it a suitable tool for students who need assistance with their assignments.

One of the most relevant features for web and software development is its ability to generate code snippets in different programming languages including JavaScript, Java, Python, C++, C#, and Ruby. A myriad of videos can be found on YouTube explaining how ChatGPT built entire apps for them, but it is worth mentioning that the code usually contains bugs or it isn't completely accurate. Therefore, the building process requires a human developer behind it who can either debug or give further instructions to ChatGPT on how it can fix its own bugs. Nevertheless, the bot has proven to be an exceptional debugging assistant tool. Since resolving code issues involves a lot of time spent on reading documentation, Google searches, and StackOverflow, ChatGPT can significantly increase developers productivity by providing possible solutions in a matter of seconds. All the developer needs to do is copy/paste the code into the chat line and explain what it's supposed to do and what error it's throwing.

ChatGPT is currently free to use. OpenAI has announced on [Twitter](https://twitter.com) that it's piloting a subscription plan that offers faster response times and reliability during peak hours. At the time of writing this report, the plan costs $20/month. The free tier will still be available to the public.

OpenAI have released an API for accessing the AI models they have developed. On their [official website](https://openai.com/blog/openai-api) they state:
'_Unlike most AI systems which are designed for one use-case, the API today provides a general-purpose “text in, text out” interface, allowing users to try it on virtually any English language task. You can now request access in order to integrate the API into your product, develop an entirely new application, or help us explore the strengths and limits of this technology._'

The API will return a text completion, from a given text prompt, attempting to match the pattern it was given. It can be "programmed" by providing some examples of what you'd like it to do. The API currently runs models with weights from the GPT-3 family.

### How it works

ChatGPT uses a deep neural network architecture called a Transformer, which was introduced in 2017. Transformers are designed to process sequential data, such as text, and are particularly well-suited to generating text that is coherent and grammatically correct. Since it is trained using a large amount of text data, it learns the statistical patterns and relationships that exist within human language. When a user inputs a prompt, ChatGPT uses this knowledge to generate a response that is relevant.
It is worth mentioning, in regards to ChatGPT, that due to the sheer size and complexity of the algorithm, exactly how it works cannot be known.

## Strengths

ChatGPT can be used universally. It isn't limited to English speakers, supporting many different languages. Nor does it limit users by their intellect, given its ability to explain complex concepts in simple terms. Additionally, it can assist people in their everyday life by outlining meal plans or helping to organise their days, as well as it can aid in a variety of industries like journalism, education, business development, and software development. This makes it a very versatile tool.

In the context of software development, its ability to increase a developer's productivity is its greatest strength. If the tool is used appropriately, it can help us be more efficient by decreasing the time we spend planning or reading how to do something. It is especially useful for students or developers in the early stage of their careers. Finding the answer that solves an issue requires knowledge of technical terms that students often forget or don't yet have - having the opportunity to explain the problem in simple terms is, therefore, a great advantage.

The above applies as well when learning to read and handle errors. Errors may look like gibberish at first and you have to learn to interpret them. Being provided with an explanation that beginner developers can understand more easily helps bridging that gap. Moreover, by freeing up senior developer time from this task, the learning timeline can be reduced significantly. Additionally, a senior developer's ability to effectively communicate information can vary greatly, and a skilled senior developer may not always be a skilled teacher.

The variety of subjects it was trained in is also beneficial to developers. Not only is the bot able to help in several programming languages, but it's also able to answer questions about hosting services, cms, databases, and git, amongst others. This feature makes the bot also ideal for practising for interview questions. You can even ask it to be your interviewer: it will give you a set of questions, and if your answers are incomplete it will fill in for you.

The relevance of this tool to senior developers and systems architects lies in its capacity to accelerate the acquisition of new skills and offer a solid base for learning. Furthermore, it can also pinpoint areas of unfamiliarity, making it an attractive and valuable asset for these professionals who typically need to be updated on the latest advancements in their field.

ChatGPT can be fine-tuned on specific tasks and datasets to improve its performance for particular use cases. This means that organisations can train ChatGPT to specialise in certain types of writing, such as legal or medical writing, or to incorporate domain-specific language and terminology.

## Weaknesses

Despite its many possible uses and strengths, this tool comes with a series of limitations that are important to take into account. One critical issue is its lack of factual correctness at times. The bot may provide answers that are factually incorrect, but in such an assertive manner it could be difficult for an untrained person to realise, also known as "hallucination". Moreover, it gives no references on where it took the data from. In order to avoid the spread of misinformation, users should double check the answers by consulting reliable sources of information in the subject matter. Additionally, it tends to be unpredictable and unstable. This means that users may avoid content moderation by repeatedly asking the same question in different ways.

Due to the human trainers rewarding longer answers for their appearance of being more comprehensive, the bot tends to be excessively verbose. This doesn't always add quality to the responses since the same information is being repeated in different paragraphs with a slight change in phrasing. This is a major giveaway that might make it easy for a human to realise when a text has been written by an AI tool, and therefore not reliable for producing important texts for university or work.

The model also presents limitations in terms of server capacity. It is at times unreachable due to the amount of people trying to use the service at the same time. ChatGPT, as well as other NLP systems are very resource-intensive and can be expensive to run and scale. This is being addressed by offering a subscription plan.

Furthermore, it cannot make internet searches to find new sources of information, being limited to the data it was fed during its training. Although the quantity of data was massive, the training finished in 2021 which makes it difficult to get information on subjects that are constantly being updated / current affairs.

An upcoming challenge for OpenAI is training the next iteration of the model. They will need to make an effort to exclude any text that ChatGPT has generated since its release to avoid the risk of creating a feedback loop of misinformation. This is because ChatGTP may have received false information from users.

There is no consistent way of accurately separating text written by humans and ChatGPT. This might be seen as a strength by many, but it could also be exploited by some. Students might try to use ChatGPT to cheat on school work and exams, and it will be difficult for teachers to differentiate.

ChatGPT also lacks some human aspects, mainly creativity and the ability to create new ideas. All its output is generated based on existing text written by humans. It might be able to create original sentences, based on existing knowledge, but it is (currently) unable to create something new out of nothing.

## Comparison

ChatGPT is not the first chatbot on the market. Most companies' customer service departments offer their users the possibility to solve their problems in real-time by chatting with a bot. Some customer service chatbots are trained on a set of questions and answers. This results in less adaptability than ChatGPT. If the chatbot is presented with a complex question / task, and the chatbot is unable to assist, the user is usually transferred to a customer service employee. The chatbot's knowledge is limited to the task they're designed to carry out. For example, a bank chatbot can't help with debugging code and a shipping service chatbot cannot assist authors in writing essays. ChatGPT, however, is not constrained to a specific activity, as it was trained using a large amount of data in different topics and styles.

ChatGPT is one of several NLP models that are capable of generating human-like text. Some of the other models that are commonly used for this purpose include Google's Meena, Microsoft's XiaoIce, and Facebook's Blender. Compared to these models, ChatGPT is generally considered to be more versatile and capable of generating text in a wider range of styles and genres. However, it also tends to generate more irrelevant or nonsensical responses than some of the other models. There have been some recent releases in 2023 as well, including Googles's LaMDA, Meta AI's LLaMA and Alpaca.

## Summary

ChatGPT has quickly made its impact on the modern world. It has many use cases and possibilities, but many have expressed their concern about ChatGPT and other AI tools replacing their jobs. As the technology improves, these models might be capable of better understanding irony, sarcasm, jokes, human emotions, and the nuances introduced by cultural differences. This would make them extremely powerful and suitable for sectors like psychiatry and medicine.

Although technologies like ChatGPT can be utilised in a wide range of fields, it is still not able to mimic human creativity.

As far as software development is concerned, ChatGPT can write code faster than a human, but not more reliably. It requires human supervision to ensure it's working as intended. Even if you ask the chatbot to automate testing, these tests may also contain bugs. Replacing a human proves not to be so easy after all. Instead, this type of technology is most useful to boost productivity - to assist human beings in their daily tasks. It is obviously more efficient to ask a question and obtain a response in seconds than to post it on [stackoverflow](https://stackoverflow.com/) and wait for other developers to read our code and provide an answer. It is also easier to read one response than sift through dozens of pages from a Google search. This is why replacing an entire staff with bots is unlikely to happen in the near future.

## Credits

- Jonas Lødøen ([jonaslod](https://github.com/jonaslod))

## References

### Original Material

- [ChatGPT - A case study - github/Melisa-Zorraindo](https://github.com/NoroffFEU/development-platforms/blob/main/case-studies/chatGPT-case-study-Melisa-Zorraindo.md)
- [ChatGPT case study - github/akeek](https://github.com/NoroffFEU/development-platforms/blob/main/case-studies/chatGPT-case-study.md)

### Articles

- https://platform.openai.com/docs/models/overview
- https://openai.com/blog/chatgpt
- https://openai.com/blog/openai-api
- https://en.wikipedia.org/wiki/GPT-4
- https://en.wikipedia.org/wiki/Auto-GPT
- https://en.wikipedia.org/wiki/LLaMA
- https://en.wikipedia.org/wiki/LaMDA#Bard

## Screenshots

1. Asking ChatGPT what it can assist with

![chatgpt-help-with](https://user-images.githubusercontent.com/95305401/231838625-72866f50-319a-4507-b73e-68076ac09276.PNG)
