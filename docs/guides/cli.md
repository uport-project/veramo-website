---
id: cli
title: CLI
sidebar_label: CLI
---

This guide will walk you through the basic functions to get you started with the Veramo CLI.

:::important

The CLI tool is currently only supported on MACOS and Linux systems. Windows support is coming soon.

:::

> The core API of Veramo is exposed by the CLI tool. All major functions can be executed locally using the CLI tool.

First, we need to install the CLI globally:

```bash
npm i @veramo/cli -g
```

:::note
:hear_no_evil: Currently, the install is a bit noisy. We are working to improve this.
:::

To check the CLI has installed, run:

```bash
veramo -v

# Output
1.x.x
```

## Basics

Create an identifier, a credential, and learn where everything is stored.

### Methods

To see all the commands run:

```
veramo --help

Options:
  --config <path>                       configuration file (default: "./agent.yml")
  -v, --version                         output the version number
  -h, --help                            display help for command

Commands:

  did resolve <didUrl>                  resolve DID Document
  did list                              list managed identifiers
  did providers                         list available identifier providers
  did create                            create an identifier
  did delete                            delete an identifier
  did export                            export an identifier
  did import                            import an identifier
  did add-key                           create and add a public key to did document
  did add-service                       add a service endpoint to did document
  did remove-key                        remove a public key from did document
  did remove-service                    remove a service endpoint from did document

  credential create [options]           create W3C Verifiable Credential
  credential revoke [options]           revoke W3C Verifiable Credential
  credential verify [options]           verify W3C Verifiable Credential
  credential import [options]           import W3C Verifiable Credential
  credential export [options]           export W3C Verifiable Credential

  presentation create [options]         create W3C Verifiable Presentation
  presentation revoke [options]         revoke W3C Verifiable Presentation
  presentation verify [options]         verify W3C Verifiable Presentation
  presentation import [options]         import W3C Verifiable Presentation
  presentation export [options]         export W3C Verifiable Presentation

  message handle [options]              handle raw message
  message create [options]              create message

  sdr create                            create Selective Disclosure Request
  sdr respond                           respond to Selective Disclosure Request

  config create [options]               create default agent config
  config create-secret-key [options]    generate secret key

  server [options]                      launch OpenAPI server
  explore                               launch Verifiable Data explorer
  execute [options]                     executes agent method

  dev generate-plugin-schema [options]  generate plugin schema
  dev extract-api [options]             extract API

  help [command]                        display help for command

```

### Create an identity

The first thing you will want to do is create an identifier using the `did create` command. This command will create a DID and store the keys in a local database.

```bash
veramo did create
```

### Resolve a DID

You can resolve any DID using the resolver:

```bash
veramo resolve did:ethr:0xf3abebb0d4f5d7e08c2557772f9ce8692a795ab8

# Output
{ '@context': 'https://w3id.org/did/v1',
  id: 'did:ethr:0xf3abebb0d4f5d7e08c2557772f9ce8692a795ab8',
  publicKey:
   [ { id:
        'did:ethr:0xf3abebb0d4f5d7e08c2557772f9ce8692a795ab8#controller',
       type: 'Secp256k1VerificationKey2018',
       controller: 'did:ethr:0xf3abebb0d4f5d7e08c2557772f9ce8692a795ab8',
       ethereumAddress: '0xf3abebb0d4f5d7e08c2557772f9ce8692a795ab8' } ],
  authentication:
   [ { type: 'Secp256k1SignatureAuthentication2018',
       publicKey:
        'did:ethr:0xf3abebb0d4f5d7e08c2557772f9ce8692a795ab8#controller' } ] }
```

### Create a verifiable credential

Now let's create your first credential with Veramo using the DID you just created as both **issuer** and **subject**. This will be a _self-signed_ credential. Follow the command prompt after running:

```bash
veramo credential create

# Output
{ credentialSubject:
   { name: 'Veramo',
     id: 'did:ethr:0xf3abebb0d4f5d7e08c2557772f9ce8692a795ab8' },
  issuer:
   { id: 'did:ethr:0xf3abebb0d4f5d7e08c2557772f9ce8692a795ab8' },
  type: [ 'VerifiableCredential', 'Profile' ],
  '@context': [ 'https://www.w3.org/2018/credentials/v1' ],
  issuanceDate: '2020-12-15T12:57:25.000Z',
  proof:
   { type: 'JwtProof2020',
     jwt:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJ2YyI6eyJjcmVkZW50aWFsU3ViamVjdCI6eyJuYW1lIjoiVmVyYW1vIn0sIkBjb250ZXh0IjpbImh0dHBzOi8vd3d3LnczLm9yZy8yMDE4L2NyZWRlbnRpYWxzL3YxIl0sInR5cGUiOlsiVmVyaWZpYWJsZUNyZWRlbnRpYWwiLCJQcm9maWxlIl19LCJzdWIiOiJkaWQ6ZXRocjoweGYzYWJlYmIwZDRmNWQ3ZTA4YzI1NTc3NzJmOWNlODY5MmE3OTVhYjgiLCJuYmYiOjE2MDgwMzcwNDUsImlzcyI6ImRpZDpldGhyOjB4ZjNhYmViYjBkNGY1ZDdlMDhjMjU1Nzc3MmY5Y2U4NjkyYTc5NWFiOCJ9.X8UCc-wU2nt3BDvXKp3TT2syb4Gl7_F2IVSZNo_NIcihY8xloQBkhnezsBpTDJkfcRBfKwuEb9yPqGjZGmVpWQ' } }

```

### Go Explore

Run the explorer to open a commander terminal that shows you everything in your database!

```
veramo explore
```

### Where is the data stored?

By default, the first time you run the CLI tool, a local agent will be created, and this will create a number of files on your computer.

```
~ Home
└─ .veramo/
    ├── .env
    ├── agent.yml # created when you run veramo create-config
    ├── database.sqlite
```

You can also use a per-project configuration or specify a configuration file with each command.
If the current folder contains an `agent.yml` configuration file, it will be used instead of the `.veramo/agent.yml` path.

Alternatively, you can specify a config file with each command using the `--config /path/to/your/config.yml` option. This will be used instead of a per-project or default configuration file.

You can create a configuration file in the current folder by running:

```bash
veramo config create
```

This will create an `agent.yml` file that will get used next time you invoke a CLI command in this folder.
By default, the database files are created in the same folder as the config file.

```bash
# From outside the directory
veramo did create --config ./myagent/agent.yml

# It will detect a local agent.yml file when run from within the myagent directory
veramo did create
```

## Advanced

Coming soon: We will cover more advanced features such as selective disclosure, presentations, and messages.
