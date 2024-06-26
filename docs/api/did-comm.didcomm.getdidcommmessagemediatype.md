---
id: did-comm.didcomm.getdidcommmessagemediatype
title: DIDComm.getDidCommMessageMediaType() method
hide_title: true
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## DIDComm.getDidCommMessageMediaType() method

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Partially decodes a possible DIDComm message string to determine the [DIDCommMessageMediaType](./did-comm.didcommmessagemediatype.md)

**Signature:**

```typescript
getDidCommMessageMediaType({ message }: IPackedDIDCommMessage): Promise<DIDCommMessageMediaType>;
```

## Parameters

| Parameter   | Type                                                         | Description |
| ----------- | ------------------------------------------------------------ | ----------- |
| { message } | [IPackedDIDCommMessage](./did-comm.ipackeddidcommmessage.md) |             |

**Returns:**

Promise&lt;[DIDCommMessageMediaType](./did-comm.didcommmessagemediatype.md)&gt;

- the [DIDCommMessageMediaType](./did-comm.didcommmessagemediatype.md) if it was successfully parsed
