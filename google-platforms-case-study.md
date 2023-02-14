---
title: Google platforms Case Study
keywords: development platforms, google analytics, analytics, GA4, GTM, tracking, google tag manager
tags: Development Platforms, google platforms, analytics
sidebar: development-platforms
permalink: development-platforms/google-platforms.html
folder: development-platforms
---

## Introduction

This study mainly covers Google analytics, but will also touch on Google tag manager, as it is a closely related platform.

Google Analytics is an analysis tool used to gain insights and provide reports on web application user behaviour. Since Universal google analytics (UA) expires in July 2023 (Weber, 2023), this study will cover the already exciting successor, google analytics 4 (GA4).

Google tag manager (GTM) is, as the name suggests, a tag management tool, better known as tag management system (TMS). The purpose is to make it easy to manage tracking codes for various platforms, not only google analytics but also platforms such as google ads, Meta platforms/facebook pixel etc. (Fedorovicius, 2022)

The purpose of a TMS like GTM is to allow for a quick and easy way to update measurement codes and related code fragments, which collectively is known as tags, on a website or web application. This is done by applying a small segment of Tag Manager code to the project. With that code applied the developer can then safely and easily deploy analytics and measurement tag configurations from a web-based user interface. (Google Help, 2023)

## Brief History

"Google Analytics is by far the biggest web analytics platform in the world" - Djuraskovic, O (2022)

- 1998: A statistics analysis program, Urchin was developed.

- March 2005: Google acquired Urchin. (digitalstateconsulting.com, 2014)
- 2005: 1st release. Urchin from Google(urchin.js). (Franco & Valdés, 2021)
- November 2005: Google Introduced the first version of Google Analytics. (digitalstateconsulting.com, 2014).

- 2007: 2nd release. Classic Google Analytics: Google Analytics Synchronous Code(ga.js). (Franco & Valdés, 2021)
- 2007: The Analytics’ reporting interface was revamped for “greater customization and collaboration. "moving analytics from the back room of techies into the boardroom.(digitalstateconsulting.com, 2014)git

- 2008: Continued to evolve with a series of beta updates. Such as: Advanced Segmentation, Custom Reports, Multi-dimensional Motion Charts, a new Management Dashboard. (digitalstateconsulting.com, 2014)

- 2009: 2nd release update. Google Analytics Asynchronous Code (ga.js). (Franco & Valdés, 2021)

- 2009: A new AdSense integration feature which helped users to measure website performance and ROI. In addition to a universal rollout of the Data Export API, which supported the integration of web analytics across multiple platforms.
- October 2009: Google released version 4 og google analytics, with features such as: New algorithm, profile conversions, create goals for time spent on site and page views per visit.
  (digitalstateconsulting.com, 2014)

"The V4 update laid the foundations for Google Analytics that we use today" - (digitalstateconsulting.com, 2014)

- 2011: Version 5 is released.
- In late 2011: Google launched its real time report feature
- October 2011: GA introduced flow visualizations.
- October 2012: Google’s official announcement of Universal analytics(UA)
  (digitalstateconsulting.com, 2014)

- 2012: 3rd release. Google Analytics Tag (analytics.js). (Franco & Valdés, 2021)

- 2013: More than 70 product updates for UA. Such as improved user interface, new APIs, more real-time reports for users better to interpret visitor behavior. (digitalstateconsulting.com, 2014).

- 2017: 3rd release update. Global Site Tag (gtag.js). (Franco & Valdés, 2021)

- 2019: Google analytics 4(GA4) Beta lunch. (Weber, 2022)

- 2020: GA4 Offical release. (Weber, 2022)
- 2020: 4th release. Google Analytics 4 (GA4). (Franco & Valdés, 2021)

- July 2023: The end of Universal analytics(UA) (Weber, 2022)

## About and Features

As mentioned, Google analytics is an analysis tool that collects data and provides insights on how users behave and what actions they take on a website or application through different reports.

GA provide insights in the form of dimensions and metrics in their reports, i.e. Very simply put, GA will answer the question: How many users clicked the primary button on the home page? By using the primary button as a dimension and number of clicks as the metric.

### GA4 provide five main categories

- Acquisition reports
- Engagement reports
- Monetization reports
- Demographics reports
- Tech reports

For the sake of this study, I will cover three of these five reports. Acquisition, engagement and demographics. In addition to exploration reports.

#### Acquisition reports

In GA4 you will find two different types of acquisition reports.

- User acquisition reports: Will help you answer how people who have never used your website or app found your website or app.
- Traffic acquisition reports: Will help you answer what led both new and returning users to visit your website or app.
  (Analytics Help, 2023)

These reports will provide great insights into how people found your website and/or what made them visit.
examples of channels or sources people could have arrived from and triggered them to visit could be:

- Paid Social ads, like ads on facebook or instagram.
- Paid search, like paid ads on google.
- Organic search (no paid), like in the search result of google.
- Direct traffic, people who just enter your website in the browser and go there.

#### Engagement reports

In GA4 you will find four different types of engagement reports

- Events, could be anything happening or user action on the page. Like: page view, button click, form submit, scrolled.
- Conversions, is an event, but usually an event which is view as the final step in a number of events. Like: making a purchase or complete registration.
- Pages and screens, lets you view on which page the engagement is happening. How many views a certain page has, total events triggered on a certain page or how many users visited the certain page.
- Landing pages, gives you an overview of the engagement on the different landing pages (the first page of the website people viewed when entering the website)

#### Demographics reports

Lets you see from what city or country your traffic/users are coming from.

These insights could be useful for both marketers and developers.

As marketers it let's you see where your customers and users are coming from, which could help further adjust the marketing more suited for your audience to increase sales. I.e. A website selling tires for cars. If the majority of their users/traffic are coming from South Africa. Cars driving on snow with tires designed with spikes might not be the best way to go, but if their traffic is mainly from Norway, it might work very well.

For developers, if the traffic is coming from a country which reads from right to left and not left to right, the UX design probably differs.

#### Exploration reports

Makes you customize your own reports, which could provide greater insights to different user journeys.

In GA4 you could setup a lot of complex reports, which might fit your needs better and gives greater insights than what is provided by the standard reports.
Let's say you wanted to view a report with the following conditions: Users who made a purchase but only users who clicked the primary button on the home page and did not arrive from paid ads. You could add all these filters each time on one of the standard reports, but if this is a report you would like to view more frequently, to make an exploration report for it would be much more efficient.

Here you could also create more visual charts and tables, like: funnel exploration and path exploration, to get a visualization on the user journey and behavior.

#### Other features

A list of other features provided by GA4:

- Enhanced Measurement, lets you track page views for SPAs (Single page apps).
- Audiences, GA4 let you create different audiences, which you can customize yourself. i.e. Only users who made a purchase could be a audience.
- Traffic filters, Filter traffic from certain ip-addresses. i.e. Internal traffic.
- Unwanted referrals filter, Filter traffic from websites you don't want to show up in your reports.
- Sessions, let you define what should be counted as a session(a user interacting with your website).
- Engaged session, let you define how long time
-

### Google Tag Manager

As mentioned in the introduction, we will briefly cover the platform google tag manager (GTM) and how it works, especially in relation to google analytics.

GTM works as a middle man between the website and the analytics tool(GA4). GTM will create something called dataLayer, which is an array. It's possible to create this array without the use of GTM, but if there is no dataLayer array, GTM will create it for you. the dataLayer is used to feed information from the website to GTM, which then sends that data to GA4. (Fedorovicius, 2022)

With GTM you can create something called tags, which you can configure to trigger when certain things are happening on the website. For example: You could create a tag in GTM and configure it to send an event to GA4, and then add a trigger when you want that tag to fire/send the event to GA4.

It's fully possible to use google analytics without GTM. But with GTM you could more easily send different events to analytics, without the need to hard-code that functionality yourself.

## Strengths

So what's so great about GA4, besides obviously being a great tool for digital marketers who's looking to increase their sales.

How could we use it to speed up and improve our development?

GA4 is great for proving insights in the form of numbers and user journeys.

It provides insights on how often something is happening on a website, on which page, how long users are staying, which page they previously visited, on which page users land and what page they left, and so on.

We could use this data to develop the website and further improve the user experience.

For example, if users left the website on a certain page, or say nearly no one clicked the primary button on the home page. That may lead to the conclusion that something about that page or that button might not be very user-friendly.

We could add an event on any action or change happening on the website, and get a number on how many times the event occurred.

## Weaknesses

While GA4 is great at providing insights on what happening and how many times something is happening, it's not telling us why. We can just assume, based on the actions and quantity of those actions.

GA4 is also very complex and it can be hard to learn. To find the data on the insights one is after is not always straight forward, and when it comes to finding the right numbers for improving the user experience, there might be more suited and less time consuming tools for that.

## Comparison

Compared to a somewhat more simple tool for mapping user behavior on a website, like Hotjar, GA4 provides deeper insights and numbers. While on the other hand the heat maps provided by hotjar visualize the user behavior in a different and maybe more accurate way when it comes to improving the user experience.

## Summary

GA4 is a statistic and analysis tool which can be used by developers to get insights on users behaviors on a website. It provides different kinds of reports, which one can customize however one wants.

GA4 provide insights mainly in the form of numbers. By using the exploration reports feature one could make more visual representations of the numbers, than the more tabled standard reports.

These reports could be used by developers to get insight into users behavior on a website, to further improve the user experience.

GA4 could be very complex and hard to learn, which makes one might question the value vs the reward of taking the time to learn it as a developer. Specially when there is much simpler tools out there for mapping user behavior.

### Credits

- Joakim Lee Sletten (joakimlees)

#### References

- Fedorovicius, J. (2022) Obtained from https://www.analyticsmania.com/post/google-tag-manager-vs-google-analytics/ & https://www.learn.analyticsmania.com/courses & https://www.analyticsmania.com/post/what-is-data-layer-in-google-tag-manager/
- Franco, L. & Valdés, M. (2021) Obtained from https://onward.justia.com/history-of-google-analytics/
- digitalstateconsulting (2014) Obtained from https://digitalstateconsulting.com/knowledge-is-power/brief-history-google-analytics-part-one/
- Djuraskovic, O (2022) Obtained from https://firstsiteguide.com/best-website-analytics-tools/
- Weber, B (2023) Obtained from https://inmarketingwetrust.com.au/timeline-of-ga4-google-analytics-4-release-date-news/
- Analytics Help (2023) Obtained from https://support.google.com/analytics/answer/${topic}
- Teagle, M. (2022) Obtained from https://www.boostability.com/content/google-analytics-4-pros-and-cons-ga4
- Tag Manager Help (2023) Obtained from https://support.google.com/tagmanager/answer/${topic}
