---
id: troubleshooting
title: Troubleshooting
sidebar_label: Troubleshooting
---

Veramo is a toolbox that can be used in an uncountable number of ways. This is fantastic! But, it also means that things
can go wrong in ways that can be surprising.

You can mix and match plugins depending on needs, but for most Verifiable Credential workflows you will most likely use
most packages present in the Veramo repository. That also means a lot of dependencies, and setting up a Veramo
deployment with all the bells and whistles may put your project in a conflicting state, or some of your dependencies may
refuse to install. Other times, issues may arise at runtime due to the wrong dependency getting resolved and bundled.

## Dependency issues

### ESM vs CommonJS

We have adopted ESM syntax for the Veramo codebase, mostly because of dependencies that we use that have taken a "pure
ESM" stance. See [this article](https://medium.com/veramo/veramo-is-switching-to-esm-and-pnpm-57cf8e841ffa) for details.

Additional info regarding ESM can be found at the following links:

* [https://www.typescriptlang.org/docs/handbook/esm-node.html](https://www.typescriptlang.org/docs/handbook/esm-node.html)
* [https://nodejs.org/api/esm.html](https://nodejs.org/api/esm.html)
* [https://caniuse.com/?search=modules](https://caniuse.com/?search=modules)

### The `jsonld` ecosystem

Some of the Veramo packages that have to do with Verifiable Credentials (like `@veramo/credential-ld`) depend on a set
of libraries from the `jsonld` ecosystem which weren't designed with the same multi-platform targets in mind. Forks of
these dependencies exist, that work in all environments where Veramo should work, but you have to aid your package
manager in finding them.

The solution is to add a `resolutions` (or `overrides`) block to your `package.json` file and replacing the problematic
dependencies:

```json5
// filename: package.json
{
  // ...
  "resolutions": {
    "jsonld": "npm:@digitalcredentials/jsonld@^6.0.0"
  }
}
```

Different package managers use different configurations for such overrides:
* [npm overrides](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#overrides)
* [yarn v2+ resolutions](https://yarnpkg.com/configuration/manifest#resolutions)
* [yarn v1 resolutions](https://classic.yarnpkg.com/lang/en/docs/selective-version-resolutions/)
* [pnpm resolutions](https://pnpm.io/package_json#resolutions)

See [this issue for more details](https://github.com/decentralized-identity/veramo/issues/1407)

### Expo apps

If your project is a react-native app, then you will also benefit from replacing `isomorphic-webcrypto` with the [fork
made by Sphereon](https://github.com/Sphereon-Opensource/isomorphic-webcrypto):

```json5
// filename: package.json
{
  // ...
  "resolutions": {
    "isomorphic-webcrypto": "npm:@sphereon/isomorphic-webcrypto@^2.4.0"
  }
}
```
