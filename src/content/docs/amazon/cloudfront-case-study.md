---
title: Amazon CloudFront case study
author: Marius Malkenes <Malkenes> 
tags: CDN, Amazon, case study
---

## Introduction

Amazon CloudFront is a high performing CDN service provided by Amazon Web Services. It is designed to accelerate the delivery of web assets by caching them in edge locations close to end users, thereby reducing latency and improving performance. It’s a go-to choice for businesses already using Amazon’s cloud ecosystem.

## Brief History

- 2008: Beta launch of CloudFront.
- 2009: Introduces support for private content delivery.
- 2010: Launches edge location in Singapore, making it the 15th edge location worldwide across 3 continents.
- 2011: Tops 20 000 active customers.
- 2014: Amazon CloudFront is included in AWS free usage tier.
- 2015: AWS WAF integration.
- 2017: Lambda@edge generally available.
- 2020: CloudFront announces real-time logs and Origin shield.
- 2021: CloudFront announces CloudFront functions.
- 2022: CloudFront launches continuous deployment support.

## Main Features

### Global edge network
 Amazon CloudFront Leverages a global network of over 600 PoPs in 100+ cities across 50+ countries. This extensive network ensures that content is delivered with low latency and high transfer speeds users regardless of their geographical location. In addition, CloudFront also uses 13 regional edge caches that optimize cache efficiency by retaining more content closer to the viewers, this reduces the need to fetch content from the origin server, further enhancing performance.
### Security
Amazon CloudFront is integrated with AWS Shield, providing built-in DDoS protection. 

Customers can also enable AWS WAF to define custom rules to protect web applications from attacks. Or utilize one-click protection that applies AWS recommended set of protections that: 
- Block IP addresses from potential threats based on Amazon internal threat intelligence. 
- Protect against the most common vulnerabilities found in web applications as described in the OWASP Top 10. 
- Defend against malicious actors discovering application vulnerabilities. 

CloudFront fully supports HTTPS, ensuring secure data transfer between the client and the edge locations. Customers can also use their own SSL/TLS certificates to deliver content securely under their own domain names. 
### Availability
Origin shield is an additional layer in the CloudFront caching infrastructure that optimizes cache hit ratio, reduces origin load and enhances network performance.
### Edge computing
 CloudFront Functions enables developers to run JavaScript functions at the edge to customize content delivery with low latency. This feature is ideal for header manipulation, URL rewrites, and request/response inspection, all executed close to end users.

 CloudFront supports Lambda@Edge, which allows developers to run serverless functions at AWS edge locations globally. This feature enables real-time processing and customization of content, such as modifying HTTP headers, URL rewrites, and A/B testing, closer to the user.
### Real-time metrics and logging
CloudFront provides real-time metrics and detailed logs through AWS CloudWatch and Amazon S3, enabling customers to monitor CDN performance, troubleshoot issues, and gain insights into usage patterns.
### Continuous deployment
CloudFront continuous deployment can easily be integrated with your CI/CD pipelines, some common use cases include configuring a new origin, understanding the performance impact on changing cache settings, testing new geographic restrictions or testing new versions Lambda@Edge or CloudFront functions.
### Cost effective
CloudFront offers a pay-as-you-go pricing model with no up-front fees or long-term commitments. Customers pay based on the amount of data transferred out, getting cheaper if you exceed 10TB/month and the number of HTTP/HTTPS requests processed. Additionally, data transfer between AWS cloud services and Amazon CloudFront is free for origin fetch.
## Market comparison
| Feature | Amazon CloudFront | CloudFlare | BlazingCDN |
| - | - | - | - |
| Global coverage | 600+ globally dispersed Points of Presence | 330+ data centers in 120+ countries, widespread coverage | Smaller network with strategic locations in key regions |
| Security features	| DDoS protection, AWS WAF, SSL/TLS, field-level encryption | DDoS protection, WAF, SSL/TLS, bot management, zero-trust security model | Basic DDoS protection, SSL/TLS encryption |
| Customization | Highly customizable with Lambda@Edge, integrates with AWS services | Flexible with Cloudflare Workers, broad third-party integrations	| Limited customization, basic caching options |
| Pricing | Pay-as-you-go, potentially higher for smaller users	| Free tier available, paid plans for advanced features, cost-effective for SMBs | Competitive pricing, particularly for video streaming and downloads |
| Ease of use | Comprehensive management tools, but steeper learning curve for beginners | Intuitive dashboard | Simple interface, easy setup, fewer advanced management options |

## Common use cases
Amazon CloudFront is a highly versatile content delivery network that supports a wide range of use cases, including:
- Website acceleration 
- Media and video streaming 
- API acceleration 
- Software and game distribution 
- E-commerce optimization 
- Security and compliance 
- Edge computing and customization
## Conclusion
Amazon CloudFront offers deep integration with AWS services and advanced features for enterprises with complex content delivery needs. 
The wide range of features and integration options can cause a steep learning curve for new users.
CloudFronts full potential is best realized when used with other AWS services, it can be a disatvantage for those using non-AWS services.
Overall Amazon CloudFront is expected to remain a leading CDN provider with the increasing demand for fast, secure and reliable content delivery.
## References
- [aws.amazon.com](https://aws.amazon.com)
- [wikipedia.org/wiki/Amazon_CloudFront](https://wikipedia.org/wiki/Amazon_CloudFront)
- [cloudflare.com](https://www.cloudflare.com)
- [blazingcdn.com](https://blazingcdn.com)
- [cdnperf.com](https://www.cdnperf.com)