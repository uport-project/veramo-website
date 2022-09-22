---
id: react_native_2_resolve_dids
title: Resolve DIDs
sidebar_label: Resolve DIDs
---

Going forward, the hard part of getting started on with Veramo on react-native(expo) is already behind us.
From now, guides should be much simpler: install plugins, use plugins.

In our previous step we saw how to configure a Veramo instance to generate DIDs for us. It's very likely that this
Veramo instance will not live in an isolated box, but will rather have to work with other (de)centralized systems, which
use their own DIDs.
Let's see how to configure our Veramo instance to resolve these remote DIDs and obtain their corresponding DID
documents. These documents will be used to get more information about those DIDs, like what keys they use for signing
and/or encryption, what service endpoints can be used with them, etc.

## How this works

DID resolution depends on the DID method being used. This means that the ability to resolve various DID types, we have
to find implementations of these DID method drivers and use them.
There are lots of DID methods out there, and the choice of DID method to use is out of scope for this guide. But, since
we already saw how to create `did:ethr` identifiers, let's see how to also resolve them to get the DID documents.

## Installation

The veramo list of "core" packages contains a DID resolver plugin. This plugin is an aggregator of multiple DID method
drivers. Let's install that plugin as well as a DID resolver for `did:ethr`. And to see how multiple DID methods can be
supported, let's also add support for resolving `did:web`.

`npm install @veramo/did-resolver ethr-did-resolver web-did-resolver`

## Setup

Next, let's install these in our Veramo setup. First, we'll add these imports:

```ts
// filename: src/veramo/setup.ts

// imports:
// Core interfaces
import { IResolver } from '@veramo/core'

// Core DID resolver plugin. This plugin orchestrates different DID resolver drivers to resolve the corresponding DID Documents for the given DIDs.
// This plugin implements `IResolver`
import { DIDResolver } from '@veramo/did-resolver'

// the did:ethr resolver package
import { getResolver as ethrDidResolver } from 'ethr-did-resolver'
// the did:web resolver package
import { getResolver as webDidResolver } from 'web-did-resolver'
```

Then, let's add this plugin to the list of plugins given to `createAgent`:

```ts
// filename: src/veramo/setup.ts

// ... imports & CONSTANTS & DB setup

// Veramo agent setup
export const agent = createAgent<IDIDManager & IKeyManager & IDataStore & IDataStoreORM & IResolver>({
  // we also add the IResolver plugin interface
  plugins: [
    //
    // ... previously added plugins
    //
    new DIDResolverPlugin({
      ...ethrDidResolver({ infuraProjectId: INFURA_PROJECT_ID }), // and set it up to support `did:ethr`
      ...webDidResolver(), // and `did:web`
    }),
  ],
})
```

## Usage

Let's add a method that will call the agent to resolve a DID and a hook that will be used to update the UI based on
state.

```ts
// filename: App.tsx

// ... imports
import { DIDResolutionResult } from '@veramo/core'

const App = () => {
  const [resolutionResult, postResolutionResult] = useState<DIDResolutionResult | undefined>()

  // Add the new identifier to state
  const resolveDID = async (did: string) => {
    const result = await agent.resolveDid({ didUrl: did })
    postResolutionResult(result)
  }

  // ... the rest of the App code
}
```

## Displaying some result

## Recap

In this guide we:

- installed a new Veramo plugin that can resolve DIDs,
- installed drivers for 2 DID methods
- used the new plugin to resolve some DIDs
-

Check out the next sections to see how to create and
verify [Verifiable Credentials](https://www.w3.org/TR/vc-data-model/) using Veramo.
