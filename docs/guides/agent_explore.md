---
id: agent_explore
title: Agent Explorer
sidebar_label: Agent Explorer
---

Agent Explorer is a customisable dashboard for your agents. It is designed to be used while developing applications using Veramo. In this guide we will walk through deploying the dashboard and adding a custom module.

:::note
Agent Explorer is in early preview so breaking changes will be often. The goal is to create a highly customisable developer dashboard experience. If you have any feedback please let us know!
:::

## Run Local Agent

In order to use the dashboard we need an instance if an agent. For this guide we will run a local agent using the `veramo-agent-deploy` repo

Clone the repo

```bash
git clone git@github.com:uport-project/veramo-agent-deploy.git my-veramo-agent
```

Run a local agent

```bash
cd my-veramo-agent
yarn && yarn dev
```

Your local cloud will be running on [http://localhost:3332](http://localhost:3332). Click [API Schema](http://localhost:3332/open-api.json) to show your agents schema.

## Run Local Explorer

You can run the explorer from npm. You will not be able to create your own custom module which will be required for the nex section.

```bash
npx agent-explore serve
```

Or you can run locally by cloning the repo:

```bash
git clone git@github.com:veramolabs/agent-explorer.git veramo-dashboard
```

Run the dashboard

```bash
cd veramo-dashboard
yarn && yarn dev
```

### Add Agent

Copy your schema URL into the input and fill out the fields that appear

- Agent name: `My Agent`
- Agent URL: `http://localhost:3332/agent`
- API Key: `1234` (Any string will work for local development agents)

Your agent is connected. Now you can browse you data and interact with your agent.

:::note
There are a lot of placeholder modules that will evolve over time.
:::

## Explore Agent

Click on the overview page and you will find 2 default modules have been loaded. A generic chart module and a data generator module. Let's use the generator to create some sample data.

- Open the identifiers section and hit generate. Once done, verify that you have newly created data in the identifiers section.
- Open the credentials section and hit generate credentials. Once done, verify that you have credentials in the credentials section.
- Open Peer 2 Peer and add issuer count and subject count. 10 and 30 respectively means that 10 random identifiers will issue a credential to 30 random identifiers.

### Add a module to the credential explore page

When developing application on Veramo you may wish to experiment with contextual data using Veramo querying capabilities. Here we will add a `name` module to show the most recent `name` claim for an identifer.

- Click on the add module button at the bottom of the credential page
- Select Query Module
- Add module label: `Subject name`
- Select identifier type: `Subject`
- Add a claim to query: `name`
- Hit save

You should now see the name associated with the subject of the current credential you are viewing. This module is saved to your dashboard with these settings.

## Create custom module

Creating custom modules for yourself and other is how you will expland the capabilities of the dashboard. Here we will walk through building the react component and installing it.

Create a file called `HelloWorld.tsx` and import the following boilerplate:

```jsx
import React from 'react'
import { Typography } from 'antd'
import PageModule from '../../layout/PageModule'
import { PageModuleProps } from '../../types'

const HelloWorld: React.FC<PageModuleProps> = ({ title, isLoading, remove, config }) => {
  return (
    <PageModule title={title} remove={remove} isLoading={isLoading}>
      <Typography.Text>
        Hi I'm a dynamic page module <b>{title}</b>
      </Typography.Text>
    </PageModule>
  )
}

export default HelloWorld
```

Open `components/modules/index.ts` and add your new module to both the module map and list of modules

```ts
 // Make sure this key does not conflict with others
 ...
 HELLO_WORLD: {
    moduleName: 'HelloWorld',
    moduleLabel: 'Hello World!',
    config: {},
 }
```

```ts
 // Make sure this key does not conflict with others
 ...
export const DYNAMIC_MODULES = {
  ...
  // Use correct path to your module!
  HelloWorld: React.lazy(() => import('./HelloWorld'))
}

```

Open the dashboard on the Overview page and add a new module. Select `Hello World!` from the list and you will see your custom module. A static module is great and everything but not very useful. Let's make it dynamic by querying for some data and saving our settings.

Create a custom name. Inside your component function:

```jsx
import { Form, Input, Button } from 'antd'

const HelloWorld: React.FC<PageModuleProps> = ({ title, isLoading, remove, config, saveConfig }) => {
  const [_title, setTitle] = useState(title)

  const save = () => {
    saveConfig({}, _title)
  }

  return (
    <PageModule
      title={_title}
      remove={remove}
      isLoading={isLoading}
      renderSettings={() => (
        <>
          <Form>
            <Form.Item>
                <Input type="text" onChange={(e) => setTitle(e.target.value)}>
            </Form.Item>
            <Form.Item>
                <Button onClick={() => save()} >
                    Save settings
                </Button>
            </Form.Item>
          </Form>
        </>
      )}
    >
      <Typography.Text>
        Hi I'm a dynamic page module <b>{_title}</b>
      </Typography.Text>
    </PageModule>
  )
}
```

On the overview page, add a name for your module and hit save. Your module settings are now persisted in local storage.
