---
id: messages
title: Messages
---

A [Message](/docs/api/message-handler) is a data format specific to the Veramo framework. All incoming data that passes through the core message handler will get formatted when successfully parsed.

```
{
    type: "w3c.vc",
    data: {},
}

```

The Message Handler method takes a message as input and can perform actions based on the decoded message type. If the message handler does not understand the message type, it will do nothing by default, but this can also be customized.

Creating or adding plugins to decode, interpret, and perform actions based on message types is where you will begin to see the composability and interoperability at the heart of Veramo.

Veramo has core packages for DIDComm, W3c, JWT, and Selective Disclosure.
