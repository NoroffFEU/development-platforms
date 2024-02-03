---
title: Flutter
keywords: development platforms, Flutter, Framework, open source, applications
tags: Development Platforms, Flutter, Framework, open source, applications
---

## Introduction

## Brief History

## About & Features

Flutter is an open-source UI software development toolkit created by Google, and is used by developers to build an application's UI for multiple platforms using a single codebase. According to Amazon Web Services, Flutter simplifies the process of creating consistent, appealing UIs for an application across the platforms it supports. Which means that even though Flutter embraces different platforms, it still originates from a single codebase. One can consider Flutter as both native app development and cross-platform development. Flutter gives you the opportunity to make applications for iOS, Android, Web, Windows, macOS, Linux and IoT-devices using a single codebase.

### Dart

Flutter uses the open source language Dart, which is also developed by Google. Dart is designed to be efficient, east to learn and highly suitable for making UI's. Dart supports both JIT (just-In-Time) and AOT (Ahead-of-Time) compilation, allowing the dev team to use hot reload for rapid development and produce native code for production. Dart seems extensive at first but after learning the architecture of the code it was quite simple and easy to learn, it also has extensions and IDE support in VSC.

### Hot Reload

This is one of Flutters most beloved features and it allows developers to instantly see th effects of their changes in the app's UI without needing to restart the app or loose its current sate. When you change something in your code their changes are reflected immediately. The hot reload feature also lets you preserve the app's state. Imagine you are several levels deep in the navigation and you make an UI change, and then you don't have to navigate back where you were after reloading. This immediate feedback loop accelerates the developing process by allowing quick iterations.

### Widgets

"Everything is a widget" - A complete guide to Flutter architecture.

A widget is a fundamental building block in flutter and includes visual elements like buttons, texts and images but also structure, padding, and even the entire application itself. The widgets are organized in a hierarchy known as the "widget tree" and is a never ending chain of parent and child elements that eventually create the layout of your app. There are two different types of widgets, stateless and stateful widgets.

- Stateless Widgets are unchanging parts of the app. They are used for things that does not move or react, like displaying a simple message og an image.

- Stateful Widgets are the parts of the app that can change and react to what the user does. Like a button that changes color when you press it.

Flutter comes with an extensive widget catalog, like styling, layouts and themes.

### Flutter Doctor

While its not considered a feature it is a strong command-line tool used to diagnose the development environment. You can use Flutter Doctor to check the status of your installation, identify missing dependencies and provide guidance to resolve issues. When you run the flutter doctor command it checks your system for required dependencies such as the Flutter SDK, Dart SDK, Android studio and more. If there are any issues it also guides you on how to fix them and even provide links to installation guides or advice you to run specific commands in the terminal. It also verifies that you are connected to your devices or emulators which are crucial for testing. Regularly running "flutter doctor" is a good practice to ensure that your development environment is healthy and up to date.

## Strengths

"Flutters rise to fame is not without reason" - When not to use Flutter

Flutter has numerous strengths, and is thriving from its open-source nature while also receiving support from major companies, including Google. Google not only backs Flutter but also utilizes it for some of their own projects, such as Google Ads. This dual support ensures that Flutter receives regular updates and maintenance, making it very reliable. Flutter provides developers with a comprehensive suite of tools and a robust framework, facilitating rapid development. Flutter's main advantage is "Faster Coding," a feature built up by various smaller advantages that collectively enhance the development process.

Flutter allows developers to write a single codebase to create apps for Android, iOS, desktops and IoT-devices which significantly reduces development time and effort. The "Hot Reload" feature can greatly increase the speed and efficiency when developing. Applications made with Flutter are aiming for 60 fps so that moving graphics and switching screens feels fluid and natural, like flipping through pages in a book. This is because Flutter code gets compiled to native code. It is designed to be highly customizable and even though it comes with a rich widget catalog, every developer can extend Flutters capabilities by creating its own custom widgets, tailoring the interface to meet your specific design. Flutter has built-in support for accessibility features like screen readers, and it offers easy ways to internationalize apps, including right-to-left languages.

## Weaknesses

## Summary

## Sources

- What is Flutter (2024) Obtained from https://aws.amazon.com/what-is/flutter/#:~:text=Flutter%20is%20an%20open%20source,platforms%20with%20a%20single%20codebase.
- A complete guide to Flutter architecture (2022) obtained from https://blog.logrocket.com/complete-guide-flutter-architecture
- When not to use Flutter (2024) obtained from https://blog.flutter.wtf/when-not-to-use-flutter/#:~:text=App%20size%20bigger%20than%20Native,crucial%2C%20inflate%20the%20app's%20size.

## Tools

## Credits & acknowledgments
