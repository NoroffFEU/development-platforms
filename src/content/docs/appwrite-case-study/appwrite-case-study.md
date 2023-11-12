---
title: Appwrite Case Study
author: Sabina Kutniauske <saibia8>
tags: appwrite, baas, backend, development, open-source
---

<img src="/src/assets/baas/appwrite-logo.png" alt="Appwrite" width="100%" height="auto">

## Introduction

Appwrite is an open source, self-hosted, backend-as-a-service (BaaS) platform for quickly building backend services for the web, mobile, and beyond. What sets Appwrite apart is its commitment to putting you in control of your data. This powerful tool lets you effortlessly include crucial elements like user `authentication`, `databases`, `functions`, and `storage` in your projects. 
Appwrite is especially good when you want to focus on frontend development, and simply need a backend to perform common RESTful API tasks.<br>
Whether it's a small project or a large-scale project, Appwrite makes the process not only efficient but also an exciting thrill in application development! 


## Brief History

Appwrite history highlights:

- 2019: Founder & CEO Eldad Fux launches Appwrite as an open-source project.
- 2020: Appwrite gains momentum in the developer community for its simplicity and versatility.
- 2021: Appwrite becomes known for its modular architecture and security features.
- 2021 july: Appwrite introduces compatibility with additional coding languages, expanding its user base.
- 2022 june: Appwrite surpasses 10,000 stars on GitHub, underlining its continued growth and acceptance in the developer community.
- 2023 may 02: Appwrite Cloud is announced in public beta.
- 2023 september 22: Appwrite unveils a fresh brand identity.
- 2023 november 09: The latest release, version 1.4.11, showcases ongoing development and improvements.


## Main Features

The main goal of Appwrite is to provide developers with a comprehensive set of resources, allowing them to focus on building front-end applications without having to manage the server infrastructure.

### Key problems it solves:
- **Backend Simplification:** Appwrite reduces the burden of managing server-side infrastructure, databases, and authentication, allowing developers to focus on building user interfaces and application logic.

- **Cross-Platform Compatibility:** It addresses the challenge of creating and maintaining backend services that work seamlessly across various platforms, including web and mobile applications.

- **Security and Authentication:** Appwrite includes robust security features and authentication mechanisms, reducing the risk of vulnerabilities associated with user management and data protection.

### Usefulness to Developers:
- **Time and Effort Savings:** Developers can save time and effort by leveraging Appwrite's pre-built modules for common backend functionalities, such as user authentication, storage, and database management.

- **Scalability:** Appwrite's modular architecture and cloud compatibility make it scalable, adapting to the needs of both small projects and large-scale applications.

- **Community Support:** The open-source community surrounding Appwrite provides a valuable resource for developers, offering support, sharing insights, and contributing to the platform's continuous improvement.
hing for a specific reason.

## Market Comparison

Compared to Appwrite, Supabase, and Firebase, each platform brings unique benefits to developers. `Appwrite` stands out for its open-source nature and high customization, catering to those who prioritize community collaboration and flexibility. `Supabase`, built on PostgreSQL, offers a growing open-source alternative with robust real-time data support. `Firebase`, a well-established platform, excels in extensive documentation, a large community, and seamless integration with other Firebase services. The choice among these platforms depends on the specific needs and preferences of developers, considering factors such as customization, community support, and the nature of the project.

### Comparison table

| Feature                         | Appwrite                           | Supabase                           | Firebase                           |
|---------------------------------|------------------------------------|------------------------------------|------------------------------------|
| **Open Source**                 | Yes                                | Yes                                | No (Firebase itself, but some components are open source) |
| **Ease of Use**                 | High                               | High                               | High                               |
| **Backend Functionality**        | Comprehensive                      | Extensive                          | Comprehensive                      |
| **Community Support**            | Active                             | Growing                            | Large and Established             |
| **Scalability**                 | Yes                                | Yes                                | Yes                                |
| **Cross-Platform Support**       | Yes                                | Yes                                | Yes                                |
| **Authentication Mechanisms**    | Robust                             | Robust                             | Robust                             |
| **Customization**                | High                               | High                               | Moderate                           |
| **Integration Capabilities**     | Extensive                          | Growing                           | Extensive                          |
| **Real-time Data**               | Yes                                | Yes                                | Yes                                |
| **Serverless Functions**         | Yes                                | Yes                                | Yes                                |
| **Data Storage**                 | Multiple options                   | PostgreSQL                         | Realtime Database, Firestore       |
| **Cost**                         | Free (Open Source)                 | Free (Open Source)                 | Freemium Model, Pay-as-you-go      |
| **Documentation Quality**        | Good                               | Good                               | Excellent                         |

## Getting Started

### Installation of Appwrite
To install Appwrite on your local machine, you need to ensure you have the following requirements:

- Appwrite requires Docker Compose Version 2. You can check ([Docker desktop](https://www.docker.com/products/docker-desktop/)) for Docker installation.

- The minimum requirements to run Appwrite is as little as 1 CPU core and 2GB of RAM.

### Steps

1. Create your account ([Appwrite sign up](https://cloud.appwrite.io/register))

2. Name your first project.

3. Choose between two options:
   - Develop on a platform (web, Flutter, Apple, Android).
   - Integrate with your server using an API key or webhook.

4. The next installation steps depend on your choices, and you will be guided accordingly. 

Let's say we choose `web` and want to use `React`. Then, it will include the following steps: 
   > You can skip optional steps.
   1. **Create the name and hostname.** 
   The hostname should be localhost.
   
   2. **Create React project.**
Create a Vite project.
```bash
npm create vite@latest my-app -- --template react && cd my-app
```
4. **Install Appwrite.**
Install the JavaScript Appwrite SDK.
```bash
npm install appwrite
```
5. **Import Appwrite.**
Find your project's ID in the Settings page.
Create a new file src/lib/appwrite.js and add the following code to it, replace <YOUR_PROJECT_ID> with your project ID.
```bash
import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('<YOUR_PROJECT_ID>'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
```

6. **Create a login page.**
Add the following code to src/App.jsx.
```bash
import React, { useState } from 'react';
import { account, ID } from './lib/appwrite';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  async function login(email, password) {
    await account.createEmailSession(email, password);
    setLoggedInUser(await account.get());
  }

  return (
    <div>
      <p>
        {loggedInUser ? `Logged in as ${loggedInUser.name}` : 'Not logged in'}
      </p>

      <form>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />

        <button type="button" onClick={() => login(email, password)}>
          Login
        </button>

        <button
          type="button"
          onClick={async () => {
            await account.create(ID.unique(), email, password, name);
            login(email, password);
          }}
        >
          Register
        </button>

        <button
          type="button"
          onClick={async () => {
            await account.deleteSession('current');
            setLoggedInUser(null);
          }}
        >
          Logout
        </button>
      </form>
    </div>
  );
};

export default App;
```
7. **All set.**
Run your project with and open Localhost on Port 3000 in your browser.
```bash 
npm run dev -- --open --port 3000 
``` 

## Conclusion

Appwrite has a bright future with its consistent growth, updates, and community engagement. It's known for making backend development easier for web and mobile apps. It scales well, offering strong functionality and real-time data support. While there's limited information and fewer integrations compared to some, Appwrite excels at simplifying backend tasks. It's great for businesses prioritizing cross-platform compatibility and real-time features.

## References

- [Docs](https://appwrite.io/docs)
- [Github](https://github.com/appwrite)
- [React installation](https://appwrite.io/docs/quick-starts/react)
- [Public beta announcement](https://appwrite.io/blog/post/public-beta)
- [New brand](https://appwrite.io/blog/post/meet-the-new-appwrite)
- [Brand assets](https://appwrite.io/assets)
- [Introduction to Appwrite](https://medium.com/@h.makusota_24829/introduction-to-appwrite-618bb08ee3e4)
- [ChatGPT - OpenAI](https://openai.com/chatgpt)

## Additional Resources

- [Community](https://appwrite.io/community)
- [Discord](https://discord.com/invite/GSeTUeA)
- [Youtube](https://www.youtube.com/@Appwrite)
- [Twitter / X](https://twitter.com/appwrite)


