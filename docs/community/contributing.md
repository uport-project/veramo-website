---
id: contributing
title: Contributing
sidebar_label: Contributing
---

We are thrilled that you are considering contributing to Veramo. Your contributions are incredibly valuable to us, and we appreciate your interest in helping us grow and improve.

As a new contributor, you may be wondering why your contributions matter. The truth is, every open-source project relies on community contributions to thrive. Each contribution, no matter how small, helps move the project forward and improves its functionality. Your unique perspective and ideas can bring fresh insights and new solutions to Veramo, helping it to evolve and meet the needs of our community.

Contributing to our project will give you the opportunity to work with other talented individuals, learn new technologies, and collaborate on real-world problems.
So, whether you're a seasoned developer or just starting, we welcome your contributions to our project. We're excited to see what ideas you'll bring to the table and how you'll help us make Veramo even better. Thank you for considering contributing, and we can't wait to work with you!

### How to contribute

As a developer, here are some ways to get involved

- [Report a bug](#reporting-a-bug): You can help the community to identify and fix bugs quickly by reporting any issues you have with the code.
- [Discuss the current state of the code](https://github.com/uport-project/veramo/discussions): Join in on discussions about the state of the code. Participate in discussions and help us better understand what the project needs in order to make decisions that are in the best interest of everyone involved.
- [Submit a fix](#submitting-a-fix): Submitting a fix is a collaborative effort, and we’d like for you to contact the maintainers of this project before carrying on with fixes.
- Propose new features: When proposing a new feature, please provide as much information and detail as possible. This includes a clear description of the feature, an explanation of why it is needed and its benefits, as well as any existing code or resources that can be used to implement the feature.
- Answer questions: Help both old and new community members to understand the project and get started quickly by answering questions about the project. Discussions happen in our [GitHub discussion](https://github.com/uport-project/veramo/discussions) and [Discord community](http://discord.gg/rhmDv85axQ).
- Submit an issue in the docs: If you come across an issue or a bug in the project's documentation, you can [submit an issue report](https://github.com/uport-project/veramo-website/issues/new/choose) to bring it to the attention of the project maintainers.
- Suggest edits to the docs: This could involve correcting errors, improving clarity, or adding missing information. You can submit your suggestions through a [pull request](https://github.com/uport-project/veramo-website/fork) or by directly contacting the project maintainers. Make sure to explain why you're suggesting the changes and provide examples or references to support your suggestions. For small fixes to existing pages you can also click the "Edit this page" button at the bottom of the page to suggest an edit directly on GitHub.
- Add content to the docs: You can create new pages or sections, add examples or use cases, or update existing content. When adding new content, you may want to discuss your proposed changes with the project maintainers to ensure that they align with the project's goals and objectives.

### Reporting a Bug

Great Bug Reports tend to have:

- A quick summary and/or background
- Steps to reproduce it
  - Be very specific!
  - Give a sample code if you can.
- What you expected would happen
- What actually happens
- What you have tried so far to fix it but didn't work
- Notes (possibly including why you think his might be happening)
- You get extra kudos if you attach a failing test demonstrating the bug

## Submitting improvements

### Commit messages

We use GitHub to host code, track issues and feature requests, as well as accept pull requests. We Use semantic-release and commitlint to automate our release process. Versioning, changelogs and publication are all covered by this automation. Please see [some commit message examples](https://github.com/semantic-release/semantic-release#commit-message-format).

Commit messages are really important in this process, and your PR will fail if your commit messages don't adhere to this convention.

### Submitting a fix

- [Fork the repo](https://github.com/uport-project/veramo/fork) into your GitHub account.
- Create a new branch, based on the main branch, with a name that concisely describes what you’re working on
- Wherever possible, commit at least one test to demonstrate the bug
- Commit your code to fix that bug. Here's an example commit message for that fix:

```
fix: Add null checks on DID Document result
Closes #17
```

- [Create a PR](https://github.com/uport-project/veramo/compare) for it
- Mention the issue you're fixing in the PR (Example: `closes #17`)

### Submitting a proposal

We prefer to discuss proposals before accepting them into the codebase. Open [an issue](https://github.com/uport-project/veramo/issues/new/choose) with as much detail and background as possible to make your case. Small proposals can come in directly as PRs, but it's generally better to discuss them **before starting work**.
Any contributions you make will be under the Apache-2.0 Licenss

### Posting PRs

- Describe your changes in the PR description.
- Mention issues that are being fixed by the PR.
- Make sure any new code has tests associated!
- Make sure the inline documentation is still valid if your changes get included.

## Constraints on our codebase

We impose a number of constraints on the code to ensure a smooth experience for a large number of users that use the library and plugins published from the Veramo repository.

### Environments

Veramo is designed to work in multiple environments (nodejs, web frontends, react-native). We make a lot of effort to ensure this property is maintained for most of the code we publish in the Veramo repository.
Veramo plugins can, of-course, be platform-specific but we try to keep the plugins we publish from the Veramo repository compatible with all these environments.

### Plugin APIs

Veramo supports dynamically exposing the plugin methods through OpenAPI, through `@veramo/remote-server` functionality. To be able to do this, plugins can declare a schema property which is used to build that API.
Plugin schemas can be generated automatically, and to be able to do this we impose a number of constraints on the plugin methods and the data-types of arguments and return values:

- methods MUST contain inline documentation correctly formatted and specifying a `@public`, `@beta`, or `@alpha` tag
- arguments and return values MUST have a named type, also inline documented
- arguments and return values MUST be serializable to JSON

It is not a requirement of all Veramo plugins to respect these constraints, but the plugins we publish from the Veramo repository all have this constraint.

Thank you for your contribution!
