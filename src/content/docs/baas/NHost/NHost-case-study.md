---
title: NHost case study
author: Jonas Nygaard <JonnyNewfarm>
tags: case study, baas, NHost
---

## Introduction

Nhost is a fully secured, open-source Firebase alternative with GraphQL and a backend platform service on the cloud. With NHost you can integrate any of your preferred frontend frameworks.

## Main Features

- **Postgress database:** NHost comes with its own relational Postgres database.
  You as a developer don't need to install and set up the database yourself, you can manage it using NHost Database UI.
- **Authentication service:** NHost comes with a authentication service that you can integrate with GraphQl API. With this service you can authenticate users with the security needed. Some of the authentication methods available: Email and password, phone number, facebook, Google, and many other options.
- **GraphQL API:** Developers can use the graphQl API to fetch and modify data( updating, deleting etc).
- **NHOst storage:** With NHost storage users can upload and download files. Metadata and permissons(in hasura) are managed with the GraphQL API.
  The files you can store can be of any type, document, media files etc.
- **Serverless functions:** Developers can use NHost to deploy serverless functions. This can be used to handle form submissions without reloading the page often, handle event triggers, etc.
  With NHost developers can deploy code with javascript(.js) or Typescript(.ts).
- **Github integration:** With NHost you can automatically deploy you project when any changes are made, to a git repository. Right now GitHub is the only git provider supported.

## Getting Started

To get started using NHost you need to create an account with them first, You can sign up with your Github account, or by adding your email and a password.

When your account is created you can start on your project.

**To create a project it will be required to add some information about it:**

- Name of the project
- workspace
- A password for the database
- Your region
- The plan you want, based on your needs

## Conclusion

- NHost is at the time one of the smallest competitors on the baas marked, and with that comes the danger of the service shutting down like with parce. That is something to keep in mind when choosing a Baas for your project.

- link to the story about parse(https://www.willowtreeapps.com/craft/parse-shutdown-what-it-means-and-what-you-can-do).

- NHost has alot of the same features as other services like Firebase and Supabase, the main difference is that NHost is using a GraphQl database.So if your are into working with graphQL, then Nhost is an great alternative to Firebase, supabase and other Baas providers.

## References

- (https://docs.nhost.io/)
- (https://medium.com/@realmrtrice/introduction-and-overview-of-nhost-f2a625eae053)
-
