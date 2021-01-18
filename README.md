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
Each video that contains code has two [`git` tags](https://www.atlassian.com/git/tutorials/inspecting-a-repository/git-tag) associated with it. One is called `step_pre_{video number}` and one is called `step_{video number}`, which represents the state of the code after the video is complete.

If you want to follow along with, say, video section **Code Organization Strategies** chapter **Creating the User Module**, first run `git checkout step_pre_5.3`, and then you can write the code as the video progresses. When you're done, you can check for any differences from the final code for that video by running `git diff step_5.3`. Or, you can just skip right to the finished state by running `git reset --hard` to clear your changes to the code, and then running `git checkout step_5.3`.

Video 4.2 is kind of an exception to this. There's a `step_pre_4.2` tag, but there are actually two different tags afterward: `step_4.2` and `step_4.2a`. These steps represent the two different approaches to organizing actions that we showed in the video.

In addition to the challenge of following the git tags, a viewer must also know which code folder is being used for each video and what command to use to run the code. The various apps created are stored in separate folders and have different commands to start them which can change as the course progresses. The following table will help a viewer know how to get the code to follow along with a given section of the video.

For example, to follow along and code with the video chapter **Creating the State and Mutations** from video section **Shopping List App** a person would run the following commands from the repo root:

```
> git checkout step_pre_2.1
> cd section-2-shopping-list
> npm run serve
```

## Mapping From Videos to Code

| Video Section                                       | Video Chapter                    | Start: `git checkout...` | End: `git checkout...`                     | Code Folder | Run Command         |
| --------------------------------------------------- | -------------------------------- | ------------------------ | ------------------------------------------ | ----------- | ------------------- |
| The Vuex API                                        | Building State                   | `step_pre_1.2`           | `step_1.2`                                 | section-1   | `npm run serve`     |
| The Vuex API                                        | Committing Mutations             | `step_pre_1.3`           | `step_1.3`                                 | section-1   | `npm run serve`     |
| The Vuex API                                        | Dispatching Actions              | `step_pre_1.4`           | `step_1.4`                                 | section-1   | `npm run serve`     |
| The Vuex API                                        | Using Getters and Map Helpers    | `step_pre_1.5`           | `step_1.5`                                 | section-1   | `npm run serve`     |
| Shopping List App                                   | Creating the State and Mutations | `step_pre_2.1`           | `step_2.1`                                 | section-2   | `npm run serve`     |
| Shopping List App                                   | Displaying Items in the UI       | `step_pre_2.2`           | `step_2.2`                                 | section-2   | `npm run serve`     |
| Shopping List App                                   | Building the Add Item Feature    | `step_pre_2.3`           | `step_2.3`                                 | section-2   | `npm run serve`     |
| Shopping List App                                   | Editing and Deleting Items       | `step_pre_2.4`           | `step_2.4`                                 | section-2   | `npm run serve`     |
| Shopping List App                                   | Building List Summary Component  | `step_pre_2.5`           | `step_2.5`                                 | section-2   | `npm run serve`     |
| Reading Tracker App                                 | Getting Started                  | `step_pre_3.1`           | `step_3.1`                                 | section-3   | `npm run serve`     |
| Reading Tracker App                                 | Creating and Viewing Lists       | `step_pre_3.2`           | `step_3.2`                                 | section-3   | `npm run serve`     |
| Reading Tracker App                                 | Adding Books to Lists            | `step_pre_3.3`           | `step_3.3`                                 | section-3   | `npm run serve`     |
| Reading Tracker App                                 | Creating Users                   | `step_pre_3.4`           | `step_3.4`                                 | section-3   | `npm run serve`     |
| Reading Tracker App                                 | User Login                       | `step_pre_3.5`           | `step_3.5`                                 | section-3   | `npm run serve`     |
| Handling Async Data <sup><sub>w/Actions</sub></sup> | Using Actions                    | `step_pre_4.1`           | `step_4.1`                                 | section-4   | `npm run serve`     |
| Handling Async Data <sup><sub>w/Actions</sub></sup> | More Complex Actions             | `step_pre_4.2`           | `step_4.2` <sup><sub>(or 4.2a)</sub></sup> | section-4   | `npm run serve`     |
| Handling Async Data <sup><sub>w/Actions</sub></sup> | Accessing the API                | `step_pre_4.3`           | `step_4.3`                                 | section-3   | `npm start`         |
| Handling Async Data <sup><sub>w/Actions</sub></sup> | Implementing the JWT Auth Flow   | `step_pre_4.4`           | `step_4.4`                                 | section-3   | `npm start`         |
| Handling Async Data <sup><sub>w/Actions</sub></sup> | Using Books and Lists APIs       | `step_pre_4.5`           | `step_4.5`                                 | section-3   | `npm start`         |
| Code Org. Strategies                                | File Organization                | `step_pre_5.1`           | `step_5.1`                                 | section-3   | `npm start`         |
| Code Org. Strategies                                | Introducing Modules              | `step_pre_5.2`           | `step_5.2`                                 | section-5   | `npm run serve`     |
| Code Org. Strategies                                | Creating the User Module         | `step_pre_5.3`           | `step_5.3`                                 | section-3   | `npm start`         |
| Code Org. Strategies                                | Creating the Lists Module        | `step_pre_5.4`           | `step_5.4`                                 | section-3   | `npm start`         |
| Code Org. Strategies                                | Modules in Separate Folders      | `step_pre_5.5`           | `step_5.5`                                 | section-3   | `npm start`         |
| Testing Vuex Applications                           | Writing Unit Tests for Mutations | `step_pre_6.1`           | `step_6.1`                                 | section-3   | `npm run test:unit` |
| Testing Vuex Applications                           | Writing Unit Tests for Actions   | `step_pre_6.2`           | `step_6.2`                                 | section-3   | `npm run test:unit` |
| Testing Vuex Applications                           | Introduction to Cypress          | `step_pre_6.3`           | `step_6.3`                                 | section-3   | `npm run test:e2e`  |
| Testing Vuex Applications                           | Cypress and Vuex                 | `step_pre_6.4`           | `step_6.4`                                 | section-3   | `npm run test:e2e`  |
| Vuex Plugins and Libraries                          | Building Vuex Plugins            | `step_pre_7.1`           | `step_7.1`                                 | section-7   | `npm run serve`     |
| Vuex Plugins and Libraries                          | Vuex ORM                         | `step_pre_7.4`           | `step_7.4`                                 | section-3   | `npm start`         |
| Vuex Plugins and Libraries                          | Vuex Pathify                     | `step_pre_7.5`           | `step_7.5`                                 | section-7   | `npm run serve`     |

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

- [Hands-On Web Development with Bootstrap and Vue [Video]](https://www.packtpub.com/web-development/hands-web-development-bootstrap-and-vue-video?utm_source=github&utm_medium=repository&utm_campaign=9781789950779)

- [Hands-On Styling Vue.js Web Apps with Element UI and iView [Video]](https://www.packtpub.com/web-development/hands-styling-vuejs-web-apps-element-ui-and-iview-video?utm_source=github&utm_medium=repository&utm_campaign=9781789950083)

- [Full Stack Web Development with Vue.js and Node.js [Video]](https://www.packtpub.com/web-development/full-stack-web-development-vuejs-and-nodejs-video?utm_source=github&utm_medium=repository&utm_campaign=9781789345094)
