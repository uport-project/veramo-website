---
id: did_methods
title: DID Methods
---

A definition of how a specific DID method scheme is implemented. A DID method is defined by a DID method specification, which specifies the precise operations by which DIDs and DID documents are created, resolved, updated, and deactivated. See [DID Methods W3C Spec](https://www.w3.org/TR/did-core/#methods).

![img](../../static/img/diagrams/did_method.svg)

## Core Supported DID Methods

The following did methods are supported by Veramo core plugins. If you need to support a specific did method you can create a plugin for it by forking one these existing ones.

### `ethr-did`

```bash
did:ethr:0xc530503a148babcaca68565cfa576d6f43427a2d
```

[Ethr-Did Github](https://github.com/uport-project/ethr-did) • [Veramo Plugin API](/docs/api/did-provider-ethr)

Ethr-DID provides a scalable identity method for Ethereum addresses that gives any Ethereum address the ability to collect on-chain and off-chain data. Because Ethr-DID allows any Ethereum key pair to become an identity, it is more scalable and privacy-preserving than smart contract based identity methods.

This particular DID method relies on the Ethr-Did-Registry. The [Ethr-DID-Registry](https://github.com/uport-project/ethr-did-registry) is a smart contract that facilitates public key resolution for off-chain (and on-chain) authentication. It also facilitates key rotation, delegate assignment and revocation to allow 3rd party signers on a key's behalf, as well as setting and revoking off-chain attribute data. These interactions and events are used in aggregate to form a DID's DID document using the Ethr-Did-Resolver.

### `web-did`

```bash
did:web:veramo-agent.herokuapp.com
```

[Web-Did W3C Spec](https://w3c-ccg.github.io/did-method-web/) • [Veramo Plugin API](/docs/api/did-provider-ethr)

Web-DID leverages the domain name system that allows the owner of a web origin to turn it into a DID. Creating a Web-DID is as easy as creating a DID Document and hosting it under a well-known URL. The DID Document must be available through HTTPS GET every time the DID is resolved. This means to create a DID, no Blockchain is required but it comes with certain tradeoffs. The security of a Web-DID is rooted in the existing Internet PKI by enforcing TLS.
A Web-DID can be hosted either directly under the well-known URL of a web domain, e.g., www.example.com/.well-known/did.json, or under a specific sub-path. Using sub-paths allows hosting multiple DIDs under one web domain. This approach can also be used to allow a web application to create Web-DIDs for their users, e.g., www.example.com/users/username/.well-known/did.json.

While Web-DID is a very useful technology to bridge Web2 to Web3 and specifically allow companies very easily to create their DID, it is has some drawbacks related to security and privacy (e.g., tracking).

### `key-did`

```bash
did:key:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH
```

[Key-Did W3C Spec](https://w3c-ccg.github.io/did-method-key/) • [Reference 2](/docs/veramo_agent/did-methods)

Key-DID represents a very light-weight self-certifying DID method which does not require any external utility such as a Blockchain. A Key-DID is created by generating a cryptographic key pair (e.g., Curve25519).
Using Curve25519 will add two entries automatically to the DID Document that can be used for EdDSA (i.e., Ed25519) and ECDH/encryption (i.e., using X25519). A Key-DID resolves always to the same DID Document and since it is immutable adding service endpoints and other keys is not possible.

### `nft-did`

```bash
did:nft:0x1:0xd07dc4262bcdbf85190c01c996b4c06a461d2430:110820
```

[Reference 1](/docs/veramo_agent/did-methods) • [Reference 2](/docs/veramo_agent/did-methods)

Nft-DID turns existing EIP-721 NFTs into DIDs. This can be useful to interact with the owner of the NFT through service endpoints and prove that some piece of data (e.g., a Verifiable Credential) was signed by the owner of the NFT.

The Nft-DID is assembled by concatinating the chain ID, the address of the EIP-721 contract address and the token ID that is used in the contract. Because the owner of an EIP-721 NFT is an Ethereum account, the account address will be added to the DID Document. This means, web3 wallets can be used to sign data on behalf of the NFT and verifiers can verify that the data originated from the legitimate owner. To preserve the non-fungibility, the DID Document will only show the current owner of the NFT. To allow data to be verified after the owner of the NFT has changed, a version parameter will be added.
