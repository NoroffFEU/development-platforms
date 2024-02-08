---
title: CDN Case Study
author: Mathias Gauslå <mathiasg12>
tags: CDN, case study, networking, technology
---

## Introduction

![Features](~/assets/CDN/4084.jpg)
A CDN (content delivery network) stands as an essential component in the modern state of the internet and has become an industry standard. The case study aims to explore what a CDN is, a brief history of CDNs, problem statement, main features and objectives with a CDN, a typical CDN user, CDNs market consumption, advantages, and disadvantages of a content delivery network and why it became so popular in the modern world.

## Brief history

In the 1990s a problem that was foreseen was that when the internet grew and more people tried to access the same websites at the same time there would be a bottleneck happening that would cause long waiting times and sometimes websites would crash, and this problem became a reality in the late 1990s. In the mid-1990s the first content delivery network was developed and the first commercial CDN was introduced in 1998 by Akamai as a more efficient way to deliver content on the Internet. In the early 2000s new CDN providers followed, and companies such as Limelight network, CacheFly, Cloudflare, and many others started to appear. Around 2003/2004 an increasing demand for audio and video started the next phase for CDNs and streaming was possible since CDNs offered a massively increased bandwidth, YouTube was released in 2005 and Netflix started streaming short time after in 2007 other streaming services followed soon after.

This is a small bullet point list of some of the important milestones after 2007

- **In 2008** Amazon launched a CDN integrated with their web service.
- **In 2011** AT&T launched their new cloud-based CDN.
- **In 2012** JSDelivr launched a free CDN for open-source project.
- **In 2012** Netflix got its in-house CDN after an increase in streaming.
- **In 2014** Apple got their in-house CDN.
- **In 2015** BelugaCDN launched a new type of CDN price model a type of "pay as you go" driving costs lower.
- **In 2023** Ai optimization, many big CDN providers has integrated Ai to predict traffic and implemented Ai real time decision making.

## What is a Content delivery network?

A content delivery network is a collection of servers around the world that are connected to a main server often called the origin server. The servers are strategically placed geographically across different countries and continents, and these servers are called POP (point of presence) servers or edge servers. The main function of these servers is to cache information such as HTML, JavaScript, CSS, and video content closer to the end user so loading time, performance, and reliability are improved, whereas a non-CDN network may take 5 seconds to load heavy website content to an end-user on the other side of the world a CDN network may have a pop server only a few miles from the end user that has cached heavy images and stylesheets so the loading time may be reduced to only 1 second.
![Features](~/assets/CDN/OJ8XXP0.jpg)

## Problem statement

As talked about in the brief history section, a major problem with the state of networking in the 90s was slow speed, poor performance, and sometimes server crashes when there was too much traffic. This was a problem because of multiple factors such as

- The Internet became more popular and grew rapidly and networking couldn't keep up.
- People connected to websites that were hosted from a great geographical distance which caused long waiting times for the end-user.
  These problems had a big impact on businesses and websites since customers could sometimes not use their services as intended and often lost interest in their products because of long waiting times.

## Main feature and objectives

The main feature of a content delivery network is the ability to cache content in servers and data centers close to the end user, these servers are connected to the main/origin server. This feature was directly connected to the problem statement explained in the section above. And greatly improved performance and connection speed for the users since the user could access cached content from a server close by. The problem with servers crashing because of too much traffic also greatly improved for sites and applications using a content delivery network, since the traffic was divided into many different serves instead of only one data center or server.

## CDN users

www.imperva.com writes that over half of sites on the internet now use CDN technology, but who is a typical CDN user? A typical CDN user is a website owner who is marketing their website on a worldwide basis or large geographical area this can be anything from a government website to an entertainment website or an online store. For that kind of potential traffic and potential geographical differences, a content delivery network might be required to keep loading time to a minimum. A typical non-CDN user, on the other hand, is often the opposite and focuses on smaller geographical areas such as a local website, this can be a local newspaper that focuses on users living in that city, state, or close by, or users that do not expect worldwide traffic for these users a hosting plan with CDN can in some cases be slower with worse performance by having extra connection points. Internal networks also have no use for a content delivery network. For websites with low traffic or budget constraints, a hosting plan without CDN functionality could also be the best and least expensive option.

## Advantages and disadvantages

There are multiple advantages and disadvantages to a content delivery network

### Advantages

1. They give faster loading time. Since the server structure of a CDN is created to have servers closer to the user the response time is often faster, and the loading time is decreased.
2. More users can access the information at once. Since information is cached on servers around the globe, a CDN can handle higher traffic than one server or one datacenter could.
3. Cost efficient. Hosting cost for plans with CDN functionality is often lower compared to how much bandwidth a client is given, the bandwidth is flexible and can handle changes in bandwidth in real-time.
4. Security. CDN services offer some advantages both implemented and some by the design of a CDN, for example since CDNs can distribute traffic to many different servers and can handle a lot of traffic, they are less impacted by Distributed denial-of-service (DDoS) attacks, some CDN services also offer firewalls and other security measures.

### Disadvantages

1. It can be complicated. Managing and monitoring a website or service that uses a CDN can be complicated and a CDN user may have problems with caching issues, CDN settings, and other related issues.
2. Lack of control. When using a CDN third-party provider the customer may face downtime or performance issues on the CDN provider's end that the customer has no control over.
3. Outdated cache. Some information is not suitable for caching such as some dynamic content, especially content that is updated almost in real-time such as stock data, CDNs don't work optimally in these cases compared to other networking models.

## Market comparison

While content delivery networks are now the most widely used network technology there are others with their own use, for example, peer-to-peer (P2P) networks. Unlike a traditional content delivery network these networks use client resources to expand the network. P2P network structure is mainly used for downloading and uploading files with some users sharing files while other retrieves them, this form of networking is cheap to maintain since users contribute to the network with their resources. The most known example of a P2P network is BitTorrent where the network is dependent on users sharing to transfer data. Another network configuration that is more common than P2P is using only one localized data center or server. The main difference compared to CDN is that instead of one main data center and other POP servers placed around the world, localized hosting is only one data center or server this is often used for small localized websites and application where traffic is not massive and the geographical distance to the user is not expected to be far.

## Conclusion

Content delivery network is a crucial part of the modern internet, without them the high traffic and fast speeds required for big global websites and streaming video content would not be possible. Its technology is changing fast, Starting in the 90s with only a few servers around the world that could cache static files like HTML, CSS, and images. To the present day where servers are scattered all around the world that are capable of dynamic and static caching, mobile optimization, security improvements, and cloud integration and almost half of all websites using CDN technology. Content delivery networks have their advantages and disadvantages and are not suitable for every networking task or networking demand out there, but in the future users all over the world can expect to see an expansion to CDNs. New technology is often built around a CDN structure with the goals of improving the speed, performance, security, and reliability of the current content delivery networks and content delivery technology.

### Sources

https://content.noroff.dev/development-platforms/networking.htm
https://aws.amazon.com/what-is/cdn/
https://www.asioso.com/sr/blog/advantages-and-disadvantages-of-a-content-delivery-network-b516
https://www.techtarget.com/searchnetworking/definition/point-of-presence-POP
https://en.wikipedia.org/wiki/Content_delivery_network
https://www.akamai.com/company/company-history
https://medium.com/globant/content-delivery-networks-explained-5a1feaa224c8
https://timelines.issarice.com/wiki/Timeline_of_content_delivery_networks
https://www.belugacdn.com/global-content-delivery-networks/
https://www.linkedin.com/pulse/evolution-cdn-technology-2024-blazingcdn-rppvf/

pictures:https://www.freepik.com/free-vector/infographic-template-design_1014000.htm#query=worldwide%20web%20servers&position=5&from_view=search&track=ais&uuid=6232b29b-aca7-47b1-8b29-dd71d65a109d
https://www.freepik.com/free-vector/network-database-concept_1531128.htm#query=CDN&position=5&from_view=search&track=ais&uuid=f7924549-4722-4062-9653-237cad9d0396
