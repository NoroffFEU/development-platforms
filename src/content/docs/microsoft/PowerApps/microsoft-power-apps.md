---
title: Microsoft Power Apps
author: Robin Lysaker, Benjamin Løndal, Trine Sandberg
tags: Microsoft, Power Apps, Low code, case study, development platform
---

![Power Apps logo with name and the two overlapping purple "diamonds" icon.](https://user-images.githubusercontent.com/91562336/234244746-63e6e487-b46e-4e31-a478-f08227d1e22c.png)

## Introduction

Microsoft Power Apps is a platform with low-code development tools that allows users to create custom business applications without having to be an educated programmer. These apps can be built for different purposes, such as data collection, workflow automation and management.

Power Apps is a part of the Microsoft Power Platform which also includes other useful tools. It is designed to work seamlessly with other Microsoft products, such as SharePoint, Teams etc.

Power Apps is easy to use, and it includes pre-built templates and drag-and-drop components, allowing users to quickly create functional apps for their work environment. Power Apps integrates with a range of data sources, for example cloud-based services.

### What is a low-code environment?

![Illustration of a low code enviroment. Shows two screens wheras one screen shows code, and the other shows a user interface.](https://user-images.githubusercontent.com/91562336/234335946-140c889d-7b38-450e-8d6a-7be20494fa07.jpg)
_(Fig. 1)_

As shown in Fig. 1, a low-code environment is a platform that allows the user to develop simple and complex applications easier - often with an interface to use instead of pure code. The production time of applications here is a lot quicker.

Having a low-code environment is much like using building blocks to construct an entire city. You can assemble the structures you need without worrying about how each brick works and what way they should be used. It will empower you to build a range of applications with ease.

According to Gartner, Inc.'s latest report, the global market for low-code is estimated to be almost $27 billion in 2023.

## Brief History

- **2015** - Power Apps was first introduced by Microsoft in November 2015 as a new addition to its suite of business applications. Initially, it was part of the Dynamics 365 suite and was called "Project Siena."
- **2016** - Microsoft released Power Apps as a standalone product and added it to the Office 365 suite. Power Apps has since grown in popularity and evolved with new features and capabilities, such as the ability to integrate with other Microsoft products like Power BI and Azure.
- **2019** - Microsoft announced the availability of Power Apps for mobile devices, enabling users to create and use apps on-the-go.
- **2020** - Microsoft released new tools to simplify the process of building custom connectors for Power Apps, allowing users to easily integrate with a wide range of data sources. The common data service is rebranched to dataverse.
- **2021** - Microsoft made Mixed reality components generally available in Power apps. An VS code extension is released to allow developers to work more easily in code which include CLI support and intellisense. Microsoft Power apps is recognized as a leader in low code application platforms by The Forrester Wave and Gartner Magic quadrant for enterprises. Power apps Ideas AI is introduced to include a natural language written Power Fx formulas and an experimental Github version control is introduced.
- **2022** - Power Virtual Agents is Generally available using the chatbot component as well as dataverse service client SDK. Named formulas is introduced to make global variables easier to have control over.
- **2023** - Microsoft Power apps is named a leader in the 2023 Gartner Magic Quadrant for enterprise low-code application platforms. Announcing Copilot for power apps for developers and users - allowing developers to set up the app with commands and user to interact with the app in a new and innovative way. Much like a chat.

## Main Features

### Model and Canvas driven apps - how they work

In Power Apps, you can develop with either model-driven or canvas-driven development. But how do they differ?

Model driven is designed to be a data-centric development environment and is built on top of dataverse (Previously known as the common data service). The application is, in that regard, connected to datasets and is therefore often used to present data to users. With this approach, developers can create forms, views, and dashboards, which can then be accessed by users through the Power Apps portal and the Dynamics 365 application.

Canvas driven, on the other hand, as the name suggests, is an empty canvas to build your application on. The developer will have full control over layout, design, and functionality. Starting from a canvas enables the user to develop freely instead of starting from a pre-populated app template. Starting from a canvas can make it easier to create custom components and functions that are more complex and tailored to your needs, making the functionality of the application just how you want it.

In conclusion, these two ways of developing through Power Apps will most likely be combined in the future. For now, users can choose to either build their house from scratch in the canvas or simply place furniture in the model-driven environment.

### How it works

![Illustrates the headline: How it works. Shows a Themes.json file with a questionmark next to it.](https://user-images.githubusercontent.com/91562336/234261904-32e7b386-291d-434e-a223-a40adb4d4a78.png)
_(Fig. 2 components stored in JSON)_

Every component created in a Power App is stored in .JSON and .YML files. For example: Themes and colors is stored in Themes.json as shown in figure 2. These files are then utilized by Microsoft's Power Apps application to generate the app. You have the option to connect your app to your GitHub account to access the files, or you can open them in your preferred code editor. Directly accessing these files may not necessarily provide additional options beyond what is available in the Power Apps editor, but it can make it easier to access and modify certain features and settings.

### Version control

Power Apps has built-in version control functionality by default. This version control can be accessed from the main menu outside of the application, and it tracks every save to indicate which version is currently live. Versioning numbers are automatically generated, and the creator can add comments to the save and published apps if desired. While this is a good foundation, it may be worthwhile to explore other aspects of version control, such as the experimental GitHub version control.

### Github version control

The Microsoft team regularly releases new features into Power Apps. One such feature is Git integration, which enables users to connect their applications to GitHub, using it as an additional version control system in addition to the integrated one.

This makes it possible to pull and push into Git, sync the repository, and even edit the repository directly in code. Although this may make the process of creating an application more challenging, it can lead to even clearer explanations of features, updates, and commits.

To get started, navigate to Settings > Experimental Features and scroll down until you see Git integration.

### Start from datasources

Power Apps offers multiple ways to quickly start your app and pre-populate it with data. With access to multiple data sources in the Microsoft environment, it becomes a powerful tool to generate apps that can solve work-related problems on the fly.

![Illustrates a few of the datasource options you can use with Power Apps.](https://user-images.githubusercontent.com/91562336/234009602-fe73700f-8cd2-44b6-bdf3-a11d815272f2.jpg)
_(Fig. 3 different datasources available to Power Apps)_

For example, if you have an Excel spreadsheet for booking and charging the company’s electric car, you can turn it into an app. In fact, you can use most of Microsoft's work tools such as SharePoint, Excel, and Dataverse to create your app. You can also populate your app from a database. Another option is to use a Figma UI kit to get started with your app. We will briefly explain a few of the most popular options and how they work.

---

![Excel's logo.](https://user-images.githubusercontent.com/91562336/234001709-5437d399-166b-4e2e-b3c2-fe1ac1d0fb7d.jpg)
**Excel**

As already mentioned, you can import data from Excel spreadsheets and use it to generate an app. This can be very convenient if you already have the data you want to use organized in Excel. Additionally, many of the formulas used in Excel are also used in Power Apps, so users with intermediate or advanced Excel skills will find it familiar. It is worth mentioning, however, that Excel is not a scalable data source due to its limitations with columns and rows.

---

![Sharepoint's logo.](https://user-images.githubusercontent.com/91562336/234001452-d17c48bd-6fde-4735-a15a-2600756abd0c.png)
**SharePoint**

Use SharePoint lists and libraries to populate Power Apps with data and media. This enables you to easily create engaging apps by adding text, images, and videos. Whether you require product catalogs, customer reviews, or instructional videos, SharePoint simplifies content integration into your app.

---

![Figma's logo.](https://user-images.githubusercontent.com/91562336/234001607-003ecbae-68e7-48e6-87d4-793deb638d61.png)
**Figma**

You can use the Power Apps Figma asset pack or UI kit to create your app's layout, and Power Apps will automatically generate it for you. This process is possible by utilizing Power Apps prebuilt components. However, it is important to note that this kit is currently in early access and not all components are supported yet. For instance, charts, galleries, icons, shapes, and tables are not yet supported. Despite the limitation to supported components only, starting your app from this UI kit is still a viable option, especially if you need to collaborate on your app design outside of the Microsoft environment. Additionally, Figma offers more robust tools for alignment and spacing than Power Apps, making them easier to work with in this regard.

---

![SQL/database icon.](https://user-images.githubusercontent.com/91562336/234034611-5a88d3d9-727e-440f-a7b3-f2f4948244c8.png)
**SQL**

Connecting a SQL server to Microsoft Power Apps is a simple process, especially if you already have an SQL server in your Microsoft environment. All you need to do is click on "new connection" and select the SQL server. Once you do that, you can either connect directly or use a gateway to establish a connection.

![Screenshot of the connections options location from Power Apps user interface.](https://user-images.githubusercontent.com/91562336/234244332-1f89b5dd-ff22-4c54-825c-7132c0b0ec9f.png)

---

### Custom connectors

With Power Apps, you can create custom connectors that allow you to connect to any RESTful API. This gives you the ability to connect to almost any data source that provides a web API. Creating a custom connector is easy and straightforward, as you can simply access the built-in wizard from the menu.

![Screenshot of the costom connectors options location from Power Apps user interface.](https://user-images.githubusercontent.com/91562336/234003464-a39319a2-94c3-4b0f-b5d9-3dbae9d18bc5.png)

### Components

The components in Power Apps serve as the fundamental building blocks for creating custom apps. These pre-built UI components cover a range of common app features such as galleries, forms, and text inputs. Custom components can also be created to fit the specific needs of an app. Utilizing these components is as simple as dragging and dropping the desired component from the side menu into the app.

| **Major Components** | **Description**                                                           |
| -------------------- | ------------------------------------------------------------------------- |
| Control              | Allow interaction with your records from your datasource.                 |
| Property             | Each control has one or more properties. Example: Color, size, type, etc. |
| Function             | Is used to interact with and change properties. Similar syntax to Excel.  |

_It is important to keep in mind that within Power Apps, a property can be defined as a function, but a function cannot be defined as a property. This can be illustrated through examples such as hover-state and on-click-states._

## Getting Started

1. Create a Microsoft Account: To get started with Microsoft Power Apps, you'll need to create a Microsoft account. You can sign up for a free account at https://account.microsoft.com/. Alternatively, a product owner can add you by email.

2. Choose a Template: Power Apps comes with a variety of templates that can serve as the basis for your custom app. You can select a template that best fits your needs or create an app from scratch.

3. Customize Your App: Once you have selected a template or created an app from scratch, it's time to customize it to meet your requirements. You can add data sources, design screens, and create formulas to automate processes.

4. Test Your App: Once you have customized your app, it's important to test it to ensure that it's working as intended. You can test your app on different devices, such as desktops, mobiles, and tablets.

5. Publish Your App: When your app is ready, you can publish it to make it available to your users. You can publish it to the Power Apps store or share it with specific users or groups within your organization.

After your app is live, you can monitor its performance and usage. You can make improvements, and address issues or bugs that may arise.

## Production

Publishing Your Power App

1. Open the app you want to publish.

2. Go to File > Publish app.

3. In the dialog box that appears, select the environment you want to publish the app to from the available list.

4. Check that any external data you're using, such as connectors or APIs, is properly authorized.

5. Configure any additional settings that you require, such as analytics.

6. Click on the "Publish" button to start publishing your app.

Once your app is published, it will be available in the environment you selected.
Make sure to share the app with users who need access to it.

## Conclusion

When looking for a development platform, Power Apps has many benefits to offer. Microsoft is putting a lot of energy into this platform, constantly updating its features and functionality to match user feedback. Power Apps provides a simple code language called Power Fx, which makes it easy to get started with app development. The platform's connectors can be used with a variety of back-end technologies, and it can be combined with the Power Platform to solve any business problem you might encounter.

Another advantage of Power Apps is that the created application can be used on both mobile and computer devices. This creates a portable, functional, and straightforward way of utilizing the application. Furthermore, using Power Apps and the Power Platform for security ensures a standardized approach to security, providing stability and security for business data.

However, there are also some limitations to Power Apps that should be considered. The platform has limitations in terms of customization, which means that users are limited to the features and functionalities provided by Power Apps. Additionally, being a cloud-based environment, users can experience lag time and slow response times when running a bigger application. Moreover, since Power Apps is a subscription-based service, the subscription cost may be a concern for some businesses. Lastly, Microsoft Power Apps requires an internet connection to work, which can be a challenge for businesses that require offline access to their data or work in places with limited network access.

Overall, Power Apps is a powerful and reliable development platform that offers many benefits for businesses looking to develop custom applications. However, it is essential to consider its limitations before deciding to use it for your business needs.

## Resources

[Microsoft’s Power Apps official webpage.](https://powerapps.microsoft.com/nb-no/)

[Connect to SQL server from Power Apps (2022), Microsoft Learn.](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/connections/connection-azure-sqldatabase)

[Create a custom connector from scratch (2022), Microsoft Learn.](https://learn.microsoft.com/en-us/connectors/custom-connectors/define-blank)

[Understand data sources for canvas apps (2022), Microsoft Learn.](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-data-sources)

[What are canvas apps? (2023), Microsoft Learn.](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/getting-started)

[Canvas component overview (2023), Microsoft Learn.](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/create-component)

[What are model-driven apps in Power Apps? (2022), Microsoft Learn.](https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/model-driven-app-overview)

[How to use Microsoft Power Apps - Beginner tutorial (2021), Kevin Starvert.](https://www.youtube.com/watch?v=2RzCbd5XgJg)

[PowerApps tutorial - Create, customize, and share an app from a SharePoint list (2022), Shane Young.](https://www.youtube.com/watch?v=kA5xUtrM6bo)

[Convert your Figma design to a Power App using Figma to app (2022), Microsoft Power Apps.](https://www.youtube.com/watch?v=XH0XmwpqVuQ)

[How to create a Power App from Figma tutorial | Figma and Power Apps integration (2022), Power Apps University.](https://www.youtube.com/watch?v=-8PTq2fCcgA)

[Microsoft Power Apps - Create Apps from Figma UI kit (Preview), Microsoft.](<https://www.figma.com/community/file/1110934196623232680/Microsoft-Power-Apps---Create-Apps-from-Figma-UI-Kit-(Preview)>)

[What is Power Apps?](https://www.youtube.com/watch?v=uqYgq9wmgQg&ab_channel=LisaCrosbie)

[Microsoft Power Platform Fundamentals in 15 minutes](https://www.youtube.com/watch?v=ergBfAQqsgk&ab_channel=LisaCrosbie)

[Shane Young](https://www.youtube.com/channel/UC7_OGRP8BYvtGB8eZdPG6Ng)

[Leila Gharani](https://youtube.com/@LeilaGharani)
