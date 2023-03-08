---
title: TensorFlow Case Study
keywords: Python, JavaScript, TensorFlow, Machine Learning, Data Analytics
tags: TensorFlow, Python, JavaScript, Machine Learning, Data Analytics
sidebar: development-platforms
permalink: development-platforms/tensorflow.html
folder: development-platforms
---

# TensorFlow

## Table of content

1. [Introduction](#introduction)
2. [History](#brief-history)
3. [Purpose and Concepts](#purpose-and-concepts)
4. [Features and Ecosystem](#tensorflow-features-and-ecosystem)
5. [Strengths](#strengths)
6. [Weaknesses](#weaknesses)
7. [Comparison](#comparison)
8. [Summary](#summary)
9. [Glossary](#glossary)
10. [References](#references)

## Introduction

TensorFlow is a software library for machine learning and artificial intelligence released under the Apache 2.0 open-source license in 2015. It was developed by the Google Brain team as their second-generation machine learning system, designed to improve on the shortcomings of DistBelief, googles propriety first-generation machine learning platform. It is designed to be flexible, general, portable, and scalable, allowing users to build and train complex machine learning models on various hardware configurations and in a variety of programming languages. It can make use, most notably of Python and JavaScript, as a front-end API, for building applications while executing the calculations in more efficient C++. It has streamline the process of developing and deploying advanced analytics applications for both research and industry.

## Brief History

- 2011, Google researchers develop DistBelief, a proprietary machine learning system for training large-scale neural networks.
- 2012, DistBelief is used to train neural networks for the Google Voice Search and Google Photos applications.
- 2014, Google announces TensorFlow, as their second generation machine learning platform, as a way to make the technology behind DistBelief available to the wider machine learning community.
- 2015, TensorFlow was released as open source software under the Apache 2.0 licence.
- 2017, Versions 1.0.0 released the first stable version. TensorFlow Lite also released, providing a lightweight version for deployment on mobile devices.
- 2018, TensorFlow.js released, allowing for it to be run on node.js and browsers, utilizing JavaScript libaries for trainning and setting up machine learning models, as well as the being able to convert models from TensorFlow or TFLite, to train and run on the web.
- 2019, TensorFlow 2.0 is released, providing a more user-friendly and intuitive API for building and training machine learning models, in response to the growing popularity of PyTorch.
- 2021, TensorFlow is the 3rd most-starred software repository on GitHub and the most-downloaded machine learning package on PyPI.

## Purpose and Concepts

TensorFlow is a mathematical framework for representing and manipulating multi-dimensional arrays, known as tensors, these are like arrays in programming, but with more restrictions in place. The name TensorFlow reflects the data flow through the model, where these tensors are processed through a series of interconnected layers or nodes that apply transformations to the data, alternatively you may hear it referenced as how data moves through a graph, with each node in the graph representing a mathematical operation. The processing of tensors through these nodes enables the model to learn complex relationships between inputs and outputs, making it a powerful tool for building and training deep neural networks.

These mathematical models can learn from data and make predictions about new data. Unlike in regular programming where a computer program follows a fixed set of instructions it was provide, machine learning models are designed to adapt and improve over time through training. They can be trained by passing test data labelled with the output through layers of the model, to progressively reinforce and identify relationships between the inputs and expected outputs. This grows a model that can be applied to new data and to predict an outcome, even data it has never seen before. Several factors will affect the quality of model, such as the training data quality, quantity and bias, more diverse unbiased data will increase its ability to generalize and predict on unseen data. As well as feature selection, model complexity, hyperparameter tuning, training algorithms, and model evaluation all playing a further role.

There are many types of model or artificial neural networks that can be created with machine learning and this is defined by the organization and configuration of the layers/nodes. Two examples of these would be a convolutional network typically used for image classification, or a transformer network used for natural language processing tasks used by the popular ChatGPT. As a growing field of research there are many more neural networks being proposed and researched. So, the task you wish to achieve will typically determine the type of neural network you want to create.

For example, say we want to create an image recognition software for animals, we would first need a large test data set of labeled images where you would have an image of a cat paired with the label cat. The first step in this process would typically be to convert the image into a usable format for the model. This would involve converting the image into a numerical representation, such as converting the RGB values for each pixel into a number. The first layer, called the input layer, receives the preprocessed image data. Then the next layer could perform a convolution operation, applying a set of filters to the image data to extract features such as edges and patterns. The next layer might perform pooling, where the image data is downsized to reduce the dimensionality and increase the model's ability to recognize larger features. This series of operations can be repeated continuously with the output of one layer serving as the input for the next, as the data is passed through the layers and transforms, the model can begin to learn relationships between the image data and its given label, in effect training the model. The model's final layers could then flatten the data into a 1-dimentional vector, that can be fed into a mathematical function such as Softmax which maps the output of a set of values to a probability distribution, where the sum of all values is 1, to normalize the predicted probabilities of an output into a probability distribution, and giving you the most probable classifications. Once the model is trained it can be used on new unlabeled data, of which it will offer a prediction of what the image might represent.

![very_basic_image_recognition](https://user-images.githubusercontent.com/91462616/217267590-f3419033-5918-4b07-9c79-1f4808cb984c.jpg)

Image recognition and classification is just one of many things, as TensorFlow is a general machine learning framework that can be configured to perform a variety of tasks. Some other uses include for web applications include;

- Speech recognition: For example, providing speech-to-text capabilities for websites, similar to Google Assistant.
- Natural Language Processing, for bad language filters, or chat bots like ChatGPT.
- Text translation, such as google translate, allowing users to get content in their perfered langauge.
- Product, post, and article recommendations specific to the user based on past interests, likes and purchases.
- Game app AI, a model to play a specific game against a user.

## TensorFlow Features and Ecosystem

**TensorFlow Core** is a more powerful and feature-rich library for machine learning, but it requires a more powerful machine with a GPU to train models. It provides a lower-level API that gives more control over the implementation, such as computation graphs and a wide range of operations (e.g., math operations, neural network layers). TensorFlow Core can be used to develop complex machine learning models, but it requires a lot of coding effort and a deeper understanding of machine learning concepts.

**Keras** is a high-level API built on top of TensorFlow, providing a more user-friendly and abstract interface for building and training machine learning models. Keras makes it easier for developers to quickly prototype and experiment with different models without having a deeper understanding of machine learning concepts in the TensorFlow Core API.

**TensorFlow.js** is a JavaScript library for training and deploying machine learning models in the browser and on Node.js. A flexible and intuitive high-level API provides a simple and easy-to-use interface, with a lot of the underlying implementation details abstracted away. It can convert existing TensorFlow models from python, which is useful for bringing pre-trained models to the web as well as allowing you to retrain models with your own data. TensorFlow.js is designed to make machine learning accessible to a wider audience, including web and JavaScript developers, by allowing them to build and deploy machine learning models without needing to learn Python or use a powerful machine with a GPU.

**TensorFlow Lite** is a mobile library for deploying models on mobile (Android and iOs device), microcontrollers and other edge devices (embedded Linux). Currently support for Java, Swift Objective-C, C++ and Python. It is optimized for on device machine learning, with models reduced in size with little to no accuracy loss, data doesn't need to be sent to and from a server meaning privacy concerns can be addressed. The smaller more efficient models allow for lower power consumption, and can achieve higher performance when using hardware acceleration on mobile devices. They also provide a variety of end-to-end examples, for common machine learning tasks such as image classification, object detection, pose estimation, question answering, text classification, etc.

**TFX** is a library built on TensorFlow that provides a set of tools to help manage the end-to-end machine learning pipeline, from data analysis and feature engineering to model training and serving. It emphasizes scalability, performance, and streamlining of operations for deploying machine learning models in production.

**TensorFlow Serving** is a flexible, high-performance serving system for machine learning models, designed for production environments. TensorFlow Serving makes it easy to deploy new algorithms and experiments, while keeping the same server architecture and APIs. It provides out-of-the-box integration with TensorFlow models, but can be easily extended to serve other types of models and data.

**TensorBoard** is a visualization toolkit, enabling you to track metrics like loss and accuracy, visualize the model graph, view histograms of weights, biases, or other tensors as they change over time, as well as many more function, it also allows for customization through plugins.

TensorFlow also provides a wide array of resources, libraries, extensions, and tools on their site in addition to their main platforms, to support and speed up development and deployment. These include trained deployable models on TensorFlow Hub, example models on Model Garden, and dataset collections for training your models. It also has a selection of tools like TensorBoard to choose from to augment, optimize and improve your workflows.

## Strengths

- Open Source and Large Community: TensorFlow is an open-source platform with a huge user and developer community. This means there is a wealth of resources, tutorials, tools and libraries available to support your work beyond what is available on their main website. The community also supports the latest algorithm implementations, making them easily accessible.
- Built-In Library Functions: TensorFlow comes with extensive built-in library functions that make it easy to manipulate images, perform optimized tensor computations, and handle other machine learning tasks.
- Scalability: TensorFlow has been designed with scalability in mind, allowing you to run models on a variety of devices and hardware configurations, from mobile devices to large computer servers.
- Multi-Language Compatibility: TensorFlow can be used with several programming languages and is compatible with a variety of devices and hardware configurations, making it a versatile platform for machine learning.
- Graph Visualization with TensorBoard: TensorFlow's visualization tool, TensorBoard, provides a graph-based view of your models, allowing for easier development, optimization, and debugging.

## Weaknesses

- Steep Learning Curve: TensorFlow can be overwhelming for those who are new to machine learning and can have a steeper learning curve compared to similar platforms like PyTorch.
- Slower Development: TensorFlow's development process can be slower compared to other competitors in the market.
- GPU Limitations: TensorFlow currently only supports NVIDIA GPUs and Python programming language for GPU programming.
- Increased Dependency: Despite its user-friendly interface and smaller program size, TensorFlow introduces an added layer of complexity. The platform relies on other dependencies for its execution, which can increase the overall dependency of your project.
- Limited windows feature support, a lot of features are present through Linux but not windows.
- Too Many Frequent Updates, some cause your AI models to shrink as you receive background updates regularly, sometimes resulting in model quality reduction.

## Comparison

**TensorFlow and PyTorch**, PyTorch is another popular similar competing framework offering similar abstractions of development models to TensorFlow. PyTorch tends to be more popular with researchers looking for flexibility, shorter training duration, easier usage, and debugging capabilities. But TensorFlow is still prefer for creating larger, scalable, and complex models, as well as version 2 and Keras helping close the gap in terms of its ease of use. TensorFlow is a more favored tool among industrial professionals as it offers a more streamlined path to production through TFX and TF Serving, while PyTorch has made some headway toward addressing this with TorchServe, it remains inferior. In the area of data parallelism, PyTorch gains optimal performance by relying on native support for asynchronous execution through Python. However, with TensorFlow, you must manually code and optimize every operation run on a specific device to allow distributed training, meaning you must do more work to get the same in TensorFlow.

## Summary

TensorFlow.js, offers the power of machine learning on a browser or in node, in a language every web developer is familiar with and the possibility to take and convert pre-existing models from other TensorFlow applications. Looking through TensorFlow's Blog section under TensorFlow.js there are already many companies taking advantage of it.

The ability to use natural language processing models, could allow the implementation of accurate text translation to their native language, and offensive language filters for sites that warn or prevent offensive posts beyond just filtering specific words, an example of this is [Inspace](https://blog.tensorflow.org/2020/12/inspace-new-video-conferencing-platform-uses-tensorflowjs-for-toxicity-filters-in-chat.html), having implemented filtering to their conferencing platform. Already chatGPT has taken the internet by storm in regards to what these deep models can do when provided with a vast amount of training data, as I expect similar systems will be pushed out to serve a variety of specific problems in the future.

You can speed up sites by using trends and specific user data to determine the most likely pages a user will navigate to next, and begin preloading assets for these pages. On top of being able to push user tailored content recommendations. The retail store [Newegg](https://blog.tensorflow.org/2021/05/speed-up-your-sites-with-web-page-prefetching-using-ml.html) has already implemented predictive asset loading on their store page. I expect in the future web developers will need to have a greater understanding of machine learning tools as they are incorporated into a variety of platforms and frameworks.

While all this seems like it could be a good thing for the future of the web, there should be concerns about privacy, with regards to that fact that this will encourage a greater amount of data collection from companies. From this data machine learning models could begin to make accurate guesses about person’s medical conditions and opinions, from indirect sources of data. Also biases in the models and their training data should be a concern as platforms like chatGPT become more common, who will decide on what information is or isn't appropriate for the user.

### Credits

- Alexander Barrett (Anclagen)

## Glossary

- Model: A mathematical representation of a problem and its solution.
- Layer/nodes/graph: A collection of neurons that perform a specific function.
- Neural Network: A series of interconnected layers used to model and solve a problem.
- Training: The process of adjusting the parameters of a model to make it better at solving a problem.
- Optimization: The process of finding the best set of parameters for a model.
- Epoch: One iteration of the training process over all the training data.
- Batch: A subset of the training data used in each iteration of the training process.
- Activation Function: A function that determines the output of a neuron based on its inputs.
- Gradient Descent: An optimization algorithm that finds the minimum of a cost function.
- Overfitting: A problem in machine learning where a model becomes too complex and memorizes the training data instead of generalizing to new data.
- Regularization: A technique used to reduce overfitting by adding a penalty term to the loss function.
- Inference: The process of using a trained model to make predictions on new data.
- Transfer Learning: The process of using a pre-trained model as a starting point for a new problem.
- Hyperparameters: Parameters that are set before training a model and affect its performance.
- Embedding: A technique used to map categorical data into a continuous space for use in a neural network.
- Data parallelism refers to scenarios in which the same operation is performed concurrently (that is, in parallel) on elements in a source collection or array. In data parallel operations, the source collection is partitioned so that multiple threads can operate on different segments concurrently.

## References

TensorFlow

- TensorFlow blog: https://blog.tensorflow.org/
- TensorFlow Lite: https://www.tensorflow.org/lite/guide
- TensorFlow Lite Example Apps: https://www.tensorflow.org/lite/examples
- TensorFlow Core: https://www.tensorflow.org/overview
- Kera: https://keras.io/
- https://github.com/tensorflow/tensorflow
- https://github.com/tensorflow/tensorflow/tree/master/tensorflow/lite
- https://github.com/tensorflow/tfjs
- https://github.com/tensorflow/tfx
- https://github.com/tensorflow/models/tree/master/official

General articles and blogs

- https://ai.googleblog.com/2015/11/tensorflow-googles-latest-machine.html
- https://www.infoworld.com/article/3278008/what-is-tensorflow-the-machine-learning-library-explained.html
- https://medium.com/analytics-vidhya/tensorflow-and-use-cases-1e87db8b5222
- https://www.mygreatlearning.com/blog/what-is-tensorflow-machine-learning-library-explained/
- https://www.databricks.com/discover/pages/the-democratization-of-artificial-intelligence-and-deep-learning
- https://www.databricks.com/glossary
- https://www.infoworld.com/article/3405641/tensorflow-2-review-easier-end-to-end-machine-learning.html
- https://www.v7labs.com/blog/image-recognition-guide#
- https://blog.tensorflow.org/2020/02/how-modiface-utilized-tensorflowjs-in-ar-makeup-in-browser.html
- https://blog.tensorflow.org/2022/08/content-moderation-using-machine-learning-a-dual-approach.html
- https://blog.tensorflow.org/2020/09/brief-history-of-tensorflow-extended-tfx.html#TFX

Comparisons

- https://pytorch.org/
- https://www.infoworld.com/article/3278008/what-is-tensorflow-the-machine-learning-library-explained.html
- https://medium.com/mlearning-ai/pytorch-vs-tensorflow-in-2022-9a7106b1f606
- https://www.databricks.com/glossary/tensorflow-guide
- https://www.simplilearn.com/keras-vs-tensorflow-vs-pytorch-article

Advantages and disadvantages

- https://www.geeksforgeeks.org/advantages-and-disadvantages-of-tensorflow/
- https://www.geeksforgeeks.org/why-tensorflow-is-so-popular-tensorflow-features/
- https://insights.daffodilsw.com/blog/pros-and-cons-of-using-the-tensorflow-ml-platform
- https://techvidvan.com/tutorials/tensorflow-features/

Summary blog posts

- https://blog.tensorflow.org/2021/05/speed-up-your-sites-with-web-page-prefetching-using-ml.html
- https://blog.tensorflow.org/2020/12/inspace-new-video-conferencing-platform-uses-tensorflowjs-for-toxicity-filters-in-chat.html
- https://www.linkedin.com/pulse/what-key-privacy-concerns-associated-machine-

Linkedin Learning

- https://www.linkedin.com/learning/learning-tensorflow-with-javascript/
- https://www.linkedin.com/learning/building-and-deploying-deep-learning-applications-with-tensorflow/
