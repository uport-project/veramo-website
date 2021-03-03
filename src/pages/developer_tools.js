import React from 'react'
import Layout from '@theme/Layout'
import styles from './styles.module.css'
import Feature from '../components/Feature'

const tools = [
  {
    title: 'Veramo CLI',
    imageUrl: 'img/cli-tool.svg',
    description: <>CLI tool does alots of stuff. It's great.</>,
  },
  {
    title: 'Veramo React',
    imageUrl: 'img/cli-tool.svg',
    description: <>Veramo React provides agent functionality to browsers and react native.</>,
  },
  {
    title: 'Veramo Agent Explore',
    imageUrl: 'img/multi-platform.svg',
    description: <>Developer dashboard for building apps and integrations with Veramo</>,
  },
  {
    title: 'Veramo NFT DevKit',
    imageUrl: 'img/multi-platform.svg',
    description: <>Our NFT DevKit enables a crypto native NFT stuff</>,
  },
  {
    title: 'Veramo VC DAppKit',
    imageUrl: 'img/multi-platform.svg',
    description: <>Our VC DApp DevKit enables all web3 enabled dapps to start accepting credentials today</>,
  },
]

function DeveloperTools() {
  return (
    <Layout title="Developer Tools">
      <section>
        <div className="container">
          <div className={'row'}>
            <h3>Page in progress...</h3>
          </div>
        </div>
      </section>
      <main style={{ opacity: 0.3 }}>
        {tools && tools.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {tools.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  )
}

export default DeveloperTools
