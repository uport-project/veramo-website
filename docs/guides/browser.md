---
id: browser
title: Create React App
sidebar_label: Create React App
---

Serto core runs natively in the browser. The plugins you use need to also be browser compatible. In the this guide we will set up a DID resolver to work in a standard `create-react-app setup`. It is possible to add your own identity, key management and storage plugins that are browser compatible. We plan to add these plugins and you can [get involved in the conversation here](https://github.com/uport-project/daf/issues/276)

Initialise a new `Create React App` project

```bash
npx create-react-app init veramo-browser --template typescript
```

Install veramo core and resolver plugin

```bash
yarn add @serto/core @serto/plugin-resolver
```

Create a setup file in `scr/veramo/setup.ts` and add the following code.

```ts
import { createAgent, IResolver } from 'daf-core'
import { DafResolver } from 'daf-resolver'

export const agent = createAgent<IResolver>({
  plugins: [new DafResolver({ infuraProjectId: 'INFURA_PROJECT_ID' })],
})
```

Open `App.css` and add the following styles to the top of the file:

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

Open `App.tsx` and replace with the following code:

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

And that's it! You should see a DID document being resolved instead of the default landing page. What's next? Perhaps you could [write a plugin](/docs/guides/create_plugin) that allows you to store data in local storage?
