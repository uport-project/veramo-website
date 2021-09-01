---
id: message_handlers
title: Message Handlers
---

Message handlers implement the AbstractMessageHandler interface and are instantiated as a chain by the Message Handler plugin. Veramo includes a number of message handlers for you to use in your apps.

## Core Supported Message Handlers

The following plugins export a message handling method.

### `did-comm`

[did-comm](/docs/api/did-comm.md) • [DIDCommMessageHandler](/docs/api/did-comm.didcommmessagehandler.md)

DIDCommMessageHandler decrypts incoming messages using the private key of the recipient. The decrypted jwt is passed along to the JWT Message Handler.

![img](../../static/img/diagrams/message_didcomm.svg)

### `did-jwt`

[did-jwt](/docs/api/did-jwt.md) • [JWTMessageHandler](/docs/api/did-jwt.jwtmessagehandler.md)

JWTMessageHandler takes a JWT and creates a message object.

![img](../../static/img/diagrams/message_jwt.svg)

### `credential-w3c`

[credential-w3c](/docs/api/credential-w3c.md) • [W3CMessageHandler](/docs/api/credential-w3c.w3cmessagehandler.md)

W3CMessageHandler checks the message payload for Verifiable Credentials and Verifiable Presentations and formats the message object accordingly.

![img](../../static/img/diagrams/message_w3c.svg)

### `selective-disclosure`

[selective-disclosure](/docs/api/selective-disclosure.md) • [SDRMessageHandler](/docs/api/selective-disclosure.sdrmessagehandler.md)

SDRMessageHandler checks the message payload for Selective Disclosure Request formats the message object accordingly. Learn more about selective disclosure requests in the next section.

![img](../../static/img/diagrams/message_sdr.svg)
