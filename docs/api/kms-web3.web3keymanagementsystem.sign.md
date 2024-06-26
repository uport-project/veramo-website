---
id: kms-web3.web3keymanagementsystem.sign
title: Web3KeyManagementSystem.sign() method
hide_title: true
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## Web3KeyManagementSystem.sign() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

**Signature:**

```typescript
sign({ keyRef, algorithm, data, }: {
        keyRef: Pick<IKey, 'kid'>;
        algorithm?: string;
        data: Uint8Array;
    }): Promise<string>;
```

## Parameters

| Parameter                    | Type                                                                                               | Description |
| ---------------------------- | -------------------------------------------------------------------------------------------------- | ----------- |
| { keyRef, algorithm, data, } | { keyRef: Pick&lt;[IKey](./core-types.ikey.md), 'kid'&gt;; algorithm?: string; data: Uint8Array; } |             |

**Returns:**

Promise&lt;string&gt;
