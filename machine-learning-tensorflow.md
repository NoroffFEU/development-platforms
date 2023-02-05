---
title: TensorFlow Overview
keywords: Python, JavaScript, TensorFlow, Machine Learning, Data Analytics
tags: TensorFlow, Python, JavaScript, Machine Learning
sidebar: development-platforms
permalink: development-platforms/TensorFlow.html
folder: development-platforms
---
# Machine Learning and TensorFlow

## Introduction

TensorFlow is a software library for machine learning and artificial intelligence released under the Apache 2.0 open-source license in 2015. It was developed by the Google Brain team as their second-generation machine learning system, designed to improve on the shortcomings of DistBelief, googles propriety first generation machine learning platform. TensorFlow is designed to be flexible, general, portable, and scalable, allowing users to build and train complex machine learning models on various hardware configurations. It is designed to streamline the process of developing and executing advanced analytics applications for users such as data scientists, statisticians, and predictive modelers. It was initially released with Python support which remains the most widely used programming language for it, but support for other languages such as C++, Java and JavaScript having been added since, with third party frameworks offering support for other languages. 

It is a mathematical framework for representing and manipulating multi-dimensional arrays, known as tensors, these are like arrays in programming, but with more restrictions in place. The name TensorFlow reflects the data flow through the model, where these tensors are processed through a series of interconnected layers that apply transformations to the data. The processing of tensors through these layers enables the model to learn complex relationships between inputs and outputs, making it a powerful tool for building and training deep neural networks. 


## Brief History

- 2011, Google researchers develop DistBelief, a proprietary machine learning system for training large-scale neural networks.
- 2012, DistBelief is used to train neural networks for the Google Voice Search and Google Photos applications.
- 2014, Google announces TensorFlow, as their second generation machine learning platform, as a way to make the technology behind DistBelief available to the wider machine learning community.
- 2015, TensorFlow was released as open source software under the Apache 2.0 licence.
- 2017, Versions 1.0.0 released the first stable version. TensorFlow Lite also released, providing a lightweight version for deployment on mobile devices.
- 2018, TensorFlow.js released, allowing for it to be run on node.js and browsers, utilising JavaScript libaries for trainning and setting up machine learning models, as well as the being able to convert models from TensorFlow or TFLite, to train and run on the web.
- 2019, TensorFlow 2.0 is released, providing a more user-friendly and intuitive API for building and training machine learning models, in response to the growing popularity of PyTorch.
- 2021, TensorFlow is the 3rd most-starred software repository on GitHub and the most-downloaded machine learning package on PyPI.


## Key Concepts

- Models
- Layers
- Neural networks


##Overview 

### Purpose 

The purpose of TensorFlow is to provide a platform to build, train, and deploy, deep machine learning models. These are mathematical model that can learn from data and make predictions about new data. Unlike in regular programming where a computer program follows a fixed set of instructions it was provide, machine learning models are designed to adapt and improve over time through training. They can be trained by passing small or vast amounts of test data through layers of the model, to progressively reinforce and identify relationships between the input and output. This grows a model that can be applied to new data and accurately predict an outcome, even data it has never seen before. 

### Usage and Application

- Image classification
- Image and Face recognition
- Object detection
- Pose estimation
- Style transfer
- Sentiment analysis
- Speech recognition
- Natural Language Processing
- Text generation
- Reinforcement learning

## TensorFlow Features and Ecosystem

- TensorFlow Core is a more powerful and feature-rich library for machine learning, but it requires a more powerful machine with a GPU to train models. It provides a lower-level API that gives more control over the implementation details. 
- TensorFlow.js is a JavaScript library for training and deploying machine learning models in the browser and on Node.js. A high-level API provides a simple and easy-to-use interface for building and training machine learning models, with a lot of the underlying implementation details abstracted away.  It's used for creating web-based or browser-based machine learning applications. It's also used for running existing TensorFlow models in the browser or on Node.js, which can be useful for bringing pre-trained models to the web or to edge devices. TensorFlow.js is designed to make machine learning accessible to a wider audience, including web and JavaScript developers, by allowing them to build and deploy machine learning models without needing to learn Python or use a powerful machine with a GPU.
- TFLite
- TFX

Outline the product's key features.

## Strengths
scaleable

open source

graph data visulisation

Debugging with tensor board

compatibility with many programing languages namely Python C++, Java, Javascript, etc

Extensive built-in library functions for image manipulation and optimized tensor computations.

Extensive open-source user and developer community which supported latest algorithm implementations and made them readily available.

## Weaknesses

Overwhelming to get started

only NVIDIA support for GPU and Python programming language support for GPU programming. 

limited windows support, a lot of features present in linux but not windows


## Comparison

Compare the product to other products in the same category, if applicable.

## Summary

Summarise the content and highlight the relevance of the product to a web developer.

### Credits

- Alexander Barrett (Anclagen)

#### References

TensorFlow site, blog and githubs
- https://www.tensorflow.org/
- https://blog.tensorflow.org/
- https://www.tensorflow.org/api_docs/
- https://github.com/tensorflow/tensorflow
- https://github.com/tensorflow/tensorflow/tree/master/tensorflow/lite
- https://github.com/tensorflow/tfjs
- https://github.com/tensorflow/tfx

Articles and Blogs
- https://ai.googleblog.com/2015/11/tensorflow-googles-latest-machine.html
- https://www.geeksforgeeks.org/why-tensorflow-is-so-popular-tensorflow-features/
- https://www.geeksforgeeks.org/advantages-and-disadvantages-of-tensorflow/
- https://medium.com/analytics-vidhya/tensorflow-and-use-cases-1e87db8b5222
- https://www.databricks.com/discover/pages/the-democratization-of-artificial-intelligence-and-deep-learning
- https://www.databricks.com/glossary

Linkedin Learning
- https://www.linkedin.com/learning/learning-tensorflow-with-javascript/
- https://www.linkedin.com/learning/building-and-deploying-deep-learning-applications-with-tensorflow/
