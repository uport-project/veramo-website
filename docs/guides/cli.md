---
id: cli
title: CLI
sidebar_label: CLI
---

:::important

The CLI tool is currently only supported on MACOS and Linux systems. Windows support is coming soon.

:::

The core API of Veramo is exposed by the CLI tool. You can perform all major functions using the CLI locally. This guide will walk you through the basic functions to get you started.

First we need to install the CLI globally:

```bash
npm i veramo -g
```

To check the CLI has installed run:

```bash
veramo -v

# Output
1.x.x
```

### Methods

To see all the commands run:

```
veramo --help

Options:
  --config <path>                   Configuration file (default: "./agent.yml")
  -v, --version                     output the version number
  -h, --help                        display help for command

Commands:
  create-config [options]           Create default agent config
  identity-manager [options]        Manage identities
  resolve <didUrl>                  Resolve DID Document
  credential [options]              Create W3C Verifiable Credential
  presentation [options]            Create W3C Verifiable Presentation
  data-explorer                     Data explorer
  sdr-create                        Create Selective Disclosure Request
  sdr-reply                         Reply to Selective Disclosure Request
  msg [options]                     Handle raw message
  crypto [options]                  Crypto
  execute [options]                 Executes agent method
  server [options]                  Launch OpenAPI server
  generate-plugin-schema [options]  Generate plugin schema
  extract-api [options]             Extract API
  help [command]                    display help for command
```

### Create an identity

The first thing you will want to do is create an identifier using the `create` command. This command will create a DID and store the keys in a local database.

```bash
# daf identity-manager --create
veramo create did
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

Now let's create your forst credential with Veramo using the DID you just created as both issuer and subject. This will be a self-signed credential. Follow the command prompt after running:

```bash
veramo create credential

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

## Go Explore

Run the explorer to open a commander terminal that shows you everything in your database!

```
veramo data-explorer
```

## Where is the data stored?

By default the first time you run the CLI tool a local agent will be created and this will create a number of files on your computer.

```
~ Home
└─ .veramo/
    ├── .env
    ├── agent.yml # created when you run veramo create-config
    ├── database.sqlite
```

If you want to create a custom location to store an agent config and database instances you can use additional parameters.

```
veramo create config myagent
```

This will create a directory called myagent with an agent.yml. The database for this agent will also be stored in the directory.

```bash
# From outside the directory
veramo create did --config ./myagent/agent.yml

# It will detect a local agent.yml file when run from within the myagent directory
veramo create did
```

## Advanced

Coming soon: We will cover more advanced features such as selective disclosure, presentations and messages.
