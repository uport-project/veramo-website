---
id: create_plugin
title: Custom Plugin
sidebar_label: Custom Plugin
---

This is a basic guide to getting started creating Veramo plugins. More in-depth tutorials to follow.

Start by using the [veramo-plugin-template](https://github.com/uport-project/veramo-plugin) repo on Github. Click the `Use this template` button to copy the repo to your account. Clone the repo locally and rename the package name in `package.json`.

From the plugin directory:

```bash
yarn
yarn build
yarn generate-plugin-schema
```

## Run the plugin template

Before customizing your plugin, ensure the project run correctly:

```
yarn start
```

In the logs you will be presented development URLS. You should have access to the Open API documentation of this agent.

### Verify

To make sure your plugin is working correctly, let's create a new DID using its API:

:::note
You will need the API key which you can get from the agent.yml file.
:::

Replace the `NGROK_URL` and `API_KEY` with your own and run:

```bash
curl -X POST "https://<NGROK_URL>/veramo_agent/idManagerCreateId" -H "accept: application/json; charset=utf-8" -H "Authorization: Bearer <APIKEY>" -H "Content-Type: application/json" -d "{}"
```

A new identifier should be printed in your console.

## Customization

1. Rename instances of `MyAgentPlugin` with your plugin name
2. Define your plugin interfaces in `IMyAgentPlugin.ts`
3. Extend your plugin context by importing other types from Veramo for example if you want to issue credentials from your plugin, import the `ICredentialIssuer` type.
4. Replace sample arguments with your own
5. Every time you update the types of your plugin, make sure you run:

```bash
yarn generate-plugin-schema
```

6. The file `my-agent-plugin.ts` holds the implementation of your agent. It uses the interfaces defined in the `src/types` folder to define each method implementation. Again, review all the JSDOCS and add your plugin implementation.
