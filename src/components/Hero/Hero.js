import React from 'react'
import Image from 'gatsby-image'

import * as styles from './style.module.scss'

const Hero = props => {
    return (
      <div className="absolute -top-52 left-0 right-0">
        <Image fluid={props.background} className={styles.background} />
      </div>
    )
}

export default Hero
