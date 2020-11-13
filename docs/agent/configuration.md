---
id: configuration
title: Yaml Configuration
sidebar_label: Yaml Configuration
---

An agent can be manually configured by installing plugins from npm, running a node application and [creating a setup](/docs/) file to instatiate the agent class. You can also create a `.yml` file with full configuration and [use the CLI tool to run a cloud agent.](/docs/)

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
        - $require: daf-identity-manager#IdentityManager
          $args:
            - store:
                $require: daf-typeorm#IdentityStore
                $args:
                  - $ref: /dbConnection
              defaultProvider: did:ethr:rinkeby
              providers:
                did:ethr:
                  $require: daf-ethr-did#EthrIdentityProvider
                  $args:
                    - defaultKms: local
                      network: mainnet
                      rpcUrl: https://mainnet.infura.io/v3/5ffc47f65c4042ce847ef66a3fa70d4c
                      gas: 10001
                      ttl: 31104001
                did:web:
                  $require: daf-web-did#WebIdentityProvider
                  $args:
                    - defaultKms: local
        - $require: daf-resolver#DafResolver
          $args:
            - networks:
                - name: mainnet
                  rpcUrl: https://mainnet.infura.io/v3/5ffc47f65c4042ce847ef66a3fa70d4c
                - name: rinkeby
                  rpcUrl: https://rinkeby.infura.io/v3/5ffc47f65c4042ce847ef66a3fa70d4c
        - $ref: /messageHandler
        - $require: daf-did-comm#DIDComm
        - $require: daf-w3c#CredentialIssuer
        - $require: daf-selective-disclosure#SelectiveDisclosure
```
