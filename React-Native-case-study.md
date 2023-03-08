# React Native Case Study

## Introduction

React Native is a JavaScript framework, made to create natively rendered mobile applications for iOS and Android. It is base on React, Facebook’s JavaScript library for building user interfaces, but instead of targeting the browser, it targets mobile platforms. Similar to React, React Native applications are written using JavaScript and JSX. React Native currently supports both iOS and Android, with the potential to expand to future platforms as well. As of 2023, React Native is the most widely used mobile app development framework. In this case study, we will explore the features and benefits of React Native and examine how it compares to other mobile app development frameworks.

## Brief history

React Native was first released by Facebook as an open—source project in 2015. Open source means that the code is freely available for possible modifications and redistribution. In just a few years, React Native became one of the top solutions used for mobile development. It is today used to power some of the top world's leading mobile apps. React Native was a natural consequence of React, an answer to Facebook's growth and scalability problems. The constant updates to their UI slowed down the platform significantly.

## Using React Native

React Native uses the same fundamental UI building blocks as traditional iOS and Android apps, but with React Native, you write code in JavaScript, and it compiles to native code for each platform. One of the mayor advantages of using React Native is that it allows developers to reuse code between iOS and Android apps, because of the compiled JavaScript code.

### Step 1: Install create-react-native-app

make sure you have node.js and npm installed on your system. Locate where you want to install your react native app. The snippet below will install React Native globally.

```
npm install -g create-react-native-app
```

### Step 2: Create a project

```
create-react-native-app myReactNativeApp
```

### Step 3: enter the new project

```
cd myReactNativeApp
```

### Step 4: run the application

```
npm start
```

This is the installation guide on how to get started with React Native. From here you can locate the app.js and modify the app.


The code bellow creates a new component and returns a line of text that says "Hello World".

```javascript
import React from 'react';
import { View, Text } from 'react-native';

const HelloWorld = () => {
  return (
    <View>
        <Text style={{ fontSize: 24 }}>Hello World</Text>
    </View>
  );
};

export default HelloWorld;
```

The code snippet bellow fetches an API and displays the data as in a JSON format. 

```javascript
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
  }, []);

  return (
    <View>
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
};

export default App;
```

## Strengths

### Cross platform compatable
The native language of IOS apps is written in Swift. Native apps written for Androids platforms is written in Kotlin. One mayor advantage of React Native is that you can write the code once, and deploy it on multiple platforms, including IOS and Android. It is worth noting that some parts of the code need to be platform specific. Writing code that is (for the most part) compatible with both platforms can significantly increase development speed, and lower the cost of development. 

### Large community
React Native has a large community of developers who share knowledge and build libraries. Since React is a popular library for building web applications, it is relatively easy to transition to React Native. 

### Hot reload
React Native offers a feature called hot reloading, which lets developers instantly see the impact of any changes made to the code as the app is running. This saves a considerable amount of time and effort and can contribute to a more positive experience for developers.

### Code reusability
React Native allows developers to reuse code across multiple platforms, making it easier to maintain and update the app.	
Performance 
React Native's performance is one of its most significant advantages. React Native utilizes this with the use of virtual DOM to render components. Traditionally the DOM is manipulated directly when updating which can be slow. In React Natives virtual DOM changes are compared to the previous revision before updating the UI. 

## Weaknesses

### Dependance on Meta
One weakness which can also be considered a strength. Both React and React Native is maintained by the company Meta (formerly known as Facebook). If Meta decided to drop the support for React Native the system could quickly fall behind other technologies. How ever with a large and expanding communities chances are big that some other entity would take over and continue to develop React Native.

### Dependency on third party libraries
React Native relies heavily on third party libraries like Metro, Babel, and AsyncStorage to name a few. These libraries might not always be up to date and can pose a security risk if the libraries contains security exploits or other vulnerabilities. 

### Slower performance
While React Native can be considered to have high performance compared to similar frameworks it may not be as fast as native mobile apps.

### Limited functionalities
React Native may not offer all the functionalities that comes with the native app platforms. This is especially true for larger and more complex apps.  

## Comparison

For this case study we have descided to make a comparison to Flutter.
React Native and Flutter are two popular frameworks for mobile app development. While both offer many benefits, they differ in a few key areas. Here's a comparison between React Native and Flutter:

#### Programming Language: 
React Native uses JavaScript, a popular programming language, while Flutter uses Dart, a language created by Google specifically for app development.

#### UI Components: 
React Native provides a wide range of pre-built UI components that are similar to those found in iOS and Android apps. Flutter, on the other hand, has its own set of customizable widgets that can be used to build apps.

#### Performance: 
Flutter is known for its exceptional performance, as it compiles code directly to native machine code for each platform, while React Native uses JavaScript and a bridge to communicate with native code, which can sometimes lead to performance issues.

#### Development Time: 
React Native's hot reloading feature makes it easier and faster to develop and test apps, while Flutter's widgets allow for more customization, which can take more time to implement.

#### Popularity: 
React Native has been around for longer and has a larger community, which means there are more resources and support available. Flutter, however, is growing rapidly in popularity and has a strong backing from Google.

# Summary
React Native is a JavaScript framework used to create mobile applications for iOS and Android platforms. It is built on top of React, Facebook's JavaScript library, and shares the same UI building blocks. React Native's key advantage is that it allows developers to reuse code between iOS and Android apps. It compiles JavaScript code to native code, which helps in maintaining cross-platform compatibility. React Native also has a large community of developers and supports hot reloading. Additionally, it offers high performance and code reusability.

However, React Native has a few weaknesses as well. One is its dependency on third-party libraries, which may not always be up-to-date and can pose a security risk. Another is its dependence on Meta (previously Facebook), which maintains both React and React Native. React Native may not offer all the functionalities that come with native app platforms, and it may not be as fast as native mobile apps.

When compared to Flutter, React Native is limited in functionalities and can be slower in performance. Flutter, on the other hand, has a faster development cycle, and its widgets offer high customizability. Flutter is also written in Dart, a modern, statically-typed language that has fewer dependencies on third-party libraries.

In conclusion, React Native is a popular framework for developing mobile applications, especially for cross-platform development. It has several benefits, including code reusability and a large developer community. However, it also has a few weaknesses, such as limited functionalities and performance issues. When compared to Flutter, React Native may not be the best option for complex and high-performance applications.


https://fireart.studio/blog/flutter-vs-react-native-what-app-developers-should-know-about-cross-platform-mobile-development/

https://www.oreilly.com/library/view/learning-react-native/9781491929049/ch01.html

https://www.elpassion.com/blog/what-is-react-native-and-when-to-use-it
