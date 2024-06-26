---
id: did-discovery.diddiscovery
title: DIDDiscovery class
hide_title: true
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## DIDDiscovery class

> This API is provided as a beta preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

This class adds support for discovering DIDs.

This API may change without a BREAKING CHANGE notice.

**Signature:**

```typescript
export declare class DIDDiscovery implements IAgentPlugin
```

**Implements:** [IAgentPlugin](./core-types.iagentplugin.md)

## Constructors

| Constructor                                                             | Modifiers | Description                                                                   |
| ----------------------------------------------------------------------- | --------- | ----------------------------------------------------------------------------- |
| [(constructor)(options)](./did-discovery.diddiscovery._constructor_.md) |           | **_(BETA)_** Constructs a new instance of the <code>DIDDiscovery</code> class |

## Properties

| Property                                               | Modifiers             | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Description  |
| ------------------------------------------------------ | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| [methods](./did-discovery.diddiscovery.methods.md)     | <code>readonly</code> | [IDIDDiscovery](./did-discovery.ididdiscovery.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | **_(BETA)_** |
| [providers](./did-discovery.diddiscovery.providers.md) | <code>readonly</code> | Array&lt;[AbstractDidDiscoveryProvider](./did-discovery.abstractdiddiscoveryprovider.md)&gt;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | **_(BETA)_** |
| [schema](./did-discovery.diddiscovery.schema.md)       | <code>readonly</code> | { components: { schemas: { IDIDDiscoveryDiscoverDidArgs: { type: string; properties: { query: { type: string; description: string; }; options: { type: string; description: string; }; }; required: string\[\]; description: string; }; IDIDDiscoveryDiscoverDidResult: { type: string; properties: { query: { type: string; description: string; }; options: { type: string; description: string; }; results: { type: string; items: { $ref: string; }; description: string; }; errors: { type: string; additionalProperties: { type: string; }; description: string; }; }; required: string\[\]; description: string; }; IDIDDiscoveryProviderResult: { type: string; properties: { provider: { type: string; description: string; }; matches: { type: string; items: { $ref: string; }; description: string; }; }; required: string\[\]; description: string; }; IDIDDiscoverMatch: { type: string; properties: { did: { type: string; description: string; }; metaData: { type: string; description: string; }; }; required: string\[\]; description: string; }; }; methods: { discoverDid: { description: string; arguments: { $ref: string; }; returnType: { $ref: string; }; }; }; }; } | **_(BETA)_** |

## Methods

| Method                                                                    | Modifiers | Description                                                        |
| ------------------------------------------------------------------------- | --------- | ------------------------------------------------------------------ |
| [discoverDid(args, context)](./did-discovery.diddiscovery.discoverdid.md) |           | **_(BETA)_** Queries data providers and returns DIDs with metadata |
