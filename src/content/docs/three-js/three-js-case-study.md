---
title: Three.js Case Study
author: Marius Kjesbu Bjeglerud, Weronika Karczmarczyk & Alex Storm Skoglund
tags: three.js, case study, Framework
---

## Introduction

Three.js is a powerful, cross-platform JavaScript library used for creating and displaying 3D graphics in web browsers using WebGL. Three.js provides different features for building complex 3D scenes including rendering, lighting, shadows, animations and various types of materials and geometrics.
Three.js can be used to make 3D models, animations and even entire virtual worlds, the library supports a wide range of file formats such as (.glft and .obj) so its easy to import different 3D assets.
The library has a lot of documentation and is being updated often by a active community, making Three.js an excellent tool for both beginners and experienced developers in the field of 3D development.
The first bigger companies that started using Three.js was Google Search and apple also used Three.js to render many of their product pages [wikipedia.org].

## Brief History

- 2002: The idea of Three.js was started by Ricardo Cabello(Mr.doob) with his involvement with the demoscene. (The demoscene is an computer art subculture focused on producing self-contained programs that produce audiovisual presentations)
- 2009: The project was ported to JavaScript from ActionScript. (it was called Three.as before porting over to javascript)
- 2010: Three.js was first released by Cabello with three different renderes (DOM, SVG and HTML canvas).
- 2011: WebGL 1.0 was released and Joshua Koo came on board and made his first Three.js demo displaying 3D text.
- 2012: Three.js gained popularity with their newly released official website, which included documentation and examples.
- 2014: Three.js began supporting VR devices as WebVR started gaining attention.

[github.com]

## Main Features

Scenes Graph : Scenes are spatial containers where all 3D objects, cameras, and lights are placed. A scene is where you organize all the content you want to render. This feature allows to create complex scenes, as objects can be grouped and manipulated together.

Camera Controls : Cameras define the viewpoint from which we observe the scene. Three.js offers various types of cameras such as PerspectiveCamera, CubeCamera, StereoCamera that allow rendering the scene from different perspectives

Renderers : The engines that are responsible for drawing the 3D visuals on the screen. The most commonly used is WebGlRender that uses WebGl technology . Enables the rendering of complex 3D scenes in browsers in an efficient and device-compatible way to enhance visual quality.

Geometrics : Provides a wide range of geometric shapes of 3D objects, such as cubes, spheres, or more complex models.

Materials : Materials define how 3D objects will look by specifying their color, texture, transparency, and how they interact with light.

Animation Systems : Supports complex animations and integrates with physics engines to stimulate realistic movements and interactions in 3D space

Lights and Shadows: Supports different lighting and shadow casting allowing to create realistic lighting effects.
[threejs.org]

### Three.js feature table:

| Scenes Graph | Two spatial objects rotate around each other, mimicking the Sun-Earth system, showcasing how scene graphs can represent complex spatial relationships |
https://threejs.org/manual/examples/scenegraph-sun-earth.html

| Camera Controls | Two objects placed at the center scene with ability to zoom in and out, demonstrating how camera perspective controls work in 3D space.|
https://threejs.org/manual/examples/cameras-perspective.html

| Renderers | Example of rendering animation using skinning and blending, showing how renders handle different animation techniques in Three.js. |
https://threejs.org/examples/#webgo_animation_skinning_blending

| Geometry | Six geometric objects levitate in synchronized pace and direction demonstrating various types of parametric geometry available in Three.js. |
https://threejs.org/examples/#webgl_geometries_parametric

| Materials | A large object is divided into different colors which change at the set pace. The texture also changes, interacting with light to demonstrate the dynamic capabilities of materials. |
https://threejs.org/examples/#webgl_framebuffer_texture

| Animation System | This example represents an animation system using dynamics, instancing, showing various movements and interactions in 3D space.|
https://threejs.org/examples/#webgl_instancing_dynamic

| Lights and Shadows| An object creates shadows as it interacts with lights and moves demonstrating the effects of lighting and shadows in a 3D environement. |
https://threejs.org/examples/#webgl_geometry_csg

[medium.com] [codeparrot.ai] [threejs.org]

## Market Comparison

While Three.js initially appears to be distinctive, there exist several alternative frameworks for JavaScript and web development that integrate 3D models to create interactive and visually appealing designs.

Some of these frameworks have smaller communities and are still in the early stages of development. For instance, Whitestorm.js is a newer framework that incorporates the latest ECMAScript features, but it hasn’t gained a huge following yet [slant.co].

While only having a small community, Babylon.js, is one of the main competitors to Three.js and offers support for Apple's AR goggles. Babylon.js presents a more professional appeal and delivers visual fidelity that surpasses both Three.js and Whitestorm [slant.co] [babylonjs.com].

PlayCanvas, a third competitor, claims to have excellent cross-platform compatibility. It boasts similar features as both Three.js and Babylon.js. It provides users with many tools geared towards game development, although some of its features are hidden behind a paid subscription [slant.co] [playcanvas.com].

One of Three.js’ main strengths appears to be the great documentation provided by the developers and also its large number of official plugins and tutorials [slant.co].

###The following table compares Three.js with its main competitors across various key points:

| Three.js     | Babylon.js | Whitestorm | PlayCanvas |
| ------------ | ---------- | ---------- | ---------- |
| Physics-     | Physics-   | Physics-   | Physics-   |
| engine:No\*  | engine:Yes | engine:Yes | engine:Yes |
|              |            |            |            |
| Community:   | Community: | Community: | Community: |
| Large        | Small      | Small      | Large      |
|              |            |            |            |
|              |
| Features:    | Features:  | Features:  | Features:  |
| Rich         | Rich       | Medium     | Rich\*\*\* |
|              |            |            |            |
|              |
| Fidelity:    | Fidelity:  | Fidelity   | Fidelity   |
| Mid/high\*\* | High       | low        | High       |
|              |            |            |            |
| License: N   | License: N | License: N | License: Y |

Y = Yes, N = No
\*Three.js does not include its own physics engine, but is fully compatible with external physics frameworks for JavaScript, as explained in this article: "https://en.threejs-university.com/2021/08/24/using-physics-in-three-js-with-ammo-jsintroduction/" [threejs-university.com].

\*\* When comparing Three with Babylon, the level of fidelity seems a little lower.

\*\*\* PlayCanvas offers great cross-platform compatibility[slant.co].

NB: PlayCanvas Offers a free license, as long as the project-size is kept below a certain size [playcanvas.com].

### Market Comparison Conclusion

Each of the aforementioned frameworks has its own strengths and weaknesses when compared to each other. The choice of which framework to use for displaying three-dimensional content to an audience is ultimately up to you. However, Three.js is a strong contender due to its large community, free-to-use features, and official plugins.

## Getting Started

## Getting started and setting up the project.

- At least one HTML file and one JavaScript file is needed
- According to the Three.js documentation (threejs.org), in addition to the mentioned files, the correct project setup should also include a "static" folder named "/public" where media content, such as 3D models, should be placed.

## Installing Three.js

- Installation can be done either by using NPM in your code editor, or via a CDN link.
- The documentation for Three.js suggests that most users use a build tool for the development, such as Vite. (threejs.org, vitejs.dev).
- Vite needs to be installed as a dev dependency, while Three.js needs to be installed as a dependency.
  This is done using the commands "npm install --save three" for Three.js and “npm install --save-dev vite” for vite.
- In order to run vite, you need to type "npx vite" in the command prompt of your code editor (threejs.org).

## Installing without build tools

-The documentation also suggests that you can setup Three.js without using a build tool, only by using a CDN link in your HTML files head tag. But this setup is a little more time consuming and requires you to run a local server.
-The local server can be initialized using the command "npx serve".
-Finally, the documentation states that version consistency is a must for both CDN and NPM (threejs.org).

## Conclusion

Frameworks like Three.js provide users with numerous opportunities to create captivating and interactive web designs that push the boundaries of creativity. With its extensive library of plugins and tutorials, Three.js is both user-friendly and capable of producing advanced renderings using various technologies. Since its inception in 2002, it has obtained a large user base, including several prominent tech companies. Although Three.js may initially seem less impressive than some of its main competitors, its real strength lies in its large community, numerous plugins, and excellent documentation.

## References

- [threejs.org](https://threejs.org)
- [vitejs.dev](https://vitejs.dev/)
- [slant.co](https://www.slant.co/options/11349/~whitestorm-js-review)
- [babylon.js] (https://www.babylonjs.com/)
- [threejs-university.com](https://en.threejs-university.com/2021/08/24/using-physics-in-three-js-with-ammo-jsintroduction/)
- [playcanvas.com](https://playcanvas.com/)
- [github.com](https://github.com/mrdoob/three.js/issues/1960)
- [medium.com](https://medium.com/@CodeWithMasood/getting-started-with-three-js-codewithmasood-e74890a8b959)
- [codeparrot.ai](https://codeparrot.ai/blogs/exploring-threejs-for-3d-web-development)
- [wikipedia.org](https://en.m.wikipedia.org/wiki/Three.js)
