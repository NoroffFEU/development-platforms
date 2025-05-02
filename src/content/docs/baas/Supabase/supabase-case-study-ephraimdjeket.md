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

Describe the primary purpose of the tool that you have selected. Which problems does it solve? Is there something unique about this tool? How can it be useful to developers?

You may use subheadings, tables or bullet points to structure your description:

- **PostgreSQL Database:** Supabase uses a standard Postgres database to store all application data (tables, rows, etc...), and it enables Postgre's advances features for users. They also encourage using Postgres Row Level Security (RLS) policies tied to their Auth system as this allows the database to enforce who can see or edit each row.
- **Realtime:** One of Supabase's standout features is its built-in realtime capabilities. Any changes to the database can be streamed to clients using websockets, enabling dynamic, live-updating interfaces like chat apps or collaborative tools.
- **File Storage:** Supabase includes a file storage solution, where developers can upload and serve files like images, videos or documents. The storage system is tightly integrated with authentication and RLS policies, making it easy to control who can access specific files.
- **Custom Backend Logic:** Supabase supports edge functions written in Deno. These serverless functions can run at the edge for low-latency responses and are useful for handling events, running background jobs or integrating with third-party APIs.

Example feature table:

| Feature | Description |
| --- | --- |
| Example Feature | This feature does something for a specific reason. |
| Example Feature | This feature does something for a specific reason. |
| Example Feature | This feature does something for a specific reason. |

You may find this online tool useful for creating tables: https://www.tablesgenerator.com/markdown_tables

## Market Comparison

This section can be used to compare the advantages and disadvantages of your chosen tool to other similar tools. You may use subheadings, tables or bullet points to structure your description.

If you are writing about an open source tool, it may be a good idea to compare it to similar proprietary tools. Likewise, if you are writing about a proprietary tool, it may be a good idea to compare it to similar open source tools.

Similarly, a self hosted tool and a cloud based tool with a similar purpose may make for a good comparison.

## Getting Started

If applicable, describe how to get started with your chosen tool. By providing examples, this can help to demystify a tool and make it more accessible to beginners.

## Conclusion

This section can be used to summarize your findings. What are the main advantages and disadvantages of your chosen tool? What are the main use cases for this tool? What are the main limitations of this tool? What does the future look like for this tool?

## References

- [Example.com](https://example.com)
- *Good Examples* by John Doe, 1990
- The Example Podcast, Episode 1
- [Examples Explained](https://youtu.be/dQw4w9WgXcQ)

## Additional Resources

- [More about Examples](https://example.com)
- [Examples, the Full Course](https://youtu.be/dQw4w9WgXcQ)