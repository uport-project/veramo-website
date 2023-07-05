---
id: cli_create_vc
title: Create Credential
sidebar_label: Create Credential
---

This guide will walk you through the basic functions to get you started with the Veramo CLI by learning the basic
commands and issuing a credential. The core API of Veramo is exposed by the CLI tool. Learn more
about [installing and configuring the Veramo CLI](../veramo_agent/cli_tool.md).

Now, let's create an identifier, a credential, and learn where everything is stored.

### Create configuration file

```bash
veramo config create
```

### Create a DID

The first thing you will want to do is create an identifier using the `did create` command. This command will create a
DID and store the keys in a local database.

```bash
veramo did create
```

This will prompt you to select a DID method. The examples in this document use `did:ethr`.

### Resolve a DID

You can resolve any DID (including the one you just created) using the resolver:

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
    "authentication": ["did:ethr:0xf3abebb0d4f5d7e08c2557772f9ce8692a795ab8#controller"],
    "assertionMethod": ["did:ethr:0xf3abebb0d4f5d7e08c2557772f9ce8692a795ab8#controller"]
  }
}
```

### Create a verifiable credential

Now let's create your first credential with Veramo using the DID you just created as both **issuer** and **subject**.
This will be a _self-signed_ credential. Follow the command prompt after running:

```bash
veramo credential create
```

This starts a demo flow to create a credential. It will ask you to pick a format, then select an issuer DID from the
list of DIDs you have created already, then a subject and the output should look something like this:

```json
{
  "credentialSubject": {
    "name": "Alice",
    "id": "did:ethr:0x03bde9206e235cd2aa14a53900f94400782c45b7f5e3060a4d845fe77a23145807"
  },
  "issuer": {
    "id": "did:ethr:0x03bde9206e235cd2aa14a53900f94400782c45b7f5e3060a4d845fe77a23145807"
  },
  "type": ["VerifiableCredential", "Profile"],
  "@context": ["https://www.w3.org/2018/credentials/v1", "https://veramo.io/contexts/profile/v1"],
  "issuanceDate": "2023-07-05T15:22:34.000Z",
  "proof": {
    "type": "JwtProof2020",
    "jwt": "eyJhbGciOiJFUzI1NksiLCJ0eXAiOiJKV1QifQ.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSIsImh0dHBzOi8vdmVyYW1vLmlvL2NvbnRleHRzL3Byb2ZpbGUvdjEiXSwidHlwZSI6WyJWZXJpZmlhYmxlQ3JlZGVudGlhbCIsIlByb2ZpbGUiXSwiY3JlZGVudGlhbFN1YmplY3QiOnsibmFtZSI6IkFsaWNlIn19LCJzdWIiOiJkaWQ6ZXRocjoweDAzYmRlOTIwNmUyMzVjZDJhYTE0YTUzOTAwZjk0NDAwNzgyYzQ1YjdmNWUzMDYwYTRkODQ1ZmU3N2EyMzE0NTgwNyIsIm5iZiI6MTY4ODU3MDU1NCwiaXNzIjoiZGlkOmV0aHI6MHgwM2JkZTkyMDZlMjM1Y2QyYWExNGE1MzkwMGY5NDQwMDc4MmM0NWI3ZjVlMzA2MGE0ZDg0NWZlNzdhMjMxNDU4MDcifQ.4Hmh8EAKZtRD_AtdTGK2FNbrjIzcDQVJaB9mv7kHaYUgHrIzWTrIqTesIUEljBKx3vW9qqGyG-qNT-k_RElCtA"
  }
}
```

This is a self issued credential claiming that the subject is named Alice.

Veramo uses a synthetic proof type (`JwtProof2020`) to represent JWT credentials in a format closer to
the [W3C Veriable Credentials data model](https://www.w3.org/TR/vc-data-model/). `JwtProof2020` is not a registered
proof type, it is only used as a convenience to provide a human-readable credential.
The credential is actually entirely contained in the `proof.jwt` field.
To verify this credential you can use the `credential verify` command:

```bash
veramo credential verify -r eyJhbGciOiJFUzI1NksiLCJ0eXAiOiJKV1QifQ.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSIsImh0dHBzOi8vdmVyYW1vLmlvL2NvbnRleHRzL3Byb2ZpbGUvdjEiXSwidHlwZSI6WyJWZXJpZmlhYmxlQ3JlZGVudGlhbCIsIlByb2ZpbGUiXSwiY3JlZGVudGlhbFN1YmplY3QiOnsibmFtZSI6IkFsaWNlIn19LCJzdWIiOiJkaWQ6ZXRocjoweDAzYmRlOTIwNmUyMzVjZDJhYTE0YTUzOTAwZjk0NDAwNzgyYzQ1YjdmNWUzMDYwYTRkODQ1ZmU3N2EyMzE0NTgwNyIsIm5iZiI6MTY4ODU3MDU1NCwiaXNzIjoiZGlkOmV0aHI6MHgwM2JkZTkyMDZlMjM1Y2QyYWExNGE1MzkwMGY5NDQwMDc4MmM0NWI3ZjVlMzA2MGE0ZDg0NWZlNzdhMjMxNDU4MDcifQ.4Hmh8EAKZtRD_AtdTGK2FNbrjIzcDQVJaB9mv7kHaYUgHrIzWTrIqTesIUEljBKx3vW9qqGyG-qNT-k_RElCtA
```

### Go Explore

Run the explorer to open a commander terminal that shows you everything in your database!

```
veramo explore
```
