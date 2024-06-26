---
id: remote-server.messagingrouter
title: MessagingRouter() function
hide_title: true
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## MessagingRouter() function

Creates a router for handling incoming messages.

Messages posted to this router get sent to the `handleMessage` method of the associated agent where this is used.

**Signature:**

```typescript
MessagingRouter: (options: MessagingRouterOptions) => Router
```

## Parameters

| Parameter | Type                   | Description           |
| --------- | ---------------------- | --------------------- |
| options   | MessagingRouterOptions | Initialization option |

**Returns:**

Router

Expressjs router
