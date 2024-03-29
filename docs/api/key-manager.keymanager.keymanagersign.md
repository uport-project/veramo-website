---
id: key-manager.keymanager.keymanagersign
title: KeyManager.keyManagerSign() method
hide_title: true
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## KeyManager.keyManagerSign() method

Generates a signature according to the algorithm specified.

**Signature:**

```typescript
keyManagerSign(args: IKeyManagerSignArgs): Promise<string>;
```

## Parameters

| Parameter | Type                                                       | Description                                                                                       |
| --------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| args      | [IKeyManagerSignArgs](./core-types.ikeymanagersignargs.md) | The input to the signing method, including data to be signed, key reference and algorithm to use. |

**Returns:**

Promise&lt;string&gt;
