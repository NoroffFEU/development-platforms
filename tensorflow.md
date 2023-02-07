---
title: TensorFlow Case Study
keywords: Python, JavaScript, TensorFlow, Machine Learning, Data Analytics
tags: TensorFlow, Python, JavaScript, Machine Learning, Data Analytics
sidebar: development-platforms
permalink: development-platforms/TensorFlow.html
folder: development-platforms
---
# Machine Learning and TensorFlow

## Introduction

TensorFlow is a software library for machine learning and artificial intelligence released under the Apache 2.0 open-source license in 2015. It was developed by the Google Brain team as their second-generation machine learning system, designed to improve on the shortcomings of DistBelief, googles propriety first generation machine learning platform. TensorFlow is designed to be flexible, general, portable, and scalable, allowing users to build and train complex machine learning models on various hardware configurations. It is designed to streamline the process of developing and executing advanced analytics applications for users such as data scientists, statisticians, and predictive modelers. It was initially released with Python support for writting models and C++ for running the caluculations server side, Python remains the most widely used programming language for it, but support for other languages such as Java, Swift and JavaScript having been added since, with third party frameworks offering support for other languages. 

It is a mathematical framework for representing and manipulating multi-dimensional arrays, known as tensors, these are like arrays in programming, but with more restrictions in place. The name TensorFlow reflects the data flow through the model, where these tensors are processed through a series of interconnected layers or nodes that apply transformations to the data. The processing of tensors through these layers enables the model to learn complex relationships between inputs and outputs, making it a powerful tool for building and training deep neural networks. 

## Brief History

- 2011, Google researchers develop DistBelief, a proprietary machine learning system for training large-scale neural networks.
- 2012, DistBelief is used to train neural networks for the Google Voice Search and Google Photos applications.
- 2014, Google announces TensorFlow, as their second generation machine learning platform, as a way to make the technology behind DistBelief available to the wider machine learning community.
- 2015, TensorFlow was released as open source software under the Apache 2.0 licence.
- 2017, Versions 1.0.0 released the first stable version. TensorFlow Lite also released, providing a lightweight version for deployment on mobile devices.
- 2018, TensorFlow.js released, allowing for it to be run on node.js and browsers, utilising JavaScript libaries for trainning and setting up machine learning models, as well as the being able to convert models from TensorFlow or TFLite, to train and run on the web.
- 2019, TensorFlow 2.0 is released, providing a more user-friendly and intuitive API for building and training machine learning models, in response to the growing popularity of PyTorch.
- 2021, TensorFlow is the 3rd most-starred software repository on GitHub and the most-downloaded machine learning package on PyPI.

### Purpose and concepts

The purpose of TensorFlow is to provide a platform to build, train, and deploy, deep machine learning models, these can also be referred to as artificial neural networks. These are mathematical models that can learn from data and make predictions about new data. Unlike in regular programming where a computer program follows a fixed set of instructions it was provide, machine learning models are designed to adapt and improve over time through training. They can be trained by passing small or vast amounts of test data through layers of the model, to progressively reinforce and identify relationships between the input and output. This grows a model that can be applied to new data and accurately predict an outcome, even data it has never seen before.  

There are many types of neural networks that can be created with machine learning and this is largely defined by the way the layers/nodes of the model are organized and configured. Two examples of these would be a convolutional network typically used for image classification, or a transformer network used for natural language processing task that chatGPT uses, as a growing field of research there are many more networks being proposed and researched. So the task you wish to achieve will typically determine the type of model you will create. 

Say we want to create an image recognition software for animals, we would first need a large test data set of labeled images where you would have an image of a cat paired with the label cat. The first step in this process would typically be to convert the image into a usable format for the model. This would most likely involve converting the image into a numerical representation, such as converting the RGB values for each pixel into a number. The first layer, called the input layer, receives the preprocessed image data. Then the next layer could maybe perform a convolution operation, applying a set of filters to the image data to extract features such as edges and patterns. The next layer might perform pooling, where the image data is downsized to reduce the dimensionality and increase the model's ability to recognize larger features. This series of operations can be repeated continuously with the output of one layer server as the input for the next, as the data is passed through the layers and transforms the model can begin to learn relationships between the image data and its giving label, in effect training the model. Once this is done it can be used on new unlabeled data, of which it will offer a prediction of what the image might represent. 

https://www.mygreatlearning.com/blog/what-is-tensorflow-machine-learning-library-explained/

### Usage and Application

https://medium.com/analytics-vidhya/tensorflow-and-use-cases-1e87db8b5222
https://blog.tensorflow.org/2020/02/how-modiface-utilized-tensorflowjs-in-ar-makeup-in-browser.html

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

In both eager and graph executions, TensorFlow provides an API for distributing computation across multiple devices with various distribution strategies. This distributed computing can often speed up the execution of training and evaluating of TensorFlow models and is a common practice in the field of AI

**TensorFlow Core** is a more powerful and feature-rich library for machine learning, but it requires a more powerful machine with a GPU to train models. It provides a lower-level API that gives more control over the implementation details. But as of TensorFlow v2.0, it can also utilizes **Keras**, a high level API, that allows for easier model building. 

**TensorFlow.js** is a JavaScript library for training and deploying machine learning models in the browser and on Node.js. A flexible and intuitive high-level API provides a simple and easy-to-use interface, with a lot of the underlying implementation details abstracted away. It's can be used for creating web-based or browser-based machine learning applications. It's also convert existing TensorFlow models from python, which can be useful for bringing pre-trained models to the web as well as allowing you to retrain models with your own data. TensorFlow.js is designed to make machine learning accessible to a wider audience, including web and JavaScript developers, by allowing them to build and deploy machine learning models without needing to learn Python or use a powerful machine with a GPU.

**TensorFlow Lite** is a mobile library for deploying models on mobile (Android and iOs device), microcontrollers and other edge devices (embeded Linux). Currently support for Java, Swift Objective-C, C++ and Python. It is optimized for on deveice machine learning, with models reduced in size with little to no accuracy loss, data doesn't need to be sent to and from a server meaning privacy concerns can be addressed. The smaller more efficent models allow for lower power consumption, and can achieve higher performance on using hardware acceleration on mobile devices. They also provide a variety end-to-end examples, for common machine learning tasks such as image classification, object detection, pose estimation, question answering, text classification, etc. on multiple platforms.

re-write and expand this, https://www.infoworld.com/article/3405641/tensorflow-2-review-easier-end-to-end-machine-learning.html
```
**TFX** is an end-to-end platform for deploying production ML pipelines. When you're ready to move your models from research to production, use TFX to create and manage a production pipeline. A TFX pipeline is a sequence of components that implement an ML pipeline which is specifically designed for scalable, high-performance machine learning tasks. Components are built using TFX libraries which can also be used individually.

TensorFlow Extended (TFX) is an end-to-end platform for deploying production machine learning pipelines. TFX is something to consider once you have trained a model. Pipelines include data validation, feature engineering, modeling, model evaluation, serving inference, and managing deployments to online, native mobile, and JavaScript targets. The diagram below shows how the components of the TFX pipeline fit together.
```

TensorFlow also provides a wide array of resources on their site, with trained deployable models on TensorFlow Hub, datasets collections for training your models, tools

## Strengths
https://www.javatpoint.com/advantage-and-disadvantage-of-tensorflow
https://www.geeksforgeeks.org/why-tensorflow-is-so-popular-tensorflow-features/
https://www.geeksforgeeks.org/advantages-and-disadvantages-of-tensorflow/
scaleable

open source

graph data visulisation

Debugging with tensor board

compatibility with many programing languages namely Python C++, Java, Javascript, etc

Extensive built-in library functions for image manipulation and optimized tensor computations.

Extensive open-source user and developer community which supported latest algorithm implementations and made them readily available.

## Weaknesses

Overwhelming to get started

Slower development, not suitable for projects that require fast development.

only NVIDIA support for GPU and Python programming language support for GPU programming. 

limited windows support, a lot of features present in linux but not windows


## Comparison
fact check, reference and expand from https://www.infoworld.com/article/3278008/what-is-tensorflow-the-machine-learning-library-explained.html
https://medium.com/mlearning-ai/pytorch-vs-tensorflow-in-2022-9a7106b1f606
https://www.databricks.com/glossary/tensorflow-guide
https://www.simplilearn.com/keras-vs-tensorflow-vs-pytorch-article
```
TensorFlow vs. PyTorch, CNTK, and MXNet

TensorFlow competes with a slew of other machine learning frameworks. PyTorch, CNTK, and MXNet are three major frameworks that address many of the same needs. Let's close with a quick look at where they stand out and come up short against TensorFlow:

    PyTorch is built with Python and has many other similarities to TensorFlow: hardware-accelerated components under the hood, a highly interactive development model that allows for design-as-you-go work, and many useful components already included. PyTorch is generally a better choice for fast development of projects that need to be up and running in a short time, but TensorFlow wins out for larger projects and more complex workflows.
    CNTK, the Microsoft Cognitive Toolkit, is like TensorFlow in using a graph structure to describe dataflow, but it focuses mostly on creating deep learning neural networks. CNTK handles many neural network jobs faster, and has a broader set of APIs (Python, C++, C#, Java). But it isn’t currently as easy to learn or deploy as TensorFlow. It's also only available under the GNU GPL 3.0 license, whereas TensorFlow is available under the more liberal Apache license. And CNTK isn't as aggressively developed; the last major release was in 2019.
    Apache MXNet, adopted by Amazon as the premier deep learning framework on AWS, can scale almost linearly across multiple GPUs and multiple machines. MXNet also supports a broad range of language APIs—Python, C++, Scala, R, JavaScript, Julia, Perl, Go—although its native APIs aren’t as pleasant to work with as TensorFlow’s. It also has a far smaller community of users and developers.
```

## Summary

Summarise the content and highlight the relevance of the product to a web developer.

### Credits

- Alexander Barrett (Anclagen)

#### References

TensorFlow blog, site, and githubs
- TensorFlow: https://blog.tensorflow.org/
- TensorFlow Lite: https://www.tensorflow.org/lite/guide
- TensorFlow Lite Example Apps: https://www.tensorflow.org/lite/examples 
- TensorFlow Core: https://www.tensorflow.org/overview
- Kera: https://keras.io/
- https://github.com/tensorflow/tensorflow
- https://github.com/tensorflow/tensorflow/tree/master/tensorflow/lite
- https://github.com/tensorflow/tfjs
- https://github.com/tensorflow/tfx
- https://github.com/tensorflow/models/tree/master/official

Articles and Blogs
- https://ai.googleblog.com/2015/11/tensorflow-googles-latest-machine.html
- https://www.infoworld.com/article/3278008/what-is-tensorflow-the-machine-learning-library-explained.html
- https://www.geeksforgeeks.org/why-tensorflow-is-so-popular-tensorflow-features/
- https://www.geeksforgeeks.org/advantages-and-disadvantages-of-tensorflow/
- https://medium.com/analytics-vidhya/tensorflow-and-use-cases-1e87db8b5222
- https://www.databricks.com/discover/pages/the-democratization-of-artificial-intelligence-and-deep-learning
- https://www.databricks.com/glossary
- https://www.v7labs.com/blog/image-recognition-guide

Linkedin Learning
- https://www.linkedin.com/learning/learning-tensorflow-with-javascript/
- https://www.linkedin.com/learning/building-and-deploying-deep-learning-applications-with-tensorflow/
