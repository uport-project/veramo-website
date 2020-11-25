---
id: uport
title: uPort
sidebar_label: uPort
---

**This copy may not live on this website**

The core team have extensive experience working on digital identity products that use verifiable data as the core building blocks.

A major problem the team encountered while working on [uPort](/docs/) and helping companies implement some flavour of digital identity was that managing dependencies across multiple platforms eg server, mobile and web became increasing more complex as time went on. Add changing standards to that and you quickly find you spend more time managing, debugging the tools juggling disparate systems than focusing on the product and delivering value to your users. Consistency, repeatability and thus scalablity was challenging to say the least. We needed a framework that abstracted away all of the underlying complexity. We yearned for a clean predicatable api that was the same no matter what platform you are on. Flexibility, modularity and scalability were among the most important mission critial attributes for Serto.

> Serto was designed from the ground up on modularity, open standards and interoperability at its core.

### The drawing board

As with any good re-architecture we started from the most basic building blocks. We make no assumption from the beginning on the architecture of the applications that will build on Serto. For this reason we belive that Serto is a more low-level foundational framework than previous tooling and services provided by uPort.

At uPort we built little pieces of the whole stack including a mobile app, messaging service and other infrastructure pieces which are all reaching end of life in the coming months.

Serto doesn't impose restrictions on your application logic or UX layer. We learned that in order to build a framework that can scale these higher level components need to be decoupled allowing product owners and developers the freedom to design products for their unique audience.

### What happens if feature X is missing?

We envision an ecosystem of great plugins that add lots of functionality for all sorts of applications. If there is something you are missing you have options:

- Make a [plugin request](/docs/fundamentals/introduction) for the team to build it for you
- Make a request for a member of the community to help build it
- [Build it yourself](/docs/agent/plugins) and start an internal repository of private plugins that you can use in multiple products and or open-source or even license the plugin to others if you think others would benefit

You can also [book a workshop](/docs/fundamentals/introduction) to discuss your architecture needs with the team.
