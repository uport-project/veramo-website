---
id: verifiable_data
title: Verifiable Data
---

Verifiable data is simply data that has been digitally signed using a cryptographic algorithm. If data has been signed in this way, someone can verify the signature. Here we can look a the most common standard of verifiable data - Verifiable Credentials.

### W3C Verifiable Credential

To summarise the W3C definition of a [Verifiable Credential](https://www.w3.org/TR/vc-data-model/#what-is-a-verifiable-credential), it is a piece of data that conforms to the `VerifiableCredential` type. It has attributes such as issuer, subject, proofs, and data being made verifiable. Like a physical credential, a verifiable credential is issued from one entity known as the `issuer` to another entity, the `subject`.

Let's imagine a physical document such as a passport or driver's license; these documents can be issued by the government that asserts your personal information and 'permissions' such as the type of vehicle you can drive or if you can vote. A physical credential has encoded watermarks, which can be scanned to prove that the issuer is who is stated on the document. To trust the document, you would need to trust the issuer of the document. Some facilities will have the ability to scan these documents to verify the authenticity of the document. This would be considered a 'trust network'.

You trust the government and the scanner they approve; therefore, you will trust the person whose document is verified by the scanner. The same model exists here, except the verification or proof is purely digital and cryptographic. Also, it should be noted when anything moves from analog to digital, it usually has more applications outside of the traditional analog version.

This is the current v1 format for a W3C compliant Verifiable Credential:

```json
{
  "issuer": {
    "id": "did:ethr:rinkeby:0x022494a622f736987a5fdd89c2506d8d524f21437aa34c9afe75272ee9e3d7a52d"
  },
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://veramo.io/contexts/profile/v1",
    "https://identity.foundation/EcdsaSecp256k1RecoverySignature2020/lds-ecdsa-secp256k1-recovery2020-0.0.jsonld"
  ],
  "type": ["VerifiableCredential", "Profile"],
  "issuanceDate": "2021-04-19T21:10:24.187Z",
  "credentialSubject": {
    "id": "did:ethr:rinkeby:0x022494a622f736987a5fdd89c2506d8d524f21437aa34c9afe75272ee9e3d7a52d",
    "name": "Oliver, the great"
  },
  "proof": {
    "type": "EcdsaSecp256k1RecoverySignature2020",
    "created": "2021-04-20T04:45:17Z",
    "verificationMethod": "did:ethr:rinkeby:0x022494a622f736987a5fdd89c2506d8d524f21437aa34c9afe75272ee9e3d7a52d#controller",
    "proofPurpose": "assertionMethod",
    "jws": "eyJhbGciOiJFUzI1NkstUiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..0ys35VqBMtJti-DY6uacJyPxoxhXyrpIcLiQVEDQQPAGQb1ZmRDZf01y-thW4Pxt95pLV09R2vK-2BfWiu-nFgE"
  }
}
```
