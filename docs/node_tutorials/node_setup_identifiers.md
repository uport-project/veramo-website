---
id: node_setup_identifiers
title: Node Setup, Identifiers & Credentials
sidebar_label: Setup, Identifiers & Credentials
---

This guide covers setting up an agent and creating identifiers in Node.

#### Note

A finished example of this tutorial can be found on github at [https://github.com/veramolabs/veramo-nodejs-tutorial](https://github.com/veramolabs/veramo-nodejs-tutorial)

### Prerequisites

You need to have Node v14 or later installed. In this example, we use yarn as the package manager, but you can also use
npm.

Start by creating a directory for our project and initializing the npm package.

```bash
mkdir veramo-agent && cd veramo-agent
yarn init -y
```

Install dev dependencies

```bash
yarn add typescript ts-node --dev
```

Install Veramo core and plugins

```bash
yarn add @veramo/core @veramo/credential-w3c @veramo/data-store @veramo/did-manager @veramo/did-provider-ethr @veramo/did-resolver @veramo/key-manager @veramo/kms-local ethr-did-resolver web-did-resolver
```

Install `sqlite`

```bash
yarn add sqlite3
```

Add a tsconfig.json to your project

```json
{
  "compilerOptions": {
    "preserveConstEnums": true,
    "strict": true,
    "target": "es6",
    "rootDir": "./",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "downlevelIteration": true
  }
}
```

## Bootstrap Veramo

We bootstrap Veramo by creating a setup file and initializing the agent. Create a setup file in `src/veramo/setup.ts`
and import the following dependencies:

```typescript
// Core interfaces
import {
  createAgent,
  IDIDManager,
  IResolver,
  IDataStore,
  IDataStoreORM,
  IKeyManager,
  ICredentialPlugin,
} from '@veramo/core'

// Core identity manager plugin
import { DIDManager } from '@veramo/did-manager'

// Ethr did identity provider
import { EthrDIDProvider } from '@veramo/did-provider-ethr'

// Core key manager plugin
import { KeyManager } from '@veramo/key-manager'

// Custom key management system for RN
import { KeyManagementSystem, SecretBox } from '@veramo/kms-local'

// W3C Verifiable Credential plugin
import { CredentialPlugin } from '@veramo/credential-w3c'

// Custom resolvers
import { DIDResolverPlugin } from '@veramo/did-resolver'
import { Resolver } from 'did-resolver'
import { getResolver as ethrDidResolver } from 'ethr-did-resolver'
import { getResolver as webDidResolver } from 'web-did-resolver'

// Storage plugin using TypeOrm
import { Entities, KeyStore, DIDStore, PrivateKeyStore, migrations } from '@veramo/data-store'

// TypeORM is installed with `@veramo/data-store`
import { DataSource } from 'typeorm'
```

Create some variables that we will use later

```ts
// This will be the name for the local sqlite database for demo purposes
const DATABASE_FILE = 'database.sqlite'

// You will need to get a project ID from infura https://www.infura.io
const INFURA_PROJECT_ID = '<your PROJECT_ID here>'

// This will be the secret key for the KMS
const KMS_SECRET_KEY =
  '< you can generate a key by running `npx @veramo/cli config create-secret-key` in a terminal>'
```

Initialise a database using TypeORM

```ts
const dbConnection = new DataSource({
  type: 'sqlite',
  database: DATABASE_FILE,
  synchronize: false,
  migrations,
  migrationsRun: true,
  logging: ['error', 'info', 'warn'],
  entities: Entities,
}).initialize()
```

Create the agent by using the createAgent method from `@veramo/core`

```ts
export const agent = createAgent<
  IDIDManager & IKeyManager & IDataStore & IDataStoreORM & IResolver & ICredentialPlugin
>({
  plugins: [
    new KeyManager({
      store: new KeyStore(dbConnection),
      kms: {
        local: new KeyManagementSystem(new PrivateKeyStore(dbConnection, new SecretBox(KMS_SECRET_KEY))),
      },
    }),
    new DIDManager({
      store: new DIDStore(dbConnection),
      defaultProvider: 'did:ethr:goerli',
      providers: {
        'did:ethr:goerli': new EthrDIDProvider({
          defaultKms: 'local',
          network: 'goerli',
          rpcUrl: 'https://goerli.infura.io/v3/' + INFURA_PROJECT_ID,
        }),
      },
    }),
    new DIDResolverPlugin({
      resolver: new Resolver({
        ...ethrDidResolver({ infuraProjectId: INFURA_PROJECT_ID }),
        ...webDidResolver(),
      }),
    }),
    new CredentialPlugin(),
  ],
})
```

> **Note:**
>
> The types you specify for agent creation are optional, but may be very helpful when writing TypeScript, as long as they
> match the plugins that you add to the agent.
>
> ```typescript
> <IDIDManager & IKeyManager & IDataStore & IDataStoreORM & IResolver & ICredentialPlugin>
> ```
>
> These types help the typescript compiler to figure out what plugin methods get exposed by the agent and what parameters
> those methods require. These types are also very helpful for development in VSCode, or other IDEs that provide
> auto-complete.

That's one possible agent setup. Let's use it to create and list identifiers.

## App Logic

Create 4 files `./src/create-identifier.ts`, `./src/list-identifiers.ts`, `./src/create-credential.ts` and `./src/verify-credential.ts`

Add the following code to `./src/list-identifiers.ts`

```ts
import { agent } from './veramo/setup'

async function main() {
  const identifiers = await agent.didManagerFind()

  console.log(`There are ${identifiers.length} identifiers`)

  if (identifiers.length > 0) {
    identifiers.map((id) => {
      console.log(id)
      console.log('..................')
    })
  }
}

main().catch(console.log)
```

Add the following code to `./src/create-identifier.ts`

```ts
import { agent } from './veramo/setup'

async function main() {
  const identifier = await agent.didManagerCreate({ alias: 'default' })
  console.log(`New identifier created`)
  console.log(JSON.stringify(identifier, null, 2))
}

main().catch(console.log)
```

Add the following code to `./src/create-credential.ts`

```ts
import { agent } from './veramo/setup'

async function main() {
  const identifier = await agent.didManagerGetByAlias({ alias: 'default' })

  const verifiableCredential = await agent.createVerifiableCredential({
    credential: {
      issuer: { id: identifier.did },
      credentialSubject: {
        id: 'did:web:example.com',
        you: 'Rock',
      },
    },
    proofFormat: 'jwt',
  })
  console.log(`New credential created`)
  console.log(JSON.stringify(verifiableCredential, null, 2))
}

main().catch(console.log)
```

Add the following code to `./src/verify-credential.ts`

```ts
import { agent } from './veramo/setup'

async function main() {
  const result = await agent.verifyCredential({
    credential: {
      credentialSubject: {
        you: 'Rock',
        id: 'did:web:example.com',
      },
      issuer: {
        id: 'did:ethr:goerli:0x0350eeeea1410c5b152f1a88e0ffe8bb8a0bc3df868b740eb2352b1dbf93b59c16',
      },
      type: ['VerifiableCredential'],
      '@context': ['https://www.w3.org/2018/credentials/v1'],
      issuanceDate: '2022-10-28T11:54:22.000Z',
      proof: {
        type: 'JwtProof2020',
        jwt:
          'eyJhbGciOiJFUzI1NksiLCJ0eXAiOiJKV1QifQ.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIl0sImNyZWRlbnRpYWxTdWJqZWN0Ijp7InlvdSI6IlJvY2sifX0sInN1YiI6ImRpZDp3ZWI6ZXhhbXBsZS5jb20iLCJuYmYiOjE2NjY5NTgwNjIsImlzcyI6ImRpZDpldGhyOmdvZXJsaToweDAzNTBlZWVlYTE0MTBjNWIxNTJmMWE4OGUwZmZlOGJiOGEwYmMzZGY4NjhiNzQwZWIyMzUyYjFkYmY5M2I1OWMxNiJ9.EPeuQBpkK13V9wu66SLg7u8ebY2OS8b2Biah2Vw-RI-Atui2rtujQkVc2t9m1Eqm4XQFECfysgQBdWwnSDvIjw',
      },
    },
  })
  console.log(`Credential verified`, result.verified)
}

main().catch(console.log)
```

### List Identifiers

```bash
yarn ts-node ./src/list-identifiers
```

**Expected output**

```bash
$ ts-node ./src/list-identifiers
There are 0 identifiers
```

### Create Identifier

```bash
yarn ts-node ./src/create-identifier
```

**Expected output**

```bash
$ ts-node ./src/create-identifier
New identifier created
{
  "did": "did:ethr:goerli:0x0350eeeea1410c5b152f1a88e0ffe8bb8a0bc3df868b740eb2352b1dbf93b59c16",
  "controllerKeyId": "0450eeeea1410c5b152f1a88e0ffe8bb8a0bc3df868b740eb2352b1dbf93b59c1623b138f54e600141c5119f391eea730d3b1a089ed4ad35b25c2c646dee27a7bd",
  "keys": [
    {
      "type": "Secp256k1",
      "kid": "0450eeeea1410c5b152f1a88e0ffe8bb8a0bc3df868b740eb2352b1dbf93b59c1623b138f54e600141c5119f391eea730d3b1a089ed4ad35b25c2c646dee27a7bd",
      "publicKeyHex": "0450eeeea1410c5b152f1a88e0ffe8bb8a0bc3df868b740eb2352b1dbf93b59c1623b138f54e600141c5119f391eea730d3b1a089ed4ad35b25c2c646dee27a7bd",
      "meta": {
        "algorithms": [
          "ES256K",
          "ES256K-R",
          "eth_signTransaction",
          "eth_signTypedData",
          "eth_signMessage"
        ]
      },
      "kms": "local"
    }
  ],
  "services": [],
  "provider": "did:ethr:goerli",
  "alias": "default"
}
```

### Create credential

```bash
yarn ts-node ./src/create-credential
```

**Expected output**

```bash
$ ts-node ./src/create-credential
New credential created
{
  "credentialSubject": {
    "you": "Rock",
    "id": "did:web:example.com"
  },
  "issuer": {
    "id": "did:ethr:goerli:0x0350eeeea1410c5b152f1a88e0ffe8bb8a0bc3df868b740eb2352b1dbf93b59c16"
  },
  "type": [
    "VerifiableCredential"
  ],
  "@context": [
    "https://www.w3.org/2018/credentials/v1"
  ],
  "issuanceDate": "2022-10-28T11:54:22.000Z",
  "proof": {
    "type": "JwtProof2020",
    "jwt": "eyJhbGciOiJFUzI1NksiLCJ0eXAiOiJKV1QifQ.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIl0sImNyZWRlbnRpYWxTdWJqZWN0Ijp7InlvdSI6IlJvY2sifX0sInN1YiI6ImRpZDp3ZWI6ZXhhbXBsZS5jb20iLCJuYmYiOjE2NjY5NTgwNjIsImlzcyI6ImRpZDpldGhyOmdvZXJsaToweDAzNTBlZWVlYTE0MTBjNWIxNTJmMWE4OGUwZmZlOGJiOGEwYmMzZGY4NjhiNzQwZWIyMzUyYjFkYmY5M2I1OWMxNiJ9.EPeuQBpkK13V9wu66SLg7u8ebY2OS8b2Biah2Vw-RI-Atui2rtujQkVc2t9m1Eqm4XQFECfysgQBdWwnSDvIjw"
  }
}
```

### Verify credential

```bash
yarn ts-node ./src/verify-credential
```

**Expected output**

```bash
$ ts-node ./src/verify-credential
Credential verified true
```

Congrats, You have set up the agent, created identifiers, created and verified a credential!
