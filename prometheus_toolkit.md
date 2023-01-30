---
title: Prometheus Monitoring and Alerting
keywords: development platforms, example project, category name
tags: Development Platforms, Example Project, Category Name
sidebar: development-platforms
permalink: development-platforms/example-product.html
folder: development-platforms
---

## Introduction

Prometheus is an Open-Source systems monitoring and alerting toolkit that collects and stores it's numeric measurements as a time series data, information is stored with the timestamp at which it was recorded, alongside optional key-value paris called labels. 

By the use of a multi-dimensional data model, data can be sliced and diced at will, along dimensions like instance, service, endpoint, and method.
It is based on a principal of Operational simplicity, so that you can spin up a monitoring server where and when you want, even as a local server at home on your desktop computer. This without setting up a distributed storage backend or reconfiguring the world. 

## Brief History
Prometheus is an open-source project built at [SoundCloud](https://soundcloud.com/discover). Since it's creation in 2012, there has been alot of updates and improvement on the system. It's now a standalone open-source project and maintained independently of any company. 
Prometheus joined the [Cloud Native Computing Foundation](https://www.cncf.io/) in 2016 as the second hosted project, after [Kubernetes](https://kubernetes.io/).


Provide a brief history of the product, including major milestones or events.

You may use bullet points, numbered lists, paragraphs or a timeline.

## Features

* A multi-dimensional [data model](https://prometheus.io/docs/concepts/data_model/)
* PromQL, a [flexible query language](https://prometheus.io/docs/prometheus/latest/querying/basics/)
* no reliance on distributed storage
* [Pushing time series](https://prometheus.io/docs/instrumenting/pushing/) available via intermediary gateway
* Targets are discovered via service discovery or static configuration
* Multiple modes of graphing and dashboarding support

## Strengths

With a richer data model you will also get a more detailed collection of metric. With Prometheus you get samples at arbitrary intervals as scrapes or rule evaluations occur, the new samples that is created are simply appended, this means that old data may be kept arbitrarily long.

example of how Prometheus stores samples from HTTP requests to API servers with a response code 

```
api_server_http_requests_total{method="POST",handler="/tracks",status="500",instance="<sample1>"} -> 34
api_server_http_requests_total{method="POST",handler="/tracks",status="500",instance="<sample2>"} -> 28
api_server_http_requests_total{method="POST",handler="/tracks",status="500",instance="<sample3>"} -> 31 
```
The way Prometheus stores metrics is more detailed and you will have a better overview of the data that is collected. With the use of PromQL you will also have a great way for when visualization is needed, you can use Grafana dashboard, expression browser. Prometheus also comes with console templates to help you on the way to getting started with monitoring a project. Below is a list of some of the strength features that Prometheus has.

Some of the products strengths based on collection of quantifiable data would be the
* Storing of data metric
* Support of code queries
* Providing data source to any [Grafana](https://grafana.com/) dashboard
* Ease of deployment
* The use of PromQL that is really good for visualisation purposes


## Weaknesses

When it comes to using Prometheus for in depth event logging you are better with using InfluxDB. There is several other systems that you would have a better use of when it comes to more specified tasks and processes.
ie. 
* Sensus is better for collecting and processing hybrid observability data(this includes metrics and/or events)
* Graphite is better when you need/want a clustered solution that can hold historical data long term.


Prometheus could be a little more userfriendly with the UI then it is. But once you get the hang of it, it's pretty easy. Learning PromQL can be tedious to do as well. This is Prometheus own query language that can be complex. 



## Comparison

Compared to [InfluxDB](https://www.influxdata.com/), Prometheus is a better choice if you are primarily doing metrics, it also has a more powerfull query language, alerting and notification functionality then InfluxDB has. Both of the systems has their strengths and weaknesses, where one is better then the other. 

With Prometheus you get servers that are run independently of each other and only rely on their local storage for their core functionality: scraping, rule processing and alerting.

The comercial InfluxDB offering is, by design, a distributed storage cluster with storage and queries being handled by many nodes at once. With that it means that the commercial version of InfluxDB will scale horizontally easier then Prometheus, but at the same time you need to manage higher complexity of a distributed storage systems strait of from the start. Prometheus is easier to setup and run. 

There is an open source version of InfluxDB that is similar to Prometheus, but not completly the same when it comes to the architecture of the system.

Both systems has a data model that has key-value pairs as labels, that is called tags. They both use support float64 data types but Prometheus offers this with limited support for strings and millisecond resolution timestamps, where InfluxDB offers has full support for it, along side of int64, and bool as well.

If you primarily doing event logging then InfluxDB is more suitable for this type of monitoring.


## Summary

Summarise the content and highlight the relevance of the product to a web developer.

### Credits

- Robin Johnsen (ShaindalDev)

#### References
Pros and Cons review https://www.trustradius.com/products/prometheus/reviews?qs=pros-and-cons#overview
- List of video or links used during research
