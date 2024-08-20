---
title: Convex: A Real-Time Serverless Database Platform
author: Martins Siksnis <msiksnis>
tags: Convex, Serverless, Database, Real-Time
---

![Convex Logo](/src/assets/databases/convex.svg)

## Introduction

Convex is an emerging real-time serverless database platform designed to simplify backend development by providing automatic scaling, real-time data synchronization, and a developer-friendly API. This case study explores Convex's features, compares it with other database solutions, and discusses its potential applications in modern web development.

## Brief History

- 2021: Convex is founded by Jamie Turner and James Cowling, former engineers at Dropbox.
- 2022: Convex raises seed funding and launches its first beta version, focusing on real-time applications.
- 2023: Convex officially releases its platform with enhanced features, including improved scaling and security measures.
- 2024: Convex continues to gain traction, integrating with popular frontend frameworks and expanding its developer tools.

## Main Features

Convex is designed to address the challenges of modern backend development by providing a range of features that simplify and enhance the development process:

- **Real-Time Data Synchronization:** Convex automatically syncs data across clients, ensuring that all users see the latest updates in real-time.
- **Serverless Architecture:** Developers can focus on building applications without worrying about managing servers or scaling infrastructure.
- **Automatic Scaling:** Convex handles scaling behind the scenes, allowing applications to seamlessly handle varying levels of traffic.
- **Data Security and Compliance:** Convex includes built-in security features, such as encryption and access controls, to protect sensitive data.
- **Integration with Frontend Frameworks:** Convex offers easy integration with frameworks like React, enabling developers to quickly build full-stack applications.
- **Query Language and API Design:** Convex’s API is designed to be intuitive, allowing developers to write complex queries with ease.
- **External Service Integration:** Convex supports integration with external services through Action Functions, enabling developers to extend their applications with additional functionality.
- **Open Source and Extensible:** Convex offers an open-source version of its backend, along with client libraries and tools. While the core backend is available under an open-source license, the fully managed cloud service and certain enterprise features are not.

### Relational Data

Convex provides robust support for relational data, which is essential for connecting different entities within your application. In Convex, relationships between database tables can be easily modeled using document IDs. This approach allows you to reference documents stored anywhere in Convex, regardless of whether those relationships are one-to-one (1:1), one-to-many (1:many), or many-to-many (many:many).

When querying relational data in Convex, you write code instead of complex SQL JOIN statements, simplifying the process significantly. Open-source helper functions, provided by the Convex team, make it even easier to define and navigate these relationships, streamlining your development workflow.

### File Storage

Convex's File Storage feature simplifies the process of handling files within your application, whether you need to upload, store, or serve files dynamically. All file types are supported, making this a versatile option for various use cases.

- **Upload Files**: Store files directly in Convex and reference them in your database documents.
- **Third-Party Integration**: Store files generated or fetched from third-party APIs, enabling seamless integration with external services.
- **File Serving**: Serve files via URL to your users, supporting dynamic content delivery.
- **File Management**: Delete files stored in Convex and access file metadata directly through the Convex dashboard.
- **Examples**: Utilize examples like File Storage with HTTP Actions or File Storage with Queries and Mutations to implement file handling in your app.

_Note: File storage is currently in beta. Feedback and feature requests are welcome on the Convex Discord community._

## Market Comparison

Convex competes in a crowded market of database solutions, each offering unique features and capabilities. Here is a comparison of Convex with some popular database platforms:

| **Feature**          | **Convex**                             | **Firebase**                                           | **Supabase**                                             | **AWS Amplify**                                    | **Pusher**                                     | **Appwrite**                                       |
| -------------------- | -------------------------------------- | ------------------------------------------------------ | -------------------------------------------------------- | -------------------------------------------------- | ---------------------------------------------- | -------------------------------------------------- |
| **Real-Time Sync**   | Automatic and seamless                 | Requires more configuration                            | Real-time subscriptions, but more complex setup          | Real-time with GraphQL or REST, but more complex   | Real-time messaging only                       | Real-time through database, with configuration     |
| **Serverless**       | Yes                                    | Yes                                                    | Yes                                                      | Yes                                                | No, requires client-side configuration         | Yes                                                |
| **Scalability**      | Automatic with no user intervention    | Manual configuration for scaling                       | Horizontal scaling with Postgres, requires configuration | Scales with AWS infrastructure, but requires setup | Limited to real-time events                    | Scales with Docker, more setup needed              |
| **Pricing**          | Usage-based with a free tier           | Usage-based with a free tier                           | Usage-based with a free tier                             | Pay-as-you-go based on AWS services                | Usage-based, pricing varies based on usage     | Free tier with usage-based pricing                 |
| **Security**         | Built-in encryption and access control | Built-in, but with different API design                | Strong access control, user authentication               | Strong security with AWS policies                  | Security depends on implementation             | Built-in authentication, role-based access control |
| **Backend Database** | Custom real-time database              | Firestore (NoSQL)                                      | Postgres (SQL)                                           | DynamoDB or Aurora (NoSQL/SQL)                     | Not a database, just real-time features        | MongoDB-like database, but also supports SQL       |
| **Open Source**      | No                                     | No                                                     | Yes                                                      | No                                                 | No                                             | Yes                                                |
| **Ease of Use**      | Very easy, minimal configuration       | Easy for basic use, more complex for advanced features | Easy to start, but requires SQL knowledge                | More complex due to AWS services                   | Easy for real-time events, limited beyond that | Easy to start, but more setup required             |

## Key Points

- **Comprehensive Cloud Backend**: Convex is not just a database; it is a full cloud backend that replaces traditional database systems, server functions, backend logic, and the interface all the way out to the application.

- **Real-Time Data Synchronization**: Convex automatically synchronizes data across clients in real-time by tracking dependencies in query functions. Any change in data triggers an automatic update, ensuring all users have the latest information instantly.

- **Serverless Architecture**: Convex operates on a serverless architecture, which simplifies deployment and scalability. Developers don’t need to manage infrastructure, as Convex automatically handles scaling to meet varying traffic demands.

- **Custom Database Engine**: Convex uses a custom-built database engine optimized for real-time functionality, incremental schema updates, and automatic scaling, with durability ensured by storing a write-ahead log on AWS RDS.

- **Developer-Friendly API**: Convex provides an intuitive API, making it easy for developers to write complex queries and integrate backend functionality seamlessly with frontend frameworks like React.

- **Integration with External Services**: Convex supports integration with external services such as OpenAI and Stripe through Action Functions, which, while not real-time, work seamlessly within the Convex Backend.

- **Flexibility vs. Customization**: Convex simplifies backend development with its managed approach, but this can come at the cost of customization. Open-source platforms like Supabase and Appwrite offer more flexibility, allowing for greater control over backend configurations.

- **Open Source and Extensible**: Convex is Open Source, allowing developers to clone, build, and run the backend on their own hardware. It also supports various languages, with TypeScript or JavaScript being the primary languages for server functions.

- **Flexible Pricing and Free Tier**: Convex offers a free tier for smaller applications, with paid plans available for larger projects. It is designed to be more cost-effective than running your own infrastructure.

- **Mobile Application Support**: Convex is compatible with mobile development, particularly with React Native, and additional mobile support is planned for the future.

## Getting Started with Create React App

A quickstart how to use Convex in a React app using Create React App:

### 1. Create a React App

Create a React app using the `create-react-app` command.

```bash
npx create-react-app my-app
```

### 2. Install the Convex Client and Server Library

Install the Convex client library and the server library in your React app.

```bash
npm install convex
```

### 3. Set Up a Convex Development Deployment

Next, run npx convex dev. This will prompt you to log in with GitHub, create a project, and save your production and deployment URLs.
It will also create a src/convex/ folder for you to write your backend API functions in. The dev command will then continue running to sync your functions with your dev deployment in the cloud.

```bash
npx convex dev
```

### 4. Create Sample Data for Your Database

In a new terminal window, create a sampleData.jsonl file with some sample data:

```json
{"text": "Start a new app", "isCompleted": true}
{"text": "Integrate Convex", "isCompleted": false}
{"text": "Deploy the app", "isCompleted": false}
```

### 5. Add the Sample Data to Your Database

Now that the project is ready, add a tasks table with the sample data into your Convex database with the import command:

```bash
npx convex import --table tasks sampleData.jsonl
```

### 6. Expose a Database Query

Add a new file tasks.js in the src/convex/ folder with a query function that loads the data.

Exporting a query function from this file declares an API function named after the file and the export name, api.tasks.get.

```javascript
// src/convex/tasks.js
import { query } from "./_generated/server";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("tasks").collect();
  },
});
```

### 7. Connect the App to Your Backend

In index.js, create a ConvexReactClient and pass it to a ConvexProvider wrapping your app.

```javascript
// src/index.js
import { ConvexProvider, ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient(process.env.REACT_APP_CONVEX_URL);

root.render(
  <React.StrictMode>
    <ConvexProvider client={convex}>
      <App />
    </ConvexProvider>
  </React.StrictMode>
);
```

### 8. Display the Data in Your App

In App.js, use the useQuery hook to fetch from your api.tasks.get API function.

```javascript
// src/App.js
import { useQuery } from "convex/react";
import { api } from "./convex/_generated/api";

function App() {
  const tasks = useQuery(api.tasks.get);
  return <div className="App">{JSON.stringify(tasks, null, 2)}</div>;
}

export default App;
```

### 9. Start the App

```bash
npm start
```

Quickstart for other frontend tools like Vite, Next.js, and Svelte can be found in the [Convex documentation](https://docs.convex.dev/quickstarts).

## Conclusion

Convex represents a significant step forward in simplifying backend development, particularly for real-time applications. Its serverless architecture, real-time synchronization, and automatic scaling make it an attractive option for developers looking to build modern, responsive applications without the complexity of managing infrastructure. However, as a relatively new platform, it is still evolving, and developers should consider its current limitations and the maturity of competing platforms.

## References

- [Convex Official Website](https://convex.dev)
- Turner, J., & Cowling, J. (2021). _The Future of Serverless Databases_. Convex Blog.
- [Convex Documentation](https://docs.convex.dev)

## Additional Resources

- [Convex GitHub Repository](https://github.com/convex-dev/convex)
