---
id: node_didcomm
title: Communication between agents
sidebar_label: Communication between agents
---

This guide covers setting up an app that emulates two agents communicating
using [DIDCommMessaging](https://identity.foundation/didcomm-messaging/spec/)
You will set up 2 agents. One that can listen to DIDComm messages and one that can send them.

### Prerequisites

Starting with the code from the [node setup tutorial](./node_setup_identifiers.md)

Install some necessary Veramo plugins & `express`

```bash
yarn add express @veramo/message-handler @veramo/remote-server @veramo/did-jwt @veramo/did-comm @veramo/credential-w3c @veramo/data-store
```

## Extend your agent with the new plugins

In your `./src/veramo/setup.ts`, add the following imports:

```typescript
import { MessageHandler } from '@veramo/message-handler'
import { DIDComm, DIDCommMessageHandler } from '@veramo/did-comm'
import { DataStore } from '@veramo/data-store'
import { JwtMessageHandler } from '@veramo/did-jwt'
import { CredentialIssuer, W3cMessageHandler } from '@veramo/credential-w3c'
```

add then add the following plugins to the array of `plugins` on the agent:

```typescript
plugins: [
  //...
  new CredentialIssuer(),
  new DIDComm(),
  new DataStore(dbConnection),
  new MessageHandler({
    messageHandlers: [
      // in the case of message handlers, the order of handlers is important
      new DIDCommMessageHandler(),
      new JwtMessageHandler(),
      new W3cMessageHandler(),
    ],
  }),
]
```

## Create a listening agent

We will set up a simple expressjs app that listens to incoming HTTP POST messages and sends them to Veramo. Create a
file named `src/alice-agent.ts` and fill it with something like this:

```typescript
import { MessagingRouter, RequestWithAgentRouter } from '@veramo/remote-server'
import { agent } from './veramo/setup'
import express from 'express'

const port = process.env.PORT || 3002

const messagingRouter = MessagingRouter({
  metaData: { type: 'express' },
})

const app = express()
app
  .use(RequestWithAgentRouter({ agent }))
  .use(messagingRouter)
  .listen(port, async () => {
    console.log(`Local agent Alice listening for messages at ${port}`)
  })
```

### Add a command for Alice

To run this agent that can listen to messages add a new script to `package.json`:

```ts
  "scripts": {
    // ...
    "alice:listen": "ts-node ./src/alice-agent"
  }
```

### test your setup

You can now start your agent using `yarn alice:listen`.

You can try to send Alice a credential to test your setup. In another terminal run the following:

```bash
curl -X POST -H "Content-Type: application/json"\
 -d eyJhbGciOiJFUzI1NksiLCJ0eXAiOiJKV1QifQ.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwiRXhhbXBsZSJdLCJjcmVkZW50aWFsU3ViamVjdCI6eyJoZWxsbyI6IndvcmxkIn19LCJzdWIiOiJodHRwczovL2V4YW1wbGUuY29tIiwibmJmIjoxNjM2Mzg0NTEyLCJpc3MiOiJkaWQ6ZXRocjpyaW5rZWJ5OjB4MDM0ODg4YTdiODhjMmJhZWMyMzkyM2E1OTk4ZTFjN2UwMTc5OTQwMGZjZjM0MjI0MzEzNDA2MDMwY2EzMzkyOTIwIn0.qWpFDpfl6Ml3CLiKIpS0hW3wJ4oW5b2mNXcVikuPhfLfwtzzHmI4tjFYxVXyrBYO_PtmY9B0D4P-f89wmgCsPQ\
 http://localhost:3002
```

You should see something like this as a response:

```json
{
  "id": "bf89b3f819896d4ba7b3d7af65da3046284a815778f7bdfb550a9748c908aad060f03f01f64d5d41b1a4d381c5c3f792c584fc852dc8a91c8d4fdc9b8ac84bee"
}
```

### Some clarification:

Once started, the agent is now listening to messages coming into port 3002. All http POST requests to that port will be
interpreted as messages by the `MessageHandler` plugin.

The flow of data is as follows:

- With that `curl` command, a blob of data is sent to that endpoint.
- `MessagingRouter` sends this data to the `handleMessage()` method that is provided by the `MessageHandler` plugin.
- The first message handler tries to interpret the data, in our case `DIDCommMessageHandler`.
- It is not a DIDComm message, so the blob of data is just forwarded to the next handler, `JwtMessageHandler`
- This recognises it as a valid JWT and goes on to verify it.
- Once verification passes, the next handler `W3CMessageHandler` is called using some extra metadata.
- This last handler observes that the message is a valid W3C VerifiableCredential, so it saves it to the `DataStore`

> With the current setup, the agent will store any data that looks valid. Later we will explore how to filter messages.

## Adding DIDComm to the mix

// TBD

### didManagerAddService

// TBD

### spin up another agent

// TBD

### packDIDCommMessage

// TBD

### sendDIDCommMessage

// TBD

Congrats, You have set up two agents and sent a message from Bob to Alice.

## Notes
