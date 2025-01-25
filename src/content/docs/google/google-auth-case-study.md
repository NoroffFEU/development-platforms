---
title: Google Authenticator Case Study
author: Ina Elise Flom <Inaelise>
tags: google, authenticator, mfa, security, case study, app
---

## Introduction

This case study will dive deeper into Google Authenticator, what it is, its history, and how it works. I will also go through the pros and cons, and compare it to other similar products. First of all, what do we mean by "Authentication" in Development Platforms?

Authentication is the process of verifying a user's identity. By asking the user for either an email or a username and password. The server can check the provided details against a database or an external service.[^1]

There are several types of authentications like local, third-party and passwordless authentication but also "MFA". MFA stands for multi-factor authentication. It is an authentication process that is built upon using multiple means of identification to ensure a user's identity.[^1] A username and password combination alone can easily be stolen. MFA can help keep your data safe from hackers. Google Authenticator is a MFA, but how does it work?

### What is Google Authenticator?

Google Authenticator is a free mobile app that utilize the most common MFA approach, which is two-factor authentication (2FA). The 2FA method requires two forms of identification to verify the identify of a user. The two forms of identification can be either of these:

1. A PIN or password.[^1]
2. A mobile device or other device.[^1]
3. Biometric data - voice recognition, fingerprint or retina scan.[^1]
4. Security questions.[^1]

The Google Authenticator app generates a 6-digit code which is a time-based one-time password (TOTP). To confirm a user's identity and gain access to their accounts, resources, or data, the user must enter the code in addition to their login details, such as their username and password.[^2] In other words, the two-step verification provides an extra layer of security to prevent unauthorized login attempts in case your password gets compromised.

## Brief History

- **2010**: The app was initially released 20th of september.[^3]

## Main Features

| Feature                                               | Description                                                                                                                                                    |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Rotating codes                                        | Codes rotate every 30 seconds based on the time on your device.[^2]                                                                                            |
| Network access not necessary                          | The generation of codes don't require internet connection because they are generated locally on your device.[^2]                                               |
| Syncing of codes                                      | Authenticator codes can be synced to your Google account and across devices. This means that the codes are always accessible, even if you lose your phone.[^4] |
| QR code setup                                         | You can quickly set up your Authenticator accounts automatically with QR code.[^4]                                                                             |
| Supports multiple accounts                            | The app can manage several accounts which means you don't have to move between apps every time you need to log in.[^4]                                         |
| Supports counter-based and time-based code generation | Choose the type of code generation that you prefer and suits your needs.[^4]                                                                                   |
| Transfer accounts                                     | You can move Google Authenticator accounts between devices with a QR code.[^4]                                                                                 |

## Market Comparison

Let's look at the advantages and disadvantages of Google Authenticator:

**Advantages:**

- Easy to use
- Offline functionality: No need for internet connection to generate verification codes.
- Good compatibility: Can manage codes for several accounts.
- Account creation isn't required.[^5]

**Disadvantages:**

- Collects a lot of data.
- No verification to access the app.
- Not open-source.

**Google Authenticator vs. 2FAS:**

2FAS is also an authenticator app, let's compare them.

- Both are easy to use and have a user-friendly interface.
- They don't require account creation.
- They both work offline.

2FAS is open-source while Google Authenticator is proprietary. As open-source, the code is transparent and opens up for reviews and verification from the community. With being proprietary, the code is only accessible to the owner or company. Therefore, the code being open-source can increase the trust in the software.

Google Authenticator collects more data than several other authenticator apps, in comparison 2FAS has more limited data collection.[^6]

You don't need any verification to access Google's app which is a potential security risk if your phone gets stolen. With 2FAS you can make a PIN or use biometric scans to lock and unlock the app.[^6]

## Getting Started

### Setting up and getting started with Google Authenticator:

1. Download the Google Authenticator app from Google Play Store or Apple App Store on your device.

2. Login to your chosen website or service, navigate to security settings and enable 2FA or MFA on your account. You will be provided with a QR code or a setup key.

3. Open Google Authenticator app on your device and tap the plus sign to add your chosen website or service. Either scan the QR code or enter the setup key to add the account to the app. You will get a 6-digit code that changes every 30 seconds.

4. Return to your website or service and enter the 6-digit code to verify and complete the setup.

## Conclusion

Google Authenticator has some good features like multiple account support, offline functionality and authenticator code syncing but it doesn't really stand out compared to 2FAS and other similar apps.

Authenticator apps shouldn't require a lot of data from you because they are normally just token generators. So if you care about your personal data and want to be careful with sharing them, Google's app might not be the best choice for you.

Although there might be better authenticator apps than what Google offers, it still provides additional security for your accounts. Also, because Google is widely known it might be easier for a user to choose their authenticator. All in all, the app is free, easy to setup, and intuitive. Its not a bad alternative for extra security.

## References

[^1]: [Noroff - Module 3: Security](https://mollify.noroff.dev/content/feu2/development-platforms/module-3/security?nav=undefined)
[^2]: [Daito article - The beginner's guide to Google Authenticator](https://www.daito.io/resources/google-authenticator-guide)
[^3]: [Wikipedia 2024 - Google Authenticator](https://en.wikipedia.org/wiki/Google_Authenticator)
[^4]: [Google play store](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en&pli=1)
[^5]: [PCMAG - Kim Key, December 2024 - The Best Authenticator Apps for 2025](https://uk.pcmag.com/security/153947/the-best-authenticator-apps-for-2024)
[^6]: [PCMAG - Kim Key, September 2024 - 2FAS review ](https://uk.pcmag.com/security/154416/2fas)
