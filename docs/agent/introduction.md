---
id: introduction
title: Agent
sidebar_label: Introduction
---

The `Agent` is the entry point into the Veramo framework. Using Veramo you create an `Agent` and most of the functionality comes from plugins that you add to the configuration. We have included a set of plugins to get you started and they also serve as a guide to start writing your own plugins.

One of the most powerful features of Veramo plugin system is that it is composable. Every plugin has the ability to hook into other plugins making it a very flexibile and customisable architecture. You can learn more about our architecture here.

An Agent is responsibe for but not limited to:

- Creating Identifiers
- Resolving Identifiers
- Credential Issuance
- Credential Revokation
- Credential Exchange
- Secret Application Hot Sauce

The agent is the main class and when instantiated orchestrates the plugins; both core and custom. You can build plugins easily to support any standard you need and you can share or even sell & license them to others.

Methods defined in plugins are available on the agent instance eg:

```javascript
const message = await agent.handleMessage({
  raw: 'thwrthrtrtnwrtnwertetnrth.qaerthq.erth.erth.eTR.Heth',
})
```

If the agent is exposed as a REST interface the method will also be available using Open API. This is a [cloud agent](/docs/agent/cloud_agent).

```
POST https://veramo.dev/agent/handleMessage
```

## Configuration

An agent can be manually configured by installing plugins from npm, running a node application and [creating a setup](/docs/guides/introduction) file to instatiate the agent class. You can also create a `.yml` file with full configuration.

Here is a trimmed down version of the configuration file used for the standard cloud agent [one click heroku deployment](https://github.com/uport-project/daf-deploy-heroku).

```yml
server:
  baseUrl:
    $env: APP_URL
  port: 5000
  apiKey:
    $env: API_KEY
  schemaPath: /open-api.json
  apiBasePath:
    $env: AGENT_ENDPOINT
  apiDocsPath: /api-docs
  defaultIdentity:
    create: true
    messagingServiceEndpoint: /messaging
constants:
  secretKey:
    $env: SECRET_KEY
dbConnection:
  $require: typeorm?t=function#createConnection
  $args:
    - type: postgres
      url:
        $env: DATABASE_URL
      synchronize: true
      logging: false
      entities:
        $require: daf-typeorm?t=object#Entities
messageHandler:
  $require: daf-message-handler#MessageHandler
  $args:
    - messageHandlers:
        - $require: daf-did-comm#DIDCommMessageHandler
        - $require: daf-did-jwt#JwtMessageHandler
        - $require: daf-w3c#W3cMessageHandler
        - $require: daf-selective-disclosure#SdrMessageHandler
agent:
  $require: daf-core#Agent
  $args:
    - plugins:
        - $require: daf-key-manager#KeyManager
          $args:
            - store:
                $require: daf-typeorm#KeyStore
                $args:
                  - $ref: /dbConnection
                  - $require: daf-libsodium#SecretBox
                    $args:
                      - $ref: /constants/secretKey
              kms:
                local:
                  $require: daf-libsodium#KeyManagementSystem
```
