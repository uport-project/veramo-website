---
id: core.w3cverifiablecredential
title: W3CVerifiableCredential type
hide_title: true
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## W3CVerifiableCredential type

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Represents a signed Verifiable Credential (includes proof), in either JSON or compact JWT format. See [VC data model](https://www.w3.org/TR/vc-data-model/#credentials) See [proof formats](https://www.w3.org/TR/vc-data-model/#proof-formats)

This API may change without a BREAKING CHANGE notice.

<b>Signature:</b>

```typescript
export declare type W3CVerifiableCredential = VerifiableCredential | CompactJWT
```

<b>References:</b> [VerifiableCredential](./core.verifiablecredential.md), [CompactJWT](./core.compactjwt.md)