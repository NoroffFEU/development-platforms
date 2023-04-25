---
title: Microsoft Power Apps Case Study
author: Robin Lysaker, Benjamin Løndal, Trine Sandberg
tags: Microsoft, Power Apps, Low code, case study, platform
---
![Image](https://user-images.githubusercontent.com/91562336/234244746-63e6e487-b46e-4e31-a478-f08227d1e22c.png)
## Introduction

Microsoft Power Apps is a platform with low-code development tools that allows users to create custom business applications without having to be an educated programmer. These apps can be built for different purposes, such as data collection, workflow automation and management.

Power Apps is a part of the Microsoft Power Platform which also includes other useful tools. It is designed to work seamlessly with other Microsoft products, such as SharePoint, Teams etc.

Power Apps is easy to use, and it includes pre-built templates and drag-and-drop components, allowing users to quickly create functional apps for their work environment. Power Apps integrates with a range of data sources, for example cloud-based services.

### What is a low-code environment?

A low code environment is a platform that allows the user to develop simple and complex applications easier - often with a interface to use instead of pure code. The production time of applications here is a lot quicker.

Having a low-code environment is much like using buiding blocks to contruct an entire city. You can assemble the structures you need without worrying about how each brick works and what way they should be used. It will empower you to build a range of applications with ease.

According to Gartner. Inc's latest report the global market for low-code is esitmated to almost 27 billion in 2023.

### So what is the benefits of Power apps?

When looking for a development platform, Power apps has a lot to offer. By looking at the connectors that Power Apps provides, it's clear that the platform has many benefits for a complete environment. Power apps can be used combined with the power platform - and connected to a bunch of back-end technologies. It can easily be looked upon as a magic wand, giving a company the power to solve any business problem you might encounter.

Micorsoft is putting a huge amount of energy into this platform and constantly updates the features and functionality of it's power platform. Whereas alot of these are developed to match user feedback. Power Apps provides a simple code language called Power Fx, which is similar to Excel formulas and makes it easy to get started with app development. App development is always getting quicker, and with co-pilot it's even simpler - Much like ChatGPT. The power platform is much like a bridge to the future, connecting businesses to cutting-edge technology that was not thought possible.

A large benefit of Power Apps is that the created application can be used on both mobile and computer devices. This creates a portable, functional, and simple way of utilizing the application.

Using Power Apps and the Power Platform for security is like building your business on a rock-solid foundation. By leveraging the Microsoft Dataverse platform, businesses can ensure a standardized approach to security, rather than having to create their own security systems from scratch. With a role-based model, each user has access only to the data they need, providing stability and security for your business data.

### Limitations
Customization: While Microsoft Power Apps allows you to create custom applications for your workplace, the platform has limitations in terms of customization. Users are limited to the features and functionalities provided by Power Apps, and it may not meet all the needs for your application.

Performance: Being a cloud-based environment, users can experience lag time and slow response times when running a bigger application.

Subscription cost: Microsoft Power Apps is a subscription-based service. While it's an affordable platform for small businesses, it may not be the best option for bigger enterprises with a large base of users.

Limited Offline Access: Another limitation is that Microsoft Power Apps requires an internet connection to work. This can be a challenge for businesses that require offline access to their data, or work in places with limited network access.

## Brief History

- 2015 -Power Apps was first introduced by Microsoft in November 2015 as a new addition to its suite of business applications. Initially, it was part of the Dynamics 365 suite and was called "Project Siena."
- 2016 - Microsoft released PowerApps as a standalone product and added it to the Office 365 suite. Power Apps has since grown in popularity and evolved with new features and capabilities, such as the ability to integrate with other Microsoft products like Power BI and Azure.
- 2019 - Microsoft announced the availability of Power Apps for mobile devices, enabling users to create and use apps on-the-go.
- 2020 - Microsoft released new tools to simplify the process of building custom connectors for Power Apps, allowing users to easily integrate with a wide range of data sources.

## Main Features

### Model driven apps

Model-driven applications in Power Apps are designed to be data-centric and are built on top of a common data service platform. These applications are typically connected to datasets and are primarily used for presenting data to users.

Developers can create forms, views, and dashboards within model-driven applications, which can then be accessed by users through the Power Apps portal or the Dynamics 365 application.

Model-driven applications can be compared to a pre-built house, where the structure and layout are already established. However, developers have the ability to customize certain aspects of the application to their liking, such as the color scheme and user interface.

### Canvas driven applications

Canvas-driven applications, on the other hand, are more like a blank canvas. There is full control over the layout, design, and functionality of the application. Additionally, you have the same connectors as in model-driven applications.

Some options in canvas-driven apps involve customizing how buttons, controls, and other elements behave and interact with users. Canvas-driven applications are developed with little to no code, but they can still be quite complex.

To put it into a metaphor, the developer has complete freedom and control over the application itself, adding colors, shapes, elements, and interactions to create a personalized piece of art for users to interact with.

### How it works
![Image](https://user-images.githubusercontent.com/91562336/234261904-32e7b386-291d-434e-a223-a40adb4d4a78.png)
Every component you make in your Power App is “stored” in .JSON and .YML files. These files are being “fed” into Microsoft’s PowerApps application, which in turn generates your app. You can connect your app to your GitHub account and access the files from there, or open them in your favorite code editor. Accessing these files directly won't necessarily provide you with more options than you already have in the Power Apps editor, but it might be easier to access and change certain features and settings.

### Version control
Power apps has a built in version control by default. This version control can be accessed outside of the application itself on the main menu and will version every save and track which version that is live.
Versioning number will be automatic and the creator can add comments on the save and published apps if wanted.

### Github version control (experimental)
The MS team will always release new features into Power apps. One of these is the Git integration which allows users to hook up their application to Girhub. Therefor using it as a version control system in addition to the integrated one.

This will make it possible to pull and push into git, sync the repo and even edit the repo directly in code. Though this make the process of creating an application harder - it can help with even clearer explanation of features, updates and commits.

To get started you should go to: Settings > Experimental features and go down until you see Git-integration.

### Start from data sources
Power Apps offer multiple ways to quick-start your app and pre-populate it with data. Having access to multiple data sources in its Microsoft environment makes it a powerful tool to generate apps that solve work related problems on the fly. 
![Image](https://user-images.githubusercontent.com/91562336/234009602-fe73700f-8cd2-44b6-bdf3-a11d815272f2.jpg)

For example: If you have an Excel spreadsheet for booking and charging the company’s electric car, you could make that into an app. In fact, you can use most Microsoft work tools like SharePoint, Excel and Dataverse to create your app. You can also populate your app from a database. Another option is to use a Figma UI kit to get your app started. We will briefly explain a few of the most popular options, and how they work.

![Image](https://user-images.githubusercontent.com/91562336/234001709-5437d399-166b-4e2e-b3c2-fe1ac1d0fb7d.jpg) 
**Excel**

As already mentioned, you can import data from Excel spreadsheets and use it to generate an app. This can be werry convenient if you already have the data you want to use organized in Excel. Also, many of the formulas used in Excel are also used in Power Apps, although with some difference, it will be familiar for users that are intermediate or advanced in Excel.

![Image](https://user-images.githubusercontent.com/91562336/234001452-d17c48bd-6fde-4735-a15a-2600756abd0c.png)
**SharePoint**

Lists and libraries from SharePoint can easily be used to populate your app with both text and other content like images or videos.

![Image](https://user-images.githubusercontent.com/91562336/234001607-003ecbae-68e7-48e6-87d4-793deb638d61.png)
**Figma**

You can use the Power Apps Figma asset pack/UI kit to create your app layout, and Power Apps will automatically create that layout for you. It works by utilizing Power Apps prebuilt components. However, this kit is in early access, and not all components are supported yet. For example: Charts, galleries, icons, shapes and tables are not supported. Apart from being limited to supported components only, starting your app from this UI kit is still a good option. Especially if you need to collaborate on your app design outside of the Microsoft environment it exists in. In addition, Figma has more powerful tools for alignment and spacing than Power Apps, and are easier to work with in this regard.
 
![Image](https://user-images.githubusercontent.com/91562336/234034611-5a88d3d9-727e-440f-a7b3-f2f4948244c8.png)
**SQL**
 
You can connect a SQL server to Microsoft PowerApps. It is really simple to connect if you already have an SQL server in your Microsoft environment. You only need to click new connection and choose the SQL server. From there you can either connect directly or use a gateway.
![Image](https://user-images.githubusercontent.com/91562336/234244332-1f89b5dd-ff22-4c54-825c-7132c0b0ec9f.png)

### Custom connectors
Power Apps allows you to create custom connectors that can connect to any RESTful API. This means that you can use Power Apps to connect to almost any data source that provides a web API. To set up a custom connector, you can simply access the inbuilt wizard from the menu.

![Image](https://user-images.githubusercontent.com/91562336/234003464-a39319a2-94c3-4b0f-b5d9-3dbae9d18bc5.png)

### Components
Components are the building blocks of Power App. Power Apps have many pre-built UI components that cover common app features like gallery, form, text-input, etc. You can also create custom components. To use components, you simply have to drag the component you want into your app after locating it in the side-menu. 
**Major Components:**

| component       | Description                                                               |
| --------------- | --------------------------------------------------                        |
| Control         | Allow interaction with your records from your datasource.                 |
| Property        | Each control has one or more properties. Example: Color, size, type, etc. |
| Function        | Is used to interact with and change properties. Similar syntax to Excel.  |

You may find this online tool useful for creating tables: https://www.tablesgenerator.com/markdown_tables

## Market Comparison

This section can be used to compare the advantages and disadvantages of your chosen tool to other similar tools. You may use subheadings, tables or bullet points to structure your description.

If you are writing about an open source tool, it may be a good idea to compare it to similar proprietary tools. Likewise, if you are writing about a proprietary tool, it may be a good idea to compare it to similar open source tools.

Similarly, a self hosted tool and a cloud based tool with a similar purpose may make for a good comparison.

## Getting Started

1. Sign up for Power Apps: To get started with Microsoft Power Apps, you will need a Microsoft account. 
If you do not already have one, you can sign up for a free account at https://account.microsoft.com/.
You can also be added by email via a product owner.

2. Pick a template: Power Apps comes with a range of templates that you can use as the foundation for your custom app. You can select a template that fits your needs, or you can start from scratch.

3. Customize your app: When you have selected a template or created a new app from scratch, you can customize it to meet your requirements. You can add data sources, design screens, and create formulas to automate processes.

4. Test your app: Once you have customized your app, you can test it to ensure it is working as intended. You can test your app on different devices, for example desktop, mobile, and tablet.

5. Bring your app into production: When your app has been finished, you can publish it to make it available for your users. You can publish it to the Power Apps store, or you can share it with specific users or groups in your organization.

When your app is live, you can monitor performance and usage. You can update it with improvements, and address issues or bugs that may occur.

## Production

To publish your new application you can follow these steps: 

1. Open the app you want to publish

2. Click on File > Publish app.

3. In the dialog box, select the environment in which you want to publish the app. 
You can choose from a list of environments available to you.

4. Choose if it is a canvas app, or a model-driven app you want to publish.

5. Make sure that your external data is properly authorized. This would be typically any connectors or APIs.

6. Configure additional settings, for example analytics.

7. Click the "Publish" button to start the process of publishing your app.

8. When the app is published, you can access it from the environment you chose. 
You might have to share the app with users who need access to it.

## Conclusion

This section can be used to summarize your findings. What are the main advantages and disadvantages of your chosen tool? What are the main use cases for this tool? What are the main limitations of this tool? What does the future look like for this tool?

## References

- [Example.com](https://example.com)
- _Good Examples_ by John Doe, 1990
- The Example Podcast, Episode 1
- [Examples Explained](https://youtu.be/dQw4w9WgXcQ)

## Additional Resources

- [More about Examples](https://example.com)
- [Examples, the Full Course](https://youtu.be/dQw4w9WgXcQ)
