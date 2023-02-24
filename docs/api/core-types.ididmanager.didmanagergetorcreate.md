---
id: core-types.ididmanager.didmanagergetorcreate
title: IDIDManager.didManagerGetOrCreate() method
hide_title: true
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## IDIDManager.didManagerGetOrCreate() method

Returns an existing identifier or creates a new one for a specific alias

<b>Signature:</b>

```typescript
didManagerGetOrCreate(args: IDIDManagerGetOrCreateArgs, context: IAgentContext<IKeyManager>): Promise<IIdentifier>;
```

## Parameters

| Parameter | Type                                                                                             | Description                                                                                                                                                                                                                                                    |
| --------- | ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| args      | [IDIDManagerGetOrCreateArgs](./core-types.ididmanagergetorcreateargs.md)                         | The alias used for the search and the provider/kms/options used to create the DID when none is found.                                                                                                                                                          |
| context   | [IAgentContext](./core-types.iagentcontext.md)&lt;[IKeyManager](./core-types.ikeymanager.md)&gt; | \*RESERVED\* This is filled by the framework when the method is called. This method's <a href="/docs/agent/plugins#executing-plugin-methods">execution context</a> requires an <code>agent</code> that has [IKeyManager](./core-types.ikeymanager.md) methods. |

<b>Returns:</b>

Promise&lt;[IIdentifier](./core-types.iidentifier.md)&gt;