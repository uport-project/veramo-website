---
id: versioning
title: Versioning
sidebar_label: Versioning
---

Veramo is currently in public beta but we want to make sure that the road is smooth as possible for anyone starting to
build applications on Veramo with a view to deploying in production. If you are planning on deploying an application in
production within the next year please [contact us here](/docs/) and talk with us about your plans.

Veramo packages are released under multiple tags to allow usage of the cutting edge or experimental features alongside
official releases. The default tag is `@latest`

```bash
yarn add @veramo/core
# equivalent to
yarn add @veramo/core@latest
# installs a version like @veramo/core@1.2.0
```

The upcoming release is published under the `@next` tag:

```bash
yarn add @veramo/core@next
# installs a version like @veramo/core@1.2.1-next.41
```

Occasionally we may publish experimental code under the `unstable` tag.

```bash
yarn add @veramo/core@unstable
```
