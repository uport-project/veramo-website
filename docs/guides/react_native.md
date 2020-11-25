---
id: react_native
title: React Native
sidebar_label: React Native
---

This guide will walk you through setting up Serto on React Native. You should have a good understanding of React Native and have your environment set up correctly to build iOS and Android apps. Check out the [React Native](https://reactnative.dev/docs/environment-setup) docs to learn more.

## Introduction

Let's setup Serto run to locally on the device and use `sqlite` to store data, identities and keys. Our identity provider will be `ethr-did`. Initially, we will setup the [agent](/docs/agent/introduction) in the most basic config and add more plugins for additional functionality as we go. Right now we just want to create an [identifer](/docs/fundamentals/identifiers).

## Bootstrap React Native

Use the React Native CLI bootstrap a new typescript react project:

```bash
npx react-native init Serto --template react-native-template-typescript
```

Ensure your project is building and running ok before continuing to next step.

## Install Dependencies

### Native

We need to setup some native depenencies and shims that Serto plugins will use for database and key management.

```bash
yarn add react-native-sodium react-native-sqlite-storage
```

In order to access node methods we need to install [rn-nodeify](https://www.npmjs.com/package/rn-nodeify) to our dev dependencies.

```bash
yarn add rn-nodeify --dev
```

Add the following snippets to your package.json file

```json
{
    "scripts": {
    ...
        "postinstall": "rn-nodeify --install assert,buffer,process,crypto,stream,vm --hack"
    }
}
```

Run yarn again to trigger the `postinstall` script. This will install some additional dependencies based on the `rn-nodeify` command to your app.

```bash
yarn
```

Install all of the pods in your project that came with the new dependencies.

```bash
npx pod-install
```

Close the react native packager, clean the project and run your app again. If everything is good you should see the default React Native screen as before.

### Serto

Now let's install Serto Core and some plugins. Don't worry, we will walk through what each one of these plugins does in the next step.

```bash
yarn add @serto/core @serto/plugin-identity-manager @serto/plugin-react-native-libsodium @serto/plugin-ethr-did @serto/plugin-key-manager @serto/plugin-resolver @serto/plugin-typeorm @serto/plugin-w3c
```

## Bootstrap Serto

We bootstrap Serto by creating a setup file and initialising the agent. Create a setup file in `src/veramo/setup.ts` and import the following dependencies:

```tsx
// Core interfaces
import { createAgent, IIdentityManager, IResolver, IDataStore, IKeyManager } from '@serto/core'

// Core identity manager plugin
import { IdentityManager } from '@serto/plugin-identity-manager'

// Ethr did identity provider
import { EthrIdentityProvider } from '@serto/plugin-ethr-did'

// Core key manager plugin
import { KeyManager } from '@serto/plugin-key-manager'

// Custom key management system for RN
import { KeyManagementSystem } from '@serto/plugin-react-native-libsodium'

// Custom resolver
import { SertoResolver } from '@serto/plugin-resolver'

// Storage plugin using TypeOrm
import { Entities, KeyStore, IdentityStore, IDataStoreORM } from '@serto/plugin-typeorm'

// TypeORM is installed with daf-typeorm
import { createConnection } from 'typeorm'
```

Next initilize our sqlite database using TypeORM:

```tsx
// Create react native db connection
const dbConnection = createConnection({
  type: 'react-native',
  database: 'daf.sqlite',
  location: 'default',
  synchronize: true,
  logging: ['error', 'info', 'warn'],
  entities: Entities,
})
```

Finally, create the agent and add plugins for Key, Identity, Storage and Resolver. You will need to get an infura projectId from [Infura](https://infura.io/)

```tsx
export const agent = createAgent<IIdentityManager & IKeyManager & IDataStore & IDataStoreORM & IResolver>({
  plugins: [
    new KeyManager({
      store: new KeyStore(dbConnection),
      kms: {
        local: new KeyManagementSystem(),
      },
    }),
    new IdentityManager({
      store: new IdentityStore(dbConnection),
      defaultProvider: 'did:ethr:rinkeby',
      providers: {
        'did:ethr:rinkeby': new EthrIdentityProvider({
          defaultKms: 'local',
          network: 'rinkeby',
          rpcUrl: 'https://rinkeby.infura.io/v3/' + infuraProjectId,
          gas: 1000001,
          ttl: 60 * 60 * 24 * 30 * 12 + 1,
        }),
      },
    }),
    new SertoResolver({ infuraProjectId: 'INFURA_PROJECT_ID' }),
  ],
})
```

Awesome! That's the basic agent configured and ready to use. Let's try it out :rocket:

## Basic User Interface

Now that the agent has been created and configured with plugins we can use it to create some identifers. For this we will need some basic UI.

:::note
Serto does not impose decisions how you manage state in your app and will work along side any exsiting architecture like Redux or Mobx etc. For brevity we just use `useState` in this example but you can treat Serto like you would any async data source.
:::

Open `App.tsx` and delete all the contents and add the following code:

```tsx
import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, View, Text, Button } from 'react-native'

// Import agent from setup
import { agent } from './src/veramo/setup'

interface Identifier {
  did: string
}

const App = () => {
  const [identifiers, setIdentifiers] = useState<Identifier[]>([])

  // Add the new identifier to state
  const createIdentifier = async () => {
    const _id = await agent.identityManagerCreateIdentity()
    setIdentifiers((s) => s.concat([_id]))
  }

  // Check for existing identifers on load and set them to state
  useEffect(() => {
    const getIdentifiers = async () => {
      const _ids = await agent.identityManagerGetIdentities()
      setIdentifiers(_ids)

      // Inspect the id object in your debug tool
      console.log(ids)
    }

    getIdentifiers()
  }, [])

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Identifiers</Text>
          <View style={{ marginBottom: 50, marginTop: 20 }}>
            {identifiers && identifiers.length > 0 ? (
              identifiers.map((id: Identifier) => (
                <View key={id.did}>
                  <Text>{id.did}</Text>
                </View>
              ))
            ) : (
              <Text>No identifiers created yet</Text>
            )}
          </View>
          <Button onPress={() => createIdentifier()} title={'Create Identifier'} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
```

Close the packager and rebuild the app. Once loaded hit the `Create identifier` button a few times and you should see your identifiers being created!

## Verifiable Credentials

So now we have the ability to create identifers, store them in a database and query for them. Next we will use an identifer to create some Verifiable Credentials, save them to the database and query for them too.
