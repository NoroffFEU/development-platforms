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

tRPC stands for TypeScript Remote Procedure Call. It's a simple and lightweight library for creating APIs using a singular programming language [TypeScript](https://www.typescriptlang.org/).It operates as a protocol to call your backend functions directly from the frontend, unlike other popular options such as ``GraphQL``, which relies on schemas and code generation.

## Brief History

tRPC was created by [Alex / KATT](https://twitter.com/alexdotjs) and was first released in 2020, with [tRPC/client](https://www.npmjs.com/package/@trpc/client?activeTab=versions) and [tRPC/server](https://www.npmjs.com/package/@trpc/server?activeTab=versions).

Since then there's been many iterations and versions of the product, with its latest version ``10.9.0`` being released 11th of Jan 2022.

Currently its latest versions is seeing around 40k weekly downloads and the repository has a respectable 20k stars on github. The interest in the product have increased recently in social media, and been praised by several prominent ``full-stack`` developers for it's features on how it bridges the gap between front- and backend, seamless workflow and overall ease-of-use in a completely typesafe eco-system.

According to the product creator himself, version 9.x should really be viewed as version 1.x, where as the newly released 10.x should be considered version 2.x.

Version 10 brings in performance improvements as well as quality-of-life enhancements. Some of the changes include:

- Simplified backend writing of routers and procedures.
- Made client calls to backend procedures more easily defined.
- Allows to seamlessly navigate between client/server code with a single mouse click.
- Simplified the operation of creating complex inference helpers.
- Middlewares are now reusable and chain. 

![alt-image](./tRPC-media/trpc-graph.png)

tRPC's search popularity over the last 12 months. 

## Features

One of the most unique features with tRPC is how it brings typesafety between server and client code, and how well its handled. Instead of getting uncaught type-errors on runtime, Typescript will detect type related issues between server and client before the file is even saved. In addition to this, tRPC allows you to quickly update endpoint names in one place and update all associated client/server files at the same time, and navigate between script files by simply ``CMD+click`` or ``right-click+use-definition``.

Since tRPC does not rely on schemas or code generation, and rather is a protocol for accessing backend functions to the frontend, it allows a more seamless workflow for the developer, and lightweight well performing application with a tiny footprint for the end user.

#### Automatic typesafety
While this is a Typescript feature, and not isolated to tRPC it allows for an eco-system where the client will notify you of errors even before you save the files.

#### Great DX
tRPC has no build or compile steps, no code generation, runetime bloat or build steps.

#### Framework agnostic
tRPC works will all JavaScript frameworks and runetimes. It's easy to add to already existing projects. 

#### Autocompletion
tRPC will attempt to auto-complete your queries, speeding up development and ensuring the use of valid query data. 

### Example of use

In the example we're using a T3 app, configured with tRPC, Prisma, MongoDB, Next.js and Typescript. 

      - MongoDB is our database.
      - tRPC is will be used to create our endpoint.
      - Prisma to handle data to our database.

In our front-end, client folder we have defined an endpoint the following way. We're going to take a closer look at how tRPC can be used to tie everything together from backend functions, frontend rendering and an updated database with a new entry, while highlighting some of tRPC's excellent workflow and QoL features.

```tsx 
      import { api } from '../utils.api'; 

      const newNote = api.notes.createNewNote.useMutation();
```

 - ``api`` is the client-side entry point in this use case. Containing our Next.js App-wrapper as well as typesafe react-query hooks.

- ``notes`` is the name given to our ``notesRouter`` in our `` appRouter``.

- Where as, ``createNewNote`` defines the endpoint for handling our ``CREATE`` operations with the procedures we've created on the backend. 

![alt-image](./tRPC-media/use-definition.png)

We can easily navigate to it by right-clicking -> ``go to definition`` and it will take us straight to our router function where our procedures are being defined. 

![alt-image](./tRPC-media/use-definition-result.png)

A single router typically contain several procedures. In the case of our ``noteRouter``, it would make sense to have procedures, or endpoints that handles all of your ``CRUD`` operations: 

Read all notes, read a single note defined by ID, create a new note, update note and delete an existing note. In this example, we're specifically going to take a closer look at a ``CREATE`` operation endpoint using tRPC's library. 

- ``createTRPCRouter`` is the function we wrap all of our procedures in in by calling publicProcedure, after our name definition. 

- ``publicProcedure`` can be viewed as the equivalent of a REST-endpoint. 
- Defining a ``publicProcedure`` is the same no matter the operation. i.e queries or mutations. 

 Calling the procedure builder ``input``, which is where we define the content of our endpoint. In this case we're using ``Zod`` for some basic validation and creating a ``title`` and ``description`` keys with the type of string.
 
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

Now that we've defined our ``input`` we can use the procedure builder ``.mutation`` to either alter or create a new instance with those definitions. 

```prisma
model Notes {
  id          String   @id @default(auto()) @map("_id") @db.ObjectId
  title       String
  description String
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

In this use case we're using prisma to easily read or write data to our database, above is the model for our ``Notes``.

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

 In our asyncronous function we call ``context`` and our previously defined ``input`` and call ``ctx.prisma.notes.create`` to a create a new instance on our database where title is that of input.title, and description is that of input.description.

Using the same method as before, we can right click on ``createNewNote`` to take us back to our front-end/client code. 

```tsx
     const newNote = api.notes.createNewNote.useMutation();
```

Where we've called our backend function and stored it in a variable ``newNote``. Within the render code, we've created a simple form, with text input for title and description, and added the following script to run on submit:

```tsx
      <form
          className="ml-5 rounded bg-white p-5"
          onSubmit={(event) => {
            event.preventDefault();
            newNote.mutate({
              title: data.title,
              description: data.description,
            });
            setData({
              title: '',
              description: '',
            });
          }}
        >
```

The repository is configured with a public MongoDB cluster with our prisma model. On submit, the form should now add a new entry to the database with the content of ``title.value`` and ``description.value``. 

![alt-image](tRPC-media/form-example.png)

A very basic layout render of the form as well as alsready existing notes in the database on the right hand side. Submitting the form should now update the database with a new entry:

![alt-image](tRPC-media/database-result.png)

## Strengths

#### tRPC is lightweight
Since tRPC is a protocol or method for accessing backend functionality, it allows for better performing applications without any code generation or runtime bloat.

Since tRPC uses Typescript, which is a statically typed language, type definitions are checked during compiling rather than runtime, increasing speed of application.

#### tRPC uses Typescript
This can be viewed as both a strength and a weakness. On the one hand, it allows for a uniform coding language and infrastructure between backend and frontend, improving workflow and communication between the team. 

While on the other hand, if Typescript is not the preferred programming language, or if team structure is heavily siloed between front and backend tRPC might not be the best option.

#### tRPC works great in a monorepo
With how tRPC communicates between client and server code, you are encouraged to use a singluar repository, and several highlighted features are only accessible if you do so. On a smaller scale, there are many benefits in doing so. It's easier to navigate between client/server code, making changes and ensure typesafety within the entirety of your code base. No more ``uncaught type-errors``.

#### Quick development
- Fastest and easiest way to develop an API. 
- Uses type inferference, which means the type of data is automatically detected, which particularly boosts development in the early stages.
- Integrate with IDE's.

With some familiary to tRPC and well synergized techonologies, such as Next.js and Prisma, you can have functional endpoints up and running within minutes using a pre-configured project package. Such as [T3-app](https://create.t3.gg/).

## Weaknesses

#### tRPC uses Typescript
While a front-end team certainly has knowledge of Javascript and may be well versed in Typescript, the same might not be the case for a backend team. There is a greater variety in programming languages typically used for backend than for frontend, meaning that Typescript may not always be the most suitable choice.

While strict static typing leaves a lot of benefits, it can be frustrating to and cumbersome to learn, especially for junior level developers.

#### Works best in a monorepo
Since many of tRPC's features benefit from using a singular repository, it might not be the best option if the development team has a need or requirement for a heavily siloed frontend and backend.

#### Scalability
- In larger scale projects, in a larger team, its often beneficial to come up with a clear set of rules and a schema that everyone can work from. tRPC does not offer this.
- If your app is getting increasingly more complex and require more nuanced requirements, tRPC might not be the best option.


## Comparison

[Web Dev Simplified](https://www.youtube.com/watch?v=lxnPMB0Jc7E) asks recently in a video if tRPC spells the end to ``REST/graphQL``. While his title is almost certainly to generate views and clicks, the video does highlight some of the unique benefits of tRPC as well as its simplicity of use. When possible, people tend to gravitate towards the option that provides them the simplest solution. tRPC often do so in an intelligent and seamless manner. 

However, there are dilemmas and industry requirements that ``tRPC`` cannot properly solve, and in such cases there might be better options out there. One such popular option is ``graphQL``.

### GraphQL
In short, ``graphQL`` is a query language for APIs and a runtime for fulfilling those queries with your existing data. While ``REST`` APIs will always return the entire object the client is requesting, ``GraphQL`` allows you to query to your API and return only the data you're interested in. ``With GraphQL`` the client controls the data returned, not the server. 

``GraphQL`` queries can access several properties at once by following references between them, making it possible to fetch all the data you need in a single request. Significantly reducing the bandwidth footprint. 

Similar to ``tRPC``, ``GraphQL`` offers typesafety. ``GraphQL`` is organized in terms of types and fields, instead of endpoints. 

#### Scalability and maintainance
With ``GraphQL`` you can easily add new fields and types to the API without impacting or breaking existing queries. As a result the server code base becomes easier to maintain and allows for API growth with less hassle and complication.

GraphQL is being used by industry juggernaughts such as ``Facebook``, ``Github``, ``Airbnb``, ``Twitter`` and many others.

### Which is better? tRPC or GraphQL?
``tRPC`` is still very much in its infancy, and while many of its features are excellent it cannnot match ``GraphQL's`` scalability and network efficiency. Nor does it need or try to. In my view, they can coexist not as competing technologies, but technologies that both offer their strength and weaknesses depending on use cases.

*Use GraphQL if:*
- Its a large scale project, with the need of well defined schemas, maintenance and future development requirements.
- if your team is either heavily siloed or use multiple programming languages.

*Use tRPC if:*
- You are looking to learn to create your own APIs.
- You are working in a smaller development team or work as a freelancer.
- You use Typescript as your preferred programming language.
- You are developing a smaller scope application.


## Summary

tRPC offers an excellent introduction to creating APIs. Using it is intuitive, fast and efficient. With some experience, you can get functional endpoints up and running within minutes. Whether you are a junior when it comes to backend or web development in general, or an experienced full-stack developer tRPC should offer a lot of welcome features for your next project - increasing your workflow, maintaining your code base and overall helping you become an overall more productive developer. 

[As Chris Bautista states in his overview video](https://www.youtube.com/watch?v=2LYM8gf184U&t=665s)

```
Now everyone can call themselves full-stack developer.
```

With some learning and familiary with the ``tRPC`` library and excellent pre-configured projects such as ``T-3 App``, it's really not too far from the truth. Maybe for your next project you too will check it out?

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
- https://www.youtube.com/watch?v=lxnPMB0Jc7E
- https://trpc.io/docs/migrate-from-v9-to-v10#summary-of-changes
- https://www.stxnext.com/blog/typescript-pros-cons-javascript/
- https://www.perfomatix.com/trpc-vs-graphql/
- https://graphql.org/
