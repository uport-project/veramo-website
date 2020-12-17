---
id: create_plugin
title: Custom Plugin
sidebar_label: Custom Plugin
---

This guide will show you how to create a simple custom plugin for Veramo.

Start by using the [veramo-plugin-template](https://github.com/uport-project/daf-plugin) repo on Github. Click the `Use this template` button to copy the repo to your account. Clone the repo locally and rename the package name in `package.json`.

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
curl -X POST "https://<NGROK_URL>/agent/idManagerCreateId" -H "accept: application/json; charset=utf-8" -H "Authorization: Bearer <APIKEY>" -H "Content-Type: application/json" -d "{}"
```

A new identifier JSON representation should be printed in your console.
