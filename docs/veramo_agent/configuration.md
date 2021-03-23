---
id: configuration
title: Configuration
---

Adding plugins to Veramo Agent will configure how the agent works and dictate what platform it can run on. Veramo Server & Veramo Client are the 2 loose categories of configuration available.

### Veramo Server

Config diagram here, links to deployments etc

Veramo Server has plugins that run on the server and includes `@veramo/remote-server` which contains an express server and exposes Veramo Agent methods over REST.

### Veramo Client

Config diagram here, links to veramo react etc

Veramo Client has plugins that run on clients such as browser and mobile. Veramo Clients can manage their own data and can also be configured to act as a client to an instance of Veramo Server or a Web3 provider.
