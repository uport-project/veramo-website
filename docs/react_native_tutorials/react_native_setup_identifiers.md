---
id: react_native_setup_identifers
title: React Native Setup & Identifiers
sidebar_label: Setup & Identifiers
---

This guide will walk you through setting up Veramo on React Native. You should have a good understanding of React Native
and have your environment set up correctly to build iOS and Android apps. Check out
the [React Native](https://reactnative.dev/docs/environment-setup) docs to learn more. Node v14 or later is required to
run Veramo.

You'll be creating a React Native application that is able to create and remember Decentralized Identifiers (DIDs) along
with some keys associated with them and display them in a list.

## Introduction

Let's set up Veramo to run locally on the device and use `sqlite` to store data, identities, and keys. Our identity
provider will be `ethr-did`. Initially, we will set up the [agent](../veramo_agent/introduction.md) in the most basic
config and add more plugins for additional functionality as we go. Right now we just want to create
an [identifier](../basics/identifiers.md).

## Bootstrap React Native

Use the React Native CLI bootstrap a new typescript react project:

```bash
npx react-native init VeramoMobile --template react-native-template-typescript
```

Ensure your project is building and running ok before continuing to next step.

## Install Dependencies

### Native

We need to set up some native dependencies and shims that Veramo plugins will use for database and key management.

```bash
yarn add @veramo/kms-local react-native-sqlite-storage
```

Next, add the shim from `@ethersproject/shims` and the polyfill for strong random values following the
recommendation [here](https://docs.ethers.io/v5/cookbook/react-native/#cookbook-reactnative-security).

```bash
yarn add @ethersproject/shims react-native-get-random-values
```

To access node methods we need to install [rn-nodeify](https://www.npmjs.com/package/rn-nodeify) to our dev
dependencies.

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

Import `shim.js` (created by rn-nodify),`react-native-get-random-values`, and `@ethersproject/shims` into the top
of `index.js`.

```ts
import './shim'
import "react-native-get-random-values"
import "@ethersproject/shims"
...
```

Open `shim.js` and uncomment `require('crypto)`

```js
// If using the crypto shim, uncomment the following line to ensure
// crypto is loaded first, so it can populate global.crypto
require('crypto')
```

Install all the pods in your project that came with the new dependencies.

```bash
npx pod-install
```

### Veramo

Now let's install Veramo Core and some plugins. Don't worry; we will walk through what each of these plugins does in the
next section.

```bash
yarn add @veramo/core @veramo/did-manager @veramo/kms-local @veramo/did-provider-ethr @veramo/key-manager @veramo/did-resolver @veramo/data-store @veramo/credential-w3c ethr-did-resolver web-did-resolver
```

Close the React Native packager, clean the project, and rerun your app. If everything is okay, you should see the
default React Native screen as before.

## Bootstrap Veramo

We bootstrap Veramo by creating a setup file and initializing the agent. Create a setup file in `src/veramo/setup.ts`
and import the following dependencies:

```tsx
// Core interfaces
import { createAgent, IDIDManager, IResolver, IDataStore, IKeyManager } from '@veramo/core'

// Core identity manager plugin
import { DIDManager } from '@veramo/did-manager'

// Ethr did identity provider
import { EthrDIDProvider } from '@veramo/did-provider-ethr'

// Core key manager plugin
import { KeyManager } from '@veramo/key-manager'

// Custom key management system for RN
import { KeyManagementSystem } from '@veramo/kms-local'

// Custom resolver
// Custom resolvers
import { DIDResolverPlugin } from '@veramo/did-resolver'
import { Resolver } from 'did-resolver'
import { getResolver as ethrDidResolver } from 'ethr-did-resolver'
import { getResolver as webDidResolver } from 'web-did-resolver'

// Storage plugin using TypeOrm
import { Entities, KeyStore, DIDStore, IDataStoreORM, migrations, PrivateKeyStore } from '@veramo/data-store'

// TypeORM is installed with '@veramo/data-store'
import { createConnection } from 'typeorm'
```

Create an Infura project ID and a database encryption key:

```ts
// You will need to get a project ID from infura https://www.infura.io
const INFURA_PROJECT_ID = '<your PROJECT_ID here>'

// This is a raw X25519 private key, provided as an example; you will need to generate your own when going to production.
// In a production app, this MUST not be hardcoded in your source code.
const dbEncryptionKey = '29739248cad1bd1a0fc4d9b75cd4d2990de535baf5caadfdf8d8f86664aa830c'
```

Next initialize our sqlite database using TypeORM:

```tsx
// Create react native db connection
const dbConnection = createConnection({
  type: 'react-native',
  database: 'veramo.sqlite',
  location: 'default',
  migrations: migrations,
  migrationsRun: true,
  logging: ['error', 'info', 'warn'],
  entities: Entities,
})
```

Finally, create the agent and add plugins for Key, Identity, Storage, and Resolver.

```tsx
export const agent = createAgent<IDIDManager & IKeyManager & IDataStore & IDataStoreORM & IResolver>({
  plugins: [
    new KeyManager({
      store: new KeyStore(dbConnection),
      kms: {
        local: new KeyManagementSystem(new PrivateKeyStore(dbConnection, new SecretBox(dbEncryptionKey))),
      },
    }),
    new DIDManager({
      store: new DIDStore(dbConnection),
      defaultProvider: 'did:ethr:rinkeby',
      providers: {
        'did:ethr:rinkeby': new EthrDIDProvider({
          defaultKms: 'local',
          network: 'rinkeby',
          rpcUrl: 'https://rinkeby.infura.io/v3/' + INFURA_PROJECT_ID,
          gas: 1000001,
          ttl: 60 * 60 * 24 * 30 * 12 + 1,
        }),
      },
    }),
    new DIDResolverPlugin({
      resolver: new Resolver({
        ...ethrDidResolver({ infuraProjectId: INFURA_PROJECT_ID }),
        ...webDidResolver(),
      }),
    }),
  ],
})
```

Awesome! That's the basic agent configured and ready to use. Let's try it out :rocket:

## Basic User Interface

Now that the agent has been created and configured with plugins, we can create some identifiers. For this, we will need
some basic UI.

:::note Veramo does not impose decisions on how you manage state in your app and will work alongside any existing
architecture like Redux or Mobx etc. For brevity, we use `useState` in this example, but you can treat Veramo like you
would any async data source.
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
    const _id = await agent.didManagerCreate()
    setIdentifiers((s) => s.concat([_id]))
  }

  // Check for existing identifers on load and set them to state
  useEffect(() => {
    const getIdentifiers = async () => {
      const _ids = await agent.didManagerFind()
      setIdentifiers(_ids)

      // Inspect the id object in your debug tool
      console.log('_ids:', _ids)
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

export default App
```

Close the packager and rebuild the app. Once loaded hit the **Create identifier** button a few times and you should see
your identifiers being created!

## Building for production

When you use `@veramo/data-store` you will need to ensure that class names are not mangled during the minification step
of a release build. This is because it uses `typeorm` which relies on class names to make decisions about database
migrations.

To get around this issue, you can use one of the solutions from this thread:

- https://github.com/typeorm/typeorm/issues/4561#issuecomment-546010351
- https://forums.expo.dev/t/change-minifierconfig-for-minify-uglify/36460
