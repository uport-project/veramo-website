---
id: react_setup_resolver
title: React Setup & Resolver
sidebar_label: Setup & Resolver
---

Veramo core runs natively in the browser. The plugins you use also need to be browser compatible. This guide will set up a DID resolver to work in a standard [Create React App](https://create-react-app.dev/) setup. It is possible to add your own identity, key management, and storage plugins that are browser compatible.

### Initialize app

Initialize a new **CRA** project

```bash
npx create-react-app veramo-react-app --template typescript
cd veramo-react-app
```

Install veramo core, DIDResolver plugin and dependencies

```bash
yarn add @veramo/core @veramo/did-resolver ethr-did-resolver web-did-resolver did-resolver
```

Create a setup file in `src/veramo/setup.ts` and add the following code, replacing the `INFURA_PROJECT_ID` with your own.

```ts
import { createAgent, IResolver } from '@veramo/core'

import { DIDResolverPlugin } from '@veramo/did-resolver'
import { Resolver } from 'did-resolver'
import { getResolver as ethrDidResolver } from 'ethr-did-resolver'
import { getResolver as webDidResolver } from 'web-did-resolver'

// You will need to get a project ID from infura https://www.infura.io
const INFURA_PROJECT_ID = 'INFURA_PROJECT_ID'

export const agent = createAgent<IResolver>({
  plugins: [
    new DIDResolverPlugin({
      resolver: new Resolver({
        ethr: ethrDidResolver({
          networks: [{ name: 'rinkeby', rpcUrl: 'https://rinkeby.infura.io/v3/' + INFURA_PROJECT_ID }],
        }).ethr,
        web: webDidResolver().web,
      }),
    }),
  ],
})
```

Open `src/App.css` and add the following styles to the top of the file:

```css
pre {
  font-family: monospace;
  white-space: pre;
}

#result {
  text-align: left;
  width: 900px;
  background-color: #24232d;
  color: #25c2a0;
  padding: 15px;
  overflow: scroll;
}
```

Open `src/App.tsx` and replace with the following code:

```tsx
import React, { useEffect, useState } from 'react'
import './App.css'

import { agent } from './veramo/setup'

function App() {
  const [didDoc, setDidDoc] = useState<any>()

  const resolve = async () => {
    const doc = await agent.resolveDid({
      didUrl: 'did:ethr:rinkeby:0x6acf3bb1ef0ee84559de2bc2bd9d91532062a730',
    })

    setDidDoc(doc)
  }

  useEffect(() => {
    resolve()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <pre id="result">{didDoc && JSON.stringify(didDoc, null, 2)}</pre>
      </header>
    </div>
  )
}

export default App
```

And that's it! When you `yarn start` you should see a DID document being resolved instead of the default landing page.

## Troubleshooting

If after running `create-react-app`, you see the following message:

```
A template was not provided. This is likely because you're using an outdated version of create-react-app.
Please note that global installs of create-react-app are no longer supported.
You can fix this by running npm uninstall -g create-react-app or yarn global remove create-react-app before using create-react-app again.
```

Be sure to follow the instructions in that message, and then run the `npx` command again. If you still the message, [this answer may help](https://stackoverflow.com/questions/59188624/template-not-provided-using-create-react-app).
