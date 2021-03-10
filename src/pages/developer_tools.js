import React from 'react'
import Layout from '@theme/Layout'
import styles from './styles.module.css'
import Feature from '../components/Feature'

const tools = [
  {
    title: 'Veramo CLI',
    imageUrl: 'img/devtool_veramo_cli.svg',
    description: <>CLI tool does alots of stuff. It's great.</>,
  },
  {
    title: 'Veramo React',
    imageUrl: 'img/devtool_veramo_react.svg',
    description: <>Veramo React provides agent functionality to browsers and react native.</>,
  },
  {
    title: 'Veramo Agent Explore',
    imageUrl: 'img/devtool_veramo_agent_explorer.svg',
    description: <>Developer dashboard for building apps and integrations with Veramo</>,
  },
]

function DeveloperTools() {
  return (
    <Layout title="Developer Tools">
      <section className="container padding-vert--lg">
        <div>
          <h1 style={{ fontSize: '3rem' }}>Developer Tools</h1>
          <p>Our developer tools make building apps with Veramo a breeze. The current core tools are</p>
        </div>
        <main>
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
      </section>
    </Layout>
  )
}

export default DeveloperTools
