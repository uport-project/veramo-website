---
id: introduction
title: Agent
sidebar_label: Introduction
---

Now that we have a basic understanding of the fundamentals we can look at what Veramo does at a high level.

Using Veramo you create an `Agent` which bootstraps the framework and allow you to call methods on the instatiated class. You can customise the methods available using plugins which will expand the core capabilities. One of the most powerful features is that it is composable. Every plugin has the ability to hook into other plugins making it a very flexibile and customisable architecture. You can learn more about our architecture here.

An Agent is responsibe for but not limited to:

- Creating Identifiers
- Resolving Identifiers
- Credential Issuance
- Credential Revokation
- Credential Exchange
- Secret Application Hot Sauce

The agent is the main class and when instantiated orchestrates the plugins; both core and custom. You can build plugins easily to support any standard you need and you can share or even sell & license them to others.

Methods defines in plugins are available on the agent instance eg:

```javascript
const message = await agent.handleMessage({
  raw: "thwrthrtrtnwrtnwertetnrth.qaerthq.erth.erth.eTR.Heth",
});
```

If the agent is exposed as a REST interface the method will also be available using Open API:

```
POST https://veramo.dev/agent/handleMessage

```
