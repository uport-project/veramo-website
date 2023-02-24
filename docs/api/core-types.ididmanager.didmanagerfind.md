---
id: core-types.ididmanager.didmanagerfind
title: IDIDManager.didManagerFind() method
hide_title: true
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## IDIDManager.didManagerFind() method

Returns a list of managed identifiers

<b>Signature:</b>

```typescript
didManagerFind(args: IDIDManagerFindArgs): Promise<Array<IIdentifier>>;
```

## Parameters

| Parameter | Type                                                       | Description                                        |
| --------- | ---------------------------------------------------------- | -------------------------------------------------- |
| args      | [IDIDManagerFindArgs](./core-types.ididmanagerfindargs.md) | Required. Arguments to get the list of identifiers |

<b>Returns:</b>

Promise&lt;Array&lt;[IIdentifier](./core-types.iidentifier.md)&gt;&gt;

## Example

```typescript
const aliceIdentifiers = await agent.didManagerFind({
  alias: 'alice',
})

const goerliIdentifiers = await agent.didManagerFind({
  provider: 'did:ethr:goerli',
})
```