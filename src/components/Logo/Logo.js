import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import * as styles from './style.module.scss'

const Logo = () => {
  return (
    <AniLink
      fade
      to="/"
      className={`${styles.logo} serif pr-10 uppercase font-semibold`}
    >
      Rossi
    </AniLink>
  )
}

export default Logo
