import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'
import CodeBlock from '@theme/CodeBlock'
import GitHubButton from 'react-github-btn'
import Feature from '../components/Feature'

const textContent = {
  verifiableDataTitle: 'Verifiable data is the new standard',
  verifiableDataContent:
    'We live in a data driven, digital world and make decisions based on reputation. Off-chain verifiabilty is a critical building block for the economy of tomorrow. Veramo gives you the tools to start building trust networks that accelerate decision making, efficiency and productivity',
  cleanApi: 'Clean API backed by TypeScript',
  cleanApiContent:
    'Veramo has a simple and clean API that is easy to reason about. This example bootstraps your agent with minimal configuration.',
  pluginsTitle: 'Plugins at the core',
  plugins:
    'Veramo is powered by a flexible plugin system. We have a growing list of core plugins and adding your own custom plugin is easy.',
  codeExample: `
  import { createAgent } from '@veramo/core'
  import { KeyManager } from '@veramo/key-manager'
  import { DIDManager } from '@veramo/did-manager'
  import { CredentialIssuer } from '@veramo/credential-w3c'

  /* Configure the agent */
  const agent = createAgent({
    plugins: [
      new KeyManager(/* config */),
      new DIDManager(/* config */),
      new CredentialIssuer(),
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
    save: false
  })

  `,
  awesomeCLITitle: 'Awesome CLI',
  awesomeCLI: `No framework is complete without a fully featured CLI tool that gives you access to all the core functionality from your terminal. Veramo's CLI tool contains everything you need to get started.`,
}

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

function VerifiableData() {
  return (
    <section>
      <div className={styles.container}>
        <div className={clsx(styles.infoSection, styles.infoSectionPadding, styles.infoSectionCenter)}>
          <h1 style={{ fontSize: '3rem' }}>{textContent.verifiableDataTitle}</h1>
          <p className={styles.promoText} style={{ fontSize: 18 }}>
            {textContent.verifiableDataContent}
          </p>
          <div className="row" style={{ paddingTop: 50 }}>
            <Feature imageUrl="img/vc_pass.svg" />
            <Feature imageUrl="img/vc_kyc.svg" />
            <Feature imageUrl="img/vc_access.svg" />
          </div>
        </div>
      </div>
    </section>
  )
}

function CleanAPI() {
  return (
    <section className={'oddRow'}>
      <div className={styles.container}>
        <div
          className={clsx(
            styles.infoSection,
            styles.infoSectionPadding,
            styles.infoSectionLifted,
            styles.infoSectionCenter,
          )}
        >
          <h1 style={{ fontSize: '3rem' }}>{textContent.cleanApi}</h1>
          <p className={'promoText'} style={{ fontSize: 18 }}>
            {textContent.cleanApiContent}
          </p>
        </div>
      </div>
    </section>
  )
}

function Code() {
  return (
    <section className={styles.hexagonsBg}>
      <div className={styles.container}>
        <div className={clsx(styles.infoSection, styles.infoSectionLeft)}>
          <div className={styles.codeContent}>
            <CodeBlock language="typescript" style={{ height: '100%' }}>
              {textContent.codeExample}
            </CodeBlock>
          </div>
        </div>
      </div>
    </section>
  )
}

function AwesomeCli() {
  return (
    <section className={'oddRow'}>
      <div className={styles.container}>
        <div
          className={clsx(
            styles.infoSection,
            styles.infoSectionPadding,
            styles.infoSectionLifted,
            styles.infoSectionCenter,
          )}
        >
          <h1 style={{ fontSize: '3rem' }}>{textContent.awesomeCLITitle}</h1>
          <p className={'promoText'} style={{ fontSize: 18 }}>
            {textContent.awesomeCLI}
          </p>
          <CodeBlock className={styles.npmInstall} language={'bash'}>
            npm i @veramo/cli -g
          </CodeBlock>
        </div>
      </div>
    </section>
  )
}

function Cli() {
  return (
    <section className={styles.hexagonsBg}>
      <div className={styles.container}>
        <div className={'row'}>
          <div className={clsx(styles.infoSection, styles.infoSectionLeft)}>
            <div className={styles.cliContent}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Plugin({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <div className={styles.pluginsFeatureInner}>
        {imgUrl && (
          <div className="text--center" style={{ marginBottom: 10 }}>
            <img className={styles.featureImage} src={imgUrl} alt={title} />
          </div>
        )}
        <h3 className={styles.pluginsHeader}>{title}</h3>
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
      </div>
    </div>
  )
}

function Plugins() {
  return (
    <section>
      <div className={styles.container}>
        <div className={clsx(styles.infoSection, styles.infoSectionPadding, styles.infoSectionCenter)}>
          <h1 style={{ fontSize: '3rem' }}>Plugins</h1>
          <p className={'promoText'} style={{ fontSize: 18 }}>
            {textContent.plugins}
          </p>
          <div className={clsx(styles.plugins, 'row')} style={{ paddingTop: 50 }}>
            <Plugin
              title="key-manager"
              description="Manage keys and their metadata.<br/>Is used by other plugins for cryptographic operations."
            />
            <Plugin
              title="did-manager"
              description="Create and manage DIDs.<br/>Uses <code>did-provider-*</code> implementations."
            />
            <Plugin
              title="credential-w3c"
              description="Issue and verify W3C Verifiable Credentials and Presentations."
            />
            <Plugin title="message-handler" description="Decrypt or decode messages and trigger actions." />
            <Plugin
              title="data-store"
              description="Store and query Verifiable Credentials and Presentations using SQL-like databases."
            />
            <Plugin
              title="data-store-json"
              description="Store and query Verifiable Credentials and Presentations using a JSON object"
            />
            <Plugin title="did-comm" description="Pack, send, decrypt, and decode DIDComm messages." />

            <Plugin
              title="kms-local"
              description="Key Management System that stores keys locally or in memory.<br/>This is used by <code>key-manager</code>"
            />
            <Plugin
              title="kms-web3"
              description="Key Management System that delegates operations to a web3 wallet.<br/>This is used by <code>key-manager</code>"
            />

            <Plugin
              title="remote-server"
              description="Create an OpenAPI interface for plugins, serve <code>did:web</code> documents, ingress for <code>message-handler</code>."
            />
            <Plugin
              title="remote-client"
              description="Connect to a <code>remote-server</code> and provide those plugin methods locally"
            />

            <Plugin
              title="did-provider-ethr"
              description="Create and manage <code>did:ethr</code> identifiers"
            />
            <Plugin
              title="did-provider-web"
              description="Create and manage <code>did:web</code> identifiers"
            />
            <Plugin title="did-provider-key" description="Create <code>did:key</code> identifiers" />
            <Plugin
              title="did-provider-ion"
              description="Create and manage <code>did:ion</code> identifiers"
            />
            <Plugin title="did-provider-pkh" description="Create <code>did:pkh</code> identifiers" />
            <Plugin title="did-provider-jwk" description="Create <code>did:jwk</code> identifiers" />

            <Plugin
              title="did-jwt"
              description="Decode and verify JWT messages. This is used with <code>message-handler</code>"
            />
            <Plugin
              title="selective-disclosure"
              description="Create and handle requests for selective disclosure of Verifiable Credentials."
            />
          </div>
        </div>
      </div>
    </section>
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
      <header className={clsx('hero', styles.heroBanner)}>
        <div className="container">
          <div className={styles.socialLinks}>
            <GitHubButton
              href="https://github.com/uport-project/veramo"
              data-color-scheme="no-preference: dark; light: light; dark: light;"
              data-icon="octicon-star"
              data-size="large"
              aria-label="Star uport-project/veramo on GitHub"
            >
              Star
            </GitHubButton>
          </div>
          <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
          <p className={styles.heroSubtitle}>
            <i>{siteConfig.tagline}</i>
          </p>
          {/* <CodeBlock className="hero-code">npm i @veramo/cli --global</CodeBlock> */}
          <div className={styles.buttons}>
            <Link
              className={clsx('button button--primary button--square getStarted', styles.getStarted)}
              to={useBaseUrl('docs/basics/introduction')}
            >
              Get Started
            </Link>
            <Link
              className={clsx('button button--primary button--square watchDemo', styles.watchDemo)}
              to={'https://youtu.be/U6va97LOZ0M'}
            >
              ▶ Watch a demo
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
      <CleanAPI />
      <Code />
      <Plugins />
      <AwesomeCli />
      <Cli />
      <VerifiableData />
    </Layout>
  )
}

export default Home
