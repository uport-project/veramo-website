import React from 'react'
import Layout from '@theme/Layout'
import clsx from 'clsx'
import styles from './styles.module.css'
import Feature from '../components/Feature'

const tools = [
  {
    title: 'Veramo CLI',
    imageUrl: 'img/devtool_veramo_cli.svg',
    description: (
      <>
        The Veramo CLI contains everyting you need to get started. <br />
        <a href="/docs/dev_tools/veramo_cli">Learn more</a>
      </>
    ),
  },
  {
    title: 'Veramo React',
    imageUrl: 'img/devtool_veramo_react.svg',
    description: (
      <>
        Veramo React provides agent functionality to browsers and react native. <br />
        <a href="/docs/dev_tools/veramo_react">Learn more</a>
      </>
    ),
  },
  {
    title: 'Veramo Agent Explore',
    imageUrl: 'img/devtool_veramo_agent_explorer.svg',
    description: (
      <>
        Veramo Agent Explorer is a developer dashboard for building apps and integrations with Veramo.
        <br />
        <a href="/docs/dev_tools/agent_explorer">Learn more</a>
      </>
    ),
  },
]

const toolkits = [
  {
    title: 'SSI Toolkit',
    imageUrl: 'img/toolkit_ssi.svg',
    description: (
      <>
        A toolkit for building SSI wallets and services. <br />
        <a href="/docs/dev_tools/ssi_toolkit">Learn more</a>
      </>
    ),
  },
  {
    title: 'NFT Identity Toolkit',
    imageUrl: 'img/toolkit_nft.svg',
    description: (
      <>
        A toolkit for working with NFTs and Identity. <br />
        <a href="/docs/dev_tools/nft_toolkit">Learn more</a>
      </>
    ),
  },
  {
    title: 'Web3 Toolkit',
    imageUrl: 'img/toolkit_web3.svg',
    description: (
      <>
        A toolkit for integrating Veramo with Web3. <br />
        <a href="/docs/dev_tools/web3_toolkit">Learn more</a>
      </>
    ),
  },
]

function Tools() {
  return (
    <section>
      <div className={styles.container}>
        <div className={clsx(styles.infoSection, styles.infoSectionPadding, styles.infoSectionCenter)}>
          <h1 style={{ fontSize: '3rem' }}>Developer Tools</h1>
          <p className={'promoText'} style={{ fontSize: 18 }}>
            The core developer tools are specific libraries that use Veramo and make using Veramo easier.
          </p>
          <div className="row" style={{ marginTop: 50 }}>
            {tools.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Kits() {
  return (
    <section className={'oddRow'}>
      <div className={styles.container}>
        <div className={clsx(styles.infoSection, styles.infoSectionPadding, styles.infoSectionCenter)}>
          <h1 style={{ fontSize: '3rem' }}>Developer Toolkits</h1>
          <p className={'promoText'} style={{ fontSize: 18 }}>
            These kits consist of recommended plugins, agent configurations, architecture and step-by-step
            tutorials that are geared towards specific industries and use cases.
          </p>
          <div className="row" style={{ marginTop: 50 }}>
            {toolkits.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function DeveloperTools() {
  return (
    <Layout wrapperClassName={'devtools-page'}>
      <header className={clsx('hero', styles.heroBanner)}>
        <div className="container">
          <h1 className={styles.heroTitle}>Developer Tooling</h1>
          <p className={styles.heroSubtitle}>
            <i>Tools and Kits designed for a more productive experience</i>
          </p>
        </div>
      </header>
      <Tools />
      <Kits />
    </Layout>
  )
}

export default DeveloperTools
