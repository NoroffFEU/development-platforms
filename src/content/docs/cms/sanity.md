# Sanity CMS

**By**: Kristian Hagesæter, Martine Midttveit & Maik dos Santos.  
**Tags**: CMS, Sanity, Headless CMS.

## Introduction

In the rapidly evolving landscape of web development, the need for flexible, efficient, and scalable content management solutions is greater than ever. While traditional CMS platforms are powerful, they often come with constraints that limit creativity and adaptability. This is where headless CMS platforms, which separate content from its presentation, come into play. A headless CMS focuses solely on storing and managing content without handling its design. It delivers content through APIs, allowing developers to build custom front-ends with any technology they choose. Among the leading solutions in this space is Sanity, a headless CMS that is redefining content management. In this article, we will explore Sanity's features, benefits, and real-world applications, and understand why it has become a significant player in modern web development.

## Brief History

- **2018**  
  Sanity officially launches after being in development since 2017. The founders are Magnus Kongsli Hillestad, Simen Svale Skogsrud, Øyvind Rostad, and Even Westvang. The company introduces itself as a customizable, headless CMS with a focus on structured content and developer-friendly features.

- **2019**  
  Sanity introduces "Sanity Studio," a real-time, collaborative content management interface that allows users to tailor the CMS to their specific needs.

- **2020**  
  The company tripled its community and customers and welcomed companies like Figma, Sonos, Netlify, Cloudflare, National Geographic, and Unilever.  
  Sanity launches "Sanity.io Community," an online community forum designed to connect users, share knowledge, and foster collaboration among developers and content creators.

- **2021**  
  The company passed 100K users.

- **2022**  
  Shopify makes a significant investment in Sanity, signaling a strategic partnership aimed at integrating Sanity’s CMS capabilities with Shopify’s e-commerce platform. This move boosts Sanity’s visibility in the e-commerce space.  
  Sanity releases a major update to its GraphQL API, further enhancing its API-first approach and making it easier for developers to integrate with various platforms and technologies.  
  Sanity is ranked as the top headless CMS in the world, recognized for its innovative features, strong developer support, and growing market presence.

- **2023**  
  Sanity is once again ranked as the top headless CMS in the world for the second consecutive year, solidifying its position as a leader in the industry.

- **2024**  
  Sanity surpasses 100K active users, a milestone that reflects its growing popularity and adoption across various industries and use cases.

## Main Features

Ranked as the top headless CMS in the world in 2022 and 2023, Sanity allows teams to create, manage, and distribute content across multiple platforms seamlessly. It offers intuitive content editing with real-time collaboration, along with advanced customization options that let developers design content models to fit their needs.

### 1. Multi-platform content distribution

Sanity is built with an API-First Approach, offering a robust GraphQL API that simplifies data retrieval and makes it easier to integrate with other technologies. This API-first strategy ensures that content can be accessed and delivered to any platform or device, making it future-proof as new technologies emerge. It is designed to excel at managing the complex challenges of distributing content across multiple platforms, including websites, apps, and online stores, in various languages. Whether you're targeting different markets, versioning content for both B2B and B2C audiences, or maintaining websites in multiple languages, Sanity's robust Multi-Language Support and multisite management capabilities make it easy to keep everything organized and consistent.

With Sanity Studio, users can centralize all their content management in one place, streamlining the distribution process to ensure content remains consistent across all channels. This centralized approach not only simplifies content management but also enhances consistency across platforms. Additionally, Sanity Studio offers a highly customizable UI that can be tailored to your specific needs using JavaScript, allowing you to hide unnecessary features and design the interface to match your unique workflow. Sanity also supports serverless and edge computing architectures, which enable faster content delivery by reducing latency and improving performance across global markets.

### 2. Real-time collaboration

Sanity offers one of the most user-friendly content creation and publishing solutions available. Instead of tying content to specific pages or apps, Sanity allows you to create independent content modules. For example, if you need to update the time for an event, you can do it across all platforms with just a few clicks. This makes content management more efficient and ensures brand consistency.

Furthermore, Sanity's Real-Time Collaboration feature is particularly valuable for teams. Multiple users can work on the same document simultaneously without conflicts, much like the experience you get with Google Docs. This feature is enhanced with granular permissions, which allow admins to control who can view, edit, or publish specific content. This makes teamwork smoother and more efficient. The platform also includes version history and tracking, allowing teams to easily revert to previous states of a document if needed, making collaboration even more secure and controlled.

### 3. Creating tailored experiences

Sanity allows developers to create Custom Content Models that fit the specific needs of their projects. You can design your own content types, relationships, and validation rules, giving you full control over how your content is structured. This flexibility makes it easier to create tailored content experiences that align with your brand and project requirements.

### 4. Seamless integration with E-commerce platforms

Sanity is designed to integrate smoothly with various e-commerce systems, making it an excellent choice for online retailers. Shopify, for instance, made a significant investment in Sanity in 2022, and the two platforms now work together seamlessly. Whether you need to connect with plugins, add-ons, or other systems, Sanity's integration capabilities allow you to build and expand your solutions without hassle.

### 5. Cost-efficiency and scalability

Sanity is built with future growth in mind, resulting in lower operational costs compared to many other CMS platforms. Since it's cloud-based, there are ongoing hosting costs, but these scale reasonably with your activity level. This makes Sanity a cost-effective option for both small and large enterprises, without the fear of expensive licenses. Sanity's pay-as-you-go pricing model ensures that you only pay for the resources you use, which can be particularly advantageous for growing businesses that need to scale their operations quickly without incurring massive upfront costs.

Moreover, Sanity’s scalable architecture is designed to handle large volumes of content and traffic, making it suitable for enterprise-level operations as well as smaller projects. The platform’s focus on efficiency extends to its developer tools as well, with features like hot-reloading during development, which speeds up the content creation and deployment processes, further reducing time and costs.

## Market Comparison

Comparing Sanity with other popular content management systems (CMSs) offers valuable insights into its strengths and weaknesses. For this project, we’ve chosen to compare Sanity with Strapi. This platform is widely used and shares similarities in its content management capabilities, making it ideal for a comparative analysis.

### Sanity vs. Strapi

1. **Architecture and Technology**

   - **Sanity**:
     - Cloud-based with Open-Source Component: Sanity is primarily a cloud-based platform where the backend is managed by Sanity’s infrastructure (the Content Lake), while the frontend interface, Sanity Studio, is open-source and built with React.
     - API-First Approach: Sanity is designed to be API-first, providing RESTful and GraphQL APIs to access content, making it easy to integrate with various front-end technologies.
     - Real-Time Content Synchronization: The Content Lake allows for real-time collaboration and synchronization, ensuring that changes are instantly reflected across all connected platforms.

   - **Strapi**:
     - Fully Open-Source and Self-Hosted: Strapi is a fully open-source CMS that developers can host on their own servers. It provides complete control over both the frontend and backend.
     - API-Centric with Customizable Endpoints: Strapi allows developers to generate RESTful or GraphQL APIs with customizable endpoints, giving flexibility in how data is structured and accessed.
     - Database Agnostic: Strapi supports multiple databases, including MongoDB, PostgreSQL, MySQL, and SQLite, allowing for flexibility depending on the project’s needs.

2. **Customization and Flexibility**

   - **Sanity**:
     - Schema-Driven Content Models: Sanity allows for extensive customization through schema definitions written in JavaScript. Developers can define content types, relationships, and validation rules to suit specific project requirements.
     - Customizable Sanity Studio: Sanity Studio can be fully customized with React components, giving developers the ability to tailor the user interface according to the needs of content creators.
     - Portable Text: Sanity’s Portable Text is a rich-text editor that stores content as structured data, allowing for greater flexibility in how content is rendered across different platforms.

   - **Strapi**:
     - Custom Content Types: Strapi enables the creation of custom content types and fields through an intuitive GUI or programmatically. This allows developers to model complex content structures without needing to write code.
     - Plugin System: Strapi offers a robust plugin system that extends the core functionalities of the CMS. Developers can either use community plugins or create their own to meet specific requirements.
     - Role-Based Access Control (RBAC): Strapi provides granular control over user permissions, allowing administrators to define roles and access levels for different users, enhancing security and workflow management.

3. **User Experience and Ease of Use**

   - **Sanity**:
     - Real-Time Collaboration: Sanity’s real-time collaboration features make it easier for teams working simultaneously on content. It provides a collaborative environment where changes are immediately visible to all users.
     - Customizable User Interface: The Sanity Studio’s interface can be tailored to match the workflow and requirements of content editors, making it more intuitive and efficient.
     - Developer Experience: Sanity provides a modern development experience with features like hot-reloading, which accelerates development cycles and enhances productivity.

   - **Strapi**:
     - User-Friendly Admin Panel: Strapi’s admin panel is designed for ease of use, allowing content creators to manage content effortlessly with a clear and organized interface.
     - Developer-Friendly: Strapi’s open-source nature and customizable features offer a flexible development experience, making it suitable for developers who prefer complete control over their CMS.
     - Community and Documentation: Strapi has an active community and extensive documentation that helps developers quickly find solutions and best practices.

4. **Performance and Scalability**

   - **Sanity**:
     - Global CDN: Sanity uses a global Content Delivery Network (CDN) to ensure fast and reliable content delivery across different regions. This helps reduce latency and improve performance.
     - Scalability: Sanity’s cloud-based architecture is designed to handle large volumes of content and high traffic, making it suitable for both small projects and enterprise-level applications.

   - **Strapi**:
     - Self-Hosting Flexibility: Strapi’s self-hosted nature allows developers to optimize server configurations and scaling based on their needs. However, this requires manual management of server resources and infrastructure.
     - Performance Optimization: Strapi supports various performance optimization techniques, including caching and load balancing, which can be configured to enhance the performance of the CMS.

5. **Pricing and Licensing**

   - **Sanity**:
     - Pricing Model: Sanity offers a range of pricing plans based on usage and features. There is a free tier with limited functionality, and paid plans that provide additional features and higher usage limits.
     - Open Source and Proprietary Components: While Sanity Studio is open-source, the core Content Lake and associated infrastructure are proprietary. This allows Sanity to offer a high level of service and support but may involve additional costs.

   - **Strapi**:
     - Free and Open-Source: Strapi is entirely free and open-source, allowing developers to use and modify the codebase without any cost. This makes it an attractive option for those who prefer open-source solutions.
     - Enterprise Edition: Strapi offers an Enterprise Edition with additional features and support options. This version is designed for larger organizations with more complex needs and comes with a licensing fee.
     

## Getting Started with Sanity CMS

In this guide we will go through all necessary steps for installing and using the Sanity CMS.

To begin using Sanity CMS, you'll first need a Sanity account, which you can create for free at [sanity.io](https://www.sanity.io).


### Create a Sanity Project

Run the following command in your terminal:

```bash
npm create sanity@latest
```

1. **Project Name**: Enter `Test project`.
2. **Use default dataset configuration?**: Enter `Y`.
3. **Project output path**: Press `Enter` to accept the default path.
4. **Select project template**: Choose `clean project with no predefined schema types`.
5. **Do you want to use TypeScript?**: Enter `n`.

After the installation is complete, navigate to the new project directory:

```bash
cd test-project
```

Open the project in your code editor.

### Start the Development Server

In your terminal, run:

```bash
npm run dev
```


A localhost window running on server 3333 should open prompting you to log in. If it doesn't open automatically, you can open a new browser tab and enter https://localhost:3333/.  If you haven’t created a Sanity account yet, you can do so here. Once logged in, you'll see your project dashboard. It should look something like this:  

![Sanity Empty Project](https://sanity-guide.s3.amazonaws.com/sanity-empty-project.png)

## Schema Types in Sanity

In Sanity, a schema is a template defining your content types, like "Blog Post" or "Product," specifying fields like "title" and "description." Unlike traditional CMSs with predefined schemas, Sanity allows you to define your own using JavaScript.

### Creating a Schema Type


1. Inside the `schemaTypes` folder, create a new file named `blogPostType.js`.
2. Import `defineFields` and `defineType` from Sanity at the top of your file.

#### Define the Schema Type

For a full list of all the different schema types you can check out: https://www.sanity.io/docs/schema-types


- Create a constant using the same name as your file and call the `defineType` function. 
- Each type requires at least a type and a name. It’s also good practice to include a title for clarity where it's needed. This is the same when both defining the type and/or its fields. However, when defining the schemaType, usually this will be of type document, when using the document type, you are also required to specify a fields array (this is where you will need to define all the specific fields). To specify a specific field simply run the defineFields function with atleast a name and type defined inside the fields array.

Example for a blog post schema:

```javascript
import { defineField, defineType } from 'sanity';

const blogPostType = defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'body',
      title: 'Body Text',
      type: 'text',
    }),
  ],
});
```

#### Import and Register the Schema Type

In `index.js` within the `schemaTypes` folder, import `blogPostType` and add it to the `schemaTypes` array.

```javascript
import blogPostType from './blogPostType';

export const schemaTypes = [blogPostType];
```

### Verify in Sanity Studio

Go back to your browser with the Sanity Studio open. If everything is set up correctly, the error message should disappear, and you’ll see "Blog Post" under Content.

- Click "Blog Post" to view or create posts.
- Click the "+" button to add a new post.
- Fill out the fields and click "Publish" to save.

Make a few posts with this and publish them, they should appear inside the list. 


## Deployment

To deploy your Sanity project, follow these steps:

##### Deploy with Sanity CLI

In your terminal, navigate to the project folder and run:

```bash
sanity deploy
```

If this is your first time deploying, you'll be asked for a studio name. Ensure it's unique and contains no spaces (use `-` or `_` if necessary).

##### Access Your Studio

Once deployed, you’ll receive a studio URL. It will be in the format: `https://<Your-studio-name>.sanity.studio/`.

##### Alternate Deployment Options

You can also deploy your Sanity Studio using platforms like [Netlify](https://www.netlify.com) or [Vercel](https://vercel.com) if preferred.

Now, when you visit your deployed studio URL, you’ll see the same interface as on your local machine. Any posts you create will be instantly reflected across all environments. Share the studio URL with team members and control their access levels as needed.

### Usage and querying data with GROQ

Now that your Sanity Studio with your project data is live, we can look at how to actually use this in a real project.
In this we will use GROQ to query our data, but you are free to use GraphQL instead if you want as this is supported. 

##### Query data with GROQ
When inside your Sanity Studio click on the Vision tab in the top middle. 

- In GROQ if you want to fetch all the data from your the type we created, you can simply write *[_type == "blogPost"] and click fetch
- If you want to specify more, forexample on the titles, you can write it like *[_type == "blogPost"]{title}
- After fetching your query you will see the result of your fetch, if it is correct you can copy the query URL to use for your projects.


## Conclusion

Launched in 2018, Sanity has quickly become a top choice in the industry, known for its real-time collaboration, powerful customization, and API-first design. It allows content to be easily distributed across multiple platforms and integrates smoothly with e-commerce systems, making it a great fit for projects of all sizes. Sanity’s flexible and cost-effective approach makes it a strong option for modern web development, offering developers the tools they need to create unique and consistent content experiences across different channels.

## References

Østmo, Ø. (2024, May 13th). Sanity CMS - why and how to use the market’ #1 content platform. Represent. Link: [https://www.represent.no/sanity](https://www.represent.no/sanity)

Hillestad, M. (2023, Jan 5th). Sanity in 2022: Transforming How Teams Work With Content. Sanity. [https://www.sanity.io/blog/sanity-2022](https://www.sanity.io/blog/sanity-2022)

Hillestad, M. (2021, Jan 7th). 2020: In Review. Sanity. [https://www.sanity.io/blog/2020-in-review](https://www.sanity.io/blog/2020-in-review)

Hillestad, M. (2021, Dec 31st). 2021: A year in review. Sanity. [https://www.sanity.io/blog/2021-a-year-in-review](https://www.sanity.io/blog/2021-a-year-in-review)

Westvang, E. E. (2019, Jan 1st). 2018: In Review. Sanity. [https://www.sanity.io/blog/2018-in-review](https://www.sanity.io/blog/2018-in-review)

Sanity (n.d.) What is Sanity? A short introduction. Last updated Feb 13th, 2024. [https://www.sanity.io/docs/a-short-introduction-to-sanity-io](https://www.sanity.io/docs/a-short-introduction-to-sanity-io)

Griggs, S. (n.d.) Day One with Sanity Studio. Sanity. [https://www.sanity.io/learn/course/day-one-with-sanity-studio](https://www.sanity.io/learn/course/day-one-with-sanity-studio)

Melvær, K (n.d.) Handling Schema changes confidently. Sanity. [https://www.sanity.io/learn/course/handling-schema-changes-confidently/](https://www.sanity.io/learn/course/handling-schema-changes-confidently/)

Strapi (n.d.) Comparators - Strapi vs Sanity. Strapi. [https://strapi.io/headless-cms/comparison/strapi-vs-sanity](https://strapi.io/headless-cms/comparison/strapi-vs-sanity)

