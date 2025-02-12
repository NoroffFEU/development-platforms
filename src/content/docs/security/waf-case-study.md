---
title: Web Application Firewalls (WAF) Case Study
author: Anna Aasprong Brekke <AnnaAaBrekke>
tags: security, web application firewall, WAF, threat detection, case study, Cloudflare, AWS WAF
---

## Introduction

This case study begins with a general overview of WAF technology, providing insight into its purpose and importance in modern web security. It then focuses on two widely-used tools: Cloudflare WAF and AWS WAF, exploring their key features, integrations, and use cases. Additionally, the study includes a market comparison with other tools, highlighting their strengths and weaknesses.

**But what is WAF?** A Web Application Firewall (WAF) is like a smart security guard for your website. It monitors all incoming traffic, blocks harmful activities like hacking attempts, and keeps your site safe and running smoothly. WAFs are essential for protecting against common web attacks like SQL injection, XSS, and DDoS.

**Usefulness to Developers**

- **Time-Saving:** Automates security, freeing developers to focus on coding.
- **Integration-Friendly:** Easily incorporates into CI/CD workflows.
- **Improved App Stability:** Blocks threats that could disrupt application functionality.

## Brief History

- **1990s:** Firewalls emerged to protect networks, focusing on packet filtering; web apps introduced new vulnerabilities.This case study begins with a general overview of WAF technology, providing insight into its purpose and importance in modern web security. It then focuses on two widely-used tools: Cloudflare WAF and AWS WAF, exploring their key features, integrations, and use cases. Additionally, the study includes a market comparison with other tools, highlighting their strengths and weaknesses.
- **1999:** First WAF introduced to address web-specific threats like SQL injection and XSS with rule-based HTTP filtering.
- **2002:** ModSecurity released as the first open-source WAF, shifting to software-based solutions.
- **2006:** OWASP Top 10 highlighted major web vulnerabilities, driving WAF adoption.
- **2010:** Cloud WAFs launched (e.g., Cloudflare, Akamai), offering scalable and cost-effective solutions.
- **2013:** PCI DSS mandated WAFs or code reviews for secure web apps, boosting adoption.
- **2017:** Machine learning-powered WAFs emerged, focusing on zero-day threats and behavior analytics.
- **2020s:** Modern WAFs protect APIs, integrate with DevSecOps, and secure CI/CD pipelines.

## Related Terms to Understand WAF

**HTTP/S:** _The protocol used for transferring data over the web. HTTPS is the secure version, encrypting communication (handshake) between the user and the server._

**SQL Injection:** _An attack where hackers manipulate SQL queries to access or damage a database._

**Cross-Site Scripting (XSS):** _An attack where malicious scripts are injected into a website to trick users or steal data._

**DDoS Attack:** _Distributed Denial-of-Service attack, where an attacker overwhelms a website with excessive traffic to crash it._

**API:** _Application Programming Interface, a set of rules that allows different software systems to communicate with each other._

**OWASP Top 10:** _A list of the ten most critical web application security risks, maintained by the Open Web Application Security Project (OWASP)._

## Main Features

A Web Application Firewall (WAF) is a security tool designed to protect web applications by filtering and monitoring HTTP/S traffic and preventing common attacks.

| FEATURE                                             | DESCRIPTION                                                           |
| --------------------------------------------------- | --------------------------------------------------------------------- |
| **Protection Against OWASP Top 10 Vulnerabilities** | Prevents SQL injection, XSS, and other web-based attacks.             |
| **Customizable Rules**                              | Allows users to define rules tailored to their specific applications. |
| **Real-Time Threat Monitoring**                     | Monitors and blocks malicious activity in live traffic.               |
| **Cloud-Based WAF Options**                         | Provides scalable and hardware-free security solutions.               |
| **API Security**                                    | Safeguards APIs and microservices from common threats.!               |
| **Automated Threat Detection**                      | Uses machine learning to detect zero-day and emerging attacks.        |

## WAF Tools

![image](https://github.com/user-attachments/assets/464d3937-d7a5-4cb5-8268-a6b6c64b21c6)

### 🛠️ Cloudflare WAF

Cloudflare WAF is a cloud-based security solution integrated into Cloudflare's global content delivery network (CDN). It is designed to protect web applications by monitoring and filtering HTTP/S traffic.

**Key Capabilities:**

- **DDoS Mitigation:** Automatically identifies and blocks large-scale DDoS attacks without manual intervention.
- **OWASP Top 10 Protection:** Pre-built rules defend against common vulnerabilities like SQL injection and XSS.
- **Custom Rules:** Allows users to define their own rules for specific use cases.
- **API Security:** Dedicated protection for REST and GraphQL APIs, ensuring API traffic is secure.
- **Simplified Deployment:** As a cloud-based solution, it requires no on-premise hardware or complicated setup.

**When to Use Cloudflare WAF:**

- Ideal for businesses looking for a simple, scalable, and cost-effective WAF.
- Great for protecting applications with minimal technical overhead.

#### Setting Up Cloudflare WAF

1. **Sign In:**

- _Log in to your Cloudflare Dashboard and select your domain._

2. **Enable WAF:**

- _Go to Security > WAF in the dashboard._
- _Ensure the WAF is toggled ON for your domain._

3. **Add Rules:**

- _Use Managed Rulesets (e.g., OWASP Top 10)._
- _Create Custom Rules to block or allow specific traffic patterns._

4. **Set Rule Priority:**

- _Arrange rules to ensure proper execution order._

5. **Test and Monitor:**

- _Review blocked requests and fine-tune rules via Firewall Events._

---

![image](https://github.com/user-attachments/assets/ce485d4e-43b9-474a-afbe-a2127b8b35b9)

### 🛠️ AWS WAF

AWS WAF is a web application firewall integrated with the AWS ecosystem. It offers detailed traffic control for applications running on AWS infrastructure, making it ideal for businesses already using AWS services.

**Key Capabilities:**

- **Rule Customization:** Users can create and modify rules to block specific traffic patterns, tailored to their needs.
- **AWS Integration:** Works seamlessly with AWS services like CloudFront, API Gateway, and Load Balancers.
- **Bot Control:** Provides features to identify and mitigate harmful bot traffic.
- **Detailed Metrics and Logging:** Monitors traffic patterns in real-time using AWS CloudWatch, enabling granular visibility.
- **Flexible Pricing:** Pay-as-you-go model ensures you only pay for what you use.

**When to Use AWS WAF:**

- Best suited for businesses heavily invested in the AWS ecosystem.
- Ideal for teams that need granular control over application security.

#### Setting Up AWS WAF

1. **Log In:**

- _Access the AWS Management Console and navigate to AWS WAF & Shield._

2. **Create Web ACL:**

- _Define scope (CloudFront or regional resource like ALB)._
- _Name the Web ACL and associate it with resources to protect._

3. **Add Rules:**

- _Use Managed Rules (e.g., AWS OWASP Top 10) or create Custom Rules for specific traffic patterns._

4. **Set Rule Priority:**

- _Arrange rules to determine their execution order._

5. **Review and Save:**

- _Review your setup and click Create Web ACL to deploy._

## Market Comparison

| WAF TOOL        | STRENGTHS                              | WEAKNESSES                     | INTEGRATION                    |
| --------------- | -------------------------------------- | ------------------------------ | ------------------------------ |
| **Cloudflare**  | Easy to use, scalable, DDoS protection | Limited customization          | Works with most CDNs           |
| **AWS**         | Customizable, works with AWS services  | Complex setup for beginners    | Best for AWS users             |
| **Fortinet**    | Strong security, works in any setup    | Expensive for small businesses | Connects with Fortinet tools   |
| **Imperva**     | Advanced threat detection              | High cost                      | Supports various platforms     |
| **ModSecurity** | Free, highly customizable              | Requires technical skills      | Works with Apache, Nginx, etc. |

## Conclusion

Web Application Firewalls (WAFs) are essential tools for keeping websites and apps safe from attacks like SQL injection, XSS, and DDoS. They help protect sensitive data, ensure websites run smoothly, and save developers time by automating security tasks.

Different WAFs, like Cloudflare and AWS, have unique strengths. Cloudflare is simple and easy to set up, while AWS offers more control and works perfectly with other AWS tools. Choosing the right WAF depends on your needs, like how much customization you want or what platform you’re using.

In today’s fast-paced development world, a good WAF does more than block threats—it helps developers focus on building great apps while keeping everything secure and stable.

### References

- [OWASP Top 10](https://owasp.org/www-project-top-ten/) - Detailed list of the most critical web application security risks.
- [Cloudflare WAF Documentation](https://developers.cloudflare.com/waf/) - Official documentation for configuring and using Cloudflare WAF.
- [AWS WAF Documentation](https://docs.aws.amazon.com/waf/latest/developerguide/) - Official guide for AWS WAF setup and features.
- [PCI DSS Guidelines](https://www.pcisecuritystandards.org/) - Compliance standards for secure web application usage.
- [ModSecurity Documentation](https://www.modsecurity.org/) - Resources on the first open-source WAF and its capabilities.
- [Akamai WAF Overview](https://www.akamai.com/products/web-application-firewall) - Insights into Akamai's cloud-based WAF solution.
- [Fortinet WAF Documentation](https://www.fortinet.com/products/web-application-firewall) - Detailed information on Fortinet’s WAF tools.
- [Web Application Firewall - Wikipedia](https://en.wikipedia.org/wiki/Web_application_firewall) - Overview of WAFs, including functionality and history.
- [Application Firewall - Wikipedia](https://en.wikipedia.org/wiki/Application_firewall) - Explanation of application firewalls and their evolution.

### Additional Resources

- [Noroff - Module 3: Security](https://mollify.noroff.dev/content/feu2/development-platforms/module-3/security?nav=undefined)
- [Understanding WAFs (YouTube Video)](https://www.youtube.com/watch?v=BNHIgUMCn7c)
- [Web Application Firewalls Overview (YouTube Video)](https://www.youtube.com/watch?v=-n15VR9HWiI)
- [WAF Features Explained (YouTube Video)](https://www.youtube.com/watch?v=Zwdp7o5kzf8)
- [WAF and API Protection (YouTube Video)](https://www.youtube.com/watch?v=tRx8fdtAsmk)
