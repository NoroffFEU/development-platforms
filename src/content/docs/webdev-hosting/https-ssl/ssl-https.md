---
title: SLL/HTTPS Case Study
author: Erlend Espe
tags:  case study, platform, SSL, HTTPS, HTTP
---

## Introduction
As our lives become increasingly intertwined with the digital realm, the need for a secure and protected online experience has never been more crucial. Keeping our sensitive information safe from attackers is important to keep the world running as normal. This is where HTTPS comes in, the backbone of secure internet communication.

## History
- First version of SSl developed in 1994 by Netscape communications, not released due to security flaws.
- SSL 2.0 released in 1995 as the first public available version. Provided encryption for web communications but had several security flaws.
- SSL 3.0 released in 1996 and adressed the vulnerabilities of its predecessor. It became widely adapted and laid the 
fondation of the HTTPS protocol.
- in 1999, The internet Engineering Tast Force took over the standarization process for SSL, which resulted in the creation of TLS1.0(Transport Layer Security), which is essentially SLL 3.1.
- TLS 1.1 was introduced in 2006, and adressed previous vulnerabilities,
- TLS 1.2 released in 2008 further improving it.
- as TLS was further developed, HTTPS became the standard for secure web communication.
- In the early 2010s, there was a renewed emphasis on improving web security. The major browsers started encouraging the implementation of HTTPS, by displaying security warnings for non secure sites.
- Today, HTTPS is considered the standard for securing communication on the web and websites are encouraged to implement the technonology in order to secure the privacy and integrity of user data.

## HTTP
Hypertext Transfer Protocol is the foundation of the World Wide Web. HTTP is also a set of rules which browsers use to determine how to read and transfer data over the web. When a URL contains "http", the browser knows how to follow this protocol to successfully load the webpage.

## HTTPS
HTTPS is the secure version of its predecessor HTTP. HTTP is the primary protocol used to send data between a web browser
and a website. HTTPS does the same thing, but it encrypts the data in order to improve security.
HTTPS uses an encryption protocol to secure communications. This protocol is called Transport Layer Security(TLS), previously known as SSL. TLS secures communications by using an asymmetric public key infrastructure. This means it uses two different keys to encrypt data sent between two parties.
- The private key: This key is controlled by the owner of a website and is kept private. This key is stored on a web server and is used to decrypt information which is encrypted by the public key.
- The public key: This key is not private, and is available to anyone that wants to interact with the server in a secure way.
When a user accesses a webpage, the webpage transmits its SSL certificate, containing the public key for initiating a secure session. The client and server undergo an SSL/TLS handshake, a sequence of exchanges designed to establish a secure connection.

## Benefits of encryption
HTTPS prevents data sent from a user to a webserver, or opposite, from being openly viewed by anyone snooping on the network. Data sent over regular HTTP is broken into packets of data which can easily be sniffed by using software like wireshark. Using HTTPS is particularly important when using public wifi, because anyone connected to this wifi can view your data in plain text, and makes you particularly vulnerable to on-path attacks etc.
When using HTTPS, data is encrypted and will come across as nosence characters. Example:

![image](https://github.com/ErlendE96/devplat/assets/96021420/945cd91f-1e8b-4edc-830c-94be41d0d155)

Websites not using HTTPS are vulnerable to internet service providers or other intermediaries to inject content into webpages without the approval of the owner of the website.The content injected is commonly advertising, which typically reduces the quality of the adds and the generated revenue is not shared with the website owner.
Bank details, login information and other sensitive information is also vulnerable when not using HTTPS.

## HTTP/HTTPS
technically HTTPS is not a seperate protocol from HTTP, it is using TLS or SSL encryption over the HTTP protocol.

## Weaknesses
HTTPS encrypts the entire HTTP request and response, but the DNS resolution and connection setup can reveal some information, like for example the full domain or subdomain and the originating IP adress.
Attackers are also able to analyze encrypted traffic for side channel information, such as time spent on site and the size of user input.

## Setting up HTTPS
In order to use HTTPS with your domain name, a SSL or TLS sertificate is needed to be installed on the website. Your webhost may offer HTTPS security or a SSL/TLS sertificate may be requested from Certificate Authoroties and installed by yourself. There are multiple types of webservers and each has its own process for installing and updating SSL/TLS certificates.

## Conclusion
HTTPS plays an important role in our everyday life and enables us to browse the internet in a more secure way. The transition from HTTP to HTTPS makes it possible to transmit data securely, safeguarding user privacy and data integrity.

## References

- https://support.google.com/domains/answer/7630973?hl=en
- https://https.cio.gov/faq/
- https://www.cloudflare.com/learning/ssl/what-is-ssl/
- https://www.cloudflare.com/learning/ssl/transport-layer-security-tls/

