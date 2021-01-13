---
id: browser
title: Create React App
sidebar_label: Create React App
---

Veramo core runs natively in the browser. The plugins you use also need to be browser compatible. This guide will set up a DID resolver to work in a standard `create-react-app setup`. It is possible to add your own identity, key management, and storage plugins that are browser compatible. We plan to add these plugins, and you can [get involved in the conversation here](https://github.com/uport-project/veramo/issues/276)

Initialize a new `Create React App` project

```bash
npx create-react-app init veramo-browser --template typescript
```

:::note
Stop if you see this message at the end:

```
A template was not provided. This is likely because you're using an outdated version of create-react-app.
Please note that global installs of create-react-app are no longer supported.
You can fix this by running npm uninstall -g create-react-app or yarn global remove create-react-app before using create-react-app again.
```

Be sure to follow those instructions and then run the `npx` command again (because otherwise `yarn start` won't even run).  If you can't get rid of that message, [this answer may help](https://stackoverflow.com/questions/59188624/template-not-provided-using-create-react-app).
:::

Install veramo core and resolver plugin

```bash
yarn add @veramo/core @veramo/plugin-resolver
```

Create a setup file in `scr/veramo/setup.ts` and add the following code.

```ts
import { createAgent, IResolver } from '@veramo/core'
import { DafResolver } from '@veramo/resolver'

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
