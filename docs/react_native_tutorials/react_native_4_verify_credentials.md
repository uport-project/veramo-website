---
id: react_native_4_verify_credentials
title: Verify Credentials
sidebar_label: Verify Credentials
---

## Installation & Setup

You don't need any additional steps other than the ones [described in the previous step](react_native_3_create_credentials).

## Usage

Let's add a method that will call the agent to verify a credential.

```tsx
// filename: App.tsx

// ... imports
import { IVerifyResult } from '@veramo/core'

const App = () => {
  // const [identifiers, setIdentifiers] = ...

  const [verificationResult, setVerificationResult] = useState<IVerifyResult | undefined>()

  const verifyCredential = async () => {
    if (credential) {
      const result = await agent.verifyCredential({ credential })
      setVerificationResult(result)
    }
  }

  // ... the rest of the App code

  // Modify the return value of the `App` function to include space for the DID document like so:
  return (
    <SafeAreaView>
      <ScrollView>
        {/* previously added code */}
        <View style={{ padding: 20 }}>
          <Button title={'Verify Credential'} onPress={() => verifyCredential()} disabled={!credential} />
          <Text style={{ fontSize: 10 }}>{JSON.stringify(verificationResult, null, 2)}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
```

## Recap

In this guide we:

- used previously installed plugin to verify a credential
- displayed the verification result
