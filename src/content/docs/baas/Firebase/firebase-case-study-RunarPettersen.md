---
title: Firebase Case Study
author: Runar Pettersen <RunarPettersen>
tags: firebase, case study, platform
---

## Introduction  
Firebase is a development platform from Google, designed to help developers build and manage mobile and web applications. It offers a range of integrated services and tools that streamline app development, from authentication and data storage to analytics and growth features. I chose to base my case study on Firebase because it was entirely new to me—I had never used it before. What made me particularly curious about Firebase was the fact that it is owned by Google, and considering the high quality of other Google products such as Chrome, Android, YouTube, Maps, Gmail, and so on, I felt this was a product worth exploring in depth. I believe the best way to learn is through hands-on experience rather than just reading theory, so I decided to conduct my study based on real-world experience by creating actual websites using Firebase.

## Brief History of Firebase  
- 2011: Firebase founded as Envolve, originally offering real-time chat functionality.  
- 2012: Company pivots to become a real-time backend-as-a-service.  
- 2014: Acquired by Google.  
- 2016: Expanded to include Authentication, Cloud Storage, Hosting, and more.  
- 2020+: Continues to integrate with Google Cloud services and expand tooling.

## Main Services in Firebase  
- **Authentication** – Sign in with email/password or third-party providers like Google, Facebook, Apple, GitHub, etc.  
- **Cloud Firestore** – Scalable NoSQL database with flexible queries and real-time updates.  
- **Realtime Database** – The original Firebase database with real-time synchronization (great for chat and live data).  
- **Cloud Storage** – Store files such as images, videos, and documents with access control.  
- **Hosting** – Fast and secure hosting with a global CDN, SSL certificates, and simple deployment from the command line.  
- **Cloud Functions** – Serverless execution of backend code triggered by Firebase events or HTTP requests.  
- **Firebase Analytics** – Analytics tools that measure user behavior and interactions in real time.  
- **Firebase Cloud Messaging (FCM)** – Send push notifications to web and mobile.  
- **Remote Config** – Change features or content in apps without redeployment.  
- **Test Lab** – Test apps on real and virtual devices in Google Cloud.  
- **Crashlytics** – Error reporting and monitoring of app crashes in real time.

## How it works  

### Project 1: This Cursed Earth  
[This Cursed Earth](https://thiscursedearth.com) is a travel website for obscure destinations. Since I was already renting a server from Namecheap, I could easily set up a new site on my existing server, upload the files via FTP, and install and connect Firebase. After purchasing a domain name, I was ready to go. The connection process reminded me a lot of how we connect to APIs in various assignments at Noroff. The big difference from Noroff’s API is that here I have full control over the database.  

What surprised me the most was how easy it was to create a script that allowed me to add new destinations to the site, and they would automatically be updated in the database without me having to log into the database to create anything manually. If I wanted to add more fields, no problem — I could just write them into the script, and they would be created automatically. The actual connection to Firebase was just as simple as connecting to Noroff’s API. The only thing that puzzled me for a while was that I also had to add a small script in Firebase to update permissions since my static files were hosted on a different server.  

The whole process went surprisingly smoothly, and compared to working with MySQL, this was a dream. However, I did discover one issue. When I submitted the site to Google Search Console, I noticed that not all dynamically generated pages were being indexed. Some were flagged as duplicates, and a canonical page was chosen instead. The strange thing was that the pages were completely different. After some research, I found that this happens because Google’s web crawlers are faster than the site’s rendering process, meaning they only capture the HTML skeleton and not the dynamically generated content.  

This is a common issue, and I tried a few solutions without success. The best option would be to use SSR (Server-Side Rendering), but this turned out to be difficult since my server and database are hosted in different locations. Firebase does offer its own feature for this, but it wasn’t something I could use in this setup. So even though the site worked perfectly otherwise, it has an SEO problem — and that’s not something to underestimate, especially if you rely on traffic from search engines. It would also make it harder to get approved for AdSense if crawlers can’t pick up all the pages.  

The main advantage of having the site on my own server is the flexibility to add prebuilt scripts, such as a web forum. For example, I could set up PHPBB and integrate it into the site — essentially combining two different systems.  

### Project 2: My Liquor Shelf  
[My Liquor Shelf](https://myliquorshelf.com) is a virtual liquor cabinet site with drinks and recipes. It’s a slightly larger project with more databases than my first site. Since I was also using Firebase for hosting, the setup process was different.  

After installing Firebase in VS Code, I had to create a folder named `public`. This folder becomes the root folder of the site, meaning all the files inside it are uploaded to the server when I type `firebase deploy` in the VS Code terminal. That’s how simple it is to use Firebase Hosting — no FTP or other upload tools needed. Everything can be managed directly from VS Code with a single command. If you want to remove a file from the server, you simply delete it from your computer (either in VS Code or directly in the folder), run `firebase deploy`, and it will also be removed from the server. Even though this was a new workflow for me, it’s incredibly easy and a pleasant way to work. You even get your own domain ending in `.web.app`, which is quite a good domain name considering it’s free.  

When building this website, I didn’t encounter any issues worth mentioning. Everything went smoothly and worked exactly as expected.  

## Database  
The database is structured in a way where you create *collections*. For example, if you want one database collection for products and another for users, you would create a separate *collection* for each of these. Inside each collection, you have *documents* — in this case, either the individual products or the individual users.  

You can choose whether each document should have a random ID or a readable name. If you plan to display products on a dynamic page, using readable names is an advantage because it allows you to generate a clean URL slug instead of a random string of letters and numbers.  

Within each document, you have *fields* such as name, description, image, and so on. But you can also create *subcollections* under a document if you need a more complex structure. For example, if you want reviews, ratings, and similar data tied to each product, you can easily add a subcollection for that.  

### Rules  
Under *Rules*, you decide what should be open or restricted in your database. This is where you define typical CRUD permissions. When you open a new database, everything is initially set to open. After 30 days, it will automatically be locked, forcing you to write your own rules. This is, of course, for security reasons, and it’s wise to change these rules as soon as you launch your site.  

### Indexes  
Under the *Indexes* tab, you can let Firebase create indexes that make it possible to run more advanced queries efficiently. Indexes tell Firestore how to organize your data so that complex searches are possible and fast. This can be especially useful if you have a large database and your site needs to combine different types of data.  

### Disaster Recovery  
The *Disaster Recovery* tab is where you back up your database, and it also allows you to restore the database if something goes wrong. In addition, there’s an import/export function, which is handy if you want to store a copy of your database on your own computer. You can also schedule regular backups, such as daily or weekly. To use Disaster Recovery, you need Firebase’s paid plan, called the Blaze Plan — more on that later.  

### Usage  
Here you can view statistics on what’s happening in your database. You get a complete overview of reads, writes, and deletes, as well as any associated costs if you’re on a paid plan.  

### Extensions  
Finally, there’s *Extensions*, where you can add various ready-to-use plugins for Firebase. The selection is quite impressive. For example, if you want to accept payments, there’s a dedicated Stripe plugin and one for Google Pay. There are also extensions for translation, Mailchimp integration, image resizing, ChatGPT integration, and more. The possibilities here seem almost endless.  

## Authentication  
Authentication is another important area of Firebase that I really like. Here, you can view all the accounts in your project — including your own and any users who have registered. It’s also a good idea to use the database together with Firebase’s authentication system if you want to store additional user details such as avatars, biographies, and similar profile information.  

In Firebase, you can choose a *sign-in method*, which makes it easy to offer secure account creation options for your users. Of course, you have the standard email and password option, but there are also many other possibilities such as Google Sign-In, Facebook, Microsoft, GitHub, Apple, and many more. Being able to add these sign-in methods so easily is a big advantage — like many others, I increasingly prefer using this type of login instead of remembering yet another password. There’s even an option for SMS-based authentication.  

Firebase also provides a range of templates for common features like password reset and two-step verification, along with the ability to add Google reCAPTCHA. While several of these features are fairly simple to implement on their own, having them all integrated into the same system is incredibly convenient.  

## Payment Plans  
When it comes to the pros and cons of Firebase, the payment system is almost always brought up. You can use the free plan — the Spark Plan — which allows up to 50,000 reads per day. Then there’s the paid Blaze Plan, where you pay for usage above 50,000 reads per day. In addition, you pay for storage, egress (outgoing traffic), writes/deletes, and other Firebase services, each of which is priced separately. Many people see it as a drawback that you can’t predict the exact cost in advance. But let’s take a closer look at this.  

Let’s say you suddenly get 5 million reads in one day and fear it might drain your wallet — that’s not really how it works. Admittedly, 50,000 reads can go quickly if you have a popular site. A “read” means a single document from the database — no matter how many fields it contains. If you fetch a document with 10 fields, it still counts as 1 read. If you fetch a collection with 100 documents, it counts as 100 reads. If you refresh a page and run the same query again, it counts as new reads (even if the data hasn’t changed).  

Now, let’s say you get 100,000 reads in one day — double the free limit. You would pay 0.020 USD for that. In other words, almost nothing. Even at 100,000 reads per day, the total comes to under a dollar per month. Unless you have an absolutely amazing idea for a website or app that attracts millions of users every hour, you really don’t need to worry too much about Firebase’s pricing.  

On top of that, you can set a maximum spending limit per month. For example, if you don’t want to spend more than 10 USD per month, you can set that limit. While it might be frustrating for your site to stop working if the limit is reached, Firebase also has a notification system that warns you when you’re approaching your set limit.  

If you have a small website, perhaps just for your portfolio or a small business, the free plan will be more than enough. Still, there are some very good reasons to go for the Blaze Plan. For example, if you want to send emails via your website using Firebase, you’ll need the Blaze Plan. You’ll also need it for database backups. There are many other benefits to the paid plan, and since it’s free up to the same usage limits as the Spark Plan, there are actually very few reasons *not* to use the paid plan.  

## Advantages and Disadvantages of Firebase  

### Advantages  
- **Easy to set up and use** – Simple configuration, with many services integrated into one platform.  
- **Generous free plan** – Spark Plan allows up to 50,000 reads per day at no cost.  
- **Fast deployment with Hosting** – One command (`firebase deploy`) uploads or updates your entire site, with free SSL and a global CDN.  
- **Multiple authentication options** – Built-in support for email/password and popular providers like Google, Facebook, Apple, Microsoft, and GitHub.  
- **Scalable database solutions** – Cloud Firestore and Realtime Database handle both small and large projects efficiently.  
- **Rich ecosystem of extensions** – Ready-to-use plugins for payments, translations, Mailchimp, image optimization, ChatGPT integration, and more.  
- **Cross-platform compatibility** – Works for both web and mobile applications, and integrates well with Google Cloud.  
- **Built-in analytics and monitoring** – Firebase Analytics, Crashlytics, and performance monitoring tools help track user behavior and app health.  

### Disadvantages  
- **SEO limitations for dynamic content** – Pages rendered entirely on the client side may not be indexed properly by search engines unless using SSR, which can be difficult in some setups.  
- **Vendor lock-in** – Migrating a large database away from Firebase can be challenging.  
- **Pricing uncertainty at scale** – While affordable for small to medium projects, heavy usage of reads, writes, storage, or egress can increase costs unpredictably.  
- **Not ideal for very complex applications** – For highly customized or large-scale enterprise systems, Firebase alone may not offer all the flexibility needed.  
- **Limited querying compared to SQL** – While Firestore offers flexible queries, it lacks some of the advanced query capabilities of relational databases.  

## Conclusion  
After experimenting with Firebase for a couple of months, I find it hard to identify any major downsides to the product. Personally, I haven’t encountered any issues — except when I used Firebase only as a database while hosting the files on another server. In that case, the site wasn’t fast enough for Google’s web crawlers.  

Another potential drawback is that once you have a large database in Firebase, you’re somewhat locked in. It’s not as simple as just moving everything to another server or switching to a different type of database.  

For more complex websites, Firebase might not always be the ideal choice. However, many large-scale sites successfully use a combination of Firebase and other systems. Well-known examples include Shazam, Trivago, and Slack. The possibilities are extensive, especially when combining Firebase with other technologies.  

After just a couple of months and two website projects, I’m excited to use Firebase even more. It’s so straightforward to use as a backend that it can save many hours of work. I will definitely be using Firebase in future projects.  

## References  
- [Firebase Documentation](https://firebase.google.com/docs)  
- [Firebase Pricing](https://firebase.google.com/pricing)  
- [This Cursed Earth](https://thiscursedearth.com)  
- [My Liquor Shelf](https://myliquorshelf.com)  
- [Google Cloud Blog – Firebase](https://cloud.google.com/blog/topics/firebase)  
- Personal experience from building and deploying *This Cursed Earth* and *My Liquor Shelf* using Firebase
