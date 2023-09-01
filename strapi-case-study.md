# Strapi Case Study

## Author: Linn Melberg

###### Tags: CMS, Headless CMS, Open-Source

In this case study, I will be providing insight into the CMS service Strapi. I will give an overview of that a CMS is and what Strapi has to offer. I will do a market comparison to a similar service, and conclude with the advantages and limitations that comes with using Strapi.

## What is Strapi?

![StrapiLogo](https://cmscritic.com/ms-content/uploads/2022/06/strapi-featured-image-scaled.jpg)

### Short and sweet

Strapi is the market leading `open-source` `headless` CMS. It is 100% `javascript` for both front- and backend, and is `fully customizable`. It offers a variety of plans, and you can host your content on Strapi, elimination the need for a separate hosting service.

### What is cms?

CMS stands for `Content Management System(s)`. Simply put, as the name suggests, it is a system to manage content for your website or app. There are lots and lots of CMS options, and each comes with their own advantages and limitations, all depending on what you need from your CMS. You can divide CMSs into two categories, `traditional` and `headless`. Strapi falls in the headless category.

#### Traditional

Traditional (`monolithic`) CMSs are integrated into the platform you use to display the content. Creating an all-in-one experience.

> For example, say you have a blog hosted on wordpress. Here you can edit posts directly on the platform without ever leaving wordpress.

This offers simplicity, eliminating the need for users to know `html` and `css`. While many traditional CMS platforms offer customization, you are limited by the fact that you cannot easily use that content on other sites. Note: Wordpress can be used as both a traditional and headless CMS.

#### Headless

Headless CMSs are not integrated in the website used to display the content. This means you create and manage your content in one place, and use, format, and display the content on a separate platform. This can be used to separate your front- and backend elements of your site, this is often referred to as `decoupling`, while traditional CMSs are referred to as `coupled`. It essentially means your content can be accessed through an `API`, and you have the ability to display and customize it exactly the way you prefer. You could also make several different websites with the same content from the same API, making it easy to switch hosts and frontend solutions if you need.

Some drawback lies in the need for a bit more technical knowledge in the displaying of the content compared to traditional CMSs, however, the creation of content can be just as easy, and more customizable than a traditional CMSs.

### Brief history

In the early days of the internet, think before the mid-90’s, most web pages displayed mostly `static` informational type content. With the use of the web evolving, and the content becoming more `dynamic`, the need for a CMS became apparent. Fast forward to today where you can pick and choose between a plethora of different systems all designed to manage content.

- 1985 - FileNet is founded. It is considered to be the first system that was a real content management system.
- 1995 - Vignette came on the scene in late 1995 with the goal of making web publishing more accessible and more personalized, it is commonly credited for originating the term “content management system.
- 1996 - Platforms such as Documentum, FatWire, and FutureTense entered the scene.
- Early 2000’s - Plenty of open-source CMSs are available, with WordPress gaining popularity focusing on blog content delivery and letting third-party developers add customizations and extensions.
- 2003-2006 - Easy to use website-building CMS sites offer premade templates for people who had no coding experience (traditional CMS). Sites like: SquareSpace (2003) and Wix (2006)
- 2007 - mobile devices made headless CMS a priority.
- 2015 - Strapi project is founded
- 2016 - First edition of Strapi is launched
- Late 2010 - API first CMS and CMS as we know it today became widely used.

## How do you use it?

### Key Features:

Strapi can be used with various `databases`, including `PostgreSQL` and many others. Strapi enables users to consume APIs from a content type via `Get`, `Post`, `Delete`, and `Put` requests, mostly performed manually.

**RBAC:** `RBAC` refers to `Role-Based` `Access Control`, a group of operations and permissions you can grant to users.
**Super Admins**: The `Super Admins` have access to and control all features and settings.
**Editor:** The `Editors` can edit, publish, and manage user-generated content.
**Authors:** The `Authors` are limited to managing and publishing the information they have produced.

**Dynamic zones:** Content editors dynamically choose what component to include.

> Say you want to create a site, and on that site you want to display hair care products. The Editor can create a template for the products page and choose the components for each product, ex. Name, Image, Description, and Price. When the author visits the CMS, these are the options the author has in terms of the content they want to add. The Editor can choose to add or delete components, ex. add a “works well with X type hair” component. The Author will now be given a new field to post content to.

### (Almost) All Features:

| Content               | Platform                          | Publishing     | Development            | Design        |
| --------------------- | --------------------------------- | -------------- | ---------------------- | ------------- |
| Content Authoring     | User Community                    | Multi-language | Image Management       | Customization |
| Versioning            | User, Role, and Access Management |                | Unlimited Environments |               |
| Asset Management      | Flexible Navigation Structures    |                |
| Content Repository    | API / Integrations                |                |
| Rich Text Editor      |                                   |                |
| Plug-ins/Widgets/Apps |                                   |                |
| Internal Search       |                                   |                |

### Get started quickly

#### Prerequisites:

- Node.js (v16, v18, v20 - other versions are not fully supported)
- Package manager - npm (v6 or higher) or Yarn

#### 1. Create your project.

- Run the quickstart installation via the terminal.

```sh
npx create-strapi-app@latest my-project --quickstart
```

#### 2. Register yourself as an admin user.

- After installation, your browser opens a tab. Fill out the form to create your account, become an admin of your project, and access the admin panel.

![StrapiAdminPanel](https://docs.strapi.io/assets/images/qsg-handson-part1-01-admin_panel-568a4a5b98f73196b58999f32abb8ea0.png)

#### 3. Create collection types (ex. Product template displayed on products page, and/or product template for product specific page)

- Click on the `Create your first content type` button. (If it's not showing up, go to `Plugins` -> Content-type `Builder` in the main navigation.)
- Click on `Create new collection type`.
- Type `Products` for the Display name, and click Continue.
- Click the Text field.
- Type `Product Name` in the Name field.
- Switch to the `Advanced Settings` tab, and check the Required field and the Unique field settings.
- Click on Add another field.
- Choose the Rich text field.
- Type `Description` under the Name field, then click Finish.
- Add price field.
- Finally, click `Save` and wait for Strapi to restart.

#### 4. Create entries based on the templates created above.

- Go to `Content Manager` > Collection types - `Products` in the navigation.
- Click on `Create new entry`.
- Type the name of your hair care product in the `Name field`. Let's say it's Color Wow.
- In the `Description` field, write a few words about it. Ex. Powerful, ultra-moisturizing, anti-frizz treatment keeps dry/dehydrated hair and coily/curly hair glassy-smooth, straight and frizz-resistant through 3-4 shampoos.
- Add price to the price field.
- Click `Save`.

#### 5. Publish the content

- First, navigate to Content Manager > Collection types - products. From there:
- Click the "Color Wow" entry.
- On the next screen, click `Publish`.
- In the Confirmation window, click Yes, publish.

#### 6. Use the API.

- The list should be available at http://localhost:1337/api/products.

> Further you can deploy the content on Strapi Cloud.
> More information and a complete guide can be found in Strapi’s documentation.

## Market comparison - Strapi VS Contentful

> Quickly, Contentful is a headless CMS. It is a proprietary SaaS(software as a service), and is centered around creating easy, flexible, and fast content with an API-first approach.

### Technical:

While they offer many of the same `features`, there are some key technical differences between the two with `advantages` and `drawbacks` to each.

#### Hosting:

Strapi is `self hosting`, meaning you can host your database wherever you choose, they also offer to host on Strapi if you so wish. As Contentful is a `SaaS`, they only offer hosting on their own platform. This offers simplicity, but can become a drawback as you will be bound to their price models, and possible price increases.

#### Customization:

While Strapi offers more `customization` due to it being open source, meaning you as a developer have access to Strapi’s code. The trade off is the required technical knowledge of the user in order to utilize it. Contentful still offers a great amount of customization, but with less technical knowledge needed.

#### Security and authorization:

Both platforms are relatively secure based on today's standards. However, with Strapi you can customize more of your security options like `oAuth` via plugins. This comes again with the need for some additional knowledge. You can either create “better” security, but you can also land in giant pitfalls if you make some wrong moves. Again, Contentful is `easier` and more `friendly` to use. \
Both offer role based authorizations (admin, author, editor, etc.)

#### Support:

There is a decent amount of `documentation` for both. Both offer contact by submitting a form. However as Strapi is `community driven`, you can find lots of help relatively quickly by searching online and on `forums`. While there are still decent offerings of help online for contentful, it is just not the same as a whole community of developers passionate about the Strapi project.

### Pricing

#### Strapi:

Free forever with self hosting

##### If you host with Strapi:

- Strapi offers a free trial of all their paid plans for 14 days.
- Pro(10 seats / 100,000 cms entries) - $99 per month per project
- Team(20 seats / 1,000,000 cms entries) - $499 per month per project
- Custom - contact Strapi for pricing

#### Contentful:

Free (5 users, no upgrades available)

- Basic (20 users, technical support, options to upgrade to medium for + $350/month) - $300 per month
- Premium(“thousands” of users, Access to Customer Success and Professional Services) - contact Contentful for pricing
- Free trials are available by contacting Contentful, however some trials will include you having to buy a plan after.

### Use case recommendations

Note: these are my personal recommendations. Not all will agree :)

#### Non developer user:

You should only select Strapi for `larger sites`, typically in the blog, news, knowledge-base, and other non eCommerce sites. However, I would note that the need for some `developer knowledge` or support is largely beneficial in any use of Strapi.

Contentful for `fast and easy` smaller sites, and eCommerce sites.

#### As a developer:

Strapi for most projects, and especially for larger projects. The biggest `advantage` is the option for self hosting.

Contentful for smaller quick and easy projects or simple projects that does not require much customization.

## Strapi Documentation

(and some community pages)

- Docs Home Page - [https://docs.strapi.io/](https://docs.strapi.io/)
- User Guide - [https://docs.strapi.io/user-docs/intro](https://docs.strapi.io/user-docs/intro)
- Developer Docs - https://docs.strapi.io/dev-docs/intro
- Strapi Cloud - [https://docs.strapi.io/cloud/intro](https://docs.strapi.io/cloud/intro)
- Forum - [https://forum.strapi.io/](https://forum.strapi.io/)
- Tutorials - https://strapi.io/blog/categories/tutorials
- Blog - https://strapi.io/blog
- Discord - https://discord.com/invite/strapi

## In the end

### Advantages

The main advantages of Strapi is its `versatility` and `freedom`. As a frontend developer it is great to take advantage of the fact that it is `100% javascript` making it easier for you to work with than a “regular backend” system. The self-hosting feature with the free forever plan is a gigantic plus if you have a good grasp of technical knowledge, and of what the intended use for your site is at all times. Thus you can `change` hosting services based on current needs and prices.

The `customization` on all fronts including security. A community driven solution offers a great deal of support from other developers, which if you are a developer yourself, is always appreciated.

### Limitations

Is a slightly `cluttered` UI compared to other services, and using it is a steep learning curve. Not the best option for “quick and dirty” sites. If the technical knowledge is `lacking`, and you are the one setting up the project, there are better and simpler options. Offers no free hosting on their own site, so knowledge of hosting is a must.

All in all, Strapi is great for developers who want `full control` over their project.

## Resources

- [https://cleancommit.io/blog/strapi-vs-contentful-which-is-the-best-cms-in-2022/](https://cleancommit.io/blog/strapi-vs-contentful-which-is-the-best-cms-in-2022/)
- [https://cmscritic.com/strapi-secures-31-million-in-series-b-funding-plans-to-enhance-open-source-headless-cms-and-deliver-cloud-platform](https://cmscritic.com/strapi-secures-31-million-in-series-b-funding-plans-to-enhance-open-source-headless-cms-and-deliver-cloud-platform)
- [https://fireart.studio/blog/contentful-vs-strapi-vs-wordpress-which-one-to-choose/](https://fireart.studio/blog/contentful-vs-strapi-vs-wordpress-which-one-to-choose/)
- [https://golden.com/wiki/Strapi-8AAGPN4](https://golden.com/wiki/Strapi-8AAGPN4)
- [https://lyko.com/no/color-wow/color-wow-extra-strength-dream-coat-200-ml](https://lyko.com/no/color-wow/color-wow-extra-strength-dream-coat-200-ml)
- [https://opensource.com/article/20/7/history-content-management-system](https://opensource.com/article/20/7/history-content-management-system)
- [https://radixweb.com/blog/what-is-strapi](https://radixweb.com/blog/what-is-strapi)
- [https://stackshare.io/stackups/contentful-vs-strapi](https://stackshare.io/stackups/contentful-vs-strapi)
- [https://strapi.io/](https://strapi.io/)
- [https://strapi.io/blog/global-summary-of-some-strapi-key-features](https://strapi.io/blog/global-summary-of-some-strapi-key-features)
- [https://strapi.io/contentful-alternative](https://strapi.io/contentful-alternative)
- [https://strapi.io/pricing-cloud](https://strapi.io/pricing-cloud)
- [https://theecommmanager.com/ecommerce/saas-vs-open-source-ecommerce-platform/](https://theecommmanager.com/ecommerce/saas-vs-open-source-ecommerce-platform/)
- [https://www.contentful.com/](https://www.contentful.com/)
- [https://www.contentful.com/pricing/](https://www.contentful.com/pricing/)
- [https://www.contentstack.com/blog/all-about-headless/content-management-systems-history-and-headless-cms](https://www.contentstack.com/blog/all-about-headless/content-management-systems-history-and-headless-cms)
- [https://www.g2.com/products/strapi/features](https://www.g2.com/products/strapi/features)
- [https://www.udig.com/digging-in/traditional-cms-vs-headless-cms/](https://www.udig.com/digging-in/traditional-cms-vs-headless-cms/)
