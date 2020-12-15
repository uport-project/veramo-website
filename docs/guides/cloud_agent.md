---
id: cloud_agent
title: Cloud Agent
sidebar_label: Cloud Agent
---

A cloud agent is a server that exposes the agent OpenAPI. You can access the agent over REST using an API key. You can create your own cloud agent or you can use the CLI and a agent.yml configuration like we have in our [Veramo Cloud Agent](https://github.com/uport-project/daf-agent-deploy) deployments repo. This repo also contains Docker config to create, build and push an image to your registry.

A cloud agent could be for an individual, an organisation or a service. Depending on what you are building you could have multiple cloud agents running in your infrastructure.

## Deploy a cloud agent

The quickest way to deploy an agent is to use a free Heroku account. Go to the [Veramo Cloud Agent](https://github.com/uport-project/daf-agent-deploy) repo and hit the Heroku deploy button.

Once you have an account you will be presented with a configuration screen. Most of the values will be generated for you but you will need to fill out the `AGENT_URL`. The other values are optional or generated for you.

### `AGENT_URL`

Set this to your base app url eg celestial-harmony.herokuapp.com
Your default web:did will be based on this when it gets created on first run eg did:web:celestial-harmony.herokuapp.com

### Get the API & Secret Key

Your API & Secret will be in the Heroku env vars section. You may want to save these somewhere convenient.

### Example

[Supernova e2e Agent](https://supernova-e2e-agent.herokuapp.com/) is an example of a cloud agent. This is deployed automatically from the same deployment repo. In future releases you will be able to serve your own custom content from the root.

### Client UI

Would you like a UI to explore what's in your agent? You can tryout one of our experimental client UIs. This one is called [Mars Client](https://mars.veramo.io/). Add your cloud agent and api key to explore everything. Yes, there is a space theme going on here. It's one of the few places where there's enough names for a lifetime of naming things.
