---
id: cli_tool
title: CLI Tool
sidebar_label: CLI Tool
---

:::important Ensure you have Node v14 or later installed. The CLI tool is currently only supported on MACOS and Linux
systems. Windows support is coming soon.
:::

The Veramo CLI exposes a configurable agent and includes an express server, open-api and swagger docs.

```bash
npm i @veramo/cli -g
```

or

```bash
yarn global add @veramo/cli
```

To check the CLI has installed, run:

```bash
veramo -v

# Output
4.x.x
```

### Methods

To see all the commands run:

```
veramo --help

Options:
  -v, --version      output the version number
  --config <path>    Configuration file (default: "./agent.yml")
  -h, --help         display help for command

Commands:
  did                Decentralized identifiers
  credential         W3C Verifiable Credential
  presentation       W3C Verifiable Presentation
  explore            launch Verifiable Data explorer
  sdr                Selective Disclosure Request
  message            Messages
  execute [options]  Executes agent method
  server [options]   Launch OpenAPI server
  config             Agent configuration
  dev                Plugin developer tools
  help [command]     display help for command

```

## Create configuration

You can use a per-project configuration or specify a configuration file with each command. If the current folder
contains an `agent.yml` configuration file, for every command.

Alternatively, you can specify a config file with each command using the `--config /path/to/your/config.yml` option.
This will be used instead of a per-project configuration file.

You can create a configuration file in the current folder by running:

```bash
veramo config create
```

This will create an `agent.yml` file that will get used next time you invoke a CLI command in this folder. By default,
the database files are created in the same folder as the config file.

If you want to connect to a hosted veramo instance you can create a configuration file by running:

```bash
veramo config create --template client
```

Using configuration file:

```bash
# From outside the directory
veramo did create --config ./myagent/agent.yml

# It will detect a local agent.yml file when run from within the myagent directory
veramo did create
```
