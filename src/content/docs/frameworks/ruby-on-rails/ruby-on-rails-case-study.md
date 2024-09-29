---
title: Ruby on Rails Case Study
author: Bjørnar Jakobsen <Bjedne>
tags: ruby on rails, case study, web development, framework
---
![download](https://github.com/user-attachments/assets/edac669a-c572-44d5-9174-f3753ad753bd)
## Introduction

Ruby on Rails, often referred to simply as Rails, is a powerful and popular web application framwork written in Ruby. Since its release, it has revolutionized web development by simplifying the process of building dynamic web applications. This case study explores the history, key features, market comparison, and how to get started with Ruby on Rails.

## Brief History

- **2003**: Ruby on Rails is created by David Heinemeier Hansson while working on Basecamp.
- **2004**: Ruby on Rails is released as open-source software.
- **2005**: Rails 1.0 is released, emphasizing the "Convention over Configuration(CoC)" philosophy.
- **2008**: Github. a significant advocate for Rails, launches using the framework, bolstering its popularity.
- **2009**: Rails version 2.3 was released with major new developments in templates, engines, Rack and nested model forms.
- **2011**: Rails 3.1 was released, featuring Reversible Database Migrations, Asset Pipeline, Streaming, jQuery as default JavaScript library and newly introduced CoffeeScript and Sass into the stack.
- **2013**: Rails 4.0 introduces improvements such as strong parameters, turbolinks, and Russian Doll Caching.
- **2015**: Rails 5.0 is released, featuring ActionCable for WebSockets, an API mode, and improvements in performance.
- **2019**: Rails 6.0 was released, making Webpack default, adding mailbox routing, a default online rich-text editor, parallel testing, multiple database support, mailer routing and a new autoloader.
- **2021**: Rails 7.0 was released, replacing Node.js and Webpack with import maps for JavaScript management by default, replacing Turbolinks with a combination of Turbo and Stimulus, adding at-work encryption into Active Record and more.

Current version is 7.2 which was released in 2024.

## Main Features

Ruby on Rails is designed to simplify and accelerate web development by offering a range of powerful features:

- **Convention over Configuration (CoC):** Rails minimizes the need for configuration files, using conventions to streamline development.
- **Don't Repeat Yourself (DRY):** This principle envourages reusing code to avoid redundancy, making maintenance easier and the code more compact.
- **Active Record:** An Object-Relational Mapping (ORM) system that simplifies database interactions by allowing developers to manipulate database records using Ruby objects.
- **Generators:** Built-in generators streamline repetitive coding tasks, accelerating development.
- **Built-in Testing:** Rails includes an integrated testing framework, allowing developers to write and run tests as part of the development process.

## Market Comparison

Depending on your style of development, different tools will serve different measures. For this comparison we'll look at Laravel to better understand the pros and cons of Rails. While both tools are development frameworks, Rails is using Ruby while Laravel is using PHP as their programming language.

### Stability
Both languages has been around for many years, Rails more than 20 and Laravel 13, which further solidifies their staying power and one would assume that both frameworks will continue to recieve support for a long time. Rails still got the history of breakthroughs and large corporations building their sites using it which may give it an additional safety in it's stability.

### Learning Curve
The Ruby programming language, while trying to aim to be more beginner-friendly, is hampered by its heavy use of conventions and metaprogramming. The language is also less popular than others and can therefore be more difficult to learn when comparing available resources and documentation. On the other hand, PHP is more popular as of recent due to its straightforward syntax and extensive documentation make it easier for developers to pick up and learn.

### Community Support
Though Ruby may be more difficult to learn, it still has gathered a large and active community with loads of resources and packages available. It's pre-built libraries (gems) enables a efficient development.
Due to its popularity Laravel has also managed to create a strong community that thrives, making both of these options well supported.

Both Ruby on Rails and Laravel are viewed as strong contenders for frameworks. While Laravel is popular for its well-organized documentation and support for third-party tools, Rails gets credit for being a faster framwork with it's efficency being due to its "convention over configuration" property.

## Getting Started

Ruby on Rails has a handy [guide](https://guides.rubyonrails.org/getting_started.html) to follow. Here are the important steps:

### Installing Rails
Before you install Rails, you should check to make sure that your system has the proper prerequisites installed. These include:
- Ruby
- SQLite3

Make sure you have the latest version for it to be compatible with Rails.
```
$ ruby --version 
```
```
$ sqlite3 --version
```
If you do not have them already installed: Download & install [Ruby](https://rubyinstaller.org/) and [SQLite3](https://www.sqlite.org/download.html).
If both are installed:
```
$ gem install rails
```
Verify that you have everything installed correctly:
```
$rails ---version
```
It should return the latest version. If so, you're ready to start creating!

## Conclusion

Ruby on Rails remains a powerful and influential web development framework, offering a range of tools and conventions that simplify the development provess. Its main advantages include rapid development, an extensive community and a rich ecosystem of gems (libraries). However, its opinionated nature and overhead of learning Ruby can be seen as steep drawbacks for many. Despite these challenges, Rails continues to be a go-to framework for startups and large enterprises alike and seems to be a framework that will continue to recieve support and updates to continue staying relevant for a long time.

## References
- [Ruby on Rails Official Website](https://rubyonrails.org/)
- [Ruby on Rails Wikipedia article](https://en.wikipedia.org/wiki/Ruby_on_Rails)
- [Ruby on Rails Github](https://github.com/rails/rails)
- [Amela.tech's list of Most Popular Web Dev Platforms in 2024](https://amela.tech/10-most-popular-web-development-platforms-in-2024/)
- [Laravel Official Website](https://laravel.com/)

## Resources
- [Ruby Documentation](https://www.ruby-lang.org/en/documentation/)
- [Rails Training Courses](https://gorails.com/)
- [Getting started with Rails](https://guides.rubyonrails.org/getting_started.html)
- [Free programming books](https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-langs.md#ruby)
