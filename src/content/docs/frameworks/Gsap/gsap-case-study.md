---
title: GreenSock Animation Platform
author: Jakob Tidemand [<jakotide>](https://github.com/jakotide)
tags: gsap, animation
---

## Introduction

![image](~/assets/frameworks/gsap/logo.png)

The GreenSock Animation Platform, also known as “GSAP”, is a powerful JavaScript library that enables users to create visually stunning and seamless animations. Created by Jack Doyle, it was initially meant as a small, helpful tool for developers, but has since evolved into one of the most popular libraries in the animation landscape, being utilized on over millions of sites.

With the ability to animate virtually everything Javascript can interact with, like CSS, SVG, strings, colors, objects and much more, GSAP gives designers and frontend developers a creative toolset to create a dynamic and engaging site.

## Features 

GSAP offers a versatile set of features that often make it a preferred choice for developers in the realm of web animation. Some of GSAP's main features include:

#### Animation capabilities:

**- Tweening:** 
Tweening is a technique for creating smooth transitions between two keyframes by creating  intermediate frames between two defined states of an object or element. 

**- Timeline:** 
Timeline is a tool that let's the user control multiple tweens in a sequence, specifying when each animation should start and its duration. 

**- Easing:**
GSAP has a variety of easing functions. Easing controls the acceleration and deceleration of an animation over time, allowing the user to add smoothness and a more natural flow of motion.

**- Staggering:**
Staggering is a technique that uses delays between the start times of individual animations. It adds a timed offset to each element's animation, creating a sequential effect.

#### Framework-agnostic:

Developers can easily incorporate GSAP into their projects, whether they are using React, Angular, Vue.js, or other frameworks, without encountering major integration issues. GSAP uses zero dependencies, making it adaptable across various web development environments.

#### Cross-browser compatibility:

GSAP is compatible with all modern browsers, ensuring consistent behavior for animations regardless of the browser being used.

#### Performance:

GSAP is optimized for performance and is one of the fastest animation tools on the planet. It has a lightweight core library and uses a modular approach for the plugins, meaning you can use them all together or independently, depending on the project's needs. This modular structure allows users to include only the specific features they require, minimizing the file size and optimizing performance.  

#### Responsive and accessible

The gsap.matchMedia() feature allows users to create responsive and accessible animations. By taking into account user preferences, such as those related to reduced motion, it also contributes to a more inclusive and user-friendly experience.

## GSAP vs Framer Motion

Framer motion is a react based animation library. When it comes to choosing the right animation library, GSAP and Framer Motion stand out as popular choices for developers. Let's compare these two libraries based on some important factors:

#### Framework support

**- Framer Motion:**

Framer Motion is primarily built for React, making it an excellent choice for providing easy integration with React applications. It caters specifically to the needs of React developers, offering a syntax that aligns well with the React component structure.

**- GSAP:**

As stated earlier, GSAP takes a broader approach by supporting various frameworks, including React, Vue, and Angular. It is not limited to a specific framework, making it a versatile choice for projects beyond React. 

#### Functionality and flexibility

**- Framer Motion:**

Framer Motion focuses on simplicity and ease of use, it provides built-in animation sequences for layout, gestures, scroll, and transitions. It caters to developers who prefer a straightforward approach to animation implementation. 

**- GSAP:**

GSAP allows developers to create custom animation sequences and manipulate elements using JavaScript. It extends its support beyond React, enabling animations for SVG, canvas, WebGL projects, making it more flexible and  suitable for complex animations.

#### Syntax

**- Framer Motion:**

Framer Motion utilizes a more React-friendly syntax. Developers familiar with React will find it easier to integrate animation using Framer Motion's motion components and animation properties. 
Here is an example of how you would animate a box moving 200px horizontally using Framer Motion. 

```
import { motion } from 'framer-motion';

const FramerMotionExample = () => {
  return (
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: 200 }}
      transition={{ duration: 1 }}
      style={{ width: 50, height: 50, background: 'blue' }}
    >
    </motion.div>
  );
};
```

**- GSAP:**

GSAP uses method-based syntax, where developers use methods like gsap.to() to animate elements. While powerful, it may have a steeper learning curve for those less familiar with JavaScript animation libraries. Here is an example of how you would animate a box moving 200px horizontally using GSAP with React. 

```
import { gsap } from 'gsap';

const GSAPExample = () => {
  useEffect(() => {
    gsap.to('.box', { x: 200, duration: 1 });
  }, []);

  return (
    <div className="box" style={{ width: 50, height: 50, background: 'blue' }}>
    </div>
  );
};
```

#### Performance and size

Both libraries have default frame rates of 60FPS, ensuring the animations will perform well and run smoothly. However, when it comes to bundle size, Framer Motion is slightly larger compared to GSAP. GSAP's smaller bundle size contributes to potentially faster runtime performance.

<br>

In conclusion, the choice between GSAP and Framer Motion comes down to the project requirements and the developer's preference. Framer Motion excels in simplicity and React integration, making it ideal for smaller projects or those focused on React. On the other hand, GSAP's versatility and broader framework support make it a great option for both smaller projects and more complex animations across various frameworks. Both are regarded as easy to learn and have active communities.

## Plugins

One of the main features of GSAP is it's library of plugins. A plugin extends the capabilities of GSAP's core, allowing the core library to maintain a relatively small size. It also let's developers only use these features when they are needed. Some of the plugins are only accessible with a paid membership. 

Some of the plugins are:

#### ScrollTrigger

The ScrollTrigger plugin allow developers to create scroll-driven animations. By defining trigger points based on scroll positions, animations can be precisely timed and triggered as users scroll through a website. This can be used to create parallax effects, reveal content on scroll and more. 

#### SplitText 

The SplitText plugin create animations by breaking text elements into individual characters, words, or lines. This can be used to create effects like letter-by-letter animations, text reveals and typewriter effects.

#### Draggable 

The Draggable plugin enables interactive drag-and-drop interfaces and draggable elements. This can be used to create components such as sliders, draggable cards and much more.

GSAP offer many more plugins and the library is still expanding.

## Getting Started

GSAP can be installed in your project various methods. Here's how to install it via CDN link and npm.

#### CDN

Simply put the CDN link in a script tag in your HTML file. This method is quick and convenient for smaller projects that doesn't rely on many plugins. 

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"</script>

```

If you wanted to add the scrollTrigger plugin you would add a second script tag like this:

```
<script
 src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js">
</script>

```

#### npm

Open your terminal and run the following command:

```
npm install gsap

```

Once installed, you can import GSAP into your JavaScript file:

```
import { gsap } from "gsap";

```

If you want to add a plugin you would import it like this. Here we use scrollTrigger as an example.

```
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

```

After installation you are ready to use GSAP animations. 

## Conclusion

In conclusion, GSAP is a powerful and versatile tool for creating interactive and dynamic animations. 