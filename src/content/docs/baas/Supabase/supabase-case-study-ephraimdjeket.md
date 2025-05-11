---
title: Supabase Case Study
author: Ephraim Djeket <ephraimdjeket>
tags: Supabase, BaaS, Postgres, Storage, Authentication, Firebase alternative, Instant APIs, Edge Functions
---

## Introduction to Supabase

Supabase is an open-source backend as a service (BaaS) which is often described as an alternative to Firebase. It provides developers with a pre-configured backend stack, including a PostgreSQL database, user authentication, storage for files, serverless functions and real-time data subscriptions. The goal Supabase is trying to accomplish is that it's trying to let developers start their projects with a postgres database, authentication, instant APIs, storage etc to save time and allow developers to focus on the frontend and other things and not so much the backend.

## Brief History

Supabase was founded in early 2020 by Paul Copplestone and Anthony Wilson. They gained this idea from their experience that many robust open source tools like Postgres existed, but developers lacked an easy way to use them as a backend platform.

### Key Milestones 

- **August 2020:** Supabase presents its prototype, offering Postgres + authentication with firebase. Early adopters begin trying the closed beta.
- **December 2020:** Supabase managed to raise $6M led by Coature, with YC and Mozilla participating. The funding allowed hiring and faster development of storage and functions which were coming soon.
- **April 2021:** Supabase opens to the public. The platform now includes the promised storage service for file uploads and a new SQL web UI for managing your database online. The company runs its first launch week event, a coordinated release of multiple new features.
- **October 2021:** They managed to raise $30M in Series A, bringing a total funding to $36M. By Sep 2021, over 50 000 databases had been launched on Supabase's cloud and 40 000 developers signed up. 
- **March 2022:** Introduction of Supabase edge function and integrating a deno-based serverless functions enviornment. This expanded Supabase beyond data storage into custom compute.
- **May 2022:** Series B funding, where $80M was raised, totaling in $116M. The Supabase community had grown nearly 20x in the past year, over 80 000 developers in the community and 100 000 databases created. Supabase's feature set also included all the core Firebase features like DB, Auth, storage and the enwly launched edge functions.
- **Late 2022-2023:** Supabase continued an aggresive cademce of feature releases and launch weeks. Notable updates here included a GraphQL API, authentication enhancements, storage improvements and integrations for AI. In 2023, Supabase achieved important compliance milestones and grew in production significantly.
- **September 2024:** Series C funding was started and they were able to raise $80M, totaling the entire funding to $196M. Supabase noted that the "AI boom" was a major driver of recent growth as they had been early to support AI use cases and 10% of active databases on Supabase were now powering AI applications.
- **April 2025:** Supabase announced a massive $200M series D at a $2 billion valuation. This raise came just 7 months after the Series C. They had a massive growth where over 1.7 million developers now use Supabase's platform and the project has 81 000+ stars on github.

## Main Features

Some of the main features mentioned here is provided and meant to be an all in one toolkit that replaces the need to set up and maintain seperate services for things like databases, authentication, file storage, realtime updates and backend functions.

- **PostgreSQL Database:** Supabase uses a standard Postgres database to store all application data (tables, rows, etc...), and it enables Postgre's advances features for users. They also encourage using Postgres Row Level Security (RLS) policies tied to their Auth system as this allows the database to enforce who can see or edit each row.

- **Realtime:** One of Supabase's standout features is its built-in realtime capabilities. Any changes to the database can be streamed to clients using websockets, enabling dynamic, live-updating interfaces like chat apps or collaborative tools.

- **File Storage:** Supabase includes a file storage solution, where developers can upload and serve files like images, videos or documents. The storage system is tightly integrated with authentication and RLS policies, making it easy to control who can access specific files.

- **Custom Backend Logic:** Supabase supports edge functions written in Deno. These serverless functions can run at the edge for low-latency responses and are useful for handling events, running background jobs or integrating with third-party APIs.

### How some of the features can be utilized:

| Features | Description |
| --- | --- |
| Blog/CMS | A Blog or CMS can use Supabase's auto-generated REST API to manage posts, comments and users. Editors can log in through OAuth, create new content via the API, and use edge functions to send email notifications on new posts. |
| Chat application | A chat application can use Supabase's realtime database to instantly sync messages between users. For example, when one user sends a message, all connected clients will receive the new message instantly without needing to refresh.  |
| Task manager app | For a task manager app, supabase uses authentication to handle sign-ups and logins, PostgreSQL to store task data, and Row-Level Security to ensure each user only accesses their own tasks. |

## Market Comparison

Supabase is in the competetive market of backend as a service platform. Below we'll briefly compare Supabase to other well known BaaS.

### Supabase vs Firebase

Firebase is known to be Supabase's direct competitor. The biggest differences here is that Firebase uses Firestone which is a NoSQL document-based database, while Supabase uses PostgreSQL. Supabase is fully open-source, while Firebase is not. Self hosting is possible with Supabase, but not with firebase. Supabase is often favored by developers who want SQL, open-source tooling and full control over data.

### Supabase vs Hasura

Hasura is another platform that provides instant GraphQL APIs on PostgreSQL. The advantage Supabase have here is that it provides a more broad experience while Hasura is better suited for projects that are GraphQL heavy.


## Getting Started

**1. Create an account:** Go to https://supabase.com and sign up using your email or Github account.

**2. Create a new project:** Once you're logged in, click "New project", then:
- Give your project a name.
- Choose a strong database password (you'll need this to connect later).
- Select a region close your to your users.
- Click "Create project" (this will provide a PostSQL database for you).

**3. Access the dashboard:** After your project is ready, you'll see the Supabase dashboard where you can:
- View and edit tables in the database.
- Configure authentication settings.
- Manage file storage.
- Use the SQL editor.

**4. Add a table:** In the table editor, you can create a table manually or use SQL. For example a todo table with columns like id, task and completed. You can also enable the RLS. It's going to be off by default.

**5. Set up authentication:** You can set up the auth by going to the tab to enable email/password login or OAuth.

**6 Connect Supabase to project:** You can install the Supabase client in your frontend project with for example javascript by doing the following:
```
npm install @supabase/supabase-js
```
then initialize it:
```
import { createClient } from "@supabase/supabase-js"

const supabase = createClient("https://project-name-supabase.co", "anon-key")
```
this will allow you to interact with your database using Supabase's javascript client for querying, inserting, updating and authentication.

**10. Go live:** Your Supabase project is cloud-hosted by default and production ready. You can now build and deploy your frontend and connect directly.

## Conclusion

I think Supabase is a great choice if you want to focus more on building your project without spending too much time with the backend. It provides you with a real database (PostgreSQL), built in authentication, file storage and realtime features. And everything is managed by a clean interface to easily navigate around. It's also open-source, which means that you have full control without being locked into a specific platform. 

## References

[Supabase Official Website](https://supabase.com/)

[Supabase Docs](https://supabase.com/docs)

[Introducing Supabase: An Open Source Firebase Alternative](https://supabase.com/blog/introducing-supabase)

[Supabase vs Firebase – A Deep Comparison](https://blog.logrocket.com/supabase-vs-firebase-comparison/)

[Fireship – Supabase in 100 Seconds](https://www.youtube.com/watch?v=zBZgdTb-dns&ab_channel=Fireship)

[The Net Ninja – Supabase Full Course for Beginners](https://www.youtube.com/watch?v=ydz7Dj5QHKY&list=PL4cUxeGkcC9hUb6sHthUEwG7r9VDPBMKO&ab_channel=NetNinja)

[Hasura vs Supabase: Head-to-Head](https://hasura.io/blog/hasura-vs-supabase-compare-graphql-backend/)