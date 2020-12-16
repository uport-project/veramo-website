import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'
import CodeBlock from '@theme/CodeBlock'

const features = [
  {
    title: 'Easy to Use',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and used to get your website up and
        running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go ahead and move your docs into
        the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the
        same header and footer.
      </>
    ),
  },
]

const textContent = {
  tooling: `Veramo was designed from the ground up to be flexible and modular which makes it highly scalable. Create an agent, add plugins, run on server or mobile. 
  You can also expose your agent over REST.`,
  codeExample: `
  import * as Veramo from '@veramo/core'
  import { MessageHandler } from '@veramo/message-handler'
  import { KeyManager } from '@veramo/key-manager'

  /* Configure the agent */
  const agent = Veramo.createAgent({
    plugins: [
      new KeyManager(/* Key config */),
      new MessageHandler(/* Message config */),
      new IdentityManager(/* Identity config */)
    ],
  })

  /* Create an identifier and optionally link to an existing user */
  const user = await agent.identityManagerGetOrCreateIdentity()

  const verifiableCredential = await agent.createVerifiableCredential({
    credential: {
      issuer: { id: did:web:veramo.dev },
      '@context': ['https://www.w3.org/2018/credentials/v1'],
      type: ['VerifiableCredential'],
      issuanceDate: new Date().toISOString(),
      credentialSubject: {
        id: user.did,
        tutorial_22: {
          status: 'completed'
        }
      }
    },
    proofFormat: 'jwt',
    save: true
  })

  `,
  cliExample: `
  /* Install the CLI globally */
  $ npm install veramo -g

  /* Resolve a DID */
  $ veramo resolve did:web:veramo.io

  /* Create an identifier */
  $ veramo identifier --create

  /* Create a verifiable credential */
  $ veramo credential --create

  /* Rum a local cloud agent */
  $ veramo server
  `,

  multiPlatform: `
  Veramo runs on Node, Browsers, and React Native straight out of the box. 
  
  Save time by using the same API across all platforms.
  `,
  orchestrateStandards: `Start building the trust layer in your applications today with Veramo. We obsess over standards
  and interoperability making it easy to support a wide list of standards in the data verification space.`,
  awesomeCLI: `The Veramo core API is exposed by our CLI tool. Get started quickly creating DIDs and VCs from your terminal or run a local cloud agent. Developers will love the plugin development tools included.`,
}

function BuildTrustNetworks() {
  return (
    <section>
      <div className={'section tooling'} style={{ backgroundColor: 'white' }}>
        <div className={'container'} style={{ display: 'flex', flexDirection: 'row' }}>
          <div
            className={'column left'}
            style={{ display: 'flex', flex: 1, justifyContent: 'flex-end', padding: 10 }}
          >
            <div className={'content'}>
              <img src="/img/layers.png" />
            </div>
          </div>
          <div className={'column right'} style={{ flex: 1, padding: 50 }}>
            <div className={'content'}>
              <h3 className={'promoTitle'} style={{ fontSize: 24 }}>
                Orchestrate standards and build trust layers into your apps
              </h3>
              <p className={'promoText'} style={{ fontSize: 18 }}>
                {textContent.orchestrateStandards}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function NextGenerationTooling() {
  return (
    <section>
      <div className={'section tooling'} style={{ backgroundColor: 'whitesmoke' }}>
        <div className={'container'} style={{ display: 'flex', flexDirection: 'row' }}>
          <div
            className={'column left'}
            style={{ display: 'flex', flex: 1, justifyContent: 'flex-end', padding: '50px 20px 0 0' }}
          >
            <div className={'content'}>
              <h3 className={'promoTitle'} style={{ fontSize: 24 }}>
                Modular, composable, scalable
              </h3>
              <p className={'promoText'} style={{ fontSize: 18 }}>
                {textContent.tooling}
              </p>
            </div>
          </div>
          <div className={'column right'} style={{ flex: 1 }}>
            <CodeBlock language="typescript">{textContent.codeExample}</CodeBlock>
          </div>
        </div>
      </div>
    </section>
  )
}

function MultiPlatform() {
  return (
    <section>
      <div className={'section tooling container'} style={{ display: 'flex', flexDirection: 'row' }}>
        <div
          className={'column left'}
          style={{ display: 'flex', flex: 1, justifyContent: 'flex-end', padding: 50 }}
        >
          <div className={'content'}>
            <img src="/img/multi-platform.png" />
          </div>
        </div>
        <div className={'column right'} style={{ flex: 1, padding: 50 }}>
          <div className={'content'}>
            <h3 className={'promoTitle'} style={{ fontSize: 24 }}>
              Multi-Platform out of the box
            </h3>
            <p className={'promoText'} style={{ fontSize: 18 }}>
              {textContent.multiPlatform}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function CommandLineTool() {
  return (
    <section>
      <div className={'section tooling'} style={{ backgroundColor: 'whitesmoke' }}>
        <div className={'container'} style={{ display: 'flex', flexDirection: 'row' }}>
          <div
            className={'column left'}
            style={{ display: 'flex', flex: 1, justifyContent: 'flex-end', padding: '50px 20px 0 0' }}
          >
            <div className={'content'}>
              <h3 className={'promoTitle'} style={{ fontSize: 24 }}>
                Awesome CLI
              </h3>
              <p className={'promoText'} style={{ fontSize: 18 }}>
                {textContent.awesomeCLI}
              </p>
            </div>
          </div>
          <div className={'column right'} style={{ flex: 1 }}>
            <CodeBlock language="bash">{textContent.cliExample}</CodeBlock>
          </div>
        </div>
      </div>
    </section>
  )
}

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout
      wrapperClassName={'home-page'}
      title={`Veramo - ${siteConfig.tagline}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx('button button--primary button--lg button--square', styles.getStarted)}
              to={useBaseUrl('docs/fundamentals/introduction')}
            >
              Get Started
            </Link>
            <Link
              className={clsx('button  button--lg button--no-border', styles.learnMore)}
              to={useBaseUrl('docs/fundamentals/introduction')}
            >
              Learn more
            </Link>
          </div>
        </div>
      </header>
      {/* <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main> */}
      <BuildTrustNetworks />
      <NextGenerationTooling />
      <MultiPlatform />
      <CommandLineTool />
    </Layout>
  )
}

export default Home
