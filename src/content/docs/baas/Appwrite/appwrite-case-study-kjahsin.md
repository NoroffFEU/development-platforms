---
title: Appwrite The Wedding Quiz Genie
author: kJAHsin
tags: appwrite, dbaas
---

# Appwrite: The Wedding Quiz Genie

## Introduction

Appwrite is an open-source platform that, among its many capabilities, offers a robust Database as a Service (DBaaS) solution, simplifying data management for developers looking to build web and mobile applications. While it's technically a Backend-as-a-Service (BaaS) with a broad suite of tools --_including authentication, file storage, and real-time updates_-- its database functionality stands out as a powerful, standalone feature. This document presents a case study examining how Appwrite's database service powered an interactive wedding quiz application, showcased in the GitHub repository [quiz_bryllup](https://github.com/kJAHsin/quiz_bryllup). As the best man at my friend's wedding, I faced the nerve-wracking task of delivering a speech --_not my strong suit_. To ease my nerves and pad out my time in the spotlight, I created this quiz to entertain guests, relying solely on Appwrite's database to store and manage content. This project highlights how Appwrite can streamline data handling and deliver an engaging experience, even for a jittery amateur like yours truly.

## Brief History

Appwrite was launched in 2019 by Eldad Fux as an open-source alternative to proprietary BaaS platforms like Firebase, with a mission to empower developers with flexible, self-hosted backend tools. Its database service, a cornerstone of the platform, has evolved significantly since inception, gaining features like enhanced querying, scalability, and security tailored for modern applications. This growth has been spotlighted in educational content, including YouTube collaborations with developers like Dennis Ivy, who has produced numerous tutorials showcasing Appwrite's capabilities, and Florin Pop, creator of iCodeThis -- the platform that aided me in honing my skills before tackling this project. My wedding quiz application, hosted [here](https://github.com/kJAHsin/quiz_bryllup) and deployed with Netlify, is a personal contribution to this ecosystem. Built to entertain guests at a friend's wedding where I served as best man, it leverages Appwrite's database service to manage quiz content efficiently -- and to save me from stuttering nervously in front of 100 people.

## Main Features

The wedding quiz application leveraged Appwrite's database capabilities to forge an engaging, interactive experience for the guests. Here are some of the key attributes that gave this endeavor life, with focus on how Appwrite's capabilites were utilized:

- **Simplified User Authentication**: Since the quiz was a one-off event, I kept the authentication simple. Guests entered their email, and I pre-set a password to be entered on login.  This allowed me to track individual scores without expecting senior citizens to navigate a registration form before the evening concluded. 

- **Quiz Management**: Appwrite's database powered the quiz by storing and managing all the essential data. I set up collections like _questions_ for quiz items, answers for _response_ options, and _scores_ to track the player's cumulative score. Appwrite's straightforward dashboard made it easy to organize these collections, ensuring the quiz ran smoothly start to finish. No issues whatsoever.

- **Real-Time Scoring**: To keep the energy high, scores updated in real-time as guests submitted their answers. This was made possible by Appwrite's real-time features, which let the application subscribe to database changes and instantly reflect them on the frontend. Here's a small example from the script.js file.
 ```
database.subscribe('collections.scores.documents', (response) => {
  updateScoreUI(response.events);
});
 ```
This code snippet listens for updates to the _scores_ collection and refreshes the UI whenever a new score is recorded, keeping everyone in the loop and the competition lively.

- **Stress-Relief Mechanism**: Beyond the tech, the quiz had a hidden perk --_it helped me sweat less during my speech! While guests were busy tapping away at their phones, fully engrossed in the quiz, I got a few precious minutes to steady my nerves and catch my breath. Appwrite's reliable database kept everything running seamlessly, so I could focus on not melting under pressure.

### Feature Table

| Feature            | Description                                                                 |
|--------------------|-----------------------------------------------------------------------------|
| Simplified User Auth| Guests used their email and a preset password for quick, trackable participation.                  |
| Database Management    | Stored quiz _questions_, _answers_, and _scores_ in Appwrite's easy-to-manage collections.        |
| Real-Time Scoring  | Instant score updates as guests participate, powered by real-time APIs.     |
| Stress-Relief Mechanism| Gave me a breather during the speech while guests enjoyed the quiz "smoke and mirrors."                     |

## Market Comparison

Appwrite goes head-to-head with BaaS giants like Firebase, Supabase, and Parse. Its database service, however, brings some unique panache to the table --_especially when I used it for my wedding quiz project_. Let's break it down:

- **Open-Source Advantage**: Appwrite's open-source vibe is a subtle "stick it to the man" for devs tired of proprietary platforms like Firebase holding their code hostage. It's not merely software, it's also a mild rebellion against vendor lock-in. For my wedding quiz, this meant I could tweak and deploy the database my way. Firebase’s Firestore excels with real-time listeners, making it ideal for apps needing instant updates, whereas Appwrite offers more control over subscriptions, which suited my quiz’s real-time scoring needs. Meanwhile, Supabase leverages PostgreSQL’s relational power, offering advanced querying that Appwrite’s simpler key-value approach doesn’t match.

- **Cost Efficiency**: I built the whole backend (entire app, actually) for free, all thanks to the self-hosting option and free tier. In many cases free tiers are simply bait, but here it was possible to run the entire project without any overhead.
- **Feature Breadth**: Appwrite provides a full suite of services—authentication, database, storage, and real-time updates—similar to Firebase, but with the added flexibility of self-hosting. Supabase, while strong in database management with PostgreSQL, lacks the same breadth of built-in services.
- **Ease of Use**: Appwrite’s intuitive dashboard and well-documented APIs rival Firebase’s developer-friendly experience, though it may require more setup effort due to its self-hosted nature.

### Comparison Table

| Platform   | Open-Source | Self-Hostable | Cost Model         | Key Strength                     |
|------------|-------------|---------------|--------------------|----------------------------------|
| Appwrite   | Yes         | Yes           | Free (self-hosted) | Flexibility and control          |
| Firebase   | No          | No            | Usage-based        | Seamless integration with Google |
| Supabase   | Yes         | Yes           | Free tier + paid   | PostgreSQL focus                 |

Appwrite’s open-source model and comprehensive feature set make it a standout choice for developers prioritizing customization and cost savings over fully managed cloud solutions. Unlike fully managed solutions like Firebase, Appwrite’s self-hosted nature requires DevOps know-how, which could overwhelm developers new to server management.

## Getting Started

To build a similar wedding quiz application using Appwrite, follow these steps:

1. **Install Appwrite**: Deploy Appwrite on your server or a cloud provider. Refer to the [Appwrite installation guide](https://appwrite.io/docs/installation) for detailed instructions.
2. **Create a Project**: In the Appwrite dashboard, set up a new project and enable services like authentication and database.
3. **Set Up the Database**: Create collections for quizzes (e.g., questions and answers) and user responses. Define attributes like question text, options, and scores.
4. **Configure Authentication**: Enable email/password or OAuth logins to allow guests to sign in securely.
5. **Develop the Frontend**: Use a framework like React or Vue.js, integrating Appwrite’s SDK to fetch quiz data, submit answers, and display real-time scores.
6. **Test and Deploy**: Test the application locally, then deploy it to a hosting service, ensuring the Appwrite instance is accessible.

For a hands-on example, explore the [quiz_bryllup repository](https://github.com/kJAHsin/quiz_bryllup) and adapt its code to your needs.

## Conclusion

Appwrite proves to be a versatile and powerful BaaS platform, as evidenced by its use in the wedding quiz application. Its main advantages—open-source flexibility, self-hosting capabilities, and a rich feature set—make it ideal for developers building scalable, interactive projects with minimal backend overhead. While it requires more initial setup than fully managed solutions like Firebase, its cost-effectiveness and control outweigh this for many use cases. Looking ahead, Appwrite’s growing community and feature roadmap suggest it will continue to be a strong contender in the BaaS market, particularly for event-driven and community-focused applications. Appwrite could stand out even more by adding built-in database usage analytics, saving developers from manual monitoring and optimization. That being said, for developers craving freedom and flexibility, Appwrite is unbeatable—it’s the Swiss Army knife of backend tools, delivering power without the corporate price tag. With 50+ guests interacting with the quiz flawlessly, without any bandwidth overloads, proving it could handle real-world pressure, cementing my trust in its reliability.

## References

- [Appwrite Official Website](https://appwrite.io)
- [Appwrite GitHub Repository](https://github.com/appwrite/appwrite)
- [quiz_bryllup GitHub Repository](https://github.com/kJAHsin/quiz_bryllup)

## Additional Resources

- [Appwrite Documentation](https://appwrite.io/docs)
- [Real-Time Features in Appwrite](https://appwrite.io/docs/realtime)
- [Appwrite SDKs](https://appwrite.io/docs/sdks)