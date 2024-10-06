
# Title: A case study of Astro 🚀
Author: Anine Teigland, github.com/AniTei


## Introduction

This is the course assignment for the course Development Platforms at Noroff, fall 2024. It is a case study looking at the tool Astro. I first heard of Astro while paging through stories on Instagram. One of the accounts I follow had put out something about building websites with Astro. This made me curious, and I figured this assignment would be perfect for exploring this tool further.

In this case study I will be going over the history of Astro briefly. I will also present some of its main features, what it actually does, and why it’s useful. I will also compare it to some of the other tools on the market that are similar, or aim to solve some of the same problems. I have also included how to get started. Finally there is a conclusion summarizing the case study, as well as some of my thoughts on this assignment.

### What is Astro?
Before moving on to the details, I have included a short paragraph of what Astro actually is. 

In short Astro is a website build tool, it is a JavaScript web framework for building content-driven websites. It aims to improve the developer experience (DX), while creating a lightweight output. It achieves this by improving website performance by rendering components on the server, sending lightweight HTML to the browser without unnecessary JavaScript overhead. Astro is also free, and an open-source software. (astro.build; https://github.com/withastro/astro) 

## Brief history

Astro is a relatively new tool, so it’s history is also relatively short. I have chosen to structure its history around the different versions released. 

- Earliest private Beta: Astro is built by the team of open source developers behind Snowpack and Skypack, with additional contributions from the community. (Schott and Edelstein, 2021; astro.build/blog/introducing-astro/). Astro is also built on Snowpack. 
- 2021, June 08, Fred Schott and Nate Moore publish the blogpost Introducing Astro: Ship Less JavaScript, (on astro.build).
- 2022, April 04, Fred Scott and Nate Moore publish the blogpost Astro 1.0 Beta Release. The beta version (on astro.build). They write:
	- It should be impossible (or at least very difficult) to build a slow site in Astro. By default, Astro helps you build sites that ship zero JavaScript to the browser. Astro’s built-in component syntax generates static HTML as much as possible, only sending down JavaScript for any interactive parts of your page. 
We designed Astro’s language syntax to be simple, with the hope that anyone could pick it up regardless of background or skill level.
The web deserves a framework-agnostic foundation, Astro supports all of the popular UI frameworks
- 2022, August 09, Fred Schott publishes the blogpost Astro 1.0. (on astro.build)
Astro renders your entire site to static HTML during the build. The result is a fully static website with all JavaScript removed from the final page. […] just static HTML that loads as fast as possible in the browser […].
- 2023, January 24, Astro 2.0
Hybrid rendering. Hybrid rendering gives you the choice to prerender certain pages without giving up your deployed server. Prerendering builds pages ahead-of-time so that all of those requests load instantly.
- 2023, August 30, Astro 3.0
Image optimization is now stable in Astro 3.0 and available in all projects. (Also highlighted by Kramer 2024)
View Transitions, new platform APIs that unlock native browser transition effects between pages. Historically this has only been possible in Single Page Applications (SPAs).
- 2023, December 05, Astro 4.0
Dev tool bar
Redesigned documentation
Here we see the developer experience being prioritized, this has been a focus from the first beta version, (framework-agnostic, simple syntax not demanding great background skills,) this is a continuation of prioritizing developer experience.   
-2024, September 17, Astro 5.0 Beta Release
Astro 5.0 introduces the Astro Content Layer
Server islands are a new primitive coming to Astro 5 allowing you to defer the rendering of dynamic content until after the initial page load.
In Astro 5, it is now easier […] to create a website with both static, cached, performant pages and rendered on-demand, dynamic pages.
- Currently: the the most recent version is 4.15.11, and the 5.0 Beta version has been released

To summarize Astro started as a simple tool for making static websites, but has grown to do a lot more, similar to other tools like Next.js (Kramer, 2024).


## Main features

Like previously mentioned the main problem Astro seeks to solve is websites being slow and heavy. By using server side rendering, turning Javascript into static HTML, Astro makes content focused websites fast and light. This is accomplished with features like island architecture, partial/ gradual hydration, less JavaScript, it is also framework-agnostic. I will describe these features more closely. There are also more features like components, view transitions, image optimization, hybrid rendering, themes, and more, but I will not be going into more detail for them because of the scope of this assignment.


### Zero JavaScript by Default

Astro uses what they call zero JavaScript by default, this means that components don’t render on the client, but to HTML using server-side rendering (MacManus). In other words, the webpage is created ahead of time, and therefore don’t need JavaScript to work, this way pages can show up super fast(Kramer, 2024). You can still use JavaScript to create the website, but the default for Astro is to deploy the site with zero JavaScript, having transcribed it (Palmowski, 2023). The result is exceptionally fast loading, making it ideal for static site generation, while still allowing for dynamic content when needed (Sharif, 2024).


### Island architecture

The island architecture can be said to be the heart of Astros design, allowing developers to create components that can be rendered as HTMS, but that also can be enhanced with JavaScript (Sharif, 2024). These components can be based on something created in a UI-framework, and Astro turns it into an island (Palmowski, 2023). These islands lets you add bits of interactivity to your pages over time, you can choose to make some parts interactive. This keeps things lightweight, because only the parts that need to be interactive will use JavaScript (Kramer, 2024). In other words, you get the best of both worlds. 

### Framework-agnostic

As already mentioned islands can be based on something created in a UI-framework. What framework is up to the user though, and this possibility for the user to choose, is what makes Astro agnostic in terms of UI-framework. This means you can make use of components already written in other frameworks (MacManus), this allows developers to leverage existing expertise because of an adaptable development environment(Sharif). It is also possible to use multiple frameworks at once (Palmowski). Frameworks mentioned are React, Vue, Svelte, Solid, Tailwind, MDX (MacManus; Sharif).

### SEO

There has also been speculation on wether Astro improves SEO, but I have not been able to find anything definite, the speculations imply fast HTML-based sites aid SEO, but how search engines find and display results is also not set in stone (MacManus, Ohans, Sharif).

### DX

In addition to these features (and others not elaborated on here), the creators of Astro has had a user centered approach from the start. They have not only focused on what the software can do, but how it feels using it. 

In their first blogpost they quote Jeff Atwood «A well-designed system makes it easy to do the right things and annoying (but not impossible) to do the wrong things». Astro’s goal has been for sites to be built «fast by default», while also delivering a familiar, modern developer experience (https://astro.build/blog/introducing-astro/).

In my time learning about Astro, several blogposts, podcasts, and videos, has mentioned DX (see for example Ohans, MacManus, yt?), that is the experience of the developer. This was a new term for me, but I can definitely appreciate the idea of a software not only being able to do specific things, but also making the doing feel simple for the developer. Several sources pointing out the developer experience has been one of the impressions that has stuck with me.


## Market comparison


### Next

In several of the sources I have used, Astro is compared to Next.js, sometimes as an afterthought, and sometimes thoroughly and systematically. Both Astro and Next are open-source projects with significant communities connected to them, and modern JavaScript frameworks designed for creating performant user interfaces. An obvious place they differ is that Astro started out as a static site generator, and Next began as a framework for building rich applications with state management capabilities. While they have both changed over the years, considering the outset, might help us make a choice when deciding on what to use for a specific project and its needs. (Ohans, 2023).

The main difference is maybe that Next requires JavaScript and Astros default is Zero JavaScript. Astro also has its island architecture and partial hydration. And while Astro is UI-famework agnostic, Next uses primarily React. Astro is the fastest growing of the two, but Next is still the biggest one, and has been around for longer. 


### Gatsby

Gatsby and Astro have in common that they are both static site generators. Where Gatsby and Astro differ is in how they handle rendering and interactivity: Gatsby generates static HTML at build time, then hydrates into a Single Page Application (SPA) using React, with navigations being handled in JavaScript.  Astro is designed as a Multi-Page Application (MPA) by default, shipping minimal JavaScript and delivering static HTML via full page reloads. (Wenger, 2024)

One of the first videos I watched on Astro was Why I Switched To Astro But You Probably Shouldn’t by Kyle Cook (2022) behind the YouTube channel Web Dev Simplified. While the title is a bit click-bait-y, his point is that at the time Astro wasn’t actually released as a stable version. He had an established blog using Gatsby, but he kept running into problems with Gatsby, because he used so much custom code. While this might not be a problem for most users, it tells a story of flexibility, or rather lack thereof. 

A quick googling of Astro vs Gatsby gives mostly results telling about transitioning from Gatsby to Astro. While this in itself is no proof of one being better than the other, it seems to be a tendency that users are not quite happy with Gatsby, and Astro stands out as a good alternative. 


### Others

Other tools mentioned in comparison to Astro are Nuxt.js, Remix, SvelteKit, Jekyll, and Wordpress.


## Getting started

In order to use Astro you need to install it and set it up. The documentation is very helpful, but I will go over the basics here. 

Go to https://docs.astro.build/en/install-and-setup/ for more information. Sharif (2024) also includes a very recent, and detailed guide for getting started, with images.

A couple of things you need sorted before you can add Astro is a code editor, terminal access, and node.js.

The fastest way to start a new Astro project from scratch is with the create astro command in the CLI. It will walk you through the steps for setting up you new project, and you can choose a starter template. 

To start a new project run the command:

	npm create astro@latest

The CLI wizard will help you set everything up. You can now start the Astro dev server and see a live preview of your project while you build.

The built-in development server has everything you need for project development. The astro dev CLI command will start the local development server so that you can see your new website in action for the very first time. Every starter template comes with a pre-configured script that will run astro dev for you. 

To make changes to your project, open your project folder in your code editor. Working in development mode with the dev server running allows you to see updates to your site as you edit the code.

You can also start a new astro project based on an official example or the main branch of any GitHub repository by passing a --template argument to the create astro command:

	# create a new project with an official example
	npm create astro@latest -- --template <example-name>


	# create a new project based on a GitHub repository’s main branch
	npm create astro@latest -- --template <github-username>/<github-repo>



## Conclusion

When starting this case study, my knowledge about Astro was very limited, This project started with me stumbling upon an unfamiliar tool in someones instagram stories, and has led me to more curiosity. 

In conclusion Astro is a framework that has gained many users through the last couple of years, and continue to gain users (Sharif, 2024). As presented above, one of its main features is how lightweight it is able to make a website, by utilizing its islands architecture. I have found it very interesting to explore this tool, in part because reading about and discovering a new tool in itself is interesting, but mostly because Astro seems to be an emerging tool that keeps expanding.

I also think they have a good focus with having the developer in mind, not just what the software can do, but how it feels for the developer to make it do something. Several sources pointing out the developer experience has been one of the factors that has made me want to explore the tool further, in a more practical way, in the future.


## Resources

Astro website:
https://astro.build/

Github withastro:
https://github.com/withastro/astro

Astro Docs:
https://docs.astro.build/en/getting-started/

Cook, K. (2022, February 12) *Why I Switched To Astro But You Probably Shouldn’t.* Web Dev Simplified, YouTube. https://jwn.gr/posts/migrating-from-gatsby-to-astro/ 

Kramer, N. (2024, Mars 27) *Get to know Astro: The web framework for content-driven websites.* daily.dev. https://daily.dev/blog/get-to-know-astro-the-web-framework-for-content-driven-websites

MacManus, R. (2024, March 07) *Astro’s Journey from Static Site Generator to Next.js Rival.* Thenewstack. https://thenewstack.io/astros-journey-from-static-site-generator-to-next-js-rival/ 
 
Ohans, E. (2023, November 17) *Astro adoption guide: Overview, examples, and alternatives.* LogRocket. https://blog.logrocket.com/astro-adoption-guide  

Palmowski, M (2023, June 14, updated October 19) *What is Astro? An Introduction to the Popular Static Site Generator.* Kinsta. https://kinsta.com/blog/astro-js/

Schott F. and Edelstein, B. (2021, June 25) *Founder Friday: Fred Schott of Astro.* PodRocket. https://open.spotify.com/episode/1EfcigVHrOxsEMmbsjo56f

Sharif, M. (2024, updated September 01) *What is Astro? A Step-by-Step Tutorial for Beginners in 2024.* Themefisher. https://themefisher.com/astro-js-introduction

Wenger, J. (2024, September 10), *From Gatsby gridlock to Astro bliss: my personal site redesign.* jwn.gr https://jwn.gr/posts/migrating-from-gatsby-to-astro/ 


## Additional Resources

Follow the development of astro on their blog:
https://astro.build/blog 

Astro on PodRocket:
https://open.spotify.com/playlist/1TjZr2fei4ens5ciI1bjNE?go=1&sp_cid=49bbc8791200eda4993dc12854c105b0&t=4&utm_source=embed_player_p&utm_medium=desktop&nd=1&dlsi=49c1f6e9e5174f17 

Basra, A. (2023, April 10) What is Astro.build and why is it the future of web development. LinkedIn. https://www.linkedin.com/pulse/what-astrobuild-why-future-web-development-aleksandar-basara

Quick, J. and Goodman, D. (2024, January 11) Astro: Do You Even Need JavaScript? with James Quick. This Dot Media, Youtube. https://www.youtube.com/watch?v=2RL21V48Xqg
