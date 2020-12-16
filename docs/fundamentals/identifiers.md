---
id: identifiers
title: Identifiers
---

Identifiers are a critical component of verifiable data. Without unique, verifiable identifiers, you cannot make decisions to trust the asserted data. The most widely adopted standard for identifiers is the `Decentralized Identifier` or `DID`.

## Decentralized Identifier

The DID for this website is:

```
did:web:veramo.dev
```

If DIDs are unique identifiers, then a DID method is essentially a type of identifier. The example above is known as a web did. Anybody can create a new DID method for their specific purpose or use one of the existing methods.

### DID Creation

When a DID is created, it is associated with a private and public key pair. The public key will be visible in the DID Document.

### DID Document

Every DID has a public DID Document that presents information about the identifier. In the case of `did:web` the DID Document is hosted on the website in the following format. It contains essential cryptographic information and also services that the DID has available. This is the foundation of how DIDs can start to communicate with each other.

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

### DID Resolution

A DID resolver can take DID as input and resolve the DID Document to perform some application action. This is an important concept in how data flows in verifiable data systems. A high-level example is when the DID resolver can check the DID and see where we can send a message to or if it even accepts messages.

### DID methods

Some examples of other DID methods:

`ethr-did`

```
did:ethr:0xe3f6e0980FdA5760771fD3b93A8E6D4751186690
```

`ethr-did`

```
did:ethr:0xe3f6e0980FdA5760771fD3b93A8E6D4751186690
```

`ethr-did`

```
did:ethr:0xe3f6e0980FdA5760771fD3b93A8E6D4751186690
```

`ethr-did`

```
did:ethr:0xe3f6e0980FdA5760771fD3b93A8E6D4751186690
```
