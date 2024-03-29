---
id: did-provider-ion.iondidprovider.addservice
title: IonDIDProvider.addService() method
hide_title: true
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## IonDIDProvider.addService() method

Adds a service to a DID Document

**Signature:**

```typescript
addService({ identifier, service, options }: {
        identifier: IIdentifier;
        service: IService;
        options?: IUpdateOpts;
    }, context: IContext): Promise<any>;
```

## Parameters

| Parameter                        | Type                                                                                                                              | Description |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| { identifier, service, options } | { identifier: [IIdentifier](./core-types.iidentifier.md); service: [IService](./core-types.iservice.md); options?: IUpdateOpts; } |             |
| context                          | IContext                                                                                                                          |             |

**Returns:**

Promise&lt;any&gt;

identifier provider specific response. Can be txHash, etc,
