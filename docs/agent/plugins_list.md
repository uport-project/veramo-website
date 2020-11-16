---
id: plugins_list
title: Plugin Directory
sidebar_label: Plugin Directory
---

We have a growing list of plugins to support a wide range of standards. If there's a plugin you you are looking for you could [make a request](/docs/) here or to [build it yourself](/docs/).

### @veramo/plugin-identity-manager

[`identity-manager`](#identity-manager)

### @veramo/plugin-ethr-did

[`identity-provider`](#identity-provider)

### @veramo/plugin-web-did

[`identity-provider`](#identity-provider)

### @veramo/plugin-key-manager

[`key-manager`](#key-manager)

### @veramo/plugin-lib-sodium

[`kms`](#kms)

### @veramo/plugin-resolver

[`resolver`](#resolver)

### @veramo/plugin-resolver-universal

[`resolver`](#resolver)

### @veramo/plugin-did-comm

[`message-handler`](#message-handler)

This plugin provides a method of creating an encrypted message according to the initial DIDComm-js implementation. See the [API Reference](/docs/api/daf-did-comm) for more info.

### @veramo/plugin-did-jwt

[`message-handler`](#message-handler)

### @veramo/plugin-message-handler

[`message-handler`](#message-handler)

### @veramo/plugin-url

[`message-handler`](#message-handler)

### @veramo/plugin-selective-disclosure

[`message-handler`](#message-handler) [`action-handler`](#action-handler)

### @veramo/plugin-w3c

[`message-handler`](#message-handler) [`action-handler`](#action-handler)

### @veramo/plugin-express

[`enhancer`](#message-handler)

### @veramo/plugin-type-orm

[`data-store`](#data-store) [`enhancer`](#message-handler)

### @veramo/plugin-rest

[`enhancer`](#message-handler)

## Plugin Types

Plugins can extend core classes or provide convenicence functions to the agent.

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

?

### `enhancer`

Adds additional functionality to agent outside the core classes.
