---
title: Example Product Case Study
keywords: content delivery network, security, ddos mitigation, routing, serverless code, firewall
tags: CDN, Security, DDoS, Routing, Serverless, Firewall
sidebar: development-platforms
permalink: development-platforms/cloudflare.html
folder: development-platforms
---

# Cloudflare

## Table of content

1. [Introduction](#introduction)
2. [History](#brief-history)
3. [Features](#features)
4. [Strengths](#strengths)
5. [Weaknesses](#weaknesses)
6. [Comparison](#comparison)
7. [Summary](#summary)
8. [References](#references)

## Introduction

Cloudflare is a global content delivery network provider that delivers a broad range of services to businesses, aiming to make them more secure, enhancing the performance of their applications, and eliminating the cost and complexity of managing network hardware. It primarily acts as a reverse proxy between a website's visitor and the customer's hosting provider, meaning it sits in front of back-end applications and forwards client (browser) requests to those applications. When the request passes trough Cloudflare they can apply various rules and optimizations to improve security, performance, and reliability.

## Brief History

- Cloudflare was founded in July 2009 by Matthew Prince, Lee Holloway, and Michelle Zatlyn.
- They launched their Content Delivery Network (CDN) service in 2010.
- Cloudflare received media attention in 2011 for providing the website of LulzSec, a hacking group, with DDoS mitigation. 
- In 2014, they launched "Project Galileo" where they provided activists, journalists, and human rights groups with free DDoS mitigation. 
- In 2017, Cloudflare launched Workers, a serverless computing platform. The same year they started using a wall of lava lamps as a source of randomness for their encryption keys, alongside double pendulums and a geiger counter.   
- On 13 September 2019, Cloudflare became a publicly traded company. 
- In 2020, Cloudflare co-cofounder Michelle Zatlyn was named president. 

## Features

### Content Delivery Network (CDN)

Cloudflare is a large network with servers all over the world. By storing their customers' content across their network, they make sure that content can take the shortest route from their servers to the client (e.g web browser). Cloudflare takes on the role as a reversed proxy. A proxy, more specifically a forward proxy, sits in front of the client making the request to a server on the clients behalf. This is typically used to avoid cencorship, protect identities, or to block the clients behind the proxy from accessing content. A reversed proxy, however, sits in front of the servers, handling the requests coming in from clients. This way, Cloudflare can balance the traffic coming in, spreading the load over more servers. They can also protect the servers from attacks, cache content for enhanced performance, and handle SSL encryption. When Cloudflare launched a private beta to a small number of select members of the Project Honeypot Community in 2010, they got a suprising feedback of 30% faster loadtime for the content providers using their service. The systems efficiency, layer of caching for static resources, and the cleaning out garbage traffic had a big effect.

### DDoS Mitigation

A distibuted denial-of-service (DDoS) attack is a malicious attempt to disrupt the normal traffic of a server, service or network by overwhelming the target with a flood of internet traffic. The attacker seeks to make a machine or network resource unavailable to its users. The incoming traffic flooding the victim originates from many different sources. The attacker can increase effectiveness by compromising and utilizing computer systems as sources of traffic, including computers and IoT devices. 

Mitigating attacks like these is one of the tasks Cloudflare takes on as a bouncer for the servers. Cloudflare will detect attacks and respond by dropping malicious bot traffic, and absorbing the rest of the traffic. They can route traffic, breaking up the remaining traffic into managable chunks that is distibuted to the servers. By adapting to information about the attacks and the attackers, they make their systems stronger and more capable of meating future challenges. 

### Cloudflare Workers - serverless computing platform

Serverless computing is a service in which a cloud provider takes care of the servers on behalf of their customers. Serverless means that the customer writing the code does not have to worry about configuring or maintaining infrastructure. The Cloudflare Workers runtime uses the V8 engine - the same JavaScript (JS) engine used in Chromium browsers and the Node.js runtime enviroment. 

There are some differences between JS written for a browser or for Node.js. Rather than running in a browser or on a server, Workers functions runs on Cloudflare's global cloud network, where each of the machines on the network hosts an instance of the Workers runtime, each of which is capable of running thousands of user-defined apps. 

## Strengths

Using the Cloudflare CDN boosts performance by, among other factors, reducing the distance the requested content needs to travel. This is done by caching the content. That means that if the content requested by the browser is not already available on the Cloudflare networks edge servers, they will make an initial request for the content to the origin server and then store the static content on their network, so that any future request for that specific content can be served directly by their networks edge servers. There are case-studies available on Cloudflare's website where the customer reports a 50% reduction in load time after onbording to Cloudflares CDN. 

In addition to performance, both reliability and security are important strengts of Cloudflare's CDN. By analyzing and directing traffic, they make sure that legitimate requests are handled effeciently, and malicious traffic is dropped or made managable by separating the traffic into smaller lumps that are distributed troughout their network, making it more managable for each individual server. 

## Weaknesses

Using Cloudflare adds some complexity to the process of hosting content. The Cloudflare UI is described as complex by several sources, but I personally found it quite intuitive when I was doing some testing with the Workers functionality.
In addition it comes with a cost, fairly expensive for high-volume users, although you will get some basic features for free. 

In general, I was not able to find reliable information on weaknesses with Cloudflare, only the cons mentioned above. 

## Comparison

There are many CDN providers out there, but Cloudflare seems to be the one that is most preferred when I look at comparisons. This seems to be due to a highly reliable service that is easy to setup, with a broad spectrum of features and functionality available. 

### Cloudflare VS Amazon CloudFront

Cloudflare uses reverse proxy servers to serve requests. Websites and apps are configured to use Cloudflare's nameservers. Requests go to these servers which then routes traffic. CloudFront uses actual servers to reduce load time. Customer's set up copies of the data, called distributions, that are have unique URLs. Admins use the URLs to route the requests to the CloudFront CDN. 

Cloudflare has more than 200 data centres across 270 cities in 100+ countries. CloudFront is distributed across 225+ edge locations in 90 cities across 47 countries. 

Cloudflare provides better caching and HTTP headers control, whereas this is a more complex process to configure in CloudFront. 

Cloudflare is designed with DDoS mitigation in mind, while this is not the case with CloudFront. For the latter, AWS have other products that can handle that. 

In terms of performance Cloudflare currently rank 4th on the benchmarking site CDNPerf, while CloudFront is 2nd. 

## Summary

Summarise the content and highlight the relevance of the product to a web developer.

### References

#### Cloudflare

- [Cloudflare Docs - Fundamentals](https://developers.cloudflare.com/fundamentals/)
- [Wikipedia - Cloudflare](https://en.wikipedia.org/wiki/Cloudflare)

#### Reversed Proxy

- [Cloudflare - Reversed Proxy](https://www.cloudflare.com/en-gb/learning/cdn/glossary/reverse-proxy/)
- [Wikipedia - Reversed Proxy](https://en.wikipedia.org/wiki/Reverse_proxy)

#### DDoS Attacks and Mitigation

- [Cloudflare - DDoS Mitigation](https://www.cloudflare.com/learning/ddos/ddos-mitigation/)
- [Cloudflare - DDos Attack](https://www.cloudflare.com/en-gb/learning/ddos/what-is-a-ddos-attack/)
- [Wikipedia - DDoS Attack](https://en.wikipedia.org/wiki/Denial-of-service_attack)

#### Comparison

- [Techtarget - Cloudflare vs CloudFront](https://www.techtarget.com/searchcloudcomputing/answer/Cloudflare-vs-Amazon-CloudFront-Which-CDN-is-right-for-you)
- [Petri - Amazon CloudFront Vs. Cloudflare: How to Choose the Right CDN](https://petri.com/aws-cloudfront-vs-cloudflare/)
- [CDNPerf](https://www.cdnperf.com/)