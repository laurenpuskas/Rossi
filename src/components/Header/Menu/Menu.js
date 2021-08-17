import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { bool } from 'prop-types'

import links from '../../../constants/links'
import * as styles from './style.module.scss'

const Menu = (props) => {
  return (
    <ul className={props.classes + ' ' + styles.links}>
      {links.map((link) => {
        return (
          <li
            key={link.id}
            className={
              props.open
                ? 'opacity-1 ' +
                  props.liClasses
                : 'opacity-0 ' +
                  props.liClasses 
            } 
          >
            <AniLink to={link.path} fade className={props.linkClasses}>
              {link.name}
            </AniLink>
          </li>
        )
      })}
    </ul>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu
