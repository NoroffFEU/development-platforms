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
8. [Glossary](#glossary)
9. [References](#references)

## Introduction

CLoudflare is a global content delivery network provider that delivers a broad range of services to businesses, aiming to make them more secure, enhancing performance of their applications and eliminating the cost and complexity of managing network hardware. It primarily acts as a reverse proxy between a website's visitor and the customer's hosting provider, meaning it sits in front of back-end applications and forwards client (browser) requests to those applications. When the request pass trough Cloudflare they can apply various rules and optimizations to improve security, performance, and reliability.

## Brief History

- Cloudflare was founded in July 2009 by Matthew Prince, Lee Holloway, and Michelle Zatlyn.
- They launched their Content Delivery Network (CDN) service in 2010.
- Cloudflare received media attention in 2011 for providing the website of LulzSec, a hacking group, with DDoS mitigation. 
- In 2014, they launched "Project Galileo", where they provided activists, journalists, and human rights groups with free DDoS mitigation. 
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

Serverless computing is a service in which a cloud provider takes care on the servers on behalf of their customers. Serverless means that the customer writing the code does not have to worry about configuring or maintaining infrastructure. The Cloudflare Workers runtime is uses the V8 engine - the same JavaScript (JS) engine used in Chromium browsers and the Node.js runtime enviroment. 

There are some differences between JS written for a browser or for Node.js. Rather than running in a browser or a server, Worker functions runs on Cloudflare's global cloud network, where each of the machines on the network hosts an instance of the Workers runtime, each of which is capable of running thousands of user-defined apps. 

## Strengths

Discuss the product's strengths.

## Weaknesses

Discuss the product's weaknesses.

## Comparison

Compare the product to other products in the same category, if applicable.

## Summary

Summarise the content and highlight the relevance of the product to a web developer.

### References

#### Cloudflare

- [Cloudflare Docs - Fundamentals](https://developers.cloudflare.com/fundamentals/)
- [Wikipedia - Cloudflare](https://en.wikipedia.org/wiki/Cloudflare)

#### Reversed Proxy

- [Cloudflare - Reversed Proxy](https://www.cloudflare.com/en-gb/learning/cdn/glossary/reverse-proxy/)
- [Wikipedia - Reversen Proxy](https://en.wikipedia.org/wiki/Reverse_proxy)

#### DDoS Attacks and Mitigation

- [Cloudflare - DDoS Mitigation](https://www.cloudflare.com/learning/ddos/ddos-mitigation/)
- [Cloudflare - DDos Attack](https://www.cloudflare.com/en-gb/learning/ddos/what-is-a-ddos-attack/)
- [Wikipedia - DDoS Attack](https://en.wikipedia.org/wiki/Denial-of-service_attack)



