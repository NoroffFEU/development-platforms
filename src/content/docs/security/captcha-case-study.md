---
title: CAPTCHA
keywords: security, bot-prevention
tags: CAPTCHA, security, bot-prevention
---

## Introduction

CAPTCHA is an abbreviation for “Completely Automated Public Turing Test to Tell Computers and Humans Apart”[1]. CAPTCHA is used to filter out bots from real users when accessing websites on the internet [1]. This case study will look into a brief history of CAPTCHA, applications of CAPTCHA, its strengths and weaknesses, and similar existing technologies and how it compares.

## Brief History

Luis von Ahn, David Abraham, Manuel Blum, Michael Crawford, Ben Maurer, Colin McMillen, and Edison Tan at Carnegie Mellon University created CAPTCHA in the year 2000 [2]. CAPTCHA was created because people were signing up to websites with bots to create millions of accounts and CAPTCHA was supposed to prevent that. The initial success of CAPTCHA was excellent with 97% success rate of identifying bots and human [2] Over time it has become an arms race between botters and bot prevention teams [2]. Captcha has also been further developed into reCAPTCHA by many of the same authors and google [2]. This case study looks into CAPTCHA only.

## About and Application

CAPTCHA is a check which usually features an image together with a text input prompt, where the user is asked to type in or answer what is shown on the image. Computers have a tough time identifying what is on an image to answer the prompt, while a human can easily answer [4].

CAPTCHAs also often distort the letters shown in the images, making them even harder to interpret from a computer, this can lead to frustrating moments for an end user when typing in the wrong answer, prompting another CAPTCHA until the user is able to answer correctly [4].

CAPTCHAs are also long by nature, so that bots cannot infinitely try a combo until they get a lucky guess, this can create a frustrating experience for a user if they have a challenging time distinguishing a certain letter [4].

CAPTCHAs can also come in an audio format for those with visual impairments, this is to accommodate more users to enter and experience a website [4].

The application of CAPTCHAs today is to have real users on a website and not have bots spam creating accounts. It is also to prevent a single user from creating many reviews to alter the perception of a product or sway a poll [3] [4].

With the advancement of machine learning with image or voice recognition, some advanced bots can bypass CAPTCHAs, which will lead to a challenge in the future [4].

There are three types of CAPTCHA, image based, text based, and audio based [3].

## Strengths

- Removes bots from spam voting in polls.

By having a CAPTCHA before entering or submitting of vote for a poll make sure that only human votes are registered. This maintains the integrity of the poll [3].

- Bots cannot make an infinite number of accounts on a website

By preventing spam creation of accounts by bots we keep the integrity of the userbase as well as reducing the load on the servers [3].

- Prevents bots from buying every ticket to an event

Reselling tickets to popular events is a problem creating more expensive tickets than they need to be for a customer. When sales for a ticket open every human have an equal chance of getting a ticket versus when they compete against bots [3].

- Prevents fakes comments on media

Comments sway people's opinions and having bots alter their mind with fake comments ruins businesses [3].

## Weaknesses

- Frustrating for a human user to complete the CAPTCHA

Sometimes when faced with a CAPTCHA the user won't be bothered or able to complete it and leaves the website [3].

- User has disabilities

The user might be colorblind, deaf or have impaired vision preventing them from completing the CAPTCHA [3].

- Not all browsers support every type of CAPTCHA

Depending on the browser the user is using, they might not be able to access every part of the website with a CAPTCHA check [3].

## Comparison

There are many other ways which can also be used to mitigate bots impact and bots from registering, voting, or commenting on your service [5]. This section will look into some methods used for bot prevention.

### Blocking hosting providers and proxy services

There are known botnets and users providing a botnet service to attack a website. Blocking all the known services and providers of these networks can mitigate the amount of bots coming to your website [5].

I believe this is a good firewall method to prevent bots, but it does not help with what CAPTCHA really does, which is to create the challenge for bots that make it past such a firewall. It is great as a companion piece to a CAPTCHA.

### Reducing the amount of backdoors

Some bots try to get around CAPTCHAs by finding bad access points, which makes CAPTCHAs useless [5].

The same analysis for blocking hosting providers is applicable here. It is great to have good programming practices in place to prevent this from happening.

### Having a traffic spike controller

Having a traffic spike controller can see when a weird amount of attempts or packages are sent to the server occur. It could then identify the login or the amounts of packages sent as a bot and not a human, as a human physically cannot input that many inputs so fast [5].

I think this is something which can easily be by passed by adding a delay to each input from the bot, and will not work as well as a CAPTCHA.

### Having a login attempt checker

By seeing which IP is trying to login over and over and failing, can be a sign of a bot brute forcing to login to an account unauthorized. By having a system in place to IP-ban such attempts will prevent bots [5].

This is great for certain scenarios, but you can always have a VPN or something similar to bypass this issue.

## How to implement CAPTCHA

In order to implement CAPTCHA you need to follow the following steps:

1. You need a google account to use reCAPTCHA [6]
2. Go to the link https://www.google.com/recaptcha/admin/create#list [6]
3. Fill in your CAPTCHA type [6]
4. Register your website [6]
5. Save the site key and secret key [6]
6. Add your reCAPTCHA to your javascript and your HTML [6]

You need to use the google reCAPTCHA api.js with your specific site key. Under you can see the code snippet for adding your site reCAPTCHA.

```html
// Replace YOUR_SITE_KEY with site key provided by Google // Snippet is taken
from [6]
<script src="https://www.google.com/recaptcha/api.js?render=YOUR_SITE_KEY"></script>
```

## Summary

CAPTCHA is a system which is used to prevent bots from registering fake accounts, commenting fake comments on media, or skewing the votes on a poll. CAPTCHA come in three different methods of:

1. Text based
2. Image based
3. Audio based

These are all used for different people to make it easier for humans to enter a website, as well as making it hard for computers to decode. Computers have a hard time reading distorted text, understanding images, and interpreting audio compared to a human. This is why CAPTCHAs are great at weeding out simple bots. However, with the introduction of machine learning it will be harder to prevent bots from disrupting the discussions online.

I believe CAPTCHAs are great as a method to filter out simple bots, especially combined with similar bot-prevention methods discussed in the comparison chapter. With machine learning, the CAPTCHA can also become more complex by using the machine learning technology, the issue will then be if humans are able to solve them sufficiently without alienating a huge amount of the population.

### Credits

- Ida Nguyen (idanguyen)

### References

[1] “Understanding CAPTCHA: History, Usage, and Effectiveness.” DEV Community, 22 Dec. 2023, www.dev.to/adityapratapbh1/understanding-captcha-history-usage-and-effectiveness-4jd7.

[2] Yüksel, Emre. “A Brief History of CAPTCHA.” Medium, 29 Mar. 2022, www.medium.com/@emreeyukseel/a-brief-history-of-captcha-5918bb8fe311.

[3] “What Does CAPTCHA Mean? | CAPTCHA Types & Examples | Imperva.” Learning Center, www.imperva.com/learn/application-security/what-is-captcha/.

[4] “How CAPTCHAs Work | What Does CAPTCHA Mean? | Cloudflare.” Cloudflare, www.cloudflare.com/learning/bots/how-captchas-work/.

[5] “How Can Bots Be Prevented?” Approov.io, www.approov.io/blog/how-can-bots-be-prevented.

[6] “How to Implement CAPTCHAs or ReCAPTCHAs?” DEV Community, 6 Jan. 2023, dev.to/codeofrelevancy/how-to-implement-captchas-or-recaptchas-2i17.
