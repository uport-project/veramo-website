---
id: did-resolver
title: did-resolver package
hide_title: true
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## did-resolver package

Provides a [plugin](./did-resolver.didresolverplugin.md) for the [Agent](./core.agent.md) that implements [IResolver](./core-types.iresolver.md) interface.

## Classes

| Class                                                    | Description                                                                                                                                                                                                       |
| -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [DIDResolverPlugin](./did-resolver.didresolverplugin.md) | <p>A Veramo Plugin that enables users to resolve DID documents.</p><p>This plugin is used automatically by plugins that create or verify Verifiable Credentials or Presentations or when working with DIDComm</p> |

## Functions

| Function                                                                           | Description                                                                                                |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| [getUniversalResolver(url)](./did-resolver.getuniversalresolver.md)                | Creates a DIDResolver instance that can be used with <code>did-resolver</code>                             |
| [getUniversalResolverFor(methods, url)](./did-resolver.getuniversalresolverfor.md) | Creates a mapping of DID methods to a DIDResolver instance that can be used with <code>did-resolver</code> |
