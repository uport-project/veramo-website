---
slug: version_1.2
title: Working with the latest DID spec
author: Mircea Nistor
author_title: Protocol engineer @ Veramo
author_url: https://github.com/mirceanis
author_image_url: https://avatars.githubusercontent.com/u/965762?s=400&v=4
tags: [veramo, did, cli]
---

We are excited to announce a new feature release of `Veramo`!

This new release brings together a bunch of fixes and features that we've been working on recently, including many from
the community (thank you for your contributions!).

You can get a detailed list of changes in
the [release description](https://github.com/uport-project/veramo/releases/tag/v1.2.0). Depending on how you're
using `Veramo` you might be impacted by some breaking changes that had to be added in this release.

## Veramo uses the latest DID spec

Since the [DID spec](https://www.w3.org/TR/did-core/) is in a more stable state, we took the opportunity to upgrade
the `@veramo/did-resolver` and other connected internals to match this new spec. This should not be affecting you unless
you are directly using the `agent.didResolve()` method:

- The return type is now `DidResolutionResult` instead of just `DIDDocument`
  - This result includes a `didDocument` and metadata about the document and resolution process.
  - Errors are no longer thrown by the resolution process, instead they are returned as properties of
    the `didDocumentMetadata` object.
- Many DID resolvers (including the ones we maintain,
  ([`did:ethr`](https://github.com/decentralized-identity/ethr-did-resolver)
  and [`did:web`](https://github.com/decentralized-identity/web-did-resolver)) now use the `verificationMethod` property
  instead of `publicKey`, with the same contents.

If you are directly importing dependencies from
the [`did-resolver`](https://github.com/decentralized-identity/did-resolver)
/ [`did-jwt`](https://github.com/decentralized-identity/did-jwt) stack, please make sure to use the latest versions of
those for best compatibility.

## Some changes to the CLI configuration

There are some slight changes to the `@veramo/cli` configuration, mostly around the `veramo server`. options. Check out
the [veramo docs](../docs/veramo_agent/configuration_internals) to see how the CLI configuration file
works.

### Ngrok is no longer included

In previous version you could define ngrok configuration directly in `agent.yml` like so:

```yaml
server:
  ngrok:
    connect: true
    authtoken: XZY
    subdomain: alice-did
    region: eu
```

From now on, if you want to have the same functionality, you need to launch ngrok separately:

```bash
ngrok http -subdomain=alice-did -region=eu --authtoken=XZY 3000
```

and then update `agent.yml` file to use the correct baseUrl

```yaml
server:
  baseUrl: https://alice-did.eu.ngrok.io
```

### Creating a default DID when initializing server

Previously this was controlled with this configuration:

```yaml
server:
  defaultDID:
    create: true
    messagingServiceEndpoint: /messaging
```

In the new version this was moved to a separate section:

```yaml
server:
  # Execute during server initialization
  init:
    - $require: '@veramo/remote-server?t=function#createDefaultDid'
      $args:
        - agent:
            $ref: /agent
          baseUrl:
            $ref: /constants/baseUrl
          messagingServiceEndpoint: /messaging
```

So if you don't need this functionality, instead of setting `server.defaultDID.create` to `false`, you can simply remove this section from your config file.

## New plugin for did:key

This is an additional package that allows you to create, use and resolve `did:key` identifiers directly in Veramo.

To be able to create and manage `did:key` identifiers you'll have to add the provider to the `DIDManager` plugin:

```typescript
import { KeyDIDProvider } from '@veramo/did-provider-key'

const agent = createAgent<>({
  plugins: [
    // ...
    new DIDManager({
      // ...
      providers: {
        // ...
        'did:key': new KeyDIDProvider({
          defaultKms: 'local',
        }),
      },
// ...
```

And then to create a `did:key` identifier:

```typescript
const myKeyDid = await agent.didManagerCreate({ provider: 'did:key' })
```

---

As always, if there are any issues, [let us know abut them](https://github.com/uport-project/veramo/issues), and if
there are questions, please use the [discussions page](https://github.com/uport-project/veramo/discussions) to get them
answered and stay tuned for more.
