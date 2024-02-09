---

title: Flutter
keywords: development platforms, Flutter, Framework, open source, applications
tags: Development Platforms, Flutter, Framework, open source, applications

---

![c823e53b3a1a7b0d36a9](https://github.com/Miksel90/development-platforms/assets/113434165/a4622638-22ee-4e8e-a7c8-ae86b5a8f8c0)


## Introduction

Originally from Google's technology labs, Flutter emerges as a dynamic and open-source framework. Aimed at developers focused on front-end development, it offers a comprehensive toolkit designed for designing an application's user interface, utilizing a single codebase. Since its launch in 2018, Flutter has significantly evolved beyond its original mobile orientation, extending its capabilities to support application development across six different platforms. This includes the landscapes of iOS and Android, as well as applications for the web, Windows, macOS, and Linux. As such, Flutter represents a versatile tool that inspires a wide-ranging coding.

## Brief History

- 2015:
  Flutter project was started by Google.
  Initially known as the "Sky" project, it aimed to provide a framework for building high-performance, high-fidelity applications for mobile platforms.

- 2016:
  Google announced the first alpha version of Flutter at the Dart Developer Summit.
  The focus was primarily on mobile platforms, particularly iOS and Android.

- 2017:
  Flutter Alpha releases continued, with improvements and updates.
  Google started to gain attention from developers and the community began to grow.
  Flutter's hot reload feature, allowing developers to see changes instantly gained popularity.

- 2018:
  Google announced the first stable release of Flutter at the Flutter Live event in December.
  Flutter 1.0 was officially released, marking it as ready for production use.
  Flutter gained traction among developers and companies for its cross-platform capabilities and fast development cycle.

- 2019:
  Flutter continued to evolve rapidly, with regular updates and improvements.
  Google I/O 2019 saw the announcement of Flutter for web, enabling developers to build web applications using Flutter.
  Flutter Interact 2019 introduced various new features and improvements, including support for macOS and embedding into existing apps.

- 2020:
  Flutter continued to gain popularity, with a growing community and adoption by companies worldwide.
  Google announced Flutter 1.20 with performance enhancements, new widgets, and tooling improvements.
  Flutter's desktop support became more robust, enabling developers to build applications for Windows, Linux, and macOS.

- 2021:
  Flutter 2.0 was announced at Google I/O 2021, with major updates including support for web and desktop as stable platforms.
  Google emphasized Flutter's ability to target multiple platforms with a single codebase, making it a compelling choice for cross-platform development.
  Flutter's ecosystem continued to expand, with the introduction of new packages, plugins, and tools to enhance development workflows.

- 2022 (up to January):
  Flutter's growth and adoption continued, with an increasing number of companies and developers using it for their projects.
  Google and the Flutter team focused on improving stability, performance, and developer experience through regular updates and releases.
  The Flutter community remained active, contributing to the ecosystem with libraries, tutorials, and resources for developers.

- Beyond 2022, Flutter is expected to continue evolving, with Google and the community driving its development forward
  to meet the needs of modern application development across various platforms.
  The journey of Flutter is a testament to its adaptability and the collaborative spirit of the developer community. What began as a solution for mobile app challenges has blossomed into a versatile framework, empowering developers to create stunning and consistent user experiences across various platforms. With each iteration, Flutter continues to shape the landscape of cross-platform development, leaving an indelible mark on the history of modern software engineering.

## About & Features

Flutter is an an open-source toolkit for UI development, enabling the creation of multi-platform applications from a singular code framework. Flutter simplifies the process of creating consistent, appealing UIs for an application across the platforms it supports. It can be viewed as both native app development and cross-platform development. Flutter applications can directly communicate with the native code, allowing developers to harness native capabilities of the device or platform, combined with the efficiency and versatility of cross-platform development. Flutter provides the opportunity to build applications for iOS, Android, Web, Windows, macOS, Linux and IoT-devices.

### Dart

Flutter utilizes the open-source language Dart, developed by Google as well. Dart is designed for efficiency, ease of learning, and a high suitability for crafting user interfaces (UIs). It supports both Just-In-Time (JIT) and Ahead-of-Time (AOT) compilation, enabling development teams to leverage hot reload for rapid development cycles and compile native code for production environments. As an object-oriented language, Dart treats everything as an object, including numbers, functions, and even null. Its architecture aims to facilitate the construction of quality UIs through simple, scalable code and is complemented by extensions and Integrated Development Environment (IDE) support in Visual Studio Code (VSC).

### Hot Reload

This is one of Flutters most beloved features and it allows developers to instantly see th effects of their changes in the app's UI without needing to restart the app or loose its current sate. When you change something in your code their changes are reflected immediately. The hot reload feature also lets you preserve the app's state. Imagine you are several levels deep in the navigation and you make an UI change, and then you don't have to navigate back where you were after reloading. This immediate feedback loop accelerates the developing process by allowing quick iterations.

### Widgets

"Everything is a widget" - A complete guide to Flutter architecture.

A widget is a fundamental building block in flutter and includes visual elements like buttons, texts and images but also structure, padding, and even the entire application itself. The widgets are organized in a hierarchy known as the "widget tree" and is a never ending chain of parent and child elements that eventually create the layout of your app. There are two different types of widgets, stateless and stateful widgets.

- Stateless Widgets are unchanging parts of the app. They are used for things that does not move or react, like displaying a simple message og an image.

- Stateful Widgets are the parts of the app that can change and react to what the user does. Like a button that changes color when you press it.

Flutter comes with an extensive widget catalog, like styling, layouts and themes.

_Flutter widget flow example:_

![Flutter Widget Hierarchy](/src/assets/frameworks/flutter/flutter-widgets.png)

### Flutter Doctor

While its not considered a feature it is a strong command-line tool used to diagnose the development environment. You can use Flutter Doctor to check the status of your installation, identify missing dependencies and provide guidance to resolve issues. When you run the flutter doctor command it checks your system for required dependencies such as the Flutter SDK, Dart SDK, Android studio and more. If there are any issues it also guides you on how to fix them and even provide links to installation guides or advice you to run specific commands in the terminal. It also verifies that you are connected to your devices or emulators which are crucial for testing. Regularly running "flutter doctor" is a good practice to ensure that your development environment is healthy and up to date.

_Flutter Doctor example:_

![Flutter Doctor response](/src/assets/frameworks/flutter/flutter_doctor.png)

## Strengths

"Flutters rise to fame is not without reason" - When not to use Flutter

Flutter has numerous strengths, and is thriving from its open-source nature while also receiving support from major companies, including Google. Google not only backs Flutter but also utilizes it for some of their own projects, such as Google Ads. This dual support ensures that Flutter receives regular updates and maintenance, making it very reliable. Flutter provides developers with a comprehensive suite of tools and a robust framework, facilitating rapid development. Flutter's main advantage is "Faster Coding," a feature built up by various smaller advantages that collectively enhance the development process.

Flutter allows developers to write a single codebase to create apps for Android, iOS, desktops and IoT-devices which significantly reduces development time and effort. The "Hot Reload" feature can greatly increase the speed and efficiency when developing. Applications made with Flutter are aiming for 60 fps so that moving graphics and switching screens feels fluid and natural, like flipping through pages in a book. This is because Flutter code gets compiled to native code. It is designed to be highly customizable and even though it comes with a rich widget catalog, every developer can extend Flutters capabilities by creating its own custom widgets, tailoring the interface to meet your specific design. Flutter has built-in support for accessibility features like screen readers, and it offers easy ways to internationalize apps, including right-to-left languages.

## Weaknesses

Like every other tool, Flutter also has weaknesses. Applications built with Flutter tend to be larger than those built with native tools, which can be a concern when aiming to minimize download sizes. This issue is particularly significant in markets with users on limited data plans or devices with constrained storage capabilities.

Additionally, the ecosystem, while rapidly growing, still lacks the breadth of third-party libraries and tools available in more mature frameworks such as Android and iOS. This can lead to increased development time as developers might need to build more solutions from scratch.

Flutter's establishment in larger corporations is also evolving. Given its relatively new presence in the tech landscape, some large enterprises may be hesitant to adopt Flutter due to perceived risks or the lack of widespread precedent in their industry, though this is gradually changing as Flutter's adoption grows.

The Dart programming language, which Flutter uses, can present a steep learning curve for developers not already familiar with it. While Dart is designed to be easy to pick up for those with experience in object-oriented languages, the transition may require significant time and effort for developers or teams accustomed to different programming environments.

Flutter faces specific challenges in web development, particularly concerning loading speeds and search engine optimization (SEO). The framework's approach to rendering web content can lead to inefficiencies that impact the performance of web applications, making it less suitable for content-heavy websites where SEO is crucial. Moreover, the limited support for WebView can restrict developers aiming to achieve nuanced web interactions, affecting the functionality and user experience of apps requiring embedded web content.

Implementing platform-specific features presents another challenge in Flutter. While the framework offers an extensive set of widgets and tools for creating apps that feel native on both Android and iOS, achieving the exact platform-specific behaviour or integrating with certain platform-specific APIs can involve additional complexities and development effort.

Performance is another area where Flutter apps, particularly those with complex UIs or heavy animations, may face challenges, especially on older devices. Developers may need to undertake specific performance optimizations to ensure smooth operation across a wide range of devices.

Despite these challenges, the strength and responsiveness of Flutter's growing community, along with support from Google and other contributors, offer significant resources and support to developers. This vibrant ecosystem helps mitigate some of the challenges associated with adopting Flutter, making it an increasingly popular choice for cross-platform development.

By understanding these weaknesses within the broader context of Flutter's capabilities and the evolving technology landscape, developers and organizations can make more informed decisions about when and how to use Flutter for their projects.

## Summary

This study provides an overview of Flutter, a framework developed by Google for front-end developers. It highlights Flutter's journey from its inception in 2015, through its evolution. The framework is celebrated for its single codebase approach, allowing for the creation of applications across various platforms with consistent user interfaces.

Flutter uses Dart, an open-source language also developed by Google, known for its efficiency and ease of learning. Dart's architecture supports both Just-In-Time and Ahead-of-Time compilation, facilitating faster development cycles and efficient production environments.


Strengths of Flutter include its fast coding capabilities, and its ability to produce apps that feel native to both Android and iOS from a single codebase. Flutter's comprehensive toolkit and the backing by Google have contributed to its popularity among developers.

This study also outlines some weaknesses of Flutter, such as the larger app sizes compared to native tools and the Dart programming language's learning curve. While Flutter's ecosystem is rapidly growing, it still lacks in third-party libraries that are available to more mature platforms. Web development with Flutter faces challenges like loading speeds and SEO effectiveness. Implementing platform-specific features can also be more complex in Flutter compared to native development.

Despite these challenges, the growing community and continuous updates from Google suggest a positive outlook for Flutter's future in cross-platform development. The framework's adaptability and the collaborative spirit of the developer community underscore its potential to meet modern application development needs across various platforms.

## Flutter Examples

Flutter Featured Stories:

- [Flutter.com](https://flutter.dev/showcase)

Flutter can be used more things. Like creating this little game.
At the moment it is for Windows only:

- [Link to game pre-release](https://github.com/Spookyrumble/Flutter-game/releases/tag/Beta)

## Sources

- [What is Flutter (2024)](https://aws.amazon.com/what-is/flutter/#:~:text=Flutter%20is%20an%20open%20source,platforms%20with%20a%20single%20codebase)
- [A complete guide to Flutter architecture (2022)](https://blog.logrocket.com/complete-guide-flutter-architecture)
- [Flutter: Advantages, Disadvantages and Future Scopes (2023)](https://www.geeksforgeeks.org/flutter-advantages-disadvantages-and-future-scopes/)
- [When Not to Use Flutter: Complete List of Cases (2024)](https://blog.flutter.wtf/when-not-to-use-flutter)

## Tools

## Credits

- **Mikael Selstad** - GitHub: [Miksel90](https://github.com/Miksel90)
- **Hans Marius Andreassen** - GitHub: [Spookyrumble](https://github.com/Spookyrumble)
- **Adrian Mikkelsen Johannessen** - GitHub: [AdrianMikk](https://github.com/AdrianMikk)
