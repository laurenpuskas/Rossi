import React from 'react'
import Image from 'gatsby-image'

import * as styles from './style.module.scss'

const Background = (props) => {
    return (
      <div className={`${props.classes}`}>
        <Image fluid={props.background} className={styles.background} />
      </div>
    )
}

export default Background
