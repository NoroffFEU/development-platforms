---
title: Sanity
author: Joakim Tveter <joakimtveter>
tags: development platforms, headless, cms, sanity
---

## Introduction

Sanity is a headless content management system (CMS), they describe themselves as "a platform for structured content". Sanity consists of 2 main parts: Sanity Studio and the Content Lake. The Studio is the frontend where you manage your content. The Content Lake is where your data is stored, and a Content Delivery Network secures high availability.

## Brief History

There is not a lot of history to be found about Sanity online. Sanity was founded by three Norwegians; Simen Svale Skogsrud, Even Westvang, and Øyvind Rostad. Magnus Kongsli Hillestad, the current CEO, is also listed as a co-founder, but joined the company in 2018. The startup was had its initial funding round in 2016 and has since then recievd over 86 million US dollars in venture capital. Sanity was launched as a service in 2017. The company has offices in Oslo and San Francisco.

In 2022 Sanity released version 3 of the Sanity Studio, which is the current version of the CMS.

## Main Features

Sanity is a very customizable Content Management System. Because the frontend is an open source React application, you have a lot of power to customize the user experience to fit your needs. For most use cases the default Studio is good enough. You can also host the Studio on your own domain, embed it into your own application, or let Sanity host it for you on Netlify.

The data is stored in Sanity's Content Lake, which is a database that is optimized for storing structured data. The data is cached width Sanity's CDNs, which makes it very fast to fetch data from Sanity. The content Lake is booth a selling feature and a dealbreaker for some, since you don't control the data yourself.

Sanity also has a CLI tool that you can use to manage your Sanity projects.

### GROQ and data fetching

You can fetch the data from Sanity using either GraphQL or Sanity's own query language called GROQ. GROQ is very similar to GraphQL and very powerful. You can also fetch data with a REST like API, but you basically use GROQ query in the query parameters.

### Portable Text

Sanity has invented a new way of dealing with rich text called Portable Text. Portable Text is a JSON based and is designed to be used in any format or markup where you want to render rich text content. They have created a React component called `PortableText` that you can use to render the content. There are community components for other frameworks like Vue and Svelte. Portable Text is fully open source.

### Images

Sanity has a very good image pipeline. You can upload images to Sanity and it will automatically resize them to fit your needs. You can also use the image pipeline to resize images on the fly. This is very useful if you have a lot of images and want to optimize the performance of your site. Images also has a hotspot feature that allows you to crop images to fit a specific aspect ratio but keep what is important in the frame.

### Visual Editing

Sanity has a visual editing feature that allows you to edit the content directly on the page. This is very useful for non-technical users. It is also possible to create custom visual editing components. This feature is currently only available for the Enterprise plan.

### Single Sign On

Sanity has Single Sign On (SSO) support for Google, GitHub, and SAML.

## Market Comparison

There are plenty of other headless CMSs on the market. They all deliver the main functionality, which is structured data in JSON format. The main differences are the user experience, developer experience, the price, and the hosting options. Some have integrated visual editors or other advanced features.

Some popular headless CMSs are Strapi, Storyblok, Wordpress, Enomic, Contentful, Ghost CMS, and Payload CMS. They all have their pros and cons. Some are open source, some are free, and some are very expensive, some are self-hosted, and some are only available as a service.

### Strapi

Stapi is open source and has a graphical schema builder that is very easy to use. It allows you to host the data yourself or use their Strapi Cloud managed hosting. Strapi is for the most part free but be aware that you will have to pay for some of the more advanced features like Single Sign On or more roles. Strapi has a schema builder that is very easy to use.

### Storyblok

Storyblok is a closed source hosted service. It has a free tier that allows for only one user. Storyblok has a powerful visual editor and delivers the data through. It is also very easy to get started with Storyblok. And has examples for all major frameworks.

### Wordpress

Wordpress is not a headless CMS out of the box, but it is still very popular. It comes with a REST API and a comprehensive plugin ecosystem that is second to none. These plugins allow Wordpress to do whatever you want, like adding GraphQL support.

Wordpress is the most used CMS on the market and a good alternative if you want to host the data yourself. It is fully open source and runs on the LAMP-stack. (Linux, Apache, MySQL, and PHP) Wordpress can be hosted cheaply on shared hosting.

Even though it is fully open source, but you might want to pay for great plugins like Advanced Custom Fields Pro. Wordpress is widely used so you have an easy time finding plugins, developers, and tutorials.

### Enomic

Enomic is Norwegian company with an impressive client list including NAV and The Norwegian Armed Forces. It is mostly open source and can either be self-hosted or use managed hosing. It delivers a GraphQL API.

### Contentful

Contentful is a hosted service. It provides both REST and GraphQL APIs. It has a free tier that allows for up to 5 users.

### Ghost CMS

Ghost CMS is fully open source and MIT licensed. It is free, but that is hard to tell from the website, since they heavily promote the hosted version called Ghost Pro. Best way to get started is on their [GitHub page](https://github.com/tryghost/ghost). It is not only a headless CMS but allows you to disable the website and only use its REST API.

It runs on Node with Express and MySQL 8 in production but uses SQLite for development. It has a basic blog out of the box.

### Payload CMS

Payload is fully open source and MIT licensed. It can be self-hosted or hosted through the Payload Cloud service. Payload is built on Node, Express and MongoDB. It delivers your data through GraphQL, REST, and local APIs. It has a lot of promise, but it is not however fully mature as of summer of 2023. Breaking changes will probably happen.

### Summary

Most headless CMS are very similar, they all deliver structured data in JSON format. The only way to find the one that works for your project is to try them all. They all have a free trial, free tier, or are fully open source so you can try them out for free. In the end it comes down to your needs and preferences.

## Getting Started

The easiest way to get started with Sanity is to use their starter projects. You can find them in [Sanity's template directory](https://www.sanity.io/templates).

Another easy way is to use the Sanity CLI tool. You can install it with npm, npx, pnpm, or yarn.

```bash
npm install --global sanity@latest

# Alternatively
yarn global add sanity@latest
pnpm install --global sanity@latest

```

After installing the CLI you can create a new project with the `create` command.

```bash
npm create sanity@latest

# Alternatives
yarn create sanity@latest
pnpm create sanity@latest

```

You will be prompted regarding the following project settings:

1. Create or choose an existing project.
2. Choose a dataset name (default is production).
3. Select a folder for the sanity studio.
4. Choose a schema template. (blog, ecommerce, movie project, clean - no schema)
5. Would you like to use TypeScript? (yes/no)
6. Package manager for installing dependencies (npm, yarn, manual).

You are now ready to start developing your Sanity project.

```bash
cd project-name
npm run dev
```

### Creating a new Schema

Sanity uses schemas to define the structure of the data. You can create a new schema file in the `schemas` folder. Below is the default blog post schema from the Sanity blog starter project.

```js
// schemas/post.js
import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: { type: 'author' },
        }),
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'category' } }],
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        }),
    ],

    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage',
        },
        prepare(selection) {
            const { author } = selection;
            return { ...selection, subtitle: author && `by ${author}` };
        },
    },
});
```

After you have created a new schema, add it to the schema in `sanity.config`-file.

```js
// schemas/index.js
import blockContent from './blockContent';
import category from './category';
import post from './post';
import author from './author';

export const schemaTypes = [post, author, category, blockContent];
```

```js
// sanity.config.js
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

export default defineConfig({
    name: 'default',
    title: 'sanity-example',

    projectId: 'xxxxxxxx',
    dataset: 'production',

    plugins: [deskTool(), visionTool()],

    schema: {
        types: schemaTypes,
    },
});
```

### Fetching Data from Sanity example

This is how to fetch data from Sanity using GROQ and the Sanity client library.
This requests all documents of type `post` that are published and have not been de-published yet. It also fetches the `author` of the post, which is a relational field and a separate document type. This example is from a next.js project width embedded studio.

```js
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';

async function getData() {
    const query = groq`*[_type == "post" && publishedAt < now() && (depublishedAt > now() || depublishedAt == undefined)] {..., author->}`;
    const data = await client.fetch(query);
    return data;
}
```

## Conclusion

Sanity is an easy to use and easy to customize CMS. It is perfect for small projects with few users. It is also very good if you do not want to host the data yourself. It is a bit expensive when having a lot of users, but for many use cases it is worth the cost.

## References

- [Sanity Documentation](https://www.sanity.io/docs)
- [Sanity Templates](https://www.sanity.io/templates)
- [Sanity Priceing](https://www.sanity.io/pricing)
- [Portable Text](https://www.sanity.io/docs/presenting-block-text)

## Additional Resources

- [Strapi](https://strapi.io/)
- [Storyblok](https://www.storyblok.com)
- [WordPress](https://www.wordpress.org)
- [Enonic](https://enonic.com/)
- [Contentful](https://www.contentful.com)
- [Ghost CMS](https://ghost.org)
- [Payload CMS](https://payloadcms.com)
