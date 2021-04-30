---
slug: open_sourcing_agent_explorer
title: Open sourcing Veramo Agent Explorer
author: Jason Healy
author_title: Product & Engineering @ Veramo
author_url: https://github.com/jasonhealy
author_image_url: https://avatars0.githubusercontent.com/u/7109973?s=400&v=4
tags: [veramo, did, explorer, open-source]
---

Throughout the development cycle of Veramo from its early alpha days as DAF, we have always had some form of user interface to help build and test features. The first UI was a React Native mobile application called `daf-mobile` which has since been deprecated.

Out of necessity for a fully working UI that makes working with agents easier, helps validate Veramo APIs among many other use-cases we created a simple dashboard called Agent Explorer.

As the Agent Explorer is a developer dashboard, the design was to be kept minimal and un-obtrusive while surfacing the very pieces of technical information that would normally be hidden for non-developers. We also wanted this UI to be modular and flexible as Veramo is. We have not fully achieved this yet but we have implemented a widget based approach that allows developers to create their own dashboard widgets while developing features for Veramo perhaps in another codebase. And finally the explorer provides a quick and simple way to see what’s going on in your agents and can assist in interacting and quickly generating bulk data for research and experiments.

We have been using agent explorer internally for many months now and today we are open-sourcing the codebase.

There are a number of ways to use the explorer depending on your workflow. (1 + 2 are if you do not need to build any custom UI functionality in the explorer and just wish to interact with your agents)

1. Run directly from npm: `npx agent-explore serve`. This will run on your localhost on port 5000.

2. Visit https://explore.veramo.dev and connect your running agent.

3. Fork the [agent-explorer](https://github.com/veramolabs/agent-explorer) repo and run locally. If you build a widget that you think is useful to have in the main repo and therefore available on https://explore.veramo.dev then please open a PR/discussion and we will review!

Note that the explorer depends on another library that we have in the pipeline `Veramo React`. Veramo React makes it easy to use Veramo APIs in React/React Native. We plan to open source this library very shortly.
