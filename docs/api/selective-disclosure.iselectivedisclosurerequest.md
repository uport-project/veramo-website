---
id: selective-disclosure.iselectivedisclosurerequest
title: ISelectiveDisclosureRequest interface
hide_title: true
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## ISelectiveDisclosureRequest interface

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Represents the Selective Disclosure request parameters.

**Signature:**

```typescript
export interface ISelectiveDisclosureRequest
```

## Remarks

See [Selective Disclosure Request](https://github.com/uport-project/specs/blob/develop/messages/sharereq.md)

This API may change without a BREAKING CHANGE notice.

## Properties

| Property                                                                          | Modifiers | Type                                                                             | Description                                                                                        |
| --------------------------------------------------------------------------------- | --------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| [claims](./selective-disclosure.iselectivedisclosurerequest.claims.md)            |           | [ICredentialRequestInput](./selective-disclosure.icredentialrequestinput.md)\[\] | **_(BETA)_** A list of claims that are being requested                                             |
| [credentials?](./selective-disclosure.iselectivedisclosurerequest.credentials.md) |           | string\[\]                                                                       | **_(BETA)_** _(Optional)_ A list of issuer credentials that the target will use to establish trust |
| [issuer](./selective-disclosure.iselectivedisclosurerequest.issuer.md)            |           | string                                                                           | **_(BETA)_** The issuer of the request                                                             |
| [replyUrl?](./selective-disclosure.iselectivedisclosurerequest.replyurl.md)       |           | string                                                                           | **_(BETA)_** _(Optional)_ The URL where the response should be sent back                           |
| [subject?](./selective-disclosure.iselectivedisclosurerequest.subject.md)         |           | string                                                                           | **_(BETA)_** _(Optional)_ The target of the request                                                |
| [tag?](./selective-disclosure.iselectivedisclosurerequest.tag.md)                 |           | string                                                                           | **_(BETA)_** _(Optional)_                                                                          |
