<img src="../../../../assets/baas/Firebase/jbr/Primary_Horizontal_Lockup_Full_Color.png" id="top" />

<a href="#top" class="back-to-top">Back to Top</a>

## Introduction

Firebase is a comprehensive cloud-based development platform provided by Google, designed to support applications of all sizes, from small projects to large-scale enterprises. As a Backend-as-a-Service (BaaS) solution, Firebase offers a suite of tools and services that streamline the development process, including real-time databases, authentication, storage, hosting, and more. This robust platform enables developers to focus on creating exceptional user experiences without the need to manage backend infrastructure, making app development faster and more efficient.

Originally created to simplify data storage and transfer for real-time applications, Firebase has evolved into a versatile SDK compatible with multiple platforms. Its integration with nearly 20 Google products, such as Google Analytics and Ads, further enhances its capabilities. Widely adopted by developers worldwide, Firebase's comprehensive features and scalability make it an ideal choice for building, improving, and growing web and mobile applications.

<details style="margin-bottom: 40px">
  <summary style="color:salmon; user-select: none; cursor: pointer;"><strong>Click to expand Firebase: What it is vs What it's not</strong></summary>

| **What it is**                                                                         | **What it's not**                                                                                           |
| -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| - A comprehensive BaaS platform designed to simplify app development.                  | - Not a traditional SQL database solution; it uses NoSQL for real-time data.                                |
| - Provides real-time data synchronization with Firestore and Realtime Database.        | - Not intended for complex relational data structures or transactions.                                      |
| - Offers seamless integration with Google Cloud Platform and other Google services.    | - Not an open-source platform; it is fully managed by Google.                                               |
| - Ideal for rapid development and prototyping with minimal backend management.         | - Not suitable for applications requiring extensive custom backend logic.                                   |
| - Scales automatically to handle increased user loads and data storage.                | - Not a cost-effective solution for very high-volume or enterprise-level applications without optimization. |
| - Provides a wide range of services, including authentication, hosting, and analytics. | - Not a self-hosted solution; it requires reliance on Google's infrastructure.                              |

</details>

## Brief History

## Main Features

## Market Comparison

## Getting Started

### **Firebase Project Setup Guide**

#### 1. **Create a Firebase Account**

- Visit the [Firebase Console](https://console.firebase.google.com/).
- Sign in with your Google account or create one if you don't have it.

#### 2. **Create a New Project**

- Click on **"Add project"** and follow the prompts to name your project.
- Configure Google Analytics settings if desired, then click **"Create project"**.

#### 3. **Register Your App**

- In the Firebase Console, click on the web icon (`</>`) to set up Firebase for a web app.
- Register your app with a nickname and optionally set up Firebase Hosting.
- Click **"Register app"**.

#### 4. **Add Firebase SDK to Your Project**

- After registering, you'll see a setup screen with a Firebase configuration object.
- Copy the configuration object, which looks like this:

<details style="margin-bottom: 10px">
  <summary style="color:salmon; user-select: none; cursor: pointer;"><strong >Click to see Configuration</strong></summary>

```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id",
};
```

</details>

#### 5. **Install Firebase SDK**

- In your project directory, run:
  ```sh
  npm install firebase
  ```
- Initialize Firebase in your app with the configuration object:
  ```javascript
  import { initializeApp } from "firebase/app";
  const firebaseApp = initializeApp(firebaseConfig);
  ```

#### 6. **Enable Desired Services**

- In the Firebase Console, navigate to the desired services (e.g., Firestore, Authentication) and follow the setup instructions.

#### 7. **Install Firebase CLI (Optional)**

- If you need to deploy to Firebase Hosting or use other CLI features, install it globally:
  ```sh
  npm install -g firebase-tools
  ```
- Log in and initialize Firebase in your project:
  ```sh
  firebase login
  firebase init
  ```

#### 8. **Deploy Your App (Optional)**

- If using Firebase Hosting, deploy your app with:
  ```sh
  firebase deploy
  ```

---

## Pricing

Firebase uses a pay-as-you-go pricing model that makes it flexible for developers at different stages of their projects. It offers a free tier, called the Spark Plan, which is great for beginners or small apps. This plan comes with generous limits for features like authentication, database usage, and hosting, making it ideal for testing or small-scale prototypes.

For larger or more demanding apps, Firebase provides the Blaze Plan, where you only pay for what you use. While this model supports scalability, costs can add up quickly if your app requires heavy database usage, extensive reads/writes, or large amounts of cloud storage. Keeping track of your usage is important to avoid unexpected bills.

## Conclusion

Firebase is a popular choice among developers, offering a powerful platform that simplifies app development. Its seamless integration with Google services and features like real-time data synchronization, authentication, and hosting makes Firebase an excellent choice for creating scalable and efficient applications. The free tier is a great starting point for smaller projects, but costs can escalate quickly as your app grows. This is an important consideration for larger applications.

Firebase is beginner-friendly and packed with features, but this can lead to vendor lock-in, which may limit your flexibility in the long run. Developers looking for more customization, open-source options, or SQL-first solutions might find platforms like Supabase, AWS Amplify, or MongoDB better suited to their needs.

All in all, Firebase’s balance of ease of use, and advanced functionality makes it an attractive option, especially for projects that benefit from its real-time capabilities and tight integration with Google’s ecosystem. However, evaluating the specific needs of your project will help determine if Firebase or an alternative platform is the best fit.

## References

**Firebase Documentation**

- [Firebase Getting Started](https://firebase.google.com/docs/build)
- [Firebase Authentication](https://firebase.google.com/docs/auth)
- [Firebase Cloud Firestore](https://firebase.google.com/docs/firestore)
- [Firebase Realtime Database](https://firebase.google.com/docs/database)
- [Firebase Cloud Storage for Firebase](https://firebase.google.com/docs/storage)
- [Firebase Security Rules](https://firebase.google.com/docs/rules)
- [Firebase Hosting](https://firebase.google.com/docs/hosting)

**Firebase Plans and Pricing**

- [Firebase Payment Plans](https://firebase.google.com/pricing)
- [Firebase Price Calculator](https://firebase.google.com/pricing#blaze-calculator)

**Firebase Introductions**

- https://www.geeksforgeeks.org/firebase-introduction/
- https://www.javatpoint.com/firebase-introduction
- https://www.linkedin.com/learning/firebase-essential-training/control-access-with-cloud-functions?autoplay=true&resume=false

**Firebase Comparisons**

- https://medium.com/mqos-technologies/mongodb-vs-firebase-which-is-the-best-database-in-2022-aff873566586
- https://www.mitrais.com/news-updates/aws-amplify-vs-google-firebase-which-is-better/
- https://www.bairesdev.com/blog/amplify-vs-firebase-which-one-is-best/
- https://os-system.com/blog/comparison-firebase-with-other-platforms/
- https://invozone.com/blog/firebase-vs-supabase-key-differences-choosing-guide/
- https://npm-compare.com/@supabase/supabase-js,aws-amplify,firebase,parse-server
- https://www.reddit.com/r/reactnative/comments/16b53hn/baas_opinions_firebase_vs_aws_vs_supabase_vs/

**Firebase Pros and Cons**

- https://osdb.io/firebase-pros-and-cons-when-you-should-and-shouldnt-use-firebase-osdb/#ib-toc-anchor-4
- https://www.altexsoft.com/blog/firebase-review-pros-cons-alternatives/
- https://trustradius.com/products/firebase/reviews?qs=pros-and-cons#reviews
- https://www.peerspot.com/products/google-firebase-pros-and-cons
- https://www.weetechsolution.com/blog/mongodb-vs-firebase-which-is-the-right-database
- https://blog.minimacode.com/use-firebase-for-your-project/

**Firebase Video guides**

- [YouTube the short version](https://www.youtube.com/watch?v=vAoB4VbhRzM)
- [YouTube the long version](https://www.youtube.com/watch?v=zQyrwxMPm88)

**Firebase Socials**

- [Firebase website](https://firebase.google.com/)
- [Firebase Support](https://firebase.google.com/support)
- [YouTube](https://www.youtube.com/@Firebase)
- [X/Twitter](https://x.com/Firebase)
- [Reddit - Firebase Community](https://www.reddit.com/r/firebase/)

---

### Contributors

| Previous contributions:                | View file                                                                  |
| -------------------------------------- | -------------------------------------------------------------------------- |
| Bjørn Arne Læknes (barlaek)            | <a href="./prev-contributions/firebase-case-study-barlaek.md">file</a>     |
| Dina Olufsen (DinaOluf)                | <a href="./prev-contributions/firebase-case-study-DinaOluf.md">file</a>    |
| Jon Åstveit                            | <a href="./prev-contributions/firebase-case-study-Jonast96.md">file</a>    |
| May-Tove Hovdal (May-Tove)             | <a href="./prev-contributions/firebase-case-study-May-Tove.md">file</a>    |
| Nenita Santander Norvalls (NeNorvalls) | <a href="./prev-contributions/firebase-case-study-NeNorvalls.md">file</a>  |
| Patrick Nordbo Johnsen (pnordboj)      | <a href="./prev-contributions/firebase-case-study-pnordboj.md">file</a>    |
| Robert Filep                           | <a href="./prev-contributions/firebase-case-study-robfil50219.md">file</a> |
| August Wahlberg (AugustWahlberg)       | <a href="./prev-contributions/firebase-case-study.md">file</a>             |
| Johan Frederic Aas-Haug (johanf92)     | <a href="./prev-contributions/firebase-case-study-Johanf92.md">file</a>    |

| Consolidated and updated by: |
| ---------------------------- |
| Rikke                        |
| Tom                          |

#### DEMO - Built test websites

- By Jon Åstveit <a href="https://extraordinary-crepe-15f88c.netlify.app/index.html" target="_blank">Business Card</a>
- By Tom <a href="https://noroff-firebase-app.web.app/" target="_blank">Login to reveal the secrets!</a>

<style>
@import url('https://fonts.googleapis.com/css2?family=Big+Shoulders:opsz,wght@10..72,100..900&display=swap'); 
  html {
    scroll-behavior: smooth;
  }
 

  .back-to-top {
    position: fixed;
    bottom: 20px;
    left: 85%;
    transform: translateX(-50%);
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    z-index: 1000; 
  }

  .back-to-top:hover {
    background-color: #0056b3;
  }
</style>
