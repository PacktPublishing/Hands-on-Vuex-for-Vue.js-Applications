# About

This is the code repository for [Hands-On Vuex for Vue.js Applications [Video]](https://www.packtpub.com/web-development/hands-vuex-vuejs-applications-video?utm_source=github&utm_medium=repository&utm_campaign=9781789952469), published by [Packt](https://www.packtpub.com/?utm_source=github). It contains all the supporting project files necessary to work through the video course from start to finish.

# Getting Started

## Prerequisites

- Node.js and NPM, preferably newer versions. Installations instructions [here](https://nodejs.org/en/download/).
- An up-to-date browser like [Chrome](https://www.google.com/chrome/) or [Firefox](https://www.mozilla.org/en-US/firefox/).
- An editor or IDE (whatever you want, I'll be using [Visual Studio Code](https://code.visualstudio.com/)).

## Installing and Running

First, clone the respository:

```bash
git clone https://github.com/PacktPublishing/Hands-on-Vuex-for-Vue.js-Applications.git
```

Next, `cd` to the folder that you want to view, and run `npm install` to install its dependencies. Then, you can run `npm run serve` or `npm start` (for some later sections) to start the development server.

## Working With the Code

You might have noticed that there isn't a separate folder for each section. This is because some sections build on top of the work from earlier sections. It's still possible to view the code for those earlier sections, though.
Each video that contains code has two [`git` tags](https://www.atlassian.com/git/tutorials/inspecting-a-repository/git-tag) associated with it. One is called `step_pre_{video number}` and one is called `step_post_{video number}`, which represents the state of the code after the video is complete.

If you want to follow along with, say, video 5.3, first run git checkout `step_pre_5.3`, and then you can write the code as the video progresses. When you're done, you can check for any differences from the final code for that video by running `git diff step_post_5.3`. Or, you can just skip right to the finished state by running git reset --hard to clear your changes to the code, and then running `git checkout step_post_5.3`.

Video 4.2 is kind of an exception to this. There's a `step_pre_4.2` tag, but there are actually two different tags afterward: `step_post_4.2a` and `step_post_4.2b`. These steps represent the two different approaches to organizing actions that we showed in the video.


## About the Video Course
Modern front-end applications can have complex states, with different ways to view and modify different pieces of data. Keeping the states of different views in sync can get really complicated quickly. Vuex, the official state management tool for Vue.js, makes your application’s state architecture easier to understand, maintain and evolve. 
This course is the easiest way to get started with Vuex to improve your Vue application architecture and overall user experience. You will learn all about the Vuex API, including the Vuex store, changing application state, carrying out asynchronous operations and persisting state changes to a server. You will build a full reading tracker app that uses all of the core Vuex concepts in a real-world scenario that includes an API and user authentication. Later, you will learn about advanced techniques for testing and organizing complex Vuex applications. All of this will be taught in simple steps that gradually build up in complexity to ensure that you never fall behind.
By the end of this course, you will have created multiple projects with Vuex and will know how to build practical applications that are powerful, consistent, and maintainable. You will understand all aspects of Vuex development, and know how to put them into practice.

<H2>What You Will Learn</H2>
<DIV class=book-info-will-learn-text>
<UL>
<LI>The basic ideas and principles behind Vuex 
<LI>How to build a basic shopping cart app 
<LI>Ways to organize and modularize a Vuex app for cleaner code 
<LI>How Vuex simplifies the process of building a complex app 
<LI>How to write unit and end-to-end tests for an app that uses Vuex 
<LI>Popular plugins and libraries that work with Vuex, and how you can build your own </LI></UL></DIV>

## Instructions and Navigation
### Assumed Knowledge
To fully benefit from the coverage included in this course, you will need:<br/>
If you are a JavaScript developer, working on Vue.js and want to extend your web development skills to develop and maintain bigger applications using state management, then this course is for you. No knowledge of Vuex is assumed.

### Technical Requirements
This course has the following software requirements:<br/>
Minimum Hardware Requirements
For successful completion of this course, students will require the computer systems with at least the following:


OS: Linux, Mac or Windows 7



Processor: 1.6GHz



Memory: 1GB



Storage: 1GB


Recommended Hardware Requirements
For an optimal experience with hands-on labs and other practical activities, we recommend the following configuration:


OS: Linux, Mac or Windows 7+



Processor: 2GHz+



Memory: 4GB+



Storage: SSD 1GB+


Software Requirements

Operating system: We will be using Debian Linux 9, but you can use any Mac or Windows



Browser: Chrome or Firefox



Visual Studio Code Editor, Latest Version https://code.visualstudio.com/



Vue CLI 3 https://cli.vuejs.org/



Node.js 8.11+ installed https://nodejs.org/en/download/



npm 6.4+ installed

## Related Products
* [Hands-On Web Development with Bootstrap and Vue [Video]](https://www.packtpub.com/web-development/hands-web-development-bootstrap-and-vue-video?utm_source=github&utm_medium=repository&utm_campaign=9781789950779)

* [Hands-On Styling Vue.js Web Apps with Element UI and iView [Video]](https://www.packtpub.com/web-development/hands-styling-vuejs-web-apps-element-ui-and-iview-video?utm_source=github&utm_medium=repository&utm_campaign=9781789950083)

* [Full Stack Web Development with Vue.js and Node.js [Video]](https://www.packtpub.com/web-development/full-stack-web-development-vuejs-and-nodejs-video?utm_source=github&utm_medium=repository&utm_campaign=9781789345094)

