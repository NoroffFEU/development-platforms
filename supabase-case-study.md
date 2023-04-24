---
title: Supabase Case Study
author: Marte Moslet <martemoslet>
tags: supabase, case study, platform, BaaS
 ---

 ## Introduction

 Supabase is a backend-as-a-Service (BaaS) platform that offers PostgreSQL database, authentication, storage and edge functions. It was created in 2019 as an open-source alternative to Firebase. 

 ## Brief history

- 2019: Supabase is created
- July 2020: Announced Auth
- November 2020: Supabase Beta

 ## Main features

Supabase is based completely on free open-source software (FOSS). Their main features are:
- Postgres database: A free and open source database. It is considered a very stable and advanced database. It is easy to use, and stores structured and related data as in a spreadsheet. It comes with additional features, inculding real-time listening to database changes and database backups.
- Authentication: Supabase uses open source auth. It has a build-in authentucation, authorization and user management. It works with all the popular login providers, like Google, Facebook, GitHub, Twitter, Discord and many more. It also stores user data in your database.
- Storage: It has a storage system that lets you store with unlimited scaleability for any file type.
- Edge functions: Server-side TypeScript functions distributed closer to the user. It gives the user a fast and personilized experience.

 ## Strengths

- Hosting: Supabase can be hosted in several ways. You can deploy to your own infrastructure using Docker. Or you can use Supabase Cloud, where Supabase will manage and scale your infrastructure.
- Price: Supabase offers a free plan for small projects, and payment plans for projects that requires bigger databases.
- Real-time database: Allows real-time processing. The user can immediately access data as it is uploaded.
- Zero lock in: Supabase is open source so there is zero lock in.
- Auto-generated-API: The APIs are auto-generated from the database. The API is instant updated when the database changes.

 ## Weaknesses

- When self-hosting you will lose the management UI.
- Supabase is still in Beta stage. They are stable enough for non-enterprise, and offers new features regularly. Being a very new platform it has a smaller community and fewer resources, so it could be harder to get support when needed.


 ## Comparison

Supabase calls itself an open source alternative to Firebase. There are several similarities and differences between them. Let’s look at some of the differences:

- Database: The main difference between the two platforms are the databases. Firebase uses NoSQL databases that stores data as collections of documents. This makes storing and retrieving data easy, but it can be more challenging to perform complex queries and transactions. Supabase uses PostgreSQL databases. This supports complex queries and transactions.
- Open-source: Firebase is not open-source, they are owned by Google and the source code for the platform is not available for users. Supabase is open-source, this means that users can modify the source code, and customize to meet their needs.
- Lock-in: Supabase is open source so there is no vendor lock-in. Firebase is owned by Google and is vendor locked-in. This limits the user to only using the products from this particular vendor. Being a Google product developers must rely on Google’s infrastructure and support.
- Pricing: Both platforms offers a free tier. Supabase charges based on the database size.
For bigger projects Firebase offer a pay-as-you-go plan. They charges for reads, writes and deletes. This can get pricey as an app gains popularity and users.
- Self-hosting: Firebase do not allow self-hosting, while this is something Supabase offers.

 ## Conclusion

Supabase is an open-source platform that offers many features for developers. Like postgres database, authentication, storage and edge function. Supabase can also be self-hosted. For small projects it can be used for free, and offers a paid plan when needing bigger databases. Being open-source gives the users the chance to view and modify the source code, and there is also no vendor lock-in. Supabase was created in 2019. Being a new platform they are still in Beta stage, but offers new features regularly. This makes Supabase a fast-growing platform.

 ## References

https://www.youtube.com/watch?v=zBZgdTb-dns
https://github.com/supabase/supabase
https://supabase.com/blog/supabase-how-we-launch
https://supabase.com/docs/guides/getting-started/architecture#product-principles
https://techcrunch.com/2021/09/09/supabase-raises-30m-for-its-open-source-insta-backend/?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAANqAKvTDVVkg4H1d87RZCIZRHVxReLCqk1CfKGyvg532XudZVSm7f1O1TwFZDrytprmtqh4UFOK4aE_LXESSfrOO4M49Z6TEN0PCxxyD4MwqdQy3Vlqxwj1pLwL9NyPibA9hqyincxSU6M09fiV7XYtBaV-7Ru3q0RzmgXhekTor
https://blog.logrocket.com/firebase-vs-supabase-choosing-right-tool-project/
https://supabase.com/docs/guides/database/overview
https://supabase.com/auth
https://supabase.com/docs/guides/functions
https://supabase.com/docs/guides/self-hosting
https://www.red-gate.com/simple-talk/development/other-development/firebase-and-supabase-key-differences/
https://makerkit.dev/blog/saas/supabase-vs-firebase
https://medium.com/@brenda.clark/firebase-alternative-3-open-source-ways-to-follow-e45d9347bc8c