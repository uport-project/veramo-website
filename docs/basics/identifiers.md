---
id: identifiers
title: Identifiers
---

`Decentralized Identifier` or `DID` is a critical component of verifiable data. A `DID` is a new type of unique
identifier which can be created independent of a central authority. The subject that the `DID` refers to can prove
control over the `DID` using cryptographic proofs. In a verifiable data context, a `DID` can be used to verify the
provenance and ownership of the data by linking to the verification method for the attached proof.

## Decentralized Identifier

Different flavors of `DIDs` exist today. The flavor of a `DID` or more accurately the `DID Method` defines how C.R.U.D.
operations for that `DID` type are executed. Each `DID Method` has different tradeoffs in specific use cases.
For example, a `did:web` can be created without a Blockchain but `DID Methods` exist that have a dependency on a
Blockchain. All of them are valid `DIDs` but have different guarantees.

The example below shows how a `did:web` for [veramo.dev](https://veramo.dev) might look like.

```
did:web:veramo.dev
```

### DID Creation

When a `DID` is created, it is typically associated with a private and public key pair. The public key will be visible
in the `DID Document`. This allows the controller/subject of the `DID` to generate proofs that are verifiable by anyone
that has the corresponding `DID Document` for that `DID`. The process of retrieving the `DID Document` from a `DID` is
called `DID Resolution`.

### DID Resolution

A `DID Resolver` can take `DID` as input and resolve the `DID Document`. This is an important concept in how data flows
in verifiable data systems.

### DID Document

Every `DID` has a `DID Document` that describes the `DID` subject. In the case of `did:web` the `DID Document` is hosted
on the website in the following format. It contains essential cryptographic information and also services that the `DID`
has available. This is the foundation of how `DIDs` can start to communicate with each other.

```json
// 20201110152830
// https://veramo.dev/.well-known/did.json

{
  "@context": "https://w3id.org/did/v1",
  "id": "did:web:veramo.dev",
  "publicKey": [
    {
      "id": "did:web:veramo.dev#0405aa19bb98a5fd29c15a730cb5064ca128dea19247b896b1a7bdad0b4bccccda9b47366cd1359e740d938e5a47d7bed0501150e8a1623805ac47c489421b1506",
      "type": "Secp256k1VerificationKey2018",
      "controller": "did:web:veramo.dev",
      "publicKeyHex": "0405aa19bb98a5fd29c15a730cb5064ca128dea19247b896b1a7bdad0b4bccccda9b47366cd1359e740d938e5a47d7bed0501150e8a1623805ac47c489421b1506"
    }
  ],
  "authentication": [
    {
      "type": "Secp256k1SignatureAuthentication2018",
      "publicKey": "did:web:veramo.dev#0405aa19bb98a5fd29c15a730cb5064ca128dea19247b896b1a7bdad0b4bccccda9b47366cd1359e740d938e5a47d7bed0501150e8a1623805ac47c489421b1506"
    }
  ],
  "service": [
    {
      "id": "did:web:veramo.dev#msg",
      "type": "Messaging",
      "serviceEndpoint": "https://veramo.dev/messaging",
      "description": "Handles incoming POST messages"
    }
  ]
}
```

### DID Methods

Explainer on what a DID method is and links to supported [DID Methods](../veramo_agent/did_methods.md) page
