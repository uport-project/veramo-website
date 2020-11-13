---
id: verifiable_data
title: Verifiable Data
---

Verifiable data is simply data that has been digitally signed using a cryptographic algorythm. If data has been signed in this way it is possible for someone to verify the signature. Here we can look a the most common standard of verifible data - Verifiable Credentials.

### W3C Verifiable Credential

To summarise the W3C definition of a [Verifiable Credential](https://www.w3.org/TR/vc-data-model/#what-is-a-verifiable-credential), it is a piece of data that conforms to the `VerifiableCredential` type. It has a set of attributes such as issuer, subject, proofs and data being made verifiable. Similar to a physical credential, a verifiable credential is issued from one entity known as the `issuer` to another entity the `subject`.

Let's imagine a physical document such as passport or drivers license; these documents can be issued by the government that asserts your personal information and 'permissions' such as the type of vehicle you can drive or if you can vote. A physical credential has encoded watermarks which can be scanned to prove that the issuer is who is stated on the document. In order to trust the document you would need to trust the issuer of the document. Some facilities will have the ability to scan these documents to verify the authenticity of the document. This would be considered a 'trust network'.

You trust the government and the scanner they approve therefore you will trust the person whos document is verified by the scanner. The same model exists here except the verification or proof is purely digital and cryptographic. Also it should be noted when anything moves from analogue to digital it usually has more applications outside of the traditional analogue version.

This is the current v1 format for a W3C compliant Verifiable Credential:

```json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
  ],
  "type": ["VerifiableCredential"],
  "issuer": {"id": "did:web:veramo.dev"},
  "issuanceDate": "2010-01-01T19:73:24Z",
  "credentialSubject": {
    "id": "did:example:user",
    "community": {
        "rank": "rockstar"
    }
  },
  "proof": {
    "type": "RsaSignature2018",
    "created": "2017-06-18T21:19:10Z",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "https://example.edu/issuers/keys/1",
    "jws": "eyJhbGciOiJSUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..TCYt5X
      sITJX1CxPCT8yAV-TVkIEq_PbChOMqsLfRoPsnsgw5WEuts01mq-pQy7UJiN5mgRxD-WUc
      X16dUEMGlv50aqzpqh4Qktb3rk-BuQy72IFLOqV0G_zS245-kronKb78cPN25DGlcTwLtj
      PAYuNzVBAh4vGHSrQyHUdBBPM"
  }
}
```

Learn more about [use cases](/docs/)
