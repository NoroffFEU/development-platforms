---
title: Cloudflare
author: Regine Dille Kornbakk <@theregzi>
tags: cloudflare, case study, CDN
---

# Cloudflare

## Introduction

Cloudflare is a connectivity cloud that provides network and security products for consumers and businesses, and it is based in San Francisco, California. It is a provider of content delivery networks services such as cloud cybersecurity, DDoS mitigation, wide area network services, domain registration and much more. Its web security services are used by more than 19 % of the Internet. Millions of people use Cloudflare for security and to get connected, and both individuals and some of the world’s largest enterprises use the platform. In 2023, Cloudflare handled an average of 45 million HTTP requests per second. 

The company has launched services like Workers AI in 2023, allowing users to utilize Nvidia GPUs within Cloudflare's network for artificial intelligence applications. It has also protected customers from some of the largest DDoS attacks in the history of the internet. Initiatives like "Project Galileo" and the "Athenian Project" provide free security services to human rights groups, journalists, and electoral infrastructure. Cloudflare has also focused on edge computing with Cloudflare Workers, a serverless platform for developers, and has introduced services like Cloudflare Pages and an SQLite-based edge database D1.

## Brief History

-	Cloudflare was founded in July 2009 by Matthew Prince, Lee Holloway and Michelle Zatlyn. The founders were inspired by a product by Unspam Technologies that they had previously worked on, which led to the creation of Cloudflare. 
-	They assembled a team in Palo Alto, attracting engineers from top companies like Google, Yahoo, PayPal, and Mint.com, despite not yet having a product. Their main goal was to help build a better internet.
-	In June 2010, Cloudflare launched a private beta to select users. The users received enhanced security, and their websites loaded on average 30% faster. This was due to Cloudflare's efficient system, caching of static resources, and reduction of unwanted traffic.
-	Cloudflare officially launched at TechCrunch Disrupt in September 2010. Since then, they have launched many products and hundreds of features, opened six offices across three countries, and brought 330 data centres online.
-	Michelle Zatlyn became the president of the company in 2020, making her one of the few female presidents of a technology company in the U.S.

## Applications

These are some of the key applications and services that Cloudflare provides:

-	**Content Delivery Network (CDN):** Caches website content at strategic locations around the world, reducing latency and improving load times for users all around the world.
-	**DDoS Mitigation:** Free or paid mitigation services that protect customers from denial of service (DDoS) attacks. DDoS attacks meaning malicious attempts to disrupt a targeted server, service or network by overwhelming it with a flood of internet traffic. 
-	**Cloudflare Workers:** A computing platform without a server that allows developers to run JavaScript, Rust, C and C++ code at the edge, allowing for low-latency applications without configuring or maintaining infrastructure.
-	**Cloudflare WAF (Web Application Firewall):** A firewall that sits in front of web applications to stop a real-time attack by using rulesets, advanced rate limiting, exposed credential checks, uploaded content scanning and other security measures. 
-	**Workers AI:** A framework that allows developers to run AI models and leverage NVIDIA GPUs within Cloudflare’s network for artificial intelligence applications.

## Cloudflare’s Strengths

### Performance Optimization

**Content Delivery Network (CDN) Benefits:** Page load times and overall website performance is improved by the global network of servers that is strategically placed across various locations. A website’s content like images, CSS files and JavaScript files are cached and delivered from servers that is close to their users, which is beneficial for the performance of the websites.

**HTTP/2 Protocol:** Cloudflare supports HTTP/2 by default, which is a modern and faster alternative to the HTTP/1.1 protocol. It allows for parallel loading of page element, which speeds up the website.
Extensive Security Solutions

**DDoS Protection:** Cloudflare’s network can detect and mitigate DDoS attacks, preventing them from reaching your server and cause downtime. It safeguards a website from malicious traffic and stops DDoS attacks, which maintains the availability and accessibility of a website. 

**Web Application Firewall (WAF):** Offers customizable firewall rules to protect applications from vulnerabilities and exploits.

**SSL/TLS Encryption and HTTPS Support:** By using SSL/TLS encryption capabilities, it secures the communication between a website and its visitors. It enables HTTPS for a website, which ensures an encrypted connection.

### Highly Customizable

**Page Rules:** Cloudflare’s page rules makes it possible to customize settings like caching, security and other settings for individual pages on your website.

**Cloudflare Domains:** Registration services are also offered by Cloudflare, which allows to manage website’s domain names through the platform. Offers opportunity to simplify DNS configuration and streamline your workflow.

**Flexible Pricing:** Scalable pricing plans that cater to a variety of needs, from personal blogs to large enterprises. Also offers a free plan that includes essential features.

## Cloudflare’s weaknesses

### Dependency on Cloudflare’s Infrastructure

**Downtime Risks:** Cloudflare generally has a reliable and distributed network, but if there are any disruptions or outages, it can impact a websites availability. It is therefore important to have a backup plan in place and monitor the service status. 

### Privacy and Data Concerns

**Handling Sensitive User Information:** As an intermediary for internet traffic, Cloudflare handles large amounts of data, raising concerns about data privacy and the potential for government surveillance. It is important to review their practices and evaluate if they align with an organisation’s data privacy requirements.

### Overlapping and Troubleshooting Issues

**Overlap:** It might be that the existing hosting provider already provides services like DDoS protection, caching and DNS optimalization. If Cloudflare is also added, it might cause redundancy without performance gains. This can overcomplicate your setup and cause issues with troubleshooting. 

**Complexity with Debugging:** Finding out of what is causing issues can be more difficult as another layer in the traffic route is added. It can be challenging to figure out where the issue stems from, is it within your site, Cloudflare or your host’s end?

## Comparison: Cloudflare VS Akamai

Here comes a comparison between Cloudflare and Akamai. Akamai is one of the largest and oldest global CDN providers, which is why it is reasonable to compare it to Akamai.

### Network Size and Reach

Akamai is the most established Content Delivery Network (CDN) providers and has one of the largest global networks. It has more than 300.000 servers located worldwide, which gives a great coverage and low latency. Cloudflare has a global network with more than 330 data centres in more than 100 countries.

### Functionality and Services

Both Cloudflare and Akamai offers a wide range of services including CDN, web security, cloud services, SSL, DDoS protection and more. Akamai is strong in enterprise solutions with tailored services for large businesses, while Cloudflare is tailored for small and large businesses.

### Setup and Ease of Use

Cloudflare provides instant setup, while with Akamai, you cannot just sign up and get started, you must talk to sales first. This makes Cloudflare a good choice for both small and large businesses that seeks a user-friendly platform. Cloudflare has a strong focus on rapid deployment and innovation in network technology. 

### Pricing

Akamai has a minimum contract term of 12 months, while Cloudflare has none. Cloudflare has a free tier, and Akamai does not. That makes it easier to start with Cloudflare. Cloudflare offers a free SSL certificate, while Akamai does not. Cloudflare has 20 and 200 USD per month pricing plans, and an Enterprise plan. Akamai has no public pricing plans. However, vendors without free tiers and who has private pricing are usually more flexible than ones with public pricing plans.

### Conclusion

-	Akamai is ideal for large enterprises seeking extensive, customized CDN and security solutions with a vast global network.
-	Cloudflare is well-suited for both small and large businesses looking for a user-friendly platform with flexible pricing, easy setup, and strong security features.

The choice between Cloudflare and Akamai depends on an organization's size, specific needs, budget, and preference for ease of setup versus customized enterprise solutions.

## References

- https://en.wikipedia.org/wiki/Cloudflare

- https://www.cloudflare.com/what-is-cloudflare/

- https://www.cloudflare.com/application-services/products/waf/

- https://aaron-russell.co.uk/blog/pros-and-cons-of-using-cloudflare/

- https://www.cloudpanel.io/blog/cloudflare-benefits/

- https://www.itomic.com.au/the-downsides-of-cloudflare/

- https://www.cdnplanet.com/compare/akamai/cloudflare/

- https://www.cyberlands.io/cloudflarevsakamai
