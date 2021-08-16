import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import * as styles from './style.module.scss'

const Button = props => {
  return (
    <AniLink
      to={props.url}
      transition={props.transition}
      className={`
      ${props.color == 'black' ? styles.black : styles.white}
      ${props.size == 'large' ? styles.large : styles.medium}
      ${props.classes}
      hover:opacity-80 
      transition-opacity
      duration-500
      ease-in-out
    `}
    >
      {props.children}
    </AniLink>
  )
}

export default Button
