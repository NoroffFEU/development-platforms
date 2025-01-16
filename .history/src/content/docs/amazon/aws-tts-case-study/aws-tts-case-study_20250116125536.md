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
   - [Using Polly Through the AWS Console](#2-using-polly-through-the-aws-console)
   - [Access Polly via the API](#3-access-polly-via-the-api)
6. [Conclusion](#conclusion)
7. [References](#references)
8. [Additional Resources](#additional-resources)

## Introduction

AWS Polly is a cloud-based text-to-speech service provided by Amazon Web Services (AWS). It enables developers (and to a limited extent non-developers) to convert text into lifelike speech, supporting a wide range of languages and voices. Polly is designed to make applications more engaging by adding natural-sounding speech capabilities, useful for applications such as eLearning, accessibility, voice assistants, and more.

This case study explores Polly's capabilities, its position in the market, and how developers and hobbyists can get started with it.

## Brief History

AWS Polly was introduced in **2016** as part of AWS's broader suite of AI-driven services. The service was created to address the growing need for high-quality, automated text-to-speech solutions across industries. Over time, Polly has evolved to include neural text-to-speech (NTTS) technology, offering more realistic and natural voices compared to traditional speech synthesis.

## Main Features

### 1. Wide Variety of Voices and Languages

- **Engine / TTS Model**

  - Standard - Produces basic, robotic-sounding speech
  - Neural - Offers lifelike and natural-sounding speech.
  - Long-Form - Optimized for sustained, natural speech over long durations - like audiobooks.
  - Generative - Advanced voices with expressive capabilities, currently limited to select regions and languages.

- Languages currently supported by Generative AI:

  - English (most common dialects)
  - Spanish
  - French
  - German
  - Italian
  - Hindi

- Speech parameters are adjustable across all engines, including pitch, speed, and volume. This requires SSML (Speech Synthesis Markup Language) to customize the parameters. This currently limits its accessibility for non-developers. <br><br>

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

- **Free Tier Availability**:
  AWS Polly offers a generous free tier, which includes:

  - **5 million characters per month** for Standard voices.
  - **1 million characters per month** for Neural voices.
  - The free tier is available for the first **12 months** after activating Polly on your AWS account.

- **Generative Voices Availability**:

  - Generative Voices are currently only available in certain regions.

- **Pay-per-Use Pricing**:
  For usage beyond the free tier, the following rates apply (as of the latest AWS documentation):

  - **Standard Voices**: $4.00 per 1 million characters.
  - **Neural Voices**: $16.00 per 1 million characters.
  - **Long-Form NTTS Voices**: $100 per 1 million characters.
  - These prices are subject to change, so users should check the [AWS Pricing Page](https://aws.amazon.com/polly/pricing) for the latest information.

## Market Comparison

### AWS Polly vs. Google Cloud TTS

- **Voice Quality**: Google Cloud TTS is known for its WaveNet voices, which compete with Polly's neural voices.
- **Customization**: Polly's SSML and custom lexicons provide flexibility, but Google TTS offers similar features.
- **Pricing**: AWS Polly is generally more cost-effective for small-scale applications, priced at **$4.00 per 1 million characters**, compared to Google TTS’s similar pricing tiers.

### AWS Polly vs. Azure Speech Services

- **Custom Voices**: Azure Speech Services offers custom voice training, which Polly lacks.
- **Integration**: Polly integrates seamlessly with other AWS services, whereas Azure's TTS ties into Microsoft's ecosystem.

## How to Get Started with AWS Polly

### **1. Set Up AWS Account**

After signing up for AWS, you can use Polly in two ways: via the **AWS Console UI** or programmatically through the **API**.

---

### **2. (For hobbyists) Using Polly Through the AWS Console**

- The AWS Console provides an intuitive UI to experiment with Polly without writing code.
- **Steps**:
  1. Navigate to Polly in the AWS Console.
  2. Enter your text in the input box.
  3. Select a voice and language from the dropdown menu.
  4. Click **Preview** or **Download** to access the audio file.

**Best For**:

- Non-developers or those exploring Polly for quick use cases (e.g., creating audio clips manually).
- Educational purposes or prototyping.

---

### **3. Access Polly via the API (For developers) **

For developers, the API provides programmatic access to Polly’s features.

- **Advantages**:

  - Automate text-to-speech generation.
  - Real-time audio streaming.
  - Generate large-scale audio content for applications.

- **Best For**:

  - Scalable applications.
  - Projects requiring automated or programmatic text-to-speech processing.

---

### Setup Polly for API development

- Install the AWS SDK for your programming language of choice (e.g., Boto3 for Python).
- Obtain your AWS access key and secret key for authentication.

### **4. Example Code**

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
