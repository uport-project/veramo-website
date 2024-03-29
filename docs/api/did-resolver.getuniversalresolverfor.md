---
id: did-resolver.getuniversalresolverfor
title: getUniversalResolverFor() function
hide_title: true
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## getUniversalResolverFor() function

Creates a mapping of DID methods to a DIDResolver instance that can be used with `did-resolver`

**Signature:**

```typescript
export declare function getUniversalResolverFor(methods: string[], url?: string): Record<string, DIDResolver>
```

## Parameters

| Parameter | Type       | Description                                                                            |
| --------- | ---------- | -------------------------------------------------------------------------------------- |
| methods   | string\[\] | an array of DID methods that should be resolved by this universal resolver             |
| url       | string     | _(Optional)_ the URL for the universal resolver instance (See https://uniresolver.io ) |

**Returns:**

Record&lt;string, DIDResolver&gt;

`Record<string, DIDResolver>` a mapping of the given methods to an instance of `DIDResolver`

## Example

```typescript
const uniResolver = getUniversalResolverFor(['web', 'key', 'elem'])
const resolver = new Resolver({
  ...uniResolver,
  // other resolvers
})
```
