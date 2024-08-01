---
id: react_native_3_create_credentials
title: Create Credentials
sidebar_label: Create Credentials
---

## Installation

The veramo list of "core" packages contains a W3C Credential plugin. This plugin allows us to
create and verify credentials with JWT proof type.

Now add the credential package:

```bash
npm install @veramo/credential-w3c`
```

> ℹ️ **Note:** In case you run into issues check out the [Troubleshooting](../troubleshooting.md) page for some options.

## Setup

Next, let's install these in our Veramo setup. First, we'll add these imports:

```ts
// filename: setup.ts

// imports:
// This plugin allows us to issue and verify W3C Verifiable Credentials with JWT proof format
import { CredentialPlugin, ICredentialIssuer, ICredentialVerifier } from '@veramo/credential-w3c'
```

Then, let's add this plugin to the list of plugins given to `createAgent`:

```ts
// filename: setup.ts

// ... imports & CONSTANTS & DB setup

// Veramo agent setup
export const agent = createAgent<
  IDIDManager & IKeyManager & IDataStore & IDataStoreORM & IResolver & ICredentialIssuer & ICredentialVerifier
>({
  // we also add the ICredentialIssuer & ICredentialVerifier plugin interface
  plugins: [
    //
    // ... previously added plugins
    //
    new CredentialPlugin(),
  ],
})
```

## Usage

Let's add a method that will call the agent to create a verifiable credential.

```tsx
// filename: App.tsx

// ... imports
import { VerifiableCredential } from '@veramo/core'

const App = () => {
  // const [identifiers, setIdentifiers] = ...

  const [credential, setCredential] = useState<VerifiableCredential | undefined>()

  const createCredential = async () => {
    if (identifiers[0].did) {
      const verifiableCredential = await agent.createVerifiableCredential({
        credential: {
          issuer: { id: identifiers[0].did },
          issuanceDate: new Date().toISOString(),
          credentialSubject: {
            id: 'did:web:community.veramo.io',
            you: 'Rock',
          },
        },
        save: false,
        proofFormat: 'jwt',
      })

      setCredential(verifiableCredential)
    }
  }

  // ... the rest of the App code

  // Modify the return value of the `App` function to include space for the DID document like so:
  return (
    <SafeAreaView>
      <ScrollView>
        {/* previously added code */}
        <View style={{ padding: 20 }}>
          <Button
            title={'Create Credential'}
            disabled={!identifiers || identifiers.length === 0}
            onPress={() => createCredential()}
          />
          <Text style={{ fontSize: 10 }}>{JSON.stringify(credential, null, 2)}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
```

## Recap

In this guide we:

- installed a new Veramo plugin that can issue Verifiable Credentials,
- used the new plugin to issue a credential
- displayed the credential
