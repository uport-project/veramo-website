---
id: credential-eip712.icredentialissuereip712.verifypresentationeip712
title: ICredentialIssuerEIP712.verifyPresentationEIP712() method
hide_title: true
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## ICredentialIssuerEIP712.verifyPresentationEIP712() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Verifies a Verifiable Presentation EIP712 Format.

**Signature:**

```typescript
verifyPresentationEIP712(args: IVerifyPresentationEIP712Args, context: IRequiredContext): Promise<boolean>;
```

## Parameters

| Parameter | Type                                                                                  | Description                                                                                  |
| --------- | ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| args      | [IVerifyPresentationEIP712Args](./credential-eip712.iverifypresentationeip712args.md) | Arguments necessary to verify the Presentation                                               |
| context   | [IRequiredContext](./credential-eip712.irequiredcontext.md)                           | This reserved param is automatically added and handled by the framework, \*do not override\* |

**Returns:**

Promise&lt;boolean&gt;

- a promise that resolves to the boolean true on successful verification or rejects on error

## Remarks

Please see [Verifiable Credential data model](https://www.w3.org/TR/vc-data-model/#presentations)
