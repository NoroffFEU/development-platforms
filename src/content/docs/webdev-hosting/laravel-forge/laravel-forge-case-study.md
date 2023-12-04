---
title: Laravel Forge Case Study
author: Lasse Rønningen 
tags: case study, platform laravel forge
---

## Introduction

Laravel Forge is a cloud-based platform designed by Laravel framework creator Taylor Otwell, and it streamlines the management and the deployment of Laravel applications (PHP).

While it primarily focus on Laravel, it also extends its capabilities to deploying other PHP applications such as WordPress or code from Git/GitHub/Bitbucket etc.
It empowers developers to focus on coding and not on complex server stuff.


## Brief History

Timeline of major milestones in the history of Laravel Forge:
* 2014: Laravel Forge is launched as a side project by Taylor Otwell
* 2015: adds support for deploying to multiple servers at once.
* 2016: adds support for managing databases.
* 2017: adds support for cron job management.
* 2018: adds support for backups and SSL certificate management.
* 2019: adds support for the Laravel Sail development environment.
* 2020: adds support for the Laravel Jetstream authentication and authorization scaffolding. 
* 2021: adds support for continuous integration and continuous delivery (CI/CD). 
* 2022: adds support for Laravel Nova, a Laravel admin panel framework.



## Main Features
The main features of Laravel forge are to make it easy to provision and set up servers, deploy code, and manage databases regardless of server hardware.

It can be used with shared hosting VPS or dedicated hosting or a combination, it can be used as an application, database, or webserver amongst many more types.


* **Server provisioning**: Can provision servers from a variety of cloud providers, including but not limited to Digital Ocean, Amazon Web Services (AWS), and Linode or custom servers.
* **Can provision a multitude of server types**: Including but not limited to
  * Application server: Everything you need to deploy a PHP application such as Laravel / WordPress / phpMyAdmin
  * Web Server: Server built to handle web traffic
  * Worker Server: Dedicated queue workers
  * Database Servers: MySQL /MariaDB / Postgres
  * Cache Servers: Redis or Memcached
* **Cutting Edge**: Installs the newest Nginx, MySQL, Postgres, Redis and PHP and keeps it up to date.
* **Deployment**: Easy deployment via Git or FTP, can even use GitHub Actions to deploy
* **User management**:  Allows for the creation and management of user accounts for your servers.
* **File management**:  Allows you to browse and manage the files on your servers, without tools such as putty or other remote SSH tools.
* **Cron jobs/schedulers**: Lets you create and manage cron jobs with built-in cron job editor
* **Backups**: Automatically create and store backups of your databases and servers.
* **SSL certificate management**: Makes it easy to create and manage SSL certificates for your server, forge integrate with LetsEncrypt allowing you to obtain a free SSL certificate.
* **User Isolation**: Can run each site on your server as a separate user thus preventing compromised sites from accessing other sites. 

## Getting Started

To get started you will need an account with laravel forge and a plan. You will then continue to provision your server. 
To provision your server, you will need to choose your provider and a server configuration (OS).
Then Laravel Forge will automatically provision the server and install the required tools or/and software such as mysql/NGINX/apache.
You can even provision a new WordPress or a phpMyAdmin.
Then you can deploy your application.

## Conclusion

It fits for businesses of all sizes from small startups to large enterprises. 
Or for the developer who just want to focus on development and not worrying about managing server.

## References

- [Laravel Forge](https://forge.laravel.com/)


## Additional Resources

- [Deploy using Laravel Forge](https://lorisleiva.com/deploy-your-laravel-app-from-scratch/deploy-using-laravel-forge)
