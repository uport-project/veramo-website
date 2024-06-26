---
id: core-types.icredentialissuer.listusableproofformats
title: ICredentialIssuer.listUsableProofFormats() method
hide_title: true
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## ICredentialIssuer.listUsableProofFormats() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Returns a list of supported proof formats.

**Signature:**

```typescript
listUsableProofFormats(identifier: IIdentifier, context: IAgentContext<{}>): Promise<Array<ProofFormat>>;
```

## Parameters

| Parameter  | Type                                                     | Description                                                                                                                                                     |
| ---------- | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| identifier | [IIdentifier](./core-types.iidentifier.md)               | The identifier that may be used to sign a credential or presentation                                                                                            |
| context    | [IAgentContext](./core-types.iagentcontext.md)&lt;{}&gt; | <p>This reserved param is automatically added and handled by the framework, \*do not override\*</p><p>This API may change without a BREAKING CHANGE notice.</p> |

**Returns:**

Promise&lt;Array&lt;[ProofFormat](./core-types.proofformat.md)&gt;&gt;
