---
id: agent_explorer
title: Agent Explorer
---

Agent explorer makes it easy to browse and interact with multiple agents while devoping apps on Veramo. At it's most basic it is a dashboard but could also be considered a front-end for a credential wallet.

## Motivation

Throughout the development cycle of Veramo from its early alpha days as DAF, we have always had some form of user interface to help build and test features. The first UI was a React Native mobile application called daf-mobile which has since been deprecated.

Out of necessity for a fully working UI that makes working with agents easier and helps validate Veramo APIs among many other use-cases we created a simple dashboard called Agent Explorer.

As the Agent Explorer is a developer dashboard, the design was to be kept minimal and unobtrusive while surfacing the very pieces of technical information that would normally be hidden for non-developers. We also wanted this UI to be modular and flexible as Veramo is. We have implemented a widget based approach that allows developers to create their own dashboard widgets while developing features for Veramo perhaps in another codebase. And finally the explorer provides a quick and simple way to see what’s going on in your agents and can assist in interacting and quickly generating bulk data for research and experiments.

## Install

After you have deployed an agent using our [1 button Heroku deploy](https://github.com/uport-project/veramo-agent-deploy) for example. In your heroku settings you will find the API key for your agent. Using this API key you can connect this agent and others to an instance of the explorer.

### Run locally using `npx`

```bash
npx agent-explore serve
```

### Use the public version

[https://explore.veramo.dev](https://explore.veramo.dev)

### Clone the repo

[https://github.com/veramolabs/agent-explorer](https://github.com/veramolabs/agent-explorer)
