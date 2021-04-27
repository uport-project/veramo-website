---
id: cli_create_vc
title: Create Credential
sidebar_label: Create Credential
---

This guide will walk you through the basic functions to get you started with the Veramo CLI by learning the basic commands and issuing a credential. The core API of Veramo is exposed by the CLI tool. Learn more about [installing and configuring the Veramo CLI](/docs/veramo_agent/cli_tool).

Now, let's create an identifier, a credential, and learn where everything is stored.

### Create configuration file

```bash
veramo config create
```

### Create a DID

The first thing you will want to do is create an identifier using the `did create` command. This command will create a DID and store the keys in a local database.

```bash
veramo did create
```

### Resolve a DID

You can resolve any DID using the resolver:

```bash
veramo did resolve did:ethr:0xf3abebb0d4f5d7e08c2557772f9ce8692a795ab8
```
_Output:_
```json
{
  "didDocumentMetadata": {},
  "didResolutionMetadata": {
    "contentType": "application/did+ld+json"
  },
  "didDocument": {
    "@context": [
      "https://www.w3.org/ns/did/v1",
      "https://identity.foundation/EcdsaSecp256k1RecoverySignature2020/lds-ecdsa-secp256k1-recovery2020-0.0.jsonld"
    ],
    "id": "did:ethr:0xf3abebb0d4f5d7e08c2557772f9ce8692a795ab8",
    "verificationMethod": [
      {
        "id": "did:ethr:0xf3abebb0d4f5d7e08c2557772f9ce8692a795ab8#controller",
        "type": "EcdsaSecp256k1RecoveryMethod2020",
        "controller": "did:ethr:0xf3abebb0d4f5d7e08c2557772f9ce8692a795ab8",
        "blockchainAccountId": "0xF3AbEbb0d4F5d7e08c2557772f9Ce8692A795ab8@eip155:1"
      }
    ],
    "authentication": [
      "did:ethr:0xf3abebb0d4f5d7e08c2557772f9ce8692a795ab8#controller"
    ],
    "assertionMethod": [
      "did:ethr:0xf3abebb0d4f5d7e08c2557772f9ce8692a795ab8#controller"
    ]
  }
}
```

### Create a verifiable credential

Now let's create your first credential with Veramo using the DID you just created as both **issuer** and **subject**. This will be a _self-signed_ credential. Follow the command prompt after running:

```bash
veramo credential create
```
_Output:_
```json
{
  "credentialSubject": {
    "name": "Veramo",
    "id": "did:ethr:0xf3abebb0d4f5d7e08c2557772f9ce8692a795ab8"
  },
  "issuer": {
    "id": "did:ethr:0xf3abebb0d4f5d7e08c2557772f9ce8692a795ab8"
  },
  "type": [
    "VerifiableCredential",
    "Profile"
  ],
  "@context": [
    "https://www.w3.org/2018/credentials/v1"
  ],
  "issuanceDate": "2020-12-15T12:57:25.000Z",
  "proof": {
    "type": "JwtProof2020",
    "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJ2YyI6eyJjcmVkZW50aWFsU3ViamVjdCI6eyJuYW1lIjoiVmVyYW1vIn0sIkBjb250ZXh0IjpbImh0dHBzOi8vd3d3LnczLm9yZy8yMDE4L2NyZWRlbnRpYWxzL3YxIl0sInR5cGUiOlsiVmVyaWZpYWJsZUNyZWRlbnRpYWwiLCJQcm9maWxlIl19LCJzdWIiOiJkaWQ6ZXRocjoweGYzYWJlYmIwZDRmNWQ3ZTA4YzI1NTc3NzJmOWNlODY5MmE3OTVhYjgiLCJuYmYiOjE2MDgwMzcwNDUsImlzcyI6ImRpZDpldGhyOjB4ZjNhYmViYjBkNGY1ZDdlMDhjMjU1Nzc3MmY5Y2U4NjkyYTc5NWFiOCJ9.X8UCc-wU2nt3BDvXKp3TT2syb4Gl7_F2IVSZNo_NIcihY8xloQBkhnezsBpTDJkfcRBfKwuEb9yPqGjZGmVpWQ"
  }
}
```

### Go Explore

Run the explorer to open a commander terminal that shows you everything in your database!

```
veramo explore
```
