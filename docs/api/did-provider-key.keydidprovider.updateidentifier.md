---
id: did-provider-key.keydidprovider.updateidentifier
title: KeyDIDProvider.updateIdentifier() method
hide_title: true
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## KeyDIDProvider.updateIdentifier() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

**Signature:**

```typescript
updateIdentifier(args: {
        did: string;
        kms?: string | undefined;
        alias?: string | undefined;
        options?: any;
    }, context: IAgentContext<IKeyManager>): Promise<IIdentifier>;
```

## Parameters

| Parameter | Type                                                                                             | Description |
| --------- | ------------------------------------------------------------------------------------------------ | ----------- |
| args      | { did: string; kms?: string &#124; undefined; alias?: string &#124; undefined; options?: any; }  |             |
| context   | [IAgentContext](./core-types.iagentcontext.md)&lt;[IKeyManager](./core-types.ikeymanager.md)&gt; |             |

**Returns:**

Promise&lt;[IIdentifier](./core-types.iidentifier.md)&gt;
