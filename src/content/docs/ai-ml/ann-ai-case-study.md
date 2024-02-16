

| Title | Author | Tags |
| ----- | ------ | ---- |
| ANN and AI in use with Whisper and GPT | Siw Elin Årolilja Iversen | AI, ANN, Whisper, GPT |

# Table of contents

[Introduction](#introduction)
- [Terminology](#terminology)
- [Brief history](#brief-history)

[Utilizing AI with GPT and Whisper](#utilizing-ai-with-gpt-and-whisper)
- [Installation guide for GPT](#installation-guide-for-gpt)

[AI as a tool for hearing- and vision-impaired users](#ai-as-a-tool-for-hearing--and-vision-impaired-users)
- [Installing Whisper](#installing-whisper)
- [Command line usage](#command-line-usage)

[Using Whisper with GPT](#using-whisper-with-gpt)
[Strengths and drawbacks](#strengths-and-drawbacks-of-chatgpt-and-whisper)
- [Strengths](#strengths)
- [GPT](#chatgpt)
- [Whisper](#whisper)
- [Drawbacks](#drawbacks)
- [GPT](#chatgpt-1)
- [Whisper](#whisper-1)

[Summary and conclusion](#summary-and-conclusion)

[Sources](#sources)

[Additional resources](#additional-resources)
- [Whisper example](#whisper-example)


# Artifical Neural Network in use with AI

## Introduction

Artificial Neural Networks (ANN) represents a fundamental component of both Machine Learning (ML) and Artificial Intelligence (AI) scientific research. These models draw inspiration from the structure and functionality of biological neural networks in the human brain. ANN is widely used in diverse fields, such as pattern recognition, prediction, and optimization. ANN also plays a crucial role in the broader exploration of Artificial General Intelligence (AGI). In the research field of ANN human cognition and philosophy has been used to explore the possible limits of the neural network. 

### Terminology
- **Artificial Intelligence (AI)**: AI refers to the simulation of human intelligence in machines that are programmed to mimic human actions and cognitive functions such as learning, problem-solving, and decision-making.
- **Machine Learning (ML)**: ML is a subset of AI that focuses on developing algorithms that allow computers to learn from and make predictions or decisions based on data. It involves creating models that improve automatically through experience.
- **Deep Learning (DL)**: Deep learning is a subfield of machine learning that uses artificial neural networks with multiple layers to model and process complex patterns in large amounts of data. It has shown remarkable success in tasks such as image recognition, natural language processing, and speech recognition.
- Artificial General Intelligence (AGI)** refers to AI systems that possess the ability to understand, learn, and apply knowledge across a wide range of tasks similar to human intelligence. Unlike narrow AI, which is designed for specific tasks, AGI aims to exhibit general cognitive abilities comparable to those of humans.
- **Artificial Neural Networks (ANN)** is a computational model inspired by the structure and function of biological neural networks in the human brain. It consists of interconnected nodes, or artificial neurons, organized in layers. Each neuron receives input signals, processes them through an activation function, and produces an output signal that may serve as input to subsequent neurons.

### Brief history

-	1940s-1950s: Foundations of AI laid; McCulloch-Pitts neuron proposed.
-	1950s-1960s: Perceptrons developed by Rosenblatt.
-	1970s-1980s: AI Winter; backpropagation algorithm introduced.
-	1990s-2000s: Deep learning emerges, dominates; CNNs and RNNs excel.
-	2010s: GPT series released, revolutionizing natural language processing.
-	2020s: Continued AI advancements; focus on ethics and societal impacts.

## Utilizing AI with GPT and Whisper

First, AI does not have consciousness, and without consciousness one can say that the AI does not make intelligent decisions. AI, due to its nature from ML is logical-driven decision-making platform. The AI model is based on algorithms and data made by humans, and current modern AI is based on chance, luck, and guesswork algorithms to create a plausible response to the respondent. Despite these limitations, AI holds immense potential across various domains and platforms, such as automating routine tasks to assisting in complex problem-solving, AI systems are transforming the development industry and revolutionizing the way we interact with technology. By harnessing the power of ANN within AI frameworks, researchers and developers can continue to push the boundaries of what is possible.

One of the leading AI tools in use today is OpenAI’s ChatGPT, which stands for Generative Pre-trained Transformer. Developers now have the option to integrate ChatGPT. This integration allows for various uses, including assisting customers with support and services even before they are connected to live customer support agents. For instance, it can help understand customer queries, offer relevant product recommendations, or troubleshoot common issues. Ultimately, this enhances user experience by providing personalized assistance and reducing wait times for support.
According to OpenAI, their API may be used to virtually any task one may need, such as: grammar correction, parse unstructured data, natural language to SQL and explain code, to name a few functions.

### Installation guide for GPT
Installing the API is quick and easy, and the developer may pick between three different options such as curl, Python and Node.js. Here I will use Node.js as an example:

The installation of the ChatGPT-assistant is simple itself:

`npm install --save openai`

Example prompt to test the artificial assistant:
```
import OpenAI from "openai";
const openai = new OpenAI();

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "You are a helpful assistant. Your only role is to summarize this student’s paper." },
      { role: "user", content: "This is the text that must be summarized: [This is where you will include the whole paper, or parts of the paper.]" }
    ],
    model: "gpt-3.5-turbo", 
  });

  console.log(completion.choices[0].message.content);
}
main();
```

In this code snippet we can see that the developer has given ChatGPT a role and what model to use. The model in the example prompt is the GPT-3.5-Turbio version, which only has its library updated to September 2021. There are different versions of the ChatGPT in circulation, however the ChatGPT-4 version is premium use only, and is not being used in this paper, only the ChatGPT-3.5 version.

Utilizing an artificial intelligent assistant on websites may have its uses, it may be used to auto-complete search terms and give search suggestions to customers, enhancing their experience. It may also be used to show similar products related to the specific items they’re searching for.

## AI as a tool for hearing- and vision-impaired users
AI is a powerful tool for people with disabilities such as hearing- and/or vision impairments. It may be used to transcribe from speech to written text for the hearing-impaired user. 
Whisper is a popular tool for this usage. According to OpenAI: 

>“We’ve trained and are open-sourcing a neural net called Whisper that approaches human level robustness and accuracy on English speech recognition.” 

Whisper is a tool that utilizes ANN and is currently understanding about 90+ languages. It can translate from different languages into English, and it can also transcribe speech-to-text. However, Whisper has its drawbacks that it needs to be installed locally on the machine, with using Python or similar programming languages, which may be a bit difficult to start to use for new users that are not used to programming. In educational settings or live events, Whisper API can be employed to provide real-time captioning for individuals with hearing impairments. For instance, during a lecture or conference, Whisper API can transcribe the speaker's speech into text displayed on screens or transmitted directly to users' devices, allowing them to follow along with the conversation or presentation. 

### Installing Whisper

When installing Whisper, it's required to use CLI or Terminal with Python, it also requires ffmpeg and rust.

`pip install -U openai-whisper`
To install OpenAI's Whisper.

Installing rust and ffmpeg on Windows and Mac

```
# on MacOS using Homebrew (https://brew.sh/)
brew install ffmpeg

# on Windows using Chocolatey (https://chocolatey.org/)
choco install ffmpeg

# on Windows using Scoop (https://scoop.sh/)
scoop install ffmpeg

# installing rust
pip install setuptools-rust
```
#### Command line usage

The following command will transcribe speech in audio files, using the `medium` model:

`whisper audio.flac audio.mp3 audio.wav --model medium`

The default setting (which selects the `small` model) works well for transcribing English. To transcribe an audio file containing non-English speech, you can specify the language using the `--language` option:

`whisper japanese.wav --language Japanese`

Adding `--task` translate will translate the speech into English:

`whisper japanese.wav --language Japanese --task translate`

Run the following to view all available options:

`whisper –help`

Transcriptions in Whisper is usually performed with Python:

```
import whisper

model = whisper.load_model("base")
result = model.transcribe("audio.mp3")
print(result["text"])
```

The `transcribe()` method «listens» to the file then transcribes the audio. 

Example usage of `whisper.detect_language()` and `whisper.decode()`:

```
import whisper

model = whisper.load_model("base")

# load audio and pad/trim it to fit 30 seconds
audio = whisper.load_audio("audio.mp3")
audio = whisper.pad_or_trim(audio)

# make log-Mel spectrogram and move to the same device as the model
mel = whisper.log_mel_spectrogram(audio).to(model.device)

# detect the spoken language
_, probs = model.detect_language(mel)
print(f"Detected language: {max(probs, key=probs.get)}")

# decode the audio
options = whisper.DecodingOptions()
result = whisper.decode(model, mel, options)

# print the recognized text
print(result.text)
```

## Using Whisper with GPT

Whisper and ChatGPT collaborate to enhance AI applications, with Whisper's speech-to-text feature providing valuable input for ChatGPT's analysis. While ChatGPT may not directly respond to Whisper's transcriptions, they serve as a foundation for understanding user queries and triggering appropriate actions or providing contextually relevant information. This seamless integration enables users to interact with AI systems seamlessly, whether through speech or text inputs.

Furthermore, Whisper's transcriptions contribute to the improvement of ChatGPT's language understanding over time, facilitating more accurate responses. Their collaboration allows for multimodal input processing, accommodating users' preferred modes of communication and enhancing overall user experience. In summary, Whisper and ChatGPT work together to make AI interactions more flexible and inclusive, leveraging Whisper's speech-to-text capabilities to enhance ChatGPT's functionalities.

## Strengths and drawbacks of ChatGPT and Whisper
### Strengths
#### ChatGPT
-	Natural language understanding: ChatGPT excels in generating human-like text responses, suitable for various conversational applications.
-	Versatility: It can be applied to tasks like text summarization, grammar correction, and natural language to SQL conversion.
-	Ease of integration: Simple integration through APIs for languages like Python and Node.js.

#### Whisper
-	Accurate speech recognition: Provides human-level accuracy in English speech recognition, enhancing accessibility for hearing-impaired users.
-	Multi-language support: Supports over 90 languages, facilitating diverse applications.
-	Real-time captioning: Enables real-time captioning in educational and live event settings.

### Drawbacks
#### ChatGPT
-	Lack of context awareness: May produce irrelevant or inaccurate outputs due to limited context understanding.
-	Dependency on training data: Performance relies heavily on the quality and diversity of training data, potentially leading to biased responses.
-	Potential for misuse: Without oversight, can generate misinformation or unethical content, posing risks to users.

#### Whisper
-	Complex installation: Requires local installation, which may be challenging for non-technical users.
-	Limited integration: Integration options are more restricted compared to ChatGPT.
-	Privacy concerns: Despite data deletion policies, privacy concerns may arise during transcription processes.

# Summary and conclusion

Artificial Neural Networks (ANN) are fundamental to Machine Learning (ML) and Artificial Intelligence (AI), inspired by how our brains work. They're used in various tasks like recognizing patterns, making predictions, and optimizing processes. ANN-powered tools like ChatGPT and Whisper are great examples. ChatGPT helps with different tasks using natural language, while Whisper does real-time captioning for people with hearing impairments.

ANNs have their pros and cons. They're versatile and accurate but also raise privacy concerns and rely heavily on training data.

Overall, ANN technology keeps pushing AI forward, changing industries and how we interact with machines. ChatGPT and Whisper show how ANN can improve user experiences in different ways.


# Sources

[**Introducing ChatGPT and Whisper API.** (2023).](https://openai.com/blog/introducing-chatgpt-and-whisper-apis (fetched 08.02.2024.))

[**Introducing Whisper.** (2021).](https://openai.com/research/whisper (fetched 12.02.2024.))

**Iversen, S. E. Å.** (2023). Final exam in Cognitive Science 101, University of Bergen. (Accessed on request.) (fetched 16.02.2024).

[**Open AI documentation.** (2024).](https://platform.openai.com/docs/overview (fetched 10.02.2024))

[**Whisper Installation.** (2023).](https://github.com/openai/whisper?tab=readme-ov-file (fetched 16.02.2024))

## Additional resources
### Whisper example
[**Whisper installation and usage of audio-transcript.** (2023).](https://www.youtube.com/watch?v=J94DAKH3rM8 (fetched 16.02.2023))


