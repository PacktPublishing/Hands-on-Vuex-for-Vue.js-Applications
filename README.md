# About

This repository contains code for the Packt course "Hands on Vuex for Vue.js Applications".

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
