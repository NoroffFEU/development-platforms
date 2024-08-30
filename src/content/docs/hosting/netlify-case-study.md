# Netlify Case Study

**Author:** Martin Nygård  
**Tags:** case study, netlify, hosting

## Introduction

Netlify is a hosting service focused on streamlining the development process for hosting modern web applications and static pages. It offers Git-based workflows, serverless functions, and a global content delivery network (CDN). In this case study, I will explore Netlify's history and features, but I am biased due to my extensive use and experience with it over the last 6 months.

## Brief History

- **2015:** Netlify is founded by Mathias Biilmann and Chris Bach, aiming to simplify the deployment and hosting of modern web applications.
- **2016:** Netlify introduces its continuous deployment platform, enabling seamless integration with version control systems like GitHub and GitLab.
- **2017:** The company announces support for serverless functions, allowing developers to add dynamic features to their static sites.
- **2018:** Netlify raises Series C funding to expand its services and global presence.
- **2019:** The launch of Netlify Edge Functions extends serverless capabilities to the edge, improving performance and scalability.
- **2020:** Netlify introduces a suite of tools for developers, including advanced analytics and form handling features.
- **2021:** The company expands its ecosystem with new integrations and support for more advanced deployment workflows.

## Main Features

### Continuous Deployment

Netlify offers automatic building from Git repositories, streamlining the user’s workload and making the website building process effortless. This can be turned off in the settings.

### Serverless Functions

Netlify’s serverless functions allow developers to run code that should not be visible to the public. This can include form submissions or using API endpoints. Combined with environment variables for API keys and safety implementations like input validation and sanitization, this is a crucial step in securing the backend against unauthorized access.

### Global CDN

Netlify’s global content delivery network (CDN) allows for faster content delivery by using servers closer to the user.

### Instant Rollbacks

Easily revert to a previous deployment in case of unstable code or errors discovered after deployment.

### Form Handling

If you don't have a separate backend, Netlify can handle form submissions.

### Edge Functions

Allows serverless functions to run closer to the user, providing faster response times and lower latency.

## Market Comparison

### Netlify Compared to Traditional Web Hosting

- **Performance:** With the global CDN and edge functions, Netlify’s performance is superior to services relying on a single server.
- **Deployment:** Netlify offers deployment with Git repositories through its Continuous Deployment feature or the Netlify CLI, allowing developers to preview a site live before confirming deployment.
- **Scalability:** Netlify’s use of multiple servers enables easier scaling compared to traditional hosting services.

### Netlify vs. Other Modern Platforms

- **Vercel:** While Vercel is similar in many aspects, Netlify offers broader support and a larger ecosystem.
- **GitHub Pages:** GitHub Pages works for static sites but lacks the advanced deployment and serverless capabilities that Netlify offers.

## Getting Started

1. **Sign up**: Create an account on Netlify.
2. **Connect a Repository**: Link your Git repository, which might require login details for the repository service.
3. **Build**: Netlify will build the website for you, which typically takes about a minute depending on the size and dependencies. Check the build log for errors; Netlify offers AI-generated solutions for quicker error resolution.
4. **Configure**: Adjust the settings to meet your needs, such as adding environment variables.
5. **Adapt for Specific Environments**: Make necessary adjustments if you’re using environments like Node.js to ensure compatibility with Netlify.
6. **Monitor**: Utilize Netlify’s analytics and monitoring tools to track performance and user interaction.

## Costs

Netlify offers a free plan with these features:

- Single member seat
- Global edge network
- Live site previews with collaboration UI
- 100GB bandwidth
- 300 build minutes
- Instant rollbacks
- Static assets
- Dynamic serverless functions

The free plan is targeted at personal projects, prototypes, or beginners. For more advanced needs, the Pro plan costs $19 USD per month and includes:

- Background Functions
- Password-protected sites
- 1TB bandwidth and 25k build minutes
- Audit logs with 7-day history
- Shared environment variables
- Support for organization-owned private Git repositories
- Slack & email notifications
- Email support

In summary, Netlify can be an inexpensive option for hosting a modern website.

## Conclusion

Netlify is a great tool for developers, especially for those just starting out, due to its ease of use and intuitive interface. Deployments are quick and straightforward, even for new developers. Most can use the free starter plan, making Netlify a highly accessible option for developers or new companies.

## References

- [Netlify Official Website](https://www.netlify.com)
- [Netlify Documentation](https://docs.netlify.com)
- [The JAMstack Community](https://jamstack.org)
- [Netlify Blog](https://www.netlify.com/blog/)

## Additional Resources

- [Getting Started with Netlify](https://www.netlify.com/tags/getting-started/)
- [Netlify Forms Documentation](https://docs.netlify.com/forms/setup/)
- [Netlify Edge Functions Overview](https://docs.netlify.com/edge-functions/overview/)
