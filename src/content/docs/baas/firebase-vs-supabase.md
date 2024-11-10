

### Firebase vs. Supabase: A Comparative Analysis of Backend as a Service Solutions


## Introduction:

The digital landscape, and front-end development itself, is becoming increasingly shaped by the need for reliable efficient, scalable, and secure backend solutions to aid front end developers in thir endeavors.

With BaaS, frontend developers can integrate complex backend functionality through the BaaS provider’s APIs and SDKs, accelerating any development and time, reducing costs while reducing, or entirly eliminating the need to hire a back-end developer for the project at hand, which can be especially beneficial to smaller companies or developers at the beginning of their career - (however, it should be noted and acknowledged that for highly customized or complex backend needs, hiring a backend developer may still be beneficial to ensure a thorough and accurate job!)

 "Backend as a Service" (BaaS) platforms, provide essential backend features such as:
- authentication
- storage 
- database management
- cloud functions

These tools have become invaluable to front-end developers of today!
Two popular options in this space are:

## Firebase by Google and the open-source alternative Supabase. 

Firebase’s maturity and ecosystem integration make it highly a reliable and feature-rich choice of BaaS provider, while Supabase’s newer and more open-source approach offers greater flexibility and an ever-growing set of features tailored for developers that might prefer SQLs and open-source solutions.
This essay compares some of the uses, strengths and weaknesses of both Firebase and Supabase, ultimately highlighting Firebase’s marginal "superiority" based in its versatility and broad applicability across various types of projects and ultimately, the advantages it poses for students and smaller projects (which was perhaps the deciding factor in my choice of it as the "superior").




## Introduction to BaaS and its Role in Modern Development
In an era where performance is critical and development speed and scalability are vital, BaaS platforms enable developers to focus on front-end functionality while providing essential backend support in various forms. 
Because of this, there has been a boom in both their creation and use, and as of September 2022, there were at least 171 BaaS providers listed in a directory compiled by Money Gate.  [Money Gate Directory](https://money-gate.com/banking-as-a-service-directory/)


There are various tools that BaaS platforms offer such as; authentication, storage, and serverless functions-
The advantages of which include:
1. Accelerated Development Speed
2. Lower Maintenance Burden
3. Cost Efficiency
4. Scalability Without Complexity
5. Enhanced Focus on User Experience and Features
6. Improved Security and Compliance
7. Easy Integration with Other Services
8. Flexibility and Rapid Iteration)
Firebase and Supabase have both become popular among developers due to their comprehensive feature sets, ease of use, and flexibility.


## Brief History and Background


# Firebase: From Real-Time Database to a Comprehensive BaaS Solution

Back in 2011, before Firebase became the Firebase we know today, it was a startup called "Envolve". Envolve provided developers with an API that enabled the integration of online chat functionality into their website- this functionality was surprisingly not what the site was predominantly being used for, and it was noticed that developers were using it to sync application data in real time across their users.
In April 2012 the founders of Envolve, James Tamplin and Andrew Lee, created as a separate company that provided Backend-as-a-Service with real-time functionality so that front end developers could continue to use Envolve for their usual purposes.
"After it was acquired by Google in 2014, Firebase rapidly evolved into the multifunctional behemoth of a mobile and web platform that it is today."
[History of Firebase](https://hackernoon.com/introduction-to-firebase-218a23186cd7)

“Our biggest, most interesting customers were doing strange things,” says Tamplin. “Their use cases were beyond our scope, but they did weird ju-jitsu to make it work.”
For instance, a game company was using Envolve’s widgets to track a player’s positional data and game commands, then scraping the screen to use that info in their app. That solution was clever but had all the elegance of a Rube Goldberg contraption.
[Tamplin, on the growth of Firebase]([https://hackernoon.com/introduction-to-firebase-218a23186cd7](https://hackernoon.com/how-to-build-a-product-loved-by-millions-and-get-acquired-by-google-the-firebase-story-82dab4e3e80c))

Since 2014 Firebase has been expanded into a complete BaaS offering. Now as part of the Google Cloud ecosystem, it offers seamless integration with other Google services (commonly used), positioning it as a go-to platform for web and mobile development.



# Supabase: The Open-Source Alternative

What I find interesting about Supabase is that it was created as an alternative to Firebase- to provide developers with that they felt Firebase lacked-- 

The main driving force behind Supabase is a gentleman called Paul Copplestone- He was working for a startup creating a chat application using Firebase itself, but ran into an issue- Users were not seeing the response to the chats until they refreshed their page.
He concluded that Firebase had a limit of one query per second for each document, and decicded to rectify this- 

"Paul said, “With Firebase, you can insert data and you can have many devices listening to the database, and they'll receive those messages. Postgres doesn't have that built in. So I ended up building a real-time engine, open-sourcing it, and I put it on Hacker News.”
[The Origins of Supabase](https://www.basedash.com/blog/how-supabase-became-this-generations-database)

He pitched his ideas of improvement to his friend Ant Wilson, and together they created Supabase in January 2020, they both pitched their brainchild as “real-time Postgres.”
The modern "Little brother" to Firebase, and supporting self-hosting and transparency through open-source code, Supabase mostly appeals to front-end developers that are looking for a more affordable, customizable, and vendor-independent BaaS option.





## Feature Comparison of the two options:

Both Firebase and Supabase offer the essential BaaS features, but with some distinctions from each other:

- Authentication: 
Authentication is a crucial service for managing user access to your products and applications. 
Firebase Authentication is best known for easy integration with other Firebase services, offering a range of identity solutions, including social and phone authentication- it offers quite a simple authentication setup with email, password, and social login options. The seamless setup with other google and firebase services makes this an easy option for front-end developers based on ease of use
Supabase provides similar options to Firebase, but follows up with some addirional fetures and methods that add to its authentication prowess. Its methods offer flexibility, security and are customizable to specific project needs, and uses the GoTrue API for authentication, a JWT-based system supporting Row Level Security to ensure secure user management, and also allows developers to define specific roles within an application (like Admin, Editor, Viewer) and assign permissions to each role. This setup then ensures that users can only access the data and features relevant to their role, enhancing both security and overall user experience)..

Project needs, integration levels, and security requirements will influence the choice between Firebase and Supabase for authentication. Both provide robust solutions to your user's access needs, but ease of use and integration with other backend services often tip the scale as to what a developer will choose.


"Supabase's authentication services, powered by the GoTrue API, offer secure user management and Row Level Security, while Firebase Authentication provides a broader array of identity solutions, including social and phone logins with seamless integration into its services. Both platforms have their strengths, so your choice depends on your specific project needs."
[Firebase Vs Supabase](https://www.netguru.com/blog/supabase-vs-firebase)



- Database Structure:
Firebase’s Cloud Firestore is a NoSQL database optimized for real-time data, whereas Supabase uses PostgreSQL, a relational database with advanced querying capabilities.(Firebase’s NoSQL database is flexible and optimized for real-time data, ideal for unstructured, high-traffic applications like chat apps. In contrast, Supabase’s SQL database (PostgreSQL) is structured and supports advanced queries, making it better for applications needing complex relationships and data integrity, such as e-commerce or financial apps.)


- Serverless Functions: 
These let developers run backend code without managing servers. 
Firebase offers Cloud Functions, enabling backend logic execution in response to Firebase events or HTTPS requests, particularly beneficial for seamless backend service integration, while Supabase offers a growing suite of functions compatible with PostgreSQL.
(PostgreSQL is a powerful, open-source relational database management system (RDBMS) known for its advanced features, reliability, and flexibility. It organizes data into structured tables and supports complex queries, transactions, and data integrity constraints. PostgreSQL is widely used for applications requiring robust data relationships, scalability, and extensive querying capabilities, making it ideal for web applications, financial systems, and data-driven analytics.) and integrates with third-party services like AWS Lambda or Azure Functions for additional serverless capabilities, providing more flexibility in running backend code and leveraging existing infrastructure.


- Storage:
Data storage is a critical aspect of any application, and the options offered by both Firebase and Supabase are good and robust choices-
Firebase’s cloud storage uses "Cloud Firestore", a real-time NoSQL database, providing strong scalability. Firebase’s storage offers seamless scalability and reliability, making it easy to store and manage large amounts of data in a highly stable environment, but lacks the data integrity and complex querying of relational databases.
Supabase, on the other hand, uses open-source storage technology- PostgreSQL, a relational database management system known for powerful SQL query capabilities. This enables complex queries and ensures data integrity with a structured schema which provides flexibility for customization and the option to self-host- one of the aspects where it takes what Firebase alrady had, and builds on it. 
This difference means Firebase is ideal for straightforward, large-scale storage needs, while Supabase is better suited for projects needing customizable storage setups and control over hosting.)
Both platforms provide storage solutions for binary data, but choosing between a relational or NoSQL database will greatly impact data structure and interaction.


- Real-Time Capabilities:
This is an area in which both Firebase and Supabase excel- both are ideal candidates for applications that need instant data updates and both provide strong real-time data synchronization.
Firebase’s real-time syncing and offline support are strong, whereas Supabase, though it is rapidly expanding its real-time offerings, is not quite up to the standard of Firebase in this instance. Firebase excels in real-time data syncing and offline support, allowing apps to instantly update data across users and devices, even when offline. This is especially valuable for applications like chat apps, collaborative tools, and live social feeds, where instant data updates enhance the user experience. Firebase automatically handles real-time sync and offline caching, making it the better choice for dynamic, high-interactivity applications.
Supabase, offers similar real-time capabilities with its Postgres Changes feature, which listens for database changes and updates clients instantly. Additionally, Supabase includes Presence features for tracking user activity, making it suitable for collaborative applications.



- Vendor Lock-In and Open-Source Flexibility: 
-Firebase’s Proprietary System and Vendor Lock-In:
Firebase’s integration with Google services provides powerful functionality, but it ties applications to Google’s infrastructure, making migrations to other platforms challenging and a costly choice- for this reason it can be a little excluding for those outside the scope of google.. For teams deeply embedded in Google’s ecosystem, this integration may be beneficial, but others may find it very limiting.
-Supabase’s Open-Source Advantage: 
Supabase’s open-source nature offers a degree of flexibility that Firebase cannot match. The ability to self-host reduces concerns over vendor lock-in, and the transparency of open-source code offers full visibility into the platform’s workings. Supabase’s approach empowers developers with greater control, though it may require more technical knowledge to implement effectively.


- Customization and control:

To make an aplication look unique and to give it a developers distinct style- for them to be able to feel they can work in the way they prefer and get the results they desire, customization and control are everything. Some developers need more or less flexibility or input from back-end infrastructure, and being able to change how much that is can change the user experience entirely.
In this instance, Supabase offers more control and transparency over database interactions, where Firebase has a more abstracted service model- this being a better option for developers who prefer SQL-based queries and detailed data management control.
Supabase's model allows for more modification from developers who can extend the platform as needed, self host etc- this is a level of control not yet available with firebase, whoch only offers standard features and services
That being said- both do support custom functions, but Supabase excels with its use of PL/pgSQL, enhancing the flexibility of use.

 Ultimately, the choice between Supabase and Firebase depends on the level of control and customization your project requires.


- Pricing models:
Everyone worried about price, but with less diaposable income or for those just starting out on a project- here's looking at you development students and start ups- the price of something can be the last deciding factor when choosing a platform.
Supabase and Firebase do differ in price, though both offer a free tier and flexible, usage based pricing that is scalable based on traffic demands.
Firebase tends to be more expensive for applications with higher traffic due to changes based on reads, writes and storage.
Supabase has a very good initial free plan and is considered more transparent with pricing, having less unexpected costs than Firebase. It also has more payment plans, each tailored to fit closer to a specific project need.
Although Firebase is backed by the robust and reliable infrastructure of google, it has some potential drawbacks if it is chosen by a developer initially, such as vendor lock in (being stuck due to its realiability on google applications) and limited control over the infrastructure.
On the other hand, Supabase provides much more flexibility and control due to its pricing scalability and payment plan systems.




## Short summary of Strengths and Weaknesses:

Firebase: Known for its reliability, ease of use, and extensive community support, it provides a strong platform for teams that are prioritizing rapid deployment and less backend complexity. However, Firebase’s usage-based/ "pay as you use" pricing can be a concern for larger applications, and vendor lock-in may limit flexibility for future changes to pricing and host.
Supabase: Supabase’s SQL-based structure, cost-effective pricing, and self-hosting options make it an attractive choice for projects requiring more complex data relationships and control over the hosting. The platform has a growing community and good cost predictability, though it may require more backend experience than Firebase to run real-world Applications.

## When to Choose Firebase

Firebase is ideal for applications that prioritize real-time changes, rapid deployment time and scalability , but should emphasize-- *within Google’s ecosystem*. It suits projects like chat applications, collaborative tools, and social media platforms, where real-time updates to things like chats and user engagement are essential. Firebase’s ease of use also makes it accessible to small teams, startups, and organizations looking for a quick, scalable solution with minimal backend management (rather the point when choosing a BaaS).

## So! If Firebase is the better choice, when to choose Supabase?

Supabase is well-suited for projects requiring more complex data relationships, SQL querying, and open-source flexibility. It excels at applications with structured, relational data, such as e-commerce platforms, data-driven analytics, or enterprise-level projects, can benefit from Supabase’s SQL foundation. Its self-hosting option makes it a preferred choice for organizations prioritizing control over infrastructure and data privacy.



## Why Firebase is Superior for a Broader Range of Projects:
Firebase’s flexibility, ease of use, and comprehensive suite of features make it a versatile choice for a good, wide range of applications. The following factors highlight why Firebase is often favored by developers:

- Ease of Use and Setup: Firebase has a very intuitive interface, well-documented SDKs, and rich community support make it accessible to developers at all levels. With features like authentication, storage, and a NoSQL database ready to use "right out of the box", Firebase minimizes setup time and allows developers to focus on building frontend features rather than backend infrastructure.


- Real-Time Data-Syncing and Offline Capabilities: Firebase’s real-time data synchronization and offline capabilities are ideal for applications requiring instant updates, like chat apps, social feeds, and collaborative tools used by many people. This real-time functionality is crucial for engaging user experiences, setting Firebase apart from other BaaS options, even Supabase.


- Integration with Google Services: Firebase’s seamless and easy integration with Google Cloud services, including Analytics, BigQuery, and Cloud Storage, allows for a scalable and extensible backend. This integration is particularly beneficial for teams already using Google’s ecosystem, providing advanced tools for data analytics and storage that align with Firebase’s functionality.


- Wide Community and Support: Firebase’s large user base and the backing of Google foster a rich support ecosystem, including tutorials, forums, and development resources. This extensive support lowers the learning curve, particularly for new developers and those that are just starting out. This ease of use makes it easier to understand and work as a team, to reach out when things don't work as expected and ensures quick access to resources for troubleshooting and development guidance.


Overall, Firebase’s accessibility, strong real-time capabilities, and integration with Google’s suite of tools make it a highly adaptable BaaS choice- "the OG", if you will!
Its NoSQL database structure allows for flexibility in data modeling, making it suitable for unstructured data applications and dynamic content delivery. Firebase is particularly well-suited for startups, small-to-medium applications, and teams prioritizing rapid development (basically everyone- though is pricier if you are a larger and more complex team/ have a larger and more complex application), where convenience, scalability, and integration outweigh the need for backend control.







## Using Firebase:

As firebase is my choice of "superior" BaaS, I have opted to only give detailed instrution on how to install it alone- there's a brief instruction on Supabase underneath this initial set of instructions. 
Using Firebase involves setting up their services, integrating them into the project you are building, and then leveraging their SDKs to handle various chosen backend functions like authentication, database management, and file storage. Here’s a general guide to getting started with each:


1. Create a Firebase Project: Sign in to the Firebase Console, create a project, and configure settings.
![Firebase Setup](https://blog.logrocket.com/wp-content/uploads/2021/02/firebase-first-project.png)

2. Add Firebase to Your App: Select your platform (Web, iOS, or Android), then add the Firebase config code to your project.

![Firebase Setup](https://blog.logrocket.com/wp-content/uploads/2021/02/firebase-web-icon.png)

   

3. Integrate Firebase SDKs:
Then, we can go on to set up our features for this app. The primary features that are needed within most applications include:
Authentication
Firestore
Storage
![Firebase Setup](https://blog.logrocket.com/wp-content/uploads/2021/02/add-firebase-sdk-1.png)

4. Install Firebase packages with npm install firebase.

```
npm install firebase
```


Next, we import firebase and initialize our firebase config code.

```
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "API-KEY",
    authDomain: "AUTH-DOMAIN",
    databaseURL: "DATABASE-URL",
    projectId: "PROJECT-ID",
    storageBucket: "STORAGE-BUCKET",
    messagingSenderId: "MESSAGING-SENDER-ID",
    appId: "APP-ID"
  };

  // Initialize Firebase
initializeApp(firebaseConfig);
```


After initializing Firebase into our client side, let’s go over how to use it to add authentication. In the same file, we’ll install our getAuth from firebase/auth and also initialize it.

```
import firebase from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "API-KEY",
    authDomain: "AUTH-DOMAIN",
    databaseURL: "DATABASE-URL",
    projectId: "PROJECT-ID",
    storageBucket: "STORAGE-BUCKET",
    messagingSenderId: "MESSAGING-SENDER-ID",
    appId: "APP-ID"
  };
// Initialize Firebase
 initializeApp(firebaseConfig)

// Initialize Firebase auth
const auth = getAuth()
```

We can sign up new users on the app using their email and password. We have to pass the user’s email and password as arguments to the auth.createUserWithEmailAndPassword() method.

```
auth.createUserWithEmailAndPassword(auth, email, password)
  .then((res) => {
    let user = res.user;
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message);
  });
```


Let’s now use Firestore to add data to our database. We’ll create a database collection called names and add users’ names.

```
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore"; 

// Config and initialize Firebase as shown above

const firebaseConfig = {
    // ...
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

async function addDocs () {
  try {
    const addedDocs = await setDoc(doc(db, "names", "Doe"), {
    fullName: "John Doe",
    city: "London",
    country: "UK"
    });
    console.log("Document's ID: ", addedDocs.id);
  } catch (error) {
    console.error("Error adding document to DB: ", error);
  }
} 
```


Finally, to store a media file, we can get the metadata and store it in our cloud storage.

```
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } } from "firebase/storage";

// Initialize Firebase 
const firebaseConfig = {
  // ...
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize cloud storage and get a reference to the service
const storage = getStorage(app);
const storageRef = ref(storage, 'images/logo.png');
const metadataFile = {
  contentType: 'image/png',
};

const uploadImage = uploadBytes(storageRef, file, metadataFile);
```

[How to Install Firebase](https://blog.logrocket.com/firebase-vs-supabase-choosing-right-tool-project/)

----------------------------------------------------------------------------------------------------------------------------------------

----------------------------------------------------------------------------------------------------------------------------------------

| Note:   (I have included a brief setup for Supabase)                                                              |
|-----------------------------------------------------------------------|
 Go to supabase.com, sign up, and log in.


Click "New Project" and choose your project’s name, database password, and region.


In your Supabase dashboard, go to Project Settings to find the API URL and public API key (also called the anon key). You’ll need these to connect your app to Supabase.

In your project folder, install the Supabase client library:

```
npm install @supabase/supabase-js

```

Import and configure Supabase in your app using the API URL and anon key:

```
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'YOUR_SUPABASE_URL'
const supabaseKey = 'YOUR_ANON_KEY'
const supabase = createClient(supabaseUrl, supabaseKey)

```
Use supabase.auth for authentication, supabase.from for database operations, and supabase.storage for file management.






Firebase is generally easier for developers to use, especially for those seeking the fastest, most straightforward setup with minimal backend management from genuine back-end developers. Here’s a recap/ a few reasons as to why:

-It has a "Plug-and-Play" Experience--  Firebase offers a more intuitive, "right out-of-the-box experience". With easy setup and well integrated SDKs, comprehensive documentation, good community support in case of difficulty and an easy setup process, developers can quickly configure authentication, database, and storage features without extensive backend knowledge- great for new front-end developers.
-Real-Time and Offline Support/ functioning: Firebase’s built-in real-time database and offline capabilities make it easy to implement live updates and handle intermittent connectivity, especially for mobile and web applications.
-Seamless Google Integration: Firebase integrates smoothly with Google Cloud services, making it easy to scale and manage analytics, file storage, and other Google-based tools without needing complex configurations.
-Extensive Documentation and Community: Firebase has a large community and a wealth of tutorials, guides, and support resources, lowering the learning curve and simplifying troubleshooting.


-Overall, Firebase has a streamlined setup and feature integration system that allows developers to focus on building the front-end aspects without heavy or complicated backend management.








### Conclusion

Firebase is often considered the better choice over Supabase for students for projects requiring rapid development, real-time capabilities, and extensive integrations, particularly when ease of use and scalability are top priorities. Firebase’s real-time database (Cloud Firestore) allows for seamless data syncing across users and devices, making it ideal for applications that rely on instant updates, such as messaging apps, collaboration tools, or social media platforms. Additionally, Firebase’s offline support ensures a smooth user experience even without constant connectivity, which is crucial for mobile applications.

Firebase and Supabase each bring unique strengths to backend development. Firebase excels in ease of use, real-time syncing, and integration within the Google ecosystem, making it a reliable, adaptable platform for a broad range of applications. Supabase, with its SQL-based structure, open-source flexibility, and cost-effective scalability, is an excellent alternative for developers who prioritize control, SQL querying, and open-source transparency. While Supabase’s community and user base are growing, it has not yet reached the same level of popularity as Firebase.

As part of the Google ecosystem, Firebase offers deep integrations with Google Cloud products like Google Analytics, BigQuery, and Cloud Storage. These provide advanced tools for data analysis, file storage, and user tracking, essential for scaling applications and consolidating infrastructure. Firebase’s intuitive interface and extensive documentation make it accessible to developers of all skill levels, reducing the learning curve and enabling rapid deployment.

In contrast, Supabase still provides a powerful open-source alternative with features like SQL-based querying and self-hosting options. However, it lacks the robust real-time and offline capabilities of Firebase and may require more technical expertise to configure and maintain. Supabase is excellent for projects requiring SQL databases and greater control over infrastructure but may not provide the same out-of-the-box experience for real-time, highly interactive applications.

In summary, Firebase’s accessibility, strong support network, and comprehensive feature set make it a versatile and flexible choice for developers, especially for projects where speed, scalability, and Google integration are priorities. Firebase’s strengths offer a complete and adaptable backend solution, empowering developers to build powerful applications with great ease.
Thank you for coming to my Ted Talk! 







