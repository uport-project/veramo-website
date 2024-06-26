---
id: data-store.presentation
title: Presentation class
hide_title: true
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## Presentation class

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Represents some common properties of a Verifiable Presentation that are stored in a TypeORM database for querying.

**Signature:**

```typescript
export declare class Presentation extends BaseEntity
```

**Extends:** BaseEntity

## Properties

| Property                                                       | Modifiers | Type                                                             | Description               |
| -------------------------------------------------------------- | --------- | ---------------------------------------------------------------- | ------------------------- |
| [context](./data-store.presentation.context.md)                |           | string\[\]                                                       | **_(BETA)_**              |
| [credentials](./data-store.presentation.credentials.md)        |           | Relation&lt;[Credential](./data-store.credential_2.md)\[\]&gt;   | **_(BETA)_**              |
| [expirationDate?](./data-store.presentation.expirationdate.md) |           | Date                                                             | **_(BETA)_** _(Optional)_ |
| [hash](./data-store.presentation.hash.md)                      |           | string                                                           | **_(BETA)_**              |
| [holder](./data-store.presentation.holder.md)                  |           | Relation&lt;[Identifier](./data-store.identifier.md)&gt;         | **_(BETA)_**              |
| [id?](./data-store.presentation.id.md)                         |           | String                                                           | **_(BETA)_** _(Optional)_ |
| [issuanceDate](./data-store.presentation.issuancedate.md)      |           | Date                                                             | **_(BETA)_**              |
| [messages](./data-store.presentation.messages.md)              |           | Relation&lt;[Message](./data-store.message.md)\[\]&gt;           | **_(BETA)_**              |
| [raw](./data-store.presentation.raw.md)                        |           | [VerifiablePresentation](./core-types.verifiablepresentation.md) | **_(BETA)_**              |
| [type](./data-store.presentation.type.md)                      |           | string\[\]                                                       | **_(BETA)_**              |
| [verifier?](./data-store.presentation.verifier.md)             |           | Relation&lt;[Identifier](./data-store.identifier.md)\[\]&gt;     | **_(BETA)_** _(Optional)_ |
