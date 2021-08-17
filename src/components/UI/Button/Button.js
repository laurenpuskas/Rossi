import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import * as styles from './style.module.scss'

const Button = (props) => {
  if (props.type === 'submit') {
    return <button type="submit">{props.label}</button>
  } else {
    return (
      <AniLink
        to={props.href}
        transition={props.transition}
        className={`
          ${props.size == 'large' ? styles.large : styles.medium}
          ${props.classes}
          bg-opacity-100
          hover:bg-opacity-80 
          transition-all
          duration-500
          ease-in-out
          ${
            props.open
              ? 'bg-dark text-white'
              : props.color == 'black'
              ? 'bg-dark text-white'
              : 'bg-white text-dark'
          }
        `}
      >
        {props.children}
      </AniLink>
    )
  }
}

export default Button
