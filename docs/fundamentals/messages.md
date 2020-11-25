---
id: messages
title: Messages
---

A [Message](/docs/api/daf-message-handler.message) is a data format specific to the Serto framework. All incoming data that passes through the core [message handler](/docs/) will get formated when successfully parsed.

```
{
    type: "w3c.vc",
    data: {},
    ...fill this out
}

```

The Message Handler method takes a jwt as input and can perform a set of actions based on the decoded message type. If the message handler does not understand the message type it will do nothing by default but of course this can also be customized.

Creating or adding plugins to decode, interpret and perform actions based on message types is where you will begin to see the composability and interoperability that is at the heart of Serto.

Serto has core packages for DIDComm, W3c, JWT and Selective Disclosure
