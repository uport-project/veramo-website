---
id: plugins
title: Plugins
sidebar_label: Plugins
---

Functionality in Veramo is added to the agent via the plugin system. Writing and configuring plugins is where almost all
the custom work will happen when building applications on Veramo. Your custom plugins can just live in a directory,
private repository or on npm where they can be shared with others. We encourage developers to follow some best practices
when writing plugins to ensure we have an ecosystem of highly interoperable functions.

## Plugins Architecture

This diagram shows the high level relationship between the core agent, interfaces, plugins and external protocols. This
is one simple configuration of many.

![img](../../static/img/diagrams/veramo_plugins_simple.svg)

## Core Plugins

### `@veramo/did-manager`

[API Reference](../api/did-manager.md)

### `@veramo/did-provider-ethr`

[API Reference](../api/did-provider-ethr.md)

### `@veramo/did-provider-web`

[API Reference](../api/did-provider-web.md)

### `@veramo/did-provider-key`

[API Reference](../api/did-provider-key.md)

### `@veramo/key-manager`

[API Reference](../api/key-manager.md)

### `@veramo/kms-local`

[API Reference](../api/kms-local.md)

### `@veramo/did-resolver`

[API Reference](../api/did-resolver.md)

### `@veramo/did-comm`

[API Reference](../api/did-comm.md)

This plugin provides a method of creating an encrypted message according to the initial DIDComm-js implementation. See
the [API Reference](../api/did-comm.md) for more info.

### `@veramo/did-jwt`

[API Reference](../api/did-jwt.md)

### `@veramo/message-handler`

[API Reference](../api/message-handler.md)

### `@veramo/url-handler`

[API Reference](../api/url-handler.md)

### `@veramo/selective-disclosure`

[API Reference](../api/selective-disclosure.md)

### `@veramo/credential-w3c`

[API Reference](../api/credential-w3c.md)

### `@veramo/remote-server`

[API Reference](../api/remote-server.md)

### `@veramo/data-store`

[API Reference](../api/data-store.md)

### `@veramo/remote-client`

[API Reference](../api/remote-client.md)
