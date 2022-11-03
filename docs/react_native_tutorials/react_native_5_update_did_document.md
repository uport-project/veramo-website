---
id: react_native_5_update_did_document
title: Update DID Document
sidebar_label: Update DID Document
---

## Adding funds to your blockchain account

First of all you will need to add add funds to the blockchain account that is being used to send transactions to the network.

Resolve your first identifier and find `blockchainAccountId` in resolution result. It will look something like this:

```
"blockchainAccountId": "eip155:5:0x52794453F09690Ed83d412ea929287102B4C5b9D"
```

In this case, the account is `0x52794453F09690Ed83d412ea929287102B4C5b9D`

Now, you can use one of the "faucets" listed here https://faucetlink.to/goerli to send funds to your account.

## Usage

Let's add a method that will call the agent to create and add additional key to the DID Document.

```tsx
// filename: App.tsx

// ... imports
import { IVerifyResult } from '@veramo/core'

const App = () => {
  // const [identifiers, setIdentifiers] = ...

  const [addKeyResult, setAddKeyResult] = useState<string>('')

  const addKey = async () => {
    if (identifiers[0].did) {
      try {
        setAddKeyResult('Adding new key...')
        const key = await agent.keyManagerCreate({
          kms: 'local',
          type: 'Secp256k1',
        })

        const result = await agent.didManagerAddKey({
          did: identifiers[0].did,
          key,
        })
        const str = JSON.stringify(result, null, 2)
        console.log(str)
        setAddKeyResult(str)
      } catch (e) {
        console.log(e)
        setAddKeyResult(e.message)
      }
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
            title={'Add key'}
            disabled={!identifiers || identifiers.length === 0}
            onPress={() => addKey()}
          />
          <Text style={{ fontSize: 10 }}>{addKeyResult}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
```

## Recap

In this guide we:

- added a new key to the DID Document
