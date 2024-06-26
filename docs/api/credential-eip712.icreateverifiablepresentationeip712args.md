---
id: credential-eip712.icreateverifiablepresentationeip712args
title: ICreateVerifiablePresentationEIP712Args interface
hide_title: true
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## ICreateVerifiablePresentationEIP712Args interface

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Encapsulates the parameters required to create a [W3C Verifiable Presentation](https://www.w3.org/TR/vc-data-model/#presentations) using the [EthereumEip712Signature2021](https://w3c-ccg.github.io/ethereum-eip712-signature-2021-spec/) proof format.

This API may change without a BREAKING CHANGE notice.

**Signature:**

```typescript
export interface ICreateVerifiablePresentationEIP712Args extends UsingResolutionOptions
```

**Extends:** [UsingResolutionOptions](./core-types.usingresolutionoptions.md)

## Properties

| Property                                                                                    | Modifiers | Type                                                       | Description                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------- | --------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [keyRef?](./credential-eip712.icreateverifiablepresentationeip712args.keyref.md)            |           | string                                                     | **_(BETA)_** _(Optional)_ \[Optional\] The ID of the key that should sign this presentation. If this is not specified, the first matching key will be used.                                                                                                                                                                                                                                    |
| [presentation](./credential-eip712.icreateverifiablepresentationeip712args.presentation.md) |           | [PresentationPayload](./core-types.presentationpayload.md) | <p>**_(BETA)_** The json payload of the Presentation according to the [canonical model](https://www.w3.org/TR/vc-data-model/#presentations).</p><p>The signer of the Presentation is chosen based on the <code>holder</code> property of the <code>presentation</code></p><p><code>@context</code>, <code>type</code> and <code>issuanceDate</code> will be added automatically if omitted</p> |
