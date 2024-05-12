---
title: AWS Amplify Case Study
author: Johan Lossius <JohanLossius>
tags: aws-amplify, case-study, baas, backend-as-a-service, cloud, aws, amazon-web-services, development-platforms
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Context: Why did I choose to do a case study on AWS Amplify?
Feel free to skip reading this part if only interested in the product specs.

For learning purposes I wanted to take on a summer project in the summer of 2024.
Specifically by building an old school forum, because I have always loved them.
A simple, yet highly functional forum.
That potentially could be used in real life afterwards, also for business purposes.
As a newbie frontend developer without any prior backend experience, I needed to choose the right backend product to help me achieve those goals.

And so the following concerns were considered:

1. Simplicity & ease of use
Firebase seemed like the best choice in terms of simplicity and out of the box usefulness, without prior experience. AWS Amplify and Supabase also seemed user friendly based on simple configuration and use. Although Supabase uses a relational database, that would have a steeper learning curve than NoSQL-databases. And for AWS Amplify users report feature complexity and more time consuming infrastructure management over time.

2. Feasibility
All of the considered BaaS-es seemed to be feasible technologies for building a simple forum. The only question was my skill, learning curve, and time frame for actually using them. As well as which technology I actually wanted to invest my time in for the long term usefulness.

3. GDPR compliance
Firebase: A few Google searches clarified that the auth. solution of Firebase is not GDPR compliant, due to US servers for the authentication. And so that would create a lot of complexity for users based in Norway and Europe.
AppWrite: I also considered AppWrite because then I would set up my own server, located in Norway, but that would require quite a bit of manual work of learning Docker, setting up the server myself, etc. And having no prior experience with that, it seemed risky to get stuck in these backend requirements.
Supabase: GDPR compliance seemed unavailable due to being HQ-ed in Singapore.
AWS Amplify: Amplify seemed to be the best alternative here, since AWS has put in extensive work in making their solution GDPR compliant. And since AWS Amplify can be customized by using most of the AWS ecosystem, this seemed like the safest route in terms of GDPR compliance, although more complex generally.

4. Pricing
For pricing; AppWrite is the only free solution although I would have to pay for web hosting myself. All the other solutions have either a freemium solution, or pay as you go pricing plan. Since the prices didn't seem too overwhelming for any of the solutions from the getgo and for a relatively simple solution, I decided to pick the BaaS that seemed a better fit without weighting the pricing too much.

# Conclusion on why case study on AWS Amplify:
Due to GDPR compliance and long term options for AWS Amplify, it seemed like the best option to use for the summer project since I'd rather invest my time and energy into something that  has long term potential.
However, feature complexity might kill my progress since I will also have a steep learning curve on the frontend for technologies like React, Vite, etc.
So I will use this case study to clarify whether my hypothesis is correct; is AWS Amplify really the best option for a newbie frontend developer, also wanting to build a viable long term solution?
Or will it put a full stop to my summer project plans if utilized, due to time constraints, steep learning curve, and potentially other challenges?

## Purpose: For whom is this AWS Amplify case study intended?
This case study is intended for anyone considering whether to build their tech product with AWS Amplify.
And particularly for newbeginners in development, since this product case study was written from the perspective of someone having never used a BaaS, very limited frontend development experience, and no backend experience.
I want to emphazise that reading a case study from someone having very little prior knowledge about a product can also be an advantage, since advanced users of f.ex. BaaS solutions, will know every in and out of the products and technology in general, and so what they might take for granted and describe as simple, might actually be highly complex.
While a newbeginner will answer the so-called silly questions - that could be highly useful and valuable to someone new to the topic.

So for what it's worth; here's my case study on AWS Amplify.

## References

- [Example.com](https://example.com)
- _Good Examples_ by John Doe, 1990
- The Example Podcast, Episode 1
- [Examples Explained](https://youtu.be/dQw4w9WgXcQ)

## Additional Resources

- [More about Examples](https://example.com)
- [Examples, the Full Course](https://youtu.be/dQw4w9WgXcQ)