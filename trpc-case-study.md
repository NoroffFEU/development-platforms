---
title: Example Product Case Study
keywords: development platforms, example project, category name
tags: Development Platforms, Example Project, Category Name
sidebar: development-platforms
permalink: development-platforms/example-product.html
folder: development-platforms
---

![alt-image](https://external-preview.redd.it/announcing-trpc-v10-v0-AjkO8Ti4nYzykqK_syEj1aOgBt4AMKotD3C0JNrkANY.jpg?auto=webp&s=b9c1f6d6e0fbddf97db400d6a56274ea129a58da)

## Introduction

tRPC stands for TypeScript Remote Procedure Call. It's a simple and lightweight library for creating API's using a singular programming language [TypeScript](https://www.typescriptlang.org/), with the option to use a singular respoitory to host both the client and server infrastructure. It operates as a protocol to call your backend functions directly from the frontend, unlike other popular options such as ``GraphQL``.
## Brief History

tRPC was created by [Alex / KATT](https://twitter.com/alexdotjs) and was first released in 2020, with [tRPC/client](https://www.npmjs.com/package/@trpc/client?activeTab=versions) and [tRPC/server](https://www.npmjs.com/package/@trpc/server?activeTab=versions) seeing its 1.0.0 release back in 2020.

Since then there's been many iterations and versions of the product, with its latest version ``10.9.0`` being released 11th of Jan 2022.

Currently its latest versions is seeing around 40k weekly downloads and the repository has a respectable 20k stars on github. The interest in the product have increased recently in social media, and been praised by several prominent ``full-stack`` developers for it's features on how it bridges the gap between front- and backend. 

According to the product creator himself, version 9.x should really be viewed as version 1.x, where as the newly released 10.x should be considered version 2.x.


trash dev

      Now everyone can call themselves full-stack developers.



## Features

tRPC aims to bridge the gap between front- and backend. It does so by creating a seemless experience navigating between your client and server code. You can easily adjust endpoint name in one location, and it will update accordingly on the other side. Working with tRPC allows you to quickly locate the assoicated files you're working with by simply using the ``use definition`` feature, and you'll be taken to that script file.

Since tRPC does not rely on schemas or code generation, and rather is a protocol for exposing backend functions to the frontend it allows a more seemless workflow for the developer, and lightweight well performing application for the end user. 

## Example of basic usage
In the image below, we see a basic example of tRPC protocols being called on front-end. We're using React queries to handle our ``CRUD`` operations. Queries for our ``GET`` requests/operations and ``Mutations`` for our ``POST``, ``PUT`` and ``DELETE`` requests/operations 

```tsx 
      import { api } from '../utils.api'; 

      const newNote = api.notes.createNewNote.useMutation();
```

``api`` is the client-side entry point in this use case. Containing our Next.js App-wrapper as well as typesafe react-query hooks.

``notes`` is the name given to our ``notesRouter`` in our `` appRouter``.

Where as, ``createNewNote`` is the endpoint for handling our ``CREATE`` operation on the backend. 

![alt-image](./tRPC-media/use-definition.png)

Using right click on ``createNewNote`` allows use to use ``go to definition`` to take us directly to the file where ``createNewNote is being defined, directly to our backend endpoint code.

![alt-image](./tRPC-media/use-definition-result.png)

In here we see our note router, which contains all our note related endpoints, in this example, we're only going to take a closer look at ``CREATE`` operation or ``POST`` request in a traditional ``REST API``.

``createTRPCRouter`` is the function we wrap all of our endpoints in by calling a publicProcedure, which is all being stored in the variable ``noteRouter``. 

- ``publicProcedure`` can be viewed as the equivalent of a REST-endpoint. 
- Defining a ``publicProcedure`` is the same no matter the operation. i.e queries or mutations. 

In the example provided we're using ``Zod`` for validation. Wrapping the inputs ``title`` and ``description`` in a `z.object``, with some basic validation requirements.

```ts
      export const noteRouter = createTRPCRouter({
  // Create new note
  createNewNote: publicProcedure
    .input(
      z.object({
        title: z
          .string()
          .min(5, { message: 'Must be 5 characters or longer' })
          .max(20, { message: 'Maximum 20 characters' })
          .trim(),
        description: z
          .string()
          .max(280, { message: 'Maxiumum 280 characters' }),
      })
    )
```

Since this is a ``CREATE`` request we also call ``.mutation`` defining ``context`` and our already established ``input`` defined above, and accessing our notes model from ``prisma``.

```prisma

```prisma
model Notes {
  id          String   @id @default(auto()) @map("_id") @db.ObjectId
  title       String
  description String
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

```ts
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.notes.create({
          data: {
            title: input.title,
            description: input.description,
          },
        });
      } catch (err) {
        console.log(err);
      }
    }),
```







- CRUD operations
- Queries for READ operations
- Mutations for CREATE, UPDATE or DELETE.

## Strengths

#### tRPC is lightweight
Since tRPC is a protocol or method for exposing backend functionality it allows for better performing applications without any code generation or runtime bloat.

Since tRPC uses Typescript, which is a statically typed language, type definitions are checked during compiling rather than runtime, increasing speed of application.

#### tRPC uses Typescript
This can be viewed as both a strenght and a weakness. On one hand, it allows for a uniform coding language and infrastructure between backend and frontend, improving worklflow and communcation between the team. 

While on the other hand, if Typescript is not the preferred programming language, or if team structure is heavily silo'd between front- and backend tRPC might not be the best option.

#### tRPC works great in a monorepo
- Easy to nagivate between code
- better workflow and easier to maintain structure
- Encouraged to do so.

#### Quick development
- Fastest and easiest way to develop an API. 
- Uses type inferecne, which means the type of data is automatically detected, which particularly boosts development in the early stages.
- Integrate with IDE's.

## Weaknesses

#### tRPC uses Typescript
- slow compile time
- Only works if the entire development team is comfortable working with Typescript.
- Can be annoying to use in smaller projects

#### Works best in a monorepo
- Not the best solution if your team is silo'd and seperate repo for the API is preferred.

#### Scalability
- In larger scale projects, in a larger team, its often beneficial to come up with a clear set of rules and a schema that everyone can work from. tRPC does not offer this.
- If your app is getting increasingly more complex and require more nuanced requirements, tRPC might not be the best option.


#### 

## Comparison

- REST API's, GraphQL.

## Summary

Summarise the content and highlight the relevance of the product to a web developer.

### Credits

- Truls Haakenstad Haugen || [@Menubrea](https://github.com/Menubrea)

#### References

- https://www.npmjs.com/package/@trpc/server?activeTab=versions
- https://www.npmjs.com/package/@trpc/server?activeTab=versions
- https://github.com/trpc
- https://trpc.io/
- https://create.t3.gg/en/usage/trpc
- https://www.youtube.com/watch?v=2LYM8gf184U&t=1s
- https://cleancommit.io/blog/trpc-vs-graphql-how-to-choose-the-best-option-for-your-next-project/
