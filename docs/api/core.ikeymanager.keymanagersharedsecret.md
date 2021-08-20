---
id: core.ikeymanager.keymanagersharedsecret
title: IKeyManager.keyManagerSharedSecret() method
hide_title: true
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## IKeyManager.keyManagerSharedSecret() method

Compute a shared secret with the public key of another party.

This computes the raw shared secret (the result of a Diffie-Hellman computation) To use this for symmetric encryption you MUST apply a KDF on the result.

<b>Signature:</b>

```typescript
keyManagerSharedSecret(args: IKeyManagerSharedSecretArgs): Promise<string>;
```

## Parameters

| Parameter | Type                                                                 | Description |
| --------- | -------------------------------------------------------------------- | ----------- |
| args      | [IKeyManagerSharedSecretArgs](./core.ikeymanagersharedsecretargs.md) |             |

<b>Returns:</b>

Promise&lt;string&gt;

a `Promise` that resolves to a hex encoded shared secret