---
id: core-types.ididmanager.didmanagerremoveservice
title: IDIDManager.didManagerRemoveService() method
hide_title: true
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## IDIDManager.didManagerRemoveService() method

Removes a service from a DID Document

**Signature:**

```typescript
didManagerRemoveService(args: IDIDManagerRemoveServiceArgs, context: IAgentContext<IKeyManager>): Promise<any>;
```

## Parameters

| Parameter | Type                                                                                             | Description |
| --------- | ------------------------------------------------------------------------------------------------ | ----------- |
| args      | [IDIDManagerRemoveServiceArgs](./core-types.ididmanagerremoveserviceargs.md)                     |             |
| context   | [IAgentContext](./core-types.iagentcontext.md)&lt;[IKeyManager](./core-types.ikeymanager.md)&gt; |             |

**Returns:**

Promise&lt;any&gt;

identifier provider specific response. Can be txHash, etc,
