---
id: key-manager.eip712payload
title: Eip712Payload type
hide_title: true
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## Eip712Payload type

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

The payload that is sent to be signed according to EIP712

**Signature:**

```typescript
export type Eip712Payload = {
  domain: TypedDataDomain
  types: Record<string, TypedDataField[]>
  primaryType: string
  message: Record<string, any>
}
```
