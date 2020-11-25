---
id: plugins
title: Plugins
sidebar_label: Plugins
---

Functionality in Serto is added to the agent via the plugin system. Writing and configuring plugins is where almost all of the custom work will happen when building applications on Serto. This makes Serto extremely versatile and modular. Your custom plugins can just live in a directory, private repository or on npm where they can be shared with others. We encourage developers to follow some best practices when writing plugins to ensure we have an ecosystem of highly interoperable functions.

## Capability Tags

Plugins can have many capabilities. In Serto we have a tagging system that describes what a plugin can do. The capability tags are as follows:

### `identity-manager`

A common API for an identity manager. You extend this by adding providers.

### `identity-provider`

A specific identity provider implementation.

### `key-manager`

A common API for managing keys. You extend this by adding key management systems.

### `kms`

A specific implementation of a KMS.

### `message-handler`

A common API for handling messages.

### `data-store`

A common API for data storage.

### `action-handler`

Common API for handling actions?

### `enhancer`

Adds additional functionality to agent outside the core classes.

## Executing plugin methods

Place holder for some linkage from API docs. Topic may not live here.
