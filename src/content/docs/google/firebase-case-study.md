---
title: Firebase Case Study
author: Stein Arild Gansmoe (Arkuradev)
tags: firebase, google, case study, platform
---

## Introduction

Firebase began as a startup founded by **James Tamplin and Andrew Lee**. It started with a product called **Envolve**, a tool that enabled developers to add real-time chat to websites. Over time, they realized the underlying technology—real-time data sync—had broader use cases. This led to the creation of **Firebase Realtime Database**, a platform for syncing app data in real time.

## Brief History

- 2011: Firebase began as a startup founded by **James Tamplin and Andrew Lee**.
- 2012: Firebase is made available to the public.
- 2014: Firebase is aquired by Google.
- 2015: Divshot is merged with the Firebase-team.
- 2016: Firebase analytics is announced, and it also expands to become a BaaS platform.
- 2017: Google aquire Fabric and Crashlytics from Twitter, these services are added to Firebase.
- 2018: Firebase introduces **Machine Learning Kit** for on-device and cloud-based ML features.
- 2019: Cloud Firestore, replaced limitations of realtime databases.
- 2020: Developer Experience and Security.
- 2023: Firebase & Google Cloud Synergy.

## 🚀 Main Features of Firebase

Firebase provides a suite of tools and services to help developers build, improve and scale
web and mobile apps quickly. Below are its core features:

### 🔁 1. Realtime and Cloud Databases

- **Cloud Firestore**

A scalable, flexible NoSQL database with real-time data syncing, offline support, and strong querying capabilities.

- **Realtime Databases**
  A lightweight, JSON-based database that updates data across clients instantly.

### 🔐 2. Authentication

- Easy-to-use, secure user authentication.
- Have support for the following:
- Email/Password
- Google, Apple, Github, Facebook and twitter.
- Anonymous login
- Phone number auth
- Passkeys
- Multi-Factor authentication support.

### ☁️ 3. Cloud Functions

- Serverless backend code triggered by events:
- HTTP requests.
- Firestore changes.
- Authentication events.
- Cloud Storage uploads.
- Scales automatically, no server setup required.

### 🌐 4. Hosting

- Fast and secure web hosting for static files (HTML, CSS, JS).
- Features:
  - Global CDN
  - SSL by default (HTTPS)
  - Custom domains
  - One-command deployment

### 🧠 5. Machine Learning (ML Kit)

- Pre-built and custom on-device ML models.
- Includes:

  - Text recognition
  - Face and object detection
  - Barcode scanning
  - Language translation

  ### 📈 6. Analytics & Monitoring

- **Google Analytics for Firebase**  
  Free, unlimited app usage analytics.

- **Crashlytics**  
  Real-time crash reporting with detailed insights.

- **Performance Monitoring**  
  Detects performance bottlenecks in real-world usage.

### 🛡️ 7. Security and App Integrity

- **App Check**  
  Verifies that incoming requests come from your genuine app.

- **Firebase Security Rules**  
  Fine-grained control over who can access Firestore, Storage, etc.

  ### 🧪 8. Emulator Suite

- Local development environment for:
  - Firestore
  - Realtime Database
  - Functions
  - Auth
  - Hosting
- Great for testing before deploying.

### 🧰 9. Extensions and Integrations

- **Firebase Extensions**  
  Prebuilt functions like:

  - Resize images
  - Send emails with SendGrid
  - Integrate with Stripe or Algolia

- **Google Cloud Integration**  
  Seamless access to Cloud Storage, Pub/Sub, BigQuery, etc.

## ✅ Summary

Firebase’s main features support:

| Use Case              | Firebase Feature(s)                                   |
| --------------------- | ----------------------------------------------------- |
| Data storage          | Cloud Firestore, Realtime Database                    |
| User authentication   | Firebase Auth                                         |
| Serverless backend    | Cloud Functions                                       |
| Web hosting           | Firebase Hosting                                      |
| Machine learning      | ML Kit                                                |
| Analytics and crashes | Google Analytics, Crashlytics, Performance Monitoring |
| Security              | App Check, Security Rules                             |
| Local development     | Emulator Suite                                        |
| Ready-made tools      | Firebase Extensions                                   |

You may find this online tool useful for creating tables: https://www.tablesgenerator.com/markdown_tables

## Market Comparison

## 🔍 Market Comparison

Firebase is a proprietary Backend-as-a-Service (BaaS) platform developed by Google. It is primarily compared against both **open-source** and **other cloud-based solutions**.

### 🔄 Firebase vs Supabase (Open Source Alternative)

| Feature                | Firebase                                 | Supabase                                            |
| ---------------------- | ---------------------------------------- | --------------------------------------------------- |
| Database               | NoSQL (Firestore, Realtime DB)           | SQL (PostgreSQL)                                    |
| Real-time Sync         | Built-in                                 | Built-in via PostgreSQL + Realtime engine           |
| Authentication         | Built-in, multi-provider support         | Built-in, customizable                              |
| Hosting                | Static site hosting with CDN             | No built-in hosting                                 |
| Functions (Serverless) | Cloud Functions                          | Edge Functions (limited by region)                  |
| Open Source            | ❌ Proprietary                           | ✅ Fully Open Source                                |
| Pricing                | Free tier, then pay-as-you-go            | Generous free tier, open source self-host available |
| Local Development      | Firebase Emulator Suite                  | Supabase CLI & Docker setup                         |
| Ecosystem              | Tight Google Cloud + Flutter integration | Postgres-native ecosystem                           |

**Verdict:**  
Firebase is ideal for teams who want scalability, strong mobile SDKs, and don't want to manage infrastructure. Supabase is excellent for SQL-based projects, open-source enthusiasts, or those who want to self-host.

---

### ☁️ Firebase vs AWS Amplify

| Feature        | Firebase                             | AWS Amplify                       |
| -------------- | ------------------------------------ | --------------------------------- |
| Database       | Firestore (NoSQL), Realtime Database | DynamoDB, Aurora                  |
| Authentication | Firebase Auth                        | Amazon Cognito                    |
| Functions      | Cloud Functions                      | AWS Lambda                        |
| Hosting        | Firebase Hosting                     | Amplify Hosting                   |
| Analytics      | Google Analytics for Firebase        | Amazon Pinpoint                   |
| Ease of Use    | Simple, beginner-friendly            | More complex, AWS-native approach |
| Pricing        | Free tier + usage-based pricing      | Free tier + AWS pricing model     |

**Verdict:**  
Firebase is more beginner-friendly with faster setup, while AWS Amplify is more flexible and powerful for enterprise-scale applications but comes with steeper complexity.

## 🛠️ Getting Started

To get started with Firebase:

### 1. Create a Firebase Project

Go to [https://console.firebase.google.com](https://console.firebase.google.com) and click **"Add Project"**.

### 2. Add Firebase SDK to Your Project

#### Web (JavaScript):

```html
<script src="https://www.gstatic.com/firebasejs/10.x.x/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.x.x/firebase-auth.js"></script>
<script>
  const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "your-app.firebaseapp.com",
    projectId: "your-app",
    storageBucket: "your-app.appspot.com",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID",
  };
  firebase.initializeApp(firebaseConfig);
</script>
```

npm install firebase

```

#### Then in your app:
```

import { initializeApp } from "firebase/app";

const firebaseConfig = { /_ your config _/ };
const app = initializeApp(firebaseConfig);

```

### 3. Enable Products

 - In the Firebase Console, go to the **Build** section.
 - Enable services such as **Authentication**, **Firestore**, **Functions**, etc.

### 4. Use Emulator Suite (optional)

```

npm install -g firebase-tools
firebase init
firebase emulators:start

```



## Conclusion

This section can be used to summarize your findings. What are the main advantages and disadvantages of your chosen tool? What are the main use cases for this tool? What are the main limitations of this tool? What does the future look like for this tool?

## References

- [Example.com](https://example.com)
- _Good Examples_ by John Doe, 1990
- The Example Podcast, Episode 1
- [Examples Explained](https://youtu.be/dQw4w9WgXcQ)

## Additional Resources

- [More about Examples](https://example.com)
- [Examples, the Full Course](https://youtu.be/dQw4w9WgXcQ)

Test push after fresh reinstall!
```
