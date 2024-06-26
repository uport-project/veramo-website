---
id: data-store-json.veramojsoncache
title: VeramoJsonCache interface
hide_title: true
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## VeramoJsonCache interface

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

A JSON data layout for data-store-json implementations.

This API may change in future versions without a BREAKING CHANGE notice.

**Signature:**

```typescript
export interface VeramoJsonCache
```

## Properties

| Property                                                             | Modifiers | Type                                                                                        | Description               |
| -------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------- | ------------------------- |
| [claims?](./data-store-json.veramojsoncache.claims.md)               |           | Record&lt;string, [ClaimTableEntry](./data-store-json.claimtableentry.md)&gt;               | **_(BETA)_** _(Optional)_ |
| [credentials?](./data-store-json.veramojsoncache.credentials.md)     |           | Record&lt;string, [CredentialTableEntry](./data-store-json.credentialtableentry.md)&gt;     | **_(BETA)_** _(Optional)_ |
| [dids?](./data-store-json.veramojsoncache.dids.md)                   |           | Record&lt;string, [IIdentifier](./core-types.iidentifier.md)&gt;                            | **_(BETA)_** _(Optional)_ |
| [keys?](./data-store-json.veramojsoncache.keys.md)                   |           | Record&lt;string, [ManagedKeyInfo](./core-types.managedkeyinfo.md)&gt;                      | **_(BETA)_** _(Optional)_ |
| [messages?](./data-store-json.veramojsoncache.messages.md)           |           | Record&lt;string, [IMessage](./core-types.imessage.md)&gt;                                  | **_(BETA)_** _(Optional)_ |
| [presentations?](./data-store-json.veramojsoncache.presentations.md) |           | Record&lt;string, [PresentationTableEntry](./data-store-json.presentationtableentry.md)&gt; | **_(BETA)_** _(Optional)_ |
| [privateKeys?](./data-store-json.veramojsoncache.privatekeys.md)     |           | Record&lt;string, [ManagedPrivateKey](./key-manager.managedprivatekey.md)&gt;               | **_(BETA)_** _(Optional)_ |
