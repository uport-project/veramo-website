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
    title: 'Modular, Composable, Scalable',
    imageUrl: 'img/modular.svg',
    description: (
      <>
        Veramo was designed from the ground up to be flexible and modular making it highly scalable. Create an
        agent, add plugins, run on server or mobile. You can also expose your agent over REST.
      </>
    ),
  },
  {
    title: 'Awesome CLI',
    imageUrl: 'img/cli-tool.svg',
    description: (
      <>
        The Veramo core API is exposed by our CLI tool. Get started quickly creating DIDs and VCs from your
        terminal or run a local cloud agent. Developers will love the plugin development tools included.
      </>
    ),
  },
  {
    title: 'Multi-Platform',
    imageUrl: 'img/multi-platform.svg',
    description: <>Veramo runs on Node, Browsers, and React Native right out of the box.</>,
  },
]

const textContent = {
  tooling: `Veramo was designed from the ground up to be flexible and modular which makes it highly scalable. Create an agent, add plugins, run on server or mobile. 
  You can also expose your agent over REST.`,
  codeExample: `
  import { createAgent } from '@veramo/core'
  import { KeyManager } from '@veramo/key-manager'
  import { DIDManager } from '@veramo/did-manager'

  /* Configure the agent */
  const agent = createAgent({
    plugins: [
      new KeyManager(/* config */),
      new DIDManager(/* config */)
    ],
  })

  /* Create an identifier and optionally link to an existing user */
  const user = await agent.didManagerGetOrCreate({
    alias: 'alice'
  })

  const verifiableCredential = await agent.createVerifiableCredential({
    credential: {
      issuer: { id: 'did:web:sun.veramo.dev' },
      credentialSubject: {
        id: user.did,
        tutorial: 42,
        status: 'completed'
      }
    },
    proofFormat: 'jwt',
    save: true
  })

  `,
  cliExample: `
  /* Install the CLI globally */
  $ npm install @veramo/cli -g

  /* Resolve a DID */
  $ veramo did resolve did:web:sun.veramo.io

  /* Create an identifier */
  $ veramo did create

  /* Create a verifiable credential */
  $ veramo credential create

  /* Run a local cloud agent */
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
      <div className={'container tooling'}>
        <div className={'row'}>
          <div className={'col col--6'} style={{ padding: 10, textAlign: 'center' }}>
            <div className={'content'}>
              <img src="/img/layers.png" style={{ maxHeight: 300 }} />
            </div>
          </div>
          <div className={'col col--6'} style={{ paddingTop: 50, paddingLeft: 20 }}>
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
    <section className={'composable'}>
      <div className={'container tooling'}>
        <div className={'row'}>
          <div className={'col col--6'} style={{ paddingTop: 50, paddingLeft: 20 }}>
            <div className={'content'}>
              <h3 className={'promoTitle'} style={{ fontSize: 24 }}>
                Modular, composable, scalable
              </h3>
              <p className={'promoText'} style={{ fontSize: 18 }}>
                {textContent.tooling}
              </p>
            </div>
          </div>
          <div className={'col col--6 right'}>
            <CodeBlock language="typescript">{textContent.codeExample}</CodeBlock>
          </div>
        </div>
      </div>
    </section>
  )
}

function MultiPlatform() {
  return (
    <section className={'container tooling'}>
      <div className={'row'}>
        <div className={'col col--6'} style={{ padding: 50, textAlign: 'center' }}>
          <div className={'content'}>
            <img src="/img/multi-platform.png" style={{ maxHeight: 275 }} />
          </div>
        </div>
        <div className={'col col--6'} style={{ paddingTop: 50, paddingLeft: 20 }}>
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

function Talk() {
  return (
    <section style={{ paddingBottom: 150, height: 300 }} className={'oddRow'}>
      <div className={'container tooling'}>
        <div className="container">
          <h1>Talk to us about your project</h1>
        </div>
      </div>
    </section>
  )
}

function Playground() {
  return (
    <section style={{ paddingBottom: 150, height: 500 }} className={'oddRow'}>
      <div className={'container tooling'}>
        <div className="container" style={{ textAlign: 'center', padding: 100 }}>
          <h1 style={{ fontSize: '3rem' }}>Some other big tagline</h1>
        </div>
      </div>
    </section>
  )
}

function Code() {
  return (
    <section className={'codeBg'} style={{ backgroundColor: '#0d2a39' }}>
      <div className={'container tooling'}>
        <div className={'row'}>
          <div
            style={{
              width: '100%',
              border: 0,
              borderRadius: 4,
              overflow: 'hidden',
              marginTop: -200,
              boxShadow: '0 25px 50px -12px rgb(0 0 0 / 25%)',
            }}
          >
            <CodeBlock language="typescript" style={{ height: '100%' }}>
              {textContent.codeExample}
            </CodeBlock>
          </div>
        </div>
        <div className="container" style={{ textAlign: 'center', padding: 100 }}>
          <h1 style={{ fontSize: '3rem', color: 'white' }}>Blah, blah</h1>
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
        <div className="text--center" style={{ marginBottom: 10 }}>
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
      title={`Veramo - A JavaScript Framework for Verifiable Data`}
      description={siteConfig.tagline}
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="text--center" className={styles.hexagons}>
          <img style={{ maxWidth: 800, height: 'auto' }} src="img/hexagons.svg" />
        </div>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--primary button--lg button--square getStarted',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/fundamentals/introduction')}
            >
              Get Started
            </Link>
            <Link
              className={clsx('button button--secondary button--lg button--no-border', styles.learnMore)}
              to={useBaseUrl('docs/fundamentals/introduction')}
            >
              Learn more
            </Link>
          </div>
        </div>
      </header>
      <main>
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
      </main>
      <Playground />
      <Code />
      <Talk />
    </Layout>
  )
}

export default Home
