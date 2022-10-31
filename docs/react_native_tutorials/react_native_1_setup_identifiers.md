---
id: react_native_1_setup_identifiers
title: React Native Basic Setup & Create Identifiers
sidebar_label: Setup & Create DIDs
---

This guide will walk you through setting up Veramo on React Native (using [expo](https://expo.dev/)). You should have a
good understanding of React Native and have your environment set up correctly to build iOS and Android apps. Check out
the [React Native](https://reactnative.dev/docs/environment-setup) docs to learn more. NodeJS v14 or later is required
to run Veramo.

You'll be creating a React Native application that is able to create and remember Decentralized Identifiers (DIDs) along
with some keys associated with them and display them in a list.

## Introduction

Let's set up Veramo to run locally on the device and use `expo-sqlite` to store data, identities, and keys. Our
identifier provider will be `did:ethr`. Initially, we will set up the [agent](../veramo_agent/introduction.md) in the
most basic config and add more plugins for additional functionality as we go.

Right now we just want to create an [identifier](../basics/identifiers.md).

## Bootstrap React Native

Use the [Expo CLI](https://docs.expo.dev/workflow/expo-cli/) bootstrap a new typescript project.
As a prerequisite, please make sure to have `expo-cli` installed globally:

```bash
npm install -g expo-cli
```

Then, we initialize a new project like so:

```bash
expo init VeramoMobile -t expo-template-blank-typescript
cd VeramoMobile
```

Ensure your project is building and running ok before continuing to next steps (`npm run android` or `npm run ios`).

## Install Dependencies

### Prerequisite configuration

In an ideal world we would install some dependencies, paste some sample code and start our app, but anyone who has
worked with a non-trivial react-native app probably already knows that we don't currently live in this ideal world.
Some libraries that we will be depending on make use of the node `crypto` package, or the `crypto.subtle` API of
browsers. These are not yet available to react-native/expo environments out of the box, so there is a bit of ceremony to
bundle everything properly.

Also, the metro bundler that react-native uses doesn't yet support the `cjs` file extension (
see [facebook/metro#535](https://github.com/facebook/metro/issues/535)) which is used by some libraries in the stack, so
we have to configure these too.

#### `cjs` extension

Please adjust your `metro.config.js` file to look like this:

```js
// filename: metro.config.js
const { getDefaultConfig } = require('metro-config')
const { resolver: defaultResolver } = getDefaultConfig.getDefaultValues()

exports.resolver = {
  ...defaultResolver,
  sourceExts: [...defaultResolver.sourceExts, 'cjs'],
}
```

#### `crypto` shims

Next, we start setting up the shims that will be required by our libraries.

```bash
npm i @sinonjs/text-encoding react-native-get-random-values @ethersproject/shims
npm i -D rn-nodeify babel-plugin-rewrite-require
```

Next, edit your `package.json` file and add a `postinstall` script:

```json5
// filename: package.json
{
  //...
  scripts: {
    // ...
    postinstall: 'rn-nodeify --install crypto,stream,process --hack',
  },
}
```

Run a `npm install` to trigger all the required to be installed and adjusted and to generate a `./shim.js` file.
Open `shim.js` and uncomment the last line that says `require('crypto)`.

```js
// filename: shim.js

// ...

// If using the crypto shim, uncomment the following line to ensure
// crypto is loaded first, so it can populate global.crypto
require('crypto')
```

Now edit your `babel.config.js` file at your project root and add the `babel-plugin-rewrite-require` to it, like so:

```js
// filename: babel.config.js
module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'babel-plugin-rewrite-require',
        {
          aliases: {
            crypto: 'crypto-browserify',
            stream: 'stream-browserify',
          },
        },
      ],
    ],
  }
}
```

Next, we can start adding the shims to the top of our `App.tsx` file. Read
about [strong random values here](https://docs.ethers.io/v5/cookbook/react-native/#cookbook-reactnative-security).

```tsx
// filename: App.tsx

/// shims
import '@sinonjs/text-encoding'
import 'react-native-get-random-values'
import './shim.js'
import '@ethersproject/shims'
```

Now, install all the pods in your project that came with the new dependencies.

```bash
npx pod-install
```

Prerequisites are ready. We can now go on to create a Veramo agent.

## Veramo packages

Let's install Veramo Core and some plugins. As you may already have read, Veramo is a framework where almost all the
functionality is provided by plugins. Depending on the constellation of plugins that you are using, your Veramo agent
will be able to perform some functions or others.

In this case, we are creating a Veramo agent that can create a specific type of DID.
Veramo can work with many DID methods, and since it is modular and extensible you can also add support for other methods
that are not provided out of the box. But first let's work with a single type of DID, `did:ethr`.

Don't worry; we will walk through what each of these plugins does in the next section.

```bash
npm install \
  @veramo/core \
  @veramo/did-manager \
  @veramo/key-manager \
  @veramo/data-store \
  @veramo/kms-local \
  @veramo/did-provider-ethr
```

## Bootstrap Veramo

Create a setup file in `src/veramo/setup.ts` and import the following dependencies:

```ts
// filename: src/veramo/setup.ts

// imports:
// Core interfaces
import { createAgent, IDIDManager, IKeyManager } from '@veramo/core'

// Core identity manager plugin. This allows you to create and manage DIDs by orchestrating different DID provider packages.
// This implements `IDIDManager`
import { DIDManager } from '@veramo/did-manager'

// Core key manager plugin. DIDs use keys and this key manager is required to know how to work with them.
// This implements `IKeyManager`
import { KeyManager } from '@veramo/key-manager'

// This plugin allows us to create and manage `did:ethr` DIDs. (used by DIDManager)
import { EthrDIDProvider } from '@veramo/did-provider-ethr'

// A key management system that uses a local database to store keys (used by KeyManager)
import { KeyManagementSystem, SecretBox } from '@veramo/kms-local'

// Storage plugin using TypeORM to link to a database
import { Entities, KeyStore, DIDStore, migrations, PrivateKeyStore } from '@veramo/data-store'

// TypeORM is installed with '@veramo/data-store'
import { DataSource } from 'typeorm'
```

Create an Infura project ID and a database encryption key:

```ts
// filename: src/veramo/setup.ts

// ... imports

// CONSTANTS
// You will need to get a project ID from infura https://www.infura.io
const INFURA_PROJECT_ID = '<your PROJECT_ID here>'

// This is a raw X25519 private key, provided as an example.
// You can run `npx @veramo/cli config create-secret-key` in a terminal to generate a new key.
// In a production app, this MUST NOT be hardcoded in your source code.
const DB_ENCRYPTION_KEY = '29739248cad1bd1a0fc4d9b75cd4d2990de535baf5caadfdf8d8f86664aa830c'
```

### Database configuration

Since we're in an expo app, we'll use `expo-sqlite` as a database driver.

```bash
npm i expo-sqlite
```

Next initialize our sqlite database using TypeORM:

```ts
// filename: src/veramo/setup.ts

// ... imports & CONSTANTS

// DB setup:
let dbConnection = new DataSource({
  type: 'expo',
  driver: require('expo-sqlite'),
  database: 'veramo.sqlite',
  migrations: migrations,
  migrationsRun: true,
  logging: ['error', 'info', 'warn'],
  entities: Entities,
})

// optionally, the connection can also be pre-initialized:
dbConnection = dbConnection.initialize()
```

Finally, create the agent and add plugins for Key, Identity, and Storage.

```ts
// filename: src/veramo/setup.ts

// ... imports & CONSTANTS & DB setup

// Veramo agent setup
export const agent = createAgent<IDIDManager & IKeyManager & IDataStore & IDataStoreORM>({
  plugins: [
    new KeyManager({
      store: new KeyStore(dbConnection),
      kms: {
        local: new KeyManagementSystem(new PrivateKeyStore(dbConnection, new SecretBox(DB_ENCRYPTION_KEY))),
      },
    }),
    new DIDManager({
      store: new DIDStore(dbConnection),
      defaultProvider: 'did:ethr',
      providers: {
        'did:ethr': new EthrDIDProvider({
          defaultKms: 'local',
          networks: [
            {
              name: 'goerli',
              rpcUrl: 'https://goerli.infura.io/v3/' + INFURA_PROJECT_ID,
            },
          ],
        }),
      },
    }),
  ],
})
```

### What we have so far.

Let's take a moment to understand what's going on here.
We created an `agent` object using the `createAgent` method and an array of `plugins`.
These plugins provide some methods, which are then made available from the `agent` object.

For example, the `DIDManager` plugin has a `didManagerCreate()` function.
While this plugin is in use, this function is available on the `agent` object as `agent.didManagerCreate()`.

Internally, the `DIDManager` needs to work with keys when creating DIDs, or when executing operations that update a DID
document. To do this, it calls `agent` and asks for a `IKeyManager` implementation. In our case, this is provided by
the `KeyManager` plugin. This kind of pattern makes the framework very modular, allowing you to replace plugin
implementations to suit your needs, or to add other plugins that may not be available out of the box.

### This is made for Typescript

The `createAgent` method allows you to specify the plugin interfaces that you are using, by
the [Intersection type](https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types) between the `<>`
angle brackets.

This is entirely optional, but it allows you to develop more easily by letting your IDE give you hints about the
available method names and their parameters and return types.

We haven't found a good way of automatically

## Basic User Interface

Awesome! That's a basic agent configured and ready to use. Let's try it out :rocket:
Now that the agent has been created and configured with plugins, we can create some identifiers. For this, we will need
some basic UI.

:::note Veramo does not impose decisions on how you manage state in your app and will work alongside any existing
architecture like Redux or Mobx etc. For brevity, we use `useState` in this example, but you can treat Veramo like you
would any async data source.
:::

Open `App.tsx`, delete all the contents after the shims you setup earlier and then replace it with the following code:

```tsx
// filename: App.tsx

// ... shims

import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, View, Text, Button } from 'react-native'

// Import the agent from our earlier setup
import { agent } from './src/veramo/setup'
// import some data types:
import { IIdentifier } from '@veramo/core'

const App = () => {
  const [identifiers, setIdentifiers] = useState<IIdentifier[]>([])

  // Add the new identifier to state
  const createIdentifier = async () => {
    const _id = await agent.didManagerCreate({
      provider: 'did:ethr',
      options: {
        network: 'goerli',
      },
    })
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
              identifiers.map((id: IIdentifier) => (
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

Now, we can finally run the app to see some identifiers being created!

```bash
npm run android
# or
npm run ios
```

Once loaded hit the **Create identifier** button a few times, and you should see your identifiers being created!

## Building for production

When you use `@veramo/data-store` you will need to ensure that class names are not mangled during the minification step
of a release build. This is because it uses `typeorm` which relies on class names to make decisions about database
migrations.

To get around this issue, you can use one of the solutions from this thread:

- https://github.com/typeorm/typeorm/issues/4561#issuecomment-546010351
- https://forums.expo.dev/t/change-minifierconfig-for-minify-uglify/36460

## Troubleshooting

### your environment

When working with expo/react-native it is easy to get your working directory into a broken state.
We found that the easiest way out is to clear all caches and start from scratch (keeping your source code, of course).

To do this we usually:

- stop the `metro` bundler,
- then clear some directories,
- reinstall,
- restart the bundler without cache
- rebundle the app

```bash
rm -rf node_modules
rm -rf $TMPDIR/metro-cache
rm package-lock.json
npm install
npm start -- -c
# press `a` or `i` to run your app
# press `r` to rebundle
```

### your Veramo related code

Normally you will use a lot of `@veramo/*` packages when working with Veramo. It is very common for these packages to
depend on each other, and/or on other common libraries.
For this reason, it is _very important to keep these packages in sync_ in terms of versions.
Having different versions of these libraries running at the same time in your app will very easily lead to
non-deterministic behavior. The only compatibility matrix you can count on is **all `@veramo/*` packages at the same
version**.

## Recap

In this guide we:

- set up a react-native application using `expo`,
- did all the ceremony to make sure `crypto` works for all the dependencies,
- created a very basic Veramo agent,
- used that agent to create some DIDs and show them in a basic UI.

These `did:ethr:goerli` identifiers we created
are [Decentralized Identifiers(DIDs)](https://www.w3.org/TR/did-core/#a-simple-example) that use the `ethr` DID method
and are anchored on the `goerli` network. This means that when someone wants to resolve these DIDs, the resolver uses
that network to construct the corresponding DID documents. You may also have noticed that there was no transaction
involved in creating these DIDs. You can read more about how this works by going through
the [`did:ethr` spec](https://github.com/decentralized-identity/ethr-did-resolver/blob/master/doc/did-method-spec.md).

Check out the next section to see how to set up your Veramo agent to resolve these DIDs and others and obtain their DID
Documents.
