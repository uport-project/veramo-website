---
id: credential-eip712.iverifypresentationeip712args
title: IVerifyPresentationEIP712Args interface
hide_title: true
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## IVerifyPresentationEIP712Args interface

Encapsulates the parameters required to verify a [W3C Verifiable Presentation](https://www.w3.org/TR/vc-data-model/#presentations)

**Signature:**

```typescript
export interface IVerifyPresentationEIP712Args extends UsingResolutionOptions
```

**Extends:** [UsingResolutionOptions](./core-types.usingresolutionoptions.md)

## Properties

| Property                                                                          | Modifiers | Type                                                             | Description                                                                                                                                                                                                                                                                                                                                              |
| --------------------------------------------------------------------------------- | --------- | ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [presentation](./credential-eip712.iverifypresentationeip712args.presentation.md) |           | [VerifiablePresentation](./core-types.verifiablepresentation.md) | <p>The Verifiable Presentation object according to the [canonical model](https://www.w3.org/TR/vc-data-model/#presentations) or the JWT representation.</p><p>The signer of the Presentation is verified based on the <code>holder</code> property of the <code>presentation</code> or the <code>iss</code> property of the JWT payload respectively</p> |
