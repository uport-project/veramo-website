import React from 'react'
import clsx from 'clsx'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from '../css/feature.module.css'

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={clsx('col col--4')}>
      <div className="featureInner">
        {imgUrl && (
          <div className="text--center" style={{ marginBottom: 10 }}>
            <img className={styles.featureImage} src={imgUrl} alt={title} />
          </div>
        )}
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Feature
