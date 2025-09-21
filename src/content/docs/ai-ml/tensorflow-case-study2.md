---
title: TensorFlow Case Study
author: Karl Magnus Leonardo Nøkling <Korny94>
tags: case study, platform, machine learning, artificial intelligence, tensorflow, ai, ml
---

## Introduction

TensorFlow is an end-to-end, open-source machine learning platform developed by Google. This framework is intended to be targeted for “everyone”, which is why it has become one of the most used tools in machine learning and artificial intelligence development. This framework offers tools and resources for building, training and deploying machine learning models.

In this study I will be writing about the history of TensorFlow, how to get started, its features and their competitive products.

## Brief History

- 2011: Google Brain develops DistBelief, the predecessor to TensorFlow.
- 2012: DistBelief learns what a cat looks like.
- 2013: Google hires AI researcher Geoffrey Hinton.
- 2014: DistBelief wins Large Scale Visual Recognition Challenge.
- 2015: TensorFlow is released as an open-source project by Google.
- 2017: TensorFlow 1.0 is released.
- 2019: TensorFlow 2.0 is released.


## Main Features

There are many features that TensorFlow provides, here are a few that make it a powerful machine learning development tool.

| Feature | Description |
| --- | --- |
| High Performance | TensorFlow is high performing by design. This allows for both simple and complex models. This is done with support for distributed computing, GPU acceleration, and optimized mathematical operations. |
| Comprehensive Ecosystem | TensorFlow provides a big variety of tools and resources that helps the developer in every stage of their project. Including data preprocessing, model training, evaluation and deployment. |
| TensorBoard | With TensorFlow you get TensorBoard, a toolkit that helps developers to visualize, debug and analyze their models and its progress. |
| Integration | TensorFlow can easily be integrated with other machine learning frameworks and libraries, such as Keras, scikit-learn and PyTorch. |


## Market Comparison

TensorFlow has a few well known competitive machine learning tools like PyTorch and scikit-learn. 

| Feature | Comparison |
| --- | --- |
| Performance | While TensorFlow and PyTorch are highly optimized for training large-scale deep learning models, scikit-learn’s implementation of traditional machine learning algorithms are more suitable for non-deep learning tasks. |
| Ease of use | TensorFlow provides high-level APIs like Keras for intuitive model building and extensive documentation, and the community for support is very large. PyTorch is known for its simplicity and flexibility, which are very popular among researchers and practitioners. scikit-learn is praised for its simplicity and ease of use, which make it suitable for everyone from beginner to expert. | 
| Use cases | TensorFlow is widely used for tasks which require deep learning like image classification and reinforcement learning. It is really useful when working on training large-scale models. PyTorch is very popular in research and academic settings. This is for its flexibility and ease of use. It is commonly used for research in computer vision and generative modeling. scikit-learn is suitable for traditional machine learning tasks like classification and dimensionality reduction, which is commonly used in data analysis and statistical learning applications. |
| Comparison Conclusion | TensorFlow is ideal for projects which require high-performance deep learning models and extensive community support. PyTorch on the other hand is preferred by researchers and practitioners for its ease of use and flexibility, and of course its dynamic computation graph. scikit-learn is best suited for traditional machine learning tasks where efficiency and simplicity are important. |


## Getting Started

To begin using TensorFlow, it's recommended to visit their dedicated webpage for beginners at [tensorflow.org/learn](https://www.tensorflow.org/learn). Here, you'll find tutorials covering the fundamentals of TensorFlow, and [tensorflow.org](https://www.tensorflow.org/js/tutorials/setup) to get started with TensorFlow using JavaScript for web, mobile devices, edge computing, TPUs, and Raspberry Pi.

Here is a quick step-by-step guide to get started with TensorFlow using JavaScript for Web.

- Step 1
    Create an HTML File:
      Open your preferred text editor and create a new file called index.html.

- Step 2
    Add TensorFlow.js Script Tag:
      Paste the following code into your index.html file:

        ```
          <!DOCTYPE html>
        <html lang="en-US">
          <head>
            <meta charset="utf-8" />
            <title>TensorFlow.js browser example</title>
        
            <!-- Load TensorFlow.js from a script tag -->
            <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@latest/dist/tf.min.js"></script>
          </head>
          <body>
            <h1>TensorFlow.js example</h1>
            <h2>Open the console to see the results.</h2>
            <script>
            // Define a model for linear regression. The script tag makes `tf` available
            // as a global variable.
            const model = tf.sequential();
            model.add(tf.layers.dense({units: 1, inputShape: [1]}));
        
            model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});
        
            // Generate some synthetic data for training.
            const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
            const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);
        
            // Train the model using the data.
            model.fit(xs, ys, {epochs: 10}).then(() => {
              // Use the model to do inference on a data point the model hasn't seen before:
              model.predict(tf.tensor2d([5], [1, 1])).print();
              // Open the browser devtools to see the output
            });
            </script>
          </body>
        </html>
        ```

- Step 3
    Run the Example:
      Save the index.html file and open it in your default web browser.

- Step 4
    View Output:
      Open the browser console to see the output of the script and refresh the page to see a new prediction.

## Conclusion

In conclusion, TensorFlow is a versatile and powerful machine learning framework. It provides developers a big set of tools and resources for building, training and deploying their machine learning models.
It's flexible, high performing and has a comprehensive ecosystem, which makes it a popular choice among developers.
Despite being in a competitive field, it may very well be the best all round machine learning framework if you’re looking to get started.

## References

- [opendatascience.com](https://opendatascience.com/how-tensorflow-came-to-be-the-most-important-library-in-machine-learning/)
- [tensorflow.org](https://www.tensorflow.org/learn)
- [tensorflow.org](https://www.tensorflow.org/js/tutorials/setup)

## Additional Resources

- [chat.openai.com](https://chat.openai.com)
