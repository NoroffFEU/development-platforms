---
title: TensorFlow
author: Vegard Lekve <vegardlekve>
tags: Machine learning, Neural networks, JavaScript, Python
---

## Introduction

TenorFlow is an open source machine learning library for numerical computation, using neural networks. It works as an end-to-end platform, with scaleability and deployment in mind.
It was created by the Google Brain team, who decided to open source the platform to the public, democratizing machine learning. TensorFlow supports different algorithms needed to perform tasks like natural language processing, computer vision and predictive analytics. To do this, it needs to create and process computational graphs (nodes represent mathematical operations, and the edges represent the data that flow between these operations) that can efficiently handle tensors,a multi-dimensional array of numbers. It's also very flexible in different ways. For example it can use different hardware (CPU, GPU, TPU), but also different programming languages (Python, JavaScript). This represents itself in TensorFlow's large user community.

## Brief History

- 2011 - Google developed DistBelief, wich was a machine learning system used internally in Google.
- 2015 - TensorFlow was released available to the general public.
- 2016 - TensorFlow launches TensorFlow for mobile
- 2017 - Google released TensorFlow Lite, optimized for mobile and embedded devices, and Eager Execution to make the development process more intuitive and flexible.
- 2018 - TensorFlow 2.0 marked a shift towards easier usability and clarity, introducing eager execution as a central feature and reducing the complexities of the library.
- 2020 - Google launched TensorFlow.js, allowing the use of machine learning entirely in the browser using JavaScript.
- 2021 - Some notable developments include more robust support for production and deployment, a broad set of tools for visualization and debugging (TensorBoard), and libraries for defining and training neural networks (Keras).
- 2023 - Introduction of KerasCV and KerasNLP, that allows you access to pre-trained models. DTensor helps you scale up your models and train them efficiently. JAX2TF, models written with the JAX numerical library can be used in the TensorFlow ecosystem. TF Quantization API, which enables you to make your models more cost and resource-efficient without compromising on accuracy

## Main Features

TensorFlow contains an axtensive list of tools, libraries and extensions. Here is a overvirew over some of the main components in that ecosystem:

- **TensorFlow Core:** This is, as the name says, the core of TensorFlow. Here you can build and train complex neural networks, running computations using tensors, wich is the basic units of data in TensorFlow.
- **TensorFlow Lite:** A lightweight solution for mobile and embedded devices. It allows you to run machine learning models on devices with limited computational resources. This enables on-device machine learning inference with low latency.
- **TensorFlow.js:** Using JavaScript to build and run machine learning, opens a new world to web evelopers.
- **TensorFlow Extended (TFX):** This is a production-ready machine learning platform that provides a full toolkit for deploying models. It includes components for data validation, preprocessing, model training and validation, and serving.
- **TensorFlow Hub:** A library for reusable machine learning modules. Here you get pre-trained models, that you can either use as they are, or tune them with your own data. This reduces training time aswell as computational resources.
- **TensorBoard:** This is a visualization tool for TensorFlow. This makes it easier to understand, debug and optimize your neural network.
- **TensorFlow Serving:** A flexible, high-performance serving system for machine learning models, designed for production environments. It can serve multiple models or multiple versions of the same model simultaneously, and it integrates well with TensorFlow models but can be extended to serve other types of models.
- **Keras:** This is a high-level API integrated into TensorFlow as 'tf.keras'. It provides more user-friendly abstractions and tools for building and training models in TensorFlow.
- **TensorFlow Probability (TFP):** A library for probabilistic reasoning and statistical analysis. Basically a measuring capability of uncertanty.
- **TensorFlow Quantum (TFQ):** This is a library for quantum machine learning.

### How it works

TensorFlow, as mentioned, is a flexible platform for building and deploying machine learning models. In simplistic terms, you train a model with pre-labled data. The model, through mathematical operations, then learn to identify new data or predict what outcome input data will have. TensorFlow uses computational graphs to solve this. We could think about it this way:

Let's imagine we're baking a multi-layer cake, and this process will be our computational graph. Each step of the recipe is like a node in the graph, and the ingredients we use are the tensors.

So, you start with your base ingredients - flour, sugar, butter, and eggs. These are your input tensors. Then, you perform some operations or steps on them. Mixing the butter and sugar together, that's one operation. Beating in the eggs is another operation. Each of these operations is like a node in your computational graph.

You keep following the recipe, performing operations in a specific order, like adding flour and then baking the cake. After the cake is baked, you might spread icing on it - that's another operation, another node in the graph.

The resulting cake is your output tensor, which is the result of all the operations (nodes) performed on the input tensors (ingredients).

In the world of TensorFlow, this entire process can be broken down into these steps and operations, calculated efficiently using the power of modern computers. And just like how changing the ingredients or steps can give you a different cake, changing the values in the tensors or the operations in the computational graph can give you different results in your machine learning model.

We can look at a more relevant example in how text recognition works in TensorFlow:

Generally it involves two main parts: training a machine learning model using a labeled dataset and then using the trained model to predict the characters or words in new, unseen images. It often employs a type of neural network known as a Convolutional Neural Network (CNN) or Recurrent Neural Network (RNN) or a combination of both, commonly known as a Convolutional Recurrent Neural Network (CRNN).

Data Collection: The first step is to collect a dataset of images that contain text and their corresponding labels. The labels will be the actual text present in the images.

Data Preprocessing: The images need to be preprocessed before they can be used for training. This usually involves converting the images to grayscale, resizing them to a fixed size, normalizing the pixel values, and converting the text into a format that can be used by the model.

Model Creation: The next step is to create the model. A common choice for text recognition tasks is a CRNN. The convolutional layers learn local features like the shapes of different characters, the recurrent layers learn the sequence of characters in a word or a line of text, and a final fully connected layer outputs the predicted text.

Model Training: The model is then trained on the preprocessed images and their corresponding labels. The model learns to recognize the text in the images by adjusting its parameters to minimize the difference between its predictions and the actual labels.

Prediction: After the model has been trained, it can be used to recognize text in new images. The preprocessed image is fed into the model, which outputs a sequence of character probabilities. A decoding step, such as a CTC (Connectionist Temporal Classification) decoder, is then used to convert these probabilities into a sequence of characters, forming the recognized text.

Post-processing: After prediction, you may need some post-processing steps to handle special cases or improve the result, such as correcting spelling using a language model.

### Problem solving

- **Complexity:** Machine learning is heavily based of complex math. TensorFlow helps abstract away alot of this, making it less complex. This way, developers can focus on creating effective models.
- **Scalability:** TensorFlow is designed to handle large-scale, high-performance models. It can manage distributed processing, allowing computations to run in parallel across multiple CPUs or GPUs, or even across a network of computers.
- **Speed:** TensorFlow can leverage hardware accelerators like GPUs and TPUs (Tensor Processing Units) to speed up the computational processes required for training and running machine learning models.
- **Portability and Deployment:** TensorFlow models can be deployed across various platforms, from desktops to servers, and from mobile to edge devices. This allows for versatility in where machine learning models can be used.

### For Devolpers

- **Ease of Use:** The high-level APIs and integration with Python and JavaScript make it an accessible tool for both beginners and experienced developers.
- **Strong Community and Documentation:** TensorFlow is backed by extensive documentation and a large community, which makes troubleshooting easier and provides many shared resources and pre-trained models.
- **Versatility:** TensorFlow's capability to work on different platforms (desktops, servers, mobile, and edge devices) and compatibility with different languages (JavaScript, Python, C++) make it versatile and flexible.
- **Robust ML/DL Ecosystem:** TensorFlow is not just a simple machine learning library. It offers a comprehensive ecosystem of tools, libraries, and community resources that lets researchers push the state-of-the-art in ML, and developers easily build and deploy ML powered applications.

### Weaknesses

- **Debugging:** Debugging a TensorFlow model can be challenging. While TensorFlow 2.0 introduced eager execution to improve debugging, it's still not as straightforward as in some other libraries like PyTorch.
- **Backward Compatibility Issues:** TensorFlow has made many changes over its various versions, and not all features are backward compatible. This can create problems when trying to run older TensorFlow code.
- **Performance:** While TensorFlow performs well at scale, for smaller projects or on single machines, it may not perform as well as some other libraries.
- **Deployment on Mobile and Edge Devices:** While TensorFlow does provide TensorFlow Lite for mobile and edge device deployment, it can still be a challenging process with larger models.

## Comparison

TensorFlow's main compatitor is PyTorch. They are similar in that they are both open-source libraries for deep learning that support neural network modeling on CPUs and GPUs. But there are still some differences.

- **Ease of Use:** PyTorch is often praised for its easy-to-understand and pythonic API, which makes the process of developing deep-learning models more intuitive.
- **Deployment in Production:** TensorFlow has traditionally been considered the go-to option for production due to its robust tools and broad community support, although PyTorch is catching up.
- **Debugging:** PyTorch's dynamic computation graph allows for easier debugging since you can easily insert print statements in the code, similar to regular Python code.
- **Device Optimization:** TensorFlow can be optimized to run on a variety of devices beyond just CPUs and GPUs, which includes Google's custom machine learning hardware, Tensor Processing Units (TPUs).
- **Community Support and Documentation:** TensorFlow, being older, has a larger community and better documentation, which can be beneficial for troubleshooting and learning. However, PyTorch's community is rapidly growing.
- **Research vs Production:** PyTorch is more favored in the research community due to its dynamic nature and ease of use, while TensorFlow is extensively used in industry and production environments because of its scalability and comprehensive ecosystem.

Overall, the choice between TensorFlow and PyTorch depends on the specific requirements of the project, the developers familiarity with the tools, and whether the primary need is for deploying a production-ready model or for research and experimentation.

## Conclusion

TensorFlow is a versatile and robust platform for developing machine learning applications. It excels in scalability, device optimization, and community support. However, challenges lie in its complexity, occasional compatibility issues, and performance in smaller projects.

Compared to PyTorch, TensorFlow shines in large-scale deployments while PyTorch stands out in research and experimentation due to its ease of use and dynamic nature. Both have their unique strengths and are chosen based on the specific requirements of the project.

In the future, TensorFlow's continuous evolution and extensive ecosystem forecast its enduring relevance in the field of machine learning. However, developers should consider their project's specific needs when deciding between TensorFlow and other tools.

## References

- [TensorFlow](https://www.tensorflow.org/)
- [TensorFlow blog](https://blog.tensorflow.org/)
- [Reddit](https://www.reddit.com/) - r/tensorflow, r/python, r/datascience, r/learnmachinelearning
- [Wikipedia](https://en.wikipedia.org/wiki/TensorFlow)
- [guru99.com](https://www.guru99.com/what-is-tensorflow.html) - What is tensorflow
- [Medium.com](https://medium.com/@alec.mccabe93/history-and-basics-of-tensorflow-eaee87c6aef0) - Basics of TensorFlow
- [Medium.com](https://medium.com/@valkont/battle-of-the-giants-tensorflow-vs-pytorch-2023-fd8274210a38) - vs PyTorch
- [Projectpro.io](https://www.projectpro.io/article/pytorch-vs-tensorflow-2021-a-head-to-head-comparison/416) - vs PyTorch
- [chatGPT](https://chat.openai.com/) - Cake analogy

## Additional Resources

- [Rajat Monga: TensorFlow | Lex Fridman Podcast #22](https://www.youtube.com/watch?v=NERNE4UThHU&t=1709s&ab_channel=LexFridman)
