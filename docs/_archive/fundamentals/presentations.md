---
id: presentations
title: Presentations
---

The `w3c.vp` message type is a wrapper for the W3C Verifiable Presentation format.

A [Verifiable Presentation](/docs/api/core.w3cpresentation) is a signed envelope for 1 or more [Verifiable Credentials.](/docs/fundamentals/verifiable_data)

```json
{
  "@context": ["https://www.w3.org/2018/credentials/v1"],
  "type": "VerifiablePresentation",
  "holder": { "id": "did:example:user" },
  "verifier": ["did:web:community.com"],
  "verifiableCredential": [
    {
      "@context": ["https://www.w3.org/2018/credentials/v1"],
      "type": ["VerifiableCredential"],
      "issuer": { "id": "did:web:veramo.dev" },
      "issuanceDate": "2010-01-01T19:73:24Z",
      "credentialSubject": {
        "id": "did:example:user",
        "community": {
          "rank": "rockstar"
        }
      },
      "proof": {}
    },
    {
      "@context": ["https://www.w3.org/2018/credentials/v1"],
      "type": ["VerifiableCredential"],
      "issuer": { "id": "did:web:veramo.dev" },
      "issuanceDate": "2010-01-01T19:73:24Z",
      "credentialSubject": {
        "id": "did:example:user",
        "username": "django"
      },
      "proof": {}
    }
  ],
  "proof": {}
}
```

The above is a minimal example of a presentation that presents two credentials: community rank and the other for username. Both the credentials and the wrapper have signed proofs, so not only can the individual credentials be verified, but the whole wrapper too. How you verify and trust credentials and presentations is application-specific.
