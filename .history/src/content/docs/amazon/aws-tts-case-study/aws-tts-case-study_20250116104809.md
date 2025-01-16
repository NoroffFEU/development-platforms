---
title: AWS Text To Speech "Polly" Case Study
author: Benjamin Skarding <benjaminskarding>
tags: AWS, case study, TTS, Polly
---

# AWS Polly

A Text-to-Speech Solution in the AWS Ecosystem

## Table of Contents

1. [Introduction](#introduction)
2. [Brief History](#brief-history)
3. [Main Features](#main-features)
4. [Market Comparison](#market-comparison)
5. [Getting Started](#getting-started)
6. [Conclusion](#conclusion)
7. [References](#references)
8. [Additional Resources](#additional-resources)

## Introduction

AWS Polly is a cloud-based text-to-speech service provided by Amazon Web Services (AWS). It enables developers to convert text into lifelike speech, supporting a wide range of languages and voices. Polly is designed to make applications more engaging by adding natural-sounding speech capabilities, useful for applications such as eLearning, accessibility, voice assistants, and more.

This case study explores Polly's capabilities, its position in the market, and how developers can get started with it.

## Brief History

AWS Polly was introduced in **2016** as part of AWS's broader suite of AI-driven services. The service was created to address the growing need for high-quality, automated text-to-speech solutions across industries. Over time, Polly has evolved to include neural text-to-speech (NTTS) technology, offering more realistic and natural voices compared to traditional speech synthesis.

## Main Features

### 1. Wide Variety of Voices

- **Standard and Neural Voices**: Polly offers both standard and NTTS voices, with over 60 voices in multiple languages.
- Customizable speech parameters, including pitch, speed, and volume.

### 2. Real-Time Streaming

- Polly can generate speech in real-time, making it ideal for dynamic applications such as live customer support or voice-enabled devices.

### 3. Customization Options

- **SSML Support**: Use Speech Synthesis Markup Language (SSML) to fine-tune the pronunciation, pauses, and emphasis in speech output.
- **Custom Lexicons**: Developers can upload lexicons to ensure Polly pronounces specific words or phrases correctly.

### 4. Multiple Output Formats

- Polly supports various audio formats, such as MP3, OGG, and PCM, making it versatile for different use cases.

### 5. Cost-Effective Pricing

- Free-tier availability for beginners.
- Pay-per-use pricing model ensures scalability for businesses of all sizes.

## Market Comparison

### AWS Polly vs. Google Cloud TTS

- **Voice Quality**: Google Cloud TTS is known for its WaveNet voices, which compete with Polly's neural voices.
- **Customization**: Polly's SSML and custom lexicons provide flexibility, but Google TTS offers similar features.
- **Pricing**: AWS Polly is generally more cost-effective for small-scale applications.

### AWS Polly vs. Azure Speech Services

- **Custom Voices**: Azure Speech Services offers custom voice training, which Polly lacks.
- **Integration**: Polly integrates seamlessly with other AWS services, whereas Azure's TTS ties into Microsoft's ecosystem.

## Getting Started

To use AWS Polly:

### **1. Set Up AWS Account**

- Create an AWS account if you don’t have one.
- Navigate to the AWS Management Console and locate Polly under the "Machine Learning" services.

### **2. Access Polly via the API**

- Install the AWS SDK for your programming language of choice (e.g., Boto3 for Python).
- Obtain your AWS access key and secret key for authentication.

### **3. Example Code**

Below is a simple Python example demonstrating how to interact with AWS Polly:

```python
import boto3

# Initialize the Polly client
polly = boto3.client('polly')

# Call Polly's synthesize_speech API to convert text to speech
response = polly.synthesize_speech(
    Text='Hello, welcome to AWS Polly!',
    OutputFormat='mp3',
    VoiceId='Joanna'
)

# Save the audio stream as an MP3 file
with open('speech.mp3', 'wb') as file:
    file.write(response['AudioStream'].read())

print("Speech saved as 'speech.mp3'")
```

## Conclusion

AWS Polly stands out as a robust and cost-effective text-to-speech solution, particularly for developers already working within the AWS ecosystem. Its scalability, extensive voice options, and ease of use make it suitable for applications ranging from accessibility tools to voice assistants and e-learning platforms. While competitors like Google Cloud TTS and Azure Speech Services offer similar capabilities, Polly excels in its seamless integration with AWS services and flexible pay-as-you-go pricing.

Polly’s focus on customization through SSML and custom lexicons makes it a versatile tool for developers looking to add lifelike speech to their applications.

## References

1. [AWS Polly Documentation](https://docs.aws.amazon.com/polly/)
2. [AWS Pricing for Polly](https://aws.amazon.com/polly/pricing/)
3. [Boto3 Library Documentation](https://boto3.amazonaws.com/v1/documentation/api/latest/index.html)
4. [Comparison with Google Cloud TTS](https://cloud.google.com/text-to-speech)
5. [Azure Speech Services Overview](https://azure.microsoft.com/en-us/services/cognitive-services/speech-services/)

## Additional Resources

- [AWS Polly Free Tier Details](https://aws.amazon.com/polly/free-tier/)
- [SSML Tags for Customizing Speech](https://docs.aws.amazon.com/polly/latest/dg/ssml.html)
- [Getting Started with Polly in Python](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/quickstart.html)
- [Real-World Use Cases of AWS Polly](https://aws.amazon.com/polly/resources/)
