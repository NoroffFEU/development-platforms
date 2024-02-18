---
title: Sanity.io - Headless CMS
keywords: development platforms, sanity, headlesscms
tags: Development Platforms, Sanity, Headless CMS
---

## Introduction

This assessment will cover my experiences with sanity.io, I will also go in to headless CMS a bit. There is no understanding Sanity without understanding the basics of headless CMS. I will also reflect on why I think you should pick a headless CMS, and why it probably should be Sanity.
My hope is that after reading this report you will have a deeper understanding of how Sanity works, how we can use it to build pages and what the benefits of a headless CMS is.

##  The Headless way

At this stage I expect you to know what a content management system, also known as an CMS is, so instead of using time and words explaining it, I will rather tell you about headless. A headless CMS is a back-end only system built to make content accessible via a API access point to display on any device. Unlike traditional CMS, which is tied to a particular output (like a website), a headless CMS remains backend-focused and is completely cut off from the presentation layer (the frontend), hence the term «headless».

This allows developers to deliver content wherever it is needed: a mobile app, a website or any other device. The primary advantage of a headless CMS is the flexibility it offers.

Developers are not constrained by the built-in frontend system that traditional CMSs offer. Therefore you can use any language or framework to build your frontend, and that is one of my favorite things about it. After working with one language or one framework for a while, you might want to explore other opportunities, and with a headless CMS you can easily do it. This is also particularly beneficial in today's multi-channel world where content needs to be displayed on various devices and platforms. 

Furthermore, a headless CMS can improve performance as it only needs to deliver raw content, not render the actual presentation of the content in question. This can, and will most likely, lead to faster content delivery and page load times. It also easily allows for scalability, as you can scale both the frontend and backend independently based on your needs. However, a headless CMS might not be the best choice for everyone. It often requires a strong development team to build and maintain the frontend. In conclusion, a headless CMS offers flexibility, performance and scalability, but it requires a skilled development team and might not be as user-friendly for non-technical users.

## Let’s talk history
Headless CMS emerged as a response to the increasing need for a more flexible and versatile system for managing and delivering digital content. Traditional CMS platforms, like WordPress and Drupal, were designed with a specific use case in mind - managing content for websites. 

However with other digital platforms popping up everywhere, the need for a more flexible system became apparent. The term «headless CMS» was coined around 2013, referring to a CMS that has no dedicated frontend, and delivers content via an API. This allows developers to use any technology they prefer, while the CMS focuses solely on managing content. 

This marked a significant shift in the CMS landscape as we knew it, moving away from simple architectures towards more flexible, APIdriven architectures. Sanity is a relatively new player in the headless CMS market, having been founded four years later, in 2017. The founders of Sanity saw the need for a more flexible and efficient way to manage and distribute content. They designed Sanity as a platform for structured content, with benefits that I will talk with in the next chapter of this study.


## Building on Sanity

Sanity is a platform for structured content that comes with an open-source editing environment called Sanity Studio. As a headless CMS, Sanity allows you to build content infrastructure and deliver structured content to any device or channel. One of the key features of Sanity is its real-time collaboration capabilities. Multiple authors can work on the same document simultaneously, much like in Google Docs, if you ever worked in there. 

A feature a lot of content creators require or expect when working on projects. Sanity also offers a powerful querying language called GROQ (Graph-Relational Object Queries) that allows you to retrieve your data in the exact structure you need it, therefore you can customize your queries to give you the exact data you require for that component or page. 

GROQ also gives you the fundaments you need to build a very strong search engine. Sanity is also highly customizable. The editing environment, the Sanity Studio, is an open-source single-page application written in React.js and can therefore be tailored to your specific needs, providing a seamless content editing experience. 

In the Sanity Studio, you can define your own content models, input types, and views to create a custom CMS. You can completely create your own structure and menus. You can choose what fields and field sets you want, and you can describe them how you like. Optimizing the work flow of every user that needs to use your CMS. 

Furthermore, Sanity is built with a development-centric approach. It provides APIs for reading, writing and patching documents in real-time, and you can listen for changes in real-time with server-sent events. This makes it a powerful choice for developers who want full control over their content infrastructure. 
To conclude, Sanity is a flexible, customizable, very powerful and developerfriendly headless CMS that offers real-time collaboration and powerful querying capabilities. It’s a great choice for projects that require a tailored editing environment and real-time updates. It also allows for version control and backups very easily, and the best of all, they host your data with their powerful content delivery network. 


## My experiences

For the better parts of a month, I have been learning and testing out Sanity. Building my own Studio and the schemas that follows, I have been slowly but steadily getting the experience I need to build bigger projects. 

So that is what I did, I created a new project and started to build a structure. Schemas for Page settings, identity, and other configurations. Schemas for page types, page builders and components. 

Then it hit me… I am currently just building the back-end, and as a frontend developer I prefer to see what I build with graphics, not just queries with GROQ in the «Vision Tool» in the Studio. Don’t mistake my love for graphics as a hate for the Vision tool, the tool is brilliant, and better than most query tools I have ever tested. This is also because GROQ is brilliant, and really easy to learn. 

But here I was, deciding to build a front for this project that I still didn’t know anything about. I had no plan for the project, I just wanted to learn, so how could I decide on a front for it? I thought about just doing what I know already, maybe just using HTML, CSS and Portable text from Sanity. I thought about React, as the Studio is built in it, and because I know some React already. I did some research and it seemed like most people prefer to use Next.js with Sanity, so that is what I decided with. The server-side rendering in Next is perfect for the queries, and building components in Next is basically React. 

For me, being able to see the effects of the schemas I write is key. I can change them in a few seconds if I come up with some other field I need in that «document». Building a schema for a blog and I realize I need a field for a slug so I can create nice looking URLs? Easy. I just opened up my schema and added a field. Realizing I can’t have a blog post without SEO fields? Create a new field set, add a field for meta description, add an array of keywords. Oh, forgot about OpenGraph for a second, just a few more lines of code and everything is in place. That is what impressed me the most about Sanity. The highly customizable Studio that easily can be created and changed like you want it. 


## Advantages and conclusion

Sanity stands out from its competitors for several reasons, I will list some of my favorites.
1. **Real-time collaboration:** Sanity offers real-time collaboration capabilities, allowing multiple authors to work on the same document simultaneously. This feature is not commonly found in other headless CMS platforms, and can significantly improve the content creation and editing process.

2. **Customizable editing environment:** Sanity provides an opensource editing environment called the Sanity Studio. A Studio tool built in React.js, that allows the developers to fully customize a CMS interface built for their project. This lets you create blogs with specific blog-like inputs, and lets you create Authors with different inputs. This simplifies the process of the content creators on the way. 

3. **Powerful querying language:** Sanity uses a unique querying language called GROQ that allows developers to retrieve their data in the exact structure they need it. This can make it easier to work in complex data structures and can lead to more efficient data retrieval.

4. **Developer-friendly:** Sanity is built with a development-centric approach.

In conclusion, Sanity offers a range of features that set it apart from other headless CMS platforms. Their hosting is also cheap, and their CDNs are fast and reliable. There are plenty of plugins and help tools available as well, and there is plenty of documentation. 

This combined with the customizable nature of the open source studio, and the easy schema structure are some of the reasons that Sanity is preferred and used by a lot of big customers and developer teams. With customers like Nike, Puma and Shopify, and a whopping 20 billion API / CDN requests every month, we can easily say that Sanity is popular, and that is for a reason.



### Credits

- Elisabeth Trondsen (github.com/bettytro)

### References

sanity.io/docs


