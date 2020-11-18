---
id: introduction
title: Introduction
sidebar_label: Introduction
---

:::important

Veramo is in public beta. There will be some breaking changes in the coming months and we endeavour to communicate these in advance via our blog. However, we expect the core APIs to remain relatively stable. You can keep up to date here and get involved in our growing community. We are excited to see what you build with Veramo!

:::

Veramo is a framework that makes it easy for anyone to use cryptographically verifiable data in their applications.

These docs are written for anyone wishing to learn more about the grounding principles behind verifiable data and develop a deeper understanding of the Veramo framework in order to build next generation apps that leverage the many benefits of [trust networks](/docs/).

Looking for ideas? You can [check out how you can easily build](/docs/) systems like uport, brightid, a custodial identity platform, a covid vaccine verification app and many more.

## How to use these docs

If you are new to the concept of verifiable data it would be best to read the fundamentals section linearly as each section builds on knowledge and terminology gained in the previous.

If you are more experienced with verifiable data concepts and or development in general you can dive into the architecture section where more specifics of how the internals work are covered or you could [deploy your own cloud agent](/docs/agent/cloud_agent). You can also jump over to the API reference section. Links and more info about these packages can also be found in the plugins section.

## Prerequisites

You need to have fundamental knowledge of JavaScript or some other programming language.

## Why Veramo?

The core team have extensive experience working on digital identity products that use verifiable data as the core building blocks.

A major problem the team encountered while working on [uPort](/docs/) and helping companies implement some flavour of digital identity was that managing dependencies across multiple platforms eg server, mobile and web became increasing more complex as time went on. Add changing standards to that and you quickly find you spend more time managing, debugging the tools juggling disparate systems than focusing on the product and delivering value to your users. Consistency, repeatability and thus scalablity was challenging to say the least. We needed a framework that abstracted away all of the underlying complexity. We yearned for a clean predicatable api that was the same no matter what platform you are on. Flexibility, modularity and scalability were among the most important mission critial attributes for Veramo.

> Veramo was designed from the ground up on modularity, open standards and interoperability at its core.

### The drawing board

As with any good re-architecture we started from the most basic building blocks. We make no assumption from the beginning on the architecture of the applications that will build on Veramo. For this reason we belive that Veramo is a more low-level foundational framework than previous tooling and services provided by uPort.

At uPort we built little pieces of the whole stack including a mobile app, messaging service and other infrastructure pieces which are all reaching end of life in the coming months.

Veramo doesn't impose restrictions on your application logic or UX layer. We learned that in order to build a framework that can scale these higher level components need to be decoupled allowing product owners and developers the freedom to design products for their unique audience.

### What happens if feature X is missing?

We envision an ecosystem of great plugins that add lots of functionality for all sorts of applications. If there is something you are missing you have options:

- Make a [plugin request](/docs/fundamentals/introduction) for the team to build it for you
- Make a request for a member of the community to help build it
- [Build it yourself](/docs/agent/plugins) and start an internal repository of private plugins that you can use in multiple products and or open-source or even license the plugin to others if you think others would benefit

You can also [book a workshop](/docs/fundamentals/introduction) to discuss your architecture needs with the team.
